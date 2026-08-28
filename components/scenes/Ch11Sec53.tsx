/**
 * Ch11 · Section 53 — "The crown of the chapter — the absolute speed limit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 53 not yet uploaded, verify-scene.mjs could
 * not be run. Geometry is an EXACT reuse of the already-PASS
 * Sec8/15/24/32/38/45 2×2 pitfall-grid layout. Re-run once audio lands.
 *
 * Beats (7): 0 hook · 1 pitfall1 (forgetting kelvin) · 2 pitfall2 (heat
 *  on all 4 steps) · 3 pitfall3 (real engine reaches Carnot) · 4 pitfall4
 *  (raise T1 vs lower T2) · 5 habit1 (engine in one line) · 6 habit2
 *  (numerical recipe).
 *
 * Layout plan — identical to Sec8/15/24/32/38/45.
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, RED, GREEN, CREAM,
  Scene,
} from '@/components/scenes/kit';

const PITFALLS: [number, number, string, string, string, string][] = [
  [60, 140, "forgetting the kelvin conversion", "η=1−T₂/T₁ valid ONLY in kelvin", "Celsius gives nonsense, even η>1", "kelvin conversion bhool jaana"],
  [560, 140, "heat exchanged on all 4 steps", "only the 2 isotherms exchange heat", "adiabatic steps: Q=0", "sab 4 steps mein heat maan lena"],
  [60, 290, "real engine reaches Carnot η", "Carnot = reversible CEILING", "real engines fall strictly below", "real engine Carnot tak pahunch jaaye"],
  [560, 290, "raise T₁ vs lower T₂", "for equal ΔT, lowering T₂ helps MORE", "than raising T₁", "T₁ badhana vs T₂ ghatana ka confusion"],
];

export default function Ch11Sec53({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={70} size={21} fill={RED} script>
          {t("the crown of the chapter — the absolute speed limit", "chapter ka crown — absolute speed limit")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={104} size={14} fill={MUTED} script>
          {t("four traps, then two speed habits", "chaar traps, phir do speed habits")}
        </T>
      </Fade>

      {PITFALLS.map(([x, y, titleEn, sub1, sub2, titleHi], i) => {
        const bk = i + 1;
        const cx = x + 30;
        const cy = y + 25;
        return (
          <React.Fragment key={x + "-" + y}>
            <Draw
              on={beat >= bk}
              delay={dl(bk, 0.1)}
              d={`M ${x + 8} ${y} h 444 q 8 0 8 8 v 114 q 0 8 -8 8 h -444 q -8 0 -8 -8 v -114 q 0 -8 8 -8`}
              stroke={RED}
              sw={2}
              dur={0.6}
            />
            <Fade on={beat >= bk} delay={dl(bk, 0.6)}>
              <Circle cx={cx} cy={cy} r={18} fill={RED} stroke={INK} strokeWidth={1.4} />
              <T x={cx} y={cy + 6} size={17} fill={CREAM} weight={800} script={false}>
                {i + 1}
              </T>
            </Fade>
            <Fade on={beat >= bk} delay={dl(bk, 1)}>
              <T x={x + 70} y={cy + 6} size={13} fill={INK} weight={800} anchor="start" script={false}>
                {t(titleEn, titleHi)}
              </T>
            </Fade>
            <Fade on={beat >= bk} delay={dl(bk, 1.5)}>
              <T x={x + 30} y={y + 76} size={12} fill={MUTED} script anchor="start">
                {sub1}
              </T>
            </Fade>
            <Fade on={beat >= bk} delay={dl(bk, 1.9)}>
              <T x={x + 30} y={y + 100} size={12} fill={MUTED} script anchor="start">
                {sub2}
              </T>
            </Fade>
          </React.Fragment>
        );
      })}

      {/* beat 5 — speed habit 1: the engine in one line */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 118 440 h 414 q 8 0 8 8 v 54 q 0 8 -8 8 h -414 q -8 0 -8 -8 v -54 q 0 -8 8 -8" stroke={GREEN} sw={2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={325} y={462} size={13} fill={GREEN} script={false}>
          {t("the engine, in one line", "engine, ek line mein")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={325} y={492} size={12} fill={INK} weight={800} script={false}>
          {t("2 isotherms, 2 adiabats, η=1−T₂/T₁ (kelvin)", "2 isotherms, 2 adiabats, η=1−T₂/T₁ (kelvin)")}
        </T>
      </Fade>

      {/* beat 6 — speed habit 2: the numerical recipe */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 548 440 h 414 q 8 0 8 8 v 54 q 0 8 -8 8 h -414 q -8 0 -8 -8 v -54 q 0 -8 8 -8" stroke={GREEN} sw={2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={755} y={462} size={13} fill={GREEN} script={false}>
          {t("for any numerical", "kisi bhi numerical ke liye")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={755} y={492} size={12} fill={INK} weight={800} script={false}>
          {t("η from T's → W=ηQ₁ → beat the claim on the spot", "η T's se → W=ηQ₁ → claim ko turant judge karo")}
        </T>
      </Fade>
    </Scene>
  );
}
