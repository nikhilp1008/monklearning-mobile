/**
 * C11 Ch06 · Section 72 — "Cheat sheet — quick rules and memory aids"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md. FINAL section of the chapter: seven one-glance rules,
 * numbered badges, closing with a "chapter complete" stamp.
 *
 * Beats (board_reveal_at_english: [0, 8.1, 19.1, 34.2, 44.2, 53.7, 63.2, 74.5]):
 *  0 title + underline
 *  1 rule 1 — only TEMPERATURE changes K
 *  2 rule 2 — direction from Q, extent from K>10³ / K<10⁻³
 *  3 rule 3 — combining toolkit rhyme
 *  4 rule 4 — Gibbs & heat
 *  5 rule 5 — Le Chatelier three-liner
 *  6 rule 6 — ionic: acid/base pH, dilution
 *  7 rule 7 — salts, subscripts, buffers + closing "chapter complete" stamp
 *
 * Layout plan (single numbered list, full width; longer language counts):
 *  b0 | title (script 20, red)        | T mid  | x170..910  y30..88  (bl 64)
 *  b1 | badge 1 + rule (16, ink)      | T st   | x40..1010 y92..104 (bl 98)
 *  b2 | badge 2 + rule 2 lines (14)   | T st   | x40..900  y150..175 (bl 156/175)
 *  b3 | badge 3 + rule (15, ink)      | T st   | x40..920  y208..220 (bl 214)
 *  b4 | badge 4 + rule (15, ink)      | T st   | x40..880  y266..278 (bl 272)
 *  b5 | badge 5 + rule 2 lines (14)   | T st   | x40..960  y324..349 (bl 330/349)
 *  b6 | badge 6 + rule 2 lines (14)   | T st   | x40..760  y382..407 (bl 388/407)
 *  b7 | badge 7 + rule 2 lines (14)   | T st   | x40..900  y440..465 (bl 446/465)
 *  b7 | closing stamp box (green)     | rect   | x270..810 y505..555
 */

import React from "react";
import { Circle, Rect, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const ANEK = 'AnekLatin_600SemiBold';

function Badge({ cx, cy, n }: { cx: number; cy: number; n: number }) {
  return (
    <>
      <Circle cx={cx} cy={cy} r={12} fill={AMBER} stroke={AMBER_DARK} strokeWidth={1.2} />
      <SvgText x={cx} y={cy + 4.5} textAnchor="middle" fontSize={12} fontWeight={700} fill={INK} fontFamily={ANEK}>
        {n}
      </SvgText>
    </>
  );
}

export default function C11Ch06Sec72({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("cheat sheet — quick rules and memory aids", "cheat sheet — quick rules aur memory aids")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 6)}
        d="M 410 84 C 470 80, 610 87, 670 83"
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />

      {/* rule 1 — the biggest rule */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Badge cx={54} cy={92} n={1} />
        <T x={76} y={98} size={16} fill={INK} weight={700} anchor="start">
          {t(
            "only TEMPERATURE changes K — catalyst, pressure, inert gas, concentration never do",
            "sirf TEMPERATURE K badalta — catalyst, pressure, inert gas, concentration kabhi nahi"
          )}
        </T>
      </Fade>

      {/* rule 2 — direction and extent */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Badge cx={54} cy={150} n={2} />
        <T x={76} y={156} size={14} fill={INK} anchor="start">
          {t("direction: Q low → go; Q high → bye", "direction: Q kam → go; Q zyada → bye")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={76} y={175} size={14} fill={INK} anchor="start">
          extent: K &gt; 10³ → products win; K &lt; 10⁻³ → reactants win
        </T>
      </Fade>

      {/* rule 3 — combining toolkit rhyme */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Badge cx={54} cy={208} n={3} />
        <T x={76} y={214} size={15} fill={INK} anchor="start">
          {t(
            "combining toolkit: reverse inverts, multiply powers, add multiplies",
            "combining toolkit: reverse inverts, multiply powers, add multiplies"
          )}
        </T>
      </Fade>

      {/* rule 4 — Gibbs & heat */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Badge cx={54} cy={266} n={4} />
        <T x={76} y={272} size={15} fill={INK} anchor="start">
          {t(
            "Gibbs & heat: negative ΔG° → big K; hotter helps the endothermic",
            "Gibbs & heat: negative ΔG° → bada K; garmi endothermic ki madad karta"
          )}
        </T>
      </Fade>

      {/* rule 5 — Le Chatelier three-liner */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Badge cx={54} cy={324} n={5} />
        <T x={76} y={330} size={14} fill={INK} anchor="start">
          {t(
            "Le Chatelier: the system fights the change; fewer gas moles win under pressure",
            "Le Chatelier: system change ka virodh karta; pressure mein kam gas moles jeetta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={76} y={349} size={14} fill={INK} anchor="start">
          {t("catalyst = speed, not yield", "catalyst = speed, yield nahi")}
        </T>
      </Fade>

      {/* rule 6 — ionic */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Badge cx={54} cy={382} n={6} />
        <T x={76} y={388} size={14} fill={INK} anchor="start">
          {t("ionic: acid → pH < 7, base → pH > 7", "ionic: acid → pH < 7, base → pH > 7")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={76} y={407} size={14} fill={INK} anchor="start">
          {t(
            "dilution nudges pH toward 7 — never across it",
            "dilution pH ko 7 ki taraf le jaata — kabhi paar nahi"
          )}
        </T>
      </Fade>

      {/* rule 7 — salts */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Badge cx={54} cy={440} n={7} />
        <T x={76} y={446} size={14} fill={INK} anchor="start">
          {t(
            "salts: the salt sides with the strong parent",
            "salts: salt strong parent ka saath deta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={76} y={465} size={14} fill={INK} anchor="start">
          {t(
            "read the subscripts before choosing the root; equal amounts = best buffer",
            "root chunne se pehle subscripts padho; equal amounts = best buffer"
          )}
        </T>
      </Fade>

      {/* closing stamp — chapter complete */}
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <Rect x={270} y={505} width={540} height={50} rx={14} fill={CREAM} stroke={GREEN} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.9)}>
        <T x={540} y={536} size={18} fill={GREEN_DARK} weight={800} anchor="middle">
          ✓ EQUILIBRIUM — CHAPTER COMPLETE
        </T>
      </Fade>
    </Scene>
  );
}
