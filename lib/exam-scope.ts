/**
 * Exam scope — what JEE Main and NEET UG actually examine.
 *
 * Curated from MonkLearning's own "JEE Main & NEET UG Exam Scope Map"
 * (verified edition, August 2026), which was checked against the official
 * NTA JEE Main 2026 syllabus PDF and the NMC NEET UG 2026 notice.
 *
 * Only the student-facing findings live here. The research document's
 * internal apparatus — tagging schema, annual review protocol, revision log,
 * open worklist, source-confidence caveats — is deliberately left out: it
 * tells the team how the map is maintained, not the student what to study.
 *
 * Static on purpose. This changes when a syllabus changes, which the same
 * research shows happens roughly once a decade — not often enough to justify
 * an endpoint. Update this file when the annual review finds a diff.
 */

export type ScopeExam = 'jee' | 'neet';

export interface ScopeSubject {
  name: string;
  chapters: number;
}

export interface ScopeYear {
  period: string;
  headline: string;
  detail: string;
  state: 'stable' | 'change' | 'unknown';
}

export interface ExamScope {
  label: string;
  authority: string;
  subjects: ScopeSubject[];
  totalChapters: number;
  /** A whole NCERT chapter that is live for boards but absent from this exam. */
  boardOnlyChapters: string[];
}

export const EXAM_SCOPE: Record<ScopeExam, ExamScope> = {
  jee: {
    label: 'JEE Main',
    authority: 'NTA',
    subjects: [
      { name: 'Physics', chapters: 28 },
      { name: 'Chemistry', chapters: 19 },
      { name: 'Maths', chapters: 25 },
    ],
    totalChapters: 72,
    boardOnlyChapters: ['Linear Programming'],
  },
  neet: {
    label: 'NEET UG',
    authority: 'NMC',
    subjects: [
      { name: 'Physics', chapters: 28 },
      { name: 'Chemistry', chapters: 19 },
      { name: 'Biology', chapters: 32 },
    ],
    totalChapters: 79,
    boardOnlyChapters: [],
  },
};

/**
 * The timeline that answers the question every student actually asks. Both
 * syllabi are reactive: they move when the NCERT books move, and the books
 * moved once — in 2023.
 */
export const SCOPE_TIMELINE: ScopeYear[] = [
  {
    period: 'till 2022',
    headline: 'No structural change',
    detail: 'Same unit sets year on year — a wider syllabus than today’s.',
    state: 'stable',
  },
  {
    period: '2023',
    headline: 'NCERT rationalised the books',
    detail: 'Whole chapters deleted from the textbooks. The exams hadn’t caught up yet.',
    state: 'change',
  },
  {
    period: '2024',
    headline: 'Both exams realigned',
    detail: 'NTA and NMC cut to match the new books. The one real change in a decade.',
    state: 'change',
  },
  { period: '2025', headline: 'No change', detail: 'Neither syllabus moved.', state: 'stable' },
  {
    period: '2026',
    headline: 'No change',
    detail: 'NTA confirmed no change; NMC confirmed nothing removed.',
    state: 'stable',
  },
  {
    period: '2027',
    headline: 'Not published yet',
    detail: 'JEE Main bulletin is expected around October, the NEET notice around December.',
    state: 'unknown',
  },
];

export const SCOPE_SOURCE_NOTE =
  'Checked against the official NTA JEE Main 2026 syllabus and the NMC NEET UG 2026 notice · August 2026';
