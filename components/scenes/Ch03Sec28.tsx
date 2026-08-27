/**
 * Ch03 · Section 28 — "Pro-tip: let the physics choose the product"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.6, 29.0, 53.9, 59.9, 76.6, 92.4, 113.4]):
 *  0 heading
 *  1 ALONG family → dot (cos)
 *  2 ACROSS family → cross (sin)
 *  3 two instant checks header
 *  4 sign of A·B check
 *  5 scalar-triple coplanarity check
 *  6 pocket seesaw
 *  7 mnemonic hero
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | chip x110 y90 w340 h38 · list cx280 bl 156 s12 · caption cx280 bl 180 s11
 *  b2 | chip x630 y90 w360 h38 · list cx810 bl 156 s12 · caption cx810 bl 180 s11
 *  b3 | header st x84 bl 236 · underline M84 244 h340
 *  b4 | box x84..510 y260..300 text cx297 bl 286 s14 · caption st x84 bl 324 s11
 *  b5 | box x560..1000 y260..300 text cx780 bl 286 s14 · caption st x560 bl 324 s11
 *  b6 | line cx540 bl 380 s12 · underline M280 390 h520
 *  b7 | box x300..780 y420..472 text cx540 bl 452 s17 · closing cx540 bl 508 s11
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
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

export default function Ch03Sec28({ currentTime, reveals, language }: SceneProps) {
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
            "PRO-TIP — the PHYSICS chooses the product",
            "PRO-TIP — product PHYSICS chunti hai"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — the ALONG family */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <Chip x={110} y={90} w={340} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={15}>
          {t("how much ALONG → DOT (cos)", "kitna SAATH → DOT (cos)")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={280} y={156} size={12} fill={INK} script>
          {t("work · power · flux · projection", "work · power · flux · projection")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9)}>
        <T x={280} y={180} size={11} fill={MUTED} script>
          {t("different chapters — one question", "alag chapters — ek hi sawaal")}
        </T>
      </Fade>

      {/* beat 2 — the ACROSS family */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <Chip x={630} y={90} w={360} h={38} fill={CREAM} stroke={GREEN} textFill={GREEN} size={15}>
          {t("ACROSS / turning → CROSS (sin)", "AAR-PAAR / ghumav → CROSS (sin)")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={810} y={156} size={12} fill={INK} script>
          {t("torque · L · qv×B · area", "torque · L · qv×B · area")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 12)}>
        <T x={810} y={180} size={11} fill={MUTED} script>
          {t(
            "classify first — the sin/cos trap stops working",
            "pehle classify karo — sin/cos trap bekar ho jata hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — checks header */}
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={84} y={236} size={14} fill={INK} script anchor="start">
          {t("TWO INSTANT CHECKS — seconds each", "DO INSTANT CHECKS — bas seconds")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.4)} d="M 84 244 h 340" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 4 — the sign check */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.6)}
        d="M 96 260 h 402 q 12 0 12 12 v 16 q 0 12 -12 12 h -402 q -12 0 -12 -12 v -16 q 0 -12 12 -12"
        stroke={INK_LIGHT}
        sw={2}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={297} y={286} size={14} fill={INK} weight={800}>
          {t("sign of A·B: + acute · − obtuse", "A·B ka sign: + acute · − obtuse")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={84} y={324} size={11} fill={GREEN} script anchor="start">
          {t(
            "predict → compute → confirm; a disagreement is a free slip-detector",
            "predict → compute → confirm; disagreement muft ka slip-detector hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — the coplanarity check */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 572 260 h 416 q 12 0 12 12 v 16 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -16 q 0 -12 12 -12"
        stroke={INK_LIGHT}
        sw={2}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={780} y={286} size={14} fill={INK} weight={800}>
          A·(B×C) = 0 ⇔ coplanar
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={560} y={324} size={11} fill={GREEN} script anchor="start">
          {t(
            "one determinant — no sketching, no reasoning, no doubt",
            "ek determinant — na sketch, na bahas, na shaq"
          )}
        </T>
      </Fade>

      {/* beat 6 — the pocket seesaw */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={540} y={380} size={12} fill={AMBER_DARK} script>
          {t(
            "pocket seesaw: nearly-parallel vectors AND a large cross product? something is wrong",
            "pocket seesaw: lagbhag-parallel vectors AUR bada cross product? kuchh galat hai"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.2)} d="M 280 390 h 520" stroke={AMBER} sw={1.5} dur={0.6} />

      {/* beat 7 — six words */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.6)}
        d="M 312 420 h 456 q 12 0 12 12 v 28 q 0 12 -12 12 h -456 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={540} y={452} size={17} fill={GREEN} weight={800} script>
          {t("Dot agrees (cos) · Cross turns (sin)", "Dot agree karta hai (cos) · Cross ghumata hai (sin)")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={540} y={508} size={11} fill={MUTED} script>
          {t(
            "everything else on these boards is machinery hanging off that one sentence",
            "in boards ka baaki sab kuchh isi ek vaakya par latki machinery hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
