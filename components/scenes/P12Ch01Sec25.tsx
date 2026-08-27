/**
 * P12Ch01 · Section 25 — "Defining the Field: Force per Unit Positive Charge"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * THREE DEFECTS FIXED (2026-08-21):
 *
 * 1. THE VERDICT CHIP NEVER RENDERED. This section has 8 narration segments
 *    (board_reveal_at_english [0, 7.56, 19.39, 31.55, 58.14, 70.73, 85.21,
 *    103.0]), so useBeat only ever returns 0..7 — but the chip was gated on
 *    `beat >= 8`. It was invisible in production.
 *
 * 2. DEAD AIR. The old gate set was {0,1,2,4,6,8}: beats 3, 5 and 7 were never
 *    used, and the first 58 s of narration — 45% of the section — had nothing
 *    but a one-line hook note to look at.
 *
 * 3. THE BOARD TAUGHT CONTENT THE VOICE NEVER SPEAKS. The old scene was built
 *    around E = k Q / r² and "SI units N/C · dimensions [M L T⁻³ A⁻¹]".
 *    Neither the inverse-square law nor any unit or dimension appears anywhere
 *    in this narration. Meanwhile the voice spends segments 1–3 on a
 *    pond-and-leaf analogy the board never drew, and closes on the q₀ → 0
 *    caveat, which the board had already spent up front as a bare limit. The
 *    board is rebuilt from the narration: the pond picture, then E = F / q₀,
 *    then "we divided the test charge out", then the limiting caveat. No
 *    numeric quantity is asserted on the board now, so nothing can disagree
 *    with the voice.
 *
 * Beats (8 segments → valid beats 0..7):
 *  0 "the right picture in your head"            title + drawn underline
 *  1 "a stone dropped into a still pond"         hook + water line + stone
 *  2 "ripples spread … a leaf starts to bob"     ripples + leaf
 *  3 "why does the leaf move?"                   the local-disturbance reading
 *  4 "so let's make it quantitative"             Badge 2 + definition in words
 *  5 "in symbols: E equals F over q nought"      the boxed formula
 *  6 "that division is the whole point"          property-of-space lines
 *  7 "one honest caveat … q₀ tends to zero"      limit caveat + chip
 */

import React from "react";
import { Circle, Ellipse, G, Rect } from 'react-native-svg';
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
  INK_LIGHT,
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

export default function P12Ch01Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ── BEAT 0: Title ── */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={44} size={24} fill={RED} script>
          {t(
            "defining the field: force per unit positive charge",
            "defining the field: force per unit positive charge"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.2)}
        d="M 240 58 C 440 54, 640 62, 840 57"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={86} size={15} fill={MUTED} script anchor="start">
          {t(
            "a stone in a still pond, ripples across the whole surface, a leaf floating far away",
            "ek shaant talaab mein pathar, poori surface par ripples, aur door tairta hua ek patta"
          )}
        </T>
      </Fade>

      {/* ─────────── LEFT: the pond picture (beats 1–3) ─────────── */}
      <G transform="translate(40, 100)">
        <Badge n={1} cx={20} cy={18} on={beat >= 1} delay={dl(1, 0.6)} />
        <Fade on={beat >= 1} delay={dl(1, 0.9)}>
          <T x={45} y={23} size={14} fill={RED} weight={800} anchor="start">
            {t("THE POND PICTURE", "THE POND PICTURE")}
          </T>
        </Fade>

        {/* beat 1 — still water, and the stone going in */}
        <Draw on={beat >= 1} delay={dl(1, 1.2)} d="M 30 190 L 470 190" stroke={INK} sw={2} dur={0.7} />
        <Fade on={beat >= 1} delay={dl(1, 1.5)}>
          <Circle cx={70} cy={100} r={10} fill={INK} />
          <T x={70} y={82} size={12} fill={INK} weight={800}>
            {t("stone", "pathar")}
          </T>
        </Fade>
        <Draw on={beat >= 1} delay={dl(1, 1.8)} d={arrowD(70, 116, 70, 178)} stroke={INK_LIGHT} sw={2} dur={0.5} />

        {/* beat 2 — ripples spreading, and the leaf bobbing */}
        <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 100 190 C 118 168, 142 168, 160 190" stroke="#0284c7" sw={2.2} dur={0.4} />
        <Draw on={beat >= 2} delay={dl(2, 0.4)} d="M 170 190 C 188 170, 212 170, 230 190" stroke="#0284c7" sw={2.2} dur={0.4} />
        <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 240 190 C 258 172, 282 172, 300 190" stroke="#0284c7" sw={2.2} dur={0.4} />
        <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 310 190 C 328 174, 352 174, 370 190" stroke="#0284c7" sw={2.2} dur={0.4} />

        <Fade on={beat >= 2} delay={dl(2, 1.1)}>
          <Ellipse cx={420} cy={186} rx={17} ry={7} fill="#dcfce7" stroke={GREEN} strokeWidth={2} />
          <T x={420} y={148} size={12} fill={GREEN} weight={800}>
            {t("leaf", "patta")}
          </T>
        </Fade>
        <Draw on={beat >= 2} delay={dl(2, 1.3)} d={arrowD(420, 172, 420, 156)} stroke={GREEN} sw={2} dur={0.35} />

        <Fade on={beat >= 2} delay={dl(2, 1.6)}>
          <T x={235} y={216} size={12.5} fill={INK_LIGHT} weight={600}>
            {t("ripples fill the entire surface", "ripples poori surface bhar dete hain")}
          </T>
        </Fade>

        {/* beat 3 — why the leaf moves */}
        <Fade on={beat >= 3} delay={dl(3, 0.3)}>
          <T x={45} y={252} size={13.5} fill={INK} weight={800} anchor="start">
            {t("The leaf never feels the stone — it sank long ago.",
               "Patta pathar ko feel hi nahi karta — woh kab ka doob chuka hai.")}
          </T>
        </Fade>
        <Fade on={beat >= 3} delay={dl(3, 0.7)}>
          <T x={45} y={276} size={13.5} fill={INK} weight={800} anchor="start">
            {t("It responds to the ripple that has arrived at its own spot.",
               "Woh sirf apni jagah pahunche ripple ko respond karta hai.")}
          </T>
        </Fade>
        <Fade on={beat >= 3} delay={dl(3, 1.1)}>
          <T x={45} y={302} size={13.5} fill={GREEN} weight={800} anchor="start">
            {t("The electric field is exactly that ever-present disturbance.",
               "Electric field bilkul wahi hamesha-maujood disturbance hai.")}
          </T>
        </Fade>
      </G>

      {/* ─────────── RIGHT: the quantitative definition (beats 4–5) ─────────── */}
      <G transform="translate(560, 100)">
        <Badge n={2} cx={20} cy={18} on={beat >= 4} delay={dl(4, 0.2)} />
        <Fade on={beat >= 4} delay={dl(4, 0.5)}>
          <T x={45} y={23} size={14} fill={RED} weight={800} anchor="start">
            {t("NOW MAKE IT QUANTITATIVE", "NOW MAKE IT QUANTITATIVE")}
          </T>
        </Fade>

        <Fade on={beat >= 4} delay={dl(4, 0.9)}>
          <T x={45} y={60} size={13.5} fill={INK} weight={700} anchor="start">
            {t("The electric field at a point is the force per unit",
               "Kisi point par electric field = per unit positive charge")}
          </T>
        </Fade>
        <Fade on={beat >= 4} delay={dl(4, 1.2)}>
          <T x={45} y={84} size={13.5} fill={INK} weight={700} anchor="start">
            {t("positive charge a tiny test charge would feel there.",
               "par lagne wala force, jo ek tiny test charge feel karega.")}
          </T>
        </Fade>

        {/* beat 5 — in symbols */}
        <Fade on={beat >= 5} delay={dl(5, 0.2)}>
          <Rect x={45} y={112} width={430} height={86} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={260} y={158} anchor="middle" size={26} fill={INK} weight={800}>
            E = F / q₀
          </T>
          <T x={260} y={184} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("force on the test charge, divided by that test charge",
               "test charge par force, usi test charge se divide kiya hua")}
          </T>
        </Fade>
        <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 150 166 h 220" stroke={AMBER_DARK} sw={1.5} dur={0.5} />

        <Fade on={beat >= 5} delay={dl(5, 1.5)}>
          <T x={45} y={228} size={13} fill={INK_LIGHT} weight={600} anchor="start">
            {t("What is left describes the space, not the test charge.",
               "Jo bacha, woh space ko describe karta hai — test charge ko nahi.")}
          </T>
        </Fade>
      </G>

      {/* ─────────── LOWER: what the division buys, then the caveat ─────────── */}
      {/* beat 6 */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={60} y={442} size={14.5} fill={GREEN} weight={800} anchor="start">
          {t("Because we divided the test charge out, E is a property of the space, set up by the source alone.",
             "Test charge divide ho jaane ke baad E space ki property hai — sirf source se bani hui.")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={60} y={466} size={13} fill={INK_LIGHT} weight={600} anchor="start">
          {t("It exists at every point whether or not a test charge sits there — the pond has ripples even where there is no leaf.",
             "Woh har point par hai, chahe wahan test charge ho ya na ho — talaab mein ripples wahan bhi hain jahan patta nahi hai.")}
        </T>
      </Fade>

      {/* beat 7 — the honest caveat */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={60} y={500} size={14.5} fill={RED} weight={800} anchor="start">
          {t("One caveat: the test charge must be vanishingly small — strictly, E = lim (q₀ → 0) F / q₀.",
             "Ek caveat: test charge bilkul vanishingly small hona chahiye — strictly, E = lim (q₀ → 0) F / q₀.")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={60} y={522} size={12.5} fill={MUTED} weight={600} anchor="start">
          {t("a real test charge would push the source charges around and change the very field being measured",
             "asli test charge source charges ko hila dega aur usi field ko badal dega jise naapna hai")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <Chip x={60} y={548} w={960} h={42} fill={GREEN} textFill="#ffffff" size={17}>
          {t(
            "★ E = F / q₀ — force per unit positive charge, in the limit q₀ → 0",
            "★ E = F / q₀ — force per unit positive charge, in the limit q₀ → 0"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
