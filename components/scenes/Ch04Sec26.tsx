/**
 * Ch04 · Section 26 — "Lami's theorem, and the rules that come with it"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 17.2, 34.0, 51.7, 68.8, 92.9, 109.8, 132.4]):
 *  0 title
 *  1 figure: P, Q, R arrows from a point + angle labels α β γ
 *  2 everyday examples line
 *  3 hero box: P/sinα = Q/sinβ = R/sinγ + one-line note
 *  4 red bar: α is OPPOSITE P — love the angle across
 *  5 360° margin check line
 *  6 red bar: strings only pull, negative tension = slack
 *  7 fine print lines
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52
 *  fig | point (250,220) · P→(150,130) Q→(360,140) R→(250,330) ·
 *    "P"(140,120) "Q"(372,132) "R"(264,326 st) · γ(250,150) β(198,258) α(307,248)
 *    examples cx250 bl 365
 *  b3 box x520..960 y110..162 bl 143 · note cx740 bl 188
 *  b4 | bar x520 y215..280 · lines st x538 bl 235 / 259
 *  b5 | st x538 bl 310 + note st x760 bl 310
 *  b6 | bar x66 y400..465 · lines st x84 bl 420 / 444
 *  b7 | lines st x84 bl 500 / 524
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

export default function Ch04Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.5)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "three forces? then you have a one-line shortcut",
            "teen forces? to aapke paas ek-line ka shortcut hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — the three-force point */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <Circle cx={250} cy={220} r={4.5} fill={INK} />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.4)}
        d={arrowD(250, 220, 150, 130)}
        stroke={AMBER}
        sw={2.8}
        dur={0.5}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.2)}
        d={arrowD(250, 220, 360, 140)}
        stroke={GREEN}
        sw={2.8}
        dur={0.5}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3)}
        d={arrowD(250, 220, 250, 330)}
        stroke={RED}
        sw={2.8}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        <T x={140} y={120} size={15} fill={AMBER_DARK} weight={700}>
          P
        </T>
        <T x={372} y={132} size={15} fill={GREEN} weight={700} anchor="start">
          Q
        </T>
        <T x={266} y={326} size={15} fill={RED} weight={700} anchor="start">
          R
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={250} y={150} size={14} fill={INK} weight={700}>
          γ
        </T>
        <T x={198} y={262} size={14} fill={INK} weight={700}>
          β
        </T>
        <T x={309} y={252} size={14} fill={INK} weight={700}>
          α
        </T>
      </Fade>

      {/* beat 2 — it is everywhere */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={250} y={365} size={12} fill={MUTED} script>
          {t(
            "weight on 2 strings · lamp on 2 ropes · bob + a push — everywhere",
            "2 strings par weight · 2 ropes par lamp · bob + push — har jagah"
          )}
        </T>
      </Fade>

      {/* beat 3 — the theorem */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.8)}
        d="M 532 110 h 416 q 12 0 12 12 v 28 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={740} y={143} size={20} fill={INK} weight={800}>
          P⁄sin α = Q⁄sin β = R⁄sin γ
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={740} y={188} size={12} fill={GREEN} script>
          {t(
            "Lami's theorem — one chain of equalities, done",
            "Lami's theorem — equalities ki ek chain, khatam"
          )}
        </T>
      </Fade>

      {/* beat 4 — read the angles right */}
      <Draw on={beat >= 4} delay={dl(4, 0.6)} d="M 520 215 v 58" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={538} y={235} size={13} fill={RED} script anchor="start">
          {t(
            "α = angle between the OTHER two (Q, R) — the one OPPOSITE P",
            "α = baaki DO (Q, R) ke beech ka angle — jo P ke SAAMNE hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 12)}>
        <T x={538} y={259} size={13} fill={RED} script anchor="start">
          {t(
            "each force loves the angle ACROSS from it",
            "har force ko apne SAAMNE waala angle pyaara hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — the 360° check */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={538} y={310} size={15} fill={INK} weight={700} anchor="start">
          α + β + γ = 360°
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={720} y={310} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "margin check — catch misread geometry EARLY",
            "margin check — galat geometry JALDI pakdo"
          )}
        </T>
      </Fade>

      {/* beat 6 — strings only pull */}
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d="M 66 400 v 58" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={420} size={14} fill={RED} script anchor="start">
          {t(
            "strings and cords can only PULL — never push",
            "strings aur cords sirf KHEENCH sakti hain — dhakel kabhi nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={84} y={444} size={14} fill={RED} script anchor="start">
          {t(
            "negative tension = that string went SLACK = your setup is impossible",
            "negative tension = wo string DHEELI pad gayi = maana hua setup asambhav"
          )}
        </T>
      </Fade>

      {/* beat 7 — the fine print */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={84} y={500} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "fine print: concurrent + coplanar + EXACTLY three — else Lami does not apply",
            "fine print: concurrent + coplanar + THEEK teen — warna Lami lagta hi nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={84} y={524} size={13} fill={GREEN} script anchor="start">
          {t(
            "four forces? parallel forces? → go back to resolution",
            "chaar forces? parallel forces? → wapas resolution par jao"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
