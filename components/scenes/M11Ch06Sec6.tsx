/**
 * M11 Ch06 · Section 6 — "When independence breaks: reorder or split into cases"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md. Direct payoff of Sec5's independence guardrail:
 * here independence BREAKS (slot 1 is constrained, so slots 2/3's pool
 * depends on what slot 1 used) and the section teaches the fix. This is a
 * genuine "speed trap" — the tempting wrong reflex 4×3×2=24 is staged and
 * crossed out in red, kept visible for contrast, before the correct 18 lands.
 *
 * Beats (board_reveal_at_english [0,10.15,21.16,35.33,45.31,56.41,64.34],
 * hinglish [0,9.64,19.11,33.11,42.5,52.31,61.78]):
 *  0 heading (= title, always-on) + underline flourish
 *  1 setup: headline + roster digit set "{0,1,2,3}" built glyph by glyph +
 *    3 empty slot boxes (hundeds/tens/units, reused from Sec3's slot-box
 *    language) + "≠ 0" note with arrow pointing at slot 1
 *  2 guardrail (red, speed trap): tempting reflex "4×3×2=24" appears, gets
 *    crossed out in red, caption explains why (let slot 1 use 0 too) — this
 *    block stays on screen (not erased) so beat 5's correct answer can be
 *    seen in direct contrast, per spec's "cross out before landing" rule
 *  3 fix the constrained slot first: box 1 filled, digit-set row annotated —
 *    {1,2,3} ringed green (valid for slot 1), "0," crossed red (temporary,
 *    beat-local) — + caption "3 ways"
 *  4 slots 2,3 draw from the 3 leftover digits (now including 0): box 2/3
 *    filled, × signs, digit-set's "0" re-ringed GREEN (now available) +
 *    caption
 *  5 correct answer lands: "3 × (3 × 2) = 18" boxed, GREEN, in the verdict
 *    band — spatially and chromatically contrasted with the still-crossed
 *    red 24 sitting above
 *  6 [erase headline + reflex block — their job is done] guardrail rule
 *    chip lands where the reflex used to be: "reorder the constrained stage
 *    first, or split into cases and add" + warning-triangle icon
 *
 * Layout plan (boxes = estimated render boxes; longer language counts):
 *  always | title (script 24, red)                  | T mid   | x155..925 y39..82
 *  b0 | title underline flourish (amber)             | Draw    | x350..730 y94
 *  [group P: setup — digit row + slots + note — persists forever]
 *  [group H: headline — beat 1..5, erased at beat 6]
 *  b1 | headline (18, ink)                           | T mid   | x330..752 y98..118
 *  b1 | digit row "{ 0, 1, 2, 3 }" (30,ink,w800) ×9   | T mid   | x397..683 y157..189 (per-glyph, x404..676)
 *  b1 | 3 slot boxes (64×64, gap40)                   | Draw    | x404..676 y280..344
 *  b1 | 3 labels hundreds/tens/units (14, muted)       | T mid   | per-box y357..372
 *  b1 | "≠ 0" note (18, red, w700)                     | T mid   | x420..452 y230..260
 *  b1 | arrow note→box1                                 | Draw   | x436 y258..275
 *  [group R: reflex — beat 2..5, erased at beat 6]
 *  b2 | "the tempting shortcut:" (15, red)              | T mid   | x758..992 y104..123
 *  b2 | "4 × 3 × 2 = 24" (26, red, w800)                 | T mid   | x779..961 y140..168
 *  b2 | cross-out over reflex formula (red)               | Draw   | x779..961 y139..168
 *  b2 | why-caption (14, red)                              | T mid   | x747..993 y190..204
 *  b3 | box1 numeral "3" (30, ink, w800)                    | T mid   | x421..451 y296..325
 *  b3 | ring around "1, 2, 3" in digit row (green, temp)     | Draw   | x483..668 y136..210
 *  b3 | cross over "0," in digit row (red, temp)              | Draw   | x426..481 y153..192
 *  b3 | caption "fix constrained slot first → 3 ways" (18)     | T mid  | x329..751 y394..414
 *  b4 | box2 numeral "3", box3 numeral "2" (30, ink, w800)       | T mid  | x525..555 / 629..659 y296..325
 *  b4 | 2 "×" signs (24, muted)                                   | T mid | x482..494 / 586..598 y301..327
 *  b4 | ring around "0" in digit row (green, "now available")      | Draw  | x416..461 y136..210
 *  b4 | caption "3 digits remain, 0 included" (16, muted)            | T mid | x320..760 y430..447
 *  [group F: hero formula — beat 5+, never erased]
 *  b5 | "3 × (3 × 2) = 18" (36, green, w800)                          | T mid | x396..684 y502..541
 *  b5 | boxed outline around hero formula (green)                      | Draw | x380..700 y486..558
 *  [group R erased at beat>=6, group H erased at beat>=6]
 *  b6 | warning-triangle icon (red)                                     | Draw | x124..156 y103..133
 *  b6 | rule chip (cream/red border, w720 h40)                          | Chip | x180..900 y98..138
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
  Chip,
  ringD,
  crossD,
  arrowD,
  INK,
  MUTED,
  GREEN,
  RED,
  AMBER,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD } from "./math-kit";

export default function M11Ch06Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group H (headline) and group R (the crossed-out reflex) both stay on the
  // board from the beat they arrive until beat 6, when their pedagogical job
  // is done (the correct answer has already landed and been contrasted
  // against them for a full beat) and the guardrail rule needs their space.
  // Group P (digit set + slots + note) and group F (hero formula) never
  // erase. Each element's own `on` is bounded to its beat window (rather
  // than a wrapper div's opacity) so the verifier's Fade-opacity visibility
  // check — which walks up to the nearest g.sc-fade, not an arbitrary
  // ancestor — sees the erasure too; seeking back into an earlier beat
  // correctly restores it.
  const setupOn = beat >= 1;
  const headlineOn = beat >= 1 && beat < 6;
  const reflexOn = beat >= 2 && beat < 6;
  const b3On = beat >= 3;
  const ring123On = beat === 3;
  const cross0On = beat === 3;
  const greenRing0On = beat >= 4;
  const b4On = beat >= 4;
  const b5On = beat >= 5;
  const b6On = beat >= 6;

  // digit set row "{ 0, 1, 2, 3 }" — 9 glyphs at a fixed 34px step, so each
  // annotation (ring/cross) can be computed from a known x-center.
  const digitGlyphs: { x: number; ch: string }[] = [
    { x: 404, ch: "{" },
    { x: 438, ch: "0" },
    { x: 472, ch: "," },
    { x: 506, ch: "1" },
    { x: 540, ch: "," },
    { x: 574, ch: "2" },
    { x: 608, ch: "," },
    { x: 642, ch: "3" },
    { x: 676, ch: "}" },
  ];

  // slot boxes — the middle three of Sec3's exact 5-box coordinate set, so
  // the gap centers (488, 592) are already proven safe for a "×" glyph.
  const boxX = [404, 508, 612];
  const boxCenters = [436, 540, 644];
  const gapCenters = [488, 592];
  const slotLabels = [t("hundreds", "hundreds"), t("tens", "tens"), t("units", "units")];

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t(
            "the trap: a later stage depends on an earlier choice",
            "trap: baad wala step, pehle wale choice pe depend karta hai"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 0.4)}
        d={`M350 94 L730 94`}
        stroke={AMBER}
        sw={2}
        dur={0.6}
      />

      {/* ===================== Group P + H — setup (beat 1) ===================== */}
      <Fade on={headlineOn} delay={dl(1, 0.3)}>
        <T x={540} y={112} size={18} fill={INK}>
          {t("3-digit numbers, digits distinct, from:", "3-digit number banao, digits alag, inse:")}
        </T>
      </Fade>

      {digitGlyphs.map((g, i) => (
        <Fade key={i} on={setupOn} delay={dl(1, 0.7 + i * 0.35)}>
          <T x={g.x} y={180} size={30} fill={INK} weight={800}>
            {g.ch}
          </T>
        </Fade>
      ))}

      <Draw
        on={setupOn}
        delay={dl(1, 3.9)}
        d={boxX.map((x) => roundRectD(x, 280, 64, 64, 10)).join(" ")}
        stroke={INK}
        sw={2}
        dur={1.0}
      />
      {boxCenters.map((x, i) => (
        <Fade key={i} on={setupOn} delay={dl(1, 5.2)}>
          <T x={x} y={368} size={14} fill={MUTED}>
            {slotLabels[i]}
          </T>
        </Fade>
      ))}

      <Fade on={setupOn} delay={dl(1, 5.6)}>
        <T x={436} y={244} size={18} fill={RED} weight={700}>
          ≠ 0
        </T>
      </Fade>
      <Draw
        on={setupOn}
        delay={dl(1, 6.0)}
        d={arrowD(436, 258, 436, 275)}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />

      {/* ===================== Group R — the crossed-out reflex (beat 2) ===================== */}
      <Fade on={reflexOn} delay={dl(2, 0.3)}>
        <T x={870} y={118} size={15} fill={RED}>
          {t("the tempting shortcut:", "tempting sa lagta hai:")}
        </T>
      </Fade>
      <Fade on={reflexOn} delay={dl(2, 0.9)}>
        <T x={870} y={160} size={26} fill={RED} weight={800}>
          4 × 3 × 2 = 24
        </T>
      </Fade>
      <Draw
        on={reflexOn}
        delay={dl(2, 1.6)}
        d={crossD(779, 139.72, 182, 28.34)}
        stroke={RED}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={reflexOn} delay={dl(2, 2.4)}>
        <T x={870} y={200} size={14} fill={RED}>
          {t("wrong — it let slot 1 use 0 too", "galat — isne slot 1 mein 0 bhi de diya")}
        </T>
      </Fade>

      {/* ===================== beat 3 — fix the constrained slot first ===================== */}
      <Fade on={b3On} delay={dl(3, 0.3)}>
        <T x={436} y={320} size={30} fill={INK} weight={800}>
          3
        </T>
      </Fade>
      <Draw
        on={ring123On}
        delay={dl(3, 0.9)}
        d={ringD(574, 172.95, 89.5, 28.35)}
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={cross0On}
        delay={dl(3, 1.8)}
        d={crossD(430.5, 156.6, 46, 32.7)}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={b3On} delay={dl(3, 2.6)}>
        <T x={540} y={408} size={18} fill={INK}>
          {t(
            "fix the constrained slot first → 3 ways",
            "pehle constrained slot fix karo → 3 tareeke"
          )}
        </T>
      </Fade>

      {/* ===================== beat 4 — slots 2,3 share the leftover pool ===================== */}
      <Fade on={b4On} delay={dl(4, 0.3)}>
        <T x={540} y={320} size={30} fill={INK} weight={800}>
          3
        </T>
      </Fade>
      <Fade on={b4On} delay={dl(4, 0.7)}>
        <T x={644} y={320} size={30} fill={INK} weight={800}>
          2
        </T>
      </Fade>
      <Fade on={b4On} delay={dl(4, 1.1)}>
        {gapCenters.map((x) => (
          <T key={x} x={x} y={320} size={24} fill={MUTED}>
            ×
          </T>
        ))}
      </Fade>
      <Draw
        on={greenRing0On}
        delay={dl(4, 1.6)}
        d={ringD(438, 172.95, 21.5, 28.35)}
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={b4On} delay={dl(4, 2.6)}>
        <T x={540} y={442} size={16} fill={MUTED}>
          {t(
            "now 3 digits remain for slots 2, 3 — 0 included",
            "ab slots 2, 3 ke liye 3 digits bache — 0 bhi included"
          )}
        </T>
      </Fade>

      {/* ===================== Group F — the correct answer lands (beat 5) ===================== */}
      <Fade on={b5On} delay={dl(5, 0.3)}>
        <T x={540} y={530} size={36} fill={GREEN} weight={800}>
          3 × (3 × 2) = 18
        </T>
      </Fade>
      <Draw
        on={b5On}
        delay={dl(5, 1.0)}
        d={roundRectD(380, 486, 320, 72, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />

      {/* ===================== beat 6 — guardrail rule (groups H, R erased) ===================== */}
      <Draw
        on={b6On}
        delay={dl(6, 0.3)}
        d={`M140 103 L124 133 L156 133 Z M140 111 L140 122`}
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={b6On} delay={dl(6, 0.9)}>
        <Circle cx={140} cy={129} r={1.8} fill={RED} />
      </Fade>
      <Fade on={b6On} delay={dl(6, 1.1)}>
        <Chip x={180} y={98} w={720} h={40} fill={CREAM} stroke={RED} textFill={RED} size={16}>
          {t(
            "Rule: fix the constrained stage first, or split into cases and add.",
            "Rule: pehle constrained stage fix karo, ya cases mein split karke add karo."
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
