/**
 * M11 Ch08 · Section 71 — "The repunit series 5 + 55 + 555 + …"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type=worked_examples.
 *
 * Math check: repunit R_r=(10^r-1)/9 (R_1=1,R_2=11,R_3=111), t_r=5R_r.
 * S_n=(5/9)Σ(10^r-1)=(5/9)[Σ10^r - n]. Σ10^r (r=1..n) is a GP sum =
 * 10(10^n-1)/9. So S_n=(5/9)[10(10^n-1)/9 - n] = 5[10(10^n-1)-9n]/81 =
 * 5[10^(n+1)-10-9n]/81 = (5/81)(10^(n+1)-9n-10) ✓.
 *
 * Beats (en [0, 11.78, 26.62, 38.83, 50.18, 60.33, 80.55]):
 *  0 title (always-on)
 *  1 text: each term is 5 times a repunit
 *  2 formula: S_n as a sum
 *  3 formula: the GP piece evaluated
 *  4 formula: S_n, closed form
 *  5 red-margin: peel off the GP piece
 *  6 closer: a GP-based special series
 *
 * Layout plan:
 *  b1 | text bl100 cx540
 *  b2 | text bl135 cx540
 *  b3 | text bl168 cx540
 *  b4 | text bl201 cx540 (bold)
 *  b5 | red bar x76 y226..296 · text bl246/286 x96
 *  b6 | text bl321 cx540
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, INK_LIGHT, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch08Sec71({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={INK} anchor="middle" script>
          {t("Find S_n for 5 + 55 + 555 + …", "5 + 55 + 555 + … ke liye S_n nikalo")}
        </T>
      </Fade>

      {/* beat 1 — repunit insight */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={15} fill={INK_LIGHT} anchor="middle" script>
          {t("each term is 5 times a repunit: t_r = 5·(10^r-1)/9", "har term ek repunit ka 5 guna hai: t_r = 5·(10^r-1)/9")}
        </T>
      </Fade>

      {/* beat 2 — S_n */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={135} size={16} fill={INK} anchor="middle">
          {"S_n = (5/9) Σ(10^r - 1)"}
        </T>
      </Fade>

      {/* beat 3 — GP piece */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={168} size={16} fill={INK} anchor="middle">
          {"= (5/9)( 10(10^n-1)/9 - n )"}
        </T>
      </Fade>

      {/* beat 4 — closed form */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={201} size={17} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"S_n = (5/81)(10^(n+1) - 9n - 10)"}
        </T>
      </Fade>

      {/* beat 5 — red-margin: peel off */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 76 226 v 70" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={96} y={246} size={15} fill={RED} anchor="start" script>
          {t("peel off the GP piece 10^r", "GP piece 10^r ko alag karo")}
        </T>
        <T x={96} y={286} size={15} fill={RED} anchor="start" script>
          {t("and the constant -1 separately", "aur constant -1 ko alag se")}
        </T>
      </Fade>

      {/* beat 6 — closer */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={321} size={14} fill={INK_LIGHT} anchor="middle" script>
          {t(
            "a GP-based special series — geometric part summed, constant part is -n",
            "ek GP-based special series — geometric part sum, constant part -n"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
