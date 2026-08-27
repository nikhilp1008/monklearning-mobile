/**
 * Ch04 · Section 13 — "The books must balance: conservation of linear momentum"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 15.4, 28.5, 43.2, 57.2, 58.2, 73.1, 89.2]):
 *  0 title
 *  1 BEFORE panel (rocket still, p=0) · AFTER panel (gas ↓, rocket ↑, p still 0)
 *  2 "redistributed, not created"
 *  3 ledger line: p_gas ↓ = p_rocket ↑
 *  4 right heading: the principle
 *  5 formula box F_ext = 0 ⇒ Σmu = Σmv + "whole statement"
 *  6 red bar (right): WHY proved in subtopic 1 — here we USE it
 *  7 three everyday chips + closing line
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52
 *  BEFORE cx180 bl 105 · rocket nose(180,140) body x165..195 y170..250 ·
 *    ground M120 270 H240 · "p_total = 0" cx180 bl 295
 *  AFTER cx380 bl 105 · rocket nose(380,120) body x365..395 y150..220 ·
 *    gas arrows (372,230)→(372,262) / (388,236)→(388,268) · up (425,205)→(425,135) ·
 *    "p still = 0" cx380 bl 295
 *  b2 cx270 bl 336 · b3 cx270 bl 374
 *  b4 head cx770 bl 120 · box x570..980 y140..192 bl 173 · note cx770 bl 218
 *  b6 | bar x550 y250..320 · lines st x568 bl 270 / 296
 *  b7 | chips y430..464 at x90/x400/x710 w280 · closing cx540 bl 520
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "where does the Diwali rocket's motion come from?",
            "Diwali rocket ki motion aati kahan se hai?"
          )}
        </T>
      </Fade>

      {/* beat 1 — before and after */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={180} y={105} size={12} fill={MUTED} script>
          BEFORE
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.6)}
        d="M 165 170 L 180 140 L 195 170 M 165 170 h 30 v 80 h -30 z M 165 250 l -12 16 M 195 250 l 12 16 M 120 270 H 240"
        stroke={INK}
        sw={2.4}
        dur={1}
      />
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={180} y={295} size={13} fill={INK} script>
          p_total = 0
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <T x={380} y={105} size={12} fill={MUTED} script>
          AFTER
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 5.6)}
        d="M 365 150 L 380 120 L 395 150 M 365 150 h 30 v 70 h -30 z M 365 220 l -12 16 M 395 220 l 12 16"
        stroke={INK}
        sw={2.4}
        dur={0.9}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 7)}
        d={arrowD(372, 230, 372, 262)}
        stroke={RED}
        sw={2.4}
        dur={0.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 7.5)}
        d={arrowD(388, 236, 388, 268)}
        stroke={RED}
        sw={2.4}
        dur={0.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 8.2)}
        d={arrowD(425, 205, 425, 135)}
        stroke={GREEN}
        sw={3}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 9.5)}>
        <T x={380} y={295} size={13} fill={INK} script>
          {t("p STILL = 0", "p ab bhi = 0")}
        </T>
      </Fade>

      {/* beat 2 — redistribution */}
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={270} y={336} size={14} fill={AMBER_DARK} script>
          {t(
            "motion was REDISTRIBUTED — not created",
            "motion REDISTRIBUTE hui — bani nahi"
          )}
        </T>
      </Fade>

      {/* beat 3 — the ledger */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={270} y={374} size={13} fill={GREEN} script>
          {t(
            "p_gas ↓ = p_rocket ↑ — the books stay balanced",
            "p_gas ↓ = p_rocket ↑ — hisaab barabar rehta hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — the principle */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={770} y={120} size={16} fill={AMBER_DARK} script>
          {t(
            "conservation of linear momentum",
            "conservation of linear momentum"
          )}
        </T>
      </Fade>

      {/* beat 5 — the whole statement */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 582 140 h 376 q 12 0 12 12 v 28 q 0 12 -12 12 h -376 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={770} y={173} size={19} fill={INK} weight={800}>
          F_ext = 0&nbsp;&nbsp;⇒&nbsp;&nbsp;Σ mᵢuᵢ = Σ mᵢvᵢ
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={770} y={218} size={12} fill={GREEN} script>
          {t("that is it — the whole statement", "bas — yahi poora statement hai")}
        </T>
      </Fade>

      {/* beat 6 — proved, now used */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 550 250 v 62" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={568} y={270} size={13} fill={RED} script anchor="start">
          {t(
            "WHY was proved in subtopic 1: Third-Law pairs cancel",
            "WHY subtopic 1 mein prove ho chuka: Third-Law pairs cancel"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={568} y={296} size={13} fill={RED} script anchor="start">
          {t("here, we simply USE it", "yahan hum ise bas ISTEMAAL karenge")}
        </T>
      </Fade>

      {/* beat 7 — everyday versions */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <Chip x={90} y={430} w={280} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={13}>
          {t("skateboard + bag → you roll back", "skateboard + bag → aap peechhe")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <Chip x={400} y={430} w={280} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={13}>
          {t("step off the boat → it scoots away", "boat se utro → boat khisak gayi")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6.5)}>
        <Chip x={710} y={430} w={280} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={13}>
          {t("rifle → kicks your shoulder", "rifle → kandhe mein laat")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={540} y={520} size={14} fill={GREEN} script>
          {t(
            "push one way — get pushed the other; the total never changes",
            "ek taraf dhakelo — doosri taraf dhakke jao; total kabhi nahi badalta"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
