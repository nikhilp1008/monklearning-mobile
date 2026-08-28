/**
 * Ch11 · Section 47 — "The four strokes of the Carnot cycle"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 47 not yet uploaded, verify-scene.mjs could
 * not be run. THE canonical Carnot P-V loop diagram — double-check by eye
 * once verified. Legend kept spatially separate from the curve (x800+)
 * to avoid label/curve collisions while unverified. Re-run once audio
 * lands.
 *
 * Beats (8): 0 hook · 1 axes + 4 points (A,B,C,D) + "follow clockwise" ·
 *  2 stroke 1: A→B isothermal exp. (T1) · 3 stroke 2: B→C adiabatic exp.
 *  · 4 stroke 3: C→D isothermal comp. (T2) · 5 stroke 4: D→A adiabatic
 *  comp. · 6 net work = enclosed area · 7 heat only on strokes 1 & 3.
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  title (script 24, red)  | T mid | x296..784 y40..76 (bl 64)
 *  b0 | hook (12,script)   | T mid | x540 y94
 *  b1 | overview (11,scr)  | T mid | x540 y120
 *  b1 | axes                | Draw  | x200 y150..420 · y420 x200..760
 *  b1 | A,B,C,D points+lbl  | Draw  | (300,200)(480,240)(600,360)(370,320)
 *  b2 | A→B curve + legend1 | Draw  | amber-dark
 *  b3 | B→C curve + legend2 | Draw  | ink
 *  b4 | C→D curve + legend3 | Draw  | amber-dark
 *  b5 | D→A curve + legend4 | Draw  | ink
 *  b6 | verdict (14,w800)   | T mid | x540 y460
 *  b7 | note (12,script)    | T mid | x540 y490
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec47({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("the four strokes of the Carnot cycle", "Carnot cycle ke chaar strokes")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={94} size={12} fill={MUTED} script>
          {t("4 reversible steps — returns exactly to start", "4 reversible steps — bilkul start par wapas")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={120} size={11} fill={MUTED} script>
          {t("follow the loop — clockwise", "loop ko follow karo — clockwise")}
        </T>
      </Fade>

      {/* beat 1 — axes and the four states */}
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d="M 200 420 V 150" stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.9)} d="M 200 420 H 760" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={192} y={155} size={12} fill={INK} anchor="end" script={false}>
          P
        </T>
        <T x={770} y={425} size={12} fill={INK} anchor="start" script={false}>
          V
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <Circle cx={300} cy={200} r={5} fill={INK} />
        <Circle cx={480} cy={240} r={5} fill={INK} />
        <Circle cx={600} cy={360} r={5} fill={INK} />
        <Circle cx={370} cy={320} r={5} fill={INK} />
        <T x={300} y={185} size={13} fill={INK} weight={800} script={false}>
          A
        </T>
        <T x={495} y={235} size={13} fill={INK} weight={800} anchor="start" script={false}>
          B
        </T>
        <T x={615} y={365} size={13} fill={INK} weight={800} anchor="start" script={false}>
          C
        </T>
        <T x={355} y={335} size={13} fill={INK} weight={800} anchor="end" script={false}>
          D
        </T>
      </Fade>

      {/* beat 2 — stroke 1: isothermal expansion at T1 */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M 300 200 Q 390 215, 480 240" stroke={AMBER_DARK} sw={2.6} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={800} y={180} size={12} fill={AMBER_DARK} anchor="start" script={false}>
          {t("1: isothermal exp. (T₁)", "1: isothermal exp. (T₁)")}
        </T>
      </Fade>

      {/* beat 3 — stroke 2: adiabatic expansion */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d="M 480 240 Q 560 290, 600 360" stroke={INK} sw={2.6} dur={0.8} />
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={800} y={215} size={12} fill={INK} anchor="start" script={false}>
          {t("2: adiabatic exp.", "2: adiabatic exp.")}
        </T>
      </Fade>

      {/* beat 4 — stroke 3: isothermal compression at T2 */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d="M 600 360 Q 485 345, 370 320" stroke={AMBER_DARK} sw={2.6} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={800} y={250} size={12} fill={AMBER_DARK} anchor="start" script={false}>
          {t("3: isothermal comp. (T₂)", "3: isothermal comp. (T₂)")}
        </T>
      </Fade>

      {/* beat 5 — stroke 4: adiabatic compression */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d="M 370 320 Q 320 260, 300 200" stroke={INK} sw={2.6} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={800} y={285} size={12} fill={INK} anchor="start" script={false}>
          {t("4: adiabatic comp.", "4: adiabatic comp.")}
        </T>
      </Fade>

      {/* beat 6 — net work */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={460} size={14} fill={INK} weight={800} script={false}>
          {t("net work = enclosed area = Q₁−Q₂", "net work = enclosed area = Q₁−Q₂")}
        </T>
      </Fade>

      {/* beat 7 — heat only on strokes 1 and 3 */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={490} size={12} fill={MUTED} script>
          {t("heat only on strokes 1 & 3 — adiabatic strokes exchange NONE", "heat sirf strokes 1 aur 3 par — adiabatic mein KUCH nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
