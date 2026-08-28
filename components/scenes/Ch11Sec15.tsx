/**
 * Ch11 · Section 15 — "Master the sign convention and you've won half the chapter"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 15 not yet uploaded, verify-scene.mjs could
 * not be run. Geometry is an EXACT reuse of the already-PASS Sec8 2×2
 * pitfall-grid layout (only content differs) to minimise risk while
 * unverified. Re-run verify once audio lands.
 *
 * Beats (7): 0 hook · 1 pitfall1 (sign chaos) · 2 pitfall2 (U≠heat
 *  content) · 3 pitfall3 (unit consistency) · 4 pitfall4 (ΔU=0 assumed) ·
 *  5 habit1 (two-path reuse) · 6 habit2 (cyclic: net Q=net W).
 *
 * Layout plan — identical to Sec8:
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
  [60, 140, "sign convention chaos", "released ⇒ Q negative", "on gas ⇒ W negative", "sign convention chaos"],
  [560, 140, "U is NOT 'heat content'", "heat = energy crossing boundary", "defined only for a process", "U 'heat content' nahi hai"],
  [60, 290, "unit consistency forgotten", "convert cal → J first, always", "1 cal = 4.18 J", "unit consistency bhool jaana"],
  [560, 290, "assuming ΔU = 0 wrongly", "only isothermal ideal gas...", "...or a complete cycle", "ΔU = 0 galat maan lena"],
];

export default function Ch11Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={70} size={26} fill={RED} script>
          {t("master the signs — you've won half the chapter", "signs master karo — aadha chapter jeet gaye")}
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
              <T x={x + 70} y={cy + 6} size={15} fill={INK} weight={800} anchor="start" script={false}>
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

      {/* beat 5 — speed habit 1: two-path reuse */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 118 440 h 414 q 8 0 8 8 v 54 q 0 8 -8 8 h -414 q -8 0 -8 -8 v -54 q 0 -8 8 -8" stroke={GREEN} sw={2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={325} y={462} size={13} fill={GREEN} script={false}>
          {t("two-path problems", "two-path problems")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={325} y={492} size={14} fill={INK} weight={800} script={false}>
          {t("compute ΔU once, reuse it", "ΔU ek baar compute karo, reuse karo")}
        </T>
      </Fade>

      {/* beat 6 — speed habit 2: cyclic shortcut */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 548 440 h 414 q 8 0 8 8 v 54 q 0 8 -8 8 h -414 q -8 0 -8 -8 v -54 q 0 -8 8 -8" stroke={GREEN} sw={2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={755} y={462} size={13} fill={GREEN} script={false}>
          {t("cyclic problems", "cyclic problems")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={755} y={492} size={15} fill={INK} weight={800} script={false}>
          {t("net Q = net W = loop area", "net Q = net W = loop area")}
        </T>
      </Fade>
    </Scene>
  );
}
