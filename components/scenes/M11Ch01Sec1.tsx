/**
 * M11 Ch01 · Section 1 — "What makes a collection a set"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: concept.
 *
 * Beats (board_reveal_at_english [0, 7.42, 26.2, 31.57, 48.3, 59.14, 78.17, 85.08]):
 *  0 title (always-on)
 *  1 ANCHOR+REPRESENT: "team sheet" card — well-defined = definite yes/no for any name
 *  2 label the names as "elements (members)"
 *  3 GUARDRAIL: "tall students" ✗ (opinion) vs "students > 170cm" ✓ (measurable)
 *  4 build roster set A = {2,3,5,7}; membership 3∈A / 4∉A (team-sheet card erased,
 *    frees the story band)
 *  5 repetition & order irrelevant: {1,2,2,3}={1,2,3}, {a,b,c}={c,a,b} (guardrail
 *    chips erased, frees the main-demo band)
 *  6 LAND: "how many = how many DISTINCT" boxed
 *  7 empty set ∅ = { }, no members at all
 *
 * Layout plan (boxes are estimated render boxes; longer language counts):
 *  b1 | card outline "TEAM SHEET" | Draw     | x70..440  y100..250
 *  b1 | "TEAM SHEET" title        | T mid    | x255 y128 (bl 128)
 *  b1 | 3 rows name+tick/cross    | T st/end | y160/195/230, name x100.., mark x410 end
 *  b2 | bracket                   | Draw     | x460..480 y145..235
 *  b2 | "= elements (members)"    | T st     | x490..670 y196 (bl 196)
 *  b3 | left chip "tall students" | Chip     | x90..390  y300..350
 *  b3 | cross-out over left chip  | Draw     | x90..390  y300..350
 *  b3 | left reason (red)         | T mid    | x240 y392 (bl 392)
 *  b3 | right chip "students>170cm"| Chip    | x560..960 y300..350 (stroke GREEN)
 *  b3 | right reason (green)      | T mid    | x760 y392 (bl 392)
 *  b4 | roster tokens ×5 (team-sheet card + b2 label erased → story band free)
 *     |                           | T st     | y150, x100/180/216/252/288
 *  b4 | chip "3 ∈ A" (green)      | Chip     | x100..230 y185..223
 *  b4 | chip "4 ∉ A" (red)        | Chip     | x260..390 y185..223
 *  b4 | caption ∈/∉ meaning       | T st     | x100..? y256 (bl 256)
 *  b5 | (guardrail chips erased → main-demo band free)
 *  b5 | line1 dup roster → clean  | T mid    | y330, x270 / 540 / 760
 *  b5 | cross-out dup "2"         | Draw     | over 2nd "2," token
 *  b5 | line2 order roster → same | T mid    | y410, x270 / 540 / 760
 *  b6 | verdict box (green)       | Chip-like| x80..520  y495..570
 *  b7 | ∅ = { } + caption         | T mid    | x780       y495..570
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
  Chip,
  crossD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch01Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const showCard = beat >= 1 && beat < 4;
  const showGuard = beat >= 3 && beat < 5;

  return (
    <Scene>
      {/* title — always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={30} fill={RED} script>
          {t("when is a collection a SET?", "collection kab SET banta hai?")}
        </T>
      </Fade>

      {/* beat 1 — team sheet: well-defined = definite yes/no for ANY name */}
      <Draw
        on={showCard}
        d={roundRectD(70, 100, 370, 150, 12)}
        stroke={INK}
        sw={2.4}
        delay={dl(1, 0)}
        dur={1.1}
      />
      <Fade on={showCard} delay={dl(1, 0.6)}>
        <T x={255} y={128} size={17} fill={AMBER_DARK} script>
          {t("TEAM SHEET", "TEAM SHEET")}
        </T>
      </Fade>
      {[
        { name: "Kohli", ok: true, y: 165 },
        { name: "Rohit", ok: true, y: 198 },
        { name: t("random fan", "random fan"), ok: false, y: 231 },
      ].map((row, i) => (
        <Fade key={row.name} on={showCard} delay={dl(1, 1.3 + i * 0.9)}>
          <T x={100} y={row.y} size={18} fill={INK} anchor="start">
            {row.name}
          </T>
          <T x={410} y={row.y} size={19} fill={row.ok ? GREEN : RED} anchor="end" weight={800}>
            {row.ok ? "✓" : "✗"}
          </T>
        </Fade>
      ))}

      {/* beat 2 — those objects are "elements / members" */}
      <Draw
        on={showCard && beat >= 2}
        d="M 460 145 L 480 145 L 480 235 L 460 235"
        stroke={MUTED}
        sw={2}
        delay={dl(2, 0.2)}
        dur={0.6}
      />
      <Fade on={showCard && beat >= 2} delay={dl(2, 0.9)}>
        <T x={492} y={196} size={18} fill={INK} anchor="start">
          {t("= elements (members)", "= elements (members)")}
        </T>
      </Fade>

      {/* beat 3 — GUARDRAIL: opinion vs measurable */}
      <Fade on={showGuard} delay={dl(3, 0.2)}>
        <Chip x={90} y={300} w={300} h={50} fill={CREAM} stroke={INK} textFill={INK} size={19}>
          {t("“tall students”", "“tall students”")}
        </Chip>
      </Fade>
      <Draw
        on={showGuard}
        d={crossD(90, 300, 300, 50)}
        stroke={RED}
        sw={3}
        delay={dl(3, 1.6)}
        dur={0.6}
      />
      <Fade on={showGuard} delay={dl(3, 2.4)}>
        <T x={240} y={392} size={16} fill={RED} script>
          {t("✗ opinion — not well-defined", "✗ opinion — well-defined nahi")}
        </T>
      </Fade>
      <Fade on={showGuard} delay={dl(3, 3.4)}>
        <Chip x={560} y={300} w={400} h={50} fill={CREAM} stroke={GREEN} textFill={INK} size={19}>
          {t("“students taller than 170 cm”", "“170 cm se lambe students”")}
        </Chip>
      </Fade>
      <Fade on={showGuard} delay={dl(3, 4.6)}>
        <T x={760} y={392} size={16} fill={GREEN} script>
          {t("✓ measurable — well-defined", "✓ measurable — well-defined hai")}
        </T>
      </Fade>

      {/* beat 4 — build the roster set A = {2,3,5,7}; membership ∈ / ∉ */}
      {[
        { s: "A = {", x: 100 },
        { s: "2,", x: 180 },
        { s: "3,", x: 216 },
        { s: "5,", x: 252 },
        { s: "7 }", x: 288 },
      ].map((tok, i) => (
        <Fade key={tok.s + i} on={beat >= 4} delay={dl(4, 0.3 + i * 0.55)}>
          <T x={tok.x} y={150} size={26} fill={INK} anchor="start" weight={800}>
            {tok.s}
          </T>
        </Fade>
      ))}
      <Fade on={beat >= 4} delay={dl(4, 3.4)}>
        <Chip x={100} y={185} w={130} h={38} fill={GREEN} textFill="#fff" size={19} script={false}>
          3 ∈ A
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.2)}>
        <Chip x={260} y={185} w={130} h={38} fill={RED} textFill="#fff" size={19} script={false}>
          4 ∉ A
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.2)}>
        <T x={100} y={258} size={15} fill={MUTED} script anchor="start">
          {t(
            "∈ = “is an element of”   ∉ = “is not an element of”",
            "∈ = “is an element of”   ∉ = “is not an element of”"
          )}
        </T>
      </Fade>

      {/* beat 5 — repetition & order are irrelevant */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={190} y={330} size={22} fill={INK} anchor="start" weight={700}>
          {"{1, "}
        </T>
        <T x={240} y={330} size={22} fill={INK} anchor="start" weight={700}>
          {"2, "}
        </T>
        <T x={278} y={330} size={22} fill={INK} anchor="start" weight={700}>
          {"2, "}
        </T>
        <T x={316} y={330} size={22} fill={INK} anchor="start" weight={700}>
          {"3}"}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        d={crossD(278, 313, 38, 24)}
        stroke={RED}
        sw={2.4}
        delay={dl(5, 1.3)}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={470} y={330} size={22} fill={MUTED}>
          {"="}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <T x={620} y={330} size={22} fill={GREEN} weight={700}>
          {"{1, 2, 3}"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4.6)}>
        <T x={270} y={410} size={22} fill={INK} weight={700}>
          {"{a, b, c}"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5.6)}>
        <T x={470} y={410} size={22} fill={MUTED}>
          {"="}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6.2)}>
        <T x={620} y={410} size={22} fill={GREEN} weight={700}>
          {"{c, a, b}"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7.2)}>
        <T x={780} y={370} size={16} fill={AMBER_DARK} script anchor="start">
          {t("order doesn’t matter", "order matter nahi karta")}
        </T>
      </Fade>

      {/* beat 6 — LAND: distinct elements */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Rect x={80} y={495} width={440} height={75} rx={12} fill={GREEN} opacity={0.12} stroke={GREEN} strokeWidth={2} />
        <T x={300} y={525} size={17} fill={INK} weight={700}>
          {t("“how many elements?” always means", "“kitne elements?” ka matlab hamesha")}
        </T>
        <T x={300} y={552} size={18} fill={GREEN} weight={800}>
          {t("how many DISTINCT elements", "kitne DISTINCT elements")}
        </T>
      </Fade>

      {/* beat 7 — the empty set */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Rect x={560} y={495} width={400} height={75} rx={12} fill={CREAM} stroke={AMBER} strokeWidth={2} />
        <T x={760} y={535} size={28} fill={INK} weight={800}>
          {"∅ = { }"}
        </T>
        <T x={760} y={560} size={15} fill={AMBER_DARK} script>
          {t("no members at all", "koi member hi nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
