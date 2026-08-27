/**
 * Ch07 · Section 4 — "Two masses that turn out equal: gravitational and inertial"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.28, 19.54, 29.61, 40.11, 51.97, 61.01, 76.89]):
 *  0 title + the word "mass" splitting into two arrows
 *  1 left card: gravitational mass m_g
 *  2 right card: inertial mass m_i (F = m_i a)
 *  3 red note: logically unrelated
 *  4 drop demo: light + heavy ball, equal fall arrows, Moon hammer/feather
 *  5 experiment line: equal to 1 part in 10¹²
 *  6 m_g·g = m_i·a — rings on both m's, arrow → green a = g box
 *  7 green margin: Einstein's Equivalence Principle → GR
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · "mass" cx540 bl110 (26 script, box 511..569 y76..123) ·
 *  arrows (500,122)→(330,158) · (580,122)→(750,158)
 *  cards y165..265: c1 x80..460 (title bl196, caption bl228) · c2 x620..1000 (title bl196,
 *   eq bl228, caption bl252)
 *  b3 | bar x66 y285..337 · lines st x84 bl305 / 331
 *  b4 | balls (630,305) r6 / (730,308) r13 · arrows ↓ to y368 · label cx690 bl396 (554..825)
 *  b5 | line st x84 bl372 · underline M84 382 h240
 *  b6 | equation st x390 bl462 (≈390..508) · rings c(403,453)/(474,453) rx24 ry15 ·
 *      note cx470 bl505 · arrow (520,455)→(613,455) · green box x620..960 y430..480 · text bl462
 *  b7 | green bar x66 y540..586 · lines st x84 bl560 / 584
 */

import React from "react";
import { Circle, TSpan } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  ringD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — one word, two properties */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Mass wears two different hats", "Mass do alag topiyan pehenta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3)}>
        <T x={540} y={110} size={26} fill={INK} script>
          mass
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 5)}
        d={arrowD(500, 122, 330, 158)}
        stroke={MUTED}
        sw={1.8}
        dur={0.4}
      />
      <Draw
        on={beat >= 0}
        delay={dl(0, 5.6)}
        d={arrowD(580, 122, 750, 158)}
        stroke={MUTED}
        sw={1.8}
        dur={0.4}
      />

      {/* beat 1 — gravitational mass */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.5)}
        d="M 92 165 h 356 q 12 0 12 12 v 76 q 0 12 -12 12 h -356 q -12 0 -12 -12 v -76 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={270} y={196} size={14} fill={AMBER_DARK} weight={800}>
          gravitational mass m
          <TSpan dy={4} fontSize={11}>
            g
          </TSpan>
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={270} y={228} size={12} fill={INK} script>
          {t(
            "how strongly it joins in gravity",
            "gravity mein kitni strongly hissa leti hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={270} y={252} size={11} fill={MUTED} script>
          {t("pulling, and being pulled", "kheenchna, aur khinchna — dono")}
        </T>
      </Fade>

      {/* beat 2 — inertial mass */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.5)}
        d="M 632 165 h 356 q 12 0 12 12 v 76 q 0 12 -12 12 h -356 q -12 0 -12 -12 v -76 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2}
        dur={0.6}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={810} y={196} size={14} fill={AMBER_DARK} weight={800}>
          inertial mass m
          <TSpan dy={4} fontSize={11}>
            i
          </TSpan>
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={810} y={228} size={14} fill={INK} weight={700}>
          F = m
          <TSpan dy={4} fontSize={11}>
            i
          </TSpan>
          <TSpan dy={-4} fontSize={14}>
            ·a
          </TSpan>
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={810} y={252} size={11} fill={MUTED} script>
          {t(
            "how stubbornly it resists a push",
            "dhakke ka kitna ziddi virodh karti hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — logically unrelated */}
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d="M 66 285 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={84} y={305} size={13} fill={RED} script anchor="start">
          {t(
            "logically, these two are strangers",
            "logically, in dono ka koi rishta nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={84} y={331} size={13} fill={RED} script anchor="start">
          {t(
            "no obvious reason they should be equal",
            "barabar hone ki koi zaahir wajah nahi"
          )}
        </T>
      </Fade>

      {/* beat 4 — and yet: everything falls together */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <Circle cx={630} cy={305} r={6} fill={INK} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <Circle cx={730} cy={308} r={13} fill={INK} />
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 2.6)}
        d={arrowD(630, 320, 630, 368)}
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 3.2)}
        d={arrowD(730, 328, 730, 368)}
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={690} y={396} size={12} fill={GREEN} script>
          {t(
            "same rate — hammer & feather on the Moon",
            "same rate — Moon par hammer & feather bhi"
          )}
        </T>
      </Fade>

      {/* beat 5 — the experiment */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={84} y={372} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "experiment: equal to 1 part in 10¹²",
            "experiment: 1 part in 10¹² tak barabar"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3)} d="M 84 382 h 240" stroke={AMBER_DARK} sw={2} dur={0.4} />

      {/* beat 6 — the cancellation that gives everyone the same g */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={430} y={462} size={22} fill={INK} anchor="start" weight={800}>
          m
          <TSpan dy={5} fontSize={14}>
            g
          </TSpan>
        </T>
        <T x={476} y={462} size={22} fill={INK} anchor="start" weight={800}>
          ·g
        </T>
        <T x={504} y={462} size={22} fill={INK} anchor="start" weight={800}>
          =
        </T>
        <T x={536} y={462} size={22} fill={INK} anchor="start" weight={800}>
          m
          <TSpan dy={5} fontSize={14}>
            i
          </TSpan>
        </T>
        <T x={580} y={462} size={22} fill={INK} anchor="start" weight={800}>
          ·a
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 4)}
        d={ringD(440, 456, 22, 16)}
        stroke={AMBER}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 4.8)}
        d={ringD(546, 456, 22, 16)}
        stroke={AMBER}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 6} delay={dl(6, 6.5)}>
        <T x={470} y={505} size={12} fill={AMBER_DARK} script>
          {t(
            "they cancel — only because they are equal",
            "cancel hote hain — sirf kyunki barabar hain"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 8)}
        d={arrowD(608, 455, 627, 455)}
        stroke={MUTED}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <Draw
          on={beat >= 6}
          delay={dl(6, 9)}
          d="M 632 430 h 316 q 12 0 12 12 v 26 q 0 12 -12 12 h -316 q -12 0 -12 -12 v -26 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9.8)}>
        <T x={790} y={462} size={15} fill={INK} weight={800}>
          {t("a = g — same for EVERY body", "a = g — har body ke liye wahi")}
        </T>
      </Fade>

      {/* beat 7 — Einstein's seed */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 540 v 46" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={560} size={13} fill={GREEN} script anchor="start">
          {t(
            "Einstein: Equivalence Principle — gravity ≡ acceleration, locally",
            "Einstein: Equivalence Principle — gravity ≡ acceleration, locally"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={84} y={584} size={13} fill={GREEN} script anchor="start">
          {t(
            "the seed of General Relativity",
            "yahi General Relativity ka beej bana"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
