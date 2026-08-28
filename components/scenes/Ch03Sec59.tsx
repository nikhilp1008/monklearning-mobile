/**
 * Ch03 · Section 59 — "NEET trap: which way to tilt the umbrella"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 16.4, 29.8, 41.9, 50.7, 60.3, 71.3, 82.0]):
 *  0 heading + problem
 *  1 the trap: direction, not arithmetic
 *  2 subtract v_man → add its negative (west)
 *  3 the apparent rain slants from ahead (diagram)
 *  4 so he tilts FORWARD
 *  5 the angle: tanφ = 1 → 45°
 *  6 ANSWER box (angle + direction)
 *  7 the rule of thumb
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | bar M66 108 v44 · lines st x84 bl 126 / 150 s12
 *  b2 | st x84 bl 194 s13
 *  b3 | O(230,250) · rain ↓(230,370) lbl st (242,320) · −vman ←(230,370)→(130,370)
 *       lbl cx180 bl 394 · apparent (230,250)→(130,370) green lbl end (120,300) ·
 *       caption cx220 bl 424 s11
 *  b4 | walker (620,420) head r8 + body · walk arrow (640,440)→(700,440) lbl cx670 bl 464 ·
 *       umbrella tilt line M620 412 L 690 356 amber sw3 · lbl st (700,352) s11
 *  b5 | st x84 bl 470 s14
 *  b6 | box x84..520 y494..540 text cx302 bl 526 s15
 *  b7 | bar M566 490 v52 · lines st x580 bl 508 / 532 s12
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

export default function Ch03Sec59({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "NEET TRAP — which way to tilt the umbrella?",
            "NEET TRAP — chhata kis taraf jhukayein?"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "rain falls vertically at 10 m/s · a man walks east at 10 — angle and direction?",
            "baarish seedhi 10 m/s girti hai · aadmi east mein 10 par chalta hai — angle aur disha?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the trap */}
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d="M 66 108 v 44" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={84} y={126} size={12} fill={RED} script anchor="start">
          {t(
            "the trap is DIRECTION, not arithmetic — the angle is the easy half",
            "trap DISHA ka hai, arithmetic ka nahi — angle to aasaan hissa hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={84} y={150} size={12} fill={RED} script anchor="start">
          {t(
            "students tilt it backward, or feed the wrong velocity into the ratio",
            "log ise peechhe jhuka dete hain, ya ratio mein galat velocity daal dete hain"
          )}
        </T>
      </Fade>

      {/* beat 2 — subtract by adding the negative */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={84} y={194} size={13} fill={INK} script anchor="start">
          {t(
            "rain relative to the man = v(rain) − v(man) → add −v(man), which points WEST",
            "aadmi ke sapeksh baarish = v(rain) − v(man) → −v(man) jodo, jo WEST ki taraf hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — the vector picture */}
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <Circle cx={230} cy={250} r={4.5} fill={INK} />
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.2)} d={arrowD(230, 250, 230, 370)} stroke={INK} sw={2.8} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={242} y={320} size={12} fill={INK} weight={700} anchor="start">v rain</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.8)} d={arrowD(230, 370, 130, 370)} stroke={AMBER_DARK} sw={2.8} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 3.6)}>
        <T x={180} y={394} size={12} fill={AMBER_DARK} weight={700}>−v man</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 4.6)} d={arrowD(230, 250, 130, 370)} stroke={GREEN} sw={3} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 5.4)}>
        <T x={120} y={300} size={12} fill={GREEN} weight={800} anchor="end">
          {t("apparent rain", "dikhne wali baarish")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7.5)}>
        <T x={220} y={424} size={11} fill={GREEN} script>
          {t(
            "it now comes from AHEAD — from the east he walks into",
            "ab yeh SAAMNE se aati hai — usi east se jidhar woh chal raha hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — so tilt forward */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <Circle cx={620} cy={420} r={8} fill="none" stroke={INK} strokeWidth={2.2} />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 620 428 V 470" stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 1.8)} d={arrowD(640, 462, 700, 462)} stroke={INK_LIGHT} sw={2.2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <T x={670} y={486} size={11} fill={INK_LIGHT} script>
          {t("walks east", "east chalta hai")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 3.2)} d="M 620 412 L 690 356" stroke={AMBER} sw={3.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={700} y={352} size={11} fill={AMBER_DARK} script anchor="start">
          {t("tilt FORWARD, into it", "AAGE jhukao, usi mein")}
        </T>
      </Fade>

      {/* beat 5 — the angle */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={84} y={470} size={14} fill={INK} weight={700} anchor="start">
          tan φ = v man ⁄ v rain = 10 ⁄ 10 = 1
        </T>
      </Fade>

      {/* beat 6 — the answer */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.6)}
        d="M 96 494 h 412 q 12 0 12 12 v 22 q 0 12 -12 12 h -412 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={302} y={526} size={15} fill={INK} weight={800}>
          {t("45° from vertical, tilted EAST", "vertical se 45°, EAST ki taraf")}
        </T>
      </Fade>

      {/* beat 7 — the rule of thumb */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 566 490 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={580} y={508} size={12} fill={GREEN} script anchor="start">
          {t(
            "rule of thumb: always tilt INTO the apparent rain — the way you walk",
            "pakka niyam: hamesha dikhne wali baarish ki taraf jhukao — jidhar tum chal rahe ho"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={580} y={532} size={12} fill={INK} script anchor="start">
          {t(
            "the arithmetic is easy — the forward direction is what is being tested",
            "arithmetic aasaan hai — asli test aage waali disha ka hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
