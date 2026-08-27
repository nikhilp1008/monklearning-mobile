/**
 * M11 Ch05 · Section 6 — "Compound inequalities: move all three parts together"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md.
 *
 * Beats (en [0,13.82,19.37,31.49,42.75,56.75,63.91], hi
 * [0,12.89,17.49,30.04,42.5,55.89,63.15]) — 7 beats, one accumulating board:
 *  0 heading — "p ___ expression ___ q" skeleton drawn
 *  1 formula: both blanks fill with "≤" — p ≤ expression ≤ q
 *  2 text: treat as one chain — same move, both ends (two arrows up to p, q)
 *  3 note (red-margin, high): multiply by negative ⇒ whole chain reverses
 *  4 formula: concrete demo 1≤x≤4 →×(-1)→ -1≥-x≥-4 (reversed, red)
 *  5 text: re-read left-to-right — boxed -4≤-x≤-1 (green)
 *  6 text: classic error — forgetting to flip the third part
 *
 * Layout plan:
 *  b0 | "p"/blank/"expression"/blank/"q" | T/Draw | y122..168 (bl 150)
 *  b1 | "≤" ×2 fills (green)      | T mid  | x420/660 bl150
 *  b2 | caption (16,muted,scr)    | T mid  | x420..660 y192..218 (bl 205)
 *  b2 | 2 arrows up to p, q       | Draw   | x360/720 y225..152
 *  b3 | boxed guardrail (red)     | Chip   | x180..900 y250..300
 *  b4 | "1 ≤ x ≤ 4" (24,ink)      | T mid  | x486..594 y332..357 (bl 350)
 *  b4 | arrow ↓ + "×(-1)" (red)   | Draw+T | x540 y370..388 · label x565 y379
 *  b4 | "-1 ≥ -x ≥ -4" (24,red)   | T mid  | x468..612 y402..427 (bl 420)
 *  b5 | arrow ↓ (ink)             | Draw   | x540 y436..450
 *  b5 | boxed result (green)      | Chip   | x450..630 y463..505
 *  b6 | caption (14,red,scr)      | T mid  | x300..780 y527..547 (bl 540)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { lineD } from "./math-kit";

export default function M11Ch05Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={RED} script>
          {t("one chain, three parts — move them together", "ek chain, teen parts — saath move karo")}
        </T>
      </Fade>

      {/* beat 0 — the skeleton: p ___ expression ___ q */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={360} y={150} size={22} fill={INK} weight={700}>
          p
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.7)} d={lineD(400, 150, 440, 150)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 0} delay={dl(0, 1.1)}>
        <T x={540} y={150} size={22} fill={INK} weight={700}>
          expression
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.6)} d={lineD(640, 150, 680, 150)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 0} delay={dl(0, 2.0)}>
        <T x={720} y={150} size={22} fill={INK} weight={700}>
          q
        </T>
      </Fade>

      {/* beat 1 — both blanks fill with ≤ */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={420} y={150} size={22} fill={GREEN} weight={700}>
          ≤
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={660} y={150} size={22} fill={GREEN} weight={700}>
          ≤
        </T>
      </Fade>

      {/* beat 2 — treat as one chain: same move, both ends */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={205} size={16} fill={MUTED} script>
          {t("same move, both ends", "same move, dono ends")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.0)} d={arrowD(360, 225, 360, 152)} stroke={MUTED} sw={2} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 1.5)} d={arrowD(720, 225, 720, 152)} stroke={MUTED} sw={2} dur={0.5} />

      {/* beat 3 — the guardrail: negative multiply reverses the whole chain */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={180} y={250} w={720} h={50} fill={CREAM} stroke={RED} textFill={RED} size={19}>
          {t(
            "multiply by a NEGATIVE ⇒ the WHOLE chain reverses, endpoints swap",
            "NEGATIVE se multiply karo ⇒ POORI chain reverse, endpoints swap"
          )}
        </Chip>
      </Fade>

      {/* beat 4 — concrete demo: 1≤x≤4, multiply by -1 */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={350} size={24} fill={INK} weight={700}>
          1 ≤ x ≤ 4
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.2)} d={arrowD(540, 370, 540, 388)} stroke={RED} sw={2.4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={565} y={379} size={15} fill={RED} anchor="start">
          ×(-1)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <T x={540} y={420} size={24} fill={RED} weight={700}>
          -1 ≥ -x ≥ -4
        </T>
      </Fade>

      {/* beat 5 — re-read left to right */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d={arrowD(540, 436, 540, 450)} stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <Chip x={450} y={463} w={180} h={42} fill={CREAM} stroke={GREEN} textFill={GREEN} size={19} script={false}>
          -4 ≤ -x ≤ -1
        </Chip>
      </Fade>

      {/* beat 6 — the classic error */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={540} size={14} fill={RED} script>
          {t(
            "classic error: flip only the middle, forget one end",
            "classic error: sirf beech flip karo, ek end bhool jao"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
