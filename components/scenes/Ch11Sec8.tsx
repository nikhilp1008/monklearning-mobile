/**
 * Ch11 · Section 8 — "Four pitfalls, then two speed habits"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (7): 0 hook · 1 pitfall1 (equal T≠equal U) · 2 pitfall2 (P,V,T not
 *  all free) · 3 pitfall3 (heat not a state var) · 4 pitfall4 (kelvin not
 *  Celsius) · 5 habit1 (ratio form) · 6 habit2 (write equal T first).
 *
 * Layout plan — 2×2 pitfall grid, Anek bl−0.78s..+0.31s:
 *  title (script 28, red)     | T mid | x198..882 y32..85 (bl 70)
 *  b0 | hook (14,script)      | T mid | x540 y104
 *  b1 | card1 (h130)          | Draw  | x60..520  y140..270
 *  b2 | card2 (h130)          | Draw  | x560..1020 y140..270
 *  b3 | card3 (h130)          | Draw  | x60..520  y290..420
 *  b4 | card4 (h130)          | Draw  | x560..1020 y290..420
 *  b5 | habit1 box (h70)      | Draw  | x110..540 y440..510
 *  b6 | habit2 box (h70)      | Draw  | x540..970 y440..510
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
  [60, 140, "equal T ≠ equal U", "tiny hot + huge warm can share energy", "two same-T systems usually don't", "equal T ≠ equal U"],
  [560, 140, "P, V, T not all free", "PV = nRT binds them together", "fix mass ⇒ only 2 are independent", "P, V, T saath mein bandhe hain"],
  [60, 290, "heat is NOT a state variable", "Q, W are path quantities", "never say 'heat content of a gas'", "heat state variable NAHI hai"],
  [560, 290, "Celsius ≠ kelvin here", "equation demands kelvin, always", "convert: add 273.15", "yahan Celsius nahi chalega"],
];

export default function Ch11Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={70} size={28} fill={RED} script>
          {t("four pitfalls, then two speed habits", "chaar pitfalls, phir do speed habits")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={104} size={14} fill={MUTED} script>
          {t("four traps sink more students than anywhere else", "in chaar traps mein sabse zyada students phasate hain")}
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
              <T x={x + 70} y={cy + 6} size={16} fill={INK} weight={800} anchor="start" script={false}>
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

      {/* beat 5 — speed habit 1: ratio form */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 118 440 h 414 q 8 0 8 8 v 54 q 0 8 -8 8 h -414 q -8 0 -8 -8 v -54 q 0 -8 8 -8" stroke={GREEN} sw={2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={325} y={462} size={13} fill={GREEN} script={false}>
          {t("ratio form (fixed mass, same gas)", "ratio form (fixed mass, same gas)")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={325} y={492} size={15} fill={INK} weight={800} script={false}>
          P₁V₁/T₁ = P₂V₂/T₂
        </T>
      </Fade>

      {/* beat 6 — speed habit 2: qualitative first */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 548 440 h 414 q 8 0 8 8 v 54 q 0 8 -8 8 h -414 q -8 0 -8 -8 v -54 q 0 -8 8 -8" stroke={GREEN} sw={2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={755} y={462} size={13} fill={GREEN} script={false}>
          {t("equilibrium questions", "equilibrium questions")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={755} y={492} size={15} fill={INK} weight={800} script={false}>
          {t("write equal final T FIRST", "pehle equal final T likho")}
        </T>
      </Fade>
    </Scene>
  );
}
