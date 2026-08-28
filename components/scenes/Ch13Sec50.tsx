/**
 * Ch13 · Section 50 — "Derivation: the phasor method for collinear SHMs"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 4.51, 8.84, 16.18, 23.14, 28.97, 33.3, 37.44]):
 *  0 shelf
 *  1 diagram: two radius vectors add like ordinary vectors (triangle law)
 *  2 x₁=A₁cosωt, x₂=A₂cos(ωt+δ) → radius vectors A₁,A₂ at fixed angle δ
 *  3 same ω ⇒ angle between them fixed ⇒ add like ordinary vectors
 *  4 hero (high): A = √(A₁²+A₂²+2A₁A₂cosδ)
 *  5 tanφ = A₂sinδ /(A₁+A₂cosδ)
 *  6 resultant is again SHM of the same frequency
 *  7 hero (high): phasor diagram turns trig into geometry
 *
 * Layout plan (Anek bl−0.78s..+0.31s):
 *  b0 | shelf y80 x60..1020
 *  b1 | O(800,280) · A₁ O→895,280 green · P1 dot · "A₁" cx847 bl296 ·
 *      A₂ O→853.62,234.99 amber · P2 dot · "A₂" x805 bl240 anchor-end ·
 *      δ-arc 828,280→821.45,262 · "δ" x823 bl270 ·
 *      R O→948.62,234.99 red · R dot · "A" cx874 bl240 ·
 *      dashed P1→R, P2→R muted · φ-arc 850,280→847.85,265.5 · "φ" x853 bl271
 *  b2 | st x70 bl105 size10
 *  b3 | st x70 bl136 size11
 *  b4 | box x70..380 y155..200 rx14 · line cx225 bl183 size16
 *  b5 | st x70 bl245 size13
 *  b6 | st x70 bl275 size11
 *  b7 | box x70..430 y300..345 rx14 · line cx250 bl328 size15
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch13Sec50({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t("Two radius vectors at a fixed angle", "Do radius vectors, fixed angle par")}
        </T>
      </Fade>

      {/* beat 0 — the shelf */}
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 60 80 L 1020 80" stroke={INK} sw={1.4} dur={0.6} />

      {/* beat 1 — the triangle-law construction */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Circle cx={800} cy={280} r={3.5} fill={INK} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d={arrowD(800, 280, 895, 280)} stroke={GREEN} sw={2.2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <Circle cx={895} cy={280} r={5} fill={GREEN} />
        <T x={847} y={296} size={11} fill={GREEN_DARK}>
          A₁
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d={arrowD(800, 280, 853.62, 234.99)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.0)}>
        <Circle cx={853.62} cy={234.99} r={5} fill={AMBER_DARK} />
        <T x={805} y={240} size={11} fill={AMBER_DARK} anchor="end">
          A₂
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.5)} d="M 828 280 A 28 28 0 0 0 821.45 262" stroke={INK} sw={1.3} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.9)}>
        <T x={823} y={270} size={10} fill={INK} anchor="start">
          δ
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <Path d="M 895 280 L 948.62 234.99" stroke={MUTED} strokeWidth={1.3} strokeDasharray="4 4" fill="none" />
        <Path d="M 853.62 234.99 L 948.62 234.99" stroke={MUTED} strokeWidth={1.3} strokeDasharray="4 4" fill="none" />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.6)} d={arrowD(800, 280, 948.62, 234.99)} stroke={RED} sw={2.4} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 4.3)}>
        <Circle cx={948.62} cy={234.99} r={5.5} fill={RED} />
        <T x={874} y={240} size={11} fill={RED}>
          A
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 4.7)} d="M 850 280 A 50 50 0 0 0 847.85 265.5" stroke={INK} sw={1.1} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 5.0)}>
        <T x={853} y={271} size={9} fill={INK} anchor="start">
          φ
        </T>
      </Fade>

      {/* beat 2 — the representation */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={70} y={105} size={10} fill={INK} anchor="start">
          {t(
            "x₁=A₁cosωt , x₂=A₂cos(ωt+δ) → radius vectors A₁,A₂ at fixed angle δ",
            "x₁=A₁cosωt , x₂=A₂cos(ωt+δ) → radius vectors A₁,A₂ at fixed angle δ"
          )}
        </T>
      </Fade>

      {/* beat 3 — the crucial observation */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={70} y={136} size={11} fill={INK} anchor="start">
          {t(
            "same ω ⇒ angle between them fixed ⇒ add like ordinary vectors",
            "same ω ⇒ angle unke beech fixed ⇒ ordinary vectors ki tarah add karo"
          )}
        </T>
      </Fade>

      {/* beat 4 — the resultant length, hero */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Draw
          on={beat >= 4}
          delay={dl(4, 0.3)}
          d="M 84 155 h 282 q 14 0 14 14 v 17 q 0 14 -14 14 h -282 q -14 0 -14 -14 v -17 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <T x={225} y={183} size={16} fill={INK} weight={800}>
          A = √(A₁²+A₂²+2A₁A₂cosδ)
        </T>
      </Fade>

      {/* beat 5 — the resultant phase */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={70} y={245} size={13} fill={INK} anchor="start" weight={700}>
          tanφ = A₂sinδ /(A₁+A₂cosδ)
        </T>
      </Fade>

      {/* beat 6 — the identity of the sum */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={70} y={275} size={11} fill={INK} anchor="start">
          {t(
            "resultant is again SHM of the same frequency",
            "resultant phir se usi frequency ka SHM hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the payoff, hero */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.3)}
          d="M 84 300 h 332 q 14 0 14 14 v 17 q 0 14 -14 14 h -332 q -14 0 -14 -14 v -17 q 0 -14 14 -14"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <T x={250} y={328} size={15} fill={INK} weight={800}>
          {t(
            "phasor diagram turns trig into geometry",
            "phasor diagram trig ko geometry mein badal deta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
