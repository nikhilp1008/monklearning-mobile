/**
 * C11 Chemistry Ch04 · Section 9 — "Worked example: the azide ion, resonance and bond order"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 22.53, 33.02, 51.63, 67.41, 88.06, 105.05, 121.17]):
 *  0 intro: JEE Advanced, azide ion N3-, linear symmetric
 *  1 electron count: 3N(15)+1(charge)=16
 *  2 build [N=N=N]- bracketed structure, lone pairs on terminals only
 *  3 central N FC calc → +1
 *  4 terminal N FC calc → -1 each, sum check = -1
 *  5 resonance notation: N≡N-N ↔ N=N=N ↔ N-N≡N
 *  6 average bond order = 2
 *  7 closing: identical bond lengths, blended not flickering; green chip
 *
 * Layout plan:
 *  b2   | [N=N=N]- structure | Draw/T | x372..708 y150..230
 *  b3-4 | FC calc lines      | T mid  | y250 / y274 / y298
 *  b5   | resonance notation | T mid  | y332 / caption y356
 *  b6   | avg bond order     | T mid  | y384
 *  b7   | insight + chip     | T/Chip | y410 / y428..456
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
  Scene,
} from '@/components/scenes/kit';
import { doubleBondD, LonePair } from "./chem-kit";

export default function C11Ch04Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Worked example: the azide ion", "Worked example: azide ion")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.4)} d="M 400 80 C 460 76, 620 76, 680 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={95} size={12} fill={MUTED} script>
          {t("JEE Advanced: azide ion N₃⁻, linear symmetric", "JEE Advanced: azide ion N₃⁻, linear symmetric")}
        </T>
      </Fade>

      {/* beat 1 — electron count */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={118} size={13} fill={INK}>
          3 N × 5 = 15, + 1 ({t("charge", "charge")}) = 16 {t("valence e⁻", "valence e⁻")}
        </T>
      </Fade>

      {/* beat 2 — build [N=N=N]- */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={410} y={190} size={20} weight={700} fill={INK}>
          N
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={540} y={190} size={20} weight={700} fill={INK}>
          N
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <T x={670} y={190} size={20} weight={700} fill={INK}>
          N
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.4)} d={doubleBondD(440, 190, 510, 190, 3.5)} stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 1.7)} d={doubleBondD(570, 190, 640, 190, 3.5)} stroke={INK} sw={2.2} dur={0.4} />
      <LonePair on={beat >= 2} delay={dl(2, 2.1)} cx={410} cy={163} angle={0} spread={7} />
      <LonePair on={beat >= 2} delay={dl(2, 2.4)} cx={410} cy={217} angle={0} spread={7} />
      <LonePair on={beat >= 2} delay={dl(2, 2.7)} cx={670} cy={163} angle={0} spread={7} />
      <LonePair on={beat >= 2} delay={dl(2, 3.0)} cx={670} cy={217} angle={0} spread={7} />
      <Draw on={beat >= 2} delay={dl(2, 3.4)} d="M 385 150 L 372 150 L 372 230 L 385 230" stroke={INK} sw={1.8} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 3.7)} d="M 695 150 L 708 150 L 708 230 L 695 230" stroke={INK} sw={1.8} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 4.1)}>
        <T x={716} y={148} size={14} fill={INK}>
          ⁻
        </T>
      </Fade>

      {/* beat 3-4 — formal charges */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={250} size={12} fill={INK}>
          {t("central N → V=5, L=0, B=8 → FC = 5−0−4 = +1", "central N → V=5, L=0, B=8 → FC = 5−0−4 = +1")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={274} size={12} fill={INK}>
          {t(
            "terminal N → V=5, L=4, B=4 → FC = 5−4−2 = −1 (each)",
            "terminal N → V=5, L=4, B=4 → FC = 5−4−2 = −1 (dono)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={540} y={298} size={12} weight={700} fill={RED}>
          +1 + (−1) + (−1) = −1 = {t("charge on ion ✓", "ion ka charge ✓")}
        </T>
      </Fade>

      {/* beat 5 — resonance forms */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={332} size={17} weight={700} fill={INK}>
          N≡N−N ↔ N=N=N ↔ N−N≡N
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={540} y={356} size={11} fill={MUTED}>
          {t(
            "equivalent mirror-image contributors, same overall −1 charge",
            "equivalent mirror-image contributors, same overall −1 charge"
          )}
        </T>
      </Fade>

      {/* beat 6 — average bond order */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={384} size={13} weight={700} fill={GREEN}>
          {t("→ average N–N bond order = 2 (both linkages)", "→ average N–N bond order = 2 (dono linkages)")}
        </T>
      </Fade>

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={410} size={12} fill={RED}>
          {t("real ion = ONE blended structure, not a flickering switch", "real ion = EK blended structure, flickering switch nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <Chip x={200} y={428} w={680} h={28} fill={GREEN} textFill="#fff" size={12} script={false}>
          {t(
            "both N–N bonds: IDENTICAL length — no single Lewis structure shows this alone",
            "dono N–N bonds: IDENTICAL length — akeli Lewis structure ye nahi dikha sakti"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
