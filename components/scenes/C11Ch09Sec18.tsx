/**
 * C11 Ch09 · Section 18 — "Counting monochloro products" (worked, NEET)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 10.58, 22.61, 39.25, 50.26, 57.09, 68.18]):
 *  0 heading/question · 1 shortcut: count distinct H types · 2 skeleton
 *  drawn (2-methylbutane) · 3 (i) two equivalent methyls, one type (ring ×2,
 *  red) · 4 (ii) lone tertiary H on C2 (ring, amber) · 5 (iii) C3 methylene
 *  (iv) C4 methyl (ring ×2, green/ink) · 6 GREEN answer 4, red trap
 *
 * Layout plan — skeleton at C1(140,260) C2(200,225) C3(260,260) C4(320,225)
 *  branch(200,175):
 *  b2 | 4 bonds + 5 vertex dots | Draw
 *  b3 | ring C1 + ring branch (red) + label | Draw+T | x122..218 / x122..278 y110..280
 *  b4 | ring C2 (amber) + label            | Draw+T | c(200,225)
 *  b5 | ring C3, ring C4 (green) + label    | Draw+T | c(260,260) c(320,225)
 *  b6 | green answer chip + red trap line   | Chip+T | y345..391 · trap y420
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER_DARK, RED, GREEN, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { bondD, ringD } from "./chem-kit";

export default function C11Ch09Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const C1 = { x: 140, y: 260 };
  const C2 = { x: 200, y: 225 };
  const C3 = { x: 260, y: 260 };
  const C4 = { x: 320, y: 225 };
  const BR = { x: 200, y: 175 };

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={26} fill={RED} script>
          {t("counting monochloro products", "monochloro products ginna")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={95} size={15} fill={INK} weight={700}>
          [NEET] {t("monochloro products of 2-methylbutane", "2-methylbutane ke monochloro products")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={128} size={15} fill={AMBER_DARK} script>
          {t("shortcut: count distinct types of H — each type = one product", "shortcut: H ke distinct types ginno — har type = ek product")}
        </T>
      </Fade>

      {/* beat 2 — the skeleton */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d={bondD(C1.x, C1.y, C2.x, C2.y)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 0.7)} d={bondD(C2.x, C2.y, C3.x, C3.y)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 1.1)} d={bondD(C3.x, C3.y, C4.x, C4.y)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 1.5)} d={bondD(C2.x, C2.y, BR.x, BR.y)} stroke={INK} sw={2.2} dur={0.4} />
      {[C1, C2, C3, C4, BR].map((p, i) => (
        <Fade key={i} on={beat >= 2} delay={dl(2, 1.9 + i * 0.1)}>
          <Circle cx={p.x} cy={p.y} r={3} fill={INK} />
        </Fade>
      ))}

      {/* beat 3 — type (i): two equivalent methyls */}
      <Draw on={beat >= 3} delay={dl(3, 0.3)} d={ringD(C1.x, C1.y, 20, 18)} stroke={RED} sw={2} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 1)} d={ringD(BR.x, BR.y, 20, 18)} stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.7)}>
        <T x={430} y={185} size={14} fill={RED} anchor="start">
          {t("(i) two equivalent methyls on C2 = one type", "(i) C2 ke do equivalent methyls = ek type")}
        </T>
      </Fade>

      {/* beat 4 — type (ii): lone tertiary H */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d={ringD(C2.x, C2.y, 18, 16)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={430} y={225} size={14} fill={AMBER_DARK} anchor="start">
          {t("(ii) the lone tertiary H on C2", "(ii) C2 ka akela tertiary H")}
        </T>
      </Fade>

      {/* beat 5 — types (iii) and (iv) */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d={ringD(C3.x, C3.y, 18, 16)} stroke={GREEN} sw={2} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 1)} d={ringD(C4.x, C4.y, 20, 18)} stroke={GREEN} sw={2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.7)}>
        <T x={430} y={265} size={14} fill={GREEN} anchor="start">
          {t("(iii) C3 methylene H's  (iv) the C4 methyl", "(iii) C3 methylene H's  (iv) C4 ka methyl")}
        </T>
      </Fade>

      {/* beat 6 — the answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={400} y={345} w={280} h={46} fill={GREEN} textFill={CREAM} size={19} script={false}>
          {t("Answer: 4 products", "Answer: 4 products")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.3)}>
        <T x={540} y={412} size={14} fill={RED} script>
          {t("trap: over-counting to 5 or 6", "trap: 5 ya 6 tak over-count kar dena")}
        </T>
      </Fade>
    </Scene>
  );
}
