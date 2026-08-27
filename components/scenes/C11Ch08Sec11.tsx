/**
 * C11 Ch08 · Section 11 — "Hybridization — why carbon won't behave on paper"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 8.87, 20.05, 38.31, 49.49, 74.33, 95.23, 105.9, 119.64]):
 *  0 title (always-on, seq1) · 1 on-paper 2s+2p · 2 predicted≠observed (methane) ·
 *  3 red: nature mixes & repacks · 4 sabziwala bags analogy (drawn) · 5 table:
 *  mix→hybrid (3 rows) · 6 table: leftover p → π column · 7 table: bonds-count
 *  rule column (red) · 8 red caveat (no-lone-pair shortcut)
 *
 * LEFT zone x60-500 (story), RIGHT zone x550-1030 (the hybridization table).
 * Layout plan:
 *  b1-3 | 3 text lines                 | T st  | x70 y100/130/160
 *  b4 | sabziwala bags (s + 3p → 4 eq) | Draw  | c120/170/300±/330± y225..285
 *  b4 | caption                        | T st  | x70 y320
 *  b5 | table header + MIX/HYBRID cols | T     | x560.. y150..245
 *  b6 | π-leftover column              | T st  | x900 y185/215/245
 *  b7 | BONDS column (red)             | T st  | x560 y185/215/245
 *  b8 | margin bar + red caveat        | Draw+T| x60 y490..520 · x76 y510
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD } from "./chem-kit";

export default function C11Ch08Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const Row = ({ y, cells }: { y: number; cells: [string, string, string, string] }) => (
    <>
      <T x={560} y={y} size={13} fill={INK} anchor="start">
        {cells[0]}
      </T>
      <T x={720} y={y} size={13} fill={INK}>
        {cells[1]}
      </T>
      <T x={850} y={y} size={13} fill={INK} weight={700}>
        {cells[2]}
      </T>
      <T x={900} y={y} size={13} fill={AMBER_DARK} anchor="start">
        {cells[3]}
      </T>
    </>
  );

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} script>
          {t("Hybridization — why carbon won't behave on paper", "Hybridization — carbon paper pe kyun nahi chalta")}
        </T>
      </Fade>

      {/* beat 1 — on paper: 2s + 2p */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={70} y={100} size={14} fill={INK} anchor="start">
          {t("on paper: 2s (sphere) + 2p (dumbbells)", "on paper: 2s (sphere) + 2p (dumbbells)")}
        </T>
      </Fade>

      {/* beat 2 — predicted vs observed */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={70} y={130} size={13} fill={INK} anchor="start">
          {t("predicted: bonds differ. observed: all 4 identical ✓", "predicted: bonds alag. observed: 4 hi identical ✓")}
        </T>
      </Fade>

      {/* beat 3 — nature's fix */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={70} y={160} size={13} fill={RED} script anchor="start">
          {t("nature's fix: mix & repack into identical hybrids", "nature ka fix: mix karo & identical hybrids banao")}
        </T>
      </Fade>

      {/* beat 4 — sabziwala bags analogy */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <Circle cx={120} cy={255} r={22} fill="none" stroke={INK} strokeWidth={2} />
        <T x={120} y={260} size={12} fill={INK}>
          s
        </T>
        {[228, 255, 282].map((cy, i) => (
          <React.Fragment key={i}>
            <Circle cx={175} cy={cy} r={12} fill="none" stroke={INK} strokeWidth={1.8} />
            <T x={175} y={cy + 4} size={10} fill={INK}>
              p
            </T>
          </React.Fragment>
        ))}
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1)} d={bondD(215, 255, 260, 255)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        {[
          [290, 240],
          [325, 240],
          [290, 275],
          [325, 275],
        ].map(([cx, cy], i) => (
          <Circle key={i} cx={cx} cy={cy} r={16} fill="none" stroke={GREEN} strokeWidth={2} />
        ))}
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.9)}>
        <T x={70} y={320} size={13} fill={AMBER_DARK} script anchor="start">
          {t("empty & repack → 4 equal bags", "khaali karo & repack karo → 4 equal bags")}
        </T>
      </Fade>

      {/* beat 5 — table: mix → hybrid */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={560} y={150} size={12} fill={MUTED} weight={700} anchor="start">
          BONDS
        </T>
        <T x={720} y={150} size={12} fill={MUTED} weight={700}>
          MIX
        </T>
        <T x={850} y={150} size={12} fill={MUTED} weight={700}>
          HYBRID
        </T>
        <T x={900} y={150} size={12} fill={MUTED} weight={700} anchor="start">
          π LEFTOVER
        </T>
        <Row y={185} cells={["", "1s + 3p", "4× sp³", ""]} />
        <Row y={215} cells={["", "1s + 2p", "3× sp²", ""]} />
        <Row y={245} cells={["", "1s + 1p", "2× sp", ""]} />
      </Fade>

      {/* beat 6 — leftover p forms pi bonds */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={900} y={185} size={13} fill={AMBER_DARK} anchor="start">
          {t("none", "none")}
        </T>
        <T x={900} y={215} size={13} fill={AMBER_DARK} anchor="start">
          {t("1 p → π", "1 p → π")}
        </T>
        <T x={900} y={245} size={13} fill={AMBER_DARK} anchor="start">
          {t("2 p → π", "2 p → π")}
        </T>
      </Fade>

      {/* beat 7 — rule of thumb, red: count the bonds */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={560} y={185} size={13} fill={RED} weight={700} anchor="start">
          {t("only single bonds", "sirf single bonds")}
        </T>
        <T x={560} y={215} size={13} fill={RED} weight={700} anchor="start">
          {t("1 double bond", "1 double bond")}
        </T>
        <T x={560} y={245} size={13} fill={RED} weight={700} anchor="start">
          {t("triple / 2 double", "triple / 2 double")}
        </T>
      </Fade>

      {/* beat 8 — caveat: no lone pairs on carbon */}
      <Draw on={beat >= 8} delay={dl(8, 0.2)} d="M 60 490 L 60 520" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.6)}>
        <T x={76} y={510} size={15} fill={RED} script anchor="start">
          {t(
            "works because carbon has no lone pairs — N, O, charged C need lone-pair counting",
            "works kyunki carbon ke lone pairs nahi — N, O, charged C mein lone-pair ginna padta"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
