// Geometry check for authored figures.
//
// The validator proves a figure is STRUCTURALLY sound: known keys, coordinates
// inside the window, a kind the reader implements. It cannot tell you the
// picture is unreadable, and that is the failure that actually reaches a
// student: two labels on top of each other, a label lying along the line it
// names, a tangent drawn so long it covers the chord beside it.
//
// Those were being found by a human scrolling the app. This mirrors the
// renderer's own placement arithmetic, estimates a box for every label, and
// reports the collisions, so an author can see what they drew without seeing
// it. Approximate on purpose: Georgia at 11px averages about half its size per
// character, which is close enough to catch a real overlap and loose enough
// not to cry wolf over a two-pixel graze.
import { readFileSync, readdirSync } from 'node:fs';

const W = 308;                       // the reader's figure width at scale 1
const CH = 0.5;                      // mean glyph width, as a fraction of size
const files = process.argv.slice(2).length
  ? process.argv.slice(2)
  : readdirSync('content/textbooks').filter((f) => f.endsWith('.ts')).map((f) => `content/textbooks/${f}`);

function chapterOf(src) {
  const i = src.indexOf('{', src.indexOf(': Chapter ='));
  let d = 0;
  for (let j = i; j < src.length; j++) {
    if (src[j] === '{') d++;
    else if (src[j] === '}' && !--d) return JSON.parse(src.slice(i, j + 1));
  }
  return null;
}

/** Rebuild the renderer's mapping for one frame. */
function geom(fr, kind) {
  const isLine = kind === 'numberline';
  const height = Math.round(W * (fr.aspect ?? (isLine ? 0.34 : 0.72)));
  const [x0, x1] = fr.x ?? (isLine ? [-5, 5] : [-Math.PI, Math.PI]);
  const [y0, y1] = fr.y ?? [-1.6, 1.6];
  const padL = fr.ticksY ? 26 : 10, padR = 10, padT = fr.axisY ? 15 : 8;
  const padB = isLine ? 20 : fr.piTicks ? 22 : fr.axisX ? 34 : fr.ticksX ? 21 : 8;
  const X = (n) => padL + ((n - x0) / (x1 - x0)) * (W - padL - padR);
  const Y = (n) => (isLine ? height / 2 : padT + (1 - (n - y0) / (y1 - y0)) * (height - padT - padB));
  return { X, Y, height };
}

const box = (cx, cy, text, size, anchor = 'middle') => {
  const w = text.length * size * CH, h = size;
  const x = anchor === 'start' ? cx : anchor === 'end' ? cx - w : cx - w / 2;
  return { x, y: cy - h * 0.78, w, h, text };
};
const hit = (a, b) =>
  a.x < b.x + b.w && b.x < a.x + a.w && a.y < b.y + b.h && b.y < a.y + a.h;

/** Shortest distance from a point to a segment, for label-on-line checks. */
function distToSeg(px, py, ax, ay, bx, by) {
  const dx = bx - ax, dy = by - ay;
  const L = dx * dx + dy * dy;
  const t = L ? Math.max(0, Math.min(1, ((px - ax) * dx + (py - ay) * dy) / L)) : 0;
  return Math.hypot(px - (ax + t * dx), py - (ay + t * dy));
}

let problems = 0;
for (const file of files) {
  const ch = chapterOf(readFileSync(file, 'utf8'));
  if (!ch) continue;
  const found = [];
  ch.topics?.forEach((t, ti) =>
    t.blocks?.forEach((b) => {
      if (b.t !== 'diagram' || !b.frames) return;
      if (!['plot', 'numberline'].includes(b.kind)) return;   // others own their space
      b.frames.forEach((fr, fi) => {
        const { X, Y } = geom(fr, b.kind);
        const labels = [], lines = [];

        for (const p of fr.points ?? [])
          if (p.label) {
            const a = p.at ?? 'ne';
            const dx = a === 'nw' || a === 'sw' ? -7 : 7;
            const dy = a === 'se' || a === 'sw' ? 14 : -6;
            labels.push(box(X(p.x) + dx, Y(p.y) + dy, p.label, 11, dx < 0 ? 'end' : 'start'));
          }
        for (const l of fr.labels ?? []) labels.push(box(X(l.x), Y(l.y), l.text, 11));
        for (const m of fr.marks ?? []) if (m.label) labels.push(box(X(m.x) + 9, Y(m.y) - 6, m.label, 11, 'start'));
        for (const bd of fr.bodies ?? []) if (bd.label) labels.push(box(X(bd.at[0]), Y(bd.at[1]) + 4, bd.label, 11));

        for (const sg of fr.segments ?? []) {
          const ax = X(sg.from[0]), ay = Y(sg.from[1]), bx = X(sg.to[0]), by = Y(sg.to[1]);
          lines.push([ax, ay, bx, by]);
          if (sg.label) {
            const L = Math.hypot(bx - ax, by - ay) || 1;
            labels.push(box((ax + bx) / 2 - ((by - ay) / L) * 12, (ay + by) / 2 + ((bx - ax) / L) * 12, sg.label, 10.5));
          }
        }
        for (const a of fr.arrows ?? []) {
          const ax = X(a.from[0]), ay = Y(a.from[1]), bx = X(a.to[0]), by = Y(a.to[1]);
          lines.push([ax, ay, bx, by]);
          if (a.label) {
            const L = Math.hypot(bx - ax, by - ay) || 1;
            const at = a.at ?? 'above';
            const off = at === 'below' ? 12 : -12;
            const k = at === 'start' ? 0.14 : at === 'end' ? 0.86 : 0.5;
            labels.push(box(ax + (bx - ax) * k - ((by - ay) / L) * off, ay + (by - ay) * k + ((bx - ax) / L) * off, a.label, 11));
          }
        }
        // Poly edges go in `lines` for the label-on-a-line test, but NOT in
        // `strokes`: a shaded region's boundary is SUPPOSED to trace the curve
        // it fills under, and flagging that is crying wolf on correct work.
        const strokes = [...lines];
        for (const pl of fr.polys ?? [])
          for (let i = 0; i < (pl.pts?.length ?? 0) - 1; i++)
            lines.push([X(pl.pts[i][0]), Y(pl.pts[i][1]), X(pl.pts[i + 1][0]), Y(pl.pts[i + 1][1])]);

        const at = `topic ${ti + 1} "${(b.kicker ?? '').slice(0, 26)}" frame ${fi + 1}`;
        for (let i = 0; i < labels.length; i++) {
          for (let j = i + 1; j < labels.length; j++)
            if (hit(labels[i], labels[j]))
              found.push(`${at}: labels overlap -- "${labels[i].text}" / "${labels[j].text}"`);
          // A label sitting ON a line it does not name reads as struck through.
          const c = { x: labels[i].x + labels[i].w / 2, y: labels[i].y + labels[i].h / 2 };
          for (const [ax, ay, bx, by] of lines)
            if (distToSeg(c.x, c.y, ax, ay, bx, by) < labels[i].h * 0.55) {
              found.push(`${at}: label "${labels[i].text}" lies on a drawn line`);
              break;
            }
        }
        // Two long strokes running almost together read as one thick line.
        for (let i = 0; i < strokes.length; i++)
          for (let j = i + 1; j < strokes.length; j++) {
            const [a1, b1, c1, d1] = strokes[i], [a2, b2, c2, d2] = strokes[j];
            const len = Math.min(Math.hypot(c1 - a1, d1 - b1), Math.hypot(c2 - a2, d2 - b2));
            if (len < 40) continue;
            const samples = Array.from({ length: 9 }, (_, k) => k / 8).map((t) => [
              a2 + (c2 - a2) * t,
              b2 + (d2 - b2) * t,
            ]);
            const close = samples.filter(([px, py]) => distToSeg(px, py, a1, b1, c1, d1) < 6).length;
            if (close >= 6)
              found.push(
                `${at}: two strokes overlap for ${Math.round((close / 9) * 100)}% of a run and read as one line`
              );
          }
      });
    })
  );
  if (found.length) {
    problems += found.length;
    console.log(`\n${file.split('/').pop()}`);
    for (const f of found) console.log('  ✗ ' + f);
  }
}
console.log(problems ? `\n${problems} figure legibility problem(s).` : '\nFigures: no overlaps found.');
process.exit(problems ? 1 : 0);
