/**
 * P12Ch05 · Section 46 — "What zero net magnetic flux through every closed surface means"
 * Subtopic: Magnetism and Gauss's Law
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

export default function P12Ch05Sec46({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("Zero Net Magnetic Flux & Differential Form ∇ · B = 0", "Zero Net Magnetic Flux aur Differential Form ∇ · B = 0")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 200 70 C 440 66, 640 74, 880 69" stroke={RED} sw={2.4} dur={0.7} />

      {/* BEAT 1 & 3: Flux Inflow = Outflow */}
      <Badge n={1} cx={52} cy={140} on={beat >= 1} delay={dl(1, 0.4)} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={74} y={145} size={14} fill={RED} weight={700} anchor="start">
          {t("INFLOW EQUALS OUTFLOW THROUGH ANY CLOSED SURFACE", "ANY CLOSED SURFACE MEIN INFLOW EQUALS OUTFLOW")}
        </T>
      </Fade>
      <Fade on={beat >= 1} dim={beat >= 5}>
        <G transform="translate(60, 160)">
          <Rect x={0} y={5} width={450} height={60} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={30} anchor="middle" size={15} fill={INK} weight={800}>
            Φ_in = Φ_out  ⇒  Φ_net = ∮ B · dA = 0
          </T>
          <T x={225} y={52} anchor="middle" size={14} fill={AMBER_DARK} weight={700}>
            {t("No point source or sink exists to create or destroy B lines!", "Magnetic field lines create ya destroy karne ke liye koi source/sink nahi hai!")}
          </T>
        </G>
      </Fade>

      {/* BEAT 5 & 6: Differential Form div B = 0 */}
      <Badge n={2} cx={540} cy={140} on={beat >= 5} delay={dl(5, 0.4)} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={562} y={145} size={14} fill={RED} weight={700} anchor="start">
          {t("DIFFERENTIAL FORM: ∇ · B = 0", "DIFFERENTIAL FORM: ∇ · B = 0")}
        </T>
      </Fade>
      <Fade on={beat >= 5} dim={beat >= 7}>
        <G transform="translate(540, 160)">
          <Rect x={0} y={5} width={480} height={60} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={240} y={30} anchor="middle" size={18} fill={GREEN} weight={800}>
            ∇ · B = ∂B_x/∂x + ∂B_y/∂y + ∂B_z/∂z = 0
          </T>
          <T x={240} y={52} anchor="middle" size={14} fill={INK} weight={700}>
            {t("Magnetic field is solenoidal everywhere in space!", "Magnetic field space me har jagah solenoidal hai!")}
          </T>
        </G>
      </Fade>

      {/* BEAT 7: Key takeaway */}
      <Badge n={3} cx={52} cy={340} on={beat >= 7} delay={dl(7, 0.4)} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={74} y={345} size={14} fill={RED} weight={700} anchor="start">
          {t("SOLENOIDAL FIELD CHARACTERISTIC", "SOLENOIDAL FIELD CHARACTERISTIC")}
        </T>
      </Fade>
      <Fade on={beat >= 7}>
        <G transform="translate(60, 360)">
          <Rect x={0} y={5} width={960} height={50} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={480} y={35} anchor="middle" size={16} fill={GREEN} weight={800}>
            A solenoidal vector field (∇ · B = 0) has lines that never originate or terminate on isolated charges!
          </T>
        </G>
      </Fade>

      {/* Summary Chip */}
      <Fade on={beat >= 7}>
        <Chip x={100} y={490} w={880} h={44} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ ∮ B · dA = 0 in integral form is equivalent to ∇ · B = 0 in differential form (solenoidal field)! ✓",
            "★ Integral form me ∮ B · dA = 0 differential form me ∇ · B = 0 (solenoidal field) ke barabar hai! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
