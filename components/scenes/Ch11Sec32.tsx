/**
 * Ch11 · Section 32 — "Get Cv, Cp, γ into reflex memory"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 32 not yet uploaded, verify-scene.mjs could
 * not be run. Geometry is an EXACT reuse of the already-PASS Sec8/15/24
 * 2×2 pitfall-grid layout (only content differs). Re-run once audio lands.
 *
 * Beats (7): 0 hook · 1 pitfall1 (Cp for ΔU) · 2 pitfall2 (f=7 wrongly) ·
 *  3 pitfall3 (specific vs molar) · 4 pitfall4 (Mayer misapplied) ·
 *  5 habit1 (reflex identities) · 6 habit2 (jump via f).
 *
 * Layout plan — identical to Sec8/15/24.
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, RED, GREEN, CREAM,
  Scene,
} from '@/components/scenes/kit';

const PITFALLS: [number, number, string, string, string, string][] = [
  [60, 140, "using Cp for ΔU", "ΔU always uses Cv, every process", "Cp only for heat at const P", "ΔU ke liye Cp use karna"],
  [560, 140, "diatomic f=7 wrongly", "vibration frozen at ordinary T", "f=5 unless high-T stated", "diatomic f=7 galat maanna"],
  [60, 290, "specific vs molar mixed up", "specific = per kg", "molar = per mole (differ by M)", "specific vs molar ka confusion"],
  [560, 290, "Mayer misapplied", "per mole, IDEAL GAS only", "not for solids/liquids/real gas", "Mayer galat jagah use karna"],
];

export default function Ch11Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t("get Cv, Cp, γ into reflex memory", "Cv, Cp, γ reflex memory mein daalo")}
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
              <T x={x + 70} y={cy + 6} size={14} fill={INK} weight={800} anchor="start" script={false}>
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

      {/* beat 5 — speed habit 1: reflex identities */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M 118 440 h 414 q 8 0 8 8 v 54 q 0 8 -8 8 h -414 q -8 0 -8 -8 v -54 q 0 -8 8 -8" stroke={GREEN} sw={2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={325} y={462} size={13} fill={GREEN} script={false}>
          {t("reflex identities", "reflex identities")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={325} y={492} size={13} fill={INK} weight={800} script={false}>
          Cv=R/(γ−1), Cp=γR/(γ−1)
        </T>
      </Fade>

      {/* beat 6 — speed habit 2: jump via f */}
      <Draw on={beat >= 6} delay={dl(6, 0.1)} d="M 548 440 h 414 q 8 0 8 8 v 54 q 0 8 -8 8 h -414 q -8 0 -8 -8 v -54 q 0 -8 8 -8" stroke={GREEN} sw={2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={755} y={462} size={13} fill={GREEN} script={false}>
          {t("jump via f", "f se seedha jump")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={755} y={492} size={12} fill={INK} weight={800} script={false}>
          {t("mono 3/2,5/2 · di 5/2,7/2 · poly 3,4", "mono 3/2,5/2 · di 5/2,7/2 · poly 3,4")}
        </T>
      </Fade>
    </Scene>
  );
}
