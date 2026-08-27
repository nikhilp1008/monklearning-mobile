/**
 * C11 Ch08 · Section 8 — "Worked example — a ketone family (JEE Main)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 8.11, 23.72, 33.19, 45.23, 57, 69.72, 83.54]):
 *  0 title (always-on, seq1) · 1 task (given CnH2nO, ketone) · 2 functional group =
 *  carbonyl flanked by 2 C's · 3 general formula matches · 4 propanone (smallest
 *  ketone) drawn · 5 +CH2 ladder: butanone, pentan-2-one · 6 red note (can't be
 *  smaller than propanone) · 7 closer (one reasoning chain)
 *
 * Layout plan:
 *  b1 | task (15, ink)                 | T mid | y100
 *  b2 | group def (14, muted)          | T mid | y140
 *  b3 | formula match (14, green)      | T mid | y175
 *  b4 | propanone zig-zag+O, label     | Draw+T| c220 y260..330
 *  b5 | butanone/pentan-2-one + arrows | Draw+T| c520/c880 y260..330
 *  b6 | margin bar + red note          | Draw+T| x60 y360..390 · x76 y380
 *  b7 | closer (18, green, w800)       | T mid | y420
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { doubleBondD } from "./chem-kit";

export default function C11Ch08Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // A ketone zig-zag: `verts` are the chain carbon x-positions (alternating
  // y 290/260), `carbonylIdx` is which vertex carries the C=O drawn downward.
  const Ketone = ({
    verts,
    carbonylIdx,
    labelX,
    label,
    on,
    delay,
  }: {
    verts: number[];
    carbonylIdx: number;
    labelX: number;
    label: string;
    on: boolean;
    delay: number;
  }) => {
    const pts = verts.map((x, i) => `${i ? "L" : "M"} ${x} ${i % 2 === 0 ? 290 : 260}`).join(" ");
    const cx = verts[carbonylIdx];
    const cy = carbonylIdx % 2 === 0 ? 290 : 260;
    return (
      <>
        <Draw on={on} delay={delay} d={pts} stroke={INK} sw={2.4} dur={0.7} />
        <Draw
          on={on}
          delay={delay}
          d={doubleBondD(cx, cy, cx, cy + 45, 3)}
          stroke={INK}
          sw={2.2}
          dur={0.4}
        />
        <T x={labelX} y={330} size={14} fill={INK} weight={700}>
          {label}
        </T>
      </>
    );
  };

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={24} fill={RED} script>
          {t("Worked example — a ketone family (JEE Main)", "Worked example — ek ketone family (JEE Main)")}
        </T>
      </Fade>

      {/* beat 1 — task */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={15} fill={INK}>
          {t(
            "given CnH2nO, reacts as a ketone — find group, series formula, next 2",
            "diya CnH2nO, ketone jaisa react karta — group, series formula, agle 2"
          )}
        </T>
      </Fade>

      {/* beat 2 — functional group */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={140} size={14} fill={MUTED}>
          {t("ketone = carbonyl C=O flanked by two carbons", "ketone = carbonyl C=O, dono taraf carbon")}
        </T>
      </Fade>

      {/* beat 3 — general formula matches */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={175} size={14} fill={GREEN}>
          {t("series formula: CnH2nO ✓ (matches the given)", "series formula: CnH2nO ✓ (diye hue se match)")}
        </T>
      </Fade>

      {/* beat 4 — propanone, the smallest possible ketone */}
      <Ketone
        verts={[180, 220, 260]}
        carbonylIdx={1}
        labelX={220}
        label={t("C3H6O — propanone", "C3H6O — propanone")}
        on={beat >= 4}
        delay={dl(4, 0.2)}
      />

      {/* beat 5 — climb the ladder by +CH2 */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={370} y={275} size={14} fill={MUTED}>
          +CH₂ →
        </T>
      </Fade>
      <Ketone
        verts={[480, 520, 560, 600]}
        carbonylIdx={1}
        labelX={540}
        label={t("C4H8O — butanone", "C4H8O — butanone")}
        on={beat >= 5}
        delay={dl(5, 0.3)}
      />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={700} y={275} size={14} fill={MUTED}>
          +CH₂ →
        </T>
      </Fade>
      <Ketone
        verts={[800, 840, 880, 920, 960]}
        carbonylIdx={1}
        labelX={880}
        label={t("C5H10O — pentan-2-one", "C5H10O — pentan-2-one")}
        on={beat >= 5}
        delay={dl(5, 0.9)}
      />

      {/* beat 6 — can't go smaller than propanone */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 60 360 L 60 390" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={380} size={15} fill={RED} script anchor="start">
          {t(
            "can't be smaller than propanone — the carbonyl needs a carbon on both sides",
            "propanone se chhota nahi ho sakta — carbonyl ko dono taraf carbon chahiye"
          )}
        </T>
      </Fade>

      {/* beat 7 — closer */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={420} size={18} fill={GREEN} weight={800}>
          {t(
            "one chain: general formula + functional group + the +CH2 rule",
            "ek chain: general formula + functional group + CH2 rule"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
