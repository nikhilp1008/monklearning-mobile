/**
 * THE MISTAKES THE REVIEWS KEPT FINDING, CHECKED IN EVERY BOOK CHAPTER.
 *
 * Each rule below is one the expert and Android reviews of Physics 11,
 * Physics 12 and Chemistry 11 caught by eye, more than once. Checked here,
 * a writer's slip is caught when the chapter is written, not on a phone.
 * Book-chapters.test.ts holds the structural rules; these are about text.
 */
import { DIAGRAMS } from '@/lib/diagrams';
import { KEY_POINTS } from '@/lib/revise/keypoints';
import type { Block, Chapter, Topic } from '@/lib/textbooks';
import { BOOK_CHAPTERS } from '../test-support/book-list';
import { REF, width } from '../test-support/measure';

/** The text as read: only the reader's own tags are dropped (a "<" in "√(2gR) < u" is text). */
const plain = (h: string) => h.replace(/<\/?(?:b|i|sup|sub|frac|binom|num|den)>|<br\s*\/?>/gi, (t) => (/br/i.test(t) ? '\n' : '')).replace(/&nbsp;|\u00a0/g, ' ');

/** Unicode letters set as raised or lowered (ᵢ ₙ ˣ): the phone's fonts lack most of them. */
const SCRIPT_LETTERS = /[ᴬ-ᵪₐ-ₜʰ-ʸˠ-ˤⁱⁿ]/;

type Where = { chapter: Chapter; topic: Topic; block?: Block };
const name = ({ chapter, topic, block }: Where) =>
  `${chapter.subject} ${(/\d+/.exec(chapter.klass) ?? [''])[0]} Ch ${Number(chapter.chapter)} · ${topic.n}${block ? ` · ${block.t}` : ''}`;

/** Every rule's breaches across all book chapters, as "where: what". */
function breaches(rule: (w: Where, say: (what: string) => void) => void): string[] {
  const out: string[] = [];
  for (const chapter of BOOK_CHAPTERS)
    for (const topic of chapter.topics) {
      rule({ chapter, topic }, (what) => out.push(`${name({ chapter, topic })}: ${what}`));
      for (const block of topic.blocks) rule({ chapter, topic, block }, (what) => out.push(`${name({ chapter, topic, block })}: ${what}`));
    }
  return out;
}

/** Every HTML string a block shows. */
function htmls(b: Block): string[] {
  const out: string[] = [];
  const add = (v: unknown, key = '') => {
    if (typeof v === 'string') {
      if (!['t', 'id', 'fig', 'n'].includes(key)) out.push(v);
    } else if (Array.isArray(v)) v.forEach((x) => add(x, key));
    else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) add(x, k);
  };
  add(b);
  return out;
}

const clip = (s: string) => (s.length > 90 ? `${s.slice(0, 87)}…` : s);

/** The narrowest column a run of text can land in: an answer box inside a worked example. */
const ANSWER_BOX = 250;

describe('the text of every book chapter', () => {
  it('keeps plain-text fields plain: titles, part names, tags and the up-next line take no markup, raised letters or overlines', () => {
    expect(
      breaches(({ topic, block }, say) => {
        const check = (field: string, v: string | null | undefined) => {
          if (!v) return;
          if (/<[a-z/][^>]*>/i.test(v)) say(`${field} has markup: ${clip(v)}`);
          if (SCRIPT_LETTERS.test(v)) say(`${field} has a raised/lowered letter: ${clip(v)}`);
          // A NOT bar is drawn joined only by Markup; in plain text each mark is its own short bar (Physics 12 Ch 14 D.2 tag).
          if (/[\u0305\u033F]/.test(v)) say(`${field} has an overline: ${clip(v)}`);
        };
        if (!block) {
          check('title', topic.title);
          check('kalam', topic.kalam);
          return;
        }
        if (block.t === 'part' || block.t === 'proc' || block.t === 'defgrid') check(`${block.t} title`, block.title);
        if (block.t === 'table') check('table title', block.title);
        if (block.t === 'ex') check('example tag', block.tag);
      }),
    ).toEqual([]);
  });

  it('breaks no word it can avoid: a run wider than a card, with nowhere to break, is cut mid-word on Android', () => {
    expect(
      breaches(({ block }, say) => {
        if (block) for (const h of htmls(block))
          // Android breaks at a hyphen between words, but not beside a digit: "(ethan | e-1,2-diamine)".
          for (const word of plain(h).split(/[\s\u200b/–]+|(?<=[A-Za-z])-(?=[A-Za-z])/))
            if (/[a-z]{6}/.test(word) && width(word, REF.read, 'pilot') > ANSWER_BOX) say(clip(word));
      }),
    ).toEqual([]);
  });

  it('writes a minus as − in maths, never a hyphen (10⁻³, not 10-3)', () => {
    expect(
      breaches(({ block }, say) => {
        if (!block) return;
        for (const h of htmls(block)) {
          for (const m of h.matchAll(/<sup>[^<]*-[^<]*<\/sup>/g)) if (!/[A-Za-z]-[A-Za-z]/.test(m[0])) say(`hyphen in a power: ${plain(m[0])}`);
          for (const m of h.matchAll(/(?:^|[\s(=])-\s?(?:\d|<i>)/g)) say(`hyphen as a minus: ${clip(plain(h.slice(Math.max(0, m.index! - 20), m.index! + 20)))}`);
        }
      }),
    ).toEqual([]);
  });

  // MATHEMATICS PRINTS EVERY FRACTION STACKED, and so does the app (the
  // founder's rule, 2026-11-10): <frac><num>a</num><den>b</den></frac>,
  // drawn by components/textbook/markup.tsx. One on a line, "1/2" or ½, is a slip.
  it('writes a fraction as <frac><num>…</num><den>…</den></frac>, whole', () => {
    // A binomial coefficient (<binom>, the same halves without the rule) is checked the same way.
    const SHAPE = /<(frac|binom)><num>(?:(?!<\/?(?:frac|binom)>|<\/?num>|<\/?den>)[\s\S])*<\/num><den>(?:(?!<\/?(?:frac|binom)>|<\/?num>|<\/?den>)[\s\S])*<\/den><\/\1>/;
    expect(
      breaches(({ block }, say) => {
        if (!block) return;
        for (const h of htmls(block)) {
          if (!/<\/?(?:frac|binom|num|den)>/.test(h)) continue;
          // Innermost first: what is left once every well-formed fraction is gone holds no fraction tag.
          let rest = h;
          for (let m = SHAPE.exec(rest); m; m = SHAPE.exec(rest)) rest = rest.slice(0, m.index) + 'F' + rest.slice(m.index + m[0].length);
          if (/<\/?(?:frac|binom|num|den)>/.test(rest)) say(`malformed fraction: ${clip(h)}`);
          // Inside a raised or lowered run a stack is too small to read: x<sup>1/2</sup> keeps its slash.
          if (/<su[bp]>(?:(?!<\/su[bp]>).)*<frac>/.test(h)) say(`fraction inside a script: ${clip(plain(h))}`);
        }
      }),
    ).toEqual([]);
  });

  it('in Mathematics, sets no fraction on one line (1/2, π/4, (a + b)/2, ½)', () => {
    // A slash with a number, a letter in italics, a bracket, π or a root on both sides,
    // outside a raised run. "and/or", "km/h" and "A/B testing" are words, not fractions.
    const SIDE = String.raw`(?:\d|<\/i>|\)|π|√\d)`;
    const AFTER = String.raw`(?:\d|<i>|\(|π|√)`;
    const SLASH = new RegExp(`${SIDE}\\s?\\/\\s?${AFTER}`);
    // Not fractions, written as the book writes them: a cricket score, runs for wickets
    // (Mathematics 11 Ch 2 Topic 01, "180/4").
    const NOT_FRACTIONS = /“180\/4”/g;
    expect(
      breaches(({ chapter, block }, say) => {
        if (!block || chapter.subject !== 'Mathematics') return;
        for (const h of htmls(block)) {
          const outside = h.replace(/<su([bp])>(?:(?!<\/su\1>).)*<\/su\1>/g, '').replace(NOT_FRACTIONS, '');
          if (SLASH.test(outside) || /[½⅓⅔¼¾⅕⅖⅗⅘⅙⅚⅛⅜⅝⅞]/.test(outside)) say(clip(plain(h)));
        }
      }),
    ).toEqual([]);
  });

  // NO EM DASHES IN MATHEMATICS (the founder, 2026-11-10: they read as
  // machine-written). Each is rewritten as a colon, commas, brackets or a full
  // stop; ranges keep their en dash (–). Physics and Chemistry later.
  it('in Mathematics, writes no em dash (—)', () => {
    expect(
      breaches(({ chapter, topic, block }, say) => {
        if (chapter.subject !== 'Mathematics') return;
        const all = block ? htmls(block) : [topic.title, topic.kalam ?? ''];
        for (const h of all) if (h.includes('—')) say(clip(plain(h)));
      }),
    ).toEqual([]);
  });

  it('in Mathematics, writes no em dash in key points or figure captions and labels either', () => {
    const bad: string[] = [];
    for (const [key, points] of Object.entries(KEY_POINTS))
      if (key.startsWith('mathematics|'))
        for (const p of points) for (const v of [p.q, p.a, p.why, p.say]) if (v?.includes('—')) bad.push(`${key} key point: ${clip(plain(v))}`);
    for (const [key, figs] of Object.entries(DIAGRAMS))
      if (key.startsWith('mathematics|'))
        for (const f of figs) {
          const texts = [f.name, ...f.cases.flatMap((c) => [c.chip, c.cap])];
          for (const c of f.cases) for (const t of f.draw(c).texts) texts.push(t.html);
          for (const v of texts) if (v?.includes('—')) bad.push(`${f.id}: ${clip(plain(v))}`);
        }
    expect(bad).toEqual([]);
  });

  it('opens quotation marks the right way round (an opening ” is a slip)', () => {
    expect(
      breaches(({ block }, say) => {
        if (block) for (const h of htmls(block)) if (/(^|[\s(])”\S/.test(plain(h))) say(clip(plain(h)));
      }),
    ).toEqual([]);
  });

  it('closes every bracket it opens, in each line', () => {
    const open = { '(': ')', '[': ']' } as const;
    expect(
      breaches(({ block }, say) => {
        if (!block) return;
        for (const h of htmls(block))
          for (const line of plain(h).split(/\n/)) {
            // Item labels "(a)", "1)" and ranges like "[0, 1)" are balanced or deliberate; count only.
            for (const [o, c] of Object.entries(open)) {
              const a = line.split(o).length - 1, b = line.split(c).length - 1;
              if (a !== b && !/^\s*\w\)/.test(line) && !/[[(][^[\]()]*,[^[\]()]*[)\]]/.test(line)) say(`${a} “${o}” vs ${b} “${c}”: ${clip(line)}`);
            }
          }
      }),
    ).toEqual([]);
  });

  it('ends every step of a worked example as a sentence or a line of working (not "… = 1 and")', () => {
    expect(
      breaches(({ block }, say) => {
        if (block?.t !== 'ex') return;
        block.steps.forEach((s, i) => {
          // The last step may lead into the answer box ("…, so" then the result, printed once).
          if (i === block.steps.length - 1 && block.ans) return;
          const end = plain(s).trim();
          if (/(\b(and|or|then|Then|so|thus|hence|the|of|to|with|by|leads to)|,)$/.test(end)) say(`step ${i + 1} ends "${end.slice(-30)}"`);
        });
      }),
    ).toEqual([]);
  });

  it('prints an answer once: the last step does not end with what the answer box says', () => {
    expect(
      breaches(({ block }, say) => {
        if (block?.t !== 'ex' || !block.ans) return;
        const norm = (h: string) => plain(h).replace(/[\s.]+/g, ' ').trim();
        const ans = norm(block.ans), last = norm(block.steps[block.steps.length - 1] ?? '');
        if (ans.length >= 4 && last.endsWith(ans)) say(`"${clip(ans)}"`);
      }),
    ).toEqual([]);
  });

  it('keeps labels out of the answer box ("Answer:", "Result:")', () => {
    expect(
      breaches(({ block }, say) => {
        if (block?.t === 'ex' && /^\s*(<b>)?\s*(answer|result|conclusion|final answer)\s*[:.]/i.test(block.ans)) say(clip(plain(block.ans)));
      }),
    ).toEqual([]);
  });

  it('gives the right option of an MCQ no nudge, and every wrong option one (or reports it)', () => {
    expect(
      breaches(({ block }, say) => {
        if (block?.t !== 'mcq') return;
        block.opts.forEach((o, i) => {
          if (i === block.correct && o.nudge) say(`right option ${'ABCD'[i]} has a nudge`);
        });
      }),
    ).toEqual([]);
  });
});
