/**
 * C11 Ch02 · Section 49 — "Quantum numbers and counting relations"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: formulas` — reference card 1.
 *
 * Beats (en [0, 7.77, 27.65, 37.8, 45.91, 54.1, 62.63, 72.02]):
 *  0 anchor: compact reference — quantum numbers + counting relations
 *  1 formula: n=1,2,3,..; l=0..(n−1)(s,p,d,f); ml=−l..+l; ms=±½
 *  2 formula (high, GREEN): L = √(l(l+1)) · h/2π
 *  3 formula (high, GREEN): orbitals: subshell=2l+1, shell=n²
 *  4 formula (high, GREEN): max e⁻: subshell=4l+2, shell=2n²
 *  5 explain: an s-electron (l=0) has zero orbital angular momentum
 *  6 explain: capacities follow: s=2, p=6, d=10, f=14
 *  7 guardrail (high, RED): the backbone of every configuration question
 *
 * Layout plan (single column, x540 center):
 *  title (always)          | T mid | x540 y52 script red
 *  b0 | anchor caption      | T mid | x540 y74            [dims@b1]
 *  b1 | formula chip        | Chip  | x180..900 y96..130
 *  b2 | formula chip (GRN)  | Chip  | x330..750 y146..180
 *  b3 | formula chip (GRN)  | Chip  | x310..770 y196..230
 *  b4 | formula chip (GRN)  | Chip  | x310..770 y246..280
 *  b5 | explain caption     | T mid | x540 y306
 *  b6 | explain caption     | T mid | x540 y332
 *  b7 | guardrail (RED)     | Chip  | x180..900 y358..394
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, GREEN, RED, CREAM, MUTED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch02Sec49({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={14} fill={RED} script>
          {t("quantum numbers and counting relations", "quantum numbers aur counting relations")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={74} size={11} fill={RED} script>
          {t(
            "compact reference — quantum numbers + counting relations",
            "compact reference — quantum numbers + counting relations"
          )}
        </T>
      </Fade>

      {/* beat 1 — formula: the four quantum numbers */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={180} y={96} w={720} h={34} fill={CREAM} stroke={MUTED} textFill={INK} size={12} script={false}>
          {"n=1,2,3,..;  l=0..(n−1) (s,p,d,f);  ml=−l..+l;  ms=±½"}
        </Chip>
      </Fade>

      {/* beat 2 — formula (high, GREEN): angular momentum */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={330} y={146} w={420} h={34} fill={GREEN} textFill="#fff" size={15} script={false}>
          {"L = √(l(l+1)) · h/2π"}
        </Chip>
      </Fade>

      {/* beat 3 — formula (high, GREEN): orbital counts */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={310} y={196} w={460} h={34} fill={GREEN} textFill="#fff" size={14} script={false}>
          {"orbitals: subshell = 2l+1,  shell = n²"}
        </Chip>
      </Fade>

      {/* beat 4 — formula (high, GREEN): electron capacities */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={310} y={246} w={460} h={34} fill={GREEN} textFill="#fff" size={14} script={false}>
          {"max e⁻: subshell = 4l+2,  shell = 2n²"}
        </Chip>
      </Fade>

      {/* beat 5 — explain: s-electron has zero L */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={306} size={12} fill={INK} script>
          {t(
            "an s-electron (l=0) has zero orbital angular momentum",
            "s-electron (l=0) ka orbital angular momentum bilkul zero hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — explain: the familiar capacities */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={332} size={12} fill={INK} script>
          {"capacities follow: s = 2, p = 6, d = 10, f = 14"}
        </T>
      </Fade>

      {/* beat 7 — guardrail (high, RED): the backbone */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={180} y={358} w={720} h={36} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t(
            "these counting relations are the backbone of every configuration question",
            "ye counting relations har configuration question ki backbone hain"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
