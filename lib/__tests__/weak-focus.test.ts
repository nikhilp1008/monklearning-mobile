import { effectiveHeadroom, sampleWeakChapterId } from '@/lib/weak-focus';
import type { ProgressChapter } from '@/lib/progress';

let mockProgress: unknown = null;
let mockAnswers: unknown = null;
jest.mock('@/lib/progress', () => ({
  getCachedProgress: () => mockProgress,
  getProgress: () => Promise.resolve(),
}));
jest.mock('@/lib/onboarding-answers', () => ({ getCachedAnswers: () => mockAnswers }));

const ch = (over: Partial<ProgressChapter>): ProgressChapter => ({
  chapter_id: 'c', name: 'Gravitation', class_level: 11, subject: 'physics', mastery: 0,
  weight_marks: 4, state: 'not_started', headroom: 10, concepts: [], curated: true, ...over,
});

describe('effectiveHeadroom', () => {
  it('doubles a not-started chapter the student marked hard, ignoring case and spacing', () => {
    expect(effectiveHeadroom(ch({}), ['gravitation'])).toBe(20);
    expect(effectiveHeadroom(ch({ name: 'Laws of  Motion' }), ['Laws of motion'])).toBe(20);
  });
  it('does nothing once the chapter has a measured result', () => {
    expect(effectiveHeadroom(ch({ state: 'needs_revision' }), ['Gravitation'])).toBe(10);
  });
  it('ignores typed text that is not a chapter name', () => {
    expect(effectiveHeadroom(ch({}), ['stuff i hate'])).toBe(10);
    expect(effectiveHeadroom(ch({}), [])).toBe(10);
  });
});

describe('sampleWeakChapterId', () => {
  it('leans toward the hard chapter without locking onto it', () => {
    mockProgress = { subjects: [{ subject: 'physics', chapters: [
      ch({ chapter_id: 'a', name: 'Gravitation' }), ch({ chapter_id: 'b', name: 'Optics' }) ] }] };
    mockAnswers = { hardChapters: ['Gravitation'] };
    const picks = Array.from({ length: 3000 }, () => sampleWeakChapterId('physics'));
    const a = picks.filter((p) => p === 'a').length;
    expect(a).toBeGreaterThan(1800); // ~2/3
    expect(a).toBeLessThan(2200);
  });
});
