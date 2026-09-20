/**
 * THE PROPERTY THE GATE EXISTS TO HAVE: it agrees with the runtime.
 *
 * On 2026-09-18 it did not. `bio11-ch4-phylum-platyhelminthes--c` passed the
 * publish gate at all five frames and then drew a BLANK BOARD, because the
 * anchor glyph floor (2r+4 = 10pt at 343x236) lived in the widget's
 * `validate()` and the gate called `validateLabelSet` + `gateLabelSet`
 * instead — two validators, different answers, and the one that said yes was
 * the one holding the publish button.
 *
 * A fixture of "the 26 sets that were dark that day" was the obvious test and
 * is the wrong one: those sets were fixed in the CODE (term cap on the wrapped
 * line, per-label degrade), so the same bytes now pass, and the fixture would
 * pin a historical answer rather than the property. What must hold is general,
 * so it is asserted over every served set:
 *
 *   the gate refuses a set  <=>  the runtime would fail to place all its labels
 *
 * and, when it refuses, IT MUST SAY WHY IN THE RUNTIME'S OWN WORDS — a reason
 * that names the wrong cause sends the repair to the wrong place, which is a
 * mistake this corpus has already paid for twice.
 */
import { gateSet } from '../gate';
import { toFigureRecord } from '../label-set';
import { validate } from '../validate';
import { layoutFigure } from '../figure-layout';
import SERVED from './served-sets.json';

const FRAMES: [number, number][] = [[343, 236], [702, 289]];
const SETS = Object.entries(SERVED as unknown as Record<string, unknown>);

/** What the RUNTIME does with this set: every label placed at every frame? */
function runtimePlacesEverything(slug: string, raw: unknown): { ok: boolean; why: string } {
  const rec = toFigureRecord(raw as never, `file:///${slug}.png`);
  for (const g of rec.groups) {
    const want = rec.labels.filter((l) => l.group === g.id).length;
    const checked = validate({
      asset_slug: slug, art: rec.art, groups: rec.groups,
      labels: rec.labels, lang: 'english', active_group: g.id,
    });
    if (!checked.ok) return { ok: false, why: checked.errors[0] };
    const kept = checked.params.labels.filter((l) => l.group === g.id);
    if (kept.length !== want) {
      const lost = rec.labels
        .filter((l) => l.group === g.id && !kept.some((k) => k.id === l.id))
        .map((l) => l.id);
      return { ok: false, why: `dropped ${lost.join(', ')} in "${g.id}"` };
    }
    for (const [fw, fh] of FRAMES) {
      const placed = layoutFigure(checked.params, fw, fh).labels.length;
      if (placed !== want) {
        return { ok: false, why: `placed ${placed}/${want} in "${g.id}" at ${fw}x${fh}` };
      }
    }
  }
  return { ok: true, why: '' };
}

test('the gate and the runtime reach the same verdict on every served set', () => {
  const disagree: string[] = [];
  for (const [slug, raw] of SETS) {
    const gate = gateSet(raw);
    const runtime = runtimePlacesEverything(slug, raw);
    if (gate.ok !== runtime.ok) {
      disagree.push(
        `${slug}\n    gate    ${gate.ok ? 'PASS' : 'REFUSE'}  ${gate.verdict}` +
        `\n    runtime ${runtime.ok ? 'PLACES ALL' : 'SHORT'}  ${runtime.why}`);
    }
  }
  if (disagree.length > 0) {
    throw new Error(
      `the gate disagrees with the runtime on ${disagree.length} of ${SETS.length} ` +
      `set(s) — a set the gate passes MUST draw:\n\n${disagree.join('\n\n')}`);
  }
  expect(SETS.length).toBe(116);
});

test('a refusal quotes the runtime reason, not a substitute for it', () => {
  const mute: string[] = [];
  for (const [slug, raw] of SETS) {
    const gate = gateSet(raw);
    if (gate.ok) continue;
    const runtime = runtimePlacesEverything(slug, raw);
    // The gate's verdict must name the thing the runtime named. Label ids are
    // the shared vocabulary: if the runtime dropped `sucker`, a verdict that
    // does not contain "sucker" is pointing the repair somewhere else.
    const ids = runtime.why.match(/[a-z][a-z0-9-]{2,}/g) ?? [];
    const named = ids.some((w) => gate.verdict.includes(w));
    if (!named) mute.push(`${slug}\n    gate    ${gate.verdict}\n    runtime ${runtime.why}`);
  }
  if (mute.length > 0) {
    throw new Error(`refused with a reason the runtime did not give:\n\n${mute.join('\n\n')}`);
  }
});

test('the Taenia is refused, by the anchor floor, naming both anchors', () => {
  const raw = (SERVED as unknown as Record<string, unknown>)[
    'bio11-ch4-phylum-platyhelminthes--c'];
  const gate = gateSet(raw);
  expect(gate.ok).toBe(false);
  expect(gate.stage).toBe('widget-validate');
  expect(gate.dropped).toEqual(['sucker']);
});
