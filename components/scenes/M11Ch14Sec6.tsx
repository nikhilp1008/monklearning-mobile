/**
 * M11 Ch14 · Section 6 — "The algebra of events"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: concept. Reuses the Ch1Sec20
 * VennShade recipe-icon pattern (four small shaded icons in a row) — this
 * chapter's event algebra IS Chapter 1's set algebra, wearing new words.
 *
 * Beats (board_reveal_at_english [0,11.18,20.99,31.91,42.24,51.71,62.46]):
 *  0 heading
 *  1 complement icon: A′ = S − A
 *  2 label: A′ = NOT A
 *  3 union icon: A ∪ B = "A or B" = at least one occurs
 *  4 intersection icon: A ∩ B = "A and B" = both occur together
 *  5 difference icon: A − B = A ∩ B′ = "A but not B"
 *  6 GUARDRAIL: "or" → union, "and" → intersection — translate the word first
 *
 * Layout plan (4 icon columns cx=170/390/610/830, longer language counts):
 *  b1 | complement box(140,160,60,80) + circle r22  | Draw/VennShade | y160..240
 *  b1 | "A′ = S − A" (17, ink)                       | T mid  | y140..155
 *  b2 | "= NOT A" caption (13, ink)                  | T mid  | y260..273
 *  b3 | union twin circles r24 ±12 cy205             | Draw/VennShade | y181..229
 *  b3 | "A ∪ B" (17,ink) / "\"A or B\": at least one" | T      | y140..155 / y260..286
 *  b4 | intersection twin circles                     | Draw/VennShade | same geometry
 *  b4 | "A ∩ B" / "\"A and B\": both together"          | T
 *  b5 | difference twin circles                         | Draw/VennShade
 *  b5 | "A − B" / "= A ∩ B′ = \"A but not B\""            | T
 *  b6 | guardrail chip (red, w720 h44)                    | Chip   | x180..900 y330..374
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
  INK,
  MUTED,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { circleD, roundRectD, VennShade } from "./math-kit";

const AMBER_FILL = "#EEA31F";

export default function M11Ch14Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const cy = 205;
  const r = 24;
  const off = 12;

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t('translate the word first: "or" → ∪, "and" → ∩', '"or" → ∪, "and" → ∩ — pehle word translate karo')}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={104} size={20} fill={INK} weight={700}>
          {t("The algebra of events (set operations)", "Events ki algebra (set operations)")}
        </T>
      </Fade>

      {/* ===== column 1 — complement ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={170} y={145} size={17} fill={INK} weight={700}>
          {"A′ = S − A"}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d={roundRectD(140, 160, 60, 80, 5)} stroke={MUTED} sw={1.6} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.1)} d={circleD(170, 205, 22)} stroke={INK} sw={1.8} dur={0.4} />
      <VennShade
        on={beat >= 1}
        delay={dl(1, 1.6)}
        include={[]}
        exclude={[{ cx: 170, cy: 205, r: 22 }]}
        fill={AMBER_FILL}
        x={140}
        y={160}
        w={60}
        h={80}
      />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={170} y={268} size={13} fill={INK} weight={600}>
          {t("= NOT A", "= NOT A")}
        </T>
      </Fade>

      {/* ===== column 2 — union ===== */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={390} y={145} size={17} fill={INK} weight={700}>
          {"A ∪ B"}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d={circleD(390 - off, cy, r)} stroke={INK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 0.9)} d={circleD(390 + off, cy, r)} stroke={INK} sw={1.8} dur={0.4} />
      <VennShade on={beat >= 3} delay={dl(3, 1.3)} include={[{ cx: 390 - off, cy, r }]} fill={AMBER_FILL} x={340} y={165} w={100} h={80} />
      <VennShade on={beat >= 3} delay={dl(3, 1.3)} include={[{ cx: 390 + off, cy, r }]} fill={AMBER_FILL} x={340} y={165} w={100} h={80} />
      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        <T x={390} y={262} size={13} fill={INK} weight={600}>
          {t('"A or B"', '"A or B"')}
        </T>
        <T x={390} y={280} size={12} fill={MUTED}>
          {t("at least one occurs", "kam se kam ek hota hai")}
        </T>
      </Fade>

      {/* ===== column 3 — intersection ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={610} y={145} size={17} fill={INK} weight={700}>
          {"A ∩ B"}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.6)} d={circleD(610 - off, cy, r)} stroke={INK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 0.9)} d={circleD(610 + off, cy, r)} stroke={INK} sw={1.8} dur={0.4} />
      <VennShade
        on={beat >= 4}
        delay={dl(4, 1.3)}
        include={[{ cx: 610 - off, cy, r }, { cx: 610 + off, cy, r }]}
        fill={AMBER_FILL}
        x={560}
        y={165}
        w={100}
        h={80}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.9)}>
        <T x={610} y={262} size={13} fill={INK} weight={600}>
          {t('"A and B"', '"A and B"')}
        </T>
        <T x={610} y={280} size={12} fill={MUTED}>
          {t("both occur together", "dono saath hote hain")}
        </T>
      </Fade>

      {/* ===== column 4 — difference ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={830} y={145} size={17} fill={INK} weight={700}>
          {"A − B"}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d={circleD(830 - off, cy, r)} stroke={INK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 0.9)} d={circleD(830 + off, cy, r)} stroke={INK} sw={1.8} dur={0.4} />
      <VennShade
        on={beat >= 5}
        delay={dl(5, 1.3)}
        include={[{ cx: 830 - off, cy, r }]}
        exclude={[{ cx: 830 + off, cy, r }]}
        fill={AMBER_FILL}
        x={780}
        y={165}
        w={100}
        h={80}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.9)}>
        <T x={830} y={262} size={13} fill={INK} weight={600}>
          {"= A ∩ B′"}
        </T>
        <T x={830} y={280} size={12} fill={MUTED}>
          {t('"A but not B"', '"A but not B"')}
        </T>
      </Fade>

      {/* beat 6 — guardrail */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={180} y={330} w={720} h={48} fill={CREAM} stroke={RED} textFill={RED} size={18} script={false}>
          {t('"or" → UNION      "and" → INTERSECTION', '"or" → UNION      "and" → INTERSECTION')}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={540} y={404} size={14} fill={INK} script weight={700}>
          {t("translate the English word first — the symbol follows", "pehle English word translate karo — symbol khud aa jaayega")}
        </T>
      </Fade>
    </Scene>
  );
}
