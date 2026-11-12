import { DIAGRAMS_A } from '@/lib/diagrams/mathematics-11-03a';
import { DIAGRAMS_B } from '@/lib/diagrams/mathematics-11-03b';
import type { Diagram } from '@/lib/diagrams/types';

/**
 * MATHEMATICS CLASS 11, CHAPTER 3 (Trigonometric Functions): every drawing of the Master Reference book
 * (October edition) on pp. 177–336, redrawn. Two files, drawn by two agents at once: Figures 3.1–3.11
 * (mathematics-11-03a.ts), then Figures 3.12–3.17 and the unnumbered drawings (mathematics-11-03b.ts).
 */
export const DIAGRAMS_MATHEMATICS_11_03: Diagram[] = [...DIAGRAMS_A, ...DIAGRAMS_B];
