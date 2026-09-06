/**
 * How an `asset_slug` becomes something the board can draw.
 *
 * A segment resolves to an illustration by `asset_slug` (the key in
 * `illustration-manifest.csv`, which joins 1:1 to
 * `content/concept-archetypes.csv`). The client turns that slug into a
 * `FigureRecord` — the art plus its label set — and hands it to the widget.
 *
 * THE ONE RULE THIS INTERFACE EXISTS TO ENFORCE, from CLAUDE.md §3
 * ("Never fetch at render time") and §3a ("nothing is created during a live
 * session; precompute creates and binds, a live session only selects"):
 *
 *   `get()` is SYNCHRONOUS and CACHE-ONLY. It cannot await, cannot fetch, and
 *   returns null on a miss. `prefetch()` is the only asynchronous call and it
 *   is the only place a network client may ever live. A board that resolves
 *   through `get()` renders with the radio off, by construction rather than
 *   by discipline — there is no await for a slow network to block on.
 *
 * A miss is a rendered nothing plus an `onGap` measurement, never a spinner
 * on the board and never a blocked frame. That is the same call the tier
 * system already makes everywhere else: a missing figure costs the student a
 * figure, not the lesson.
 *
 * WHERE R2 SLOTS IN. `createFigureResolver(load)` takes an async loader and
 * owns the cache. The real one is:
 *
 *   createFigureResolver(async (slug) => {
 *     const json = await fetch(`${R2_BASE}/${slug}.json`);   // label set
 *     const file = await downloadToCache(`${R2_BASE}/${slug}.png`);
 *     return { ...(await json.json()), art: { ...art, source: { uri: file } } };
 *   })
 *
 * and nothing else in this module changes: `source` is already
 * `number | { uri }` precisely so a bundled asset and a downloaded file are
 * the same thing to the renderer. The fetched JSON also carries the §4
 * provenance block; the resolver does not read it and the renderer never sees
 * it — licence enforcement belongs to the ingest gate
 * (docs/label-layer.md §3.3 gate 2), not to a component drawing pixels, and
 * putting it in the render path would be the kind of check that looks like
 * enforcement and is not.
 */
import type { FigureArt, FigureGroup, LabelRecord } from './figure-layout';

/** What the renderer needs. The stored JSON is a superset (see §4). */
export interface FigureRecord {
  asset_slug: string;
  art: FigureArt;
  /** Ordered — `groups[0]` is where a reveal starts. */
  groups: readonly FigureGroup[];
  labels: readonly LabelRecord[];
}

export interface PrefetchReport {
  resolved: string[];
  /** Slugs that did not resolve. A board event naming one of these will
   *  render nothing and log a gap — which is the point of reporting them
   *  BEFORE the class rather than discovering them during it. */
  missing: string[];
}

export interface FigureResolver {
  /** Cache-only, synchronous, total. NEVER fetches. */
  get(assetSlug: string): FigureRecord | null;
  /** The only async call. Run it before the class starts. */
  prefetch(assetSlugs: readonly string[]): Promise<PrefetchReport>;
  /** For tests and telemetry — what is currently resolvable offline. */
  cached(): string[];
}

/**
 * Builds a resolver over an async loader, with an in-memory cache.
 *
 * `seed` is for records that need no I/O at all (the bundled placeholder):
 * they are in the cache from construction, so `get()` succeeds before any
 * `prefetch()` has run.
 */
export function createFigureResolver(
  load: (assetSlug: string) => Promise<FigureRecord>,
  seed: readonly FigureRecord[] = []
): FigureResolver {
  const cache = new Map<string, FigureRecord>();
  for (const rec of seed) cache.set(rec.asset_slug, rec);
  // Deduplicates concurrent prefetches of the same slug; never read by get().
  const inFlight = new Map<string, Promise<FigureRecord>>();

  return {
    get(assetSlug) {
      return cache.get(assetSlug) ?? null;
    },
    cached() {
      return [...cache.keys()].sort();
    },
    async prefetch(assetSlugs) {
      const resolved: string[] = [];
      const missing: string[] = [];
      await Promise.all(
        assetSlugs.map(async (slug) => {
          if (cache.has(slug)) {
            resolved.push(slug);
            return;
          }
          try {
            let p = inFlight.get(slug);
            if (!p) {
              p = load(slug);
              inFlight.set(slug, p);
            }
            const rec = await p;
            cache.set(slug, rec);
            resolved.push(slug);
          } catch {
            // Swallowed on purpose: a figure that cannot be fetched before
            // the class is a figure the class renders without. Throwing here
            // would let one 404 take down the whole prefetch pass.
            missing.push(slug);
          } finally {
            inFlight.delete(slug);
          }
        })
      );
      return { resolved: resolved.sort(), missing: missing.sort() };
    },
  };
}
