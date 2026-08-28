/**
 * Ch12 · Section 13 — "The gas laws and the ideal gas equation" (formula sheet)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 3, 4, 5, 21.9] — beats 0-5 near-instant, beat 6 gets the
 * real ~17s window; hi is more spread [0,10.84,19.03,28.16,40.7,65.54,66.54]):
 *  0 title + underline · 1 Boyle chip · 2 Charles chip · 3 Gay-Lussac +
 *    Avogadro chips · 4 combined master equation + 3 equivalent forms · 5
 *    Dalton + Graham chips · 6 constants box (R, kʙ, Nₐ, molar volume)
 *
 * Layout plan (Anek sans width ≈0.5×size×chars):
 *  b0 | title (script 24, red)          | T mid | x232..848 y37..78 (bl64)
 *  b0 | underline                        | Draw  | y86 x330..750
 *  b1 | Boyle chip                       | Chip  | x350..730 y104..134
 *  b2 | Charles chip                     | Chip  | x340..740 y142..172
 *  b3 | Gay-Lussac chip · Avogadro chip  | Chip  | x140..540 / x560..920 y180..210
 *  b4 | "PV = nRT" chip (big, green)     | Chip  | x440..640 y225..263
 *  b4 | 3 equivalent-form chips           | Chip  | y280..308 x164/460/696
 *  b5 | Dalton chip · Graham chip        | Chip  | x180..510 / x570..900 y322..352
 *  b6 | constants box + 4 lines           | Draw  | x150..930 y365..435
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
  AMBER,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch12Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("the gas laws and the ideal gas equation", "gas laws aur ideal gas equation")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 330 86 C 420 82, 660 90, 750 84" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 1 — Boyle */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={350} y={104} w={380} h={30} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          Boyle (T fixed): P₁V₁ = P₂V₂
        </Chip>
      </Fade>

      {/* beat 2 — Charles */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={340} y={142} w={400} h={30} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          Charles (P fixed): V₁/T₁ = V₂/T₂
        </Chip>
      </Fade>

      {/* beat 3 — Gay-Lussac + Avogadro */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={140} y={180} w={400} h={30} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          Gay-Lussac (V fixed): P/T = const
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <Chip x={560} y={180} w={360} h={30} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          Avogadro (P,T fixed): V ∝ n
        </Chip>
      </Fade>

      {/* beat 4 — combined master equation + equivalent forms */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={440} y={225} w={200} h={38} fill={GREEN} textFill="#fff" size={20} script={false}>
          PV = nRT
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <Chip x={164} y={280} w={280} h={28} fill={CREAM} stroke={AMBER} textFill={INK} size={12} script={false}>
          PV = (m/M)RT
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <Chip x={460} y={280} w={220} h={28} fill={CREAM} stroke={AMBER} textFill={INK} size={12} script={false}>
          PV = NkʙT
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <Chip x={696} y={280} w={220} h={28} fill={CREAM} stroke={AMBER} textFill={INK} size={12} script={false}>
          P = ρRT/M
        </Chip>
      </Fade>

      {/* beat 5 — Dalton + Graham */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={180} y={322} w={330} h={30} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          Dalton: P_total = ΣPᵢ
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <Chip x={570} y={322} w={330} h={30} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          Graham: rate ∝ 1/√M
        </Chip>
      </Fade>

      {/* beat 6 — constants to memorise */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.2)}
        d="M 150 365 h 780 q 10 0 10 10 v 50 q 0 10 -10 10 h -780 q -10 0 -10 -10 v -50 q 0 -10 10 -10"
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={300} y={390} size={14} fill={INK} anchor="middle">
          R = 8.314 J/(mol·K)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={780} y={390} size={14} fill={INK} anchor="middle">
          kʙ = 1.38×10⁻²³ J/K
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={300} y={418} size={14} fill={INK} anchor="middle">
          Nₐ = 6.022×10²³ /mol
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        <T x={780} y={418} size={14} fill={INK} anchor="middle">
          {t("Vₘ(STP) = 22.4 L", "Vₘ(STP) = 22.4 L")}
        </T>
      </Fade>
    </Scene>
  );
}
