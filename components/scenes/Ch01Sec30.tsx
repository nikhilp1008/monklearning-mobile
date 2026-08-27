/**
 * Ch01 · Section 30 — "Pitfalls and pro-tips: dimensional analysis"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.2, 33.0, 53.4, 71.9, 92.3, 117.2, 132.4]):
 *  0 title + four red tally marks
 *  1 pitfall 1: dimensionally correct ≠ correct
 *  2 pitfall 2: silently dropping C
 *  3 pitfall 3: equal dimensions ≠ same quantity
 *  4 pitfall 4: dimensional things inside sin/log/exp
 *  5 the gift panel: y = A sin(kx − ωt) → k: [L⁻¹], ω: [T⁻¹] for free
 *  6 the whisper: use homogeneity directly
 *  7 the trick chips + "a two-second read"
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title (script 28, red) mid bl 62 · tally x930..975 y48..72
 *  b1-4 | badge r15 c(76, 110+46i) · lines (script 15, red) x104 st bl 116+46i
 *  b5 | amber box x60..1020 y290..420 · header (script 15) bl 322 ·
 *       formula (sans 22) mid bl 366 · readoffs (sans 16) x200/x600 st bl 404
 *  b6 | whisper (script 15, muted) mid bl 456
 *  b7 | chips y480..524: x140..480 / 540..900 · "or" (560?) — between at x510 ·
 *       closing (script 15, green) mid bl 570 · underline y585
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
  Chip,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  PAPER,
  Scene,
} from '@/components/scenes/kit';

const PITFALLS: [string, string][] = [
  [
    "dimensionally correct ≠ CORRECT — a maybe is never a yes",
    "dimensionally sahi ≠ SAHI — shayad kabhi haan nahi hota",
  ],
  [
    "dropping C silently — write it & say dimensions can't find it",
    "C chupchaap udaana — likho, aur bolo dimensions ise nahi dhoondh sakte",
  ],
  [
    "equal dimensions ≠ same quantity — work vs torque, again",
    "same dimensions ≠ same cheez — work vs torque, phir se",
  ],
  [
    "a length inside sin / log / exp? stop — something upstream broke",
    "sin / log / exp ke andar length? ruko — upar kuch toota hai",
  ],
];

export default function Ch01Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — four pitfalls, one gift */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={62} size={28} fill={RED} script>
          {t("four pitfalls — and one hidden gift", "chaar pitfalls — aur ek chhupa tohfa")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 3)}
        d="M 930 48 v 24 M 945 48 v 24 M 960 48 v 24 M 975 48 v 24"
        stroke={RED}
        sw={2.6}
        dur={0.8}
      />

      {/* pitfalls 1–4 */}
      {PITFALLS.map(([pEn, pHi], i) => {
        const k = i + 1;
        const cy = 110 + i * 46;
        return (
          <G key={pEn}>
            <Draw
              on={beat >= k}
              delay={dl(k, 0.5)}
              d={`M 61 ${cy} A 15 15 0 1 1 91 ${cy} A 15 15 0 1 1 61 ${cy}`}
              stroke={RED}
              sw={2.2}
              dur={0.4}
            />
            <Fade on={beat >= k} delay={dl(k, 0.9)}>
              <T x={76} y={cy + 5.5} size={15} fill={RED} weight={800}>
                {k}
              </T>
            </Fade>
            <Fade on={beat >= k} delay={dl(k, 1.8)}>
              <T x={104} y={cy + 6} size={15} fill={RED} script anchor="start">
                {t(pEn, pHi)}
              </T>
            </Fade>
          </G>
        );
      })}

      {/* beat 5 — flip pitfall 4: the gift */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 72 290 h 936 q 12 0 12 12 v 106 q 0 12 -12 12 h -936 q -12 0 -12 -12 v -106 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={1}
      />
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={540} y={322} size={15} fill={AMBER_DARK} script>
          {t("flip pitfall 4 — it's secretly a gift:", "pitfall 4 ko ulto — ye chhupa tohfa hai:")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={540} y={366} size={22} fill={INK} weight={800}>
          y = A sin(k x − ω t)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <T x={200} y={404} size={16} fill={INK} weight={700} anchor="start">
          {t("k x must be pure → k: [L⁻¹]", "k x pure hona chahiye → k: [L⁻¹]")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 15)}>
        <T x={600} y={404} size={16} fill={INK} weight={700} anchor="start">
          {t("ω t must be pure → ω: [T⁻¹]", "ω t pure hona chahiye → ω: [T⁻¹]")}
        </T>
      </Fade>

      {/* beat 6 — the whisper */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={540} y={456} size={15} fill={MUTED} script>
          {t(
            "the pro-tip: to find a buried unknown, use homogeneity directly",
            "pro-tip: chhupe unknown ke liye homogeneity seedha lagao"
          )}
        </T>
      </Fade>

      {/* beat 7 — the two-second read */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <Chip x={140} y={480} w={340} h={44} fill={PAPER} stroke={GREEN} textFill={GREEN} size={16}>
          {t("match its sibling terms", "uske sibling terms se milao")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={510} y={508} size={15} fill={MUTED} script>
          or
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <Chip x={540} y={480} w={360} h={44} fill={GREEN} textFill="#fff" size={16}>
          {t("make the argument dimensionless", "argument ko dimensionless banao")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 12)}>
        <T x={540} y={570} size={15} fill={GREEN} script>
          {t(
            "a two-second read — JEE Main asks this almost every year",
            "do second ka kaam — JEE Main isse lagbhag har saal poochta hai"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 13)}
        d="M 330 585 C 460 581, 620 587, 750 583"
        stroke={GREEN}
        sw={2}
        dur={0.6}
      />
    </Scene>
  );
}
