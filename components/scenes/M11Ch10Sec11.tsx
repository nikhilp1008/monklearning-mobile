/**
 * M11 Ch10 · Section 11 — "Example 1 (CBSE): centre and radius"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — Subtopic 2 (The Circle), sec 11 of 13.
 *
 * board_content seq1 heading -> always-on title. seq2..seq8 (7 items) gate at
 * beat>=1..beat>=7. reveals_english = [0, 6.49, 16.64, 28.5, 46.42, 54.28,
 * 59.31, 69.64]; reveals_hinglish = [0, 6.14, 16.3, 28.42, 46.42, 53.34,
 * 58.54, 67.76].
 *
 * Example 1: x²+y²-6x+8y-11=0 -> match 2g=-6,2f=8,c=-11 -> g=-3,f=4 -> boxed
 * centre(3,-4), r=√(9+16+11)=6 (hand-verified: g²+f²-c = 9+16-(-11) = 36,
 * √36=6 ✓). Example 2: diameter ends A(1,2),B(5,6) -> diameter form -> boxed
 * expanded x²+y²-6x-8y+17=0 (hand-verified: (x-1)(x-5)=x²-6x+5,
 * (y-2)(y-6)=y²-8y+12, sum = x²+y²-6x-8y+17 ✓).
 *
 * Beats:
 *  0(title,always-on) | "Example 1 (CBSE): centre and radius"
 *  1 | equation x²+y²-6x+8y-11=0
 *  2 | match: 2g=-6,2f=8,c=-11 -> g=-3,f=4
 *  3 | boxed: centre=(3,-4), r=6
 *  4 | Example 2 header
 *  5 | diameter ends A(1,2), B(5,6) + small A-B icon
 *  6 | diameter form (x-1)(x-5)+(y-2)(y-6)=0
 *  7 | boxed expanded: x²+y²-6x-8y+17=0
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { lineD } from "./math-kit";

export default function M11Ch10Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title */}
      <Fade on={true}>
        <T x={540} y={62} size={24} fill={RED} anchor="middle" script>
          {t("Example 1 (CBSE): centre and radius", "Example 1 (CBSE): centre aur radius")}
        </T>
      </Fade>

      {/* beat 1 — equation */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={104} size={18} fill={INK} anchor="middle">x² + y² − 6x + 8y − 11 = 0</T>
      </Fade>

      {/* beat 2 — match coefficients */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={140} size={15} fill={INK} anchor="middle">
          {t("Match: 2g = −6, 2f = 8, c = −11", "Match: 2g = −6, 2f = 8, c = −11")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={540} y={164} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>→ g = −3, f = 4</T>
      </Fade>

      {/* beat 3 — boxed centre/radius */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <Chip x={330} y={190} w={420} h={48} fill="#FCF4E0" stroke={GREEN} textFill={GREEN} size={16} script={false}>
          centre = (3, −4),  r = √(9 + 16 + 11) = 6
        </Chip>
      </Fade>

      {/* beat 4 — Example 2 header */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={290} size={18} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Example 2 (JEE Main): diameter form", "Example 2 (JEE Main): diameter form se")}
        </T>
      </Fade>

      {/* beat 5 — diameter ends + small icon */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={320} size={15} fill={INK} anchor="middle">
          {t("Diameter ends A(1,2) and B(5,6).", "Diameter ke ends A(1,2) aur B(5,6).")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d={lineD(460, 345, 620, 345)} stroke={INK} sw={2} dur={0.35} />
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <Circle cx={460} cy={345} r={3.5} fill={INK} />
        <T x={450} y={349} size={12} fill={INK} anchor="end" weight={700}>A</T>
        <Circle cx={620} cy={345} r={3.5} fill={INK} />
        <T x={630} y={349} size={12} fill={INK} anchor="start" weight={700}>B</T>
      </Fade>

      {/* beat 6 — diameter form */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={385} size={16} fill={INK} anchor="middle">(x − 1)(x − 5) + (y − 2)(y − 6) = 0</T>
      </Fade>

      {/* beat 7 — boxed expanded result */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={330} y={410} w={420} h={46} fill="#FCF4E0" stroke={GREEN} textFill={GREEN} size={16} script={false}>
          x² + y² − 6x − 8y + 17 = 0
        </Chip>
      </Fade>
    </Scene>
  );
}
