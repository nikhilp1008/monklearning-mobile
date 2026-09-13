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
import { readFileSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '..');
const API = resolve(ROOT, '..', '..', 'monk-learning-api');

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
