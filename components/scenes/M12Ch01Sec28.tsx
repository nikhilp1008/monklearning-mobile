/**
 * M12Ch01 · Section 28 — "Range: turning the machine inside out"
 * Subtopic: Domain and Range of Real Functions
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * The voice never names a concrete f, so the board draws the GENERIC objects
 * it does name: a function machine with an input arrow and an output arrow,
 * the same machine run backwards, a curve y = f(x) with its domain projected
 * onto the x-axis and its range projected onto the y-axis (and both shrinking
 * together), and finally the A → B mapping picture in which the image blob
 * sits strictly inside the codomain B.
 *
 * Grid
 *   header band            y 30..96   (title, underline, subtitle, rule y=96)
 *   panel A  x  40..340    y 106..332  the machine, forwards then backwards
 *   panel B  x 366..1044   y 106..332  why guessing fails + the 3-step method
 *   divider  y 344
 *   panel C  x  40..500    y 356..596  y = f(x): shrink the domain, the range
 *                                      shrinks with it
 *   panel D  x 520..1044   y 356..596  range ⊆ codomain B
 *
 * Beat map (8 segments, gates 0..7 — every beat used):
 *  0  "range is the harder twin"        title + underline + subtitle + rule,
 *                                       panel-A header, the in/out captions
 *                                       and the machine box with its two arrows
 *  1  "you cannot read it off"          panel-B header, the crossed-out
 *                                       "stare and guess", arrow to "you need
 *                                       a reliable method"
 *  2  "turn the machine inside out"     ring around the machine, the inverted
 *                                       (vertical) machine y → solve → x, and
 *                                       the three step chips with their spine
 *  3  "in symbols"                      y = f(x) · x = expression in y ·
 *                                       x valid ⇒ keep y, each opposite its
 *                                       chip, plus the survival note
 *  4  "run it backwards"                the reverse arrow under the machine
 *                                       and "those y are exactly the range"
 *  5  "the range depends on the domain" axes + curve + full domain bar on x
 *                                       and full range bar on y, then the
 *                                       shrunken domain bar and the shrunken
 *                                       range bar, with the projection lines
 *  6  "range is not the codomain"       ovals A and B, three arrows into the
 *                                       image blob, the never-hit points of B,
 *                                       and the f : R → R note
 *  7  "range ⊆ B, equal iff onto"       Range ⊆ B + the arrow onto the blob
 *
 * Visual vocabulary (shared with Sections 29 and 30):
 *   axes INK with computed arrowheads · the function itself AMBER_DARK ·
 *   DOMAIN facts live on the x-axis in GREEN_DARK · RANGE facts live on the
 *   y-axis in BLUE · results GREEN_DARK · exclusions, traps and shrinkage RED ·
 *   headings RED, secondary prose MUTED.
 */

import React from "react";
import { Circle, Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, ringD, crossD,
  INK, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM, PAPER,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/** closed ellipse as a drawable path */
const ellD = (cx: number, cy: number, rx: number, ry: number) =>
  `M ${cx - rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx + rx} ${cy} A ${rx} ${ry} 0 1 1 ${cx - rx} ${cy}`;

/* ---- panel C frame: origin (110, 508), 1 unit = 34px across, 12px up ---- */
const CX = 110;
const CY = 508;
const SX = 34;
const SY = 12;
const px = (u: number) => CX + SX * u;
const py = (v: number) => CY - SY * v;

/** a generic increasing y = f(x) — the voice names no formula, so neither do we */
const fx = (u: number) => 1 + 8 * Math.pow((u - 1) / 8, 1.7);

function curvePts(u0: number, u1: number, n: number): string[] {
  const pts: string[] = [];
  for (let i = 0; i <= n; i++) {
    const u = u0 + ((u1 - u0) * i) / n;
    pts.push(`${px(u).toFixed(1)} ${py(fx(u)).toFixed(1)}`);
  }
  return pts;
}
const CURVE_D = `M ${curvePts(1, 9, 48).join(" L ")}`;

/* the three landmarks we project */
const XL = px(1);          // 144  — left end of the domain
const YL = py(fx(1));      // 496
const XR = px(9);          // 416  — right end of the domain
const YR = py(fx(9));      // 400
const XM = px(4);          // 246  — right end of the SHRUNKEN domain
const YM = py(fx(4));      // ≈478

export default function M12Ch01Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — framing + the machine ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={48} size={25} fill={RED} script>
          {t("Range — turning the machine inside out",
             "Range — machine ko inside out karna")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 322 64 C 460 60, 640 68, 758 62" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.8)}>
        <T x={540} y={84} size={12.5} fill={MUTED} script>
          {t("domain asks what may go in — range asks what can possibly come out",
             "domain poochta hai kya andar ja sakta hai — range poochta hai kya bahar aa sakta hai")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 40 96 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      <Fade on={beat >= 0} delay={dl(0, 3.1)}>
        <T x={40} y={118} size={13.5} fill={RED} weight={800} anchor="start">
          {t("① the harder twin of the domain", "① domain ka harder twin")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3.9)}>
        <T x={40} y={144} size={12.5} fill={GREEN_DARK} weight={700} anchor="start">
          {t("domain — what may go IN", "domain — kya andar ja sakta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4.7)}>
        <T x={40} y={168} size={12.5} fill={BLUE} weight={700} anchor="start">
          {t("range — what can come OUT", "range — kya bahar aa sakta hai")}
        </T>
      </Fade>
      {/* the machine itself */}
      <Draw on={beat >= 0} delay={dl(0, 5.4)} d="M 150 196 H 240 V 256 H 150 Z"
        stroke={AMBER_DARK} sw={2.4} dur={0.6} fill={CREAM} />
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={195} y={234} size={24} fill={AMBER_DARK} weight={900}>f</T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 6.5)} d={arrowD(56, 226, 144, 226)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 0} delay={dl(0, 7)} d={arrowD(246, 226, 334, 226)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 0} delay={dl(0, 7.5)}>
        <T x={100} y={216} size={14} fill={GREEN_DARK} weight={900}>x</T>
        <T x={100} y={250} size={11.5} fill={GREEN_DARK} weight={700}>domain</T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 8.1)}>
        <T x={290} y={216} size={14} fill={BLUE} weight={900}>y</T>
        <T x={290} y={250} size={11.5} fill={BLUE} weight={700}>range?</T>
      </Fade>

      {/* ═══════════ beat 1 — the formula will not tell you ═══════════ */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={380} y={118} size={13.5} fill={RED} weight={800} anchor="start">
          {t("② the formula will not tell you", "② formula khud nahin batayega")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={380} y={148} size={13} fill={MUTED} weight={700} anchor="start">
          {t("stare at f(x) and guess", "f(x) ko ghoor kar guess karo")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.6)} d={crossD(376, 136, 195, 16)} stroke={RED} sw={2} dur={0.35} />
      <Draw on={beat >= 1} delay={dl(1, 3.4)} d={arrowD(586, 143, 618, 143)} stroke={MUTED} sw={1.8} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={626} y={148} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          {t("you need a reliable method", "reliable method chahiye")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — inside out: the ring, the 3 steps, the inverted machine ═══════════ */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d={ringD(195, 226, 58, 34)} stroke={AMBER_DARK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={380} y={176} size={14} fill={AMBER_DARK} script anchor="start">
          {t("turn the machine inside out", "machine ko inside out karo")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.8)} d={arrowD(380, 196, 380, 304)} stroke={GREEN_DARK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <Chip x={396} y={192} w={330} h={32} fill={CREAM} stroke={GREEN_DARK}
          textFill={INK} size={13.5} script={false}>
          {t("① set  y = f(x)", "① y ko f(x) ke barabar rakho")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.2)}>
        <Chip x={396} y={234} w={330} h={32} fill={CREAM} stroke={GREEN_DARK}
          textFill={INK} size={13.5} script={false}>
          {t("② solve for x in terms of y", "② x ko y mein solve karo")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.8)}>
        <Chip x={396} y={276} w={330} h={32} fill={CREAM} stroke={GREEN_DARK}
          textFill={INK} size={13.5} script={false}>
          {t("③ keep the y that give a legal x", "③ wahi y rakho jo legal x dete hain")}
        </Chip>
      </Fade>
      {/* the same machine, run the other way up: y in at the top, x out at the bottom */}
      <Fade on={beat >= 2} delay={dl(2, 7.4)}>
        <T x={995} y={190} size={13} fill={BLUE} weight={900}>y</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 7.8)} d={arrowD(995, 198, 995, 216)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 8.2)} d="M 962 218 H 1028 V 266 H 962 Z"
        stroke={AMBER_DARK} sw={2.2} dur={0.5} fill={CREAM} />
      <Fade on={beat >= 2} delay={dl(2, 8.8)}>
        <T x={995} y={250} size={17} fill={AMBER_DARK} weight={900}>solve</T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 9.2)} d={arrowD(995, 270, 995, 288)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 9.7)}>
        <T x={995} y={306} size={13} fill={GREEN_DARK} weight={900}>x</T>
        <T x={995} y={328} size={11} fill={MUTED} weight={700}>
          {t("backwards", "ulta")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — the same three steps in symbols ═══════════ */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d={arrowD(730, 208, 748, 208)} stroke={MUTED} sw={1.6} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={752} y={214} size={15} fill={AMBER_DARK} weight={800} anchor="start">y = f(x)</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.2)} d={arrowD(730, 250, 748, 250)} stroke={MUTED} sw={1.6} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 2.5)}>
        <T x={752} y={256} size={15} fill={AMBER_DARK} weight={800} anchor="start">x = expression in y</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 4.6)} d={arrowD(730, 292, 748, 292)} stroke={MUTED} sw={1.6} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 4.9)}>
        <T x={752} y={298} size={15} fill={GREEN_DARK} weight={800} anchor="start">x valid  ⇒  keep y</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={380} y={330} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("only the y that produce a valid x survive",
             "sirf wahi y bachte hain jo valid x dete hain")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — run the machine backwards ═══════════ */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d={arrowD(334, 286, 56, 286)} stroke={GREEN_DARK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={195} y={306} size={12.5} fill={GREEN_DARK} weight={800}>
          {t("run the machine backwards", "machine ko ulta chalao")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.4)}>
        <T x={195} y={330} size={12} fill={GREEN_DARK} weight={800}>
          {t("those y are exactly the range", "wahi y bilkul range hain")}
        </T>
      </Fade>

      {/* ═══════════ beat 5 — the range depends on the domain ═══════════ */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 40 344 H 1044" stroke={MUTED} sw={1.2} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={40} y={366} size={13.5} fill={RED} weight={800} anchor="start">
          {t("③ the range depends on the domain", "③ range domain par depend karta hai")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d={arrowD(96, CY, 462, CY)} stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 5} delay={dl(5, 1.1)} d={arrowD(CX, 522, CX, 384)} stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={468} y={513} size={12.5} fill={INK} weight={800} anchor="start">x</T>
        <T x={120} y={390} size={12.5} fill={INK} weight={800} anchor="start">y</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.8)} d={CURVE_D} stroke={AMBER_DARK} sw={2.8} dur={1.1} />
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <T x={424} y={394} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">y = f(x)</T>
      </Fade>
      {/* projections of the two endpoints */}
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <Line x1={XR} y1={YR} x2={112} y2={YR} stroke={MUTED} strokeWidth={1.2} strokeDasharray="5 5" />
        <Line x1={XL} y1={YL} x2={112} y2={YL} stroke={MUTED} strokeWidth={1.2} strokeDasharray="5 5" />
        <Line x1={XR} y1={YR} x2={XR} y2={506} stroke={MUTED} strokeWidth={1.2} strokeDasharray="5 5" />
        <Line x1={XL} y1={YL} x2={XL} y2={506} stroke={MUTED} strokeWidth={1.2} strokeDasharray="5 5" />
        <Circle cx={XL} cy={YL} r={4} fill={AMBER_DARK} />
        <Circle cx={XR} cy={YR} r={4} fill={AMBER_DARK} />
      </Fade>
      {/* the full domain, on the x-axis */}
      <Draw on={beat >= 5} delay={dl(5, 3.5)} d={`M ${XL} 520 H ${XR}`} stroke={GREEN_DARK} sw={5} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 3.9)}>
        <Circle cx={XL} cy={CY} r={3.5} fill={GREEN_DARK} />
        <Circle cx={XR} cy={CY} r={3.5} fill={GREEN_DARK} />
        <T x={424} y={525} size={11.5} fill={GREEN_DARK} weight={800} anchor="start">domain</T>
      </Fade>
      {/* the full range, on the y-axis */}
      <Draw on={beat >= 5} delay={dl(5, 4.3)} d={`M 98 ${YR} V ${YL}`} stroke={BLUE} sw={5} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 4.7)}>
        <T x={92} y={390} size={11.5} fill={BLUE} weight={800} anchor="end">range</T>
      </Fade>
      {/* now shrink the domain — and the range shrinks with it */}
      <Draw on={beat >= 5} delay={dl(5, 5.1)} d={`M ${XL} 536 H ${XM}`} stroke={RED} sw={5} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 5.4)}>
        <Circle cx={XM} cy={CY} r={4} fill={RED} />
        <Circle cx={XM} cy={YM} r={4} fill={RED} />
        <Line x1={XM} y1={YM} x2={112} y2={YM} stroke={RED} strokeWidth={1.2} strokeDasharray="5 5" />
        <Line x1={XM} y1={YM} x2={XM} y2={506} stroke={RED} strokeWidth={1.2} strokeDasharray="5 5" />
        <T x={254} y={541} size={11.5} fill={RED} weight={800} anchor="start">
          {t("smaller domain", "chhota domain")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 5.8)} d={`M 86 ${YM} V ${YL}`} stroke={RED} sw={5} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 6.1)}>
        <T x={40} y={564} size={12.5} fill={INK} weight={700} anchor="start">
          {t("same rule, smaller domain — the range can shrink",
             "wahi rule, chhota domain — range chhota ho sakta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6.5)}>
        <T x={40} y={588} size={12.5} fill={RED} weight={700} anchor="start">
          {t("the range depends on the domain you allow",
             "range us domain par depend karta hai jo tum allow karo")}
        </T>
      </Fade>

      {/* ═══════════ beat 6 — the range is not the codomain ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={520} y={366} size={13.5} fill={RED} weight={800} anchor="start">
          {t("④ the range is not the codomain", "④ range codomain nahin hai")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.7)} d={ellD(580, 482, 52, 74)} stroke={INK} sw={2} dur={0.9} />
      <Draw on={beat >= 6} delay={dl(6, 1.4)} d={ellD(780, 482, 68, 84)} stroke={INK} sw={2} dur={0.9} />
      <Fade on={beat >= 6} delay={dl(6, 2.1)}>
        <T x={580} y={396} size={15} fill={INK} weight={900}>A</T>
        <T x={780} y={388} size={15} fill={INK} weight={900}>B</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.6)}>
        <Circle cx={562} cy={452} r={4} fill={INK} />
        <Circle cx={562} cy={482} r={4} fill={INK} />
        <Circle cx={562} cy={512} r={4} fill={INK} />
      </Fade>
      {/* the image blob, sitting strictly inside B */}
      <Circle
        cx={766} cy={490} r={38}
        fill={BLUE} stroke="none"
        opacity={beat >= 6 ? 0.16 : 0}
      />
      <Draw on={beat >= 6} delay={dl(6, 3.2)} d={ellD(766, 490, 38, 38)} stroke={BLUE} sw={2} dur={0.7} />
      <Draw on={beat >= 6} delay={dl(6, 3.9)} d={arrowD(636, 462, 736, 472)} stroke={GREEN_DARK} sw={1.9} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 4.2)} d={arrowD(636, 482, 736, 490)} stroke={GREEN_DARK} sw={1.9} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 4.5)} d={arrowD(636, 502, 736, 508)} stroke={GREEN_DARK} sw={1.9} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 4.9)}>
        <Circle cx={746} cy={472} r={4} fill={BLUE} />
        <Circle cx={746} cy={490} r={4} fill={BLUE} />
        <Circle cx={746} cy={508} r={4} fill={BLUE} />
        <T x={766} y={552} size={12.5} fill={BLUE} weight={800}>range</T>
      </Fade>
      {/* points of B that nothing maps to */}
      <Fade on={beat >= 6} delay={dl(6, 5.6)}>
        <Circle cx={820} cy={420} r={4.5} fill={PAPER} stroke={RED} strokeWidth={2} />
        <Circle cx={828} cy={482} r={4.5} fill={PAPER} stroke={RED} strokeWidth={2} />
        <Circle cx={816} cy={542} r={4.5} fill={PAPER} stroke={RED} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6.2)}>
        <T x={780} y={590} size={12} fill={RED} weight={800}>
          {t("these reals are never hit", "in reals ko kabhi hit nahin karta")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={872} y={428} size={12} fill={INK} weight={700} anchor="start">
          {t("f : R → R only promises", "f : R → R sirf yeh promise:")}
        </T>
        <T x={872} y={452} size={12} fill={INK} weight={700} anchor="start">
          {t("that outputs land in R —", "outputs R mein girte hain —")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8.6)}>
        <T x={872} y={476} size={12} fill={RED} weight={700} anchor="start">
          {t("NOT that every real", "yeh NAHIN ki har real")}
        </T>
        <T x={872} y={500} size={12} fill={RED} weight={700} anchor="start">
          {t("in R is actually hit", "sach mein hit hota hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 7 — range ⊆ B, equal only when onto ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.1)}>
        <T x={872} y={540} size={17} fill={GREEN_DARK} weight={900} anchor="start">Range ⊆ B</T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d={arrowD(862, 522, 802, 494)} stroke={GREEN_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <T x={872} y={566} size={12} fill={GREEN_DARK} weight={800} anchor="start">
          {t("equal only when f is onto", "barabar sirf jab f onto ho")}
        </T>
      </Fade>
    </Scene>
  );
}
