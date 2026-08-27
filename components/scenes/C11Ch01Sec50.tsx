/**
 * C11 Ch01 · Section 50 — "Pitfalls and the coefficient-division habit"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. (section_type: tips — closes subtopic 7.)
 *
 * Beats (en [0,6.91,19.63,30.13,42.84,54.28,78.34]):
 *  0 anchor: four pitfalls, each a habit rather than a concept
 *  1 pitfall 1: skipping the balancing step
 *  2 pitfall 2: taking ratios of grams
 *  3 pitfall 3: comparing raw moles for the limiting reagent
 *  4 pitfall 4: anchoring product on the wrong reactant
 *  5 the pro-tip: moles-over-coefficient in one glance (boxed)
 *  6 three memory aids
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | anchor (script15 ink)        | T mid | x540  y95
 *  b1-4 | mistake (13 red, start)    | T st  | x90   y130/168/206/244
 *  b1-4 | rule (13 green, start)     | T st  | x560  y130/168/206/244
 *  b5 | box (dashed amber, w500h90)  | Draw  | x290..790 y290..380
 *  b5 | title/l1/l2 inside           | T mid | x540  y315/340/365
 *  b6 | aid l1-3 (13 amber-drk)      | T mid | x540  y398/419/440
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

const PITFALLS: [string, string, string, string][] = [
  [
    "skipping the balancing step?",
    "balancing ka step chhod dena?",
    "ratios only valid for a BALANCED equation — balance FIRST, every time",
    "ratios sirf BALANCED equation ke liye valid — hamesha PEHLE balance karo",
  ],
  [
    "taking ratios of GRAMS?",
    "GRAMS ka ratio lena?",
    "equation speaks in MOLES — convert mass/volume FIRST",
    "equation MOLES mein bolta — pehle mass/volume ko moles mein badlo",
  ],
  [
    "comparing RAW moles for limiting reagent?",
    "limiting reagent ke liye RAW moles compare karna?",
    "÷ by COEFFICIENT first — smallest quotient wins, not smallest count",
    "pehle COEFFICIENT se ÷ — sabse chhota quotient jeetta, count nahi",
  ],
  [
    "anchoring product on the WRONG reactant?",
    "product ko GALAT reactant par tikana?",
    "product/excess/yield — always from the LIMITING reagent, never excess",
    "product/excess/yield — hamesha LIMITING reagent se, excess se kabhi nahi",
  ],
];

export default function C11Ch01Sec50({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={20} fill={RED} script>
          {t("pitfalls and the coefficient-division habit", "pitfalls aur coefficient-division ki aadat")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={95} size={15} fill={INK} script>
          {t(
            "four pitfalls close this subtopic — each one a habit, not a concept",
            "chaar pitfalls is subtopic ko band karte — har ek aadat hai, concept nahi"
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

      {/* beat 5 — the pro-tip: moles-over-coefficient in one glance */}
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
          {t("THE SPEED TRICK", "SPEED TRICK")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={540} y={340} size={13} fill={AMBER_DARK} script>
          {t(
            "write each reactant's moles directly ABOVE its coefficient",
            "har reactant ke moles seedhe uske coefficient ke UPAR likho"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.7)}>
        <T x={540} y={365} size={13} fill={AMBER_DARK} script>
          {t(
            "smallest ratio = limiting — drives product mass, excess, AND yield",
            "sabse chhota ratio = limiting — product mass, excess, AUR yield sab isse chalte"
          )}
        </T>
      </Fade>

      {/* beat 6 — three memory aids */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={398} size={13} fill={AMBER_DARK} script>
          {t("balance → mole → ratio → back — the four-step spine", "balance → mole → ratio → wapas — char-step spine")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={540} y={419} size={13} fill={AMBER_DARK} script>
          {t(
            "÷ by the COEFFICIENT — the one rule for the limiting reagent",
            "COEFFICIENT se ÷ — limiting reagent ka ek hi niyam"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={540} y={440} size={13} fill={AMBER_DARK} script>
          {t(
            "anchor on the LIMITER — products and yield always follow it",
            "LIMITER par anchor karo — products aur yield hamesha isi ka peecha karte"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
