/**
 * M11 Ch12 · Section 27 — "Traps: inner derivative, product rule, quotient order, simplification"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — FOURTH and LAST section using the "four traps + two pro-tips in 7 beats"
 * shape (after Sec7, Sec14, Sec21) — same 2×2 red-margin trap-card grid + green/amber pro-tip
 * banners below, same grid geometry, new content, gestures varied per-trap (not copy-pasted).
 * CLOSES subtopic 4 (Rules of Differentiation, secs 22-27) — the last section before subtopic 5
 * (Limits at Infinity & Special Cases) begins.
 *
 * Only 7 reveal values (beats 0-6): beat0 = seq1 heading (always-on title), beats1-4 = seq2-5
 * (the four traps), beats5-6 = seq6-7 (the two pro-tip reflexes). HIGH cards this time are the
 * LEFT column (Trap1 top-left AND Trap3 bottom-left) — a vertical emphasis, a new variation from
 * Sec7's "top row only" and Sec21's "diagonal". Trap4 is a plain "text" board_content (ink
 * caption, not red — same precedent as Sec7/14/21's bottom-row ink-caption cards).
 *
 * board_reveal_at_english  = [0.0, 5.89, 23.38, 34.99, 48.64, 61.01, 77.82].
 * board_reveal_at_hinglish = [0.0, 6.83, 23.38, 35.24, 48.73, 60.84, 77.82].
 *
 * Grid (identical geometry to Sec7/14/21): cols L x60-515 / R x565-1020, gutter 50px; rows
 * y94-210 (bar y102-202) / y234-350 (bar y242-342), 24px row gap. Divider y372. Banner 1
 * (green, HIGH) y396-456. Banner 2 (amber, normal) y480-576.
 *
 * Beats:
 *  0(title, always-on) | "The four rule-of-differentiation traps"
 *  1 | TRAP 1 (HIGH, red) — forgetting the inner derivative (chain rule). Exact narration
 *      example: "d/dx sin(x²) ≠ cos(x²)" with cos(x²) crossed, arrow lands the correct
 *      "2x cos(x²)" beside it — a clean crossed-wrong vs correct pairing since the trap comes
 *      with real numbers to work with.
 *  2 | TRAP 2 (normal, red) — the wrong product rule again: "(uv)' ≠ u'v'" crossed, "two
 *      terms!" tag, caption lands the correct u'v + uv'.
 *  3 | TRAP 3 (HIGH, red) — quotient-rule order & sign: wrong-order numerator "uv' − u'v"
 *      crossed, arrow lands the correct "u'v − uv'" (top-derivative-first).
 *  4 | TRAP 4 (normal, ink caption — plain "text" board_content) — skipping simplification:
 *      "grind it raw" crossed, arrow lands "simplify first" (amber landing, same convention
 *      every trap card uses for its correct-approach landing regardless of caption color).
 *  5 | PRO-TIP 1 (HIGH, green banner) — the chain-rule mantra, quoted verbatim (callback to
 *      Sec26's missed-inner-derivative worked example): "outside derivative, inside kept
 *      whole, ×(inside)'" — repeat per layer; checkD stamp.
 *  6 | PRO-TIP 2 (normal, amber banner) — 3-or-more-factor products: differentiate one factor
 *      at a time and add; green-bordered chip shows Sec24's exact 3-factor product-rule
 *      identity "(uvw)' = u'vw + uv'w + uvw'" as the concrete callback.
 *
 * Layout plan (x-range × y-range per element; formulas are language-agnostic, only
 * captions/tags get separate EN/HI boxes — noted where the longer one governs):
 *  b1 | red bar                                  | Draw  | x60  y102..202
 *  b1 | "TRAP 1" badge (14,red,w800,start)        | T st  | x80..~121   bl120
 *  b1 | "d/dx sin(x²)" (15,ink,w700,start)         | T st  | x100..190  bl165
 *  b1 | "≠" (18,red,w700,mid)                       | T mid | x203..221  bl166
 *  b1 | "cos(x²)" (15,red,w700,start)                | T st | x232..284.5 bl165
 *  b1 | crossD over "cos(x²)"                         | Draw | crossD(232,153,53,17)
 *  b1 | "→" (16,ink,mid)                               | T mid| x306..314  bl165
 *  b1 | "2x cos(x²)" (15,amber_dark,w800,start)         | T st | x329..404  bl165
 *  b1 | caption (13,red,w800,start)                     | T st | x80..~320(en)/~340(hi) bl204
 *  b2 | red bar                                   | Draw  | x565 y102..202
 *  b2 | "TRAP 2" badge (12,red,w700,start)         | T st  | x585..~623 bl120
 *  b2 | "(uv)'" (15,ink,w700,start)                  | T st | x585..622.5 bl165
 *  b2 | "≠" (18,red,w700,mid)                          | T mid| x655..665  bl166
 *  b2 | "u'v'" (15,red,w700,start)                      | T st | x675..705  bl165
 *  b2 | crossD over "u'v'"                               | Draw | crossD(674,153,31,17)
 *  b2 | "two terms!" tag (13,red,w800,start)              | T st | x724..788  bl165
 *  b2 | caption (13,red,w700,start)                        | T st | x585..~780(en)/~785(hi) bl204
 *  b3 | red bar                                   | Draw  | x60  y242..342
 *  b3 | "TRAP 3" badge (14,red,w800,start)         | T st  | x80..~123  bl258
 *  b3 | "(u/v)' =" (15,ink,w700,start)               | T st | x100..160  bl300
 *  b3 | "uv' − u'v" (15,red,w700,start)               | T st | x180..247.5 bl300
 *  b3 | crossD over wrong numerator                     | Draw | crossD(179,288,69,17)
 *  b3 | "→" (16,ink,mid)                                 | T mid| x274..282  bl300
 *  b3 | "u'v − uv'" (15,amber_dark,w800,start)            | T st | x298..373  bl300
 *  b3 | caption (13,red,w800,start)                        | T st | x80..~230(en)/~226(hi) bl336
 *  b4 | red bar                                   | Draw  | x565 y242..342
 *  b4 | "TRAP 4" badge (12,red,w700,start)         | T st  | x585..~623 bl258
 *  b4 | "grind it raw" (15,ink,w700,start)           | T st | x585..675  bl300
 *  b4 | crossD over "grind it raw"                     | Draw | crossD(584,288,91,17)
 *  b4 | "→" (16,ink,mid)                                | T mid| x696..704  bl300
 *  b4 | "simplify first" (15,amber_dark,w800,start)      | T st | x715..820  bl300
 *  b4 | caption (13,ink,w600,start)                       | T st | x585..~773(en)/~772(hi) bl336
 *  --divider--                                     | Draw  | x100..980 y372
 *  b5 | banner outline (green rect)                 | Draw  | x160..920 y396..456
 *  b5 | banner text (17,green_dark,w800,mid)          | T mid | x~272..808(en)/~226..855(hi) bl430
 *  b5 | checkD beside text                             | Draw | checkD(895,430,16)
 *  b6 | banner outline (amber rect)                   | Draw  | x160..920 y480..576
 *  b6 | line1 (16,ink,w700,mid)                         | T mid | x~372..708(en)/~380..700(hi) bl504
 *  b6 | Chip "(uvw)' = u'vw + uv'w + uvw'" (18,green)    | Chip  | x395..685 y528..566
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
  INK,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  crossD,
  Scene,
} from '@/components/scenes/kit';
import { checkD } from "./math-kit";

export default function M11Ch12Sec27({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("The four rule-of-differentiation traps", "Differentiation rules ke chaar traps")}
        </T>
      </Fade>

      {/* beat 1 — TRAP 1 (HIGH): forgetting the inner derivative in the chain rule */}
      <Draw on={beat >= 1} d="M60 102 L60 202" stroke={RED} sw={3} delay={dl(1, 0)} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={80} y={120} size={14} fill={RED} anchor="start" weight={800}>
          TRAP 1
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={100} y={165} size={15} fill={INK} anchor="start" weight={700}>
          {"d/dx sin(x²)"}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={212} y={166} size={18} fill={RED} anchor="middle" weight={700}>
          ≠
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={232} y={165} size={15} fill={RED} anchor="start" weight={700}>
          {"cos(x²)"}
        </T>
      </Fade>
      <Draw on={beat >= 1} d={crossD(232, 153, 53, 17)} stroke={RED} sw={2} delay={dl(1, 2.0)} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={310} y={165} size={16} fill={INK} anchor="middle">
          →
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.7)}>
        <T x={329} y={165} size={15} fill={AMBER_DARK} anchor="start" weight={800}>
          {"2x cos(x²)"}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.1)}>
        <T x={80} y={204} size={13} fill={RED} anchor="start" weight={800}>
          {t("Missing the inner-derivative factor.", "Inner-derivative factor missing hai.")}
        </T>
      </Fade>

      {/* beat 2 — TRAP 2 (normal): the wrong product rule again */}
      <Draw on={beat >= 2} d="M565 102 L565 202" stroke={RED} sw={3} delay={dl(2, 0)} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={585} y={120} size={12} fill={RED} anchor="start" weight={700}>
          TRAP 2
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={585} y={165} size={15} fill={INK} anchor="start" weight={700}>
          {"(uv)'"}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={660} y={166} size={18} fill={RED} anchor="middle" weight={700}>
          ≠
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={675} y={165} size={15} fill={RED} anchor="start" weight={700}>
          {"u'v'"}
        </T>
      </Fade>
      <Draw on={beat >= 2} d={crossD(674, 153, 31, 17)} stroke={RED} sw={2} delay={dl(2, 1.9)} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <T x={724} y={165} size={13} fill={RED} anchor="start" weight={800}>
          {t("two terms!", "do terms!")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.7)}>
        <T x={585} y={204} size={13} fill={RED} anchor="start" weight={700}>
          {t("Always two terms — u'v + uv'.", "Hamesha do terms — u'v + uv'.")}
        </T>
      </Fade>

      {/* beat 3 — TRAP 3 (HIGH): quotient-rule order and sign */}
      <Draw on={beat >= 3} d="M60 242 L60 342" stroke={RED} sw={3} delay={dl(3, 0)} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={80} y={258} size={14} fill={RED} anchor="start" weight={800}>
          TRAP 3
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={100} y={300} size={15} fill={INK} anchor="start" weight={700}>
          {"(u/v)' ="}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={180} y={300} size={15} fill={RED} anchor="start" weight={700}>
          {"uv' − u'v"}
        </T>
      </Fade>
      <Draw on={beat >= 3} d={crossD(179, 288, 69, 17)} stroke={RED} sw={2} delay={dl(3, 1.7)} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 2.1)}>
        <T x={278} y={300} size={16} fill={INK} anchor="middle">
          →
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <T x={298} y={300} size={15} fill={AMBER_DARK} anchor="start" weight={800}>
          {"u'v − uv'"}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.8)}>
        <T x={80} y={336} size={13} fill={RED} anchor="start" weight={800}>
          {t("u'v first, then − uv'.", "u'v pehle, phir − uv'.")}
        </T>
      </Fade>

      {/* beat 4 — TRAP 4 (normal, ink): skipping simplification */}
      <Draw on={beat >= 4} d="M565 242 L565 342" stroke={RED} sw={3} delay={dl(4, 0)} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={585} y={258} size={12} fill={RED} anchor="start" weight={700}>
          TRAP 4
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={585} y={300} size={15} fill={INK} anchor="start" weight={700}>
          {t("grind it raw", "raw hi grind")}
        </T>
      </Fade>
      <Draw on={beat >= 4} d={crossD(584, 288, en ? 91 : 87, 17)} stroke={RED} sw={2} delay={dl(4, 1.3)} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.7)}>
        <T x={en ? 700 : 696} y={300} size={16} fill={INK} anchor="middle">
          →
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.0)}>
        <T x={en ? 719 : 715} y={300} size={15} fill={AMBER_DARK} anchor="start" weight={800}>
          {t("simplify first", "pehle simplify")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <T x={585} y={336} size={13} fill={INK} anchor="start" weight={600}>
          {t("Wastes time, invites errors.", "Time waste, galtiyan zyada.")}
        </T>
      </Fade>

      {/* divider between the traps grid and the pro-tips */}
      <Draw on={beat >= 5} d="M100 372 L980 372" stroke={AMBER_DARK} sw={1} delay={dl(5, 0)} dur={0.6} />

      {/* beat 5 — PRO-TIP 1 (HIGH, green): the chain-rule mantra (callback to Sec26) */}
      <Draw
        on={beat >= 5}
        d="M160 396 L920 396 L920 456 L160 456 Z"
        stroke={GREEN}
        sw={2.4}
        delay={dl(5, 0.7)}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={540} y={430} size={17} fill={GREEN_DARK} anchor="middle" weight={800}>
          {t(
            "\"Outside deriv., inside whole, ×(inside)'\" — repeat each layer.",
            "\"Outside deriv., inside whole rakho, × inside deriv.\" — har layer repeat."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 5} d={checkD(895, 430, 16)} stroke={GREEN} sw={2.2} delay={dl(5, 2.2)} dur={0.5} />

      {/* beat 6 — PRO-TIP 2 (normal, amber): three-or-more-factor products (callback to Sec24) */}
      <Draw
        on={beat >= 6}
        d="M160 480 L920 480 L920 576 L160 576 Z"
        stroke={AMBER_DARK}
        sw={2.2}
        delay={dl(6, 0.7)}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={540} y={504} size={16} fill={INK} anchor="middle" weight={700}>
          {t("Three (or more) factors multiplied together?", "Teen ya zyada factors multiply ho rahe?")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <Chip x={395} y={528} w={290} h={38} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={18} script={false}>
          {"(uvw)' = u'vw + uv'w + uvw'"}
        </Chip>
      </Fade>
    </Scene>
  );
}
