/**
 * M11 Ch03 · Section 19 — "Pitfalls in reduction and value recall"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — a rapid numbered sequence of ringed pitfalls, one row lands per beat.
 * Closes subtopic 3 (Standard Values, Even-Odd Nature and Allied Angles).
 *
 * Beats (board_reveal_at_english [0, 4.52, 21.5, 34.39, 45.65, 58.28, 67.84]):
 *  0 subtitle: reduction traps
 *  1 #1 (emphasised): wrong sign - comes from quadrant of the WHOLE allied angle via ASTC
 *  2 #2 forgetting the co-function switch at 90°/270°
 *  3 #3 misremembering a standard value - rebuild via the √0..4/2 pattern
 *  4 #4 even/odd slip - only cos, sec are even
 *  5 #5 reduce angles above 360°/below 0° by whole turns first
 *  6 red-margin closer: two routes cross-check - 135°=90°+45°=180°-45°
 *
 * Layout plan — single numbered column, red circle + text per row (same pattern as Sec7/14):
 *  b0 | subtitle (15,amber)              | T mid | x330..750  y84..99  (bl 92)
 *  b1 | circle #1 + text (16,w700)       | row   | cy128  text x90..760 y120..136 (bl 133)
 *  b2 | circle #2 + text (15)            | row   | cy172  text x90..700 y164..180 (bl 177)
 *  b3 | circle #3 + text (15)            | row   | cy216  text x90..730 y208..224 (bl 221)
 *  b4 | circle #4 + text (15)            | row   | cy260  text x90..520 y252..268 (bl 265)
 *  b5 | circle #5 + text (15)            | row   | cy304  text x90..640 y296..312 (bl 309)
 *  b6 | margin bar (red)                 | Draw  | x60  y340..386
 *  b6 | closer line1 (14,red,w700)       | T st  | x76..420   y352..368 (bl 362)
 *  b6 | closer line2 (14,red)            | T st  | x76..400   y374..390 (bl 384)
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

const ROWS: { cy: number; size: number; weight: number; en: string; hi: string }[] = [
  { cy: 128, size: 16, weight: 700, en: "Wrong sign - it comes from the WHOLE angle's quadrant via ASTC.", hi: "Galat sign - wo poore angle ke quadrant se ASTC se aata hai." },
  { cy: 172, size: 15, weight: 600, en: "Forgetting the co-function switch at 90°/270° (odd multiples).", hi: "90°/270° par co-function switch bhoolna (odd multiples)." },
  { cy: 216, size: 15, weight: 600, en: "Misremembering a value - rebuild via the √0..4/2 pattern.", hi: "Value galat yaad rakhna - √0..4/2 pattern se rebuild karo." },
  { cy: 260, size: 15, weight: 600, en: "Even/odd slip: only cos, sec are even.", hi: "Even/odd slip: sirf cos, sec even hain." },
  { cy: 304, size: 15, weight: 600, en: "Reduce angles above 360° or below 0° by whole turns first.", hi: "360° se upar ya 0° se neeche wale angles pehle reduce karo." },
];

export default function M11Ch03Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);
  const rowBeat = [1, 2, 3, 4, 5];

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={24} fill={RED} anchor="middle" script>
          {t("Pitfalls in Reduction and Value Recall", "Reduction aur Value Recall ke Pitfalls")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={92} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Reduction traps", "Reduction ke traps")}
        </T>
      </Fade>

      {/* beats 1-5 — numbered pitfall rows */}
      {ROWS.map((row, i) => (
        <Fade key={i} on={beat >= rowBeat[i]} delay={dl(rowBeat[i], 0)}>
          <Circle cx={58} cy={row.cy} r={13} fill={RED} />
          <T x={58} y={row.cy + 5} size={13} fill="#FFFEFB" anchor="middle" weight={700}>
            {i + 1}
          </T>
          <T x={90} y={row.cy + 5} size={row.size} fill={INK} anchor="start" weight={row.weight}>
            {t(row.en, row.hi)}
          </T>
        </Fade>
      ))}

      {/* beat 6 — red-margin closer: the two-route habit */}
      <Draw on={beat >= 6} d="M 60 340 L 60 386" stroke={RED} sw={3} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={76} y={362} size={14} fill={RED} anchor="start" weight={700}>
          {t("Two routes cross-check most reductions:", "Do routes zyada reductions cross-check karte hain:")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={76} y={384} size={14} fill={RED} anchor="start">
          135° = 90°+45° = 180°-45°.
        </T>
      </Fade>
    </Scene>
  );
}
