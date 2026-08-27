/**
 * M11 Ch05 · Section 26 — "The five-step modeling routine"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. Vertical 5-box flowchart (left column, matches
 * the JSON's own diagram) with a moving spotlight highlight; right column
 * carries the interpret-guardrail and the mixture-setup preview.
 *
 * Beats (en [0,11.86,17.41,35.75,51.54,58.88,72.87], hi
 * [0,11.69,17.24,34.05,48.04,55.3,66.13]):
 *  0 heading — the routine's name
 *  1 diagram (high): all 5 steps drawn as a vertical flowchart, step 5 green
 *  2 text: steps 1-2 spotlighted (name unknown, translate)
 *  3 text: steps 3-4 spotlighted (hidden domain, solve/intersect)
 *  4 text: step 5 — interpret, checkmark lands
 *  5 note (red-margin, high): "201 boxes" (rewarded) vs bare "x≥200"
 *  6 text: mixture setup preview — bound pure/total, clear fractions
 *
 * Layout plan:
 *  b1 | 5 boxes + 4 arrows (14-15,ink/green) | Chip/Draw | x90..490 y150..456
 *  b2 | spotlight boxes 1,2 (amber stroke)
 *  b3 | spotlight boxes 3,4 (amber stroke)
 *  b4 | checkmark beside box 5              | Draw | c(520,431)
 *  b5 | GREEN chip / RED crossed chip        | Chip/Draw | x570..1000 y150/215
 *  b5 | caption (13,muted)                   | T mid | x785 bl288
 *  b6 | caption (15,ink,scr, full width)     | T mid | x540 bl560
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, crossD, INK, MUTED, GREEN, RED, AMBER, CREAM,
  Scene,
} from '@/components/scenes/kit';
import { checkD } from "./math-kit";

const STEPS = [
  { en: "1. Name the unknown (with units)", hi: "1. Unknown ko naam do (units ke saath)" },
  { en: "2. Translate each condition", hi: "2. Har condition translate karo" },
  { en: "3. Record the hidden domain", hi: "3. Hidden domain record karo" },
  { en: "4. Solve (systems: intersect)", hi: "4. Solve karo (systems: intersect)" },
  { en: "5. Interpret in the problem's words", hi: "5. Problem ke words mein interpret karo" },
];

const BOX_X = 90;
const BOX_W = 400;
const BOX_H = 50;
const GAP = 14;

export default function M11Ch05Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const strokeFor = (spotlightBeat: number) => (beat === spotlightBeat ? AMBER : INK);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("five steps, followed in order, every time", "paanch steps, order mein, har baar")}
        </T>
      </Fade>

      {/* beat 0 — the routine's name */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={290} y={118} size={16} fill={INK} script>
          {t("a disciplined routine for every word problem", "har word problem ke liye ek disciplined routine")}
        </T>
      </Fade>

      {/* beat 1 — the five-step flowchart */}
      {STEPS.map((s, i) => {
        const y = 150 + i * (BOX_H + GAP);
        const isLast = i === 4;
        const stroke = i < 2 ? strokeFor(2) : i < 4 ? strokeFor(3) : GREEN;
        return (
          <React.Fragment key={i}>
            <Fade on={beat >= 1} delay={dl(1, 0.3 + i * 0.5)}>
              <Chip x={BOX_X} y={y} w={BOX_W} h={BOX_H} fill={isLast ? "#DCFCE7" : CREAM} stroke={stroke} textFill={INK} size={14} script={false}>
                {t(s.en, s.hi)}
              </Chip>
            </Fade>
            {i < 4 && (
              <Draw on={beat >= 1} delay={dl(1, 0.6 + i * 0.5)} d={`M ${BOX_X + BOX_W / 2} ${y + BOX_H} L ${BOX_X + BOX_W / 2} ${y + BOX_H + GAP}`} stroke={INK} sw={2} dur={0.3} />
            )}
          </React.Fragment>
        );
      })}

      {/* beat 4 — step 5 pays off */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d={checkD(520, 431, 16)} stroke={GREEN} sw={2.8} dur={0.4} />

      {/* beat 5 — words beat symbols */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={570} y={150} w={430} h={48} fill={"#DCFCE7"} stroke={GREEN} textFill={INK} size={14} script={false}>
          {t("'the minimum number of boxes is 201'", "'boxes ki minimum sankhya 201 hai'")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <Chip x={570} y={215} w={430} h={44} fill={CREAM} stroke={RED} textFill={RED} size={16} script={false}>
          just &quot;x ≥ 200&quot;
        </Chip>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.4)} d={crossD(570, 215, 430, 44)} stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 2.0)}>
        <T x={785} y={288} size={13} fill={MUTED}>
          {t("this is what a marker rewards", "yahi marker reward karta hai")}
        </T>
      </Fade>

      {/* beat 6 — the mixture setup, previewed (full width, below everything) */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={560} size={15} fill={INK} script>
          {t(
            "mixture setup: bound pure/total, then clear fractions by the positive total",
            "mixture setup: pure/total bound karo, phir total se fractions clear karo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
