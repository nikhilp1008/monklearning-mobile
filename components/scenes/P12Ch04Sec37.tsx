/**
 * P12Ch04 · Section 37 — "Derivation A: The Revolving Electron and the Bohr Magneton"
 *
 * WHAT IT USED TO SHOW
 *   Three template blocks of bullet prose gated on beats 0 / 1 / 8 / 11 only, out
 *   of 13 narration segments. The whole four-step derivation (period, current,
 *   moment, gyromagnetic ratio) landed in one lump at 22 s and then the board sat
 *   frozen for the remaining ~280 s. Drawn elements: a title underline and two
 *   horizontal rules. No orbit, no electron, no current, no vectors.
 *
 * WHAT THE NARRATION TEACHES
 *   The CBSE 3-mark derivation. Model the electron as a charge e of mass m on a
 *   circle of radius r at speed v. (1) The orbit IS a current: T = 2πr/v so
 *   I = e/T = ev/2πr. (2) A loop's moment is μ = I·A with A = πr², giving
 *   μ_l = evr/2. (3) Since L = mvr, vr = L/m, so μ_l = (e/2m)L and the ratio
 *   μ_l/L = e/2m ≈ 8.8 × 10¹⁰ C/kg is independent of r and v — the gyromagnetic
 *   ratio; in vector form μ_l = −(e/2m)L, the minus coming from the negative
 *   charge. (4) Bohr quantises L = nh/2π, so μ_l = n·eh/4πm, and the n = 1 value
 *   eh/4πm = 9.27 × 10⁻²⁴ A m² is the Bohr magneton.
 *
 * THE FIGURE (left column, beats 1–2)
 *   A drawn orbit: circle, nucleus cross, radius with its "r" label, the electron
 *   as a filled dot, a tangent velocity arrow, an anticlockwise arc for the
 *   electron's motion, a clockwise arc outside for the conventional current I,
 *   and the two opposed vectors L (up) and μ_l (down) beside the orbit — the
 *   sign subtlety the narration warns about, drawn rather than asserted.
 *
 * BEAT MAP (13 reveals, gates 0…12 — every beat used)
 *   0  title, underline, subtitle
 *   1  figure skeleton: orbit, nucleus, radius + r, electron dot, v arrow, caption
 *   2  sense arcs (e⁻ anticlockwise, I clockwise) + L and μ_l arrows + 2 captions
 *   3  step ① heading — "the orbit IS a current"
 *   4  chip: T = 2πr/v ⇒ I = e/T = ev/2πr
 *   5  step ② heading — moment = current × area, A = πr²
 *   6  chip: μ_l = (ev/2πr)(πr²) = evr/2
 *   7  step ③ heading — L = mvr ⇒ vr = L/m
 *   8  chip: μ_l = (e/2m)L ⇒ μ_l/L = e/2m ≈ 8.8 × 10¹⁰ C kg⁻¹ + "r and v vanish"
 *   9  band divider + "the gyromagnetic ratio" + vector chip μ_l = −(e/2m)L
 *  10  step ④ heading + Bohr's postulate L = nh/2π
 *  11  chip: μ_l = n · eh/4πm  (quantised)
 *  12  Bohr magneton chip eh/4πm = 9.27 × 10⁻²⁴ A m²
 *
 * LAYOUT (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s)
 *   title cx540 bl44 · underline y56..64 · subtitle cx540 bl92
 *   LEFT  x50..380 : head bl122 · cap bl150 · orbit c(222,252) R78 · caps bl372/400
 *   RIGHT x470..1030: ① 122/151/chip166..204 · ② 240/269/chip284..322
 *                     ③ 358/387/chip402..450 · note bl470
 *   divider x452 y106..470 (b3) · divider y484 x50..1044 (b9)
 *   BAND  b9 x50..380 (bl514 · chip530..570 · bl592)
 *         b10/11 x412..672 (bl514 · bl542 · chip556..594)
 *         b12 x712..1044 (chip498..542 · bl564 · bl592)
 */

import React from "react";
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const rad = (d: number) => (d * Math.PI) / 180;

/** Circle as a closed two-arc path. */
function circleD(cx: number, cy: number, r: number): string {
  return `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy}`;
}

/** Arc from a0° to a1° about (cx,cy) with an arrowhead at the far end. */
function arcArrowD(cx: number, cy: number, R: number, a0: number, a1: number): string {
  const x0 = cx + R * Math.cos(rad(a0));
  const y0 = cy + R * Math.sin(rad(a0));
  const x1 = cx + R * Math.cos(rad(a1));
  const y1 = cy + R * Math.sin(rad(a1));
  const sweep = a1 > a0 ? 1 : 0;
  const large = Math.abs(a1 - a0) > 180 ? 1 : 0;
  const s = a1 > a0 ? 1 : -1;
  const ang = Math.atan2(s * Math.cos(rad(a1)), s * -Math.sin(rad(a1)));
  const h = 10;
  return (
    `M ${x0.toFixed(1)} ${y0.toFixed(1)} A ${R} ${R} 0 ${large} ${sweep} ${x1.toFixed(1)} ${y1.toFixed(1)}` +
    ` M ${(x1 - h * Math.cos(ang - 0.46)).toFixed(1)} ${(y1 - h * Math.sin(ang - 0.46)).toFixed(1)}` +
    ` L ${x1.toFixed(1)} ${y1.toFixed(1)}` +
    ` L ${(x1 - h * Math.cos(ang + 0.46)).toFixed(1)} ${(y1 - h * Math.sin(ang + 0.46)).toFixed(1)}`
  );
}

export default function P12Ch04Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ── beat 0 — title ─────────────────────────────────────────── */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("Revolving Electron → The Bohr Magneton",
             "Revolving Electron → The Bohr Magneton")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.5)}
        d="M 268 60 C 460 56, 640 64, 812 58" stroke={RED} sw={2.2} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 3.2)}>
        <T x={540} y={92} size={13} fill={MUTED} script>
          {t("CBSE · 3 marks · four steps from a classical orbit to a fundamental constant",
             "CBSE · 3 marks · four steps from a classical orbit to a fundamental constant")}
        </T>
      </Fade>

      {/* ── beat 1 — the setup, drawn ──────────────────────────────── */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={50} y={122} size={13.5} fill={RED} weight={800} anchor="start">
          {t("THE SETUP — BOHR'S PICTURE", "THE SETUP — BOHR'S PICTURE")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={50} y={150} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("electron: charge e, mass m · orbit radius r · speed v",
             "electron: charge e, mass m · orbit radius r · speed v")}
        </T>
      </Fade>
      {/* orbit */}
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d={circleD(222, 252, 78)} stroke={INK} sw={2.1} dur={1.1} />
      {/* nucleus marker */}
      <Draw on={beat >= 1} delay={dl(1, 2.8)} d="M 216 252 H 228 M 222 246 V 258" stroke={AMBER_DARK} sw={2.4} dur={0.3} />
      {/* radius + label */}
      <Draw on={beat >= 1} delay={dl(1, 3.4)} d="M 228.8 247.8 L 282.6 214.1" stroke={MUTED} sw={1.8} dur={0.45} />
      <Fade on={beat >= 1} delay={dl(1, 4.0)}>
        <T x={263} y={244} size={13.5} fill={INK} script>r</T>
      </Fade>
      {/* electron */}
      <Draw on={beat >= 1} delay={dl(1, 4.6)} d={circleD(288.1, 210.7, 6.5)} stroke={INK} sw={2} dur={0.3} fill={INK} />
      {/* velocity */}
      <Draw on={beat >= 1} delay={dl(1, 5.4)} d={arrowD(283.3, 203.1, 260, 165.8)} stroke={INK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 6.0)}>
        <T x={300} y={172} size={13.5} fill={INK} script>v</T>
      </Fade>

      {/* ── beat 2 — the two senses and the two opposed vectors ────── */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={arcArrowD(222, 252, 58, 205, 155)} stroke={INK} sw={2.1} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={196} y={256} size={12.5} fill={INK} script>e⁻</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.4)} d={arcArrowD(222, 252, 100, -20, 30)} stroke={GREEN} sw={2.4} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 3.1)}>
        <T x={340} y={262} size={15} fill={GREEN} script>I</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4.4)} d={arrowD(92, 248, 92, 180)} stroke={AMBER_DARK} sw={2.6} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 5.0)}>
        <T x={80} y={212} size={14} fill={AMBER_DARK} script anchor="end">L</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 5.8)} d={arrowD(92, 268, 92, 336)} stroke={RED} sw={2.6} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 6.4)}>
        <T x={80} y={304} size={14} fill={RED} script anchor="end">μ_l</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7.2)}>
        <T x={50} y={372} size={12.5} fill={GREEN_DARK} weight={700} anchor="start">
          {t("e⁻ runs anticlockwise ⇒ conventional I runs clockwise",
             "e⁻ runs anticlockwise ⇒ conventional I runs clockwise")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9.0)}>
        <T x={50} y={400} size={12.5} fill={RED} weight={700} anchor="start">
          {t("so μ_l points opposite to L — that is the minus sign",
             "so μ_l points opposite to L — that is the minus sign")}
        </T>
      </Fade>

      {/* column rule */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M 452 106 L 452 470" stroke={MUTED} sw={1.2} dur={0.6} />

      {/* ── beats 3–4 — step ① ─────────────────────────────────────── */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={470} y={122} size={14} fill={RED} weight={800} anchor="start">
          {t("① THE ORBIT IS A CURRENT", "① THE ORBIT IS A CURRENT")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={470} y={151} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("one electron passes any point once every period T",
             "one electron passes any point once every period T")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={470} y={166} w={560} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17}>
          T = 2πr / v   ⇒   I = e / T = e v / 2πr
        </Chip>
      </Fade>

      {/* ── beats 5–6 — step ② ─────────────────────────────────────── */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={470} y={240} size={14} fill={RED} weight={800} anchor="start">
          {t("② MOMENT = CURRENT × AREA", "② MOMENT = CURRENT × AREA")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={470} y={269} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("a loop has μ = I × A, and the orbit encloses A = π r²",
             "a loop has μ = I × A, and the orbit encloses A = π r²")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={470} y={284} w={560} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={17}>
          μ_l = (e v / 2πr) × π r² = e v r / 2
        </Chip>
      </Fade>

      {/* ── beats 7–8 — step ③ ─────────────────────────────────────── */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={470} y={358} size={14} fill={RED} weight={800} anchor="start">
          {t("③ SWAP IN THE ANGULAR MOMENTUM", "③ SWAP IN THE ANGULAR MOMENTUM")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={470} y={387} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("L = m v r   ⇒   v r = L / m — substitute that in",
             "L = m v r   ⇒   v r = L / m — substitute that in")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.4)}>
        <Chip x={470} y={402} w={560} h={48} fill={CREAM} stroke={GREEN} textFill={INK} size={14}>
          μ_l = (e / 2m) L   ⇒   μ_l / L = e / 2m ≈ 8.8 × 10¹⁰ C kg⁻¹
        </Chip>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 3.0)}>
        <T x={470} y={470} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("r, v, the size of the orbit — all gone. Every orbit gives this ratio.",
             "r, v, the size of the orbit — all gone. Every orbit gives this ratio.")}
        </T>
      </Fade>

      {/* band rule */}
      <Draw on={beat >= 9} delay={dl(9, 0.1)} d="M 50 484 L 1044 484" stroke={INK} sw={1.5} dur={0.8} />

      {/* ── beat 9 — the gyromagnetic ratio and its sign ───────────── */}
      <Fade on={beat >= 9} delay={dl(9, 0.7)}>
        <T x={50} y={514} size={13.5} fill={RED} weight={800} anchor="start">
          {t("THE GYROMAGNETIC RATIO · AND ITS SIGN", "THE GYROMAGNETIC RATIO · AND ITS SIGN")}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 1.6)}>
        <Chip x={50} y={530} w={330} h={40} fill={CREAM} stroke={RED} textFill={RED} size={15}>
          μ_l = − (e / 2m) L
        </Chip>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 3.4)}>
        <T x={50} y={592} size={12.5} fill={RED} weight={800} anchor="start">
          {t("the minus mirrors the figure — never drop it",
             "the minus mirrors the figure — never drop it")}
        </T>
      </Fade>

      {/* ── beats 10–11 — step ④ ───────────────────────────────────── */}
      <Fade on={beat >= 10} delay={dl(10, 0.3)}>
        <T x={412} y={514} size={13.5} fill={RED} weight={800} anchor="start">
          {t("④ ONE QUANTUM RULE", "④ ONE QUANTUM RULE")}
        </T>
      </Fade>
      <Fade on={beat >= 10} delay={dl(10, 1.1)}>
        <T x={412} y={542} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("Bohr: L = n h / 2π,  n = 1, 2, 3 …", "Bohr: L = n h / 2π,  n = 1, 2, 3 …")}
        </T>
      </Fade>
      <Fade on={beat >= 11} delay={dl(11, 0.4)}>
        <Chip x={412} y={556} w={260} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15}>
          μ_l = n · e h / 4π m
        </Chip>
      </Fade>

      {/* ── beat 12 — the Bohr magneton ────────────────────────────── */}
      <Fade on={beat >= 12} delay={dl(12, 0.3)}>
        <Chip x={712} y={498} w={332} h={44} fill={GREEN} textFill="#ffffff" size={15}>
          μ_B = e h / 4π m
        </Chip>
      </Fade>
      <Fade on={beat >= 12} delay={dl(12, 1.4)}>
        <T x={712} y={564} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("= 9.27 × 10⁻²⁴ A m²   (n = 1)", "= 9.27 × 10⁻²⁴ A m²   (n = 1)")}
        </T>
      </Fade>
      <Fade on={beat >= 12} delay={dl(12, 2.6)}>
        <T x={712} y={592} size={12.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("the natural unit of magnetism in matter", "the natural unit of magnetism in matter")}
        </T>
      </Fade>
    </Scene>
  );
}
