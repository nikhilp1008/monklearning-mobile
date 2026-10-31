/**
 * NOTHING IS TOO WIDE FOR ITS LINE.
 *
 * A line may break only at its plain spaces: the Formula sheet joins the rest
 * (lib/revise/formula-cards.ts keepTogether), the reader glues short terms to
 * their operators and numbers to their units (components/textbook/markup.tsx
 * readerBreaks). A piece between two such spaces that is wider than its line
 * cannot be laid out: Android then breaks it wherever it can, mid-word or
 * mid-formula ("const/ant", "[= (mg … (or" | "L) of water)]"; Android reviews
 * of Physics 11 and Chemistry 11). Measured here with the real fonts, at the
 * card's and the page's real widths, for every book chapter.
 */
import { hairSpaces, readerBreaks } from '@/components/textbook/markup';
import { buildFormulaCards } from '@/lib/revise/formula-cards';
import { boxes, hasFraction } from '@/lib/revise/formula-layout';
import type { Block } from '@/lib/textbooks';
import { BOOK_CHAPTERS } from '../test-support/book-list';
import { pieces, REF, width } from '../test-support/measure';

/** Room kept for what the measure leaves out (kerning, hair spaces, Android's rounding). */
const SLACK = 0.97;
const shown = (h: string) => h.replace(/<[^>]*>/g, '');
const chapterName = (c: (typeof BOOK_CHAPTERS)[number]) => `${c.subject} ${(/\d+/.exec(c.klass) ?? [''])[0]} Ch ${Number(c.chapter)}`;

function tooWide(html: string, size: number, look: 'stix' | 'pilot', line: number): string[] {
  return pieces(html)
    .map((p) => ({ p, w: width(p, size, look) }))
    .filter(({ w }) => w > line * SLACK)
    .map(({ p, w }) => `“${shown(p).slice(0, 60)}” is ${Math.round(w)} wide on a ${line} line`);
}

describe('every piece of every Formula sheet card fits its line', () => {
  const out: string[] = [];
  beforeAll(() => {
    for (const chapter of BOOK_CHAPTERS)
      buildFormulaCards(chapter).forEach((card, k) => {
        const where = `${chapterName(chapter)} card ${k + 1}`;
        tooWide(card.name, REF.cardExpr, 'stix', REF.card).forEach((m) => out.push(`${where} name: ${m}`));
        for (const it of card.items) {
          if (it.label) tooWide(it.label, REF.cardText, 'stix', REF.card).forEach((m) => out.push(`${where} label: ${m}`));
          for (const line of it.expr.split('<br>')) {
            if (!line) continue;
            if (hasFraction(line)) {
              for (const box of boxes(line)) {
                // A fraction too wide for the line is capped to it, and its top and bottom wrap inside it
                // (components/revise/formula-card.tsx): what must fit is its widest unbreakable word.
                const frac = (h: string) => Math.max(0, ...pieces(h).map((x) => width(x, 16, 'stix')));
                const w = box.reduce((s, p) => s + (p.kind === 'text' ? width(p.html, REF.cardExpr, 'stix') : Math.max(frac(p.top), frac(p.bottom)) + 8), 0);
                if (w > REF.card * SLACK) out.push(`${where} formula: a box is ${Math.round(w)} wide: ${box.map((p) => (p.kind === 'text' ? shown(p.html) : `(${shown(p.top)})/(${shown(p.bottom)})`)).join('').slice(0, 70)}`);
              }
            } else tooWide(line, REF.cardExpr, 'stix', REF.card).forEach((m) => out.push(`${where} formula: ${m}`));
          }
        }
        // Meanings wrap beside the widest symbol's column.
        const column = Math.max(0, ...card.meaning.map((m) => (m.sym ? width(m.sym, REF.cardText, 'stix') + 12 : 0)));
        for (const m of card.meaning) tooWide(m.text, REF.cardText, 'stix', REF.card - column).forEach((x) => out.push(`${where} meaning: ${x}`));
      });
  });
  it('has no piece wider than the card', () => {
    if (process.env.FIT_REPORT) console.log(out.join('\n'));
    expect(out).toEqual([]);
  });
});

describe('every piece of every reading page fits its line', () => {
  const out: string[] = [];
  /** Text shown inside a card (examples, MCQs, practice) has the card's narrower column. */
  const IN_CARD: Block['t'][] = ['ex', 'mcq', 'practice'];
  beforeAll(() => {
    const strings = (v: unknown, acc: string[] = []): string[] => {
      if (typeof v === 'string') acc.push(v);
      else if (Array.isArray(v)) v.forEach((x) => strings(x, acc));
      else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) if (!['t', 'id', 'fig', 'n', 'correct'].includes(k)) strings(x, acc);
      return acc;
    };
    for (const chapter of BOOK_CHAPTERS)
      for (const topic of chapter.topics)
        for (const b of topic.blocks) {
          const line = IN_CARD.includes(b.t) ? REF.inCard : REF.page;
          for (const h of strings(b))
            for (const part of hairSpaces(readerBreaks(h)).split(/<br\s*\/?>/))
              tooWide(part, REF.read, 'pilot', line).forEach((m) => out.push(`${chapterName(chapter)} ${topic.n} ${b.t}: ${m}`));
        }
  });
  it('has no piece wider than the page or card', () => {
    if (process.env.FIT_REPORT) console.log(out.join('\n'));
    expect(out).toEqual([]);
  });
});

describe('a stacked fraction keeps a function with its argument, and its brackets under a power', () => {
  // "d = (t sin(i − r))/cos r" once stacked "cos" alone under the bar with the r
  // left outside it (Android review of Physics 12 Ch 9). A top or bottom that
  // ends on a bare sin, cos, log … has lost its argument.
  const BARE = /(?:^|[^A-Za-z])(?:sin|cos|tan|cot|sec|cosec|log|ln)\d*\s*$/;
  const out: string[] = [];
  beforeAll(() => {
    for (const chapter of BOOK_CHAPTERS)
      buildFormulaCards(chapter).forEach((card, k) => {
        for (const it of card.items)
          for (const line of it.expr.split('<br>'))
            for (const box of boxes(line))
              box.forEach((p, j) => {
                if (p.kind !== 'frac') return;
                if (BARE.test(shown(p.top)) || BARE.test(shown(p.bottom))) out.push(`${chapterName(chapter)} card ${k + 1}: (${shown(p.top)})/(${shown(p.bottom)})`);
                // A power right after a fraction drawn without brackets sits beside its bottom alone.
                const next = box[j + 1];
                if (!p.tall && next?.kind === 'text' && next.html.startsWith('<sup>')) out.push(`${chapterName(chapter)} card ${k + 1}: a power after (${shown(p.top)})/(${shown(p.bottom)}) has lost its brackets`);
              });
      });
  });
  it('has no bare function name at a top or bottom, and no power beside a bare fraction', () => {
    expect(out).toEqual([]);
  });
});

describe('a factor written against a bracket goes over the bar with it', () => {
  // "n(n − 1)/2" once drew as n beside a stacked (n − 1)/2 (Android check of Physics 12 Ch 12).
  const fracOf = (expr: string) => boxes(expr).flat().find((p) => p.kind === 'frac');
  it('n(n − 1)/2, KA(T₁ − T₂)/L: the factor is part of the top', () => {
    expect(shown((fracOf('<i>N</i> = <i>n</i>(<i>n</i> − 1)/2') as { top: string }).top)).toBe('n(n − 1)');
    expect(shown((fracOf('= <i>KA</i>(<i>T</i><sub>1</sub> − <i>T</i><sub>2</sub>)/<i>L</i>') as { top: string }).top)).toBe('KA(T1 − T2)');
  });
  it('R((E − V)/V): a bracket that only holds the fraction leaves R beside it', () => {
    const f = fracOf('<i>r</i> = <i>R</i>((<i>E</i> − <i>V</i>)/<i>V</i>)') as { top: string };
    expect(shown(f.top)).toBe('E − V');
  });
  it('sin(A/2) and cos r stay with their functions', () => {
    const f = fracOf('<i>n</i> = sin((<i>A</i> + <i>δ</i>)/2)/sin(<i>A</i>/2)') as { top: string; bottom: string };
    expect(shown(f.top)).toBe('sin((A + δ)/2)');
    expect(shown(f.bottom)).toBe('sin(A/2)');
  });
});
