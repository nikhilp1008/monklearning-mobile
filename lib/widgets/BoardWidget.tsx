import React, { useMemo } from 'react';
import { SvgXml } from 'react-native-svg';
import type { AudioPlayer } from 'expo-audio';

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
  player: AudioPlayer | null;
  width: number;
  height: number;
  theme: WidgetTheme;
  /** Injected capabilities; see WidgetServices. */
  services: WidgetServices;
  onGap?: (reason: string, detail: unknown) => void;
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
  player,
  width,
  height,
  theme,
  services,
  onGap,
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
      player={player}
      width={width}
      height={height}
      theme={theme}
      services={services}
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
  player: AudioPlayer | null;
  width: number;
  height: number;
  theme: WidgetTheme;
  services: WidgetServices;
}

function WidgetHost({
  mod,
  params,
  cues,
  player,
  width,
  height,
  theme,
  services,
}: HostProps) {
  const { params: live, motion } = useCueTrack(mod, params, cues, player);
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
