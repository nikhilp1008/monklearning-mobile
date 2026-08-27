/**
 * C11 Chemistry Ch04 · Section 27 — "Worked example: ortho versus para nitrophenol"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 15.02, 29.61, 43.52, 59.14, 77.99, 90.71, 104.28]):
 *  0 anchor: JEE Advanced, ortho vs para nitrophenol
 *  1 both have OH (donor) + NO2 (acceptor); difference = geometry
 *  2 both ring skeletons + titles + ADJACENT/OPPOSITE
 *  3 ortho: OH+NO2 adjacent, dashed intramolecular H-bond (chelate)
 *  4 ortho consequence: low mp, steam volatile
 *  5 para: OH+NO2 opposite, no intramolecular link
 *  6 para consequence: high mp, not steam volatile
 *  7 lesson chip
 *
 * Layout plan:
 *  b2-4 | ortho ring + substituents | Draw/T | x150..320 y155..344
 *  b2,5-6 | para ring + substituents | Draw/T | x700..900 y155..384
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, ringD } from "./chem-kit";

export default function C11Ch04Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Worked example: ortho vs para nitrophenol", "Worked example: ortho vs para nitrophenol")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.4)} d="M 320 80 C 400 76, 680 76, 760 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={95} size={12} fill={MUTED} script>
          {t("JEE Advanced: same groups, opposite behaviour — why?", "JEE Advanced: same groups, ulta behaviour — kyun?")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={120} size={11.5} fill={INK}>
          {t(
            "both have OH (donor) + NO₂ (acceptor) — difference = GEOMETRY (ring position)",
            "dono mein OH (donor) + NO₂ (acceptor) — fark = GEOMETRY (ring position)"
          )}
        </T>
      </Fade>

      {/* beat 2 — both ring skeletons */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={230} y={155} size={12} weight={700} fill={INK}>
          {t("ortho-nitrophenol", "ortho-nitrophenol")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d={ringD(230, 250, 38)} stroke={INK} sw={1.8} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <T x={800} y={155} size={12} weight={700} fill={INK}>
          {t("para-nitrophenol", "para-nitrophenol")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.3)} d={ringD(800, 250, 38)} stroke={INK} sw={1.8} dur={0.5} />

      {/* beat 3 — ortho substituents + intramolecular H-bond */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d={bondD(230, 212, 230, 190)} stroke={INK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={230} y={178} size={13} weight={700} fill={INK}>
          OH
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d={bondD(263, 231, 297, 213)} stroke={INK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={318} y={210} size={13} weight={700} fill={INK}>
          NO₂
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.5)}
        d="M 235 193 L 245 197 M 252 200 L 262 203 M 269 206 L 279 209 M 286 210 L 296 212"
        stroke={MUTED}
        sw={1.8}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 2.0)}>
        <T x={230} y={303} size={9.5} fill={MUTED}>
          {t("ADJACENT — intramolecular H-bond", "ADJACENT — intramolecular H-bond")}
        </T>
      </Fade>

      {/* beat 4 — ortho consequence */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={230} y={326} size={11} weight={700} fill={GREEN}>
          {t("→ LOW mp, steam volatile", "→ LOW mp, steam volatile")}
        </T>
      </Fade>

      {/* beat 5 — para substituents, no intramolecular link */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d={bondD(800, 212, 800, 190)} stroke={INK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={800} y={178} size={13} weight={700} fill={INK}>
          OH
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d={bondD(800, 288, 800, 310)} stroke={INK} sw={1.8} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={800} y={324} size={13} weight={700} fill={INK}>
          NO₂
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={800} y={342} size={9.5} fill={MUTED}>
          {t("OPPOSITE — too far to bond internally", "OPPOSITE — internal bond ke liye bahut dur")}
        </T>
      </Fade>

      {/* beat 6 — para consequence */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={800} y={365} size={11} weight={700} fill={RED}>
          {t("→ HIGH mp, no steam volatility", "→ HIGH mp, steam volatility nahi")}
        </T>
      </Fade>

      {/* beat 7 — lesson */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={190} y={395} w={700} h={30} fill={GREEN} textFill="#fff" size={12.5} script={false}>
          {t(
            "intramolecular LOWERS exactly what intermolecular RAISES",
            "intramolecular WAHI ghataata jo intermolecular badhaata"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
