/**
 * Ch04 · Section 6 — "Derivation: conservation of momentum from the Third Law"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.5, 20.6, 32.7, 47.2, 58.9, 71.9, 85.9]):
 *  0 title
 *  1 dashed isolated boundary + bodies A, B + ISOLATED label
 *  2 third-law pair arrows (B→right, A→left) + labels
 *  3 right col: second law on each body (two equations)
 *  4 add them + "left side = pair = EXACTLY 0" red note
 *  5 hero box: d/dt(p_A+p_B)=0 ⇒ constant + conserved label
 *  6 red margin: individuals wild, sum still
 *  7 amber chip: recoil · explosion · collision tool
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52
 *  boundary dashed x120..560 y95..235 · A c(240,165) r26 · B c(440,165) r26 ·
 *  arrows (474,165)→(540,165) / (206,165)→(140,165) · F lbls cx507/cx173 bl 140 ·
 *  ISOLATED lbl cx340 bl 258
 *  R col | eq1 st x620 bl 120 · eq2 bl 152 · "add" bl 186 · eq3 bl 214 ·
 *    red note bl 246
 *  hero box x270..790 y290..342 bl 323 · conserved lbl cx530 bl 368
 *  b6 | bar x66 y400..470 · lines st x84 bl 420 / 446
 *  b7 | chip x300..780 y500..536
 */

import React from "react";
import { Path } from 'react-native-svg';
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

export default function Ch04Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — fuse the two laws */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "CBSE Derivation 3 — Conservation of Momentum",
            "CBSE Derivation 3 — Conservation of Momentum"
          )}
        </T>
      </Fade>

      {/* beat 1 — the isolated system */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <Path
          d="M 132 95 h 416 q 12 0 12 12 v 116 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -116 q 0 -12 12 -12"
          fill="none"
          stroke={AMBER}
          strokeWidth={2.2}
          strokeDasharray="9 7"
        />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 2)}
        d={circleD(240, 165, 26)}
        stroke={INK}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={240} y={172} size={18} fill={INK} weight={800}>
          A
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3)}
        d={circleD(440, 165, 26)}
        stroke={INK}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.6)}>
        <T x={440} y={172} size={18} fill={INK} weight={800}>
          B
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <T x={340} y={258} size={13} fill={AMBER_DARK} script>
          {t(
            "ISOLATED — nothing outside may touch them",
            "ISOLATED — bahar se koi chhoo nahi sakta"
          )}
        </T>
      </Fade>

      {/* beat 2 — the pair appears */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 1)}
        d={arrowD(474, 165, 540, 165)}
        stroke={RED}
        sw={3}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={507} y={140} size={12} fill={RED} weight={700}>
          F_AB
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 3)}
        d={arrowD(206, 165, 140, 165)}
        stroke={RED}
        sw={3}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.8)}>
        <T x={173} y={140} size={12} fill={RED} weight={700}>
          F_BA
        </T>
      </Fade>

      {/* beat 3 — second law on each body */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={620} y={120} size={16} fill={INK} weight={700} anchor="start">
          F_AB = dp_B⁄dt
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.5)}>
        <T x={620} y={152} size={16} fill={INK} weight={700} anchor="start">
          F_BA = dp_A⁄dt
        </T>
      </Fade>

      {/* beat 4 — add, and the left side dies */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={620} y={186} size={12} fill={AMBER_DARK} script anchor="start">
          {t("add them:", "dono ko jodo:")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={620} y={214} size={16} fill={INK} weight={700} anchor="start">
          F_AB + F_BA = d(p_A + p_B)⁄dt
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={620} y={246} size={13} fill={RED} script anchor="start">
          {t(
            "left side = a Third-Law pair = EXACTLY 0",
            "baayi side = Third-Law pair = bilkul 0"
          )}
        </T>
      </Fade>

      {/* beat 5 — the most powerful tool in mechanics */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 282 290 h 496 q 12 0 12 12 v 28 q 0 12 -12 12 h -496 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={530} y={323} size={19} fill={INK} weight={800}>
          d⁄dt (p_A + p_B) = 0&nbsp;&nbsp;⇒&nbsp;&nbsp;p_A + p_B = constant
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={530} y={368} size={14} fill={GREEN} script>
          {t(
            "no external force → total momentum CONSERVED",
            "koi external force nahi → total momentum CONSERVED"
          )}
        </T>
      </Fade>

      {/* beat 6 — strange, and true */}
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d="M 66 400 v 62" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <T x={84} y={420} size={14} fill={RED} script anchor="start">
          {t(
            "during the interaction, p_A and p_B change WILDLY",
            "interaction ke dauraan p_A aur p_B buri tarah badalte hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6.5)}>
        <T x={84} y={446} size={14} fill={RED} script anchor="start">
          {t(
            "their SUM does not budge by a whisker",
            "par unka SUM ratti bhar nahi hilta"
          )}
        </T>
      </Fade>

      {/* beat 7 — from here on, we simply use it */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <Chip x={300} y={500} w={480} h={36} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={15}>
          {t(
            "every recoil · explosion · collision — this is the tool",
            "har recoil · explosion · collision — yahi tool hai"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
