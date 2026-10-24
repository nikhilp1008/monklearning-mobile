import { DIAGRAMS_CHEMISTRY_11_01 } from '@/lib/diagrams/chemistry-11-01';
import { DIAGRAMS_CHEMISTRY_11_02 } from '@/lib/diagrams/chemistry-11-02';
import { DIAGRAMS_PHYSICS_11_01 } from '@/lib/diagrams/physics-11-01';
import { DIAGRAMS_PHYSICS_11_02 } from '@/lib/diagrams/physics-11-02';
import { DIAGRAMS_PHYSICS_11_03 } from '@/lib/diagrams/physics-11-03';
import { DIAGRAMS_PHYSICS_11_04 } from '@/lib/diagrams/physics-11-04';
import { DIAGRAMS_PHYSICS_11_05 } from '@/lib/diagrams/physics-11-05';
import { DIAGRAMS_PHYSICS_11_06 } from '@/lib/diagrams/physics-11-06';
import { DIAGRAMS_PHYSICS_11_07 } from '@/lib/diagrams/physics-11-07';
import { DIAGRAMS_PHYSICS_11_08 } from '@/lib/diagrams/physics-11-08';
import { DIAGRAMS_PHYSICS_11_09 } from '@/lib/diagrams/physics-11-09';
import { DIAGRAMS_PHYSICS_11_10 } from '@/lib/diagrams/physics-11-10';
import { DIAGRAMS_PHYSICS_11_11 } from '@/lib/diagrams/physics-11-11';
import { DIAGRAMS_PHYSICS_11_12 } from '@/lib/diagrams/physics-11-12';
import { DIAGRAMS_PHYSICS_11_13 } from '@/lib/diagrams/physics-11-13';
import { DIAGRAMS_PHYSICS_11_14 } from '@/lib/diagrams/physics-11-14';
import { DIAGRAMS_PHYSICS_12_01 } from '@/lib/diagrams/physics-12-01';
import { DIAGRAMS_PHYSICS_12_02 } from '@/lib/diagrams/physics-12-02';
import { DIAGRAMS_PHYSICS_12_03 } from '@/lib/diagrams/physics-12-03';
import { DIAGRAMS_PHYSICS_12_03B } from '@/lib/diagrams/physics-12-03b';
import { DIAGRAMS_PHYSICS_12_04 } from '@/lib/diagrams/physics-12-04';
import { DIAGRAMS_PHYSICS_12_05 } from '@/lib/diagrams/physics-12-05';
import { DIAGRAMS_PHYSICS_12_06 } from '@/lib/diagrams/physics-12-06';
import { DIAGRAMS_PHYSICS_12_07 } from '@/lib/diagrams/physics-12-07';
import { DIAGRAMS_PHYSICS_12_08 } from '@/lib/diagrams/physics-12-08';
import type { Diagram } from '@/lib/diagrams/types';

/** The redrawn diagrams, by chapter ("physics|11|1", "chemistry|11|1"). Chapters not here have none yet. */
export const DIAGRAMS: Record<string, Diagram[]> = {
  'physics|11|1': DIAGRAMS_PHYSICS_11_01,
  'physics|11|2': DIAGRAMS_PHYSICS_11_02,
  'physics|11|3': DIAGRAMS_PHYSICS_11_03,
  'physics|11|4': DIAGRAMS_PHYSICS_11_04,
  'physics|11|5': DIAGRAMS_PHYSICS_11_05,
  'physics|11|6': DIAGRAMS_PHYSICS_11_06,
  'physics|11|7': DIAGRAMS_PHYSICS_11_07,
  'physics|11|8': DIAGRAMS_PHYSICS_11_08,
  'physics|11|9': DIAGRAMS_PHYSICS_11_09,
  'physics|11|10': DIAGRAMS_PHYSICS_11_10,
  'physics|11|11': DIAGRAMS_PHYSICS_11_11,
  'physics|11|12': DIAGRAMS_PHYSICS_11_12,
  'physics|11|13': DIAGRAMS_PHYSICS_11_13,
  'physics|11|14': DIAGRAMS_PHYSICS_11_14,
  'physics|12|1': DIAGRAMS_PHYSICS_12_01,
  'physics|12|2': DIAGRAMS_PHYSICS_12_02,
  // Chapter 3 was drawn by two people at once, in two files, in figure order.
  'physics|12|3': [...DIAGRAMS_PHYSICS_12_03, ...DIAGRAMS_PHYSICS_12_03B],
  'physics|12|4': DIAGRAMS_PHYSICS_12_04,
  'physics|12|5': DIAGRAMS_PHYSICS_12_05,
  'physics|12|6': DIAGRAMS_PHYSICS_12_06,
  'physics|12|7': DIAGRAMS_PHYSICS_12_07,
  'physics|12|8': DIAGRAMS_PHYSICS_12_08,
  'chemistry|11|1': DIAGRAMS_CHEMISTRY_11_01,
  'chemistry|11|2': DIAGRAMS_CHEMISTRY_11_02,
};

const BY_ID = new Map(Object.values(DIAGRAMS).flat().map((d) => [d.id, d]));
/** The diagram a reader's `fig` block names, wherever it is filed. */
export const diagramById = (id: string): Diagram | undefined => BY_ID.get(id);
