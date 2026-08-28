/**
 * Ch10 · Section 72 — "Pitfalls and pro-tips for change of state"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * Closes Subtopic 6 (Phase Transitions) AND the whole chapter's
 * teaching. Five pitfalls this time (matches Sec61's pattern).
 * Note: hi beats 1-6 are exactly 1s apart, so all delays stay ≤ ~0.3s.
 *
 * Beats (en [0,1,14.74,26.77,42.64,56.64,71.14]):
 *  0 close: change of state, and the whole chapter, with its traps
 *  1 pitfall 1: not every melting point rises with P — water's the exception
 *  2 pitfall 2: regelation is not cutting — melt-under-P, refreeze-after
 *  3 pitfall 3: triple point ≠ ice/boiling point — a specific low-P point
 *  4 pitfall 4: a gas can't always be liquefied — none above critical T
 *  5 pitfall 5: don't mix up evaporation (surface, any T) and boiling (bulk, BP)
 *  6 pro-tip: solve every conceptual Q on the phase map
 *
 * Layout plan (badge cx76 r15, matches Sec61):
 *  b1 | badge cy90 · text st x104 bl96
 *  b2 | badge cy135 · text st x104 bl141
 *  b3 | badge cy180 · text st x104 bl186
 *  b4 | badge cy225 · text st x104 bl231
 *  b5 | badge cy270 · text st x104 bl276
 *  b6 | box x70..1010 y305..375 · header mid x540 bl330 · content mid x540 bl358
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

export default function Ch10Sec72({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={20} fill={INK} script>
          {t("pitfalls and pro-tips for change of state", "change of state ke pitfalls aur pro-tips")}
        </T>
      </Fade>

      {/* beat 1 — pitfall 1: not every melting point rises with P */}
      <Badge n={1} cy={90} on={beat >= 1} delay={dl(1, 0.15)} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={104} y={96} size={13} fill={RED} script anchor="start">
          {t(
            "not every melting point rises with pressure — water's the exception",
            "har melting point pressure se nahi badhta — paani exception hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — pitfall 2: regelation is not cutting */}
      <Badge n={2} cy={135} on={beat >= 2} delay={dl(2, 0.15)} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={104} y={141} size={13} fill={RED} script anchor="start">
          {t(
            "regelation is not cutting — melts under pressure, refreezes after",
            "regelation kaatna nahi — pressure se pighalta, baad mein jamta"
          )}
        </T>
      </Fade>

      {/* beat 3 — pitfall 3: triple point vs ice/boiling point */}
      <Badge n={3} cy={180} on={beat >= 3} delay={dl(3, 0.15)} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={104} y={186} size={13} fill={RED} script anchor="start">
          {t(
            "triple point ≠ ice or boiling point — a specific low-pressure point",
            "triple point ≠ ice ya boiling point — ek specific low-pressure point"
          )}
        </T>
      </Fade>

      {/* beat 4 — pitfall 4: gas can't always be liquefied */}
      <Badge n={4} cy={225} on={beat >= 4} delay={dl(4, 0.15)} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={104} y={231} size={13} fill={RED} script anchor="start">
          {t(
            "a gas can't always be liquefied — none exists above critical T",
            "gas hamesha liquefy nahi ho sakta — critical T ke upar nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — pitfall 5: evaporation vs boiling */}
      <Badge n={5} cy={270} on={beat >= 5} delay={dl(5, 0.15)} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={104} y={276} size={13} fill={RED} script anchor="start">
          {t(
            "don't mix up evaporation (surface, any T) and boiling (bulk, at BP)",
            "evaporation (surface, any T) aur boiling (bulk, BP) ko mat mix karo"
          )}
        </T>
      </Fade>

      {/* beat 6 — pro-tip box */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M70 305 h940 v70 h-940 z" stroke={AMBER} sw={2.4} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={540} y={330} size={15} fill={INK} script weight={700} anchor="middle">
          {t("pro-tip:", "pro-tip:")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.3)}>
        <T x={540} y={358} size={13} fill={AMBER_DARK} script anchor="middle">
          {t(
            "sketch a P-T diagram, mark triple/critical points, slide along constant-P or T",
            "P-T diagram banao, triple/critical points maark karo, constant-P ya T par slide"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
