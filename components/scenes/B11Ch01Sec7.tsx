/**
 * B11 Ch01 · Section 7 — "Worked examples: define metabolism & the growth A-R"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.73, 23.45, 41.78, 54.24, 65.23, 76.22, 88.68]):
 *  0 title: Example 1 — define metabolism (CBSE, 2 marks) + underline
 *  1 MARK 1 — the precise definition [dim@4]
 *  2 MARK 2 — the "no exception" reason [dim@4]
 *  3 banner: DEFINITION + NO-EXCEPTION JUSTIFICATION = FULL MARKS [dim@4]
 *  4 Example 2 title (reusing the freed slot) + Assertion & Reason statements
 *  5 test each: A is TRUE, R is TRUE (two drawn checkmarks)
 *  6 key move: does R explain A? YES → option 1 ringed
 *  7 the trap: option 2 crossed out + causation warning
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script22 red)        | T mid  | x?..?  y30..75  (bl64, longer=HI)
 *  b0 | underline swoosh            | Draw   | y88  x330..750
 *  b1 | "MARK 1 — DEFINITION" (13)  | T st   | x60..?  y117..135 (bl130) [dim@4]
 *  b1 | underline                   | Draw   | y142  x60..230 [dim@4]
 *  b1 | definition (script15 ink)   | T st   | x60..538 y145..172 (bl164) [dim@4]
 *  b2 | "MARK 2 — REASON" (13)      | T st   | x60..?  y183..201 (bl196) [dim@4]
 *  b2 | underline                   | Draw   | y208  x60..200 [dim@4]
 *  b2 | reason (script15 ink)       | T st   | x60..472 y209..236 (bl228) [dim@4]
 *  b3 | banner chip (green)         | Chip   | x330..750  y252..284 [dim@4]
 *  b4 | title2 (script20 red)       | T mid  | x?..?  y104..140 (bl130)
 *  b4 | underline                   | Draw   | y150  x330..750
 *  b4 | "A: …" (15 anek ink)        | T st   | x60..?  y164..181 (bl176)
 *  b4 | "R: …" (15 anek ink)        | T st   | x60..?  y192..209 (bl204)
 *  b5 | check A + "TRUE" chip       | Draw+Chip | x900..1010 y164..188
 *  b5 | check R + "TRUE" chip       | Draw+Chip | x900..1010 y192..216
 *  b6 | "does R explain A? YES"     | T mid  | x?..?  y219..250 (bl240)
 *  b6 | option 1 (12 anek green)    | T st   | x100..330 y257..270 (bl266)
 *  b6 | underline under option 1    | Draw   | y274  x98..336
 *     | option 2 (12 anek ink)      | T st   | x100..?  y279..292 (bl288)
 *     | option 3 (12 anek ink)      | T st   | x100..?  y301..314 (bl310)
 *     | option 4 (12 anek ink)      | T st   | x100..?  y323..336 (bl332)
 *  b7 | cross-out over option 2     | Draw   | x100 y278 w250 h20
 *  b7 | trap line (script13 red)    | T mid  | x308..772 y347..371 (bl364)
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
  crossD,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function B11Ch01Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — Example 1 title */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("Example 1 — Define metabolism (CBSE, 2 marks)", "Example 1 — Metabolism define karo (CBSE, 2 marks)")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2)} d="M 330 88 C 430 84, 650 84, 750 88" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 1 — mark 1: the definition */}
      <Fade on={beat === 1} delay={dl(1, 0.2)}>
        <T x={60} y={130} size={13} fill={AMBER_DARK} weight={700} anchor="start">
          {t("MARK 1 — DEFINITION", "MARK 1 — DEFINITION")}
        </T>
      </Fade>
      <Fade on={beat === 1} delay={dl(1, 0.7)}>
        <Draw on={true} d="M 60 142 L 230 142" stroke={AMBER_DARK} sw={1.6} dur={0.4} />
      </Fade>
      <Fade on={beat === 1} delay={dl(1, 1.3)}>
        <T x={60} y={164} size={15} fill={INK} script anchor="start">
          {t(
            "metabolism = sum of ALL reactions — anabolic + catabolic",
            "metabolism = SAARI reactions ka sum — anabolic + catabolic"
          )}
        </T>
      </Fade>

      {/* beat 2 — mark 2: the no-exception reason */}
      <Fade on={beat === 2} delay={dl(2, 0.2)}>
        <T x={60} y={196} size={13} fill={AMBER_DARK} weight={700} anchor="start">
          {t("MARK 2 — REASON", "MARK 2 — REASON")}
        </T>
      </Fade>
      <Fade on={beat === 2} delay={dl(2, 0.7)}>
        <Draw on={true} d="M 60 208 L 200 208" stroke={AMBER_DARK} sw={1.6} dur={0.4} />
      </Fade>
      <Fade on={beat === 2} delay={dl(2, 1.3)}>
        <T x={60} y={228} size={15} fill={INK} script anchor="start">
          {t(
            "ALL living show it; NO non-living does it alone",
            "SAARE living dikhate hain; KOI non-living akele nahi karta"
          )}
        </T>
      </Fade>

      {/* beat 3 — the answer structure that earns full marks */}
      <Fade on={beat === 3} delay={dl(3, 0.3)}>
        <Chip x={310} y={252} w={460} h={32} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14} script={false}>
          {t(
            "DEFINITION + NO-EXCEPTION JUSTIFICATION = FULL MARKS",
            "DEFINITION + NO-EXCEPTION JUSTIFICATION = FULL MARKS"
          )}
        </Chip>
      </Fade>

      {/* beat 4 — Example 2: the assertion-reason */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={130} size={20} fill={RED} script>
          {t("Example 2 — Assertion-Reason (HOTS)", "Example 2 — Assertion-Reason (HOTS)")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.4)} d="M 330 150 C 430 146, 650 146, 750 150" stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <T x={60} y={176} size={15} fill={INK} script={false} anchor="start">
          {t(
            "A: growth cannot be taken as a defining property",
            "A: growth ko defining property nahi maana ja sakta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={60} y={204} size={15} fill={INK} script={false} anchor="start">
          {t(
            "R: non-living objects (mountains, crystals) also increase in size",
            "R: non-living objects (mountains, crystals) bhi size mein badhte hain"
          )}
        </T>
      </Fade>

      {/* beat 5 — test each statement */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Draw on={true} d="M 902 172 L 908 178 L 920 164" stroke={GREEN} sw={2.4} dur={0.4} />
        <Chip x={928} y={164} w={82} h={24} fill={CREAM} stroke={GREEN} textFill={GREEN} size={12} script={false}>
          TRUE ✓
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <Draw on={true} d="M 902 200 L 908 206 L 920 192" stroke={GREEN} sw={2.4} dur={0.4} />
        <Chip x={928} y={192} w={82} h={24} fill={CREAM} stroke={GREEN} textFill={GREEN} size={12} script={false}>
          TRUE ✓
        </Chip>
      </Fade>

      {/* beat 6 — the key move: does R explain A? */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={240} size={16} fill={GREEN} script>
          {t("does R explain A? — YES", "kya R hi A ki explanation hai? — HAAN")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={100} y={266} size={12} fill={GREEN} weight={700} anchor="start">
          {t("1) Both true, R explains A ✓", "1) Both true, R explains A ✓")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.9)}>
        <Draw on={true} d="M 98 274 L 336 274" stroke={GREEN} sw={2.2} dur={0.5} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        <T x={100} y={288} size={12} fill={INK} script={false} anchor="start">
          {t("2) Both true, R does NOT explain A", "2) Both true, R does NOT explain A")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.9)}>
        <T x={100} y={310} size={12} fill={INK} script={false} anchor="start">
          {t("3) A true, R false", "3) A true, R false")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.3)}>
        <T x={100} y={332} size={12} fill={INK} script={false} anchor="start">
          {t("4) A false, R true", "4) A false, R true")}
        </T>
      </Fade>

      {/* beat 7 — the trap: option 2 */}
      <Draw on={beat >= 7} delay={dl(7, 0.3)} d={crossD(100, 278, 250, 20)} stroke={RED} sw={2.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={540} y={364} size={13} fill={RED} script>
          {t(
            "trap: R is TRUE but doesn't EXPLAIN A — always check causation",
            "trap: R TRUE hai par A ko EXPLAIN nahi karta — hamesha causation check karo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
