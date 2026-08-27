/**
 * Ch05 · Section 17 — "Pitfalls, and the sign-first reflex" (tips)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.3, 36.1, 60.9, 79.2, 95.7, 113.4, 138.2, 163.1] · dur 182.2;
 *        hi [0, 11.7, 36.5, 61.4, 78.9, 96.8, 116.5, 140.7, 165.6] · dur 186.5):
 *  0 title + subtitle
 *  1 P1: one force's work ≠ ΔK
 *  2 P2: dropping the sign
 *  3 P3: truck-bed demo (box, friction forward, box moves)
 *  4 static friction does + work
 *  5 repair chip: opposes relative SLIPPING
 *  6 P4: frame-dependent
 *  7 reflex band: sign first
 *  8 speed unchanged → 0 + SAD angle chips
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl82
 *  P1: lbl st x80 bl116 · red bl144 · green bl170 (st x90)
 *  P2: lbl bl212 · red bl240 · ink bl266 · muted bl292
 *  P3: lbl st x570 bl116 · bed (580,240)-(940,240) · wheels (650/870,256) r10
 *   box x680..760 y196..238 · f arrow (688,230)→(744,230) · f lbl cx715 bl285
 *   accel (950,220)→(1010,220) · "a" st x1020 bl225 · d arrow (680,170)→(770,170)
 *   d lbl st x795 bl175
 *  b4 st x570 bl315 · muted bl341 · b5 chip x570..1020 y360..398 · script cx795 bl424
 *  P4: lbl st x80 bl340 · script bl368 · red bl394
 *  b7 | bar x66 y440..500 · lines st x84 bl460 / bl486
 *  b8 | l1 st x84 bl530 · "SAD angles:" st x480 bl530 · chips y548..584:
 *      x600..710 / x730..850 / x870..1000
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Pitfalls & the Sign-First Reflex", "Pitfalls & the Sign-First Reflex")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t(
            "four marks people lose on questions they understood",
            "chaar marks jo log samjhe hue sawaalon par gawaate hain"
          )}
        </T>
      </Fade>

      {/* beat 1 — P1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={80} y={116} size={13} fill={RED} script anchor="start">
          {t("pitfall 1 — one force's work ≠ ΔK", "pitfall 1 — akela force ≠ ΔK")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={90} y={144} size={13} fill={RED} script anchor="start">
          {t(
            "'W_gravity = ΔK' with friction also acting — simply false",
            "friction ke rehte 'W_gravity = ΔK' — seedha galat"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 14)}>
        <T x={90} y={170} size={13} fill={GREEN} script anchor="start">
          {t(
            "NET = sum over ALL forces, or find net F first",
            "NET = SAB forces ka jod, ya pehle net F nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 2 — P2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={80} y={212} size={13} fill={RED} script anchor="start">
          {t("pitfall 2 — dropping the sign", "pitfall 2 — sign gira dena")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={90} y={240} size={13} fill={RED} script anchor="start">
          {t(
            "a quiet modulus — but cos θ can be negative",
            "chupchaap modulus — par cos θ negative bhi hota hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 10)}>
        <T x={90} y={266} size={13} fill={INK} script anchor="start">
          {t(
            "−W is physically real: energy being REMOVED",
            "−W physically asli hai: energy NIKALI ja rahi hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 17)}>
        <T x={90} y={292} size={12.5} fill={MUTED} script anchor="start">
          {t(
            "a lost minus corrupts everything downstream",
            "giraya hua minus aage ka sab kharab karta hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — P3: the truck bed */}
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={570} y={116} size={13} fill={RED} script anchor="start">
          {t("pitfall 3 — the big one", "pitfall 3 — sabse bada")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.5)} d="M 580 240 H 940" stroke={INK} sw={2.6} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 2.3)}>
        <Circle cx={650} cy={256} r={10} fill="none" stroke={INK} strokeWidth={2.2} />
        <Circle cx={870} cy={256} r={10} fill="none" stroke={INK} strokeWidth={2.2} />
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 3)} d="M 680 238 v -36 q 0 -6 6 -6 h 68 q 6 0 6 6 v 36" stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 4.5)} d={arrowD(950, 220, 1010, 220)} stroke={AMBER} sw={2.6} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 5.2)}>
        <T x={1020} y={225} size={13} fill={AMBER_DARK} anchor="start" weight={700}>
          a
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 8)} d={arrowD(680, 170, 770, 170)} stroke={AMBER} sw={2.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 8.7)}>
        <T x={795} y={175} size={12.5} fill={AMBER_DARK} script anchor="start">
          {t("box moves forward", "box aage jaata hai")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 11)} d={arrowD(688, 230, 744, 230)} stroke={GREEN} sw={3} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 12)}>
        <T x={715} y={285} size={13} fill={GREEN} script>
          {t("f — static friction, forward", "f — static friction, aage")}
        </T>
      </Fade>

      {/* beat 4 — + work by static friction */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={570} y={315} size={13} fill={GREEN} script anchor="start">
          {t(
            "static friction does + work — it ALONE accelerates the box",
            "static friction + work karta hai — AKELA wahi box ko accelerate karta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 9)}>
        <T x={570} y={341} size={12.5} fill={MUTED} script anchor="start">
          {t("same as your foot when you walk forward", "aage chalte waqt aapke pair jaisa hi")}
        </T>
      </Fade>

      {/* beat 5 — the repair sentence */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <Chip x={570} y={360} w={450} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={14} script={false}>
          {t(
            "friction opposes relative SLIPPING — not motion",
            "friction relative SLIPPING ka virodhi hai — motion ka nahi"
          )}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <T x={795} y={424} size={13} fill={GREEN} script>
          {t(
            "it isn't fighting the box — it's carrying it",
            "wo box se lad nahi raha — use le ja raha hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — P4: frames */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={80} y={340} size={13} fill={RED} script anchor="start">
          {t("pitfall 4 — work is frame-dependent", "pitfall 4 — work frame-dependent hai")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <T x={90} y={368} size={12.5} fill={INK} script anchor="start">
          {t(
            "lifts, trains, wedges: displacement changes with the observer",
            "lifts, trains, wedges: displacement observer ke saath badalta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 12)}>
        <T x={90} y={394} size={12.5} fill={RED} script anchor="start">
          {t(
            "no universal answer — pick ONE frame, stay inside it",
            "koi universal answer nahi — EK frame chuno, usi mein raho"
          )}
        </T>
      </Fade>

      {/* beat 7 — the sign-first reflex */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 440 v 60" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={84} y={460} size={13} fill={GREEN} script anchor="start">
          {t(
            "ask the SIGN first: along +, against −, perpendicular 0",
            "pehle SIGN poochho: along +, khilaf −, perpendicular 0"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={84} y={486} size={13} fill={GREEN} script anchor="start">
          {t(
            "kills N, kills tension (circular), kills gravity (horizontal) — one-liners",
            "N mara, tension mara (circular), gravity mari (horizontal) — one-liners"
          )}
        </T>
      </Fade>

      {/* beat 8 — free result + SAD angles */}
      <Fade on={beat >= 8} delay={dl(8, 1.5)}>
        <T x={84} y={530} size={13} fill={GREEN} script anchor="start">
          {t(
            "speed unchanged → W_net = 0, free",
            "speed nahi badli → W_net = 0, muft"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 6)}>
        <T x={480} y={530} size={13} fill={AMBER_DARK} script anchor="start">
          SAD angles:
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <Chip x={600} y={548} w={110} h={34} fill={CREAM} stroke={GREEN} textFill={INK} size={13} script={false}>
          Same → +
        </Chip>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 10)}>
        <Chip x={730} y={548} w={120} h={34} fill={CREAM} stroke={RED} textFill={INK} size={13} script={false}>
          Against → −
        </Chip>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 12)}>
        <Chip x={870} y={548} w={130} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          Dead ⊥ → 0
        </Chip>
      </Fade>
    </Scene>
  );
}
