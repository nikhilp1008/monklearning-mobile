/**
 * C11 Chemistry Ch05 · Section 5 — "First law and expansion-work formulas"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. Section type: formulas (accumulating list).
 *
 * Beats (board_reveal_at, en [0,6.66,7.66,8.66,9.66,10.66,11.66,12.66]):
 *  0 top rule drawn (board ruled for formulas)
 *  1 master formula: ΔU = q + w
 *  2 label: irreversible expansion, constant Pext
 *  3 formula: w = −Pext × ΔV
 *  4 label: reversible isothermal expansion (ideal gas)
 *  5 formula: w = −nRT ln(V2/V1) = −2.303 nRT log(V2/V1)
 *  6 red note: R = 8.314 J/(K·mol) for joules, not 0.0821
 *  7 free expansion: Pext = 0 ⇒ w = 0
 *
 * Layout plan (all centered x540, accumulating top to bottom):
 *  b0 | top rule                      | Draw   | y100 x150..930
 *  b1 | master chip (22)              | Chip   | x445..635  y120..165
 *  b2 | label2 (15, muted)            | T mid  | x?..?      y193..210 (bl205)
 *  b3 | formula2 chip (19)            | Chip   | x425..655  y222..264
 *  b4 | label3 (15, muted)            | T mid  | x?..?      y293..310 (bl305)
 *  b5 | formula3 chip (18, wide)      | Chip   | x300..780  y322..366
 *  b6 | R-note chip (14, red)         | Chip   | x330..750  y395..432
 *  b7 | free-expansion row (15,green) | T mid  | x?..?      y453..470 (bl465)
 */

import React from "react";
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
  GREEN,
  RED,
  CREAM,
  AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch05Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("first-law formula toolkit", "first-law formula toolkit")}
        </T>
      </Fade>

      {/* beat 0 — top rule */}
      <Draw on={beat >= 0} delay={dl(0, 0)} d="M 150 100 L 930 100" stroke={INK} sw={1.6} dur={0.6} />

      {/* beat 1 — master formula */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Chip x={445} y={120} w={190} h={45} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={22} script={false}>
          ΔU = q + w
        </Chip>
      </Fade>

      {/* beat 2 — irreversible label */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={205} size={15} fill={MUTED}>
          {t("Irreversible expansion, constant Pext:", "Irreversible expansion, constant Pext ke against:")}
        </T>
      </Fade>

      {/* beat 3 — irreversible formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Chip x={425} y={222} w={230} h={42} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={19} script={false}>
          w = −Pext × ΔV
        </Chip>
      </Fade>

      {/* beat 4 — reversible label */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={305} size={15} fill={MUTED}>
          {t("Reversible isothermal expansion (ideal gas):", "Reversible isothermal expansion (ideal gas):")}
        </T>
      </Fade>

      {/* beat 5 — reversible formula */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Chip x={300} y={322} w={480} h={44} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={18} script={false}>
          w = −nRT ln(V2/V1) = −2.303 nRT log(V2/V1)
        </Chip>
      </Fade>

      {/* beat 6 — R value red note */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Chip x={330} y={395} w={420} h={37} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t("use R = 8.314 J/(K·mol) for joules, not 0.0821", "R = 8.314 J/(K·mol) lo — 0.0821 nahi")}
        </Chip>
      </Fade>

      {/* beat 7 — free expansion */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={465} size={15} weight={700} fill={GREEN}>
          {t("free expansion → vacuum → Pext = 0 ⇒ w = 0", "free expansion → vacuum → Pext = 0 ⇒ w = 0")}
        </T>
      </Fade>
    </Scene>
  );
}
