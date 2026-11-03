import { SCOPE_BOOKS, SCOPE_EXAMS, SCOPE_SUBJECTS, scopeUnit } from '@/lib/exam-scope';
import { askScope, type ScopeAnswerRow } from '@/lib/exam-scope-search';

const rows = (exam: 'jee' | 'neet', query: string): ScopeAnswerRow[] => {
  const answer = askScope(exam, query);
  if (answer?.kind !== 'rows')
    throw new Error(`"${query}" gave no rows: ${JSON.stringify(answer)}`);
  return answer.rows;
};
const topics = (list: ScopeAnswerRow[]) => list.map((r) => `${r.yes ? 'in' : 'out'}:${r.topic}`);

describe('the syllabus data', () => {
  it('has every official unit', () => {
    expect(SCOPE_SUBJECTS.physics.units).toHaveLength(20);
    expect(SCOPE_SUBJECTS.chemistry.units).toHaveLength(20);
    expect(SCOPE_SUBJECTS.maths.units).toHaveLength(14);
    expect(SCOPE_SUBJECTS.biology.units).toHaveLength(10);
    expect(SCOPE_EXAMS.jee.total).toBe(54);
    expect(SCOPE_EXAMS.neet.total).toBe(50);
  });

  it('points every book chapter at a real unit', () => {
    for (const subject of ['physics', 'chemistry', 'maths', 'biology'] as const) {
      for (const level of [11, 12] as const) {
        for (const chapter of SCOPE_BOOKS[subject][level]) {
          if (chapter.unit) expect(scopeUnit('jee', subject, chapter.unit)).not.toBeNull();
        }
      }
    }
  });

  it('gives each theme every unit once', () => {
    for (const subject of Object.values(SCOPE_SUBJECTS)) {
      const listed = subject.themes.flatMap((t) => t.units).sort((a, b) => a - b);
      expect(listed).toEqual(subject.units.map((u) => u.n));
    }
  });
});

describe('Is it in your exam?', () => {
  it('answers a topic that is in, and says which subject', () => {
    const [row] = rows('jee', 'Logic gates');
    expect(row).toMatchObject({ yes: true, subject: 'physics', n: 19 });
  });

  it('answers a topic that is out, with nothing to open', () => {
    expect(rows('jee', 'Doppler effect')).toEqual([
      expect.objectContaining({ yes: false, topic: 'Doppler effect' }),
    ]);
    expect(rows('jee', 'Doppler effect')[0].n).toBeUndefined();
    expect(rows('neet', 'Potentiometer')[0].yes).toBe(false);
    expect(rows('neet', 'Cyclotron')[0].yes).toBe(false);
  });

  it('says what a chapter leaves out', () => {
    expect(rows('jee', 'Waves')[0]).toMatchObject({
      yes: true,
      topic: 'Waves',
      except: ['Doppler effect'],
    });
    expect(rows('jee', 'Three Dimensional Geometry')[0].except).toEqual(['Equation of a plane']);
    expect(rows('jee', 'p-Block Elements')[0].note).toBe('General trends only');
    expect(rows('neet', 'Neural control')[0].except).toEqual(['Sense organs']);
  });

  it('says No to a chapter that is out', () => {
    expect(topics(rows('jee', 'Linear Programming'))).toEqual(['out:Linear Programming']);
    expect(topics(rows('jee', 'Linear Inequalities'))).toEqual(['out:Linear Inequalities']);
  });

  it('answers the same chapter in each subject', () => {
    expect(rows('jee', 'Thermodynamics').map((r) => r.subject)).toEqual(['physics', 'chemistry']);
  });

  it('never hides one side of a word that is both in and out', () => {
    expect(topics(rows('jee', 'Induction'))).toEqual([
      'in:Electromagnetic Induction',
      'out:Mathematical Induction',
    ]);
    const hydrogen = rows('jee', 'Hydrogen');
    expect(hydrogen.some((r) => r.yes)).toBe(true);
    expect(hydrogen.some((r) => !r.yes)).toBe(true);
    const reproduction = rows('neet', 'Reproduction');
    expect(reproduction.some((r) => r.yes)).toBe(true);
    expect(reproduction.some((r) => !r.yes)).toBe(true);
  });

  it('does not let a short word answer for a longer one', () => {
    expect(rows('jee', 'sols').every((r) => r.yes)).toBe(true);
    expect(topics(rows('jee', 'plane')).join()).not.toContain('Kepler');
  });

  it('does not answer an out topic from unrelated words nearby', () => {
    expect(topics(rows('jee', 'equation of a plane'))).toEqual(['out:Equation of a plane']);
  });

  it('catches an out topic however it is worded', () => {
    expect(rows('jee', 'Carnot cycle')[0]).toMatchObject({
      yes: false,
      topic: 'Carnot engine',
    });
  });

  it('answers a whole subject', () => {
    expect(rows('jee', 'Physics')[0]).toMatchObject({
      yes: true,
      wholeSubject: true,
    });
    expect(rows('jee', 'Biology')[0].yes).toBe(false);
    expect(rows('neet', 'Maths')[0].yes).toBe(false);
    expect(rows('neet', 'mathematics')[0].yes).toBe(false);
  });

  it('says No to what only the other exam has', () => {
    expect(rows('neet', 'Bayes')[0].yes).toBe(false);
    expect(rows('jee', 'Lac operon')[0].yes).toBe(false);
  });

  it('asks instead of guessing at a misspelling', () => {
    expect(askScope('jee', 'Dopler efect')).toEqual({
      kind: 'guess',
      guess: 'Doppler effect',
    });
    expect(askScope('jee', 'Dopler')).toEqual({ kind: 'guess', guess: 'Doppler effect' });
    expect(askScope('neet', 'Dopler')).toEqual({ kind: 'guess', guess: 'Doppler effect' });
    expect(askScope('jee', 'bernouli')).toMatchObject({ kind: 'guess', guess: 'Bernoulli' });
  });

  it('understands short forms, other spellings and other words', () => {
    for (const query of [
      'SHM',
      'EMI',
      'AC',
      'polarisation',
      'polarization',
      'Ideal gas',
      'Equations of motion',
    ]) {
      expect(rows('jee', query)[0].yes).toBe(true);
    }
    expect(rows('jee', 'pH')[0].subject).toBe('chemistry');
    expect(rows('neet', 'Krebs cycle')[0].yes).toBe(true);
  });

  it('gives two topics an answer each', () => {
    expect(rows('jee', "Kepler's Laws and Satellites")).toHaveLength(2);
  });

  it('says not found, not No, to a word it does not know', () => {
    expect(askScope('jee', 'cricket')).toEqual({ kind: 'none' });
    expect(askScope('jee', 'F=ma')).toEqual({ kind: 'none' });
  });

  it('waits for enough letters', () => {
    expect(askScope('jee', 'xy')).toBeNull();
    expect(askScope('jee', '')).toBeNull();
  });

  it('ignores the words students add around a topic', () => {
    expect(rows('jee', 'class 11 waves chapter')[0].topic).toBe('Waves');
  });
});
