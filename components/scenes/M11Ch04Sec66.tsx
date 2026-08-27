/**
 * M11 Ch04 · Section 66 — "Cheat sheet: fast recall before the exam"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: cheat_sheet — no segments_english/hinglish (expected, per
 * SCENE_AUTHORING_MATHS.md's data-source note); board_content read directly.
 * Final section of the chapter. Same "notes page" contract as Sec65's
 * formula_recap, but framed as fast-recall reminders/pitfalls rather than
 * formulas — cards use a lighter ring style, RED for the two "note" beats
 * carrying the sharpest exam traps (3 and 7).
 *
 * Beats (board_reveal_at_english [0, 6.4, 17.24, 32.94, 43.01, 52.99, 68.27, 78.42]):
 *  0 heading: quick-recall cheat sheet
 *  1 card (r0c0): powers of i sum to zero
 *  2 card (r0c1): root trap + squares shortcut
 *  3 card (r1c0, guardrail): conjugate/negation, order undefined on C
 *  4 card (r1c1): argument by quadrant, one line each
 *  5 card (r2c0): three quick polar conversions
 *  6 card (r2c1): nth roots count + omega reduction
 *  7 card (r3, full width, guardrail): loci quick recall
 *
 * Grid: 2 cols (x=60,560, w=460) x 3 rows (y=112,234,356, h=112) for cards
 * 1-6; card 7 spans the full width (x=60, w=960, y=478, h=112) — same grid
 * geometry as the verified M11Ch04Sec65 companion section, for visual
 * continuity between the two closing sections.
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, T, INK, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { Overline } from "./math-kit";

const COL = [60, 560];
const ROW = [112, 234, 356];
const CARD_W = 460;
const CARD_H = 112;

function Card({
  on,
  delay,
  x,
  y,
  w = CARD_W,
  stroke,
  title,
  children,
}: {
  on: boolean;
  delay: number;
  x: number;
  y: number;
  w?: number;
  stroke: string;
  title: string;
  children: React.ReactNode;
}) {
  const sw = stroke === RED ? 2.6 : 2;
  return (
    <>
      <Fade on={on} delay={delay}>
        <Rect x={x} y={y} width={w} height={CARD_H} rx={14} fill={CREAM} stroke={stroke} strokeWidth={sw} />
      </Fade>
      <Fade on={on} delay={delay + 0.3}>
        <T x={x + 20} y={y + 20} size={12} fill={stroke} anchor="start" weight={700}>
          {title}
        </T>
      </Fade>
      {children}
    </>
  );
}

export default function M11Ch04Sec66({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Cheat Sheet: Fast Recall Before the Exam", "Cheat Sheet: Exam Se Pehle Fast Recall")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={90} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Quick-recall cheat sheet", "Quick-recall cheat sheet")}
        </T>
      </Fade>

      {/* beat 1 — powers of i sum to zero */}
      <Card on={beat >= 1} delay={dl(1, 0)} x={COL[0]} y={ROW[0]} stroke={AMBER_DARK} title={t("Powers of i", "i ke Powers")}>
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={COL[0] + 20} y={ROW[0] + 48} size={14} fill={INK} anchor="start">i^(4k) = 1</T>
          <T x={COL[0] + 20} y={ROW[0] + 76} size={13} fill={INK} anchor="start">
            {t("4 consecutive powers of i sum to 0", "i ke 4 consecutive powers ka sum 0")}
          </T>
        </Fade>
      </Card>

      {/* beat 2 — root trap + squares shortcut */}
      <Card on={beat >= 2} delay={dl(2, 0)} x={COL[1]} y={ROW[0]} stroke={AMBER_DARK} title={t("Root Trap & Squares", "Root Trap & Squares")}>
        <Fade on={beat >= 2} delay={dl(2, 0.5)}>
          <T x={COL[1] + 20} y={ROW[0] + 48} size={13} fill={INK} anchor="start">√-a · √-b = -√ab  (a, b {">"} 0)</T>
          <T x={COL[1] + 20} y={ROW[0] + 76} size={13} fill={INK} anchor="start">(1+i)² = 2i,  (1-i)² = -2i</T>
        </Fade>
      </Card>

      {/* beat 3 — conjugate/negation guardrail */}
      <Card on={beat >= 3} delay={dl(3, 0)} x={COL[0]} y={ROW[1]} stroke={RED} title={t("Conjugate & Negation", "Conjugate & Negation")}>
        <Fade on={beat >= 3} delay={dl(3, 0.5)}>
          <T x={COL[0] + 20} y={ROW[1] + 44} size={13} fill={INK} anchor="start">z</T>
          <Overline on={beat >= 3} delay={dl(3, 0.5)} x={COL[0] + 20} y={ROW[1] + 44} size={13} textWidth={9} anchor="start" />
          <T x={COL[0] + 33} y={ROW[1] + 44} size={13} fill={INK} anchor="start">
            {t("flips the imaginary sign", "imaginary sign flip karta hai")}
          </T>
          <T x={COL[0] + 20} y={ROW[1] + 66} size={13} fill={INK} anchor="start">
            {t("-z flips both", "-z dono flip karta hai")}
          </T>
          <T x={COL[0] + 20} y={ROW[1] + 88} size={13} fill={RED} anchor="start" weight={700}>
            {t("Order undefined on C", "C par order undefined hai")}
          </T>
        </Fade>
      </Card>

      {/* beat 4 — argument by quadrant */}
      <Card on={beat >= 4} delay={dl(4, 0)} x={COL[1]} y={ROW[1]} stroke={AMBER_DARK} title={t("Argument by Quadrant", "Quadrant se Argument")}>
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={COL[1] + 20} y={ROW[1] + 44} size={13} fill={INK} anchor="start">I → α,   II → π - α</T>
          <T x={COL[1] + 20} y={ROW[1] + 68} size={13} fill={INK} anchor="start">III → α - π,   IV → -α</T>
        </Fade>
      </Card>

      {/* beat 5 — quick polar conversions */}
      <Card on={beat >= 5} delay={dl(5, 0)} x={COL[0]} y={ROW[2]} stroke={AMBER_DARK} title={t("Quick Polar Conversions", "Quick Polar Conversions")}>
        <Fade on={beat >= 5} delay={dl(5, 0.5)}>
          <T x={COL[0] + 20} y={ROW[2] + 42} size={13} fill={INK} anchor="start">1+i = √2 ∠(π/4)</T>
          <T x={COL[0] + 20} y={ROW[2] + 64} size={13} fill={INK} anchor="start">1+i√3 = 2 ∠(π/3)</T>
          <T x={COL[0] + 20} y={ROW[2] + 86} size={13} fill={INK} anchor="start">√3+i = 2 ∠(π/6)</T>
        </Fade>
      </Card>

      {/* beat 6 — nth roots count + omega reduction */}
      <Card on={beat >= 6} delay={dl(6, 0)} x={COL[1]} y={ROW[2]} stroke={AMBER_DARK} title={t("nth Roots", "nth Roots")}>
        <Fade on={beat >= 6} delay={dl(6, 0.5)}>
          <T x={COL[1] + 20} y={ROW[2] + 48} size={13} fill={INK} anchor="start">
            {t("Exactly n values", "Theek n values")}
          </T>
          <T x={COL[1] + 20} y={ROW[2] + 76} size={13} fill={INK} anchor="start">
            {t("Reduce ω powers mod 3", "ω ke powers ko mod 3 karo")}
          </T>
        </Fade>
      </Card>

      {/* beat 7 — loci quick recall guardrail (full width) */}
      <Card on={beat >= 7} delay={dl(7, 0)} x={60} y={478} w={960} stroke={RED} title={t("Loci Quick Recall", "Loci Quick Recall")}>
        <Fade on={beat >= 7} delay={dl(7, 0.5)}>
          <T x={80} y={522} size={13} fill={INK} anchor="start">
            {t("Apollonius k=1 = line;   arg-locus = arc (not the full circle)", "Apollonius k=1 = line;   arg-locus = arc (poora circle nahi)")}
          </T>
          <T x={80} y={546} size={13} fill={INK} anchor="start">
            {t("On a circle: |z| = |z₀| ± r", "Circle par: |z| = |z₀| ± r")}
          </T>
        </Fade>
      </Card>
    </Scene>
  );
}
