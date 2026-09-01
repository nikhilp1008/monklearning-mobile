import type { WidgetId, WidgetModule } from './types';
import { projectileMotion } from './projectile-motion';
import { molecule3d } from './molecule-3d';

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
