import { spawnSync } from 'node:child_process';
import { mkdtempSync, writeFileSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join, resolve } from 'node:path';
import { vectorSum } from '../index';
import { renderWidgetTreeAt } from '../../__tests__/test-utils';
const ROOT = resolve(__dirname, '../../../..');
const GATE = resolve(ROOT, 'scripts/verify-render.mjs');
const dir = mkdtempSync(join(tmpdir(), 'g6-'));
const FRAMES = [[340,340],[343,236],[495,270],[702,289],[900,430]] as const;
const CASES = [
  {n:'default', p: vectorSum.defaults},
  {n:'obtuse', p: {...vectorSum.defaults, a_mag:2, b_mag:7, theta_deg:145}},
  {n:'collinear0', p: {...vectorSum.defaults, a_mag:5, b_mag:3, theta_deg:0}},
  {n:'collinear180', p: {...vectorSum.defaults, a_mag:5, b_mag:3, theta_deg:180}},
  {n:'components', p: {...vectorSum.defaults, mode:'components', b_label:'u', theta_deg:37}},
  {n:'tiny-vs-huge', p: {...vectorSum.defaults, a_mag:0.5, b_mag:90, theta_deg:30}},
];
describe('vector_sum through the REAL gate', () => {
  for (const c of CASES) for (const [w,h] of FRAMES) {
    test(`${c.n} at ${w}x${h}`, () => {
      const v = vectorSum.validate(c.p as never);
      expect(v.ok).toBe(true); if (!v.ok) return;
      const f = join(dir, `${c.n}-${w}x${h}.json`);
      writeFileSync(f, JSON.stringify(renderWidgetTreeAt(vectorSum as never, v.params, {}, w, h)));
      const r = spawnSync('node',[GATE,f,'--w',String(w),'--h',String(h)],{cwd:ROOT,encoding:'utf8'});
      if (r.status !== 0) throw new Error(`${c.n} ${w}x${h}:\n${r.stdout}${r.stderr}`);
    });
  }
});
