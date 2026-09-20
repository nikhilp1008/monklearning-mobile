import React, { useCallback, useEffect, useMemo, useSyncExternalStore } from 'react';
import { Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';

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
  onGap?: (reason: string, detail: unknown) => void;
  /** The active cue's caption, already {{token}}-interpolated — render it in
   *  the board's own caption strip, not a new surface. Called with `null`
   *  when no cue is active, so the caller can fall back to the narration
   *  caption. */
  onCaption?: (caption: string | null) => void;
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

  if (!resolved) {
    if (event.svg) {
      return <SvgXml xml={event.svg} width={width} height={height} />;
    }
    return null;
  }

  /*
   * A SEQUENCE: 1-3 boards on this segment, revealed in turn. `resolved.steps`
   * is set only when the payload is a board_sequence; everything below is the
   * ordinary single-board path and is untouched by this, which is the point —
   * one step must behave exactly as no sequence at all.
   */
  if (resolved.steps) {
    const at = stepAt(resolved.steps, activeSeq);
    const step = resolved.steps[at];
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
    // This step fell to tier 3 — its widget could not draw it and it carried
    // an SVG. The strip stays: the student must still see which case this is
    // and that another is coming.
    if (!mod) {
      return (
        <View style={{ width, height }}>
          {step.fallback_svg
            ? <SvgXml xml={step.fallback_svg} width={width} height={height - STRIP_H} />
            : null}
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

  if (!resolved.mod || !resolved.params) return null;
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
