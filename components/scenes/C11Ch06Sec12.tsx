/**
 * C11 Ch06 · Section 12 — "Worked example — PCl5 dissociation, Kp in α and P (JEE Main)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 37.4, 64.9, 129.7, 189.6, 262, 306.9, 384.2]):
 *  0 title + underline
 *  1 equation: PCl5(g) ⇌ PCl3(g) + Cl2(g)
 *  2 ICE table built row by row: I(1,0,0) C(-α,+α,+α) E(1-α,α,α)
 *  3 total moles = 1+α; p(i) = mole fraction × P
 *  4 Kp = p(PCl3)p(Cl2)/p(PCl5) = α²P/(1-α²), stacked fraction
 *  5 plug in: α = 0.50, P = 1.5 atm
 *  6 compute: (0.50)²(1.5)/(1-(0.50)²) = 0.375/0.75
 *  7 land: Kp = 0.50 atm, ringed + memorise note
 *
 * Layout plan (centered stack; grid x250..830 y145..273):
 *  b0 | title (script 22, red)      | T mid  | x237..843  y30..88  (bl 64)
 *  b1 | equation (18, ink)          | T mid  | x400..680 y101..122 (bl 115)
 *  b2 | ICE grid (4 cols × 4 rows)  | Draw   | x250..830 y145..273
 *  b3 | total-moles note (14, mu)   | T mid  | y293..307 (bl 300)
 *  b4 | symbolic Kp (13, muted)     | T mid  | y324..337 (bl 330)
 *  b4 | Kp = α²P/(1-α²) fraction    | text   | x460..600 y357..414
 *  b5 | plug-in note (15, muted)    | T mid  | y439..454 (bl 445)
 *  b6 | numeric compute (17, ink)   | T mid  | y465..484 (bl 478)
 *  b7 | "Kp = 0.50 atm" ringed      | T mid  | x456..624 y501..528 (bl 520)
 *  b7 | memorise note (13, amber)   | T mid  | x322..758 y558..582 (bl 575)
 */

import React from "react";
import { Line, TSpan, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, ringD, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

const ANEK = 'AnekLatin_600SemiBold';
const COLX = [250, 350, 510, 670, 830];
const ROWY = [145, 177, 209, 241, 273];

export default function C11Ch06Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const gridD =
    COLX.map((x) => `M ${x} ${ROWY[0]} V ${ROWY[4]}`).join(" ") +
    " " +
    ROWY.map((y) => `M ${COLX[0]} ${y} H ${COLX[4]}`).join(" ");

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("worked example: PCl5 dissociation — Kp in α and P", "worked example: PCl5 dissociation — Kp, α aur P")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 6)}
        d="M 430 84 C 480 80, 600 87, 650 83"
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />

      {/* beat 1 — the equation */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={115} size={18} fill={INK} weight={700} anchor="middle">
          PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)
        </T>
      </Fade>

      {/* beat 2 — the ICE table, built row by row */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={gridD} stroke={INK} sw={2} dur={beat > 2 ? 0.3 : 1} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={(COLX[1] + COLX[2]) / 2} y={165} size={15} fill={INK} weight={700} anchor="middle">PCl₅</T>
        <T x={(COLX[2] + COLX[3]) / 2} y={165} size={15} fill={INK} weight={700} anchor="middle">PCl₃</T>
        <T x={(COLX[3] + COLX[4]) / 2} y={165} size={15} fill={INK} weight={700} anchor="middle">Cl₂</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={(COLX[0] + COLX[1]) / 2} y={197} size={14} fill={MUTED} anchor="middle">I</T>
        <T x={(COLX[1] + COLX[2]) / 2} y={197} size={15} fill={INK} anchor="middle">1</T>
        <T x={(COLX[2] + COLX[3]) / 2} y={197} size={15} fill={INK} anchor="middle">0</T>
        <T x={(COLX[3] + COLX[4]) / 2} y={197} size={15} fill={INK} anchor="middle">0</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={(COLX[0] + COLX[1]) / 2} y={229} size={14} fill={MUTED} anchor="middle">C</T>
        <T x={(COLX[1] + COLX[2]) / 2} y={229} size={15} fill={RED} anchor="middle">−α</T>
        <T x={(COLX[2] + COLX[3]) / 2} y={229} size={15} fill={GREEN} anchor="middle">+α</T>
        <T x={(COLX[3] + COLX[4]) / 2} y={229} size={15} fill={GREEN} anchor="middle">+α</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.5)}>
        <T x={(COLX[0] + COLX[1]) / 2} y={261} size={14} fill={MUTED} anchor="middle">E</T>
        <T x={(COLX[1] + COLX[2]) / 2} y={261} size={15} fill={INK} weight={700} anchor="middle">1−α</T>
        <T x={(COLX[2] + COLX[3]) / 2} y={261} size={15} fill={INK} weight={700} anchor="middle">α</T>
        <T x={(COLX[3] + COLX[4]) / 2} y={261} size={15} fill={INK} weight={700} anchor="middle">α</T>
      </Fade>

      {/* beat 3 — total moles and partial pressure */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={300} size={14} fill={MUTED} anchor="middle">
          {t(
            "total moles = 1 + α;  p(i) = mole fraction × P",
            "total moles = 1 + α;  p(i) = mole fraction × P"
          )}
        </T>
      </Fade>

      {/* beat 4 — Kp in terms of α and P */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={330} size={13} fill={MUTED} anchor="middle">
          Kp = p(PCl₃)·p(Cl₂) / p(PCl₅)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={460} y={390} size={20} fill={INK} weight={700} anchor="end">
          Kp =
        </T>
        <SvgText x={545} y={372} textAnchor="middle" fontSize={19} fill={INK} fontFamily={ANEK}>
          α<TSpan dy={-8} fontSize={11.8}>2</TSpan>
          <TSpan dy={8}>P</TSpan>
        </SvgText>
        <Line x1={505} y1={382} x2={600} y2={382} stroke={INK} strokeWidth={1.8} />
        <SvgText x={545} y={408} textAnchor="middle" fontSize={19} fill={INK} fontFamily={ANEK}>
          1−α<TSpan dy={-8} fontSize={11.8}>2</TSpan>
        </SvgText>
      </Fade>

      {/* beat 5 — plug in numbers */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={445} size={15} fill={MUTED} anchor="middle">
          {t("α = 0.50, P = 1.5 atm", "α = 0.50, P = 1.5 atm")}
        </T>
      </Fade>

      {/* beat 6 — compute */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <SvgText x={540} y={478} textAnchor="middle" fontSize={17} fontWeight={700} fill={INK} fontFamily={ANEK}>
          = (0.50)<TSpan dy={-8} fontSize={10.2}>2</TSpan>
          <TSpan dy={8}>(1.5) / (1−(0.50)</TSpan>
          <TSpan dy={-8} fontSize={10.2}>2</TSpan>
          <TSpan dy={8}>) = 0.375/0.75</TSpan>
        </SvgText>
      </Fade>

      {/* beat 7 — the answer, ringed, plus the reusable form */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={520} size={24} fill={GREEN} weight={800} anchor="middle">
          Kp = 0.50 atm
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.1)}
        d={ringD(540, 514, 98, 25)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.8)}>
        <T x={540} y={575} size={13} fill={AMBER_DARK} script anchor="middle">
          {t(
            "memorise: α²P/(1−α²) — recurs for every 1→2 gas dissociation",
            "yaad rakho: α²P/(1−α²) — har 1→2 gas dissociation mein aata"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
