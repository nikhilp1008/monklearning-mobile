/**
 * C11 Ch02 · Section 50 — "Nodes, the (n+l) rule, and the three principles"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: formulas` — reference card 2.
 *
 * Beats (en [0, 8.53, 16.64, 28.07, 52.39, 66.9, 77.31, 88.15]):
 *  0 anchor: second reference card — nodes, energy order, three principles
 *  1 formula (high, GREEN): radial=n−l−1, angular=l, total=n−1
 *  2 guardrail (high, RED): (n+l) rule — lower fills first, ties → lower n
 *  3 formula: Aufbau order 1s 2s 2p 3s 3p 4s 3d 4p 5s ...
 *  4 explain: the three principles in one breath
 *  5 guardrail: one-electron species — energy depends on n alone
 *  6 explain: the two anomalies, Cr and Cu
 *  7 guardrail (high, RED): ions — remove highest-n electrons first
 *
 * Layout plan (single column, x540 center):
 *  title (always)          | T mid | x540 y52 script red
 *  b0 | anchor caption      | T mid | x540 y74            [dims@b1]
 *  b1 | formula chip (GRN)  | Chip  | x350..730 y96..130
 *  b2 | guardrail caption   | T mid | x540 y158
 *  b3 | formula chip        | Chip  | x170..910 y184..216
 *  b4 | explain caption     | T mid | x540 y244
 *  b5 | guardrail caption   | T mid | x540 y270
 *  b6 | explain caption     | T mid | x540 y296
 *  b7 | guardrail (RED)     | Chip  | x220..860 y322..358
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, GREEN, RED, CREAM, MUTED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch02Sec50({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={13} fill={RED} script>
          {t(
            "nodes, the (n+l) rule, and the three principles",
            "nodes, (n+l) rule, aur teen principles"
          )}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={74} size={11} fill={RED} script>
          {t(
            "second reference card — nodes, energy order, three principles",
            "doosra reference card — nodes, energy order, teen principles"
          )}
        </T>
      </Fade>

      {/* beat 1 — formula (high, GREEN): the node counts */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={350} y={96} w={380} h={34} fill={GREEN} textFill="#fff" size={14} script={false}>
          {"radial = n−l−1,  angular = l,  total = n−1"}
        </Chip>
      </Fade>

      {/* beat 2 — guardrail (high, RED): the (n+l) rule */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={158} size={12} fill={RED} script>
          {t(
            "(n+l) rule: lower (n+l) fills first — ties broken by lower n",
            "(n+l) rule: kam (n+l) pehle bharta — ties kam n se toड़te hain"
          )}
        </T>
      </Fade>

      {/* beat 3 — formula: the Aufbau order */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={170} y={184} w={740} h={32} fill={CREAM} stroke={MUTED} textFill={INK} size={13} script={false}>
          {"Aufbau order: 1s 2s 2p 3s 3p 4s 3d 4p 5s 4d 5p 6s ..."}
        </Chip>
      </Fade>

      {/* beat 4 — explain: the three principles */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={244} size={12} fill={INK} script>
          {t(
            "Aufbau: lowest energy first. Pauli: no shared full address. Hund: singly fill first",
            "Aufbau: lowest energy pehle. Pauli: full address share nahi. Hund: pehle singly bharo"
          )}
        </T>
      </Fade>

      {/* beat 5 — guardrail: the one-electron regime */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={270} size={12} fill={RED} script>
          {t(
            "one-electron species: energy depends on n alone (2s, 2p degenerate)",
            "one-electron species: energy sirf n par depend — 2s, 2p degenerate"
          )}
        </T>
      </Fade>

      {/* beat 6 — explain: the two anomalies */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={296} size={12} fill={INK} script>
          {"anomalies: Cr = [Ar]3d⁵ 4s¹,  Cu = [Ar]3d¹⁰ 4s¹"}
        </T>
      </Fade>

      {/* beat 7 — guardrail (high, RED): ions strip highest n first */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={220} y={322} w={640} h={36} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t(
            "ions: remove the highest-n electrons first (4s before 3d)",
            "ions: highest-n electrons pehle hataao (4s, 3d se pehle)"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
