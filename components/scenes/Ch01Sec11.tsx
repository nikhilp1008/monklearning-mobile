/**
 * Ch01 · Section 11 — "Example 1 [CBSE]: the gas constant R in base units"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.7, 28.6, 40.9, 62.8, 75.2, 91.5, 108.7]):
 *  0 tag + drawn question card: R = J mol⁻¹ K⁻¹ → base units?
 *  1 scan against the seven
 *  2 verdicts: mol ✓ · K ✓ · J ✗ not on the list — target the joule
 *  3 crack the joule: J = N·m → N = kg·m/s² → J = kg·m²/s²
 *  4 substitute back; mol and K stay downstairs
 *  5 the result chip
 *  6 notice: base units have nothing underneath — only the joule dissolved
 *  7 that was Procedure A — find non-base → crack → substitute
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | tag chip (h38)             | Chip | x60..250   y40..78
 *  b0 | question card              | Draw | x140..940  y92..152 · text sans 20 bl 130
 *  b1 | scan line (script 15)      | T st | x60..250   y171..198 (bl 190)
 *  b2 | verdict chips (h38)        | Chip | y210..248  x140..300 / 330..470 / 500..740
 *  b2 | target note (script 15,red)| T st | x500..682  y265..292 (bl 284)
 *  b3 | chain rows x300 mid: "J = N·m" bl 330 · "N = kg·m/s²" bl 372 ·
 *       "⇒ J = kg·m²/s²" bl 418 (w800) · arrows (300,338)→(300,351) · (300,380)→(300,395)
 *  b4 | arrow (390,412)→(608,375) · "= kg·m²/s² / (mol·K)" (720, bl 372)
 *  b4 | note (script 14)           | T st | x636..805  y392..417 (bl 410)
 *  b5 | result chip (h44)          | Chip | x390..690  y452..496
 *  b6 | note (script 15, green)    | T st | x60..489   y511..538 (bl 530) · underline y548
 *  b7 | callback (script 16)       | T st | x60..394   y559..588 (bl 580)
 *  b7 | chain chips ×3 (h38)       | Chip | y556..594  x560..730 / 760..860 / 890..1030
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  PAPER,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={60} y={40} w={190} h={38} fill={INK} textFill={CREAM} size={15}>
          {t("EXAMPLE 1 · CBSE", "EXAMPLE 1 · CBSE")}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2)}
        d="M 152 92 h 776 q 12 0 12 12 v 36 q 0 12 -12 12 h -776 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={beat >= 0} delay={dl(0, 3.2)}>
        <T x={540} y={130} size={20} fill={INK} weight={700}>
          {t(
            "unit of R = J mol⁻¹ K⁻¹  →  write it in base units",
            "R ki unit = J mol⁻¹ K⁻¹  →  base units mein likho"
          )}
        </T>
      </Fade>

      {/* beat 1 — scan against the list of seven */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={60} y={190} size={15} fill={MUTED} script anchor="start">
          {t("scan against the seven:", "saaton se milao:")}
        </T>
      </Fade>

      {/* beat 2 — who is base, who is the impostor */}
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <Chip x={140} y={210} w={160} h={38} fill={PAPER} stroke={GREEN} textFill={GREEN} size={17}>
          mol ✓ base
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <Chip x={330} y={210} w={140} h={38} fill={PAPER} stroke={GREEN} textFill={GREEN} size={17}>
          K ✓ base
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <Chip x={500} y={210} w={240} h={38} fill={PAPER} stroke={RED} textFill={RED} size={17}>
          {t("J ✗ — not on the list!", "J ✗ — list mein nahi!")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={500} y={284} size={15} fill={RED} script anchor="start">
          {t("target: crack the joule", "target: joule ko todo")}
        </T>
      </Fade>

      {/* beat 3 — cracking the joule */}
      <Fade on={beat >= 3} delay={dl(3, 2.5)}>
        <T x={300} y={330} size={20} fill={INK} weight={700}>
          J = N · m
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 5)}
        d={arrowD(300, 338, 300, 351)}
        stroke={AMBER}
        sw={2.2}
        dur={0.3}
      />
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={300} y={372} size={20} fill={INK} weight={700}>
          N = kg·m/s²
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 10)}
        d={arrowD(300, 380, 300, 395)}
        stroke={AMBER}
        sw={2.2}
        dur={0.3}
      />
      <Fade on={beat >= 3} delay={dl(3, 11)}>
        <T x={300} y={418} size={22} fill={INK} weight={800}>
          ⇒ J = kg·m²/s²
        </T>
      </Fade>

      {/* beat 4 — substitute back */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.5)}
        d={arrowD(390, 412, 608, 375)}
        stroke={AMBER}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <T x={720} y={372} size={20} fill={INK} weight={700}>
          = kg·m²/s² / (mol·K)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={636} y={410} size={14} fill={AMBER_DARK} script anchor="start">
          {t("mol, K stay downstairs", "mol, K neeche hi rahenge")}
        </T>
      </Fade>

      {/* beat 5 — the result */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <Chip x={390} y={452} w={300} h={44} fill={INK} textFill={CREAM} size={19} script={false}>
          R : kg m² s⁻² mol⁻¹ K⁻¹
        </Chip>
      </Fade>

      {/* beat 6 — base units have nothing underneath */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={60} y={530} size={15} fill={GREEN} script anchor="start">
          {t(
            "mol & K survived untouched — only the joule dissolved",
            "mol & K bache rahe — sirf joule ghula"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 6)}
        d="M 60 548 C 180 544, 350 550, 489 546"
        stroke={GREEN}
        sw={2}
        dur={0.6}
      />

      {/* beat 7 — that was Procedure A */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={60} y={580} size={16} fill={AMBER_DARK} script anchor="start">
          {t("that was Procedure A — just the chain", "yehi tha Procedure A — bas chain chalao")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <Chip x={560} y={556} w={170} h={38} fill={PAPER} stroke={GREEN} textFill={GREEN} size={16}>
          {t("find non-base", "non-base dhundo")}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 5.8)}
        d={arrowD(736, 575, 754, 575)}
        stroke={GREEN}
        sw={2.4}
        dur={0.3}
      />
      <Fade on={beat >= 7} delay={dl(7, 6.2)}>
        <Chip x={760} y={556} w={100} h={38} fill={PAPER} stroke={GREEN} textFill={GREEN} size={16}>
          {t("crack", "todo")}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 7)}
        d={arrowD(866, 575, 884, 575)}
        stroke={GREEN}
        sw={2.4}
        dur={0.3}
      />
      <Fade on={beat >= 7} delay={dl(7, 7.4)}>
        <Chip x={890} y={556} w={140} h={38} fill={GREEN} textFill="#fff" size={16}>
          {t("substitute", "wapas rakho")}
        </Chip>
      </Fade>
    </Scene>
  );
}
