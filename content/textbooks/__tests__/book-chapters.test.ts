import ch1 from '@/content/textbooks/phy-11-01-units-measurements';
import ch2 from '@/content/textbooks/phy-11-02-motion-straight-line';
import ch3 from '@/content/textbooks/phy-11-03-motion-plane';
import ch4 from '@/content/textbooks/phy-11-04-laws-of-motion';
import ch5 from '@/content/textbooks/phy-11-05-work-energy-power';
import ch6 from '@/content/textbooks/phy-11-06-rotational-motion';
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

for (const chapter of [ch1, ch2, ch3, ch4, ch5, ch6] as Chapter[]) {
  describe(`Physics 11 Chapter ${Number(chapter.chapter)}, from the book`, () => {
    const regular = chapter.topics.filter((t) => !t.extra);
    const extras = chapter.topics.filter((t) => t.extra);

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
      const key = `physics|11|${Number(chapter.chapter)}`;
      expect((DIAGRAMS[key] ?? []).map((d) => d.id).filter((id) => !used.has(id))).toEqual([]);
    });

    it('gives every MCQ a correct option that exists', () => {
      for (const b of chapter.topics.flatMap((t) => t.blocks))
        if (b.t === 'mcq') expect(b.correct >= 0 && b.correct < b.opts.length).toBe(true);
    });
  });
}
