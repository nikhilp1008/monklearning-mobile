/**
 * Ch12 · Section 27 — Pitfalls and pro-tips: gas pressure
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 3, 14.86, 31.16, 48.82]):
 *  0 title + underline · 1-5 five traps, each a drawn ✗ + red line (m vs
 *    sample mass, ⅓=isotropy only, P∝v² not v, 2mvx not mvx, pressure is a
 *    statistical average) · 6 pro-tip: given P&V, E=(3/2)PV in one line
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 25, red)          | T mid | x260..820 y37..80 (bl68)
 *  b0 | underline                        | Draw  | y92 x330..750
 *  b1..b5 | ✗ mark (crossD)             | Draw  | x55..77 y[100,152,204,256,308]
 *  b1..b5 | trap line (14, red, start)  | T st  | x95.. y[118,170,222,274,326]
 *  b6 | pro-tip box                      | Draw  | x140..940 y352..406
 *  b6 | pro-tip line (15, ink, bold)    | T mid | x540 y384
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
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const TRAPS: [number, string, string][] = [
  [118, "✗ m ≠ sample mass — m is ONE molecule; mixing by N is the #1 error", "✗ m ≠ sample mass — m ek molecule hai; N se mix karna #1 error"],
  [170, "✗ don't forget ⅓ = pure isotropy — directed motion (1D)? drop it", "✗ ⅓ mat bhoolo = pure isotropy — directed motion (1D)? hata do"],
  [222, "✗ P, KE ∝ v²rms, NOT vrms — always square the speed factor first", "✗ P, KE ∝ v²rms, NOT vrms — pehle speed factor ko square karo"],
  [274, "✗ elastic bounce transfers 2mvx, not mvx — halving this is classic", "✗ elastic bounce 2mvx deta, mvx nahi — isko half karna classic slip"],
  [326, "✗ pressure = statistical average — meaningless for a single molecule", "✗ pressure = statistical average — ek akele molecule ke liye meaningless"],
];

export default function Ch12Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={25} fill={RED} script>
          {t("pitfalls and pro-tips: gas pressure", "pitfalls aur pro-tip: gas pressure")}
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

      {/* beat 6 — pro-tip */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.2)}
        d="M 140 352 h 800 q 10 0 10 10 v 34 q 0 10 -10 10 h -800 q -10 0 -10 -10 v -34 q 0 -10 10 -10"
        stroke={GREEN}
        sw={2.4}
        dur={0.9}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={540} y={384} size={15} fill={INK} weight={700}>
          {t(
            "PRO-TIP: given P & V ⇒ E_total = (3/2)PV, one line not three steps",
            "PRO-TIP: P & V diye ⇒ E_total = (3/2)PV, ek line teen steps nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
