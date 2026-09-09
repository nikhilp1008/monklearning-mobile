/**
 * Downloaded figure art on the device's own filesystem.
 *
 * WHY THIS EXISTS AT ALL. `labelled-figure/index.tsx`'s `validate()` rejects a
 * remote URL outright — "the board never fetches while rendering" — and the R2
 * loader handed it exactly that. The two shipped together and were mutually
 * exclusive: the loader could never produce a record the widget would accept,
 * so no plate has ever drawn in a live class. This is the missing half, not a
 * new tier: the resolver downloads before the class and the widget gets a
 * `file://` URI, which is what the contract said all along.
 *
 * WHAT IS VERIFIED AND WHY EACH ONE.
 *   sha256  ALWAYS, for whichever file was downloaded — master or @2x. The
 *           row carries a hash for each, so there is no file this fetches that
 *           it cannot verify. `bytes` alone cannot tell a truncated download
 *           from a DIFFERENT file of the same length, and only the hash can.
 *   bytes   for the master, where the row records a length as well. A length
 *           mismatch is the cheaper failure to report — it names the size —
 *           so it is checked first even though the hash would also catch it.
 *
 * A file that fails either check is DELETED before anything can read it. A
 * half-file left on disk would pass `exists` on the next launch and never be
 * re-fetched, which is a corrupt figure that heals only by reinstalling.
 */
import * as Crypto from 'expo-crypto';
import { Directory, File, Paths } from 'expo-file-system';

import { pickRendition, RENDITION_SUFFIX } from './r2-figure-resolver';

/** What the chapter-figures endpoint says about one asset. */
export interface AssetRow {
  asset_slug: string;
  r2_key: string;
  bytes: number;
  /** SHA-256 of the master object. */
  master_sha256: string;
  /** SHA-256 of the @2x beside it, or null when the master is wide enough that
   *  no rendition exists. NULL is a statement, not an omission — see
   *  migrations/0041. */
  rendition_2x_sha256: string | null;
  width: number;
  height: number;
}

/** 200 MB. The whole v1.1 corpus is ~180 MB of masters and renditions, so a
 *  student who works through every chapter with figures fills this once and
 *  then evicts the chapters they have finished with. */
export const CACHE_CAP_BYTES = 200 * 1024 * 1024;

const DIR_NAME = 'figures';

function figuresDir(): Directory {
  const dir = new Directory(Paths.cache, DIR_NAME);
  if (!dir.exists) dir.create({ intermediates: true, idempotent: true });
  return dir;
}

/**
 * `<asset_slug>.<sha256[:12]>.png`.
 *
 * The hash is IN THE NAME rather than in a sidecar index, so new art for an
 * existing slug is a different file by construction: nothing has to remember
 * to invalidate anything, and a stale file is unreachable rather than wrong.
 * Twelve hex characters is 48 bits — collision is not the failure mode here,
 * a forgotten invalidation is.
 */
export function fileNameFor(slug: string, sha256: string, ext = 'png'): string {
  return `${slug}.${sha256.slice(0, 12)}.${ext}`;
}

const hex = (buf: ArrayBuffer) =>
  Array.from(new Uint8Array(buf), (b) => b.toString(16).padStart(2, '0')).join('');

/** Which object this device should hold for this asset. */
export function chooseKey(row: AssetRow, frameWidthPt: number, dpr: number): {
  key: string; isMaster: boolean;
} {
  const which = pickRendition(row.width, frameWidthPt, dpr);
  if (which === 'master') return { key: row.r2_key, isMaster: true };
  const stem = row.r2_key.replace(/\.([^.]+)$/, '');
  const ext = row.r2_key.slice(stem.length + 1);
  return { key: `${stem}${RENDITION_SUFFIX}.${ext}`, isMaster: false };
}

export interface DownloadDeps {
  /** Injected so tests never touch a filesystem or a network. */
  download: (url: string, dest: File) => Promise<File>;
  now: () => number;
}

const defaultDeps: DownloadDeps = {
  download: (url, dest) => File.downloadFileAsync(url, dest) as unknown as Promise<File>,
  now: () => Date.now(),
};

/** slug+sha -> in-flight promise. Two blocks on one figure are one download. */
const inFlight = new Map<string, Promise<string>>();

/** Last time each file was handed to a renderer — the R in LRU. */
const lastUsed = new Map<string, number>();

export class FigureDownloadError extends Error {}

/**
 * Ensures the art for `row` is on disk and returns its `file://` URI.
 *
 * Deduplicated on `slug+sha`, so the two prefetch moments — the chapter list
 * at class start and the turn's buffered board events — cost one download
 * between them, whichever arrives first.
 */
export async function ensureFigureFile(
  base: string,
  row: AssetRow,
  frameWidthPt: number,
  dpr: number,
  deps: DownloadDeps = defaultDeps
): Promise<string> {
  if (!row.master_sha256) {
    // Refused rather than keyed on something else. A file cached under a
    // guessed version is a file that never invalidates, and the endpoint
    // already logs which rows arrive unhashed.
    throw new FigureDownloadError(
      `[figure-cache] "${row.asset_slug}" has no master_sha256 — refusing to cache ` +
        `art with no version. Backfill concept_assets (migration 0040).`
    );
  }
  const dedupeKey = `${row.asset_slug}.${row.master_sha256}`;
  const existing = inFlight.get(dedupeKey);
  if (existing) return existing;

  const p = (async () => {
    const { key, isMaster } = chooseKey(row, frameWidthPt, dpr);
    const ext = key.slice(key.lastIndexOf('.') + 1);
    const dest = new File(figuresDir(), fileNameFor(row.asset_slug, row.master_sha256, ext));

    if (dest.exists) {
      lastUsed.set(dest.uri, deps.now());
      return dest.uri;
    }

    const file = await deps.download(`${base}/${key}`, dest);

    // ── verification, before anything can read it ──────────────────────────
    // Length first where the row records one: it names the size, so it is the
    // cheaper failure to read. The hash then catches what a length cannot.
    if (isMaster && file.size !== row.bytes) {
      file.delete();
      throw new FigureDownloadError(
        `[figure-cache] "${row.asset_slug}" downloaded ${file.size} bytes, row says ` +
          `${row.bytes}. Deleted; the board draws no figure rather than a torn one.`
      );
    }
    const want = isMaster ? row.master_sha256 : row.rendition_2x_sha256;
    if (!want) {
      // Only reachable if the server offered an @2x with no hash for it, which
      // 0041 makes impossible for a narrow master. Refused rather than
      // accepted unverified — an unverifiable file is the one this whole
      // module exists to keep off the board.
      file.delete();
      throw new FigureDownloadError(
        `[figure-cache] "${row.asset_slug}" chose ${isMaster ? 'the master' : 'the @2x'} ` +
          `and the row records no hash for it. Deleted; nothing unverified is cached.`
      );
    }
    const got = hex(await Crypto.digest(Crypto.CryptoDigestAlgorithm.SHA256, await file.bytes()));
    if (got !== want) {
      file.delete();
      throw new FigureDownloadError(
        `[figure-cache] "${row.asset_slug}" ${isMaster ? 'master' : '@2x'} hashes ` +
          `${got.slice(0, 12)}, row says ${want.slice(0, 12)}. Deleted — same length, ` +
          `different file, which is the case a byte count cannot see.`
      );
    }

    lastUsed.set(file.uri, deps.now());
    evictIfOver(deps);
    return file.uri;
  })().finally(() => inFlight.delete(dedupeKey));

  inFlight.set(dedupeKey, p);
  return p;
}

/**
 * LRU by LAST DRAWN, not last downloaded.
 *
 * The distinction matters for a set: figures b and c of a six-plate concept
 * are downloaded with a, then one of them is shown for twenty minutes while
 * the others are not. Evicting by download time would drop the one in use.
 */
export function evictIfOver(deps: DownloadDeps = defaultDeps): number {
  const dir = figuresDir();
  const files = dir.list().filter((f): f is File => f instanceof File);
  let total = files.reduce((n, f) => n + (f.size ?? 0), 0);
  if (total <= CACHE_CAP_BYTES) return 0;

  const byAge = files
    .map((f) => ({ f, used: lastUsed.get(f.uri) ?? f.info().modificationTime ?? 0 }))
    .sort((a, b) => a.used - b.used);

  let freed = 0;
  for (const { f } of byAge) {
    if (total <= CACHE_CAP_BYTES) break;
    const size = f.size ?? 0;
    f.delete();
    lastUsed.delete(f.uri);
    total -= size;
    freed += 1;
  }
  return freed;
}

/** Records that this file was just drawn. */
export function touch(uri: string, now = Date.now()): void {
  lastUsed.set(uri, now);
}

/** `figures clear` — for testing on a device, and after a bad batch. */
export function clearFigureCache(): number {
  const dir = figuresDir();
  const files = dir.list().filter((f): f is File => f instanceof File);
  for (const f of files) f.delete();
  lastUsed.clear();
  inFlight.clear();
  return files.length;
}

/** Test seam only. */
export function _resetFigureCacheState(): void {
  lastUsed.clear();
  inFlight.clear();
}
