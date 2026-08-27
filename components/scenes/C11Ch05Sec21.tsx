/**
 * C11 Chemistry Ch05 · Section 21 — "Deriving the Gibbs criterion, the four
 * cases, and the K link"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (board_reveal_at, en [0,6.74,22.19,38.31,50.52,62.04,77.74,84.74,99.16]):
 *  0 heading A + underline: why ΔG<0 means spontaneous
 *  1 step: ΔS(universe)>0, ΔS(surr)=-ΔH/T
 *  2 step: x(-T) flips: ΔH-TΔS<0
 *  3 red note: that's ΔG! ΔG<0 for spontaneous
 *  4 heading B + underline: the four cases of ΔG=ΔH-TΔS
 *  5 text: agree/conflict, T as referee
 *  6 heading C + underline: from ΔG to equilibrium constant
 *  7 green chip: ΔG=0, Q=K, ΔG°=-RT ln K
 *  8 2x2 diagram: four sign cases of ΔH and ΔS
 *
 * Layout plan (centered, three compact derivation blocks then a 2x2 grid):
 *  b0 | headingA (16,w700)+underline  | y84..99 (bl92); y100
 *  b1 | step1 (13)                    | T mid | y113..126 (bl122)
 *  b2 | step2 (13,w700)               | T mid | y135..148 (bl144)
 *  b3 | red note chip (14)            | Chip  | x380..700 y155..185
 *  b4 | headingB+underline            | y206..221 (bl215); y223
 *  b5 | cases text (13)               | T mid | y236..249 (bl245)
 *  b6 | headingC+underline            | y263..278 (bl272); y280
 *  b7 | green chip (15)               | Chip  | x300..780 y295..328
 *  b8 | 2x2 grid                      | Draw  | x170..870 y365..535
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
  INK,
  MUTED,
  GREEN,
  RED,
  CREAM,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch05Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("the Gibbs criterion & the four cases", "the Gibbs criterion & the four cases")}
        </T>
      </Fade>

      {/* beat 0 — heading A */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={92} size={16} weight={700} fill={INK}>
          {t("why ΔG < 0 means spontaneous", "ΔG < 0 kyun spontaneous hota hai")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d="M 410 100 C 460 97, 620 97, 670 100" stroke={AMBER_DARK} sw={1.8} dur={0.4} />

      {/* beat 1 — step 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <T x={540} y={122} size={13} fill={INK}>
          {t("start: ΔS(universe) > 0, with ΔS(surr) = −ΔH/T", "start: ΔS(universe) > 0, jahan ΔS(surr) = −ΔH/T")}
        </T>
      </Fade>

      {/* beat 2 — step 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.1)}>
        <T x={540} y={144} size={13} weight={700} fill={INK}>
          {t("×(−T), flips: ΔH − TΔS < 0", "×(−T) karo, flip: ΔH − TΔS < 0")}
        </T>
      </Fade>

      {/* beat 3 — red note: that's ΔG */}
      <Fade on={beat >= 3} delay={dl(3, 0.15)}>
        <Chip x={380} y={155} w={320} h={30} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t("that's ΔG! ⇒ ΔG < 0 for spontaneous", "yehi hai ΔG! ⇒ ΔG < 0 spontaneous ke liye")}
        </Chip>
      </Fade>

      {/* beat 4 — heading B */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={215} size={16} weight={700} fill={INK}>
          {t("the four cases of ΔG = ΔH − TΔS", "ΔG = ΔH − TΔS ke chaar cases")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.4)} d="M 350 223 C 420 220, 660 220, 730 223" stroke={AMBER_DARK} sw={1.8} dur={0.4} />

      {/* beat 5 — agree/conflict */}
      <Fade on={beat >= 5} delay={dl(5, 0.1)}>
        <T x={540} y={245} size={13} fill={INK}>
          {t(
            "agree ⇒ T can't overturn it · conflict ⇒ T is referee, tips at T = ΔH/ΔS",
            "agree ⇒ T overturn nahi kar sakta · conflict ⇒ T referee hai, T=ΔH/ΔS par tip"
          )}
        </T>
      </Fade>

      {/* beat 6 — heading C */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={272} size={16} weight={700} fill={INK}>
          {t("from ΔG to the equilibrium constant", "ΔG se equilibrium constant tak")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.4)} d="M 380 280 C 440 277, 640 277, 700 280" stroke={AMBER_DARK} sw={1.8} dur={0.4} />

      {/* beat 7 — K link */}
      <Fade on={beat >= 7} delay={dl(7, 0.15)}>
        <Chip x={300} y={295} w={480} h={33} fill={CREAM} stroke={GREEN} textFill={GREEN} size={15} script={false}>
          {t("at equilibrium: ΔG=0, Q=K ⇒ ΔG° = −RT ln K", "equilibrium par: ΔG=0, Q=K ⇒ ΔG° = −RT ln K")}
        </Chip>
      </Fade>

      {/* beat 8 — 2x2 diagram: four sign cases */}
      <Fade on={beat >= 8} delay={dl(8, 0)}>
        <T x={330} y={355} size={13} fill={MUTED}>ΔS &gt; 0</T>
        <T x={710} y={355} size={13} fill={MUTED}>ΔS &lt; 0</T>
        <T x={140} y={410} size={12} fill={MUTED} anchor="end">ΔH &lt; 0</T>
        <T x={140} y={500} size={12} fill={MUTED} anchor="end">ΔH &gt; 0</T>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 0.15)} d="M 170 365 h 320 v 80 h -320 z" stroke={GREEN} sw={2} fill="rgba(28,155,87,0.15)" dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.4)}>
        <T x={330} y={410} size={13} weight={800} fill={GREEN}>
          {t("spontaneous at ALL T", "spontaneous at ALL T")}
        </T>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 0.2)} d="M 550 365 h 320 v 80 h -320 z" stroke={AMBER_DARK} sw={2} fill="rgba(238,163,31,0.18)" dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.45)}>
        <T x={710} y={410} size={14} weight={700} fill={AMBER_DARK}>
          {t("low T only", "low T only")}
        </T>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 0.25)} d="M 170 455 h 320 v 80 h -320 z" stroke={AMBER_DARK} sw={2} fill="rgba(238,163,31,0.18)" dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.5)}>
        <T x={330} y={500} size={14} weight={700} fill={AMBER_DARK}>
          {t("high T only", "high T only")}
        </T>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 0.3)} d="M 550 455 h 320 v 80 h -320 z" stroke={RED} sw={2} fill="rgba(221,68,51,0.15)" dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.55)}>
        <T x={710} y={500} size={13} weight={800} fill={RED}>
          {t("NEVER spontaneous", "NEVER spontaneous")}
        </T>
      </Fade>
    </Scene>
  );
}
