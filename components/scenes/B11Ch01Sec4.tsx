/**
 * B11 Ch01 · Section 4 — "Metabolism and the test-tube argument"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 20.44, 32.05, 44.74, 59.41, 78.04, 97.3]):
 *  0 title (green — first PASSING candidate) + underline · bacterium→whale
 *    reaction-web hook [dim@1]
 *  1 clears BOTH gates — ringed confirmation line [dim@2]
 *  2 teaser (red): a famous subtlety, the most-tested idea here [dim@3]
 *  3 DIAGRAM half A: "Inside a cell" box — nested circle, organised
 *    reactions, LIVING ✓
 *  4 DIAGRAM half B: "Cell-free test tube" box — flask icon, a living
 *    REACTION but the system is neither living nor non-living
 *  5 conclusion: metabolism must be COUPLED with cellular organisation
 *  6 verdict: METABOLISM ✓ PASSES + the trap warning (say "neither…nor…")
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script25 green)      | T mid  | x?..?  y30..77  (bl64, longer=HI)
 *  b0 | underline swoosh            | Draw   | y90  x340..740
 *  b0 | hook (script18 muted)       | T mid  | x?..?  y107..139 (bl130) [dim@1]
 *  b1 | gates line (script17 green) | T mid  | x184..896 y153..185 (bl176) [dim@2]
 *  b1 | ring around line            | Draw   | c(540,169) rx356 ry27 [dim@2]
 *  b2 | teaser (script17 red)       | T mid  | x?..?  y206..236 (bl230) [dim@3]
 *  b2 | curved arrow down           | Draw   | (540,246)→(540,266) [dim@3]
 *  b3 | box A "Inside a cell" (grn) | Draw   | x110..430  y270..460
 *  b3 | header (16 green)           | T mid  | x202..338 y284..302 (bl296)
 *  b3 | outer/inner circle (green)  | Draw   | c(270,375) r50 / r18
 *  b3 | caption (13 anek green)     | T mid  | x172..368 y440..456 (bl450)
 *  b4 | box B "Cell-free tube" (am) | Draw   | x650..970  y270..460
 *  b4 | header (16 amber-d)         | T mid  | x734..886 y284..302 (bl296)
 *  b4 | flask icon (amber)          | Draw   | x786..830  y308..390
 *  b4 | caption (11 anek amber-d)   | T mid  | x667..953 y441..455 (bl450)
 *  b5 | conclusion (script16 ink)   | T mid  | x307..773 y479..508 (bl500)
 *  b5 | underline                   | Draw   | y514  x380..700
 *  b6 | "METABOLISM ✓ — PASSES"     | Chip   | x170..450  y525..553
 *  b6 | "trap: test-tube ≠ living"  | Chip   | x590..890  y525..553
 *  b6 | trap line (script13 red)    | T mid  | x333..747 y558..582 (bl575)
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  ringD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function B11Ch01Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title + hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={64} size={25} fill={GREEN} script>
          {t("Candidate 3 — METABOLISM: passes cleanly!", "Candidate 3 — METABOLISM: saaf pass hoti hai!")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2)} d="M 340 90 C 440 86, 640 86, 740 90" stroke={GREEN} sw={2.4} dur={0.6} />
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 3)}>
        <T x={540} y={130} size={18} fill={MUTED} script>
          {t(
            "bacterium to blue whale — one non-stop web of reactions",
            "bacterium se blue whale tak — reactions ka ek non-stop web"
          )}
        </T>
      </Fade>

      {/* beat 1 — clears both gates */}
      <Fade on={beat >= 1} dim={beat >= 2} delay={dl(1, 0.3)}>
        <T x={540} y={176} size={17} fill={GREEN} script>
          {t(
            "clears BOTH gates: no living thing lacks it, no non-living thing does it",
            "dono gates clear — koi living missing nahi, koi non-living karta nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} dim={beat >= 2} delay={dl(1, 1.6)}>
        <Draw on={true} d={ringD(540, 169, 356, 27)} stroke={GREEN} sw={2} dur={0.8} />
      </Fade>

      {/* beat 2 — teaser: the most-tested idea */}
      <Fade on={beat >= 2} dim={beat >= 3} delay={dl(2, 0.3)}>
        <T x={540} y={230} size={17} fill={RED} script>
          {t(
            "but there's a famous subtlety — the most-tested idea here…",
            "par ek famous subtlety hai — sabse zyada test hone wala idea…"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} dim={beat >= 3} delay={dl(2, 1.6)}>
        <Draw on={true} d={arrowD(540, 246, 540, 266)} stroke={RED} sw={2.2} dur={0.4} />
      </Fade>

      {/* beat 3 — DIAGRAM A: inside a cell, organised, LIVING */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 110 270 h 320 v 190 h -320 z" stroke={GREEN} sw={2.2} dur={1} />
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={270} y={296} size={16} fill={GREEN} weight={700}>
          {t("Inside a cell", "ek cell ke andar")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2)} d="M 220 375 a 50 50 0 1 0 100 0 a 50 50 0 1 0 -100 0" stroke={GREEN} sw={2.2} dur={0.7} />
      <Draw on={beat >= 3} delay={dl(3, 2.7)} d="M 252 375 a 18 18 0 1 0 36 0 a 18 18 0 1 0 -36 0" stroke={GREEN} sw={1.6} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 3.4)}>
        <T x={270} y={450} size={13} fill={GREEN} script={false} weight={600}>
          {t("organised reactions — LIVING ✓", "organised reactions — LIVING ✓")}
        </T>
      </Fade>

      {/* beat 4 — DIAGRAM B: cell-free test tube, neither / nor */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 650 270 h 320 v 190 h -320 z" stroke={AMBER_DARK} sw={2.2} dur={1} />
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={810} y={296} size={16} fill={AMBER_DARK} weight={700}>
          {t("Cell-free test tube", "Cell-free test tube")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 2)}
        d="M 790 315 L 790 370 A 20 20 0 0 0 830 370 L 830 315 Z"
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 4} delay={dl(4, 2.6)}>
        <Rect x={786} y={308} width={48} height={8} fill={AMBER} stroke={AMBER_DARK} strokeWidth={1} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.3)}>
        <T x={810} y={450} size={11} fill={AMBER_DARK} script={false} weight={600}>
          {t(
            "a living REACTION — but neither living nor non-living",
            "ek living REACTION — par neither living nor non-living"
          )}
        </T>
      </Fade>

      {/* beat 5 — the conclusion: coupled with cellular organisation */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={500} size={16} fill={INK} script>
          {t(
            "metabolism must be COUPLED with cellular organisation",
            "metabolism zaroor CELLULAR organisation ke saath hona chahiye"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.8)} d="M 380 514 C 450 511, 630 511, 700 514" stroke={INK} sw={1.8} dur={0.5} />

      {/* beat 6 — verdict: passes, but watch the trap */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={170} y={525} w={280} h={28} fill={CREAM} stroke={GREEN} textFill={GREEN} size={13} script={false}>
          {t("METABOLISM ✓ — PASSES", "METABOLISM ✓ — PASSES")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <Chip x={590} y={525} w={300} h={28} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false} dashed>
          {t("trap: test-tube ≠ living", "trap: test-tube ≠ living")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={540} y={575} size={13} fill={RED} script>
          {t(
            "say “neither living nor non-living” — never just “living”",
            "‘neither living nor non-living’ bolo — sirf ‘living’ kabhi nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
