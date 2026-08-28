/**
 * Ch12 · Section 22 — "The kinetic equation and the pressure-energy bridge" (formula sheet)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.22, 19.54, 34.22, 51.03, 52.03, 53.03]):
 *  0 title + underline · 1 kinetic equation P=⅓n₀m⟨v²⟩ · 2 two equivalent
 *    forms (density, PV) · 3 symbol legend (m, N/V, vrms, ρ) · 4 bridge:
 *    KE_total, rewrite PV=⅔KE · 5 boxed: KE_total=3/2 PV · 6 proportionalities
 *
 * Layout plan (Anek width≈0.5×size×chars):
 *  b0 | title (script 23, red)          | T mid | x270..810 y37..76 (bl64)
 *  b0 | underline                        | Draw  | y86 x330..750
 *  b1 | kinetic-eq chip                  | Chip  | x330..750 y104..140
 *  b2 | 2 equivalent-form chips           | Chip  | x140..500 / x570..940 y150..184
 *  b3 | symbol legend box (2x2)           | Draw  | x140..940 y196..268
 *  b4 | bridge line (14, ink, script)     | T mid | x540 y300
 *  b5 | boxed final "KE=3/2 PV"            | Chip  | x400..680 y318..362
 *  b6 | proportionality chips ×3          | Chip  | y400..432 x140/440/680
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

export default function Ch12Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("the kinetic equation and the pressure-energy bridge", "kinetic equation aur pressure-energy bridge")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 330 86 C 420 82, 660 90, 750 84" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 1 — kinetic equation */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={330} y={104} w={420} h={36} fill={GREEN} textFill="#fff" size={17} script={false}>
          P = ⅓ n₀ m ⟨v²⟩ (n₀ = N/V)
        </Chip>
      </Fade>

      {/* beat 2 — two equivalent forms */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={140} y={150} w={360} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={15} script={false}>
          P = ⅓ρv²rms
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <Chip x={570} y={150} w={370} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={15} script={false}>
          PV = ⅓Nmv²rms
        </Chip>
      </Fade>

      {/* beat 3 — symbol legend */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.2)}
        d="M 140 196 h 800 q 10 0 10 10 v 52 q 0 10 -10 10 h -800 q -10 0 -10 -10 v -52 q 0 -10 10 -10"
        stroke={INK}
        sw={2}
        dur={0.8}
      />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={330} y={222} size={13} fill={INK} anchor="middle">
          {t("m = one molecule's mass", "m = ek molecule ka mass")}
        </T>
        <T x={750} y={222} size={13} fill={INK} anchor="middle">
          N/V = number density
        </T>
        <T x={330} y={250} size={13} fill={INK} anchor="middle">
          vrms = √⟨v²⟩
        </T>
        <T x={750} y={250} size={13} fill={INK} anchor="middle">
          {t("ρ = Nm/V (gas density)", "ρ = Nm/V (gas density)")}
        </T>
      </Fade>

      {/* beat 4 — the bridge */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={300} size={14} fill={INK} script>
          {t(
            "KE_total = N·½m⟨v²⟩ ⇒ rewrite: PV = ⅔ KE_total",
            "KE_total = N·½m⟨v²⟩ ⇒ rewrite: PV = ⅔ KE_total"
          )}
        </T>
      </Fade>

      {/* beat 5 — boxed bridge result */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Chip x={370} y={318} w={340} h={44} fill={GREEN} textFill="#fff" size={20} script={false}>
          KE_total = (3/2) PV
        </Chip>
      </Fade>

      {/* beat 6 — proportionalities */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={140} y={400} w={220} h={32} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          P ∝ N/V
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <Chip x={410} y={400} w={220} h={32} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          P ∝ m
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.7)}>
        <Chip x={680} y={400} w={280} h={32} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          {t("P ∝ v²rms (never vrms alone)", "P ∝ v²rms (kabhi vrms akela nahi)")}
        </Chip>
      </Fade>
    </Scene>
  );
}
