/**
 * C11 Chemistry Ch03 · Section 12 — "Worked example: name and block for Z = 124 (JEE Main)"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 * NOTE: title is always-on script (Kalam) — Kalam renders capital "Z" as "2"
 * (verified via font test), so the title avoids bare "Z" and says
 * "atomic number 124" instead. Body text below uses non-script, so bare "Z"
 * is safe there.
 *
 * Beats (en [0, 13.65, 19.2, 32.09, 48.73, 54.95, 74.67, 96.17]):
 *  0 title + underline
 *  1 Part (a) label + "124" digit chip
 *  2 arrow + "un · bi · quad" root chip
 *  3 arrow + green stamp "unbiquadium (Ubq)" — formula, high emphasis
 *  4 Part (b) label: predict the block, extended Aufbau
 *  5 anchor: Og(118) = [Rn] 5f¹⁴6d¹⁰7s²7p⁶ ; next (119,120) → 8s
 *  6 red-margin: from 121 onward 5g fills ⇒ 124 lands in g-block + green tag
 *  7 closing amber stamp: stitches naming + electron-filling — JEE favourite
 *
 * Layout plan:
 *  b1 | Part(a) label + "124" chip | Chip  | x70..160  y116..156
 *  b2 | arrow + roots chip         | Chip  | x216..416 y116..156
 *  b3 | arrow + green stamp        | Chip  | x472..752 y116..156
 *  b4 | Part(b) label              | T st  | x70..?    y179..194 (bl 190)
 *  b5 | 2 lines (16,w700,ink)      | T st  | x70..?    y210..255 (bl 222/250)
 *  b6 | red margin bar + line      | Draw  | x70  y270..306 (bl 292)
 *  b6 | g-block tag (green)        | Chip  | x400..600 y316..354
 *  b7 | closing stamp (amber)      | Chip  | x190..890 y374..410
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch03Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("element 124 — name and block (JEE Main)", "element 124 — naam aur block (JEE Main)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 380 88 C 450 84, 630 84, 700 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — Part (a): break into digits */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={70} y={104} size={14} weight={800} fill={AMBER_DARK} anchor="start">
          {t("PART (a) — name & symbol", "PART (a) — naam aur symbol")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Chip x={70} y={116} w={90} h={40} fill="#FFFEFB" stroke={INK} textFill={INK} size={18} script={false}>
          124
        </Chip>
      </Fade>

      {/* beat 2 — convert digits to roots */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d={arrowD(170, 136, 208, 136)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <Chip x={216} y={116} w={200} h={40} fill="#FFFEFB" stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          un · bi · quad
        </Chip>
      </Fade>

      {/* beat 3 — join + -ium ending */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d={arrowD(426, 136, 464, 136)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <Chip x={472} y={116} w={280} h={40} fill={GREEN} textFill="#fff" size={15} script={false}>
          unbiquadium (Ubq)
        </Chip>
      </Fade>

      {/* beat 4 — Part (b): predict the block */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={70} y={190} size={14} weight={800} fill={AMBER_DARK} anchor="start">
          {t("PART (b) — predict the block (extended Aufbau)", "PART (b) — block predict karo (extended Aufbau)")}
        </T>
      </Fade>

      {/* beat 5 — anchor on the last noble gas */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={70} y={222} size={16} weight={700} fill={INK} anchor="start">
          Og (118) = [Rn] 5f¹⁴ 6d¹⁰ 7s² 7p⁶
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={70} y={250} size={16} weight={700} fill={INK} anchor="start">
          {t("next (119, 120) electrons enter 8s", "next (119, 120) electrons 8s mein jaate")}
        </T>
      </Fade>

      {/* beat 6 — the g-block prediction */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 70 270 L 70 306" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={94} y={292} size={16} weight={700} fill={INK} anchor="start">
          {t("from 121 onward, 5g fills ⇒ 124 lands in the predicted g-block", "121 se aage, 5g fill hota ⇒ 124 predicted g-block mein")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <Chip x={400} y={316} w={200} h={38} fill={GREEN} textFill="#fff" size={16} script={false}>
          → g-block
        </Chip>
      </Fade>

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={190} y={374} w={700} h={36} fill={AMBER} textFill={INK} size={14} script={false}>
          {t("stitches digit-naming + electron-filling — a JEE Main favourite", "digit-naming + electron-filling ka mix — JEE Main favourite")}
        </Chip>
      </Fade>
    </Scene>
  );
}
