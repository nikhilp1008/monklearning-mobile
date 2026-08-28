/**
 * Ch08 · Section 20 — "Which modulus do I use?"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: hi beats 3..4 are ~1s each — short delays there.
 * All icon shapes use fill="none" (outline only) so nothing needs an
 * extra Fade wrapper to satisfy the blank-board contract.
 *
 * Four decision icons in a row: length→Y, shape→η, volume→B, fluid→B only.
 *
 * Beats (en [0, 1.0, 10.39, 20.54, 32.4, 40.85, 65.68]):
 *  0 title + drawn underline
 *  1 diagram: the four icon shapes (no labels yet)
 *  2 ring icon 1 + "length → Y"
 *  3 ring icon 2 + "shape → η"
 *  4 ring icon 3 + "volume → B"
 *  5 icon 4 label "fluid → B only" + red margin note
 *  6 closing line: name the deformation first
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 22, red, ALWAYS ON) cx540 bl64
 *  b0 | underline           | Draw | x480..600 y86..93
 *  b1 | icon1 (length)      | Draw | x130..160 y155..285
 *  b1 | icon2 (shape)       | Draw | x370..450 y205..250
 *  b1 | icon3 (volume)      | Draw | x600..720 y165..275
 *  b1 | icon4 (fluid)       | Draw | x890..950 y190..250
 *  b2 | ring1               | Draw | c(145,220) rx29 ry47
 *  b2 | "length"/"Y"        | T mid| x145 bl310/328
 *  b3 | ring2               | Draw | c(410,227) rx54 ry35
 *  b3 | "shape"/"η"         | T mid| x410 bl310/328
 *  b4 | ring3               | Draw | c(660,220) rx44 ry42
 *  b4 | "volume"/"B"        | T mid| x660 bl310/328
 *  b5 | "fluid"/"B only"    | T mid| x920 bl310/328
 *  b5 | margin bar          | Draw | x60 y400..428
 *  b5 | note (15)           | T st | x76..505 bl420 (y400..427)
 *  b6 | closing (14)        | T mid| x351..729 bl460 (y440..465)
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
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("which modulus do I use?", "kaunsa modulus use karoon?")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M480 90 C520 86, 560 93, 600 89" stroke={RED} sw={2} dur={0.4} />

      {/* beat 1 — the four icon shapes */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d={arrowD(145, 185, 145, 155)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d="M130 185 h30 v70 h-30 z" stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.9)} d={arrowD(145, 255, 145, 285)} stroke={INK} sw={2} dur={0.3} />

      <Draw on={beat >= 1} delay={dl(1, 1.3)} d="M370 250 L370 220 L390 205 L450 205 L450 235 L430 250 Z" stroke={AMBER_DARK} sw={2} dur={0.5} />

      <Draw on={beat >= 1} delay={dl(1, 1.9)} d="M630 190 h60 v60 h-60 z" stroke={GREEN} sw={2} dur={0.4} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.3)}
        d={`${arrowD(660, 165, 660, 193)} ${arrowD(660, 275, 660, 247)} ${arrowD(600, 220, 627, 220)} ${arrowD(720, 220, 693, 220)}`}
        stroke={GREEN}
        sw={1.8}
        dur={0.4}
      />

      <Draw on={beat >= 1} delay={dl(1, 2.8)} d="M890 190 h60 v60 h-60 z" stroke={MUTED} sw={2} dur={0.4} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.2)}
        d="M896 205 q7 -6 14 0 t14 0 t14 0 M896 222 q7 -6 14 0 t14 0 t14 0 M896 239 q7 -6 14 0 t14 0 t14 0"
        stroke={MUTED}
        sw={1.4}
        dur={0.5}
      />

      {/* beat 2 — length change → Young's modulus */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d={ringD(145, 220, 29, 47)} stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={145} y={310} size={12} fill={MUTED}>
          {t("length", "length")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={145} y={328} size={16} fill={INK} weight={800}>
          → Y
        </T>
      </Fade>

      {/* beat 3 — shape change → rigidity */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d={ringD(410, 227, 54, 35)} stroke={GREEN} sw={2.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={410} y={310} size={12} fill={MUTED}>
          {t("shape", "shape")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={410} y={328} size={16} fill={INK} weight={800}>
          → η
        </T>
      </Fade>

      {/* beat 4 — volume change → bulk modulus */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d={ringD(660, 220, 44, 42)} stroke={GREEN} sw={2.4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={660} y={310} size={12} fill={MUTED}>
          {t("volume", "volume")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={660} y={328} size={16} fill={INK} weight={800}>
          → B
        </T>
      </Fade>

      {/* beat 5 — fluid: only B, and the gas caveat */}
      <Fade on={beat >= 5} delay={dl(5, 0.1)}>
        <T x={920} y={310} size={12} fill={MUTED}>
          {t("fluid", "fluid")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={920} y={328} size={13} fill={INK} weight={800}>
          → B only
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d="M60 400 L60 428" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={76} y={420} size={15} fill={RED} script anchor="start">
          {t("fluid: only B — gas: isothermal B=P, adiabatic B=γP", "fluid: sirf B — gas: isothermal B=P, adiabatic B=γP")}
        </T>
      </Fade>

      {/* beat 6 — the habit */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={460} size={14} fill={GREEN} script>
          {t("name the deformation first — the modulus follows", "pehle deformation ka naam lo — modulus khud aa jaata")}
        </T>
      </Fade>
    </Scene>
  );
}
