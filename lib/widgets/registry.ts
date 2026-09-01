import type { WidgetId, WidgetModule } from './types';
import { projectileMotion } from './projectile-motion';
// molecule-3d is deliberately NOT imported yet. Its module does
// `require('../../../assets/molecule-host.html')`, which Metro resolves
// statically — so importing it before `scripts/build-molecule-host.mjs` has
// generated that asset fails the whole app bundle, not just the widget. The
// file is in the tree and unreferenced, which costs nothing; re-enable it here
// once the asset exists (needs `3dmol@2.5.5`, which is not installed).
// import { molecule3d } from './molecule-3d';

/**
 * The registry is the closed set of things Drona can draw.
 *
 * Adding an entry here is the ONLY way to add a widget. The server's payload
 * generator reads the same id/version list (see scripts/export-registry.ts) so
 * the model can never name a widget the client cannot render.
 */
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const REGISTRY: Readonly<Partial<Record<WidgetId, WidgetModule<any>>>> = {
  projectile_motion: projectileMotion,
};

export function lookup(id: string, version: number): WidgetModule<object> | null {
  const mod = (REGISTRY as Record<string, WidgetModule<object> | undefined>)[id];
  if (!mod) return null;
  // Forward-compatible within a major: a payload may target an older version.
  if (version > mod.version) return null;
  return mod;
}

export const REGISTRY_MANIFEST = Object.values(REGISTRY)
  .filter((m): m is WidgetModule<any> => Boolean(m))
  .map((m) => ({
    id: m.id,
    version: m.version,
    animatable: m.animatable,
  }));
