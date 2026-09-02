import React, { useEffect, useMemo } from 'react';
import { SvgXml } from 'react-native-svg';

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
  onGap,
  onCaption,
}: BoardWidgetProps) {
  const resolved = useMemo(() => {
    const { payload } = event;
    if (!payload) return null;
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
  }, [event, onGap]);

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
