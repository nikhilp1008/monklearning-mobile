/**
 * Renders the payloads named in a job file to SVG, for a SANE review sheet.
 *
 * Not a test of anything — a jest file because jest is where the widget
 * modules, the transpile and the reanimated mocks already resolve. Skipped
 * unless REVIEW_JOB points at a job file, so a normal run never pays for it.
 */
import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';

import { REGISTRY } from '../registry';
import { renderWidgetTreeAt } from './test-utils';
import { treeToSvg } from '../review/tree-to-svg';

const JOB = process.env.REVIEW_JOB;
const OUT = process.env.REVIEW_OUT ?? '/tmp/review-svgs';

(JOB ? test : test.skip)('emit review SVGs', () => {
  const jobs: { id: string; widget: string; params: unknown }[] =
    JSON.parse(readFileSync(JOB!, 'utf8'));
  mkdirSync(OUT, { recursive: true });
  const report: Record<string, string> = {};
  for (const j of jobs) {
    const mod = (REGISTRY as Record<string, any>)[j.widget];
    if (!mod) { report[j.id] = `no such widget ${j.widget}`; continue; }
    const v = mod.validate(j.params ?? {});
    if (!v.ok) { report[j.id] = `refused: ${v.errors.join('; ')}`; continue; }
    try {
      const tree = renderWidgetTreeAt(mod, v.params, {}, 343, 236);
      const svg = treeToSvg(tree as never, 343, 236);
      const p = join(OUT, `${j.id}.svg`);
      mkdirSync(dirname(p), { recursive: true });
      writeFileSync(p, svg);
      report[j.id] = 'ok';
    } catch (e) { report[j.id] = `threw: ${String(e).slice(0, 120)}`; }
  }
  writeFileSync(join(OUT, '_report.json'), JSON.stringify(report, null, 1));
  const ok = Object.values(report).filter((r) => r === 'ok').length;
  console.log(`emitted ${ok}/${jobs.length} SVGs to ${OUT}`);
});
