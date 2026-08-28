/**
 * Ch08 · Section 13 — "JEE Advanced: elongation of a spinning rod"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * The harder cousin of Sec7 (rod under its own weight, T = ρAxg, ΔL = MgL/2AY):
 * same rod-with-varying-tension idiom, but the load is centripetal, so T goes
 * as (L² − x²) and the answer carries ⅓ instead of ½ — the discriminator.
 * Pacing is normal in both tracks (beats ≈ 8–23 s), so staggers run long.
 *
 * ONE persistent TOP-VIEW diagram on the left (pivot ⊙ at the axis, rod running
 * right to the free tip, the piece beyond x shaded amber, ω sweeping under the
 * pivot, a parabolic tension profile hugging the rod's top flank) feeds a
 * derivation chain down the right: T(x) = ∫ₓᴸ λω²x′dx′ = (Mω²/2L)(L²−x²) →
 * d(ΔL) = T dx/AY → ∫₀ᴸ → boxed hero ΔL = Mω²L²/3AY → the numbers → the
 * ⅓-vs-½ contrast card + red margin note.
 *
 * Beats (en [0, 9.56, 21.93, 31.66, 47.45, 59.9, 83.29] ·
 *        hi [0, 10.07, 19.71, 27.99, 43.78, 57.09, 80.64]):
 *  0 top view drawn: pivot ⊙ on the axis, rod out to L, ω arc, L dimension
 *  1 the cut at x: dashed marker, everything beyond x shaded, x dimension,
 *    green T(x) arrow pulling that piece back toward the axis
 *  2 the tension profile: parabola max at the axis (Mω²L/2), zero at the tip
 *  3 one element dx′ inside the shaded piece ⇒ T(x) = ∫ₓᴸ λω²x′dx′ = …
 *  4 per-slice stretch ⇒ ∫₀ᴸ ⇒ boxed hero ΔL = Mω²L²/3AY
 *  5 the numbers substituted ⇒ ≈ 3.3×10⁻⁴ m ≈ 0.33 mm, underlined
 *  6 contrast card (self-weight ½ vs spinning ⅓) + red margin note punchline
 *
 * Layout plan — text boxes ESTIMATED per spec (Kalam w≈0.55·size·chars, box
 * y−1.3·size .. y+0.5·size; Anek sans w≈0.50·size·chars, box y−0.78·size ..
 * y+0.31·size; longer language shown); strokes are geometric:
 *  title (script 22, red, ALWAYS ON) cx540 bl64 (x292..788 y35.4..75)
 *  b0 | title underline      | Draw | x420..660 y85..91
 *  b0 | rod bar              | Draw | x128..488 y155..181
 *  b0 | pivot ⊙ + dot (over) | Fade | x118..138 y158..178
 *  b0 | "spin axis" (13)     | T end| x45.5..104 bl152 (y141.9..156) + leader
 *  b0 | ω arc + head         | Draw | x81..176  y190..221
 *  b0 | "ω" (18)             | T end| x61..70   bl200 (y186..205.6)
 *  b0 | L dimension          | Draw | x128..488 y290..302
 *  b0 | "L" (16)             | T end| x110..118 bl302 (y289.5..307)
 *  b0 | top-view cap (scr15) | T mid| cx290 bl344 (x79.5..500.5 y324.5..351.5)
 *  b1 | cut marker (dashed)  | line | x290 y181..248
 *  b1 | beyond-x shade       | rect | x290..488 y155..181
 *  b1 | "mass beyond x" (13) | T mid| cx355 bl171 (x299.8..410.3 y161.9..176)
 *  b1 | x dimension          | Draw | x128..290 y248..260
 *  b1 | "x" (16)             | T mid| x205..213 bl274 (y261.5..279)
 *  b1 | T(x) arrow (green)   | Draw | x298..345 y191..201
 *  b1 | "T(x)" (14)          | T mid| x307..335 bl218 (y207..222.3)
 *  b1 | caption (scr16)      | T mid| cx790 bl122 (x587..993 y101.2..130)
 *  b2 | tension parabola     | Draw | x128..488 y101..155 (vertical edge at x128)
 *  b2 | profile bars         | Draw | x188..428 y103..155
 *  b2 | "T = Mω²L/2" (12)    | T end| x56..116  bl112 (y102.6..115.7)
 *  b2 | "T = 0" (12)         | T st | x498..528 bl148 (y138.6..151.7)
 *  b2 | caption (scr16)      | T mid| cx790 bl168 (x614..966 y147.2..176)
 *  b3 | dx′ slice            | rect | x440..452 y155..181
 *  b3 | leader               | Draw | x446 y185..199
 *  b3 | "dx′" (13)           | T mid| x436..456 bl214 (y203.9..218)
 *  b3 | "T(x) = ∫ₓᴸ…" (20)   | T st | x560..780 bl226 (y210.4..232.2)
 *  b3 | "λ = M / L" (12)     | T st | x800..854 bl226 (y216.6..229.7)
 *  b3 | "= (Mω²/2L)(L²−x²)"  | T st | x610..830 bl262 (y246.4..268.2)
 *  b4 | "d(ΔL) = T dx/AY"(18)| T st | x560..758 bl298 (y283.2..303.9)
 *  b4 | cap (12)             | T st | x790..904 bl298 (y288.6..301.7)
 *  b4 | "ΔL = ∫₀ᴸ …" (18)    | T st | x560..767 bl332 (y317.2..337.9)
 *  b4 | cap (12)             | T st | x790..898 bl332 (y322.6..335.7)
 *  b4 | hero box             | Draw | x560..1010 y350..414
 *  b4 | hero formula (30)    | T mid| x650..920 bl389 (y365.6..398.3)
 *  b5 | given values (13)    | T mid| cx290 bl378 (x72..508 y367.9..382)
 *  b5 | substitution (15)    | T mid| cx785 bl448 (x601..969 y436.3..452.65)
 *  b5 | "= 200/(6.0×10⁵)"(15)| T mid| x714..856 bl480 (y468.3..484.65)
 *  b5 | result (24, green)   | T mid| x641..929 bl520 (y501.3..527.4)
 *  b5 | underline            | Draw | x648..922 y535..541
 *  b6 | contrast card        | rect | x60..430 y396..478
 *  b6 | self-weight row (15) | T st | x78..400 bl428 (y416.3..432.65)
 *  b6 | spinning row (15)    | T st | x78..400 bl460 (y448.3..464.65)
 *  b6 | bracket + arrow      | Draw | x440..470 y410..466
 *  b6 | "1/2 → 1/3" (18)     | T st | x476..557 bl444 (y430..449.6)
 *  b6 | margin bar           | Draw | x60 y558..586
 *  b6 | note (scr15)         | T st | x76..604 bl578 (y558.5..585.5)
 */

import React from "react";
import { Circle, Line, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on, visible on the blank board before play */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t(
            "JEE Advanced: elongation of a spinning rod",
            "JEE Advanced: spinning rod ka elongation"
          )}
        </T>
      </Fade>

      {/* beat 0 — the top view: axis, rod, spin, length */}
      <Draw
        on={beat >= 0}
        delay={dl(0, 0.3)}
        d="M420 88 C500 85, 590 91, 660 87"
        stroke={RED}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 0} delay={0}>
        <Draw
          on={beat >= 0}
          delay={dl(0, 0.9)}
          d="M128 155 h360 v26 h-360 z"
          stroke={INK}
          sw={2.4}
          dur={0.9}
          fill={CREAM}
        />
      </Fade>
      {/* pivot pin drawn AFTER the rod so it sits on top of the bar's fill */}
      <Fade on={beat >= 0} delay={dl(0, 2.0)}>
        <Circle cx={128} cy={168} r={10} fill={CREAM} stroke={INK} strokeWidth={2.4} />
        <Circle cx={128} cy={168} r={3.2} fill={INK} />
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 2.7)}>
        <T x={104} y={152} size={13} fill={INK} weight={700} anchor="end">
          {t("spin axis", "spin axis")}
        </T>
        <Line x1={108} y1={154} x2={117} y2={160} stroke={INK} strokeWidth={1.4} />
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 3.6)}
        d="M80.9 190 A 52 52 0 0 0 175.1 190 M175.4 201 L175.1 190 L166.5 196.9"
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 0} delay={dl(0, 4.6)}>
        <T x={70} y={200} size={18} fill={AMBER_DARK} weight={800} anchor="end">
          ω
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 5.2)}
        d="M128 290 V302 M128 296 H488 M488 290 V302"
        stroke={INK}
        sw={1.8}
        dur={0.6}
      />
      <Fade on={beat >= 0} delay={dl(0, 6.0)}>
        <T x={118} y={302} size={16} fill={INK} weight={800} anchor="end">
          L
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6.8)}>
        <T x={290} y={344} size={15} fill={MUTED} script>
          {t(
            "top view — the rod spins on a frictionless table",
            "top view — rod frictionless table par ghoom rahi hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — cut the rod at x: everything beyond it is what T(x) must hold */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Line
          x1={290}
          y1={181}
          x2={290}
          y2={248}
          stroke={MUTED}
          strokeWidth={1.6}
          strokeDasharray="6 6"
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <Rect
          x={290}
          y={155}
          width={198}
          height={26}
          fill={AMBER}
          stroke={AMBER_DARK}
          strokeWidth={2.2}
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={355} y={171} size={13} fill={INK} weight={700}>
          {t("mass beyond x", "x ke aage ka mass")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.6)}
        d="M128 248 V260 M128 254 H290 M290 248 V260"
        stroke={INK}
        sw={1.8}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={209} y={274} size={16} fill={INK} weight={800}>
          x
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 4.2)}
        d={arrowD(345, 196, 298, 196)}
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 4.9)}>
        <T x={321} y={218} size={14} fill={GREEN} weight={800}>
          T(x)
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.8)}>
        <T x={790} y={122} size={16} fill={GREEN} script>
          {t(
            "the cut at x holds everything outside it",
            "x par cut ke bahar ka sab kuch yahi pakadta hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — how that tension varies: a parabola, max at the axis */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.3)}
        d="M128 155 V101 Q308 101 488 155"
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={116} y={112} size={12} fill={AMBER_DARK} weight={700} anchor="end">
          T = Mω²L/2
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.2)}
        d="M188 103 V155 M248 107 V155 M308 115 V155 M368 125 V155 M428 139 V155"
        stroke={AMBER}
        sw={1.6}
        dur={0.6}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.1)}>
        <T x={498} y={148} size={12} fill={AMBER_DARK} weight={700} anchor="start">
          T = 0
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.9)}>
        <T x={790} y={168} size={16} fill={AMBER_DARK} script>
          {t(
            "biggest at the axis, zero at the free tip",
            "axis par sabse zyada, tip par zero"
          )}
        </T>
      </Fade>

      {/* beat 3 — one element out there, integrated from x to L */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Rect
          x={440}
          y={155}
          width={12}
          height={26}
          fill={AMBER_DARK}
          stroke={AMBER_DARK}
          strokeWidth={1.6}
        />
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.9)}
        d="M446 185 V199"
        stroke={AMBER_DARK}
        sw={1.4}
        dur={0.25}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={446} y={214} size={13} fill={AMBER_DARK} weight={800}>
          dx′
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={560} y={226} size={20} fill={INK} weight={800} anchor="start">
          T(x) = ∫ₓᴸ λ ω² x′ dx′
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.6)}>
        <T x={800} y={226} size={12} fill={MUTED} anchor="start">
          λ = M / L
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8.0)}>
        <T x={610} y={262} size={20} fill={INK} weight={800} anchor="start">
          = (M ω² / 2L)(L² − x²)
        </T>
      </Fade>

      {/* beat 4 — stretch each slice, add them all up: the hero result */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={560} y={298} size={18} fill={INK} weight={800} anchor="start">
          d(ΔL) = T(x) dx / (AY)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={790} y={298} size={12} fill={MUTED} anchor="start">
          {t("one slice's stretch", "ek slice ka stretch")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.0)}>
        <T x={560} y={332} size={18} fill={INK} weight={800} anchor="start">
          ΔL = ∫₀ᴸ T(x) dx / (AY)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.9)}>
        <T x={790} y={332} size={12} fill={MUTED} anchor="start">
          {t("add up every slice", "har slice ko jodiye")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 5.2)}
        d="M572 350 h426 q12 0 12 12 v40 q0 12 -12 12 h-426 q-12 0 -12 -12 v-40 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={1.0}
      />
      <Fade on={beat >= 4} delay={dl(4, 6.6)}>
        <T x={785} y={389} size={30} fill={INK} weight={800}>
          ΔL = M ω² L² / 3AY
        </T>
      </Fade>

      {/* beat 5 — put the numbers in */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={290} y={378} size={13} fill={MUTED}>
          M = 2.0 kg · ω = 10 rad/s · L = 1.0 m · A = 10⁻⁶ m² · Y = 2×10¹¹ Pa
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.0)}>
        <T x={785} y={448} size={15} fill={INK} weight={700}>
          ΔL = (2.0)(10)²(1.0)² / [3 (1.0×10⁻⁶)(2.0×10¹¹)]
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7.0)}>
        <T x={785} y={480} size={15} fill={MUTED} weight={700}>
          = 200 / (6.0 × 10⁵)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 10.0)}>
        <T x={785} y={520} size={24} fill={GREEN} weight={800}>
          ≈ 3.3 × 10⁻⁴ m ≈ 0.33 mm
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 11.5)}
        d="M648 538 C720 535, 850 541, 922 537"
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />

      {/* beat 6 — the discriminator: ⅓ here, ½ for self-weight */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Rect
          x={60}
          y={396}
          width={370}
          height={82}
          fill="none"
          stroke={RED}
          strokeWidth={1.8}
          strokeDasharray="7 6"
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={78} y={428} size={15} fill={MUTED} weight={700} anchor="start">
          {t("self-weight rod:", "self-weight rod:")} T ∝ x ⇒ ΔL = MgL / 2AY
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <T x={78} y={460} size={15} fill={RED} weight={700} anchor="start">
          {t("spinning rod:", "ghoomti rod:")} T ∝ x² ⇒ ΔL = Mω²L² / 3AY
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 3.4)}
        d={`M440 412 h12 v52 h-12 ${arrowD(452, 438, 470, 438)}`}
        stroke={RED}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 6} delay={dl(6, 4.2)}>
        <T x={476} y={444} size={18} fill={RED} weight={800} anchor="start">
          1/2 → 1/3
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 5.2)} d="M60 558 L60 586" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 5.8)}>
        <T x={76} y={578} size={15} fill={RED} script anchor="start">
          {t(
            "the 1/3 comes from tension going as x², not x",
            "yeh 1/3 isliye — tension x² ki tarah badalti hai, x ki tarah nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
