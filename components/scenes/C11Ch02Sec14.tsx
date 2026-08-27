/**
 * C11 Ch02 · Section 14 — "Pitfalls and pro-tips: early atomic models"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: tips` — recap for subtopic 1.
 *
 * Beats (en [0, 8.11, 21.76, 34.9, 48.73, 61.95, 74.41, 93.7]):
 *  0 anchor: "four traps, one pro-tip — closing this subtopic"
 *  1 pitfall ① iso-family: anchor to what's CONSTANT
 *  2 pitfall ② ions: never set e⁻ = Z
 *  3 pitfall ③ don't swap ray properties
 *  4 pitfall ④ match observation → conclusion correctly
 *  5 note: MCQs list both as options — read carefully
 *  6 pro-tip (high, GREEN): write charge/mass as fractions, never compute
 *  7 closing: if the electron is listed, it almost always wins
 *
 * Layout plan (numbered rows, circle x70 + text x100):
 *  title (always)          | T mid | x540 y56 script red
 *  b0 | anchor caption      | T mid | x540 y80            [dims@b1]
 *  b1 | ① circle + text     | Fade/T| cy108 / y113
 *  b2 | ② circle + text     | Fade/T| cy155 / y160
 *  b3 | ③ circle + text     | Fade/T| cy202 / y207
 *  b4 | ④ circle + text     | Fade/T| cy249 / y254
 *  b5 | MCQ sub-note         | T sta | x100 y280
 *  b6 | pro-tip box (GREEN) | Chip  | x160..920 y308..350
 *  b7 | closing line (GREEN)| T mid | x540 y388
 */

import React from "react";
import { Circle, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

type Row = { cy: number; ty: number; en: string; hi: string };

const ROWS: Row[] = [
  {
    cy: 108,
    ty: 113,
    en: "iso-family: anchor to what's CONSTANT (Z, A, or N)",
    hi: "iso-family: jo CONSTANT hai usse anchor karo (Z, A, ya N)",
  },
  {
    cy: 155,
    ty: 160,
    en: "ions: never set e⁻ = Z — always write the adjustment",
    hi: "ions: e⁻ = Z mat maano — adjustment hamesha likho",
  },
  {
    cy: 202,
    ty: 207,
    en: "don't swap ray properties: cathode e/m universal, positive-ray NOT",
    hi: "ray properties swap mat karo: cathode e/m universal, positive-ray NOT",
  },
  {
    cy: 249,
    ty: 254,
    en: "match observation → conclusion: 'through'=empty space, 'back'=nucleus",
    hi: "observation → conclusion match karo: 'through'=empty space, 'back'=nucleus",
  },
];

export default function C11Ch02Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={56} size={17} fill={RED} script>
          {t("pitfalls and pro-tips: early atomic models", "pitfalls aur pro-tips: early atomic models")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={80} size={12} fill={RED} script>
          {t("four traps, one pro-tip — closing this subtopic", "chaar traps, ek pro-tip — subtopic band")}
        </T>
      </Fade>

      {/* beats 1–4 — the four pitfalls */}
      {ROWS.map((row, i) => (
        <React.Fragment key={row.cy}>
          <Fade on={beat >= i + 1} delay={dl(i + 1, 0.2)}>
            <Circle cx={70} cy={row.cy} r={14} fill={RED} />
            <SvgText x={70} y={row.cy + 5} fontSize={14} fill="#fff" textAnchor="middle" fontWeight={700}>
              {i + 1}
            </SvgText>
          </Fade>
          <Fade on={beat >= i + 1} delay={dl(i + 1, 0.6)}>
            <T x={100} y={row.ty} size={14} fill={INK} anchor="start">
              {t(row.en, row.hi)}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 5 — MCQ sub-note */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={100} y={280} size={11} fill={MUTED} anchor="start" script>
          {t(
            "MCQs list both as options — read which observation is named",
            "MCQ dono options deta hai — dhyaan se padho kaunsa observation hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — pro-tip (high emphasis, GREEN) */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={160} y={308} w={760} h={42} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14} script={false}>
          {t(
            "PRO-TIP: write charge/mass as fractions — never compute full values",
            "PRO-TIP: charge/mass ko fractions mein likho — pura compute mat karo"
          )}
        </Chip>
      </Fade>

      {/* beat 7 — closing line */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={388} size={14} fill={GREEN} script>
          {t(
            "if the electron is listed, it almost always wins",
            "agar electron list mein hai, wo almost hamesha jeetta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
