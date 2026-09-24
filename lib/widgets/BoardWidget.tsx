import React, { useCallback, useEffect, useMemo, useSyncExternalStore } from 'react';
import { Text, View } from 'react-native';
import { parse as parseSvgXml, SvgXml } from 'react-native-svg';

import { isBoardSequence, stepAt, type BoardStep } from './board-sequence';
import { validateSequence } from './board-sequence-validate';

import { labelledFigure } from './labelled-figure';
import type { FigureResolver } from './labelled-figure/figure-resolver';
import { lookup } from './registry';
import { useCueTrack } from './use-cue-track';
import type {
  ResolutionTier,
  WidgetModule,
  WidgetPayload,
  WidgetServices,
  WidgetTheme,
} from './types';

export interface BoardEvent {
  seq: number;
  /** Tier 1 and 2 carry a payload. Tier 3 carries only `svg`. */
  payload?: WidgetPayload;
  /** Legacy / fallback path — the inline SVG string the board already renders. */
  svg?: string;
  /**
   * P3. The concept's bound plate, if it has one, sent ALONGSIDE a widget
   * payload rather than instead of it. The server picks one slot per turn, so
   * this is normally absent; it is here for the case the server could not
   * foresee — a build that cannot draw the widget the server chose.
   */
  illustration_slug?: string;
  tier: ResolutionTier;
}

export interface BoardWidgetProps {
  event: BoardEvent;
  /**
   * The highest board-event `seq` revealed so far in the turn — i.e. how far
   * the live board has gotten, in the server's own reveal order. This IS the
   * clock a live session has; there is no `player.currentTime` to read (see
   * `Cue.seq` in ./types for why). In `app/live-classroom.tsx` this is simply
   * the `seq` of the last item in `board`.
   */
  activeSeq: number | null;
  width: number;
  height: number;
  theme: WidgetTheme;
  /** Injected capabilities; see WidgetServices. */
  services: WidgetServices;
  /**
   * Cache-only lookup from `asset_slug` to a figure record, for the
   * illustration tier. Omitted means "this host has no asset store", and an
   * illustration board event then renders nothing and logs a gap — which is
   * the correct behaviour, not a degraded one.
   *
   * `FigureResolver.get` is SYNCHRONOUS by contract; there is no await on
   * this path and no way to introduce one. See ./labelled-figure/figure-resolver.
   */
  figures?: FigureResolver;
  /**
   * P3. The chapter's own SVG, the last thing between an undrawable payload
   * and an empty board. Supplied by the host from the plan, not per turn.
   */
  chapterFallbackSvg?: string;
  onGap?: (reason: string, detail: unknown) => void;
  /** The active cue's caption, already {{token}}-interpolated — render it in
   *  the board's own caption strip, not a new surface. Called with `null`
   *  when no cue is active, so the caller can fall back to the narration
   *  caption. */
  onCaption?: (caption: string | null) => void;
}

/**
 * Whether `SvgXml` will actually draw this string, asked BEFORE it is handed one.
 *
 * `SvgXml` (react-native-svg 15.12.1, `src/xml.tsx`) wraps its parse in a
 * try/catch: on a throw it calls `onError` — by default a bare
 * `console.error` — and returns `fallback ?? null`, and it renders nothing at
 * all when the parse returns null, which is what a string with no root
 * element does. Either way the board is BLANK and the rung below it never
 * runs, because the child has already returned by the time the parent could
 * react. `fallback` can put an element in that hole; it cannot make the next
 * rung of the chain render, which is the only thing that helps here.
 *
 * Measured against this version's own parser: `''`, `'not svg at all'`,
 * `'<svg><g></svg>'` and `'<svg><rect</svg>'` all throw — the second with a
 * TypeError from inside the parser rather than its own error path, which no
 * amount of shape-checking the string in advance would have predicted. So the
 * check is the library's OWN exported `parse`, the same function `SvgXml` will
 * call on the same string; the two cannot disagree about a malformed rung.
 *
 * Cost is one extra parse per fallback render, on a path that by construction
 * only runs when the board is already in trouble.
 */
function svgWillDraw(xml: string): boolean {
  try {
    return parseSvgXml(xml) !== null;
  } catch {
    return false;
  }
}

/**
 * Single entry point for every diagram on the board.
 *
 * Resolution order, and the only three outcomes:
 *   precomputed  payload baked into the lesson at content-build time  (0 ms)
 *   live         payload returned by the doubt endpoint               (~1 s)
 *   fallback_svg no registry match — render the generated SVG string, and log it
 *
 * A tier-3 render is not a failure, it is a measurement. `onGap` feeds the queue
 * that decides which widget gets built next. Track its rate; drive it toward zero
 * on the core syllabus.
 */
export function BoardWidget({
  event,
  activeSeq,
  width,
  height,
  theme,
  services,
  figures,
  chapterFallbackSvg,
  onGap,
  onCaption,
}: BoardWidgetProps) {
  /*
   * THE FIGURE RECORD IS EXTERNAL STATE, so it is read as external state.
   *
   * `figures` is a cache shared by every board block; a record landing in it is
   * an event in that cache, not in this component. A re-render counter owned by
   * this component only helps the instance that owns it — a re-keyed board
   * list, two blocks showing one figure, or a block that unmounts between the
   * fetch and its landing each lose the update in a different way, and the
   * first version here had exactly that shape.
   *
   * The slug is read before any hook and never conditionally, because hooks
   * cannot be. A non-figure payload subscribes to nothing and snapshots null.
   */
  const figureSlug =
    event.payload?.widget === labelledFigure.id &&
    typeof (event.payload.params as Record<string, unknown> | undefined)?.asset_slug === 'string'
      ? ((event.payload.params as Record<string, unknown>).asset_slug as string)
      : null;

  const subscribeFigure = useCallback(
    (onChange: () => void) =>
      figureSlug && figures ? figures.subscribe(figureSlug, onChange) : () => {},
    [figures, figureSlug]
  );
  // Returns the SAME object identity while the cache entry is unchanged — it is
  // a Map read — so useSyncExternalStore does not loop.
  const snapshotFigure = useCallback(
    () => (figureSlug && figures ? figures.get(figureSlug) : null),
    [figures, figureSlug]
  );
  const figureRecord = useSyncExternalStore(subscribeFigure, snapshotFigure, snapshotFigure);

  const resolved = useMemo((): {
    mod?: WidgetModule<object>; params?: object; steps?: readonly BoardStep[];
  } | null => {
    const { payload } = event;
    if (!payload) return null;

    /*
     * TIER 1, SEQUENCE. Checked before anything else because a sequence is a
     * frame around payloads, not a payload: its `widget` field names no
     * widget and every dispatch below would miss it.
     */
    if (isBoardSequence(payload)) {
      const v = validateSequence(payload);
      if (!v.ok) {
        onGap?.('sequence_refused', v.errors.join('; '));
        return null;
      }
      return { steps: v.steps };
    }

    /*
     * TIER: illustration.
     *
     * The payload names an ASSET, not a drawing — `{ asset_slug, lang,
     * active_group }` — because there is nothing here for a widget to
     * compute. The art was sourced and the label layer was authored; the
     * client's whole job is to find the record and draw the labels over it.
     *
     * Resolution is a synchronous cache read, deliberately. CLAUDE.md §3:
     * "A live class must render with the network off." A miss renders nothing
     * and logs a gap; it never awaits, never shows a spinner on the board,
     * and never blocks the frame. Resolve before the class (prefetch), select
     * during it (get) — §3a's "nothing is created during a live session".
     *
     * `labelled_figure` is dispatched here rather than through `lookup()`
     * because it is not a registry widget: the registry is the closed set of
     * things the MODEL may name and fill parameters for, and the model does
     * not author label layers — a subject author does, once, offline. Note
     * that docs/label-layer.md §2 proposes registering it like any other
     * widget; that is the deviation, and this is the reason for it.
     */
    if (payload.widget === labelledFigure.id) {
      const raw = payload.params as Record<string, unknown>;
      const slug = typeof raw.asset_slug === 'string' ? raw.asset_slug : null;
      if (!slug) {
        onGap?.('invalid_params', { widget: payload.widget, errors: ['asset_slug is required'] });
        return null;
      }
      const record = figureRecord;
      if (!record) {
        // STILL A GAP, STILL SYNCHRONOUS, AND NOW ALSO A REQUEST.
        //
        // `get()` remains cache-only: this frame renders nothing and never
        // awaits, so the §3 invariant is untouched. What changed is that the
        // miss now ASKS for the slug in the background, and the next render
        // finds it.
        //
        // The old behaviour was a permanent gap for every live figure, and the
        // reason is structural rather than accidental: the classroom prefetches
        // `figures.cached()` — the slugs already in the cache, which on a fresh
        // mount is none — while slot 3 picks the asset SERVER-SIDE during the
        // turn. So the client could only ever draw a figure it had somehow
        // already drawn. Measured: 113 plates ingested, ILLUSTRATION SERVED in
        // the log, `figure_not_cached` on the board, every time.
        //
        // Fetching once per slug is the smallest fix that keeps the invariant.
        // The alternative — the session announcing its chapter's slugs at
        // connect so they can be prefetched before the class — is better and
        // is a protocol change; this does not preclude it, and prefetch is
        // idempotent, so both can be true at once.
        onGap?.('figure_not_cached', { asset_slug: slug });
        // Fire-and-forget. The subscription above is what redraws when it
        // lands, so nothing here awaits and nothing counts renders.
        void figures?.prefetch([slug]);
        return null;
      }
      const checked = labelledFigure.validate({
        ...record,
        lang: raw.lang,
        active_group: raw.active_group,
      });
      if (!checked.ok) {
        onGap?.('invalid_params', { widget: payload.widget, errors: checked.errors });
        return null;
      }
      return {
        mod: labelledFigure as unknown as import('./types').WidgetModule<object>,
        params: checked.params as object,
      };
    }

    const mod = lookup(payload.widget, payload.version);
    if (!mod) {
      onGap?.('unknown_widget', { widget: payload.widget, version: payload.version });
      return null;
    }
    const checked = mod.validate(payload.params);
    if (!checked.ok) {
      onGap?.('invalid_params', { widget: payload.widget, errors: checked.errors });
      return null;
    }
    return { mod, params: checked.params };
  }, [event, figures, onGap, figureRecord]);

  /*
   * WHO A GAP IS ABOUT, and it has to be answerable for every payload shape.
   *
   * Every gap below this point used to be attributed to
   * `event.payload?.widget`. A SEQUENCE payload has no `widget` field at all —
   * it carries `kind`/`steps`, see ./board-sequence — so the terminal gap for
   * a refused sequence arrived as `{ widget: undefined }`: a feed row that
   * cannot be counted, grouped or traced back to a board, on the one payload
   * shape whose failure looks like a "2/3" strip over blank paper. `seq` and
   * `tier` are on every board event whatever its payload is, so they are on
   * every gap from here down.
   */
  const subject: Record<string, unknown> = event.payload
    ? isBoardSequence(event.payload)
      ? { widget: 'board_sequence', seq: event.seq, tier: event.tier }
      : {
          widget: event.payload.widget, version: event.payload.version,
          seq: event.seq, tier: event.tier,
        }
    : { widget: '(no payload)', seq: event.seq, tier: event.tier };

  /**
   * One rung of the chain that is an SVG STRING, drawn only if it will draw.
   *
   * Answers null — and logs `svg_parse_failed` — for a string that cannot
   * parse, so the caller carries on DOWN the chain instead of handing the
   * student blank paper. That is the part `components/board-diagram.tsx`'s
   * `fallback`/`onError` pair cannot do: a fallback ELEMENT fills the hole,
   * it does not let the next rung run.
   *
   * `onError` is passed anyway, so a throw is a gap in the feed rather than
   * the library's default `console.error` that nobody reads. `fallback` is
   * NOT, and deliberately, though board-diagram passes one: `SvgXml` spreads
   * its own props onto the `Svg` element it renders (`<SvgAst override={override
   * || props} />`), so a fallback ELEMENT lands in the rendered tree's props,
   * and a React element there is a circular structure that `JSON.stringify`
   * throws on. Every assertion this repo makes about a board goes through that
   * stringify — `assertGolden` and `scaffoldingDiffs` in
   * `__tests__/test-utils.ts` — so passing one turned nine of the tests below
   * into `Converting circular structure to JSON`. It guards a branch the
   * pre-check has already made unreachable; the tree is worth more.
   */
  const svgRung = (
    xml: string | undefined,
    boxH: number,
    rung: string,
    drew: string,
    about: Record<string, unknown>
  ): React.ReactElement | null => {
    if (!xml) return null;
    if (!svgWillDraw(xml)) {
      onGap?.('svg_parse_failed', { ...about, rung });
      return null;
    }
    onGap?.(drew, { ...about, rung });
    return (
      <SvgXml
        xml={xml}
        width={width}
        height={boxH}
        onError={(err) => onGap?.('svg_parse_failed', { ...about, rung, error: String(err) })}
      />
    );
  };

  /*
   * P3 — THE CHAIN, AND IT IS EXHAUSTIVE ON PURPOSE.
   *
   * This used to be two lines: draw `event.svg` if there is one, else
   * return null. Null is a BLANK BOARD, and on 2026-09-23 that is exactly
   * what an Ecosystem turn gave the 19 Sep build — eleven times, because a
   * slot-1 board event carries a payload and never an svg, so the `if`
   * never fired and the `return null` always did.
   *
   * P1 fixes the cause server-side: a widget slot is not served to a client
   * that cannot draw it. This is the belt and braces for every build P1
   * cannot reach — one already installed, one talking to an older API, one
   * whose manifest did not arrive.
   *
   * Each rung logs its OWN gap, on the way past AND on the way in. A board
   * that fell two rungs and a board that fell none look identical on screen
   * and must not look identical in the feed, because the feed is what says
   * whether P1 is working — and a rung that DREW logged nothing at all until
   * the review of 2026-09-23, so "drew its own svg" and "drew the widget the
   * server chose" were the same feed entry: none.
   *
   * IT IS A FUNCTION because there are three ways in, not one. An
   * unresolvable payload was the only one wired up; a SEQUENCE whose visible
   * step cannot draw, and a resolution that named no module, both sat BELOW
   * this block with a `return null` of their own. All three are the same kind
   * of nothing and degrade the same way now.
   *
   * `boxH` rather than `height` because a sequence keeps its strip: the
   * student must still see which case this is and that another is coming.
   */
  const chain = (boxH: number, about: Record<string, unknown>): React.ReactElement | null => {
    const fromEvent = svgRung(event.svg, boxH, 'event.svg', 'fell_back_to_event_svg', about);
    if (fromEvent) return fromEvent;

    if (event.illustration_slug) {
      const rec = figures?.get(event.illustration_slug);
      if (rec) {
        const checked = labelledFigure.validate(rec);
        if (checked.ok) {
          onGap?.('fell_back_to_illustration', { ...about, slug: event.illustration_slug });
          return (
            <WidgetHost
              key={`ill-${event.illustration_slug}`}
              mod={labelledFigure as unknown as WidgetModule<object>}
              params={checked.params as object} cues={undefined}
              activeSeq={activeSeq} width={width} height={boxH}
              theme={theme} services={services} onCaption={onCaption} />
          );
        }
        // A plate that IS in the cache and still cannot be drawn is a content
        // defect, not a cold cache, and it was the one rung-2 outcome nothing
        // logged: a board that fell past a broken plate and a board that never
        // had a plate arrived in the feed identically, so the repair queue
        // could not tell "re-author this label set" from "bind a plate".
        onGap?.('illustration_refused',
                { ...about, slug: event.illustration_slug, errors: checked.errors });
      } else {
        // Cache-only, like every other read of this resolver. NOTE that
        // nothing subscribes to THIS slug — the `useSyncExternalStore` above
        // is keyed to the payload's own `asset_slug`, which on this path is a
        // different slug or none — so the landing does not itself redraw;
        // the next board event's re-render is what picks it up. Logged either
        // way, because an uncached plate and a refused one need different
        // fixes.
        onGap?.('illustration_not_cached', { ...about, slug: event.illustration_slug });
        void figures?.prefetch([event.illustration_slug]);
      }
    }

    const fromChapter = svgRung(
      chapterFallbackSvg, boxH, 'chapterFallbackSvg', 'fell_back_to_chapter_svg', about);
    if (fromChapter) return fromChapter;

    /*
     * Nothing left — but PENDING is not MISSING.
     *
     * A labelled-figure payload whose record has not landed yet has already
     * logged `figure_not_cached` and asked for the slug; the subscription
     * will redraw this instance when it arrives. Calling that a missing
     * fallback would double-log a transient state and, worse, would put a
     * terminal-sounding gap in the feed for a board that is about to appear.
     * The feed is how P1's effect is measured, so it has to distinguish "this
     * will resolve" from "there is nothing here".
     */
    if (event.payload?.widget === labelledFigure.id && !figureRecord) {
      return null;
    }
    // A DATA gap, not a dispatch one — a payload this build cannot draw and
    // no picture of any kind behind it — logged under its own name so it can
    // be counted and fixed at the source rather than disappearing into
    // `unknown_widget`.
    onGap?.('no_fallback_available', {
      ...about,
      hadIllustration: Boolean(event.illustration_slug),
    });
    return null;
  };

  if (!resolved) return chain(height, subject);

  /*
   * A SEQUENCE: 1-3 boards on this segment, revealed in turn. `resolved.steps`
   * is set only when the payload is a board_sequence; everything below is the
   * ordinary single-board path and is untouched by this, which is the point —
   * one step must behave exactly as no sequence at all.
   */
  if (resolved.steps) {
    const at = stepAt(resolved.steps, activeSeq);
    const step = resolved.steps[at];
    /*
     * WHICH CASE OF HOW MANY, on every gap this branch logs. "The sequence
     * could not draw" and "the second of its three cases could not draw" send
     * the repair to different places, and a step whose widget `validateSequence`
     * rewrote to `''` to keep it for its SVG cannot name itself any more.
     */
    const about: Record<string, unknown> = {
      ...subject,
      step: `${at + 1}/${resolved.steps.length}`,
      stepWidget: step?.payload.widget || '(rewritten to svg)',
    };
    // `stepAt` answers -1 for an empty list, and `validateSequence` refuses a
    // sequence with nothing left, so this is unreachable today. The guard is
    // here because the alternative is a TypeError on `step.payload` mid-class,
    // which is worse than a blank board and much worse than the chain.
    if (!step) return chain(height, about);
    const mod = step.payload.widget
      ? lookup(step.payload.widget, step.payload.version)
      : null;
    const strip = (
      <SequenceStrip
        at={at}
        total={resolved.steps.length}
        caption={step.caption}
        width={width}
        theme={theme}
      />
    );
    /*
     * THIS STEP FELL TO TIER 3 — or past it. `validateSequence` keeps a step
     * whose widget this build lacks by rewriting it to `widget: ''` for the
     * sake of its `fallback_svg`, so this branch IS that step.
     *
     * It used to return the strip and, whenever that SVG did not parse,
     * nothing under it: a "2/3" over blank paper and no gap of any kind, on
     * the one path in this component that never consulted `event.svg`,
     * `illustration_slug` or `chapterFallbackSvg` — the strip is what makes
     * that blank look deliberate. The `!step.fallback_svg` half is a different
     * story and is not reachable from a validated sequence: a step with no art
     * is DROPPED by `validateSequence`'s degrade rule, not kept. The strip
     * stays either way — the student must still see which case this is and
     * that another is coming — but what sits under it is now the same chain as
     * everywhere else.
     */
    if (!mod) {
      const drawn =
        svgRung(step.fallback_svg, height - STRIP_H, 'step.fallback_svg',
                'step_fell_back_to_svg', about)
        ?? chain(height - STRIP_H, about);
      return (
        <View style={{ width, height }}>
          {drawn}
          {strip}
        </View>
      );
    }
    return (
      <View style={{ width, height }}>
        <WidgetHost
          key={`${mod.id}@${mod.version}#${at}`}
          mod={mod}
          params={step.payload.params as object}
          cues={step.payload.cues}
          activeSeq={activeSeq}
          width={width}
          height={height - STRIP_H}
          theme={theme}
          services={services}
          onCaption={onCaption}
        />
        {strip}
      </View>
    );
  }

  /*
   * A RESOLUTION THAT NAMED NO MODULE. This was a bare `return null` sitting
   * BELOW the chain, so the one thing that reaches it got exactly the blank
   * board P3 exists to remove: a widget whose `validate()` answers ok without
   * `params` — a validator that forgot its own happy path — drew nothing,
   * logged nothing, with the chapter SVG sitting unused in props one line
   * above. Unreachable through today's registry is not the same as
   * unreachable, and a silent blank is the failure mode this whole file is
   * about.
   */
  if (!resolved.mod || !resolved.params) {
    onGap?.('resolved_without_module', {
      ...subject, hadMod: Boolean(resolved.mod), hadParams: Boolean(resolved.params),
    });
    return chain(height, subject);
  }
  return (
    <WidgetHost
      key={`${resolved.mod.id}@${resolved.mod.version}`}
      mod={resolved.mod}
      params={resolved.params}
      cues={event.payload?.cues}
      activeSeq={activeSeq}
      width={width}
      height={height}
      theme={theme}
      services={services}
      onCaption={onCaption}
    />
  );
}

/** Height the n/N strip takes out of the board box. One line of chrome. */
const STRIP_H = 22;

/**
 * "2/3" and the step's caption.
 *
 * The counter is not decoration: a student who cannot see that a second case
 * is coming reads the first one as the whole answer, which is the exact
 * failure the sequence exists to fix. It is rendered even at 1/1, because a
 * strip that appears and disappears between segments is itself a signal, and
 * a misleading one.
 */
function SequenceStrip({ at, total, caption, width, theme }: {
  at: number; total: number; caption: string; width: number; theme: WidgetTheme;
}) {
  return (
    <View
      style={{
        width, height: STRIP_H, flexDirection: 'row', alignItems: 'center',
        gap: 8, paddingHorizontal: 4,
      }}
    >
      <Text style={{ fontSize: 11, fontWeight: '700', color: theme.accent,
                     fontFamily: theme.fontFamily }}>
        {`${at + 1}/${total}`}
      </Text>
      <Text
        numberOfLines={1}
        style={{ flex: 1, fontSize: 11, color: theme.inkMuted,
                 fontFamily: theme.fontFamily }}
      >
        {caption}
      </Text>
    </View>
  );
}

/*
 * Separate component, keyed by widget id, so that switching widgets remounts
 * rather than reordering hooks — `useCueTrack` allocates a fixed pool and must
 * not straddle two different widget modules.
 */
interface HostProps {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  mod: import('./types').WidgetModule<any>;
  params: object;
  cues: readonly import('./types').Cue[] | undefined;
  activeSeq: number | null;
  width: number;
  height: number;
  theme: WidgetTheme;
  services: WidgetServices;
  onCaption?: (caption: string | null) => void;
}

function WidgetHost({
  mod,
  params,
  cues,
  activeSeq,
  width,
  height,
  theme,
  services,
  onCaption,
}: HostProps) {
  const { params: live, motion, caption } = useCueTrack(mod, params, cues, activeSeq);

  // A plain effect, not inline in render: onCaption is a side effect on a
  // sibling (the caption strip lives outside this widget's own subtree), and
  // calling it during render would run before commit and could fire twice
  // under strict-mode double-invoke.
  useEffect(() => {
    onCaption?.(caption);
    return () => onCaption?.(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [caption]);

  const Component = mod.Component;
  return (
    <Component
      params={live}
      motion={motion}
      width={width}
      height={height}
      theme={theme}
      services={services}
    />
  );
}
