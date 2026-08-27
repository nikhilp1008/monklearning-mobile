/**
 * Chemistry scene kit — domain primitives layered on top of kit.tsx.
 *
 * These are the chemistry-specific "things a teacher draws": bonds, lone pairs,
 * electron-pushing (mechanism) arrows, reaction arrows with conditions, benzene
 * rings, orbital-filling boxes, reaction-coordinate curves, wedge/dash stereo.
 *
 * Same conventions as kit.tsx: geometry helpers return an SVG path `d` string
 * (feed them to <Draw/>); small multi-element pieces are React components that
 * take an `on`/`delay` and animate via <Fade>/<Draw>. Everything is a pure
 * function of props — no internal state — so seek/pause/replay stay correct.
 *
 * NOTATION (verified to render in both board fonts — Kalam & Anek Latin):
 *   formulas with subscripts  H₂O  Al₂(SO₄)₃      (U+2080–2089)
 *   charges as superscripts    Na⁺  SO₄²⁻  Fe³⁺   (U+00B2/00B3/2070+, ⁺ ⁻)
 *   arrows  →  ⇌ (equilibrium)  ↔ (resonance)     Δ  °  •(lone pair)  ≡  ±
 *   Do NOT use combining marks over letters (e.g. U+20D7) — those render tofu.
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import { Draw, Fade, T, INK, RED, GREEN, MUTED, AMBER_DARK } from '@/components/scenes/kit';

/* ------------------------------------------------------------------ */
/* bonds                                                               */
/* ------------------------------------------------------------------ */

/** Single bond — a straight line path. */
export function bondD(x1: number, y1: number, x2: number, y2: number): string {
  return `M ${x1} ${y1} L ${x2} ${y2}`;
}

function unit(x1: number, y1: number, x2: number, y2: number) {
  const a = Math.atan2(y2 - y1, x2 - x1);
  return { nx: Math.sin(a), ny: -Math.cos(a) }; // perpendicular unit vector
}

/** Double bond — two parallel lines, `gap` apart, as one path. */
export function doubleBondD(x1: number, y1: number, x2: number, y2: number, gap = 4): string {
  const { nx, ny } = unit(x1, y1, x2, y2);
  const o = (s: number) =>
    `M ${x1 + nx * s} ${y1 + ny * s} L ${x2 + nx * s} ${y2 + ny * s}`;
  return `${o(gap)} ${o(-gap)}`;
}

/** Triple bond — three parallel lines as one path. */
export function tripleBondD(x1: number, y1: number, x2: number, y2: number, gap = 6): string {
  const { nx, ny } = unit(x1, y1, x2, y2);
  const o = (s: number) =>
    `M ${x1 + nx * s} ${y1 + ny * s} L ${x2 + nx * s} ${y2 + ny * s}`;
  return `${o(gap)} ${o(0)} ${o(-gap)}`;
}

/** Stereo wedge (bond coming toward viewer) — a filled triangle; use fill, not stroke. */
export function wedgeD(x1: number, y1: number, x2: number, y2: number, w = 7): string {
  const { nx, ny } = unit(x1, y1, x2, y2);
  return `M ${x1} ${y1} L ${x2 + nx * w} ${y2 + ny * w} L ${x2 - nx * w} ${y2 - ny * w} Z`;
}

/** Stereo hash (bond going away from viewer) — graduated perpendicular ticks. */
export function hashD(x1: number, y1: number, x2: number, y2: number, n = 6): string {
  const { nx, ny } = unit(x1, y1, x2, y2);
  let d = "";
  for (let i = 1; i <= n; i++) {
    const t = i / (n + 1),
      x = x1 + (x2 - x1) * t,
      y = y1 + (y2 - y1) * t,
      w = 1.2 + i * 0.9;
    d += `M ${x - nx * w} ${y - ny * w} L ${x + nx * w} ${y + ny * w} `;
  }
  return d;
}

/** Regular hexagon path (benzene / cyclohexane skeleton), flat-top by default. */
export function ringD(cx: number, cy: number, r: number, sides = 6, rot = Math.PI / 6): string {
  let d = "";
  for (let i = 0; i < sides; i++) {
    const a = rot + (i * 2 * Math.PI) / sides;
    d += `${i ? "L" : "M"} ${(cx + r * Math.cos(a)).toFixed(1)} ${(cy + r * Math.sin(a)).toFixed(1)} `;
  }
  return d + "Z";
}

/* ------------------------------------------------------------------ */
/* mechanism: electron-pushing curved arrow                            */
/* ------------------------------------------------------------------ */

/**
 * Curved (electron-pushing) arrow from (x1,y1) to (x2,y2). `bend` bows the
 * curve perpendicular to the chord: positive bows one way, negative the other.
 * A double-barbed head = a pair of electrons; pass `single: true` for a
 * single-barb "fish-hook" (radical, one electron).
 */
export function curvedArrowD(
  x1: number, y1: number, x2: number, y2: number, bend = -34, single = false
): string {
  const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
  const { nx, ny } = unit(x1, y1, x2, y2);
  const cx = mx + nx * bend, cy = my + ny * bend;
  const ea = Math.atan2(y2 - cy, x2 - cx), h = 11;
  const head = single
    ? `M ${x2 - h * Math.cos(ea - 0.5)} ${y2 - h * Math.sin(ea - 0.5)} L ${x2} ${y2}`
    : `M ${x2 - h * Math.cos(ea - 0.5)} ${y2 - h * Math.sin(ea - 0.5)} L ${x2} ${y2} L ${x2 - h * Math.cos(ea + 0.5)} ${y2 - h * Math.sin(ea + 0.5)}`;
  return `M ${x1} ${y1} Q ${cx} ${cy} ${x2} ${y2} ${head}`;
}

/* ------------------------------------------------------------------ */
/* reaction arrow with conditions over / under                         */
/* ------------------------------------------------------------------ */

/** Straight reaction-arrow shaft + head, left→right at baseline y. */
export function reactionArrowD(x1: number, x2: number, y: number): string {
  return `M ${x1} ${y} L ${x2} ${y} M ${x2 - 12} ${y - 6} L ${x2} ${y} L ${x2 - 12} ${y + 6}`;
}

/** Reaction arrow with optional condition text above (catalyst) and below (T/°C). */
export function ReactionArrow({
  on, delay = 0, x1, x2, y, over, under, color = INK,
}: {
  on: boolean; delay?: number; x1: number; x2: number; y: number;
  over?: string; under?: string; color?: string;
}) {
  return (
    <>
      <Draw on={on} d={reactionArrowD(x1, x2, y)} stroke={color} sw={2.4} delay={delay} />
      {over && (
        <Fade on={on} delay={delay + 0.3}>
          <T x={(x1 + x2) / 2} y={y - 12} size={16} fill={AMBER_DARK}>{over}</T>
        </Fade>
      )}
      {under && (
        <Fade on={on} delay={delay + 0.3}>
          <T x={(x1 + x2) / 2} y={y + 22} size={15} fill={MUTED}>{under}</T>
        </Fade>
      )}
    </>
  );
}

/* ------------------------------------------------------------------ */
/* lone pair (two dots at an angle around a point)                     */
/* ------------------------------------------------------------------ */

export function LonePair({
  on, delay = 0, cx, cy, angle = 0, spread = 5, r = 2.6, fill = INK,
}: {
  on: boolean; delay?: number; cx: number; cy: number; angle?: number;
  spread?: number; r?: number; fill?: string;
}) {
  const dx = Math.cos(angle) * spread, dy = Math.sin(angle) * spread;
  return (
    <Fade on={on} delay={delay}>
      <Circle cx={cx + dx} cy={cy + dy} r={r} fill={fill} />
      <Circle cx={cx - dx} cy={cy - dy} r={r} fill={fill} />
    </Fade>
  );
}

/* ------------------------------------------------------------------ */
/* orbital-filling box (↑↓)                                            */
/* ------------------------------------------------------------------ */

/**
 * One orbital box with 0–2 electrons drawn as ↑ / ↓ glyphs. For a subshell,
 * place several side by side and fill per Hund/Aufbau across beats.
 */
export function OrbitalBox({
  on, delay = 0, x, y, up = 0, down = 0, w = 34, h = 26, label,
}: {
  on: boolean; delay?: number; x: number; y: number; up?: number; down?: number;
  w?: number; h?: number; label?: string;
}) {
  return (
    <Fade on={on} delay={delay}>
      <Rect x={x} y={y} width={w} height={h} rx={2} fill="none" stroke={INK} strokeWidth={1.8} />
      {up ? <T x={x + w * 0.28} y={y + h * 0.72} size={17} fill={INK}>↑</T> : null}
      {down ? <T x={x + w * 0.72} y={y + h * 0.72} size={17} fill={INK}>↓</T> : null}
      {label ? <T x={x + w / 2} y={y + h + 16} size={14} fill={MUTED}>{label}</T> : null}
    </Fade>
  );
}

/* ------------------------------------------------------------------ */
/* reaction-coordinate (energy) diagram axes + curve                   */
/* ------------------------------------------------------------------ */

/**
 * Energy-profile curve across [x0..x1], baseline yBase, peak height `peak`
 * above baseline at fraction `at` of the span. Draw the axes separately.
 */
export function energyCurveD(
  x0: number, x1: number, yReact: number, yProd: number, peak: number, at = 0.5
): string {
  const px = x0 + (x1 - x0) * at, py = Math.min(yReact, yProd) - peak;
  const c1x = x0 + (px - x0) * 0.6, c2x = px - (px - x0) * 0.4;
  const c3x = px + (x1 - px) * 0.4, c4x = x1 - (x1 - px) * 0.6;
  return `M ${x0} ${yReact} C ${c1x} ${yReact}, ${c2x} ${py}, ${px} ${py} C ${c3x} ${py}, ${c4x} ${yProd}, ${x1} ${yProd}`;
}

/* re-export the palette bits chemistry scenes reach for most */
export { INK, RED, GREEN, MUTED, AMBER_DARK };
