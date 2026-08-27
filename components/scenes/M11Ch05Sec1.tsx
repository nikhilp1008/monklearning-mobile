/**
 * M11 Ch05 · Section 1 — "From exact balance to a whole range"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md.
 *
 * Beats (board_reveal_at_english [0,12.89,31.91,37.63,45.82,54.7,68.52,80.9],
 * hinglish [0,7.42,20.14,27.48,35.24,42.75,55.21,66.39]):
 *  0 heading "Equation vs Inequality" — divider + two column headers
 *  1 formula 2x+1=7 ⇒ x=3 — left number line drawn, filled dot at x=3
 *  2 text: equation demands exact balance — arrow+label at the dot
 *  3 formula 2x+1>7 — right number line drawn
 *  4 text: wants every value that tips it — open dot at x=3, shaded ray, "x>3"
 *  5 note (red-margin): equation→POINT, inequality→INTERVAL — boxed chips
 *  6 text: real-life examples — ERASE comparison, 3 chips (luggage/marks/age)
 *  7 text: "computing that band…" — closing stamped chip + checkmark
 *
 * Layout plan (boxes = MEASURED-estimate render boxes; longer language counts):
 *  b0 | title (script 26, red)        | T mid  | x197..883  y36..81 (bl 68, always-on)
 *  b0 | divider                       | Draw   | x540  y100..400
 *  b0 | "EQUATION" (20,ink,w800)      | T mid  | x260..340  y108..121 (bl 124)
 *  b0 | "INEQUALITY" (20,ink,w800)    | T mid  | x724..836  y108..121 (bl 124)
 *  b1 | "2x + 1 = 7" (22,ink,w700)    | T mid  | x245..355  y153..177 (bl 170)
 *  b1 | "⇒ x = 3" (22,ink,w700)       | T mid  | x245..355  y193..217 (bl 210)
 *  b1 | left axis+ticks               | Draw   | x106..500  y324..336
 *  b1 | "0"/"6" numerals (14,muted)   | T mid  | x102..494  y349..364 (bl 360)
 *  b1 | dot x=3 (closed, green)       | circle | c(298,330) r5
 *  b1 | "x = 3" (14,green)            | T mid  | x280..316  y371..388 (bl 384)
 *  b2 | arrow to dot                  | Draw   | x298..300  y270..320
 *  b2 | "only one weight…" (15,muted) | T mid  | x151..449  y233..260 (bl 252, HI longer)
 *  b3 | "2x + 1 > 7" (22,ink,w700)    | T mid  | x725..835  y173..197 (bl 190)
 *  b3 | right axis+ticks              | Draw   | x586..980  y324..336
 *  b3 | "0"/"6" numerals (14,muted)   | T mid  | x582..974  y349..364 (bl 360)
 *  b4 | dot x=3 (open, green)         | circle | c(778,330) r5
 *  b4 | shaded ray                    | Draw   | x778..970  y330 (sw5, green)
 *  b4 | "x > 3" (14,green)            | T mid  | x761..796  y371..388 (bl 384)
 *  b5 | statement (script 18, red)    | T mid  | x273..807  y467..499 (bl 490)
 *  b5 | POINT chip (red/cream)        | Chip   | x240..360  y515..555
 *  b5 | INTERVAL chip (red/cream)     | Chip   | x720..840  y515..555
 *  b6 | [erase b0-b5 group: opacity→0]
 *  b6 | "inequalities everywhere:" (18,ink,script) | T mid | x397..683 y264..289 (bl 280)
 *  b6 | 3 chips (amber/cream) h48     | Chip   | y320..368  x200..400 / 440..640 / 680..880
 *  b7 | closing chip (green/white)    | Chip   | x350..730  y430..480
 *  b7 | checkmark                     | Draw   | x311..329  y446..462
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
  arrowD,
  INK,
  MUTED,
  GREEN,
  RED,
  AMBER,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { axisD, tickD, IntervalDot, lineD, checkD } from "./math-kit";

const EQL_X0 = 106;
const EQL_X1 = 490;
const INQ_X0 = 586;
const INQ_X1 = 970;
const Y_LINE = 330;

function ticksFor(x0: number): string {
  const parts: string[] = [];
  for (let i = 0; i <= 6; i++) parts.push(tickD(x0 + i * 64, Y_LINE, 6));
  return parts.join(" ");
}

export default function M11Ch05Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);
  // comparison group (beats 0-5) is erased once beat 6 lands — each element
  // gates on its own beat AND on the group still being "live"
  const cmp = (k: number) => beat >= k && beat < 6;

  return (
    <Scene>
      {/* title always-on — heading visible on the blank board before play */}
      <Fade on={true}>
        <T x={540} y={68} size={26} fill={RED} script>
          {t(
            "equation → a point. inequality → a range.",
            "equation → ek point. inequality → poora range."
          )}
        </T>
      </Fade>

      {/* comparison group — beats 0-5, erased (each element gated off) once beat 6 arrives */}
      {/* beat 0 — heading: divider + two column headers */}
      <Draw
        on={cmp(0)}
        delay={dl(0, 0.3)}
        d={lineD(540, 100, 540, 400)}
        stroke={MUTED}
        sw={1.6}
        dur={0.6}
      />
      <Fade on={cmp(0)} delay={dl(0, 1.0)}>
        <T x={300} y={124} size={20} fill={INK} weight={800}>
          {t("EQUATION", "EQUATION")}
        </T>
      </Fade>
      <Fade on={cmp(0)} delay={dl(0, 1.6)}>
        <T x={780} y={124} size={20} fill={INK} weight={800}>
          {t("INEQUALITY", "INEQUALITY")}
        </T>
      </Fade>

      {/* beat 1 — equation formula, left number line, the single-point answer */}
      <Fade on={cmp(1)} delay={dl(1, 0.3)}>
        <T x={300} y={170} size={22} fill={INK} weight={700}>
          2x + 1 = 7
        </T>
      </Fade>
      <Fade on={cmp(1)} delay={dl(1, 1.3)}>
        <T x={300} y={210} size={22} fill={INK} weight={700}>
          ⇒ x = 3
        </T>
      </Fade>
      <Draw on={cmp(1)} delay={dl(1, 2.3)} d={axisD(EQL_X0, EQL_X1, Y_LINE)} stroke={INK} sw={2} dur={1} />
      <Draw on={cmp(1)} delay={dl(1, 3.4)} d={ticksFor(EQL_X0)} stroke={INK} sw={1.4} dur={0.8} />
      <Fade on={cmp(1)} delay={dl(1, 4.3)}>
        <T x={EQL_X0} y={360} size={14} fill={MUTED}>
          0
        </T>
      </Fade>
      <Fade on={cmp(1)} delay={dl(1, 4.5)}>
        <T x={EQL_X1} y={360} size={14} fill={MUTED}>
          6
        </T>
      </Fade>
      <IntervalDot on={cmp(1)} delay={dl(1, 5.2)} x={298} y={Y_LINE} open={false} r={5} stroke={GREEN} />
      <Fade on={cmp(1)} delay={dl(1, 5.8)}>
        <T x={298} y={384} size={14} fill={GREEN}>
          x = 3
        </T>
      </Fade>

      {/* beat 2 — the "only one weight" callout */}
      <Draw on={cmp(2)} delay={dl(2, 0.3)} d={arrowD(300, 270, 298, 320)} stroke={MUTED} sw={2} dur={0.5} />
      <Fade on={cmp(2)} delay={dl(2, 1.0)}>
        <T x={300} y={252} size={15} fill={MUTED} script>
          {t("only one weight balances it", "sirf ek hi weight balance karta hai")}
        </T>
      </Fade>

      {/* beat 3 — inequality formula, right number line */}
      <Fade on={cmp(3)} delay={dl(3, 0.3)}>
        <T x={780} y={190} size={22} fill={INK} weight={700}>
          2x + 1 &gt; 7
        </T>
      </Fade>
      <Draw on={cmp(3)} delay={dl(3, 1.3)} d={axisD(INQ_X0, INQ_X1, Y_LINE)} stroke={INK} sw={2} dur={1} />
      <Draw on={cmp(3)} delay={dl(3, 2.4)} d={ticksFor(INQ_X0)} stroke={INK} sw={1.4} dur={0.8} />
      <Fade on={cmp(3)} delay={dl(3, 3.3)}>
        <T x={INQ_X0} y={360} size={14} fill={MUTED}>
          0
        </T>
      </Fade>
      <Fade on={cmp(3)} delay={dl(3, 3.5)}>
        <T x={INQ_X1} y={360} size={14} fill={MUTED}>
          6
        </T>
      </Fade>

      {/* beat 4 — every value beyond x=3 works: open dot, shaded ray */}
      <IntervalDot on={cmp(4)} delay={dl(4, 0.3)} x={778} y={Y_LINE} open={true} r={5} stroke={GREEN} />
      <Draw on={cmp(4)} delay={dl(4, 0.9)} d={lineD(778, Y_LINE, 966, Y_LINE)} stroke={GREEN} sw={5} dur={0.8} />
      <Fade on={cmp(4)} delay={dl(4, 2.0)}>
        <T x={778} y={384} size={14} fill={GREEN}>
          x &gt; 3
        </T>
      </Fade>

      {/* beat 5 — the guardrail: POINT vs INTERVAL */}
      <Fade on={cmp(5)} delay={dl(5, 0.2)}>
        <T x={540} y={490} size={18} fill={RED} script>
          {t(
            "equation → one POINT. inequality → a whole INTERVAL.",
            "equation → ek POINT. inequality → poora INTERVAL."
          )}
        </T>
      </Fade>
      <Fade on={cmp(5)} delay={dl(5, 0.9)}>
        <Chip x={240} y={515} w={120} h={40} fill={CREAM} stroke={RED} textFill={RED} size={19}>
          POINT
        </Chip>
      </Fade>
      <Fade on={cmp(5)} delay={dl(5, 1.5)}>
        <Chip x={720} y={515} w={120} h={40} fill={CREAM} stroke={RED} textFill={RED} size={19}>
          INTERVAL
        </Chip>
      </Fade>

      {/* beat 6 — real life is full of them (comparison erased above) */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={280} size={18} fill={INK} script>
          {t("inequalities are everywhere:", "inequality har jagah hai:")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <Chip x={200} y={320} w={200} h={48} fill={CREAM} stroke={AMBER} textFill={INK} size={19}>
          luggage ≤ 15 kg
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <Chip x={440} y={320} w={200} h={48} fill={CREAM} stroke={AMBER} textFill={INK} size={19}>
          pass marks ≥ 33
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.1)}>
        <Chip x={680} y={320} w={200} h={48} fill={CREAM} stroke={AMBER} textFill={INK} size={19}>
          voting age ≥ 18
        </Chip>
      </Fade>

      {/* beat 7 — landing: this whole chapter computes that band */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={350} y={430} w={380} h={50} fill={GREEN} textFill="#fff" size={20}>
          {t("that BAND = this whole chapter", "wahi BAND = ye poora chapter")}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.0)}
        d={checkD(320, 455, 18)}
        stroke={GREEN}
        sw={3}
        dur={0.5}
      />
    </Scene>
  );
}
