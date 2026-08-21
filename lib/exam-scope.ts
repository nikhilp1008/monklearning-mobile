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

export interface ArchivedChapter {
  name: string;
  subject: string;
}

/** A topic inside an otherwise-live chapter — the case a chapter-level list misses. */
export interface TopicException {
  topic: string;
  chapter: string;
  /** 'out' = not examined here. 'in' = examined here though the other exam drops it. */
  kind: 'out' | 'in';
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
  archived: ArchivedChapter[];
  exceptions: TopicException[];
  /** A whole NCERT chapter that is live for boards but absent from this exam. */
  boardOnlyChapters: string[];
}

/** Deleted from the NCERT books in the 2023 rationalisation — gone from both
 *  exams and from CBSE boards, but still printed in older coaching material. */
const ARCHIVED_SHARED: ArchivedChapter[] = [
  { name: 'The Solid State', subject: 'Chemistry' },
  { name: 'Surface Chemistry', subject: 'Chemistry' },
  { name: 'The s-Block Elements', subject: 'Chemistry' },
  { name: 'Hydrogen', subject: 'Chemistry' },
  { name: 'Polymers', subject: 'Chemistry' },
  { name: 'Environmental Chemistry', subject: 'Chemistry' },
  { name: 'Isolation of Elements (Metallurgy)', subject: 'Chemistry' },
  { name: 'Communication Systems', subject: 'Physics' },
];

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
    archived: [
      ...ARCHIVED_SHARED,
      { name: 'Mathematical Reasoning', subject: 'Maths' },
      { name: 'Principle of Mathematical Induction', subject: 'Maths' },
    ],
    exceptions: [
      { topic: 'Carnot engine', chapter: 'Thermodynamics · Physics 11', kind: 'out' },
      { topic: 'Doppler effect', chapter: 'Waves · Physics 11', kind: 'out' },
      { topic: 'Vector-product kinematics', chapter: 'Motion in a Plane · Physics 11', kind: 'out' },
      { topic: 'Potentiometer', chapter: 'Current Electricity · Physics 12', kind: 'out' },
      { topic: 'Cyclotron', chapter: 'Moving Charges and Magnetism · Physics 12', kind: 'out' },
      { topic: 'Radioactive decay laws', chapter: 'Nuclei · Physics 12', kind: 'out' },
      { topic: 'Early atomic models', chapter: 'Structure of Atom · Chemistry 11', kind: 'out' },
      { topic: 'Residual gas-law sections', chapter: 'Chemistry 11', kind: 'out' },
      { topic: 'Portions of 3D geometry', chapter: 'Three Dimensional Geometry · Maths 12', kind: 'out' },
    ],
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
    archived: [
      ...ARCHIVED_SHARED,
      { name: 'Transport in Plants', subject: 'Biology' },
      { name: 'Mineral Nutrition', subject: 'Biology' },
      { name: 'Digestion and Absorption', subject: 'Biology' },
      { name: 'Reproduction in Organisms', subject: 'Biology' },
      { name: 'Strategies for Enhancement in Food Production', subject: 'Biology' },
      { name: 'Environmental Issues', subject: 'Biology' },
    ],
    exceptions: [
      { topic: 'Taxonomic Aids', chapter: 'The Living World · Biology 11', kind: 'out' },
      { topic: 'Secondary Growth', chapter: 'Anatomy of Flowering Plants · Biology 11', kind: 'out' },
      {
        topic: 'Vernalisation & Seed Dormancy',
        chapter: 'Plant Growth and Development · Biology 11',
        kind: 'out',
      },
      { topic: 'Sense Organs', chapter: 'Neural Control and Coordination · Biology 11', kind: 'out' },
      { topic: 'Ecological Succession', chapter: 'Ecosystem · Biology 12', kind: 'out' },
      { topic: 'Xylem and Phloem', chapter: 'moved out of Transport in Plants', kind: 'in' },
      { topic: 'Potentiometer', chapter: 'Current Electricity · Physics 12', kind: 'in' },
      { topic: 'Cyclotron', chapter: 'Moving Charges and Magnetism · Physics 12', kind: 'in' },
      { topic: 'Radioactive decay laws', chapter: 'Nuclei · Physics 12', kind: 'in' },
    ],
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
