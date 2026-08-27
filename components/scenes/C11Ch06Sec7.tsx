/**
 * C11 Ch06 · Section 7 — "Law of mass action: writing Kc and Kp"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 31.6, 58.9, 94.7, 145.3, 214.7, 258.9, 324.2]):
 *  0 title + underline
 *  1 intro: reaction with stoichiometric coefficients a, b, c, d
 *  2 write: aA + bB ⇌ cC + dD
 *  3 statement: Kc = products over reactants, each to its power
 *  4 write the Kc fraction
 *  5 statement: same ratio from partial pressures → Kp
 *  6 write the Kp fraction
 *  7 guardrail: every bracket is an equilibrium MOLAR concentration
 *
 * Layout plan (centered stack; longer language counts):
 *  b0 | title (script 26, red)      | T mid  | x213..867  y30..92  (bl 64)
 *  b1 | intro (15, muted)           | T mid  | x285..795  y110..127 (bl 122)
 *  b2 | "aA + bB ⇌ cC + dD" (24)    | T mid  | x432..648  y150..176 (bl 168)
 *  b3 | Kc statement (15, muted)    | T mid  | x341..739  y198..215 (bl 210)
 *  b4 | "Kc =" (24, ink)            | T end  | x442..490 y286..306 (bl 298)
 *  b4 | numerator [C]^c [D]^d       | text   | x575..675 y252..272 (bl 272)
 *  b4 | fraction bar                | line   | x545..700 y284
 *  b4 | denominator [A]^a [B]^b     | text   | x575..675 y306..322 (bl 316)
 *  b5 | Kp statement (15, muted)    | T mid  | y352..369 (bl 360)
 *  b6 | "Kp =" (24, ink)            | T end  | x442..490 y416..436 (bl 428)
 *  b6 | numerator p(C)^c p(D)^d     | text   | x575..675 y384..402 (bl 402)
 *  b6 | fraction bar                | line   | x530..720 y414
 *  b6 | denominator p(A)^a p(B)^b   | text   | x575..675 y436..452 (bl 446)
 *  b7 | note box (amber, dashed)    | rect   | x140..940 y490..546
 *  b7 | note text (15, amber-dark)  | T mid  | y508..526 (bl 519)
 */

import React from "react";
import { Line, Rect, TSpan, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER, AMBER_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const ANEK = "var(--font-anek-latin), sans-serif";

/** [X]^exp [Y]^exp — bracket-notation fraction row (concentration form). */
function BracketPair({ x, y, s1, e1, s2, e2 }: { x: number; y: number; s1: string; e1: string; s2: string; e2: string }) {
  return (
    <SvgText x={x} y={y} textAnchor="middle" fontSize={20} fontWeight={600} fill={INK} fontFamily={ANEK}>
      [{s1}]<TSpan dy={-9} fontSize="0.6em">{e1}</TSpan>
      <TSpan dy={9}> [{s2}]</TSpan>
      <TSpan dy={-9} fontSize="0.6em">{e2}</TSpan>
    </SvgText>
  );
}

/** p(X)^exp p(Y)^exp — partial-pressure fraction row. */
function PressurePair({ x, y, s1, e1, s2, e2 }: { x: number; y: number; s1: string; e1: string; s2: string; e2: string }) {
  return (
    <SvgText x={x} y={y} textAnchor="middle" fontSize={18} fontWeight={600} fill={INK} fontFamily={ANEK}>
      p({s1})<TSpan dy={-8} fontSize="0.6em">{e1}</TSpan>
      <TSpan dy={8}> p({s2})</TSpan>
      <TSpan dy={-8} fontSize="0.6em">{e2}</TSpan>
    </SvgText>
  );
}

export default function C11Ch06Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("the law of mass action: writing Kc and Kp", "law of mass action: Kc aur Kp likhna")}
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

      {/* beat 1 — intro */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={122} size={15} fill={MUTED} anchor="middle">
          {t(
            "a reversible reaction with stoichiometric coefficients a, b, c, d",
            "ek reversible reaction, stoichiometric coefficients a, b, c, d ke saath"
          )}
        </T>
      </Fade>

      {/* beat 2 — the general equation */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={168} size={24} fill={INK} weight={700} anchor="middle">
          aA + bB ⇌ cC + dD
        </T>
      </Fade>

      {/* beat 3 — Kc statement */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={210} size={15} fill={MUTED} anchor="middle">
          {t(
            "Kc = products over reactants, each to its own power",
            "Kc = products upar, reactants neeche, apni-apni power tak"
          )}
        </T>
      </Fade>

      {/* beat 4 — the Kc fraction */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={490} y={298} size={24} fill={INK} weight={700} anchor="end">
          Kc =
        </T>
        <BracketPair x={620} y={272} s1="C" e1="c" s2="D" e2="d" />
        <Line x1={545} y1={284} x2={700} y2={284} stroke={INK} strokeWidth={1.8} />
        <BracketPair x={620} y={316} s1="A" e1="a" s2="B" e2="b" />
      </Fade>

      {/* beat 5 — Kp statement */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={360} size={15} fill={MUTED} anchor="middle">
          {t(
            "same ratio, but from partial pressures → Kp",
            "same ratio, par partial pressures se → Kp"
          )}
        </T>
      </Fade>

      {/* beat 6 — the Kp fraction */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={490} y={428} size={24} fill={INK} weight={700} anchor="end">
          Kp =
        </T>
        <PressurePair x={625} y={402} s1="C" e1="c" s2="D" e2="d" />
        <Line x1={530} y1={414} x2={720} y2={414} stroke={INK} strokeWidth={1.8} />
        <PressurePair x={625} y={446} s1="A" e1="a" s2="B" e2="b" />
      </Fade>

      {/* beat 7 — guardrail: brackets are molar concentrations */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Rect x={140} y={490} width={800} height={56} rx={12} fill={CREAM} stroke={AMBER} strokeWidth={1.8} strokeDasharray="7 6" />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={540} y={519} size={15} fill={AMBER_DARK} anchor="middle">
          {t(
            "every [ ] here is an equilibrium molar concentration (mol/L)",
            "yahaan har [ ] ek equilibrium molar concentration hai (mol/L)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
