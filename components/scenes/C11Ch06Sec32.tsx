/**
 * C11 Ch06 · Section 32 — "Catalyst: speed, not yield"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 8, 16.8, 23.4, 30.6, 39.3, 46.5]):
 *  0 title + underline
 *  1 axes + uncatalyzed energy curve (high hump)
 *  2 catalyzed curve overlaid (low hump) — same start & end points
 *  3 guardrail chip: moves NEITHER position NOR the value of K
 *  4 land, ringed: only SPEED changes — not YIELD
 *  5 guardrail: crediting catalyst with ↑yield/↑K = classic exam error
 *  6 conclusion: catalyst = distractor, not a lever
 *
 * Layout plan (single energy-profile panel; longer language counts):
 *  b0 | title (script 22, red)      | T mid  | x260..820  y30..88  (bl 64)
 *  b1 | axes                        | Draw   | x120..960 y160..350
 *  b1 | uncatalyzed curve (muted)   | Draw   | x150..930 y180..320
 *  b1 | "uncatalyzed" label (13)    | T mid  | y168..181 (bl 175)
 *  b1 | axis labels                 | T      | y160..376
 *  b2 | catalyzed curve (green)     | Draw   | x150..930 y235..320
 *  b2 | "catalyzed" label (13, grn) | T mid  | y225..238 (bl 232)
 *  b2 | note (13, amber-dark)       | T mid  | y390..404 (bl 397)
 *  b3 | guardrail chip (amber)      | Chip   | x290..790 y415..455
 *  b4 | landed statement, ringed    | T mid  | x352..728 y474..496 (bl 490)
 *  b5 | exam-error (14, red)        | T mid  | y528..545 (bl 540)
 *  b6 | conclusion (17, green)      | T mid  | y559..577 (bl 572)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, ringD, INK, MUTED, AMBER, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { energyCurveD } from "./chem-kit";

export default function C11Ch06Sec32({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("catalyst: speed, not yield", "catalyst: speed, yield nahi")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 6)}
        d="M 430 84 C 480 80, 600 87, 650 83"
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />

      {/* beat 1 — axes + uncatalyzed curve */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={arrowD(150, 350, 150, 160)} stroke={INK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d={arrowD(120, 350, 960, 350)} stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={135} y={165} size={13} fill={MUTED} anchor="end">
          {t("energy", "energy")}
        </T>
        <T x={540} y={372} size={13} fill={MUTED} anchor="middle">
          {t("reaction coordinate", "reaction coordinate")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.4)}
        d={energyCurveD(150, 930, 280, 320, 100, 0.5)}
        stroke={MUTED}
        sw={2.4}
        dur={1}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={540} y={175} size={13} fill={MUTED} anchor="middle">
          {t("uncatalyzed", "uncatalyzed")}
        </T>
      </Fade>

      {/* beat 2 — catalyzed curve, same endpoints */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.3)}
        d={energyCurveD(150, 930, 280, 320, 45, 0.5)}
        stroke={GREEN}
        sw={2.4}
        dur={1}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={540} y={232} size={13} fill={GREEN_DARK} anchor="middle">
          {t("catalyzed", "catalyzed")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <T x={540} y={397} size={13} fill={AMBER} anchor="middle">
          {t(
            "same start & end points ⇒ same ΔG, same K",
            "same start & end points ⇒ same ΔG, same K"
          )}
        </T>
      </Fade>

      {/* beat 3 — the guardrail */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <Chip x={290} y={415} w={500} h={40} fill={CREAM} stroke={AMBER} textFill={INK} size={15} script={false}>
          {t(
            "moves NEITHER position NOR the value of K",
            "na position badalta, na K ki value"
          )}
        </Chip>
      </Fade>

      {/* beat 4 — the landing */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={490} size={20} fill={GREEN} weight={800} anchor="middle">
          {t("only SPEED changes — not YIELD", "sirf SPEED badalti — YIELD nahi")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.1)}
        d={ringD(540, 484, 188, 23)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />

      {/* beat 5 — the exam error */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={540} size={14} fill={RED} anchor="middle">
          {t(
            "crediting catalyst with ↑yield or ↑K = classic exam error",
            "catalyst ko ↑yield ya ↑K ka credit dena = classic exam error"
          )}
        </T>
      </Fade>

      {/* beat 6 — the conclusion */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={572} size={17} fill={GREEN} weight={700} anchor="middle">
          {t("catalyst = distractor, not a lever", "catalyst = distractor, lever nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
