/**
 * Ch03 · Section 14 — "Pro-tip: when in doubt, resolve"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.6, 16.0, 33.9, 57.0, 66.1, 85.6, 104.6, 115.4]):
 *  0 heading
 *  1 hero: WHEN IN DOUBT → RESOLVE
 *  2 geometry → arithmetic
 *  3 it scales
 *  4 header: two sanity checks
 *  5 check 1: the band
 *  6 check 2: reassembly
 *  7 header: pick the product from the physics
 *  8 DOT along / CROSS across + examples + closing line
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | box x300..780 y90..140 text cx540 bl 122 s18
 *  b2 | line cx540 bl 168 s13 · underline M340 178 h400
 *  b3 | line cx540 bl 196 s12? → bl 200 · underline M360 210 h360
 *  b4 | header st x84 bl 240 · underline M84 248 h330
 *  b5 | box x84..500 y260..306 text cx292 bl 290 s15 · caption st x84 bl 330 s11
 *  b6 | box x560..1000 y260..306 text cx780 bl 290 s15 · caption st x560 bl 330 s11
 *  b7 | header st x84 bl 380 · underline M84 388 h380
 *  b8 | divider M540 400 v96 · dot col st x84 bl 424 s14, list bl 452 s12 ·
 *       cross col st x580 bl 424 s14, list bl 452 s12 · closing cx540 bl 530 s13
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

export default function Ch03Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t("PRO-TIP — the default move", "PRO-TIP — default chaal")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 380 62 h 320" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — the habit */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 312 90 h 456 q 12 0 12 12 v 26 q 0 12 -12 12 h -456 q -12 0 -12 -12 v -26 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={540} y={122} size={18} fill={GREEN} weight={800} script>
          {t("WHEN IN DOUBT → RESOLVE", "DOUBT HO → RESOLVE KARO")}
        </T>
      </Fade>

      {/* beat 2 — not a fallback */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={540} y={168} size={13} fill={INK} script>
          {t(
            "not a fallback — the DEFAULT: messy geometry → clean axis-by-axis arithmetic",
            "koi fallback nahi — DEFAULT hai: uljhi geometry → saaf axis-by-axis hisaab"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2)} d="M 340 178 h 400" stroke={AMBER} sw={1.5} dur={0.5} />

      {/* beat 3 — it scales */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={540} y={202} size={12} fill={INK_LIGHT} script>
          {t(
            "ten vectors? still just two columns of numbers — the parallelogram law can't keep up",
            "das vectors? phir bhi bas do columns ke numbers — parallelogram law peechhe reh jata hai"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2)} d="M 360 212 h 360" stroke={MUTED} sw={1.3} dur={0.5} />

      {/* beat 4 — two sanity checks */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={84} y={240} size={14} fill={INK} script anchor="start">
          {t("TWO SANITY CHECKS — seconds each", "DO SANITY CHECKS — bas kuchh seconds")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.8)} d="M 84 248 h 330" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 5 — the band */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 96 260 h 392 q 12 0 12 12 v 22 q 0 12 -12 12 h -392 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={INK_LIGHT}
        sw={2}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={292} y={290} size={15} fill={INK} weight={800}>
          |A − B| ≤ R ≤ A + B
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={84} y={330} size={11} fill={GREEN} script anchor="start">
          {t(
            "outside the band = arithmetic error, visible instantly",
            "band ke bahar = arithmetic error, turant dikh jata hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — the reassembly */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.6)}
        d="M 572 260 h 416 q 12 0 12 12 v 22 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={INK_LIGHT}
        sw={2}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={780} y={290} size={15} fill={INK} weight={800}>
          {t("√(Ax² + Ay²) must return A", "√(Ax² + Ay²) se A wapas aaye")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={560} y={330} size={11} fill={GREEN} script anchor="start">
          {t(
            "fails? you swapped sin and cos — a 4-second catch",
            "fail hua? sin-cos swap hua hai — 4-second ka check"
          )}
        </T>
      </Fade>

      {/* beat 7 — choose from the physics */}
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={84} y={380} size={14} fill={INK} script anchor="start">
          {t(
            "PICK THE PRODUCT FROM THE PHYSICS, not the algebra",
            "PRODUCT PHYSICS SE CHUNO, algebra se nahi"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.8)} d="M 84 388 h 380" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 8 — along vs across */}
      <Draw on={beat >= 8} delay={dl(8, 0.6)} d="M 540 402 v 70" stroke={MUTED} sw={1.5} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1.2)}>
        <T x={84} y={424} size={14} fill={AMBER_DARK} weight={700} anchor="start">
          {t("DOT = how much ALONG (cos)", "DOT = kitna SAATH mein (cos)")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 2.4)}>
        <T x={84} y={452} size={12} fill={INK_LIGHT} script anchor="start">
          {t("work · power · flux · projection", "work · power · flux · projection")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 3.6)}>
        <T x={580} y={424} size={14} fill={GREEN} weight={700} anchor="start">
          {t("CROSS = how much ACROSS (sin)", "CROSS = kitna AAR-PAAR (sin)")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 4.8)}>
        <T x={580} y={452} size={12} fill={INK_LIGHT} script anchor="start">
          {t(
            "torque · angular momentum · area · magnetic force",
            "torque · angular momentum · area · magnetic force"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 9)}>
        <T x={540} y={520} size={13} fill={GREEN} script>
          {t(
            "ask what the physics is doing — the right product picks itself",
            "poochho physics kya kar rahi hai — sahi product khud chun jata hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
