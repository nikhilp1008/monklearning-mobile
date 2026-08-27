/**
 * Ch04 · Section 17 — "Derivation: thrust on a rocket"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.0, 27.9, 43.0, 60.3, 69.2, 84.8, 98.7, 114.4]):
 *  0 title
 *  1 figure: rocket at t (m, v) · at t+dt (m+dm, v+dv) + gas puffs backward
 *  2 conservation equation + system note
 *  3 red margin: dm negative · ground-frame speed · sign flips
 *  4 expand note: drop dm·dv
 *  5 green box: m dv/dt = −v_rel dm/dt + THRUST note
 *  6 reading: two levers only
 *  7 rocket equation box
 *  8 red margin: throws mass backward — works in vacuum
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52
 *  fig | rocketL body x130..200 y102..128 nose→225 fins · "m, v →" cx170 bl 152
 *    rocketR body x420..490 nose→515 · puffs c(388/372/357,115) ·
 *    gasArr (350,115)→(310,115) · gas lbl cx350 bl 152 · R lbl cx490 bl 152
 *  b2 eq st x120 bl 205 · note st x560 bl 205
 *  b3 | bar x66 y230..300 · lines st x84 bl 250 / 274 / 296
 *  b4 st x120 bl 330
 *  b5 box x120..560 y345..390 bl 374 · note st x580 bl 374
 *  b6 st x120 bl 424
 *  b7 box x620..1000 y440..488 bl 470 · lbl cx810 bl 428
 *  b8 | bar x66 y505..575 · lines st x84 bl 525 / 551
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
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

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

export default function Ch04Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const rocket = (x: number) =>
    `M ${x} 102 h 70 M ${x} 128 h 70 M ${x} 102 v 26 M ${x + 70} 102 L ${x + 95} 115 L ${
      x + 70
    } 128 M ${x} 102 l -12 -8 M ${x} 128 l -12 8`;

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t(
            "CBSE Derivation — thrust on a rocket",
            "CBSE Derivation — rocket ka thrust"
          )}
        </T>
      </Fade>

      {/* beat 1 — careful bookkeeping */}
      <Draw on={beat >= 1} delay={dl(1, 1)} d={rocket(130)} stroke={INK} sw={2.4} dur={0.9} />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={170} y={152} size={13} fill={INK} script>
          {t("at t:  m, v →", "t par:  m, v →")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.5)} d={rocket(420)} stroke={INK} sw={2.4} dur={0.9} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 4.5)}
        d={`${circleD(388, 115, 5)} ${circleD(372, 115, 4)} ${circleD(357, 115, 3)}`}
        stroke={RED}
        sw={2}
        dur={0.5}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 5.2)}
        d={arrowD(348, 115, 310, 115)}
        stroke={RED}
        sw={2.2}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 5.8)}>
        <T x={350} y={152} size={13} fill={RED} script>
          {t("gas out: v − v_rel", "gas bahar: v − v_rel")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6.8)}>
        <T x={490} y={152} size={13} fill={GREEN} script>
          m + dm, v + dv
        </T>
      </Fade>

      {/* beat 2 — conserve for the whole system */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={120} y={205} size={16} fill={INK} weight={700} anchor="start">
          m·v = (m + dm)(v + dv) + (−dm)(v − v_rel)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={560} y={205} size={12} fill={MUTED} script anchor="start">
          {t(
            "before = after · system = rocket + gas",
            "pehle = baad · system = rocket + gas"
          )}
        </T>
      </Fade>

      {/* beat 3 — the two details */}
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d="M 66 230 v 72" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={84} y={250} size={13} fill={RED} script anchor="start">
          {t(
            "detail 1: dm is NEGATIVE — the rocket loses mass",
            "detail 1: dm NEGATIVE hai — rocket mass kho raha hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={84} y={274} size={13} fill={RED} script anchor="start">
          {t(
            "detail 2: the gas moves at v − v_rel in the GROUND frame",
            "detail 2: gas GROUND frame mein v − v_rel par jaati hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 11)}>
        <T x={84} y={296} size={13} fill={RED} script anchor="start">
          {t(
            "get either wrong → the sign of your thrust flips",
            "koi ek galat → thrust ka sign palat jaayega"
          )}
        </T>
      </Fade>

      {/* beat 4 — expand */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={120} y={330} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "expand · discard dm·dv — a small number times a small number",
            "expand karo · dm·dv chhodo — chhoti sankhya guna chhoti sankhya"
          )}
        </T>
      </Fade>

      {/* beat 5 — thrust */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 132 345 h 416 q 12 0 12 12 v 21 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -21 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={340} y={374} size={18} fill={INK} weight={800}>
          m·dv⁄dt = −v_rel·dm⁄dt
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={580} y={374} size={12} fill={GREEN} script anchor="start">
          {t("right side = the THRUST", "daayi side = THRUST")}
        </T>
      </Fade>

      {/* beat 6 — the two levers */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={120} y={424} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "thrust = v_rel × (dm⁄dt) — eject FASTER, or eject QUICKER; the only two levers",
            "thrust = v_rel × (dm⁄dt) — TEZ phenko, ya JALDI-JALDI phenko; bas do levers"
          )}
        </T>
      </Fade>

      {/* beat 7 — the rocket equation */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={810} y={428} size={12} fill={MUTED} script>
          {t("integrate (no gravity) → the rocket equation", "integrate (gravity chhodkar) → rocket equation")}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 2.5)}
        d="M 632 440 h 356 q 12 0 12 12 v 24 q 0 12 -12 12 h -356 q -12 0 -12 -12 v -24 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 3.5)}>
        <T x={810} y={470} size={17} fill={INK} weight={800}>
          v − v₀ = v_rel · ln(m₀⁄m)
        </T>
      </Fade>

      {/* beat 8 — why rockets work in vacuum */}
      <Draw on={beat >= 8} delay={dl(8, 0.6)} d="M 66 505 v 62" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={525} size={14} fill={RED} script anchor="start">
          {t(
            "no air needed — a rocket climbs by THROWING MASS BACKWARD",
            "hawa ki zaroorat nahi — rocket MASS PEECHHE PHENK kar chadhta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <T x={84} y={551} size={14} fill={GREEN} script anchor="start">
          {t(
            "conservation in its rawest form — that is why rockets work in vacuum",
            "conservation ka sabse kaccha roop — isiliye rockets vacuum mein chalte hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
