/**
 * P12Ch06 · Section 29 — "NEET speed trap: copper pipe versus PVC pipe"
 * Subtopic: Motional EMF & Eddy Currents
 */

import React from "react";
import { G, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD,
  INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw on={on} delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 5} size={14} fill={RED} weight={800}>{n}</T>
      </Fade>
    </G>
  );
}

export default function P12Ch06Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("NEET Speed Trap: Magnet Dropped in Copper Pipe vs PVC Pipe", "NEET Speed Trap: Copper Pipe vs PVC Pipe me Magnet Drop Experiment")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 200 70 C 440 66, 640 74, 880 69" stroke={RED} sw={2.4} dur={0.7} />

      {/* BEAT 1 & 3: PVC Pipe - Free Fall */}
      <Badge n={1} cx={52} cy={140} on={beat >= 1} delay={dl(1, 0.4)} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={74} y={145} size={14} fill={RED} weight={700} anchor="start">
          {t("PVC INSULATING PIPE: NO EDDY CURRENTS (a = g)", "PVC INSULATING PIPE: NO EDDY CURRENTS (a = g)")}
        </T>
      </Fade>
      <Fade on={beat >= 1} dim={beat >= 5}>
        <G transform="translate(60, 160)">
          <Rect x={0} y={5} width={450} height={60} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={30} anchor="middle" size={15} fill={INK} weight={800}>
            Insulator → Zero Eddy Currents → Free Fall
          </T>
          <T x={225} y={52} anchor="middle" size={14} fill={AMBER_DARK} weight={700}>
            Acceleration a = g (normal gravitational free fall!)
          </T>
        </G>
      </Fade>

      {/* BEAT 5 & 6: Copper Pipe - Magnetic Braking */}
      <Badge n={2} cx={540} cy={140} on={beat >= 5} delay={dl(5, 0.4)} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={562} y={145} size={14} fill={RED} weight={700} anchor="start">
          {t("COPPER CONDUCTING PIPE: STRONG EDDY BRAKING (a < g)", "COPPER CONDUCTING PIPE: STRONG EDDY BRAKING (a < g)")}
        </T>
      </Fade>
      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(540, 160)">
          <Rect x={0} y={5} width={480} height={60} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={240} y={30} anchor="middle" size={15} fill={INK} weight={800}>
            Eddy currents create opposing magnetic force F_m
          </T>
          <T x={240} y={52} anchor="middle" size={15} fill={GREEN} weight={800}>
            {t("Magnet reaches slow terminal velocity v_T (a → 0, v = const)!", "Magnet dhiere-dhiere slow terminal velocity v_T reach karta hai!")}
          </T>
        </G>
      </Fade>

      {/* BEAT 7: NEET Question Rule */}
      <Badge n={3} cx={52} cy={340} on={beat >= 7} delay={dl(7, 0.4)} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={74} y={345} size={14} fill={RED} weight={700} anchor="start">
          {t("NEET SPEED TRAP RECAP", "NEET SPEED TRAP RECAP")}
        </T>
      </Fade>
      <Fade on={beat >= 7}>
        <G transform="translate(60, 360)">
          <Rect x={0} y={5} width={960} height={50} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={480} y={35} anchor="middle" size={16} fill={GREEN} weight={800}>
            Copper is non-magnetic, BUT its electrical conductivity allows eddy currents that retard the magnet's fall!
          </T>
        </G>
      </Fade>

      {/* Summary Chip */}
      <Fade on={beat >= 7}>
        <Chip x={100} y={490} w={880} h={44} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ NEET Trap: A magnet dropped in a copper pipe falls with retarding acceleration a < g reaching slow terminal velocity! ✓",
            "★ NEET Trap: Copper pipe me dropped magnet retarding acceleration a < g se slow terminal velocity reach karta hai! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
