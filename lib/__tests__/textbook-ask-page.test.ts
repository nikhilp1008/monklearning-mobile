import fs from 'fs';
import path from 'path';

import units1 from '@/content/textbooks/phy-11-01-units-measurements';
import { buildParts } from '@/lib/chapter-essentials';
import {
  blockText,
  groupBlocks,
  ON_SCREEN_END,
  ON_SCREEN_START,
  pageTextAround,
  renderBlockText,
  type Chapter,
} from '@/lib/textbooks';

// lib/textbooks reaches the network client through the exam helper; none of
// it is used here.
jest.mock('@/lib/drona', () => ({ examSubjects: () => [] }));

/**
 * ASK TEACHER SEES WHAT IS ON SCREEN.
 *
 * 317 of 329 topics were longer than the 5,500 characters sent, and the text
 * was cut from the top: a student halfway down a topic asked about an example
 * the teacher was never shown. Tables and redrawn figures sent nothing.
 */

const units = Array.from({ length: 40 }, (_, i) => `Block ${i} `.padEnd(400, '.'));

describe('pageTextAround', () => {
  it('keeps the blocks on screen, marked, even at the bottom of a long topic', () => {
    const text = pageTextAround('Topic', units, [36, 37]);
    expect(text.length).toBeLessThanOrEqual(5500);
    const start = text.indexOf(ON_SCREEN_START);
    const end = text.indexOf(ON_SCREEN_END);
    expect(start).toBeGreaterThan(0);
    expect(text.slice(start, end)).toContain('Block 36');
    expect(text.slice(start, end)).toContain('Block 37');
    expect(text).not.toContain('Block 0 ');      // the top of the topic gave way
    expect(text.startsWith('Topic\n…')).toBe(true);
  });

  it('fills round the screen, the block above first', () => {
    const text = pageTextAround('Topic', units, [20, 20]);
    expect(text).toContain('Block 19');
    expect(text).toContain('Block 21');
    expect(text.indexOf('Block 19')).toBeLessThan(text.indexOf(ON_SCREEN_START));
    expect(text.indexOf('Block 21')).toBeGreaterThan(text.indexOf(ON_SCREEN_END));
  });

  it('sends a short page whole, still marking the screen', () => {
    const text = pageTextAround('Topic', ['a', 'b', 'c'], [1, 1]);
    expect(text).toBe(['Topic', 'a', ON_SCREEN_START, 'b', ON_SCREEN_END, 'c'].join('\n'));
  });

  it('without a measurement, is the page from its top', () => {
    const text = pageTextAround('Topic', units, null);
    expect(text.startsWith('Topic\nBlock 0')).toBe(true);
    expect(text).not.toContain(ON_SCREEN_START);
    expect(text.length).toBeLessThanOrEqual(5500);
  });

  it('cuts one screen longer than the cap to the cap', () => {
    const text = pageTextAround('Topic', units, [0, 39]);
    expect(text.length).toBeLessThanOrEqual(5500);
    expect(text).toContain(ON_SCREEN_END);
  });
});

describe('blockText', () => {
  it('sends a table', () => {
    expect(
      blockText({ t: 'table', title: 'SI base units', head: ['Quantity', 'Unit'], rows: [['Length', 'metre']], note: null }),
    ).toBe('SI base units\nQuantity | Unit\nLength | metre');
  });

  it('keeps powers and subscripts', () => {
    expect(blockText({ t: 'p', html: '1 AU ≈ 1.496 × 10<sup>11</sup> m; n<sub>1</sub>u<sub>1</sub>' })).toBe(
      '1 AU ≈ 1.496 × 10^(11) m; n_(1)u_(1)',
    );
  });

  it('sends a redrawn figure by name', () => {
    const fig = buildParts(units1).flatMap((p) => p.blocks).find((b) => b.t === 'fig');
    expect(fig).toBeDefined();
    expect(blockText(fig!)).toMatch(/^Figure: \S/);
  });

  it('marks the card showing in a row of examples, so "this example" is that one', () => {
    const ex = (tag: string) => ({ t: 'ex' as const, tag, q: `Question ${tag}`, steps: ['step'], ans: 'x' });
    const text = renderBlockText({ t: 'exGroup', items: [ex('A'), ex('B'), ex('C')] }, 1);
    expect(text.startsWith('[The card on the student\'s screen, 2 of 3: "this example" or "this question" means this one]\nExample B: Question B\nstep\nAnswer: x\n')).toBe(true);
    expect(text).toContain('[The other cards in this set, not on screen]\nExample A');
    expect(renderBlockText({ t: 'exGroup', items: [ex('A')] }, 0)).not.toContain('[The card');
  });

  it('every part of every chapter fits the cap round any screen', () => {
    const dir = path.join(__dirname, '..', '..', 'content', 'textbooks');
    for (const f of fs.readdirSync(dir).filter((x) => x.endsWith('.ts'))) {
      // eslint-disable-next-line @typescript-eslint/no-require-imports -- every chapter on disk
      const ch: Chapter = require(path.join(dir, f)).default;
      for (const t of ch.topics) {
        const drawn = groupBlocks(t.blocks).map(renderBlockText);
        const mid = Math.floor(drawn.length / 2);
        expect(pageTextAround(t.title, drawn, [mid, mid]).length).toBeLessThanOrEqual(5500);
      }
    }
  });
});
