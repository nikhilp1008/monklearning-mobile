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
