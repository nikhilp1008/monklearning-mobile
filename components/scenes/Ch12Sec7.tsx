/**
 * Ch12 · Section 7 — Worked example [JEE Main]: mean separation between gas molecules
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.24, 26.2, 36.44, 48.98, 49.98, 50.98]):
 *  0 title + problem · 1 recipe: number density first, then cube-root · 2
 *    volume per molecule ≈3.72×10⁻²⁶ m³ · 3 separation ≈3.34×10⁻⁹ m = 33.4 Å
 *    · 4 THE PICTURE: molecule dots + wide gap, gap ≫ size · 5 tick marks:
 *    ≈11 diameters apart · 6 verdict: gas spacing ~10x solid, forces negligible
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 25, red)          | T mid | x255..825 y37..82 (bl70)
 *  b0 | problem (15, ink)               | T mid | x540 y100
 *  b1 | recipe chip                      | Chip  | x340..740 y120..154
 *  b2 | per-molecule vol (16, ink)       | T mid | x540 y168
 *  b3 | separation (16, amber_dark)      | T mid | x540 y202
 *  b4 | dots ×2 + gap line + "d" tag     | mix   | x300..740 y320 (dots r6)
 *  b4 | "gap ≫ molecule size" (13,muted)| T mid | x520 y346
 *  b5 | 10 tick marks along gap          | Draw  | x340..700 y315..325
 *  b5 | "≈ 11 diameters apart" chip      | Chip  | x420..660 y360..392
 *  b6 | verdict (script 18, green)       | T mid | x540 y500
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
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch12Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const tickD = [340, 380, 420, 460, 500, 540, 580, 620, 660, 700]
    .map((x) => `M ${x} 315 V 325`)
    .join(" ");

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={70} size={25} fill={RED} script>
          {t("how far apart are gas molecules? [JEE Main]", "gas molecules kitni door baithte hain? [JEE Main]")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={100} size={15} fill={INK} script>
          {t(
            "STP ideal gas, d = 3 Å ⇒ mean separation? compare to d",
            "STP ideal gas, d = 3 Å ⇒ mean separation? d se compare"
          )}
        </T>
      </Fade>

      {/* beat 1 — recipe */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <Chip x={340} y={120} w={400} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={15} script={false}>
          {t("recipe: n₀ → separation = (1/n₀)^⅓", "recipe: n₀ → separation = (1/n₀)^⅓")}
        </Chip>
      </Fade>

      {/* beat 2 — volume per molecule */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={168} size={16} fill={INK}>
          Vₘ/Nₐ ≈ 3.72×10⁻²⁶ m³ per molecule
        </T>
      </Fade>

      {/* beat 3 — separation */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={202} size={16} fill={AMBER_DARK}>
          separation = ∛(3.72×10⁻²⁶) ≈ 3.34×10⁻⁹ m = 33.4 Å
        </T>
      </Fade>

      {/* beat 4 — THE PICTURE: gap vs molecule size */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Circle cx={300} cy={320} r={6} fill={INK} />
        <Circle cx={740} cy={320} r={6} fill={INK} />
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d="M 306 320 H 734" stroke={MUTED} sw={1.4} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={300} y={300} size={12} fill={MUTED} script>
          d
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <T x={520} y={346} size={13} fill={MUTED} script>
          {t("gap ≫ molecule size", "gap molecule se kaafi bada")}
        </T>
      </Fade>

      {/* beat 5 — tick marks: ~11 diameters */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d={tickD} stroke={AMBER_DARK} sw={1.6} dur={0.9} />
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <Chip x={420} y={360} w={240} h={32} fill={GREEN} textFill="#fff" size={16} script={false}>
          {t("≈ 11 diameters apart", "≈ 11 diameters apart")}
        </Chip>
      </Fade>

      {/* beat 6 — verdict */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={500} size={18} fill={GREEN} script>
          {t(
            "gas spacing ≈ 10× solid spacing ⇒ forces negligible",
            "gas spacing ≈ 10× solid spacing ⇒ forces negligible"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
