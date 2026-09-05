/**
 * C11 Ch06 · Section 49 — "Ka, Kb and Ostwald's dilution law"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 7.6, 24, 32.2, 46.3, 57.4, 69]):
 *  0 title + underline
 *  1 Ka = [H+][A-]/[HA]     Kb = [B+][OH-]/[BOH]
 *  2 Ostwald's law: relates α (ionization) to concentration c
 *  3 Ka = cα²/(1−α) → (α≪1) → cα²
 *  4 land, ringed: α = √(Ka/c)     [H+] = √(Ka·c)
 *  5 insight, boxed: α ∝ 1/√c ⇒ dilution RAISES ionization
 *  6 mirror for base: [OH-] = √(Kb·c)
 *
 * Layout plan (centered stack; longer language counts):
 *  b1 | Ka/Kb definitions (16, ink) | T mid  | y99..120 (bl 112)
 *  b2 | Ostwald note (14, muted)    | T mid  | y134..149 (bl 145)
 *  b3 | simplification (17, ink)    | T mid  | y167..185 (bl 180)
 *  b4 | landed result ringed (22)   | T mid  | x361..719 y208..232 (bl 225)
 *  b5 | insight box (green)         | rect   | x250..830 y285..327
 *  b6 | mirror (15, ink)            | T mid  | y343..358 (bl 355)
 */

import React from "react";
import { Rect, TSpan, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, ringD, INK, MUTED, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const ANEK = 'AnekLatin_600SemiBold';

export default function C11Ch06Sec49({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={21} fill={RED} script>
          {t("Ka, Kb and Ostwald's dilution law", "Ka, Kb aur Ostwald ka dilution law")}
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

      {/* beat 1 — the two constants */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={112} size={16} fill={INK} anchor="middle">
          Ka = [H⁺][A⁻]/[HA]     Kb = [B⁺][OH⁻]/[BOH]
        </T>
      </Fade>

      {/* beat 2 — Ostwald's law intro */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={145} size={14} fill={MUTED} anchor="middle">
          {t(
            "Ostwald's dilution law: relates α (ionization) to concentration c",
            "Ostwald ka dilution law: α (ionization) ko concentration c se jodta"
          )}
        </T>
      </Fade>

      {/* beat 3 — the simplification */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <SvgText x={540} y={180} textAnchor="middle" fontSize={17} fill={INK} fontFamily={ANEK}>
          Ka = cα<TSpan dy={-8} fontSize={10.2}>2</TSpan>
          <TSpan dy={8}>/(1−α)  →  (α≪1)  →  cα</TSpan>
          <TSpan dy={-8} fontSize={10.2}>2</TSpan>
        </SvgText>
      </Fade>

      {/* beat 4 — the landed result */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={225} size={22} fill={GREEN} weight={800} anchor="middle">
          α = √(Ka/c)     [H⁺] = √(Ka·c)
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.1)}
        d={ringD(540, 220, 179, 24)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />

      {/* beat 5 — the insight */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Rect x={250} y={285} width={580} height={42} rx={10} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={540} y={311} size={15} fill={GREEN_DARK} weight={600} anchor="middle">
          {t(
            "α ∝ 1/√c ⇒ dilution RAISES ionization!",
            "α ∝ 1/√c ⇒ dilution ionization ko BADHATA!"
          )}
        </T>
      </Fade>

      {/* beat 6 — the base mirror */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={355} size={15} fill={INK} anchor="middle">
          {t("weak base mirror: [OH⁻] = √(Kb·c)", "weak base mirror: [OH⁻] = √(Kb·c)")}
        </T>
      </Fade>
    </Scene>
  );
}
