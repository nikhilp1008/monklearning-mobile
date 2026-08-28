/**
 * Ch11 · Section 44 — "A forbidden engine, and a numerical equivalence"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 44 not yet uploaded, verify-scene.mjs could
 * not be run. Two-column pattern mirrors already-PASS Sec5/12/21/29/36/43.
 * Re-run once audio lands.
 *
 * Beats (8): 0 hook · 1 LEFT given (inventor's claim) · 2 1st-law check
 *  (balances) · 3 2nd-law check (KP violation) · 4 RIGHT given (100J
 *  device + engine) · 5 engine data (250,150,100) · 6 device+net=0 ·
 *  7 verdict: 150J from hot alone.
 *
 * Layout plan — LEFT col center 285, RIGHT col center 795:
 *  b1 | header chip(h26)   | Chip  | x80..300 / x600..840 y146..172
 *  b1 | given (12/11)      | T st  | x90/610 y192
 *  b2 | check1 (12)        | T mid | x285 y222
 *  b3 | check2 chip (h32)  | Chip  | x145..425 y250..282
 *  b5 | data (11)          | T mid | x795 y218
 *  b6 | data2 (11)         | T mid | x795 y240
 *  b7 | verdict chip (h32) | Chip  | x625..965 y268..300
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec44({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={23} fill={RED} script>
          {t("a forbidden engine, and a numerical equivalence", "ek forbidden engine, aur numerical equivalence")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={98} size={12} fill={MUTED} script>
          {t("one device to judge, one concrete-number proof", "ek device judge karo, ek concrete-number proof")}
        </T>
      </Fade>

      <Draw on={beat >= 0} delay={dl(0, 0.6)} d="M 540 136 L 540 420" stroke={MUTED} sw={1.4} dur={0.5} />

      {/* ===== LEFT — judge the engine ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <Chip x={80} y={146} w={220} h={26} fill={INK} textFill={CREAM} size={12} script={false}>
          {t("JUDGE THE ENGINE", "JUDGE THE ENGINE")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={90} y={192} size={12} fill={INK} anchor="start" script={false}>
          {t("500J in, 500J work, 0 rejected (cyclic)", "500J in, 500J work, 0 rejected (cyclic)")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={285} y={222} size={12} fill={INK} script={false}>
          {t("1st law: 500=500, ΔU=0 ✓ balances", "1st law: 500=500, ΔU=0 ✓ balances")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <Chip x={145} y={250} w={280} h={32} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t("2nd law: VIOLATES (Kelvin-Planck) ✗", "2nd law: VIOLATE (Kelvin-Planck) ✗")}
        </Chip>
      </Fade>

      {/* ===== RIGHT — numeric equivalence ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.1)}>
        <Chip x={600} y={146} w={240} h={26} fill={INK} textFill={CREAM} size={12} script={false}>
          {t("NUMERIC EQUIVALENCE", "NUMERIC EQUIVALENCE")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={610} y={192} size={11} fill={INK} anchor="start" script={false}>
          {t("100J device (cold→hot, free) + ordinary engine", "100J device (cold→hot, free) + ordinary engine")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={795} y={218} size={11} fill={INK} script={false}>
          {t("engine: draws 250J, W=150J, rejects 100J", "engine: draws 250J, W=150J, rejects 100J")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={795} y={240} size={11} fill={INK} script={false}>
          {t("device carries 100J back — cold nets to 0", "device 100J wapas leke jaata — cold net 0")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={625} y={268} w={340} h={32} fill={INK} textFill={CREAM} size={12} script={false}>
          {t("150J from hot alone → work = KP violation!", "150J sirf hot se → work = KP violation!")}
        </Chip>
      </Fade>
    </Scene>
  );
}
