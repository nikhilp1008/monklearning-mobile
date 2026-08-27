/**
 * C11 Ch06 · Section 60 — "Linking Ksp to molar solubility: why the coefficient enters twice"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 7.4, 21.3, 30, 41.6, 54.9, 63.6]):
 *  0 title + underline
 *  1 setup: s mol/L dissolve → [Ag+]=2s, [CrO4²⁻]=s
 *  2 equation: Ag2CrO4(s) ⇌ 2Ag⁺ + CrO4²⁻
 *  3 land, ringed: Ksp=(2s)²(s)=4s³ ⇒ s=(Ksp/4)^(1/3)
 *  4 guardrail, boxed: coefficient enters TWICE — multiplier AND exponent
 *  5 note: forgetting either = classic error
 *  6 contrast, boxed: √Ksp works only for 1:1 salts (AgCl)
 *
 * Layout plan (centered stack; longer language counts):
 *  b1 | setup (15, ink)             | T mid  | y100..117 (bl 112)
 *  b2 | equation (18, ink)          | T mid  | y136..156 (bl 150)
 *  b3 | landed result ringed (20)   | T mid  | x326..754 y184..206 (bl 200)
 *  b4 | guardrail box (red)         | rect   | x170..910 y260..302
 *  b5 | note (14, muted)            | T mid  | y327..341 (bl 332)
 *  b6 | contrast box (green)        | rect   | x210..870 y360..402
 */

import React from "react";
import { Rect, TSpan, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, ringD, INK, MUTED, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const ANEK = "var(--font-anek-latin), sans-serif";

export default function C11Ch06Sec60({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={18} fill={RED} script>
          {t("Ksp → solubility: the coefficient enters twice", "Ksp → solubility: coefficient do baar aata")}
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

      {/* beat 1 — the setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={112} size={15} fill={INK} anchor="middle">
          {t("s mol/L dissolve → [Ag⁺]=2s, [CrO₄²⁻]=s", "s mol/L dissolve → [Ag⁺]=2s, [CrO₄²⁻]=s")}
        </T>
      </Fade>

      {/* beat 2 — the equation */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={150} size={18} fill={INK} weight={700} anchor="middle">
          Ag₂CrO₄(s) ⇌ 2Ag⁺ + CrO₄²⁻
        </T>
      </Fade>

      {/* beat 3 — the landed result */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <SvgText x={540} y={200} textAnchor="middle" fontSize={20} fontWeight={800} fill={GREEN_DARK} fontFamily={ANEK}>
          Ksp = (2s)<TSpan dy={-9} fontSize="0.6em">2</TSpan>
          <TSpan dy={9}>(s) = 4s</TSpan>
          <TSpan dy={-9} fontSize="0.6em">3</TSpan>
          <TSpan dy={9}> ⇒ s = (Ksp/4)</TSpan>
          <TSpan dy={-9} fontSize="0.6em">1/3</TSpan>
        </SvgText>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.1)}
        d={ringD(540, 195, 214, 23)}
        stroke={GREEN_DARK}
        sw={2.4}
        dur={0.8}
      />

      {/* beat 4 — the guardrail */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Rect x={170} y={260} width={740} height={42} rx={10} fill={CREAM} stroke={RED} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={540} y={286} size={15} fill={RED} weight={600} anchor="middle">
          {t(
            "the coefficient enters TWICE: multiplier AND exponent",
            "coefficient DO BAAR aata: multiplier AUR exponent"
          )}
        </T>
      </Fade>

      {/* beat 5 — the classic error */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={332} size={14} fill={MUTED} anchor="middle">
          {t("forgetting either = classic error", "koi bhi bhoolna = classic error")}
        </T>
      </Fade>

      {/* beat 6 — the exception */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Rect x={210} y={360} width={660} height={42} rx={10} fill={CREAM} stroke={GREEN_DARK} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={540} y={386} size={15} fill={GREEN_DARK} weight={600} anchor="middle">
          {t(
            "√Ksp works ONLY for 1:1 salts (like AgCl)",
            "√Ksp sirf 1:1 salts ke liye kaam karta (jaise AgCl)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
