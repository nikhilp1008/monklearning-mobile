/**
 * M11 Ch02 · Section 10 — "A relation is a highlighted slice of A × B"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * First "Relations" section — introduces the arrow-diagram representation
 * (circleD set boundaries + arrowD mapped pairs), distinct from the A×B grid.
 *
 * Beats (board_reveal_at_english [0, 11.18, 30.63, 51.03, 75.01, 92.33, 109.99]):
 *  0 title (always-on) · 1 WhatsApp analogy (people vs numbers, specific links)
 *  2 boxed formula: R is a relation A→B ⟺ R⊆A×B
 *  3 timetable analogy: A×B = full grid; relation = the highlighter
 *  4 THE DEMO: arrow diagram — A={Riya,Aman,Sara}→B={101,102,103}, 3 of 9 chosen
 *  5 notation: a R b ⟺ (a,b) ∈ R
 *  6 guardrail: not new machinery — just a chosen portion of the grid
 *
 * Layout plan — boxes estimated:
 *  b0 | title (script 27, red)          | T mid  | x340..740  y32..85  (bl 64)
 *  b1 | analogy (16)                     | T mid  | x?..?      y98..115 (bl 105)
 *  b2 | chip formula (18,amber)          | Chip   | x330..750  y130..162
 *  b3 | analogy2 (15)                    | T mid  | x?..?      y173..193 (bl 188)
 *  b4 | "A"/"B" labels (20,amber,w800)   | T mid  | x260..300/x760..800  y214..231 (bl 230)
 *  b4 | circle A (r95, cx280 cy345)      | Draw   | x185..375 y250..440
 *  b4 | circle B (r95, cx780 cy345)      | Draw   | x685..875 y250..440
 *  b4 | Riya/Aman/Sara (15)              | T mid  | x260..300  y305..385
 *  b4 | 101/102/103 (15)                 | T mid  | x760..800  y305..385
 *  b4 | 3 arrows                         | Draw   | (305,y)→(755,y) for y=310,345,380
 *  b4 | caption (15)                     | T mid  | x?..?      y453..470 (bl 465)
 *  b5 | notation (20)                    | T mid  | x?..?      y484..506 (bl 500)
 *  b6 | margin bar (red)                 | Draw   | x60  y520..550
 *  b6 | guardrail (15, red)              | T st   | x76..?     y527..544 (bl 538)
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
  AMBER_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { circleD } from "./math-kit";

const A_ITEMS = [
  { label: "Riya", y: 310 },
  { label: "Aman", y: 345 },
  { label: "Sara", y: 380 },
];
const B_ITEMS = [
  { label: "101", y: 310 },
  { label: "102", y: 345 },
  { label: "103", y: 380 },
];

export default function M11Ch02Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={27} fill={RED} anchor="middle" script>
          {t("What is a Relation?", "Relation kya hai?")}
        </T>
      </Fade>

      {/* beat 1 — WhatsApp contacts analogy */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={105} size={16} fill={INK} anchor="middle">
          {t(
            "WhatsApp: people ↔ phone numbers — only SPECIFIC links saved",
            "WhatsApp: log ↔ phone numbers — sirf SPECIFIC links saved"
          )}
        </T>
      </Fade>

      {/* beat 2 — the formal definition */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Chip x={330} y={130} w={420} h={32} fill="#FCF4E0" stroke={AMBER_DARK} textFill={AMBER_DARK} size={18} script={false}>
          {"R is a relation A→B ⇔ R ⊆ A×B"}
        </Chip>
      </Fade>

      {/* beat 3 — the timetable/highlighter analogy */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={188} size={15} fill={INK} anchor="middle">
          {t(
            "A×B = the full timetable; a relation = the highlighter",
            "A×B = poora timetable; relation = highlighter"
          )}
        </T>
      </Fade>

      {/* beat 4 — THE DEMO: arrow diagram, 3 of 9 pairs chosen */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={280} y={230} size={20} fill={AMBER_DARK} anchor="middle" weight={800}>
          A
        </T>
        <T x={780} y={230} size={20} fill={AMBER_DARK} anchor="middle" weight={800}>
          B
        </T>
      </Fade>
      <Draw on={beat >= 4} d={circleD(280, 345, 95)} stroke={INK} sw={2} delay={dl(4, 0.3)} />
      <Draw on={beat >= 4} d={circleD(780, 345, 95)} stroke={INK} sw={2} delay={dl(4, 0.5)} />
      {A_ITEMS.map((it, i) => (
        <Fade key={it.label} on={beat >= 4} delay={dl(4, 0.9 + i * 0.15)}>
          <T x={280} y={it.y} size={15} fill={INK} anchor="middle">
            {it.label}
          </T>
        </Fade>
      ))}
      {B_ITEMS.map((it, i) => (
        <Fade key={it.label} on={beat >= 4} delay={dl(4, 0.9 + i * 0.15)}>
          <T x={780} y={it.y} size={15} fill={INK} anchor="middle">
            {it.label}
          </T>
        </Fade>
      ))}
      {A_ITEMS.map((it, i) => (
        <Draw
          key={`arrow-${it.label}`}
          on={beat >= 4}
          d={arrowD(305, it.y - 4, 755, B_ITEMS[i].y - 4)}
          stroke={AMBER_DARK}
          sw={2}
          delay={dl(4, 1.5 + i * 0.3)}
        />
      ))}
      <Fade on={beat >= 4} delay={dl(4, 2.5)}>
        <T x={540} y={465} size={15} fill={INK} anchor="middle">
          {t("9 possible pairs, 3 chosen = R", "9 possible pairs, 3 chune gaye = R")}
        </T>
      </Fade>

      {/* beat 5 — notation */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={540} y={500} size={20} fill={INK} anchor="middle" weight={700}>
          {"a R b  ⇔  (a, b) ∈ R"}
        </T>
      </Fade>

      {/* beat 6 — guardrail: not new machinery */}
      <Draw on={beat >= 6} d="M 60 520 L 60 550" stroke={RED} sw={3} delay={dl(6, 0)} />
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={76} y={538} size={15} fill={RED} anchor="start">
          {t(
            "A relation is NOT new machinery — just a chosen portion of the grid.",
            "Relation koi nayi machinery NAHI — bas grid ka chuna hua hissa hai."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
