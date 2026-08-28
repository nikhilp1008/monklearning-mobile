/**
 * Ch04 · Section 71 — "The three configurations that recur everywhere"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 15.7, 40.53, 64.77, 89.6, 113.83, 123.05, 147.88, 169.73]):
 *  0 title
 *  1 diagram: three mini panels (contact / Atwood / table+hanging), caption
 *  2 col1 detail: contact — a=F/Mtotal, isolate for Nc, depends on which end
 *  3 col2 detail: Atwood — m1>m2 fixed pulley, shared a<g, dilutes gravity
 *  4 col3 detail: table+hanging — hanging mass drives, table block drags
 *  5 red margin: movable pulley factor of two — half speed, pull twice the string
 *  6 text: assumptions — ideal strings & pulleys, tension uniform
 *  7 red→green margin: the reward — tension halved, block-and-tackle bargain
 *  8 red margin: negative tension = string slack, re-examine
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52
 *  P1 contact cx200 y75..160 · P2 Atwood cx540 y65..150 · P3 table+hanging cx880 y70..170
 *  caption cx540 bl 178
 *  col1 x84 bl 200/224 · col2 x420 bl 200/224 · col3 x760 bl 200/224
 *  b5 | bar x66 y255..325 · lines st x84 bl 275/301
 *  b6 st x84 bl 355/379
 *  b7 | bar x66 y405..475 · lines st x84 bl 425/451
 *  b8 | bar x66 y500..570 · lines st x84 bl 520/546
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

export default function Ch04Sec71({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={18} fill={INK} script>
          {t(
            "blocks in contact, the Atwood machine, table-plus-hanging",
            "contact ke blocks, Atwood machine, table-plus-hanging"
          )}
        </T>
      </Fade>

      {/* beat 1 — three panels */}
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d="M 140 130 H 260" stroke={INK} sw={2.2} dur={0.4} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 150 100 h 32 v 30 h -32 z"
        stroke={INK}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.4)}
        d="M 182 100 h 32 v 30 h -32 z"
        stroke={INK}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.8)}
        d={arrowD(118, 115, 150, 115)}
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.3}
      />

      <Draw on={beat >= 1} delay={dl(1, 2.4)} d={ringD(540, 80, 13, 13)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 2.8)} d="M 528 90 L 508 118" stroke={INK} sw={1.8} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 3.1)} d="M 552 90 L 572 118" stroke={INK} sw={1.8} dur={0.3} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.4)}
        d="M 488 118 h 38 v 30 h -38 z"
        stroke={INK}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.8)}
        d="M 562 118 h 26 v 20 h -26 z"
        stroke={INK}
        sw={2}
        dur={0.4}
      />

      <Draw on={beat >= 1} delay={dl(1, 4.4)} d="M 800 130 H 940" stroke={INK} sw={2.2} dur={0.4} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 4.8)}
        d="M 820 100 h 34 v 30 h -34 z"
        stroke={INK}
        sw={2}
        dur={0.4}
      />
      <Draw on={beat >= 1} delay={dl(1, 5.2)} d={ringD(940, 112, 9, 9)} stroke={INK} sw={1.8} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 5.5)} d="M 940 121 V 142" stroke={INK} sw={1.8} dur={0.3} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 5.8)}
        d="M 925 142 h 28 v 26 h -28 z"
        stroke={INK}
        sw={2}
        dur={0.4}
      />

      <Fade on={beat >= 1} delay={dl(1, 6.4)}>
        <T x={540} y={178} size={11} fill={MUTED} script>
          {t(
            "three setups, and the movable-pulley factor of two",
            "teen setups, aur movable-pulley ka factor of two"
          )}
        </T>
      </Fade>

      {/* beat 2 — contact detail */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={84} y={200} size={13} fill={RED} script anchor="start">
          {t("1 · contact — a = F/M_total", "1 · contact — a = F/M_total")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={84} y={224} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "isolate one block — depends on WHICH end",
            "ek block alag karo — KAUN sa end par nirbhar"
          )}
        </T>
      </Fade>

      {/* beat 3 — Atwood detail */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={420} y={200} size={13} fill={RED} script anchor="start">
          {t("2 · Atwood — m₁>m₂, fixed pulley", "2 · Atwood — m₁>m₂, fixed pulley")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={420} y={224} size={12} fill={AMBER_DARK} script anchor="start">
          {t("shared a < g — dilutes gravity", "shared a < g — gravity ko patla karta")}
        </T>
      </Fade>

      {/* beat 4 — table+hanging detail */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={760} y={200} size={13} fill={RED} script anchor="start">
          {t("3 · table + hanging mass", "3 · table + latakta mass")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={760} y={224} size={12} fill={AMBER_DARK} script anchor="start">
          {t("hanging weight drives, table drags", "latakta weight chalata, table ghisatta")}
        </T>
      </Fade>

      {/* beat 5 — movable pulley factor of two */}
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d="M 66 255 v 70" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={84} y={275} size={14} fill={RED} script anchor="start">
          {t(
            "movable pulley: load moves at HALF the free end's speed",
            "movable pulley: load free end ki AADHI speed se chalta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={84} y={301} size={14} fill={RED} script anchor="start">
          {t(
            "pull TWICE the string to raise it — factor of two, a JEE Advanced staple",
            "uthaane ko DUGNI string khincho — factor of two, JEE Advanced ka staple"
          )}
        </T>
      </Fade>

      {/* beat 6 — assumptions */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={84} y={355} size={13} fill={INK} script anchor="start">
          {t(
            "assumptions throughout: strings ideal (massless, inextensible)",
            "poori tarah assumptions: strings ideal (massless, inextensible)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={84} y={379} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "pulleys ideal (massless, frictionless) — tension stays uniform",
            "pulleys ideal (massless, frictionless) — tension uniform rahta"
          )}
        </T>
      </Fade>

      {/* beat 7 — the reward */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 405 v 70" stroke={GREEN} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={425} size={14} fill={GREEN} script anchor="start">
          {t(
            "the reward: 2 string segments share the load — tension is HALVED",
            "inaam: 2 string segments load baantte — tension AADHA ho jaata"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={451} size={14} fill={GREEN} script anchor="start">
          {t(
            "half the force, twice the distance — every block-and-tackle's bargain",
            "aadhi force, dugni doori — har block-and-tackle ka saudaa"
          )}
        </T>
      </Fade>

      {/* beat 8 — negative tension */}
      <Draw on={beat >= 8} delay={dl(8, 0.6)} d="M 66 500 v 70" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={520} size={14} fill={RED} script anchor="start">
          {t(
            "negative tension in your answer? not real — the string went slack",
            "answer mein negative tension? asli nahi — string dheeli pad gayi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 7)}>
        <T x={84} y={546} size={14} fill={RED} script anchor="start">
          {t(
            "bodies now move independently — go back and re-examine the setup",
            "bodies ab alag-alag chalti — wapas jao aur setup dobara jaancho"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
