/**
 * Ch10 · Section 26 — "Conduction: the particle relay"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * Opens Subtopic 3 (Heat Transfer: Conduction, Convection).
 *
 * Beats (en [0,1,2,3,4,5,13.87] — beats 0-4 exactly 1s apart, so those
 * Fade delays stay ≤ ~0.3s):
 *  0 hook: spoon in hot chai — far end warms, nothing visibly moved
 *  1 conduction = particle relay; the material itself stays put
 *  2 near hot end atoms jostle neighbours — agitation marches down (rod)
 *  3 like a whispered message down a row of seated people
 *  4 metals: free electrons = a 2nd, faster courier
 *  5 puzzle: metal & wood handles, same room/temp — metal FEELS colder
 *  6 resolution: metal whisks heat from your hand faster — you sense skin
 *
 * Layout plan (strict non-overlapping y-bands):
 *  b0 | cup x300..360 y110..150 · spoon line to (450,95) · caption mid x540 bl195
 *  b1 | note mid x540 bl232
 *  b2 | rod x200..700 y260..285 + dots + vibration ticks
 *  b3 | message note mid x540 bl320
 *  b4 | note mid x540 bl355
 *  b5 | "same room" mid x540 bl385 · metal x350..420 y400..425 ·
 *       wood x600..670 y400..425 · labels bl440 · question mid x540 bl470
 *  b6 | resolution mid x540 bl505
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';

const dotPath = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} A ${r} ${r} 0 1 1 ${cx + r} ${cy} A ${r} ${r} 0 1 1 ${cx - r} ${cy}`;
const dotsPath = (pts: [number, number][], r: number) =>
  pts.map(([x, y]) => dotPath(x, y, r)).join(" ");

export default function Ch10Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const rodDots = dotsPath(
    [
      [230, 272], [280, 272], [330, 272], [380, 272], [430, 272],
      [480, 272], [530, 272], [580, 272], [630, 272], [670, 272],
    ],
    3
  );

  return (
    <Scene>
      {/* title */}
      <Fade on={true} delay={0.2}>
        <T x={540} y={58} size={24} fill={INK} script>
          {t("conduction — the particle relay", "conduction — particle ka relay")}
        </T>
      </Fade>

      {/* beat 0 — the hook */}
      <Draw on={beat >= 0} delay={dl(0, 0.15)} d="M300 150 h60 v-10 q0 -20 -30 -20 q-30 0 -30 20 z" stroke={INK_LIGHT} sw={1.8} dur={0.5} />
      <Draw on={beat >= 0} delay={dl(0, 0.5)} d="M340 122 q60 -20 110 -27" stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 0} delay={dl(0, 0.9)}>
        <T x={540} y={195} size={13} fill={INK} script anchor="middle">
          {t(
            "spoon in hot chai — the far end warms. how, with nothing moving?",
            "garam chai mein chammach — doosra sira garam hota. kaise, kuchh hile bina?"
          )}
        </T>
      </Fade>

      {/* beat 1 — conduction defined */}
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={540} y={232} size={13} fill={INK} script anchor="middle">
          {t("conduction — particle-to-particle relay; the material stays put", "conduction — particle-to-particle relay; material apni jagah rehta")}
        </T>
      </Fade>

      {/* beat 2 — jostling atoms along the rod */}
      <Draw on={beat >= 2} delay={dl(2, 0.15)} d="M200 260 h500 v25 h-500 z" stroke={INK_LIGHT} sw={1.6} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 0.4)} d="M215 255 l6 -8 M225 255 l6 -8 M235 255 l6 -8" stroke={RED} sw={1.8} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={rodDots} stroke={INK} sw={1.6} dur={0.5} />

      {/* beat 3 — the message analogy */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={320} size={12} fill={MUTED} script anchor="middle">
          {t(
            "like a whispered message down a row of seated people — only the message moves",
            "baithe logon ki row mein whisper ki tarah — sirf message chalta hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — free electrons in metals */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={355} size={13} fill={AMBER_DARK} script weight={700} anchor="middle">
          {t("metals: free electrons = a 2nd, faster courier", "metals: free electrons = doosra, tez courier")}
        </T>
      </Fade>

      {/* beat 5 — the puzzle */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={385} size={12} fill={MUTED} anchor="middle">
          {t("same room, same temperature...", "same room, same temperature...")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d="M350 400 h70 v25 h-70 z" stroke={INK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d="M600 400 h70 v25 h-70 z" stroke={AMBER_DARK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={385} y={440} size={11} fill={MUTED} anchor="middle">{t("metal", "metal")}</T>
        <T x={635} y={440} size={11} fill={MUTED} anchor="middle">{t("wood", "lakdi")}</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={540} y={470} size={13} fill={INK} script anchor="middle">
          {t("...yet the metal FEELS colder. why?", "...phir bhi metal THANDA lagta. kyun?")}
        </T>
      </Fade>

      {/* beat 6 — the resolution */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={505} size={14} fill={RED} script weight={700} anchor="middle">
          {t(
            "metal whisks heat from your hand faster — you sense your skin, not the handle",
            "metal haath se heat jaldi kheench leta — tum apni skin mehsoos karte, handle nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
