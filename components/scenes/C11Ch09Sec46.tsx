/**
 * C11 Ch09 · Section 46 — "Naming and isomerism"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 6.06, 20.05, 32.94, 37.63, 45.91, 55.81]):
 *  0 heading · 1 common: acetylene derivatives; IUPAC -ane→-yne · 2
 *  examples: ethyne, propyne, but-1-yne, but-2-yne · 3 ethyne/propyne: one
 *  structure each · 4 from butyne on: position isomerism · 5 larger
 *  members: chain isomerism (C5H8 set) · 6 RED: spot position vs chain fast
 *
 * Layout plan:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec46({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={27} fill={RED} script>
          {t("naming and isomerism", "naming aur isomerism")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={97} size={16} fill={INK} weight={700}>
          {t("naming alkynes", "alkynes ko naam dena")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={135} size={15} fill={INK}>
          {t("common: acetylene derivatives (methylacetylene); IUPAC: -ane → -yne", "common: acetylene ke derivatives (methylacetylene); IUPAC: -ane → -yne")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={175} size={16} fill={INK} weight={700}>
          HC≡CH ethyne · CH3C≡CH propyne · but-1-yne · but-2-yne
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={215} size={15} fill={INK}>
          {t("ethyne and propyne have only one structure each", "ethyne aur propyne ka sirf ek-ek structure hai")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={250} size={15} fill={INK}>
          {t("from butyne onward: position isomerism (but-1-yne vs but-2-yne)", "butyne se aage: position isomerism (but-1-yne vs but-2-yne)")}
        </T>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={285} size={15} fill={INK}>
          {t("larger members also show chain isomerism (the C5H8 set)", "bade members chain isomerism bhi dikhate (C5H8 set)")}
        </T>
      </Fade>

      {/* beat 6 — the exam-time tip */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 310 L 60 346" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={332} size={16} fill={RED} script anchor="start">
          {t("recognising position vs chain isomers quickly saves exam time", "position vs chain isomers jaldi pehchaanna exam mein time bachata")}
        </T>
      </Fade>
    </Scene>
  );
}
