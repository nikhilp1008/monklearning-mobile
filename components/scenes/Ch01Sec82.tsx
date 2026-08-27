/**
 * Ch01 · Section 82 — "Procedures C and D: the echo, and the monolayer"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.4, 17.1, 25.8, 47.5, 57.2, 74.3, 99.2]):
 *  0 title + C header
 *  1 send a pulse, TOTAL time
 *  2 halve it: D = vt/2 box
 *  3 out/back arrows · skipping ½ doubles the answer
 *  4 D header: the monolayer
 *  5 three panels: drop → circular film → side view
 *  6 the dilution: 1/20 × 1/20 = 1/400
 *  7 powder edge · A from diameter · V × concentration · t = V/A
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | header st x60 bl 88
 *  b1 | script 14 st x80 bl 124
 *  b2 | box x80..380 y144..190 (19 bl 174)
 *  b3 | arrows x430..640 y152/172 · red st x430 bl 220
 *  b4 | header st x60 bl 270
 *  b5 | drop c(140,340) r10 (label bl 390) · film ellipse c(400,345) rx110 ry40 (label bl 408) · band x600..900 y335..345 (label bl 380)
 *  b6 | 15 st x80 bl 440 · amber 13 st x80 bl 466
 *  b7 | 13 st x80 bl 502 · 13 st x80 bl 528 · green 16 st x80 bl 556 · muted 12 mid bl 582
 */

import React from "react";
import { Ellipse } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec82({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const molecules: string[] = [];
  for (let x = 610; x <= 890; x += 20) molecules.push(`M ${x} 340 a 4 4 0 1 0 8 0 a 4 4 0 1 0 -8 0`);

  return (
    <Scene>
      {/* beat 0 — title + C */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={50} size={24} fill={INK} script>
          {t(
            "the echo, and the monolayer",
            "echo, aur monolayer"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3)}>
        <T x={60} y={88} size={16} fill={AMBER_DARK} script anchor="start">
          {t(
            "C — distance by echo (RADAR · SONAR · LIDAR: one procedure)",
            "C — echo se doori (RADAR · SONAR · LIDAR: ek hi procedure)"
          )}
        </T>
      </Fade>

      {/* beat 1 — total time */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={80} y={124} size={14} fill={INK} script anchor="start">
          {t(
            "1 · send a pulse — measure the TOTAL return time t (that word decides everything)",
            "1 · pulse bhejo — lautne ka KUL time t naapo (usi shabd par sab tikta hai)"
          )}
        </T>
      </Fade>

      {/* beat 2 — halve it */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 1)}
        d="M 92 144 h 276 q 12 0 12 12 v 22 q 0 12 -12 12 h -276 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={230} y={174} size={19} fill={INK} weight={700}>2 · D = v t ⁄ 2</T>
      </Fade>

      {/* beat 3 — why halve */}
      <Draw on={beat >= 3} delay={dl(3, 1)} d={arrowD(430, 152, 640, 152)} stroke={GREEN} sw={2.2} dur={0.6} />
      <Draw on={beat >= 3} delay={dl(3, 2)} d={arrowD(640, 174, 430, 174)} stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={430} y={220} size={13} fill={RED} script anchor="start">
          {t(
            "skip the ½ and the answer DOUBLES — and it survives every other check you make",
            "½ chhodo aur answer DUGNA — aur yeh tumhare baaki har check se bach nikalta hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — D header */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={60} y={270} size={16} fill={AMBER_DARK} script anchor="start">
          {t(
            "D — the size of a molecule: the oleic-acid monolayer",
            "D — anu ka aakaar: oleic-acid monolayer"
          )}
        </T>
      </Fade>

      {/* beat 5 — the three panels */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 1)}
        d="M 130 340 a 10 10 0 1 0 20 0 a 10 10 0 1 0 -20 0"
        stroke={AMBER_DARK}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={140} y={390} size={12} fill={MUTED} script>
          {t("1 drop, known V", "1 boond, gyaat V")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3.5)} d={arrowD(200, 340, 270, 340)} stroke={INK_LIGHT} sw={1.8} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 4.5)}>
        <Ellipse cx={400} cy={345} rx={110} ry={40} fill="none" stroke={AMBER_DARK} strokeWidth={1.8} strokeDasharray="3 4" />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={400} y={412} size={12} fill={MUTED} script>
          {t("circular film — area A", "gol film — area A")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 8)} d={arrowD(530, 340, 585, 340)} stroke={INK_LIGHT} sw={1.8} dur={0.4} />
      <Draw
        on={beat >= 5}
        delay={dl(5, 9)}
        d={"M 600 332 h 300 M 600 352 h 300 " + molecules.join(" ")}
        stroke={INK_LIGHT}
        sw={1.4}
        dur={1.2}
      />
      <Fade on={beat >= 5} delay={dl(5, 11)}>
        <T x={750} y={380} size={12} fill={MUTED} script>
          {t("side view — ONE molecule thick", "side view — EK anu moti")}
        </T>
      </Fade>

      {/* beat 6 — the dilution */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={80} y={440} size={15} fill={INK} weight={600} anchor="start">
          {t(
            "1 · dilute: 1 cm³ in 20 → 1 of that in 20 ⇒ concentration = 1⁄400",
            "1 · ghol banao: 1 cm³ bees mein → uska 1 phir bees mein ⇒ saandrata = 1⁄400"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 14)}>
        <T x={80} y={466} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "pure acid would spread far too thick — the dilution is what makes a monolayer possible",
            "shuddh acid bahut mota failta — dilution hi monolayer ko mumkin banata hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — steps 2–4 */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={80} y={502} size={13} fill={INK} script anchor="start">
          {t(
            "2 · lycopodium powder on clean water — it marks the film's edge so you can SEE it",
            "2 · saaf paani par lycopodium powder — wo film ka kinara dikha deta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={80} y={528} size={13} fill={INK} script anchor="start">
          {t(
            "3 · A from the diameter · V(acid) = drop volume × concentration — NOT the drop volume",
            "3 · vyaas se A · V(acid) = boond ka volume × saandrata — boond ka volume NAHI"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 16)}>
        <T x={80} y={556} size={16} fill={GREEN} weight={700} anchor="start">
          4 · t = V ⁄ A = {t("the molecular diameter", "anu ka vyaas")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 21)}>
        <T x={540} y={582} size={12} fill={MUTED} script>
          {t(
            "assumes a perfect, gap-free monolayer — an order-of-magnitude estimate, no better",
            "perfect, bina khaali jagah waali monolayer maanta hai — order-of-magnitude anumaan, usse behtar nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
