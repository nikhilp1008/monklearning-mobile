/**
 * Ch10 · Section 37 — "Pitfalls and pro-tips for heat transfer"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * Closes Subtopic 3 (Heat Transfer: Conduction, Convection). Numbered-
 * badge pitfall closer + amber pro-tip box, matching the house motif.
 *
 * Beats (en [0,4.78,16.73,32.68,48.81,64.09,65.09]):
 *  0 close: the traps that quietly drain marks
 *  1 pitfall 1: forget A~r² — doubling r quadruples A and H
 *  2 pitfall 2: confusing series (end to end) with parallel (side by side)
 *  3 pitfall 3: ΔT is NOT shared equally in series — H is shared, ΔT ∝ R
 *  4 pitfall 4: the conduction formula needs steady state, not transient
 *  5 pro-tip: treat every problem as a DC circuit — R=L/KA, redraw
 *  6 mnemonic: solids conduct, fluids convect, vacuum only radiates
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

export default function Ch10Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={24} fill={INK} script>
          {t("pitfalls and pro-tips for heat transfer", "heat transfer ke pitfalls aur pro-tips")}
        </T>
      </Fade>

      {/* beat 1 — pitfall 1 */}
      <Badge n={1} cy={100} on={beat >= 1} delay={dl(1, 0.2)} />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={104} y={106} size={14} fill={RED} script anchor="start">
          {t(
            "forget A~r² — doubling the radius quadruples A and H",
            "A~r² bhoolna — radius double karo, A aur H 4x ho jaate"
          )}
        </T>
      </Fade>

      {/* beat 2 — pitfall 2 */}
      <Badge n={2} cy={150} on={beat >= 2} delay={dl(2, 0.2)} />
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={104} y={156} size={14} fill={RED} script anchor="start">
          {t(
            "series (end to end) vs parallel (side by side) — don't confuse them",
            "series (ek ke baad ek) vs parallel (saath saath) — mat ghulao"
          )}
        </T>
      </Fade>

      {/* beat 3 — pitfall 3 */}
      <Badge n={3} cy={200} on={beat >= 3} delay={dl(3, 0.2)} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={104} y={206} size={14} fill={RED} script anchor="start">
          {t(
            "ΔT is NOT shared equally in series — H is shared, ΔT divides ∝ R",
            "series mein ΔT barabar nahi bantta — H barabar, ΔT ∝ R"
          )}
        </T>
      </Fade>

      {/* beat 4 — pitfall 4 */}
      <Badge n={4} cy={250} on={beat >= 4} delay={dl(4, 0.2)} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={104} y={256} size={14} fill={RED} script anchor="start">
          {t(
            "the formula needs steady state — not while the rod is still warming",
            "formula ko steady state chahiye — jab tak rod garam ho raha, nahi"
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
            "treat every problem as a DC circuit — R=L/KA, redraw, junction T falls out as a voltage drop",
            "har problem ko DC circuit maano — R=L/KA, redraw karo, junction T voltage drop jaisa nikalta"
          )}
        </T>
      </Fade>

      {/* beat 6 — the mnemonic */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={400} size={14} fill={GREEN} script weight={700} anchor="middle">
          {t(
            "solids conduct, fluids convect, vacuum only radiates",
            "solids conduct karte, fluids convect, vacuum sirf radiate"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
