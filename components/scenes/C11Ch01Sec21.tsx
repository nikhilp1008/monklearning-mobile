/**
 * C11 Ch01 · Section 21 — "Pitfalls and the weakest-link habit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,6.57,22.44,33.62,50.18,67.67,87.9]):
 *  0 anchor: closing with the four mistakes that appear year after year
 *  1 pitfall 1: mishandling zeros
 *  2 pitfall 2: always rounding five up
 *  3 pitfall 3: mixing the two calculation rules
 *  4 pitfall 4: manufacturing precision
 *  5 the pro-tip: round only once, at the end (boxed)
 *  6 three memory aids + forward look
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | anchor (script15 ink)        | T mid | x540  y95
 *  b1-4 | mistake (13 red, start)    | T st  | x90   y130/168/206/244
 *  b1-4 | rule (13 green, start)     | T st  | x560  y130/168/206/244
 *  b5 | box (dashed amber, w500h90)  | Draw  | x290..790 y290..380
 *  b5 | title/l1/l2 inside           | T mid | x540  y315/340/365
 *  b6 | aid l1/l2/l3 (13 amber-drk)  | T mid | x540  y400/424/448
 *  b6 | closing (script14 green)     | T mid | x540  y486
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

const PITFALLS: [string, string, string, string][] = [
  [
    "leading zeros count? trailing zeros without a decimal?",
    "leading zeros count? trailing zeros bina decimal?",
    "leading NEVER count · trailing ONLY with decimal (0.0025=2sf, 2500=2sf)",
    "leading NEVER count · trailing ONLY decimal ke saath (0.0025=2sf, 2500=2sf)",
  ],
  [
    "always round 5 up?",
    "hamesha 5 upar round?",
    "exactly 5? round-to-even: even stays, odd climbs",
    "exactly 5? round-to-even: even stays, odd climbs",
  ],
  [
    "mixing the two calculation rules?",
    "dono calculation rules mix karna?",
    "sums/diffs = decimals · products/quotients = sig figs",
    "sums/diffs = decimals · products/quotients = sig figs",
  ],
  [
    "manufacturing precision (5.39 from a 5.0-good input)?",
    "precision gadhna (5.0-good input se 5.39)?",
    "never more precise than the WEAKEST input",
    "WEAKEST input se zyada precise kabhi nahi",
  ],
];

export default function C11Ch01Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={22} fill={RED} script>
          {t("pitfalls and the weakest-link habit", "pitfalls aur weakest-link habit")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={95} size={15} fill={INK} script>
          {t(
            "closing with the four mistakes that appear year after year",
            "un chaar mistakes ke saath band karte hain jo har saal dikhti hain"
          )}
        </T>
      </Fade>

      {/* beats 1-4 — the four pitfalls, mistake vs correct rule */}
      {PITFALLS.map(([mEn, mHi, rEn, rHi], i) => {
        const k = i + 1;
        const rowY = [130, 168, 206, 244][i];
        return (
          <React.Fragment key={rowY}>
            <Fade on={beat >= k} delay={dl(k, 0.3)}>
              <T x={90} y={rowY} size={13} fill={RED} script anchor="start">
                ✗ {t(mEn, mHi)}
              </T>
            </Fade>
            <Fade on={beat >= k} delay={dl(k, 1.2)}>
              <T x={560} y={rowY} size={13} fill={GREEN} script anchor="start">
                ✓ {t(rEn, rHi)}
              </T>
            </Fade>
          </React.Fragment>
        );
      })}

      {/* beat 5 — the pro-tip: round only once */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.3)}
        d="M 306 290 h 468 q 16 0 16 16 v 58 q 0 16 -16 16 h -468 q -16 0 -16 -16 v -58 q 0 -16 16 -16"
        stroke={AMBER}
        sw={2}
        dur={0.8}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={540} y={315} size={15} fill={INK} weight={700} script={false}>
          {t("ROUND ONLY ONCE — AT THE END", "SIRF EK BAAR ROUND KARO — END MEIN")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={540} y={340} size={13} fill={AMBER_DARK} script>
          {t("carry 1–2 guard digits through every step", "har step mein 1–2 guard digits saath rakho")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.7)}>
        <T x={540} y={365} size={13} fill={AMBER_DARK} script>
          {t("ask: which input is the weakest link?", "pucho: kaunsa input weakest link hai?")}
        </T>
      </Fade>

      {/* beat 6 — three memory aids + forward look */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={400} size={13} fill={AMBER_DARK} script>
          {t(
            "leading zeros = placeholders · trailing zeros = promises (after a decimal)",
            "leading zeros = placeholders · trailing zeros = promises (decimal ke baad)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={540} y={424} size={13} fill={AMBER_DARK} script>
          {t("add by DECIMALS · multiply by SIG FIGS", "add by DECIMALS · multiply by SIG FIGS")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={540} y={448} size={13} fill={AMBER_DARK} script>
          {t("round ONCE, at the end — never step by step", "round EK BAAR, end mein — kabhi step by step nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.6)}>
        <T x={540} y={486} size={14} fill={GREEN} script>
          {t("next: the laws that built atomic theory", "aage: laws jinhone atomic theory banayi")}
        </T>
      </Fade>
    </Scene>
  );
}
