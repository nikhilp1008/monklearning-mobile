/**
 * C11 Chemistry Ch04 · Section 21 — "The hydrogen bond: a flimsy bond that runs the living world"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 16.9, 32.51, 45.82, 60.5, 78.25, 89.86, 108.63]):
 *  0 anchor: H bonded to small, greedy, highly EN atom (F,O,N)
 *  1 build molecule 1 (H2O) with delta+/delta-
 *  2 build molecule 2 + dashed H-bond linking them
 *  3 strength: ~1/10 covalent, > van der Waals
 *  4 linked-arms analogy
 *  5 consequence: water liquid, ice floats
 *  6 DNA base pairing
 *  7 condition + guardrail: not with Cl
 *
 * Layout plan:
 *  b1-2 | two H2O + dashed H-bond | Draw/T | x230..720 y195..320
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, LonePair } from "./chem-kit";

export default function C11Ch04Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("The hydrogen bond", "Hydrogen bond")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.6)} d="M 440 80 C 480 76, 600 76, 640 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={95} size={12} fill={MUTED} script>
          {t("H bonded to a small, greedy, highly EN atom: F, O, N", "H kisi chhote, lalchi, highly EN atom se bonded: F, O, N")}
        </T>
      </Fade>

      {/* beat 1 — molecule 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={300} y={250} size={18} weight={700} fill={INK}>
          O
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={255} y={195} size={14} weight={700} fill={INK}>
          H
        </T>
        <T x={390} y={250} size={14} weight={700} fill={INK}>
          H
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d={bondD(279, 238, 262, 206)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 1} delay={dl(1, 1.0)} d={bondD(314, 250, 378, 250)} stroke={INK} sw={2} dur={0.3} />
      <LonePair on={beat >= 1} delay={dl(1, 1.3)} cx={280} cy={295} angle={0} spread={7} />
      <LonePair on={beat >= 1} delay={dl(1, 1.5)} cx={320} cy={295} angle={0} spread={7} />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={300} y={222} size={11} fill={INK}>
          δ⁻
        </T>
        <T x={392} y={228} size={11} fill={INK}>
          δ⁺
        </T>
      </Fade>

      {/* beat 2 — molecule 2 + dashed H-bond */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={650} y={250} size={18} weight={700} fill={INK}>
          O
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={695} y={205} size={14} weight={700} fill={INK}>
          H
        </T>
        <T x={695} y={295} size={14} weight={700} fill={INK}>
          H
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d={bondD(662, 238, 681, 213)} stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 1.0)} d={bondD(662, 262, 681, 287)} stroke={INK} sw={2} dur={0.3} />
      <LonePair on={beat >= 2} delay={dl(2, 1.3)} cx={650} cy={210} angle={0} spread={7} />
      <LonePair on={beat >= 2} delay={dl(2, 1.6)} cx={608} cy={250} angle={Math.PI / 2} spread={7} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.0)}
        d="M 400 250 L 420 250 M 435 250 L 455 250 M 470 250 L 490 250 M 505 250 L 525 250 M 540 250 L 560 250 M 575 250 L 592 250"
        stroke={MUTED}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <T x={497} y={320} size={11} fill={INK}>
          {t("hydrogen bond (dashed)", "hydrogen bond (dashed)")}
        </T>
      </Fade>

      {/* beat 3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={345} size={11.5} fill={INK}>
          {t(
            "~1/10 the strength of a covalent bond, but stronger than van der Waals",
            "~1/10 covalent bond ki strength, par van der Waals se stronger"
          )}
        </T>
      </Fade>

      {/* beat 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={367} size={11.5} fill={INK}>
          {t(
            "like a crowd linking arms — each link flimsy, but thousands together hold firm",
            "bheed jaise haath jode — har link kamzor, par hazaaron milkar mazboot"
          )}
        </T>
      </Fade>

      {/* beat 5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={389} size={12} weight={700} fill={INK}>
          {t("→ water is LIQUID (not gas) at room temp; ice FLOATS", "→ water room temp par LIQUID hai (gas nahi); ice FLOATS")}
        </T>
      </Fade>

      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={411} size={11} fill={INK}>
          {t(
            "same weak-but-collective bond pairs DNA's bases — unzips easily, protects the code together",
            "yahi weak-par-collective bond DNA ke bases pair karta — aasani se unzip, milkar code protect"
          )}
        </T>
      </Fade>

      {/* beat 7 — condition guardrail */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={434} size={12} weight={700} fill={RED}>
          {t(
            "needs: small + high EN (F,O,N) + lone pair — NOT Cl (too large/diffuse)",
            "chahiye: small + high EN (F,O,N) + lone pair — Cl NAHI (bahut bada/diffuse)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
