/**
 * Ch12 · Section 18 — Pitfalls and pro-tips: ideal gas and gas laws
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 20.29, 36.93, 52.8, 74.98, 94.7]):
 *  0 title + underline · 1-4 four traps, each a drawn ✗ + red line (kelvin
 *    sin, mass≠moles, Charles vs pressure law, R-units match) · 5 pro-tip
 *    box: skip n, use P1V1/T1=P2V2/T2 · 6 bridge to next subtopic
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 25, red)          | T mid | x260..820 y37..80 (bl68)
 *  b0 | underline                        | Draw  | y92 x330..750
 *  b1..b4 | ✗ mark (crossD)             | Draw  | x55..77 y[100,152,204,256]
 *  b1..b4 | trap line (14, red, start)  | T st  | x95.. y[118,170,222,274]
 *  b5 | pro-tip box                      | Draw  | x120..960 y318..372
 *  b5 | pro-tip line (15, ink, bold)    | T mid | x540 y350
 *  b6 | bridge (script 15, amber_dark)  | T mid | x540 y415
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  crossD,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const TRAPS: [number, string, string][] = [
  [118, "✗ the kelvin sin — Celsius? always +273; only T must be absolute", "✗ kelvin sin — Celsius? hamesha +273; sirf T absolute hona chahiye"],
  [170, "✗ mass ≠ moles — pressure, Dalton, Avogadro all care about molecule count", "✗ mass ≠ moles — pressure, Dalton, Avogadro sab molecule count chahte"],
  [222, "✗ Charles (V/T, P fixed) ≠ pressure law (P/T, V fixed) — tag the constant first", "✗ Charles (V/T, P fixed) ≠ pressure law (P/T, V fixed) — pehle constant tag karo"],
  [274, "✗ match R to units — 8.314 needs Pa & m³; 0.0821 needs L & atm", "✗ R ko units se match karo — 8.314 ⇒ Pa & m³; 0.0821 ⇒ L & atm"],
];

export default function Ch12Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={25} fill={RED} script>
          {t("pitfalls and pro-tips: ideal gas and gas laws", "pitfalls aur pro-tip: ideal gas & gas laws")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 330 92 C 420 88, 660 96, 750 90" stroke={RED} sw={2.4} dur={0.7} />

      {TRAPS.map(([y, eTxt, hTxt], i) => {
        const k = i + 1;
        return (
          <G key={y}>
            <Draw on={beat >= k} delay={dl(k, 0.2)} d={crossD(55, y - 20, 22, 26)} stroke={RED} sw={2.6} dur={0.5} />
            <Fade on={beat >= k} delay={dl(k, 0.9)}>
              <T x={95} y={y} size={14} fill={RED} anchor="start" script>
                {t(eTxt, hTxt)}
              </T>
            </Fade>
          </G>
        );
      })}

      {/* beat 5 — pro-tip */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.2)}
        d="M 120 318 h 840 q 10 0 10 10 v 34 q 0 10 -10 10 h -840 q -10 0 -10 -10 v -34 q 0 -10 10 -10"
        stroke={GREEN}
        sw={2.4}
        dur={0.9}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={540} y={350} size={15} fill={INK} weight={700}>
          PRO-TIP: fixed-mass before/after ⇒ skip n, use P₁V₁/T₁ = P₂V₂/T₂
        </T>
      </Fade>

      {/* beat 6 — bridge to next subtopic */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={415} size={15} fill={AMBER_DARK} script>
          {t(
            "next: we derive PV = nRT itself, from molecules hitting the walls",
            "next: PV = nRT ko khud derive karenge, walls se takrate molecules se"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
