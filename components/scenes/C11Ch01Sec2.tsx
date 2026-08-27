/**
 * C11 Ch01 · Section 2 — "Pure substances versus mixtures"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,10.24,23.38,42.5,61.78,83.8,101.38,120.5,142,162.57]):
 *  0 anchor question (dims at beat 1)
 *  1 represent: root "matter" + branch to "pure substance" + its definition
 *  2 pure substance splits: "element" / "compound" nodes + examples
 *  3 explain: law of definite proportions callout beside "compound"
 *  4 represent: "matter" branches to "mixture" → "homogeneous"/"heterogeneous"
 *  5 annotate: homogeneous "= solution" + solute/solvent
 *  6 land: solutions aren't just liquid (gas/solid solution note)
 *  7 land: enclose the whole tree, "learn this shape"
 *  8 explain via analogy: thali — dal (homogeneous) vs chana+puri (heterogeneous)
 *  9 guardrail: salt is a compound, not a mixture — only a reaction splits it
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | question (script18 ink)      | T mid | x540  y118  [dims@b1]
 *  b1 | "matter" chip (18,INK bg)    | Chip  | x485..595 y140..172
 *  b1 | line matter→pure substance   | Draw  | (540,172)→(280,195)
 *  b1 | "pure substance" chip        | Chip  | x185..375 y195..227
 *  b1 | def caption (12 muted)       | T mid | x280  y250
 *  b2 | lines pure sub→elem/compound | Draw  | (280,227)→(150,250)/(410,250)
 *  b2 | "element"/"compound" chips   | Chip  | x95..205/355..465 y250..280
 *  b2 | examples (11 muted)          | T mid | x150/410  y296
 *  b3 | law callout (12 red)         | T mid | x410  y322
 *  b4 | line matter→mixture          | Draw  | (540,172)→(800,195)
 *  b4 | "mixture" chip               | Chip  | x730..870 y195..227
 *  b4 | lines mixture→homo/hetero    | Draw  | (800,227)→(670,250)/(930,250)
 *  b4 | "homogeneous"/"heterogeneous"| Chip  | x595..745/845..1015 y250..280
 *  b4 | examples (11 muted)          | T mid | x670/930  y296
 *  b5 | "= solution" (12 green)      | T mid | x670  y322
 *  b5 | solute/solvent (11 muted)    | T mid | x670  y344
 *  b6 | state note (11 muted)        | T mid | x670  y366
 *  b7 | frame (dashed, muted)        | Draw  | x60..1020 y82..384
 *  b7 | frame label (13 amber-dark)  | T mid | x850  y400
 *  b8 | plate ×2 (r40)               | Draw  | c(300,450) / c(730,450)
 *  b8 | plate labels (13)            | T mid | x300/730  y512
 *  b9 | guardrail (script17 red)     | T mid | x540  y548
 *  b9 | underline (red)              | Draw  | x300..780 y562
 */

import React from "react";
import { Circle, Ellipse } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={62} size={27} fill={RED} script>
          {t("pure substances vs mixtures", "pure substances vs mixtures")}
        </T>
      </Fade>

      {/* beat 0 — anchor question, dims once the tree starts */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.4)}>
        <T x={540} y={118} size={18} fill={INK} script>
          {t("one kind of stuff — or several, mixed?", "ek hi cheez — ya kayi, mixed?")}
        </T>
      </Fade>

      {/* beat 1 — root + pure substance */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={485} y={140} w={110} h={32} fill={INK} textFill="#fff" size={17} script={false}>
          matter
        </Chip>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1)} d="M 540 172 L 300 193" stroke={MUTED} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <Chip x={185} y={195} w={190} h={32} fill={CREAM} stroke={AMBER} textFill={INK} size={16} script={false}>
          pure substance
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={280} y={250} size={12} fill={MUTED} script>
          {t("fixed composition · no physical split", "fixed composition · physical se alag nahi")}
        </T>
      </Fade>

      {/* beat 2 — element / compound */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M 280 227 L 150 248" stroke={MUTED} sw={1.8} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 0.7)} d="M 280 227 L 410 248" stroke={MUTED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <Chip x={95} y={250} w={110} h={30} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          element
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <Chip x={355} y={250} w={110} h={30} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          compound
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <T x={150} y={296} size={11} fill={MUTED} script>
          gold · oxygen · iron
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.7)}>
        <T x={410} y={296} size={11} fill={MUTED} script>
          {t("water · salt · CO₂", "paani · namak · CO₂")}
        </T>
      </Fade>

      {/* beat 3 — law of definite proportions */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={410} y={322} size={12} fill={RED} script>
          {t(
            "fixed ratio by mass = law of definite proportions",
            "fixed ratio by mass = law of definite proportions"
          )}
        </T>
      </Fade>

      {/* beat 4 — mixture → homogeneous / heterogeneous */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d="M 540 172 L 780 193" stroke={MUTED} sw={2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <Chip x={730} y={195} w={140} h={32} fill={CREAM} stroke={AMBER} textFill={INK} size={16} script={false}>
          mixture
        </Chip>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.8)} d="M 800 227 L 670 248" stroke={MUTED} sw={1.8} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 2.2)} d="M 800 227 L 930 248" stroke={MUTED} sw={1.8} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 2.6)}>
        <Chip x={595} y={250} w={150} h={30} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          homogeneous
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.1)}>
        <Chip x={845} y={250} w={170} h={30} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          heterogeneous
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.8)}>
        <T x={670} y={296} size={11} fill={MUTED} script>
          {t("salt water · air · brass", "namak-paani · hawa · brass")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.2)}>
        <T x={930} y={296} size={11} fill={MUTED} script>
          {t("sand + iron filings · oil + water", "ret + iron filings · tel + paani")}
        </T>
      </Fade>

      {/* beat 5 — homogeneous = solution, solute/solvent */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={670} y={322} size={12} fill={GREEN} script>
          = {t("solution", "solution")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={670} y={344} size={11} fill={MUTED} script>
          {t("solute dissolves · solvent = majority", "solute ghulta · solvent = majority")}
        </T>
      </Fade>

      {/* beat 6 — solutions aren't just liquid */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={670} y={366} size={11} fill={MUTED} script>
          {t(
            "not just liquid — air = gas, brass = solid (alloy)",
            "sirf liquid nahi — air = gas, brass = solid (alloy)"
          )}
        </T>
      </Fade>

      {/* beat 7 — the whole tree, one shape */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.3)}
        d="M 76 82 h 928 q 16 0 16 16 v 270 q 0 16 -16 16 h -928 q -16 0 -16 -16 v -270 q 0 -16 16 -16"
        stroke={MUTED}
        sw={1.6}
        dur={1.1}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={850} y={400} size={13} fill={AMBER_DARK} script>
          {t("the classification tree — learn this shape", "classification tree — yeh shape yaad rakho")}
        </T>
      </Fade>

      {/* beat 8 — thali analogy: dal vs chana+puri */}
      <Draw on={beat >= 8} delay={dl(8, 0.3)} d="M 260 450 A 40 40 0 1 1 340 450 A 40 40 0 1 1 260 450" stroke={INK} sw={2.2} dur={0.7} />
      {[
        [285, 435], [312, 428], [300, 458], [320, 452], [290, 468],
      ].map(([x, y], i) => (
        <Fade key={`dal${i}`} on={beat >= 8} delay={dl(8, 1.1 + i * 0.15)}>
          <Circle cx={x} cy={y} r={3.2} fill={AMBER_DARK} />
        </Fade>
      ))}
      <Fade on={beat >= 8} delay={dl(8, 2)}>
        <T x={300} y={512} size={13} fill={INK} script>
          {t("dal → homogeneous", "dal → homogeneous")}
        </T>
      </Fade>

      <Draw on={beat >= 8} delay={dl(8, 2.6)} d="M 690 450 A 40 40 0 1 1 770 450 A 40 40 0 1 1 690 450 M 730 410 L 730 490" stroke={INK} sw={2.2} dur={0.8} />
      {[[708, 432], [712, 462], [706, 450]].map(([x, y], i) => (
        <Fade key={`chana${i}`} on={beat >= 8} delay={dl(8, 3.4 + i * 0.15)}>
          <Circle cx={x} cy={y} r={3.4} fill={AMBER_DARK} />
        </Fade>
      ))}
      {[[748, 435], [752, 465]].map(([x, y], i) => (
        <Fade key={`puri${i}`} on={beat >= 8} delay={dl(8, 3.8 + i * 0.15)}>
          <Ellipse cx={x} cy={y} rx={7} ry={4} fill="none" stroke={INK} strokeWidth={1.4} />
        </Fade>
      ))}
      <Fade on={beat >= 8} delay={dl(8, 4.5)}>
        <T x={730} y={512} size={13} fill={INK} script>
          {t("chana + puri → heterogeneous", "chana + puri → heterogeneous")}
        </T>
      </Fade>

      {/* beat 9 — guardrail: salt is a compound, not a mixture */}
      <Fade on={beat >= 9} delay={dl(9, 0.5)}>
        <T x={540} y={548} size={17} fill={RED} script>
          {t(
            "salt = compound, not mixture — only a reaction splits it",
            "namak = compound, mixture nahi — sirf reaction todta hai"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 9}
        delay={dl(9, 2)}
        d="M 300 562 C 400 558, 680 558, 780 562"
        stroke={RED}
        sw={2.2}
        dur={0.6}
      />
    </Scene>
  );
}
