/**
 * THE CHAPTERS THE ONBOARDING QUESTIONS OFFER, BY SUBJECT AND CLASS.
 *
 * Copied from the live `chapters` table on 2026-10-15 (subject, class_level,
 * chapter_order), so a chip reads exactly as the chapter does in Textbooks and
 * in class. It is a copy rather than a fetch because these questions run
 * before sign-up, often on a poor connection, and a chapter list that fails to
 * load would leave the student nothing to tap. If the table changes, re-copy:
 *   GET /rest/v1/chapters?select=subject,class_level,name&order=subject,class_level,chapter_order
 *
 * Two rows are left out on purpose: maths "Basic Mathematics" (order 0, a
 * primer rather than a syllabus chapter) and chemistry "Practical Chemistry"
 * (nobody names it as the chapter that costs them marks).
 */
import type { ExamKey, YearKey } from '@/constants/onboarding';

export type SubjectKey = 'physics' | 'chemistry' | 'maths' | 'biology';

export const SUBJECT_NAMES: Record<SubjectKey, string> = {
  physics: 'Physics',
  chemistry: 'Chemistry',
  maths: 'Maths',
  biology: 'Biology',
};

export const SUBJECTS_FOR: Record<ExamKey, SubjectKey[]> = {
  jee: ['physics', 'chemistry', 'maths'],
  neet: ['physics', 'chemistry', 'biology'],
};

export const CHAPTERS: Record<SubjectKey, { 11: string[]; 12: string[] }> = {
  physics: {
    11: [
      'Units & Measurements',
      'Motion in a Straight Line',
      'Motion in a Plane',
      'Laws of Motion',
      'Work, Energy & Power',
      'Rotational Motion',
      'Gravitation',
      'Mechanical Properties of Solids',
      'Mechanical Properties of Fluids',
      'Thermal Properties of Matter',
      'Thermodynamics',
      'Kinetic Theory',
      'Oscillations',
      'Waves',
    ],
    12: [
      'Electric Charges and Fields',
      'Electrostatic Potential and Capacitance',
      'Current Electricity',
      'Moving Charges and Magnetism',
      'Magnetism and Matter',
      'Electromagnetic Induction',
      'Alternating Current',
      'Electromagnetic Waves',
      'Ray Optics and Optical Instruments',
      'Wave Optics',
      'Dual Nature of Radiation and Matter',
      'Atoms',
      'Nuclei',
      'Semiconductor Electronics',
    ],
  },
  chemistry: {
    11: [
      'Some Basic Concepts',
      'Atomic Structure',
      'Classification of Elements',
      'Chemical Bonding',
      'Thermodynamics',
      'Equilibrium',
      'Redox Reactions',
      'General Organic Chemistry',
      'Hydrocarbons',
    ],
    12: [
      'Solutions',
      'Electrochemistry',
      'Chemical Kinetics',
      'p-Block Elements',
      'd-and-f-Block Elements',
      'Coordination Compounds',
      'Haloalkanes & Haloarenes',
      'Alcohols, Phenols & Ethers',
      'Aldehydes, Ketones & Carboxylic Acids',
      'Amines',
      'Biomolecules',
    ],
  },
  maths: {
    11: [
      'Sets',
      'Relations & Functions',
      'Trigonometry',
      'Complex Numbers',
      'Linear Inequalities',
      'Permutations & Combinations',
      'Binomial Theorem',
      'Sequences & Series',
      'Straight Lines',
      'Conic Sections',
      'Introduction to Three Dimensional Geometry',
      'Limits and Derivatives',
      'Statistics',
      'Probability',
    ],
    12: [
      'Relations and Functions',
      'Inverse Trigonometric Functions',
      'Matrices',
      'Determinants',
      'Continuity and Differentiability',
      'Applications of Derivatives',
      'Integrals',
      'Application of Integrals',
      'Differential Equations',
      'Vector Algebra',
      'Three Dimensional Geometry',
      'Linear Programming',
      'Probability',
    ],
  },
  biology: {
    11: [
      'The Living World',
      'Biological Classification',
      'Plant Kingdom',
      'Animal Kingdom',
      'Morphology of Flowering Plants',
      'Anatomy of Flowering Plants',
      'Structural Organisation in Animals',
      'Cell: The Unit of Life',
      'Biomolecules',
      'Cell Cycle and Cell Division',
      'Photosynthesis in Higher Plants',
      'Respiration in Plants',
      'Plant Growth and Development',
      'Breathing and Exchange of Gases',
      'Body Fluids and Circulation',
      'Excretory Products and their Elimination',
      'Locomotion and Movement',
      'Neural Control and Coordination',
      'Chemical Coordination and Integration',
    ],
    12: [
      'Sexual Reproduction in Flowering Plants',
      'Human Reproduction',
      'Reproductive Health',
      'Principles of Inheritance and Variation',
      'Molecular Basis of Inheritance',
      'Evolution',
      'Human Health and Disease',
      'Microbes in Human Welfare',
      'Biotechnology: Principles and Processes',
      'Biotechnology and its Applications',
      'Organisms and Populations',
      'Ecosystem',
      'Biodiversity and Conservation',
    ],
  },
};

/** Class 11 sees only Class 11; Class 12 and droppers have both years to revise. */
export function chapterGroups(subject: SubjectKey, year: YearKey): { label: string; chapters: string[] }[] {
  const c = CHAPTERS[subject];
  if (year === 'class11') return [{ label: 'Class 11', chapters: c[11] }];
  return [
    { label: 'Class 11', chapters: c[11] },
    { label: 'Class 12', chapters: c[12] },
  ];
}
