/**
 * The chapter-level scope map — which NCERT chapters each exam actually
 * examines, and what is quietly trimmed inside the ones it keeps.
 *
 * Sourced from MonkLearning's "JEE Main & NEET UG Exam Scope Map" (verified
 * August 2026). The research document presents this as a four-column table
 * repeating "IN SCOPE" a hundred times; that is the right shape for an
 * auditable spreadsheet and the wrong shape for a student. Here the same
 * facts are stored per subject so the app can show the whole syllabus at a
 * glance and only make noise where a chapter is unusual.
 *
 * The load-bearing fact this encodes: after the 2023 NCERT rationalisation,
 * every chapter still printed in the books is examinable. The interesting
 * information is the handful of exceptions — trims inside live chapters, and
 * the chapters that left the books entirely.
 */

import type { ScopeExam } from '@/lib/exam-scope';

export type SubjectKey = 'physics' | 'chemistry' | 'maths' | 'biology';

export interface ScopeChapter {
  name: string;
  classLevel: 11 | 12;
  /** Topics inside this chapter that this exam does not examine. */
  trims?: string[];
  /** Topics the other exam trims but this one keeps — worth saying out loud. */
  kept?: string[];
  /** Flagged in the research as a consistently heavy scorer. */
  heavy?: boolean;
}

export interface ArchivedEntry {
  name: string;
  classLevel: 11 | 12;
  /** Rare case: parent chapter archived, but a section of it was relocated. */
  survives?: string;
}

export interface SubjectScope {
  key: SubjectKey;
  label: string;
  /** Whole NCERT chapters that are live in the books but absent from this exam. */
  boardOnly?: ArchivedEntry[];
  chapters: ScopeChapter[];
  archived: ArchivedEntry[];
}

/* ------------------------------------------------------------------ *
 * Chapters shared by both exams. Physics and Chemistry are identical
 * at chapter level for JEE Main and NEET UG — only the trims differ.
 * ------------------------------------------------------------------ */

function physicsChapters(exam: ScopeExam): ScopeChapter[] {
  const jee = exam === 'jee';
  return [
    { name: 'Units and Measurements', classLevel: 11 },
    { name: 'Motion in a Straight Line', classLevel: 11 },
    {
      name: 'Motion in a Plane',
      classLevel: 11,
      ...(jee ? { trims: ['Vector-product portions of kinematics'] } : {}),
    },
    { name: 'Laws of Motion', classLevel: 11 },
    { name: 'Work, Energy and Power', classLevel: 11 },
    { name: 'System of Particles and Rotational Motion', classLevel: 11, heavy: true },
    { name: 'Gravitation', classLevel: 11 },
    { name: 'Mechanical Properties of Solids', classLevel: 11 },
    { name: 'Mechanical Properties of Fluids', classLevel: 11 },
    { name: 'Thermal Properties of Matter', classLevel: 11 },
    { name: 'Thermodynamics', classLevel: 11, ...(jee ? { trims: ['Carnot engine'] } : {}) },
    { name: 'Kinetic Theory', classLevel: 11 },
    { name: 'Oscillations', classLevel: 11 },
    { name: 'Waves', classLevel: 11, ...(jee ? { trims: ['Doppler effect'] } : {}) },
    { name: 'Electric Charges and Fields', classLevel: 12 },
    { name: 'Electrostatic Potential and Capacitance', classLevel: 12, heavy: true },
    {
      name: 'Current Electricity',
      classLevel: 12,
      ...(jee ? { trims: ['Potentiometer'] } : { kept: ['Potentiometer'] }),
    },
    {
      name: 'Moving Charges and Magnetism',
      classLevel: 12,
      ...(jee ? { trims: ['Cyclotron'] } : { kept: ['Cyclotron'] }),
    },
    { name: 'Magnetism and Matter', classLevel: 12 },
    { name: 'Electromagnetic Induction', classLevel: 12 },
    { name: 'Alternating Current', classLevel: 12 },
    { name: 'Electromagnetic Waves', classLevel: 12 },
    { name: 'Ray Optics and Optical Instruments', classLevel: 12, heavy: true },
    { name: 'Wave Optics', classLevel: 12 },
    { name: 'Dual Nature of Radiation and Matter', classLevel: 12 },
    { name: 'Atoms', classLevel: 12 },
    {
      name: 'Nuclei',
      classLevel: 12,
      ...(jee ? { trims: ['Radioactive decay laws'] } : { kept: ['Radioactive decay laws'] }),
    },
    { name: 'Semiconductor Electronics', classLevel: 12 },
  ];
}

function chemistryChapters(exam: ScopeExam): ScopeChapter[] {
  const jee = exam === 'jee';
  return [
    { name: 'Some Basic Concepts of Chemistry', classLevel: 11 },
    {
      name: 'Structure of Atom',
      classLevel: 11,
      ...(jee ? { trims: ['Early atomic models and discovery'] } : {}),
    },
    { name: 'Classification of Elements and Periodicity', classLevel: 11 },
    { name: 'Chemical Bonding and Molecular Structure', classLevel: 11, heavy: true },
    { name: 'Thermodynamics', classLevel: 11 },
    { name: 'Equilibrium', classLevel: 11 },
    { name: 'Redox Reactions', classLevel: 11 },
    { name: 'Organic Chemistry — Basic Principles', classLevel: 11 },
    { name: 'Hydrocarbons', classLevel: 11 },
    { name: 'Solutions', classLevel: 12 },
    { name: 'Electrochemistry', classLevel: 12, heavy: jee },
    { name: 'Chemical Kinetics', classLevel: 12 },
    { name: 'The d- and f-Block Elements', classLevel: 12 },
    { name: 'Coordination Compounds', classLevel: 12, heavy: true },
    { name: 'Haloalkanes and Haloarenes', classLevel: 12 },
    { name: 'Alcohols, Phenols and Ethers', classLevel: 12 },
    { name: 'Aldehydes, Ketones and Carboxylic Acids', classLevel: 12 },
    { name: 'Amines', classLevel: 12 },
    { name: 'Biomolecules', classLevel: 12 },
  ];
}

const CHEMISTRY_ARCHIVED: ArchivedEntry[] = [
  { name: 'States of Matter', classLevel: 11 },
  { name: 'The s-Block Elements', classLevel: 11 },
  { name: 'Hydrogen', classLevel: 11 },
  { name: 'Environmental Chemistry', classLevel: 11 },
  { name: 'The Solid State', classLevel: 12 },
  { name: 'Surface Chemistry', classLevel: 12 },
  { name: 'Isolation of Elements (Metallurgy)', classLevel: 12 },
  { name: 'Polymers', classLevel: 12 },
];

const MATHS_CHAPTERS: ScopeChapter[] = [
  { name: 'Sets', classLevel: 11 },
  { name: 'Relations and Functions', classLevel: 11 },
  { name: 'Trigonometric Functions', classLevel: 11 },
  { name: 'Complex Numbers and Quadratic Equations', classLevel: 11 },
  { name: 'Linear Inequalities', classLevel: 11 },
  { name: 'Permutations and Combinations', classLevel: 11 },
  { name: 'Binomial Theorem', classLevel: 11 },
  { name: 'Sequences and Series', classLevel: 11 },
  { name: 'Straight Lines', classLevel: 11 },
  { name: 'Conic Sections', classLevel: 11 },
  { name: 'Introduction to 3D Geometry', classLevel: 11 },
  { name: 'Limits and Derivatives', classLevel: 11 },
  { name: 'Statistics', classLevel: 11 },
  { name: 'Probability', classLevel: 11, heavy: true },
  { name: 'Relations and Functions', classLevel: 12 },
  { name: 'Inverse Trigonometric Functions', classLevel: 12 },
  { name: 'Matrices', classLevel: 12 },
  { name: 'Determinants', classLevel: 12 },
  { name: 'Continuity and Differentiability', classLevel: 12, heavy: true },
  { name: 'Application of Derivatives', classLevel: 12 },
  { name: 'Integrals', classLevel: 12, heavy: true },
  { name: 'Application of Integrals', classLevel: 12 },
  { name: 'Differential Equations', classLevel: 12 },
  { name: 'Vector Algebra', classLevel: 12 },
  {
    name: 'Three Dimensional Geometry',
    classLevel: 12,
    trims: ['Portions of 3D geometry'],
  },
];

const BIOLOGY_CHAPTERS: ScopeChapter[] = [
  { name: 'The Living World', classLevel: 11, trims: ['Taxonomic Aids'] },
  { name: 'Biological Classification', classLevel: 11 },
  { name: 'Plant Kingdom', classLevel: 11 },
  { name: 'Animal Kingdom', classLevel: 11 },
  { name: 'Morphology of Flowering Plants', classLevel: 11 },
  { name: 'Anatomy of Flowering Plants', classLevel: 11, trims: ['Secondary growth'] },
  { name: 'Structural Organisation in Animals', classLevel: 11 },
  { name: 'Cell: The Unit of Life', classLevel: 11, heavy: true },
  { name: 'Biomolecules', classLevel: 11 },
  { name: 'Cell Cycle and Cell Division', classLevel: 11 },
  { name: 'Photosynthesis in Higher Plants', classLevel: 11 },
  { name: 'Respiration in Plants', classLevel: 11 },
  {
    name: 'Plant Growth and Development',
    classLevel: 11,
    trims: ['Vernalisation', 'Seed dormancy'],
  },
  { name: 'Breathing and Exchange of Gases', classLevel: 11 },
  { name: 'Body Fluids and Circulation', classLevel: 11 },
  { name: 'Excretory Products and their Elimination', classLevel: 11 },
  { name: 'Locomotion and Movement', classLevel: 11 },
  { name: 'Neural Control and Coordination', classLevel: 11, trims: ['Sense organs'] },
  { name: 'Chemical Coordination and Integration', classLevel: 11 },
  { name: 'Sexual Reproduction in Flowering Plants', classLevel: 12 },
  { name: 'Human Reproduction', classLevel: 12 },
  { name: 'Reproductive Health', classLevel: 12 },
  { name: 'Principles of Inheritance and Variation', classLevel: 12, heavy: true },
  { name: 'Molecular Basis of Inheritance', classLevel: 12, heavy: true },
  { name: 'Evolution', classLevel: 12 },
  { name: 'Human Health and Disease', classLevel: 12 },
  { name: 'Microbes in Human Welfare', classLevel: 12 },
  { name: 'Biotechnology: Principles and Processes', classLevel: 12 },
  { name: 'Biotechnology and its Applications', classLevel: 12 },
  { name: 'Organisms and Populations', classLevel: 12 },
  { name: 'Ecosystem', classLevel: 12, trims: ['Ecological succession'] },
  { name: 'Biodiversity and Conservation', classLevel: 12 },
];

const BIOLOGY_ARCHIVED: ArchivedEntry[] = [
  {
    name: 'Transport in Plants',
    classLevel: 11,
    survives: 'Xylem and Phloem were kept and moved into other chapters',
  },
  { name: 'Mineral Nutrition', classLevel: 11 },
  { name: 'Digestion and Absorption', classLevel: 11 },
  { name: 'Reproduction in Organisms', classLevel: 12 },
  { name: 'Strategies for Enhancement in Food Production', classLevel: 12 },
  { name: 'Environmental Issues', classLevel: 12 },
];

export function subjectScope(exam: ScopeExam, key: SubjectKey): SubjectScope | null {
  switch (key) {
    case 'physics':
      return {
        key,
        label: 'Physics',
        chapters: physicsChapters(exam),
        archived: [{ name: 'Communication Systems', classLevel: 12 }],
      };
    case 'chemistry':
      return {
        key,
        label: 'Chemistry',
        chapters: chemistryChapters(exam),
        archived: CHEMISTRY_ARCHIVED,
      };
    case 'maths':
      return exam === 'jee'
        ? {
            key,
            label: 'Maths',
            chapters: MATHS_CHAPTERS,
            boardOnly: [{ name: 'Linear Programming', classLevel: 12 }],
            archived: [
              { name: 'Mathematical Reasoning', classLevel: 11 },
              { name: 'Principle of Mathematical Induction', classLevel: 11 },
            ],
          }
        : null;
    case 'biology':
      return exam === 'neet'
        ? { key, label: 'Biology', chapters: BIOLOGY_CHAPTERS, archived: BIOLOGY_ARCHIVED }
        : null;
  }
}

export function subjectsFor(exam: ScopeExam): SubjectKey[] {
  return exam === 'jee' ? ['physics', 'chemistry', 'maths'] : ['physics', 'chemistry', 'biology'];
}
