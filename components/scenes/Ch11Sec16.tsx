/**
 * Ch11 · Section 16 — "Four ways to move the same gas"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 16 not yet uploaded, verify-scene.mjs could
 * not be run. Re-run once audio lands; this is the anchor P-V diagram for
 * the whole "Processes" subtopic, so double-check curve/label clearances
 * by eye once verified.
 *
 * Beats (9): 0 hook · 1 "4 ways, fix ONE thing" · 2 axes + common start
 *  point · 3 isochoric (V fixed) · 4 isobaric (P fixed) · 5 isothermal
 *  (T fixed) · 6 adiabatic (Q=0) · 7 slow vs fast extremes · 8 verdict:
 *  adiabatic always falls more steeply.
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  title (script 26, red)    | T mid | x318..762 y33..77 (bl 64)
 *  b0 | hook (13,script)     | T mid | x540 y98
 *  b1 | line (13,script)     | T mid | x540 y124
 *  b2 | axes                 | Draw  | x220 y150..410 · y410 x220..900
 *  b2 | start pt r5 + label  | Draw  | c(380,230) · label x340 y208
 *  b3 | isochoric line+label | Draw  | x380 y230..160 · label x395 y165
 *  b4 | isobaric line+label  | Draw  | x380..650 y230 · label x655 y225
 *  b5 | isothermal curve+lbl | Draw  | 380,230→700,320 · label x705 y325
 *  b6 | adiabatic curve+lbl  | Draw  | 380,230→700,380 · label x705 y385
 *  b7 | slow/fast (13,script)| T mid | x540 y440
 *  b8 | verdict (14,w700)    | T mid | x540 y470
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("four ways to move the same gas", "chaar tarike, same gas ko move karne ke")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={98} size={13} fill={MUTED} script>
          {t("the first law needs a rule to fill in the numbers", "first law ko numbers ke liye ek rule chahiye")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={124} size={13} fill={MUTED} script>
          {t("4 ways to hold the same cylinder — fix ONE thing", "same cylinder ke 4 tarike — ek cheez fix karo")}
        </T>
      </Fade>

      {/* beat 2 — axes and the common starting point */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 220 410 V 150" stroke={INK} sw={2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M 220 410 H 900" stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={212} y={148} size={13} fill={INK} anchor="end" script={false}>
          P
        </T>
        <T x={910} y={415} size={13} fill={INK} anchor="start" script={false}>
          V
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <Circle cx={380} cy={230} r={5} fill={INK} />
        <T x={340} y={208} size={11} fill={MUTED} anchor="end" script={false}>
          {t("start", "start")}
        </T>
      </Fade>

      {/* beat 3 — isochoric: V fixed */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d="M 380 230 V 160" stroke={INK} sw={2.6} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={395} y={165} size={13} fill={INK} anchor="start" script={false}>
          {t("isochoric", "isochoric")}
        </T>
      </Fade>

      {/* beat 4 — isobaric: P fixed */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d="M 380 230 H 650" stroke={AMBER_DARK} sw={2.6} dur={0.6} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={655} y={225} size={13} fill={AMBER_DARK} anchor="start" script={false}>
          {t("isobaric", "isobaric")}
        </T>
      </Fade>

      {/* beat 5 — isothermal: T fixed */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d="M 380 230 Q 550 260, 700 320" stroke={GREEN} sw={2.6} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={705} y={325} size={13} fill={GREEN} anchor="start" script={false}>
          {t("isothermal", "isothermal")}
        </T>
      </Fade>

      {/* beat 6 — adiabatic: no heat exchanged */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 380 230 Q 450 300, 700 380" stroke={AMBER} sw={2.6} dur={0.8} />
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={705} y={385} size={13} fill={AMBER_DARK} anchor="start" script={false}>
          {t("adiabatic", "adiabatic")}
        </T>
      </Fade>

      {/* beat 7 — the slow/fast extremes */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={440} size={13} fill={MUTED} script>
          {t("isothermal = slow (bath) · adiabatic = fast (insulated)", "isothermal = slow (bath) · adiabatic = fast (insulated)")}
        </T>
      </Fade>

      {/* beat 8 — verdict */}
      <Fade on={beat >= 8} delay={dl(8, 0.4)}>
        <T x={540} y={470} size={14} fill={AMBER_DARK} weight={700} script={false}>
          {t("adiabatic ALWAYS falls more steeply — it cools as it expands", "adiabatic HAMESHA zyada steeply girta hai — thanda hota hai")}
        </T>
      </Fade>
    </Scene>
  );
}
