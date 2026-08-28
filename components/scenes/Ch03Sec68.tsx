/**
 * Ch03 · Section 68 — "The toolkit: centripetal force and non-uniform motion"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 5.8, 18.0, 33.6, 43.3, 57.9, 68.3, 80.6, 91.2]):
 *  0 heading
 *  1 Fc = mv²/r = mω²r
 *  2 red: not a NEW force — whichever real force points inward
 *  3 non-uniform header: TWO components
 *  4 a_radial = v²/r, a_tangential = dv/dt
 *  5 net a = √(ar²+at²) green box
 *  6 banked road header + diagram (N, mg, θ, horizontal component)
 *  7 tanθ = v²/(rg) green box + caption
 *  8 verdict: radial turns, tangential speeds — perpendicular, never interfering
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | st x84 bl 112 s14
 *  b2 | st x84 bl 140 / 164 s12
 *  b3 | header st x84 bl 214 · underline M84 222 h360
 *  b4 | st x84 bl 254 / 282 s14
 *  b5 | box x84..460 y306..350 text cx272 bl 334 s15
 *  b6 | header st x600 bl 112 · underline M600 120 h380 · incline M680 380 L860 330 ·
 *       car(770,355) · N (770,355)→(751,288) · vertRef (770,355)→(770,288) dashed-look ·
 *       θ lbl (761,320) · horiz-comp (770,355)→(720,355) green · mg (770,355)→(770,410)
 *  b7 | box x600..980 y430..470 text cx790 bl 456 s16 · caption cx790 bl 494 s11
 *  b8 | bar M66 520 v56 · lines st x84 bl 538 / 562 s12
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
  arrowD,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch03Sec68({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t("TOOLKIT — forces and the general case", "TOOLKIT — forces aur general case")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — the centripetal force */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={84} y={112} size={14} fill={INK} weight={700} anchor="start">
          Fc = m v² ⁄ r = m ω² r
        </T>
      </Fade>

      {/* beat 2 — not a new force */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={84} y={140} size={12} fill={RED} script anchor="start">
          {t(
            "not a NEW force — whichever real force points inward",
            "koi NAYA force nahi — jo bhi asli force andar ki taraf hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={84} y={164} size={12} fill={RED} script anchor="start">
          {t(
            "tension, gravity, friction, normal — always ask WHICH ONE",
            "tension, gravity, friction, normal — hamesha poochho KAUNSA"
          )}
        </T>
      </Fade>

      {/* beat 3 — non-uniform header */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={84} y={214} size={13} fill={INK} script anchor="start">
          {t(
            "NON-UNIFORM circular motion — TWO components",
            "NON-UNIFORM circular motion — DO components"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.4)} d="M 84 222 h 360" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 4 — the two components */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={84} y={254} size={14} fill={INK} weight={700} anchor="start">
          a radial = v² ⁄ r
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={84} y={282} size={14} fill={INK} weight={700} anchor="start">
          a tangential = dv ⁄ dt
        </T>
      </Fade>

      {/* beat 5 — the net acceleration */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 96 306 h 352 q 12 0 12 12 v 20 q 0 12 -12 12 h -352 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={272} y={334} size={15} fill={INK} weight={800}>
          a = √(a radial² + a tangential²)
        </T>
      </Fade>

      {/* beat 6 — the banked road */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={600} y={112} size={13} fill={INK} script anchor="start">
          {t("BANKED ROAD — no friction needed", "BANKED ROAD — friction ki zaroorat nahi")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.4)} d="M 600 120 h 380" stroke={AMBER} sw={1.8} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 2.2)} d="M 680 380 L 860 330" stroke={INK_LIGHT} sw={2.4} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <Circle cx={770} cy={355} r={5} fill={INK} />
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 3.6)} d="M 770 355 V 288" stroke={MUTED} sw={1.4} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 4.2)} d={arrowD(770, 355, 751, 288)} stroke={AMBER_DARK} sw={2.6} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <T x={751} y={278} size={12} fill={AMBER_DARK} weight={700} anchor="middle">N</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5.6)}>
        <T x={761} y={318} size={11} fill={MUTED} weight={700}>θ</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 6.4)} d={arrowD(770, 355, 720, 355)} stroke={GREEN} sw={2.6} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 7.2)}>
        <T x={716} y={348} size={11} fill={GREEN} script anchor="end">
          {t("→ a_c", "→ a_c")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 8)} d={arrowD(770, 355, 770, 410)} stroke={INK} sw={2.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 8.8)}>
        <T x={780} y={412} size={11} fill={INK} weight={700} anchor="start">mg</T>
      </Fade>

      {/* beat 7 — the banking angle */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.6)}
        d="M 612 430 h 356 q 12 0 12 12 v 16 q 0 12 -12 12 h -356 q -12 0 -12 -12 v -16 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={790} y={456} size={16} fill={INK} weight={800}>
          tan θ = v² ⁄ (r g)
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={790} y={494} size={11} fill={GREEN} script>
          {t(
            "N's horizontal part supplies a_c — hands off the friction",
            "N ka horizontal hissa a_c deta hai — friction se haath khinch lo"
          )}
        </T>
      </Fade>

      {/* beat 8 — the two distinct roles */}
      <Draw on={beat >= 8} delay={dl(8, 0.8)} d="M 66 520 v 56" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={538} size={12} fill={GREEN} script anchor="start">
          {t(
            "radial turns the path · tangential changes the speed",
            "radial raasta modta hai · tangential speed badalta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 6)}>
        <T x={84} y={562} size={12} fill={INK} script anchor="start">
          {t(
            "perpendicular — they never do each other's job",
            "perpendicular — kabhi ek doosre ka kaam nahi karte"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
