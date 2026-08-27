/**
 * Ch04 · Section 14 — "Three families of problems, and the elastic question"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.1, 23.2, 40.0, 41.0, 50.2, 64.7, 77.5, 91.9]):
 *  0 title
 *  1 card 1: recoil & explosions
 *  2 card 2: collisions
 *  3 card 3: variable mass (JEE Adv)
 *  4 heading + underline: elastic vs inelastic
 *  5 red margin: momentum conserved in EVERY collision
 *  6 elastic line + bouncing-coins doodle
 *  7 inelastic line + crumple zigzag
 *  8 perfectly inelastic line + stuck-lump doodle + closing
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · cards y84..180 at x70/x390/x710 w300:
 *    header st +16 bl 112 · desc bl 140 · examples bl 164
 *  b4 heading cx540 bl 250 · underline M400 262 h280
 *  b5 | bar x66 y275..330 · lines st x84 bl 295 / 320
 *  b6 line st x84 bl 368 · coins c(640,363)/(676,363) r8, arrows out
 *  b7 line st x84 bl 408 · zigzag x760..800 y~403
 *  b8 line st x84 bl 448 · lump c(690,442)/(704,442) r8 + arrow · closing cx540 bl 492
 */

import React from "react";
import { G } from 'react-native-svg';
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
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

function card(x: number) {
  return `M ${x + 12} 84 h 276 q 12 0 12 12 v 72 q 0 12 -12 12 h -276 q -12 0 -12 -12 v -72 q 0 -12 12 -12`;
}

export default function Ch04Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const fam = (
    k: number,
    x: number,
    header: string,
    desc: string,
    ex: string
  ) => (
    <G>
      <Draw on={beat >= k} delay={dl(k, 0.6)} d={card(x)} stroke={AMBER} sw={2} dur={0.5} />
      <Fade on={beat >= k} delay={dl(k, 1.2)}>
        <T x={x + 16} y={112} size={14} fill={AMBER_DARK} script anchor="start">
          {header}
        </T>
      </Fade>
      <Fade on={beat >= k} delay={dl(k, 3)}>
        <T x={x + 16} y={140} size={12} fill={INK} script anchor="start">
          {desc}
        </T>
      </Fade>
      <Fade on={beat >= k} delay={dl(k, 6)}>
        <T x={x + 16} y={164} size={11} fill={MUTED} script anchor="start">
          {ex}
        </T>
      </Fade>
    </G>
  );

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "what conservation cracks open — three families",
            "conservation kya-kya khol deta hai — teen families"
          )}
        </T>
      </Fade>

      {/* beats 1–3 — the families */}
      {fam(
        1,
        70,
        t("1 · RECOIL & EXPLOSIONS", "1 · RECOIL & EXPLOSIONS"),
        t("one body → many, flying apart", "ek body → kai, udti hui alag"),
        t("rifle · rocket · bursting shell", "rifle · rocket · phat'ta shell")
      )}
      {fam(
        2,
        390,
        t("2 · COLLISIONS", "2 · COLLISIONS"),
        t("two meet, then separate — or stick", "do milti hain, alag — ya chipak jaati"),
        t("carrom · wagons · bullet in block", "carrom · wagons · block mein bullet")
      )}
      {fam(
        3,
        710,
        t("3 · VARIABLE MASS", "3 · VARIABLE MASS"),
        t("mass changes while it moves", "chalte-chalte mass badalta hai"),
        t("rockets · chains · raindrops — JEE Adv", "rockets · chains · raindrops — JEE Adv")
      )}

      {/* beat 4 — the companion idea */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={540} y={250} size={16} fill={AMBER_DARK} script>
          {t(
            "companion idea: ELASTIC vs INELASTIC",
            "companion idea: ELASTIC vs INELASTIC"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2)} d="M 400 262 h 280" stroke={AMBER} sw={2.6} dur={0.4} />

      {/* beat 5 — momentum always */}
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d="M 66 275 v 55" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={84} y={295} size={14} fill={RED} script anchor="start">
          {t(
            "momentum: conserved in EVERY collision (brief impact, F_ext negligible)",
            "momentum: HAR collision mein conserved (chhota impact, F_ext negligible)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={84} y={320} size={14} fill={RED} script anchor="start">
          {t(
            "no exception at this level — none",
            "is level par koi exception nahi — bilkul nahi"
          )}
        </T>
      </Fade>

      {/* beat 6 — elastic */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={84} y={368} size={14} fill={GREEN} script anchor="start">
          {t(
            "perfectly ELASTIC: KE conserved too — carrom coins · billiard balls",
            "perfectly ELASTIC: KE bhi conserved — carrom coins · billiard balls"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 4)}
        d={`${circleD(640, 363, 8)} ${circleD(676, 363, 8)}`}
        stroke={GREEN}
        sw={2.2}
        dur={0.4}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 4.8)}
        d={`${arrowD(628, 363, 604, 363)} ${arrowD(688, 363, 712, 363)}`}
        stroke={GREEN}
        sw={2}
        dur={0.4}
      />

      {/* beat 7 — inelastic */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={84} y={408} size={14} fill={RED} script anchor="start">
          {t(
            "real crunch: cars crumple · clay on wall — KE → heat + sound = INELASTIC",
            "asli takkar: cars kuchalti · deewar par clay — KE → heat + sound = INELASTIC"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 5)}
        d="M 790 403 l 8 -10 l 8 10 l 8 -10 l 8 10"
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />

      {/* beat 8 — perfectly inelastic + closing */}
      <Fade on={beat >= 8} delay={dl(8, 1)}>
        <T x={84} y={448} size={14} fill={RED} script anchor="start">
          {t(
            "stick & move as one lump = PERFECTLY inelastic — max KE lost",
            "chipak kar ek dhela = PERFECTLY inelastic — sabse zyada KE gayi"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 8}
        delay={dl(8, 4)}
        d={`${circleD(690, 442, 8)} ${circleD(704, 442, 8)}`}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Draw
        on={beat >= 8}
        delay={dl(8, 4.8)}
        d={arrowD(718, 442, 748, 442)}
        stroke={RED}
        sw={2}
        dur={0.3}
      />
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <T x={540} y={492} size={14} fill={GREEN} script>
          {t(
            "keep the labels sharp — the next examples turn on them",
            "labels ko dhaar par rakho — agle examples inhi par ghoomte hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
