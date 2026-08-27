/**
 * P12Ch04 · Section 25 — "Common Pitfalls and Pro-Tips"
 * (Subtopic 3 · Force on Charged Particles and Torque on Current Loops)
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * WAS: the blind three-panel template — three columns of bold sentences gated
 * on 0/1/3/5/8 with a single drawn rule under each column. Nothing on it was a
 * picture: no orbit, no field, no wires, no loop, no pole pieces.
 *
 * NARRATION TEACHES: five named mistakes of Subtopic 3 (the magnetic force does
 * no work · F = 0 when v ∥ B · the torque angle is normal-to-B, not plane-to-B ·
 * like currents attract · never a sin θ in a galvanometer), then the pro-tip
 * "ask what was held constant" with its three proportionalities, then the
 * closing "all six topics came from one law".
 *
 * BEAT MAP (n_reveals = 9 — gates 0..8, every beat used):
 *   0 title + subtitle
 *   1 mistake 1 — circular-orbit figure: v tangent, F to centre, F ⊥ v, KE fixed
 *   2 mistake 2 — v resolved into v∥ (coasts) and v⊥ (curves) against B lines
 *   3 mistake 3 — loop edge-on with n̂, B, the θ arc and the α arc: θ = 90° − α
 *   4 mistake 4 — two wire pairs: like currents attract, antiparallel repel
 *   5 mistake 5 — radial-field galvanometer cross-section: sin θ ≡ 1
 *   6 "now the pro-tip" — strategy panel heading
 *   7 the three held-constant cases and their proportionalities
 *   8 closing band — six topics, one law; next stop the magnetic dipole
 */

import React from "react";
import { Circle, G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({
  n,
  cx,
  cy,
  on,
  delay,
  tone,
}: {
  n: number;
  cx: number;
  cy: number;
  on: boolean;
  delay: number;
  tone: string;
}) {
  return (
    <G>
      <Draw
        on={on}
        delay={delay}
        d={`M ${cx - 12} ${cy} A 12 12 0 1 1 ${cx + 12} ${cy} A 12 12 0 1 1 ${cx - 12} ${cy}`}
        stroke={tone}
        sw={2.1}
        dur={0.38}
      />
      <Fade on={on} delay={delay + 0.26}>
        <T x={cx} y={cy + 5} size={13} fill={tone} weight={800}>
          {n}
        </T>
      </Fade>
    </G>
  );
}

export default function P12Ch04Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  /** numbered header for one mistake panel */
  const head = (k: number, x: number, y: number, tone: string, label: string) => (
    <G>
      <Badge n={k} cx={x + 12} cy={y} on={beat >= k} delay={dl(k, 0.1)} tone={tone} />
      <Fade on={beat >= k} delay={dl(k, 0.42)}>
        <T x={x + 32} y={y + 5} size={14} fill={tone} weight={800} anchor="start">
          {label}
        </T>
      </Fade>
    </G>
  );

  const cap = (k: number, x: number, y: number, d: number, tone: string, s: string) => (
    <Fade on={beat >= k} delay={dl(k, d)}>
      <T x={x} y={y} size={12.6} fill={tone} weight={600} anchor="start">
        {s}
      </T>
    </Fade>
  );

  return (
    <Scene>
      {/* ---------------- beat 0 — title ---------------- */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={46} size={25} fill={RED} script>
          {t(
            "Five Pitfalls — Charges, Wires & Loops",
            "Five Pitfalls — Charges, Wires & Loops"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.5)}
        d="M 268 60 C 470 55, 660 66, 812 58"
        stroke={RED}
        sw={2.2}
        dur={0.65}
      />
      <Fade on={beat >= 0} delay={dl(0, 2.2)}>
        <T x={540} y={80} size={12.8} fill={MUTED} script>
          {t(
            "the longest pitfalls list in the chapter — each one carries its own error tag",
            "the longest pitfalls list in the chapter — each one carries its own error tag"
          )}
        </T>
      </Fade>

      {/* ---------------- beat 1 — the force does no work ---------------- */}
      {head(1, 44, 108, RED, t("“the force speeds it up”", "“the force speeds it up”"))}

      <Draw
        on={beat >= 1}
        delay={dl(1, 0.7)}
        d="M 143 192 A 54 54 0 1 1 251 192 A 54 54 0 1 1 143 192"
        stroke={INK}
        sw={2}
        dur={1.1}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.95)}>
        <Circle cx={110} cy={148} r={8} fill="none" stroke={GREEN} strokeWidth={1.6} />
        <Circle cx={110} cy={148} r={2.4} fill={GREEN} />
        <Circle cx={286} cy={240} r={8} fill="none" stroke={GREEN} strokeWidth={1.6} />
        <Circle cx={286} cy={240} r={2.4} fill={GREEN} />
        <T x={110} y={131} size={11.8} fill={GREEN} weight={700}>
          B
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.5)} d={arrowD(197, 138, 266, 138)} stroke={AMBER_DARK} sw={2.2} dur={0.45} />
      <Draw on={beat >= 1} delay={dl(1, 1.8)} d={arrowD(197, 138, 197, 178)} stroke={RED} sw={2.2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 2.1)} d="M 197 150 L 209 150 L 209 138" stroke={INK_LIGHT} sw={1.4} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={272} y={134} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">
          v
        </T>
        <T x={205} y={177} size={12.5} fill={RED} weight={800} anchor="start">
          F
        </T>
      </Fade>
      {cap(1, 44, 276, 2.6, INK, t("F ⊥ v at every instant → W = 0 → speed and KE never change", "F ⊥ v at every instant → W = 0 → speed and KE never change"))}
      {cap(1, 44, 296, 3.0, INK_LIGHT, t("“necessarily unchanged” = KE.  v, p, a all turn.", "“necessarily unchanged” = KE.  v, p, a all turn."))}

      {/* ---------------- beat 2 — F = 0 when v ∥ B ---------------- */}
      {head(2, 376, 108, AMBER_DARK, t("forgetting F = 0 when v ∥ B", "forgetting F = 0 when v ∥ B"))}

      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={arrowD(396, 146, 690, 146)} stroke={GREEN} sw={1.7} dur={0.8} />
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d={arrowD(396, 234, 690, 234)} stroke={GREEN} sw={1.7} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <T x={694} y={138} size={12} fill={GREEN} weight={800} anchor="end">
          B
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.4)} d={arrowD(432, 216, 542, 166)} stroke={INK} sw={2.3} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 1.75)} d={arrowD(432, 216, 542, 216)} stroke={GREEN_DARK} sw={2.1} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 2.0)} d={arrowD(542, 216, 542, 166)} stroke={RED} sw={2.1} dur={0.35} />
      <Fade on={beat >= 2} delay={dl(2, 2.25)}>
        <T x={492} y={180} size={12.3} fill={INK} weight={800} anchor="start">
          v
        </T>
        <T x={444} y={207} size={11.8} fill={GREEN_DARK} weight={700} anchor="start">
          v∥ coasts
        </T>
        <T x={550} y={196} size={11.8} fill={RED} weight={700} anchor="start">
          v⊥ curves
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.5)}
        d="M 592 194 C 606 166, 630 166, 638 194 C 646 222, 670 222, 680 194"
        stroke={MUTED}
        sw={1.8}
        dur={0.7}
      />
      {cap(2, 376, 276, 2.8, INK, t("exactly along a field line → no force at all → straight line", "exactly along a field line → no force at all → straight line"))}
      {cap(2, 376, 296, 3.2, INK_LIGHT, t("helix: r = m v⊥ ⁄ qB — never the full speed", "helix: r = m v⊥ ⁄ qB — never the full speed"))}

      {/* ---------------- beat 3 — the torque angle ---------------- */}
      {head(3, 728, 108, GREEN_DARK, t("the wrong angle in τ = N I A B sin θ", "the wrong angle in τ = N I A B sin θ"))}

      <Draw on={beat >= 3} delay={dl(3, 0.6)} d="M 807 192 L 913 249" stroke={AMBER_DARK} sw={4} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 1.0)} d={arrowD(860, 220, 895, 155)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 1.3)} d={arrowD(860, 220, 982, 220)} stroke={GREEN} sw={2.1} dur={0.45} />
      <Draw on={beat >= 3} delay={dl(3, 1.7)} d="M 902 220 A 42 42 0 0 0 880 183" stroke={RED} sw={1.9} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 2.0)} d="M 930 220 A 70 70 0 0 1 922 253" stroke={MUTED} sw={1.7} dur={0.35} />
      <Fade on={beat >= 3} delay={dl(3, 2.3)}>
        <T x={899} y={149} size={12.3} fill={INK} weight={800} anchor="start">
          n̂
        </T>
        <T x={986} y={224} size={12.3} fill={GREEN} weight={800} anchor="start">
          B
        </T>
        <T x={906} y={200} size={12.6} fill={RED} weight={800} anchor="start">
          θ
        </T>
        <T x={940} y={250} size={12.3} fill={MUTED} weight={800} anchor="start">
          α
        </T>
        <T x={744} y={188} size={11.5} fill={AMBER_DARK} weight={700} anchor="start">
          loop, edge-on
        </T>
      </Fade>
      {cap(3, 728, 276, 2.6, INK, t("θ runs from the NORMAL to B — never from the plane", "θ runs from the NORMAL to B — never from the plane"))}
      {cap(3, 728, 296, 3.0, RED, t("plane at α to B  ⇒  write θ = 90° − α on its own line", "plane at α to B  ⇒  write θ = 90° − α on its own line"))}

      {/* ---------------- beat 4 — attract / repel ---------------- */}
      {head(4, 44, 336, INK, t("attract and repel, the wrong way round", "attract and repel, the wrong way round"))}

      <Draw on={beat >= 4} delay={dl(4, 0.6)} d={arrowD(104, 448, 104, 368)} stroke={GREEN_DARK} sw={2.4} dur={0.45} />
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d={arrowD(156, 448, 156, 368)} stroke={GREEN_DARK} sw={2.4} dur={0.45} />
      <Draw on={beat >= 4} delay={dl(4, 1.2)} d={arrowD(112, 412, 124, 412)} stroke={RED} sw={2} dur={0.3} />
      <Draw on={beat >= 4} delay={dl(4, 1.35)} d={arrowD(148, 412, 136, 412)} stroke={RED} sw={2} dur={0.3} />
      <Draw on={beat >= 4} delay={dl(4, 1.6)} d={arrowD(248, 448, 248, 368)} stroke={GREEN_DARK} sw={2.4} dur={0.45} />
      <Draw on={beat >= 4} delay={dl(4, 1.8)} d={arrowD(300, 368, 300, 448)} stroke={GREEN_DARK} sw={2.4} dur={0.45} />
      <Draw on={beat >= 4} delay={dl(4, 2.15)} d={arrowD(240, 412, 216, 412)} stroke={RED} sw={2} dur={0.3} />
      <Draw on={beat >= 4} delay={dl(4, 2.3)} d={arrowD(308, 412, 332, 412)} stroke={RED} sw={2} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 2.5)}>
        <T x={130} y={470} size={12.4} fill={RED} weight={800}>
          {t("like → ATTRACT", "like → ATTRACT")}
        </T>
        <T x={274} y={470} size={12.4} fill={RED} weight={800}>
          {t("anti → REPEL", "anti → REPEL")}
        </T>
      </Fade>
      {cap(4, 44, 496, 2.8, INK_LIGHT, t("the exact opposite of the like-charges rule you met first", "the exact opposite of the like-charges rule you met first"))}
      {cap(4, 44, 516, 3.1, AMBER_DARK, t("hook: like currents cuddle", "hook: like currents cuddle"))}

      {/* ---------------- beat 5 — no sine in a galvanometer ---------------- */}
      {head(5, 376, 336, GREEN_DARK, t("smuggling a sin θ into the galvanometer", "smuggling a sin θ into the galvanometer"))}

      <Draw on={beat >= 5} delay={dl(5, 0.6)} d="M 470 448 A 58 58 0 0 0 470 366" stroke={INK} sw={4.5} dur={0.55} />
      <Draw on={beat >= 5} delay={dl(5, 0.85)} d="M 530 366 A 58 58 0 0 0 530 448" stroke={INK} sw={4.5} dur={0.55} />
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <Circle cx={500} cy={407} r={19} fill={CREAM} stroke={MUTED} strokeWidth={1.6} />
        <T x={500} y={411} size={10.5} fill={MUTED} weight={700}>
          Fe
        </T>
        <T x={436} y={362} size={12} fill={INK} weight={800}>
          N
        </T>
        <T x={564} y={362} size={12} fill={INK} weight={800}>
          S
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.4)}
        d="M 473 380 L 527 380 L 527 434 L 473 434 Z"
        stroke={AMBER_DARK}
        sw={1.9}
        dur={0.6}
      />
      <Draw on={beat >= 5} delay={dl(5, 1.7)} d={arrowD(453, 423, 481, 414)} stroke={GREEN} sw={1.7} dur={0.3} />
      <Draw on={beat >= 5} delay={dl(5, 1.82)} d={arrowD(451, 407, 479, 407)} stroke={GREEN} sw={1.7} dur={0.3} />
      <Draw on={beat >= 5} delay={dl(5, 1.94)} d={arrowD(453, 391, 481, 400)} stroke={GREEN} sw={1.7} dur={0.3} />
      <Draw on={beat >= 5} delay={dl(5, 2.06)} d={arrowD(519, 414, 547, 423)} stroke={GREEN} sw={1.7} dur={0.3} />
      <Draw on={beat >= 5} delay={dl(5, 2.18)} d={arrowD(521, 407, 549, 407)} stroke={GREEN} sw={1.7} dur={0.3} />
      <Draw on={beat >= 5} delay={dl(5, 2.3)} d={arrowD(519, 400, 547, 391)} stroke={GREEN} sw={1.7} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 2.55)}>
        <T x={588} y={392} size={12.4} fill={GREEN_DARK} weight={800} anchor="start">
          {t("radial field: B lies in the coil's plane", "radial field: B lies in the coil's plane")}
        </T>
        <T x={588} y={414} size={12.8} fill={RED} weight={800} anchor="start">
          θ = 90°  ⇒  sin θ ≡ 1
        </T>
        <T x={588} y={436} size={12} fill={MUTED} weight={700} anchor="start">
          {t("coil frame wound on a soft-iron core", "coil frame wound on a soft-iron core")}
        </T>
      </Fade>
      {cap(5, 376, 496, 2.8, INK, t("φ = (N A B ⁄ k) I — linear, so the scale is evenly spaced", "φ = (N A B ⁄ k) I — linear, so the scale is evenly spaced"))}
      {cap(5, 376, 516, 3.1, INK_LIGHT, t("write sin θ here and you have undone the instrument's design", "write sin θ here and you have undone the instrument's design"))}

      {/* ---------------- beats 6 & 7 — the pro-tip ---------------- */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 716 330 L 716 528" stroke={MUTED} sw={1.2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={740} y={341} size={14} fill={AMBER_DARK} weight={800} anchor="start">
          {t("PRO-TIP — ASK WHAT WAS HELD CONSTANT", "PRO-TIP — ASK WHAT WAS HELD CONSTANT")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={740} y={363} size={12.4} fill={INK_LIGHT} weight={600} anchor="start">
          {t(
            "before touching a formula, in any charge-in-a-field problem",
            "before touching a formula, in any charge-in-a-field problem"
          )}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <Chip x={736} y={378} w={304} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={13.5} script={false}>
          {t("same speed  →  r = m v ⁄ qB directly", "same speed  →  r = m v ⁄ qB directly")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.55)}>
        <Chip x={736} y={422} w={304} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13.5} script={false}>
          {t("same voltage  →  r ∝ √(m ⁄ q)", "same voltage  →  r ∝ √(m ⁄ q)")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <Chip x={736} y={466} w={304} h={38} fill={CREAM} stroke={RED} textFill={INK} size={13.5} script={false}>
          {t("same momentum  →  r = p ⁄ qB  ⇒  r ∝ 1 ⁄ q", "same momentum  →  r = p ⁄ qB  ⇒  r ∝ 1 ⁄ q")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.25)}>
        <T x={740} y={522} size={12.2} fill={INK_LIGHT} weight={600} anchor="start">
          {t(
            "mass drops out of the last one — the messy numerical becomes one line",
            "mass drops out of the last one — the messy numerical becomes one line"
          )}
        </T>
      </Fade>

      {/* ---------------- beat 8 — closing ---------------- */}
      <Draw on={beat >= 8} delay={dl(8, 0.15)} d="M 44 538 L 1036 538" stroke={INK} sw={1.6} dur={0.7} />
      <Fade on={beat >= 8} delay={dl(8, 0.5)}>
        <T x={44} y={560} size={13.2} fill={INK} weight={800} anchor="start">
          {t(
            "circles · cyclotron · velocity selector · wire forces · loop torque · galvanometer — one law: F = q v × B",
            "circles · cyclotron · velocity selector · wire forces · loop torque · galvanometer — one law: F = q v × B"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.9)}>
        <Chip x={40} y={570} w={1000} h={26} fill={GREEN} textFill="#ffffff" size={12.5} script={false}>
          {t(
            "★ Next: step far back from the current loop and it becomes a magnetic dipole",
            "★ Next: step far back from the current loop and it becomes a magnetic dipole"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
