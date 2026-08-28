/**
 * Ch12 · Section 47 — "The golden thread and master formula sheet"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 19.11, 43.95, 63.83, 64.83, 65.83, 66.83, 67.83]):
 *  0 title + intro (one idea, unfolded) · 1 narrative bridge · 2 GOLDEN
 *    THREAD chain: PV=nRT=NkT → P=⅓ρv²rms → T↔KE → U=(f/2)nRT · 3 kinetic
 *    meaning of T ⇒ vrms formula · 4 equipartition closes: Cv,Cp,γ · 5
 *    master sheet row1: density form, PV=⅔E, λ · 6 row2: speed ratio, dof
 *    values · 7 unit rules (T in K, M in kg/mol)
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 19, red)          | T mid | x280..800 y31..66 (bl56)
 *  b0 | intro (12, ink, script)         | T mid | x540 y86
 *  b2 | 4 chain chips + 3 arrows        | Chip  | y104..134 x140/350/560/770
 *  b3 | vrms line (12, ink)             | T mid | x540 y160
 *  b4 | Cv/Cp/γ line (12, ink)          | T mid | x540 y184
 *  b5 | 3 chips: density,PV=2/3E,λ      | Chip  | y206..234 x345/475/595
 *  b6 | 2 chips: speed ratio, dof       | Chip  | y246..274 x325/555
 *  b7 | unit rules (12, red, bold)      | T mid | x540 y298
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
  arrowD,
  INK,
  AMBER,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch12Sec47({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={56} size={19} fill={RED} script>
          {t("the golden thread and master formula sheet", "golden thread aur master formula sheet")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={86} size={12} fill={INK} script>
          {t(
            "one seed: countless molecules in ceaseless random motion",
            "ek beej: anginat molecules ceaseless random motion mein"
          )}
        </T>
      </Fade>

      {/* beat 1 — narrative bridge (no new geometry, just context via beat 2) */}

      {/* beat 2 — THE GOLDEN THREAD chain */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Chip x={140} y={104} w={170} h={30} fill={GREEN} textFill="#fff" size={12} script={false}>
          PV=nRT=NkʙT
        </Chip>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d={arrowD(310, 119, 350, 119)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <Chip x={350} y={104} w={170} h={30} fill={GREEN} textFill="#fff" size={12} script={false}>
          P=⅓ρv²rms
        </Chip>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.7)} d={arrowD(520, 119, 560, 119)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <Chip x={560} y={104} w={170} h={30} fill={GREEN} textFill="#fff" size={12} script={false}>
          T ↔ KE
        </Chip>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.6)} d={arrowD(730, 119, 770, 119)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <Chip x={770} y={104} w={170} h={30} fill={GREEN} textFill="#fff" size={12} script={false}>
          U=(f/2)nRT
        </Chip>
      </Fade>

      {/* beat 3 — kinetic meaning of T */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={160} size={12} fill={INK}>
          ½m⟨v²⟩ = 3/2 kʙT ⇒ vrms = √(3RT/M)
        </T>
      </Fade>

      {/* beat 4 — equipartition closes the chain */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={184} size={12} fill={INK}>
          Cv = f/2 R, Cp = Cv+R, γ = 1+2/f
        </T>
      </Fade>

      {/* beat 5 — master sheet row 1 */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Chip x={345} y={206} w={100} h={28} fill={CREAM} stroke={AMBER} textFill={INK} size={11} script={false}>
          P=ρRT/M
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <Chip x={475} y={206} w={90} h={28} fill={CREAM} stroke={AMBER} textFill={INK} size={11} script={false}>
          PV=⅔E
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <Chip x={595} y={206} w={140} h={28} fill={CREAM} stroke={AMBER} textFill={INK} size={11} script={false}>
          λ=1/(√2πd²n)
        </Chip>
      </Fade>

      {/* beat 6 — master sheet row 2 */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <Chip x={325} y={246} w={200} h={28} fill={CREAM} stroke={AMBER} textFill={INK} size={11} script={false}>
          vrms:v̄:vp = √3:√(8/π):√2
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <Chip x={555} y={246} w={200} h={28} fill={CREAM} stroke={AMBER} textFill={INK} size={11} script={false}>
          f = 3,5,6 (mono/di/poly)
        </Chip>
      </Fade>

      {/* beat 7 — unit rules */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={298} size={12} fill={RED} weight={700}>
          {t("T always in kelvin · M in kg/mol for speeds", "T hamesha kelvin · M kg/mol speeds ke liye")}
        </T>
      </Fade>
    </Scene>
  );
}
