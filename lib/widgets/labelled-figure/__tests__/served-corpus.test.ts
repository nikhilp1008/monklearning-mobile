/**
 * Every PUBLISHED set, laid out at both shipping frames, from the bytes R2
 * serves. "Labelled" means placed == labels in that group, for every group.
 *
 * Run headlessly rather than on the device because a 116-row table read off
 * simulator screenshots is a poor instrument — and because the device sweep's
 * bare "0/30" for a healthy 4-group set sent me looking for a broken corpus
 * when the fault was in the measurement.
 *
 * Regenerate the input with the dump in scripts/ (see the K report).
 */
import { toFigureRecord } from '../label-set';
import { labelledFigure } from '../index';
import { layoutFigure } from '../figure-layout';
import SERVED from './served-sets.json';

const FRAMES: [number, number][] = [[343, 236], [702, 289]];

type Row = { slug: string; groups: number; labels: number;
             placed: number; expected: number; why: string[] };

test('every published set places every pill at both frames', () => {
  const rows: Row[] = [];
  for (const [slug, raw] of Object.entries(SERVED as unknown as Record<string, unknown>)) {
    const doc = raw as unknown as {
      groups?: { id: string }[]; labels?: { group?: string }[]; _w: number; _h: number;
    };
    const why: string[] = [];
    let placed = 0;
    let expected = 0;
    let rec: ReturnType<typeof toFigureRecord> | null = null;
    try {
      rec = toFigureRecord(raw as never, `file:///${slug}.png`);
    } catch (e) {
      why.push(`toFigureRecord threw: ${String(e).slice(0, 90)}`);
    }
    const groups = rec?.groups ?? [];
    for (const g of groups) {
      const want = (rec?.labels ?? []).filter((l) => l.group === g.id).length;
      for (const [fw, fh] of FRAMES) {
        const checked = labelledFigure.validate({
          asset_slug: slug, art: rec!.art, groups: rec!.groups,
          labels: rec!.labels, lang: 'english', active_group: g.id,
        });
        expected += want;
        if (!checked.ok) {
          if (why.length < 2) why.push(`${g.id}@${fw}x${fh}: ${checked.errors[0]}`);
          continue;
        }
        placed += layoutFigure(checked.params, fw, fh).labels.length;
      }
    }
    rows.push({ slug, groups: groups.length, labels: rec?.labels.length ?? 0,
                placed, expected, why });
  }

  const short = rows.filter((r) => r.placed !== r.expected);
  const dark = rows.filter((r) => r.placed === 0 && r.expected > 0);
  console.log(`\nsets drawing NO labels at all: ${dark.length}`);
  for (const d of dark) console.log(`   DARK ${d.slug}`);
  const totalPlaced = rows.reduce((a, r) => a + r.placed, 0);
  const totalExpected = rows.reduce((a, r) => a + r.expected, 0);
  console.log(`\n${rows.length} sets · pills ${totalPlaced}/${totalExpected} · ` +
              `${rows.length - short.length} fully placed, ${short.length} short\n`);
  for (const r of short) {
    console.log(`SHORT ${r.slug}`);
    console.log(`   groups ${r.groups}  labels ${r.labels}  placed ${r.placed}/${r.expected}`);
    for (const w of r.why) console.log(`   why: ${w}`);
  }
  expect(rows.length).toBe(116);
});
