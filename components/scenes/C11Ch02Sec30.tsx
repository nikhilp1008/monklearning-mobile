/**
 * C11 Ch02 · Section 30 — "Deriving the Bohr radius"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: concept` — the derivation hub.
 *
 * Beats (en [0, 7.08, 18.43, 30.81, 40.96, 52.39, 63.49, 74.84]):
 *  0 anchor: the derivation hub — radius comes first, everything builds on it
 *  1 formula: (1/4πε₀)(Ze²/r²) = mv²/r
 *  2 explain: the only inward force is electrostatic — it supplies centripetal force
 *  3 formula: mv² = (1/4πε₀)(Ze²/r)
 *  4 explain (RED note): now add Bohr's rule: mvr=nh/2π ⇒ v=nh/2πmr
 *  5 formula (high, GREEN): rₙ = n²h²ε₀/(πmZe²) = 0.529(n²/Z) Å
 *  6 guardrail (high, RED): r∝n², r∝1/Z; n=1,Z=1 ⇒ 0.529Å — real hydrogen
 *  7 land: substitute quantised v into the force balance, solve for r
 *
 * Layout plan (single column, x540 center):
 *  title (always)          | T mid | x540 y52 script red
 *  b0 | anchor caption      | T mid | x540 y74            [dims@b1]
 *  b1 | formula chip        | Chip  | x350..730 y100..132
 *  b2 | explain caption     | T mid | x540 y158
 *  b3 | formula chip        | Chip  | x360..720 y184..216
 *  b4 | explain caption     | T mid | x540 y242
 *  b5 | formula chip (GRN)  | Chip  | x260..820 y268..306
 *  b6 | guardrail (RED)     | Chip  | x230..850 y322..358
 *  b7 | land caption        | T mid | x540 y386
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, GREEN, RED, CREAM, MUTED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch02Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={15} fill={RED} script>
          {t("deriving the Bohr radius", "Bohr radius derive karna")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={74} size={11} fill={RED} script>
          {t(
            "the derivation hub — radius comes first, everything builds on it",
            "derivation hub — radius pehle aata hai, baaki sab isi par bana"
          )}
        </T>
      </Fade>

      {/* beat 1 — formula: force balance */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={350} y={100} w={380} h={32} fill={CREAM} stroke={MUTED} textFill={INK} size={13} script={false}>
          {"(1/4πε₀)(Ze²/r²) = mv²/r"}
        </Chip>
      </Fade>

      {/* beat 2 — explain: electrostatic force */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={158} size={12} fill={INK} script>
          {t(
            "the only inward force is electrostatic — it must supply the centripetal force",
            "sirf inward force electrostatic hai — usi ko centripetal force dena hoga"
          )}
        </T>
      </Fade>

      {/* beat 3 — formula: rearranged */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={360} y={184} w={360} h={32} fill={CREAM} stroke={MUTED} textFill={INK} size={13} script={false}>
          {"mv² = (1/4πε₀)(Ze²/r)"}
        </Chip>
      </Fade>

      {/* beat 4 — explain (RED note): Bohr's new rule */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={242} size={12} fill={RED} script>
          {t(
            "now add Bohr's new rule: mvr = nh/2π ⇒ v = nh/2πmr",
            "ab Bohr ka naya rule daalo: mvr = nh/2π ⇒ v = nh/2πmr"
          )}
        </T>
      </Fade>

      {/* beat 5 — formula (high, GREEN): the Bohr radius */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={260} y={268} w={560} h={38} fill={GREEN} textFill="#fff" size={15} script={false}>
          {"rₙ = n²h²ε₀/(πmZe²) = 0.529 (n²/Z) Å"}
        </Chip>
      </Fade>

      {/* beat 6 — guardrail (high, RED): the scaling + real hydrogen */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={230} y={322} w={620} h={36} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {"r ∝ n², r ∝ 1/Z;  n=1, Z=1 ⇒ 0.529 Å — real hydrogen"}
        </Chip>
      </Fade>

      {/* beat 7 — land: the derivation summary */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={386} size={12} fill={GREEN} script>
          {t(
            "substitute the quantised v into the force balance, solve for r — the whole derivation",
            "quantised v ko force balance mein substitute karo, r ke liye solve karo — poori derivation"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
