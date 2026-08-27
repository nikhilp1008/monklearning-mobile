/**
 * M11 Ch04 · Section 11 — "Pitfalls & pro-tips: algebra of complex numbers"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — 7 rapid ringed/boxed one-liners, one per beat: a
 * drawn "!" mark for each red-margin trap, a drawn check for each pro-tip.
 *
 * Beats (board_reveal_at_english [0, 7.68, 19.54, 30.89, 43.95, 53.85, 66.13, 79.36]):
 *  0 heading: traps to avoid, shortcuts to keep
 *  1 trap (red-margin, high): replace i² with -1 immediately
 *  2 tip: strip the i out before combining roots of negatives
 *  3 trap (red-margin): Im(z)=b not bi; never < or > on non-real z
 *  4 tip: always rationalize — multiply by the conjugate
 *  5 pro-tip (green): powers of i only depend on n mod 4
 *  6 trap (red-margin): memorize (1+i)²=2i, (1-i)²=-2i
 *  7 tip: to test purely real/imaginary, clear the denominator first
 *
 * Layout plan (7 rows, pitch 66px, all chips h=40, centered x540):
 *  b0 | heading (17,amber_dark)   | T mid | x540 y102
 *  b0 | underline                  | Draw  | x420..660 y118
 *  b1 | ! icon + red chip          | Draw+Chip | icon x270 y166, chip x310..770 y146..186
 *  b2 | check icon + amber chip    | Draw+Chip | icon x270 y232, chip x315..765 y212..252
 *  b3 | ! icon + red chip          | Draw+Chip | icon x270 y298, chip x337..743 y278..318
 *  b4 | check icon + amber chip    | Draw+Chip | icon x270 y364, chip x337..743 y344..384
 *  b5 | check icon + green chip    | Draw+Chip | icon x270 y430, chip x340..740 y410..450
 *  b6 | ! icon + red chip          | Draw+Chip | icon x270 y496, chip x365..715 y476..516
 *  b7 | check icon + amber chip    | Draw+Chip | icon x270 y562, chip x315..765 y542..582
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
  INK,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const exclD = (x: number, y: number) => `M ${x} ${y - 14} L ${x} ${y - 3} M ${x} ${y + 3} L ${x} ${y + 4}`;
const checkD = (x: number, y: number) => `M ${x} ${y} L ${x + 5} ${y + 6} L ${x + 16} ${y - 11}`;

export default function M11Ch04Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Pitfalls & Pro-Tips", "Pitfalls & Pro-Tips")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={102} size={17} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Traps to avoid, shortcuts to keep", "Traps se bacho, shortcuts yaad rakho")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d="M 420 118 L 660 118" stroke={AMBER} sw={2.2} dur={0.5} />

      {/* beat 1 — trap: replace i² immediately */}
      <Draw on={beat >= 1} delay={dl(1, 0)} d={exclD(270, 166)} stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <Chip x={310} y={146} w={460} h={40} fill={CREAM} stroke={RED} textFill={RED} size={16} script={false}>
          {t("Replace i² with -1 immediately — never leave it!", "i² ko turant -1 se replace karo — chhodo mat!")}
        </Chip>
      </Fade>

      {/* beat 2 — tip: strip i first */}
      <Draw on={beat >= 2} delay={dl(2, 0)} d={checkD(270, 232)} stroke={AMBER_DARK} sw={2.8} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <Chip x={315} y={212} w={450} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          {t("Strip the i out before combining roots of negatives", "Negatives ke roots combine karne se pehle i nikaalo")}
        </Chip>
      </Fade>

      {/* beat 3 — trap: Im(z)=b not bi, no ordering */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d={exclD(270, 298)} stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <Chip x={337} y={278} w={406} h={40} fill={CREAM} stroke={RED} textFill={RED} size={15} script={false}>
          {t("Im(z) = b, not bi — never < or > on non-real z", "Im(z) = b, bi nahi — non-real z ke beech < ya > nahi")}
        </Chip>
      </Fade>

      {/* beat 4 — tip: always rationalize */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={checkD(270, 364)} stroke={AMBER_DARK} sw={2.8} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <Chip x={337} y={344} w={406} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          {t("Always rationalize: multiply by the conjugate", "Hamesha rationalize karo: conjugate se multiply karo")}
        </Chip>
      </Fade>

      {/* beat 5 — pro-tip: n mod 4 */}
      <Draw on={beat >= 5} delay={dl(5, 0)} d={checkD(270, 430)} stroke={GREEN} sw={2.8} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <Chip x={340} y={410} w={400} h={40} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          {t("Shortcut: powers of i only depend on n mod 4", "Shortcut: i ki powers sirf n mod 4 par depend karti hain")}
        </Chip>
      </Fade>

      {/* beat 6 — trap: memorize the squares */}
      <Draw on={beat >= 6} delay={dl(6, 0)} d={exclD(270, 496)} stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <Chip x={365} y={476} w={350} h={40} fill={CREAM} stroke={RED} textFill={RED} size={16} script={false}>
          {t("Memorize: (1+i)² = 2i,  (1-i)² = -2i", "Yaad rakho: (1+i)² = 2i,  (1-i)² = -2i")}
        </Chip>
      </Fade>

      {/* beat 7 — tip: clear denominator first */}
      <Draw on={beat >= 7} delay={dl(7, 0)} d={checkD(270, 562)} stroke={AMBER_DARK} sw={2.8} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <Chip x={315} y={542} w={450} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          {t("Purely real/imaginary? Clear the denominator first", "Purely real/imaginary? Pehle denominator clear karo")}
        </Chip>
      </Fade>
    </Scene>
  );
}
