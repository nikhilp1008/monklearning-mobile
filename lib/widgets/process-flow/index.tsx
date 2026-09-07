import React, { useMemo } from 'react';
import Svg, { G, Path, Rect, Text as SvgText } from 'react-native-svg';
import Animated, { useAnimatedProps } from 'react-native-reanimated';

import {
  EMPHASIS_STROKE, LABEL_SIZE, LINE_STROKE, PAD_SIDE,
  READOUT_BAND, READOUT_SIZE, dirArrowHead, fitReadout,
} from '../chrome';
import type { ValidationResult, WidgetModule, WidgetRenderProps } from '../types';
import {
  MAX_CAPTION_CHARS, MAX_NODES_CHAIN, MAX_NODES_RING, MIN_NODES, NODE_H,
  capLabels, chainGrid, chainNodeCentre, derive,
  maxChainLabelChars, maxRingLabelChars, nodeWidth, ringAngle, ringGeometry,
  ringNodeCentre,
  type ChainGrid, type FlowLayout, type ProcessFlowParams, type RingGeometry,
} from './flow-math';

const AnimatedRect = Animated.createAnimatedComponent(Rect);

/**
 * Chrome constants — device points, NEVER a function of width/height.
 * docs/small-screen-rendering-rules.md. The layout maths that DOES scale with
 * the board lives in flow-math.ts and takes the measured box as an argument.
 */
const NODE_LABEL_SIZE = LABEL_SIZE;
const NODE_STROKE = LINE_STROKE;
const EDGE_STROKE = EMPHASIS_STROKE;
const NODE_RADIUS = 4;
/** How far a connector stops short of the box it points at. */
const EDGE_INSET = 2;
/** Longest a ring's branch spur may reach into the empty middle of the ring. */
const RING_SPUR = 20;
/** How many segments the ring backbone is drawn with. */
const RING_SAMPLES = 144;

const LAYOUTS: FlowLayout[] = ['ring', 'chain'];

/* ------------------------------------------------------------------ validate */

const isStr = (v: unknown): v is string => typeof v === 'string';
const isInt = (v: unknown): v is number => typeof v === 'number' && Number.isInteger(v);

/**
 * The schema's legal range is a SUBSET of what renders correctly, and the
 * narrowing lives here rather than in the checker: node counts are capped at
 * what the pointy-top ring and the two-column serpentine can hold at 343x236,
 * and every label is truncated to the per-n budget `flow-math.ts` derives at
 * that same board. A payload this function returns cannot collide on any board
 * this app renders into.
 */
function validate(raw: unknown): ValidationResult<ProcessFlowParams> {
  const errors: string[] = [];
  if (typeof raw !== 'object' || raw === null || Array.isArray(raw)) {
    return { ok: false, errors: ['params must be an object'] };
  }
  const r = raw as Record<string, unknown>;

  const layout = r.layout;
  if (!isStr(layout) || !(LAYOUTS as string[]).includes(layout)) {
    errors.push(`layout must be one of ${LAYOUTS.join(', ')}`);
  }
  const isRing = layout === 'ring';
  const maxNodes = isRing ? MAX_NODES_RING : MAX_NODES_CHAIN;

  const nodes = r.nodes;
  if (!Array.isArray(nodes) || nodes.some((x) => !isStr(x) || x.trim().length === 0)) {
    errors.push('nodes must be an array of non-empty strings');
  } else if (nodes.length < MIN_NODES || nodes.length > maxNodes) {
    errors.push(
      `a ${isRing ? 'ring' : 'chain'} needs ${MIN_NODES} to ${maxNodes} nodes, got ${nodes.length}`
    );
  }
  if (r.closes !== undefined && typeof r.closes !== 'boolean') {
    errors.push('closes must be a boolean');
  }
  if (r.caption !== undefined && !isStr(r.caption)) {
    errors.push('caption must be a string');
  }
  if (errors.length > 0) return { ok: false, errors };

  const list = nodes as string[];
  const n = list.length;

  const branch = r.branch_at ?? -1;
  if (!(isInt(branch) && (branch === -1 || (branch >= 0 && branch < n)))) {
    errors.push(`branch_at must be -1 or an integer in 0..${n - 1}`);
  }
  const active = r.active_node ?? -1;
  if (!(isInt(active) && (active === -1 || (active >= 0 && active < n)))) {
    errors.push(`active_node must be -1 or an integer in 0..${n - 1}`);
  }
  if (errors.length > 0) return { ok: false, errors };

  // Truncated, not rejected — the cap is a rendering budget, and a lesson that
  // wrote a 20-character intermediate should still get a legible board. The
  // budget is documented per node count in flow-math.ts so content can be
  // written to it rather than discovering it here.
  const cap = isRing ? maxRingLabelChars(n) : maxChainLabelChars();

  return {
    ok: true,
    params: {
      layout: layout as FlowLayout,
      nodes: list.map((s) => s.trim().slice(0, cap)),
      // A ring is closed by definition. Accepting `closes: false` on a ring
      // would admit a payload whose picture and derived value disagree.
      closes: isRing ? true : r.closes === true,
      branch_at: branch as number,
      active_node: active as number,
      caption: isStr(r.caption) ? r.caption.slice(0, MAX_CAPTION_CHARS) : '',
    },
  };
}

/* ----------------------------------------------------------------- component */

interface PlacedNode {
  x: number;
  y: number;
  w: number;
  label: string;
}

/** Straight polyline round the ellipse. M/L only, NEVER an `A` arc:
 *  verify-render's pathBounds pairs the numbers in `d` positionally, so an
 *  arc's `rx ry rot laf sf` would be read as coordinates and reported as
 *  bounds that do not exist. */
function ringBackbone(g: RingGeometry): string {
  let d = '';
  for (let i = 0; i <= RING_SAMPLES; i++) {
    const t = (i / RING_SAMPLES) * Math.PI * 2;
    const x = g.cx + g.rx * Math.cos(t);
    const y = g.cy + g.ry * Math.sin(t);
    d += (i === 0 ? 'M' : 'L') + x.toFixed(2) + ' ' + y.toFixed(2);
  }
  return d + 'Z';
}

/** A straight connector from box `a` to box `b`, stopping at b's edge. The two
 *  are always axis-aligned — same row or same column — because the serpentine
 *  order puts consecutive nodes in adjacent cells. */
function chainEdge(a: PlacedNode, b: PlacedNode): { line: string; tipX: number; tipY: number; angle: number } {
  if (Math.abs(b.y - a.y) < 0.5) {
    const dir = b.x > a.x ? 1 : -1;
    const x0 = a.x + dir * (a.w / 2 + EDGE_INSET);
    const x1 = b.x - dir * (b.w / 2 + EDGE_INSET);
    return {
      line: `M${x0.toFixed(2)} ${a.y.toFixed(2)}L${x1.toFixed(2)} ${b.y.toFixed(2)}`,
      tipX: x1, tipY: b.y, angle: dir > 0 ? 0 : Math.PI,
    };
  }
  const dir = b.y > a.y ? 1 : -1;
  const y0 = a.y + dir * (NODE_H / 2 + EDGE_INSET);
  const y1 = b.y - dir * (NODE_H / 2 + EDGE_INSET);
  return {
    line: `M${a.x.toFixed(2)} ${y0.toFixed(2)}L${b.x.toFixed(2)} ${y1.toFixed(2)}`,
    tipX: b.x, tipY: y1, angle: dir > 0 ? Math.PI / 2 : -Math.PI / 2,
  };
}

function ProcessFlow({ params, motion, width, height, theme }: WidgetRenderProps<ProcessFlowParams>) {
  const activeSv = motion.active_node;

  /**
   * Static scaffolding: every node position, every edge, the readout. Computed
   * from `params` and the measured box ONLY, and specifically not from
   * `active_node` — the pathway must hold still while the highlight walks it,
   * or the student cannot see where it came from. Same rule as
   * projectile_motion's pxPerM ignoring angle (CLAUDE.md §3).
   */
  const frame = useMemo(() => {
    const labels = capLabels(params);
    const n = labels.length;
    const maxLen = labels.reduce((m, s) => Math.max(m, s.length), 1);
    const isRing = params.layout === 'ring';

    const ring: RingGeometry = ringGeometry(width, height, maxLen);
    const grid: ChainGrid = chainGrid(width, height, n, maxLen, params.closes);

    const placed: PlacedNode[] = labels.map((label, i) => {
      const c = isRing ? ringNodeCentre(ring, n, i) : chainNodeCentre(grid, i);
      return { x: c.x, y: c.y, w: nodeWidth(label.length), label };
    });

    /* Edges. Ring: one backbone polyline plus a direction arrowhead at each
       midpoint angle. Chain: one straight connector per consecutive pair. */
    const paths: string[] = [];
    const heads: string[] = [];
    if (isRing) {
      paths.push(ringBackbone(ring));
      for (let i = 0; i < n; i++) {
        const t = ringAngle(n, i) + Math.PI / n; // midpoint of edge i -> i+1
        const x = ring.cx + ring.rx * Math.cos(t);
        const y = ring.cy + ring.ry * Math.sin(t);
        // Tangent of an ellipse, in the direction of increasing angle.
        heads.push(dirArrowHead(x, y, Math.atan2(ring.ry * Math.cos(t), -ring.rx * Math.sin(t))));
      }
    } else {
      for (let i = 0; i + 1 < n; i++) {
        const e = chainEdge(placed[i], placed[i + 1]);
        paths.push(e.line);
        heads.push(dirArrowHead(e.tipX, e.tipY, e.angle));
      }
      if (params.closes && n >= 2) {
        /* The return edge runs in its own lane, BELOW the grid and then LEFT
           of it, so it never crosses a node box on its way back to node 0.
           chainGrid reserves RETURN_LANE for exactly this when `closes`. */
        const last = placed[n - 1];
        const first = placed[0];
        const tipX = first.x - first.w / 2 - EDGE_INSET;
        paths.push(
          `M${last.x.toFixed(2)} ${(last.y + NODE_H / 2 + EDGE_INSET).toFixed(2)}` +
            `L${last.x.toFixed(2)} ${grid.laneY.toFixed(2)}` +
            `L${grid.laneX.toFixed(2)} ${grid.laneY.toFixed(2)}` +
            `L${grid.laneX.toFixed(2)} ${first.y.toFixed(2)}` +
            `L${tipX.toFixed(2)} ${first.y.toFixed(2)}`
        );
        heads.push(dirArrowHead(tipX, first.y, 0));
      }
    }

    /* The branch spur. No label rides on it — the branch's identity is in the
       readout, and a free-floating label next to a node box is the one thing
       that would put this widget within reach of verify-render's overlap
       assertion at 343x236. What the spur has to show is out-degree 2, and an
       arrow leaving a node shows that on its own.

       On a ring it points INWARD. Outward would need ~20pt of board past the
       widest node box, and at 343x236 the ring already reaches PAD_SIDE
       exactly; the middle of a ring is empty by construction. */
    let branchPath = '';
    let branchHead = '';
    const bi = params.branch_at;
    if (bi >= 0 && bi < n) {
      const node = placed[bi];
      if (isRing) {
        const dx = ring.cx - node.x;
        const dy = ring.cy - node.y;
        const len = Math.hypot(dx, dy) || 1;
        const ux = dx / len;
        const uy = dy / len;
        const exit = Math.min(
          Math.abs(ux) > 1e-6 ? node.w / 2 / Math.abs(ux) : Infinity,
          Math.abs(uy) > 1e-6 ? NODE_H / 2 / Math.abs(uy) : Infinity
        );
        const spur = Math.min(RING_SPUR, 0.35 * Math.min(ring.rx, ring.ry));
        const sx = node.x + ux * (exit + EDGE_INSET);
        const sy = node.y + uy * (exit + EDGE_INSET);
        const tx = sx + ux * spur;
        const ty = sy + uy * spur;
        branchPath = `M${sx.toFixed(2)} ${sy.toFixed(2)}L${tx.toFixed(2)} ${ty.toFixed(2)}`;
        branchHead = dirArrowHead(tx, ty, Math.atan2(uy, ux));
      } else {
        const spur = Math.max(6, Math.min(12, grid.rowPitch - NODE_H - 8));
        const sy = node.y + NODE_H / 2 + EDGE_INSET;
        const ty = sy + spur;
        branchPath = `M${node.x.toFixed(2)} ${sy.toFixed(2)}L${node.x.toFixed(2)} ${ty.toFixed(2)}`;
        branchHead = dirArrowHead(node.x, ty, Math.PI / 2);
      }
    }

    return { labels, n, isRing, ring, grid, placed, paths, heads, branchPath, branchHead };
  }, [width, height, params]);

  const d = useMemo(() => derive(params), [params]);

  /**
   * The readout, fitted to the measured width. READOUT_SIZE is chrome and does
   * not scale; how many characters FIT is legitimately a function of the box,
   * which is what `fitReadout` is for. The structural numbers are never
   * dropped; the caption gives up its characters first.
   */
  const readout = useMemo(() => {
    const value =
      `${d.stepCount} steps · ${d.closes === 1 ? 'closed loop' : 'open'}` +
      (d.branchAt >= 0 ? ' · 1 branch' : '');
    return fitReadout(params.caption, value, width - 2 * PAD_SIDE);
  }, [params.caption, d, width]);

  /**
   * The ONE element permitted to move, and it always renders.
   *
   * `motionFor` in test-utils defaults an unsupplied key to 0, and 0 is a valid
   * node index — so -1 is the "no highlight" sentinel and the Rect is parked by
   * opacity at node 0 rather than unmounted or moved to the origin. Rendering
   * it conditionally would change the element count between two motion values,
   * which scaffoldingDiffs reports as a params/motion violation; parking it at
   * (0,0) would silently enlarge the ink-coverage box verify-render measures.
   *
   * Rect is deliberately not in SCAFFOLDING_TYPES. Every Text in this widget
   * is, so no label may move — which is exactly why the highlight is a plate
   * and not a re-drawn label.
   */
  const { xs, ys, ws, n, isRing } = useMemo(() => ({
    xs: frame.placed.map((p) => p.x),
    ys: frame.placed.map((p) => p.y),
    ws: frame.placed.map((p) => p.w),
    n: frame.n,
    isRing: frame.isRing,
  }), [frame]);
  const { cx, cy, rx, ry } = frame.ring;

  const highlightProps = useAnimatedProps(() => {
    const raw = activeSv.value;
    const visible = raw >= 0;
    let x: number;
    let y: number;
    let w: number;
    if (isRing) {
      // [0, n] rather than [0, n-1]: the last edge wraps back to node 0, and a
      // cycle whose highlight cannot travel that edge is not showing a cycle.
      const t = Math.min(n, Math.max(0, raw));
      const i0 = Math.floor(t) % n;
      const i1 = (i0 + 1) % n;
      const f = t - Math.floor(t);
      const a = (-90 + (t * 360) / n) * (Math.PI / 180);
      x = cx + rx * Math.cos(a);
      y = cy + ry * Math.sin(a);
      w = ws[i0] + (ws[i1] - ws[i0]) * f;
    } else {
      const t = Math.min(n - 1, Math.max(0, raw));
      const i0 = Math.floor(t);
      const i1 = Math.min(n - 1, i0 + 1);
      const f = t - i0;
      x = xs[i0] + (xs[i1] - xs[i0]) * f;
      y = ys[i0] + (ys[i1] - ys[i0]) * f;
      w = ws[i0] + (ws[i1] - ws[i0]) * f;
    }
    return {
      x: x - w / 2,
      y: y - NODE_H / 2,
      width: Math.max(1, w),
      fillOpacity: visible ? 0.22 : 0,
    };
  });

  return (
    <Svg width={width} height={height}>
      {/* Edges first, so the node plates cover where they run underneath. */}
      <G>
        {frame.paths.map((p, i) => (
          <Path
            key={`e${i}`}
            d={p}
            fill="none"
            stroke={theme.rule}
            strokeWidth={EDGE_STROKE}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        ))}
        {frame.heads.map((p, i) => (
          <Path key={`h${i}`} d={p} fill={theme.inkMuted} />
        ))}
      </G>

      {/* The branch — the only place out-degree exceeds one. */}
      {frame.branchPath !== '' && (
        <G>
          <Path
            d={frame.branchPath}
            fill="none"
            stroke={theme.accent}
            strokeWidth={EDGE_STROKE}
            strokeLinecap="round"
          />
          <Path d={frame.branchHead} fill={theme.accent} />
        </G>
      )}

      {/* Node plates. These are Rects and that is NOT decoration: boundsOf in
          verify-render understands Path/Circle/Line/Rect and nothing else, so
          a pathway drawn as bare labels contributes zero ink coverage however
          well it reads on a screen. */}
      {frame.placed.map((p, i) => (
        <Rect
          key={`n${i}`}
          x={p.x - p.w / 2}
          y={p.y - NODE_H / 2}
          width={p.w}
          height={NODE_H}
          rx={NODE_RADIUS}
          fill={theme.surface}
          stroke={theme.ink}
          strokeWidth={NODE_STROKE}
        />
      ))}

      {/* The walking highlight, over the plates and under the type. */}
      <AnimatedRect
        animatedProps={highlightProps}
        height={NODE_H}
        rx={NODE_RADIUS}
        fill={theme.accent}
      />

      {frame.placed.map((p, i) => (
        <SvgText
          key={`t${i}`}
          x={p.x}
          y={p.y + NODE_LABEL_SIZE * 0.35}
          fill={theme.ink}
          fontSize={NODE_LABEL_SIZE}
          fontFamily={theme.monoFontFamily}
          textAnchor="middle"
        >
          {p.label}
        </SvgText>
      ))}

      <SvgText
        x={PAD_SIDE}
        y={READOUT_BAND - READOUT_SIZE * 0.5}
        fill={theme.ink}
        fontSize={READOUT_SIZE}
        fontFamily={theme.monoFontFamily}
      >
        {readout}
      </SvgText>
    </Svg>
  );
}

/* -------------------------------------------------------------------- module */

export const processFlow: WidgetModule<ProcessFlowParams> = {
  id: 'process_flow',
  version: 1,
  // NCERT Cl.11 Bio Ch.14's citric acid cycle, so the default payload
  // exercises the closed-ring path at the widest node count the ring allows.
  defaults: {
    layout: 'ring',
    nodes: [
      'Citrate', 'Isocitrate', 'a-Ketoglutarate', 'Succinyl-CoA',
      'Succinate', 'Fumarate', 'Malate', 'Oxaloacetate',
    ],
    closes: true,
    branch_at: -1,
    active_node: -1,
    caption: 'Citric acid cycle',
  },
  /**
   * Exactly one, and it is LEGAL — checked against CLAUDE.md §3's snap-only
   * rule rather than assumed.
   *
   * The rule bars a param whose moving geometry is LABEL-TERMINATED: a bond
   * that swings while its atom label stays put draws a wrong molecule, and
   * SCAFFOLDING_TYPES includes Text/TSpan precisely so scaffoldingDiffs
   * catches it. `active_node` is not that. What moves is a translucent plate;
   * nothing is attached to it, and every label stays exactly where its own
   * node box is. At a fractional value the plate sits ON the connector between
   * two nodes, which is not a mislabelled node — it is the state that
   * connector means. A cycle whose marker walks the ring is showing the one
   * thing a cycle diagram exists to show.
   *
   * Same shape as data_table_trend's `highlight_row`, which moves one Rect's y
   * and shipped under this contract.
   *
   * Every OTHER numeric here changes the element count — node count, branch
   * index, whether the chain closes all add or remove a Path — which is a snap
   * wearing an animation's clothes, and is why the list stops at one.
   */
  animatable: ['active_node'],
  derived: ['nodeCount', 'stepCount', 'closes', 'branchAt', 'outDegreeMax', 'activeIndex'],
  computeDerived: derive,
  derivedAliases: {
    nodeCount: ['nodes', 'stages', 'intermediates', 'how many steps'],
    stepCount: ['steps', 'reactions', 'the pathway', 'longer', 'shorter'],
    closes: ['closes', 'cycle', 'cyclic', 'returns', 'comes back', 'loop'],
    branchAt: ['branch', 'branch point', 'where it splits', 'fork'],
    outDegreeMax: ['fates', 'two fates', 'out-degree', 'splits into'],
    activeIndex: ['this step', 'the current step', 'here', 'now'],
  },
  validate,
  Component: ProcessFlow,
};

export type { ProcessFlowParams };
