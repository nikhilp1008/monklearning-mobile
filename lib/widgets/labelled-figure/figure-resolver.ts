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
  /**
   * Called when THIS slug's record lands in the cache. Returns an unsubscribe.
   *
   * The store half of a `useSyncExternalStore` pair, and the reason it exists
   * rather than a re-render counter on the component: a record arriving is an
   * event in the CACHE, not in any React tree. A counter only re-renders the
   * component that owns it, so a board list that re-keys its blocks, or two
   * blocks showing the same figure, or a block that unmounts between the fetch
   * and its landing, each drop the update on the floor in a different way.
   * Subscribing per slug makes all three the same case.
   */
  subscribe(assetSlug: string, onChange: () => void): () => void;
  /**
   * Drop a cached record whose underlying bytes have changed, and tell whoever
   * is drawing it.
   *
   * WHY THIS EXISTS. The cache is keyed by SLUG and lives for the life of the
   * app, while the thing it caches is identified by its CONTENT hash. Replace
   * a master in R2 — which the frog heart just did — and a running app keeps
   * drawing the old plate forever: the on-disk cache would happily fetch the
   * new sha, but nothing ever asks it to, because `get(slug)` still answers.
   * Measured 2026-09-12: the board only picked up the recoloured plate after a
   * cold restart.
   *
   * Returns true when something was actually dropped, so a caller can tell a
   * real invalidation from a no-op. Subscribers are notified exactly once per
   * invalidated slug — the notification is what makes a live board re-resolve.
   */
  invalidate(assetSlug: string, reason?: string): boolean;
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
  const listeners = new Map<string, Set<() => void>>();
  const announce = (slug: string) => {
    for (const fn of listeners.get(slug) ?? []) fn();
  };
  // Deduplicates concurrent prefetches of the same slug; never read by get().
  const inFlight = new Map<string, Promise<FigureRecord>>();
  /**
   * Bumped every time a slug is invalidated.
   *
   * Dropping the in-flight PROMISE is not enough on its own: the load it
   * refers to is already running, and when it settles it would write the stale
   * record straight back into the cache. So a load records the generation it
   * started under and only writes if that is still current. Found by the
   * mid-flight fixture, which failed against the first version of this fix.
   */
  const generation = new Map<string, number>();
  const genOf = (slug: string) => generation.get(slug) ?? 0;

  return {
    get(assetSlug) {
      return cache.get(assetSlug) ?? null;
    },
    cached() {
      return [...cache.keys()].sort();
    },
    subscribe(assetSlug, onChange) {
      let set = listeners.get(assetSlug);
      if (!set) {
        set = new Set();
        listeners.set(assetSlug, set);
      }
      set.add(onChange);
      return () => {
        set!.delete(onChange);
        // Dropped when empty so a long class does not accumulate one entry per
        // figure it has finished with.
        if (set!.size === 0) listeners.delete(assetSlug);
      };
    },
    invalidate(assetSlug, reason) {
      // NOT a map clear. Only this slug goes; every other figure in the class
      // stays cached, because nothing about them changed.
      // BOTH, and neither short-circuits the other. A first version returned
      // early when nothing was CACHED — but a load can be in the air with
      // nothing cached yet, and that load would then complete and cache the
      // stale record after the invalidation. The mid-flight fixture is what
      // caught it.
      const hadRecord = cache.delete(assetSlug);
      const hadFlight = inFlight.delete(assetSlug);
      if (!hadRecord && !hadFlight) return false;

      // Dropping the promise does not stop the work already running, so the
      // generation is what actually invalidates it: a load writes only if the
      // generation it started under is still current.
      generation.set(assetSlug, genOf(assetSlug) + 1);
      if (reason) {
        console.info(`[figures] "${assetSlug}" invalidated — ${reason}`);
      }
      // Only when something was actually ON SCREEN. Announcing for a
      // cancelled in-flight load would redraw a board that is drawing nothing
      // yet, which is a wasted render rather than a correction.
      if (hadRecord) announce(assetSlug);
      return true;
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
            const startedAt = genOf(slug);
            const rec = await p;
            if (genOf(slug) !== startedAt) {
              // Invalidated while this was in the air. The bytes it describes
              // are the ones we just decided are stale.
              missing.push(slug);
              return;
            }
            cache.set(slug, rec);
            // AFTER the cache write, never before: a listener that re-reads
            // `get()` must find the record, and announcing first would hand it
            // the same null it already had.
            announce(slug);
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
