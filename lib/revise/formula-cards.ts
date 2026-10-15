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

const strip = (h: string) => h.replace(/<[^>]+>/g, '');
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

/** "The conversion master relation" from "FORMULA · THE CONVERSION MASTER RELATION". */
export function formulaName(kicker: string): string {
  const raw = kicker.replace(/^FORMULA\s*·\s*/i, '');
  const t = strip(raw).replace(/\s+/g, ' ').trim().toLowerCase();
  return (t.charAt(0).toUpperCase() + t.slice(1)).replace(/\bsi\b/g, 'SI');
}

/**
 * A formula breaks only BEFORE an operator, never after one, and never inside
 * a phrase: every space becomes non-breaking except the one in front of an
 * operator ("corrected = observed − zero error" can break before "−", not
 * between "zero" and "error").
 */
export function keepTogether(expr: string): string {
  return expr.replace(/ /g, ' ').replace(/ ([=+−⟹≈]) /g, ' $1 ');
}

/** A rule written in words (five or more words and no "="): text, not a formula. */
export const isWordRule = (expr: string) => {
  const t = strip(expr);
  return !t.includes('=') && (t.match(/[A-Za-z]{3,}/g) ?? []).length >= 5;
};

function items(lines: string[]): { label: string | null; expr: string }[] {
  const out: { label: string | null; expr: string }[] = [];
  let pending: string | null = null;
  for (const raw of lines) {
    const h = raw.trim();
    if (!h) continue;
    const plain = strip(h);
    const spaced = /^(.{2,60}?)\s+:\s+(.+)$/.exec(h); // "× and ÷ : the result keeps…"
    const at = h.lastIndexOf(': ');
    if (spaced && !SIGN.test(strip(spaced[1]).replace('±', ''))) {
      out.push({ label: cap1(spaced[1]), expr: spaced[2] });
      pending = null;
    } else if (plain.trimEnd().endsWith(':')) {
      pending = cap1(h.trimEnd().slice(0, -1)); // "for a quantity of dimensions […]:"
    } else if (at > 0 && strip(h.slice(0, at)).length <= 44) {
      out.push({ label: cap1(h.slice(0, at)), expr: h.slice(at + 2) }); // "plane angle: dθ = ds/r"
      pending = null;
    } else {
      out.push({ label: pending, expr: h });
      pending = null;
    }
  }
  // "reading = …, then corrected = …" is two formulas
  return out.flatMap((it) => it.expr.split(', then ').map((e, k) => ({ label: k === 0 ? it.label : null, expr: e })));
}

/** A meaning is a definition: cut at the first full stop, "; ", ", so", ", which", ", and …", ", X = …". */
function clause(h: string, symbol = false): string {
  const keys = [h.indexOf('. '), h.indexOf('; '), h.indexOf(', so '), h.indexOf(', which '), h.indexOf(', and it'), h.indexOf(', and each'), h.indexOf(', and d ')];
  const m = /, [^,]{1,14} = /.exec(h);
  if (m) keys.push(m.index);
  if (symbol) keys.push(h.indexOf(': '));
  const cuts = keys.filter((k) => k > 12);
  return cuts.length ? h.slice(0, Math.min(...cuts)) : h.replace(/\.$/, '');
}

function meaning(lines: string[]): FormulaMeaning[] {
  return lines.map((l) => {
    const at = l.indexOf(' = ');
    if (at > 0 && strip(l.slice(0, at)).length <= 14) return { sym: l.slice(0, at), text: clause(l.slice(at + 3), true) };
    return { sym: null, text: cap1(clause(l)) };
  });
}

/**
 * Formulas written in words, rewritten the way lab manuals write them: symbols
 * in the formula, the words under its meaning. Keyed by chapter and name.
 * These belong in the chapter content once it is rewritten; until then they
 * live here, so the reader is unchanged.
 */
const REWRITES: Record<string, { items: string[]; addMeaning: FormulaMeaning[] }> = {
  'physics|11|1|The vernier callipers': {
    items: ['LC = 1 MSD − 1 VSD = (value of 1 main division)/<i>n</i>', 'reading = MSR + VSR × LC', 'corrected = observed − zero error'],
    addMeaning: [{ sym: 'VSR', text: 'the vernier division that lines up with a main-scale mark, a pure count' }],
  },
  'physics|11|1|The screw gauge': {
    items: ['pitch = (distance moved)/(number of rotations)', 'LC = pitch/(number of circular divisions)', 'reading = MSR + CSR × LC', 'corrected = observed − zero error'],
    addMeaning: [{ sym: 'CSR', text: 'the circular-scale division on the reference line, a pure count' }],
  },
};

export function buildFormulaCards(chapter: Chapter): FormulaCard[] {
  const id = `${chapter.subject.toLowerCase()}|${(/\d+/.exec(chapter.klass) ?? [''])[0]}|${Number(chapter.chapter)}`;
  const cards: FormulaCard[] = [];
  chapter.topics.forEach((topic, ti) => {
    topic.blocks
      .filter((b): b is FormulaBlock => b.t === 'formula')
      .forEach((f) => {
        const name = formulaName(f.kicker);
        const rewrite = REWRITES[`${id}|${name}`];
        const lines = f.main.split('<br>').map((l) => marks(soften(l)));
        const its = rewrite ? rewrite.items.map((e) => ({ label: null, expr: e })) : items(lines);
        let mean = meaning(f.legend.map((l) => marks(soften(l))));
        if (rewrite) mean = [...mean.slice(0, 2), ...rewrite.addMeaning];
        cards.push({
          topic: ti,
          name,
          items: its.map((it) => ({ label: it.label, expr: isWordRule(it.expr) ? cap1(it.expr) : keepTogether(it.expr), words: isWordRule(it.expr) })),
          meaning: mean,
        });
      });
  });
  return cards;
}
