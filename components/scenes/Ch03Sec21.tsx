/**
 * Ch03 · Section 21 — "The toolkit: the scalar (dot) product"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.3, 35.2, 40.3, 57.9, 82.7, 99.7, 124.5, 133.2]):
 *  0 heading
 *  1 definition box, both forms + SCALAR tag
 *  2 properties header
 *  3 commutative + distributive
 *  4 unit rules + A·A = A²
 *  5 angle finder box
 *  6 projection formula
 *  7 applications header
 *  8 W / P / Φ rows + closing line
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | box x140..820 y80..126 text cx480 bl 110 s16 · tag st x836 bl 110 s12
 *  b2 | header st x84 bl 168 · underline M84 176 h300
 *  b3 | st x104 bl 204 s13 · st x104 bl 230 s12
 *  b4 | st x104 bl 262 s13 · caption st x104 bl 286 s11
 *  b5 | box x600..1010 y168..216 text cx805 bl 200 s16 · caption cx805 bl 240 s11
 *  b6 | st x600 bl 286 s14 · caption st x600 bl 310 s11
 *  b7 | header st x84 bl 356 · underline M84 364 h380
 *  b8 | rows st x104 bl 392 / 420 / 448 s13 · closing cx540 bl 490 s12
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
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

export default function Ch03Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t("TOOLKIT — the scalar (dot) product", "TOOLKIT — scalar (dot) product")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 380 62 h 320" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — the definition, both forms */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 152 80 h 656 q 12 0 12 12 v 22 q 0 12 -12 12 h -656 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={480} y={110} size={16} fill={INK} weight={800}>
          A·B = AB cosθ = AxBx + AyBy + AzBz
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={836} y={110} size={12} fill={RED} script anchor="start">
          {t("SCALAR. always.", "SCALAR. hamesha.")}
        </T>
      </Fade>

      {/* beat 2 — properties header */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={84} y={168} size={14} fill={INK} script anchor="start">
          {t("PROPERTIES — read for meaning", "PROPERTIES — matlab ke liye padho")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.4)} d="M 84 176 h 300" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 3 — commutative, distributive */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={104} y={204} size={13} fill={INK} weight={700} anchor="start">
          {t("A·B = B·A — commutative", "A·B = B·A — commutative")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={104} y={230} size={12} fill={INK_LIGHT} script anchor="start">
          {t(
            "agreement is a symmetric question · distributive over + (the 9-term move)",
            "agreement symmetric sawaal hai · + par distributive (wahi 9-term chaal)"
          )}
        </T>
      </Fade>

      {/* beat 4 — unit rules and A·A */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={104} y={262} size={13} fill={INK} weight={700} anchor="start">
          î·î = 1 · î·ĵ = 0 · A·A = A²
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={104} y={286} size={11} fill={GREEN} script anchor="start">
          {t(
            "dot a vector with itself — the fastest vector → scalar move there is",
            "vector ko khud se dot karo — vector → scalar ki sabse tez chaal"
          )}
        </T>
      </Fade>

      {/* beat 5 — the angle finder */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 612 168 h 386 q 12 0 12 12 v 24 q 0 12 -12 12 h -386 q -12 0 -12 -12 v -24 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={805} y={200} size={16} fill={INK} weight={800}>
          cos θ = A·B ⁄ (A B)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={805} y={240} size={11} fill={GREEN} script>
          {t(
            "highest-traffic line: the angle, from components",
            "sabse zyada chalne wali line: components se angle"
          )}
        </T>
      </Fade>

      {/* beat 6 — the projection */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={600} y={286} size={14} fill={INK} weight={700} anchor="start">
          {t("proj. of A on B = A·B ⁄ |B| = A cosθ", "A ka B par proj. = A·B ⁄ |B| = A cosθ")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={600} y={310} size={11} fill={RED} script anchor="start">
          {t(
            "divide by |B|, not |A| — B contributes only its DIRECTION",
            "|B| se bhaag do, |A| se nahi — B sirf apni DIRECTION deta hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — applications header */}
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={84} y={356} size={14} fill={INK} script anchor="start">
          {t(
            "APPLICATIONS — every one is “how much along”",
            "APPLICATIONS — har ek hai “kitna saath mein”"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.4)} d="M 84 364 h 380" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 8 — the three rows */}
      <Fade on={beat >= 8} delay={dl(8, 0.8)}>
        <T x={104} y={392} size={13} fill={INK} weight={700} anchor="start">
          {t("W = F·d — force along the motion", "W = F·d — force motion ke saath")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 4)}>
        <T x={104} y={420} size={13} fill={INK} weight={700} anchor="start">
          {t("P = F·v — the same question, per second", "P = F·v — wahi sawaal, har second")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <T x={104} y={448} size={13} fill={INK} weight={700} anchor="start">
          {t("Φ = B·A — field along the area's normal", "Φ = B·A — field area ke normal ke saath")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 14)}>
        <T x={540} y={490} size={12} fill={GREEN} script>
          {t(
            "three chapters, one operation — you already know what it is asking",
            "teen chapters, ek operation — tum pehle se jaante ho yeh kya poochhta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
