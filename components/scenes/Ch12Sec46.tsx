/**
 * Ch12 · Section 46 — Pitfalls and pro-tips: freedom, heat and collisions
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.26, 28.5, 43.69, 59.48, 74.33, 96.26]):
 *  0 title + underline · 1-4 four traps, each a drawn ✗ + red line (f=5 vs 7,
 *    vibration adds 2 not 1, kʙ vs R, mixture γ not additive) · 5 pro-tip:
 *    memorise 1.67/1.40/1.33 · 6 three closing memory phrases
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 23, red)          | T mid | x260..820 y37..78 (bl66)
 *  b0 | underline                        | Draw  | y88 x330..750
 *  b1..b4 | ✗ mark (crossD)             | Draw  | x55..77 y[106,152,198,244]
 *  b1..b4 | trap line (14, red, start)  | T st  | x95.. y[124,170,216,262]
 *  b5 | pro-tip box                      | Draw  | x140..940 y288..332
 *  b5 | pro-tip line (14, ink, bold)    | T mid | x540 y314
 *  b6 | 3 memory phrases (13, amber)    | T mid | x540 y360/384/408
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
  [124, "✗ diatomic: f=5 at room T, f=7 ONLY if vibration/high-T is stated", "✗ diatomic: room T par f=5, f=7 SIRF vibration/high-T bole to"],
  [170, "✗ one vibration mode adds 2 dof (KE+PE), not 1", "✗ ek vibration mode 2 dof jodta (KE+PE), na ki 1"],
  [216, "✗ don't swap kʙ and R — molar uses R, per-molecule uses kʙ", "✗ kʙ aur R mat badlo — molar mein R, per-molecule mein kʙ"],
  [262, "✗ mixture: average Cv by moles, then form γ — never average γ", "✗ mixture: Cv ko moles se average karo, phir γ — γ seedha nahi"],
];

export default function Ch12Sec46({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={66} size={23} fill={RED} script>
          {t("pitfalls and pro-tips: freedom, heat and collisions", "pitfalls aur pro-tip: freedom, heat, collisions")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 330 88 C 420 84, 660 92, 750 86" stroke={RED} sw={2.4} dur={0.7} />

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
        d="M 140 288 h 800 q 10 0 10 10 v 34 q 0 10 -10 10 h -800 q -10 0 -10 -10 v -34 q 0 -10 10 -10"
        stroke={GREEN}
        sw={2.4}
        dur={0.9}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={540} y={314} size={14} fill={INK} weight={700}>
          {t(
            "PRO-TIP: memorise 1.67/1.40/1.33 — sanity-check: more atoms, smaller γ",
            "PRO-TIP: 1.67/1.40/1.33 yaad rakho — more atoms, smaller γ"
          )}
        </T>
      </Fade>

      {/* beat 6 — three closing memory phrases */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={360} size={13} fill={AMBER_DARK} script>
          {t("half a kʙT to every mode", "har mode ko half kʙT")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={384} size={13} fill={AMBER_DARK} script>
          {t("more atoms, smaller γ", "more atoms, smaller γ")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.7)}>
        <T x={540} y={408} size={13} fill={AMBER_DARK} script>
          {t(
            "squeeze the gas, shrink the path, quicken the collisions",
            "gas squeeze karo, path shrink, collisions quicken"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
