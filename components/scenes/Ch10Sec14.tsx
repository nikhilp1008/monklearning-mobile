/**
 * Ch10 · Section 14 — "Pitfalls and pro-tips for expansion"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * Closes Subtopic 1 (Temperature, Heat and Expansion). Numbered-badge
 * pitfall closer + amber pro-tip box, matching the Ch01Sec90 house motif.
 *
 * Beats (en [0,1,2,3,4,5,18.48] — beats 0-4 exactly 1s apart, so every
 * Fade delay in those beats stays ≤ ~0.3s):
 *  0 close: the traps that quietly cost easy marks
 *  1 pitfall 1: never add 32 to a ΔT — offset is for absolute readings
 *  2 pitfall 2: multiply α by L₀ (original length), not the final length
 *  3 pitfall 3 setup: does a hole shrink when the plate heats?
 *  4 pitfall 3 answer: NO — every empty region expands too, same α
 *  5 pitfall 4: liquid overflow uses apparent expansion, γ_app=γ_liq−3α_cont
 *  6 sanity check: solids ~1mm/m/100°C — a cm answer is a power-of-ten error
 *
 * Layout plan (badge cx76 r15, Kalam bl−1.3s..+0.5s):
 *  b1 | badge cy100 · text st x104 bl106
 *  b2 | badge cy150 · text st x104 bl156
 *  b3 | badge cy200 · text st x104 bl206
 *  b4 | answer st x124 bl240 (green, no badge)
 *  b5 | badge cy290 · text st x104 bl296
 *  b6 | box x70..1010 y340..460 · header mid x540 bl370 ·
 *       content mid x540 bl405 · warning mid x540 bl438
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

export default function Ch10Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={24} fill={INK} script>
          {t("pitfalls and pro-tips for expansion", "expansion ke pitfalls aur pro-tips")}
        </T>
      </Fade>

      {/* beat 1 — pitfall 1 */}
      <Badge n={1} cy={100} on={beat >= 1} delay={dl(1, 0.1)} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={104} y={106} size={14} fill={RED} script anchor="start">
          {t(
            "never add 32 to a ΔT — offset is for absolute readings only",
            "ΔT mein kabhi 32 mat jodo — offset sirf absolute reading ke liye"
          )}
        </T>
      </Fade>

      {/* beat 2 — pitfall 2 */}
      <Badge n={2} cy={150} on={beat >= 2} delay={dl(2, 0.1)} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={104} y={156} size={14} fill={RED} script anchor="start">
          {t(
            "multiply α by L₀, the ORIGINAL length — not the final length",
            "α ko L₀ se multiply karo, ORIGINAL length — final se nahi"
          )}
        </T>
      </Fade>

      {/* beat 3 — pitfall 3, setup */}
      <Badge n={3} cy={200} on={beat >= 3} delay={dl(3, 0.1)} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={104} y={206} size={14} fill={RED} script anchor="start">
          {t("does a hole shrink when the plate heats? watch...", "kya plate garam hone par hole sikudta hai? dekho...")}
        </T>
      </Fade>

      {/* beat 4 — pitfall 3, answer */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={124} y={240} size={13} fill={GREEN} script anchor="start">
          {t(
            "NO — a hole, cavity, or inner radius expands too (same α, treat as filled metal)",
            "NAHI — hole, cavity, inner radius bhi badhte hain (same α, filled metal maano)"
          )}
        </T>
      </Fade>

      {/* beat 5 — pitfall 4 */}
      <Badge n={4} cy={290} on={beat >= 5} delay={dl(5, 0.1)} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={104} y={296} size={14} fill={RED} script anchor="start">
          {t(
            "liquid overflow: γ_apparent = γ_liquid − 3α_container (it expands too)",
            "liquid overflow: γ_apparent = γ_liquid − 3α_container (container bhi badhta)"
          )}
        </T>
      </Fade>

      {/* beat 6 — sanity check pro-tip box */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M72 340 h936 q12 0 12 12 v96 q0 12 -12 12 h-936 q-12 0 -12 -12 v-96 q0 -12 12 -12" stroke={AMBER} sw={2.4} dur={0.8} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={370} size={15} fill={INK} script weight={700} anchor="middle">
          {t("a two-second sanity check:", "do-second ki sanity check:")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={540} y={405} size={14} fill={AMBER_DARK} script anchor="middle">
          {t(
            "solids: α~10⁻⁵ ⇒ 1m rod, 100°C rise grows only ~1mm",
            "solids: α~10⁻⁵ ⇒ 1m rod, 100°C rise se sirf ~1mm badhta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={540} y={438} size={14} fill={RED} script weight={700} anchor="middle">
          {t("a CENTIMETRE answer = power-of-ten error!", "CENTIMETRE ka answer = power-of-ten error!")}
        </T>
      </Fade>
    </Scene>
  );
}
