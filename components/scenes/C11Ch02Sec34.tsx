/**
 * C11 Ch02 · Section 34 — "Why Bohr's model still fails"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: concept`.
 *
 * Beats (en [0, 7.59, 20.22, 29.53, 39.17, 45.31, 61.7, 67.84]):
 *  0 anchor: Bohr's picture breaks down — a favorite exam theme
 *  1 crack ① one-electron only — a second electron brings unaccounted repulsion
 *  2 crack ② cannot predict helium or any multi-electron spectrum
 *  3 crack ③ cannot explain Zeeman/Stark line splitting
 *  4 crack ④ cannot explain chemical bonding
 *  5 guardrail (high, RED): deepest failure — definite orbit violates Heisenberg
 *  6 explain: ignores the electron's wave nature
 *  7 land (GREEN): doorway to the quantum-mechanical model, next
 *
 * Layout plan (numbered rows, circle x70 + text x100):
 *  title (always)          | T mid | x540 y56 script red
 *  b0 | anchor caption      | T mid | x540 y80            [dims@b1]
 *  b1 | ① circle + text     | Fade/T| cy108 / y113
 *  b2 | ② circle + text     | Fade/T| cy155 / y160
 *  b3 | ③ circle + text     | Fade/T| cy202 / y207
 *  b4 | ④ circle + text     | Fade/T| cy249 / y254
 *  b5 | guardrail box (RED) | Chip  | x140..940 y280..318
 *  b6 | explain caption     | T mid | x540 y346
 *  b7 | land caption (GRN)  | T mid | x540 y372
 */

import React from "react";
import { Circle, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

type Row = { cy: number; ty: number; en: string; hi: string };

const ROWS: Row[] = [
  {
    cy: 108,
    ty: 113,
    en: "works only for one-electron species — a second electron brings unaccounted repulsion",
    hi: "sirf one-electron species ke liye kaam karta — doosra electron unaccounted repulsion laata",
  },
  {
    cy: 155,
    ty: 160,
    en: "cannot predict helium or any multi-electron spectrum",
    hi: "helium ya kisi multi-electron spectrum ko predict nahi kar sakta",
  },
  {
    cy: 202,
    ty: 207,
    en: "cannot explain line splitting: Zeeman (magnetic) or Stark (electric)",
    hi: "line splitting explain nahi kar sakta: Zeeman (magnetic) ya Stark (electric)",
  },
  {
    cy: 249,
    ty: 254,
    en: "cannot explain chemical bonding",
    hi: "chemical bonding explain nahi kar sakta",
  },
];

export default function C11Ch02Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={56} size={16} fill={RED} script>
          {t("why Bohr's model still fails", "Bohr ka model abhi bhi kyun fail hota")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={80} size={12} fill={RED} script>
          {t(
            "Bohr's picture breaks down — knowing exactly how is a favorite exam theme",
            "Bohr ka picture toot jaata — exactly kaise, ek favourite exam theme hai"
          )}
        </T>
      </Fade>

      {/* beats 1–4 — the four cracks */}
      {ROWS.map((row, i) => (
        <React.Fragment key={row.cy}>
          <Fade on={beat >= i + 1} delay={dl(i + 1, 0.2)}>
            <Circle cx={70} cy={row.cy} r={14} fill={RED} />
            <SvgText x={70} y={row.cy + 5} fontSize={14} fill="#fff" textAnchor="middle" fontWeight={700}>
              {i + 1}
            </SvgText>
          </Fade>
          <Fade on={beat >= i + 1} delay={dl(i + 1, 0.6)}>
            <T x={100} y={row.ty} size={13} fill={INK} anchor="start">
              {t(row.en, row.hi)}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 5 — guardrail (high, RED): the deepest failure */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={140} y={280} w={800} h={38} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t(
            "the deepest failure: a definite orbit ⇒ definite position AND velocity — violates Heisenberg",
            "sabse gehri failure: definite orbit ⇒ definite position AUR velocity — Heisenberg violate"
          )}
        </Chip>
      </Fade>

      {/* beat 6 — explain: ignores wave nature */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={346} size={12} fill={INK} script>
          {t(
            "by assigning a sharp path, Bohr ignores the electron's wave nature",
            "sharp path dekar, Bohr electron ki wave nature ignore karta hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — land: the doorway ahead */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={372} size={13} fill={GREEN} script>
          {t(
            "these failures are the doorway to the quantum-mechanical model, next",
            "ye failures agle quantum-mechanical model ka darwaaza hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
