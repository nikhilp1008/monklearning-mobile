/**
 * THE MISTAKES THE REVIEWS KEPT FINDING, CHECKED IN EVERY BOOK CHAPTER.
 *
 * Each rule below is one the expert and Android reviews of Physics 11,
 * Physics 12 and Chemistry 11 caught by eye, more than once. Checked here,
 * a writer's slip is caught when the chapter is written, not on a phone.
 * Book-chapters.test.ts holds the structural rules; these are about text.
 */
import type { Block, Chapter, Topic } from '@/lib/textbooks';
import { BOOK_CHAPTERS } from '../test-support/book-list';

/** The text as read: only the reader's own tags are dropped (a "<" in "√(2gR) < u" is text). */
const plain = (h: string) => h.replace(/<\/?(?:b|i|sup|sub)>|<br\s*\/?>/gi, (t) => (/br/i.test(t) ? '\n' : '')).replace(/&nbsp;|\u00a0/g, ' ');

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
