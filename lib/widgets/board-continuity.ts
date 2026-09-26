/**
 * P4 — the same board twice is one board.
 *
 * Three consecutive segments teaching from one plate used to produce three
 * board events, and three board events produce three MOUNTS: the plate is
 * torn down and redrawn between sentences that are about the same picture.
 * On a figure that is the whole point of the segment — a labelled plate, a
 * field-line configuration held across an explanation — the student sees a
 * flicker exactly where they are being asked to look.
 *
 * What SHOULD change across those three segments is the reveal: the active
 * label group, or the cue. That is an animation of one figure, not three
 * figures.
 *
 * So a board event is reduced to a SIGNATURE of everything that decides which
 * picture it is, deliberately EXCLUDING the things that decide what is
 * highlighted on it. Consecutive events with equal signatures are the same
 * board; the later ones carry only their reveal.
 *
 * This file is pure and has no React in it, because the rule is the thing
 * under test and a rule tangled into a component cannot be tested without a
 * class, a socket and a plan.
 */

/**
 * The fields that change the REVEAL, never the picture.
 *
 * Exported for the completeness test only — nothing else reads it. A hand-kept
 * set was audited against the registry and came back SEVEN KEYS SHORT, all of
 * them `animatable`, which is the half where a miss costs most: a key absent
 * from here changes `boardSignature`, which changes the row key
 * (`boardRowKey`), which unmounts the widget. `useCueTrack`'s motion pool is
 * `useSharedValue(0)` reseeded from the new `params`, so a remount does not
 * merely flicker — it destroys the value the tween would have travelled FROM,
 * and the animation the param was declared animatable for cannot play at all.
 * `molecule_struct` has exactly one animatable param and it was one of the
 * seven, so every board event that moved its marker tore down the molecule.
 *
 * A reveal need not be animatable: `highlight` and `highlight_step` snap and
 * still belong here. `animatable` is therefore the heuristic, not the rule —
 * and conic_plot is where the heuristic breaks; see the exclusion note below.
 */
export const REVEAL_KEYS: ReadonlySet<string> = new Set([
  'active_group',   // labelled_figure: which label group is lit
  'lang',           // labelled_figure: which script the pills are in
  'highlight_row',  // data_table_trend
  'highlight',      // comparison_table
  'active_node',    // process_flow
  'highlight_step', // reaction_scheme
  'probe_rel',      // lcr_resonance
  'step_progress',  // reaction_scheme
  't_frac',         // circuit_network
  'highlight_site',   // molecule_struct: moves a marker ring between sites of one molecule
  'bridge_delta',     // circuit_network: galvanometer needle angle, pivoting in place
  // xy_plot's three are safe for one shared reason: `planFrame` reads none of
  // them, so the plot box is provably still while any of them moves.
  'shade_to',         // xy_plot: sweeps the shaded region's far edge
  'tangent_at',       // xy_plot: slides the point of tangency along the curve
  'secant_to',        // xy_plot: slides B toward A along the same curve
  'r_ohm',            // lcr_resonance: sharpens the same peak; w0 does not move
  'launch_angle_deg', // projectile_motion: metresToPx ignores angle, so the axes hold
  // NOT conic_plot's `a`, `b`, `line_c` or `cx`, though all four are
  // animatable: they ARE the conic. An ellipse with different semi-axes is a
  // different picture, so collapsing two such events would leave the first
  // event's curve on the board carrying the second's readout — an area and an
  // eccentricity for a shape nobody drew. The derived completeness test holds
  // this exclusion open explicitly rather than letting it look like an
  // oversight, because `animatable` is otherwise the whole heuristic.
]);

export interface ContinuityEvent {
  seq: number;
  type?: string;
  tier?: string;
  svg?: string;
  illustration_slug?: string;
  payload?: { widget?: string; version?: number; kind?: string;
              params?: Record<string, unknown>; steps?: unknown[] };
}

/** Stable JSON: object keys sorted, so `{a,b}` and `{b,a}` are one string. */
function stable(v: unknown): string {
  if (v === null || typeof v !== 'object') return JSON.stringify(v) ?? 'null';
  if (Array.isArray(v)) return `[${v.map(stable).join(',')}]`;
  const o = v as Record<string, unknown>;
  return `{${Object.keys(o).sort().map((k) => `${JSON.stringify(k)}:${stable(o[k])}`).join(',')}}`;
}

/**
 * What makes this board THIS board.
 *
 * Returns null for an event that is not a picture — those are never
 * collapsed, because two identical lines of text are two lines of text.
 */
export function boardSignature(e: ContinuityEvent): string | null {
  if (e.type && e.type !== 'diagram') return null;
  if (e.payload) {
    const p = e.payload;
    if (p.kind === 'board_sequence') {
      // A sequence's identity is its steps. It carries its own reveal (the
      // step index), which is exactly the case this rule exists for.
      return `seq:${stable(p.steps ?? [])}`;
    }
    const params = { ...(p.params ?? {}) };
    for (const k of Object.keys(params)) {
      if (REVEAL_KEYS.has(k)) delete params[k];
    }
    return `w:${p.widget}@${p.version ?? 1}:${stable(params)}`;
  }
  if (e.illustration_slug) return `ill:${e.illustration_slug}`;
  if (e.svg) return `svg:${e.svg.length}:${e.svg.slice(0, 200)}`;
  return null;
}

/** The reveal half — what MAY change while the board stays put. */
export function revealOf(e: ContinuityEvent): Record<string, unknown> {
  const params = e.payload?.params ?? {};
  const out: Record<string, unknown> = {};
  for (const k of Object.keys(params)) {
    if (REVEAL_KEYS.has(k)) out[k] = params[k];
  }
  return out;
}

export interface CollapsedBoard {
  /** The event that DRAWS — the first of its run. */
  readonly event: ContinuityEvent;
  /** Its signature, and the React key that must stay stable across the run. */
  readonly signature: string;
  /** Every reveal in the run, in order. `[0]` belongs to the draw itself. */
  readonly reveals: readonly Record<string, unknown>[];
  /** The `seq` of each event in the run, for the cue track. */
  readonly seqs: readonly number[];
}

/**
 * Collapse consecutive identical boards into one draw plus its reveals.
 *
 * Only CONSECUTIVE runs collapse. A plate, then a graph, then the same plate
 * again is two draws of that plate — the student looked away in between, and
 * redrawing is honest there.
 */
export function collapseBoards(events: readonly ContinuityEvent[]): CollapsedBoard[] {
  const out: CollapsedBoard[] = [];
  for (const e of events) {
    const sig = boardSignature(e);
    if (sig === null) continue;
    const last = out[out.length - 1];
    if (last && last.signature === sig) {
      (last.reveals as Record<string, unknown>[]).push(revealOf(e));
      (last.seqs as number[]).push(e.seq);
      continue;
    }
    out.push({ event: e, signature: sig, reveals: [revealOf(e)], seqs: [e.seq] });
  }
  return out;
}

/**
 * How many times the board is actually MOUNTED for a run of events.
 *
 * The number the P4 fixture asserts: three segments on one plate is one draw.
 */
export function drawCount(events: readonly ContinuityEvent[]): number {
  return collapseBoards(events).length;
}


/**
 * The board list as it should RENDER: one row per run, carrying the latest
 * reveal.
 *
 * `collapseBoards` answers "how many boards are there"; this answers "what
 * goes on screen". A diagram that repeats the previous diagram is DROPPED
 * from the list and its reveal is merged into the row that is already there,
 * so the plate stays where it first appeared and its label group changes
 * under the narration instead of a second plate appearing below the first.
 *
 * NON-DIAGRAM EVENTS ARE TRANSPARENT. Three segments about one plate are not
 * three adjacent diagram events — there are board lines between them — and a
 * rule that only collapsed literally-adjacent events would never fire in a
 * real class. Text passes through untouched and does not break a run.
 */
export function applyContinuity<T extends ContinuityEvent>(
  events: readonly T[],
): T[] {
  const out: T[] = [];
  let lastSig: string | null = null;
  let lastIdx = -1;
  for (const e of events) {
    const sig = boardSignature(e);
    if (sig === null) {          // text, heading, formula — passes through
      out.push(e);
      continue;
    }
    if (sig === lastSig && lastIdx >= 0) {
      // Same picture: merge the reveal into the row already on the board.
      const prev = out[lastIdx];
      out[lastIdx] = {
        ...prev,
        payload: prev.payload
          ? { ...prev.payload,
              params: { ...(prev.payload.params ?? {}), ...revealOf(e) } }
          : prev.payload,
      } as T;
      continue;
    }
    lastSig = sig;
    lastIdx = out.length;
    out.push(e);
  }
  return out;
}

/**
 * The React key for a board row.
 *
 * Signature-based for a picture, so the component instance SURVIVES a reveal
 * change and animates instead of remounting. `seq`-based for everything else,
 * which is what the list has always used.
 */
export function boardRowKey(e: ContinuityEvent, index: number): string {
  const sig = boardSignature(e);
  return sig === null ? `${e.seq}-${index}` : `board-${sig}`;
}
