/**
 * Ch04 · Section 64 — "Common Forces and FBDs: the reference set"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.7, 25.9, 50.8, 68.0, 80.8, 102.7, 127.6, 128.6]):
 *  0 title · 1 band1 weight · 2 band2 normal (4 forms) ·
 *  3 band3 tension · 4 band4 spring F=-kx · 5 band4 series/parallel ·
 *  6 band5 rolling + apparent weight · 7 red margin: self-adjusting, negative signals · 8 closing
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · bands x60..1020:
 *  band1 y80..128  hdr bl 98 · line cx540 bl 118
 *  band2 y136..196 hdr bl 154 · line cx540 bl 180
 *  band3 y204..252 hdr bl 222 · line cx540 bl 244
 *  band4 y260..332 hdr bl 278 · lines cx540 bl 300 / 322
 *  band5 y340..400 hdr bl 358 · line cx540 bl 384
 *  b7 | bar x66 y420..500 · lines st x84 bl 440 / 466 / 490
 *  b8 line cx540 bl 540
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

function band(y: number, h: number) {
  return `M 72 ${y} h 936 q 12 0 12 12 v ${h - 24} q 0 12 -12 12 h -936 q -12 0 -12 -12 v -${
    h - 24
  } q 0 -12 12 -12`;
}

export default function Ch04Sec64({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const hdr = (k: number, y: number, txt: string) => (
    <Fade on={beat >= k} delay={dl(k, 1)}>
      <T x={84} y={y} size={11} fill={MUTED} script anchor="start">
        {txt}
      </T>
    </Fade>
  );

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t(
            "every contact-force relation, on one board",
            "har contact-force relation, ek board par"
          )}
        </T>
      </Fade>

      {/* beat 1 — weight */}
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d={band(80, 48)} stroke={RED} sw={2} dur={0.4} />
      {hdr(1, 98, t("1 · weight", "1 · weight"))}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={540} y={118} size={14} fill={INK} weight={700}>
          {t(
            "W = mg, always down, at the centre of mass — the first arrow, always",
            "W = mg, hamesha neeche, centre of mass par — hamesha pehla teer"
          )}
        </T>
      </Fade>

      {/* beat 2 — normal, four forms */}
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d={band(136, 60)} stroke={AMBER} sw={2} dur={0.4} />
      {hdr(2, 154, t("2 · normal reaction — NEVER assume mg", "2 · normal reaction — mg MAT maano"))}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={540} y={180} size={13} fill={INK} weight={700}>
          {t(
            "mg (flat) · mg·cosθ (incline) · m(g±a) (lift) · mg−F·sinθ (pulled)",
            "mg (flat) · mg·cosθ (incline) · m(g±a) (lift) · mg−F·sinθ (khincha)"
          )}
        </T>
      </Fade>

      {/* beat 3 — tension */}
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d={band(204, 48)} stroke={AMBER} sw={2} dur={0.4} />
      {hdr(3, 222, t("3 · tension", "3 · tension"))}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={540} y={244} size={13} fill={INK} weight={700}>
          {t(
            "along the string, away from the body — uniform, unchanged over an ideal pulley",
            "string ke along, body se door — uniform, ideal pulley par bhi wahi"
          )}
        </T>
      </Fade>

      {/* beat 4 — spring */}
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d={band(260, 72)} stroke={AMBER} sw={2} dur={0.4} />
      {hdr(4, 278, t("4 · spring", "4 · spring"))}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={540} y={300} size={13} fill={INK} weight={700}>
          F = −kx, |F| = kx, [k] = [MT⁻²]
        </T>
      </Fade>

      {/* beat 5 — series/parallel */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={322} size={13} fill={GREEN} weight={700}>
          {t(
            "series: 1⁄k_eq = 1⁄k₁+1⁄k₂ (softer) · parallel: k_eq = k₁+k₂ (stiffer)",
            "series: 1⁄k_eq = 1⁄k₁+1⁄k₂ (naram) · parallel: k_eq = k₁+k₂ (kadak)"
          )}
        </T>
      </Fade>

      {/* beat 6 — rolling + apparent weight */}
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d={band(340, 60)} stroke={GREEN} sw={2} dur={0.4} />
      {hdr(6, 358, t("5 · rolling friction · apparent weight", "5 · rolling friction · apparent weight"))}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={540} y={384} size={13} fill={INK} weight={700}>
          {t(
            "f_r = μr·N (μr ≪ μk) · R = m(g±a) · mg (const v) · 0 (free fall)",
            "f_r = μr·N (μr ≪ μk) · R = m(g±a) · mg (const v) · 0 (free fall)"
          )}
        </T>
      </Fade>

      {/* beat 7 — the deepest line */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 420 v 82" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={440} size={14} fill={RED} script anchor="start">
          {t(
            "N and T are self-adjusting — surfaces only PUSH, strings only PULL",
            "N aur T self-adjusting hain — surfaces sirf PUSH, strings sirf PULL"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={466} size={14} fill={RED} script anchor="start">
          {t(
            "negative N or T = not a real answer — a contradiction, redraw the picture",
            "negative N ya T = asli answer nahi — virodhabhas, tasveer dobara banao"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 13)}>
        <T x={84} y={490} size={14} fill={GREEN} script anchor="start">
          {t(
            "it's a message from physics, not a number to carry forward",
            "physics ka sandesh hai, aage le jaane ka number nahi"
          )}
        </T>
      </Fade>

      {/* beat 8 — closing */}
      <Fade on={beat >= 8} delay={dl(8, 1)}>
        <T x={540} y={540} size={13} fill={AMBER} script>
          {t(
            "keep this beside you — half of mechanics becomes lookup, not recall",
            "ise paas rakho — mechanics ka aadha hissa lookup ban jaata, yaad nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
