/**
 * M12Ch01 · Section 26 — "Pitfalls and pro-tips for composition and inverse"
 * Subtopic: Composition and Inverse of Functions  (closing section)
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * A summary section is exactly where a board degenerates into bullets, so every
 * trap here is drawn as the thing it warns about: trap ① is TWO chains of
 * boxes with the f and g arrows swapped and a ≠ between them; trap ② is the
 * number case kept and the function case crossed out; trap ③ is a genuine
 * mapping diagram with two arrows landing on one element (so no inverse
 * exists); trap ④ is the correct law kept, the same-order version crossed out,
 * with a swap-arrow pair beside it. The pro-tips are drawn too: reflex ① is a
 * real curve with the horizontal y = c line dropped onto the x-axis, reflex ②
 * is the round-trip chain x → f⁻¹(x) → x, reflex ③ is the range bar of f
 * becoming the domain bar of f⁻¹.
 *
 * Layout grid:
 *   y  30–100  title band
 *   y 108–396  four traps in a 2×2 grid, split by a vertical rule at x = 543
 *                A1 x 40..530  y 108..238    A2 x 40..530  y 254..392
 *                B1 x 560..1044 y 108..238   B2 x 560..1044 y 254..392
 *   y 402      full rule, then the PRO-TIPS header at y 424
 *   y 440–596  three reflex panels, split by rules at x = 384 and x = 730
 *                x 40..372 · x 396..722 · x 742..1044
 *
 * Beat map (9 segments, gates 0..8 — every beat used):
 *  0  "traps that cost marks, then reflexes"  title + underline + subtitle + rule
 *  1  "trap ①: composition is not commutative"  the column rule, the two
 *                                             box-chains g∘f and f∘g, the ≠,
 *                                             and the innermost-first caption
 *  2  "trap ②: the reciprocal trap"           "⁻¹ means reciprocal" kept for the
 *                                             number case, f⁻¹(x) = 1/f(x)
 *                                             crossed out, both labelled
 *  3  "trap ③: inverting a non-bijective f"   two set ellipses, three elements
 *                                             mapping two-to-one, the collision
 *                                             ringed, and the restrict-first fix
 *  4  "trap ④: keeping the same order"        the law chipped, the swap arrows,
 *                                             and the wrong order crossed out
 *  5  "now the speed reflexes"                divider + PRO-TIPS header
 *  6  "f⁻¹(c) without building f⁻¹"           axes + increasing curve + the
 *                                             y = c line dropped to x = f⁻¹(c)
 *  7  "verify a claimed inverse in seconds"   the round-trip chain collapsing
 *                                             to x, then the single identity
 *                                             the voice states, f(f⁻¹(x)) = x,
 *                                             underlined
 *  8  "always state the domain of f⁻¹"        range-of-f bar → domain-of-f⁻¹ bar
 *
 * Visual vocabulary (shared with Sections 25 and 27):
 *   f AMBER_DARK · g BLUE (#0284c7) · inverses and results GREEN_DARK ·
 *   traps and warnings RED · scaffolding MUTED · chips CREAM on empty board.
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, ringD, crossD,
  INK, MUTED, AMBER_DARK, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const BLUE = "#0284c7";

/** the increasing curve of reflex ①; (196, 514) is a real anchor on the path */
const CURVE_D = "M 92 560 C 140 554, 164 532, 196 514 C 232 494, 270 490, 322 486";
const PX = 196;
const PY = 514;

export default function M12Ch01Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══════════ beat 0 — the framing ═══════════ */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={50} size={25} fill={RED} script>
          {t("Traps that cost marks — reflexes that save time",
             "Traps jo marks khaate hain — reflexes jo time bachate hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.1)}
        d="M 250 66 C 430 62, 680 70, 828 64" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 1.9)}>
        <T x={540} y={84} size={12.5} fill={MUTED} script>
          {t("closing the subtopic: composition and inverse of functions",
             "subtopic band: composition aur inverse of functions")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.7)} d="M 40 100 H 1044" stroke={MUTED} sw={1.2} dur={1} />

      {/* ═══════════ beat 1 — trap ①: composition is not commutative ═══════════ */}
      <Draw on={beat >= 1} delay={dl(1, 0.1)} d="M 543 110 L 543 396" stroke={MUTED} sw={1.2} dur={1} />
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={40} y={122} size={13.5} fill={RED} weight={800} anchor="start">
          {t("① composition is NOT commutative", "① composition commutative NAHI hai")}
        </T>
      </Fade>
      {/* chain one: g ∘ f — f touches x first */}
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <Chip x={56} y={145} w={62} h={30} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>x</Chip>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.8)} d={arrowD(124, 160, 168, 160)} stroke={AMBER_DARK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <T x={146} y={148} size={13} fill={AMBER_DARK} weight={900}>f</T>
        <Chip x={174} y={145} w={62} h={30} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={12.5} script={false}>f(x)</Chip>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.6)} d={arrowD(242, 160, 286, 160)} stroke={BLUE} sw={2.2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 2.9)}>
        <T x={264} y={148} size={13} fill={BLUE} weight={900}>g</T>
        <Chip x={292} y={145} w={92} h={30} fill={CREAM} stroke={BLUE} textFill={BLUE} size={12.5} script={false}>g(f(x))</Chip>
        <T x={394} y={165} size={12.5} fill={INK} weight={800} anchor="start">= (g ∘ f)(x)</T>
      </Fade>
      {/* chain two: f ∘ g — g touches x first */}
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <Chip x={56} y={187} w={62} h={30} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>x</Chip>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.4)} d={arrowD(124, 202, 168, 202)} stroke={BLUE} sw={2.2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 4.7)}>
        <T x={146} y={190} size={13} fill={BLUE} weight={900}>g</T>
        <Chip x={174} y={187} w={62} h={30} fill={CREAM} stroke={BLUE} textFill={BLUE} size={12.5} script={false}>g(x)</Chip>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 5.2)} d={arrowD(242, 202, 286, 202)} stroke={AMBER_DARK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 5.5)}>
        <T x={264} y={190} size={13} fill={AMBER_DARK} weight={900}>f</T>
        <Chip x={292} y={187} w={92} h={30} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={12.5} script={false}>f(g(x))</Chip>
        <T x={394} y={207} size={12.5} fill={INK} weight={800} anchor="start">= (f ∘ g)(x)</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6.4)}>
        <T x={500} y={190} size={28} fill={RED} weight={900}>≠</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7.4)}>
        <T x={40} y={236} size={12} fill={INK} weight={700} anchor="start">
          {t("read innermost-first: in g ∘ f, f touches x first",
             "innermost-first padho: g ∘ f mein x ko pehle f chhoota hai")}
        </T>
      </Fade>

      {/* ═══════════ beat 2 — trap ②: the reciprocal trap ═══════════ */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={560} y={122} size={13.5} fill={RED} weight={800} anchor="start">
          {t("② the reciprocal trap", "② reciprocal trap")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <Chip x={560} y={146} w={224} h={42} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={15} script={false}>
          {t("⁻¹ means reciprocal", "⁻¹ ka matlab reciprocal")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <Chip x={812} y={146} w={224} h={42} fill={CREAM} stroke={RED}
          textFill={RED} size={15} script={false}>
          f⁻¹(x) = 1/f(x)
        </Chip>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3.6)} d={crossD(812, 146, 224, 42)} stroke={RED} sw={2.6} dur={0.35} />
      <Fade on={beat >= 2} delay={dl(2, 4.2)}>
        <T x={672} y={210} size={12} fill={MUTED} weight={700}>
          {t("on a NUMBER — fine", "NUMBER par — theek hai")}
        </T>
        <T x={924} y={210} size={12} fill={RED} weight={800}>
          {t("on a FUNCTION — WRONG", "FUNCTION par — GALAT")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6.2)}>
        <T x={560} y={234} size={12.5} fill={INK} weight={700} anchor="start">
          {t("f⁻¹ means the inverse function — never one over f(x)",
             "f⁻¹ ka matlab inverse function — kabhi bhi 1/f(x) nahin")}
        </T>
      </Fade>

      {/* ═══════════ beat 3 — trap ③: inverting a non-bijective f ═══════════ */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={40} y={268} size={13.5} fill={RED} weight={800} anchor="start">
          {t("③ inverting a non-bijective f", "③ non-bijective f ko invert karna")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1)}
        d="M 66 326 A 44 44 0 1 1 154 326 A 44 44 0 1 1 66 326" stroke={INK} sw={2} dur={0.7} />
      <Draw on={beat >= 3} delay={dl(3, 1.4)}
        d="M 206 326 A 44 44 0 1 1 294 326 A 44 44 0 1 1 206 326" stroke={INK} sw={2} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <Circle cx={106} cy={300} r={4} fill={INK} />
        <Circle cx={106} cy={326} r={4} fill={INK} />
        <Circle cx={106} cy={352} r={4} fill={INK} />
        <Circle cx={254} cy={312} r={4} fill={INK} />
        <Circle cx={254} cy={344} r={4} fill={INK} />
        <T x={110} y={386} size={12.5} fill={MUTED} weight={700}>X</T>
        <T x={250} y={386} size={12.5} fill={MUTED} weight={700}>Y</T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.6)} d={arrowD(118, 300, 240, 310)} stroke={RED} sw={2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 3)} d={arrowD(118, 326, 240, 316)} stroke={RED} sw={2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 3.4)} d={arrowD(118, 352, 240, 344)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 3.9)} d={ringD(254, 312, 20, 15)} stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 4.5)}>
        <T x={310} y={300} size={12.5} fill={RED} weight={800} anchor="start">
          {t("two inputs → one output", "do inputs → ek output")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5.6)}>
        <T x={310} y={324} size={12.5} fill={RED} weight={800} anchor="start">
          {t("f is not one-one ⇒ no inverse", "f one-one nahin ⇒ inverse nahin")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7.4)}>
        <T x={310} y={352} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("fix: restrict the domain", "fix: pehle domain restrict karo")}
        </T>
        <T x={310} y={376} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("or the codomain, first", "ya codomain restrict karo")}
        </T>
      </Fade>

      {/* ═══════════ beat 4 — trap ④: keeping the same order ═══════════ */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={560} y={268} size={13.5} fill={RED} weight={800} anchor="start">
          {t("④ keeping the same order when inverting",
             "④ invert karte waqt same order rakhna")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <Chip x={560} y={286} w={306} h={44} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={18} script={false}>
          (g ∘ f)⁻¹ = f⁻¹ ∘ g⁻¹
        </Chip>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2.6)} d={arrowD(890, 296, 1012, 322)} stroke={GREEN_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 3)} d={arrowD(890, 322, 1012, 296)} stroke={GREEN_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 3.5)}>
        <T x={951} y={344} size={11.5} fill={MUTED} weight={700}>
          {t("order swaps", "order swap")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.4)}>
        <T x={560} y={350} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("order reversed — socks and shoes", "order ulta — socks and shoes")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6.4)}>
        <T x={560} y={378} size={16} fill={RED} weight={700} anchor="start">
          (g ∘ f)⁻¹ = g⁻¹ ∘ f⁻¹
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 7.2)} d={crossD(558, 365, 179, 17)} stroke={RED} sw={2.2} dur={0.3} />

      {/* ═══════════ beat 5 — the speed reflexes ═══════════ */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 40 402 H 1044" stroke={MUTED} sw={1.3} dur={0.9} />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={40} y={424} size={14.5} fill={RED} weight={800} anchor="start">
          {t("PRO-TIPS — the reflexes that make these quick",
             "PRO-TIPS — wo reflexes jo inhe quick bana dete hain")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.6)} d="M 384 440 L 384 596" stroke={MUTED} sw={1} dur={0.8} />
      <Draw on={beat >= 5} delay={dl(5, 1.9)} d="M 730 440 L 730 596" stroke={MUTED} sw={1} dur={0.8} />

      {/* ═══════════ beat 6 — reflex ①: f⁻¹(c) without building f⁻¹ ═══════════ */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={40} y={450} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          {t("① f⁻¹(c) without building f⁻¹", "① poora f⁻¹ banaye bina f⁻¹(c)")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <T x={40} y={472} size={12} fill={INK} weight={700} anchor="start">
          {t("solve f(x) = c for x — that x is f⁻¹(c)",
             "f(x) = c ko x ke liye solve karo — wahi x hai f⁻¹(c)")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.6)} d={arrowD(82, 572, 346, 572)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 6} delay={dl(6, 3)} d={arrowD(82, 578, 82, 488)} stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 3.4)}>
        <T x={354} y={577} size={11.5} fill={INK} weight={800} anchor="start">x</T>
        <T x={74} y={492} size={11.5} fill={INK} weight={800} anchor="end">y</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 3.8)} d={CURVE_D} stroke={AMBER_DARK} sw={2.6} dur={0.9} />
      <Fade on={beat >= 6} delay={dl(6, 4.8)}>
        <T x={330} y={556} size={12} fill={AMBER_DARK} weight={800} anchor="end">y = f(x)</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 5.4)} d={`M 82 ${PY} H ${PX}`} stroke={BLUE} sw={1.8} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 5.9)}>
        <T x={74} y={519} size={12.5} fill={BLUE} weight={900} anchor="end">c</T>
        <Circle cx={PX} cy={PY} r={4.5} fill={RED} />
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 6.4)} d={`M ${PX} ${PY} L ${PX} 572`} stroke={BLUE} sw={1.8} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={PX} y={590} size={12.5} fill={GREEN_DARK} weight={900}>f⁻¹(c)</T>
      </Fade>

      {/* ═══════════ beat 7 — reflex ②: verify in seconds ═══════════ */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={396} y={450} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          {t("② verify a claimed inverse fast", "② claimed inverse ko fatafat verify karo")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={396} y={472} size={12} fill={INK} weight={700} anchor="start">
          {t("check the round trip collapses to x",
             "check karo round trip x par collapse hota hai")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.4)}>
        <Chip x={398} y={496} w={58} h={32} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>x</Chip>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2.8)} d={arrowD(462, 512, 508, 512)} stroke={GREEN_DARK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 3.1)}>
        <T x={485} y={500} size={12.5} fill={GREEN_DARK} weight={900}>f⁻¹</T>
        <Chip x={514} y={496} w={84} h={32} fill={CREAM} stroke={GREEN_DARK} textFill={GREEN_DARK} size={13.5} script={false}>f⁻¹(x)</Chip>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 3.7)} d={arrowD(604, 512, 650, 512)} stroke={AMBER_DARK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={627} y={500} size={13} fill={AMBER_DARK} weight={900}>f</T>
        <Chip x={656} y={496} w={58} h={32} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>x</Chip>
      </Fade>
      {/* BOTH composites, deliberately.
          The narration for this beat says only "check that f of f inverse of x
          collapses to x. If it does, you are done" -- and that is mathematically
          false: f∘g = id_B alone does not make g an inverse of f. Counterexample
          from this board's own trap ③: f: R -> [0,∞), f(x) = x², and g(y) = √y
          give f(g(y)) = y for every y, yet g(f(-2)) = 2 ≠ -2 and f is not one-one.
          Beat 3 of this same scene states "f is not one-one ⇒ no inverse", so the
          one-sided test would certify precisely the object beat 3 rules out.
          NCERT defines invertibility as g∘f = I_X AND f∘g = I_Y, so the board
          shows both. The audio under-states the requirement; the board must not
          repeat the error. Flagged for a narration fix. */}
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <T x={396} y={556} size={15} fill={GREEN_DARK} weight={900} anchor="start">
          f( f⁻¹(x) ) = x   and   f⁻¹( f(x) ) = x
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 6)} d="M 396 568 H 736" stroke={GREEN_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 6.5)}>
        <T x={396} y={586} size={12} fill={MUTED} weight={700} anchor="start">
          {t("both round trips must collapse — one alone is not enough",
             "dono round trips collapse hone chahiye — sirf ek kaafi nahin")}
        </T>
      </Fade>

      {/* ═══════════ beat 8 — reflex ③: state the domain of f⁻¹ ═══════════ */}
      <Fade on={beat >= 8} delay={dl(8, 0.15)}>
        <T x={742} y={450} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          {t("③ always state the domain of f⁻¹", "③ f⁻¹ ka domain hamesha likho")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.7)}>
        <T x={742} y={472} size={12} fill={INK} weight={700} anchor="start">
          {t("domain of f⁻¹ = range of f", "f⁻¹ ka domain = f ka range")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.2)}>
        <Chip x={752} y={482} w={282} h={30} fill={CREAM} stroke={AMBER_DARK}
          textFill={AMBER_DARK} size={13.5} script={false}>
          {t("range of f", "f ka range")}
        </Chip>
      </Fade>
      <Draw on={beat >= 8} delay={dl(8, 1.6)} d={arrowD(893, 518, 893, 538)} stroke={GREEN_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.9)}>
        <T x={915} y={534} size={16} fill={GREEN_DARK} weight={900} anchor="start">=</T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 2.2)}>
        <Chip x={752} y={544} w={282} h={30} fill={CREAM} stroke={GREEN_DARK}
          textFill={GREEN_DARK} size={13.5} script={false}>
          {t("domain of f⁻¹", "f⁻¹ ka domain")}
        </Chip>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 2.6)}>
        <T x={893} y={590} size={12} fill={MUTED} weight={700}>
          {t("examiners look for it", "examiners isko dhoondhte hain")}
        </T>
      </Fade>
    </Scene>
  );
}
