import { parts } from './formula-layout';
import type { Block, Chapter } from '@/lib/textbooks';

/**
 * THE FORMULA SHEET'S CARDS, built from a chapter's formula blocks.
 *
 * Every card has the same parts in the same order: the name, the formulas
 * (each with an optional label), and what they mean. The chapter's formula
 * blocks were written for the reader, so they arrive in several shapes: a
 * lead-in sentence ending in ":" before a formula, "label: formula" on one
 * line, rules written as sentences, and symbol lines that run on for three
 * clauses. This turns all of them into that one shape, so the card can set
 * every part the same way on every card.
 */
export type FormulaItem = {
  /** Words that introduce the formula, set small above it: "Plane angle". */
  label: string | null;
  /** The formula. Words in it are joined by non-breaking spaces, so it only breaks before an operator. */
  expr: string;
  /** A rule written as a sentence, set as text rather than as a formula. */
  words: boolean;
};
export type FormulaMeaning = { sym: string | null; text: string };
export type FormulaCard = { topic: number; name: string; items: FormulaItem[]; meaning: FormulaMeaning[] };

type FormulaBlock = Extract<Block, { t: 'formula' }>;

const strip = (h: string) => h.replace(/<\/?[a-zA-Z][^>]*>/g, '');
const SIGN = /[=⟹≈±]/;

/** Words the content shouts in capitals ("the SIZES of"), lowered; abbreviations kept. */
const KEEP_CAPS = new Set(['LHS', 'RHS', 'SI', 'MSR', 'MSD', 'VSD', 'CSR', 'VSR', 'LC', 'AU', 'CGPM', 'NEET', 'SHM', 'CGS', 'MKS', 'FPS', 'CBSE', 'JEE', 'NCERT']);
export const soften = (h: string) =>
  h.replace(/\bIN\b/g, 'in').replace(/\b([A-Z]{3,})\b/g, (w) => (KEEP_CAPS.has(w) ? w : w.toLowerCase()));

/** Ready-made raised and lowered letters (Mᵃ) become the same <sup>/<sub> the rest of the content uses. */
const SUP_LETTERS: Record<string, string> = { ᵃ: 'a', ᵇ: 'b', ᶜ: 'c', ᵈ: 'd', ᵉ: 'e', ᶠ: 'f', ᵍ: 'g', ʰ: 'h', ⁱ: 'i', ʲ: 'j', ᵏ: 'k', ˡ: 'l', ᵐ: 'm', ⁿ: 'n', ᵒ: 'o', ᵖ: 'p', ʳ: 'r', ˢ: 's', ᵗ: 't', ᵘ: 'u', ᵛ: 'v', ʷ: 'w', ˣ: 'x', ʸ: 'y', ᶻ: 'z' };
const SUB_LETTERS: Record<string, string> = { ₐ: 'a', ₑ: 'e', ₒ: 'o', ₓ: 'x', ₕ: 'h', ₖ: 'k', ₗ: 'l', ₘ: 'm', ₙ: 'n', ₚ: 'p', ₛ: 's', ₜ: 't' };
export const marks = (h: string) =>
  h
    .replace(new RegExp(`[${Object.keys(SUP_LETTERS).join('')}]+`, 'g'), (r) => `<sup>${[...r].map((c) => SUP_LETTERS[c]).join('')}</sup>`)
    .replace(new RegExp(`[${Object.keys(SUB_LETTERS).join('')}]+`, 'g'), (r) => `<sub>${[...r].map((c) => SUB_LETTERS[c]).join('')}</sub>`);

/** Capitalise the first letter, unless the line opens on a symbol (<i>t</i> in the first line…). */
const cap1 = (h: string) => {
  const t = h.trim();
  return t.startsWith('<i>') ? t : t.replace(/^((?:<[^>]+>)*)([a-z])/, (_, a: string, b: string) => a + b.toUpperCase());
};

/** Every tag but the maths ones: a name keeps its italic letters and its scripts (C<sub>V</sub>). */
const stripToMaths = (h: string) => h.replace(/<(?!\/?(?:i|sub|sup)>)\/?[a-zA-Z][^>]*>/g, '');

/**
 * A name's last line never holds a lone symbol ("… at depth h", "(phase φ)"),
 * and never starts on an em dash ("— exact analogues …"): the space before
 * either is non-breaking. A line may still end on a dash.
 */
export function titleBreaks(name: string): string {
  const t = name.replace(/ — /g, '\u00a0— ');
  const at = t.lastIndexOf(' ');
  return at > 0 && shown(t.slice(at + 1)).length <= 2 ? `${t.slice(0, at)}\u00a0${t.slice(at + 1)}` : t;
}

/**
 * The maths letters in a name set italic, as they are in the formulas: the
 * kickers are plain text ("Rolling down an incline of angle θ", "a = f(x)",
 * "Effective g", "Projection of A⃗ along B⃗"), so the card's title showed
 * upright symbols over italic ones. A single letter on its own (with its
 * arrow, hat or scripts), or a Greek letter, is maths; π stays upright as it
 * does in the formulas, and "a" or "A" before a word is the article.
 */
const LETTER = /[A-Za-zα-ωϕϑ]/;
export function italicMaths(name: string): string {
  let inside = 0;
  return name
    .split(/(<[^>]+>)/)
    .map((part) => {
      if (part.startsWith('<')) {
        if (/^<(i|sub|sup)>$/.test(part)) inside++;
        else if (/^<\/(i|sub|sup)>$/.test(part)) inside = Math.max(0, inside - 1);
        return part;
      }
      if (inside) return part;
      return part.replace(/[A-Za-zα-ωϕϑ]+[\u20d7\u0302]?[₀-₉ₐₑₒₓₕₖₗₘₙₚₛₜ]*/g, (w, at: number) => {
        const before = part[at - 1] ?? '', after = part[at + w.length] ?? '';
        if (LETTER.test(before) || LETTER.test(after) || /['’0-9]/.test(before) || /['’]/.test(after)) return w;
        // "e.g.", "i.e."
        if ((after === '.' && LETTER.test(part[at + w.length + 1] ?? '')) || (before === '.' && LETTER.test(part[at - 2] ?? ''))) return w;
        const letters = w.replace(/[^A-Za-zα-ωϕϑ]/g, '');
        const greek = /[α-ωϕϑ]/.test(letters);
        if (letters.length > (greek ? 3 : 1) || letters === 'π') return w;
        if (!greek && letters.length === 1) {
          // the article, "a rocket", "A body …" (but "of A with respect to B" is a name); "1-D"
          if ((w === 'a' || (w === 'A' && at === 0)) && / [A-Za-z]/.test(part.slice(at + 1, at + 3))) return w;
          if (/[0-9][-–]$/.test(part.slice(0, at))) return w;
        }
        if (greek && /[A-Za-z]/.test(letters) && letters.length > 2) return w;
        return `<i>${w}</i>`;
      });
    })
    .join('');
}

/** "The conversion master relation" from "FORMULA · THE CONVERSION MASTER RELATION". */
export function formulaName(kicker: string, asPrinted = false): string {
  const raw = stripToMaths(kicker.replace(/^FORMULA\s*·\s*/i, '')).replace(/\s+/g, ' ').trim();
  // The books print their names with proper capitals ("Relative velocity of A
  // with respect to B"); lowering them made A and B read as maths letters.
  if (asPrinted) return titleBreaks(italicMaths(raw));
  // Lowered outside the maths only: <i>T</i> stays T.
  const t = raw.split(/(<i>.*?<\/i>)/).map((p) => (p.startsWith('<i>') ? p : p.toLowerCase())).join('');
  return titleBreaks(italicMaths(t.replace(/^((?:<(?!i>)[^>]+>)*)([a-z])/, (_, a: string, b: string) => a + b.toUpperCase()).replace(/\bsi\b/g, 'SI')));
}

/** The operators a formula line may break before, and never after. */
const OPS = '=+−⟹⟺⇔⇌≈→⇒∝';
const NB = '\u00a0';
/** While the rules run, a space inside a bracket is held as one of these: in a bracket of words, in a bracket of maths. */
const WORD_SP = '\ue000', MATH_SP = '\ue001';
/** A non-breaking space no later rule may open again: a short symbol held to its operator. */
const STICK = '\ue002';
const FUNCTION_NAMES = /\b(?:sin|cos|tan|cot|sec|cosec|csc|log|ln|exp|lim|max|min)\b/g;

/**
 * A bracket that holds a phrase rather than maths: two or more words in plain
 * letters, not counting italic symbols, scripts or function names.
 * "(position vectors measured from the CoM)" is words; "(m₁ + m₂)",
 * "(1 + k²/R²)" and "(tan θ + μ)" are maths.
 */
export function isWordBracket(inner: string): boolean {
  const plain = inner
    .replace(/<(su[bp])>.*?<\/\1>/g, '')
    .replace(/<i>.*?<\/i>/g, '')
    .replace(/<[^>]+>/g, '')
    .replace(FUNCTION_NAMES, '');
  return (plain.match(/[A-Za-z]{2,}/g) ?? []).length >= 2;
}

/** Three words or fewer, or 20 characters or fewer. */
export const isShortBracket = (inner: string) => {
  const plain = inner.replace(/<[^>]+>/g, '');
  return plain.length <= 20 || plain.trim().split(/[\s\u00a0]+/).length <= 3;
};

/** Every space inside a bracket, marked by the innermost bracket around it (inner brackets close first). */
function markBrackets(expr: string): string {
  const chars = expr.split('');
  const open: number[] = [];
  const marked = new Set<number>();
  for (let i = 0; i < chars.length; i++) {
    if (chars[i] === '(' || chars[i] === '[') open.push(i);
    else if ((chars[i] === ')' || chars[i] === ']') && open.length) {
      const from = open.pop()!;
      // A short bracket of words ("(harmonic mean)", "(≈ 4.58 mm Hg)") is held
      // whole like one of maths: split, it strands a word or a bracket.
      const inner = expr.slice(from + 1, i);
      const mark = isWordBracket(inner) && !isShortBracket(inner) ? WORD_SP : MATH_SP;
      for (let k = from + 1; k < i; k++)
        if (chars[k] === ' ' && !marked.has(k)) {
          chars[k] = mark;
          marked.add(k);
        }
    }
  }
  return chars.join('');
}

/** What a line shows, for judging its length: no tags, no joiners. */
const shown = (h: string) => h.replace(/<[^>]+>/g, '').replace(/\u2060/g, '');
/** A clause this short fits on any phone's card line (≈ 35 characters at 19). */
const SHORT_CLAUSE = 24;

/**
 * A formula breaks only BEFORE an operator, never after one, and never inside
 * a phrase: every space becomes non-breaking except the one in front of an
 * operator ("corrected = observed − zero error" can break before "−", not
 * between "zero" and "error"), after a comma or semicolon, or before a
 * bracket of words.
 *
 * Inside brackets the bracket decides (Android, 2026-10-20): in a bracket of
 * words every space may break, so a long phrase wraps between words instead of
 * mid-word ("(position vectors measure|d from the CoM)"); in a bracket of maths
 * none may, so "(m₁ + m₂)" never opens one line and closes the next. Between
 * equations a line breaks after the comma, not inside one: a short equation
 * ("P = τ·ω") is held whole, and a long one keeps its first symbol with the
 * operator after it.
 */
export function keepTogether(expr: string): string {
  const joined = markBrackets(expr)
    .replace(/ /g, '\u00a0')
    .replace(new RegExp(`\u00a0([${OPS}])\u00a0`, 'g'), ' $1\u00a0')
    // A long line mostly in words ("= constant (angular momentum conserved)")
    // had nowhere to break, and Android cut it mid-word. So it may also break
    // after a comma or semicolon, and before a bracket that holds words.
    // An arrow may start a line, and its condition (→ with r≈R over it) stays on it.
    .replace(/\u00a0([→⇒⇔⟺])/g, ' $1')
    .replace(/([→⇒⇔⟺])(<su[bp]>)/g, '$1\u2060$2')
    // Not in a list of numbers: "n = 1, 2, 3, …" stays one piece.
    .replace(/([,;])\u00a0(?![0-9]+,|…|⋯)/g, '$1 ')
    .replace(/([^=+−⟹⟺⇔⇌≈→⇒∝])\u00a0\(([^)]*)\)/g, (all, before: string, inner: string) =>
      /[A-Za-z]{4}/.test(inner.replace(/<su[bp]>.*?<\/su[bp]>/g, '').replace(/<[^>]+>/g, '')) ? `${before} (${inner})` : all,
    )
    // NOR AFTER A FRACTION SLASH. A line may break after "/" by default, which
    // split "k²/R²" across two lines on the formula card. A word joiner holds
    // the two sides together. (Only a slash in the maths, not in "</i>".)
    .replace(/([^<])\//g, '$1/\u2060')
    // Nor after a "|" ("|L⃗|" / "= mvr sin θ": Android may break after one,
    // even before a non-breaking space), nor between two brackets multiplied,
    // ")(", nor between an operator and the bracket it applies to, "= −(".
    .replace(/\|(?=[^ |])/g, '|\u2060')
    .replace(/\)\(/g, ')\u2060(')
    .replace(new RegExp(`([${OPS}])\\(`, 'g'), '$1\u2060(')
    // In a bracket of words a space breaks, except straight after an operator;
    // in a bracket of maths it never does.
    .replace(new RegExp(`([${OPS}]?)${WORD_SP}`, 'g'), (_, op: string) => (op ? op + NB : ' '))
    .replace(new RegExp(MATH_SP, 'g'), NB);
  // Clause by clause, split at the breaks after "," and ";".
  // Nor before a last short term: "ΔE = ΔK + ΔU = 0" never ends a line on "ΔU" and opens the next on "= 0".
  const tail = stickSymbols(joined).replace(new RegExp(` ([${OPS}])\u00a0([^ ]+?)(?=[,;] |[,;.]?$)`, 'g'), (all, op: string, end: string) =>
    shown(end).length <= 3 ? `${STICK}${op}${NB}${end}` : all,
  );
  const parts = tail.split(/([,;] )/);
  for (let i = 0; i < parts.length; i += 2) if (shown(parts[i]).length <= SHORT_CLAUSE) parts[i] = parts[i].replace(/ /g, NB);
  return parts
    .join('')
    .split(' ')
    .map((p) => loosen(p))
    .join(' ')
    .replace(new RegExp(STICK, 'g'), NB)
    // A "|" lets a line break even before a non-breaking space; the joiner holds it.
    .replace(/\|\u00a0/g, '|\u2060\u00a0');
}

/**
 * A short symbol that opens a relation stays with its operator, wherever the
 * relation starts: a line, a clause, a bracket ("(h = equilibrium depth)"),
 * after a word ("with k = YA/L") or after an arrow ("⇒ G = κθd²/(MmL)"). Only
 * a term in the middle of a chain ("= b + c") may still end a line.
 */
function stickSymbols(h: string): string {
  let out = '';
  for (let k = 0; k < h.length; k++) {
    if (h[k] !== ' ' || !OPS.includes(h[k + 1] ?? '')) {
      out += h[k];
      continue;
    }
    const lhs = leftSide(out.slice(out.lastIndexOf(' ') + 1));
    const size = lhs === null ? 0 : shown(lhs.replace(/<(su[bp])>.*?<\/\1>/g, '')).replace(/[\u00a0\ue002]/g, ' ').trim().length;
    // A phrase ("Corrected reading =") may still break before its operator.
    out += size > 0 && size <= 6 ? STICK : ' ';
  }
  return out;
}

/**
 * What stands left of an operator, back to where the relation starts: an
 * unclosed bracket, a word, an arrow, or the start of the piece. Null when an
 * operator comes first: the symbol is then a term in the middle of a chain.
 */
function leftSide(run: string): string | null {
  const open: number[] = [];
  const marks: { at: number; end: number; depth: number; op: boolean }[] = [];
  for (let i = 0; i < run.length; i++) {
    const c = run[i];
    if (c === '<') {
      const close = run.indexOf('>', i);
      if (close !== -1) {
        // A script is part of its symbol, whatever is in it.
        const tag = /^<(su[bp])>/.exec(run.slice(i));
        const end = tag ? run.indexOf(`</${tag[1]}>`, i) : -1;
        i = end !== -1 ? end + tag![1].length + 2 : close;
        continue;
      }
    }
    if (c === '(' || c === '[') open.push(i);
    else if (c === ')' || c === ']') {
      // A bracket closing that opened before the piece: the relation began
      // further back, in front of a break ("(weight in air)/(…) = W").
      if (!open.length) return null;
      open.pop();
    } else if (OPS.includes(c)) marks.push({ at: i, end: i + 1, depth: open.length, op: !ARROWS.includes(c) });
    else if (/[A-Za-z]/.test(c) && !/[A-Za-z>]/.test(run[i - 1] ?? '')) {
      const w = /^[A-Za-z]+/.exec(run.slice(i))![0];
      if (w.length >= 2 && run[i + w.length] !== '<' && !FUNCTION_WORD.test(w)) marks.push({ at: i, end: i + w.length, depth: open.length, op: false });
      i += w.length - 1;
    }
  }
  const from = open.length ? open[open.length - 1] + 1 : 0;
  const last = marks.filter((m) => m.at >= from && m.depth === open.length).pop();
  if (last?.op) return null;
  // One short word is the whole left side: "LC =", "RD =", "Pitch =".
  if (last && !last.op && last.at === from && last.end === run.length && last.end - last.at <= 6) return run.slice(from);
  return run.slice(last ? last.end : from);
}
const FUNCTION_WORD = /^(?:sin|cos|tan|cot|sec|cosec|csc|log|ln|exp|lim|max|min|d)$/;

/** Longer than this, a piece with no break in it may not fit a card line, and Android would cut it mid-word. */
const LONG = 30;
const ARROWS = '⟹⇒→⇔⟺⇌';
/**
 * The ways back to a break, best first, tried only on a piece still too long:
 * before a bracket or an arrow; before any operator, outside brackets; before
 * an operator inside a bracket; between any two words. Never straight after
 * an operator.
 */
const isOp = (c: string, set = OPS) => c !== '' && set.includes(c);
const LOOSER: ((depth: number, prev: string, next: string, c: string) => boolean)[] = [
  (d, _, n, c) => c === NB && d === 0 && (n === '(' || isOp(n, ARROWS)),
  (d, _, n, c) => c === NB && d === 0 && isOp(n),
  // A symbol held to its operator lets go before a bracket is opened.
  (d, _, n, c) => c === STICK && d === 0,
  (_, __, n, c) => c === NB && isOp(n),
  (_, __, ___, c) => c === NB,
];
/** How long a piece is on the card: a stacked fraction is as wide as its wider side, not both. */
export const pieceWidth = (piece: string) =>
  parts(piece).reduce((n, p) => n + (p.kind === 'text' ? shown(p.html).length : Math.max(shown(p.top).length, shown(p.bottom).length)), 0);

function loosen(piece: string, level = 0): string {
  if (pieceWidth(piece) <= LONG || level >= LOOSER.length) return piece;
  let depth = 0;
  let out = '';
  for (let k = 0; k < piece.length; k++) {
    const c = piece[k];
    if (c === '(' || c === '[') depth++;
    else if ((c === ')' || c === ']') && depth > 0) depth--;
    // Never straight after an operator, whatever the level.
    const prev = piece[k - 1] ?? '';
    out += (c === NB || c === STICK) && !isOp(prev) && LOOSER[level](depth, prev, piece[k + 1] ?? '', c) ? ' ' : c;
  }
  return out
    .split(' ')
    .map((p) => loosen(p, level + 1))
    .join(' ');
}

/** A rule written in words (five or more words and no "="): text, not a formula. */
export const isWordRule = (expr: string) => {
  const t = strip(expr);
  return !t.includes('=') && (t.match(/[A-Za-z]{3,}/g) ?? []).length >= 5;
};

function items(lines: string[]): { label: string | null; expr: string }[] {
  const out: { label: string | null; expr: string }[] = [];
  let pending: string | null = null;
  // A lead-in is never lost: when the next line brings its own label, the
  // lead-in stands as a line of its own above it (Lissajous: "(x = A cos ωt,
  // y = B cos(ωt + δ)), equal frequency:" before "δ = 0: straight line …").
  const flush = () => {
    if (pending) out.push({ label: pending, expr: '' });
    pending = null;
  };
  for (const raw of lines) {
    const h = raw.trim();
    if (!h) continue;
    const plain = strip(h);
    const spaced = /^(.{2,60}?)\s+:\s+(.+)$/.exec(h); // "× and ÷ : the result keeps…"
    const at = h.lastIndexOf(': ');
    const lead = /^with ((?:[a-z]+ ){1,5})(<i>.*=.*)$/.exec(h); // "with molar heat capacity C = …"
    if (spaced && !SIGN.test(strip(spaced[1]).replace('±', ''))) {
      flush();
      out.push({ label: cap1(spaced[1]), expr: spaced[2] });
    } else if (plain.trimEnd().endsWith(':')) {
      flush();
      pending = cap1(h.trimEnd().slice(0, -1)); // "for a quantity of dimensions […]:"
    } else if (at > 0 && strip(h.slice(0, at)).length <= 44) {
      flush();
      out.push({ label: cap1(h.slice(0, at)), expr: h.slice(at + 2) }); // "plane angle: dθ = ds/r"
    } else if (lead && !pending) {
      out.push({ label: cap1(`with ${lead[1].trim()}`), expr: lead[2] });
    } else {
      out.push({ label: pending, expr: h });
      pending = null;
    }
  }
  flush();
  // "reading = …, then corrected = …" is two formulas
  return out.flatMap((it) => it.expr.split(', then ').map((e, k) => ({ label: k === 0 ? it.label : null, expr: e })));
}

/** A meaning is a definition: cut at the first full stop, "; ", ", so", ", which", ", and …", ", X = …". */
function clause(h: string, symbol = false): string {
  const keys = [h.indexOf('. '), h.indexOf('; '), h.indexOf(', so '), h.indexOf(', which '), h.indexOf(', and it'), h.indexOf(', and each'), h.indexOf(', and d ')];
  const m = /, [^,]{1,14} = /.exec(h);
  if (m) keys.push(m.index);
  if (symbol) keys.push(h.indexOf(': '));
  // Never inside brackets: "(0 ≤ e ≤ 1, dimensionless; e = 1 for a black body)" was cut at its
  // "; " and the card showed an unclosed bracket.
  const inside = (k: number) => (h.slice(0, k).match(/\(/g) ?? []).length > (h.slice(0, k).match(/\)/g) ?? []).length;
  const cuts = keys.filter((k) => k > 12 && !inside(k));
  return cuts.length ? h.slice(0, Math.min(...cuts)) : h.replace(/\.$/, '');
}

function meaning(lines: string[]): FormulaMeaning[] {
  return lines.map((l) => {
    const at = l.indexOf(' = ');
    if (at > 0 && strip(l.slice(0, at)).length <= 14) return { sym: l.slice(0, at), text: clause(l.slice(at + 3), true) };
    return { sym: null, text: cap1(clause(l)) };
  });
}

/** Units the meanings write after a number: "8.314 J mol⁻¹ K⁻¹", "kg m⁻³". */
const UNIT = '(?:kg|mol|Pa|Hz|mm|cm|km|Hg|atm|eV|rad|sr|min|J|K|W|N|m|s|g|V|A|C|Ω|°C|L|T|M|Θ)';
const UNIT_END = '(?=<sup>|[\\s,.;)\\]]|$)';

/**
 * The lighter no-break pass, for the words around a formula: its label, its
 * meanings, a rule written as a sentence. They wrap like prose, between any
 * two words, except where a break would split one piece of maths (Android
 * review, 2026-10-20): never after an operator ("e =" / "1"), never between a
 * number and its unit or one unit and the next ("8.314 J mol⁻¹" / "K⁻¹"),
 * never inside a short bracket ("(0 ≤ θ ≤" / "π)", "[M" / "T⁻³ Θ⁻⁴]"), never
 * between cos and its angle, never after a slash ("shape/" / "size").
 */
export function softBreaks(h: string): string {
  let out = h
    .replace(/([=≤≥⇌≈∝≠±∓×+−→⇒⟹⇔⟺]) /g, '$1\u00a0')
    .replace(/ ([<>]) /g, ' $1\u00a0')
    .replace(new RegExp(`([0-9]|</sup>) (?=${UNIT}${UNIT_END})`, 'g'), '$1\u00a0')
    .replace(new RegExp(`((?:^|[\\s(\\[])${UNIT}(?:<sup>[^<]*</sup>)?) (?=${UNIT}${UNIT_END})`, 'g'), '$1\u00a0')
    .replace(/\b(sin|cos|tan|cot|sec|cosec|log|ln|exp) (?=\S)/g, '$1\u00a0')
    .replace(/([^<])\//g, '$1/\u2060');
  // The unit pass leaves every other unit of a run ("J K⁻¹ m") to a second go.
  out = out.replace(new RegExp(`((?:^|[\\s(\\[\u00a0])${UNIT}(?:<sup>[^<]*</sup>)?) (?=${UNIT}${UNIT_END})`, 'g'), '$1\u00a0');
  // Short brackets, innermost first.
  return out.replace(/([(\[])([^()[\]]*)([)\]])/g, (all, o: string, inner: string, c: string) =>
    shown(inner).length <= 20 ? o + inner.replace(/ /g, '\u00a0') + c : all,
  );
}

export function buildFormulaCards(chapter: Chapter): FormulaCard[] {
  const book = chapter.topics.some((t) => t.blocks[0]?.t === 'part');
  const cards: FormulaCard[] = [];
  chapter.topics.forEach((topic, ti) => {
    topic.blocks
      .filter((b): b is FormulaBlock => b.t === 'formula')
      .forEach((f) => {
        const name = formulaName(f.kicker, book);
        // A book's text is kept as printed: no capitals lowered.
        const tidy = (l: string) => marks(book ? l : soften(l));
        const its = items(f.main.split('<br>').map(tidy));
        const mean = meaning(f.legend.map(tidy));
        cards.push({
          topic: ti,
          name,
          items: its.map((it) => ({
            label: it.label && softBreaks(it.label),
            expr: isWordRule(it.expr) ? softBreaks(cap1(it.expr)) : keepTogether(it.expr),
            words: isWordRule(it.expr),
          })),
          meaning: mean.map((m) => ({ sym: m.sym, text: softBreaks(m.text) })),
        });
      });
  });
  return cards;
}
