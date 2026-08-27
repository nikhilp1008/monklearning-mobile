/**
 * P12Ch02 · Section 62 — "JEE Main: reducing a mixed network"
 * Subtopic: Series & Parallel Combinations & Charge Sharing
 *
 * TWO DEFECTS FIXED (2026-08-21):
 *
 * 1. THE BOARD TAUGHT A COMPLETELY DIFFERENT PROBLEM FROM THE VOICE. The old
 *    scene drew a five-capacitor balanced Wheatstone bridge and argued that the
 *    central C₅ carries zero charge and can be removed. The narration never
 *    mentions a bridge, a balance condition, or C₅ — it reduces a mixed
 *    network: C₁ = 3 µF in series with C₂ = 6 µF, that pair in parallel with
 *    C₃ = 4 µF, all across a 12 V battery. Every quantity on the board now
 *    comes from the narration, and the arithmetic is recomputed from it:
 *        series pair   C₁₂ = 3 × 6 / (3 + 6) = 18 / 9 = 2 µF
 *        equivalent    C_eq = 2 + 4 = 6 µF
 *        (b) C₃ across the battery:  Q₃ = 4 µF × 12 V = 48 µC
 *        (c) series branch:          Q  = 2 µF × 12 V = 24 µC  (same on C₁, C₂)
 *                                    V₁ = 24 / 3 = 8 V, V₂ = 24 / 6 = 4 V
 *        check                       8 V + 4 V = 12 V ✓
 *
 * 2. UNREACHABLE BLOCK + DEAD AIR. The section has 7 narration segments
 *    (board_reveal_at_english [0, 4.24, 17.3, 24.71, 32.83, 42.01, 54.72]), so
 *    useBeat only ever returns 0..6 — yet the closing badge, its heading, its
 *    two lines and the footer chip were gated on `beat >= 7` and never
 *    rendered. The old gate set was {0,1,3,4,6,7}: beats 2 and 5 were unused.
 *    Every beat 0..6 now carries a step of the reduction.
 *
 * Beats (7 segments → valid beats 0..6):
 *  0 "JEE Main almost guarantees a network reduction"  title + underline
 *  1 "C₁ = 3 µF and C₂ = 6 µF in series, C₃ = 4 µF …"  the circuit
 *  2 "start by reducing the series pair"               product over sum → 2 µF
 *  3 "that reduced 2 µF now sits in parallel with 4"   C_eq = 6 µF
 *  4 "for part b, C₃ has the full twelve volts"        Q₃ = 48 µC
 *  5 "for part c, the series branch also has 12 V"     24 µC → 8 V and 4 V
 *  6 "always run this check"                           8 + 4 = 12 V + chip
 */

import React from "react";
import { G, Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw on={on} delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 5} size={14} fill={RED} weight={800}>{n}</T>
      </Fade>
    </G>
  );
}

/** Capacitor drawn across a vertical wire: two horizontal plates centred on `y`. */
function CapV({ x, y, stroke }: { x: number; y: number; stroke: string }) {
  return (
    <G>
      <Line x1={x - 18} y1={y} x2={x + 18} y2={y} stroke={stroke} strokeWidth={2.6} />
      <Line x1={x - 18} y1={y + 12} x2={x + 18} y2={y + 12} stroke={stroke} strokeWidth={2.6} />
    </G>
  );
}

export default function P12Ch02Sec62({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the framing */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t("JEE Main: reducing a mixed network",
             "JEE Main: reducing a mixed network")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.8)} d="M 330 62 C 480 58, 640 66, 760 60" stroke={RED} sw={2.4} dur={0.7} />

      {/* ─────────── LEFT: the network (beat 1) ─────────── */}
      <G transform="translate(40, 92)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={14} fill={RED} weight={800} anchor="start">
            {t("THE NETWORK AS GIVEN", "THE NETWORK AS GIVEN")}
          </T>
        </Fade>

        <Fade on={beat >= 1} delay={dl(1, 0.9)}>
          {/* rails */}
          <Line x1="60" y1="110" x2="460" y2="110" stroke={INK} strokeWidth={2} />
          <Line x1="60" y1="290" x2="460" y2="290" stroke={INK} strokeWidth={2} />
          <Line x1="460" y1="110" x2="460" y2="290" stroke={INK} strokeWidth={2} />

          {/* battery in the left rail */}
          <Line x1="60" y1="110" x2="60" y2="185" stroke={INK} strokeWidth={2} />
          <Line x1="60" y1="209" x2="60" y2="290" stroke={INK} strokeWidth={2} />
          <Line x1="42" y1="185" x2="78" y2="185" stroke={INK} strokeWidth={2.8} />
          <Line x1="51" y1="197" x2="69" y2="197" stroke={INK} strokeWidth={2.8} />
          <Line x1="42" y1="209" x2="78" y2="209" stroke={INK} strokeWidth={2.8} />
          <T x={90} y={203} size={14} fill={AMBER_DARK} weight={900} anchor="start">12 V</T>

          {/* branch A — C1 in series with C2 */}
          <Line x1="200" y1="110" x2="200" y2="160" stroke={INK} strokeWidth={2} />
          <Line x1="200" y1="172" x2="200" y2="228" stroke={INK} strokeWidth={2} />
          <Line x1="200" y1="240" x2="200" y2="290" stroke={INK} strokeWidth={2} />
          <CapV x={200} y={160} stroke={RED} />
          <CapV x={200} y={228} stroke={RED} />
          <T x={182} y={152} size={12.5} fill={RED} weight={900} anchor="end">C₁ = 3 µF</T>
          <T x={182} y={220} size={12.5} fill={RED} weight={900} anchor="end">C₂ = 6 µF</T>

          {/* branch B — C3 alone */}
          <Line x1="360" y1="110" x2="360" y2="190" stroke={INK} strokeWidth={2} />
          <Line x1="360" y1="202" x2="360" y2="290" stroke={INK} strokeWidth={2} />
          <CapV x={360} y={190} stroke={GREEN} />
          <T x={378} y={176} size={12.5} fill={GREEN} weight={900} anchor="start">C₃ = 4 µF</T>
        </Fade>

        <Fade on={beat >= 1} delay={dl(1, 1.4)}>
          <T x={45} y={320} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
            {t("the C₁–C₂ series pair sits in parallel with C₃, all across the battery",
               "the C₁–C₂ series pair sits in parallel with C₃, all across the battery")}
          </T>
        </Fade>
      </G>

      {/* ─────────── RIGHT: the reduction, stage by stage ─────────── */}
      <G transform="translate(560, 92)">
        <Badge n={2} cx={20} cy={18} on={beat >= 2} delay={dl(2, 0.2)} />
        <Fade on={beat >= 2} delay={dl(2, 0.5)}>
          <T x={45} y={23} size={14} fill={RED} weight={800} anchor="start">
            {t("REDUCE IN STAGES, THEN READ EACH BRANCH",
               "REDUCE IN STAGES, THEN READ EACH BRANCH")}
          </T>
        </Fade>

        {/* beat 2 — the series pair */}
        <Fade on={beat >= 2} delay={dl(2, 0.8)}>
          <T x={45} y={64} size={13.5} fill={AMBER_DARK} weight={800} anchor="start">
            {t("1. Series pair, product over sum:", "1. Series pair, product over sum:")}
          </T>
        </Fade>
        <Fade on={beat >= 2} delay={dl(2, 1.1)}>
          <T x={45} y={92} size={16} fill={GREEN} weight={900} anchor="start">
            C₁₂ = 3 × 6 / (3 + 6) = 18 / 9 = 2 µF
          </T>
        </Fade>

        {/* beat 3 — the parallel step */}
        <Fade on={beat >= 3} delay={dl(3, 0.2)}>
          <T x={45} y={132} size={13.5} fill={AMBER_DARK} weight={800} anchor="start">
            {t("2. Now 2 µF sits in parallel with 4 µF — parallel adds:",
               "2. Now 2 µF sits in parallel with 4 µF — parallel adds:")}
          </T>
        </Fade>
        <Fade on={beat >= 3} delay={dl(3, 0.6)}>
          <T x={45} y={160} size={16} fill={GREEN} weight={900} anchor="start">
            C_eq = 2 + 4 = 6 µF
          </T>
        </Fade>

        {/* beat 4 — part (b) */}
        <Fade on={beat >= 4} delay={dl(4, 0.2)}>
          <T x={45} y={202} size={13.5} fill={AMBER_DARK} weight={800} anchor="start">
            {t("(b) C₃ is its own branch across the battery — full 12 V:",
               "(b) C₃ is its own branch across the battery — full 12 V:")}
          </T>
        </Fade>
        <Fade on={beat >= 4} delay={dl(4, 0.6)}>
          <T x={45} y={230} size={16} fill={GREEN} weight={900} anchor="start">
            Q₃ = 4 µF × 12 V = 48 µC
          </T>
        </Fade>

        {/* beat 5 — part (c) */}
        <Fade on={beat >= 5} delay={dl(5, 0.2)}>
          <T x={45} y={272} size={13.5} fill={AMBER_DARK} weight={800} anchor="start">
            {t("(c) The series branch has 12 V too: Q = 2 µF × 12 V = 24 µC",
               "(c) The series branch has 12 V too: Q = 2 µF × 12 V = 24 µC")}
          </T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 0.6)}>
          <T x={45} y={300} size={15} fill={GREEN} weight={900} anchor="start">
            same Q on both ⇒ V₁ = 24 / 3 = 8 V, V₂ = 24 / 6 = 4 V
          </T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 1)}>
          <T x={45} y={324} size={12.5} fill={MUTED} weight={600} anchor="start">
            {t("series shares charge — that one fact gives both voltages",
               "series shares charge — that one fact gives both voltages")}
          </T>
        </Fade>
      </G>

      {/* ─────────── LOWER: the check ─────────── */}
      <G transform="translate(40, 440)">
        <Badge n={3} cx={20} cy={18} on={beat >= 6} delay={dl(6, 0.2)} />
        <Fade on={beat >= 6} delay={dl(6, 0.5)}>
          <T x={45} y={23} size={14} fill={RED} weight={800} anchor="start">
            {t("ALWAYS RUN THIS CHECK", "ALWAYS RUN THIS CHECK")}
          </T>
        </Fade>

        <Fade on={beat >= 6} delay={dl(6, 0.8)}>
          <T x={45} y={54} size={15} anchor="start" fill={GREEN} weight={800}>
            8 V + 4 V = 12 V — the individual drops sum to the applied voltage.
          </T>
        </Fade>
        <Fade on={beat >= 6} delay={dl(6, 1.1)}>
          <T x={45} y={78} size={13} anchor="start" fill={INK} weight={700}>
            {t("If they do not sum to the battery voltage, something has gone wrong upstream.",
               "If they do not sum to the battery voltage, something has gone wrong upstream.")}
          </T>
        </Fade>
      </G>

      {/* footer chip */}
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <Chip x={40} y={546} w={1000} h={44} fill={GREEN} textFill="#ffffff" size={15}>
          {t("★ C_eq = 6 µF · Q₃ = 48 µC · series branch 24 µC ⇒ 8 V and 4 V",
             "★ C_eq = 6 µF · Q₃ = 48 µC · series branch 24 µC ⇒ 8 V and 4 V")}
        </Chip>
      </Fade>
    </Scene>
  );
}
