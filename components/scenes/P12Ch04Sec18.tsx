/**
 * P12Ch04 · Section 18 — "Concept Intuition, Part B: Forces and Twists Inside a Wire"
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * WHAT IT USED TO SHOW: an unfinished remnant of an earlier pass — two prose
 * panels, a verdict block and a full-width footer chip, all gated on beats
 * 0/1/6/7 of a 9-beat narration. Beats 2, 3, 4, 5 and 8 never fired, so the
 * board froze for whole minutes, and the only four drawn strokes were the
 * title underline and three horizontal rules. No wires, no loop, no figure.
 *
 * WHAT THE NARRATION TEACHES: Part B carries the same law into a conductor.
 * A current is charges in motion, so summing q v × B over the carriers gives
 * F = I(L × B) — qv is simply replaced by IL. Two consequences follow: two
 * parallel wires each sit in the other's field and so pull or push (LIKE
 * currents ATTRACT — the reverse of charges, and the pre-2019 definition of
 * the ampere); and a loop in a uniform field feels equal, opposite, OFFSET
 * forces, so the net force is zero but a couple twists it — the motor and the
 * galvanometer. Four conditions close the part, each a specific exam trap.
 * Segment 4 narrates the parallel-wire figure element by element (both
 * currents up, wire 2 inside wire 1's field ring, red forces pointing at each
 * other), so that figure is drawn exactly as described.
 *
 * BEAT MAP (9 beats, gates 0..8 — every beat used):
 *   0  title + Part A → Part B (motors, meters, the ampere)
 *   1  the bridge: a current IS charges in motion, so just add them up
 *   2  the conductor law F = I(L × B) and the q v ↔ I L correspondence
 *   3  consequence ① — two parallel wires, each in the other's field
 *   4  THE PARALLEL-WIRE FIGURE (both currents up, the field ring, the ⊗ at
 *      wire 2, the two red forces pointing toward each other, the span d)
 *   5  LIKE CURRENTS ATTRACT · opposite repel · the old ampere
 *   6  consequence ② — THE LOOP FIGURE (B, the loop, F ⊙ / F ⊗ on the two
 *      sides, the rotation axis, the torque arc) and why a couple twists it
 *   7  "four conditions, four traps"
 *   8  the four conditions written out
 *
 * Layout: col A x44..350 (bridge + conductor law) · col B x368..700 (parallel
 * wires) · col C x718..1044 (the loop, then the four conditions).
 */

import React from "react";
import { Path } from 'react-native-svg';
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
  INK_LIGHT,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

/** circle as a drawable path */
const circD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy}`;
/** ⊗ — into the page */
const crossInD = (cx: number, cy: number, r: number) => {
  const k = r * 0.68;
  return `${circD(cx, cy, r)} M ${cx - k} ${cy - k} L ${cx + k} ${cy + k} M ${
    cx + k
  } ${cy - k} L ${cx - k} ${cy + k}`;
};
/** ⊙ — out of the page */
const dotOutD = (cx: number, cy: number, r: number) =>
  `${circD(cx, cy, r)} ${circD(cx, cy, r * 0.16)}`;
/** ↔ measurement span */
const spanD = (x1: number, x2: number, y: number) =>
  `${arrowD(x1, y, x2, y)} ${arrowD(x2, y, x1, y)}`;

export default function P12Ch04Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ═══ beat 0 — title ═══ */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("Part B — Forces & Twists Inside a Wire", "Part B — Forces & Twists Inside a Wire")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.4)}
        d="M 296 58 C 460 54, 640 62, 784 57"
        stroke={RED}
        sw={2.2}
        dur={0.7}
      />

      {/* ═════════════ COLUMN A — x 44..350 ═════════════ */}

      <Fade on={beat >= 0} delay={dl(0, 2.0)}>
        <T x={44} y={98} size={13} fill={RED} anchor="start" weight={800}>
          {t("PART A  →  PART B", "PART A  →  PART B")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.3)} d="M 44 104 L 190 104" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 0} delay={dl(0, 2.6)}>
        <T x={44} y={122} size={12.5} fill={INK} anchor="start">
          {t("Part A: free charges in open space", "Part A: free charges in open space")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3.0)}>
        <T x={44} y={140} size={12.5} fill={INK} anchor="start">
          {t("Part B: those same charges confined", "Part B: those same charges confined")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3.3)}>
        <T x={44} y={158} size={12.5} fill={INK} anchor="start">
          {t("inside a WIRE", "inside a WIRE")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3.7)}>
        <T x={44} y={182} size={12.5} fill={GREEN} anchor="start" weight={800}>
          {t("→ motors, meters, and the ampere itself", "→ motors, meters, and the ampere itself")}
        </T>
      </Fade>

      {/* beat 1 — the bridge */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={44} y={212} size={13} fill={RED} anchor="start" weight={800}>
          {t("THE BRIDGE", "THE BRIDGE")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d="M 44 218 L 144 218" stroke={RED} sw={1.8} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={44} y={238} size={13} fill={INK} anchor="start" weight={800}>
          {t("a current IS charges in motion", "a current IS charges in motion")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={44} y={258} size={12.5} fill={INK} anchor="start">
          {t("so every moving charge inside the wire", "so every moving charge inside the wire")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <T x={44} y={276} size={12.5} fill={INK} anchor="start">
          {t("feels q v × B, and the wire feels the", "feels q v × B, and the wire feels the")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.0)}>
        <T x={44} y={294} size={12.5} fill={INK} anchor="start">
          {t("SUM of all of them", "SUM of all of them")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={44} y={318} size={12.5} fill={MUTED} anchor="start">
          {t("nothing new is introduced — we are only", "nothing new is introduced — we are only")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.7)}>
        <T x={44} y={336} size={12.5} fill={MUTED} anchor="start">
          {t("adding up a law we already have", "adding up a law we already have")}
        </T>
      </Fade>

      {/* beat 2 — the conductor law */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={44} y={366} size={13} fill={RED} anchor="start" weight={800}>
          {t("THE CONDUCTOR LAW", "THE CONDUCTOR LAW")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d="M 44 372 L 208 372" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <Chip x={44} y={384} w={306} h={40} fill={CREAM} stroke={RED} textFill={INK} size={18}>
          F = I ( L × B )
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={44} y={444} size={12.5} fill={INK} anchor="start">
          {t("L points along the current flow, and its", "L points along the current flow, and its")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={44} y={462} size={12.5} fill={INK} anchor="start">
          {t("length is the wire inside the field", "length is the wire inside the field")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={44} y={492} size={14} fill={INK} anchor="start" weight={800}>
          {t("q v    ⟷    I L", "q v    ⟷    I L")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.6)} d={ringD(112, 487, 78, 20)} stroke={RED} sw={2.2} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 3.4)}>
        <T x={44} y={536} size={12.5} fill={MUTED} anchor="start">
          {t("the same swap we made in Subtopic 1,", "the same swap we made in Subtopic 1,")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.7)}>
        <T x={44} y={554} size={12.5} fill={MUTED} anchor="start">
          {t("run in the other direction", "run in the other direction")}
        </T>
      </Fade>

      {/* ═════════════ COLUMN B — x 368..700 ═════════════ */}

      {/* beat 3 — two parallel wires, the reasoning */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={368} y={98} size={13} fill={RED} anchor="start" weight={800}>
          {t("CONSEQUENCE ① — TWO PARALLEL WIRES", "CONSEQUENCE ① — TWO PARALLEL WIRES")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d="M 368 104 L 668 104" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={368} y={122} size={12.5} fill={INK} anchor="start">
          {t("wire 1 makes a field in the space around it", "wire 1 makes a field in the space around it")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={368} y={140} size={12.5} fill={INK} anchor="start">
          {t("wire 2 sits in that field carrying a current,", "wire 2 sits in that field carrying a current,")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={368} y={158} size={12.5} fill={INK} anchor="start">
          {t("so wire 2 feels a force — and vice versa", "so wire 2 feels a force — and vice versa")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        <T x={368} y={178} size={12.5} fill={GREEN} anchor="start" weight={800}>
          {t("the two wires push or pull on each other", "the two wires push or pull on each other")}
        </T>
      </Fade>

      {/* beat 4 — THE PARALLEL-WIRE FIGURE */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 500 210 L 500 430" stroke={INK} sw={2.8} dur={0.6} />
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d="M 600 210 L 600 430" stroke={INK} sw={2.8} dur={0.6} />
      <Draw on={beat >= 4} delay={dl(4, 0.9)} d={arrowD(500, 424, 500, 218)} stroke={GREEN} sw={2} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 1.2)} d={arrowD(600, 424, 600, 218)} stroke={GREEN} sw={2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={492} y={204} size={13} fill={GREEN} anchor="end" weight={800}>I₁</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={608} y={204} size={13} fill={GREEN} anchor="start" weight={800}>I₂</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.9)} d={circD(500, 320, 100)} stroke={AMBER_DARK} sw={1.8} dur={1.2} />
      <Fade on={beat >= 4} delay={dl(4, 3.0)}>
        <T x={500} y={436} size={12.5} fill={AMBER_DARK} weight={800}>
          {t("wire 1's field ring", "wire 1's field ring")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 3.3)} d={crossInD(640, 300, 9)} stroke={AMBER_DARK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 3.6)}>
        <T x={656} y={305} size={12.5} fill={AMBER_DARK} anchor="start" weight={800}>B₁</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 3.9)} d={arrowD(506, 300, 546, 300)} stroke={RED} sw={2.4} dur={0.35} />
      <Draw on={beat >= 4} delay={dl(4, 3.9)} d={arrowD(594, 300, 554, 300)} stroke={RED} sw={2.4} dur={0.35} />
      <Fade on={beat >= 4} delay={dl(4, 4.3)}>
        <T x={524} y={292} size={12.5} fill={RED} weight={800}>F</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.3)}>
        <T x={576} y={292} size={12.5} fill={RED} weight={800}>F</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 4.6)} d={spanD(500, 600, 458)} stroke={MUTED} sw={1.4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 5.0)}>
        <T x={550} y={478} size={12.5} fill={MUTED} weight={800}>d</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.3)}>
        <T x={368} y={500} size={12.5} fill={RED} anchor="start" weight={800}>
          {t("both currents run UPWARD ⇒ the two red", "both currents run UPWARD ⇒ the two red")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.6)}>
        <T x={368} y={518} size={12.5} fill={RED} anchor="start" weight={800}>
          {t("forces point toward each other", "forces point toward each other")}
        </T>
      </Fade>

      {/* beat 5 — like currents attract */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={368} y={532} w={332} h={36} fill={RED} textFill="#ffffff" size={14}>
          {t("LIKE CURRENTS ATTRACT", "LIKE CURRENTS ATTRACT")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={368} y={586} size={12.5} fill={INK} anchor="start">
          {t("opposite currents repel — charges do the reverse", "opposite currents repel — charges do the reverse")}
        </T>
      </Fade>

      {/* ═════════════ COLUMN C — x 718..1044 ═════════════ */}

      {/* beat 6 — the loop */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={718} y={98} size={13} fill={RED} anchor="start" weight={800}>
          {t("CONSEQUENCE ② — A CURRENT LOOP", "CONSEQUENCE ② — A CURRENT LOOP")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d="M 718 104 L 990 104" stroke={RED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={718} y={122} size={12.5} fill={INK} anchor="start">
          {t("opposite sides carry current opposite ways", "opposite sides carry current opposite ways")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={718} y={140} size={12.5} fill={INK} anchor="start">
          {t("⇒ equal and opposite forces, net F = 0", "⇒ equal and opposite forces, net F = 0")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={718} y={158} size={12.5} fill={INK} anchor="start">
          {t("but they are OFFSET, not along one line", "but they are OFFSET, not along one line")}
        </T>
      </Fade>
      {/* the loop figure */}
      <Draw on={beat >= 6} delay={dl(6, 1.9)} d={arrowD(752, 182, 1006, 182)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 2.3)}>
        <T x={1014} y={178} size={13} fill={AMBER_DARK} anchor="start" weight={800}>B</T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 2.5)}
        d="M 810 200 L 930 200 L 930 288 L 810 288 Z"
        stroke={INK}
        sw={2.4}
        dur={0.9}
      />
      <Draw on={beat >= 6} delay={dl(6, 3.3)} d={arrowD(810, 282, 810, 206)} stroke={GREEN} sw={2} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 3.5)} d={arrowD(930, 206, 930, 282)} stroke={GREEN} sw={2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 3.9)}>
        <T x={870} y={250} size={13} fill={GREEN} weight={800}>I</T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 4.1)} d={dotOutD(782, 244, 10)} stroke={RED} sw={2} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 4.3)} d={crossInD(958, 244, 10)} stroke={RED} sw={2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 4.6)}>
        <T x={782} y={224} size={12.5} fill={RED} weight={800}>F</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.6)}>
        <T x={958} y={224} size={12.5} fill={RED} weight={800}>F</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.9)}>
        <Path
          d="M 870 194 L 870 300"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.6}
          strokeDasharray="6 6"
        />
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 5.1)}
        d="M 812 306 C 830 336, 910 336, 928 310 M 918 302 L 928 310 L 916 318"
        stroke={RED}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 6} delay={dl(6, 5.7)}>
        <T x={870} y={348} size={14} fill={RED} weight={800}>τ</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6.0)}>
        <T x={718} y={374} size={12.5} fill={GREEN} anchor="start" weight={800}>
          {t("an offset pair of opposite forces = a COUPLE", "an offset pair of opposite forces = a COUPLE")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6.3)}>
        <T x={718} y={392} size={12.5} fill={INK} anchor="start">
          {t("the loop TWISTS until its face squarely", "the loop TWISTS until its face squarely")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6.6)}>
        <T x={718} y={410} size={12.5} fill={INK} anchor="start">
          {t("catches B — the motor and the galvanometer", "catches B — the motor and the galvanometer")}
        </T>
      </Fade>

      {/* beat 7 — the conditions heading */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={718} y={438} size={13} fill={RED} anchor="start" weight={800}>
          {t("FOUR CONDITIONS = FOUR EXAM TRAPS", "FOUR CONDITIONS = FOUR EXAM TRAPS")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 718 444 L 1002 444" stroke={RED} sw={1.8} dur={0.4} />

      {/* beat 8 — the four conditions */}
      <Fade on={beat >= 8} delay={dl(8, 0.2)}>
        <T x={718} y={462} size={12.5} fill={INK} anchor="start" weight={800}>
          {t("① v ∥ B ⇒ sin 0 = 0 ⇒ F = 0;  max at v ⊥ B", "① v ∥ B ⇒ sin 0 = 0 ⇒ F = 0;  max at v ⊥ B")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.5)}>
        <T x={718} y={480} size={12.5} fill={INK_LIGHT} anchor="start">
          {t("a charge along a field line sails straight through", "a charge along a field line sails straight through")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.9)}>
        <T x={718} y={502} size={12.5} fill={INK} anchor="start" weight={800}>
          {t("② the circle needs a UNIFORM field and", "② the circle needs a UNIFORM field and")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.2)}>
        <T x={718} y={520} size={12.5} fill={INK_LIGHT} anchor="start">
          {t("non-relativistic speeds — the cyclotron ceiling", "non-relativistic speeds — the cyclotron ceiling")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={718} y={542} size={12.5} fill={INK} anchor="start" weight={800}>
          {t("③ the torque formula assumes a uniform field", "③ the torque formula assumes a uniform field")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.9)}>
        <T x={718} y={560} size={12.5} fill={INK_LIGHT} anchor="start">
          {t("non-uniform ⇒ a net force too, so it drifts", "non-uniform ⇒ a net force too, so it drifts")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 2.3)}>
        <T x={718} y={580} size={12.5} fill={INK} anchor="start" weight={800}>
          {t("④ the wire formula assumes long, thin, straight", "④ the wire formula assumes long, thin, straight")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 2.6)}>
        <T x={718} y={594} size={12.5} fill={INK_LIGHT} anchor="start">
          {t("wires — it came from Subtopic 2's infinite wire", "wires — it came from Subtopic 2's infinite wire")}
        </T>
      </Fade>
    </Scene>
  );
}
