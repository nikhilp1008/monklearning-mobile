/**
 * C11 Ch02 · Section 51 — "Worked example (CBSE): scandium configuration and quantum numbers"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: worked_examples`.
 *
 * Beats (en [0, 6.31, 22.1, 29.35, 43.35, 53.16, 65.28, 73.98]):
 *  0 anchor: opening the quantum-model worked examples — scandium
 *  1 given: fill (n+l) order: 1s²2s²2p⁶3s²3p⁶4s²3d¹
 *  2 formula (high, GREEN): Sc = [Ar]3d¹4s²
 *  3 explain: the differentiating (last-filled) electron is the 3d electron
 *  4 explain: for a 3d electron — n=3; l=2 (the d subshell)
 *  5 chip: ml=−2 (first, most negative orbital), ms=+½
 *  6 guardrail (high, RED): (n,l,ml,ms) = (3,2,−2,+½)
 *  7 land: assign ml from most negative up, spin +½ to first occupant
 *
 * Layout plan (single column, x540 center):
 *  title (always)          | T mid | x540 y52 script red
 *  b0 | anchor caption      | T mid | x540 y74            [dims@b1]
 *  b1 | given chip          | Chip  | x230..850 y96..130
 *  b2 | formula chip (GRN)  | Chip  | x400..680 y148..184
 *  b3 | explain caption     | T mid | x540 y212
 *  b4 | explain caption     | T mid | x540 y238
 *  b5 | chip                | Chip  | x300..780 y264..298
 *  b6 | guardrail (RED)     | Chip  | x270..810 y314..350
 *  b7 | closing caption     | T mid | x540 y378
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, GREEN, RED, CREAM, MUTED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch02Sec51({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={13} fill={RED} script>
          {t(
            "[CBSE] scandium (Z=21): configuration and quantum numbers",
            "[CBSE] scandium (Z=21): configuration aur quantum numbers"
          )}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={74} size={11} fill={RED} script>
          {t(
            "opening the quantum-model worked examples — scandium",
            "quantum-model worked examples khol rahe — scandium"
          )}
        </T>
      </Fade>

      {/* beat 1 — given */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={230} y={96} w={620} h={34} fill={CREAM} stroke={MUTED} textFill={RED} size={13} script={false}>
          {"fill in (n+l) order: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d¹"}
        </Chip>
      </Fade>

      {/* beat 2 — formula (high, GREEN) */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={400} y={148} w={280} h={36} fill={GREEN} textFill="#fff" size={17} script={false}>
          {"Sc = [Ar] 3d¹ 4s²"}
        </Chip>
      </Fade>

      {/* beat 3 — explain: the differentiating electron */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={212} size={12} fill={INK} script>
          {t(
            "the differentiating (last-filled) electron is the single 3d electron",
            "differentiating (last-filled) electron wahi single 3d electron hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — explain: n and l for a 3d electron */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={238} size={12} fill={INK} script>
          {t(
            "for a 3d electron: n=3; l=2 (the d subshell)",
            "3d electron ke liye: n=3; l=2 (d subshell)"
          )}
        </T>
      </Fade>

      {/* beat 5 — chip: ml and ms */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={300} y={264} w={480} h={34} fill={CREAM} stroke={MUTED} textFill={INK} size={13} script={false}>
          {t(
            "ml=−2 (first, most negative orbital), ms=+½",
            "ml=−2 (pehla, sabse negative orbital), ms=+½"
          )}
        </Chip>
      </Fade>

      {/* beat 6 — guardrail (high, RED): the full quantum-number set */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={270} y={314} w={540} h={36} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {"differentiating electron: (n,l,ml,ms) = (3, 2, −2, +½)"}
        </Chip>
      </Fade>

      {/* beat 7 — land: the routine */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={378} size={12} fill={GREEN} script>
          {t(
            "assign ml from the most negative value up, spin +½ to the first occupant",
            "ml sabse negative value se upar assign karo, spin +½ pehle occupant ko"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
