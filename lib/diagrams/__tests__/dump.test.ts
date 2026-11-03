import { mkdirSync, writeFileSync } from 'fs';
import { join } from 'path';

import { DIAGRAMS } from '@/lib/diagrams';

/**
 * TO LOOK AT THE DRAWINGS WITHOUT THE APP: `DUMP_DIAGRAMS=<dir> npx jest
 * lib/diagrams/__tests__/dump` writes every case of every diagram as an SVG
 * (`<id>__<case>.svg`, texts included), then `qlmanage -t -s 1000 -o <dir>
 * <dir>/*.svg` turns them into PNGs. Off unless the variable is set. The
 * fonts are the Mac's stand-ins, so judge layout here and type on the device.
 */
const dir = process.env.DUMP_DIAGRAMS;
(dir ? describe : describe.skip)('dump diagrams', () => {
  it('writes every case', () => {
    mkdirSync(dir!, { recursive: true });
    for (const d of Object.values(DIAGRAMS).flat())
      d.cases.forEach((c, i) => {
        const svg = d.draw(c).svg(true).replace('<svg ', '<svg style="background:#fff" ');
        writeFileSync(join(dir!, `${d.id}__${i}.svg`), svg);
      });
  });
});
