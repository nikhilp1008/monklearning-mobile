/**
 * Ch03 · Section 25 — "JEE Main: angle, projection, and the perpendicular component"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 17.8, 37.2, 62.0, 81.3, 105.9, 127.2, 152.0, 165.3]):
 *  0 heading
 *  1 given + three parts
 *  2 base quantities: A·B = 8, |A| = 3, |B| = 7
 *  3 (a) θ ≈ 67.6°
 *  4 (b) projection = 8/7 ≈ 1.14
 *  5 diagram: A split along/across B
 *  6 (c) |A×B|/|B| ≈ 2.77
 *  7 ANSWER box
 *  8 Pythagoras check → 3 = |A|
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | line cx540 bl 84 s13 · underline M300 96 h480
 *  b2 | st x84 bl 124 / 150 s13 · caption st x84 bl 174 s11
 *  b3 | st x84 bl 210 s14 · green st x84 bl 234 s11
 *  b4 | st x84 bl 270 s14 · red st x84 bl 294 s11
 *  b5 | B (120,510)→(430,510) lbl st (440,515) · A (120,510)→(185,353)
 *       lbl end (148,424) · dash M185 353 V510 · along M120 506? → (120,510)→(185,510)
 *       amber sw6 · lbl cx152 bl 534 s11 · across (185,510)→(185,353) green
 *       lbl st (197,430) s11
 *  b6 | st x560 bl 124 s14 · st x560 bl 152 s13 · st x560 bl 180 s13
 *  b7 | box x560..1030 y210..258 text cx795 bl 242 s15
 *  b8 | bar M546 290 v72 · lines st x560 bl 308 / 332 / 356 s12
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch03Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "JEE MAIN — the seesaw as an exam question",
            "JEE MAIN — seesaw ab exam sawaal ke roop mein"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={540} y={84} size={13} fill={INK} weight={700}>
          {t(
            "A = 2î+2ĵ+k̂ , B = 6î−3ĵ+2k̂ — (a) angle (b) proj of A on B (c) A's ⊥ component",
            "A = 2î+2ĵ+k̂ , B = 6î−3ĵ+2k̂ — (a) angle (b) A ka B par proj (c) A ka ⊥ hissa"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.2)} d="M 300 96 h 480" stroke={AMBER} sw={1.8} dur={0.6} />

      {/* beat 2 — the base quantities */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={84} y={124} size={13} fill={INK} weight={700} anchor="start">
          A·B = 12 − 6 + 2 = 8   (positive → acute)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={84} y={150} size={13} fill={INK} weight={700} anchor="start">
          |A| = √9 = 3 · |B| = √49 = 7
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 14)}>
        <T x={84} y={174} size={11} fill={AMBER_DARK} script anchor="start">
          {t(
            "clean numbers — the examiner's gift, and your confirmation",
            "saaf numbers — examiner ka tohfa, aur tumhari tasalli"
          )}
        </T>
      </Fade>

      {/* beat 3 — the angle */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={84} y={210} size={14} fill={INK} weight={700} anchor="start">
          (a) cos θ = 8 ⁄ 21 ≈ 0.381 → θ ≈ 67.6°
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={84} y={234} size={11} fill={GREEN} script anchor="start">
          {t(
            "acute — exactly as the positive dot promised",
            "acute — jaisa positive dot ne pehle hi kaha tha"
          )}
        </T>
      </Fade>

      {/* beat 4 — the projection */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={84} y={270} size={14} fill={INK} weight={700} anchor="start">
          (b) proj = A·B ⁄ |B| = 8 ⁄ 7 ≈ 1.14
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={84} y={294} size={11} fill={RED} script anchor="start">
          {t(
            "divide by 7, not 3 — B contributes only its direction",
            "7 se bhaag do, 3 se nahi — B sirf apni direction deta hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — the split picture */}
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d={arrowD(120, 510, 430, 510)} stroke={INK} sw={2.6} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={440} y={515} size={13} fill={INK} weight={700} anchor="start">B</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2)} d={arrowD(120, 510, 185, 353)} stroke={INK} sw={2.6} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 2.8)}>
        <T x={148} y={424} size={13} fill={INK} weight={700} anchor="end">A</T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3.6)} d="M 185 353 V 510" stroke={MUTED} sw={1.3} dur={0.5} />
      <Draw on={beat >= 5} delay={dl(5, 4.4)} d="M 120 510 H 185" stroke={AMBER} sw={6} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={152} y={534} size={11} fill={AMBER_DARK} script>
          {t("along: 1.14", "saath: 1.14")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 5.8)} d={arrowD(185, 510, 185, 353)} stroke={GREEN} sw={2.6} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 6.4)}>
        <T x={197} y={430} size={11} fill={GREEN} script anchor="start">
          {t("across: part (c)", "aar-paar: part (c)")}
        </T>
      </Fade>

      {/* beat 6 — the across part via cross */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={560} y={124} size={14} fill={INK} weight={700} anchor="start">
          (c) A sinθ = |A×B| ⁄ |B|
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={560} y={152} size={13} fill={INK} weight={700} anchor="start">
          A×B = 7î + 2ĵ − 18k̂   (determinant)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 12)}>
        <T x={560} y={180} size={13} fill={INK} weight={700} anchor="start">
          |A×B| = √377 ≈ 19.4 → ÷ 7 ≈ 2.77
        </T>
      </Fade>

      {/* beat 7 — the answers */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.6)}
        d="M 572 210 h 446 q 12 0 12 12 v 24 q 0 12 -12 12 h -446 q -12 0 -12 -12 v -24 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={795} y={242} size={15} fill={INK} weight={800}>
          θ ≈ 67.6° · proj ≈ 1.14 · perp ≈ 2.77
        </T>
      </Fade>

      {/* beat 8 — the closing check */}
      <Draw on={beat >= 8} delay={dl(8, 0.8)} d="M 546 290 v 72" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={560} y={308} size={12} fill={GREEN} script anchor="start">
          {t(
            "check: √(1.14² + 2.77²) = √8.97 ≈ 3 = |A| ✓",
            "check: √(1.14² + 2.77²) = √8.97 ≈ 3 = |A| ✓"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 7)}>
        <T x={560} y={332} size={12} fill={GREEN} script anchor="start">
          {t(
            "along ⊥ across → Pythagoras reassembles the whole of A",
            "saath ⊥ aar-paar → Pythagoras poora A wapas jod deta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 13)}>
        <T x={560} y={356} size={12} fill={INK} script anchor="start">
          {t(
            "the seesaw, showing up as arithmetic that closes",
            "wahi seesaw, ab band hote hisaab ke roop mein"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
