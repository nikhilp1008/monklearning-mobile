/**
 * C11 Chemistry Ch03 · Section 49 — "Worked example: which is a representative element?"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0.0, 8.79, 18.43, 32.68, 45.65, 59.05, 64.68, 76.97]):
 *  0 title + underline
 *  1 question + 4 candidate cards (Z=24,12,26,29)
 *  2 red-margin: definition — representative = s/p-block only; just locate, don't configure
 *  3 reveal card2 (Z=12): Mg, [Ne]3s², s-block ✓ (green)
 *  4 reveal cards 1,3,4 (Z=24,26,29): Cr/Fe/Cu, 3d series, d-block ✗ (red)
 *  5 red-margin: ANSWER — Z=12 → magnesium
 *  6 the trap: all three distractors are transition metals
 *  7 closing green stamp: representative means s or p only
 *
 * Layout plan:
 *  b1 | 4 cards                     | Draw | x115..965 y136..244 (w190 gap30)
 *  b2 | red bar + 2 lines           | T st | x94..?    y278..298
 *  b5 | red bar + answer            | T mid| x?..?     y332
 *  b7 | closing stamp (green)       | Chip | x200..880 y392..426
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
  Scene,
} from '@/components/scenes/kit';

const CARDS = [
  { x: 115, z: "24" },
  { x: 335, z: "12" },
  { x: 555, z: "26" },
  { x: 775, z: "29" },
];

export default function C11Ch03Sec49({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("worked example: which is a representative element?", "worked example: representative element kaun hai?")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.5)} d="M 350 88 C 420 84, 660 84, 730 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — question + four candidate cards */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={106} size={15} weight={700} fill={INK}>
          {t("which is representative: Z=24, Z=12, Z=26, or Z=29?", "kaun representative hai: Z=24, Z=12, Z=26, ya Z=29?")}
        </T>
      </Fade>
      {CARDS.map((c, i) => (
        <React.Fragment key={c.x}>
          <Draw on={beat >= 1} delay={dl(1, 0.6 + i * 0.12)} d={`M ${c.x} 136 h 190 v 108 h -190 z`} stroke={INK} sw={2} dur={0.5} />
          <Fade on={beat >= 1} delay={dl(1, 1.1 + i * 0.12)}>
            <T x={c.x + 95} y={162} size={14} weight={700} fill={INK}>{`Z = ${c.z}`}</T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 2 — red-margin: the definition */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 70 258 L 70 288" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={94} y={278} size={14} weight={700} fill={INK} anchor="start">
          {t("representative = s- or p-block only (groups 1,2,13-17)", "representative = sirf s- ya p-block (groups 1,2,13-17)")}
        </T>
        <T x={94} y={298} size={11} fill={MUTED} anchor="start">
          {t("just locate each — skip full configurations", "bas locate karo — full configurations skip karo")}
        </T>
      </Fade>

      {/* beat 3 — Z=12: magnesium, s-block, representative */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={430} y={190} size={18} weight={800} fill={GREEN}>Mg</T>
        <T x={430} y={208} size={10} fill={MUTED}>{"[Ne]3s²"}</T>
        <T x={430} y={230} size={11} weight={800} fill={GREEN}>{"s-block ✓"}</T>
      </Fade>

      {/* beat 4 — Z=24,26,29: all 3d series, d-block */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={210} y={190} size={18} weight={800} fill={RED}>Cr</T>
        <T x={210} y={208} size={10} fill={MUTED}>{t("3d series", "3d series")}</T>
        <T x={210} y={230} size={11} weight={800} fill={RED}>{"d-block ✗"}</T>

        <T x={650} y={190} size={18} weight={800} fill={RED}>Fe</T>
        <T x={650} y={208} size={10} fill={MUTED}>{t("3d series", "3d series")}</T>
        <T x={650} y={230} size={11} weight={800} fill={RED}>{"d-block ✗"}</T>

        <T x={870} y={190} size={18} weight={800} fill={RED}>Cu</T>
        <T x={870} y={208} size={10} fill={MUTED}>{t("3d series", "3d series")}</T>
        <T x={870} y={230} size={11} weight={800} fill={RED}>{"d-block ✗"}</T>
      </Fade>

      {/* beat 5 — red-margin: the answer */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 70 312 L 70 344" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={94} y={332} size={16} weight={800} fill={RED} anchor="start">
          {t("ANSWER: Z = 12 → magnesium", "ANSWER: Z = 12 → magnesium")}
        </T>
      </Fade>

      {/* beat 6 — the trap */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={370} size={13} fill={INK}>
          {t("all three distractors are transition metals — don't fall for it", "teeno distractors transition metals hain — inme mat phasna")}
        </T>
      </Fade>

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={200} y={392} w={680} h={34} fill={GREEN} textFill="#fff" size={14} script={false}>
          {t("representative means s or p only", "representative matlab sirf s ya p")}
        </Chip>
      </Fade>
    </Scene>
  );
}
