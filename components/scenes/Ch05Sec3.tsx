/**
 * Ch05 · Section 3 — "Properties, and the angle-finding drill"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.8, 31.9, 49.2, 69.6, 85.2, 102.5, 123.3] · dur 146.1):
 *  0 title + subtitle
 *  1 P1 commutative chip + "order irrelevant"
 *  2 P2 distributive/scalar chip + "expand like algebra"
 *  3 P3 zero-dot ⇔ perpendicular chip + double arrow + "both ways"
 *  4 P4 sign reports angle: header + three mini chips
 *  5 drill flowchart: three boxes down the right column
 *  6 sign-check panel (dashed): + acute / − obtuse / 0 stop
 *  7 red verdict: sign is a free error-check
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl84
 *  left col numbers x84 (bl 141/217/316/424) ·
 *  P1 chip x110..330 y118..154 · script st? cx256 bl176 (x110..403)
 *  P2 chip x110..470 y194..230 (size15) · script cx245 bl262
 *  P3 chip x110..360 y292..330 · dbl arrow x375..415 y311 · script cx235 bl354
 *  P4 header cx280 bl392 · chips y404..438: x110..210 / x225..325 / x340..455
 *  b5 | header cx800 bl130 · boxes x600..1000: y150..190 / y220..260 / y290..330
 *     | arrows (800,190)→(800,215) / (800,260)→(800,285)
 *  b6 | dashed panel x600..1040 y358..472 · header cx820 bl382
 *     | lines st x625 bl 410/434/458
 *  b7 | bar x66 y500..558 · lines st x84 bl520 / bl546
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
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Properties & the Angle-Finding Drill", "Properties & the Angle-Finding Drill")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={84} size={13} fill={MUTED} script>
          {t(
            "four properties — each one earns its place",
            "chaar properties — har ek apni jagah kamati hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — commutative */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={84} y={141} size={15} fill={AMBER_DARK} script anchor="start">
          1.
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <Chip x={110} y={118} w={220} h={36} fill={CREAM} stroke={INK} textFill={INK} size={16} script={false}>
          A · B = B · A
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={256} y={176} size={13} fill={MUTED} script>
          {t(
            "order irrelevant — the number does not care",
            "order bemaani — number ko farq nahi padta"
          )}
        </T>
      </Fade>

      {/* beat 2 — distributive + scalar multiples */}
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={84} y={217} size={15} fill={AMBER_DARK} script anchor="start">
          2.
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <Chip x={110} y={194} w={360} h={36} fill={CREAM} stroke={INK} textFill={INK} size={15} script={false}>
          A·(B + C) = A·B + A·C · (kA)·B = k(A·B)
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={245} y={262} size={13} fill={MUTED} script>
          {t("expand it like ordinary algebra", "bilkul ordinary algebra jaise expand karo")}
        </T>
      </Fade>

      {/* beat 3 — zero dot ⇔ perpendicular */}
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={84} y={316} size={15} fill={AMBER_DARK} script anchor="start">
          3.
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <Chip x={110} y={292} w={250} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={16} script={false}>
          A · B = 0 ⇔ A ⊥ B
        </Chip>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 8)} d={arrowD(375, 311, 415, 311)} stroke={AMBER_DARK} sw={2.2} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 8.4)} d={arrowD(415, 311, 375, 311)} stroke={AMBER_DARK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 10.5)}>
        <T x={235} y={354} size={13} fill={GREEN} script>
          {t("the arrow points BOTH ways", "arrow DONO taraf jaati hai")}
        </T>
      </Fade>

      {/* beat 4 — sign reports the angle */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={84} y={424} size={15} fill={AMBER_DARK} script anchor="start">
          4.
        </T>
        <T x={280} y={392} size={13} fill={INK} script>
          {t(
            "the sign is a direct report on the angle",
            "sign seedha angle ki report hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <Chip x={110} y={404} w={100} h={34} fill={CREAM} stroke={GREEN} textFill={INK} size={14} script={false}>
          + acute
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <Chip x={225} y={404} w={100} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          0 → 90°
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7)}>
        <Chip x={340} y={404} w={110} h={34} fill={CREAM} stroke={RED} textFill={INK} size={14} script={false}>
          − obtuse
        </Chip>
      </Fade>

      {/* beat 5 — the drill flowchart */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={800} y={130} size={13.5} fill={AMBER_DARK} script>
          {t("the drill — the same way, every time", "drill — har baar bilkul ek hi tarah")}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 2)}
        d="M 612 150 h 376 q 12 0 12 12 v 16 q 0 12 -12 12 h -376 q -12 0 -12 -12 v -16 q 0 -12 12 -12"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <T x={800} y={176} size={15} fill={INK} weight={700}>
          {t("1 · A · B from components", "1 · components se A · B")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 4.5)} d={arrowD(800, 192, 800, 214)} stroke={MUTED} sw={2} dur={0.3} />
      <Draw
        on={beat >= 5}
        delay={dl(5, 5.2)}
        d="M 612 220 h 376 q 12 0 12 12 v 16 q 0 12 -12 12 h -376 q -12 0 -12 -12 v -16 q 0 -12 12 -12"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 5.8)}>
        <T x={800} y={246} size={15} fill={INK} weight={700}>
          {t("2 · both magnitudes A, B", "2 · dono magnitudes A, B")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 7.5)} d={arrowD(800, 262, 800, 284)} stroke={MUTED} sw={2} dur={0.3} />
      <Draw
        on={beat >= 5}
        delay={dl(5, 8.2)}
        d="M 612 290 h 376 q 12 0 12 12 v 16 q 0 12 -12 12 h -376 q -12 0 -12 -12 v -16 q 0 -12 12 -12"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 8.8)}>
        <T x={800} y={316} size={15} fill={INK} weight={700}>
          3 · θ = cos⁻¹(A · B ⁄ A B)
        </T>
      </Fade>

      {/* beat 6 — the sign-check panel */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 600 358 H 1040 V 472 H 600 Z"
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.8}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={820} y={382} size={13.5} fill={AMBER_DARK} script>
          {t(
            "sign check runs FIRST — before the arithmetic",
            "sign check PEHLE chalta hai — arithmetic se pehle"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <T x={625} y={410} size={13} fill={GREEN} script anchor="start">
          {t("+ dot → expect an acute answer", "+ dot → acute answer expect karo")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={625} y={434} size={13} fill={RED} script anchor="start">
          {t("− dot → expect obtuse", "− dot → obtuse expect karo")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 11)}>
        <T x={625} y={458} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "0 dot → STOP: θ = 90°, magnitudes never needed",
            "0 dot → wahin RUKO: θ = 90°, magnitudes ki zaroorat hi nahi"
          )}
        </T>
      </Fade>

      {/* beat 7 — the free error-check */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 500 v 58" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={84} y={520} size={13} fill={RED} script anchor="start">
          {t(
            "negative dot but calculator shows acute 40°? — an arithmetic slip",
            "dot negative par calculator acute 40° dikhaye? — arithmetic slip hui hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={84} y={546} size={13} fill={RED} script anchor="start">
          {t(
            "the sign told the truth first — a free error-check on every question",
            "sign ne sach pehle hi bata diya — har sawaal par muft ka error-check"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
