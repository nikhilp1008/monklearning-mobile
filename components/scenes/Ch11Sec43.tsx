/**
 * Ch11 · Section 43 — "Stating the law, and spotting reversibility"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * UNVERIFIED — audio for sec 43 not yet uploaded, verify-scene.mjs could
 * not be run. Two-column pattern mirrors already-PASS Sec5/12/21/29/36.
 * Re-run once audio lands.
 *
 * Beats (8): 0 hook · 1 LEFT header+given · 2 KP+Clausius statements ·
 *  3 tea illustration stamp · 4 RIGHT the 4 options · 5 elimination ·
 *  6 answer: only #3 · 7 trap: slow ≠ reversible.
 *
 * Layout plan — LEFT col center 285, RIGHT col center 795:
 *  b1 | header chip(h26)   | Chip  | x70..290 / x600..830 y146..172
 *  b1 | given (13/11)      | T st  | x90/610 y192
 *  b2 | statements (11)    | T mid | x285 y220/238
 *  b3 | stamp chip (h32)   | Chip  | x95..475 y265..297
 *  b4 | given2 (11)        | T st  | x610 y208
 *  b5 | elimination (11)   | T mid | x795 y235
 *  b6 | answer chip (h30)  | Chip  | x645..945 y262..292
 *  b7 | trap (11,script)   | T mid | x795 y320
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={24} fill={GREEN} script>
          {t("stating the law, and spotting reversibility", "law state karo, aur reversibility pehchano")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={98} size={12} fill={MUTED} script>
          {t("one statement question, one 'slow' trap", "ek statement question, ek 'slow' trap")}
        </T>
      </Fade>

      <Draw on={beat >= 0} delay={dl(0, 0.6)} d="M 540 136 L 540 420" stroke={MUTED} sw={1.4} dur={0.5} />

      {/* ===== LEFT — state the law ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <Chip x={70} y={146} w={220} h={26} fill={INK} textFill={CREAM} size={12} script={false}>
          {t("STATE THE LAW", "STATE THE LAW")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={90} y={192} size={13} fill={INK} anchor="start" script={false}>
          {t("KP + Clausius + an everyday example", "KP + Clausius + ek everyday example")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={285} y={220} size={11} fill={INK} script={false}>
          {t("KP: no engine converts 1-reservoir heat entirely to work", "KP: koi engine 1-reservoir heat poora work mein nahi badalta")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={285} y={238} size={11} fill={INK} script={false}>
          {t("Clausius: heat never flows cold→hot alone", "Clausius: heat kabhi akele cold→hot nahi jaata")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <Chip x={95} y={265} w={380} h={32} fill={CREAM} stroke={GREEN} textFill={GREEN} size={12} script={false}>
          {t("hot tea cools — never reverses (Clausius!)", "hot tea thanda hota — kabhi reverse nahi (Clausius!)")}
        </Chip>
      </Fade>

      {/* ===== RIGHT — spot reversibility ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.1)}>
        <Chip x={600} y={146} w={230} h={26} fill={INK} textFill={CREAM} size={12} script={false}>
          {t("SPOT REVERSIBILITY", "SPOT REVERSIBILITY")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={610} y={192} size={11} fill={INK} anchor="start" script={false}>
          {t("1) free expansion  2) heat, large gap", "1) free expansion  2) heat, large gap")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={610} y={208} size={11} fill={INK} anchor="start" script={false}>
          {t("3) frictionless q-static isothermal  4) friction slide", "3) frictionless q-static isothermal  4) friction slide")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={795} y={235} size={11} fill={RED} script={false}>
          {t("1) sudden ✗ · 2) 4) dissipative ✗", "1) sudden ✗ · 2) 4) dissipative ✗")}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={645} y={262} w={300} h={30} fill={INK} textFill={CREAM} size={13} script={false}>
          {t("only 3) is reversible ✓", "sirf 3) reversible hai ✓")}
        </Chip>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={795} y={320} size={11} fill={RED} script>
          {t("slow ≠ reversible — need BOTH conditions", "slow ≠ reversible — DONO conditions chahiye")}
        </T>
      </Fade>
    </Scene>
  );
}
