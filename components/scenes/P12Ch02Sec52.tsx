/**
 * P12Ch02 · Section 52 — "Series — the single-file queue that shares charge"
 * Subtopic: Series & Parallel Combinations & Charge Sharing
 *
 * THREE DEFECTS FIXED (2026-08-21):
 *
 * 1. THE BOARD TAUGHT THE WRONG LESSON. The scene was built for an older
 *    section titled "Series and parallel — two ways to hook up capacitors" and
 *    drew BOTH combinations side by side. The narration now in Supabase for
 *    position 52 is series only, start to finish — parallel is section 53's
 *    entire job. The parallel schematic and its C_eq = C₁ + C₂ therefore ran
 *    ahead of the voice and gave away the next section. Narration is
 *    authoritative, so the right-hand column now carries the series reasoning
 *    the voice actually walks through (voltage sharing → why C_eq comes out
 *    small) instead of the parallel circuit.
 *
 * 2. A WHOLE BLOCK NEVER RENDERED. The summary badge, its heading, its two
 *    lines and the footer chip were gated on `beat >= 7`, but this section has
 *    7 narration segments so useBeat only ever returns 0..6.
 *
 * 3. DEAD AIR. The old gate set was {0,1,3,4,5,7}: beats 2 and 6 drew nothing.
 *
 * Beats now map 1:1 onto the seven segments
 * (board_reveal_at_english [0, 9.81, 16.35, 34.51, 41.78, 50.49, 62.85]):
 *
 *   0  "two basic ways, and they behave like opposites"  title
 *   1  "connect end to end — that is series"             series schematic
 *   2  "+Q on the first plate induces −Q facing it,      the induction chain
 *       which pushes +Q onto the next"                    on the plates
 *   3  "every capacitor carries the SAME charge Q"       the same-Q verdict
 *   4  "the battery's voltage gets shared out"           V = V₁ + V₂, slices
 *   5  "a fraction of the voltage, the full charge"      the consequence
 *   6  "higher V for the same Q ⇒ less capacitance"      1/C_eq rule + chip
 *
 * NUMBERS: this scene carries no numeric worked example — nothing to check
 * against the narration, and nothing was changed.
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

export default function P12Ch02Sec52({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the framing */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Series — the single-file queue where every capacitor carries the same charge Q",
             "Series — the single-file queue where every capacitor carries the same charge Q")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.0)} d="M 120 60 C 420 56, 660 64, 960 59" stroke={RED} sw={2.4} dur={0.7} />

      {/* LEFT SECTION: THE SERIES CHAIN */}
      <G transform="translate(40, 75)">
        {/* beat 1 — wired end to end */}
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.2)} />
        <Fade on={beat >= 1} delay={dl(1, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("WIRED END TO END — ONE CHARGING PATH", "WIRED END TO END — ONE CHARGING PATH")}
          </T>
        </Fade>

        <Fade on={beat >= 1} delay={dl(1, 0.9)}>
          <Line x1="45" y1="170" x2="130" y2="170" stroke={INK} strokeWidth={2} />
          {/* C1 */}
          <Line x1="130" y1="140" x2="130" y2="200" stroke={RED} strokeWidth={3} />
          <Line x1="150" y1="140" x2="150" y2="200" stroke={RED} strokeWidth={3} />
          <T x={140} y={130} size={13} fill={RED} weight={900} anchor="middle">C₁</T>

          <Line x1="150" y1="170" x2="270" y2="170" stroke={INK} strokeWidth={2} />
          {/* C2 */}
          <Line x1="270" y1="140" x2="270" y2="200" stroke={GREEN} strokeWidth={3} />
          <Line x1="290" y1="140" x2="290" y2="200" stroke={GREEN} strokeWidth={3} />
          <T x={280} y={130} size={13} fill={GREEN} weight={900} anchor="middle">C₂</T>

          <Line x1="290" y1="170" x2="380" y2="170" stroke={INK} strokeWidth={2} />
        </Fade>

        {/* beat 2 — the induction chain that forces one shared Q */}
        <Fade on={beat >= 2} delay={dl(2, 0.2)}>
          <T x={122} y={216} size={12.5} fill={RED} weight={900} anchor="middle">+Q</T>
          <T x={158} y={216} size={12.5} fill={INK} weight={900} anchor="middle">−Q</T>
          <T x={262} y={216} size={12.5} fill={RED} weight={900} anchor="middle">+Q</T>
          <T x={298} y={216} size={12.5} fill={INK} weight={900} anchor="middle">−Q</T>
        </Fade>
        <Fade on={beat >= 2} delay={dl(2, 0.6)}>
          <T x={45} y={248} anchor="start" size={13} fill={INK_LIGHT} weight={700}>
            {t("+Q on the first plate induces −Q facing it; the isolated inner pair",
               "+Q on the first plate induces −Q facing it; the isolated inner pair")}
          </T>
          <T x={45} y={268} anchor="start" size={13} fill={INK_LIGHT} weight={700}>
            {t("then pushes +Q onto the next capacitor — and so on down the chain.",
               "then pushes +Q onto the next capacitor — and so on down the chain.")}
          </T>
        </Fade>

        {/* beat 3 — identical, not merely proportional */}
        <Fade on={beat >= 3} delay={dl(3, 0.3)}>
          <T x={45} y={296} anchor="start" size={14} fill={GREEN} weight={900}>
            {t("Every capacitor in the chain carries exactly the same Q — identical.",
               "Every capacitor in the chain carries exactly the same Q — identical.")}
          </T>
        </Fade>
      </G>

      {/* RIGHT SECTION: THE VOLTAGE IS WHAT GETS SHARED OUT */}
      <G transform="translate(540, 75)">
        {/* beat 4 — voltage splits into slices */}
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("THE VOLTAGE IS WHAT GETS SHARED OUT", "THE VOLTAGE IS WHAT GETS SHARED OUT")}
          </T>
        </Fade>

        <Fade on={beat >= 4} delay={dl(4, 0.8)}>
          <T x={45} y={80} size={14} fill={INK} weight={800} anchor="start">
            1. Each capacitor takes a slice: V = V₁ + V₂
          </T>
        </Fade>
        <Fade on={beat >= 4} delay={dl(4, 1.2)}>
          <T x={45} y={125} size={14} fill={AMBER_DARK} weight={800} anchor="start">
            2. Same Q throughout: V₁ = Q / C₁,  V₂ = Q / C₂
          </T>
        </Fade>

        {/* beat 5 — a fraction of V, the whole of Q */}
        <Fade on={beat >= 5} delay={dl(5, 0.2)}>
          <T x={45} y={170} size={14} fill={GREEN} weight={800} anchor="start">
            3. Each one sees only a fraction of V, yet holds the full Q.
          </T>
        </Fade>
        <Fade on={beat >= 5} delay={dl(5, 0.6)}>
          <T x={45} y={202} anchor="start" size={13} fill={MUTED} weight={600}>
            {t("so the combination stores that same charge at a higher total voltage",
               "so the combination stores that same charge at a higher total voltage")}
          </T>
        </Fade>
      </G>

      {/* LOWER SECTION: WHY SERIES CAPACITANCE COMES OUT SMALL */}
      <G transform="translate(40, 400)">
        {/* beat 6 */}
        <Badge n={3} cx={20} cy={18} on={beat >= 6} delay={dl(6, 0.2)} />
        <Fade on={beat >= 6} delay={dl(6, 0.5)}>
          <T x={45} y={23} size={15} fill={RED} weight={800} anchor="start">
            {t("HIGHER V FOR THE SAME Q ⇒ LESS CAPACITANCE", "HIGHER V FOR THE SAME Q ⇒ LESS CAPACITANCE")}
          </T>
        </Fade>
        <Draw on={beat >= 6} delay={dl(6, 0.7)} d="M 45 40 L 960 40" stroke={INK} sw={1.6} dur={0.6} />
        <Fade on={beat >= 6} delay={dl(6, 1.0)}>
          <T x={45} y={72} size={16} anchor="start" fill={GREEN} weight={900}>
            1/C_eq = 1/C₁ + 1/C₂   ⇒   C_eq = (C₁ C₂) / (C₁ + C₂)
          </T>
        </Fade>
        <Fade on={beat >= 6} delay={dl(6, 1.4)}>
          <T x={45} y={100} size={13.5} anchor="start" fill={INK} weight={700}>
            {t("C_eq is always smaller than the smallest member — adding pipes end to end makes the flow harder, not easier.",
               "C_eq is always smaller than the smallest member — adding pipes end to end makes the flow harder, not easier.")}
          </T>
        </Fade>
      </G>

      {/* beat 6 — footer */}
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <Chip x={40} y={545} w={1000} h={46} fill={GREEN} textFill="#ffffff" size={14}>
          {t(
            "★ Series shares the CHARGE: same Q everywhere, voltages add, and C_eq drops below the smallest capacitor",
            "★ Series shares the CHARGE: same Q everywhere, voltages add, and C_eq drops below the smallest capacitor"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
