import { Image as RNImage } from 'react-native';
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
import { type AssetRow, ensureFigureFile } from './figure-file-cache';
import { isReviewed, type LabelSet, toFigureRecord, validateLabelSet } from './label-set';

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

/**
 * Fails loudly in development when the bucket is not configured.
 *
 * WHY THIS EXISTS AND WHY IT IS NOISY. With `ASSETS_BASE_URL` empty the
 * classroom silently selects `placeholderFigureResolver` — one bundled figure
 * that always resolves — and every real slug misses. That fallback is
 * deliberate and good: a developer with no bucket sees SOMETHING rather than a
 * blank board with no way to tell "not wired" from "broken".
 *
 * But it is indistinguishable from the feature working. This variable was
 * absent from every env file in the repo for the entire life of the
 * illustration tier: 113 plates ingested, publicly readable, reconciled 0/0,
 * and not one of them could ever have reached a board. Nothing failed. The
 * board just drew text, and the placeholder made even that look intentional.
 *
 * So the silence is what gets fixed, not the fallback. Dev throws; production
 * keeps the placeholder, because a student mid-class is not helped by a crash.
 */
export function assertAssetsConfigured(): void {
  if (!__DEV__ || ASSETS_BASE_URL) return;
  throw new Error(
    'EXPO_PUBLIC_ASSETS_BASE_URL is not set.\n\n' +
      'The figure resolver has fallen back to the bundled placeholder, so every ' +
      'labelled_figure board event will render the same stand-in and no real ' +
      'plate can appear. This is silent by design in production and must never ' +
      'be silent here.\n\n' +
      'Set it in .env (committed) and in eas.json for the build profile you are ' +
      'running. The bucket is drona-assets; the value is its public r2.dev base.'
  );
}

/** `concept-assets/{slug}.{ext}` — mirrors the API's `asset_object_key`. */
export function assetObjectUrl(base: string, slug: string, ext = 'png'): string {
  return `${base}/concept-assets/${slug}.${ext}`;
}

/** The label set that travels with a figure. */
export function labelSetUrl(base: string, slug: string): string {
  return `${base}/concept-assets/${slug}.json`;
}

/* ------------------------------------------------------------- renditions */

/**
 * Every master in drona-illustrations-v1 is under 1600 px wide — 104 of them
 * are 896x500, chat-transferred. Letterboxed into a 900pt board on a 2x screen
 * that is 1800 device pixels of frame for 896 pixels of art, and flat-colour
 * line art shown at 2x its own resolution is visibly soft.
 *
 * So the ingest produces `<asset_slug>@2x.png` by 2x Lanczos beside every
 * master under 1600, and the client picks between them. Lanczos because these
 * are flat fills with hard edges: bilinear rounds the edges off and nearest
 * staircases them.
 *
 * PROVENANCE STAYS WITH THE MASTER. `concept_assets.sha256` is the master's,
 * and only the master's — a rendition is derived, reproducible from it, and
 * hashing it would put a second checksum in the table that means nothing on
 * its own.
 */
export const RENDITION_SUFFIX = '@2x';

/** The largest master this pipeline upscales. Mirrors the ingest's own bound. */
/**
 * The widest request this app can make: 900pt at 2x. A master at least this
 * wide is never asked for a rendition, and a master under it always is on some
 * device — so this is also the width above which the ingest stops producing
 * one, and the two must be the same number.
 *
 * It was 1600 on both sides, which opened a window nothing was watching: a
 * master 1601..1799 px wide was asked for an @2x the ingest declined to make,
 * and the board 404s on the only file it wants. No master in v1.1 fell in it,
 * so it was latent rather than broken.
 */
export const RENDITION_THRESHOLD_PX = 1800;

/**
 * Which file to fetch for a frame. `master` or `@2x`.
 *
 * The comparison is DEVICE PIXELS against the master's own pixel width, not
 * points against points: a 343pt board on a 3x phone is 1029 real pixels, and
 * a 896px master is under-resolved there even though 896 > 343 reads
 * comfortable. Points would pick the master on every phone in the catalogue.
 *
 * Ties go to the master. Equal resolution means the upscale adds bytes and no
 * detail, and the master is the file whose sha256 is recorded.
 */
export function pickRendition(masterWidthPx: number, frameWidthPt: number, dpr: number):
  'master' | typeof RENDITION_SUFFIX {
  const devicePx = frameWidthPt * dpr;
  return devicePx > masterWidthPx ? RENDITION_SUFFIX : 'master';
}

/** The object key for the chosen rendition. */
export function renditionUrl(
  base: string, slug: string, ext: string,
  masterWidthPx: number, frameWidthPt: number, dpr: number
): string {
  const which = pickRendition(masterWidthPx, frameWidthPt, dpr);
  const name = which === 'master' ? slug : `${slug}${RENDITION_SUFFIX}`;
  return `${base}/concept-assets/${name}.${ext}`;
}

/**
 * Turns one slug into a `FigureRecord`, or throws so `prefetch` reports it as
 * missing.
 *
 * `fetchJson` is injectable so this can be tested without a network and without
 * a provisioned bucket — the alternative is a module nothing can exercise until
 * infrastructure exists, which is how untested code reaches a classroom.
 */
/**
 * How art measures itself when no label set says so.
 *
 * `image_w`/`image_h` live in the label set, so an unlabelled plate has no
 * declared size — and without one the letterbox fit has nothing to fit. This
 * asks the image. Injectable for the same reason `fetchJson` is: a module that
 * can only be exercised against a provisioned bucket is a module nothing tests.
 */
export type MeasureArt = (url: string) => Promise<{ w: number; h: number }>;

/**
 * What the server said about each asset, keyed by slug.
 *
 * Populated from GET /drona/chapter/{id}/figures at class start. The loader
 * needs `bytes` and `sha256` to verify a download and to name the cached file,
 * and neither lives in the label set — a plate with no published labels has no
 * label set at all, and that is the normal case.
 */
const assetIndex = new Map<string, AssetRow>();

export function setChapterAssets(rows: readonly AssetRow[]): void {
  for (const r of rows) assetIndex.set(r.asset_slug, r);
}

export function knownAsset(slug: string): AssetRow | null {
  return assetIndex.get(slug) ?? null;
}

/** Test seam. */
export function _clearChapterAssets(): void {
  assetIndex.clear();
}

const defaultMeasure: MeasureArt = (url) =>
  new Promise((resolve, reject) => {
    RNImage.getSize(url, (w, h) => resolve({ w, h }), reject);
  });

export interface FigureLoaderOptions {
  /** The frame the art will be drawn into, so the rendition is chosen once, at
   *  download time, rather than fetched twice. Defaults to the widest board. */
  frameWidthPt?: number;
  dpr?: number;
  ensureFile?: typeof ensureFigureFile;
}

export function createR2FigureLoader(
  base: string,
  fetchJson: (url: string) => Promise<unknown> = async (url) => {
    const res = await fetch(url);
    if (!res.ok) throw new Error(`${res.status} ${res.statusText}`);
    return res.json();
  },
  measureArt: MeasureArt = defaultMeasure,
  opts: FigureLoaderOptions = {}
): (slug: string) => Promise<FigureRecord> {
  const { frameWidthPt = 900, dpr = 2, ensureFile = ensureFigureFile } = opts;
  return async (slug: string) => {
    if (!base) {
      throw new Error(
        `[labelled_figure] EXPO_PUBLIC_ASSETS_BASE_URL is not set, so "${slug}" ` +
          `cannot be loaded. The illustrations bucket is provisioned separately.`
      );
    }

    /*
     * THE PLATE AND THE LABELS ARE TWO DECISIONS, NOT ONE.
     *
     * This used to throw on a missing or unreviewed label set, so the whole
     * figure failed to resolve and the board fell to the next tier — a blank
     * where a correct, licensed, already-uploaded plate existed. The review
     * gate is about LABELS: an unreviewed anchor may put a correct word on the
     * wrong organ, and a student cannot tell. None of that is true of the art
     * itself, which is the same file either way.
     *
     * So: draw the plate whenever the asset resolves. Draw labels only when a
     * set is published, valid, addressed to THIS slug, and carries a
     * reviewed_by. Every failure below costs the labels and nothing else.
     */
    let set: LabelSet | null = null;
    // `ext` rides the raw JSON, not the validated set. It is read even when
    // the set is rejected: the extension names the ART file, and the art is
    // drawn either way.
    let ext = 'png';
    let why = '';
    try {
      const raw = (await fetchJson(labelSetUrl(base, slug))) as Record<string, unknown>;
      if (typeof raw.ext === 'string' && raw.ext) ext = raw.ext;
      const checked = validateLabelSet(raw);
      if (!checked.ok) {
        why = `label set is invalid: ${checked.errors.join('; ')}`;
      } else if (checked.set.asset_slug !== slug) {
        // The file that answered is not the file that was asked for. Serving
        // its labels would put one figure's words on another figure's art —
        // the one failure here that is worse than having no labels.
        why = `asked for "${slug}" and got a set for "${checked.set.asset_slug}"`;
      } else if (!isReviewed(checked.set)) {
        why = 'no reviewed_by — a draft anchor is a guess about where each ' +
              'structure is, and never ships unreviewed';
      } else {
        set = checked.set;
      }
    } catch (err) {
      // Absent is the NORMAL state for a freshly ingested plate: the art is
      // uploaded at ingest and the label set only after a person reviews it.
      why = `no label set published (${String((err as Error)?.message ?? err)})`;
    }

    /*
     * THE ART IS DOWNLOADED, NOT LINKED.
     *
     * `validate()` rejects a remote URL — "the board never fetches while
     * rendering" — and this loader used to hand it one, so the two halves
     * could never agree and no plate has ever drawn in a live class. The file
     * is fetched to the device's cache and the widget gets a `file://` URI,
     * which is what that rule always assumed had happened.
     *
     * A slug with no row in the asset index cannot be verified or named, so it
     * is refused rather than downloaded on trust: the cache key IS the row's
     * sha256, and inventing one produces a file that never invalidates.
     */
    const row = knownAsset(slug);
    if (!row) {
      throw new Error(
        `[labelled_figure] "${slug}" is not in the chapter asset index, so its ` +
          `art cannot be verified or cached. The class start prefetch calls ` +
          `GET /drona/chapter/{id}/figures; a slug missing from it is a row the ` +
          `server did not return.`
      );
    }
    const artUrl = await ensureFile(base, row, frameWidthPt, dpr);

    if (set) return toFigureRecord(set, artUrl);

    // ── plate only ──────────────────────────────────────────────────────────
    // Logged every time, and not as an error: this is the expected state for
    // 113 of the 113 plates ingested so far. A silent unlabelled plate would
    // make "the labels never got reviewed" indistinguishable from "this figure
    // has no labels", and only the first is a queue someone has to work.
    console.warn(`[labelled_figure] "${slug}" drawn without labels — ${why}`);

    const { w, h } = await measureArt(artUrl);
    if (!(w > 0 && h > 0)) {
      // Still a throw: a plate with no size cannot be letterboxed, and a
      // figure drawn against zero is not a rougher figure, it is a wrong one.
      throw new Error(
        `[labelled_figure] "${slug}" art has no intrinsic size (${w}x${h}); ` +
          `the letterbox fit would be computed against zero.`
      );
    }
    return {
      asset_slug: slug,
      art: { source: { uri: artUrl }, intrinsic_w: w, intrinsic_h: h },
      groups: [],
      labels: [],
    };
  };
}

/** The resolver the classroom uses. Falls back to nothing resolving, loudly. */
export const r2FigureResolver: FigureResolver = createFigureResolver(
  createR2FigureLoader(ASSETS_BASE_URL)
);
