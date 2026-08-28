/**
 * Ch11 · Section 59 — "The arrow of time, made calculable — the traps"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 59 not yet uploaded, verify-scene.mjs could
 * not be run. Geometry is an EXACT reuse of the already-PASS
 * Sec8/15/24/32/38/45/53 2×2 pitfall-grid layout. Re-run once audio lands.
 *
 * Beats (7): 0 hook · 1 pitfall1 (actual heat for irreversible) ·
 *  2 pitfall2 (forgetting surroundings) · 3 pitfall3 (wrong T) ·
 *  4 pitfall4 (entropy as energy) · 5 habit1 (split & add) · 6 habit2
 *  (consistency check).
 *
 * Layout plan — identical to Sec8/15/24/32/38/45/53.
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, RED, GREEN, CREAM,
  Scene,
} from '@/components/scenes/kit';

const PITFALLS: [number, number, string, string, string, string][] = [
  [60, 140, "actual heat for irreversible ΔS", "must use a REVERSIBLE path", "same endpoints, not actual heat", "irreversible mein actual heat use karna"],
  [560, 140, "forgetting the surroundings", "2nd law ⇒ UNIVERSE's ΔS", "system's S may legitimately fall", "surroundings bhool jaana"],
  [60, 290, "wrong T in the Q/T ratio", "use kelvin AT the heat exchange", "reservoir: its own constant T", "Q/T mein galat T use karna"],
  [560, 290, "treating entropy as energy", "units = J/K, NOT J", "measures disorder, not energy", "entropy ko energy samajhna"],
];

export default function Ch11Sec59({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={70} size={20} fill={RED} script>
          {t("the arrow of time, made calculable — the traps", "time ka arrow, calculable — traps")}
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

      {/* beat 5 — speed habit 1: split and add */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 118 440 h 414 q 8 0 8 8 v 54 q 0 8 -8 8 h -414 q -8 0 -8 -8 v -54 q 0 -8 8 -8" stroke={GREEN} sw={2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={325} y={462} size={13} fill={GREEN} script={false}>
          {t("split system + surroundings", "system + surroundings alag karo")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={325} y={492} size={12} fill={INK} weight={800} script={false}>
          {t("compute each, add — negative? sign error!", "har ek compute, add karo — negative? sign error!")}
        </T>
      </Fade>

      {/* beat 6 — speed habit 2: consistency check */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 548 440 h 414 q 8 0 8 8 v 54 q 0 8 -8 8 h -414 q -8 0 -8 -8 v -54 q 0 -8 8 -8" stroke={GREEN} sw={2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={755} y={462} size={13} fill={GREEN} script={false}>
          {t("the consistency check", "consistency check")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={755} y={492} size={12} fill={INK} weight={800} script={false}>
          {t("reversible Carnot: ∮dQ/T=0 = Q₂/Q₁=T₂/T₁", "reversible Carnot: ∮dQ/T=0 = Q₂/Q₁=T₂/T₁")}
        </T>
      </Fade>
    </Scene>
  );
}
