/**
 * Ch11 · Section 45 — "The conceptual bridge to Carnot — keep it crisp"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 45 not yet uploaded, verify-scene.mjs could
 * not be run. Geometry is an EXACT reuse of the already-PASS
 * Sec8/15/24/32/38 2×2 pitfall-grid layout. Re-run once audio lands.
 *
 * Beats (7): 0 hook · 1 pitfall1 (slow=reversible) · 2 pitfall2 (bans
 *  cold→hot outright) · 3 pitfall3 (confusing the statements) ·
 *  4 pitfall4 (KP violator breaks 1st law) · 5 habit1 (sole net effect)
 *  · 6 habit2 (equivalence-proof direction).
 *
 * Layout plan — identical to Sec8/15/24/32/38.
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, RED, GREEN, CREAM,
  Scene,
} from '@/components/scenes/kit';

const PITFALLS: [number, number, string, string, string, string][] = [
  [60, 140, "slow = reversible", "quasi-static necessary, NOT sufficient", "friction/gap-flow ⇒ still irreversible", "slow = reversible maan lena"],
  [560, 140, "2nd law bans cold→hot outright", "banned only as a SOLE effect", "with work: fridge does it, legally", "cold→hot poori tarah mana samajhna"],
  [60, 290, "confusing the two statements", "Kelvin-Planck: engine (heat→work)", "Clausius: fridge (cold→hot)", "dono statements mein confusion"],
  [560, 290, "KP violator breaks 1st law", "NO — energy still conserved", "2nd law forbids what 1st permits", "KP violator 1st law todta samajhna"],
];

export default function Ch11Sec45({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={70} size={22} fill={RED} script>
          {t("the bridge to Carnot — keep the ideas crisp", "Carnot ka pul — ideas crisp rakho")}
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

      {/* beat 5 — speed habit 1: sole net effect */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 118 440 h 414 q 8 0 8 8 v 54 q 0 8 -8 8 h -414 q -8 0 -8 -8 v -54 q 0 -8 8 -8" stroke={GREEN} sw={2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={325} y={462} size={13} fill={GREEN} script={false}>
          {t("reduce to the sole net effect", "sole net effect tak reduce karo")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={325} y={492} size={12} fill={INK} weight={800} script={false}>
          {t("1 reservoir→work = KP; cold→hot, no W = Clausius", "1 reservoir→work = KP; cold→hot, no W = Clausius")}
        </T>
      </Fade>

      {/* beat 6 — speed habit 2: equivalence-proof direction */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 548 440 h 414 q 8 0 8 8 v 54 q 0 8 -8 8 h -414 q -8 0 -8 -8 v -54 q 0 -8 8 -8" stroke={GREEN} sw={2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={755} y={462} size={13} fill={GREEN} script={false}>
          {t("the equivalence-proof recipe", "equivalence-proof ka recipe")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={755} y={492} size={12} fill={INK} weight={800} script={false}>
          {t("assume violation, bolt engine, cancel cold, read off", "violation maano, engine jodo, cold cancel, padho")}
        </T>
      </Fade>
    </Scene>
  );
}
