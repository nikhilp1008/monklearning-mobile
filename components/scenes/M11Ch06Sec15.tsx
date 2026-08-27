/**
 * M11 Ch06 · Section 15 — "Restricted permutations & the bridge to combinations"
 * SIXTH (last major-teaching) section of Subtopic 2 "Permutations" — an
 * example-driven concept pace (like Sec6's constrained-slot trap), not a
 * from-scratch derivation like Sec13/14. Canvas 1080×620 · safe x36–1044,
 * y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md. The "4P2"
 * here is a LITERAL numeric case (n=4,r=2) → real super/subscript digits
 * "⁴P₂" in non-script (Anek) text, per the notation rule.
 *
 * Beats (board_reveal_at_english [0,9.64,26.45,46.34,57.94,82.77,88.58,100.01],
 * hinglish [0,9.98,23.81,44.37,55.72,80.55,87.3,97.11]):
 *  0 heading (= title, always-on): "Three restriction reflexes" + underline
 *  [group PREVIEW: pOn = beat===1, erased at beat>=2]
 *  1 diagram: two mini previews side by side — LEFT "TOGETHER: glue into one
 *    block" (glued block "(A B)" + boxes C, D + red note "then × block's
 *    2!"); RIGHT "NOT TOGETHER: fill the gaps" (pattern "_ C _ D _ E _" +
 *    red note "drop A, B into separate gaps") — a preview of beats 2-5
 *  [group TOG: togOn = beat 2..3, erased at beat>=4 — TOGETHER technique]
 *  2 rule text (2 lines) + a generic glue-diagram: two placeholder letters
 *    X,Y ringed together (the "glue" action), arrow into a "block" box
 *  3 concrete worked example: A,B,C,D,E boxes drawn, A+B ringed into a glued
 *    pair, caption "4 units: (AB), C, D, E", hero equation "4! × 2! = [48]"
 *    boxed green — VERIFY, lands the TOGETHER answer
 *  [group NOT: notOn = beat 4..5, erased at beat>=6 — NOT-TOGETHER technique]
 *  4 rule text (2 lines) + a generic gap-diagram: row "_ X _ Y _ Z _" with 2
 *    gaps ringed (where the restricted pair P,Q will drop)
 *  5 concrete worked example: row "_ C _ D _ E _" (seat C,D,E → 4 gaps),
 *    caption "3! = 6 ways", 2 gaps ringed red, caption "⁴P₂ = 12 ways", hero
 *    equation "3! × ⁴P₂ = 6 × 12 = [72]" boxed green — VERIFY
 *  [group CHECKSUM: checkOn = beat>=5, never erased — the "wow" moment]
 *  5b big boxed row "[48] + [72] = 120 = 5!" + checkmark, all green, in a
 *    large rounded card — the together+not-together cases are complementary
 *    and must sum to the unrestricted 5! total
 *  [group GUARD: guardOn = beat>=6, never erased — third reflex]
 *  6 (red guardrail) diagram: 5 generic slots, center one ringed red +
 *    labeled "lock", double-headed swap arrows over the other 4 pairs, then
 *    red chip "FIXED position: lock the constrained object first, then
 *    permute the rest."
 *  [group BRIDGE: bridgeOn = beat>=7, never erased]
 *  7 (HIGH) "coming up" preview chip (amber/cream): "Bridge: nPr = r! · nCr"
 *    — nPr/nCr here are SYMBOLIC (n,r variables) → plain text, no digits
 *
 * Layout plan (boxes = estimated render boxes; longer language counts):
 *  always | title (script 24, red)                             | T mid  | x362..718 y39..82
 *  b0 | title underline flourish (amber)                         | Draw | x380..700 y94
 *  [group PREVIEW: pOn = beat===1]
 *  p1 | divider line (muted)                                      | Draw | x540 y98..250
 *  p1 | L label "TOGETHER: glue into one block" (16,ink)            | T mid| x180..420 y101..127
 *  p1 | L block box "(A B)" + C,D boxes (46-78×46)                   | Draw | x201..399 y150..196
 *  p1 | L red note "then × block's 2!" (14,red)                       | T mid| x237..363 y210..226
 *  p1 | R label "NOT TOGETHER: fill the gaps" (16,ink)                 | T mid| x668..892 y101..127
 *  p1 | R token row "_ C _ D _ E _" (22,ink/muted) ×7                   | T mid| x678..882 y155..180
 *  p1 | R red note "drop A, B into separate gaps." (14,red)              | T mid| x675..885 y210..226
 *  [group TOG: togOn = beat 2..3]
 *  b2 | rule line1/line2 (18,ink)                                        | T mid | x333..747 y98..143
 *  b2 | X,Y letters (26,ink) + ring (amber-dk)                            | Draw/T| x487..561 y185..213
 *  b2 | arrow ring→box (amber-dk)                                          | Draw | x580..605 y199
 *  b2 | "block" box (90×44) + label (16,ink)                                | Draw/T| x610..700 y176..220
 *  b2 | annotation "(k! ways inside)" (13,amber-dk)                          | T mid| x603..707 y234..244
 *  b3 | header "Concretely: A,B together..." (15,ink)                        | T mid| x397..682 y258..275
 *  b3 | 5 boxes A,B,C,D,E (54×54) + labels (22,ink)                          | Draw/T| x381..699 y290..344
 *  b3 | ring around A,B (amber-dk)                                           | Draw | x306..577 y256..380
 *  b3 | caption "→ 4 units: (AB), C, D, E" (16,ink)                          | T mid| x436..644 y395..410
 *  b3 | hero "4! × 2! =" (28,ink) + box "48" (green) + check                 | T/Draw| x414..664 y418..480
 *  [group NOT: notOn = beat 4..5]
 *  b4 | rule line1/line2 (18,ink)                                          | T mid| x280..800 y98..143
 *  b4 | token row "_ X _ Y _ Z _" (22) ×7                                    | T mid| x425..655 y188..212
 *  b4 | 2 rings around gap tokens (amber-dk)                                 | Draw | x412..600 y169..232
 *  b4 | caption "→ P, Q into 2 of the 4 gaps" (16,ink)                       | T mid| x404..676 y251..267
 *  b5 | token row "_ C _ D _ E _" (26) ×7                                    | T mid| x407..673 y296..328
 *  b5 | caption "seat C,D,E first: 3! = 6 ways" (15,ink)                     | T mid| x420..660 y360..376
 *  b5 | 2 rings around gap tokens (red)                                      | Draw | x392..608 y275..350
 *  b5 | caption "→ A,B into 2 of 4 gaps: ⁴P₂=12" (16,ink)                    | T mid| x364..716 y401..417
 *  b5 | hero "3!×⁴P₂=6×12=" (24,ink) + box "72" (green) + check              | T/Draw| x359..712 y424..472
 *  [group CHECKSUM: checkOn = beat>=5]
 *  b5b | outer card (green, rounded)                                        | Draw | x300..780 y496..580
 *  b5b | "48"(box,green) + "72"(box,green) + "=120" + "=5!" + check          | T/Draw| x317..763 y513..563
 *  [group GUARD: guardOn = beat>=6]
 *  b6 | lead text "A third reflex: lock a FIXED position first." (18,ink)     | T mid| x280..800 y98..115
 *  b6 | 2 swap arrows (amber-dk)                                              | Draw | x379..701 y121..143
 *  b6 | 5 slot boxes (54×54)                                                  | Draw | x377..703 y150..204
 *  b6 | ring around center box (red) + "lock" label (13,red)                  | Draw/T| x499..581 y126..204
 *  b6 | "fixed" caption (13,red)                                              | T mid| x?..?  y216..230
 *  b6 | warning-triangle icon (red)                                          | Draw | x160..192 y253..283
 *  b6 | rule chip (cream/red, w660 h50)                                      | Chip | x210..870 y248..298
 *  [group BRIDGE: bridgeOn = beat>=7]
 *  b7 | lead text "Bridge to combinations — coming up soon:" (16,muted)      | T mid| x372..708 y338..355
 *  b7 | small down arrow (amber)                                             | Draw | x540 y362..376
 *  b7 | bridge chip (cream/amber, w340 h56): "Bridge: nPr = r! · nCr"         | Chip | x370..710 y380..436
 *  b7 | small note "(Subtopic 3 — Combinations — starts soon)" (13,muted)     | T mid| x?..?  y449..464
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
  arrowD,
  ringD,
  INK,
  MUTED,
  GREEN,
  RED,
  AMBER,
  AMBER_DARK,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { roundRectD, checkD, lineD } from "./math-kit";

export default function M11Ch06Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Four erase-groups (PREVIEW → TOG → NOT, each vacating its space for the
  // next), plus three groups that never erase because they're the section's
  // running payoff (CHECKSUM, GUARD, BRIDGE). Each element's own `on` is
  // bounded to its beat window (never a wrapper div's opacity) so the
  // verifier's Fade-opacity visibility check — which walks up to the nearest
  // g.sc-fade, not an arbitrary ancestor — sees every erasure correctly;
  // seeking back into an earlier beat correctly restores it.
  const pOn = beat === 1;
  const togOn = beat >= 2 && beat < 4;
  const notOn = beat >= 4 && beat < 6;
  const checkOn = beat >= 5;
  const guardOn = beat >= 6;
  const bridgeOn = beat >= 7;

  // ---- beat1 preview: LEFT (together) block+letters geometry ----
  const prevBlockX = 201,
    prevBlockW = 78,
    prevLetterW = 46,
    prevGap = 14;
  const prevCX = prevBlockX + prevBlockW + prevGap; // 293
  const prevDX = prevCX + prevLetterW + prevGap; // 353
  const prevBoxY = 150,
    prevBoxH = 46;

  // ---- beat1 preview: RIGHT (not-together) token row ----
  const prevTokens = ["_", "C", "_", "D", "_", "E", "_"];
  const prevTokenXs = [678, 712, 746, 780, 814, 848, 882];

  // ---- beat3 concrete TOGETHER diagram: 5 boxes A,B,C,D,E ----
  const togBoxW = 54,
    togGap = 12,
    togY = 290;
  const togLefts = [0, 1, 2, 3, 4].map((i) => 381 + i * (togBoxW + togGap));
  const togCenters = togLefts.map((x) => x + togBoxW / 2);
  const togLabels = ["A", "B", "C", "D", "E"];

  // ---- beat4 generic NOT-TOGETHER token row (X,Y,Z placeholders) ----
  const notGenTokens = ["_", "X", "_", "Y", "_", "Z", "_"];
  const notGenXs = [438, 472, 506, 540, 574, 608, 642];

  // ---- beat5 concrete NOT-TOGETHER token row (C,D,E) ----
  const notConTokens = ["_", "C", "_", "D", "_", "E", "_"];
  const notConXs = [420, 460, 500, 540, 580, 620, 660];

  // ---- beat6 fixed-position: 5 generic slot boxes ----
  const guardBoxW = 54,
    guardGap = 14,
    guardY = 150;
  const guardLefts = [0, 1, 2, 3, 4].map((i) => 377 + i * (guardBoxW + guardGap));
  const guardCenters = guardLefts.map((x) => x + guardBoxW / 2);

  // ---- beat7 bridge chip: dynamic width from the longer language string ----
  const bridgeText = t("Bridge: nPr = r! · nCr", "Bridge: nPr = r! · nCr");
  const bridgeW = Math.max(300, 0.5 * 22 * bridgeText.length + 40);
  const bridgeX = 540 - bridgeW / 2;

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t("Three restriction reflexes", "Teen restriction reflexes")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 0.4)}
        d={lineD(380, 94, 700, 94)}
        stroke={AMBER}
        sw={2}
        dur={0.6}
      />

      {/* ===================== Group PREVIEW — beat 1 ===================== */}
      <Draw
        on={pOn}
        delay={dl(1, 0.2)}
        d={lineD(540, 98, 540, 250)}
        stroke={MUTED}
        sw={1.4}
        dur={0.5}
      />

      {/* LEFT — TOGETHER preview */}
      <Fade on={pOn} delay={dl(1, 0.4)}>
        <T x={300} y={118} size={16} fill={INK} weight={600}>
          {t("TOGETHER: glue into one block", "TOGETHER: ek block mein glue karo")}
        </T>
      </Fade>
      <Draw
        on={pOn}
        delay={dl(1, 1.0)}
        d={
          roundRectD(prevBlockX, prevBoxY, prevBlockW, prevBoxH, 10) +
          " " +
          roundRectD(prevCX, prevBoxY, prevLetterW, prevBoxH, 10) +
          " " +
          roundRectD(prevDX, prevBoxY, prevLetterW, prevBoxH, 10)
        }
        stroke={INK}
        sw={2}
        dur={0.8}
      />
      <Fade on={pOn} delay={dl(1, 1.9)}>
        <T x={prevBlockX + prevBlockW / 2} y={178.4} size={16} fill={INK} weight={800}>
          (A B)
        </T>
      </Fade>
      <Fade on={pOn} delay={dl(1, 2.1)}>
        <T x={prevCX + prevLetterW / 2} y={179.8} size={20} fill={INK} weight={800}>
          C
        </T>
      </Fade>
      <Fade on={pOn} delay={dl(1, 2.3)}>
        <T x={prevDX + prevLetterW / 2} y={179.8} size={20} fill={INK} weight={800}>
          D
        </T>
      </Fade>
      <Fade on={pOn} delay={dl(1, 3.0)}>
        <T x={300} y={222} size={14} fill={RED} weight={700}>
          {t("then × block's 2!", "phir × block ka 2!")}
        </T>
      </Fade>

      {/* RIGHT — NOT TOGETHER preview */}
      <Fade on={pOn} delay={dl(1, 3.6)}>
        <T x={780} y={118} size={16} fill={INK} weight={600}>
          {t("NOT TOGETHER: fill the gaps", "NOT TOGETHER: gaps bharo")}
        </T>
      </Fade>
      {prevTokens.map((ch, i) => (
        <Fade key={i} on={pOn} delay={dl(1, 4.2 + i * 0.15)}>
          <T
            x={prevTokenXs[i]}
            y={173}
            size={22}
            fill={ch === "_" ? MUTED : INK}
            weight={ch === "_" ? 600 : 800}
          >
            {ch}
          </T>
        </Fade>
      ))}
      <Fade on={pOn} delay={dl(1, 5.5)}>
        <T x={780} y={222} size={14} fill={RED} weight={700}>
          {t("drop A, B into separate gaps.", "A, B ko alag gaps mein daalo.")}
        </T>
      </Fade>

      {/* ===================== Group TOG — beats 2-3, TOGETHER technique ===================== */}

      {/* beat 2 — the rule, illustrated generically */}
      <Fade on={togOn && beat >= 2} delay={dl(2, 0.0)}>
        <T x={540} y={112} size={18} fill={INK}>
          {t(
            "Glue the restricted people into one block,",
            "Restricted logo ko ek block mein glue karo,"
          )}
        </T>
      </Fade>
      <Fade on={togOn && beat >= 2} delay={dl(2, 0.5)}>
        <T x={540} y={138} size={18} fill={INK}>
          {t(
            "arrange all the units, then × the block's k!.",
            "saare units arrange karo, phir × block ka k!."
          )}
        </T>
      </Fade>
      <Fade on={togOn && beat >= 2} delay={dl(2, 1.2)}>
        <T x={500} y={205} size={26} fill={INK} weight={800}>
          X
        </T>
      </Fade>
      <Fade on={togOn && beat >= 2} delay={dl(2, 1.5)}>
        <T x={548} y={205} size={26} fill={INK} weight={800}>
          Y
        </T>
      </Fade>
      <Draw
        on={togOn && beat >= 2}
        delay={dl(2, 2.0)}
        d={ringD(524, 198.9, 51, 26.2)}
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.6}
      />
      <Draw
        on={togOn && beat >= 2}
        delay={dl(2, 2.8)}
        d={arrowD(580, 199, 605, 199)}
        stroke={AMBER_DARK}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={togOn && beat >= 2}
        delay={dl(2, 3.3)}
        d={roundRectD(610, 176, 90, 44, 10)}
        stroke={INK}
        sw={2}
        dur={0.6}
      />
      <Fade on={togOn && beat >= 2} delay={dl(2, 4.0)}>
        <T x={655} y={203.4} size={16} fill={INK} weight={700}>
          {t("block", "block")}
        </T>
      </Fade>
      <Fade on={togOn && beat >= 2} delay={dl(2, 4.5)}>
        <T x={655} y={244} size={13} fill={AMBER_DARK} weight={600}>
          {t("(k! ways inside)", "(andar k! tareeke)")}
        </T>
      </Fade>

      {/* beat 3 — concrete: A,B together among A-E → 4! × 2! = 48 (VERIFY) */}
      <Fade on={togOn && beat >= 3} delay={dl(3, 0.0)}>
        <T x={540} y={270} size={15} fill={INK} weight={600}>
          {t(
            "Concretely: A, B together among A, B, C, D, E:",
            "Concrete example: A, B saath, A-E mein se:"
          )}
        </T>
      </Fade>
      <Draw
        on={togOn && beat >= 3}
        delay={dl(3, 0.7)}
        d={togLefts.map((x) => roundRectD(x, togY, togBoxW, togBoxW, 10)).join(" ")}
        stroke={INK}
        sw={2}
        dur={0.9}
      />
      {togLabels.map((lab, i) => (
        <Fade key={i} on={togOn && beat >= 3} delay={dl(3, 1.6 + i * 0.15)}>
          <T x={togCenters[i]} y={324.5} size={22} fill={INK} weight={800}>
            {lab}
          </T>
        </Fade>
      ))}
      <Draw
        on={togOn && beat >= 3}
        delay={dl(3, 2.6)}
        d={ringD(441, 317, 74, 39)}
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={togOn && beat >= 3} delay={dl(3, 3.5)}>
        <T x={540} y={400} size={16} fill={INK}>
          {t("→ 4 units: (AB), C, D, E", "→ 4 units: (AB), C, D, E")}
        </T>
      </Fade>
      <Fade on={togOn && beat >= 3} delay={dl(3, 4.2)}>
        <T x={414} y={452} size={28} fill={INK} weight={800} anchor="start">
          4! × 2! =
        </T>
      </Fade>
      <Draw
        on={togOn && beat >= 3}
        delay={dl(3, 4.9)}
        d={roundRectD(550, 424, 80, 48, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
      />
      <Fade on={togOn && beat >= 3} delay={dl(3, 5.5)}>
        <T x={590} y={462} size={32} fill={GREEN} weight={800}>
          48
        </T>
      </Fade>
      <Draw
        on={togOn && beat >= 3}
        delay={dl(3, 6.1)}
        d={checkD(650, 454, 14)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />

      {/* ===================== Group NOT — beats 4-5, NOT-TOGETHER technique ===================== */}

      {/* beat 4 — the rule, illustrated generically */}
      <Fade on={notOn && beat >= 4} delay={dl(4, 0.0)}>
        <T x={540} y={112} size={18} fill={INK}>
          {t(
            "Seat the unrestricted people first —",
            "Pehle unrestricted logo ko baitha do —"
          )}
        </T>
      </Fade>
      <Fade on={notOn && beat >= 4} delay={dl(4, 0.5)}>
        <T x={540} y={138} size={18} fill={INK}>
          {t(
            "that creates gaps; drop the rest into separate gaps.",
            "isse gaps bante hain; baaki ko alag gaps mein daalo."
          )}
        </T>
      </Fade>
      {notGenTokens.map((ch, i) => (
        <Fade key={i} on={notOn && beat >= 4} delay={dl(4, 1.2 + i * 0.15)}>
          <T
            x={notGenXs[i]}
            y={205}
            size={22}
            fill={ch === "_" ? MUTED : INK}
            weight={ch === "_" ? 600 : 800}
          >
            {ch}
          </T>
        </Fade>
      ))}
      <Draw
        on={notOn && beat >= 4}
        delay={dl(4, 2.3)}
        d={ringD(notGenXs[0], 199.83, 25, 24) + " " + ringD(notGenXs[4], 199.83, 25, 24)}
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={notOn && beat >= 4} delay={dl(4, 3.2)}>
        <T x={540} y={256} size={16} fill={INK}>
          {t(
            "→ P, Q drop into 2 of the 4 gaps",
            "→ P, Q 2 gaps mein daalo (4 mein se)"
          )}
        </T>
      </Fade>

      {/* beat 5 — concrete: seat C,D,E → drop A,B → 3!×⁴P₂=6×12=72 (VERIFY).
          Delays are compressed (vs beat3's) because beat5's own narration
          window is short (~5.8-6.8s in the two languages) and the checksum
          below needs to fully land — not get cut off mid-stagger — before
          beat6 arrives; delayFor collapses any leftover stagger instantly
          once the beat moves on, so a too-generous budget here would make
          the checksum "snap" in instead of landing as its own beat. */}
      {notConTokens.map((ch, i) => (
        <Fade key={i} on={notOn && beat >= 5} delay={dl(5, 0.0 + i * 0.08)}>
          <T
            x={notConXs[i]}
            y={320}
            size={26}
            fill={ch === "_" ? MUTED : INK}
            weight={ch === "_" ? 600 : 800}
          >
            {ch}
          </T>
        </Fade>
      ))}
      <Fade on={notOn && beat >= 5} delay={dl(5, 0.65)}>
        <T x={540} y={368} size={15} fill={INK}>
          {t(
            "seat C, D, E first: 3! = 6 ways",
            "pehle C, D, E baitho: 3! = 6 tareeke"
          )}
        </T>
      </Fade>
      <Draw
        on={notOn && beat >= 5}
        delay={dl(5, 1.05)}
        d={ringD(notConXs[0], 313.89, 27, 26.17) + " " + ringD(notConXs[4], 313.89, 27, 26.17)}
        stroke={RED}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={notOn && beat >= 5} delay={dl(5, 1.5)}>
        <T x={540} y={405} size={16} fill={INK}>
          {t(
            "→ A, B into 2 of the 4 gaps: ⁴P₂ = 12 ways",
            "→ A, B 2 gaps mein: ⁴P₂ = 12 tareeke"
          )}
        </T>
      </Fade>
      <Fade on={notOn && beat >= 5} delay={dl(5, 1.9)}>
        <T x={359} y={452} size={24} fill={INK} weight={800} anchor="start">
          3! × ⁴P₂ = 6 × 12 =
        </T>
      </Fade>
      <Draw
        on={notOn && beat >= 5}
        delay={dl(5, 2.25)}
        d={roundRectD(609, 424, 76, 48, 14)}
        stroke={GREEN}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={notOn && beat >= 5} delay={dl(5, 2.55)}>
        <T x={647} y={462} size={30} fill={GREEN} weight={800}>
          72
        </T>
      </Fade>
      <Draw
        on={notOn && beat >= 5}
        delay={dl(5, 2.85)}
        d={checkD(705, 454, 14)}
        stroke={GREEN}
        sw={2.6}
        dur={0.35}
      />

      {/* ===================== Group CHECKSUM — beat 5+, never erased ===================== */}
      {/* The wow moment: TOGETHER (48) + NOT TOGETHER (72) must sum to 5!. */}
      <Draw
        on={checkOn}
        delay={dl(5, 3.3)}
        d={roundRectD(300, 496, 480, 84, 18)}
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
      />
      <Draw
        on={checkOn}
        delay={dl(5, 3.65)}
        d={roundRectD(317, 513, 76, 50, 14)}
        stroke={GREEN}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={checkOn} delay={dl(5, 3.9)}>
        <T x={355} y={545} size={30} fill={GREEN} weight={800}>
          48
        </T>
      </Fade>
      <Fade on={checkOn} delay={dl(5, 4.1)}>
        <T x={419} y={549} size={28} fill={INK} weight={800}>
          +
        </T>
      </Fade>
      <Draw
        on={checkOn}
        delay={dl(5, 4.3)}
        d={roundRectD(445, 513, 76, 50, 14)}
        stroke={GREEN}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={checkOn} delay={dl(5, 4.5)}>
        <T x={483} y={545} size={30} fill={GREEN} weight={800}>
          72
        </T>
      </Fade>
      <Fade on={checkOn} delay={dl(5, 4.7)}>
        <T x={547} y={549} size={28} fill={INK} weight={800}>
          =
        </T>
      </Fade>
      <Fade on={checkOn} delay={dl(5, 4.9)}>
        <T x={603} y={550} size={32} fill={GREEN} weight={800}>
          120
        </T>
      </Fade>
      <Fade on={checkOn} delay={dl(5, 5.1)}>
        <T x={659} y={549} size={28} fill={INK} weight={800}>
          =
        </T>
      </Fade>
      <Fade on={checkOn} delay={dl(5, 5.3)}>
        <T x={705} y={549} size={28} fill={GREEN} weight={800}>
          5!
        </T>
      </Fade>
      <Draw
        on={checkOn}
        delay={dl(5, 5.55)}
        d={checkD(751, 542, 16)}
        stroke={GREEN}
        sw={2.8}
        dur={0.35}
      />

      {/* ===================== Group GUARD — beat 6+, never erased ===================== */}
      <Fade on={guardOn} delay={dl(6, 0.0)}>
        <T x={540} y={112} size={18} fill={INK}>
          {t(
            "A third reflex: lock a FIXED position first.",
            "Teesra reflex: pehle FIXED position lock karo."
          )}
        </T>
      </Fade>
      <Draw
        on={guardOn}
        delay={dl(6, 0.7)}
        d={
          arrowD(390, 132, 486, 132) +
          " " +
          arrowD(486, 132, 390, 132) +
          " " +
          arrowD(594, 132, 690, 132) +
          " " +
          arrowD(690, 132, 594, 132)
        }
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.6}
      />
      <Draw
        on={guardOn}
        delay={dl(6, 1.4)}
        d={guardLefts.map((x) => roundRectD(x, guardY, guardBoxW, guardBoxW, 10)).join(" ")}
        stroke={INK}
        sw={2}
        dur={0.9}
      />
      <Draw
        on={guardOn}
        delay={dl(6, 2.4)}
        d={ringD(guardCenters[2], 177, 41, 39)}
        stroke={RED}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={guardOn} delay={dl(6, 3.1)}>
        <T x={guardCenters[2]} y={181.8} size={14} fill={RED} weight={800}>
          {t("lock", "lock")}
        </T>
      </Fade>
      <Fade on={guardOn} delay={dl(6, 3.6)}>
        <T x={guardCenters[2]} y={226} size={13} fill={RED} weight={700}>
          {t("fixed", "fixed")}
        </T>
      </Fade>
      <Draw
        on={guardOn}
        delay={dl(6, 4.2)}
        d={`M176 253 L160 283 L192 283 Z M176 261 L176 274`}
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={guardOn} delay={dl(6, 4.8)}>
        <Circle cx={176} cy={279} r={1.8} fill={RED} />
      </Fade>
      <Fade on={guardOn} delay={dl(6, 5.1)}>
        <Chip x={210} y={248} w={660} h={50} fill={CREAM} stroke={RED} textFill={RED} size={16} script={false}>
          {t(
            "FIXED position: lock the constrained object first, then permute the rest.",
            "FIXED position: pehle constrained cheez lock karo, phir baaki permute karo."
          )}
        </Chip>
      </Fade>

      {/* ===================== Group BRIDGE — beat 7, never erased (HIGH) ===================== */}
      <Fade on={bridgeOn} delay={dl(7, 0.0)}>
        <T x={540} y={350} size={16} fill={MUTED}>
          {t(
            "Bridge to combinations — coming up soon:",
            "Combinations ka bridge — jald aa raha hai:"
          )}
        </T>
      </Fade>
      <Draw
        on={bridgeOn}
        delay={dl(7, 0.7)}
        d={arrowD(540, 362, 540, 376)}
        stroke={AMBER}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={bridgeOn} delay={dl(7, 1.2)}>
        <Chip x={bridgeX} y={380} w={bridgeW} h={56} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={22} script={false}>
          {bridgeText}
        </Chip>
      </Fade>
      <Fade on={bridgeOn} delay={dl(7, 1.8)}>
        <T x={540} y={460} size={13} fill={MUTED}>
          {t(
            "(Subtopic 3 — Combinations — starts soon)",
            "(Subtopic 3 — Combinations — jald shuru)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
