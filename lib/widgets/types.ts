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
  /**
   * The `seq` of the board event this cue applies at — a sentence in the SAME
   * turn as the widget, later than it, whose narration is describing the
   * change this cue makes.
   *
   * NOT a timestamp. Live sessions have no clock to anchor one to: the server
   * never sends an `at` in seconds, only board events in reveal order, each
   * paired with the audio_chunk that reveals it (see
   * lib/drona-voice-client.ts). A cue therefore cannot fire early or late —
   * it fires when its named sentence is spoken, by construction, which is
   * strictly more robust than a written-in-advance second count that TTS
   * pacing could contradict. See docs/cue-timing.md for the pre-recorded
   * case this was built to avoid; live sessions do not have that problem.
   *
   * Selection: the active cue is the one with the greatest `seq` that is
   * `<= activeSeq` (the highest board-event seq revealed so far in the
   * turn) — mirrors the old `at <= t` rule, just discrete instead of
   * continuous.
   */
  seq: number;
  /** Partial params applied at `seq`. Numeric keys in `animatable` are tweened. */
  patch: Readonly<Record<string, number | string | boolean>>;
  /** Tween duration in ms. 0 or omitted = snap. */
  tween?: number;
  /**
   * Caption shown on the board while this cue is active. May reference a
   * widget's derived quantities as `{{token}}` — see `WidgetModule.derived`.
   * MUST NEVER be sent as speech text: this is a display-only field, and a
   * literal `{{range}}` spoken by TTS would read the braces aloud. The
   * server keeps this out of the narration channel; the client only ever
   * renders the interpolated result, never the raw template.
   */
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
   * Named numeric quantities a caption may reference by {{token}}, computed from
   * `params` via `computeDerived` — never typed into a caption directly. This is
   * what makes "the range grows" and "the range shrinks" structurally incapable
   * of disagreeing with the number on the board: there is only one number, and
   * both the readout and the caption read it from here.
   *
   * See docs/narration-diagram-alignment.md Rule 2. Every key here must appear
   * in `computeDerived`'s output, and vice versa — `derived` self-consistency is
   * asserted in lib/widgets/__tests__, not just documented.
   */
  derived: readonly string[];
  /** Computes the values named in `derived`, from the same params the widget
   *  renders from — never from `motion`, which can be mid-tween. */
  computeDerived(params: P): Record<string, number>;
  /**
   * English words that name each derived quantity, for the direction lint (Rule
   * 3): "the range grows" needs to know "range" means `derived` key `range`.
   * A direction word with no entry it can match is a build-time WARNING that
   * prints the caption, never a silent pass — an alias map that quietly checks
   * nothing is worse than no lint, the same failure mode
   * docs/render-verification.md documents for the text-prop reader.
   */
  derivedAliases: Readonly<Record<string, readonly string[]>>;
  /**
   * Total, throwing-free validation. Clamps in-range values, rejects the rest.
   * This is the only place a malformed model payload can be stopped.
   */
  validate(raw: unknown): ValidationResult<P>;
  Component: ComponentType<WidgetRenderProps<P>>;
}

/** How a board diagram was resolved. Surfaced in telemetry; tier 3 is the gap queue. */
export type ResolutionTier = 'precomputed' | 'live' | 'fallback_svg';
