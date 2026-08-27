/**
 * M11 Ch12 · Section 22 — "From grinding to the flour mill"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — OPENS subtopic 4 (Rules of Differentiation, secs 22-27), a conceptual
 * bridge after subtopic 3 (Derivatives & First Principle, secs 15-21, closed by Sec21's traps
 * grid). No worked algebra here — this section motivates WHY rules replace first-principle
 * grinding, states the chain rule, and builds the "rates cascade" intuition (gear-train / unit-
 * cancellation) that the rest of the subtopic leans on.
 *
 * board_reveal_at_english  = [0.0, 19.8, 33.37, 52.65, 68.52, 85.5, 104.28, 120.41] (8 beats 0-7).
 * board_reveal_at_hinglish = [0.0, 13.99, 27.65, 44.37, 58.62, 74.5, 92.84, 107.01].
 * Generous beat durations (13-20s) — beat4 (the cascade diagram) uses a multi-step staged build.
 *
 * Single-column, vertically stacked layout (no diagram needs two columns here): each beat's
 * group sits in its own horizontal band, separated top-to-bottom, centered on x540.
 *
 * Beats:
 *  0(title, always-on) | "From grinding to the flour mill"
 *  1 | seq2 — organizing question (two lines, amber underline)
 *  2 | seq3 — addition friendly (ink) / multiplication is the surprise (amber, underlined)
 *  3 | seq4 — chain rule stated: dy/dx = dy/du · du/dx (ink, underlined)
 *  4 | seq5 — THE cascade diagram: x→u→y nodes, rate-labeled arrows (du/dx=2, dy/du=3),
 *      landed result chip "dy/dx = 3 × 2 = 6"
 *  5 | seq6 — currency analogy: "Or currency: ₹/$ × $/€ = ₹/€" with both $ struck (amber,
 *      valid-cancellation ticks, not red — echoes the du "cancelling")
 *  6 | seq7 — red-margin HIGH guardrail: chain rule's differentiability condition
 *  7 | seq8 — closing pro-tip banner (amber): simplify before reaching for a rule
 *
 * Layout plan (x-range × y-range per element):
 *  b1 | L1 "Every rule answers..." (16,ink,mid)   | T mid | x540±~264(en)/~140(hi) y87.5..104.5(bl100)
 *  b1 | L2 "How does the derivative..." (16,ink)  | T mid | x320..760(en)/356..724(hi) y113.5..131(bl126)
 *  b1 | underline (amber)                          | Draw  | x320..760(en)/356..724(hi) y142
 *  b2 | L1 "Addition is friendly..." (15,ink)      | T mid | x540±~176(en)/~150(hi) y162.3..168.65(bl164)
 *  b2 | L2 "Multiplication...surprise" (17,amber)  | T mid | x383..697(en)/396..684(hi) y186.7..205.3(bl200)
 *  b2 | underline (amber)                          | Draw  | x383..697(en)/396..684(hi) y214
 *  b3 | "dy/dx =" (26,ink,end)                     | T end | x407..505 y225.7..254.1(bl246)
 *  b3 | "dy/du · du/dx" (26,ink,start)              | T st  | x520..702 y225.7..254.1(bl246)
 *  b3 | underline (amber)                           | Draw  | x405..704 y260
 *  b4 | caption "Rates cascade" (16,amber,mid)      | T mid | x540±~110 y271.5..289(bl284)
 *  b4 | node X circle r26                            | Draw  | circleD(220,330,26) box194..246 y304..356
 *  b4 | label "x" (20,ink)                           | T mid | x220 y~317..338(bl335.2)
 *  b4 | arrow1 x→u                                    | Draw  | x254..509 y330
 *  b4 | label "du/dx = 2" (16,amber,mid)              | T mid | x345.5..417.5 y301.5..319(bl314)
 *  b4 | node U circle r26                             | Draw  | circleD(540,330,26) box514..566 y304..356
 *  b4 | label "u" (20,ink)                            | T mid | x540 y~317..338(bl335.2)
 *  b4 | arrow2 u→y                                     | Draw  | x574..829 y330
 *  b4 | label "dy/du = 3" (16,amber,mid)               | T mid | x665.5..737.5 y301.5..319(bl314)
 *  b4 | node Y circle r26                              | Draw  | circleD(860,330,26) box834..886 y304..356
 *  b4 | label "y" (20,ink)                             | T mid | x860 y~317..338(bl335.2)
 *  b4 | result chip "dy/dx = 3×2=6" (18,green)         | Chip  | x451..630 y372..410
 *  b5 | "Or currency:" (15,ink,start)                  | T st  | x394..~491 y420.3..436.65(bl432)
 *  b5 | expression tokens ₹/$ × $/€ = ₹/€ (15,ink,st)  | T st  | x508..694 y420.3..436.65(bl432)
 *  b5 | crossD over first "$"                           | Draw  | crossD(538.5,420.3,7.5,16.35)
 *  b5 | crossD over second "$"                          | Draw  | crossD(585.5,420.3,7.5,16.35)
 *  b6 | red bar                                          | Draw  | x140 y454..510
 *  b6 | L1 "Chain rule needs..." (16,red,st)             | T st  | x160..528(en)/608(hi) y461.5..478.5(bl474)
 *  b6 | L2 "inner g at x..." (16,red,st)                 | T st  | x160..384(en)/504(hi) y487.5..504.5(bl500)
 *  b7 | banner rect (amber)                              | Draw  | x160..920 y526..566
 *  b7 | banner text (15,amber,mid)                       | T mid | x540±~250(en)/~225(hi) y544..556(bl551)
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
  arrowD,
  Scene,
} from '@/components/scenes/kit';
import { circleD } from "./math-kit";

export default function M11Ch12Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={26} fill={RED} anchor="middle" script>
          {t("From grinding to the flour mill", "Haath ki chakki se aata mill tak")}
        </T>
      </Fade>

      {/* beat 1 — the organizing question */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={100} size={16} fill={INK} anchor="middle" weight={600}>
          {t("Every rule answers one question:", "Har rule ek hi sawaal ka jawab deta hai:")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={540} y={126} size={16} fill={INK} anchor="middle" weight={700}>
          {t(
            "How does the derivative meet an arithmetic operation?",
            "Derivative, ek operation se kaise milta hai?"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        d={en ? "M320 142 L760 142" : "M356 142 L724 142"}
        stroke={AMBER_DARK}
        sw={1.6}
        delay={dl(1, 1.0)}
        dur={0.6}
      />

      {/* beat 2 — addition is friendly, multiplication is the surprise */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={164} size={15} fill={INK} anchor="middle" weight={600}>
          {t("Addition is friendly — derivatives just add.", "Addition friendly — bas jud jaate hain.")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={540} y={200} size={17} fill={AMBER_DARK} anchor="middle" weight={800}>
          {t("Multiplication is the first surprise.", "Multiplication pehla surprise hai.")}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        d={en ? "M383 214 L697 214" : "M396 214 L684 214"}
        stroke={AMBER_DARK}
        sw={1.6}
        delay={dl(2, 1.1)}
        dur={0.6}
      />

      {/* beat 3 — the chain rule, stated */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={505} y={246} size={26} fill={INK} anchor="end" weight={800}>
          dy/dx =
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={520} y={246} size={26} fill={INK} anchor="start" weight={800}>
          dy/du · du/dx
        </T>
      </Fade>
      <Draw on={beat >= 3} d="M405 260 L704 260" stroke={AMBER_DARK} sw={1.6} delay={dl(3, 1.0)} dur={0.6} />

      {/* beat 4 — THE cascade diagram: x -> u -> y, rate-labeled arrows, worked example */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={284} size={16} fill={AMBER_DARK} anchor="middle" weight={800}>
          {t("Rates cascade", "Rates ka cascade")}
        </T>
      </Fade>

      <Draw on={beat >= 4} d={circleD(220, 330, 26)} stroke={INK} sw={2.2} delay={dl(4, 0.5)} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={220} y={335.2} size={20} fill={INK} anchor="middle" weight={800}>
          x
        </T>
      </Fade>

      <Draw on={beat >= 4} d={arrowD(254, 330, 509, 330)} stroke={INK} sw={2.2} delay={dl(4, 1.4)} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <T x={381.5} y={314} size={16} fill={AMBER_DARK} anchor="middle" weight={800}>
          du/dx = 2
        </T>
      </Fade>

      <Draw on={beat >= 4} d={circleD(540, 330, 26)} stroke={INK} sw={2.2} delay={dl(4, 2.9)} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 3.3)}>
        <T x={540} y={335.2} size={20} fill={INK} anchor="middle" weight={800}>
          u
        </T>
      </Fade>

      <Draw on={beat >= 4} d={arrowD(574, 330, 829, 330)} stroke={INK} sw={2.2} delay={dl(4, 3.8)} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 4.8)}>
        <T x={701.5} y={314} size={16} fill={AMBER_DARK} anchor="middle" weight={800}>
          dy/du = 3
        </T>
      </Fade>

      <Draw on={beat >= 4} d={circleD(860, 330, 26)} stroke={INK} sw={2.2} delay={dl(4, 5.3)} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 5.7)}>
        <T x={860} y={335.2} size={20} fill={INK} anchor="middle" weight={800}>
          y
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 6.2)}>
        <Chip x={451} y={372} w={179} h={38} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={18} script={false}>
          dy/dx = 3 × 2 = 6
        </Chip>
      </Fade>

      {/* beat 5 — the currency analogy, a compact unit-cancellation line */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={394} y={432} size={15} fill={INK} anchor="start" weight={700}>
          {t("Or currency:", "Ya currency:")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={508} y={432} size={15} fill={INK} anchor="start" weight={800}>
          ₹/
        </T>
        <T x={539} y={432} size={15} fill={INK} anchor="start" weight={800}>
          $
        </T>
        <T x={562} y={432} size={15} fill={INK} anchor="start" weight={800}>
          ×
        </T>
        <T x={586} y={432} size={15} fill={INK} anchor="start" weight={800}>
          $/
        </T>
        <T x={617} y={432} size={15} fill={INK} anchor="start" weight={800}>
          €
        </T>
        <T x={640} y={432} size={15} fill={INK} anchor="start" weight={800}>
          =
        </T>
        <T x={664} y={432} size={15} fill={INK} anchor="start" weight={800}>
          ₹/€
        </T>
      </Fade>
      <Draw on={beat >= 5} d={crossD(538.5, 420.3, 7.5, 16.35)} stroke={AMBER_DARK} sw={1.8} delay={dl(5, 1.3)} dur={0.4} />
      <Draw on={beat >= 5} d={crossD(585.5, 420.3, 7.5, 16.35)} stroke={AMBER_DARK} sw={1.8} delay={dl(5, 1.7)} dur={0.4} />

      {/* beat 6 — red-margin HIGH guardrail: chain rule's differentiability condition */}
      <Draw on={beat >= 6} d="M140 454 L140 510" stroke={RED} sw={3} delay={dl(6, 0)} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={160} y={474} size={16} fill={RED} anchor="start" weight={800}>
          {t(
            "Chain rule needs both links differentiable —",
            "Chain rule ke dono links differentiable hone chahiye —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.3)}>
        <T x={160} y={500} size={16} fill={RED} anchor="start" weight={800}>
          {t("inner g at x, outer f at u.", "andar wala g, x par; bahar wala f, u par.")}
        </T>
      </Fade>

      {/* beat 7 — closing pro-tip: simplify before reaching for a rule */}
      <Draw
        on={beat >= 7}
        d="M160 526 L920 526 L920 566 L160 566 Z"
        stroke={AMBER_DARK}
        sw={2.2}
        delay={dl(7, 0)}
        dur={0.7}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.0)}>
        <T x={540} y={551} size={15} fill={AMBER_DARK} anchor="middle" weight={700}>
          {t(
            "Don't reach for a rule when algebra is faster — simplify first.",
            "Jab algebra tez ho, rule mat uthao — pehle simplify karo."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
