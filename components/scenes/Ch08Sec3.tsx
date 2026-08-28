/**
 * Ch08 · Section 3 — "Stress: restoring force per unit area"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.66, 21.76, 33.54, 46.76, 54.95, 55.95, 56.95]):
 *  0 a rod under tension: F ← rod → F
 *  1 same rod, TWO scales: thick "cable" and thin "wire", both under the
 *    SAME F — raw force alone doesn't compare materials
 *  2 hatch a cross-section "A" on the rod + quote: force ÷ that area
 *  3 boxed hero formula: σ = F / A
 *  4 THE DIAGRAM: three icons — longitudinal (arrows on axis), volumetric
 *    (arrows on all 4 faces), shear (sheared face + parallel arrow)
 *  5 caption each icon: name + one-line description
 *  6 SI unit: pascal = N/m², dimensions
 *  7 red margin-bar market analogy (short beat)
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 24, red, ALWAYS ON) cx540 bl64
 *  b0 | rod                | Draw | x350..730 y145..161
 *  b0 | F arrows ×2        | Draw | x300..345 / x735..780  y153
 *  b0 | "F" labels ×2 (14) | T    | x270..290 / x800..820  bl157
 *  b1 | thick bar "cable"  | Draw | x350..650 y192..210
 *  b1 | thin bar "wire"    | Draw | x350..650 y232..240
 *  b1 | arrows + labels    | Draw/T| x320..675 y196..240
 *  b1 | conclusion (14)    | T st | x700..970 bl216 (y198..223)
 *  b2 | hatch "A"          | Draw | x518..552 y145..161
 *  b2 | "A" label (12)     | T mid| x520..550 bl178 (y169..182)
 *  b2 | quote (14)         | T mid| x828..1012 bl155 (y137..162)
 *  b3 | box               | Draw | x400..680 y270..350
 *  b3 | "σ = F / A" (40)   | T mid| x450..630 bl310 (y279..322)
 *  b4 | longitudinal       | Draw | x185..235 y370..480
 *  b4 | volumetric         | Draw | x470..610 y365..485
 *  b4 | shear              | Draw | x840..920 y390..445
 *  b5 | captions ×3×2      | T mid| cols x210/540/870  bl505 / bl522
 *  b6 | SI unit line (15)  | T mid| x368..713 bl550 (y538..555)
 *  b7 | margin bar         | Draw | x60 y568..595
 *  b7 | analogy (14)       | T st | x76..~414 bl588 (y570..595)
 */

import React from "react";
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

export default function Ch08Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("stress — restoring force, spread over area", "stress — restoring force, area par phaila")}
        </T>
      </Fade>

      {/* beat 0 — a rod under tension */}
      <Fade on={beat >= 0} delay={0}>
        <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M350 145 h380 v16 h-380 z" stroke={INK} sw={2.2} dur={0.7} fill={CREAM} />
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.3)} d={arrowD(345, 153, 300, 153)} stroke={INK} sw={2.4} dur={0.4} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={280} y={157} size={14} fill={INK} weight={800} anchor="end">
          F
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d={arrowD(735, 153, 780, 153)} stroke={INK} sw={2.4} dur={0.4} />
      <Fade on={beat >= 0} delay={dl(0, 3.1)}>
        <T x={800} y={157} size={14} fill={INK} weight={800} anchor="start">
          F
        </T>
      </Fade>

      {/* beat 1 — same force, two different areas: cable vs wire */}
      <Fade on={beat >= 1} delay={0}>
        <Draw on={beat >= 1} delay={dl(1, 0.3)} d="M350 192 h300 v18 h-300 z" stroke={INK} sw={2.2} dur={0.6} fill={CREAM} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.1)} d={arrowD(345, 201, 320, 201)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 1.5)} d={arrowD(650, 201, 675, 201)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={335} y={205} size={11} fill={MUTED} anchor="end">
          {t("cable", "cable")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={0}>
        <Draw on={beat >= 1} delay={dl(1, 2.6)} d="M350 232 h300 v8 h-300 z" stroke={INK} sw={1.6} dur={0.5} fill={CREAM} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.3)} d={arrowD(345, 236, 320, 236)} stroke={INK} sw={1.8} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 3.7)} d={arrowD(650, 236, 675, 236)} stroke={INK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <T x={335} y={240} size={11} fill={MUTED} anchor="end">
          {t("wire", "wire")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <T x={700} y={216} size={14} fill={RED} script anchor="start">
          {t("same F, different area — not fair", "same F, area alag — fair nahi")}
        </T>
      </Fade>

      {/* beat 2 — hatch a cross-section, that's the area A */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.4)}
        d="M528 145 L518 161 M540 145 L530 161 M552 145 L542 161"
        stroke={AMBER_DARK}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={535} y={178} size={12} fill={AMBER_DARK} weight={700}>
          A
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={920} y={155} size={14} fill={GREEN} script>
          {t("force ÷ that area = stress", "force ÷ us area = stress")}
        </T>
      </Fade>

      {/* beat 3 — the hero formula */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.4)}
        d="M412 270 h256 q12 0 12 12 v56 q0 12 -12 12 h-256 q-12 0 -12 -12 v-56 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.8}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={540} y={318} size={38} fill={INK} weight={800}>
          σ = F / A
        </T>
      </Fade>

      {/* beat 4 — three ways a solid feels stress */}
      <Fade on={beat >= 4} delay={0}>
        <Draw on={beat >= 4} delay={dl(4, 0.3)} d="M185 400 h50 v50 h-50 z" stroke={INK} sw={2.2} dur={0.5} fill={CREAM} />
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1)}
        d={`${arrowD(210, 400, 210, 370)} M210 480 L210 450 M203 456 L210 450 L217 456`}
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={0}>
        <Draw on={beat >= 4} delay={dl(4, 1.8)} d="M510 395 h60 v60 h-60 z" stroke={AMBER_DARK} sw={2.2} dur={0.6} fill={CREAM} />
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 2.8)}
        d={`${arrowD(540, 393, 540, 365)} M540 485 L540 457 M533 463 L540 457 L547 463 M470 425 L508 425 M470 425 L478 419 M470 425 L478 431 M610 425 L572 425 M610 425 L602 419 M610 425 L602 431`}
        stroke={AMBER_DARK}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={0}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 3.9)}
          d="M840 445 L840 420 L860 405 L920 405 L920 430 L900 445 Z"
          stroke={RED}
          sw={2.2}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 4.7)} d={arrowD(858, 390, 908, 390)} stroke={RED} sw={2.2} dur={0.4} />

      {/* beat 5 — name and describe each */}
      <Fade on={beat >= 5} delay={dl(5, 0.1)}>
        <T x={210} y={505} size={13} fill={INK} weight={700}>
          {t("Longitudinal", "Longitudinal")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.25)}>
        <T x={210} y={522} size={10} fill={MUTED}>
          {t("along the axis", "axis ke saath")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={505} size={13} fill={AMBER_DARK} weight={700}>
          {t("Volumetric", "Volumetric")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.55)}>
        <T x={540} y={522} size={10} fill={MUTED}>
          {t("pressure, all faces", "pressure, sab faces")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={870} y={505} size={13} fill={RED} weight={700}>
          {t("Shear", "Shear")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.85)}>
        <T x={870} y={522} size={10} fill={MUTED}>
          {t("parallel to a face", "face ke parallel")}
        </T>
      </Fade>

      {/* beat 6 — SI unit and dimensions */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={550} size={15} fill={AMBER_DARK} weight={700}>
          {t("SI unit: pascal (Pa) = N/m² · dims [ML⁻¹T⁻²]", "SI unit: pascal (Pa) = N/m² · dims [ML⁻¹T⁻²]")}
        </T>
      </Fade>

      {/* beat 7 — the market analogy (short beat) */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M60 568 L60 595" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={588} size={14} fill={RED} script anchor="start">
          {t("like price per kilo — not the total bill", "jaise price per kilo — poora bill nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
