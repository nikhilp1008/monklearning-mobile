/**
 * C11 Ch07 · Section 2 — "The oxidation-number lens — and three cautions"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 8.36, 21.93, 40.62, 53.76, 60.76, 75.95, 87.21]):
 *  0 hook: "electronic lens: powerful, but not perfect" (erases at beat1)
 *  1 THE DEMO: build CO₂ (O=C=O, lone pairs), red "who lost, who gained?" (erases at beat2)
 *  2 definition card: O.N. = hypothetical charge if each bond pair went to more EN atom
 *  3 red-margin rule: oxidation = ↑ O.N. · reduction = ↓ O.N.  (2,3 stay for rest of section)
 *  4 "THREE CAUTIONS" heading + 3 empty numbered badges
 *  5 caution 1 text fills in (O.N. ≠ charge, ≠ valency)
 *  6 caution 2 text + mini S–S diagram (identical atoms split equally → 0)
 *  7 caution 3 text, emphasised red (fractional O.N. = average only)
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s · Kalam bl−1.3s..+0.5s; longer language counts):
 *  b0 | intro (script 18 muted)   | T mid | x540 bl110, wavy underline y122
 *  b1 | O/C/O labels (sans26 800) | T mid | x300/420/540 bl256
 *  b1 | double bonds              | Draw  | x320..400 & x442..520 y248
 *  b1 | lone pairs ×4             | LonePair | (300,222)(300,274)(540,222)(540,274)
 *  b1 | question caption (script20 red) | T mid | x420 bl330
 *  b2 | definition card           | Draw+T| x64..1016 y96..172, 2 lines bl126/152
 *  b3 | margin bar + rule (red 18)| Draw+T| x64 y188..218, text x80 bl208
 *  b4 | heading (sans20 800)      | T st  | x64 bl250
 *  b4 | badges 1/2/3 (empty)      | circle| (90,288)(90,378)(90,468) r18
 *  b5 | caution1 2-line (sans)    | T st  | x125 bl290/324
 *  b6 | caution2 2-line + S-S     | T st  | x125 bl380/414; SS diagram x780..900 y360..394
 *  b7 | caution3 2-line (red)     | T st  | x125 bl470/504
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { doubleBondD, LonePair, bondD } from "./chem-kit";

function Badge({
  on,
  delay,
  cx,
  cy,
  n,
  stroke = INK,
}: {
  on: boolean;
  delay: number;
  cx: number;
  cy: number;
  n: string;
  stroke?: string;
}) {
  return (
    <>
      <Draw
        on={on}
        delay={delay}
        d={`M ${cx - 18} ${cy} a 18 18 0 1 0 36 0 a 18 18 0 1 0 -36 0`}
        stroke={stroke}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={on} delay={delay + 0.2}>
        <T x={cx} y={cy + 6} size={16} fill={stroke} weight={800}>
          {n}
        </T>
      </Fade>
    </>
  );
}

export default function C11Ch07Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={27} fill={RED} script>
          {t("O.N. = the bookkeeping charge chemists invented", "O.N. = chemists ka bookkeeping charge")}
        </T>
      </Fade>

      {/* ===== beat 0 — hook (erases at beat 1) ===== */}
      <Fade on={beat >= 0 && beat < 1} delay={dl(0, 0.3)}>
        <T x={540} y={110} size={18} fill={MUTED} script>
          {t("electronic lens: powerful — but not perfect", "electronic lens: powerful — par perfect nahi")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0 && beat < 1}
        delay={dl(0, 1.6)}
        d="M 440 122 q 10 8 20 0 t 20 0 t 20 0 t 20 0 t 20 0 t 20 0"
        stroke={RED}
        sw={2}
        dur={0.7}
      />

      {/* ===== beat 1 — build CO2, ask who lost/gained (erases at beat 2) ===== */}
      <Fade on={beat >= 1 && beat < 2} delay={dl(1, 0.3)}>
        <T x={300} y={256} size={26} fill={INK} weight={800}>
          O
        </T>
      </Fade>
      <Fade on={beat >= 1 && beat < 2} delay={dl(1, 0.5)}>
        <T x={420} y={256} size={26} fill={INK} weight={800}>
          C
        </T>
      </Fade>
      <Fade on={beat >= 1 && beat < 2} delay={dl(1, 0.7)}>
        <T x={540} y={256} size={26} fill={INK} weight={800}>
          O
        </T>
      </Fade>
      <Draw
        on={beat >= 1 && beat < 2}
        delay={dl(1, 1.2)}
        d={doubleBondD(320, 248, 400, 248, 3)}
        stroke={INK}
        sw={2.4}
        dur={0.5}
      />
      <Draw
        on={beat >= 1 && beat < 2}
        delay={dl(1, 1.6)}
        d={doubleBondD(442, 248, 520, 248, 3)}
        stroke={INK}
        sw={2.4}
        dur={0.5}
      />
      <LonePair on={beat >= 1 && beat < 2} delay={dl(1, 2.2)} cx={300} cy={222} angle={0} spread={7} />
      <LonePair on={beat >= 1 && beat < 2} delay={dl(1, 2.4)} cx={300} cy={274} angle={0} spread={7} />
      <LonePair on={beat >= 1 && beat < 2} delay={dl(1, 2.6)} cx={540} cy={222} angle={0} spread={7} />
      <LonePair on={beat >= 1 && beat < 2} delay={dl(1, 2.8)} cx={540} cy={274} angle={0} spread={7} />
      <Fade on={beat >= 1 && beat < 2} delay={dl(1, 3.6)}>
        <T x={420} y={330} size={20} fill={RED} script>
          {t("shared — not transferred. who lost, who gained?", "shared — transfer nahi. kisne khoya, kisne paaya?")}
        </T>
      </Fade>

      {/* ===== beat 2 — definition card (stays) ===== */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Rect x={64} y={96} width={952} height={76} rx={6} fill={CREAM} stroke={AMBER} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={540} y={126} size={18} fill={INK}>
          {t(
            "O.N. = the hypothetical charge an atom would carry",
            "O.N. = wo hypothetical charge jo atom pe hota"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={540} y={152} size={17} fill={AMBER_DARK}>
          {t(
            "if each bonding pair went to the more electronegative atom",
            "agar har bonding pair zyada electronegative atom ko mil jaaye"
          )}
        </T>
      </Fade>

      {/* ===== beat 3 — red-margin rule (stays) ===== */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 64 188 L 64 218" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={80} y={208} size={18} fill={RED} script anchor="start">
          {t("oxidation = ↑ O.N.  ·  reduction = ↓ O.N.", "oxidation = ↑ O.N.  ·  reduction = ↓ O.N.")}
        </T>
      </Fade>

      {/* ===== beat 4 — three cautions heading + empty badges (stays) ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={64} y={250} size={20} fill={INK} weight={800} anchor="start">
          {t("THREE CAUTIONS — examiners live here", "TEEN CAUTIONS — examiners yahin ghusते hain")}
        </T>
      </Fade>
      <Badge on={beat >= 4} delay={dl(4, 1.2)} cx={90} cy={288} n="1" />
      <Badge on={beat >= 4} delay={dl(4, 1.6)} cx={90} cy={378} n="2" />
      <Badge on={beat >= 4} delay={dl(4, 2)} cx={90} cy={468} n="3" stroke={RED} />

      {/* ===== beat 5 — caution 1 ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={125} y={290} size={19} fill={INK} weight={700} anchor="start">
          {t("O.N. ≠ real charge  ·  O.N. ≠ valency", "O.N. ≠ real charge  ·  O.N. ≠ valency")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={125} y={324} size={16} fill={MUTED} anchor="start">
          {t("valency: no sign — O.N.: signed, can be a fraction", "valency: sign nahi — O.N.: sign ke saath, fraction bhi")}
        </T>
      </Fade>

      {/* ===== beat 6 — caution 2 + S-S diagram ===== */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={125} y={380} size={19} fill={INK} weight={700} anchor="start">
          {t("identical atoms bonded (S–S) → split equally", "identical atoms bonded (S–S) → equal split")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={125} y={414} size={16} fill={MUTED} anchor="start">
          {t("each atom gets zero contribution from that bond", "har atom ko us bond se zero milta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={800} y={390} size={22} fill={INK} weight={800}>
          S
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={880} y={390} size={22} fill={INK} weight={800}>
          S
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 2)}
        d={bondD(818, 384, 862, 384)}
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <T x={840} y={364} size={16} fill={GREEN} weight={800}>
          0
        </T>
      </Fade>

      {/* ===== beat 7 — caution 3, the big one ===== */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={125} y={470} size={19} fill={RED} weight={700} anchor="start">
          {t("fractional O.N. is NEVER a real atom's charge", "fractional O.N. kabhi real atom ka charge nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={125} y={504} size={16} fill={MUTED} anchor="start">
          {t("it's only an average — the structure reveals the truth", "yeh sirf average hai — structure hi sach batata hai")}
        </T>
      </Fade>
    </Scene>
  );
}
