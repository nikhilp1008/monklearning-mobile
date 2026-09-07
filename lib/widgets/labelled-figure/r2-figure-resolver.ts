/**
 * The real figure loader: an `asset_slug` becomes art plus a label set, fetched
 * from the public illustrations bucket.
 *
 * This is the "one expression" `placeholder-figure.ts` says swapping in changes
 * — `createFigureResolver` already owns the cache, the `get()`/`prefetch()`
 * split and the miss behaviour, so none of that is re-implemented here.
 *
 * TWO BUCKETS, AND THIS READS THE PUBLIC ONE.
 * `app/storage_r2.py` explains at length why illustrations do not share the
 * doubts bucket: that one holds photographed student homework behind 1-hour
 * presigned URLs, and a shared bucket with an `illustrations/` prefix stays
 * safe only until somebody attaches a public domain to serve art quickly — at
 * which point every `doubts/{user_id}/` object is publicly addressable and
 * trivially enumerable. A prefix is a naming convention, not an access
 * boundary. So the base URL here must point at the ASSETS bucket, and this
 * module holds no credentials of any kind: the art is public and immutable,
 * which is precisely what lets the client fetch it directly.
 *
 * KEYS ARE NOT INVENTED HERE. `concept-assets/{slug}.{ext}` is
 * `asset_object_key()` in the API repo, byte-identical to the manifest's own
 * `file_unlabelled` column, so a bucket listing can be compared against the
 * work order by eye.
 *
 * WHY THE LABEL SET IS A SEPARATE FETCH. The art is immutable once drawn; the
 * label layer is edited — a term reworded, a leader moved, a Hinglish string
 * added. Keeping them in one object would mean re-uploading a megabyte of PNG
 * to fix a typo, and re-downloading it on every device. The JSON is small and
 * cache-busts on its own.
 */
import { createFigureResolver, type FigureRecord, type FigureResolver } from './figure-resolver';

/**
 * Where the public illustrations bucket is served from, with NO trailing slash
 * (e.g. `https://assets.monklearning.app`).
 *
 * Unset is a legitimate state and not an error: the bucket is provisioned
 * separately from this code, and until it exists every slug misses, the board
 * draws nothing, and `onGap` records it — the same cost as a concept with no
 * art at all. That is the tier system's ordinary behaviour, not a failure mode
 * needing its own branch.
 */
export const ASSETS_BASE_URL = (process.env.EXPO_PUBLIC_ASSETS_BASE_URL ?? '').replace(/\/+$/, '');

/** `concept-assets/{slug}.{ext}` — mirrors the API's `asset_object_key`. */
export function assetObjectUrl(base: string, slug: string, ext = 'png'): string {
  return `${base}/concept-assets/${slug}.${ext}`;
}

/** The label set that travels with a figure. */
export function labelSetUrl(base: string, slug: string): string {
  return `${base}/concept-assets/${slug}.json`;
}

/**
 * Turns one slug into a `FigureRecord`, or throws so `prefetch` reports it as
 * missing.
 *
 * `fetchJson` is injectable so this can be tested without a network and without
 * a provisioned bucket — the alternative is a module nothing can exercise until
 * infrastructure exists, which is how untested code reaches a classroom.
 */
export function createR2FigureLoader(
  base: string,
  fetchJson: (url: string) => Promise<unknown> = async (url) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    return res.json();
  }
): (slug: string) => Promise<FigureRecord> {
  return async (slug: string) => {
    if (!base) {
      throw new Error(
        `[labelled_figure] EXPO_PUBLIC_ASSETS_BASE_URL is not set, so "${slug}" ` +
          `cannot be loaded. The illustrations bucket is provisioned separately.`
      );
    }
    const raw = (await fetchJson(labelSetUrl(base, slug))) as Record<string, unknown>;

    // The stored JSON is a SUPERSET: it also carries the §4 provenance block
    // (licence, source_url, author). That is read by nobody here and never
    // reaches the renderer — licence enforcement belongs to the ingest gate,
    // which refuses a share-alike row before it can be stored at all. A second
    // check in the render path would look like enforcement without being it,
    // because by the time a component is drawing pixels the decision to ship
    // the file has already been made.
    const art = (raw.art ?? {}) as Record<string, unknown>;
    const ext = typeof raw.ext === 'string' ? raw.ext : 'png';

    const record: FigureRecord = {
      asset_slug: slug,
      art: {
        // `source` is `number | { uri }` precisely so a bundled asset and a
        // remote file are the same thing to the renderer.
        source: { uri: assetObjectUrl(base, slug, ext) },
        intrinsic_w: Number(art.intrinsic_w ?? 0),
        intrinsic_h: Number(art.intrinsic_h ?? 0),
      },
      groups: (raw.groups ?? []) as FigureRecord['groups'],
      labels: (raw.labels ?? []) as FigureRecord['labels'],
    };

    // Refused rather than passed on. A record with no intrinsic size makes
    // every label position a division by zero, and a record with no labels is
    // a picture with nothing to teach — both render as something plausible and
    // wrong, which is worse than the gap this throw produces.
    if (!(record.art.intrinsic_w > 0 && record.art.intrinsic_h > 0)) {
      throw new Error(
        `[labelled_figure] "${slug}" has no intrinsic size ` +
          `(${record.art.intrinsic_w}x${record.art.intrinsic_h}); every label ` +
          `position would be computed against zero.`
      );
    }
    if (record.labels.length === 0) {
      throw new Error(`[labelled_figure] "${slug}" carries no labels — it is art, not a figure.`);
    }
    return record;
  };
}

/** The resolver the classroom uses. Falls back to nothing resolving, loudly. */
export const r2FigureResolver: FigureResolver = createFigureResolver(
  createR2FigureLoader(ASSETS_BASE_URL)
);
