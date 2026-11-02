import { splitDisplay } from '@/lib/display-math';
import { latexToText } from '@/lib/latex-text';
import { normaliseDisplayMath, type ParsedStep } from '@/lib/solution-steps';

/**
 * WHAT GOES ON WHICH LINE of a worked explanation, shared by the solution cards
 * (Snap, Practice, mock review) and the follow-up board.
 *
 * splitDisplay lifts every equation out of its sentence, which is right for
 * working and wrong for a value the question simply gave: "at σ = 20, ε = 1×10⁻⁴,
 * so E = …" came out as three separate lines and left "For a strain" alone on a
 * fourth. So a given value goes back into its sentence, and the words that open
 * an equation stay above it.
 */

export type SolutionRow = { kind: 'title' | 'text' | 'display'; raw: string; lead?: boolean };

/** A plain value from the question, not working: "ε = 1×10⁻⁴", "(ε,σ) = (1×10⁻⁴, 20 N)". */
export function isGivenValue(raw: string): boolean {
  const m = /\$([^$]+)\$/.exec(raw);
  if (!m) return false;
  const parts = m[1].split('=');
  if (parts.length !== 2) return false;
  const rhs = parts[1]
    .replace(/\\(?:text|mathrm)\{[^}]*\}(?:\^\{?-?\d+\}?)?/g, '')
    .replace(/\\[,;! ]|\s/g, '');
  return /\d/.test(rhs) && /^[-−(]?[\d.,()\-−]*(?:\\times10\^\{?-?\d+\}?)?[\d.,()\-−]*$/.test(rhs);
}

/** "so" adds nothing once the equation sits under the sentence. */
const BARE_LINK = /^(?:so|then|and)$/i;

/** An equation that opens on "=" continues the words before it. */
const opensOnEquals = (raw: string) => /^\$\s*=/.test(raw);

/**
 * Puts given values back in their sentence. The last equation of a step always
 * stays on its own line, however plain, because it is what the step lands on.
 */
function settleRows(rows: SolutionRow[]): SolutionRow[] {
  let last = -1;
  rows.forEach((r, k) => {
    if (r.kind === 'display' && !opensOnEquals(r.raw)) last = k;
  });
  const out: SolutionRow[] = [];
  let afterGiven = false;
  rows.forEach((r, k) => {
    const prev = out[out.length - 1];
    const open = prev?.kind === 'text' ? prev : null;
    if (r.kind === 'display' && (opensOnEquals(r.raw) || (k !== last && isGivenValue(r.raw)))) {
      if (open) open.raw += (afterGiven ? ', ' : ' ') + r.raw;
      else out.push({ kind: 'text', raw: r.raw });
      afterGiven = true;
      return;
    }
    if (r.kind === 'display') {
      const words = /^([^$]+?)\s*(\$.*)$/.exec(r.raw);
      if (words && open) {
        if (!BARE_LINK.test(words[1].trim())) open.raw += (afterGiven ? ', ' : ' ') + words[1];
        out.push({ kind: 'display', raw: words[2] });
      } else {
        out.push({ ...r });
      }
      afterGiven = false;
      return;
    }
    if (r.kind === 'text' && open && afterGiven && /^[a-z]/.test(r.raw)) {
      open.raw += ', ' + r.raw;
      return;
    }
    out.push({ ...r });
    afterGiven = false;
  });
  return out;
}

/** One step as rows: its title, its sentences, and its lifted equations. */
export function solutionRows(step: ParsedStep): SolutionRow[] {
  const sources: { kind: 'title' | 'text' | 'math'; raw: string }[] = [];
  if (step.title) sources.push({ kind: 'title', raw: step.titleRaw ?? step.title });
  step.lines.forEach((l) => sources.push({ kind: l.kind, raw: l.raw ?? l.text }));

  const rows: SolutionRow[] = [];
  sources.forEach((source) => {
    if (source.kind === 'math') {
      rows.push({ kind: 'display', raw: source.raw });
      return;
    }
    splitDisplay(source.raw).forEach((piece, j) => {
      if (piece.kind === 'display') rows.push({ kind: 'display', raw: piece.raw });
      // The words that introduce the equation keep their colon: it is what
      // makes "Compute displacements:" read as opening onto them.
      else if (source.kind === 'title' && j === 0)
        rows.push({ kind: 'title', raw: piece.raw.replace(/:\s*$/, '') });
      else rows.push({ kind: 'text', raw: piece.raw });
    });
  });
  const settled = settleRows(rows);
  if (settled[0]?.kind === 'text') settled[0].lead = true;
  return settled;
}

/**
 * The equations that END a step, for the foot of its card. Anything earlier
 * stays in order, so "Thus" still opens onto its own equation.
 */
export function splitFoot(rows: SolutionRow[]): { body: SolutionRow[]; foot: SolutionRow[] } {
  let cut = rows.length;
  while (cut > 0 && rows[cut - 1].kind === 'display') cut--;
  return { body: rows.slice(0, cut), foot: rows.slice(cut) };
}

export type BoardRow = {
  kind: 'text' | 'math';
  raw: string;
  /** The step's first sentence, in full ink. */
  lead?: boolean;
  /** The line the step lands on. */
  result?: boolean;
  /** A long equation, stacked at its equals signs. */
  chain?: { lhs: string; parts: string[] };
};

/**
 * "u = ½σε = ½(100)(5×10⁻⁴) = 2.5×10⁻² J m⁻³" as three lines lined up on the
 * equals sign, the way it goes up on a real board. On one line it ran out of
 * width and left the unit alone underneath.
 */
export function equationChain(raw: string): BoardRow['chain'] {
  const m = /^\$([^$]+)\$(.*)$/.exec(raw);
  if (!m || latexToText(raw).length < 26) return undefined;
  const pieces: string[] = [];
  let depth = 0;
  let at = 0;
  for (let i = 0; i < m[1].length; i++) {
    const c = m[1][i];
    if (c === '{' || c === '(') depth++;
    else if (c === '}' || c === ')') depth--;
    else if (c === '=' && depth === 0) {
      pieces.push(m[1].slice(at, i));
      at = i + 1;
    }
  }
  pieces.push(m[1].slice(at));
  if (pieces.length < 3 || !pieces[0].trim()) return undefined;
  return {
    lhs: `$${pieces[0].trim()}$`,
    parts: pieces.slice(1).map((p, i) => `$= ${p.trim()}$${i === pieces.length - 2 ? m[2] : ''}`),
  };
}

/** A step of a follow-up answer, as the board lays it out. No guessed headings:
 *  a step's first line is treated the same way on every step. */
export function boardRows(text: string): BoardRow[] {
  const source = normaliseDisplayMath(text.replace(/\\[dt]frac/g, '\\frac')).replace(
    /^\s*(?:step\s*)?\d+\s*[:.)-]\s*/i,
    ''
  );
  const raw: SolutionRow[] = [];
  source
    .split('\n')
    .map((l) => l.trim())
    .filter((l) => l && !/^[.,;:]+$/.test(l))
    .forEach((line) => {
      if (/^\$[^$]+\$\s*[.:]?$/.test(line)) {
        raw.push({ kind: 'display', raw: line.replace(/[.:]\s*$/, '') });
        return;
      }
      splitDisplay(line).forEach((piece) =>
        raw.push(
          piece.kind === 'display'
            ? { kind: 'display', raw: piece.raw.replace(/[.:]\s*$/, '') }
            : { kind: 'text', raw: piece.raw }
        )
      );
    });
  const rows: BoardRow[] = settleRows(raw).map((r) =>
    r.kind === 'display'
      ? { kind: 'math', raw: r.raw, chain: equationChain(r.raw) }
      : { kind: 'text', raw: r.raw }
  );
  if (rows[0]?.kind === 'text') rows[0].lead = true;
  for (let i = rows.length - 1; i >= 0; i--) {
    if (rows[i].kind === 'math') {
      rows[i].result = true;
      break;
    }
  }
  return rows;
}

/** A row's share of the writing: its visible length, so the hand pauses over maths. */
export function textCost(raw: string): number {
  return Math.max(6, latexToText(raw).length);
}

export function boardRowCost(row: BoardRow): number {
  if (!row.chain) return textCost(row.raw);
  return row.chain.parts.reduce((sum, part) => sum + textCost(part), textCost(row.chain.lhs));
}
