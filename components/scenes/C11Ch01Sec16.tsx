/**
 * C11 Ch01 · Section 16 — "Counting significant figures; accuracy vs precision"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,8.7,29.7,46.85,64.86,73.31,86.7,108.72]):
 *  0 anchor: the counting rules are short — almost every mistake is zeros
 *  1 non-zero / between / leading zero rules, with examples
 *  2 trailing zeros: significant ONLY with a decimal point present
 *  3 why sci notation matters: "100" is ambiguous, notation removes doubt
 *  4 ACCURACY = close to the true value
 *  5 PRECISION = close to each other (repeats)
 *  6 three archer targets: precise-not-accurate / accurate-not-precise / both
 *  7 closing: sig figs report precision honestly
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | anchor (script14 ink)        | T mid | x540  y86
 *  b1 | 3 rule lines (13 ink)        | T mid | x540  y115/140/165
 *  b2 | 2 trailing-zero lines (13)   | T mid | x540  y195/220
 *  b3 | caption (script13 muted)     | T mid | x540  y245
 *  b4 | ACCURACY (14 bold ink)       | T mid | x540  y272
 *  b5 | PRECISION (14 bold ink)      | T mid | x540  y296
 *  b6 | target ×3 (r55/37/18)        | Draw  | c(230,390) c(540,390) c(850,390)
 *  b6 | dot clusters                 | dots  | see TARGETS
 *  b6 | label ×3 (12 ink)            | T mid | cx230/540/850 y460
 *  b7 | closing (script14 green)     | T mid | x540  y495
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

const TARGET_CX = [230, 540, 850];
const TARGET_CY = 390;
const RINGS = [55, 37, 18];

const DOTS: [number, number][][] = [
  // target 1 — precise, clustered off-center (upper right of bullseye)
  [[255, 365], [260, 372], [248, 368], [253, 378], [258, 362]],
  // target 2 — accurate on average, scattered widely around the bullseye
  [[500, 350], [580, 425], [510, 420], [570, 358], [540, 396], [498, 398]],
  // target 3 — both: tight cluster right on the bullseye
  [[845, 385], [855, 388], [848, 395], [852, 382], [850, 390]],
];

export default function C11Ch01Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={RED} script>
          {t("counting sig figs; accuracy vs precision", "sig figs ginna; accuracy vs precision")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={86} size={14} fill={INK} script>
          {t(
            "the counting rules are short — almost every mistake is zeros",
            "counting rules chhote hain — lagbhag har mistake zeros se aati hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — non-zero / between / leading zero rules */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={115} size={13} fill={INK} weight={700} script={false}>
          345 → 3 sig figs (all non-zero)
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={540} y={140} size={13} fill={INK} weight={700} script={false}>
          1.004 → 4 sig figs (zeros BETWEEN count)
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <T x={540} y={165} size={13} fill={INK} weight={700} script={false}>
          0.0025 → 2 sig figs (leading zeros DON'T count)
        </T>
      </Fade>

      {/* beat 2 — trailing zeros: only with a decimal point */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={195} size={13} fill={RED} weight={700} script={false}>
          100 → 1 sig fig (no decimal point)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={540} y={220} size={13} fill={GREEN} weight={700} script={false}>
          1.00 × 10² → 3 sig figs · 2.50 → 3 sig figs
        </T>
      </Fade>

      {/* beat 3 — why scientific notation matters */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={245} size={13} fill={MUTED} script>
          {t(
            "“100” is ambiguous (1, 2, or 3 sig figs?) — sci notation removes the doubt",
            "“100” ambiguous hai (1, 2, ya 3 sig figs?) — sci notation shaq mita deta hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — accuracy */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={272} size={14} fill={INK} weight={700} script={false}>
          {t("ACCURACY = close to the TRUE value", "ACCURACY = TRUE value ke paas")}
        </T>
      </Fade>

      {/* beat 5 — precision */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={296} size={14} fill={INK} weight={700} script={false}>
          {t("PRECISION = close to EACH OTHER (repeats)", "PRECISION = EK DOOSRE ke paas (repeats)")}
        </T>
      </Fade>

      {/* beat 6 — three archer targets */}
      {TARGET_CX.map((cx, ti) => (
        <React.Fragment key={cx}>
          {RINGS.map((r, ri) => (
            <Fade key={r} on={beat >= 6} delay={dl(6, 0.2 + ti * 0.15 + ri * 0.1)}>
              <Circle cx={cx} cy={TARGET_CY} r={r} fill="none" stroke={AMBER_DARK} strokeWidth={1.6} />
            </Fade>
          ))}
          {DOTS[ti].map(([x, y], di) => (
            <Fade key={`${x}-${y}`} on={beat >= 6} delay={dl(6, 0.8 + ti * 0.15 + di * 0.1)}>
              <Circle cx={x} cy={y} r={4.5} fill={RED} />
            </Fade>
          ))}
        </React.Fragment>
      ))}
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={230} y={462} size={12} fill={INK} script>
          {t("precise, not accurate", "precise, accurate nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={540} y={462} size={12} fill={INK} script>
          {t("accurate (avg), not precise", "accurate (avg), precise nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={850} y={462} size={12} fill={GREEN} weight={700} script={false}>
          {t("both ✓", "dono ✓")}
        </T>
      </Fade>

      {/* beat 7 — closing */}
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={540} y={498} size={14} fill={GREEN} script>
          {t(
            "significant figures report precision HONESTLY — no lucky scatter mistaken for a tight cluster",
            "significant figures precision HONESTLY batate hain — lucky scatter ko tight cluster na samjho"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
