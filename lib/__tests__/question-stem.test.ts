/**
 * parseStem against real stems from the production `questions` table (read
 * 2026-11-20). Each fixture is the exact question_text a student saw broken.
 */
import { hasStructure, parseStem } from '@/lib/question-stem';

// 37feb4c9-3c29-5221-af5b-e9eae91a4a04 (Molecular Basis of Inheritance).
const ECOLI_SHIFT =
  'E. coli whose DNA was entirely $^{15}\\mathrm{N}/^{15}\\mathrm{N}$ was shifted to $^{14}\\mathrm{N}$ medium. The generation time is 30 minutes. In DNA taken 2 hours after the shift, what fraction of the molecules is hybrid ($^{15}\\mathrm{N}/^{14}\\mathrm{N}$)?';
// efdd530b-65d2-507e-90fa-1f7150ce1c08.
const ECOLI_FIVE =
  'E. coli whose DNA is entirely $^{15}\\mathrm{N}/^{15}\\mathrm{N}$ is transferred to $^{14}\\mathrm{N}$ medium and allowed to divide for five generations. In the DNA extracted at that stage, what is the ratio of hybrid ($^{15}\\mathrm{N}/^{14}\\mathrm{N}$) to light ($^{14}\\mathrm{N}/^{14}\\mathrm{N}$) DNA molecules?';
// 423a069d-22b9-5e6b-bfd0-7c38e9f696b1 (Molecular Basis of Inheritance).
const MATCH_DESCRIPTION =
  'Match the item in Column I with the description in Column II.\n\nColumn I:\n(a) Meselson and Stahl\n(b) Taylor and co-workers\n(c) Conservative model\n(d) Semi-conservative model\n\nColumn II:\n(p) Vicia faba root tips with radioactive thymidine\n(q) E. coli grown in $^{15}\\mathrm{N}$ with a CsCl gradient\n(r) Predicts one fully heavy and one fully light band after the first generation\n(s) Each daughter molecule has one old and one new strand';
// 2981d7cb-1299-5ab5-9c46-c23ad406607d (mock test).
const NOBLE_GASES =
  'Match the uses of the noble gases given in List-1 with the entries in List-2.\n\n| List - 1 | List - 2 |\n| :--- | :--- |\n| A) He | 1) Used in discharge tubes |\n| B) Ne | 2) Used in light bulbs designed for special purposes |\n| C) Ar | 3) Used to produce and sustain powerful superconducting magnets in NMR and MRI |\n| D) Kr | 4) Used to provide an inert atmosphere in high temperature metallurgical processes |\n\nThe correct match, in the order A, B, C, D, is:';

describe('a species abbreviation is prose, not a list marker', () => {
  it.each([ECOLI_SHIFT, ECOLI_FIVE])('keeps "E. coli" at the start of the stem', (stem) => {
    const blocks = parseStem(stem);
    expect(blocks).toEqual([{ kind: 'lead', body: stem }]);
    expect(hasStructure(blocks)).toBe(false);
  });

  it.each([
    'S. aureus is a Gram-positive coccus. Which statement is correct?',
    'B. subtilis forms endospores. Identify the correct statement.',
    'A. tumefaciens transfers T-DNA into plant cells.',
    'D. melanogaster has four pairs of chromosomes.',
  ])('keeps other genus abbreviations whole: %s', (stem) => {
    expect(parseStem(stem)[0]).toEqual({ kind: 'lead', body: stem });
  });

  it('still reads real dot-labelled rows, lowercase bodies included', () => {
    const blocks = parseStem(
      'Which of the following are lymphoid organs?\nA. thymus\nB. bone marrow\nC. spleen\nD. lymph nodes\nE. is governed by series of multiple alleles.'
    );
    expect(blocks.filter((b) => b.kind === 'listitem').map((b) => [b.label, b.body])).toEqual([
      ['A', 'thymus'],
      ['B', 'bone marrow'],
      ['C', 'spleen'],
      ['D', 'lymph nodes'],
      ['E', 'is governed by series of multiple alleles.'],
    ]);
  });

  it('still reads "E." alone before a statement, and the bracket forms', () => {
    expect(parseStem('E.\nPhotosynthesis occurs in chloroplasts.')).toEqual([
      { kind: 'listitem', label: 'E', body: 'Photosynthesis occurs in chloroplasts.' },
    ]);
    expect(parseStem('B) Ne\n(a) Stomata').map((b) => b.label)).toEqual(['B', 'A']);
  });
});

describe('an instruction finished on the next line stays one sentence', () => {
  it('joins "Column II." back onto "Match … description in"', () => {
    const blocks = parseStem(MATCH_DESCRIPTION);
    expect(blocks[0]).toEqual({
      kind: 'tail',
      body: 'Match the item in Column I with the description in Column II.',
    });
    expect(blocks.some((b) => b.kind === 'lead' && /^Column II\.$/.test(b.body))).toBe(false);
    // The colon headings that introduce each list are still their own lines.
    // (The (p)–(s) rows stay prose lines: LISTITEM's letters stop at H, which
    // is unchanged here.)
    const leads = blocks.filter((b) => b.kind === 'lead').map((b) => b.body);
    expect(leads.slice(0, 2)).toEqual(['Column I:', 'Column II:']);
    expect(blocks.filter((b) => b.kind === 'listitem').map((b) => b.label)).toEqual([
      'A', 'B', 'C', 'D',
    ]);
  });

  it('joins a sentence that the extraction broke across a newline', () => {
    const blocks = parseStem(
      'Match the item in Column I with the description in\nColumn II.\nColumn I:\nA. Larynx\nB. Pleura\nColumn II:\n(p) Sound box\n(q) Double membrane'
    );
    expect(blocks[0]).toEqual({
      kind: 'tail',
      body: 'Match the item in Column I with the description in Column II.',
    });
    expect(blocks[1]).toEqual({ kind: 'lead', body: 'Column I:' });
  });

  it('leaves a "Column II." that starts its own sentence alone', () => {
    const blocks = parseStem('Read the table.\nColumn II.\n(a) one\n(b) two');
    expect(blocks[1]).toEqual({ kind: 'lead', body: 'Column II.' });
  });
});

describe('the noble-gas match table', () => {
  it('parses to a two-column table with a header', () => {
    const table = parseStem(NOBLE_GASES).find((b) => b.kind === 'table');
    expect(table?.hasHeader).toBe(true);
    expect(table?.rows?.[0]).toEqual(['List - 1', 'List - 2']);
    expect(table?.rows?.[2]).toEqual(['B) Ne', '2) Used in light bulbs designed for special purposes']);
    expect(table?.rows?.every((r) => r.length === 2)).toBe(true);
  });
});
