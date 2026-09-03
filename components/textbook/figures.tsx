import Svg, { Circle, G, Line, Path, Rect, Text as SvgText } from 'react-native-svg';

import type { DiagramFrame } from '@/lib/textbooks';

/**
 * Three more parameterised figures, for chapters `plot` cannot serve.
 *
 * Which ones exist was decided by reading the source rather than guessing: the
 * Permutations chapter carries an explicit "figure placeholder: a left-to-right
 * tree diagram", Binomial names Pascal twenty-five times, and 3D Geometry says
 * "octant" fifty-four. A histogram kind was planned for Statistics and then
 * dropped, because that chapter is measures of dispersion and its only visual
 * language is "spread" and "number line", which the existing figures already
 * cover.
 */

const INK = '#1C1A16';
const AMBER = '#EEA31F';
const SOFT = '#B5B0A4';
const RULE = 'rgba(28,26,22,.18)';
const TINT = 'rgba(238,163,31,.14)';
const SERIF = 'Georgia';

/** How many first-level branches to draw before collapsing to a badge. */
const MAX_BRANCHES = 5;

export function CountingTree({ frame, width }: { frame: DiagramFrame; width: number }) {
  const t = frame.tree;
  if (!t?.levels?.length) return null;

  const l1 = t.levels[0];
  const l2 = t.levels[1];
  const shown = Math.min(l1.count, MAX_BRANCHES);
  const hidden = l1.count - shown;

  const rowH = 30;
  const height = Math.max(140, shown * rowH + (l2 ? 34 : 0) + 46);
  const xRoot = 22;
  const xL1 = Math.min(width * 0.30, 108);
  /**
   * A reserved column for the level-1 names, so the level-2 branches leave
   * from the right of the label rather than straight through it. Without it
   * the fan crossed "Aloo" and both became unreadable.
   */
  const LABEL_COL = 76;
  const xFan = xL1 + LABEL_COL;
  const xL2 = width - 26;
  const top = 34;
  const yOf = (i: number) => top + i * rowH + rowH / 2;
  const yRoot = (yOf(0) + yOf(shown - 1)) / 2;

  return (
    <Svg width={width} height={height}>
      <SvgText x={xRoot - 8} y={16} fontSize={10} fill={SOFT} fontFamily={SERIF}>
        {t.root ?? 'start'}
      </SvgText>
      <SvgText x={xL1 - 8} y={16} fontSize={10} fill={SOFT} fontFamily={SERIF}>
        {l1.label}
      </SvgText>
      {l2 ? (
        <SvgText x={xL2 - 8} y={16} fontSize={10} fill={SOFT} fontFamily={SERIF} textAnchor="end">
          {l2.label}
        </SvgText>
      ) : null}

      <Circle cx={xRoot} cy={yRoot} r={5} fill={INK} />

      {Array.from({ length: shown }, (_, i) => {
        const y = yOf(i);
        const first = i === 0;
        return (
          <G key={i}>
            <Path
              d={`M${xRoot + 5},${yRoot} C${(xRoot + xL1) / 2},${yRoot} ${(xRoot + xL1) / 2},${y} ${xL1 - 6},${y}`}
              fill="none"
              stroke={first ? AMBER : RULE}
              strokeWidth={first ? 1.9 : 1.2}
            />
            <Circle cx={xL1} cy={y} r={4.2} fill={first ? AMBER : INK} />
            {l1.names?.[i] ? (
              <SvgText x={xL1 + 9} y={y + 4} fontSize={10.5} fill={INK} fontFamily={SERIF}>
                {l1.names[i].length > 9 ? `${l1.names[i].slice(0, 8)}…` : l1.names[i]}
              </SvgText>
            ) : null}
            {/* Only the first branch is expanded; the rest carry the count
                they would have produced. Drawing all of them is 24 leaves. */}
            {l2 && !first ? (
              <SvgText x={xL2} y={y + 4} fontSize={10} fill={SOFT} fontFamily={SERIF} textAnchor="end">
                {`× ${l2.count}`}
              </SvgText>
            ) : null}
          </G>
        );
      })}

      {l2 &&
        Array.from({ length: Math.min(l2.count, 4) }, (_, j) => {
          const spread = 11;
          const y0 = yOf(0);
          const y = y0 + (j - (Math.min(l2.count, 4) - 1) / 2) * spread;
          return (
            <G key={`b${j}`}>
              <Path
                d={`M${xFan},${y0} C${(xFan + xL2) / 2},${y0} ${(xFan + xL2) / 2},${y} ${xL2 - 6},${y}`}
                fill="none"
                stroke={AMBER}
                strokeWidth={1.2}
              />
              <Circle cx={xL2 - 2} cy={y} r={3} fill={AMBER} />
            </G>
          );
        })}

      {hidden > 0 ? (
        <SvgText x={xL1} y={yOf(shown - 1) + 20} fontSize={10} fill={SOFT} fontFamily={SERIF} textAnchor="middle">
          {`+ ${hidden} more`}
        </SvgText>
      ) : null}

      {t.total ? (
        <SvgText x={width / 2} y={height - 8} fontSize={12} fill={INK} fontFamily={SERIF} textAnchor="middle">
          {t.total}
        </SvgText>
      ) : null}
    </Svg>
  );
}

function binomRow(n: number): number[] {
  const row = [1];
  for (let k = 0; k < n; k++) row.push((row[k] * (n - k)) / (k + 1));
  return row;
}

export function PascalTriangle({ frame, width }: { frame: DiagramFrame; width: number }) {
  const p = frame.pascal;
  if (!p?.rows) return null;
  const rows = Math.min(p.rows, 8);
  const cell = Math.min(width / (rows + 1), 40);
  const height = rows * (cell * 0.82) + 26;
  const hit = new Set((p.highlight ?? []).map(([r, k]) => `${r},${k}`));
  const par = new Set((p.parents ?? []).map(([r, k]) => `${r},${k}`));

  return (
    <Svg width={width} height={height}>
      {Array.from({ length: rows }, (_, r) => {
        const vals = binomRow(r);
        const y = 16 + r * cell * 0.82;
        return vals.map((v, k) => {
          const x = width / 2 + (k - r / 2) * cell;
          const key = `${r},${k}`;
          const isHit = hit.has(key);
          const isPar = par.has(key);
          return (
            <G key={key}>
              {(isHit || isPar) && (
                <Circle cx={x} cy={y} r={cell * 0.36} fill={isHit ? TINT : 'transparent'}
                  stroke={isHit ? AMBER : SOFT} strokeWidth={isHit ? 1.6 : 1.1}
                  strokeDasharray={isPar ? '3 3' : undefined} />
              )}
              <SvgText
                x={x}
                y={y + 4}
                fontSize={Math.min(12, cell * 0.42)}
                fill={isHit ? INK : isPar ? INK : SOFT}
                fontFamily={SERIF}
                textAnchor="middle">
                {String(v)}
              </SvgText>
            </G>
          );
        });
      })}
    </Svg>
  );
}

export function Axes3D({ frame, width }: { frame: DiagramFrame; width: number }) {
  const a = frame.axes3d ?? {};
  const height = Math.round(width * 0.78);
  const cx = width * 0.4;
  const u = Math.min(width, height) * 0.2;

  /*
   * The origin sits low enough that the z-axis and its label clear the top.
   *
   * `cy` used to be a flat 0.62 of the height, which put the z tip at y = -4.8
   * on a 308pt card: the axis was drawn past the top edge and the "z" label,
   * five pixels above that, was never visible at all. True of every axes3d
   * figure ever authored, Class 11's included.
   *
   * The tip labels are a fixed pixel size while `u` scales with the card, so a
   * narrow card cannot hold the full reach; there the axes shorten rather than
   * run off the canvas. On a phone-width card REACH survives intact.
   */
  const TIP = 14;
  const FOOT = 8;
  const REACH = 3.2;
  const reach = Math.min(REACH, (height - TIP - FOOT) / (u * 1.42));
  const cy = TIP + reach * u;

  // Isometric: x comes forward-left, y goes right, z goes up.
  const P = (x: number, y: number, z: number): [number, number] => [
    cx + (y - x * 0.62) * u,
    cy - (z - x * 0.42) * u,
  ];
  const pt = (p: [number, number]) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`;
  const [px, py, pz] = a.point ?? [1.6, 2.2, 1.8];
  const P0 = P(0, 0, 0);
  const Pp = P(px, py, pz);
  const Pxy = P(px, py, 0);

  const axis = (to: [number, number], label: string) => (
    <G>
      <Line x1={P0[0]} y1={P0[1]} x2={to[0]} y2={to[1]} stroke={INK} strokeWidth={1.5} />
      <SvgText x={to[0]} y={to[1] - 5} fontSize={11} fill={SOFT} fontFamily={SERIF} textAnchor="middle">
        {label}
      </SvgText>
    </G>
  );

  return (
    <Svg width={width} height={height}>
      {axis(P(reach, 0, 0), 'x')}
      {axis(P(0, reach, 0), 'y')}
      {axis(P(0, 0, reach), 'z')}

      {a.point && a.box && (
        <Path
          d={`M${pt(P0)} L${pt(P(px, 0, 0))} L${pt(Pxy)} L${pt(P(0, py, 0))} Z`}
          fill={TINT}
          stroke={SOFT}
          strokeWidth={1}
        />
      )}
      {a.point && a.projections !== false && (
        <G>
          <Line x1={Pxy[0]} y1={Pxy[1]} x2={Pp[0]} y2={Pp[1]} stroke={AMBER} strokeWidth={1.4} strokeDasharray="3 3" />
          <Line x1={P0[0]} y1={P0[1]} x2={Pxy[0]} y2={Pxy[1]} stroke={SOFT} strokeWidth={1.2} strokeDasharray="3 3" />
          <Circle cx={Pxy[0]} cy={Pxy[1]} r={3} fill={SOFT} />
        </G>
      )}

      {/* Planes first: they are the surface everything else sits on or
          crosses. Drawn as the triangle the plane cuts from the three axes,
          which is how x/a + y/b + z/c = 1 is introduced and avoids inventing an
          extent the plane does not have. An axis it runs parallel to has no
          intercept, so that corner falls back to a fixed reach. */}
      {a.planes?.map((pl, i) => {
        const [nx, ny, nz] = pl.normal;
        const k = pl.d ?? 2;
        const reach = 2.6;
        const A = P(nx ? k / nx : reach, 0, 0);
        const B = P(0, ny ? k / ny : reach, 0);
        const C = P(0, 0, nz ? k / nz : reach);
        return (
          <G key={`pl${i}`}>
            <Path
              d={`M${pt(A)} L${pt(B)} L${pt(C)} Z`}
              fill={pl.soft ? 'rgba(28,26,22,.06)' : TINT}
              stroke={pl.soft ? SOFT : AMBER}
              strokeWidth={1.3}
              strokeLinejoin="round"
            />
            {pl.label ? (
              <SvgText x={B[0] + 5} y={B[1] - 5} fontSize={10.5} fill={SOFT} fontFamily={SERIF}>
                {pl.label}
              </SvgText>
            ) : null}
          </G>
        );
      })}

      {/* Lines, drawn both ways from their point: a line has no ends. */}
      {a.lines?.map((ln, i) => {
        const [lx, ly, lz] = ln.through;
        const [dx, dy, dz] = ln.dir;
        const t = 2.4;
        const S1 = P(lx - dx * t, ly - dy * t, lz - dz * t);
        const S2 = P(lx + dx * t, ly + dy * t, lz + dz * t);
        return (
          <G key={`ln${i}`}>
            <Line
              x1={S1[0]}
              y1={S1[1]}
              x2={S2[0]}
              y2={S2[1]}
              stroke={ln.soft ? SOFT : INK}
              strokeWidth={ln.soft ? 1.4 : 1.9}
              strokeDasharray={ln.dash ? '5 4' : undefined}
              strokeLinecap="round"
            />
            {ln.label ? (
              <SvgText x={S2[0] + 5} y={S2[1] - 5} fontSize={10.5} fill={INK} fontFamily={SERIF}>
                {ln.label}
              </SvgText>
            ) : null}
          </G>
        );
      })}

      {/* Vectors: an arrow from the origin unless given a start. */}
      {a.vectors?.map((v, i) => {
        const F = P(...(v.from ?? ([0, 0, 0] as [number, number, number])));
        const T = P(...v.to);
        return (
          <G key={`v${i}`}>
            <Line
              x1={F[0]}
              y1={F[1]}
              x2={T[0]}
              y2={T[1]}
              stroke={v.soft ? SOFT : AMBER}
              strokeWidth={v.soft ? 1.5 : 2.2}
              strokeLinecap="round"
            />
            <Circle cx={T[0]} cy={T[1]} r={3.6} fill={v.soft ? SOFT : AMBER} />
            {v.label ? (
              <SvgText x={T[0] + 7} y={T[1] - 6} fontSize={10.5} fill={INK} fontFamily={SERIF}>
                {v.label}
              </SvgText>
            ) : null}
          </G>
        );
      })}

      {/* The point is optional now: a frame may be only lines and planes. */}
      {a.point && (
        <G>
          <Line x1={P0[0]} y1={P0[1]} x2={Pp[0]} y2={Pp[1]} stroke={AMBER} strokeWidth={2} />
          <Circle cx={Pp[0]} cy={Pp[1]} r={4.6} fill={INK} />
          <SvgText x={Pp[0] + 8} y={Pp[1] - 7} fontSize={11} fill={INK} fontFamily={SERIF}>
            {a.label ?? `(${px}, ${py}, ${pz})`}
          </SvgText>
        </G>
      )}
      <Rect x={P0[0] - 2.5} y={P0[1] - 2.5} width={5} height={5} fill={INK} />
      <SvgText x={P0[0] - 12} y={P0[1] + 13} fontSize={10} fill={SOFT} fontFamily={SERIF}>
        O
      </SvgText>
    </Svg>
  );
}

/* ------------------------------------------------------------------ */
/* Physics kinds                                                       */
/* ------------------------------------------------------------------ */

const PAPER = '#FFFFFF';
const GREEN = '#1C9B57';
const RED = '#DD4433';
const TONE_MAP: Record<string, string> = {
  ink: INK,
  amber: AMBER,
  soft: SOFT,
  green: GREEN,
  red: RED,
};
const tint = (t: string | undefined, fallback: string) => (t && TONE_MAP[t]) || fallback;

/** A label with the page knocked out behind it. Same trick as plot.tsx. */
function Halo({
  x,
  y,
  size,
  fill,
  anchor = 'middle',
  children,
}: {
  x: number;
  y: number;
  size: number;
  fill: string;
  anchor?: 'start' | 'middle' | 'end';
  children: string;
}) {
  const shared = { x, y, fontSize: size, fontFamily: SERIF, textAnchor: anchor };
  return (
    <G>
      <SvgText {...shared} fill="none" stroke={PAPER} strokeWidth={3.4} strokeLinejoin="round">
        {children}
      </SvgText>
      <SvgText {...shared} fill={fill}>
        {children}
      </SvgText>
    </G>
  );
}

function head(x1: number, y1: number, x2: number, y2: number, h = 6.5): string {
  const a = Math.atan2(y2 - y1, x2 - x1);
  return (
    `M ${x2 - h * Math.cos(a - 0.46)} ${y2 - h * Math.sin(a - 0.46)} ` +
    `L ${x2} ${y2} L ${x2 - h * Math.cos(a + 0.46)} ${y2 - h * Math.sin(a + 0.46)}`
  );
}

/**
 * Box-and-arrow schematics.
 *
 * Laid out on the author's own grid: they say which column and row a box sits
 * in and the renderer sizes and connects them. Links leave and enter at the
 * nearest edge, so an arrow never starts inside the box it comes from.
 */
export function FlowChart({ frame, width }: { frame: DiagramFrame; width: number }) {
  const f = frame.flow;
  const height = Math.round(width * (frame.aspect ?? 0.62));
  if (!f?.boxes?.length) return <Svg width={width} height={height} />;
  const cols = Math.max(...f.boxes.map((b) => b.col)) + 1;
  const rows = Math.max(...f.boxes.map((b) => b.row)) + 1;
  const cw = width / cols;
  const rh = height / rows;
  const bw = Math.min(cw * 0.82, 116);
  const LINE = 12;
  // Height per box, from its OWN line count. A fixed height meant a
  // three-line box spilled its text through the border, top and bottom.
  const boxH = (b: { text: string; shape?: string }) =>
    Math.max(26, b.text.split('\n').length * LINE + 12) * (b.shape === 'diamond' ? 1.5 : 1);
  const at = (b: { col: number; row: number }) => [
    (b.col + 0.5) * cw,
    (b.row + 0.5) * rh,
  ];
  const byId = new Map(f.boxes.map((b) => [b.id, b]));

  return (
    <Svg width={width} height={height}>
      {f.links?.map((l, i) => {
        const a = byId.get(l.from);
        const b = byId.get(l.to);
        if (!a || !b) return null;
        const [ax, ay] = at(a);
        const [bx, by] = at(b);
        const dx = bx - ax;
        const dy = by - ay;
        const len = Math.hypot(dx, dy) || 1;
        // Leave and enter at the box edge, not the centre.
        const pad =
          Math.abs(dx) > Math.abs(dy)
            ? (bw / 2) * (a.shape === 'diamond' ? 1.25 : 1) + 4
            : boxH(a) / 2 + 4;
        const sx = ax + (dx / len) * pad;
        const sy = ay + (dy / len) * pad;
        const ex = bx - (dx / len) * pad;
        const ey = by - (dy / len) * pad;
        const tone = tint(l.tone, SOFT);
        return (
          <G key={`fl${i}`}>
            <Line
              x1={sx}
              y1={sy}
              x2={ex}
              y2={ey}
              stroke={tone}
              strokeWidth={1.3}
              strokeDasharray={l.dash ? '5 4' : undefined}
            />
            <Path d={head(sx, sy, ex, ey)} fill="none" stroke={tone} strokeWidth={1.3} />
            {!!l.label && (
              <Halo x={(sx + ex) / 2} y={(sy + ey) / 2 - 6} size={9.5} fill={tone}>
                {l.label}
              </Halo>
            )}
          </G>
        );
      })}
      {f.boxes.map((b, i) => {
        const [cx, cy] = at(b);
        const tone = tint(b.tone, INK);
        // A diamond's usable width tapers to nothing at its points, so it
        // needs more room than a rectangle holding the same words.
        const half = [(bw / 2) * (b.shape === 'diamond' ? 1.25 : 1), boxH(b) / 2];
        const d =
          b.shape === 'diamond'
            ? `M ${cx} ${cy - half[1]} L ${cx + half[0]} ${cy} L ${cx} ${cy + half[1]} L ${cx - half[0]} ${cy} Z`
            : '';
        return (
          <G key={`fb${i}`}>
            {b.shape === 'diamond' ? (
              <Path d={d} fill={PAPER} stroke={tone} strokeWidth={1.4} />
            ) : (
              <Rect
                x={cx - half[0]}
                y={cy - half[1]}
                width={half[0] * 2}
                height={half[1] * 2}
                rx={b.shape === 'round' ? Math.min(half[1], 14) : 8}
                fill={PAPER}
                stroke={tone}
                strokeWidth={1.4}
              />
            )}
            {b.text.split('\n').map((line, k, all) => (
              <SvgText
                key={k}
                x={cx}
                y={cy + 4 - ((all.length - 1) * LINE) / 2 + k * LINE}
                fontSize={10}
                fill={INK}
                fontFamily={SERIF}
                textAnchor="middle">
                {line}
              </SvgText>
            ))}
          </G>
        );
      })}
    </Svg>
  );
}

/**
 * Energy levels, transitions, and bands.
 *
 * A band is a level with thickness, so the hydrogen ladder and the
 * conductor / semiconductor / insulator pictures are the same figure.
 */
export function EnergyLevels({ frame, width }: { frame: DiagramFrame; width: number }) {
  const L = frame.levels;
  const height = Math.round(width * (frame.aspect ?? 0.78));
  if (!L?.rows?.length) return <Svg width={width} height={height} />;
  const place = (n: number) => (L.scale === 'inverseSquare' ? -1 / (n * n) : n);
  const vals = [
    ...L.rows.map((r) => place(r.at)),
    ...(L.bands ?? []).flatMap((b) => [place(b.from), place(b.to)]),
  ];
  const lo = Math.min(...vals);
  const hi = Math.max(...vals);
  const span = hi - lo || 1;
  const padT = 16;
  const padB = 16;
  const x0 = 46;
  const x1 = width - 58;
  const Y = (n: number) => padT + (1 - (place(n) - lo) / span) * (height - padT - padB);

  return (
    <Svg width={width} height={height}>
      {L.bands?.map((b, i) => (
        <Rect
          key={`bd${i}`}
          x={x0}
          y={Math.min(Y(b.from), Y(b.to))}
          width={x1 - x0}
          height={Math.abs(Y(b.to) - Y(b.from))}
          fill={b.fill === 'hatch' ? 'none' : 'rgba(238,163,31,.18)'}
          stroke={RULE}
          strokeWidth={1}
        />
      ))}
      {L.jumps?.map((j, i) => {
        const tone = tint(j.tone, AMBER);
        const jx = x0 + (x1 - x0) * (0.28 + (i % 5) * 0.14);
        return (
          <G key={`jp${i}`}>
            <Line x1={jx} y1={Y(j.from)} x2={jx} y2={Y(j.to)} stroke={tone} strokeWidth={1.4} />
            <Path
              d={head(jx, Y(j.from), jx, Y(j.to))}
              fill="none"
              stroke={tone}
              strokeWidth={1.4}
            />
            {!!j.label && (
              <Halo x={jx + 12} y={(Y(j.from) + Y(j.to)) / 2} size={9.5} fill={tone} anchor="start">
                {j.label}
              </Halo>
            )}
          </G>
        );
      })}
      {L.rows.map((r, i) => (
        <G key={`rw${i}`}>
          <Line
            x1={x0}
            y1={Y(r.at)}
            x2={x1}
            y2={Y(r.at)}
            stroke={tint(r.tone, INK)}
            strokeWidth={1.4}
            strokeDasharray={r.dash ? '5 4' : undefined}
          />
          {!!r.label && (
            <Halo x={x0 - 6} y={Y(r.at) + 3.5} size={10} fill={INK} anchor="end">
              {r.label}
            </Halo>
          )}
          {!!r.right && (
            <Halo x={x1 + 5} y={Y(r.at) + 3.5} size={9.5} fill={SOFT} anchor="start">
              {r.right}
            </Halo>
          )}
        </G>
      ))}
    </Svg>
  );
}

/** Component glyphs, drawn along the segment between two grid nodes. */
function partGlyph(
  kind: string,
  x1: number,
  y1: number,
  x2: number,
  y2: number
): { d: string; extra?: 'circle' | 'lamp'; r?: number } {
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2;
  const dx = x2 - x1;
  const dy = y2 - y1;
  const len = Math.hypot(dx, dy) || 1;
  const ux = dx / len;
  const uy = dy / len;
  const px = -uy;
  const py = ux;
  const L = Math.min(len * 0.5, 26);
  const a = [mx - ux * (L / 2), my - uy * (L / 2)];
  const b = [mx + ux * (L / 2), my + uy * (L / 2)];
  const lead = `M ${x1} ${y1} L ${a[0]} ${a[1]} M ${b[0]} ${b[1]} L ${x2} ${y2}`;

  if (kind === 'R') {
    // A zig-zag: the international symbol is a box, but a phone at 316pt
    // reads the zig-zag faster and Indian boards print it.
    const n = 6;
    const amp = 4.5;
    let d = `${lead} M ${a[0]} ${a[1]}`;
    for (let k = 1; k <= n; k++) {
      const t = k / (n + 1);
      const sgn = k % 2 ? 1 : -1;
      d += ` L ${a[0] + ux * L * t + px * amp * sgn} ${a[1] + uy * L * t + py * amp * sgn}`;
    }
    return { d: `${d} L ${b[0]} ${b[1]}` };
  }
  if (kind === 'C') {
    const g = 3.2;
    const w = 7;
    return {
      d:
        `M ${x1} ${y1} L ${mx - ux * g} ${my - uy * g} M ${x2} ${y2} L ${mx + ux * g} ${my + uy * g} ` +
        `M ${mx - ux * g + px * w} ${my - uy * g + py * w} L ${mx - ux * g - px * w} ${my - uy * g - py * w} ` +
        `M ${mx + ux * g + px * w} ${my + uy * g + py * w} L ${mx + ux * g - px * w} ${my + uy * g - py * w}`,
    };
  }
  if (kind === 'cell' || kind === 'battery') {
    const g = 3;
    const lng = 8;
    const shrt = 4.5;
    let d =
      `M ${x1} ${y1} L ${mx - ux * g} ${my - uy * g} M ${x2} ${y2} L ${mx + ux * g} ${my + uy * g} ` +
      `M ${mx - ux * g + px * lng} ${my - uy * g + py * lng} L ${mx - ux * g - px * lng} ${my - uy * g - py * lng} ` +
      `M ${mx + ux * g + px * shrt} ${my + uy * g + py * shrt} L ${mx + ux * g - px * shrt} ${my + uy * g - py * shrt}`;
    if (kind === 'battery') {
      d +=
        ` M ${mx - ux * g * 3 + px * lng} ${my - uy * g * 3 + py * lng} L ${mx - ux * g * 3 - px * lng} ${my - uy * g * 3 - py * lng}` +
        ` M ${mx + ux * g * 3 + px * shrt} ${my + uy * g * 3 + py * shrt} L ${mx + ux * g * 3 - px * shrt} ${my + uy * g * 3 - py * shrt}`;
    }
    return { d };
  }
  if (kind === 'L') {
    const n = 4;
    let d = `${lead} M ${a[0]} ${a[1]}`;
    for (let k = 0; k < n; k++) {
      const t0 = k / n;
      const t1 = (k + 1) / n;
      d +=
        ` Q ${a[0] + ux * L * ((t0 + t1) / 2) + px * 7} ${a[1] + uy * L * ((t0 + t1) / 2) + py * 7},` +
        ` ${a[0] + ux * L * t1} ${a[1] + uy * L * t1}`;
    }
    return { d };
  }
  if (kind === 'switch') {
    return {
      d: `${lead} M ${a[0]} ${a[1]} L ${b[0] + px * 7} ${b[1] + py * 7}`,
    };
  }
  if (kind === 'diode') {
    const w = 6;
    return {
      d:
        `${lead} M ${a[0] + px * w} ${a[1] + py * w} L ${a[0] - px * w} ${a[1] - py * w} L ${b[0]} ${b[1]} Z ` +
        `M ${b[0] + px * w} ${b[1] + py * w} L ${b[0] - px * w} ${b[1] - py * w}`,
    };
  }
  // A, V, G, lamp: a circle on the run.
  return { d: lead, extra: kind === 'lamp' ? 'lamp' : 'circle', r: 9 };
}

/**
 * A circuit on an integer grid.
 *
 * The author gives node coordinates and what sits between them; nothing here
 * asks them to compute a pixel or route a wire. Wire runs are orthogonal
 * because the source's own briefs are ("series R along the top rail").
 */
export function CircuitDiagram({ frame, width }: { frame: DiagramFrame; width: number }) {
  const c = frame.circuit;
  const [gw, gh] = c?.grid ?? [6, 4];
  const height = Math.round(width * (frame.aspect ?? (gh / gw) * 0.9));
  if (!c) return <Svg width={width} height={height} />;
  const pad = 22;
  const X = (n: number) => pad + (n / gw) * (width - pad * 2);
  const Y = (n: number) => pad + (n / gh) * (height - pad * 2);

  return (
    <Svg width={width} height={height}>
      {/* Behind the circuit, so a dashed boundary never crosses a component. */}
      {c.regions?.map((r, i) => {
        const rx = Math.min(X(r.from[0]), X(r.to[0]));
        const ry = Math.min(Y(r.from[1]), Y(r.to[1]));
        const rw = Math.abs(X(r.to[0]) - X(r.from[0]));
        const rh = Math.abs(Y(r.to[1]) - Y(r.from[1]));
        const tone = tint(r.tone, SOFT);
        return (
          <G key={`rg${i}`}>
            <Path
              d={`M ${rx} ${ry} h ${rw} v ${rh} h ${-rw} Z`}
              fill="none"
              stroke={tone}
              strokeWidth={1.1}
              strokeDasharray="5,4"
            />
            {!!r.label && (
              <Halo x={rx + 4} y={ry - 5} size={9.5} fill={tone} anchor="start">
                {r.label}
              </Halo>
            )}
          </G>
        );
      })}
      {c.wires?.map((w, i) => (
        <Line
          key={`wr${i}`}
          x1={X(w.from[0])}
          y1={Y(w.from[1])}
          x2={X(w.to[0])}
          y2={Y(w.to[1])}
          stroke={INK}
          strokeWidth={1.4}
        />
      ))}
      {c.parts?.map((p, i) => {
        const x1 = X(p.at[0]);
        const y1 = Y(p.at[1]);
        const x2 = X(p.to[0]);
        const y2 = Y(p.to[1]);
        const g = partGlyph(p.kind, x1, y1, x2, y2);
        const tone = tint(p.tone, INK);
        const mx = (x1 + x2) / 2;
        const my = (y1 + y2) / 2;
        const horizontal = Math.abs(x2 - x1) > Math.abs(y2 - y1);
        return (
          <G key={`pt${i}`}>
            <Path d={g.d} fill="none" stroke={tone} strokeWidth={1.4} />
            {g.extra && (
              <>
                <Circle cx={mx} cy={my} r={g.r} fill={PAPER} stroke={tone} strokeWidth={1.4} />
                {g.extra === 'circle' && (
                  <SvgText
                    x={mx}
                    y={my + 4}
                    fontSize={10}
                    fill={tone}
                    fontFamily={SERIF}
                    textAnchor="middle">
                    {p.kind}
                  </SvgText>
                )}
                {g.extra === 'lamp' && (
                  <Path
                    d={`M ${mx - 6} ${my - 6} L ${mx + 6} ${my + 6} M ${mx + 6} ${my - 6} L ${mx - 6} ${my + 6}`}
                    stroke={tone}
                    strokeWidth={1.2}
                  />
                )}
              </>
            )}
            {!!p.label &&
              (() => {
                // Default: above a horizontal part, right of a vertical one.
                // Four parallel branches put four labels in a row and the
                // right-hand one walked off the canvas, so a part can now
                // choose its side.
                const side = p.side ?? (horizontal ? 'above' : 'right');
                const lx = side === 'right' ? mx + 14 : side === 'left' ? mx - 14 : mx;
                const ly =
                  side === 'above' ? my - 14 : side === 'below' ? my + 16 : my + 3.5;
                return (
                  <Halo
                    x={lx}
                    y={ly}
                    size={10}
                    fill={tone}
                    anchor={side === 'right' ? 'start' : side === 'left' ? 'end' : 'middle'}>
                    {p.label}
                  </Halo>
                );
              })()}
          </G>
        );
      })}
      {c.currents?.map((cu, i) => {
        const x1 = X(cu.at[0]);
        const y1 = Y(cu.at[1]);
        const x2 = X(cu.to[0]);
        const y2 = Y(cu.to[1]);
        return (
          <G key={`cu${i}`}>
            <Path d={head(x1, y1, x2, y2, 6)} fill="none" stroke={AMBER} strokeWidth={1.6} />
            {!!cu.label && (
              <Halo x={x2 + 10} y={y2 - 7} size={10} fill={AMBER} anchor="start">
                {cu.label}
              </Halo>
            )}
          </G>
        );
      })}
      {c.nodes?.map((n, i) => (
        <G key={`nd${i}`}>
          {n.junction && <Circle cx={X(n.at[0])} cy={Y(n.at[1])} r={3} fill={INK} />}
          {!!n.label && (
            <Halo x={X(n.at[0]) - 8} y={Y(n.at[1]) - 8} size={10} fill={INK} anchor="end">
              {n.label}
            </Halo>
          )}
        </G>
      ))}
      {/* Frame-level marks, in GRID units. Plate charge signs live here: the
          tone rules say a sign must be carried by shape rather than colour,
          and a part label cannot hold one. */}
      {frame.marks?.map((m, i) => {
        const cx = X(m.x);
        const cy = Y(m.y);
        const tone = tint(m.tone, INK);
        const r = 5;
        return (
          <G key={`cm${i}`}>
            {m.glyph === 'plus' && (
              <Path
                d={`M ${cx - r} ${cy} h ${r * 2} M ${cx} ${cy - r} v ${r * 2}`}
                stroke={tone}
                strokeWidth={1.5}
              />
            )}
            {m.glyph === 'minus' && (
              <Path d={`M ${cx - r} ${cy} h ${r * 2}`} stroke={tone} strokeWidth={1.5} />
            )}
            {m.glyph === 'dot' && <Circle cx={cx} cy={cy} r={3} fill={tone} />}
            {m.glyph === 'open' && (
              <Circle cx={cx} cy={cy} r={3.4} fill={PAPER} stroke={tone} strokeWidth={1.4} />
            )}
            {m.glyph === 'cross' && (
              <Path
                d={`M ${cx - r} ${cy - r} l ${r * 2} ${r * 2} M ${cx + r} ${cy - r} l ${-r * 2} ${r * 2}`}
                stroke={tone}
                strokeWidth={1.4}
              />
            )}
            {m.glyph === 'into' && (
              <G>
                <Circle cx={cx} cy={cy} r={r} fill="none" stroke={tone} strokeWidth={1.3} />
                <Path
                  d={`M ${cx - 3.4} ${cy - 3.4} l 6.8 6.8 M ${cx + 3.4} ${cy - 3.4} l -6.8 6.8`}
                  stroke={tone}
                  strokeWidth={1.3}
                />
              </G>
            )}
            {m.glyph === 'outof' && (
              <G>
                <Circle cx={cx} cy={cy} r={r} fill="none" stroke={tone} strokeWidth={1.3} />
                <Circle cx={cx} cy={cy} r={1.7} fill={tone} />
              </G>
            )}
            {!!m.label && (
              <Halo x={cx + 8} y={cy - 6} size={10} fill={tone} anchor="start">
                {m.label}
              </Halo>
            )}
          </G>
        );
      })}
      {/* Frame-level free text, in GRID units. A meter bridge needs "l" and
          "100 - l" written under two spans, which no part or node owns. */}
      {frame.labels?.map((l, i) => (
        <Halo key={`cl${i}`} x={X(l.x)} y={Y(l.y)} size={10} fill={INK} anchor="middle">
          {l.text}
        </Halo>
      ))}
    </Svg>
  );
}

/**
 * A ray diagram, with the image position solved rather than authored.
 *
 * Cartesian convention throughout: distances from the pole or optical centre,
 * against the incident light negative. A real object is u < 0. The mirror
 * formula is 1/v + 1/u = 1/f, the lens formula 1/v − 1/u = 1/f, and the two
 * differ by exactly that sign, which is where most wrong answers come from.
 */
export function RayDiagram({ frame, width }: { frame: DiagramFrame; width: number }) {
  const o = frame.optics;
  const height = Math.round(width * (frame.aspect ?? 0.62));
  if (!o) return <Svg width={width} height={height} />;
  const mirror = o.element === 'concaveMirror' || o.element === 'convexMirror';
  const f = o.f;
  const u = o.object?.u ?? -3 * Math.abs(f);
  const ho = o.object?.h ?? 1;

  // Solve for the image. A mirror adds; a lens subtracts.
  let v: number | null = null;
  const denom = mirror ? 1 / f - 1 / u : 1 / f + 1 / u;
  if (Math.abs(denom) > 1e-9) v = 1 / denom;
  const m = v == null ? 0 : mirror ? -v / u : v / u;
  const hi = m * ho;

  const span = Math.max(Math.abs(u), Math.abs(v ?? 0), Math.abs(2 * f)) * 1.25;
  const cx = width / 2;
  const cy = height * 0.56;
  const sx = (width / 2 - 16) / span;
  const sy = Math.min(sx, (height * 0.34) / Math.max(Math.abs(ho), Math.abs(hi), 1));
  const X = (n: number) => cx + n * sx;
  const Y = (n: number) => cy - n * sy;

  const rays = o.rays ?? true;
  const marks = o.marks ?? true;
  const top = [X(u), Y(ho)];

  return (
    <Svg width={width} height={height}>
      {/* Principal axis */}
      <Line x1={8} y1={cy} x2={width - 8} y2={cy} stroke={RULE} strokeWidth={1} />

      {/* The element */}
      {mirror ? (
        <Path
          d={`M ${X(0)} ${cy - 34} Q ${X(0) + (o.element === 'concaveMirror' ? -14 : 14)} ${cy}, ${X(0)} ${cy + 34}`}
          fill="none"
          stroke={INK}
          strokeWidth={1.8}
        />
      ) : (
        <Path
          d={
            o.element === 'convexLens'
              ? `M ${X(0)} ${cy - 34} Q ${X(0) + 11} ${cy}, ${X(0)} ${cy + 34} Q ${X(0) - 11} ${cy}, ${X(0)} ${cy - 34} Z`
              : `M ${X(0) - 7} ${cy - 34} Q ${X(0) + 5} ${cy}, ${X(0) - 7} ${cy + 34} L ${X(0) + 7} ${cy + 34} Q ${X(0) - 5} ${cy}, ${X(0) + 7} ${cy - 34} Z`
          }
          fill="rgba(238,163,31,.14)"
          stroke={INK}
          strokeWidth={1.5}
        />
      )}

      {marks && (
        <G>
          {[f, -f, 2 * f, -2 * f].map((n, i) => (
            <G key={`fm${i}`}>
              <Line x1={X(n)} y1={cy - 4} x2={X(n)} y2={cy + 4} stroke={SOFT} strokeWidth={1.2} />
              <Halo x={X(n)} y={cy + 16} size={9.5} fill={SOFT}>
                {Math.abs(n) > Math.abs(f) * 1.5 ? '2F' : 'F'}
              </Halo>
            </G>
          ))}
        </G>
      )}

      {/* Object */}
      <G>
        <Line x1={X(u)} y1={cy} x2={top[0]} y2={top[1]} stroke={INK} strokeWidth={1.6} />
        <Path d={head(X(u), cy, top[0], top[1], 6)} fill="none" stroke={INK} strokeWidth={1.6} />
      </G>

      {/* Image: dashed when virtual (same side as the object for a lens). */}
      {v != null && (
        <G>
          <Line
            x1={X(v)}
            y1={cy}
            x2={X(v)}
            y2={Y(hi)}
            stroke={GREEN}
            strokeWidth={1.6}
            strokeDasharray={(mirror ? v > 0 : v < 0) ? '5 4' : undefined}
          />
          <Path d={head(X(v), cy, X(v), Y(hi), 6)} fill="none" stroke={GREEN} strokeWidth={1.6} />
        </G>
      )}

      {/* The two standard construction rays. */}
      {rays && v != null && (
        <G>
          {/* Parallel in, through F out. */}
          <Line x1={top[0]} y1={top[1]} x2={X(0)} y2={top[1]} stroke={AMBER} strokeWidth={1.2} />
          <Line x1={X(0)} y1={top[1]} x2={X(v)} y2={Y(hi)} stroke={AMBER} strokeWidth={1.2} />
          {/* Through the centre or pole, undeviated. */}
          <Line x1={top[0]} y1={top[1]} x2={X(v)} y2={Y(hi)} stroke={AMBER} strokeWidth={1.2} />
        </G>
      )}
    </Svg>
  );
}
