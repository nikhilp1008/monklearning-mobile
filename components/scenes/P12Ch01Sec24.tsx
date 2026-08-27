/**
 * P12Ch01 · Section 24 — "How Does One Charge Know the Other Is There?"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Concept of Field vs Action at a Distance
 *  - 2-Step Interaction Model:
 *      Step 1: Source charge Q modifies space around it creating an Electric Field E.
 *      Step 2: Field E exerts electrostatic force F = q₀ E on test charge q₀.
 *  - Drawn source charge Q with outward radiating field vectors & test charge q₀
 *
 * THREE DEFECTS FIXED (2026-08-21):
 *
 * 1. THE VERDICT CHIP NEVER RENDERED. This section has 8 narration segments
 *    (board_reveal_at_english [0, 6.14, 20.39, 38.49, 47.19, 61.44, 73.98,
 *    90.03]), so useBeat only ever returns 0..7 — but the closing chip was
 *    gated on `beat >= 8`. It now lands on beat 7, the segment that states it
 *    ("any second charge that wanders in simply responds to the field at its
 *    own location").
 *
 * 2. DEAD AIR IN THE MIDDLE. The old gate set was {0,1,2,3,5,6,8}: beats 4 and
 *    7 were never used, so the board sat frozen while the voice kept going.
 *    Every beat 0..7 now carries something, in reading order. The `dim` fades
 *    keyed on beats 6/7/8 were dropped with it — one of them never fired at
 *    all, and the other two would have greyed out live content.
 *
 * 3. OFF-SCRIPT NUMBER REMOVED. The beat-6 block asserted "field changes travel
 *    at c = 3 × 10⁸ m/s" — true, but the narration never mentions propagation
 *    speed. Replaced with what segment 6 actually says: the charge sets up a
 *    field at every point, whether or not anything is there to feel it. That
 *    was the only quantity on this board; nothing else needed correcting.
 *
 * Beats (8 segments → valid beats 0..7):
 *  0 "a question hanging in the air"               title + drawn underline
 *  1 "Coulomb's Law … something uncomfortable"     hook note
 *  2 "how does A know B is three metres away?"     Badge 1 + STEP 1 heading
 *  3 "the idea of a field"                         +Q with radiating field arrows
 *  4 "a second charge arriving and feeling a push" Badge 2 + STEP 2 heading
 *  5 "split the interaction into two stages"       F = q₀ · E panel
 *  6 "a charge modifies the space around it"       field-is-everywhere note
 *  7 "the second charge responds locally"          grand verdict chip
 */

import React from "react";
import { Circle, G, Rect } from 'react-native-svg';
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw
        on={on}
        delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 5} size={14} fill={RED} weight={800}>
          {n}
        </T>
      </Fade>
    </G>
  );
}

export default function P12Ch01Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ── BEAT 0: Title ── */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t(
            "how does one charge know the other is there?",
            "ek charge ko doosre ka pata kaise chalta hai?"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 260 70 C 440 66, 640 74, 820 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "resolving Faraday's puzzle of action at a distance through the Electric Field!",
            "Faraday ke action at a distance puzzle ko Electric Field se solve karna!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & the name for stage one ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("STEP 1: Source Charge Q Creates Field E", "STEP 1: Source Charge Q Creates Field E")}
        </T>
      </Fade>

      {/* ── BEAT 3: the field itself — charge alone, arrows filling space ── */}
      <Fade on={beat >= 3}>
        <G transform="translate(60, 185)">
          {/* Source Charge +Q */}
          <Circle cx={140} cy={60} r={22} fill="#ffe4e6" stroke={RED} strokeWidth={2} />
          <T x={140} y={67} anchor="middle" size={14} fill={RED} weight={800}>+Q</T>

          {/* Radiating Field Line Arrows */}
          <Draw on={beat >= 3} delay={dl(3, 0.5)} d={arrowD(165, 60, 230, 60)} stroke="#0284c7" sw={2} />
          <Draw on={beat >= 3} delay={dl(3, 0.5)} d={arrowD(140, 35, 140, -15)} stroke="#0284c7" sw={2} />
          <Draw on={beat >= 3} delay={dl(3, 0.5)} d={arrowD(140, 85, 140, 135)} stroke="#0284c7" sw={2} />
          <Draw on={beat >= 3} delay={dl(3, 0.5)} d={arrowD(115, 60, 50, 60)} stroke="#0284c7" sw={2} />

          <T x={215} y={45} anchor="start" size={12} fill="#0284c7" weight={700}>Electric Field E</T>
        </G>
      </Fade>

      {/* ── BEAT 4: Badge 2 & the name for stage two ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("STEP 2: Field E Exerts Force F = q₀ E", "STEP 2: Field E Exerts Force F = q₀ E")}
        </T>
      </Fade>

      {/* ── BEAT 5: the two-stage split, written out ── */}
      <Fade on={beat >= 5}>
        <G transform="translate(540, 185)">
          <Rect x={0} y={10} width={450} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={48} anchor="middle" size={24} fill={INK} weight={800}>
            F = q₀ · E
          </T>
          <T x={225} y={78} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("Local interaction at position of test charge q₀", "Test charge q₀ ki position par local interaction")}
          </T>
          <Draw on={beat >= 5} delay={dl(5, 1.6)} d="M 120 56 h 210 M 120 60 h 210" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 6: the field is there whether or not anything feels it ── */}
      <Fade on={beat >= 6}>
        <G transform="translate(60, 330)">
          <T x={0} y={20} anchor="start" size={13.5} weight={700} fill={GREEN}>
            {t("What the source charge actually does:", "What the source charge actually does:")}
          </T>
          <T x={0} y={50} anchor="start" size={16} fill={GREEN} weight={800}>
            {t(
              "it sets up a field at every point — whether or not anything is there to feel it",
              "it sets up a field at every point — whether or not anything is there to feel it"
            )}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 7: Grand Verdict Chip ── */}
      <Fade on={beat >= 7}>
        <Chip
          x={100}
          y={536}
          w={880}
          h={44}
          fill={GREEN}
          textFill="#ffffff"
          size={18}
        >
          {t(
            "★ VERDICT: Source Q creates Field E ⇒ Field E exerts local Force F = q₀ E!",
            "★ VERDICT: Source Q creates Field E ⇒ Field E exerts local Force F = q₀ E!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
