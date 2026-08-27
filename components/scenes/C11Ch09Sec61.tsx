/**
 * C11 Ch09 · Section 61 — "Kekule to resonance hybrid"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 11.26, 19.63, 29.53, 46.17, 56.06, 68.52]):
 *  0 heading: historical clue was in the bonds · 1 all six C-C bonds
 *  identical, 139 pm · 2 sits between single(154) and double(134) ·
 *  3 diagram: two Kekule forms ↔ hybrid (hexagon+circle) · 4 bonds neither
 *  single nor double · 5 no real double bonds, hybrid is reality ·
 *  6 RED: hexagon-with-circle is the honest picture
 *
 * Layout plan — 3 hexagons r=48, centers x=190/470/750, y=270:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, AMBER_DARK, INK, MUTED, RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, doubleBondD, ringD } from "./chem-kit";

function hexVerts(cx: number, cy: number, r: number) {
  const pts: [number, number][] = [];
  for (let i = 0; i < 6; i++) {
    const a = Math.PI / 6 + (i * 2 * Math.PI) / 6;
    pts.push([cx + r * Math.cos(a), cy + r * Math.sin(a)]);
  }
  return pts;
}

export default function C11Ch09Sec61({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const V1 = hexVerts(190, 270, 48);
  const V2 = hexVerts(470, 270, 48);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={26} fill={RED} script>
          {t("Kekule to resonance hybrid", "Kekule se resonance hybrid tak")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={97} size={15} fill={INK} weight={700}>
          {t("the historical clue was in the bonds", "historical clue bonds mein tha")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={130} size={14} fill={INK}>
          {t("experiment shows all six C–C bonds are identical, each 139 pm", "experiment dikhata sabhi chhe C–C bonds identical, har ek 139 pm")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={163} size={14} fill={INK}>
          {t("sits neatly between single (154 pm) and double (134 pm)", "single (154 pm) aur double (134 pm) ke beech")}
        </T>
      </Fade>

      {/* beat 3 — the two Kekule forms and the hybrid */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d={bondD(...V1[1], ...V1[2])} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 0.4)} d={doubleBondD(...V1[2], ...V1[3], 3)} stroke={INK} sw={1.8} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d={bondD(...V1[3], ...V1[4])} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d={doubleBondD(...V1[4], ...V1[5], 3)} stroke={INK} sw={1.8} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 1)} d={bondD(...V1[5], ...V1[0])} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 1.2)} d={doubleBondD(...V1[0], ...V1[1], 3)} stroke={INK} sw={1.8} dur={0.3} />

      <Draw on={beat >= 3} delay={dl(3, 1.6)} d="M 270 270 L 320 270 M 308 264 L 320 270 L 308 276 M 320 270 L 270 270 M 282 264 L 270 270 L 282 276" stroke={MUTED} sw={1.8} dur={0.5} />

      <Draw on={beat >= 3} delay={dl(3, 2.1)} d={doubleBondD(...V2[1], ...V2[2], 3)} stroke={INK} sw={1.8} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 2.3)} d={bondD(...V2[2], ...V2[3])} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 2.5)} d={doubleBondD(...V2[3], ...V2[4], 3)} stroke={INK} sw={1.8} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 2.7)} d={bondD(...V2[4], ...V2[5])} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 2.9)} d={doubleBondD(...V2[5], ...V2[0], 3)} stroke={INK} sw={1.8} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 3.1)} d={bondD(...V2[0], ...V2[1])} stroke={INK} sw={2} dur={0.3} />

      <Fade on={beat >= 3} delay={dl(3, 3.5)}>
        <T x={610} y={280} size={20} fill={MUTED}>=</T>
      </Fade>

      <Draw on={beat >= 3} delay={dl(3, 3.8)} d={ringD(750, 270, 48, 6)} stroke={AMBER_DARK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 4.4)} d="M 778 270 A 28 28 0 1 1 777.9 269.9" stroke={AMBER_DARK} sw={2} dur={0.6} />

      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={190} y={340} size={12} fill={MUTED} script>{t("Kekule form A", "Kekule form A")}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.1)}>
        <T x={470} y={340} size={12} fill={MUTED} script>{t("Kekule form B", "Kekule form B")}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.2)}>
        <T x={750} y={340} size={12} fill={AMBER_DARK} script>{t("the hybrid (real)", "hybrid (asli)")}</T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={400} size={15} fill={INK}>
          {t("the bonds are neither single nor double — one order, everywhere", "bonds na single hain na double — ek order, har jagah")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={433} size={15} fill={INK}>
          {t("there are no “real” double bonds — the hybrid is the reality", "koi “real” double bonds nahi — hybrid hi reality hai")}
        </T>
      </Fade>

      {/* beat 6 — the honest picture */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 458 L 60 494" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={480} size={16} fill={RED} script anchor="start">
          {t("hexagon-with-a-circle is the honest picture of benzene", "hexagon-with-circle hi benzene ki honest picture hai")}
        </T>
      </Fade>
    </Scene>
  );
}
