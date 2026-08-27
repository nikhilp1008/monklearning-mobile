/**
 * M11 Ch03 · Section 35 — "Pitfalls in identities and compound angles"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — a rapid numbered sequence of ringed pitfalls, one row lands per beat.
 * Closes subtopic 5 (Trigonometric Identities and Compound Angle Formulas).
 *
 * Beats (board_reveal_at_english [0, 5.63, 22.02, 33.28, 47.96, 60.42, 79.19]):
 *  0 subtitle: identity traps
 *  1 #1 (emphasised): cosine/tangent sign flip - cos(A+B) minus, cos(A-B) plus
 *  2 #2 assuming distribution: sin(A+B)≠sinA+sinB
 *  3 #3 wrong cos2A face - match the form to what's given
 *  4 #4 dropping the leading 2 / leading minus
 *  5 #5 amplitude=√(a²+b²) never a+b, #6 conditional needs A+B+C=π (data bug: literal π escape)
 *  6 red-margin closer: reconstruct from cos(A-B), watch every ±, amplitude=√(a²+b²)
 *
 * Layout plan — single numbered column, red circle + text per row (same pattern as Sec7/14/19/26):
 *  b0 | subtitle (15,amber)              | T mid | x300..780  y84..99  (bl 92)
 *  b1 | circle #1 + text (16,w700)       | row   | cy128  text x90..820 y120..136 (bl 133)
 *  b2 | circle #2 + text (15)            | row   | cy172  text x90..600 y164..180 (bl 177)
 *  b3 | circle #3 + text (15)            | row   | cy216  text x90..750 y208..224 (bl 221)
 *  b4 | circle #4 + text (15)            | row   | cy260  text x90..800 y252..268 (bl 265)
 *  b5 | circle #5 + text (15)            | row   | cy304  text x90..500 y296..312 (bl 309)
 *  b5 | circle #6 + text (15)            | row   | cy340  text x90..620 y332..348 (bl 345)
 *  b6 | margin bar (red)                 | Draw  | x60  y415..470
 *  b6 | closer line1 (16,red,w700)       | T st  | x76..600   y427..443 (bl 439)
 *  b6 | closer line2 (14,red)            | T st  | x76..550   y451..465 (bl 461)
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

const ROWS: { cy: number; size: number; weight: number; en: string; hi: string }[] = [
  { cy: 128, size: 15, weight: 700, en: "Sign flip: cos(A+B) takes minus; cos(A-B) takes plus.", hi: "Sign flip: cos(A+B) minus leta; cos(A-B) plus leta." },
  { cy: 172, size: 15, weight: 600, en: "Assuming distribution: sin(A+B) ≠ sinA + sinB.", hi: "Distribution maan lena: sin(A+B) ≠ sinA + sinB." },
  { cy: 216, size: 15, weight: 600, en: "Wrong cos2A face - match the form to what's given.", hi: "Galat cos2A face - jo diya hai usse form match karo." },
  { cy: 260, size: 15, weight: 600, en: "Dropping the leading 2, or the leading minus in cosC-cosD.", hi: "Leading 2, ya cosC-cosD ka leading minus chhod dena." },
  { cy: 304, size: 15, weight: 600, en: "Amplitude is √(a²+b²), never a+b.", hi: "Amplitude √(a²+b²) hai, kabhi a+b nahi." },
  { cy: 340, size: 15, weight: 600, en: "Conditional identities need A+B+C=π.", hi: "Conditional identities ko A+B+C=π chahiye." },
];

export default function M11Ch03Sec35({ currentTime, reveals, language }: SceneProps) {
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
        <T x={540} y={62} size={22} fill={RED} anchor="middle" script>
          {t("Pitfalls in Identities and Compound Angles", "Identities aur Compound Angles ke Pitfalls")}
        </T>
      </Fade>

      {/* beat 0 — subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={92} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t("Identity traps", "Identity ke traps")}
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
          {t("Reconstruct from cos(A-B);", "cos(A-B) se reconstruct karo;")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={76} y={461} size={14} fill={RED} anchor="start">
          {t("watch every ±; amplitude is √(a²+b²).", "har ± dekho; amplitude √(a²+b²) hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
