/**
 * P12Ch05 · Section 48 — "Flux, the law, and the electric comparison"
 * Subtopic: Magnetism and Gauss's Law
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * BOARD REWRITTEN (2026-08-21) — the artwork taught a different lesson.
 *
 * WHAT THE BOARD USED TO TEACH: a divergence test on candidate field
 * expressions — "is ∇·B = 0 everywhere?", with B = C x î failing and
 * B = C y î passing, plus a real/fake field verdict panel. The narration
 * never says divergence, ∇·B, or trial field expressions at all.
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: four short formulas — the surface
 * integral definition of flux and the angle-from-the-normal convention,
 * the weber and its equivalents, the dimensional formula, and the
 * flat-area/uniform-field product — then the closed-surface law set beside
 * its electric partner, and finally the flux-density vocabulary.
 *
 * BEAT MAP (9 reveals → gates 0..8, nothing above 8):
 *   0  "four formulas, all short"                title + underline
 *   1  "the surface integral of B · dA"          formula 1, the definition
 *   2  "θ is from the outward normal"            tilted-area diagram + n̂ + θ
 *   3  "the SI unit is the weber"                formula 2 · 1 Wb = 1 T·m² = 1 V·s
 *   4  "the dimensional formula follows"         formula 3 · M L² T⁻² A⁻¹
 *   5  "flat area in a uniform field"            formula 4 · Φ = B A cos θ
 *   6  "the central result, electric beside it"  the two closed-surface laws
 *   7  "look only at the right hand sides"       rings on both RHS + the reason
 *   8  "B is the magnetic flux density"          1 T = 1 Wb/m² footer chip
 */

import React from "react";
import { Ellipse, G, Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, ringD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
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

export default function P12Ch05Sec48({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ---------------- beat 0 — title ---------------- */}
      <Fade on={beat >= 0} delay={dl(0, 0.35)}>
        <T x={540} y={50} size={25} fill={RED} script>
          {t("Flux, the law, and the electric comparison",
             "Flux, law, aur electric comparison")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.7)}
        d="M 250 64 C 500 60, 660 68, 830 62" stroke={RED} sw={2.2} dur={0.7} />

      {/* ---------------- LEFT COLUMN ---------------- */}
      {/* beat 1 — formula 1: the definition */}
      <Badge n={1} cx={60} cy={106} on={beat >= 1} delay={dl(1, 0.2)} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={84} y={111} size={14} fill={RED} weight={800} anchor="start">
          {t("MAGNETIC FLUX — GENERAL DEFINITION", "MAGNETIC FLUX — GENERAL DEFINITION")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={60} y={150} size={16} fill={INK} weight={800} anchor="start">
          Φ = ∫ₛ B · dA = ∫ B dA cos θ
        </T>
      </Fade>

      {/* beat 2 — the angle convention, drawn */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={arrowD(96, 190, 440, 190)} stroke={AMBER_DARK} sw={2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 0.45)} d={arrowD(96, 350, 440, 350)} stroke={AMBER_DARK} sw={2} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 96 270 L 190 270" stroke={AMBER_DARK} sw={2} dur={0.35} />
      <Draw on={beat >= 2} delay={dl(2, 0.7)} d={arrowD(352, 270, 440, 270)} stroke={AMBER_DARK} sw={2} dur={0.35} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={452} y={355} size={15} fill={AMBER_DARK} weight={800} anchor="start">B</T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <Ellipse cx={250} cy={270} rx={78} ry={22} transform="rotate(55 250 270)"
          fill={CREAM} stroke={INK} strokeWidth={2.2} />
        <T x={214} y={302} size={13.5} fill={INK_LIGHT} weight={800}>S</T>
      </Fade>

      {/* the outward normal */}
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <Line x1={250} y1={270} x2={336} y2={210} stroke={GREEN_DARK} strokeWidth={2.2} strokeDasharray="7 6" />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.5)} d={arrowD(330, 214, 352, 199)} stroke={GREEN_DARK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <T x={356} y={180} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          {t("n̂ — outward normal", "n̂ — outward normal")}
        </T>
      </Fade>

      {/* θ, measured from the normal */}
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <Line x1={250} y1={270} x2={344} y2={270} stroke={MUTED} strokeWidth={1.6} strokeDasharray="5 5" />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.1)} d="M 296 270 A 46 46 0 0 0 287.7 241.6" stroke={RED} sw={2} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <T x={308} y={252} size={15} fill={RED} weight={800}>θ</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <T x={60} y={388} size={13.5} fill={RED} weight={800} anchor="start">
          {t("θ is measured from the NORMAL — never from the surface.",
             "θ hamesha NORMAL se naapa jaata hai — surface se nahi.")}
        </T>
      </Fade>

      {/* ---------------- RIGHT COLUMN ---------------- */}
      {/* beat 3 — formula 2: the weber */}
      <Badge n={2} cx={578} cy={106} on={beat >= 3} delay={dl(3, 0.2)} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={602} y={111} size={14} fill={RED} weight={800} anchor="start">
          {t("S I UNIT — THE WEBER", "S I UNIT — WEBER")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={578} y={148} size={17} fill={INK} weight={800} anchor="start">
          1 Wb = 1 T · m² = 1 V · s
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={578} y={172} size={12.5} fill={MUTED} weight={600} anchor="start">
          {t("T·m² reads straight off Φ = B × A · V·s waits for induced emf",
             "T·m² seedha Φ = B × A se · V·s induced emf ke liye")}
        </T>
      </Fade>

      {/* beat 4 — formula 3: dimensions */}
      <Badge n={3} cx={578} cy={216} on={beat >= 4} delay={dl(4, 0.2)} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={602} y={221} size={14} fill={RED} weight={800} anchor="start">
          {t("DIMENSIONAL FORMULA", "DIMENSIONAL FORMULA")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={578} y={258} size={17} fill={AMBER_DARK} weight={800} anchor="start">
          [Φ] = M L² T⁻² A⁻¹
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={578} y={282} size={12.5} fill={MUTED} weight={600} anchor="start">
          {t("asked with the definition — learn the two as a pair",
             "definition ke saath poochha jaata hai — jodi mein yaad karo")}
        </T>
      </Fade>

      {/* beat 5 — formula 4: the product form */}
      <Badge n={4} cx={578} cy={326} on={beat >= 5} delay={dl(5, 0.2)} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={602} y={331} size={14} fill={RED} weight={800} anchor="start">
          {t("FLAT AREA IN A UNIFORM FIELD", "UNIFORM FIELD MEIN FLAT AREA")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={578} y={370} size={20} fill={GREEN} weight={900} anchor="start">
          Φ = B A cos θ
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={578} y={394} size={12.5} fill={MUTED} weight={600} anchor="start">
          {t("the integral collapses — this is the form almost every numerical uses",
             "integral simat jaata hai — har numerical mein yahi form chalta hai")}
        </T>
      </Fade>

      {/* ---------------- beat 6 — the two closed-surface laws ---------------- */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 60 404 H 520 V 504 H 60 Z" stroke={INK} sw={1.8} dur={0.6} />
      <Draw on={beat >= 6} delay={dl(6, 0.4)} d="M 560 404 H 1020 V 504 H 560 Z" stroke={INK} sw={1.8} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <T x={290} y={430} size={13.5} fill={RED} weight={800}>
          {t("MAGNETIC — GAUSS'S LAW", "MAGNETIC — GAUSS'S LAW")}
        </T>
        <T x={290} y={468} size={19} fill={INK} weight={900}>∮ B · dA = 0</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <T x={790} y={430} size={13.5} fill={RED} weight={800}>
          {t("ELECTRIC — GAUSS'S LAW", "ELECTRIC — GAUSS'S LAW")}
        </T>
        <T x={790} y={468} size={19} fill={INK} weight={900}>∮ E · dA = q_enc / ε₀</T>
      </Fade>

      {/* beat 7 — only the right hand sides matter */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d={ringD(346, 462, 20, 18)} stroke={GREEN_DARK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d={ringD(848, 462, 56, 20)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={290} y={494} size={12} fill={GREEN_DARK} weight={700}>
          {t("no isolated poles ⇒ no source term", "isolated poles nahi ⇒ source term nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={790} y={494} size={12} fill={AMBER_DARK} weight={700}>
          {t("isolated charges exist ⇒ a source term", "isolated charges hote hain ⇒ source term")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={540} y={526} size={13.5} fill={INK} weight={800}>
          {t("The left hand sides are identical — every bit of the physics sits on the right.",
             "Left hand sides bilkul same hain — poori physics right side par hai.")}
        </T>
      </Fade>

      {/* beat 8 — flux density vocabulary */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <Chip x={40} y={542} w={1000} h={44} fill={GREEN} textFill="#ffffff" size={14}>
          {t("★ B = Φ / A ⇒ B is the magnetic flux density · 1 T = 1 Wb/m² · tesla is field, weber is flux",
             "★ B = Φ / A ⇒ B magnetic flux density hai · 1 T = 1 Wb/m² · tesla field, weber flux")}
        </Chip>
      </Fade>
    </Scene>
  );
}
