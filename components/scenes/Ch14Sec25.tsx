/**
 * Ch14 · Section 25 — "Worked example: three successive resonances"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.53, 17.39, 20.71, 27.88, 40.92, 52.94, 62.14]):
 *  0 hook badge + question: 250,350,450 Hz, v=340 m/s → open/closed? f1? L?
 *  1 spectrum: 3 resonances, gaps both = 100 Hz
 *  2 the whole problem hinges on interpreting that gap
 *  3 two hypotheses: OPEN gap=f1, CLOSED gap=2f1
 *  4 test open: f1=100 → 250/100=2.5 — NOT whole, ruled out
 *  5 closed confirmed: 2f1=100 → f1=50Hz (5th,7th,9th harmonics, all odd)
 *  6 length: L=v/4f1=340/200=1.7 m
 *  7 verdict: CLOSED pipe, f1=50Hz, L=1.7m
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | badge chip (13)               | Chip  | x90..350  y100..132
 *  b0 | question chip (h34)           | Chip  | x370..1020 y100..134
 *  b1 | axis + 3 ticks                 | Draw  | x150..950 y300
 *  b1 | freq labels (13)               | T mid | x300/550/800 bl325   y312..326
 *  b1 | gap arrows + "100" labels (12)| Draw+T| x300..550/550..800 y293
 *  b2 | caption (13,muted)             | T mid | x540 bl355            y343..356
 *  b3 | OPEN chip (h36)                | Chip  | x200..420 y380..416
 *  b3 | CLOSED chip (h36)              | Chip  | x450..690 y380..416
 *  b4 | cross (OPEN chip)               | Draw  | x200..420 y380..416
 *  b4 | test text (12,red)             | T st  | x60 bl435             y423..436
 *  b5 | closed-confirm (12,green)      | T st  | x60 bl460             y448..461
 *  b6 | length (13)                    | T st  | x60 bl485             y473..486
 *  b7 | final chip (h54,s18)           | Chip  | x300..780 y510..564
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, crossD, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

function doubleArrowH(xL: number, xR: number, y: number): string {
  const mid = (xL + xR) / 2;
  return `${arrowD(mid, y, xL, y)} ${arrowD(mid, y, xR, y)}`;
}

export default function Ch14Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={23} fill={RED} script>
          {t("worked example: three successive resonances", "worked example: teen successive resonances")}
        </T>
      </Fade>

      {/* beat 0 — hook + question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={90} y={100} w={260} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13}>
          {t("★ JEE Main puzzle", "★ JEE Main puzzle")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 1.0)}>
        <Chip x={370} y={100} w={650} h={34} fill="#fff" stroke={INK} textFill={INK} size={12.5} script={false}>
          {t(
            "3 resonances: 250,350,450 Hz (v=340 m/s) → open/closed? f1? L?",
            "3 resonances: 250,350,450 Hz (v=340 m/s) → open/closed? f1? L?"
          )}
        </Chip>
      </Fade>

      {/* beat 1 — the spectrum */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 150 300 L 950 300 M 300 293 L 300 307 M 550 293 L 550 307 M 800 293 L 800 307" stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <>
          <T x={300} y={325} size={13} fill={INK}>250</T>
          <T x={550} y={325} size={13} fill={INK}>350</T>
          <T x={800} y={325} size={13} fill={INK}>450</T>
        </>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.5)} d={doubleArrowH(300, 550, 270)} stroke={AMBER_DARK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.0)}>
        <T x={425} y={258} size={12} fill={AMBER_DARK}>100</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.3)} d={doubleArrowH(550, 800, 270)} stroke={AMBER_DARK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={675} y={258} size={12} fill={AMBER_DARK}>100</T>
      </Fade>

      {/* beat 2 — the problem hinges on the gap */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={355} size={13} fill={MUTED} script>
          {t("→ the whole problem hinges on this gap", "→ us gap=100 ko interpret karne pe tika")}
        </T>
      </Fade>

      {/* beat 3 — two hypotheses */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={200} y={380} w={220} h={36} fill="#fff" stroke={INK} textFill={INK} size={14} script={false}>
          OPEN: gap = f1
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <Chip x={450} y={380} w={240} h={36} fill="#fff" stroke={INK} textFill={INK} size={14} script={false}>
          CLOSED: gap = 2f1
        </Chip>
      </Fade>

      {/* beat 4 — test open, rule it out */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d={crossD(200, 380, 220, 36)} stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <T x={60} y={435} size={12} fill={RED} anchor="start">
          {t("open test: f1=100 → 250/100=2.5 ✗ not whole!", "open test: f1=100 → 250/100=2.5 ✗ whole nahi!")}
        </T>
      </Fade>

      {/* beat 5 — closed confirmed */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={60} y={460} size={12} fill={GREEN} anchor="start">
          {t(
            "closed: 2f1=100 → f1=50Hz ✓ (250,350,450 = 5th,7th,9th, all odd!)",
            "closed: 2f1=100 → f1=50Hz ✓ (250,350,450 = 5th,7th,9th, sab odd!)"
          )}
        </T>
      </Fade>

      {/* beat 6 — the length */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={60} y={485} size={13} fill={INK} anchor="start">
          L = v/4f1 = 340/200 = 1.7 m
        </T>
      </Fade>

      {/* beat 7 — the verdict */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={300} y={510} w={480} h={54} fill={GREEN} textFill="#fff" size={18} script={false}>
          CLOSED pipe · f1=50Hz · L=1.7m
        </Chip>
      </Fade>
    </Scene>
  );
}
