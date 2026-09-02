/**
 * C11 Ch06 · Section 64 — "Solubility product and the Ksp-to-solubility table"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 6.6, 19.3, 29.4, 42.8, 54.7, 63]):
 *  0 title + underline
 *  1 general note: Ksp = [cation]^coeff × [anion]^coeff
 *  2 table row 1 (+ grid + header): AB type — Ksp=s² ⇒ s=√Ksp
 *  3 table row 2: A2B/AB2 type — Ksp=4s³ ⇒ s=(Ksp/4)^(1/3)
 *  4 table row 3: AB3 type — Ksp=27s⁴ ⇒ s=(Ksp/27)^(1/4)
 *  5 rule, boxed: read subscripts FIRST, choose the matching root
 *  6 units note: M raised to total ions
 *
 * Layout plan (3-col × 4-row table; longer language counts):
 *  b1 | general note (14, muted)    | T mid  | y100..117 (bl 112)
 *  b2 | grid + header               | Draw/T | x100..900 y135..170
 *  b2 | row1 (AB/AgCl)              | text   | y186..201 (bl 193)
 *  b3 | row2 (A2B-AB2/CaF2)         | text   | y221..236 (bl 228)
 *  b4 | row3 (AB3/Fe(OH)3)          | text   | y256..271 (bl 263)
 *  b5 | rule box (amber)            | rect   | x170..910 y300..340
 *  b6 | units (13, muted)           | T mid  | y359..373 (bl 365)
 */

import React from "react";
import { Rect, TSpan, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER, AMBER_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const ANEK = 'AnekLatin_600SemiBold';
const COLX = [100, 320, 560, 900];
const ROWY = [135, 170, 205, 240, 275];

export default function C11Ch06Sec64({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const gridD =
    COLX.map((x) => `M ${x} ${ROWY[0]} V ${ROWY[4]}`).join(" ") +
    " " +
    ROWY.map((y) => `M ${COLX[0]} ${y} H ${COLX[3]}`).join(" ");

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={18} fill={RED} script>
          {t("Ksp → solubility: the type table", "Ksp → solubility: type table")}
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

      {/* beat 1 — the general relation */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={112} size={14} fill={MUTED} anchor="middle">
          {t(
            "general: Ksp = [cation] to its coefficient × [anion] to its coefficient",
            "general: Ksp = [cation] apni coefficient tak × [anion] apni coefficient tak"
          )}
        </T>
      </Fade>

      {/* beat 2 — grid, header, row 1 (AB type) */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d={gridD} stroke={INK} sw={1.8} dur={beat > 2 ? 0.3 : 0.9} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={210} y={158} size={13} fill={INK} weight={700} anchor="middle">
          {t("type (example)", "type (example)")}
        </T>
        <T x={440} y={158} size={13} fill={INK} weight={700} anchor="middle">Ksp</T>
        <T x={730} y={158} size={13} fill={INK} weight={700} anchor="middle">s =</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={210} y={193} size={13} fill={INK} anchor="middle">AB (AgCl)</T>
        <SvgText x={440} y={193} textAnchor="middle" fontSize={13} fill={INK} fontFamily={ANEK}>
          s<TSpan dy={-6} fontSize={8.5}>2</TSpan>
        </SvgText>
        <T x={730} y={193} size={13} fill={INK} anchor="middle">√Ksp</T>
      </Fade>

      {/* beat 3 — row 2 (A2B / AB2 type) */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={210} y={228} size={13} fill={INK} anchor="middle">
          {t("A₂B/AB₂ (CaF₂)", "A₂B/AB₂ (CaF₂)")}
        </T>
        <SvgText x={440} y={228} textAnchor="middle" fontSize={13} fill={INK} fontFamily={ANEK}>
          4s<TSpan dy={-6} fontSize={8.5}>3</TSpan>
        </SvgText>
        <SvgText x={730} y={228} textAnchor="middle" fontSize={13} fill={INK} fontFamily={ANEK}>
          (Ksp/4)<TSpan dy={-6} fontSize={8.5}>1/3</TSpan>
        </SvgText>
      </Fade>

      {/* beat 4 — row 3 (AB3 type) */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={210} y={263} size={13} fill={INK} anchor="middle">
          {t("AB₃ (Fe(OH)₃)", "AB₃ (Fe(OH)₃)")}
        </T>
        <SvgText x={440} y={263} textAnchor="middle" fontSize={13} fill={INK} fontFamily={ANEK}>
          27s<TSpan dy={-6} fontSize={8.5}>4</TSpan>
        </SvgText>
        <SvgText x={730} y={263} textAnchor="middle" fontSize={13} fill={INK} fontFamily={ANEK}>
          (Ksp/27)<TSpan dy={-6} fontSize={8.5}>1/4</TSpan>
        </SvgText>
      </Fade>

      {/* beat 5 — the rule of thumb */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Rect x={170} y={300} width={740} height={40} rx={10} fill={CREAM} stroke={AMBER} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={540} y={325} size={14} fill={AMBER_DARK} weight={600} anchor="middle">
          {t(
            "read subscripts FIRST, then choose the matching root",
            "pehle subscripts padho, phir matching root choose karo"
          )}
        </T>
      </Fade>

      {/* beat 6 — the units */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={365} size={13} fill={MUTED} anchor="middle">
          {t(
            "Ksp units = M raised to the total number of ions",
            "Ksp units = M ki power, total ions ke barabar"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
