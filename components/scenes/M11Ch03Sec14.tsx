/**
 * M11 Ch03 · Section 14 — "Pitfalls with signs, ranges and reciprocals"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — a rapid numbered sequence of ringed pitfalls, one row lands per beat.
 * Closes subtopic 2 (Trigonometric Functions and Quadrant Signs).
 *
 * Beats (board_reveal_at_english [0, 4.27, 25.51, 38.31, 50.18, 64.09, 79.45]):
 *  0 subtitle: where the marks leak away
 *  1 #1 (emphasised): cos x=±√(1-sin²x) - ± set by quadrant, never default +
 *  2 #2 range-check reflex
 *  3 #3 reciprocal pairing, third-letter rule
 *  4 #4 Pythagorean pairing, don't swap
 *  5 #5 tan(π/2)/cot0 undefined (data bug: literal — → "-"), #6 reduce large angles first
 *  6 red-margin closer: golden rule - magnitude from identity, sign from quadrant
 *
 * Layout plan — single numbered column, red circle + text per row (same pattern as Sec7):
 *  b0 | subtitle (15,amber)              | T mid | x300..780  y84..99  (bl 92)
 *  b1 | circle #1 + text (16,w700)       | row   | cy128  text x90..630 y120..136 (bl 133)
 *  b2 | circle #2 + text (15)            | row   | cy172  text x90..610 y164..180 (bl 177)
 *  b3 | circle #3 + text (15)            | row   | cy216  text x90..560 y208..224 (bl 221)
 *  b4 | circle #4 + text (15)            | row   | cy260  text x90..500 y252..268 (bl 265)
 *  b5 | circle #5 + text (15)            | row   | cy304  text x90..430 y296..312 (bl 309)
 *  b5 | circle #6 + text (15)            | row   | cy340  text x90..470 y332..348 (bl 345)
 *  b6 | margin bar (red)                 | Draw  | x60  y415..470
 *  b6 | closer line1 (16,red,w700)       | T st  | x76..430   y427..443 (bl 439)
 *  b6 | closer line2 (14,red)            | T st  | x76..500   y451..465 (bl 461)
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

const ROWS: { cy: number; size: number; weight: number; en: string; hi: string }[] = [
  { cy: 128, size: 16, weight: 700, en: "cos x = ±√(1-sin²x) - the ± is set by the quadrant, never +.", hi: "cos x = ±√(1-sin²x) - ± quadrant tay karta hai, + default nahi." },
  { cy: 172, size: 15, weight: 600, en: "Never claim sin/cos outside [-1,1], or sec/csc inside (-1,1).", hi: "sin/cos ko [-1,1] se bahar, ya sec/csc ko (-1,1) ke andar mat maano." },
  { cy: 216, size: 15, weight: 600, en: "sec=1/cos, csc=1/sin - third-letter rule: cosec ↔ sine.", hi: "sec=1/cos, csc=1/sin - third-letter rule: cosec ↔ sine." },
  { cy: 260, size: 15, weight: 600, en: "1+tan²=sec², 1+cot²=csc² - don't swap them.", hi: "1+tan²=sec², 1+cot²=csc² - inhe swap mat karo." },
  { cy: 304, size: 15, weight: 600, en: "tan(π/2), cot 0 are undefined - not ∞ or 0.", hi: "tan(π/2), cot 0 undefined hain - ∞ ya 0 nahi." },
  { cy: 340, size: 15, weight: 600, en: "Reduce large angles before reading a sign.", hi: "Sign padhne se pehle bade angles reduce karo." },
];

export default function M11Ch03Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);
  const rowBeat = [1, 2, 3, 4, 5, 5];
  const rowDelay = [0, 0, 0, 0, 0, 0.6];

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={24} fill={RED} anchor="middle" script>
          {t("Pitfalls With Signs, Ranges and Reciprocals", "Signs, Ranges aur Reciprocals ke Pitfalls")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={92} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Where the marks leak away", "Marks kahan leak hote hain")}
        </T>
      </Fade>

      {/* beats 1-5 — numbered pitfall rows */}
      {ROWS.map((row, i) => (
        <Fade key={i} on={beat >= rowBeat[i]} delay={dl(rowBeat[i], rowDelay[i])}>
          <Circle cx={58} cy={row.cy} r={13} fill={RED} />
          <T x={58} y={row.cy + 5} size={13} fill="#FFFEFB" anchor="middle" weight={700}>
            {i + 1}
          </T>
          <T x={90} y={row.cy + 5} size={row.size} fill={INK} anchor="start" weight={row.weight}>
            {t(row.en, row.hi)}
          </T>
        </Fade>
      ))}

      {/* beat 6 — red-margin closer: the golden rule */}
      <Draw on={beat >= 6} d="M 60 415 L 60 470" stroke={RED} sw={3} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={76} y={439} size={16} fill={RED} anchor="start" weight={700}>
          {t("Golden rule: magnitude from the identity,", "Golden rule: magnitude identity se,")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={76} y={461} size={14} fill={RED} anchor="start">
          {t("sign from the quadrant - always two steps.", "sign quadrant se - hamesha do steps.")}
        </T>
      </Fade>
    </Scene>
  );
}
