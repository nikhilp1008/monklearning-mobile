import { DIAGRAMS_PHYSICS_11_01 } from '@/lib/diagrams/physics-11-01';
import { DIAGRAMS_PHYSICS_11_02 } from '@/lib/diagrams/physics-11-02';
import { DIAGRAMS_PHYSICS_11_03 } from '@/lib/diagrams/physics-11-03';
import { DIAGRAMS_PHYSICS_11_04 } from '@/lib/diagrams/physics-11-04';
import type { Diagram } from '@/lib/diagrams/types';

/** The redrawn diagrams, by chapter ("physics|11|1"). Chapters not here have none yet. */
export const DIAGRAMS: Record<string, Diagram[]> = {
  'physics|11|1': DIAGRAMS_PHYSICS_11_01,
  'physics|11|2': DIAGRAMS_PHYSICS_11_02,
  'physics|11|3': DIAGRAMS_PHYSICS_11_03,
  'physics|11|4': DIAGRAMS_PHYSICS_11_04,
};

const BY_ID = new Map(Object.values(DIAGRAMS).flat().map((d) => [d.id, d]));
/** The diagram a reader's `fig` block names, wherever it is filed. */
export const diagramById = (id: string): Diagram | undefined => BY_ID.get(id);
