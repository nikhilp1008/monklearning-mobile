/**
 * C11 Ch02 · Section 33 — "de Broglie derives Bohr's quantisation"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 9.81, 22.27, 32.09, 37.72, 50.43, 60.33, 71.51]):
 *  0 anchor: "why the quantisation rule is not magic"
 *  1 explain: electron as a standing wave, guitar string in a loop
 *  2 guardrail: circumference must hold a WHOLE number of wavelengths
 *  3 formula: 2πr = nλ
 *  4 formula (high, GREEN): λ=h/mv ⇒ 2πr=n(h/mv) ⇒ mvr=nh/2π
 *  5 represent: standing wave wrapped around the orbit (drawn)
 *  6 guardrail (high): Bohr assumed it — de Broglie DERIVED it
 *  7 explain: n = count of whole electron-waves around the orbit
 *
 * Layout plan (single column + centered diagram):
 *  title (always)             | T mid | x540 y52 size14 script red
 *  b0 | anchor caption         | T mid | x540 y76            [dims@b1]
 *  b1 | standing-wave caption  | T mid | x540 y106
 *  b2 | guardrail caption      | T mid | x540 y138
 *  b3 | 2πr=nλ chip            | Chip  | x440..640 y160..190
 *  b4 | λ=h/mv chip (GREEN)    | Chip  | x310..770 y210..246
 *  b5 | dashed circle + wave   | Draw  | center (540,370) R95
 *  b5 | nucleus dot + label    | Fade/T| (540,370)
 *  b5 | "whole number…" cap    | T mid | x540 y500
 *  b6 | guardrail chip (RED)   | Chip  | x330..750 y524..558
 *  b7 | n-count caption        | T mid | x540 y582
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, RED, GREEN, CREAM, MUTED,
  Scene,
} from '@/components/scenes/kit';

function waveOrbitD(cx: number, cy: number, r: number, amp: number, bumps: number, steps = 140): string {
  let d = "";
  for (let i = 0; i <= steps; i++) {
    const theta = (i / steps) * 2 * Math.PI;
    const rr = r + amp * Math.cos(bumps * theta);
    const x = cx + rr * Math.cos(theta);
    const y = cy + rr * Math.sin(theta);
    d += `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)} `;
  }
  return d + "Z";
}

const WAVE_D = waveOrbitD(540, 370, 95, 15, 8);

export default function C11Ch02Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={14} fill={RED} script>
          {t("de Broglie derives Bohr's quantisation", "de Broglie Bohr ki quantisation derive karta hai")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={76} size={11} fill={RED} script>
          {t("why the quantisation rule is not magic", "quantisation rule magic kyun nahi hai")}
        </T>
      </Fade>

      {/* beat 1 — the electron as a standing wave */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={106} size={12} fill={RED} script>
          {t(
            "electron = standing wave wrapped around the orbit, like a guitar string in a loop",
            "electron = standing wave, orbit ke around lipti — guitar string ek loop mein"
          )}
        </T>
      </Fade>

      {/* beat 2 — guardrail: whole number of wavelengths */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={138} size={12} fill={RED} script>
          {t(
            "for the wave to survive: circumference = WHOLE number of wavelengths",
            "wave survive karne ke liye: circumference = WHOLE number wavelengths"
          )}
        </T>
      </Fade>

      {/* beat 3 — formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={440} y={160} w={200} h={30} fill={CREAM} stroke={MUTED} textFill={RED} size={16} script={false}>
          2πr = nλ
        </Chip>
      </Fade>

      {/* beat 4 — formula (high, GREEN) */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={310} y={210} w={460} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN} size={15} script={false}>
          λ = h/mv  ⇒  2πr = n(h/mv)  ⇒  mvr = nh/2π
        </Chip>
      </Fade>

      {/* beat 5 — represent: the standing wave wrapped around the orbit */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.2)}
        d="M 445 370 A 95 95 0 1 1 635 370 A 95 95 0 1 1 445 370"
        stroke={MUTED}
        sw={1.4}
        dur={0.8}
      />
      <Draw on={beat >= 5} delay={dl(5, 1)} d={WAVE_D} stroke={RED} sw={2.2} dur={1.2} />
      <Fade on={beat >= 5} delay={dl(5, 2.3)}>
        <Circle cx={540} cy={370} r={6} fill={RED} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <T x={552} y={374} size={10} fill={RED} anchor="start">
          {t("nucleus", "nucleus")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={540} y={500} size={12} fill={MUTED} script>
          {t(
            "a whole number of wavelengths fits the orbit",
            "poora number wavelengths orbit mein fit hote hain"
          )}
        </T>
      </Fade>

      {/* beat 6 — guardrail (high): Bohr assumed it, de Broglie derived it */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={330} y={524} w={420} h={34} fill={CREAM} stroke={RED} textFill={RED} size={15} script={false}>
          {t("Bohr assumed it — de Broglie DERIVED it", "Bohr ne assume kiya — de Broglie ne DERIVE kiya")}
        </Chip>
      </Fade>

      {/* beat 7 — explain: n is just a count */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={582} size={11} fill={RED} script>
          {t(
            "n = count of whole electron-waves around the orbit",
            "n = poore electron-waves ki ginti, orbit ke around"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
