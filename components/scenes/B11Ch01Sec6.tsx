/**
 * B11 Ch01 · Section 6 — "Key terms and precise definitions"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.96, 27.97, 35.72, 49.31, 64.64, 79.73, 97.27]):
 *  0 title + drawn underline · "swap ONE word = wrong answer" subtitle
 *  1 term LIVING (checklist chip 1 lands) [dim@2]
 *  2 term GROWTH (chip 2) [dim@3]
 *  3 term REPRODUCTION (chip 3) [dim@4]
 *  4 transition: the term that always passes, split in two [dim@5]
 *  5 DIAGRAM: METABOLISM = Anabolism + Catabolism, metabolites caption
 *    (chip 4 lands) [dim@6]
 *  6 terms CONSCIOUSNESS + STIMULUS (chips 5,6 land) [dim@7]
 *  7 term EMERGENT PROPERTIES (chip 7 lands) — stays to the end
 *
 * A running "terms covered" checklist accumulates across the top while the
 * big card below shows only the current term (superseded terms dim out).
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script24 red)        | T mid  | x?..?  y30..75  (bl64, longer=HI)
 *  b0 | underline swoosh            | Draw   | y88  x340..740
 *  b0 | subtitle (script15 muted)   | T mid  | x?..?  y98..129 (bl112)
 *  b1-7 | checklist chips (12 anek) | Chip   | y140..164  x240/310/380/485/580/690/770
 *  bN | term header (22 ink w800)   | T mid  | x?..?  y211..235 (bl228)
 *  bN | underline under header      | Draw   | y240  varies
 *  bN | definition (14 anek ink)    | T mid  | x?..?  y245..264 (bl260)
 *  b5 | Anabolism box (green)       | Draw   | x220..460  y230..350
 *  b5 | Catabolism box (red)        | Draw   | x620..860  y230..350
 *  b5 | "+" (30 muted)              | T mid  | x?..?  y290..302 (bl300)
 *  b5 | caption (13 anek ink)       | T mid  | x?..?  y374..382 (bl378)
 *  b6 | CONSCIOUSNESS header+def    | T mid  | y217..256 (bl228/252)
 *  b6 | STIMULUS header+def         | T mid  | y279..314 (bl296/320)
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
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const TERMS = ["LIVING", "GROWTH", "REPRODUCTION", "METABOLISM", "CONSCIOUSNESS", "STIMULUS", "EMERGENT"];
const TERM_X: [number, number][] = [
  [218, 65],
  [293, 65],
  [368, 100],
  [478, 90],
  [578, 108],
  [696, 78],
  [784, 78],
];

export default function B11Ch01Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // which checklist chips are visible at the current beat (b1→chip0, b2→chip1,
  // b3→chip2, b5→chip3, b6→chips4&5, b7→chip6)
  const chipBeat = [1, 2, 3, 5, 6, 6, 7];

  return (
    <Scene>
      {/* beat 0 — title + subtitle */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("the vocabulary examiners weaponise", "examiners jo vocabulary weaponise karte hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2)} d="M 340 88 C 440 84, 640 84, 740 88" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 0} delay={dl(0, 2.8)}>
        <T x={540} y={112} size={15} fill={MUTED} script>
          {t("swap ONE word = wrong answer", "ek word badla = jawab galat")}
        </T>
      </Fade>

      {/* running checklist of terms covered */}
      {TERMS.map((term, i) => (
        <Fade key={term} on={beat >= chipBeat[i]} delay={dl(chipBeat[i], i === 5 ? 5.5 : 4)}>
          <Chip
            x={TERM_X[i][0]}
            y={140}
            w={TERM_X[i][1]}
            h={24}
            fill={CREAM}
            stroke={AMBER_DARK}
            textFill={INK}
            size={12}
            script={false}
          >
            {term}
          </Chip>
        </Fade>
      ))}

      {/* beat 1 — LIVING */}
      <Fade on={beat === 1} delay={dl(1, 0.2)}>
        <T x={540} y={228} size={22} fill={INK} weight={800}>
          {t("LIVING", "LIVING")}
        </T>
      </Fade>
      <Fade on={beat === 1} delay={dl(1, 0.9)}>
        <Draw on={true} d="M 380 240 L 700 240" stroke={INK} sw={1.6} dur={0.5} />
      </Fade>
      <Fade on={beat === 1} delay={dl(1, 1.5)}>
        <T x={540} y={260} size={14} fill={INK} script={false}>
          {t(
            "self-replicating, evolving, self-regulating, interactive — responds to stimuli",
            "self-replicating, evolving, self-regulating, interactive — stimuli par respond karta hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — GROWTH */}
      <Fade on={beat === 2} delay={dl(2, 0.2)}>
        <T x={540} y={228} size={22} fill={INK} weight={800}>
          {t("GROWTH", "GROWTH")}
        </T>
      </Fade>
      <Fade on={beat === 2} delay={dl(2, 0.9)}>
        <Draw on={true} d="M 460 240 L 620 240" stroke={INK} sw={1.6} dur={0.5} />
      </Fade>
      <Fade on={beat === 2} delay={dl(2, 1.5)}>
        <T x={540} y={260} size={14} fill={INK} script={false}>
          {t(
            "↑ mass + number; intrinsic in life — accretion is extrinsic, non-living",
            "↑ mass + number; life mein intrinsic hai — accretion extrinsic hai, non-living"
          )}
        </T>
      </Fade>

      {/* beat 3 — REPRODUCTION */}
      <Fade on={beat === 3} delay={dl(3, 0.2)}>
        <T x={540} y={228} size={22} fill={INK} weight={800}>
          {t("REPRODUCTION", "REPRODUCTION")}
        </T>
      </Fade>
      <Fade on={beat === 3} delay={dl(3, 0.9)}>
        <Draw on={true} d="M 430 240 L 650 240" stroke={INK} sw={1.6} dur={0.5} />
      </Fade>
      <Fade on={beat === 3} delay={dl(3, 1.5)}>
        <T x={540} y={260} size={14} fill={INK} script={false}>
          {t(
            "progeny ≈ parents — asexual (budding, spores) or sexual",
            "progeny ≈ parents jaisi — asexual (budding, spores) ya sexual"
          )}
        </T>
      </Fade>

      {/* beat 4 — transition into metabolism's two halves */}
      <Fade on={beat === 4} delay={dl(4, 0.3)}>
        <T x={540} y={260} size={17} fill={GREEN} script>
          {t(
            "now the term that always passes — split into two halves…",
            "ab wo term jo hamesha pass karti hai — do halves mein…"
          )}
        </T>
      </Fade>
      <Fade on={beat === 4} delay={dl(4, 1.6)}>
        <Draw on={true} d={arrowD(540, 276, 540, 296)} stroke={GREEN} sw={2} dur={0.4} />
      </Fade>

      {/* beat 5 — DIAGRAM: metabolism = anabolism + catabolism [dim@6] */}
      <Fade on={beat === 5} delay={dl(5, 0.2)}>
        <Draw on={true} d="M 220 230 h 240 v 120 h -240 z" stroke={GREEN} sw={2.2} dur={0.8} />
      </Fade>
      <Fade on={beat === 5} delay={dl(5, 1.2)}>
        <T x={340} y={264} size={15} fill={GREEN} weight={700}>
          Anabolism
        </T>
      </Fade>
      <Fade on={beat === 5} delay={dl(5, 1.7)}>
        <T x={340} y={290} size={12} fill={GREEN} script={false}>
          {t("building UP molecules", "building UP molecules")}
        </T>
      </Fade>
      <Fade on={beat === 5} delay={dl(5, 2.2)}>
        <T x={540} y={300} size={28} fill={MUTED} weight={700}>
          +
        </T>
      </Fade>
      <Fade on={beat === 5} delay={dl(5, 2.8)}>
        <Draw on={true} d="M 620 230 h 240 v 120 h -240 z" stroke={RED} sw={2.2} dur={0.8} />
      </Fade>
      <Fade on={beat === 5} delay={dl(5, 3.8)}>
        <T x={740} y={264} size={15} fill={RED} weight={700}>
          Catabolism
        </T>
      </Fade>
      <Fade on={beat === 5} delay={dl(5, 4.3)}>
        <T x={740} y={290} size={12} fill={RED} script={false}>
          {t("breaking DOWN molecules", "breaking DOWN molecules")}
        </T>
      </Fade>
      <Fade on={beat === 5} delay={dl(5, 5.2)}>
        <T x={540} y={378} size={13} fill={INK} script={false}>
          {t(
            "metabolites = the chemicals involved · universal to all life",
            "metabolites = jo chemicals involved hain · sari life mein universal"
          )}
        </T>
      </Fade>

      {/* beat 6 — CONSCIOUSNESS + STIMULUS */}
      <Fade on={beat === 6} delay={dl(6, 0.2)}>
        <T x={540} y={228} size={18} fill={INK} weight={800}>
          {t("CONSCIOUSNESS", "CONSCIOUSNESS")}
        </T>
      </Fade>
      <Fade on={beat === 6} delay={dl(6, 0.8)}>
        <T x={540} y={252} size={14} fill={INK} script={false}>
          {t("sense the surroundings + respond to stimuli", "surroundings mehsoos karo + stimuli par react karo")}
        </T>
      </Fade>
      <Fade on={beat === 6} delay={dl(6, 1.6)}>
        <Draw on={true} d="M 450 268 L 630 268" stroke={MUTED} sw={1.4} dur={0.4} />
      </Fade>
      <Fade on={beat === 6} delay={dl(6, 2.2)}>
        <T x={540} y={296} size={18} fill={INK} weight={800}>
          {t("STIMULUS", "STIMULUS")}
        </T>
      </Fade>
      <Fade on={beat === 6} delay={dl(6, 2.8)}>
        <T x={540} y={320} size={14} fill={INK} script={false}>
          {t(
            "any environmental change an organism responds to",
            "koi bhi environmental change jis par organism react kare"
          )}
        </T>
      </Fade>

      {/* beat 7 — EMERGENT PROPERTIES */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <T x={540} y={228} size={20} fill={INK} weight={800}>
          {t("EMERGENT PROPERTIES", "EMERGENT PROPERTIES")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.9)}>
        <Draw on={true} d="M 340 240 L 740 240" stroke={INK} sw={1.6} dur={0.5} />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={540} y={264} size={15} fill={INK} script={false}>
          {t(
            "new properties at a HIGHER level — from interactions, not in parts alone",
            "HIGHER level par nayi properties — interactions se, akele parts mein nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
