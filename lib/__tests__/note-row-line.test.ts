import { noteRowLine } from '@/lib/note-row';

/**
 * The third line of a note's row in the list.
 *
 * It used to be the server's `preview` — "84 board items · 1 of 7 parts" — and
 * the count described board items, which the note page no longer renders at
 * all. The cases below are the editorial rules: name the chapter, and mention
 * coverage only when the class did not finish.
 */

describe('noteRowLine', () => {
  it('names the chapter, which the row never showed', () => {
    expect(
      noteRowLine({
        chapter: 'Coordination Compounds',
        concept: 'Crystal Field Theory and d-Orbital Splitting',
        segments_covered: 7,
        total_segments: 7,
      })
    ).toBe('Coordination Compounds');
  });

  it('adds coverage only when the class stopped early', () => {
    expect(
      noteRowLine({
        chapter: 'Coordination Compounds',
        concept: 'Crystal field theory',
        segments_covered: 1,
        total_segments: 7,
      })
    ).toBe('Coordination Compounds · 1 of 7 parts');
  });

  it('says nothing about coverage on a class that finished', () => {
    expect(
      noteRowLine({ chapter: 'Electrostatics', concept: 'x', segments_covered: 5, total_segments: 5 })
    ).toBe('Electrostatics');
  });

  it('does not repeat the chapter when it is already the title', () => {
    expect(
      noteRowLine({ chapter: 'Thermodynamics', concept: 'thermodynamics', total_segments: 0 })
    ).toBeNull();
  });

  it('is null rather than empty when there is nothing worth saying', () => {
    expect(noteRowLine({})).toBeNull();
    expect(noteRowLine({ chapter: '   ', concept: null })).toBeNull();
  });

  it('survives a note with coverage but no chapter', () => {
    expect(noteRowLine({ concept: 'Torque', segments_covered: 2, total_segments: 9 })).toBe(
      '2 of 9 parts'
    );
  });
});
