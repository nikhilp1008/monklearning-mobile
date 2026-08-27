/**
 * M11 Ch04 · Section 2 — "Powers of i cycle with period four"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept.
 *
 * Beats (board_reveal_at_english [0, 7.25, 18.01, 34.99, 43.86, 57.51, 67.24, 75.01]):
 *  0 heading: powers of i repeat every 4
 *  1 THE DIAGRAM: 4 chips i¹,i²,i³,i⁴ in a row, then a looping arrow back to i¹ ("repeats")
 *  2 general pattern: i^4k=1, i^4k+1=i, i^4k+2=-1, i^4k+3=-i, boxed
 *  3 method: n ÷ 4 → remainder flow (n | ÷4 | remainder r), erased once beat 4 lands
 *  4 worked: i^135 = i^3 = -i, ringed (this is board_content's own red-margin note)
 *  5 negative powers: i^-1 = i^3 = -i (add 4 first), underlined
 *  6 boxed formula: i^n + i^n+1 + i^n+2 + i^n+3 = 0
 *  7 verdict chip (green): any 4 consecutive powers of i sum to zero
 *
 * Layout plan (x540 centered column; b2/b3 vacate their space — on={beat>=2&&beat<4} / beat>=3&&beat<4 — before b4-b7 reuse it):
 *  b0 | heading text (17,amber_dark)      | T mid   | x540 y102
 *  b0 | underline                          | Draw    | x430..650 y118
 *  b1 | 4 chips i¹..i⁴                     | Chip    | y150 h44, x223..368 / 386..531 / 549..694 / 712..857
 *  b1 | loop arrow chip4→chip1             | Draw    | dips to y~260
 *  b1 | caption "…then it repeats"         | T mid   | x540 y292
 *  b2 | box + MathLine 4-case formula       | Draw+T  | x190..890 y325..371
 *  b3 | intro "To evaluate iⁿ:"            | MathLine| x480 y410 (ERASED at beat 4)
 *  b3 | 3-chip flow n → n÷4 → remainder     | Chip/Draw| y430 h40 (ERASED at beat 4)
 *  b4 | ring + MathLine i¹³⁵=i³=-i          | Draw+T  | cy356 rx150 ry24
 *  b5 | MathLine negative-power line + underline | T+Draw | x400 y428, underline y445
 *  b6 | box + MathLine sum formula          | Draw+T  | x410..670 y474..512
 *  b7 | verdict chip (green)                | Chip    | x384..696 y536..582
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
  ringD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

/* ---- inline "raised exponent" helper: no 2-D fraction/power primitive exists
   yet in math-kit, so compound exponents (letters, signs, sums) are rendered
   as a smaller text run raised above the baseline, matching the same
   text-box math the base spec already uses. Pure single digits use the
   font's native unicode superscript glyphs instead (see NOTATION). */
type Part = string | { sup: string };

function MathLine({
  x,
  y,
  size,
  fill,
  parts,
  weight = 700,
}: {
  x: number;
  y: number;
  size: number;
  fill: string;
  parts: Part[];
  weight?: number;
}) {
  let cx = x;
  return (
    <>
      {parts.map((p, i) => {
        if (typeof p === "string") {
          const w = p.length * size * 0.52;
          const el = (
            <T key={i} x={cx} y={y} size={size} fill={fill} anchor="start" weight={weight}>
              {p}
            </T>
          );
          cx += w;
          return el;
        }
        const es = size * 0.62;
        const w = p.sup.length * es * 0.52;
        const el = (
          <T key={i} x={cx} y={y - size * 0.42} size={es} fill={fill} anchor="start" weight={weight}>
            {p.sup}
          </T>
        );
        cx += w;
        return el;
      })}
    </>
  );
}

export default function M11Ch04Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Powers of i Cycle Every 4", "i ki Powers Har 4 Mein Cycle")}
        </T>
      </Fade>

      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={102} size={17} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Powers of i repeat every 4 steps", "i ki powers har 4 step mein repeat hoti hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.4)} d="M 430 118 L 650 118" stroke={AMBER} sw={2.2} dur={0.5} />

      {/* beat 1 — THE DIAGRAM: 4-chip cycle + loop arrow */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Chip x={223} y={150} w={145} h={44} fill={CREAM} stroke={INK} textFill={INK} size={17} script={false}>
          i¹ = i
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <Chip x={386} y={150} w={145} h={44} fill={CREAM} stroke={INK} textFill={RED} size={17} script={false}>
          i² = -1
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <Chip x={549} y={150} w={145} h={44} fill={CREAM} stroke={INK} textFill={INK} size={17} script={false}>
          i³ = -i
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <Chip x={712} y={150} w={145} h={44} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={17} script={false}>
          i⁴ = 1
        </Chip>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.1)}
        d="M 784.5 202 C 830 245, 680 260, 540 260 C 400 260, 295.5 235, 295.5 202 M 300.37 211.87 L 295.5 202 L 290.62 211.86"
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.1)}>
        <T x={540} y={292} size={14} fill={AMBER_DARK} anchor="middle" script>
          {t("…and then the cycle repeats forever", "…aur cycle hamesha repeat hoti hai")}
        </T>
      </Fade>

      {/* beat 2 — general 4-case pattern, boxed (vacated once beat 4 lands) */}
      <Draw
        on={beat >= 2 && beat < 4}
        delay={dl(2, 0)}
        d={roundRectD(190, 325, 700, 46, 10)}
        stroke={MUTED}
        sw={1.8}
        dur={0.7}
      />
      <Fade on={beat >= 2 && beat < 4} delay={dl(2, 0.8)}>
        <MathLine
          x={230}
          y={354}
          size={16}
          fill={INK}
          parts={[
            "i",
            { sup: "4k" },
            "=1,  i",
            { sup: "4k+1" },
            "=i,  i",
            { sup: "4k+2" },
            "=-1,  i",
            { sup: "4k+3" },
            "=-i",
          ]}
        />
      </Fade>

      {/* beat 3 — method: n → n÷4 → remainder (erased once beat 4 lands) */}
      <Fade on={beat >= 3 && beat < 4} delay={dl(3, 0)}>
        <MathLine x={480} y={410} size={16} fill={INK} parts={["To evaluate i", { sup: "n" }, ":"]} />
      </Fade>
      <Fade on={beat >= 3 && beat < 4} delay={dl(3, 0.6)}>
        <Chip x={290} y={430} w={60} h={40} fill={CREAM} stroke={INK} textFill={INK} size={16} script={false}>
          n
        </Chip>
      </Fade>
      <Draw on={beat >= 3 && beat < 4} delay={dl(3, 1.0)} d={arrowD(358, 450, 391, 450)} stroke={INK} sw={2} dur={0.35} />
      <Fade on={beat >= 3 && beat < 4} delay={dl(3, 1.3)}>
        <Chip x={396} y={430} w={130} h={40} fill={CREAM} stroke={INK} textFill={INK} size={16} script={false}>
          n ÷ 4
        </Chip>
      </Fade>
      <Draw on={beat >= 3 && beat < 4} delay={dl(3, 1.7)} d={arrowD(534, 450, 567, 450)} stroke={INK} sw={2} dur={0.35} />
      <Fade on={beat >= 3 && beat < 4} delay={dl(3, 2.0)}>
        <Chip x={572} y={430} w={210} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={16} script={false}>
          {t("remainder r", "remainder r")}
        </Chip>
      </Fade>

      {/* beat 4 — worked: i^135 = i^3 = -i, ringed */}
      <Draw on={beat >= 4} delay={dl(4, 0)} d={ringD(540, 356, 150, 24)} stroke={RED} sw={2.2} dur={0.9} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <MathLine
          x={412}
          y={360}
          size={16}
          fill={INK}
          parts={["135 = 4×33+3  ⇒  i", { sup: "135" }, " = i", { sup: "3" }, " = -i"]}
        />
      </Fade>

      {/* beat 5 — negative powers */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <MathLine
          x={400}
          y={428}
          size={15}
          fill={INK}
          parts={[t("Negative power — add 4 first: i", "Negative power — pehle 4 add karo: i"), { sup: "-1" }, " = i", { sup: "3" }, " = -i"]}
        />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.9)} d="M 400 445 L 745 445" stroke={AMBER} sw={2} dur={0.6} />

      {/* beat 6 — boxed sum-to-zero formula */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0)}
        d={roundRectD(410, 474, 260, 38, 9)}
        stroke={MUTED}
        sw={1.8}
        dur={0.6}
      />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <MathLine
          x={432}
          y={497}
          size={15}
          fill={INK}
          parts={["i", { sup: "n" }, "+i", { sup: "n+1" }, "+i", { sup: "n+2" }, "+i", { sup: "n+3" }, "=0"]}
        />
      </Fade>

      {/* beat 7 — verdict chip */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <Chip x={334} y={536} w={412} h={46} fill={CREAM} stroke={GREEN} textFill={INK} size={16} script={false}>
          {t("4 consecutive powers of i → sum = 0", "i ki 4 consecutive powers → sum = 0")}
        </Chip>
      </Fade>
    </Scene>
  );
}
