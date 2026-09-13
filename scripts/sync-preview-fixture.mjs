/**
 * The preview fixture is GENERATED from the API draft, never hand-written.
 *
 *   node scripts/sync-preview-fixture.mjs           # write
 *   node scripts/sync-preview-fixture.mjs --check   # drift-check, exit 1
 *
 * WHY. What you screenshot has to be what publishes. It was not: the frog
 * heart's three-group split was proposed, rendered, screenshotted and
 * confirmed here on 2026-09-11 — and lived ONLY in this fixture. The API
 * draft that apply_review.py would have published had no groups at all, so
 * the evidence everyone looked at came from a document nobody was going to
 * ship. The TS gate refuses that draft (twelve in one group), which is how it
 * surfaced, a day later.
 *
 * So the fixture is derived, and a jest test runs --check. A hand edit here
 * now fails loudly instead of silently disagreeing with the thing that ships.
 */
import { existsSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');
/**
 * WHERE THE API REPO IS, which is not the same place on every machine.
 *
 * This was `resolve(ROOT, '..', '..', 'monk-learning-api')` — the two repos as
 * siblings, which they are for whoever wrote it and are not here, where the
 * app lives in ~/Documents and the API on the Desktop. The test that runs this
 * then failed for everyone else with an ENOENT, and a suite that is always red
 * is a suite people stop reading.
 *
 * So: an explicit override first, then the places it is actually kept. If none
 * of them exist the check cannot be performed at all, which is different from
 * the check failing — see below.
 */
const API_CANDIDATES = [
  process.env.MONK_API_DIR,
  resolve(ROOT, '..', '..', 'monk-learning-api'),
  resolve(process.env.HOME ?? '', 'Desktop', 'monk-learning-api'),
  resolve(process.env.HOME ?? '', 'monk-learning-api'),
].filter(Boolean);
const API = API_CANDIDATES.find((dir) => existsSync(join(dir, 'content', 'label-drafts')));

if (!API) {
  /**
   * Not a failure. The drafts live in the API repo, and somebody working only
   * on the app may not have it checked out — refusing to let them run the test
   * suite would teach them to ignore it. Where the repo IS present the check is
   * as strict as ever; set MONK_API_DIR to point at it.
   */
  console.warn(
    '[sync-preview-fixture] API repo not found — cannot check fixtures against drafts.\n' +
      '  Looked in: ' + API_CANDIDATES.join(', ') + '\n' +
      '  Set MONK_API_DIR to check.'
  );
  process.exit(0);
}

/** slug -> where the preview expects it. Extend as more sets get previewed. */
const SETS = {
  'bio11-ch7-frog--circulatory-and-respiratory-systems--a':
    join(ROOT, 'test', 'fixtures', 'frog-circulatory-labels.preview.json'),
};

const check = process.argv.includes('--check');
let drift = 0;

for (const [slug, dest] of Object.entries(SETS)) {
  const draft = JSON.parse(
    readFileSync(join(API, 'content', 'label-drafts', `${slug}.draft.json`), 'utf8')
  );

  /*
   * `_draft` is authoring metadata — how the anchors were obtained, what is
   * unplaced, notes to a reviewer. It is not part of the set the widget draws
   * and it is not published, so it is dropped rather than copied: a fixture
   * carrying it would differ from the published bytes for a reason that has
   * nothing to do with the figure.
   */
  const { _draft, ...set } = draft;
  const body = JSON.stringify(set, null, 2) + '\n';

  if (check) {
    const have = readFileSync(dest, 'utf8');
    if (have !== body) {
      console.error(`DRIFT: ${dest} differs from the draft for ${slug}`);
      drift++;
    }
  } else {
    writeFileSync(dest, body);
    console.log(`wrote ${dest}  (${set.labels.length} labels, ${(set.groups ?? []).length} groups)`);
  }
}

if (check && drift) {
  console.error('run: node scripts/sync-preview-fixture.mjs');
  process.exit(1);
}
console.log(check ? 'preview fixtures match their drafts' : 'done');
