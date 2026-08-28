/**
 * Ch12 · Section 19 — "Pressure is the drumbeat of collisions"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 21.14, 35.73, 52.8, 69.61, 81.47]):
 *  0 title + underline + bridge · 1 molecules far apart, meet only in brief
 *    collisions · 2 THE ANALOGY: ball machine, one ball = jerky shove · 3
 *    thousands/sec ⇒ steady push = PRESSURE (wall bounce marks) · 4 heat ⇒ P
 *    rises; squeeze to ½V ⇒ P doubles · 5 core statement: no collisions, no
 *    pressure; statistical average · 6 Clausius·Maxwell·Boltzmann + reach
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 24, red)          | T mid | x260..820 y37..78 (bl66)
 *  b0 | underline · bridge (13,ink)     | Draw/T| y88 · x540 y102
 *  b1 | reasoning (14, ink, script)     | T mid | x540 y128
 *  b2 | machine + single ball + jerk    | mix   | x100..800 y150..260
 *  b2 | caption (12, ink, script, st)   | T st  | x230 y308
 *  b3 | wall bounce marks + steady push | mix   | x780..850 y150..260
 *  b3 | caption (12, green, script, end)| T end | x850 y328
 *  b4 | heat line · squeeze line        | T mid | x540 y362 / y392
 *  b5 | core (16, ink, bold) + sub (13) | T mid | x540 y428 / y452
 *  b6 | names line + reach chips ×5      | T/Chip| x540 y488 · y515..543
 */

import React from "react";
import { Circle } from 'react-native-svg';
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
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const REACH: string[] = ["gas laws", "specific heats", "viscosity", "conduction", "diffusion"];

export default function Ch12Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={66} size={24} fill={RED} script>
          {t("pressure is the drumbeat of collisions", "pressure collisions ki drumbeat hai")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 330 88 C 420 84, 660 92, 750 86" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 0.8)}>
        <T x={540} y={102} size={13} fill={INK} script>
          {t(
            "we asserted PV = nRT — now: why should pressure exist at all?",
            "humne PV = nRT maan liya — ab: pressure exist hi kyun kare?"
          )}
        </T>
      </Fade>

      {/* beat 1 — molecules far apart */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={128} size={14} fill={INK} script>
          {t(
            "molecules far apart ⇒ fly freely, meet only in brief collisions",
            "molecules door door ⇒ freely udte, sirf brief collisions mein miltey"
          )}
        </T>
      </Fade>

      {/* beat 2 — THE ANALOGY: one ball = jerky shove */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d="M 100 185 h 70 v 30 h -70 z" stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={135} y={172} size={11} fill={MUTED} script>
          {t("ball machine", "ball machine")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1)} d="M 175 200 H 400" stroke={MUTED} sw={1.6} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <Circle cx={400} cy={200} r={6} fill={AMBER_DARK} />
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2)} d="M 406 200 H 780" stroke={MUTED} sw={1.6} dur={0.5} />
      {[140, 220, 260].map((y) => (
        <Draw key={y} on={beat >= 2} delay={dl(2, 2.3)} d={`M 780 ${y} h 6 M 780 ${y + 8} h 6`} stroke={INK} sw={2} dur={0.3} />
      ))}
      <Draw on={beat >= 2} delay={dl(2, 2.5)} d="M 780 150 V 290" stroke={INK} sw={2.4} dur={0.6} />
      <Draw on={beat >= 2} delay={dl(2, 3.1)} d={arrowD(780, 200, 800, 200)} stroke={AMBER_DARK} sw={2} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 3.6)}>
        <T x={230} y={308} size={12} fill={INK} anchor="start" script>
          {t("one ball = jerky shove", "ek ball = jerky shove")}
        </T>
      </Fade>

      {/* beat 3 — thousands/sec => steady push = PRESSURE */}
      {[160, 180, 220, 240, 260].map((y, i) => (
        <Fade key={y} on={beat >= 3} delay={dl(3, 0.2 + i * 0.15)}>
          <Circle cx={600} cy={y} r={5} fill={AMBER_DARK} />
        </Fade>
      ))}
      {[160, 180, 200, 220, 240, 260].map((y, i) => (
        <Draw key={y} on={beat >= 3} delay={dl(3, 1 + i * 0.1)} d={arrowD(780, y, 850, y)} stroke={GREEN} sw={2.2} dur={0.35} />
      ))}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={850} y={328} size={12} fill={GREEN} anchor="end" script>
          {t("1000s/sec ⇒ steady push = PRESSURE", "1000s/sec ⇒ steady push = PRESSURE")}
        </T>
      </Fade>

      {/* beat 4 — heat / squeeze scenarios */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={362} size={15} fill={AMBER_DARK}>
          {t(
            "heat ⇒ faster & harder & more often ⇒ pressure rises",
            "heat ⇒ tez & harder & jyada baar ⇒ pressure badhta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={540} y={392} size={15} fill={AMBER_DARK}>
          {t("squeeze to ½V ⇒ 2× as often ⇒ pressure doubles", "½V tak squeeze ⇒ 2× baar ⇒ pressure double")}
        </T>
      </Fade>

      {/* beat 5 — core statement */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={428} size={17} fill={INK} weight={700}>
          {t("no collisions, no pressure", "no collisions, no pressure")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={452} size={13} fill={MUTED} script>
          {t(
            "pressure = statistical average — meaningful only for huge N",
            "pressure = statistical average — sirf huge N ke liye meaningful"
          )}
        </T>
      </Fade>

      {/* beat 6 — Clausius, Maxwell, Boltzmann + reach */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={488} size={14} fill={INK} script>
          {t("Clausius · Maxwell · Boltzmann (19th century)", "Clausius · Maxwell · Boltzmann (19th century)")}
        </T>
      </Fade>
      {REACH.map((label, i) => {
        const w = 34 + label.length * 6.5;
        const totalW = REACH.reduce((s, l) => s + 34 + l.length * 6.5, 0) + (REACH.length - 1) * 14;
        let x = 540 - totalW / 2;
        for (let j = 0; j < i; j++) x += 34 + REACH[j].length * 6.5 + 14;
        return (
          <Fade key={label} on={beat >= 6} delay={dl(6, 1 + i * 0.3)}>
            <Chip x={x} y={518} w={w} h={28} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={11} script={false}>
              {label}
            </Chip>
          </Fade>
        );
      })}
    </Scene>
  );
}
