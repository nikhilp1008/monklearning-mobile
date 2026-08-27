/**
 * C11 Chemistry Ch03 · Section 3 — "Early clues: triads and octaves"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 8.28, 27.9, 43.09, 59.48, 73.22, 87.47, 93.27]):
 *  0 title + underline
 *  1 Doebereiner triad: Li(7) Na(23) K(39) cells, arrows in, green ring on Na
 *  2 the formula stamped + worked check (23 ≈ (7+39)÷2 = 23 ✓)
 *  3 Newlands octaves: 8-chip row (H..F), curved "repeats" arc under it
 *  4 red-margin: held only up to calcium — then collapsed
 *  5 verdict chip: these were clues, not laws
 *  6 new heading: why examiners love this corner
 *  7 closing green stamp: exceptions = honesty about a rule's limits
 *
 * Layout plan (2-line cells fixed to avoid symbol/mass overlap — h58, mass
 * baseline pushed to +21 below symbol baseline):
 *  b1 | 3 cells (Li/Na/K)          | Draw   | x340..750  y94..152
 *  b1 | ring on Na (green)         | Draw   | c(545,123) rx69 ry41
 *  b1 | arrows ×2 (green)          | Draw   | (450,123)→(488,123) · (640,123)→(602,123)
 *  b1 | caption (script 14,green)  | T mid  | x?..?      y182..207 (bl 200)
 *  b2 | formula box                | Draw   | x270..810  y214..252
 *  b2 | formula text (16,w700,ink) | T mid  | x?..?      y226..243 (bl 238)
 *  b2 | check chip (green)         | Chip   | x400..680  y258..288
 *  b3 | 8 chips (H Li Be B C N O F)| Chip   | x145..935  y312..346
 *  b3 | number labels ×8           | T mid  | above each chip (bl 306)
 *  b3 | repeat arc (green)         | Draw   | x195..890  peak y~382
 *  b3 | "8th repeats the 1st!"     | T mid  | x?..?      y387..411 (bl 404)
 *  b4 | red margin bar             | Draw   | x70  y420..448
 *  b4 | collapse line (15,w700)    | T st   | x94..432   y428..445 (bl 440)
 *  b5 | verdict chip (amber)       | Chip   | x300..780  y460..490
 *  b6 | heading (18,w800,ink)      | T mid  | x?..?      y502..522 (bl 516)
 *  b6 | underline (amber)          | Draw   | y524 x350..730
 *  b7 | closing stamp (green)      | Chip   | x215..865  y532..562
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
  RED,
  Scene,
} from '@/components/scenes/kit';
import { curvedArrowD } from "./chem-kit";

const OCTAVE: { sym: string; n: number }[] = [
  { sym: "H", n: 1 },
  { sym: "Li", n: 2 },
  { sym: "Be", n: 3 },
  { sym: "B", n: 4 },
  { sym: "C", n: 5 },
  { sym: "N", n: 6 },
  { sym: "O", n: 7 },
  { sym: "F", n: 8 },
];
const OCT_X0 = 145;
const OCT_W = 90;
const OCT_GAP = 10;
const OCT_Y = 312;
const OCT_H = 34;

export default function C11Ch03Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("early clues: triads and octaves", "early clues: triads aur octaves")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 400 88 C 460 84, 620 84, 680 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — Doebereiner triad: Li Na K, middle mass ≈ average */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d="M 340 94 h 110 v 58 h -110 z" stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d="M 490 94 h 110 v 58 h -110 z" stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.9)} d="M 640 94 h 110 v 58 h -110 z" stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={395} y={119} size={22} fill={INK} weight={800}>Li</T>
        <T x={395} y={140} size={13} fill={MUTED}>mass 7</T>
        <T x={545} y={119} size={22} fill={INK} weight={800}>Na</T>
        <T x={545} y={140} size={13} fill={MUTED}>mass 23</T>
        <T x={695} y={119} size={22} fill={INK} weight={800}>K</T>
        <T x={695} y={140} size={13} fill={MUTED}>mass 39</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2)} d={arrowD(450, 123, 488, 123)} stroke={GREEN} sw={2.4} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 2.4)} d={arrowD(640, 123, 602, 123)} stroke={GREEN} sw={2.4} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 2.9)} d={ringD(545, 123, 69, 41)} stroke={GREEN} sw={3} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 3.7)}>
        <T x={540} y={200} size={14} fill={GREEN} script>
          {t("middle mass ≈ average of the outer two", "middle mass ≈ outer dono ka average")}
        </T>
      </Fade>

      {/* beat 2 — the formula, then the worked check */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 270 214 h 540 v 38 h -540 z" stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={540} y={238} size={16} weight={700} fill={INK}>
          {t("middle mass ≈ (first + last) ÷ 2", "middle mass ≈ (first + last) ÷ 2")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <Chip x={400} y={258} w={280} h={30} fill={GREEN} textFill="#fff" size={13} script>
          23 ≈ (7 + 39) ÷ 2 = 23 ✓
        </Chip>
      </Fade>

      {/* beat 3 — Newlands octaves: every 8th repeats, then it broke */}
      {OCTAVE.map((c, i) => {
        const x = OCT_X0 + i * (OCT_W + OCT_GAP);
        return (
          <Fade key={c.sym} on={beat >= 3} delay={dl(3, 0.2 + i * 0.25)}>
            <T x={x + OCT_W / 2} y={306} size={11} fill={MUTED}>{c.n}</T>
            <Chip x={x} y={OCT_Y} w={OCT_W} h={OCT_H} fill="#FFFEFB" stroke={MUTED} textFill={INK} size={15} script={false}>
              {c.sym}
            </Chip>
          </Fade>
        );
      })}
      <Draw
        on={beat >= 3}
        delay={dl(3, 2.5)}
        d={curvedArrowD(890, 346, 195, 346, 36)}
        stroke={GREEN}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 3} delay={dl(3, 3.3)}>
        <T x={540} y={404} size={13} fill={GREEN} script>
          {t("8th note repeats the 1st!", "8vaan note pehle jaisa!")}
        </T>
      </Fade>

      {/* beat 4 — the catch: broke after calcium */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 70 420 L 70 448" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={94} y={440} size={15} weight={700} fill={INK} anchor="start">
          {t("held only up to calcium — then it collapsed", "sirf calcium tak chala — phir collapse")}
        </T>
      </Fade>

      {/* beat 5 — verdict: clues, not laws */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={300} y={460} w={480} h={30} fill={AMBER} textFill={INK} size={14} script>
          {t("these were clues, not laws", "ye clues the, laws nahi")}
        </Chip>
      </Fade>

      {/* beat 6 — new heading */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={516} size={18} weight={800} fill={INK}>
          {t("why examiners love this corner", "examiners ko ye corner kyun pasand hai")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1)} d="M 350 524 C 420 521, 660 521, 730 524" stroke={AMBER} sw={2.2} dur={0.5} />

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={215} y={532} w={650} h={30} fill={GREEN} textFill="#fff" size={14} script>
          {t("exceptions = the table being honest about a rule's limits", "exceptions = table ka apni rule ki limits maanna")}
        </Chip>
      </Fade>
    </Scene>
  );
}
