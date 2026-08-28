/**
 * Ch12 · Section 6 — Worked example [NEET]: combining volumes, the 2:1:2 trap
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 17.83, 30.72, 40.02, 44.46, 45.46, 46.46]):
 *  0 title + equation/problem · 1 THE PICTURE: 3 volume-boxes sized 2:1:2 with
 *    molecule dots · 2 skip the moles: V(O2)=½V(H2) · 3 half of 3L = 1.5L O2
 *    · 4 H2O matches H2 (2:2) ⇒ 3L · 5 answer chips, two lines no calculator
 *    · 6 THE TRAP: 3+1.5=4.5L struck out, volume not conserved
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 25, red)          | T mid | x250..830 y37..82 (bl70)
 *  b0 | problem (15, ink)               | T mid | x540 y104
 *  b1 | H2 box (w160) + 2 dots + label   | Draw  | x150..310 y160..225
 *  b1 | "+" · O2 box (w80) + 1 dot       | T/Draw| x345 y195 · x380..460
 *  b1 | "→" · H2O box (w160) + 2 dots    | Draw  | x480..520 · x540..700
 *  b2 | ratio line (16, ink)             | T mid | x540 y292
 *  b3 | half line (16, amber_dark)       | T mid | x540 y326
 *  b4 | match line (16, amber_dark)      | T mid | x540 y360
 *  b5 | answer chips ×2 + caption        | Chip  | x350/580 y400..436
 *  b6 | struck sum + correction          | mix   | x540 y505 / y548
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
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

export default function Ch12Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={70} size={25} fill={RED} script>
          {t("combining volumes: the 2:1:2 trap [NEET]", "volumes combine: 2:1:2 ka trap [NEET]")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={104} size={15} fill={INK} script>
          {t(
            "2H₂ + O₂ → 2H₂O · 3 L H₂ given, same T & P",
            "2H₂ + O₂ → 2H₂O · 3 L H₂ diya hai, same T & P"
          )}
        </T>
      </Fade>

      {/* beat 1 — THE PICTURE: volumes react as 2:1:2 */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 150 160 h 160 v 65 h -160 z" stroke={INK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 1.1)}>
        <Circle cx={205} cy={192} r={7} fill={AMBER_DARK} />
        <Circle cx={255} cy={192} r={7} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={230} y={246} size={14} fill={INK} script>
          {t("H₂ — 2 vol", "H₂ — 2 vol")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={345} y={202} size={22} fill={INK} weight={700}>
          +
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.4)} d="M 380 160 h 80 v 65 h -80 z" stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 3.1)}>
        <Circle cx={420} cy={192} r={7} fill={INK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={420} y={246} size={14} fill={INK} script>
          {t("O₂ — 1 vol", "O₂ — 1 vol")}
        </T>
      </Fade>

      <Draw on={beat >= 1} delay={dl(1, 4)} d={arrowD(480, 192, 520, 192)} stroke={INK} sw={2.4} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 4.6)} d="M 540 160 h 160 v 65 h -160 z" stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 5.5)}>
        <Circle cx={595} cy={192} r={7} fill={GREEN} />
        <Circle cx={645} cy={192} r={7} fill={GREEN} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.9)}>
        <T x={620} y={246} size={14} fill={GREEN} script>
          {t("H₂O — 2 vol", "H₂O — 2 vol")}
        </T>
      </Fade>

      {/* beat 2 — skip the moles */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={292} size={16} fill={INK} script>
          {t(
            "equal volumes ⇒ equal molecules ⇒ V(O₂) = ½ V(H₂)",
            "equal volumes ⇒ equal molecules ⇒ V(O₂) = ½ V(H₂)"
          )}
        </T>
      </Fade>

      {/* beat 3 — half of 3L */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={326} size={16} fill={AMBER_DARK}>
          {t("½ × 3 L = 1.5 L O₂ consumed", "½ × 3 L = 1.5 L O₂ consumed")}
        </T>
      </Fade>

      {/* beat 4 — H2O matches H2 */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={360} size={16} fill={AMBER_DARK}>
          {t("H₂O matches H₂ (2:2) ⇒ 3 L H₂O produced", "H₂O, H₂ ke barabar (2:2) ⇒ 3 L H₂O bane")}
        </T>
      </Fade>

      {/* beat 5 — answer + caption */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={350} y={398} w={160} h={38} fill={GREEN} textFill="#fff" size={17} script={false}>
          O₂ = 1.5 L
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <Chip x={570} y={398} w={160} h={38} fill={GREEN} textFill="#fff" size={17} script={false}>
          H₂O = 3 L
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={540} y={460} size={13} fill={MUTED} script>
          {t("two lines, no calculator needed", "do lines, calculator ki zaroorat nahi")}
        </T>
      </Fade>

      {/* beat 6 — THE TRAP */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={508} size={18} fill={RED} weight={700}>
          3 + 1.5 = 4.5 L
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.1)} d={crossD(455, 489, 170, 24)} stroke={RED} sw={2.6} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={540} y={548} size={16} fill={RED} script>
          {t(
            "volume is NOT conserved — molecule count rules, not the sum",
            "volume conserve NAHI hota — molecule count chalta, sum nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
