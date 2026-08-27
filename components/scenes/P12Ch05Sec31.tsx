/**
 * P12Ch05 · Section 31 — "Paramagnetism and ferromagnetism: disorder against cooperation"
 * Subtopic: Magnetic Properties of Materials
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * BOARD REBUILT AGAINST THE NARRATION (2026-08-21).
 *
 * WHAT THE BOARD USED TO TEACH: paramagnetism alone — random dipoles, Curie's
 * law written out as χ = C/T, and field-line behaviour in a paramagnet. The
 * ferromagnetic half of the narration (four of the eight segments) had no
 * board, and Curie's law was stated on the board although the voice only
 * promises it ("which we will shortly write down as Curie's law").
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: the two families side by side —
 *   paramagnets (Al, Na, O₂, Pt): permanent atomic moments, randomised by
 *     thermal jostling; a field wins only partly, giving a small net M, weak
 *     attraction, and a drift from weak field toward strong; heat is what
 *     fights the alignment.
 *   ferromagnets (Fe, Co, Ni, Gd): moments force their neighbours to align,
 *     locking into domains of ~10¹¹ atoms already aligned with no field; an
 *     applied field only grows and rotates those domains — enormous M for very
 *     little H, which is why iron stays magnetised and shows hysteresis.
 *
 * BEAT MAP (n_reveals = 8, so valid gates are 0..7):
 *   0  "individuals or an organised crowd"     title + underline
 *   1  "the picture puts them side by side"    random arrows | aligned blocks
 *   2  "start with paramagnets…"               names + randomisation
 *   3  "apply a field and it partly wins"      partial alignment, weak attraction
 *   4  "and notice what fights it — heat"      temperature dependence
 *   5  "now the loud family"                   names + forced neighbour alignment
 *   6  "the moments lock into domains"         domains, ~10¹¹ atoms
 *   7  "so when you finally apply a field"     grow and rotate + hysteresis chip
 */

import React from "react";
import { G, Line, Path, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

/** an arrow of length `len` centred on (cx, cy), pointing `deg` from +x */
function ray(cx: number, cy: number, deg: number, len: number): string {
  const a = (deg * Math.PI) / 180;
  const hx = (len / 2) * Math.cos(a);
  const hy = (len / 2) * Math.sin(a);
  return arrowD(cx - hx, cy - hy, cx + hx, cy + hy);
}

const RANDOM_DEG = [20, 155, 285, 75, 340, 200, 40, 260, 115, 5, 300, 130, 225, 60, 345];
const COLS = [112, 190, 268, 346, 424];
const ROWS = [130, 172, 214];

/** one domain: a dashed block whose three arrows all point the same way */
function Domain({ x, y, w, h, deg }: { x: number; y: number; w: number; h: number; deg: number }) {
  const cy = y + h / 2;
  return (
    <G>
      <Rect x={x} y={y} width={w} height={h} rx={8} fill="none" stroke={MUTED} strokeWidth={1.6} strokeDasharray="6 5" />
      {[0.25, 0.5, 0.75].map((f) => (
        <Path key={f} d={ray(x + w * f, cy, deg, 34)} fill="none" stroke={GREEN} strokeWidth={2.2} strokeLinecap="round" />
      ))}
    </G>
  );
}

export default function P12Ch05Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ---------------- beat 0 — title ---------------- */}
      <Fade on={beat >= 0} delay={dl(0, 0.35)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("Individuals, or an organised crowd",
             "Individuals, or an organised crowd")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.6)}
        d="M 300 62 C 500 58, 660 66, 790 60" stroke={RED} sw={2.2} dur={0.7} />

      {/* ---------------- beat 1 — the side-by-side picture ---------------- */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Rect x={56} y={84} width={464} height={166} rx={12} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.6} />
        <T x={288} y={102} size={12.5} fill={MUTED} weight={700}>
          {t("arrows pointing every which way, with no pattern",
             "arrows pointing every which way, with no pattern")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        {ROWS.map((cy, r) =>
          COLS.map((cx, c) => (
            <Path
              key={`${r}-${c}`}
              d={ray(cx, cy, RANDOM_DEG[r * 5 + c], 32)}
              fill="none"
              stroke={AMBER_DARK}
              strokeWidth={2.2}
              strokeLinecap="round"
            />
          ))
        )}
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <Rect x={560} y={84} width={464} height={166} rx={12} fill={CREAM} stroke={GREEN} strokeWidth={1.6} />
        <T x={792} y={102} size={12.5} fill={MUTED} weight={700}>
          {t("blocks marching together — each internally aligned already",
             "blocks marching together — each internally aligned already")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <Domain x={578} y={108} w={210} h={64} deg={0} />
        <Domain x={800} y={108} w={206} h={64} deg={-90} />
        <Domain x={578} y={180} w={210} h={64} deg={180} />
        <Domain x={800} y={180} w={206} h={64} deg={-35} />
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <Line x1={540} y1={84} x2={540} y2={528} stroke={MUTED} strokeWidth={1.3} strokeDasharray="6 6" />
      </Fade>

      {/* ---------------- beats 2–4 — the paramagnet column ---------------- */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={56} y={292} size={14} fill={RED} weight={800} anchor="start">
          {t("PARAMAGNETS · aluminium, sodium, oxygen, platinum",
             "PARAMAGNETS · aluminium, sodium, oxygen, platinum")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={56} y={318} size={13} fill={INK} weight={700} anchor="start">
          {t("their atoms genuinely do carry permanent moments",
             "their atoms genuinely do carry permanent moments")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={56} y={342} size={13} fill={INK} weight={700} anchor="start">
          {t("but thermal jostling randomises them — on average they cancel",
             "but thermal jostling randomises them — on average they cancel")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={56} y={380} size={13.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("apply a field and it partly wins that argument",
             "apply a field and it partly wins that argument")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={56} y={404} size={13} fill={INK} weight={700} anchor="start">
          {t("partial alignment, never complete → a small net magnetisation",
             "partial alignment, never complete → a small net magnetisation")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={56} y={428} size={13} fill={GREEN} weight={800} anchor="start">
          {t("weakly attracted — it drifts from weak field toward strong",
             "weakly attracted — it drifts from weak field toward strong")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={56} y={466} size={13.5} fill={RED} weight={800} anchor="start">
          {t("and what fights the alignment is heat", "and what fights the alignment is heat")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={56} y={490} size={13} fill={INK} weight={700} anchor="start">
          {t("hotter sample → more violent jostling → weaker paramagnetism",
             "hotter sample → more violent jostling → weaker paramagnetism")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={56} y={514} size={13} fill={GREEN} weight={800} anchor="start">
          {t("which we will shortly write down as Curie's law",
             "which we will shortly write down as Curie's law")}
        </T>
      </Fade>

      {/* ---------------- beats 5–7 — the ferromagnet column ---------------- */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={560} y={292} size={14} fill={RED} weight={800} anchor="start">
          {t("FERROMAGNETS · iron, cobalt, nickel, gadolinium",
             "FERROMAGNETS · iron, cobalt, nickel, gadolinium")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={560} y={318} size={13} fill={INK} weight={700} anchor="start">
          {t("their moments do not merely have the option to align —",
             "their moments do not merely have the option to align —")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={560} y={342} size={13} fill={INK} weight={700} anchor="start">
          {t("they force their neighbours to align as well",
             "they force their neighbours to align as well")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={560} y={380} size={13.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("so they lock into large blocks called DOMAINS",
             "so they lock into large blocks called DOMAINS")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={560} y={404} size={13} fill={INK} weight={700} anchor="start">
          {t("each holding something like 10¹¹ atoms already pointing one way,",
             "each holding something like 10¹¹ atoms already pointing one way,")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={560} y={428} size={13} fill={INK} weight={700} anchor="start">
          {t("entirely on their own, with no field applied",
             "entirely on their own, with no field applied")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={560} y={466} size={13.5} fill={GREEN} weight={800} anchor="start">
          {t("so a field need not align atoms one by one —",
             "so a field need not align atoms one by one —")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={560} y={490} size={13} fill={INK} weight={700} anchor="start">
          {t("it merely nudges the pre-aligned domains to grow and to rotate",
             "it merely nudges the pre-aligned domains to grow and to rotate")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={560} y={514} size={13} fill={INK} weight={700} anchor="start">
          {t("enormous magnetisation for very little applied field",
             "enormous magnetisation for very little applied field")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 1.7)}>
        <Chip x={40} y={548} w={1000} h={42} fill={GREEN} textFill="#ffffff" size={14}>
          {t("★ that cooperation is why iron is strongly attracted, can stay magnetised, and shows hysteresis",
             "★ that cooperation is why iron is strongly attracted, can stay magnetised, and shows hysteresis")}
        </Chip>
      </Fade>
    </Scene>
  );
}
