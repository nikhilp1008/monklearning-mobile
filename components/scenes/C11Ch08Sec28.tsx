/**
 * C11 Ch08 · Section 28 — "Worked example — assign E/Z (JEE Main)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 6.83, 20.48, 27.9, 44.12, 56.15, 68.35, 73.3]):
 *  0 title (always-on, seq1) · 1 task (Br-CH=CH-Cl, opposite sides) · 2 diagram:
 *  structure drawn, Br up-left / Cl down-right · 3 left C: Br(35)>H · 4 right C:
 *  Cl(17)>H · 5 opposite sides → E · 6 answer stamp · 7 red closer (why E/Z,
 *  priority by atomic number)
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED, CREAM, AMBER,
  Scene,
} from '@/components/scenes/kit';
import { bondD, doubleBondD } from "./chem-kit";

export default function C11Ch08Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={RED} script>
          {t("Worked example — assign E/Z (JEE Main)", "Worked example — E/Z assign karo (JEE Main)")}
        </T>
      </Fade>

      {/* beat 1 — task */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={95} size={14} fill={INK}>
          Br−CH=CH−Cl: {t("Br and Cl on opposite sides", "Br aur Cl opposite sides par")}
        </T>
      </Fade>

      {/* beat 2 — the structure, drawn */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d={doubleBondD(460, 190, 560, 190, 3)} stroke={INK} sw={2.4} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d={bondD(460, 190, 430, 160)} stroke={INK} sw={2.2} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 1.1)} d={bondD(460, 190, 430, 220)} stroke={INK} sw={2.2} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 1.4)} d={bondD(560, 190, 590, 160)} stroke={INK} sw={2.2} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 1.7)} d={bondD(560, 190, 590, 220)} stroke={INK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={415} y={150} size={15} fill={INK} weight={700} anchor="end">
          Br
        </T>
        <T x={415} y={228} size={15} fill={INK} weight={700} anchor="end">
          H
        </T>
        <T x={605} y={150} size={15} fill={INK} weight={700} anchor="start">
          H
        </T>
        <T x={605} y={228} size={15} fill={INK} weight={700} anchor="start">
          Cl
        </T>
      </Fade>

      {/* beat 3 — left carbon priority */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={260} size={13} fill={INK}>
          {t("left C: Br (Z=35) outranks H → higher priority = Br", "left C: Br (Z=35), H se senior → higher priority = Br")}
        </T>
      </Fade>

      {/* beat 4 — right carbon priority */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={292} size={13} fill={INK}>
          {t("right C: Cl (Z=17) outranks H → higher priority = Cl", "right C: Cl (Z=17), H se senior → higher priority = Cl")}
        </T>
      </Fade>

      {/* beat 5 — opposite sides means E */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={325} size={14} fill={INK} weight={700}>
          {t("Br, Cl on opposite sides → E", "Br, Cl opposite sides par → E")}
        </T>
      </Fade>

      {/* beat 6 — the answer */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Rect x={340} y={345} width={400} height={40} rx={8} fill={CREAM} stroke={AMBER} strokeWidth={2} />
        <T x={540} y={371} size={18} fill={INK} weight={800}>
          (E)-1-bromo-2-chloroethene
        </T>
      </Fade>

      {/* beat 7 — why E/Z */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 60 410 L 60 440" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={428} size={15} fill={RED} script anchor="start">
          {t(
            "cis/trans is ambiguous here ('cis to what?') — priority is by atomic number",
            "cis/trans yahan ambiguous hai ('cis kis se?') — priority atomic number se"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
