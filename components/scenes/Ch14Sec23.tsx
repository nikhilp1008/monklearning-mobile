/**
 * Ch14 · Section 23 — "Worked example: a stretched wire"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.16, 21.83, 27.29, 36.28, 42.7, 49.76, 58.75]):
 *  0 hook badge + question: find fundamental + first 2 overtones
 *  1 the figure: 1 loop, 2 loops, 3 loops (all harmonics survive)
 *  2 data: L=0.5 m, v=200 m/s
 *  3 fundamental formula: f1=v/2L
 *  4 compute: f1=200/(2×0.5)=200 Hz
 *  5 rule: string = ALL harmonics → next integer multiples
 *  6 f2=2×200=400 Hz, f3=3×200=600 Hz
 *  7 vocab + final: 200 Hz · 400 Hz · 600 Hz
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | badge chip (13)               | Chip  | x90..370  y100..132
 *  b0 | question chip (h34)           | Chip  | x400..720 y100..134
 *  b1 | 3 mode envelopes               | Draw  | x150..620 y186..214
 *  b1 | "1/2/3 loop(s)" labels (12)   | T mid | x205/385/565 bl228   y217..231
 *  b2 | data chip (h36)               | Chip  | x400..680 y285..321
 *  b3 | "f1=v/2L" (16)                | T st  | x60 bl350             y338..355
 *  b4 | compute chip (h40)            | Chip  | x60..320 y365..405
 *  b5 | rule (13)                     | T st  | x60 bl430             y418..435
 *  b6 | "f2=2×200=400Hz" chip (h38)   | Chip  | x60..280  y450..488
 *  b6 | "f3=3×200=600Hz" chip (h38)   | Chip  | x300..520 y450..488
 *  b7 | vocab (13)                    | T mid | x540 bl515            y502..519
 *  b7 | final chip (h50,s18)          | Chip  | x300..780 y535..585
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

function loopEnvelopeD(x1: number, baseline: number, amp: number, loops: number, width: number): string {
  const N = 60;
  let d = "";
  for (let i = 0; i <= N; i++) {
    const u = i / N;
    const y = baseline - amp * Math.abs(Math.sin(Math.PI * loops * u));
    const x = x1 + width * u;
    d += `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)} `;
  }
  return d;
}

export default function Ch14Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={26} fill={RED} script>
          {t("worked example: a stretched wire", "worked example: stretched wire")}
        </T>
      </Fade>

      {/* beat 0 — hook + question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={90} y={100} w={280} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13}>
          {t("★ clean board warm-up on harmonics", "★ harmonics pe saaf board warm-up")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 1.0)}>
        <Chip x={400} y={100} w={320} h={34} fill="#fff" stroke={INK} textFill={INK} size={13} script={false}>
          {t("find: fundamental + first 2 overtones", "find karo: fundamental + first 2 overtones")}
        </Chip>
      </Fade>

      {/* beat 1 — the figure: 1, 2, 3 loops */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={loopEnvelopeD(150, 200, 14, 1, 110)} stroke={INK} sw={1.8} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={205} y={228} size={12} fill={MUTED}>
          1 loop
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d={loopEnvelopeD(330, 200, 14, 2, 110)} stroke={INK} sw={1.8} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.9)}>
        <T x={385} y={228} size={12} fill={MUTED}>
          2 loops
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.3)} d={loopEnvelopeD(510, 200, 14, 3, 110)} stroke={INK} sw={1.8} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.9)}>
        <T x={565} y={228} size={12} fill={MUTED}>
          3 loops
        </T>
      </Fade>

      {/* beat 2 — the data */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <Chip x={400} y={285} w={280} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          L = 0.5 m, v = 200 m/s
        </Chip>
      </Fade>

      {/* beat 3 — the fundamental formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={60} y={350} size={16} fill={INK} anchor="start">
          f₁ = v/2L
        </T>
      </Fade>

      {/* beat 4 — compute the fundamental */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={60} y={365} w={260} h={40} fill={GREEN} textFill="#fff" size={16} script={false}>
          f₁ = 200/(2×0.5) = 200 Hz
        </Chip>
      </Fade>

      {/* beat 5 — the overtone rule */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={60} y={430} size={13} fill={INK} anchor="start">
          {t(
            "string = ALL harmonics → next integer multiples",
            "string = SAARE harmonics → agle integer multiples"
          )}
        </T>
      </Fade>

      {/* beat 6 — the overtones */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={60} y={450} w={220} h={38} fill={GREEN} textFill="#fff" size={15} script={false}>
          f₂ = 2×200 = 400 Hz
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <Chip x={300} y={450} w={220} h={38} fill={GREEN} textFill="#fff" size={15} script={false}>
          f₃ = 3×200 = 600 Hz
        </Chip>
      </Fade>

      {/* beat 7 — vocabulary + final answer */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={515} size={13} fill={INK} script>
          {t(
            "1st overtone = 2nd harmonic, 2nd overtone = 3rd harmonic",
            "1st overtone = 2nd harmonic, 2nd overtone = 3rd harmonic"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <Chip x={300} y={535} w={480} h={50} fill={GREEN} textFill="#fff" size={18} script={false}>
          200 Hz · 400 Hz · 600 Hz
        </Chip>
      </Fade>
    </Scene>
  );
}
