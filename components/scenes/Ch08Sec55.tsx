/**
 * Ch08 · Section 55 — "Torsion of a solid cylinder"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: en beats 1..4 are ~1s apart and hi beats 4..6 are ~1s apart, so EVERY
 * stagger here stays ≤1.3s and settles instantly once the narration moves on.
 *
 * ONE persistent diagram across the top (hatched wall → clamped solid cylinder,
 * dashed fixed cross-section, solid twisted end face, the surface generator
 * tilting by φ, a green curved arrow for the end twist θ) feeds a derivation
 * cascade down the left: φ = xθ/L → τ = ηφ on a ring 2πx dx → dC = τ(2πx dx)x
 * → boxed hero C = (2πηθ/L)∫₀ᴿx³dx = πηR⁴θ/2L → the R⁴ punchline → rigidity.
 *
 * Beats (en [0, 1.0, 2.0, 3.0, 4.0, 17.31, 29.6] ·
 *        hi [0, 8.62, 17.58, 31.23, 49.41, 50.41, 51.41]):
 *  0 title only — blank board
 *  1 diagram: wall + clamped cylinder, R and L marked, the generator tilts by
 *    φ while the free end face twists through θ
 *  2 text: fix one end, twist the other through θ ⇒ shell at radius x shears
 *    by φ = xθ/L (bigger for shells farther out)
 *  3 text + row: shear stress τ = ηφ on a ring of area 2πx dx ⇒
 *    dC = τ(2πx dx)x = (2πηθ/L)x³dx
 *  4 boxed hero: C = (2πηθ/L)∫₀ᴿ x³ dx = πηR⁴θ/2L
 *  5 red margin: R⁴ — a small fatter shaft is dramatically stiffer
 *  6 text: torsional rigidity (torque per unit twist) = πηr⁴/2L
 *
 * Layout plan — text boxes ESTIMATED per spec (Kalam w≈0.55·size·chars, box
 * y−1.3·size .. y+0.5·size; Anek sans w≈0.50·size·chars, box y−0.78·size ..
 * y+0.31·size; the longer language shown); strokes are geometric:
 *  title (script 19, red, ALWAYS ON) cx540 bl64 (x300..780 y39.3..73.5)
 *  b1 | L dimension          | Draw | x176..640 y100..108
 *  b1 | "L" (13)             | T mid| x416.8..423.3 bl110 (y99.9..114.0)
 *  b1 | wall block           | rect | x150..176 y118..262
 *  b1 | wall hatch           | Draw | x138..150 y112..256
 *  b1 | cylinder silhouette  | Draw | x176..640 y132 · y248
 *  b1 | fixed face (dashed)  | ellipse | x180..220 y132..248
 *  b1 | free face (solid)    | ellipse | x620..660 y132..248
 *  b1 | axis (dash-dot)      | line | x176..660 y190
 *  b1 | R arrow              | Draw | x245..255 y191..246
 *  b1 | "R" (13)             | T st | x262..268.5 bl224 (y213.9..228.0)
 *  b1 | original generator   | line | x211.5..651.5 y142.5
 *  b1 | tilted generator     | Draw | x211.5..659.3 y142.5..205
 *  b1 | "φ" (16)             | T mid| x556..564 bl172 (y159.5..177.0)
 *  b1 | twist arc + head     | Draw | x645..679 y120..265
 *  b1 | "θ" (16)             | T st | x692..700 bl196 (y183.5..201.0)
 *  b1 | caption (12)         | T mid| x330..750 bl288 (y278.6..291.7)
 *  b2 | tick                 | Draw | x65..73 y314
 *  b2 | line 1 (13)          | T st | x80..593.5 bl318 (y307.9..322.0)
 *  b2 | line 2 (11, muted)   | T st | x80..415.5 bl342 (y333.4..345.4)
 *  b3 | tick                 | Draw | x65..73 y372
 *  b3 | line 1 (13)          | T st | x80..444 bl376 (y365.9..380.0)
 *  b3 | dC row (16)          | T st | x80..352 bl404 (y391.5..409.0)
 *  b3 | side cap (11, muted) | T st | x400..581.5 bl404 (y395.4..407.4)
 *  b4 | hero box             | Draw | x60..490 y428..494
 *  b4 | hero formula (22)    | T mid| x82.5..467.5 bl466 (y448.8..472.8)
 *  b4 | side cap (13, muted) | T st | x520..695.5 bl466 (y455.9..470.0)
 *  b5 | margin bar           | Draw | x60 y512..540
 *  b5 | note (scr14)         | T st | x76..538 bl532 (y513.8..539.0)
 *  b6 | tick                 | Draw | x65..73 y566
 *  b6 | line (13)            | T st | x80..450.5 bl570 (y559.9..574.0)
 */

import React from "react";
import { Ellipse, Line, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec55({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on, visible on the blank board before play */}
      <Fade on={true}>
        <T x={540} y={64} size={19} fill={RED} script>
          {t(
            "torsion: twisting a solid cylinder, shell by shell",
            "torsion: solid cylinder ko shell-by-shell twist"
          )}
        </T>
      </Fade>

      {/* beat 1 — clamp one end, twist the other: the whole geometry in one figure */}
      <Fade on={beat >= 1} delay={dl(1, 0.05)}>
        <Rect x={150} y={118} width={26} height={144} fill={INK} />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.12)}
        d="M150 124 l-12 -12 M150 146 l-12 -12 M150 168 l-12 -12 M150 190 l-12 -12 M150 212 l-12 -12 M150 234 l-12 -12 M150 256 l-12 -12"
        stroke={INK}
        sw={1.4}
        dur={0.25}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.3)}
        d="M176 132 H640 M176 248 H640"
        stroke={INK}
        sw={2.4}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.48)}>
        <Ellipse
          cx={200}
          cy={190}
          rx={20}
          ry={58}
          fill="none"
          stroke={MUTED}
          strokeWidth={1.8}
          strokeDasharray="6 6"
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.56)}>
        <Ellipse
          cx={640}
          cy={190}
          rx={20}
          ry={58}
          fill={AMBER}
          fillOpacity={0.35}
          stroke={INK}
          strokeWidth={2}
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.64)}>
        <Line
          x1={176}
          y1={190}
          x2={660}
          y2={190}
          stroke={MUTED}
          strokeWidth={1.4}
          strokeDasharray="12 5 3 5"
        />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.7)}
        d="M176 100 V108 M176 104 H400 M440 104 H640 M640 100 V108"
        stroke={INK}
        sw={1.6}
        dur={0.2}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.78)}>
        <T x={420} y={110} size={13} fill={INK} weight={800}>
          L
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.84)}
        d="M250 191 L250 246 M245 237 L250 246 L255 237"
        stroke={INK}
        sw={1.6}
        dur={0.2}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={262} y={224} size={13} fill={INK} weight={800} anchor="start">
          R
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.94)}>
        <Line
          x1={211.5}
          y1={142.5}
          x2={651.5}
          y2={142.5}
          stroke={MUTED}
          strokeWidth={1.6}
          strokeDasharray="7 6"
        />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.98)}
        d="M211.5 142.5 L659.3 205"
        stroke={AMBER_DARK}
        sw={2.4}
        dur={0.25}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.06)}>
        <T x={560} y={172} size={16} fill={AMBER_DARK} weight={800}>
          φ
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.1)}
        d="M645 120 A 34 70 0 0 1 645 260 M654.9 255.1 L645 260 L654.9 264.9"
        stroke={GREEN}
        sw={2.2}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.16)}>
        <T x={692} y={196} size={16} fill={GREEN} weight={800} anchor="start">
          θ
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.22)}>
        <T x={540} y={288} size={12} fill={INK}>
          {t(
            "each coaxial shell is sheared — sum their moments about the axis",
            "har coaxial shell shear hoti hai — unke moments axis ke around jodo"
          )}
        </T>
      </Fade>

      {/* beat 2 — the geometry of the shear angle */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M65 314 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={80} y={318} size={13} fill={INK} weight={600} anchor="start">
          {t(
            "fix one end, twist the other through θ — a shell at radius x shears by φ = xθ/L",
            "ek sira fix karo, doosra θ se twist — radius x wali shell φ = xθ/L se shear hoti"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={80} y={342} size={11} fill={MUTED} weight={600} anchor="start">
          {t(
            "φ grows with x — outer shells are sheared the most",
            "φ x ke saath badhta — bahar wali shells sabse zyada shear hoti"
          )}
        </T>
      </Fade>

      {/* beat 3 — stress on a thin ring, and its moment about the axis */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M65 372 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={376} size={13} fill={INK} weight={600} anchor="start">
          {t(
            "shear stress τ = ηφ, acting on a thin ring of area 2πx dx",
            "shear stress τ = ηφ, patli ring ka area 2πx dx hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={80} y={404} size={16} fill={INK} weight={800} anchor="start">
          dC = τ (2πx dx) x = (2πηθ/L) x³ dx
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.95)}>
        <T x={400} y={404} size={11} fill={MUTED} weight={600} anchor="start">
          {t(
            "the ring's moment about the axis",
            "ring ka moment axis ke baare mein"
          )}
        </T>
      </Fade>

      {/* beat 4 — integrate over the cross-section: the hero result */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.15)}
        d="M72 428 h406 q12 0 12 12 v42 q0 12 -12 12 h-406 q-12 0 -12 -12 v-42 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 0.65)}>
        <T x={275} y={466} size={22} fill={INK} weight={800}>
          C = (2πηθ/L) ∫₀ᴿ x³ dx = πηR⁴θ / 2L
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <T x={520} y={466} size={13} fill={MUTED} weight={600} anchor="start">
          {t("x³ integrates to R⁴/4", "x³ ka integral R⁴/4 deta hai")}
        </T>
      </Fade>

      {/* beat 5 — savour the fourth power */}
      <Draw on={beat >= 5} delay={dl(5, 0.15)} d="M60 512 L60 540" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={76} y={532} size={14} fill={RED} script anchor="start">
          {t(
            "R⁴ — double the shaft's radius and it is 16× harder to twist",
            "R⁴ — shaft ka radius double karo, twist karna 16× mushkil"
          )}
        </T>
      </Fade>

      {/* beat 6 — name the quantity */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M65 566 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={80} y={570} size={13} fill={INK} weight={600} anchor="start">
          {t(
            "torsional rigidity — torque per unit twist — is πηr⁴ / 2L",
            "torsional rigidity — per unit twist ka torque — πηr⁴ / 2L"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
