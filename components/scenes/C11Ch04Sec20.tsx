/**
 * C11 Chemistry Ch04 · Section 20 — "When valence bond theory meets oxygen"
 * Canvas 1080×620 · safe x36–1044, y30–596. Opens subtopic 3.
 *
 * Beats (en [0, 15.62, 27.56, 51.2, 68.78, 83.88, 103.94, 122.62]):
 *  0 anchor: O2 sticks to a magnet -> paramagnetic
 *  1 but Lewis/VBT pairs all e- -> wrong magnetism
 *  2 MOT: orbitals merge into new, molecule-wide orbitals
 *  3 2 AOs -> 2 MOs fork: bonding / antibonding labels
 *  4 bonding MO detail: overlap lens, lower energy
 *  5 antibonding MO detail: node, higher energy; fill consequence
 *  6 sigma (head-on) vs pi (sidewise) MO
 *  7 O2: 2 unpaired e- in antibonding -> paramagnetic explained, chip
 *
 * Layout plan:
 *  b3-5 | AO->MO fork diagram | Draw/T | x160..510 y200..410
 *  b6   | sigma/pi icons      | Draw/T | x220..830 y440..470
 */

import React from "react";
import { Circle, Ellipse } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch04Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("When VBT meets oxygen", "Jab VBT ka saamna oxygen se hota")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.4)} d="M 420 80 C 470 76, 610 76, 660 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 — O2 is paramagnetic */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={100} size={15} weight={700} fill={INK}>
          O₂
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.6)} d={arrowD(460, 100, 505, 100)} stroke={INK} sw={1.5} dur={0.35} />
      <Draw on={beat >= 0} delay={dl(0, 0.8)} d={arrowD(620, 100, 575, 100)} stroke={INK} sw={1.5} dur={0.35} />
      <Fade on={beat >= 0} delay={dl(0, 1.2)}>
        <T x={540} y={122} size={11.5} fill={INK}>
          {t("sticks to a magnetic field → PARAMAGNETIC (unpaired e⁻)", "magnetic field se chipak jaata → PARAMAGNETIC (unpaired e⁻)")}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={148} size={12} weight={700} fill={RED}>
          {t("but Lewis/VBT pairs ALL electrons → predicts WRONG magnetism", "par Lewis/VBT SAARE electrons pair kar deta → GALAT magnetism predict")}
        </T>
      </Fade>

      {/* beat 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={173} size={11.5} fill={AMBER_DARK}>
          {t(
            "MOT: atomic orbitals merge into NEW orbitals spanning the WHOLE molecule",
            "MOT: atomic orbitals merge hoke NAYE orbitals bante jo PURE molecule ke hain"
          )}
        </T>
      </Fade>

      {/* beat 3 — 2 AOs -> 2 MOs fork */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Circle cx={170} cy={290} r={12} fill="none" stroke={INK} strokeWidth={1.6} />
        <Circle cx={170} cy={314} r={12} fill="none" stroke={INK} strokeWidth={1.6} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={170} y={336} size={9} fill={MUTED}>
          {t("2 AOs", "2 AOs")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d={arrowD(192, 285, 340, 235)} stroke={INK} sw={1.6} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 1.1)} d={arrowD(192, 318, 340, 358)} stroke={INK} sw={1.6} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={430} y={208} size={11} weight={700} fill={RED}>
          {t("ANTIBONDING MO", "ANTIBONDING MO")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={430} y={378} size={11} weight={700} fill={GREEN}>
          {t("BONDING MO", "BONDING MO")}
        </T>
      </Fade>

      {/* beat 4 — bonding MO detail */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <Circle cx={415} cy={355} r={14} fill="none" stroke={INK} strokeWidth={1.6} />
        <Circle cx={439} cy={355} r={14} fill="none" stroke={INK} strokeWidth={1.6} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <Ellipse cx={427} cy={355} rx={6} ry={13} fill={GREEN} opacity={0.55} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.0)}>
        <T x={427} y={397} size={9.5} fill={GREEN}>
          {t("lower energy — density BETWEEN nuclei", "lower energy — density nuclei ke BEECH")}
        </T>
      </Fade>

      {/* beat 5 — antibonding MO detail + consequence */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Circle cx={400} cy={232} r={14} fill="none" stroke={INK} strokeWidth={1.6} />
        <Circle cx={460} cy={232} r={14} fill="none" stroke={INK} strokeWidth={1.6} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d="M 430 218 L 430 246" stroke={RED} sw={1.6} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 1.0)}>
        <T x={430} y={264} size={9.5} fill={RED}>
          {t("higher energy — NODE between nuclei", "higher energy — nuclei ke beech NODE")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={540} y={420} size={10.5} fill={INK}>
          {t("fill bonding → stable · fill antibonding → undoes it", "bonding bharo → stable · antibonding bharo → ulta hota")}
        </T>
      </Fade>

      {/* beat 6 — sigma vs pi MO */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Ellipse cx={222} cy={445} rx={14} ry={7} fill="none" stroke={INK} strokeWidth={1.5} />
        <Ellipse cx={278} cy={445} rx={14} ry={7} fill="none" stroke={INK} strokeWidth={1.5} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={250} y={470} size={10.5} fill={INK}>
          σ: {t("head-on, axis-symmetric", "head-on, axis-symmetric")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.0)}>
        <Ellipse cx={800} cy={437} rx={20} ry={7} fill="none" stroke={INK} strokeWidth={1.5} />
        <Ellipse cx={800} cy={455} rx={20} ry={7} fill="none" stroke={INK} strokeWidth={1.5} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <T x={800} y={478} size={10.5} fill={INK}>
          π: {t("sidewise, nodal plane", "sidewise, nodal plane")}
        </T>
      </Fade>

      {/* beat 7 — closing */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={505} size={12} fill={INK}>
          {t("O₂: 2 unpaired e⁻ sit in antibonding orbitals", "O₂: 2 unpaired e⁻ antibonding orbitals mein baithte")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <Chip x={200} y={523} w={680} h={28} fill={GREEN} textFill="#fff" size={12} script={false}>
          {t("exactly explains the magnet experiment — MOT wins", "yahi magnet experiment explain karta — MOT jeet gaya")}
        </Chip>
      </Fade>
    </Scene>
  );
}
