import { answersToRow } from '@/lib/self-report';

jest.mock('@/lib/supabase', () => ({ supabase: {} }));

describe('answersToRow', () => {
  it('maps the answers and leaves out feelings and the mock band', () => {
    const row = answersToRow('u1', {
      examYear: '2027', goal: 'iit', mockBand: '100-150', syllabus: 'half',
      strongest: 'maths', weakest: 'physics', hardChapters: ['Gravitation'],
      confidentChapter: 'Kinematics', ai: 'often', aiFeelings: ['curious'],
    });
    expect(row).toMatchObject({ user_id: 'u1', exam_year: '2027', goal: 'iit', ai_use: 'often',
      hard_chapters: ['Gravitation'], confident_chapter: 'Kinematics' });
    expect(JSON.stringify(row)).not.toContain('curious');
    expect(JSON.stringify(row)).not.toContain('100-150');
  });

  it('treats unsure and skipped answers as null and caps lists', () => {
    const row = answersToRow('u1', { examYear: 'unsure', hardChapters: ['a', 'b', 'c', 'd', 'e', 'f'] });
    expect(row.exam_year).toBeNull();
    expect(row.goal).toBeNull();
    expect(row.hard_chapters).toHaveLength(5);
  });
});
