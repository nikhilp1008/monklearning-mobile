/**
 * M11 Ch14 · Section 23 — "Deriving the equally-likely formula"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. section_type: formulas. FLAGGED for extra
 * scrutiny (last axiom-derivation section) — recovers the classical
 * n(A)/n(S) recipe as a THEOREM from the axioms, closing the Sec15→18
 * arc. Reuses the uniform-sand-blob motif from Sec17 (equal p per
 * outcome) rather than inventing a new visual for "equally likely".
 * Verified algebraically: n(S)·p=1 ⇒ p=1/n(S) (normalization), then
 * P(A) = n(A) copies of p = n(A)/n(S) — matches narration exactly.
 *
 * Beats (board_reveal_at_english [0,11.26,21.08,30.89,39.0,52.74,63.23]):
 *  0 heading: "R5 — the classical recipe, recovered as a theorem"
 *  1 suppose all n(S) outcomes are equally likely, each = p
 *  2 n(S)·p = 1 ⇒ p = 1/n(S)  (normalization)
 *  3 event A with n(A) points sums that many equal pieces
 *  4 (HIGH, ringed) P(A) = Σp = n(A)·1/n(S) = n(A)/n(S)
 *  5 sanity: 6 uniform sand blobs, ring 1 → 1/n(S), e.g. 1/6 for a die
 *  6 (HIGH) GUARDRAIL: n(A)/n(S) is a THEOREM, not a definition
 *
 * Layout plan (single column + sand row; longer language counts):
 *  b1 | sentence (16, ink)                          | T mid | x230..850 y120..136
 *  b2 | "n(S)·p=1 ⇒ p=1/n(S)" (17) + caption (12)     | T mid | y150..178
 *  b3 | sentence (15, ink)                             | T mid | x230..850 y205..219
 *  b4 | ringed "P(A)=Σp=n(A)·1/n(S)=n(A)/n(S)" (19)      | T mid | y240..280
 *  b5 | 6 blobs (r16, y=325) + "p" labels, 1 ringed         | Fade/Draw| x303..723 y309..341
 *  b5 | sanity captions (14/13)                               | T mid | y400..420
 *  b6 | guardrail chip (red, w780 h48)                          | Chip  | x150..930 y450..498
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, MUTED, GREEN, RED, AMBER_DARK, CREAM,
  Scene,
} from '@/components/scenes/kit';

const SLOT_X = [303, 387, 471, 555, 639, 723];

export default function M11Ch14Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("a theorem now, not a definition — and it needs equal likelihood", "ab theorem hai, definition nahi — equal likelihood chahiye")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={100} size={18} fill={INK} weight={700}>
          {t("R5 — the classical recipe, recovered as a theorem", "R5 — classical recipe, theorem ki tarah wapas")}
        </T>
      </Fade>

      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={132} size={16} fill={INK} weight={600}>
          {t("suppose all n(S) outcomes are equally likely, each = p", "socho, n(S) outcomes equally likely hain, har ek = p")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={165} size={17} fill={INK} weight={700}>
          {"n(S) · p = 1   ⇒   p = 1/n(S)"}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <T x={540} y={187} size={12} fill={MUTED}>
          {t("(normalization)", "(normalization)")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={218} size={15} fill={INK} weight={600}>
          {t("event A with n(A) points sums that many equal pieces:", "event A ke n(A) points, utne hi equal pieces sum karo:")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={258} size={19} fill={GREEN} weight={800}>
          {"P(A) = Σ p = n(A) · 1/n(S) = n(A)/n(S)"}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.0)} d={ringD(540, 248, 280, 26)} stroke={AMBER_DARK} sw={2.2} dur={0.7} />

      {/* beat 5 — sanity: uniform sand blobs, one ringed */}
      {SLOT_X.map((x, i) => (
        <Fade key={i} on={beat >= 5} delay={dl(5, 0.3 + i * 0.15)}>
          <Circle cx={x} cy={330} r={16} fill={AMBER_DARK} opacity={0.5} />
          <T x={x} y={362} size={13} fill={INK} weight={700}>
            p
          </T>
        </Fade>
      ))}
      <Draw on={beat >= 5} delay={dl(5, 1.4)} d={ringD(SLOT_X[3], 330, 30, 30)} stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 2.1)}>
        <T x={540} y={400} size={14} fill={RED} weight={700}>
          {t("1 outcome → p = 1/n(S)", "1 outcome → p = 1/n(S)")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.7)}>
        <T x={540} y={420} size={13} fill={MUTED}>
          {t("e.g. 1/6 for one face of a fair die", "jaise fair die ke ek face ke liye 1/6")}
        </T>
      </Fade>

      {/* beat 6 — GUARDRAIL */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={150} y={452} w={780} h={48} fill={CREAM} stroke={RED} textFill={RED} size={16} script={false}>
          {t("n(A)/n(S) is a THEOREM, not a definition — equal likelihood only", "n(A)/n(S) ek THEOREM hai, definition nahi — sirf equal likelihood")}
        </Chip>
      </Fade>
    </Scene>
  );
}
