/**
 * Ch02 · Section 49 — "Procedure A: solving a 1-D relative-velocity problem"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.1, 23, 45.7, 70.5, 87.2, 112, 127.3]):
 *  0 title
 *  1 straight-down skeleton (no branches note)
 *  2 step 1: sign everything in the ground frame
 *  3 step 2 (red): ONE frame, stick to it
 *  4 step 3: the two subtractions
 *  5 step 4: translate the question
 *  6 step 5: ordinary equations + root discipline
 *  7 green: one moving thing beats two
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  boxes x250..830, rows y90/170/250/330/410 (h 62) · headers bl top+24 ·
 *  details bl top+48 · connectors x540 between rows
 *  b1 note st x850 bl 120
 *  b7 | bar x56 y500..580 · lines st x72 bl 520 / 546 / 572
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const ROWS = [90, 170, 250, 330, 410];

function rowBox(y: number) {
  return `M 262 ${y} h 556 q 12 0 12 12 v 38 q 0 12 -12 12 h -556 q -12 0 -12 -12 v -38 q 0 -12 12 -12`;
}

export default function Ch02Sec49({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const steps = [
    {
      k: 2,
      stroke: AMBER,
      hFill: AMBER_DARK,
      h: t("STEP 1 — fix +, sign every velocity in the GROUND frame", "STEP 1 — + tay karo, har velocity ko GROUND frame mein sign do"),
      d: t("the minus signs will do your thinking three lines later", "yahi minus signs teen line baad tumhaare liye sochenge"),
    },
    {
      k: 3,
      stroke: RED,
      hFill: RED,
      h: t("STEP 2 — choose ONE frame and stick to it", "STEP 2 — EK frame chuno aur usi par tike raho"),
      d: t("switching frames mid-solution = confident nonsense", "beech mein frame badalna = aatmavishwaasi bakwaas"),
    },
    {
      k: 4,
      stroke: AMBER,
      hFill: AMBER_DARK,
      h: "u_rel = v_A − v_B · a_rel = a_A − a_B",
      d: t("two subtractions, and B is now at rest in its own world", "do ghatav, aur B apni duniya mein aaram se khada hai"),
    },
    {
      k: 5,
      stroke: AMBER,
      hFill: AMBER_DARK,
      h: t("STEP 4 — translate the question into a relative quantity", "STEP 4 — sawaal ko relative bhaasha mein badlo"),
      d: t("'when do they meet' → 'when does s_rel equal the initial gap'", "'kab milenge' → 'kab s_rel shuruaati gap ke barabar'"),
    },
    {
      k: 6,
      stroke: GREEN,
      hFill: GREEN,
      h: t("STEP 5 — solve with the ordinary equations of motion", "STEP 5 — aam equations of motion se hal karo"),
      d: t("then reject the roots the physics forbids (negative times)", "phir jo roots physics mana kare unhe hatao (negative time)"),
    },
  ];

  return (
    <Scene>
      {/* beat 0 — run it without thinking */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={23} fill={INK} script>
          {t(
            "the relative-velocity procedure — one straight path",
            "relative-velocity ki procedure — ek seedha raasta"
          )}
        </T>
      </Fade>

      {/* beat 1 — the skeleton */}
      {ROWS.map((y, i) => (
        <Draw
          key={i}
          on={beat >= 1}
          delay={dl(1, 0.5 + i * 1.2)}
          d={rowBox(y)}
          stroke={MUTED}
          sw={1.8}
          dur={0.5}
        />
      ))}
      {ROWS.slice(0, -1).map((y, i) => (
        <Draw
          key={`c${i}`}
          on={beat >= 1}
          delay={dl(1, 1.1 + i * 1.2)}
          d={arrowD(540, y + 62, 540, y + 78)}
          stroke={MUTED}
          sw={1.8}
          dur={0.3}
        />
      ))}
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={850} y={120} size={11} fill={MUTED} script anchor="start">
          {t("no branches — walk it", "koi shaakha nahi — bas chalo")}
        </T>
      </Fade>

      {/* beats 2–6 — fill the steps */}
      {steps.map((s, i) => (
        <G key={i}>
          <Draw
            on={beat >= s.k}
            delay={dl(s.k, 0.5)}
            d={rowBox(ROWS[i])}
            stroke={s.stroke}
            sw={2.6}
            dur={0.6}
          />
          <Fade on={beat >= s.k} delay={dl(s.k, 1.5)}>
            <T x={540} y={ROWS[i] + 24} size={13} fill={s.hFill} script>
              {s.h}
            </T>
          </Fade>
          <Fade on={beat >= s.k} delay={dl(s.k, 7)}>
            <T x={540} y={ROWS[i] + 48} size={11} fill={MUTED} script>
              {s.d}
            </T>
          </Fade>
        </G>
      ))}

      {/* beat 7 — why we bother */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 56 500 v 80" stroke={GREEN} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={72} y={520} size={13} fill={GREEN} script anchor="start">
          {t(
            "why bother? in its own frame, that body just sits still",
            "kyun karein? apne frame mein woh body bas chup-chaap baithi hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={72} y={546} size={13} fill={GREEN} script anchor="start">
          {t(
            "you have nailed one of your two moving objects to the floor",
            "do chalti cheezon mein se ek ko tumne zameen par thok diya"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={72} y={572} size={13} fill={GREEN} script anchor="start">
          {t(
            "one moving thing is always easier than two — that, not elegance, is the point",
            "ek chalti cheez hamesha do se aasaan hai — wahi asli baat hai, khoobsurti nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
