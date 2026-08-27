/**
 * B11 Ch01 · Section 1 — "The two-gate defining-property test"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.16, 22.69, 48.31, 58.05, 86.62, 99.65, 126.64]):
 *  0 title fades in + drawn underline · hook quote (sparrow/stone, slippery)
 *  1 3 counter-example chips (car/river/crystal, non-living but active) +
 *    drawn grouping bracket + the valid-ID-card RULE (green quote)
 *  2 DIAGRAM: two empty gate boxes open — "FAILS the test" (red) /
 *    "PASSES the test" (green) — the persistent diagram for the rest
 *  3 the two failure modes, one compact red line + drawn cross icon
 *    [dim@4 — superseded once candidates start being sorted]
 *  4 five candidate chips queue up above the gates + drawn queue rail
 *  5 THE PAYOFF: verdict lands inside each box (Growth✗/Reproduction✗ ·
 *    Metabolism✓/Cellular organisation✓/Consciousness✓) + green ring on PASSES
 *  6 framing: the question splits in two (technical ✓ we chase / philosophical)
 *  7 closing whisper: exam secret — pure reasoning, run the test in your head
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script26 red)        | T mid  | x?..?  y30..77  (bl64, longer=HI)
 *  b0 | underline swoosh            | Draw   | y90  x360..720
 *  b0 | hook quote (script19 muted) | T mid  | x?..?  y115..150 (bl140) [dim@2]
 *  b1 | 3 example chips (script14)  | Chip   | y172..204  x125..295/455..625/785..955 [dim@2]
 *  b1 | grouping bracket            | Draw   | y208  x130..950 [dim@2]
 *  b1 | rule (script16 green)       | T mid  | x?..?  y213..242 (bl234) [dim@2]
 *  b2 | FAILS box (red)             | Draw   | x110..470  y270..450
 *  b2 | "FAILS the test" (18 red)   | T mid  | x222..358  y286..306 (bl300)
 *  b2 | PASSES box (green)          | Draw   | x610..970  y270..450
 *  b2 | "PASSES the test" (18 grn)  | T mid  | x718..862  y286..306 (bl300)
 *  b3 | cross icon                  | Draw   | x40..62  y172..194 [dim@4]
 *  b3 | statement (script15 red)    | T st   | x68..?  y173..201 (bl193) [dim@4]
 *  b4 | queue rail                  | Draw   | y214  x155..780
 *  b4 | 5 candidate chips (14 anek) | Chip   | y180..210  x160/246/382/498/644
 *  b5 | "Growth ✗" (16 red)         | T mid  | x230..350  y333..350 (bl345)
 *  b5 | "Reproduction ✗" (16 red)   | T mid  | x230..350  y373..390 (bl385)
 *  b5 | "Metabolism ✓" (15 green)   | T mid  | x745..835  y328..345 (bl340)
 *  b5 | "Cellular organisation ✓"   | T mid  | x712..868  y365..379 (bl375)
 *  b5 | "Consciousness ✓" (15 grn)  | T mid  | x730..850  y398..415 (bl410)
 *  b5 | ring on PASSES header       | Draw   | c(790,293) rx86 ry18
 *  b6 | heading (script16 ink)      | T mid  | x?..?  y467..496 (bl488)
 *  b6 | underline                   | Draw   | y505  x400..680
 *  b6 | chip "technical…" (13 grn)  | Chip   | x180..430  y512..544
 *  b6 | chip "philosophical…" (mut) | Chip   | x590..870  y512..544 dashed
 *  b7 | whisper (script14 amber-d)  | T mid  | x?..?  y554..580 (bl572)
 *  b7 | closing swoosh              | Draw   | y588  x460..620
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
  ringD,
  crossD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const CANDIDATES: [number, number, string][] = [
  [160, 70, "Growth"],
  [246, 120, "Reproduction"],
  [382, 100, "Metabolism"],
  [498, 130, "Cellular org."],
  [644, 130, "Consciousness"],
];

export default function B11Ch01Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title + underline + hook quote */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("is it alive? — the two-gate test", "ye 'alive' hai kya? — two-gate test")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2)}
        d="M 360 90 C 460 86, 620 86, 720 90"
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />
      <Fade on={beat >= 0} dim={beat >= 2} delay={dl(0, 3)}>
        <T x={540} y={140} size={19} fill={MUTED} script>
          {t(
            "sparrow — yes. stone — no. but why, exactly?",
            "sparrow — yes; stone — no. par exactly kyun?"
          )}
        </T>
      </Fade>

      {/* beat 1 — non-living counter-examples + the rule */}
      <Fade on={beat >= 1} dim={beat >= 2} delay={dl(1, 0.3)}>
        <Chip x={125} y={172} w={170} h={32} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script>
          {t("car — moves", "car — chalti hai")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} dim={beat >= 2} delay={dl(1, 0.9)}>
        <Chip x={455} y={172} w={170} h={32} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script>
          {t("river — flows", "river — behti hai")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} dim={beat >= 2} delay={dl(1, 1.5)}>
        <Chip x={785} y={172} w={170} h={32} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script>
          {t("crystal — grows", "crystal — badhta hai")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} dim={beat >= 2} delay={dl(1, 2.3)}>
        <Draw on={true} d="M 130 208 L 950 208" stroke={MUTED} sw={1.6} dur={0.6} />
      </Fade>
      <Fade on={beat >= 1} dim={beat >= 2} delay={dl(1, 3.2)}>
        <T x={540} y={234} size={16} fill={GREEN} script>
          {t(
            "valid ID card = EVERY living has it, NO non-living does",
            "valid ID card = HAR living mein ho, KOI non-living mein nahi"
          )}
        </T>
      </Fade>

      {/* beat 2 — the two gates open, empty */}
      <Draw on={beat >= 2} delay={dl(2, 0.3)} d="M 110 270 h 360 v 180 h -360 z" stroke={RED} sw={2.4} dur={1} />
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={290} y={300} size={18} fill={RED} weight={700}>
          {t("FAILS the test", "FAILS the test")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2)} d="M 610 270 h 360 v 180 h -360 z" stroke={GREEN} sw={2.4} dur={1} />
      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <T x={790} y={300} size={18} fill={GREEN} weight={700}>
          {t("PASSES the test", "PASSES the test")}
        </T>
      </Fade>

      {/* beat 3 — the two failure modes */}
      <Fade on={beat >= 3} dim={beat >= 4} delay={dl(3, 0.3)}>
        <Draw on={true} d={crossD(44, 176, 14, 14)} stroke={RED} sw={2} dur={0.4} />
      </Fade>
      <Fade on={beat >= 3} dim={beat >= 4} delay={dl(3, 1)}>
        <T x={68} y={193} size={15} fill={RED} script anchor="start">
          {t(
            "disqualified if: a non-living thing ALSO has it, or a living thing LACKS it",
            "disqualified: koi non-living thing bhi rakhta ho, YA koi living thing na rakhta ho"
          )}
        </T>
      </Fade>

      {/* beat 4 — five candidates queue up */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d="M 155 214 L 780 214" stroke={MUTED} sw={1.4} dur={1.2} />
      {CANDIDATES.map(([x, w, label], i) => (
        <Fade key={label} on={beat >= 4} delay={dl(4, 1.8 + i * 0.8)}>
          <Chip x={x} y={180} w={w} h={30} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
            {label}
          </Chip>
        </Fade>
      ))}

      {/* beat 5 — the payoff: verdicts land inside the gates */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={290} y={345} size={16} fill={RED} weight={600}>
          Growth ✗
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.1)}>
        <T x={790} y={340} size={15} fill={GREEN} weight={600}>
          Metabolism ✓
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.9)}>
        <T x={290} y={385} size={16} fill={RED} weight={600}>
          Reproduction ✗
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.7)}>
        <T x={790} y={375} size={13} fill={GREEN} weight={600}>
          Cellular organisation ✓
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.5)}>
        <T x={790} y={410} size={15} fill={GREEN} weight={600}>
          Consciousness ✓
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 4.5)} d={ringD(790, 293, 86, 18)} stroke={GREEN} sw={2.6} dur={0.8} />

      {/* beat 6 — the real question splits in two */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={488} size={16} fill={INK} script>
          {t("the real question splits in two:", "asli sawaal do hisso mein bat jata hai:")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.3)} d="M 400 505 C 460 502, 620 502, 680 505" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 2.1)}>
        <Chip x={180} y={512} w={250} h={32} fill={CREAM} stroke={GREEN} textFill={GREEN} size={13} script={false}>
          {t("technical Q ✓ — we chase this", "technical Q ✓ — hum yahi chase karte hain")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.9)}>
        <Chip x={590} y={512} w={280} h={32} fill={CREAM} stroke={MUTED} textFill={MUTED} size={13} script={false} dashed>
          {t("philosophical Q — not this course", "philosophical Q — is course mein nahi")}
        </Chip>
      </Fade>

      {/* beat 7 — closing whisper: the exam secret */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={572} size={14} fill={AMBER_DARK} script>
          {t(
            "exam secret: run the 2-gate test in your head — answer in seconds",
            "exam secret: dimaag mein 2-gate test chalao — answer seconds mein"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2)} d="M 460 588 C 500 585, 580 585, 620 588" stroke={AMBER_DARK} sw={1.8} dur={0.4} />
    </Scene>
  );
}
