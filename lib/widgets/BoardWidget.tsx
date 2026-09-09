import React, { useEffect, useMemo, useState } from 'react';
import { SvgXml } from 'react-native-svg';

import { labelledFigure } from './labelled-figure';
import type { FigureResolver } from './labelled-figure/figure-resolver';
import { lookup } from './registry';
import { useCueTrack } from './use-cue-track';
import type {
  ResolutionTier,
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
  // Bumped when a background figure fetch lands, so the memo below re-runs and
  // the plate appears. Without it the fetch fills the cache and nothing looks
  // again until the next board event — which usually arrives, but "usually" is
  // not a rendering contract.
  const [figureTick, setFigureTick] = useState(0);
  const resolved = useMemo(() => {
    const { payload } = event;
    if (!payload) return null;

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
      const record = figures?.get(slug) ?? null;
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
        void figures?.prefetch([slug]).then(() => setFigureTick((n) => n + 1));
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
  }, [event, figures, onGap, figureTick]);

  if (!resolved) {
    if (event.svg) {
      return <SvgXml xml={event.svg} width={width} height={height} />;
    }
    return null;
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
