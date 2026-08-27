/**
 * C11 Ch07 · Section 31 — "Pitfalls & pro-tips: equivalents, n-counting, and reading E°"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 * Closes Subtopic 3 (secs 21-31).
 *
 * Beats (en [0, 8.45, 24.58, 41.13, 56.75, 72.7, 80.55, 87.38]):
 *  0 heading: the four traps
 *  1 pitfall 1 (red): equating moles instead of equivalents
 *  2 pitfall 2: wrong n-factor for the medium
 *  3 pitfall 3: mis-counting n in cell EMF
 *  4 pitfall 4: sign errors, wrong electron path
 *  5 heading: PRO-TIP
 *  6 tip: titrations — write MnV each side, equate
 *  7 red-margin tip: cells — rank E° first, EMF=gap, negative gap=swap electrodes
 *  (everything stays)
 *
 * Layout plan — identical row geometry to Sec 11/20 (already verified clean):
 *  b1 R1 badge(90,135) line1 bl140 line2 bl164 (red)
 *  b2 R2 badge(90,193) line1 bl198 line2 bl222
 *  b3 R3 badge(90,251) line1 bl256 line2 bl280
 *  b4 R4 badge(90,309) line1 bl314 line2 bl338
 *  b5 heading (sans19 800 amber) x64 bl372
 *  b6 tip line (sans16) x540 bl406
 *  b7 margin bar x64 y432..472, text (script16 red) x80 bl450/476 (2 lines)
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
  AMBER_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';

function Badge({ on, delay, cx, cy, n, color = INK }: { on: boolean; delay: number; cx: number; cy: number; n: string; color?: string }) {
  return (
    <>
      <Draw
        on={on}
        delay={delay}
        d={`M ${cx - 17} ${cy} a 17 17 0 1 0 34 0 a 17 17 0 1 0 -34 0`}
        stroke={color}
        sw={2}
        dur={0.5}
      />
      <Fade on={on} delay={delay + 0.15}>
        <T x={cx} y={cy + 6} size={15} fill={color} weight={800}>
          {n}
        </T>
      </Fade>
    </>
  );
}

function Pitfall({
  on,
  d1,
  d2,
  cy,
  n,
  line1,
  line2,
  color = INK,
}: {
  on: boolean;
  d1: number;
  d2: number;
  cy: number;
  n: string;
  line1: string;
  line2: string;
  color?: string;
}) {
  return (
    <>
      <Badge on={on} delay={d1} cx={90} cy={cy - 5} n={n} color={color} />
      <Fade on={on} delay={d1 + 0.2}>
        <T x={125} y={cy} size={18} fill={color} weight={700} anchor="start">
          {line1}
        </T>
      </Fade>
      <Fade on={on} delay={d2}>
        <T x={125} y={cy + 24} size={14} fill={MUTED} anchor="start">
          {line2}
        </T>
      </Fade>
    </>
  );
}

export default function C11Ch07Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("a negative gap means the cell was drawn backwards", "negative gap ka matlab cell ulta bana")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("the four traps", "chaar traps")}
        </T>
      </Fade>

      {/* ===== pitfalls 1-4 ===== */}
      <Pitfall
        on={beat >= 1}
        d1={dl(1, 0.3)}
        d2={dl(1, 1.4)}
        cy={140}
        n="1"
        color={RED}
        line1={t("moles instead of equivalents", "moles ke bajaye equivalents")}
        line2={t("at the endpoint, moles × n-factor match — never raw moles", "endpoint pe, moles × n-factor match — raw moles kabhi nahi")}
      />
      <Pitfall
        on={beat >= 2}
        d1={dl(2, 0.3)}
        d2={dl(2, 1.4)}
        cy={198}
        n="2"
        line1={t("wrong n-factor for the medium", "medium ke liye galat n-factor")}
        line2={"MnO₄⁻: 5e⁻ in acid, only 3e⁻ in neutral/mild base"}
      />
      <Pitfall
        on={beat >= 3}
        d1={dl(3, 0.3)}
        d2={dl(3, 1.4)}
        cy={256}
        n="3"
        line1={t("mis-counting n in cell EMF", "cell EMF mein n mis-count")}
        line2={t("n = e⁻ in the BALANCED rxn — Zn+2Ag⁺: n=2", "n = BALANCED rxn ke e⁻ — Zn+2Ag⁺: n=2")}
      />
      <Pitfall
        on={beat >= 4}
        d1={dl(4, 0.3)}
        d2={dl(4, 1.4)}
        cy={314}
        n="4"
        line1={t("sign errors, wrong electron path", "sign errors, galat electron path")}
        line2={t("always cathode − anode; e⁻ flow: anode → cathode, via wire", "hamesha cathode − anode; e⁻: anode → cathode, wire se")}
      />

      {/* ===== beat 5 — pro-tip heading ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={64} y={372} size={19} fill={AMBER_DARK} weight={800} anchor="start">
          PRO-TIP
        </T>
      </Fade>

      {/* ===== beat 6 — titration shortcut ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={406} size={16} fill={INK}>
          {t("titrations: write M·n·V on each side and equate — done in 1 line", "titrations: har side M·n·V likho aur equate karo — 1 line mein done")}
        </T>
      </Fade>

      {/* ===== beat 7 — cell shortcut ===== */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 64 432 L 64 480" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={80} y={450} size={16} fill={RED} script anchor="start">
          {t("cells: rank E° first — higher=cathode, lower=anode, EMF=the gap", "cells: pehle E° rank karo — zyada=cathode, kam=anode, EMF=gap")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.3)}>
        <T x={80} y={476} size={16} fill={RED} script anchor="start">
          {t("negative gap? you drew it backwards — swap the electrodes", "negative gap? ulta banaya tha — electrodes swap karo")}
        </T>
      </Fade>
    </Scene>
  );
}
