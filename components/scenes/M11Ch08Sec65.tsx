/**
 * M11 Ch08 · Section 65 — "Break a hard sum into sums you already know"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=concept. Opens subtopic 7
 * (Special Series).
 *
 * Math check: 1+8+27=36=6²=(1+2+3)² — verifies Σr³=(Σr)² for n=3.
 *
 * Beats (en [0, 10.58, 24.41, 30.38, 50.18, 72.96, 86.19, 99.16]):
 *  0 title (always-on)
 *  1 text: reduce t_n to powers of n
 *  2 THE DEMO 1: telescoping stack, k³-(k-1)³=3k²-3k+1
 *  3 text: standard sums come from this telescoping
 *  4 red-margin: Aryabhata history
 *  5 THE DEMO 2: growing squares, 1³+2³+3³=36=6²
 *  6 boxed formula: Σr³=(Σr)²
 *  7 closer: the whole game
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | stack bl128/150/172/190/212 cx260 · captions bl150/172/196 cx780 ·
 *       caption bl235 cx540
 *  b3 | text bl265 cx540
 *  b4 | red bar x76 y290..360 · text bl310/350 x96
 *  b5 | 3 squares baseline y410 x170/225/290 · labels bl425 · value text
 *       bl400/422 cx700
 *  b6 | chip x420 y445 w240 h44 (text bl~472)
 *  b7 | text bl510 cx540
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, Chip, T, INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec65({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const squares = [
    { x: 170, s: 16, label: "1³" },
    { x: 225, s: 28, label: "2³" },
    { x: 290, s: 42, label: "3³" },
  ];

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={INK} anchor="middle" script>
          {t("The whole subtopic in one move: reduce to standard sums", "Poora subtopic ek move mein: standard sums tak reduce karo")}
        </T>
      </Fade>

      {/* beat 1 — reduce to powers of n */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t("write t_n as a combination of n³, n², n, 1, then use linearity", "t_n ko n³, n², n, 1 ka combination likho, phir linearity use karo")}
        </T>
      </Fade>

      {/* beat 2 — THE DEMO 1: telescoping stack */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={260} y={128} size={12.5} fill={INK} anchor="middle">{"1³-0³ = 3(1)²-3(1)+1"}</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={260} y={150} size={12.5} fill={INK} anchor="middle">{"2³-1³ = 3(2)²-3(2)+1"}</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={260} y={172} size={12.5} fill={INK} anchor="middle">{"3³-2³ = 3(3)²-3(3)+1"}</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={260} y={190} size={12} fill={MUTED} anchor="middle">{"⋮"}</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <T x={260} y={212} size={12.5} fill={INK} anchor="middle">{"n³-(n-1)³ = 3n²-3n+1"}</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={780} y={150} size={13} fill={RED} anchor="middle">{t("left side telescopes", "left side telescope hota hai")}</T>
        <T x={780} y={172} size={14} fill={RED} anchor="middle" weight={700}>{t("to just n³", "sirf n³ tak")}</T>
        <T x={780} y={200} size={13} fill={GREEN_DARK} anchor="middle">{t("solve for Σn²", "Σn² ke liye solve karo")}</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={540} y={235} size={12} fill={INK_LIGHT} anchor="middle" script>
          {t("one identity, a whole family of sum formulas", "ek identity, sum formulas ki poori family")}
        </T>
      </Fade>

      {/* beat 3 — standard sums come from this */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={265} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t(
            "the standard sums come from telescoping k³-(k-1)³=3k²-3k+1",
            "standard sums k³-(k-1)³=3k²-3k+1 ke telescoping se aate hain"
          )}
        </T>
      </Fade>

      {/* beat 4 — red-margin: Aryabhata history */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 76 290 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={96} y={310} size={15} fill={RED} anchor="start" script>
          {t("history: Aryabhata gave Σn², Σn³", "history: Aryabhata ne Σn², Σn³ diya")}
        </T>
        <T x={96} y={350} size={15} fill={RED} anchor="start" script>
          {t("around 499 CE — 1000+ years early", "499 CE ke aas paas — 1000+ saal pehle")}
        </T>
      </Fade>

      {/* beat 5 — THE DEMO 2: growing squares */}
      {squares.map((s, i) => (
        <Fade key={i} on={beat >= 5} delay={dl(5, 0.2 + i * 0.3)}>
          <Rect x={s.x} y={410 - s.s} width={s.s} height={s.s} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.6} />
          <T x={s.x + s.s / 2} y={425} size={12} fill={AMBER_DARK} anchor="middle">{s.label}</T>
        </Fade>
      ))}
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={700} y={400} size={15} fill={INK} anchor="middle">{"1 + 8 + 27 = 36"}</T>
        <T x={700} y={422} size={14} fill={RED} anchor="middle">{"= 6² = (1+2+3)²"}</T>
      </Fade>

      {/* beat 6 — boxed formula */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Chip x={420} y={445} w={240} h={44} fill={CREAM} stroke={GREEN_DARK} textFill={GREEN_DARK} size={18}>
          {"Σr³ = (Σr)²"}
        </Chip>
      </Fade>

      {/* beat 7 — closer: the whole game */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={510} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t(
            "whole game: find t_n → express in powers of n → apply standard sums",
            "poora game: t_n dhoondo → n ki powers mein likho → standard sums lagao"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
