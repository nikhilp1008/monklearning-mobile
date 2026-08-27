/**
 * C11 Ch02 · Section 42 — "From orbit to orbital: Schrödinger's probability cloud"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: concept` — opens subtopic 4
 * (Quantum Model, Orbitals & Electron Configurations).
 *
 * Beats (en [0, 13.23, 28.93, 44.12, 53.42, 66.39, 76.12, 87.98]):
 *  0 anchor: Bohr in ruins — de Broglie's wave + Heisenberg's uncertainty
 *  1 explain: a sharp orbit needs a definite path — now fiction, orbit had to go
 *  2 represent: Schrödinger (1926) wave equation → solve → ψ
 *  3 land (high, RED — the source's red-margin note): ψ² = probability
 *  4 explain: fuzzy 3-D cloud replaces the thin orbit — an ORBITAL (GREEN)
 *  5 represent: the probability cloud diagram, densest near the nucleus
 *  6 explain: the spinning-fan-blade analogy
 *  7 guardrail (high): a region of likely presence, NEVER a path
 *
 * Layout plan (single column, x540 center):
 *  title (always)          | T mid | x540 y52 script red
 *  b0 | anchor caption      | T mid | x540 y74            [dims@b1]
 *  b1 | explain caption     | T mid | x540 y98
 *  b2 | Schrödinger chip    | Chip  | x230..850 y126..156
 *  b3 | ψ² chip (RED, high) | Chip  | x260..820 y172..204
 *  b4 | orbital land (GRN)  | T mid | x540 y228
 *  b5 | cloud rings+nucleus | circ  | cx540 cy370 r28..85
 *  b5 | cloud caption       | T mid | x540 y478
 *  b6 | fan-blade caption   | T mid | x540 y504
 *  b7 | guardrail chip      | Chip  | x150..930 y522..558
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, GREEN, RED, CREAM, AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';

const RINGS = [
  { r: 85, op: 0.1 },
  { r: 66, op: 0.16 },
  { r: 47, op: 0.22 },
  { r: 28, op: 0.3 },
];

export default function C11Ch02Sec42({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={13} fill={RED} script>
          {t("from orbit to orbital: Schrödinger's probability cloud", "orbit se orbital: Schrödinger ka probability cloud")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={74} size={11} fill={RED} script>
          {t(
            "Bohr in ruins — de Broglie's wave + Heisenberg's uncertainty",
            "Bohr khatam — de Broglie ki wave + Heisenberg ka uncertainty"
          )}
        </T>
      </Fade>

      {/* beat 1 — explain: the orbit had to go */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={98} size={12} fill={RED} script>
          {t(
            "a sharp orbit needs a definite path — that's now fiction, so the orbit had to go",
            "sharp orbit ko definite path chahiye — ab fiction hai, orbit ko jaana pada"
          )}
        </T>
      </Fade>

      {/* beat 2 — represent: Schrödinger's wave equation */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={230} y={126} w={620} h={30} fill={CREAM} stroke={INK} textFill={INK} size={12} script={false}>
          {t(
            "Schrödinger (1926): wave equation for the electron → solve it → get ψ",
            "Schrödinger (1926): electron ke liye wave equation → solve karo → ψ milta hai"
          )}
        </Chip>
      </Fade>

      {/* beat 3 — land (high): ψ² = probability */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={260} y={172} w={560} h={32} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "ψ² = probability of finding the electron at each point",
            "ψ² = har point par electron milne ki probability"
          )}
        </Chip>
      </Fade>

      {/* beat 4 — explain: land the term ORBITAL */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={228} size={13} fill={GREEN} script>
          {t(
            "a fuzzy 3-D cloud of probability replaces the thin orbit — an ORBITAL",
            "patli orbit ki jagah fuzzy 3-D probability cloud — ek ORBITAL"
          )}
        </T>
      </Fade>

      {/* beat 5 — represent: the probability cloud diagram */}
      {RINGS.map((ring, i) => (
        <Fade key={ring.r} on={beat >= 5} delay={dl(5, 0.4 + i * 0.22)}>
          <Circle cx={540} cy={370} r={ring.r} fill={AMBER_DARK} fillOpacity={ring.op} />
        </Fade>
      ))}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Circle cx={540} cy={370} r={5} fill={RED} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={558} y={374} size={11} fill={RED} anchor="start">
          {t("nucleus", "nucleus")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={540} y={478} size={11} fill={INK} script>
          {t(
            "denser cloud = higher probability of finding the electron",
            "denser cloud = electron milne ki zyaada probability"
          )}
        </T>
      </Fade>

      {/* beat 6 — explain: the spinning-fan-blade analogy */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={504} size={12} fill={INK} script>
          {t(
            "a spinning fan blade — you can't point to it, only name the region it occupies",
            "ek spinning fan blade — aap point nahi kar sakte, sirf uska region bata sakte"
          )}
        </T>
      </Fade>

      {/* beat 7 — guardrail (high): region, never a path */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={150} y={522} w={780} h={36} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t(
            "an orbital is a region of likely presence, NEVER a path the electron travels",
            "orbital likely presence ka region hai, electron ka path KABHI NAHI"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
