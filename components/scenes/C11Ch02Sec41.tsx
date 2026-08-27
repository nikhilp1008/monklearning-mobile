/**
 * C11 Ch02 · Section 41 — "Pitfalls and pro-tips: Bohr and duality"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: tips` — recap for subtopic 3.
 *
 * Beats (en [0, 11.43, 27.39, 39.51, 57.94, 66.3, 80.47, 94.55]):
 *  0 anchor: "four traps, one pro-tip — closing this subtopic"
 *  1 pitfall ① wrong power in the scaling laws
 *  2 pitfall ② miscounting lines: n(n−1)/2, not n−1
 *  3 pitfall ③ applying Bohr to multi-electron atoms
 *  4 pitfall ④ dropping the negative sign on Eₙ
 *  5 note: absorbed/released are positive, but Eₙ itself stays negative
 *  6 pro-tip (high, RED — guardrail-style): same transition, different ion
 *  7 closing: series order and the n₁ rule
 *
 * Layout plan (numbered rows, circle x70 + text x100):
 *  title (always)          | T mid | x540 y56 script red
 *  b0 | anchor caption      | T mid | x540 y80            [dims@b1]
 *  b1 | ① circle + text     | Fade/T| cy108 / y113
 *  b2 | ② circle + text     | Fade/T| cy155 / y160
 *  b3 | ③ circle + text     | Fade/T| cy202 / y207
 *  b4 | ④ circle + text     | Fade/T| cy249 / y254
 *  b5 | sign sub-note        | T sta | x100 y280
 *  b6 | pro-tip box (RED)   | Chip  | x140..940 y308..350
 *  b7 | closing line        | T mid | x540 y388
 */

import React from "react";
import { Circle, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, MUTED, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

type Row = { cy: number; ty: number; en: string; hi: string };

const ROWS: Row[] = [
  {
    cy: 108,
    ty: 113,
    en: "wrong power in scaling: r∝n²/Z, E∝Z²/n², v∝Z/n, ν̄∝Z²",
    hi: "scaling mein galat power: r∝n²/Z, E∝Z²/n², v∝Z/n, ν̄∝Z²",
  },
  {
    cy: 155,
    ty: 160,
    en: "miscounting lines: n→ground is n(n−1)/2, NOT n−1",
    hi: "lines miscount karna: n→ground n(n−1)/2 hai, n−1 NAHI",
  },
  {
    cy: 202,
    ty: 207,
    en: "Bohr valid only for one-electron species: H, He⁺, Li²⁺, Be³⁺",
    hi: "Bohr sirf one-electron species ke liye: H, He⁺, Li²⁺, Be³⁺",
  },
  {
    cy: 249,
    ty: 254,
    en: "dropping the sign: orbit energies Eₙ are ALWAYS negative",
    hi: "sign gira dena: orbit energies Eₙ hamesha negative hoti hain",
  },
];

export default function C11Ch02Sec41({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={56} size={17} fill={RED} script>
          {t("pitfalls and pro-tips: Bohr and duality", "pitfalls aur pro-tips: Bohr aur duality")}
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

      {/* beat 5 — sign sub-note */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={100} y={280} size={11} fill={MUTED} anchor="start" script>
          {t(
            "absorbed (up) and released (down) are positive — Eₙ itself stays negative",
            "absorbed (up) aur released (down) positive hain — Eₙ khud negative rehta hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — pro-tip (high emphasis, guardrail-style RED) */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={140} y={308} w={800} h={42} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "PRO-TIP: same transition, different ion ⇒ λ∝1/Z², E∝Z² — never recompute",
            "PRO-TIP: same transition, different ion ⇒ λ∝1/Z², E∝Z² — dobara mat karo"
          )}
        </Chip>
      </Fade>

      {/* beat 7 — closing: series order and the n₁ rule */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={388} size={13} fill={INK} script>
          {t(
            "Lyman UV, Balmer visible, the rest IR — lower n₁ means higher energy",
            "Lyman UV, Balmer visible, baaki IR — lower n₁ matlab higher energy"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
