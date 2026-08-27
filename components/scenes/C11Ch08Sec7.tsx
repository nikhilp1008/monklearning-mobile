/**
 * C11 Ch08 · Section 7 — "Worked example — classify three rings (NEET)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 7.94, 15.62, 27.39, 40.36, 52.48, 68.1, 80.13]):
 *  0 title (always-on, seq1) · 1 name the three rings · 2 pyridine (hetero+aromatic)
 *  · 3 cyclohexane (carbocyclic, alicyclic) · 4 naphthalene (carbocyclic, aromatic) ·
 *  5 red note trap (pyridine ≠ aromatic carbocyclic) · 6 tree-order reminder · 7 closer
 *
 * Three columns, centers x=200/480/808 (naphthalene wider — two fused hexagons).
 * Layout plan:
 *  b1 | 3 name labels (16, ink, w700)  | T mid | y115
 *  b2 | pyridine hexagon+circle+N      | Draw  | c(200,195) r55
 *  b2 | pyridine verdict (green/muted) | T mid | x200 y275/295
 *  b3 | cyclohexane hexagon (plain)    | Draw  | c(480,195) r55
 *  b3 | cyclohexane verdict            | T mid | x480 y275
 *  b4 | naphthalene 2 hexagons+circles | Draw  | c(760,195)/c(855,195) r55
 *  b4 | naphthalene verdict            | T mid | x808 y275/295
 *  b5 | margin bar + red note          | Draw+T| x60 y340..370 · x76 y360
 *  b6 | tree reminder (14, amber)      | T mid | x540 y400
 *  b7 | closer (18, green, w800)       | T mid | x540 y440
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { ringD as hexRingD } from "./chem-kit";

export default function C11Ch08Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={25} fill={RED} script>
          {t("Worked example — classify three rings (NEET)", "Worked example — teen rings classify karo (NEET)")}
        </T>
      </Fade>

      {/* beat 1 — name the three */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={200} y={115} size={16} fill={INK} weight={700}>
          {t("pyridine", "pyridine")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={480} y={115} size={16} fill={INK} weight={700}>
          {t("cyclohexane", "cyclohexane")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={808} y={115} size={16} fill={INK} weight={700}>
          {t("naphthalene", "naphthalene")}
        </T>
      </Fade>

      {/* beat 2 — pyridine: heterocyclic + aromatic */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d={hexRingD(200, 195, 55)} stroke={INK} sw={2.4} dur={0.9} />
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <Circle cx={200} cy={195} r={30} fill="none" stroke={INK} strokeWidth={1.6} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={200} y={144} size={16} fill={INK} weight={800}>
          N
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <T x={200} y={278} size={16} fill={GREEN} weight={700}>
          {t("HETEROCYCLIC", "HETEROCYCLIC")}
        </T>
        <T x={200} y={297} size={13} fill={MUTED}>
          {t("(aromatic too)", "(aromatic bhi)")}
        </T>
      </Fade>

      {/* beat 3 — cyclohexane: carbocyclic, alicyclic */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d={hexRingD(480, 195, 55)} stroke={INK} sw={2.4} dur={0.9} />
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={480} y={278} size={16} fill={GREEN} weight={700}>
          {t("CARBOCYCLIC", "CARBOCYCLIC")}
        </T>
        <T x={480} y={297} size={13} fill={MUTED}>
          {t("alicyclic (no C=C system)", "alicyclic (no C=C)")}
        </T>
      </Fade>

      {/* beat 4 — naphthalene: fused benzene rings, carbocyclic aromatic */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d={hexRingD(760, 195, 55)} stroke={INK} sw={2.2} dur={0.8} />
      <Draw on={beat >= 4} delay={dl(4, 1)} d={hexRingD(855, 195, 55)} stroke={INK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 1.9)}>
        <Circle cx={760} cy={195} r={28} fill="none" stroke={INK} strokeWidth={1.5} />
        <Circle cx={855} cy={195} r={28} fill="none" stroke={INK} strokeWidth={1.5} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.7)}>
        <T x={808} y={278} size={16} fill={GREEN} weight={700}>
          {t("CARBOCYCLIC, AROMATIC", "CARBOCYCLIC, AROMATIC")}
        </T>
        <T x={808} y={297} size={13} fill={MUTED}>
          {t("(benzenoid)", "(benzenoid)")}
        </T>
      </Fade>

      {/* beat 5 — the trap */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 60 340 L 60 370" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={76} y={360} size={15} fill={RED} script anchor="start">
          {t(
            "trap: 'aromatic carbocyclic' — the ring N makes it heterocyclic, that wins",
            "trap: 'aromatic carbocyclic' — ring ka N heterocyclic banata hai, wahi jeetta"
          )}
        </T>
      </Fade>

      {/* beat 6 — follow the tree, in order */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={400} size={14} fill={AMBER_DARK} weight={700}>
          {t(
            "ring? → carbon-only or heteroatom? → then aromatic vs alicyclic",
            "ring? → carbon-only ya heteroatom? → phir aromatic vs alicyclic"
          )}
        </T>
      </Fade>

      {/* beat 7 — closer */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={440} size={18} fill={GREEN} weight={800}>
          {t(
            "one nitrogen reroutes the whole classification",
            "ek nitrogen puri classification badal deta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
