/**
 * Ch10 · Section 18 — "The reliable framework: never assume the final state"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,8.36,21.76,35.75,51.11,61.27,76.54], hi [0,8.28,9.28,
 * 10.28,11.28,12.28,13.28] — hi beats 2-5 exactly 1s apart, so those
 * Fade delays stay ≤ ~0.3s):
 *  0 hook: no grand derivation — one golden rule tames it
 *  1 the rule: list every body — mass, specific heat, latent heats, T₀
 *  2 split into warm legs + phase-change legs — e.g. 5 legs, -10°→110°
 *  3 the whole curve: ice warms, melts, water warms, boils, steam warms
 *  4 on the plateaus, mcΔT is the #1 mistake — temp is frozen there
 *  5 budget method: compute heat hot delivers vs cold needs, per leg
 *  6 sanity check: final T sits between the cold and hot starting T
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | hook mid x540 bl90
 *  b1 | rule mid x540 bl122
 *  b2 | split mid x540 bl155
 *  b3 | curve x180..820 y175..250 (5 segments)
 *  b4 | ring1 cx300 cy220 · ring2 cx650 cy190 · warning mid x540 bl290
 *  b5 | budget mid x540 bl325
 *  b6 | sanity mid x540 bl362
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  ringD,
  INK,
  INK_LIGHT,
  AMBER,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch10Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={21} fill={INK} script>
          {t("the reliable framework — never assume the final state", "reliable framework — final state kabhi guess mat karo")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.15)}>
        <T x={540} y={90} size={12} fill={INK} script anchor="middle">
          {t("no grand derivation — one golden rule tames it", "koi badi derivation nahi — ek golden rule kaafi")}
        </T>
      </Fade>

      {/* beat 1 — the rule */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={122} size={12} fill={INK} script anchor="middle">
          {t(
            "list every body — mass, specific heat, latent heats, starting T",
            "har body list karo — mass, specific heat, latent heats, starting T"
          )}
        </T>
      </Fade>

      {/* beat 2 — split into legs */}
      <Fade on={beat >= 2} delay={dl(2, 0.15)}>
        <T x={540} y={155} size={12} fill={INK} script anchor="middle">
          {t(
            "split into warm legs + phase-change legs — ice(-10°)→steam(110°) = 5 legs",
            "warm legs + phase-change legs mein todo — ice(-10°)→steam(110°) = 5 legs"
          )}
        </T>
      </Fade>

      {/* beat 3 — the whole curve */}
      <Draw on={beat >= 3} delay={dl(3, 0.15)} d="M180 250 h640 M180 175 v75" stroke={INK_LIGHT} sw={1.6} dur={0.4} />
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.4)}
        d="M180 245 L260 220 L340 220 L560 190 L740 190 L820 175"
        stroke={INK}
        sw={2.4}
        dur={0.8}
      />

      {/* beat 4 — mcΔT on the plateaus is the mistake */}
      <Draw on={beat >= 4} delay={dl(4, 0.15)} d={ringD(300, 220, 45, 15)} stroke={AMBER} sw={1.8} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 0.4)} d={ringD(650, 190, 95, 15)} stroke={AMBER} sw={1.8} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.75)}>
        <T x={540} y={290} size={14} fill={RED} script weight={700} anchor="middle">
          {t("mcΔT here = the #1 mistake — temp is frozen on a plateau", "mcΔT yahan = #1 galti — plateau pe temp frozen hai")}
        </T>
      </Fade>

      {/* beat 5 — the budget method */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={325} size={13} fill={INK} script anchor="middle">
          {t(
            "budget method: heat hot side delivers vs heat cold side needs, leg by leg",
            "budget method: garam kitna deta vs thanda kitna maangta, leg by leg"
          )}
        </T>
      </Fade>

      {/* beat 6 — the sanity check */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={362} size={13} fill={GREEN} script weight={700} anchor="middle">
          {t(
            "sanity check: final T must sit between the cold and hot starting T",
            "sanity check: final T thande aur garam starting T ke beech hi hoga"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
