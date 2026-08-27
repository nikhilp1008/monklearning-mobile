/**
 * M11 Ch14 · Section 17 — "Kolmogorov's fix: the axiomatic approach"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: concept.
 *
 * Beats (board_reveal_at_english [0,8.45,17.15,26.2,37.12,47.27,59.9,69.21]):
 *  0 heading
 *  1 don't define WHAT probability IS — list the RULES it must obey
 *  2 anything obeying those rules = a legitimate probability
 *  3 same move as Euclid — states axioms, then reasons
 *  4 picture: 1 kg of sand spread across the outcomes
 *  5 each outcome: NON-NEGATIVE sand (maybe 0); total = 1 kg
 *  6 (green, ringed) P(event) = sand sitting on outcomes inside it
 *  [group A erased at beat>=7]
 *  7 diagram: fair die (6 equal sand blobs, 1/6 each) vs loaded die
 *    (6 unequal blobs, 1/12,1/12,1/6,1/6,1/4,1/4 — sums to 1)
 *
 * Layout plan (Group A compact centered, erased beat>=7; Group B fresh
 * full-canvas two-row sand diagram; longer language counts):
 *  b1 | sentence (16, ink)                          | T mid | x150..930 y127..143
 *  b2 | sentence (16, ink)                            | T mid | x210..870 y157..173
 *  b3 | caption (14, red script)                        | T mid | x290..790 y188..202
 *  b4 | sentence (17, ink)                                | T mid | x290..790 y240..256
 *  b5 | sentence (16, ink)                                  | T mid | x220..860 y270..286
 *  b6 | ringed sentence (19, green)                          | T mid | x290..790 y306..325
 *  [group A erased beat>=7]
 *  b7 | fair-die row: 6 blobs r=20, labels "1/6"              | Fade  | x170..910 y160..225
 *  b7 | loaded-die row: 6 blobs r=12..32, fraction labels       | Fade  | x170..910 y333..422
 *  b7 | closing caption (14, ink)                                | T mid | x300..780 y470..484
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, ringD, INK, MUTED, GREEN, RED, AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';
import { lineD } from "./math-kit";

const SLOT_X = [170, 318, 466, 614, 762, 910];
const LOADED_WEIGHTS = [1 / 12, 1 / 12, 1 / 6, 1 / 6, 1 / 4, 1 / 4];
const LOADED_LABELS = ["1/12", "1/12", "1/6", "1/6", "1/4", "1/4"];

export default function M11Ch14Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const aOn = beat >= 0 && beat < 7;

  const minW = 1 / 12;
  const maxW = 1 / 4;
  const loadedR = LOADED_WEIGHTS.map((w) => 12 + 20 * ((w - minW) / (maxW - minW)));

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("weigh the sand — that's the probability", "sand tolo — wahi probability hai")}
        </T>
      </Fade>

      {/* ===================== Group A — beats 0-6 ===================== */}

      <Fade on={aOn && beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={19} fill={INK} weight={700}>
          {t("Kolmogorov's fix: the axiomatic approach", "Kolmogorov ka fix: axiomatic approach")}
        </T>
      </Fade>

      <Fade on={aOn && beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={135} size={16} fill={INK} weight={600}>
          {t("don't define WHAT probability IS — list the RULES it must obey", "probability KYA hai woh mat define karo — RULES batao")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={165} size={16} fill={INK} weight={600}>
          {t("anything obeying those rules = a legitimate probability", "jo bhi in rules ko obey kare = legitimate probability")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={196} size={14} fill={RED} script weight={700}>
          {t("same move as Euclid — states axioms, then reasons", "Euclid jaisa move — axioms batao, phir reason karo")}
        </T>
      </Fade>

      <Fade on={aOn && beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={248} size={17} fill={INK} weight={700}>
          {t("picture 1 kg of sand spread across the outcomes", "1 kg sand socho, outcomes ke upar spread")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={278} size={16} fill={INK} weight={700}>
          {t("each outcome: NON-NEGATIVE sand (maybe 0); total = 1 kg", "har outcome: NON-NEGATIVE sand (shayad 0); total = 1 kg")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={318} size={19} fill={GREEN} weight={800}>
          {t("P(event) = sand sitting on outcomes inside it", "P(event) = uske outcomes ke upar ka sand")}
        </T>
      </Fade>
      <Draw on={aOn && beat >= 6} delay={dl(6, 1.0)} d={ringD(540, 308, 300, 26)} stroke={AMBER_DARK} sw={2.2} dur={0.7} />

      {/* ===================== Group B — beat 7, never erased ===================== */}

      <Fade on={beat >= 7} delay={dl(7, 0.1)}>
        <T x={540} y={140} size={15} fill={MUTED} weight={700}>
          {t("Fair die: sand spread evenly", "Fair die: sand evenly spread")}
        </T>
      </Fade>
      {SLOT_X.map((x, i) => (
        <Fade key={`fair${i}`} on={beat >= 7} delay={dl(7, 0.4 + i * 0.2)}>
          <Circle cx={x} cy={182} r={20} fill={AMBER_DARK} opacity={0.5} />
          <T x={x} y={225} size={14} fill={INK} weight={700}>
            1/6
          </T>
        </Fade>
      ))}

      <Draw on={beat >= 7} delay={dl(7, 1.8)} d={lineD(120, 270, 960, 270)} stroke={MUTED} sw={1.2} dur={0.5} />

      <Fade on={beat >= 7} delay={dl(7, 2.1)}>
        <T x={540} y={300} size={15} fill={MUTED} weight={700}>
          {t("Loaded die: piled on some faces", "Loaded die: kuch faces par zyada")}
        </T>
      </Fade>
      {SLOT_X.map((x, i) => (
        <Fade key={`load${i}`} on={beat >= 7} delay={dl(7, 2.4 + i * 0.25)}>
          <Circle cx={x} cy={365} r={loadedR[i]} fill={AMBER_DARK} opacity={0.5} />
          <T x={x} y={422} size={14} fill={INK} weight={700}>
            {LOADED_LABELS[i]}
          </T>
        </Fade>
      ))}

      <Fade on={beat >= 7} delay={dl(7, 4.2)}>
        <T x={540} y={472} size={14} fill={GREEN} weight={700}>
          {t("both valid — no negative sand, total = 1 kg", "dono valid — negative sand nahi, total = 1 kg")}
        </T>
      </Fade>
    </Scene>
  );
}
