/**
 * Ch14 · Section 24 — "Worked example: closed pipe first overtone"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.95, 28.77, 34.0, 49.26, 62.78, 70.63, 79.78]):
 *  0 hook badge + question: first overtone of a 200Hz closed pipe?
 *  1 the figure: fundamental (¼λ), the 2-loop pattern (NOT allowed), next allowed (¾λ)
 *  2 (deceptively simple — that's the danger, folded into b1's labels)
 *  3 TRAP: reflexive ×2 → 400 Hz — WRONG (even harmonics don't exist)
 *  4 FIX: closed pipe = ODD harmonics only (f, 3f, 5f...)
 *  5 first overtone = 3×fundamental = 3×200 = 600 Hz
 *  6 burn-in: leapfrogs to 3f1, skips 2f1 entirely
 *  7 final: 600 Hz, not 400 Hz
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | badge chip (13)               | Chip  | x90..390  y100..132
 *  b0 | question chip (h34)           | Chip  | x420..720 y100..134
 *  b1 | tube A + curve (fundamental)  | Draw  | x150..350 y300..340
 *  b1 | "fundamental" (12,muted)      | T mid | x250 bl365            y353..366
 *  b1 | tube B + hump (forbidden)     | Draw  | x450..650 y300..340
 *  b1 | "✗ not allowed" (12,red)      | T mid | x550 bl365            y353..366
 *  b1 | tube C + curve (1st overtone) | Draw  | x750..950 y300..340
 *  b1 | "next allowed" (12,muted)     | T mid | x850 bl365            y353..366
 *  b3 | cross-out (tube B)            | Draw  | x450..650 y285..340
 *  b3 | "✗ 400 Hz — WRONG!" (12,red)  | T mid | x550 bl390            y378..391
 *  b4 | rule (13)                     | T mid | x540 bl430            y417..432
 *  b5 | "= 3×200 = 600 Hz" (12,green) | T mid | x850 bl390            y378..391
 *  b6 | burn-in (13,red)              | T mid | x540 bl455            y442..457
 *  b7 | final chip (h50,s20)          | Chip  | x380..700 y505..555
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, crossD, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

function closedPipeWaveD(x1: number, centerline: number, amp: number, harmonic: number, width: number): string {
  const N = 60;
  let d = "";
  for (let i = 0; i <= N; i++) {
    const u = i / N;
    const y = centerline - amp * Math.abs(Math.sin((harmonic * Math.PI * u) / 2));
    const x = x1 + width * u;
    d += `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)} `;
  }
  return d;
}

export default function Ch14Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("worked example: closed pipe first overtone", "worked example: closed pipe first overtone")}
        </T>
      </Fade>

      {/* beat 0 — hook + question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={90} y={100} w={300} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13}>
          {t("★ NEET trap — catches almost everyone!", "★ NEET trap — sabko autopilot pe pakadta!")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 1.0)}>
        <Chip x={420} y={100} w={300} h={34} fill="#fff" stroke={INK} textFill={INK} size={13} script={false}>
          {t("find: first overtone (f₁=200Hz)", "find karo: first overtone (f₁=200Hz)")}
        </Chip>
      </Fade>

      {/* beat 1 — the figure: fundamental, forbidden 2-loop, next allowed */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 150 300 L 350 300 M 150 340 L 350 340 M 150 300 L 150 340" stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d={closedPipeWaveD(150, 320, 35, 1, 200)} stroke={GREEN} sw={2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={250} y={365} size={12} fill={MUTED}>
          {t("fundamental", "fundamental")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.9)} d="M 450 300 L 650 300 M 450 340 L 650 340 M 450 300 L 450 340" stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 2.5)} d="M 450 320 Q 550 285 650 320" stroke={MUTED} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={550} y={365} size={12} fill={RED}>
          {t("✗ not allowed", "✗ allowed nahi")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.6)} d="M 750 300 L 950 300 M 750 340 L 950 340 M 750 300 L 750 340" stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 4.2)} d={closedPipeWaveD(750, 320, 35, 3, 200)} stroke={GREEN} sw={2} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 5.0)}>
        <T x={850} y={365} size={12} fill={MUTED}>
          {t("next allowed", "agla allowed")}
        </T>
      </Fade>

      {/* beat 3 — the trap */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d={crossD(450, 285, 200, 55)} stroke={RED} sw={2.6} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <T x={550} y={390} size={12} fill={RED}>
          {t("✗ 400 Hz — WRONG!", "✗ 400 Hz — GALAT!")}
        </T>
      </Fade>

      {/* beat 4 — the fix */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={430} size={13} fill={INK} script>
          {t(
            "closed pipe = ODD harmonics only (f, 3f, 5f...)",
            "closed pipe = sirf ODD harmonics (f, 3f, 5f...)"
          )}
        </T>
      </Fade>

      {/* beat 5 — compute the first overtone */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={850} y={390} size={12} fill={GREEN}>
          = 3×200 = 600 Hz
        </T>
      </Fade>

      {/* beat 6 — burn this in */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={455} size={13} fill={RED} script>
          {t("leapfrogs to 3f₁, skips 2f₁ entirely!", "3f₁ pe leapfrog, 2f₁ poori tarah skip!")}
        </T>
      </Fade>

      {/* beat 7 — final answer */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={380} y={505} w={320} h={50} fill={GREEN} textFill="#fff" size={20} script={false}>
          600 Hz (not 400!)
        </Chip>
      </Fade>
    </Scene>
  );
}
