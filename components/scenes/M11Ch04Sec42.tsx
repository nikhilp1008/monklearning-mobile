/**
 * M11 Ch04 · Section 42 — "Pitfalls & pro-tips: quadratics with complex roots"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — rapid ringed/boxed pitfalls, closing subtopic 4.
 *
 * Beats (board_reveal_at_english [0, 6.31, 20.57, 33.11, 43.61, 53.25, 63.49, 75.35]):
 *  0 heading: traps to avoid, shortcuts to keep
 *  1 trap (high): D<0 never means "no roots" — wrong/right chip pair, crossed/ticked
 *  2 text: apply the conjugate-root theorem ONLY when coefficients are real
 *  3 trap: forgetting √D=i√|D| — wrong/right chip pair
 *  4 text: a complex number has two square roots; fix branch by sgn(xy)=sgn(b)
 *  5 trap: Vieta's sum is -b/a not +b/a — wrong/right chip pair
 *  6 pro-tip (boxed, green): check D first
 *  7 pro-tip (boxed, green): real quadratic from root p+iq
 *
 * Layout plan (each trap row = a red "wrong" chip, drawn crossD through it,
 * an arrow, a green "right" chip, and a small drawn checkmark beside it —
 * literal cross-out-then-land, not a typed ✗/✓ glyph):
 *  b0 | heading (15,amber_dark,w700)      | T mid  | x540 y96  + underline y112
 *  b1 | wrong chip + cross                | Chip/Draw | x190..300 y124..164
 *  b1 | arrow                             | Draw   | x310,144 → x430,144
 *  b1 | right chip + tick                 | Chip/Draw | x440..601 y124..164, tick x615 y144
 *  b2 | text (15,ink)                     | T mid  | x540 y200 + underline y216
 *  b3 | wrong chip + cross                | Chip/Draw | x270..340 y228..264
 *  b3 | arrow                             | Draw   | x350,246 → x450,246
 *  b3 | right chip + tick                 | Chip/Draw | x460..550 y228..264, tick x564 y246
 *  b4 | text (14,ink)                     | T mid  | x540 y300 + underline y316
 *  b5 | wrong chip + cross                | Chip/Draw | x260..350 y328..364
 *  b5 | arrow                             | Draw   | x360,346 → x450,346
 *  b5 | right chip + tick                 | Chip/Draw | x460..550 y328..364, tick x564 y346
 *  b6 | boxed pro-tip (14,green,w700)     | Chip   | x271.5..808.5 y388..424
 *  b7 | boxed pro-tip (15,green,w700)     | Chip   | x317..763 y448..488
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  crossD,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { lineD } from "./math-kit";

function tickD(x: number, y: number): string {
  return `M ${x - 6} ${y} L ${x - 1} ${y + 5} L ${x + 8} ${y - 8}`;
}

export default function M11Ch04Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Pitfalls and Pro-Tips: Complex Roots", "Pitfalls aur Pro-Tips: Complex Roots")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={96} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Traps to avoid, shortcuts to keep", "Traps se bacho, shortcuts yaad rakho")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d={lineD(400, 112, 680, 112)} stroke={AMBER_DARK} sw={1.6} dur={0.5} />

      {/* beat 1 — trap: D<0 never means "no roots" */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Chip x={190} y={124} w={110} h={40} fill={CREAM} stroke={RED} textFill={RED} size={15} script={false}>
          no roots
        </Chip>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d={crossD(190, 124, 110, 40)} stroke={RED} sw={2.2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d={arrowD(310, 144, 430, 144)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <Chip x={440} y={124} w={161} h={40} fill={CREAM} stroke={GREEN} textFill={GREEN} size={15} script={false}>
          always TWO roots
        </Chip>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.5)} d={tickD(615, 144)} stroke={GREEN} sw={2.5} dur={0.4} />

      {/* beat 2 — real coefficients only */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={200} size={15} fill={INK} anchor="middle">
          {t(
            "Apply the conjugate-root theorem ONLY when coefficients are real.",
            "Conjugate-root theorem SIRF tab lagao jab coefficients real hon."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d={lineD(288, 216, 792, 216)} stroke={INK} sw={1.6} dur={0.6} />

      {/* beat 3 — trap: forgetting the i under the root */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={270} y={228} w={70} h={36} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          √D
        </Chip>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.4)} d={crossD(270, 228, 70, 36)} stroke={RED} sw={2.2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d={arrowD(350, 246, 450, 246)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <Chip x={460} y={228} w={90} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14} script={false}>
          i√|D|
        </Chip>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.5)} d={tickD(564, 246)} stroke={GREEN} sw={2.5} dur={0.4} />

      {/* beat 4 — two square roots, fix the branch */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={300} size={14} fill={INK} anchor="middle">
          {t(
            "A complex number has two square roots; fix the branch by sgn(xy)=sgn(b).",
            "Complex number ke do square roots hote hain; branch fix karo sgn(xy)=sgn(b) se."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d={lineD(285, 316, 795, 316)} stroke={INK} sw={1.6} dur={0.6} />

      {/* beat 5 — trap: Vieta's sign */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <Chip x={260} y={328} w={90} h={36} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          +b/a
        </Chip>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.4)} d={crossD(260, 328, 90, 36)} stroke={RED} sw={2.2} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d={arrowD(360, 346, 450, 346)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <Chip x={460} y={328} w={90} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14} script={false}>
          -b/a
        </Chip>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.5)} d={tickD(564, 346)} stroke={GREEN} sw={2.5} dur={0.4} />

      {/* beat 6 — pro-tip: check D first */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={271.5} y={388} w={537} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14} script={false}>
          {t(
            "Pro-tip: check D first — it names the root type before any computation.",
            "Pro-tip: pehle D check karo — root type turant pata chal jaata hai."
          )}
        </Chip>
      </Fade>

      {/* beat 7 — pro-tip: the real-quadratic shortcut */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={317} y={448} w={446} h={40} fill={CREAM} stroke={GREEN} textFill={GREEN} size={15} script={false}>
          Real quadratic from root p+iq: x² - 2px + (p²+q²) = 0
        </Chip>
      </Fade>
    </Scene>
  );
}
