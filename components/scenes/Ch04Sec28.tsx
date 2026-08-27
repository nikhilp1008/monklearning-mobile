/**
 * Ch04 · Section 28 — "Derivation: Lami's theorem from the triangle law"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.7, 37.7, 55.0, 74.6, 95.2, 119.3, 140.5]):
 *  0 title
 *  1 setup lines
 *  2 star panel + head-to-tail triangle panel (P=(-80,-60) Q=(80,-60) R=(0,120))
 *  3 closure notes (right col)
 *  4 orientation-flip notes (right col)
 *  5 sine rule with supplementary angles
 *  6 hero box: identity collapses → Lami
 *  7 red margin: one line + pairing price
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · setup st x84 bl 92 / 116
 *  star | pt (220,250) · P→(140,190) Q→(300,190) R→(220,360)
 *  mid arrow (350,250)→(450,250) "head to tail" cx400 bl 232
 *  tri | (560,320)→(480,260)→(560,200)→(560,320) · P(452,255) Q(505,215) R(576,266)
 *  b3 | st x640 bl 180 / 204 · b4 | st x640 bl 250 / 274
 *  b5 st x84 bl 420 · b6 box x96..660 y440..488 bl 470
 *  b7 | bar x66 y510..575 · lines st x84 bl 530 / 556
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
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.5)}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t(
            "CBSE Derivation — Lami's theorem: the sine rule in a physics costume",
            "CBSE Derivation — Lami's theorem: sine rule, physics ke libaas mein"
          )}
        </T>
      </Fade>

      {/* beat 1 — the setup */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "P, Q, R: concurrent + coplanar, acting on a particle in equilibrium",
            "P, Q, R: concurrent + coplanar, particle par equilibrium mein"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "α between Q & R · β between R & P · γ between P & Q — each sits opposite its force",
            "α: Q–R ke beech · β: R–P ke beech · γ: P–Q ke beech — har ek apni force ke saamne"
          )}
        </T>
      </Fade>

      {/* beat 2 — star becomes triangle */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <Circle cx={220} cy={250} r={4} fill={INK} />
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.4)}
        d={arrowD(220, 250, 140, 190)}
        stroke={AMBER}
        sw={2.6}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2)}
        d={arrowD(220, 250, 300, 190)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.6)}
        d={arrowD(220, 250, 220, 360)}
        stroke={RED}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <T x={130} y={182} size={14} fill={AMBER_DARK} weight={700}>
          P
        </T>
        <T x={310} y={182} size={14} fill={GREEN} weight={700}>
          Q
        </T>
        <T x={236} y={356} size={14} fill={RED} weight={700} anchor="start">
          R
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 4.5)}
        d={arrowD(350, 250, 450, 250)}
        stroke={MUTED}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={400} y={232} size={12} fill={MUTED} script>
          {t("head to tail", "head to tail")}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 6)}
        d={arrowD(560, 320, 480, 260)}
        stroke={AMBER}
        sw={2.6}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 6.8)}
        d={arrowD(480, 260, 560, 200)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 7.6)}
        d={arrowD(560, 200, 560, 320)}
        stroke={RED}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 8.4)}>
        <T x={452} y={255} size={13} fill={AMBER_DARK} weight={700} anchor="end">
          P
        </T>
        <T x={505} y={215} size={13} fill={GREEN} weight={700}>
          Q
        </T>
        <T x={576} y={266} size={13} fill={RED} weight={700} anchor="start">
          R
        </T>
      </Fade>

      {/* beat 3 — the closure IS the physics */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={660} y={180} size={13} fill={GREEN} script anchor="start">
          {t(
            "equilibrium ⇒ the chain CLOSES — no gap",
            "equilibrium ⇒ chain BAND ho jaati hai — koi gap nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={660} y={204} size={13} fill={INK} script anchor="start">
          {t(
            "sides parallel to P, Q, R — and proportional to them",
            "bhujayen P, Q, R ke parallel — aur unke proportional"
          )}
        </T>
      </Fade>

      {/* beat 4 — the orientation flip */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={660} y={250} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "head-to-tail FLIPS the relative orientation:",
            "head-to-tail relative orientation ULAT deta hai:"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={660} y={274} size={14} fill={INK} weight={700} anchor="start">
          {t(
            "angle opposite side P = 180° − α",
            "side P ke saamne ka angle = 180° − α"
          )}
        </T>
      </Fade>

      {/* beat 5 — sine rule */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={84} y={420} size={15} fill={INK} weight={700} anchor="start">
          {t(
            "sine rule:  P⁄sin(180°−α) = Q⁄sin(180°−β) = R⁄sin(180°−γ)",
            "sine rule:  P⁄sin(180°−α) = Q⁄sin(180°−β) = R⁄sin(180°−γ)"
          )}
        </T>
      </Fade>

      {/* beat 6 — the identity finishes it */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 96 440 h 552 q 12 0 12 12 v 24 q 0 12 -12 12 h -552 q -12 0 -12 -12 v -24 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={372} y={470} size={16} fill={INK} weight={800}>
          sin(180°−θ) = sinθ&nbsp;&nbsp;⇒&nbsp;&nbsp;P⁄sinα = Q⁄sinβ = R⁄sinγ
        </T>
      </Fade>

      {/* beat 7 — what we bought */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 510 v 58" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={530} size={14} fill={GREEN} script anchor="start">
          {t(
            "one line, no axes, no components — the fastest tool in the chapter",
            "ek line, na axes, na components — chapter ka sabse tez tool"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={556} size={14} fill={RED} script anchor="start">
          {t(
            "the only price: pair each force with the angle between the OTHER two",
            "keemat bas itni: har force ki jodi BAAKI DO ke beech waale angle se"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
