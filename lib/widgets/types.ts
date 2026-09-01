/**
 * Drona Board Widget Runtime — contract.
 *
 * A board widget is a deterministic renderer. The model never draws; it selects
 * a widget and fills its params. Everything below is what the client guarantees.
 *
 * Two channels carry parameters, deliberately:
 *   params  — authoritative, JS-thread, re-renders. Drives axes, ticks, labels.
 *   motion  — one SharedValue per animatable numeric param, UI-thread. Drives geometry.
 *
 * A widget's static scaffolding MUST be computed from `params` only, and MUST NOT
 * depend on any value that a cue tween changes mid-flight. Axis scale that jumps
 * while a curve animates is the bug this split exists to prevent.
 */
import type { SharedValue } from 'react-native-reanimated';
import type { ComponentType } from 'react';

/**
 * The module contract is open; the REGISTRY is what closes the set.
 * `RegisteredWidgetId` in registry.ts is derived from the registry object, so
 * adding an entry there widens the type automatically — no hand-edit here.
 */
export type WidgetId = string;

/** Emitted by the model, or baked into a lesson at content-build time. */
export interface WidgetPayload<P extends object = Record<string, unknown>> {
  widget: WidgetId;
  version: number;
  params: P;
  /** Optional decorations the widget may honour, e.g. ['range','apex']. */
  annotate?: readonly string[];
  /** Narration-driven parameter changes, aligned to the section's audio track. */
  cues?: readonly Cue[];
}

export interface Cue {
  /** Position on the section's audio track, in SECONDS (expo-audio units). */
  at: number;
  /** Partial params applied at `at`. Numeric keys in `animatable` are tweened. */
  patch: Readonly<Record<string, number | string | boolean>>;
  /** Tween duration in ms. 0 or omitted = snap. */
  tween?: number;
  /** Caption shown on the board while this cue is the active one. */
  caption?: string;
}

export type ValidationResult<P> =
  | { ok: true; params: P }
  | { ok: false; errors: readonly string[] };

export interface WidgetTheme {
  ink: string;
  inkMuted: string;
  rule: string;
  accent: string;
  surface: string;
  /** Must be one of the app's loaded families — 'Anek Latin' or 'Kalam'. */
  fontFamily: string;
  monoFontFamily: string;
}

/** Capabilities the host injects, so widgets stay pure and testable. */
export interface WidgetServices {
  /**
   * Resolves a structure_ref ('pubchem:5957', 'pdb:1BNA') to SDF or PDB text.
   * Cache-first and offline by contract — this must never hit the network
   * during a live lesson.
   */
  resolveStructure(ref: string): Promise<string>;
}

export interface WidgetRenderProps<P extends object> {
  /** Current target params. Changes re-render. */
  params: P;
  /** UI-thread values for keys listed in `animatable`. Always populated. */
  motion: Readonly<Record<string, SharedValue<number>>>;
  /** Landscape board box, in px. Classroom is landscape-locked. */
  width: number;
  height: number;
  theme: WidgetTheme;
  services: WidgetServices;
}

export interface WidgetModule<P extends object> {
  id: WidgetId;
  version: number;
  defaults: P;
  /**
   * Numeric params that may be tweened by a cue. Every key listed here gets a
   * SharedValue in `motion`. Keys NOT listed here snap and re-render.
   */
  animatable: readonly Extract<keyof P, string>[];
  /**
   * Total, throwing-free validation. Clamps in-range values, rejects the rest.
   * This is the only place a malformed model payload can be stopped.
   */
  validate(raw: unknown): ValidationResult<P>;
  Component: ComponentType<WidgetRenderProps<P>>;
}

/** How a board diagram was resolved. Surfaced in telemetry; tier 3 is the gap queue. */
export type ResolutionTier = 'precomputed' | 'live' | 'fallback_svg';
