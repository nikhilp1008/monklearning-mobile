/**
 * Ch12 · Section 30 — "From pressure to temperature, and out come the speeds"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.2, 28.07, 37.46, 57.6, 71.94, 89.17]):
 *  0 title + intro · 1 two PV expressions (kinetic, molecular gas law) · 2
 *    set equal, cancel N · 3 rearrange ⇒ ½m⟨v²⟩=(3/2)kT boxed (KE meaning) ·
 *    4 solve for vrms boxed · 5 vp = peak, d(curve)/dv=0 · 6 vp=√(2kT/m),
 *    smallest coefficient
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 21, red)          | T mid | x260..820 y33..70 (bl58)
 *  b0 | intro (13, ink, script)         | T mid | x540 y86
 *  b1 | 2 expression chips               | Chip  | x140..510 / x560..920 y110..146
 *  b2 | set-equal line (15, ink)        | T mid | x540 y178
 *  b3 | KE chip (boxed, green)           | Chip  | x330..750 y200..240
 *  b4 | vrms chip (boxed, big, green)    | Chip  | x300..780 y260..306
 *  b5 | vp intro (14, ink, script)      | T mid | x540 y345
 *  b6 | vp result (15, amber_dark, bold)| T mid | x540 y378
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  T,
  Chip,
  INK,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch12Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={RED} script>
          {t("from pressure to temperature: out come the speeds", "pressure se temperature: speeds nikal aati hain")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={86} size={13} fill={INK} script>
          {t(
            "carry two results, set them equal — the kinetic meaning of T falls out",
            "do results, unhe barabar rakho — T ka kinetic matlab nikal aata"
          )}
        </T>
      </Fade>

      {/* beat 1 — two PV expressions */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={140} y={110} w={370} h={36} fill={CREAM} stroke={AMBER} textFill={INK} size={15} script={false}>
          PV = ⅓Nm⟨v²⟩
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <Chip x={560} y={110} w={360} h={36} fill={CREAM} stroke={AMBER} textFill={INK} size={15} script={false}>
          PV = NkʙT
        </Chip>
      </Fade>

      {/* beat 2 — set equal, cancel N */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={178} size={15} fill={INK}>
          {t("set equal, cancel N ⇒ ⅓m⟨v²⟩ = kʙT", "barabar rakho, N cancel ⇒ ⅓m⟨v²⟩ = kʙT")}
        </T>
      </Fade>

      {/* beat 3 — the KE meaning of temperature, boxed */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <Chip x={330} y={200} w={420} h={40} fill={GREEN} textFill="#fff" size={18} script={false}>
          ½m⟨v²⟩ = (3/2)kʙT
        </Chip>
      </Fade>

      {/* beat 4 — solve for vrms, boxed */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={300} y={260} w={480} h={46} fill={GREEN} textFill="#fff" size={20} script={false}>
          vrms = √(3kʙT/m) = √(3RT/M)
        </Chip>
      </Fade>

      {/* beat 5 — most probable speed setup */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={345} size={14} fill={INK} script>
          {t(
            "vₚ = peak of the distribution ⇒ d(Maxwell curve)/dv = 0",
            "vₚ = distribution ka peak ⇒ d(Maxwell curve)/dv = 0"
          )}
        </T>
      </Fade>

      {/* beat 6 — vp result */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={378} size={15} fill={AMBER_DARK} weight={700}>
          {t(
            "vₚ = √(2kʙT/m) — smallest coefficient, it marks the peak",
            "vₚ = √(2kʙT/m) — sabse chota coefficient, peak mark karta"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
