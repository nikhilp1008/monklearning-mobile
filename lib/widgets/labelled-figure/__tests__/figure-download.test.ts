/**
 * What the download promises, against an in-memory filesystem.
 *
 * The behaviours here are the ones that decide whether a student sees a plate,
 * a torn plate, or nothing — and each has a failure mode that looks like
 * success from the outside, which is why they are stated separately.
 */
jest.mock('expo-file-system', () => require('../__fixtures__/fake-fs'));
jest.mock('expo-crypto', () => ({
  // A REAL sha-256, not a stub that agrees with whatever it is handed: the
  // mismatch test below has to exercise hashing or it proves nothing.
  CryptoDigestAlgorithm: { SHA256: 'SHA-256' },
  digest: async (_alg: string, data: ArrayBufferView) => {
    const { createHash: ch } = require('crypto');
    const view = new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
    const h = ch('sha256').update(Buffer.from(view)).digest();
    return h.buffer.slice(h.byteOffset, h.byteOffset + h.byteLength);
  },
}));

import { createHash } from 'crypto';

import { _fs, _resetFs } from '../__fixtures__/fake-fs';

import {
  ensureFigureFile, FigureDownloadError, fileNameFor, _resetFigureCacheState,
} from '../figure-file-cache';

const BASE = 'https://assets.example.test';
const SLUG = 'bio11-ch7-cockroach--morphology-and-digestive-system--a';
const ART = new Uint8Array(Array.from({ length: 512 }, (_v, i) => i % 251));
const SHA = createHash('sha256').update(Buffer.from(ART)).digest('hex');

const row = (over = {}) => ({
  asset_slug: SLUG,
  r2_key: `concept-assets/${SLUG}.png`,
  bytes: ART.length,
  master_sha256: SHA,
  rendition_2x_sha256: null,
  width: 1800,          // wide enough that the MASTER is chosen, so the sha
  height: 1240,         // check applies — the rendition has no recorded hash
  ...over,
});

/** A download that writes `content` to the destination and counts itself. */
const fakeDownload = (content: Uint8Array) => {
  const calls: string[] = [];
  const download = async (url: string, dest: { uri: string }) => {
    calls.push(url);
    _fs.set(dest.uri, { size: content.length, bytes: content, mtime: calls.length });
    return dest;
  };
  return { download: download as never, calls };
};

beforeEach(() => { _resetFs(); _resetFigureCacheState(); });

test('one download per slug+sha, however many times it is asked for', async () => {
  const { download, calls } = fakeDownload(ART);
  const deps = { download, now: () => 1 };
  const a = await ensureFigureFile(BASE, row(), 900, 2, deps);
  const b = await ensureFigureFile(BASE, row(), 900, 2, deps);   // remount
  const c = await ensureFigureFile(BASE, row(), 900, 2, deps);   // second block
  expect(a).toBe(b);
  expect(b).toBe(c);
  expect(calls).toHaveLength(1);
});

test('concurrent callers share one in-flight download', async () => {
  const { download, calls } = fakeDownload(ART);
  const deps = { download, now: () => 1 };
  const [a, b] = await Promise.all([
    ensureFigureFile(BASE, row(), 900, 2, deps),
    ensureFigureFile(BASE, row(), 900, 2, deps),
  ]);
  expect(a).toBe(b);
  // The chapter prefetch and the turn's buffer prefetch race by design; two
  // requests for one figure must not be two downloads.
  expect(calls).toHaveLength(1);
});

test('a new sha is a new file, and the old one is unreachable', async () => {
  const { download, calls } = fakeDownload(ART);
  const deps = { download, now: () => 1 };
  const first = await ensureFigureFile(BASE, row(), 900, 2, deps);

  const NEW = new Uint8Array(Array.from({ length: 700 }, (_v, i) => (i * 7) % 251));
  const newSha = createHash('sha256').update(Buffer.from(NEW)).digest('hex');
  const d2 = fakeDownload(NEW);
  const second = await ensureFigureFile(
    BASE, row({ master_sha256: newSha, bytes: NEW.length }), 900, 2,
    { download: d2.download, now: () => 2 }
  );
  expect(second).not.toBe(first);
  expect(second).toContain(fileNameFor(SLUG, newSha));
  expect(d2.calls).toHaveLength(1);
  expect(calls).toHaveLength(1);
});

test('a truncated download is deleted, not drawn', async () => {
  // The normal phone failure: a tunnel, a captive portal, a backgrounded app.
  // The file exists, opens, and renders as a grey band — which is why the
  // length is checked and why the file must not survive the check.
  const { download } = fakeDownload(ART.slice(0, 100));
  const dest = `file:///cache/figures/${fileNameFor(SLUG, SHA)}`;
  await expect(
    ensureFigureFile(BASE, row(), 900, 2, { download, now: () => 1 })
  ).rejects.toThrow(FigureDownloadError);
  expect(_fs.has(dest)).toBe(false);
});

test('a same-length DIFFERENT file is deleted — the case bytes cannot see', async () => {
  const other = new Uint8Array(ART.length).fill(9);
  expect(other.length).toBe(ART.length);
  const { download } = fakeDownload(other);
  await expect(
    ensureFigureFile(BASE, row(), 900, 2, { download, now: () => 1 })
  ).rejects.toThrow(/hashes/);
  expect(_fs.size).toBe(0);
});

test('a row with no sha256 is refused rather than cached under a guess', async () => {
  const { download, calls } = fakeDownload(ART);
  await expect(
    ensureFigureFile(BASE, row({ master_sha256: '' }), 900, 2, { download, now: () => 1 })
  ).rejects.toThrow(/no master_sha256/);
  // Not downloaded at all: a file cached under a guessed version never
  // invalidates, which is worse than not caching it.
  expect(calls).toHaveLength(0);
});

test('offline with the file already cached returns it without a download', async () => {
  const { download, calls } = fakeDownload(ART);
  await ensureFigureFile(BASE, row(), 900, 2, { download, now: () => 1 });
  const offline = async () => { throw new Error('Network request failed'); };
  const again = await ensureFigureFile(BASE, row(), 900, 2,
    { download: offline as never, now: () => 2 });
  expect(again).toContain(fileNameFor(SLUG, SHA));
  expect(calls).toHaveLength(1);
});

test('offline with nothing cached rejects — the caller logs one gap', async () => {
  const offline = async () => { throw new Error('Network request failed'); };
  await expect(
    ensureFigureFile(BASE, row(), 900, 2, { download: offline as never, now: () => 1 })
  ).rejects.toThrow(/Network request failed/);
  expect(_fs.size).toBe(0);
});

describe('the @2x is verified too, not trusted for its length', () => {
  /*
   * It used to be checked for emptiness only, because the ingest recorded no
   * hash for it — a real gap, and the fix was to record one rather than to
   * describe the gap more carefully. A rendition is the file MOST devices
   * actually fetch (896px master, 343pt at 3x is 1029 device px), so trusting
   * it for its length meant the file a student sees was the one file nothing
   * could verify.
   */
  const NARROW = { width: 896, height: 560 };
  const REND = new Uint8Array(Array.from({ length: 900 }, (_v, i) => (i * 3) % 251));
  const RSHA = createHash('sha256').update(Buffer.from(REND)).digest('hex');

  const narrowRow = (over = {}) => ({
    ...row(), ...NARROW, rendition_2x_sha256: RSHA, ...over,
  });

  test('a phone downloads the @2x and it is hashed against the row', async () => {
    const { download, calls } = fakeDownload(REND);
    const uri = await ensureFigureFile(BASE, narrowRow(), 343, 3,
                                       { download, now: () => 1 });
    expect(calls[0]).toContain('@2x.png');
    expect(uri).toBeTruthy();
  });

  test('a substituted @2x of the same length is deleted', async () => {
    const other = new Uint8Array(REND.length).fill(7);
    const { download } = fakeDownload(other);
    await expect(
      ensureFigureFile(BASE, narrowRow(), 343, 3, { download, now: () => 1 })
    ).rejects.toThrow(/@2x hashes/);
    expect(_fs.size).toBe(0);
  });

  test('an @2x offered with no recorded hash is refused, not cached unverified', async () => {
    // 0041 makes this unreachable for a narrow master, so it is the case that
    // says what happens if the guarantee ever slips.
    const { download } = fakeDownload(REND);
    await expect(
      ensureFigureFile(BASE, narrowRow({ rendition_2x_sha256: null }), 343, 3,
                       { download, now: () => 1 })
    ).rejects.toThrow(/records no hash for it/);
    expect(_fs.size).toBe(0);
  });
});
