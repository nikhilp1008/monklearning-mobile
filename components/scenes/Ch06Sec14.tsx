/**
 * Ch06 · Section 14 — "Three ground rules to never break"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.45, 19.46, 32, 47.45, 59.05, 72.96, 81.41]):
 *  0 title + red warning subline
 *  1 figure right: O(820,310), A→(1000,310), B→(910,225), A×B up green,
 *    B×A down red
 *  2 rule 1 row: 3D only
 *  3 rule 2 row + formula A×B = −B×A
 *  4 swap arc on figure + red note line
 *  5 rule 3 row + sinθ formula
 *  6 chip A × A = 0
 *  7 green verdict + underline
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title script24 cx540 bl 52 · sub script12 cx540 bl 92
 *  b1 | A "A"(1008,316)st · B "B"(918,218)st · up (820,310)→(820,180),
 *       label cx820 bl 166 · down →(820,445), label cx820 bl 472
 *  b2 | R1 script14 st x80 bl 150 · sub script12 st x100 bl 178
 *  b3 | R2 script14 st x80 bl 235 · formula sans18 st x100 bl 272
 *  b4 | swap arc M960,296 Q950,255 922,240 red · fig label script12 cx930 bl 390 ·
 *       note script12 st x100 bl 305
 *  b5 | R3 script14 st x80 bl 360 · formula sans16 st x100 bl 395
 *  b6 | chip x100 y420 w200 h36
 *  b7 | line script13 st x80 bl 530 · underline y550 x80..600
 */

import React from "react";
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
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch06Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the stakes */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={24} fill={INK} script>
          {t(
            "three ground rules — never break them",
            "teen ground rules — kabhi mat todo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={92} size={12} fill={RED} script>
          {t(
            "break one — and the torque answer flips the wrong way",
            "ek tooti — aur torque ka answer galat taraf palta"
          )}
        </T>
      </Fade>

      {/* beat 1 — the up/down figure */}
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d={arrowD(820, 310, 1000, 310)} stroke={INK} sw={2.6} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={1008} y={316} size={15} fill={INK} anchor="start" weight={700}>
          A
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.4)} d={arrowD(820, 310, 910, 225)} stroke={INK} sw={2.6} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={918} y={218} size={15} fill={INK} anchor="start" weight={700}>
          B
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.5)} d={arrowD(820, 310, 820, 180)} stroke={GREEN} sw={3} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 5.3)}>
        <T x={820} y={166} size={15} fill={GREEN_DARK} weight={700}>
          A × B
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 6.5)} d={arrowD(820, 310, 820, 445)} stroke={RED} sw={3} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 7.3)}>
        <T x={820} y={472} size={15} fill={RED} weight={700}>
          B × A
        </T>
      </Fade>

      {/* beat 2 — rule 1 */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={80} y={150} size={14} fill={INK} script anchor="start">
          {t(
            "1 · defined ONLY in three dimensions",
            "1 · SIRF three dimensions mein defined"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={100} y={178} size={12} fill={MUTED} script anchor="start">
          {t(
            "dot product works anywhere — the ⊥ idea needs 3D space",
            "dot product kahin bhi chalta — ⊥ idea ko 3D chahiye"
          )}
        </T>
      </Fade>

      {/* beat 3 — rule 2 */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={80} y={235} size={14} fill={INK} script anchor="start">
          {t(
            "2 · anti-commutative — order matters",
            "2 · anti-commutative — order maayne rakhti hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.5)}>
        <T x={100} y={272} size={18} fill={INK} anchor="start" weight={700}>
          A × B = − B × A
        </T>
      </Fade>

      {/* beat 4 — why: the thumb flips */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 1)}
        d="M 960 296 Q 950 255 922 240 M 933 238 L 922 240 L 930 249"
        stroke={RED}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <T x={930} y={390} size={12} fill={RED} script>
          {t("swap the order → flip", "order badlo → palti")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={100} y={305} size={12} fill={RED} script anchor="start">
          {t(
            "swap → the right-hand thumb points the other way → sign flips",
            "swap → right-hand thumb ulti or → sign palat jaata hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — rule 3 */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={80} y={360} size={14} fill={INK} script anchor="start">
          {t(
            "3 · parallel or anti-parallel → ZERO",
            "3 · parallel ya anti-parallel → ZERO"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={100} y={395} size={16} fill={INK} anchor="start" weight={700}>
          |A × B| = AB sinθ → sin 0° = sin 180° = 0
        </T>
      </Fade>

      {/* beat 6 — the special case */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <Chip x={100} y={420} w={200} h={36} fill={CREAM} stroke={AMBER} textFill={INK} size={16} script={false}>
          A × A = 0
        </Chip>
      </Fade>

      {/* beat 7 — why these matter */}
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={80} y={530} size={13} fill={GREEN_DARK} script anchor="start">
          {t(
            "these three quietly decide clockwise vs anticlockwise in every torque ahead",
            "yahi teen aage har torque mein clockwise vs anticlockwise tay karte hain"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 4)} d="M 80 550 h 520" stroke={GREEN} sw={2.2} dur={0.7} />
    </Scene>
  );
}
