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
import chem11ch1 from '@/content/textbooks/chem-11-01-basic-concepts';
import chem11ch2 from '@/content/textbooks/chem-11-02-structure-of-atom';
import chem11ch3 from '@/content/textbooks/chem-11-03-classification';
import chem11ch4 from '@/content/textbooks/chem-11-04-chemical-bonding';
import chem11ch5 from '@/content/textbooks/chem-11-05-thermodynamics';
import chem11ch6 from '@/content/textbooks/chem-11-06-equilibrium';
import { DIAGRAMS, diagramById } from '@/lib/diagrams';
import type { Chapter } from '@/lib/textbooks';

/**
 * THE CHAPTERS WRITTEN WORD FOR WORD FROM THE MASTER REFERENCE BOOKS.
 *
 * What the reader relies on and a careless copy breaks: the book's sections
 * as parts, figures that exist, inline markup the app can draw, and none of
 * the PDF's maths letters (𝑥, 𝜃), which the app's fonts do not carry and
 * which would also hide a letter from the Markup italics.
 */
const ALLOWED_TAGS = /<\/?(b|i|sup|sub)>|<br\s*\/?>/gi;
/** Mathematical Alphanumeric Symbols, U+1D400 to U+1D7FF: the PDF's italic letters. */
const PDF_MATH = /[\u{1D400}-\u{1D7FF}]/u;

function strings(v: unknown, out: string[] = []): string[] {
  if (typeof v === 'string') out.push(v);
  else if (Array.isArray(v)) v.forEach((x) => strings(x, out));
  else if (v && typeof v === 'object') Object.values(v).forEach((x) => strings(x, out));
  return out;
}

for (const chapter of [ch1, ch2, ch3, ch4, ch5, ch6, ch7, ch8, ch9, ch10, ch11, ch12, ch13, ch14, c12ch1, c12ch2, c12ch3, c12ch4, c12ch5, c12ch6, c12ch7, c12ch8, chem11ch1, chem11ch2, chem11ch3, chem11ch4, chem11ch5, chem11ch6] as Chapter[]) {
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

    it('numbers topics 01, 02, … and letters the additional ones A, B, …', () => {
      expect(regular.map((t) => t.n)).toEqual(regular.map((_, i) => String(i + 1).padStart(2, '0')));
      expect(extras.map((t) => t.n)).toEqual(extras.map((_, i) => String.fromCharCode(65 + i)));
    });

    it('splits every topic at the book\'s own sections, starting with one', () => {
      for (const t of chapter.topics) {
        expect(t.blocks[0]?.t).toBe('part');
        expect(t.blocks.filter((b) => b.t === 'part').length).toBeGreaterThanOrEqual(2);
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
        for (const tag of ['b', 'i', 'sup', 'sub']) {
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
