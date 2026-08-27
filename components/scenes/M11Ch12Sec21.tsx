/**
 * M11 Ch12 · Section 21 — "Traps: f'(a) vs f'(x), the product rule, cancelling h, continuity"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — THIRD section using the "four traps + two pro-tips in 7 beats" shape
 * (after Sec7, Sec14) — same 2×2 red-margin trap-card grid + green/amber pro-tip banners below,
 * same grid geometry, new content, gestures varied per-trap (not copy-pasted from Sec7/14).
 * CLOSES subtopic 3 (Derivatives & First Principle, secs 15-21) — the last section before
 * subtopic 4 (Rules of Differentiation) begins.
 *
 * Only 7 reveal values (beats 0-6): beat0 = seq1 heading (always-on title), beats1-4 = seq2-5
 * (the four traps), beats5-6 = seq6-7 (the two pro-tip reflexes). Unlike Sec7/14, TWO traps are
 * HIGH here (Trap1 top-left AND Trap4 bottom-right — a diagonal emphasis instead of "top row
 * only"), and Trap3 is a plain "text" board_content (ink caption, not red), matching Sec7/14's
 * own bottom-left ink-caption precedent.
 *
 * board_reveal_at_english  = [0.0, 6.74, 22.27, 33.54, 47.27, 61.44, 78.51].
 * board_reveal_at_hinglish = [0.0, 6.91, 24.66, 37.29, 55.13, 67.58, 88.58].
 *
 * Grid (identical geometry to Sec7/Sec14): cols L x60-515 / R x565-1020, gutter 50px; rows
 * y94-210 (bar y102-202) / y234-350 (bar y242-342), 24px row gap. Divider y372. Banner 1
 * (green, HIGH) y396-456. Banner 2 (amber, normal) y480-576.
 *
 * Beats:
 *  0(title, always-on) | "Traps: f'(a) vs f'(x), the product rule, cancelling h, continuity"
 *    board's own heading: "Four traps in first-principle work"
 *  1 | TRAP 1 (HIGH, red) — mixing f'(a) (number) with f'(x) (function): "f'(a) = 6x" with the
 *      x crossed — a number answer can't have an x left in it.
 *  2 | TRAP 2 (normal, red) — wrong product rule: "(uv)' ≠ u'v'" with u'v' crossed, "wrong!" tag.
 *  3 | TRAP 3 (normal, ink caption — plain "text" board_content) — cancelling h too early AND
 *      dropping the lim step: lim(h→0) (f(x+h)-f(x))/h with "lim" crossed and the denominator
 *      "h" crossed separately (two distinct errors, two crosses), "⇒ marks lost" ink tag.
 *  4 | TRAP 4 (HIGH, red) — continuity does not imply differentiability: "continuous ⇒
 *      differentiable" with the ⇒ crossed (one-way only).
 *  5 | PRO-TIP 1 (HIGH, green banner) — callback to Sec19/Sec20: shape (f(a+h)-f(a))/h is
 *      f'(a), never expand it; checkD stamp.
 *  6 | PRO-TIP 2 (normal, amber banner) — callback to Sec17: deriving sin/cos/eˣ? manufacture
 *      a standard limit; green-bordered cream chip "→ force a standard limit".
 *
 * Layout plan (x-range × y-range per element; formulas/badges are language-agnostic, only
 * captions/tags get separate EN/HI boxes — noted where the longer one governs):
 *  b1 | red bar                                  | Draw  | x60  y102..202
 *  b1 | "TRAP 1" badge (14,red,w800,start)        | T st  | x80..~121  y109..124 (bl120)
 *  b1 | "f'(a) ="(16,ink,w700,start)               | T st  | x100..156  y153..170 (bl165)
 *  b1 | "6x"(16,red,w700,start)                    | T st  | x180..196  y153..170 (bl165)
 *  b1 | crossD over "6x"                           | Draw  | crossD(178,150,22,22)
 *  b1 | caption (13,red,w800,start)                | T st  | x80..~301(en)/~294(hi) y194..208 (bl204)
 *  b2 | red bar                                   | Draw  | x565 y102..202
 *  b2 | "TRAP 2" badge (12,red,w700,start)         | T st  | x585..~623 y110..124 (bl120)
 *  b2 | "(uv)'"(15,ink,w700,start)                  | T st  | x585..622.5 y153..170 (bl165)
 *  b2 | "≠"(18,red,w700,mid)                        | T mid | x651..660  y152..172 (bl166)
 *  b2 | "u'v'"(15,red,w700,start)                   | T st  | x672..702  y153..170 (bl165)
 *  b2 | crossD over "u'v'"                          | Draw  | crossD(670,150,34,22)
 *  b2 | "wrong!" tag (13,red,w800,start)            | T st  | x720..759  y154..170 (bl165)
 *  b2 | caption (13,red,w700,start)                 | T st  | x585..~825(en)/~845(hi) y194..208 (bl204)
 *  b3 | red bar                                    | Draw  | x60  y242..342
 *  b3 | "TRAP 3" badge (12,red,w700,start)          | T st  | x80..~118 y248..262 (bl258)
 *  b3 | Limit h→0 (15,ink,start)                    | Limit | x90..~125 y277..312 (bl298+cond)
 *  b3 | Frac (f(x+h)−f(x))/h (15,ink,w150)          | Frac  | x155..305 y277.6..309.95 (cx230,bl298)
 *  b3 | crossD over "lim"                           | Draw  | crossD(88,284,28,24)
 *  b3 | crossD over denominator "h"                 | Draw  | crossD(225,296,12,16)
 *  b3 | "⇒ marks lost" tag (13,ink,w700,start)       | T st  | x340..424.5 y288..302 (bl298)
 *  b3 | caption (13,ink,w600,start)                  | T st  | x80..~330(en)/~322(hi) y326..340 (bl336)
 *  b4 | red bar                                    | Draw  | x565 y242..342
 *  b4 | "TRAP 4" badge (14,red,w800,start)          | T st  | x585..~628 y247..262 (bl258)
 *  b4 | "continuous"(15,ink,w700,start)              | T st  | x585..660  y288..305 (bl300)
 *  b4 | "⇒"(20,red,w700,mid)                          | T mid | x685..695  y285..306 (bl301)
 *  b4 | crossD over "⇒"                               | Draw  | crossD(683,284,14,26)
 *  b4 | "differentiable"(14,red,w700,start)          | T st  | x712..810  y289..304 (bl300)
 *  b4 | caption (13,red,w700,start)                  | T st  | x585..~923(en)/~900(hi) y326..340 (bl336)
 *  --divider--                                      | Draw  | x100..980 y372
 *  b5 | banner outline (green rect)                  | Draw  | x160..920 y396..456
 *  b5 | banner text (17,green_dark,w800,mid)          | T mid | x~310..770(en)/~289..791(hi) y417..435 (bl430)
 *  b5 | checkD beside text                            | Draw  | checkD(895,430,16)
 *  b6 | banner outline (amber rect)                   | Draw  | x160..920 y480..576
 *  b6 | line1 (16,ink,w700,mid)                        | T mid | x~384..696(en)/~396..684(hi) y492..510 (bl504)
 *  b6 | Chip "→ force a standard limit"(18,green)       | Chip  | x419..661 y528..566
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
import { Frac, Limit, checkD } from "./math-kit";

export default function M11Ch12Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("Four traps in first-principle work", "First-principle mein chaar badi galtiyan")}
        </T>
      </Fade>

      {/* beat 1 — TRAP 1 (HIGH): f'(a) is a number, not a function — no stray x */}
      <Draw on={beat >= 1} d="M60 102 L60 202" stroke={RED} sw={3} delay={dl(1, 0)} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={80} y={120} size={14} fill={RED} anchor="start" weight={800}>
          TRAP 1
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <T x={100} y={165} size={16} fill={INK} anchor="start" weight={700}>
          f&apos;(a) =
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={180} y={165} size={16} fill={RED} anchor="start" weight={700}>
          6x
        </T>
      </Fade>
      <Draw on={beat >= 1} d={crossD(178, 150, 22, 22)} stroke={RED} sw={2} delay={dl(1, 1.7)} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={80} y={204} size={13} fill={RED} anchor="start" weight={800}>
          {t("f'(a) is a number — no x allowed.", "f'(a) ek number hai — x allowed nahi.")}
        </T>
      </Fade>

      {/* beat 2 — TRAP 2 (normal): the wrong product rule */}
      <Draw on={beat >= 2} d="M565 102 L565 202" stroke={RED} sw={3} delay={dl(2, 0)} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={585} y={120} size={12} fill={RED} anchor="start" weight={700}>
          TRAP 2
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={585} y={165} size={15} fill={INK} anchor="start" weight={700}>
          (uv)&apos;
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={655} y={166} size={18} fill={RED} anchor="middle" weight={700}>
          ≠
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={672} y={165} size={15} fill={RED} anchor="start" weight={700}>
          u&apos;v&apos;
        </T>
      </Fade>
      <Draw on={beat >= 2} d={crossD(670, 150, 34, 22)} stroke={RED} sw={2} delay={dl(2, 1.9)} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <T x={720} y={165} size={13} fill={RED} anchor="start" weight={800}>
          {t("wrong!", "galat!")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.7)}>
        <T x={585} y={204} size={13} fill={RED} anchor="start" weight={700}>
          {t("Missing cross term — it's u'v + uv'.", "Cross term missing — u'v + uv' hota hai.")}
        </T>
      </Fade>

      {/* beat 3 — TRAP 3 (normal, ink): cancelling h too early, dropping the lim step */}
      <Draw on={beat >= 3} d="M60 242 L60 342" stroke={RED} sw={3} delay={dl(3, 0)} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={80} y={258} size={12} fill={RED} anchor="start" weight={700}>
          TRAP 3
        </T>
      </Fade>
      <Limit on={beat >= 3} delay={dl(3, 0.9)} x={90} y={298} size={15} condition="h → 0" anchor="start" fill={INK} />
      <Frac
        on={beat >= 3}
        delay={dl(3, 1.2)}
        x={230}
        y={298}
        size={15}
        numerator="f(x+h) − f(x)"
        denominator="h"
        width={150}
        fill={INK}
      />
      <Draw on={beat >= 3} d={crossD(88, 284, 28, 24)} stroke={RED} sw={2} delay={dl(3, 1.6)} dur={0.5} />
      <Draw on={beat >= 3} d={crossD(225, 296, 12, 16)} stroke={RED} sw={2} delay={dl(3, 2.0)} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <T x={340} y={298} size={13} fill={INK} anchor="start" weight={700}>
          {t("⇒ marks lost", "⇒ marks katenge")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.8)}>
        <T x={80} y={336} size={13} fill={INK} anchor="start" weight={600}>
          {t("Simplify first, cancel h last, keep the lim.", "Pehle simplify, h last cancel, lim end tak.")}
        </T>
      </Fade>

      {/* beat 4 — TRAP 4 (HIGH): continuity does not imply differentiability */}
      <Draw on={beat >= 4} d="M565 242 L565 342" stroke={RED} sw={3} delay={dl(4, 0)} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={585} y={258} size={14} fill={RED} anchor="start" weight={800}>
          TRAP 4
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={585} y={300} size={15} fill={INK} anchor="start" weight={700}>
          {t("continuous", "continuous")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={690} y={301} size={20} fill={RED} anchor="middle" weight={700}>
          ⇒
        </T>
      </Fade>
      <Draw on={beat >= 4} d={crossD(683, 284, 14, 26)} stroke={RED} sw={2} delay={dl(4, 1.6)} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 2.0)}>
        <T x={712} y={300} size={14} fill={RED} anchor="start" weight={700}>
          {t("differentiable", "differentiable")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <T x={585} y={336} size={13} fill={RED} anchor="start" weight={700}>
          {t("One-way only. Corners, cusps aren't differentiable.", "Sirf ek taraf. Corner, cusp differentiable nahi.")}
        </T>
      </Fade>

      {/* divider between the traps grid and the pro-tips */}
      <Draw on={beat >= 5} d="M100 372 L980 372" stroke={AMBER_DARK} sw={1} delay={dl(5, 0)} dur={0.6} />

      {/* beat 5 — PRO-TIP 1 (HIGH, green): recognise the disguised derivative shape */}
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
            "Spot (f(a+h) − f(a))/h? That's f'(a) — never expand.",
            "(f(a+h) − f(a))/h dikhe? Bas f'(a) — expand mat karo."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 5} d={checkD(895, 430, 16)} stroke={GREEN} sw={2.2} delay={dl(5, 2.2)} dur={0.5} />

      {/* beat 6 — PRO-TIP 2 (normal, amber): manufacture a standard limit (callback to Sec17) */}
      <Draw
        on={beat >= 6}
        d="M160 480 L920 480 L920 576 L160 576 Z"
        stroke={AMBER_DARK}
        sw={2.2}
        delay={dl(6, 0.7)}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={540} y={504} size={16} fill={INK} anchor="middle" weight={700}>
          {t("Deriving sin, cos, or eˣ from scratch?", "sin, cos, ya eˣ derive kar rahe ho?")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <Chip x={419} y={528} w={242} h={38} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={18} script={false}>
          {t("→ force a standard limit", "→ standard limit banao")}
        </Chip>
      </Fade>
    </Scene>
  );
}
