import { readFileSync } from 'fs';
import { join } from 'path';
import ch1 from '@/content/textbooks/phy-11-01-units-measurements';
import ch2 from '@/content/textbooks/phy-11-02-motion-straight-line';
import ch3 from '@/content/textbooks/phy-11-03-motion-plane';
import ch4 from '@/content/textbooks/phy-11-04-laws-of-motion';
import ch5 from '@/content/textbooks/phy-11-05-work-energy-power';
import ch6 from '@/content/textbooks/phy-11-06-rotational-motion';
import ch7 from '@/content/textbooks/phy-11-07-gravitation';
import ch8 from '@/content/textbooks/phy-11-08-mech-solids';
import ch9 from '@/content/textbooks/phy-11-09-mech-fluids';
import ch10 from '@/content/textbooks/phy-11-10-thermal-properties';
import ch11 from '@/content/textbooks/phy-11-11-thermodynamics';
import ch12 from '@/content/textbooks/phy-11-12-kinetic-theory';
import ch13 from '@/content/textbooks/phy-11-13-oscillations';
import ch14 from '@/content/textbooks/phy-11-14-waves';
import c12ch1 from '@/content/textbooks/phy-12-01-electric-charges-fields';
import c12ch2 from '@/content/textbooks/phy-12-02-potential-capacitance';
import c12ch3 from '@/content/textbooks/phy-12-03-current-electricity';
import c12ch4 from '@/content/textbooks/phy-12-04-moving-charges-magnetism';
import c12ch5 from '@/content/textbooks/phy-12-05-magnetism-matter';
import c12ch6 from '@/content/textbooks/phy-12-06-electromagnetic-induction';
import c12ch7 from '@/content/textbooks/phy-12-07-alternating-current';
import c12ch8 from '@/content/textbooks/phy-12-08-electromagnetic-waves';
import c12ch9 from '@/content/textbooks/phy-12-09-ray-optics';
import c12ch10 from '@/content/textbooks/phy-12-10-wave-optics';
import c12ch11 from '@/content/textbooks/phy-12-11-dual-nature';
import c12ch12 from '@/content/textbooks/phy-12-12-atoms';
import c12ch13 from '@/content/textbooks/phy-12-13-nuclei';
import c12ch14 from '@/content/textbooks/phy-12-14-semiconductors';
import chem11ch1 from '@/content/textbooks/chem-11-01-basic-concepts';
import chem11ch2 from '@/content/textbooks/chem-11-02-structure-of-atom';
import chem11ch3 from '@/content/textbooks/chem-11-03-classification';
import chem11ch4 from '@/content/textbooks/chem-11-04-chemical-bonding';
import chem11ch5 from '@/content/textbooks/chem-11-05-thermodynamics';
import chem11ch6 from '@/content/textbooks/chem-11-06-equilibrium';
import chem11ch7 from '@/content/textbooks/chem-11-07-redox';
import chem11ch8 from '@/content/textbooks/chem-11-08-organic-basics';
import chem11ch9 from '@/content/textbooks/chem-11-09-hydrocarbons';
import chem12ch1 from '@/content/textbooks/chem-12-01-solutions';
import chem12ch2 from '@/content/textbooks/chem-12-02-electrochemistry';
import chem12ch3 from '@/content/textbooks/chem-12-03-chemical-kinetics';
import chem12ch4 from '@/content/textbooks/chem-12-04-d-and-f-block';
import chem12ch5 from '@/content/textbooks/chem-12-05-coordination-compounds';
import chem12ch6 from '@/content/textbooks/chem-12-06-haloalkanes-haloarenes';
import chem12ch7 from '@/content/textbooks/chem-12-07-alcohols-phenols-ethers';
import chem12ch8 from '@/content/textbooks/chem-12-08-aldehydes-ketones-carboxylic-acids';
import chem12ch9 from '@/content/textbooks/chem-12-09-amines';
import chem12ch10 from '@/content/textbooks/chem-12-10-biomolecules';
import chem12ch11 from '@/content/textbooks/chem-12-11-p-block';
import math11ch1 from '@/content/textbooks/math-11-01-sets';
import math11ch2 from '@/content/textbooks/math-11-02-relations';
import math11ch3 from '@/content/textbooks/math-11-03-trigonometry';
import math11ch4 from '@/content/textbooks/math-11-04-complex';
import math11ch5 from '@/content/textbooks/math-11-05-inequalities';
import math11ch6 from '@/content/textbooks/math-11-06-permutations';
import { DIAGRAMS, diagramById } from '@/lib/diagrams';
import { KEY_POINTS } from '@/lib/revise/keypoints';
import type { Chapter } from '@/lib/textbooks';

/**
 * THE CHAPTERS WRITTEN WORD FOR WORD FROM THE MASTER REFERENCE BOOKS.
 *
 * What the reader relies on and a careless copy breaks: the book's sections
 * as parts, figures that exist, inline markup the app can draw, and none of
 * the PDF's maths letters (𝑥, 𝜃), which the app's fonts do not carry and
 * which would also hide a letter from the Markup italics.
 */
const ALLOWED_TAGS = /<\/?(b|i|sup|sub|frac|binom|num|den)>|<br\s*\/?>/gi;
/**
 * Mathematical Alphanumeric Symbols, U+1D400 to U+1D7FF: the PDF's italic letters.
 * Not the double-struck capitals (𝕎, 𝕋: U+1D538–U+1D56B), which are symbols of their own and drawn in STIX Two Math.
 */
const PDF_MATH = /(?![\u{1D538}-\u{1D56B}])[\u{1D400}-\u{1D7FF}]/u;

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

for (const chapter of [ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, ch10, ch11, ch12, ch13, ch14, c12ch1, c12ch2, c12ch3, c12ch4, c12ch5, c12ch6, c12ch7, c12ch8, c12ch9, c12ch10, c12ch11, c12ch12, c12ch13, c12ch14, chem11ch1, chem11ch2, chem11ch3, chem11ch4, chem11ch5, chem11ch6, chem11ch7, chem11ch8, chem11ch9, chem12ch1, chem12ch2, chem12ch3, chem12ch4, chem12ch5, chem12ch6, chem12ch7, chem12ch8, chem12ch9, chem12ch10, chem12ch11, math11ch1, math11ch2, math11ch3, math11ch4, math11ch5, math11ch6] as Chapter[]) {
  const klass = (/\d+/.exec(chapter.klass) ?? [''])[0];
  describe(`${chapter.subject} ${klass} Chapter ${Number(chapter.chapter)}, from the book`, () => {
    // A chapter may open with the book's own guide (n "00"), before Topic 01.
    const regular = chapter.topics.filter((t) => !t.extra && t.n !== '00');
    const extras = chapter.topics.filter((t) => t.extra);

    it('puts a chapter guide, if any, first', () => {
      expect(chapter.topics.slice(1).some((t) => t.n === '00')).toBe(false);
    });

    it('lists its topics before its additional topics', () => {
      const firstExtra = chapter.topics.findIndex((t) => t.extra);
      if (firstExtra >= 0) expect(chapter.topics.slice(firstExtra).every((t) => t.extra)).toBe(true);
    });

    // The additional ones run on from the book's own first letter: Mathematics 11
    // Chapter 2's start at F, continuing the supplement's Procedure E; Chapter 3's
    // are the supplement's addendum C (examples C1–C4) and the closing "Topic D".
    const FIRST_EXTRA: Record<string, string> = { 'Mathematics 11 02': 'F', 'Mathematics 11 03': 'C' };
    it('numbers topics 01, 02, … and letters the additional ones A, B, …', () => {
      expect(regular.map((t) => t.n)).toEqual(regular.map((_, i) => String(i + 1).padStart(2, '0')));
      const first = (FIRST_EXTRA[`${chapter.subject} ${klass} ${chapter.chapter}`] ?? 'A').charCodeAt(0);
      expect(extras.map((t) => t.n)).toEqual(extras.map((_, i) => String.fromCharCode(first + i)));
    });

    it('splits every topic at the book\'s own sections, starting with one', () => {
      for (const t of chapter.topics) {
        expect(t.blocks[0]?.t).toBe('part');
        // An additional topic that is only a practice set (Physics 12 Ch 12 G, the book's
        // "Comprehensive Practice", one heading and no text of its own) has one part.
        const practiceOnly = !!t.extra && t.blocks.length === 2 && t.blocks[1].t === 'practice';
        // So is a chapter's opening that is only one box of the book's (Physics 12 Ch 14's syllabus scope).
        const oneBoxGuide = t.n === '00' && t.blocks.length === 2;
        // And the book's "Summary Checklist" printed with no lead-in of its own (Chemistry 12 Ch 9 E).
        const checklistOnly = !!t.extra && t.title === 'Summary Checklist' && t.blocks.length === 2;
        expect(t.blocks.filter((b) => b.t === 'part').length).toBeGreaterThanOrEqual(practiceOnly || oneBoxGuide || checklistOnly ? 1 : 2);
      }
    });

    it('leaves no empty part', () => {
      for (const t of chapter.topics)
        t.blocks.forEach((b, i) => {
          if (b.t === 'part') expect(t.blocks[i + 1] && t.blocks[i + 1].t !== 'part').toBeTruthy();
        });
    });

    it('draws only figures that exist', () => {
      const ids = chapter.topics
        .flatMap((t) => t.blocks)
        .flatMap((b) => (b.t === 'fig' ? [b.id] : b.t === 'ex' && b.fig ? [b.fig] : []));
      expect(ids.filter((id) => !diagramById(id))).toEqual([]);
    });

    it('uses only the markup the reader draws', () => {
      // Only what looks like a tag: "< 5 drop; > 5 round up" is text.
      const bad = strings(chapter.topics).flatMap((s) => (s.replace(ALLOWED_TAGS, '').match(/<\/?[a-zA-Z][^>]*>/g) ?? []));
      expect([...new Set(bad)]).toEqual([]);
    });

    it('carries none of the PDF\'s maths letters', () => {
      expect(strings(chapter.topics).filter((s) => PDF_MATH.test(s))).toEqual([]);
    });

    it('closes every tag it opens', () => {
      for (const s of strings(chapter.topics))
        for (const tag of ['b', 'i', 'sup', 'sub', 'frac', 'binom', 'num', 'den']) {
          const open = (s.match(new RegExp(`<${tag}>`, 'g')) ?? []).length;
          const close = (s.match(new RegExp(`</${tag}>`, 'g')) ?? []).length;
          expect(`${tag}:${open}`).toBe(`${tag}:${close}`);
        }
    });

    it('shows every diagram of the chapter somewhere in its text', () => {
      const used = new Set(
        chapter.topics.flatMap((t) => t.blocks).flatMap((b) => (b.t === 'fig' ? [b.id] : b.t === 'ex' && b.fig ? [b.fig] : []))
      );
      const key = `${chapter.subject.toLowerCase()}|${klass}|${Number(chapter.chapter)}`;
      expect((DIAGRAMS[key] ?? []).map((d) => d.id).filter((id) => !used.has(id))).toEqual([]);
    });

    it('gives every MCQ a correct option that exists', () => {
      for (const b of chapter.topics.flatMap((t) => t.blocks))
        if (b.t === 'mcq') expect(b.correct >= 0 && b.correct < b.opts.length).toBe(true);
    });
  });
}

// The catalogue looks a chapter up by chapterKey(), which turns every run of
// punctuation into one space ("p-Block" → "p block"). A registry key written
// any other way can never be found, so the chapter never opens (the Chemistry
// 11 p-Block key, caught on Android, Oct 31). Read from the source because
// importing lib/textbooks pulls in the Supabase client.
describe('the chapter registry', () => {
  it('writes every key the way chapterKey() builds it', () => {
    const src = readFileSync(join(__dirname, '../../../lib/textbooks.ts'), 'utf8');
    const keys = [...src.matchAll(/^\s+'([^']+\|\d+\|[^']+)':\s*\(\)\s*=>/gm)].map((m) => m[1]);
    expect(keys.length).toBeGreaterThan(50);
    expect(keys.filter((k) => !/^[a-z]+\|\d+\|[a-z0-9]+(?: [a-z0-9]+)*$/.test(k))).toEqual([]);
  });
});

// The p-Block is one chapter from two books (Class 11 Groups 13–14, then Class 12
// Groups 15–18), so its drawings and key points carry topic indexes in the joined
// order. A wrong index files a drawing or a point under the wrong topic.
describe('Chemistry 12 p-Block, joined from two books', () => {
  const where = new Map<string, number>();
  chem12ch11.topics.forEach((t, i) => t.blocks.forEach((b) => b.t === 'fig' && where.set(b.id, i)));
  it('files every drawing under the topic that shows it', () => {
    const off = (DIAGRAMS['chemistry|12|11'] ?? []).filter((d) => where.get(d.id) !== d.topic).map((d) => `${d.id}: ${d.topic} ≠ ${where.get(d.id)}`);
    expect(off).toEqual([]);
    expect((DIAGRAMS['chemistry|12|11'] ?? []).length).toBe(17);
  });
  it('files every key point under a real topic, Groups 13–14 first', () => {
    const points = KEY_POINTS['chemistry|12|11'] ?? [];
    expect(points.length).toBeGreaterThan(90);
    expect(points.every((p) => p.topic >= 0 && p.topic < chem12ch11.topics.length)).toBe(true);
    expect(points.map((p) => p.topic)).toEqual([...points.map((p) => p.topic)].sort((a, b) => a - b));
    expect(chem12ch11.topics[0].title).toBe('General Introduction to the p-Block');
    expect(chem12ch11.topics[6].title).toBe('Group 15: The Nitrogen Family');
  });
});
