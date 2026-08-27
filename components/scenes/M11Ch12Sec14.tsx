/**
 * M11 Ch12 · Section 14 — "The four standard-limit traps"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: tips — CLOSES subtopic 2 (Standard Limits, secs 8-14), the last section
 * before subtopic 3 (Derivatives & First Principle) begins. Reuses Sec7's exact shape
 * ("four traps + two pro-tips in 7 beats"): a 2×2 red-margin trap-card grid, then two
 * green/amber pro-tip banners below — same grid geometry as Sec7, new content.
 *
 * Only 7 reveal values (beats 0-6): beat0 = seq1 heading (always-on title), beats1-4 =
 * seq2-5 (the four traps), beats5-6 = seq6-7 (the two positive pro-tip reflexes, the
 * second of which callbacks to Sec13's 1^∞ master-rule chip "e^(lim g(f−1))").
 *
 * board_reveal_at_english  = [0.0, 7.68, 22.53, 35.16, 49.49, 61.53, 78.17].
 * board_reveal_at_hinglish = [0.0, 7.08, 22.1, 35.24, 48.55, 60.25, 75.26].
 *
 * Grid (identical geometry to Sec7): cols L x60-515 / R x565-1020, gutter 50px; rows
 * y94-210 (bar y102-202) / y234-350 (bar y242-342), 24px row gap. Divider y372. Banner 1
 * (green, HIGH) y396-456. Banner 2 (amber, normal) y480-576.
 *
 * Beats:
 *  0 (title, always-on) | "The four standard-limit traps"
 *  1 | TRAP 1 (HIGH, red) — degrees not radians: Limit x→0 "sin x°/x" "≠" crossed "1"
 *    (same legible-crossed-digit gesture as Trap 2, applied to the degrees case).
 *  2 | TRAP 2 (normal, red) — argument mismatch: "sin(kx)/x" "≠" crossed "1", caption
 *    lands the correct "= k".
 *  3 | TRAP 3 (normal, ink caption — plain "text" board_content, not red-margin) — wrong
 *    denominator power: hand-built fraction (1 − cos kx)/x² with the x² highlighted amber,
 *    "→ k²/2" landing with k² also amber (the "square the k" reminder).
 *  4 | TRAP 4 (normal, ink caption — "formula" board_content) — base confusion: the one
 *    card with real math content, side-by-side comparison of Frac (e^x−1)/x "→ 1" (true,
 *    ink) vs Frac (a^x−1)/x "→" crossed "1" (the trap) "→" "ln a" (true, amber landing;
 *    a second small arrow separates the crossed wrong digit from the correct answer so
 *    they don't read as one glyph).
 *  5 | PRO-TIP 1 (HIGH, green banner) — force every piece through a junction, collect
 *    the constant; checkD stamp.
 *  6 | PRO-TIP 2 (normal, amber banner) — the 1^∞ callback: "Power → ∞ with base → 1?"
 *    then Sec13's exact chip "e^(lim g(f−1))", green-bordered, cream-filled.
 *
 * Layout plan (x-range × y-range per element):
 *  b1 | red bar                                 | Draw  | x60  y102..202
 *  b1 | "TRAP 1" badge (14,red,w800,start)       | T st  | x80..~121  bl120
 *  b1 | Limit x→0 (14,ink,start)                 | Limit | x100..121  y153.9..175.9 (bl165+cond)
 *  b1 | Limit x→0 (13,ink,start)                  | Limit | x100..119.5 y156..170 (bl165+cond)
 *  b1 | "sin x°/x" (15,ink,w700,start)             | T st  | x130..190  bl165
 *  b1 | "≠" (18,red,w700,mid)                       | T mid | x201..215  bl166
 *  b1 | "1" (16,red,w700,start)                     | T st  | x222..230  bl165
 *  b1 | crossD over 1                               | Draw  | crossD(220,151,12,22)
 *  b1 | caption (13,red,w800,start)                | T st  | x80..~262(en)/~327(hi) bl204
 *  b2 | red bar                                  | Draw  | x565 y102..202
 *  b2 | "TRAP 2" badge (12,red,w700,start)        | T st  | x585..~623 bl120
 *  b2 | "sin(kx)/x" (15,ink,w700,start)           | T st  | x585..660  bl165
 *  b2 | "≠" (18,red,w700,mid)                     | T mid | x668..682  bl166
 *  b2 | "1" (16,red,w700,start)                    | T st  | x692..700  bl165
 *  b2 | crossD over 1                               | Draw  | crossD(690,150,12,22)
 *  b2 | caption (13,red,w700,start)                  | T st  | x585..~656.5(en)/~721.5(hi) bl204
 *  b3 | red bar                                   | Draw  | x60  y242..342
 *  b3 | "TRAP 3" badge (12,red,w700,start)         | T st  | x80..~118 bl260
 *  b3 | numerator "1 − cos kx" (13,ink,w700,mid)    | T mid | x167.5..232.5 bl292
 *  b3 | fraction bar                                 | Draw | x165..235 y298
 *  b3 | denominator "x²" (14,amber_dark,w800,mid)     | T mid | x193..207  bl313
 *  b3 | "→" (16,ink,mid)                              | T mid | x258..266  bl304
 *  b3 | "k²/2" (16,amber_dark,w800,start)              | T st | x280..312  bl304
 *  b3 | caption (13,ink,w600,start)                     | T st | x80..~288(en)/~307.5(hi) bl336
 *  b4 | red bar                                    | Draw  | x565 y242..342
 *  b4 | "TRAP 4" badge (12,red,w700,start)          | T st  | x585..~623 bl258
 *  b4 | Frac e^x−1/x (13,ink,w60)                    | Frac | x630.65..669.35 y278.3..304.6 (cx650,bl~296)
 *  b4 | "→ 1" (15,ink,w700,start)                     | T st | x692..714.5 bl298
 *  b4 | "vs" (13,muted,w600,mid)                       | T mid| x741.5..754.5 bl298
 *  b4 | Frac a^x−1/x (13,ink,w60)                      | Frac | x785.65..824.35 y278.3..304.6 (cx805,bl~296)
 *  b4 | "→" (15,ink,mid)                               | T mid| x844..852 bl298
 *  b4 | "1" (16,red,w700,start)                         | T st | x858..866 bl298
 *  b4 | crossD over 1                                    | Draw | crossD(856,283,14,22)
 *  b4 | "→" separator (14,ink,mid)                        | T mid| x879..893 bl298
 *  b4 | "ln a" (15,amber_dark,w800,start)                 | T st | x904..934 bl298
 *  b4 | caption (13,ink,w600,start)                        | T st | x585..~838(en)/~806(hi) bl336
 *  --divider--                                       | Draw  | x100..980 y372
 *  b5 | banner outline (green rect)                   | Draw  | x160..920 y396..456
 *  b5 | banner text (17,green_dark,w800,mid)            | T mid | x~289..791(en)/~272..808(hi) bl430
 *  b5 | checkD beside text                               | Draw | checkD(895,430,16)
 *  b6 | banner outline (amber rect)                     | Draw | x160..920 y480..576
 *  b6 | line1 (16,ink,w700,mid)                          | T mid| x~440..640(en)/~432..648(hi) bl504
 *  b6 | Chip "e^(lim g(f−1))" (18,green)                  | Chip | x462..617 y528..566
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
  MUTED,
  crossD,
  Scene,
} from '@/components/scenes/kit';
import { Frac, Limit, checkD } from "./math-kit";

export default function M11Ch12Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("The four standard-limit traps", "Standard limits ke chaar traps")}
        </T>
      </Fade>

      {/* beat 1 — TRAP 1 (HIGH): degrees instead of radians */}
      <Draw on={beat >= 1} d="M60 102 L60 202" stroke={RED} sw={3} delay={dl(1, 0)} />
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={80} y={120} size={14} fill={RED} anchor="start" weight={800}>
          TRAP 1
        </T>
      </Fade>
      <Limit on={beat >= 1} delay={dl(1, 0.9)} x={100} y={165} size={13} condition="x → 0" anchor="start" fill={INK} />
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={130} y={165} size={15} fill={INK} anchor="start" weight={700}>
          sin x°/x
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={208} y={166} size={18} fill={RED} anchor="middle" weight={700}>
          ≠
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <T x={222} y={165} size={16} fill={RED} anchor="start" weight={700}>
          1
        </T>
      </Fade>
      <Draw on={beat >= 1} d={crossD(220, 151, 12, 22)} stroke={RED} sw={2} delay={dl(1, 2.1)} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={80} y={204} size={13} fill={RED} anchor="start" weight={800}>
          {t("Degrees? Multiply by π/180.", "Degrees mein? π/180 se multiply karo.")}
        </T>
      </Fade>

      {/* beat 2 — TRAP 2 (normal): argument mismatch */}
      <Draw on={beat >= 2} d="M565 102 L565 202" stroke={RED} sw={3} delay={dl(2, 0)} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={585} y={120} size={12} fill={RED} anchor="start" weight={700}>
          TRAP 2
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={585} y={165} size={15} fill={INK} anchor="start" weight={700}>
          sin(kx)/x
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={675} y={166} size={18} fill={RED} anchor="middle" weight={700}>
          ≠
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={692} y={165} size={16} fill={RED} anchor="start" weight={700}>
          1
        </T>
      </Fade>
      <Draw on={beat >= 2} d={crossD(690, 150, 12, 22)} stroke={RED} sw={2} delay={dl(2, 1.9)} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <T x={585} y={204} size={13} fill={RED} anchor="start" weight={700}>
          {t("= k, not 1.", "1 nahi, = k hota hai.")}
        </T>
      </Fade>

      {/* beat 3 — TRAP 3 (normal): wrong denominator power for 1 − cos */}
      <Draw on={beat >= 3} d="M60 242 L60 342" stroke={RED} sw={3} delay={dl(3, 0)} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={80} y={260} size={12} fill={RED} anchor="start" weight={700}>
          TRAP 3
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={200} y={292} size={13} fill={INK} anchor="middle" weight={700}>
          1 − cos kx
        </T>
      </Fade>
      <Draw on={beat >= 3} d="M165 298 L235 298" stroke={INK} sw={1.6} delay={dl(3, 1.2)} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={200} y={313} size={14} fill={AMBER_DARK} anchor="middle" weight={800}>
          x²
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        <T x={262} y={304} size={16} fill={INK} anchor="middle">
          →
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={280} y={304} size={16} fill={AMBER_DARK} anchor="start" weight={800}>
          k²/2
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={80} y={336} size={13} fill={INK} anchor="start" weight={600}>
          {t("Don't forget: square the k too.", "Yaad rakhiye: k ko bhi square karo.")}
        </T>
      </Fade>

      {/* beat 4 — TRAP 4 (normal): base confusion, side-by-side comparison */}
      <Draw on={beat >= 4} d="M565 242 L565 342" stroke={RED} sw={3} delay={dl(4, 0)} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={585} y={258} size={12} fill={RED} anchor="start" weight={700}>
          TRAP 4
        </T>
      </Fade>
      <Frac on={beat >= 4} delay={dl(4, 0.9)} x={650} y={296} size={13} numerator="e^x − 1" denominator="x" width={60} fill={INK} />
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={692} y={298} size={15} fill={INK} anchor="start" weight={700}>
          → 1
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={748} y={298} size={13} fill={MUTED} anchor="middle" weight={600}>
          vs
        </T>
      </Fade>
      <Frac on={beat >= 4} delay={dl(4, 1.9)} x={805} y={296} size={13} numerator="a^x − 1" denominator="x" width={60} fill={INK} />
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <T x={848} y={298} size={15} fill={INK} anchor="middle">
          →
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <T x={858} y={298} size={16} fill={RED} anchor="start" weight={700}>
          1
        </T>
      </Fade>
      <Draw on={beat >= 4} d={crossD(856, 283, 14, 22)} stroke={RED} sw={2} delay={dl(4, 2.7)} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={886} y={298} size={14} fill={INK} anchor="middle">
          →
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.2)}>
        <T x={904} y={298} size={15} fill={AMBER_DARK} anchor="start" weight={800}>
          ln a
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.6)}>
        <T x={585} y={336} size={13} fill={INK} anchor="start" weight={600}>
          {t("Base e gives 1; other bases give ln a.", "Base e se 1; baaki bases se ln a.")}
        </T>
      </Fade>

      {/* divider between the traps grid and the pro-tips */}
      <Draw on={beat >= 5} d="M100 372 L980 372" stroke={AMBER_DARK} sw={1} delay={dl(5, 0)} dur={0.6} />

      {/* beat 5 — PRO-TIP 1 (HIGH, green): force every piece through a junction */}
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
            "Force every piece through a junction, collect the constant.",
            "Har piece ko junction tak pahunchaiye, constant ikattha kijiye."
          )}
        </T>
      </Fade>
      <Draw on={beat >= 5} d={checkD(895, 430, 16)} stroke={GREEN} sw={2.2} delay={dl(5, 2.2)} dur={0.5} />

      {/* beat 6 — PRO-TIP 2 (normal, amber): the 1^∞ callback to Sec13 */}
      <Draw
        on={beat >= 6}
        d="M160 480 L920 480 L920 576 L160 576 Z"
        stroke={AMBER_DARK}
        sw={2.2}
        delay={dl(6, 0.7)}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={540} y={504} size={16} fill={INK} anchor="middle" weight={700}>
          {t("Power → ∞ with base → 1?", "Power → ∞, base → 1 dikhe?")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <Chip x={462} y={528} w={155} h={38} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={18} script={false}>
          e^(lim g(f−1))
        </Chip>
      </Fade>
    </Scene>
  );
}
