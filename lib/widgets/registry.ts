import type { WidgetId, WidgetModule } from './types';
import { projectileMotion } from './projectile-motion';
import { molecule3d } from './molecule-3d';
import { fieldLines } from './field-lines';
import { freeBodyForces } from './free-body-forces';
import { xyPlot } from './xy-plot';
import { dataTableTrend } from './data-table-trend';
import { processFlow } from './process-flow';
import { reactionScheme } from './reaction-scheme';
import { moleculeStruct } from './molecule-struct';
import { circuitNetwork } from './circuit-network';
import { linesPlanes3d } from './lines-planes-3d';

/**
 * The registry is the closed set of things Drona can draw.
 *
 * Adding an entry here is the ONLY way to add a widget. The server's payload
 * generator reads the same id/version list (see scripts/export-registry.ts) so
 * the model can never name a widget the client cannot render.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const REGISTRY = {
  projectile_motion: projectileMotion,
  molecule_3d: molecule3d,
  field_lines: fieldLines,
  free_body_forces: freeBodyForces,
  xy_plot: xyPlot,
  data_table_trend: dataTableTrend,
  process_flow: processFlow,
  reaction_scheme: reactionScheme,
  molecule_struct: moleculeStruct,
  circuit_network: circuitNetwork,
  lines_planes_3d: linesPlanes3d,
  // labelled_figure is deliberately ABSENT. The registry is the closed set the
  // MODEL may name and fill parameters for; a labelled figure is an asset a
  // subject author prepared offline, and its payload names a slug rather than
  // authoring a drawing. BoardWidget dispatches it as its own tier.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
} satisfies Record<string, WidgetModule<any>>;

/** The closed set, derived — never hand-maintained. */
export type RegisteredWidgetId = keyof typeof REGISTRY;

export function lookup(id: string, version: number): WidgetModule<object> | null {
  const mod = (REGISTRY as Record<string, WidgetModule<object> | undefined>)[id];
  if (!mod) return null;
  // Forward-compatible within a major: a payload may target an older version.
  if (version > mod.version) return null;
  return mod;
}

export const REGISTRY_MANIFEST = Object.values(REGISTRY).map((m) => ({
  id: m.id,
  version: m.version,
  animatable: m.animatable,
}));
