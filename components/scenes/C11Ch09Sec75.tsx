/**
 * C11 Ch09 · Section 75 — "Nitration of toluene" (NEET worked)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 9.81, 19.97, 26.62, 34.3, 41.3, 49.41]):
 *  0 heading + tag · 1 identify class: –CH3 is alkyl · 2 alkyl = donating,
 *  activating, o/p-directing · 3 faster than benzene · 4 mainly o/p
 *  products · 5 RED answer · 6 AMBER trap: don't lump every group together
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, AMBER_DARK, INK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch09Sec75({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={27} fill={RED} script>
          {t("nitration of toluene", "toluene ka nitration")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={97} size={14} fill={INK} weight={700}>
          [NEET] {t("— o/p or meta?", "— o/p ya meta?")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={135} size={15} fill={INK} weight={700}>
          {t("identify the substituent's class first: –CH3 is an alkyl group", "pehle substituent ka class pehchaano: –CH3 alkyl group hai")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={170} size={14} fill={INK}>
          {t("alkyl is electron-donating ⇒ activating and o/p-directing", "alkyl electron-donating hai ⇒ activating aur o/p-directing")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={205} size={14} fill={INK}>
          {t("so nitration is faster than benzene", "isliye nitration benzene se tez hai")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={240} size={14} fill={INK}>
          {t("...and gives mainly o-nitrotoluene and p-nitrotoluene", "...aur mainly o-nitrotoluene aur p-nitrotoluene deta")}
        </T>
      </Fade>

      {/* beat 5 — the answer */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d="M 60 275 L 60 325" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={76} y={295} size={16} fill={RED} weight={800} anchor="start">
          {t("o/p products predominate", "o/p products predominate")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={76} y={318} size={15} fill={RED} weight={700} anchor="start">
          {t("toluene is more reactive than benzene", "toluene benzene se zyada reactive hai")}
        </T>
      </Fade>

      {/* beat 6 — the trap, amber */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={410} size={15} fill={AMBER_DARK} weight={800}>
          {t("TRAP: don't lump every group together", "TRAP: har group ko ek jaisa mat maano")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={540} y={440} size={13} fill={AMBER_DARK} script>
          {t("alkyl = activating, exactly opposite to a nitro group", "alkyl = activating, nitro group se ekdum opposite")}
        </T>
      </Fade>
    </Scene>
  );
}
