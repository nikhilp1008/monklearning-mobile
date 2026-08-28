/**
 * Ch10 · Section 49 — "Pitfalls and pro-tips for radiation"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * Closes Subtopic 4 (Radiation and Cooling Laws). Numbered-badge pitfall
 * closer + amber pro-tip box, matching the house motif.
 *
 * Beats (en [0,4.95,18.86,33.54,47.36,48.36,49.36] — beats 4-6 exactly
 * 1s apart, so those Fade delays stay ≤ ~0.3s):
 *  0 close: the traps that cost the most marks
 *  1 pitfall 1: always convert to kelvin — T⁴ amplifies a stray Celsius
 *  2 pitfall 2: don't drop the surroundings term — net=eσA(T⁴−T₀⁴)
 *  3 pitfall 3: emissive power (W/m²) ≠ emissivity (dimensionless 0-1)
 *  4 pitfall 4: Newton's cooling is for a SMALL excess only
 *  5 pro-tip: by-what-factor questions — skip constants, use kelvin ratios
 *  6 mnemonics: Stefan=T⁴ in kelvin; Wien=hot is blue; black body absorbs
 *    all, emits all
 *
 * Layout plan (badge cx76 r15, Kalam bl−1.3s..+0.5s):
 *  b1 | badge cy100 · text st x104 bl106
 *  b2 | badge cy150 · text st x104 bl156
 *  b3 | badge cy200 · text st x104 bl206
 *  b4 | badge cy250 · text st x104 bl256
 *  b5 | box x70..1010 y285..355 · header mid x540 bl310 · content mid x540 bl338
 *  b6 | mnemonic mid x540 bl400
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
  INK,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cy, on, delay }: { n: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw
        on={on}
        delay={delay}
        d={`M 61 ${cy} A 15 15 0 1 1 91 ${cy} A 15 15 0 1 1 61 ${cy}`}
        stroke={RED}
        sw={2.2}
        dur={0.35}
      />
      <Fade on={on} delay={delay + 0.25}>
        <T x={76} y={cy + 5.5} size={15} fill={RED} weight={800}>
          {n}
        </T>
      </Fade>
    </G>
  );
}

export default function Ch10Sec49({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={24} fill={INK} script>
          {t("pitfalls and pro-tips for radiation", "radiation ke pitfalls aur pro-tips")}
        </T>
      </Fade>

      {/* beat 1 — pitfall 1 */}
      <Badge n={1} cy={100} on={beat >= 1} delay={dl(1, 0.15)} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={104} y={106} size={14} fill={RED} script anchor="start">
          {t(
            "always convert to kelvin — T⁴ amplifies a stray Celsius wildly",
            "hamesha kelvin mein convert karo — T⁴ Celsius ki galti badhaata"
          )}
        </T>
      </Fade>

      {/* beat 2 — pitfall 2 */}
      <Badge n={2} cy={150} on={beat >= 2} delay={dl(2, 0.15)} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={104} y={156} size={14} fill={RED} script anchor="start">
          {t(
            "don't drop the surroundings term — net = eσA(T⁴−T₀⁴)",
            "surroundings term mat chhodo — net = eσA(T⁴−T₀⁴)"
          )}
        </T>
      </Fade>

      {/* beat 3 — pitfall 3 */}
      <Badge n={3} cy={200} on={beat >= 3} delay={dl(3, 0.15)} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={104} y={206} size={14} fill={RED} script anchor="start">
          {t(
            "emissive power (W/m²) ≠ emissivity (dimensionless, 0 to 1)",
            "emissive power (W/m²) ≠ emissivity (dimensionless, 0 se 1)"
          )}
        </T>
      </Fade>

      {/* beat 4 — pitfall 4 */}
      <Badge n={4} cy={250} on={beat >= 4} delay={dl(4, 0.15)} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={104} y={256} size={14} fill={RED} script anchor="start">
          {t(
            "Newton's cooling is for a SMALL excess only — large diff needs T⁴",
            "Newton's cooling sirf CHHOTE excess ke liye — bada diff T⁴ maangta"
          )}
        </T>
      </Fade>

      {/* beat 5 — pro-tip box */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d="M70 285 h940 v70 h-940 z" stroke={AMBER} sw={2.4} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={540} y={310} size={15} fill={INK} script weight={700} anchor="middle">
          {t("pro-tip:", "pro-tip:")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={540} y={340} size={13} fill={AMBER_DARK} script anchor="middle">
          {t(
            "by-what-factor? skip constants — power ratio = temperature ratio⁴",
            "kitne factor se? constants chhodo — power ratio = temperature ratio⁴"
          )}
        </T>
      </Fade>

      {/* beat 6 — the mnemonics */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={400} size={13} fill={GREEN} script weight={700} anchor="middle">
          {t(
            "Stefan = T⁴ in kelvin; Wien = hot is blue; black body absorbs all, emits all",
            "Stefan = T⁴ kelvin mein; Wien = garam matlab blue; black body sab leta, sab deta"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
