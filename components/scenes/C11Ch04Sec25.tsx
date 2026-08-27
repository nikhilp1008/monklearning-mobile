/**
 * C11 Chemistry Ch04 · Section 25 — "Worked example: the oxygen molecule's MO configuration"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 12.03, 20.57, 33.11, 48.04, 58.2, 74.24, 89.69]):
 *  0 intro: classic CBSE, O2 MO config + bond order + magnetism
 *  1 electron count: 2x8=16
 *  2 after-N2 ordering: sigma2pz before pi
 *  3 filled MO diagram, built bottom-to-top (Aufbau)
 *  4 full configuration text
 *  5 count bonding(10)/antibonding(6) -> BO=2
 *  6 magnetism: 2 unpaired in pi* -> paramagnetic
 *  7 answer chip: BO=2, paramagnetic, MOT's win
 *
 * Layout plan:
 *  b3   | MO energy-level diagram | Draw/T | x150..420 y190..478 (7 levels)
 *  b4-7 | config/count/chip       | T/Chip | x480..1000 y190..410
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch04Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const singles = [
    { name: "σ1s", y: 460, d: 0.2 },
    { name: "σ*1s", y: 420, d: 0.6 },
    { name: "σ2s", y: 380, d: 1.0 },
    { name: "σ*2s", y: 340, d: 1.4 },
    { name: "σ2pz", y: 300, d: 1.8 },
  ];

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Worked example: O₂'s MO configuration", "Worked example: O₂ ka MO configuration")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.0)} d="M 380 80 C 450 76, 630 76, 700 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={95} size={12} fill={MUTED} script>
          {t("classic CBSE: O₂ — MO config, bond order, magnetism", "classic CBSE: O₂ — MO config, bond order, magnetism")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={117} size={12.5} fill={INK}>
          2 O × 8 e⁻ = 16 {t("electrons to place", "electrons place karne hain")}
        </T>
      </Fade>

      {/* beat 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={139} size={12} fill={INK}>
          {t("after-N₂ ordering: σ2pz fills BEFORE the π orbitals", "after-N₂ ordering: σ2pz π orbitals se PEHLE bharta")}
        </T>
      </Fade>

      {/* beat 3 — MO diagram, bottom to top */}
      {singles.map((s) => (
        <React.Fragment key={s.name}>
          <Draw on={beat >= 3} delay={dl(3, s.d)} d={`M 262 ${s.y} L 298 ${s.y}`} stroke={INK} sw={2} dur={0.3} />
          <Fade on={beat >= 3} delay={dl(3, s.d + 0.15)}>
            <T x={280} y={s.y - 8} size={11} fill={INK}>
              ↑↓
            </T>
            <T x={250} y={s.y + 4} size={10} fill={INK} anchor="end">
              {s.name}
            </T>
          </Fade>
        </React.Fragment>
      ))}
      <Draw on={beat >= 3} delay={dl(3, 2.2)} d="M 222 255 L 258 255" stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 2.3)} d="M 302 255 L 338 255" stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 2.45)}>
        <T x={240} y={247} size={11} fill={INK}>
          ↑↓
        </T>
        <T x={320} y={247} size={11} fill={INK}>
          ↑↓
        </T>
        <T x={280} y={273} size={9.5} fill={INK}>
          π2px / π2py
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.8)} d="M 222 210 L 258 210" stroke={INK} sw={2} dur={0.3} />
      <Draw on={beat >= 3} delay={dl(3, 2.9)} d="M 302 210 L 338 210" stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 3.05)}>
        <T x={240} y={202} size={11} fill={RED}>
          ↑
        </T>
        <T x={320} y={202} size={11} fill={RED}>
          ↑
        </T>
        <T x={280} y={228} size={9.5} fill={RED}>
          π*2px / π*2py
        </T>
      </Fade>

      {/* beat 4 — full configuration */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={490} y={190} size={12} fill={INK} anchor="start">
          σ1s² σ*1s² σ2s² σ*2s² σ2pz²
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={490} y={212} size={12} fill={INK} anchor="start">
          π2px² π2py² π*2px¹ π*2py¹
        </T>
      </Fade>

      {/* beat 5 — counting */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={490} y={250} size={11.5} fill={INK} anchor="start">
          {t("bonding: 10 e⁻", "bonding: 10 e⁻")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={490} y={272} size={11.5} fill={INK} anchor="start">
          {t("antibonding: 6 e⁻", "antibonding: 6 e⁻")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.0)}>
        <T x={490} y={296} size={13} weight={700} fill={INK} anchor="start">
          BO = ½(10 − 6) = 2
        </T>
      </Fade>

      {/* beat 6 — magnetism */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={490} y={330} size={11.5} fill={INK} anchor="start">
          {t("2 unpaired e⁻ in degenerate π* (Hund's rule)", "2 unpaired e⁻ degenerate π* mein (Hund's rule)")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={490} y={354} size={13} weight={700} fill={RED} anchor="start">
          → PARAMAGNETIC
        </T>
      </Fade>

      {/* beat 7 — answer */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={480} y={378} w={520} h={32} fill={GREEN} textFill="#fff" size={11.5} script={false}>
          {t(
            "BO=2, paramagnetic — VBT couldn't explain this; MOT's signature win",
            "BO=2, paramagnetic — VBT ye explain nahi kar paayi; MOT ki signature jeet"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
