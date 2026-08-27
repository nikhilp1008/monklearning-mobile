/**
 * P12Ch05 · Section 49 — "The logical chain from no monopoles to zero flux"
 * Subtopic: Magnetism and Gauss's Law
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * BOARD REWRITTEN (2026-08-21) — the artwork taught a different lesson.
 *
 * WHAT THE BOARD USED TO TEACH: the surface-independence derivation — two
 * open surfaces S₁ and S₂ sharing a perimeter loop C carry equal flux. That
 * is a different section's result; this narration never mentions it.
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: Gauss's law for magnetism is a
 * postulate, so "derive it" really means "give the four-step reasoning
 * chain" — (1) poles always come in pairs, (2) so field lines are closed
 * loops, (3) so a loop crossing a closed surface out must cross back in,
 * (4) so the signed crossings cancel and ∮B·dA = 0 — plus the equivalent
 * phrasing in terms of enclosed magnetic charge.
 *
 * BEAT MAP (8 reveals → gates 0..7, nothing above 7):
 *   0  "a fundamental postulate"                 title + the postulate line
 *   1  "what a 'derive it' question wants"       the reasoning-chain framing
 *   2  "the chain starts at an experiment"       the spine: experiment → maths
 *   3  "poles always come in N–S pairs"          STEP 1 + the cut-magnet drawing
 *   4  "lines have nowhere to start or end"      STEP 2 + closed-loop drawing
 *   5  "crosses out, must cross back in"         STEP 3 + surface/loop drawing
 *   6  "out +, in −, they cancel exactly"        STEP 4 + ∮B·dA = 0
 *   7  "the second phrasing"                     enclosed magnetic charge = 0
 */

import React from "react";
import { G, Line, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

/** closed ellipse as a single drawable path */
function ellD(cx: number, cy: number, rx: number, ry: number): string {
  return `M ${cx - rx} ${cy} A ${rx} ${ry} 0 1 0 ${cx + rx} ${cy} A ${rx} ${ry} 0 1 0 ${cx - rx} ${cy}`;
}

function Step({ n, cy, on, delay }: { n: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw on={on} delay={delay}
        d={`M 61 ${cy} A 15 15 0 1 1 91 ${cy} A 15 15 0 1 1 61 ${cy}`}
        stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={on} delay={delay + 0.3}>
        <T x={76} y={cy + 5} size={14} fill={RED} weight={800}>{n}</T>
      </Fade>
    </G>
  );
}

export default function P12Ch05Sec49({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const row = [150, 248, 346, 444];

  return (
    <Scene>
      {/* beat 0 — title + the postulate */}
      <Fade on={beat >= 0} delay={dl(0, 0.35)}>
        <T x={540} y={50} size={25} fill={RED} script>
          {t("From no monopoles to zero flux", "No monopoles se zero flux tak")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.7)}
        d="M 300 64 C 500 60, 640 68, 790 62" stroke={RED} sw={2.2} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 2.4)}>
        <T x={540} y={90} size={13.5} fill={INK_LIGHT} weight={700}>
          {t("Gauss's law for magnetism is a POSTULATE — one of Maxwell's four equations, with nothing deeper beneath it.",
             "Gauss's law for magnetism ek POSTULATE hai — Maxwell ke chaar equations mein se ek, iske neeche kuch nahi.")}
        </T>
      </Fade>

      {/* beat 1 — what a 'derive it' question really wants */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={118} size={13.5} fill={RED} weight={800}>
          {t("So a 'derive it' question wants this reasoning chain — not an integral.",
             "Toh 'derive it' waala sawaal yahi reasoning chain maangta hai — integral nahi.")}
        </T>
      </Fade>

      {/* beat 2 — the spine: experiment at the top, mathematics at the bottom */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={76} y={146} size={11.5} fill={MUTED} weight={700}>
          {t("experiment", "experiment")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={arrowD(76, 196, 76, 246)} stroke={MUTED} sw={2} dur={0.35} />
      <Draw on={beat >= 2} delay={dl(2, 0.9)} d={arrowD(76, 294, 76, 344)} stroke={MUTED} sw={2} dur={0.35} />
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d={arrowD(76, 392, 76, 442)} stroke={MUTED} sw={2} dur={0.35} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={76} y={504} size={11.5} fill={MUTED} weight={700}>
          {t("mathematics", "mathematics")}
        </T>
      </Fade>

      {/* ---------------- STEP 1 (beat 3) ---------------- */}
      <Step n={1} cy={row[0] + 26} on={beat >= 3} delay={dl(3, 0.2)} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={110} y={row[0] + 16} size={14} fill={RED} weight={800} anchor="start">
          {t("STEP 1 · THE EXPERIMENTAL FACT", "STEP 1 · EXPERIMENTAL FACT")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={110} y={row[0] + 42} size={13} fill={INK} weight={700} anchor="start">
          {t("Magnetic poles always come in North–South pairs.",
             "Magnetic poles hamesha North–South jodi mein aate hain.")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={110} y={row[0] + 66} size={13} fill={INK_LIGHT} weight={600} anchor="start">
          {t("Cutting a magnet never isolates one pole — however many times you cut.",
             "Magnet kaatne se ek pole alag nahi hota — chaahe jitni baar kaato.")}
        </T>
      </Fade>
      {/* drawing: cut a magnet, get two magnets */}
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <Rect x={660} y={158} width={75} height={34} fill="#ffe4e6" stroke={RED} strokeWidth={2} />
        <Rect x={735} y={158} width={75} height={34} fill="#dcfce7" stroke={GREEN_DARK} strokeWidth={2} />
        <T x={697} y={181} size={14} fill={RED} weight={900}>N</T>
        <T x={772} y={181} size={14} fill={GREEN_DARK} weight={900}>S</T>
        <Line x1={735} y1={146} x2={735} y2={204} stroke={MUTED} strokeWidth={1.8} strokeDasharray="5 5" />
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.8)} d={arrowD(822, 175, 856, 175)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 2.1)}>
        <Rect x={866} y={160} width={38} height={30} fill="#ffe4e6" stroke={RED} strokeWidth={1.8} />
        <Rect x={904} y={160} width={38} height={30} fill="#dcfce7" stroke={GREEN_DARK} strokeWidth={1.8} />
        <Rect x={956} y={160} width={38} height={30} fill="#ffe4e6" stroke={RED} strokeWidth={1.8} />
        <Rect x={994} y={160} width={38} height={30} fill="#dcfce7" stroke={GREEN_DARK} strokeWidth={1.8} />
        <T x={885} y={181} size={12} fill={RED} weight={900}>N</T>
        <T x={923} y={181} size={12} fill={GREEN_DARK} weight={900}>S</T>
        <T x={975} y={181} size={12} fill={RED} weight={900}>N</T>
        <T x={1013} y={181} size={12} fill={GREEN_DARK} weight={900}>S</T>
        <T x={949} y={212} size={11.5} fill={MUTED} weight={700}>
          {t("every piece is still N–S", "har tukda phir bhi N–S")}
        </T>
      </Fade>

      {/* ---------------- STEP 2 (beat 4) ---------------- */}
      <Step n={2} cy={row[1] + 26} on={beat >= 4} delay={dl(4, 0.2)} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={110} y={row[1] + 16} size={14} fill={RED} weight={800} anchor="start">
          {t("STEP 2 · WHAT THAT DOES TO FIELD LINES", "STEP 2 · FIELD LINES PAR ASAR")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={110} y={row[1] + 42} size={13} fill={INK} weight={700} anchor="start">
          {t("No isolated poles ⇒ lines have nowhere to start and nowhere to end.",
             "Isolated poles nahi ⇒ lines ke paas shuru aur khatam hone ki jagah nahi.")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={110} y={row[1] + 66} size={13} fill={GREEN_DARK} weight={700} anchor="start">
          {t("⇒ every magnetic field line is a continuous CLOSED LOOP.",
             "⇒ har magnetic field line ek continuous CLOSED LOOP hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <Rect x={812} y={282} width={76} height={26} fill={CREAM} stroke={INK} strokeWidth={1.8} />
        <T x={831} y={301} size={11.5} fill={RED} weight={900}>N</T>
        <T x={869} y={301} size={11.5} fill={GREEN_DARK} weight={900}>S</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.7)} d={ellD(850, 295, 88, 30)} stroke={AMBER_DARK} sw={1.9} dur={0.8} />
      <Draw on={beat >= 4} delay={dl(4, 1.9)} d={ellD(850, 295, 118, 48)} stroke={AMBER_DARK} sw={1.9} dur={0.8} />
      <Draw on={beat >= 4} delay={dl(4, 2.4)} d={arrowD(842, 265, 862, 265)} stroke={AMBER_DARK} sw={2} dur={0.25} />
      <Draw on={beat >= 4} delay={dl(4, 2.5)} d={arrowD(842, 247, 862, 247)} stroke={AMBER_DARK} sw={2} dur={0.25} />

      {/* ---------------- STEP 3 (beat 5) ---------------- */}
      <Step n={3} cy={row[2] + 26} on={beat >= 5} delay={dl(5, 0.2)} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={110} y={row[2] + 16} size={14} fill={RED} weight={800} anchor="start">
          {t("STEP 3 · BRING IN A CLOSED SURFACE", "STEP 3 · CLOSED SURFACE LAAO")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={110} y={row[2] + 42} size={13} fill={INK} weight={700} anchor="start">
          {t("Take any closed surface, and any closed loop of field line.",
             "Koi bhi closed surface lo, aur field line ka koi bhi closed loop.")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={110} y={row[2] + 66} size={13} fill={INK_LIGHT} weight={600} anchor="start">
          {t("Cross outward once and it must cross back inward — a loop returns to where it began.",
             "Ek baar bahar nikla toh andar bhi aana hi hoga — loop wahin lautta hai.")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.4)}
        d={ellD(830, 394, 46, 46)} stroke={INK} sw={2} dur={0.7} />
      <Draw on={beat >= 5} delay={dl(5, 1.8)} d={ellD(880, 394, 80, 30)} stroke={AMBER_DARK} sw={2} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 2.4)}>
        <T x={886} y={356} size={12} fill={GREEN_DARK} weight={800}>
          {t("+ out", "+ bahar")}
        </T>
        <T x={776} y={356} size={12} fill={RED} weight={800}>
          {t("− in", "− andar")}
        </T>
        <T x={830} y={452} size={11.5} fill={MUTED} weight={700}>
          {t("closed surface", "closed surface")}
        </T>
      </Fade>

      {/* ---------------- STEP 4 (beat 6) ---------------- */}
      <Step n={4} cy={row[3] + 26} on={beat >= 6} delay={dl(6, 0.2)} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={110} y={row[3] + 16} size={14} fill={RED} weight={800} anchor="start">
          {t("STEP 4 · ADD THE CROSSINGS UP", "STEP 4 · CROSSINGS JODO")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={110} y={row[3] + 42} size={13} fill={INK} weight={700} anchor="start">
          {t("Crossings out and crossings in are equal in number.",
             "Bahar aur andar ke crossings ki ginti barabar hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={110} y={row[3] + 66} size={13} fill={GREEN_DARK} weight={700} anchor="start">
          {t("Outward counts +, inward counts − ⇒ the contributions cancel exactly.",
             "Bahar +, andar − ⇒ contributions bilkul cancel ho jaate hain.")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.4)} d="M 700 452 H 1000 V 514 H 700 Z" stroke={GREEN_DARK} sw={2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 2.0)}>
        <T x={850} y={492} size={22} fill={GREEN} weight={900}>∮ B · dA = 0</T>
      </Fade>

      {/* beat 7 — the equivalent phrasing */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={40} y={544} w={1000} h={44} fill={GREEN} textFill="#ffffff" size={13.5}>
          {t("★ Equally full marks: the net magnetic charge enclosed by any surface is zero — because magnetic charge does not exist.",
             "★ Utne hi marks: kisi bhi surface ke andar net magnetic charge zero hai — kyunki magnetic charge hota hi nahi.")}
        </Chip>
      </Fade>
    </Scene>
  );
}
