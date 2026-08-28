/**
 * Ch11 · Section 24 — "Master the four processes — the rest is assembly"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 24 not yet uploaded, verify-scene.mjs could
 * not be run. Geometry is an EXACT reuse of the already-PASS Sec8/Sec15
 * 2×2 pitfall-grid layout (only content differs). Re-run once audio lands.
 *
 * Beats (7): 0 hook · 1 pitfall1 (iso/adia twins) · 2 pitfall2 (γ vs γ−1)
 *  · 3 pitfall3 (formula outside process) · 4 pitfall4 (sign of work) ·
 *  5 habit1 (adiabatic ratios) · 6 habit2 (ID from a graph).
 *
 * Layout plan — identical to Sec8/Sec15.
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  RED,
  GREEN,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const PITFALLS: [number, number, string, string, string, string][] = [
  [60, 140, "isothermal vs adiabatic — twins?", "adiabatic is steeper, ΔT≠0", "Q=W (iso) vs ΔU=−W (adia)", "iso vs adia — jude hue?"],
  [560, 140, "γ vs γ−1 confusion", "pressure: PV^γ (uses γ)", "temperature: TV^(γ−1)", "γ vs γ−1 ka confusion"],
  [60, 290, "formula outside its process", "nRT·ln only for isothermal", "PΔV only for isobaric", "formula galat process mein"],
  [560, 290, "sign of work, direction", "expansion +, compression −", "cycle: CW=+engine, CCW=−fridge", "work ka sign, direction"],
];

export default function Ch11Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={70} size={25} fill={RED} script>
          {t("master the four processes — the rest is assembly", "chaar processes master karo — baaki assembly hai")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={104} size={14} fill={MUTED} script>
          {t("four traps, then two speed habits", "chaar traps, phir do speed habits")}
        </T>
      </Fade>

      {PITFALLS.map(([x, y, titleEn, sub1, sub2, titleHi], i) => {
        const bk = i + 1;
        const cx = x + 30;
        const cy = y + 25;
        return (
          <React.Fragment key={x + "-" + y}>
            <Draw
              on={beat >= bk}
              delay={dl(bk, 0.1)}
              d={`M ${x + 8} ${y} h 444 q 8 0 8 8 v 114 q 0 8 -8 8 h -444 q -8 0 -8 -8 v -114 q 0 -8 8 -8`}
              stroke={RED}
              sw={2}
              dur={0.6}
            />
            <Fade on={beat >= bk} delay={dl(bk, 0.6)}>
              <Circle cx={cx} cy={cy} r={18} fill={RED} stroke={INK} strokeWidth={1.4} />
              <T x={cx} y={cy + 6} size={17} fill={CREAM} weight={800} script={false}>
                {i + 1}
              </T>
            </Fade>
            <Fade on={beat >= bk} delay={dl(bk, 1)}>
              <T x={x + 70} y={cy + 6} size={14} fill={INK} weight={800} anchor="start" script={false}>
                {t(titleEn, titleHi)}
              </T>
            </Fade>
            <Fade on={beat >= bk} delay={dl(bk, 1.5)}>
              <T x={x + 30} y={y + 76} size={12} fill={MUTED} script anchor="start">
                {sub1}
              </T>
            </Fade>
            <Fade on={beat >= bk} delay={dl(bk, 1.9)}>
              <T x={x + 30} y={y + 100} size={12} fill={MUTED} script anchor="start">
                {sub2}
              </T>
            </Fade>
          </React.Fragment>
        );
      })}

      {/* beat 5 — speed habit 1: adiabatic ratios */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 118 440 h 414 q 8 0 8 8 v 54 q 0 8 -8 8 h -414 q -8 0 -8 -8 v -54 q 0 -8 8 -8" stroke={GREEN} sw={2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={325} y={462} size={13} fill={GREEN} script={false}>
          {t("adiabatic numericals", "adiabatic numericals")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={325} y={492} size={13} fill={INK} weight={800} script={false}>
          {t("work with RATIOS, not absolute P", "RATIOS se kaam karo, absolute P nahi")}
        </T>
      </Fade>

      {/* beat 6 — speed habit 2: reading a graph */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 548 440 h 414 q 8 0 8 8 v 54 q 0 8 -8 8 h -414 q -8 0 -8 -8 v -54 q 0 -8 8 -8" stroke={GREEN} sw={2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={755} y={462} size={13} fill={GREEN} script={false}>
          {t("ID a process from a graph", "graph se process pehchano")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={755} y={492} size={13} fill={INK} weight={800} script={false}>
          {t("vertical/horizontal, steeper=adiabatic", "vertical/horizontal, steeper=adiabatic")}
        </T>
      </Fade>
    </Scene>
  );
}
