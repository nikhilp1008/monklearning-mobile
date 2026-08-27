/**
 * P12Ch05 · Section 62 — "Procedures: making a magnet, and unmaking one"
 * Subtopic: Permanent Magnets and Electromagnets
 *
 * BOARD REWRITTEN 2026-08-21 — the artwork taught a different topic from the voice.
 *
 * WHAT THE BOARD USED TO TEACH: transformer core losses — hysteresis loss
 * P_h = A_loop·V·f, eddy loss P_e ∝ t²f²B², and the combined P_total. Not one
 * word of that is spoken here.
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: the four procedures for MAKING a magnet
 * (electrical/solenoid with D.C., single touch, double touch, hammering in the
 * Earth's field — with the caution to lift the stroking magnet clear between
 * passes) and the three for UNMAKING one (heat past the Curie temperature,
 * rough handling in random orientations, and A.C. demagnetisation with the
 * amplitude walked down to zero). The board is now those seven procedures,
 * each drawn.
 *
 * BEAT MAP (n_reveals = 9 → valid gates 0..8):
 *   0  "steady CBSE favourites, name it and say why"  title + subtitle
 *   1  "method one — the electrical method"           MAKING header + cell 1
 *   2  "method two — single touch / stroking"         cell 2
 *   3  "that lifting clear matters"                   red caution inside cell 2
 *   4  "method three — double touch"                  cell 3
 *   5  "method four — hammering in the Earth's field" cell 4
 *   6  "heat past the Curie temperature"              UNMAKING header + cell 1
 *   7  "rough handling: random shocks"                cell 2
 *   8  "A.C. demagnetisation, spiralling inward"      cell 3 (shrinking loops)
 */

import React from "react";
import { Circle, Ellipse, G, Line, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

/** small arrow with a small head — for domain grids */
function sArrow(x1: number, y1: number, x2: number, y2: number): string {
  const a = Math.atan2(y2 - y1, x2 - x1);
  const h = 5.5;
  return `M ${x1} ${y1} L ${x2} ${y2} M ${x2 - h * Math.cos(a - 0.5)} ${
    y2 - h * Math.sin(a - 0.5)
  } L ${x2} ${y2} L ${x2 - h * Math.cos(a + 0.5)} ${y2 - h * Math.sin(a + 0.5)}`;
}

/** 3×3 grid of domain arrows inside a square of side `size` at (x0,y0) */
function domainsD(x0: number, y0: number, size: number, angles: number[]): string {
  const s = size / 3;
  let d = "";
  for (let i = 0; i < 9; i++) {
    const cx = x0 + s * (i % 3) + s / 2;
    const cy = y0 + s * Math.floor(i / 3) + s / 2;
    const a = ((angles[i] ?? -90) * Math.PI) / 180;
    const L = s * 0.36;
    d += sArrow(cx - L * Math.cos(a), cy - L * Math.sin(a), cx + L * Math.cos(a), cy + L * Math.sin(a)) + " ";
  }
  return d;
}

/** closed B–H (or M–H) hysteresis loop */
function loopD(cx: number, cy: number, hw: number, hh: number, c: number, r: number): string {
  return [
    `M ${cx + hw} ${cy - hh}`,
    `C ${cx + hw * 0.4} ${cy - hh} ${cx + c} ${cy - r * 1.15} ${cx} ${cy - r}`,
    `C ${cx - c * 0.9} ${cy - r * 0.85} ${cx - c} ${cy - r * 0.35} ${cx - c} ${cy}`,
    `C ${cx - c} ${cy + r * 0.55} ${cx - hw * 0.45} ${cy + hh * 0.8} ${cx - hw} ${cy + hh}`,
    `C ${cx - hw * 0.4} ${cy + hh} ${cx - c} ${cy + r * 1.15} ${cx} ${cy + r}`,
    `C ${cx + c * 0.9} ${cy + r * 0.85} ${cx + c} ${cy + r * 0.35} ${cx + c} ${cy}`,
    `C ${cx + c} ${cy - r * 0.55} ${cx + hw * 0.45} ${cy - hh * 0.8} ${cx + hw} ${cy - hh}`,
  ].join(" ");
}

const ALIGNED = [-90, -90, -90, -90, -90, -90, -90, -90, -90];
const RANDOM = [-90, 25, 160, -35, 110, -145, 70, -10, -170];

export default function P12Ch05Sec62({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const cell = (k: number, x: number, y: number, w: number, h: number) => (
    <Fade on={beat >= k} delay={dl(k, 0.15)}>
      <Rect x={x} y={y} width={w} height={h} rx={10} fill={CREAM} stroke={MUTED} strokeWidth={1.4} />
    </Fade>
  );

  return (
    <Scene>
      {/* ---------------- beat 0 — title ---------------- */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("Making a magnet, and unmaking one", "Magnet banana, aur mitana")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.5)}
        d="M 320 60 C 490 56, 650 64, 770 58" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 2.2)}>
        <T x={540} y={78} size={13} fill={MUTED} script>
          {t("name the method — and say briefly why it works",
             "method ka naam lo — aur chhota sa reason bhi do")}
        </T>
      </Fade>

      {/* ================= MAKING ================= */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <T x={48} y={98} size={14} fill={RED} weight={800} anchor="start">
          {t("MAKING A MAGNET — FOUR METHODS", "MAGNET BANANE KE CHAAR TARIKE")}
        </T>
      </Fade>

      {/* ---- cell 1 · electrical (beat 1) ---- */}
      {cell(1, 44, 102, 240, 210)}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={164} y={126} size={13} fill={AMBER_DARK} weight={800}>
          {t("1 · ELECTRICAL", "1 · ELECTRICAL")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <Rect x={84} y={180} width={160} height={18} rx={2} fill="#fff" stroke={INK} strokeWidth={2} />
        <T x={94} y={194} size={12.5} fill={RED} weight={900}>N</T>
        <T x={234} y={194} size={12.5} fill={GREEN} weight={900}>S</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        {[104, 140, 176, 212].map((cx) => (
          <Ellipse key={cx} cx={cx} cy={189} rx={9} ry={24} fill="none" stroke={AMBER_DARK} strokeWidth={2} />
        ))}
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.7)}
        d="M 104 165 V 150 H 150 M 178 150 H 212 V 165 M 156 140 v 20 M 170 145 v 10"
        stroke={INK} sw={2} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={164} y={268} size={12.5} fill={INK} weight={700}>
          {t("rod inside a solenoid, strong D.C.", "rod solenoid ke andar, strong D.C.")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={164} y={288} size={12.5} fill={INK_LIGHT} weight={600}>
          {t("most effective — used commercially", "sabse effective — commercial method")}
        </T>
      </Fade>

      {/* ---- cell 2 · single touch (beat 2) ---- */}
      {cell(2, 296, 102, 240, 210)}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={416} y={126} size={13} fill={AMBER_DARK} weight={800}>
          {t("2 · SINGLE TOUCH", "2 · SINGLE TOUCH")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <Rect x={348} y={150} width={22} height={22} fill="#ffe4e6" stroke={RED} strokeWidth={1.8} />
        <Rect x={370} y={150} width={22} height={22} fill="#dcfce7" stroke={GREEN} strokeWidth={1.8} />
        <T x={359} y={166} size={12.5} fill={RED} weight={900}>N</T>
        <T x={381} y={166} size={12.5} fill={GREEN} weight={900}>S</T>
        <Rect x={336} y={200} width={160} height={22} rx={2} fill="#fff" stroke={INK} strokeWidth={2} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.3)} d={arrowD(346, 186, 488, 186)} stroke={AMBER_DARK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={416} y={240} size={12.5} fill={MUTED} weight={600}>
          {t("steel rod", "steel rod")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={416} y={268} size={12.5} fill={INK} weight={700}>
          {t("stroke end-to-end with ONE pole", "ek hi pole se end-to-end stroke")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <T x={416} y={288} size={12.5} fill={INK_LIGHT} weight={600}>
          {t("always in the same direction", "hamesha ek hi direction mein")}
        </T>
      </Fade>

      {/* ---- beat 3 · the lift-clear caution (inside cell 2) ---- */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)}
        d="M 490 148 C 455 136, 382 136, 348 148" stroke={RED} sw={2} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={416} y={306} size={12.5} fill={RED} weight={800}>
          {t("LIFT it clear between passes", "har pass ke beech UTHAO")}
        </T>
      </Fade>

      {/* ---- cell 3 · double touch (beat 4) ---- */}
      {cell(4, 548, 102, 240, 210)}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={668} y={126} size={13} fill={AMBER_DARK} weight={800}>
          {t("3 · DOUBLE TOUCH", "3 · DOUBLE TOUCH")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <Rect x={636} y={150} width={32} height={22} fill="#ffe4e6" stroke={RED} strokeWidth={1.8} />
        <Rect x={668} y={150} width={32} height={22} fill="#dcfce7" stroke={GREEN} strokeWidth={1.8} />
        <T x={652} y={166} size={12.5} fill={RED} weight={900}>N</T>
        <T x={684} y={166} size={12.5} fill={GREEN} weight={900}>S</T>
        <Rect x={588} y={200} width={160} height={22} rx={2} fill="#fff" stroke={INK} strokeWidth={2} />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.3)}
        d={`${arrowD(650, 186, 592, 186)} ${arrowD(686, 186, 744, 186)}`}
        stroke={AMBER_DARK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={668} y={268} size={12.5} fill={INK} weight={700}>
          {t("from the CENTRE outwards", "CENTRE se bahar ki taraf")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <T x={668} y={288} size={12.5} fill={INK_LIGHT} weight={600}>
          {t("two unlike poles at once — faster", "do unlike poles saath — tez")}
        </T>
      </Fade>

      {/* ---- cell 4 · hammering (beat 5) ---- */}
      {cell(5, 800, 102, 240, 210)}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={920} y={126} size={13} fill={AMBER_DARK} weight={800}>
          {t("4 · HAMMERING", "4 · HAMMERING")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <Line x1={826} y1={234} x2={1014} y2={166} stroke={MUTED} strokeWidth={1.6} strokeDasharray="6 5" />
        <T x={1014} y={158} size={12.5} fill={MUTED} anchor="end" weight={700}>
          {t("Earth's field", "Earth's field")}
        </T>
        <G transform="rotate(-20 920 200)">
          <Rect x={856} y={190} width={128} height={20} rx={2} fill="#fff" stroke={INK} strokeWidth={2} />
        </G>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <Rect x={896} y={138} width={34} height={14} rx={2} fill={INK_LIGHT} />
        <Line x1={913} y1={152} x2={913} y2={178} stroke={INK_LIGHT} strokeWidth={4} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.8)}
        d="M 898 186 l -8 -8 M 913 188 l 0 -10 M 928 186 l 8 -8" stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 2.2)}>
        <T x={920} y={268} size={12.5} fill={INK} weight={700}>
          {t("hold along Earth's field, then tap", "Earth's field ke saath rakho, thoko")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <T x={920} y={288} size={12.5} fill={INK_LIGHT} weight={600}>
          {t("shocks jostle the domains into line", "jhatke domains line mein laate hain")}
        </T>
      </Fade>

      {/* ================= UNMAKING ================= */}
      <Fade on={beat >= 6} delay={dl(6, 0.1)}>
        <T x={48} y={344} size={14} fill={RED} weight={800} anchor="start">
          {t("UNMAKING IT — THREE WAYS", "MITANE KE TEEN TARIKE")}
        </T>
      </Fade>

      {/* ---- heat past T_c (beat 6) ---- */}
      {cell(6, 44, 354, 328, 236)}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={208} y={380} size={13} fill={AMBER_DARK} weight={800}>
          {t("HEAT PAST T_c", "T_c SE ZYADA GARM")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <Rect x={108} y={406} width={80} height={80} rx={4} fill="#fff" stroke={INK_LIGHT} strokeWidth={1.6} />
        <Rect x={228} y={406} width={80} height={80} rx={4} fill="#fff" stroke={INK_LIGHT} strokeWidth={1.6} />
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d={domainsD(108, 406, 80, ALIGNED)} stroke={GREEN} sw={1.8} dur={0.9} />
      <Draw on={beat >= 6} delay={dl(6, 1.9)} d={arrowD(194, 446, 222, 446)} stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 2.1)}>
        <T x={208} y={400} size={12.5} fill={RED} weight={900}>T &gt; T_c</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.4)} d={domainsD(228, 406, 80, RANDOM)} stroke={RED} sw={1.8} dur={0.9} />
      <Fade on={beat >= 6} delay={dl(6, 3.1)}>
        <T x={148} y={502} size={12.5} fill={GREEN} weight={700}>
          {t("aligned", "aligned")}
        </T>
        <T x={268} y={502} size={12.5} fill={RED} weight={700}>
          {t("random", "random")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.5)}>
        <T x={208} y={528} size={12.5} fill={INK} weight={700}>
          {t("heat past the Curie temperature", "Curie temperature se upar garm karo")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.9)}>
        <T x={208} y={550} size={12.5} fill={INK_LIGHT} weight={600}>
          {t("thermal agitation randomises the domains", "thermal agitation domains ko random kar deti hai")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.3)}>
        <T x={208} y={572} size={12.5} fill={INK_LIGHT} weight={600}>
          {t("on cooling it has forgotten everything", "thanda hone par sab bhool chuka hota hai")}
        </T>
      </Fade>

      {/* ---- rough handling (beat 7) ---- */}
      {cell(7, 380, 354, 328, 236)}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={544} y={380} size={13} fill={AMBER_DARK} weight={800}>
          {t("ROUGH HANDLING", "ROUGH HANDLING")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <Rect x={464} y={412} width={160} height={40} rx={3} fill="#fff" stroke={INK} strokeWidth={2} />
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.2)}
        d={[
          sArrow(484 - 8, 432 + 7, 484 + 8, 432 - 7),
          sArrow(508 + 7, 432 - 8, 508 - 7, 432 + 8),
          sArrow(532 + 9, 432 + 3, 532 - 9, 432 - 3),
          sArrow(556 - 5, 432 - 9, 556 + 5, 432 + 9),
          sArrow(580 + 2, 432 + 10, 580 - 2, 432 - 10),
          sArrow(604 - 9, 432 - 4, 604 + 9, 432 + 4),
        ].join(" ")}
        stroke={RED} sw={1.8} dur={0.9} />
      <Draw on={beat >= 7} delay={dl(7, 2)}
        d={[
          arrowD(432, 390, 478, 408),
          arrowD(658, 394, 612, 408),
          arrowD(498, 494, 512, 458),
          arrowD(598, 492, 584, 458),
        ].join(" ")}
        stroke={RED} sw={2} dur={0.8} />
      <Fade on={beat >= 7} delay={dl(7, 2.9)}>
        <T x={544} y={528} size={12.5} fill={INK} weight={700}>
          {t("shocks in RANDOM orientations", "RANDOM directions mein jhatke")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.3)}>
        <T x={544} y={550} size={12.5} fill={INK_LIGHT} weight={600}>
          {t("the same action as hammering — uncontrolled", "hammering waali hi action — bas uncontrolled")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3.7)}>
        <T x={544} y={572} size={12.5} fill={INK_LIGHT} weight={600}>
          {t("it scatters the alignment instead of building it", "alignment banti nahi, bikhar jaati hai")}
        </T>
      </Fade>

      {/* ---- A.C. demagnetisation (beat 8) ---- */}
      {cell(8, 716, 354, 328, 236)}
      <Fade on={beat >= 8} delay={dl(8, 0.4)}>
        <T x={880} y={380} size={13} fill={AMBER_DARK} weight={800}>
          {t("A.C. DEMAGNETISATION", "A.C. DEMAGNETISATION")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.8)}>
        <Line x1={770} y1={446} x2={990} y2={446} stroke={MUTED} strokeWidth={1.5} />
        <Line x1={880} y1={394} x2={880} y2={498} stroke={MUTED} strokeWidth={1.5} />
        <T x={998} y={450} size={12.5} fill={MUTED} weight={700}>H</T>
        <T x={872} y={400} size={12.5} fill={MUTED} anchor="end" weight={700}>M</T>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 1.2)} d={loopD(880, 446, 100, 44, 58, 30)} stroke={INK_LIGHT} sw={2} dur={1} />
      <Draw on={beat >= 8} delay={dl(8, 1.9)} d={loopD(880, 446, 66, 29, 38, 20)} stroke={AMBER_DARK} sw={2} dur={0.9} />
      <Draw on={beat >= 8} delay={dl(8, 2.5)} d={loopD(880, 446, 32, 14, 18, 10)} stroke={RED} sw={2} dur={0.8} />
      <Fade on={beat >= 8} delay={dl(8, 3.2)}>
        <Circle cx={880} cy={446} r={4} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 3.5)}>
        <T x={880} y={528} size={12.5} fill={INK} weight={700}>
          {t("A.C. in a solenoid, amplitude slowly → 0", "solenoid mein A.C., amplitude dheere → 0")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 3.9)}>
        <T x={880} y={550} size={12.5} fill={INK_LIGHT} weight={600}>
          {t("it walks ever smaller loops, spiralling inward", "chhoti hoti loops par chalta hai, andar ki taraf")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 4.3)}>
        <T x={880} y={572} size={12.5} fill={GREEN} weight={800}>
          {t("and arrives at exactly zero magnetisation", "aur bilkul zero magnetisation par rukta hai")}
        </T>
      </Fade>
    </Scene>
  );
}
