/**
 * M12Ch08 · Section 22 — "The diamond by symmetry"
 * Subtopic: Advanced Regions: Modulus, Inequalities & Composite Areas
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * Shared visual vocabulary for sections 22–24 (this subtopic):
 *   · axes drawn as four arrowD strokes out of a single origin, INK
 *   · PRIMARY boundary (the curve/locus that defines the region) — AMBER_DARK
 *   · SECONDARY straight boundary / helper line — BLUE (#0284c7)
 *   · the region itself — GREEN fill at low opacity, GREEN_DARK captions
 *   · limits marked with ticks on the axis + dashed droppers, RED point dots
 *   · thin integration strips — GREEN_DARK hairlines inside the region
 *   · the wrong routes are written out and crossed with crossD, in RED
 *
 * Beat map (7 segments, gates 0..6 — every beat used):
 *  0  "we want the area of |x| + |y| ≤ 2"     title + underline + the statement
 *                                             chip + the bare axes
 *  1  "a tilted square — a diamond, vertices  the four diamond edges, the GREEN
 *      at ±2 on both axes"                    shaded interior, the four vertex
 *                                             dots, ticks and ±2 labels
 *  2  "<whisper> here is the trap"            TRAP panel: the messy modulus
 *                                             integral crossed out, and the
 *                                             wrong instantiation
 *                                             "Area = side² = 2² = 4"
 *                                             crossed out (side is 2√2, not 2)
 *  3  "the diamond theorem with a = 2"        theorem chip (|x|+|y| ≤ a) + the
 *                                             a = 2 chip + ring on the 2 tick
 *  4  "area is 2a² = 2 × 2² = 8"              ROUTE 1 block, the arithmetic
 *  5  "diagonals are each 4, ½ d₁d₂ = 8"      the two diagonals drawn in RED on
 *                                             the diamond + both length arrows
 *                                             marked 4 + ROUTE 2 block
 *  6  "two routes, the same eight"            rings on both 8s, two arrows into
 *                                             the "8 ✓" chip + the lesson line
 *
 * Every number on the board is spoken in the segment that reveals it, with one
 * deliberate exception: the wrong route in beat 2 carries the numbers a student
 * would actually write (2² = 4). They exist only to be struck through in red.
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, ringD, crossD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

/* ---- plot frame: origin, one unit = S px ---- */
const OX = 300;
const OY = 352;
const S = 62;
const px = (x: number) => OX + x * S;
const py = (y: number) => OY - y * S;

/* the four vertices of |x| + |y| = 2 */
const VR: [number, number] = [px(2), py(0)];   // ( 424, 352 )
const VT: [number, number] = [px(0), py(2)];   // ( 300, 228 )
const VL: [number, number] = [px(-2), py(0)];  // ( 176, 352 )
const VB: [number, number] = [px(0), py(-2)];  // ( 300, 476 )

const seg = (a: [number, number], b: [number, number]) =>
  `M ${a[0]} ${a[1]} L ${b[0]} ${b[1]}`;

const DIAMOND_FILL = `M ${VR[0]} ${VR[1]} L ${VT[0]} ${VT[1]} L ${VL[0]} ${VL[1]} L ${VB[0]} ${VB[1]} Z`;

export default function M12Ch08Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the question, and the empty stage ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("The diamond by symmetry", "Diamond ko symmetry se pakdo")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 358 60 C 470 56, 610 64, 722 58" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.8)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t("this one rewards recognising a shape instead of grinding",
             "yeh example shape pehchanne ka inaam deta hai, grinding ka nahi")}
        </T>
      </Fade>

      {/* the statement of the region */}
      <Fade on={beat >= 0} delay={dl(0, 2.6)}>
        <Chip x={648} y={100} w={306} h={52} fill={CREAM} stroke={AMBER_DARK}
          textFill={INK} size={26} script={false}>
          | x | + | y |  ≤  2
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3.6)}>
        <T x={801} y={176} size={14} fill={GREEN_DARK} script>
          {t("we want the AREA of this region",
             "hamein is region ki AREA chahiye")}
        </T>
      </Fade>

      {/* bare axes — the stage the diamond will land on */}
      <Draw on={beat >= 0} delay={dl(0, 4.4)} d={arrowD(OX, OY, 500, OY)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 0} delay={dl(0, 4.7)} d={arrowD(OX, OY, 120, OY)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 0} delay={dl(0, 5.0)} d={arrowD(OX, OY, OX, 180)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 0} delay={dl(0, 5.3)} d={arrowD(OX, OY, OX, 516)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 0} delay={dl(0, 5.8)}>
        <T x={510} y={357} size={15} fill={INK} weight={800} anchor="start">x</T>
        <T x={OX} y={168} size={15} fill={INK} weight={800}>y</T>
        <T x={288} y={370} size={12.5} fill={MUTED} weight={700} anchor="end">O</T>
      </Fade>

      {/* ═══════════ beat 1 — the picture: a tilted square ═══════════ */}
      {/* shaded interior first, so the edges draw on top of it */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Path d={DIAMOND_FILL} fill={GREEN} opacity={0.16} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={seg(VR, VT)} stroke={AMBER_DARK} sw={2.8} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.9)} d={seg(VT, VL)} stroke={AMBER_DARK} sw={2.8} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d={seg(VL, VB)} stroke={AMBER_DARK} sw={2.8} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.7)} d={seg(VB, VR)} stroke={AMBER_DARK} sw={2.8} dur={0.5} />

      {/* the four vertices, with ticks and labels on the axes */}
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <Circle cx={VR[0]} cy={VR[1]} r={5.4} fill={RED} />
        <Circle cx={VL[0]} cy={VL[1]} r={5.4} fill={RED} />
        <Circle cx={VT[0]} cy={VT[1]} r={5.4} fill={RED} />
        <Circle cx={VB[0]} cy={VB[1]} r={5.4} fill={RED} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.8)} d={`M ${VR[0]} 346 V 358`} stroke={INK} sw={2} dur={0.2} />
      <Draw on={beat >= 1} delay={dl(1, 2.9)} d={`M ${VL[0]} 346 V 358`} stroke={INK} sw={2} dur={0.2} />
      <Draw on={beat >= 1} delay={dl(1, 3.0)} d={`M 294 ${VT[1]} H 306`} stroke={INK} sw={2} dur={0.2} />
      <Draw on={beat >= 1} delay={dl(1, 3.1)} d={`M 294 ${VB[1]} H 306`} stroke={INK} sw={2} dur={0.2} />
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={VR[0]} y={376} size={14} fill={INK} weight={800}>2</T>
        <T x={VL[0]} y={376} size={14} fill={INK} weight={800}>− 2</T>
        <T x={284} y={VT[1] + 5} size={14} fill={INK} weight={800} anchor="end">2</T>
        <T x={284} y={VB[1] + 5} size={14} fill={INK} weight={800} anchor="end">− 2</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <T x={438} y={252} size={14} fill={GREEN_DARK} script anchor="start">
          {t("a tilted square", "ek tilted square")}
        </T>
        <T x={438} y={284} size={14} fill={GREEN_DARK} script anchor="start">
          {t("— a DIAMOND", "— ek DIAMOND")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.4)}>
        <T x={120} y={540} size={13} fill={MUTED} script anchor="start">
          {t("vertices at ± 2 on the x-axis and ± 2 on the y-axis",
             "vertices x-axis par ± 2 aur y-axis par ± 2")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — the trap ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={560} y={216} size={14} fill={RED} weight={800} anchor="start">
          {t("THE TRAP — two ways students lose this one",
             "TRAP — students do tarah se yeh khote hain")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={584} y={252} size={19} fill={INK_LIGHT} anchor="start">∫ ( … | x | … ) dx</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.0)} d={crossD(578, 234, 186, 24)} stroke={RED} sw={2.4} dur={0.35} />
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <T x={790} y={256} size={13} fill={MUTED} weight={700} anchor="start">
          {t("one messy integral, moduli still inside",
             "ek messy integral, moduli abhi bhi andar")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <T x={584} y={300} size={19} fill={INK_LIGHT} anchor="start">Area = side² = 2² = 4</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4.2)} d={crossD(578, 282, 218, 24)} stroke={RED} sw={2.4} dur={0.35} />
      <Fade on={beat >= 2} delay={dl(2, 4.6)}>
        <T x={812} y={292} size={13} fill={MUTED} weight={700} anchor="start">
          {t("sees the square, but", "square to dikha, par")}
        </T>
        <T x={812} y={314} size={13} fill={MUTED} weight={700} anchor="start">
          {t("miscounts its area", "area galat gini")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.6)}>
        <T x={584} y={330} size={14} fill={RED} script anchor="start">
          {t("both go wrong", "dono galat jaate hain")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — the diamond theorem, a = 2 ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={560} y={374} size={14} fill={GREEN_DARK} weight={800} anchor="start">
          {t("THE CLEAN WAY — the diamond theorem",
             "SAAF TAREEKA — diamond theorem")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <Chip x={560} y={388} w={250} h={46} fill={CREAM} stroke={GREEN_DARK}
          textFill={INK} size={18} script={false}>
          | x | + | y |  ≤  a
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <Chip x={832} y={388} w={98} h={46} fill={GREEN} stroke={GREEN_DARK}
          textFill={CREAM} size={20} script={false}>
          a = 2
        </Chip>
      </Fade>
      {/* point at the a on the figure */}
      <Draw on={beat >= 3} delay={dl(3, 3.2)} d={ringD(VR[0], 372, 26, 17)} stroke={GREEN_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 3.8)}>
        <T x={452} y={404} size={13} fill={GREEN_DARK} script anchor="start">
          {t("this is the a", "yahi hai a")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — route 1: the theorem ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={560} y={470} size={14} fill={RED} weight={800} anchor="start">
          {t("ROUTE 1 — the theorem", "ROUTE 1 — theorem")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <T x={566} y={504} size={22} fill={INK} anchor="start">Area  =  2a²</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <T x={566} y={538} size={22} fill={GREEN_DARK} anchor="start">=  2 × 2²  =  8</T>
      </Fade>

      {/* ═══════════ beat 5 — route 2: the diagonals ═══════════ */}
      {/* the diagonals themselves, drawn across the diamond */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d={seg(VL, VR)} stroke={RED} sw={2.4} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 0.7)} d={seg(VT, VB)} stroke={RED} sw={2.4} dur={0.5} />
      {/* measured lengths, marked outside the shape */}
      <Draw on={beat >= 5} delay={dl(5, 1.3)} d={arrowD(OX, 504, VL[0], 504)} stroke={INK_LIGHT} sw={1.7} dur={0.3} />
      <Draw on={beat >= 5} delay={dl(5, 1.5)} d={arrowD(OX, 504, VR[0], 504)} stroke={INK_LIGHT} sw={1.7} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={OX} y={498} size={14} fill={RED} weight={800}>4</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.1)} d={arrowD(134, OY, 134, VT[1])} stroke={INK_LIGHT} sw={1.7} dur={0.3} />
      <Draw on={beat >= 5} delay={dl(5, 2.3)} d={arrowD(134, OY, 134, VB[1])} stroke={INK_LIGHT} sw={1.7} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <T x={126} y={320} size={14} fill={RED} weight={800} anchor="end">4</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.0)}>
        <T x={810} y={470} size={14} fill={RED} weight={800} anchor="start">
          {t("ROUTE 2 — the diagonals", "ROUTE 2 — diagonals")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.8)}>
        <T x={816} y={502} size={18} fill={INK} anchor="start">d₁ = d₂ = 4</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4.8)}>
        <T x={816} y={528} size={16} fill={INK_LIGHT} anchor="start">A = ½ · d₁ · d₂</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6.0)}>
        <T x={816} y={554} size={20} fill={GREEN_DARK} anchor="start">= ½ × 4 × 4 = 8</T>
      </Fade>

      {/* ═══════════ beat 6 — both routes land on the same 8 ═══════════ */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d={ringD(708, 532, 24, 17)} stroke={RED} sw={2.1} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 0.7)} d={ringD(970, 548, 24, 17)} stroke={RED} sw={2.1} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 1.3)} d={arrowD(704, 552, 762, 570)} stroke={RED} sw={2} dur={0.35} />
      <Draw on={beat >= 6} delay={dl(6, 1.6)} d={arrowD(966, 566, 856, 578)} stroke={RED} sw={2} dur={0.35} />
      <Fade on={beat >= 6} delay={dl(6, 2.0)}>
        <Chip x={758} y={556} w={94} h={40} fill={GREEN} stroke={GREEN_DARK}
          textFill={CREAM} size={20} script={false}>
          8 ✓
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.8)}>
        <T x={44} y={568} size={13.5} fill={INK} script anchor="start">
          {t("two independent routes landing on the same eight — that is the reassurance you want",
             "do independent routes, wahi eight — yahi bharosa tum chahte ho")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.2)}>
        <T x={44} y={590} size={13.5} fill={RED} script anchor="start">
          {t("decode the boundary as a diamond and reach for the shape formula",
             "boundary ko diamond samjho aur shape formula uthao")}
        </T>
      </Fade>
    </Scene>
  );
}
