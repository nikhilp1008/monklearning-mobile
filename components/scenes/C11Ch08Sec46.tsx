/**
 * C11 Ch08 · Section 46 — "Worked example — purify aniline (CBSE)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 7.68, 16.73, 26.11, 37.97, 50.94, 61.1, 64.43]):
 *  0 title (always-on, seq1) · 1 task · 2 diagram: steam-distillation apparatus
 *  sketch · 3 aniline meets both conditions · 4 combined vapour pressure <
 *  aniline's own bp · 5 distils at gentler temp, impurity stays · 6 answer:
 *  steam distillation (boxed) · 7 red closer (state the 2 conditions)
 *
 * Apparatus: flask1 c(200,190) r35 → condenser rect(400-550,175-205) →
 * flask2 c(700,220) r30.
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, RED, CREAM, AMBER,
  Scene,
} from '@/components/scenes/kit';
import { bondD } from "./chem-kit";
import { arrowD } from '@/components/scenes/kit';

export default function C11Ch08Sec46({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={RED} script>
          {t("Worked example — purify aniline (CBSE)", "Worked example — aniline purify karo (CBSE)")}
        </T>
      </Fade>

      {/* beat 1 — task */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={95} size={12} fill={INK}>
          {t("aniline: steam-volatile + water-immiscible, non-volatile impurity — which method?", "aniline: steam-volatile + water-immiscible, non-volatile impurity — kaunsa method?")}
        </T>
      </Fade>

      {/* beat 2 — the apparatus, drawn */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d={arrowD(150, 190, 168, 190)} stroke={AMBER} sw={2} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={140} y={195} size={11} fill={AMBER} anchor="end">
          {t("steam", "steam")}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.6)}
        d="M 200 190 m -35 0 a 35 35 0 1 0 70 0 a 35 35 0 1 0 -70 0"
        stroke={INK}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={200} y={238} size={11} fill={INK}>
          {t("aniline + impurity", "aniline + impurity")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.6)} d={bondD(235, 190, 400, 190)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 2)} d="M 400 175 h 150 v 30 h -150 Z" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 2.5)}>
        <T x={475} y={225} size={10} fill={MUTED}>
          {t("condenser", "condenser")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.7)} d={bondD(550, 190, 665, 220)} stroke={INK} sw={2} dur={0.4} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 3.1)}
        d="M 700 220 m -30 0 a 30 30 0 1 0 60 0 a 30 30 0 1 0 -60 0"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.6)}>
        <T x={700} y={263} size={11} fill={INK}>
          {t("distillate (aniline+H2O)", "distillate (aniline+H2O)")}
        </T>
      </Fade>

      {/* beat 3 — meets both conditions */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={295} size={13} fill={INK} weight={700}>
          {t("aniline meets both conditions for steam distillation", "aniline dono conditions poori karta hai — steam distillation ke liye")}
        </T>
      </Fade>

      {/* beat 4 — the physics */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={325} size={12.5} fill={INK}>
          {t("combined vapour pressure reaches atmospheric BELOW aniline's own b.p.", "combined vapour pressure aniline ke apne b.p. se PEHLE atmospheric tak pahunchta")}
        </T>
      </Fade>

      {/* beat 5 — the result */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={355} size={12.5} fill={INK}>
          {t("distils at a gentler temperature; the impurity stays behind", "gentler temperature par distil hota; impurity peeche reh jaati")}
        </T>
      </Fade>

      {/* beat 6 — the answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Rect x={380} y={375} width={280} height={40} rx={8} fill={CREAM} stroke={AMBER} strokeWidth={2} />
        <T x={520} y={401} size={17} fill={INK} weight={800}>
          {t("steam distillation", "steam distillation")}
        </T>
      </Fade>

      {/* beat 7 — the board habit */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 60 435 L 60 465" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={453} size={15} fill={RED} script anchor="start">
          {t(
            "name the method AND state the two physical conditions — reasoning earns the marks",
            "method naam do AUR do physical conditions batao — reasoning se marks milte"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
