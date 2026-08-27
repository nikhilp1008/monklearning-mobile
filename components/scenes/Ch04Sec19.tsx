/**
 * Ch04 · Section 19 — "Worked Example 1 [CBSE Board]: coupling railway wagons"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.3, 25.3, 36.7, 56.3, 65.8, 79.9, 102.2]):
 *  0 title
 *  1 problem data + find
 *  2 figure: wagon A → 2 m/s, wagon B at rest, rail + classification chip
 *  3 right col: the justification sentence (3 lines + marks note)
 *  4 conservation equation
 *  5 numbers line + green v = 0.8 box + direction note
 *  6 KE before/after lines
 *  7 red margin: 60% lost = proof of inelastic
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 116
 *  fig | A x120..260 y170..220 wheels cy228 · arr (270,195)→(330,195) lbl cx300 bl 178
 *    B x400..560 y170..220 wheels · "at rest" cx480 bl 178? use bl 156 ·
 *    rail M100 238 H600 · chip cx340 bl 285 (script line)
 *  b3 | st x640 bl 150 / 174 / 198 / 226
 *  b4 eq st x120 bl 330 · b5 line st x120 bl 366 · box x560..800 y344..382 bl 368 ·
 *    note st x820 bl 368
 *  b6 KE st x120 bl 430 / 460
 *  b7 | bar x66 y490..560 · lines st x84 bl 510 / 536
 */

import React from "react";
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

export default function Ch04Sec19({ currentTime, reveals, language }: SceneProps) {
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
            "Example 1 [CBSE Board] — coupling railway wagons",
            "Example 1 [CBSE Board] — railway wagons ka coupling"
          )}
        </T>
      </Fade>

      {/* beat 1 — the problem */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "8000 kg wagon at 2 m⁄s couples to a stationary 12000 kg wagon (level track)",
            "8000 kg wagon 2 m⁄s par, khade 12000 kg wagon se couple hota hai (level track)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "find: common velocity just after coupling",
            "nikaalo: coupling ke theek baad common velocity"
          )}
        </T>
      </Fade>

      {/* beat 2 — figure + classification */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d={`M 120 170 h 140 v 50 h -140 z ${circleD(148, 228, 8)} ${circleD(232, 228, 8)}`}
        stroke={INK}
        sw={2.4}
        dur={0.8}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.8)}
        d={arrowD(270, 195, 330, 195)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <T x={300} y={178} size={13} fill={GREEN} script>
          2 m⁄s
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 3)}
        d={`M 400 170 h 160 v 50 h -160 z ${circleD(430, 228, 8)} ${circleD(530, 228, 8)}`}
        stroke={INK}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.8)}>
        <T x={480} y={158} size={13} fill={MUTED} script>
          {t("at rest", "rest par")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 4.4)} d="M 100 238 H 600" stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={190} y={190} size={13} fill={INK} weight={700}>
          8000 kg
        </T>
        <T x={480} y={190} size={13} fill={INK} weight={700}>
          12000 kg
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={340} y={285} size={14} fill={AMBER_DARK} script>
          {t(
            "coupling → move as ONE → perfectly INELASTIC",
            "coupling → EK bankar chalenge → perfectly INELASTIC"
          )}
        </T>
      </Fade>

      {/* beat 3 — the sentence that earns marks */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={640} y={150} size={12} fill={INK} script anchor="start">
          {t(
            "level track → gravity has no horizontal part",
            "level track → gravity ka koi horizontal hissa nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={640} y={174} size={12} fill={INK} script anchor="start">
          {t(
            "brief impact → friction has no time to matter",
            "chhota impact → friction ko waqt hi nahi milta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 9)}>
        <T x={640} y={198} size={12} fill={GREEN} script anchor="start">
          {t("⇒ momentum is conserved ✓", "⇒ momentum conserved hai ✓")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 14)}>
        <T x={640} y={226} size={12} fill={MUTED} script anchor="start">
          {t(
            "examiners give marks for THIS sentence",
            "examiners ISI vaakya ke marks dete hain"
          )}
        </T>
      </Fade>

      {/* beat 4 — the equation */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={120} y={330} size={16} fill={INK} weight={700} anchor="start">
          m₁u₁ + m₂u₂ = (m₁ + m₂)·v
        </T>
      </Fade>

      {/* beat 5 — the numbers */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={120} y={366} size={15} fill={INK} weight={700} anchor="start">
          8000(2) + 12000(0) = 20000·v&nbsp;&nbsp;⇒&nbsp;&nbsp;16000 = 20000·v
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 5)}
        d="M 632 344 h 156 q 12 0 12 12 v 14 q 0 12 -12 12 h -156 q -12 0 -12 -12 v -14 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 5.6)}>
        <T x={710} y={368} size={17} fill={INK} weight={800}>
          v = 0.8 m⁄s
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={820} y={368} size={12} fill={GREEN} script anchor="start">
          {t("original direction", "wahi original direction")}
        </T>
      </Fade>

      {/* beat 6 — the KE check */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={120} y={430} size={15} fill={INK} weight={700} anchor="start">
          KE before = ½ · 8000 · 2² = 16000 J
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 10)}>
        <T x={120} y={460} size={15} fill={INK} weight={700} anchor="start">
          KE after = ½ · 20000 · 0.8² = 6400 J
        </T>
      </Fade>

      {/* beat 7 — the proof */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 490 v 60" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={510} size={14} fill={RED} script anchor="start">
          {t(
            "≈ 60% of the KE vanished — the clang, the heat, the bent couplers",
            "≈ 60% KE gaayab — khanak, heat, mude hue couplers"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={84} y={536} size={14} fill={GREEN} script anchor="start">
          {t(
            "not a mistake — the PROOF it is inelastic; momentum did not care one bit",
            "galti nahi — INELASTIC hone ka SABOOT; momentum ko ratti bhar farq nahi pada"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
