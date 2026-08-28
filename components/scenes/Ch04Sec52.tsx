/**
 * Ch04 · Section 52 — "Derivation: maximum safe speed with friction"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 17.3, 42.2, 58.3, 83.1, 108.0, 132.8, 157.6, 182.4]):
 *  0 title
 *  1 figure: banked road, N, mg, friction DOWN the slope (right column mirrors reasoning)
 *  2 three forces, resolve — same logic as before
 *  3 vertical equation (1)
 *  4 horizontal equation (2)
 *  5 hero box: v_max formula
 *  6 v_min mirror-image reasoning (friction flips up the slope)
 *  7 hero box: v_min formula
 *  8 red margin: μ = 0 sanity check → design speed
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52
 *  L fig | wedge M100 400 L400 400 L400 365 L140 355 Z · car x220..280 y325..355 ·
 *    N arr (250,325)→(290,255) "N"(298,247 st) · mg arr (250,340)→(250,405) "mg"(262,392 st) ·
 *    f arr (255,335)→(290,355) "μN"(298,358 st) · θ arc M152 400 Q150 384 138 382 "θ"(163,390)
 *  R col x560..1044 | b1 bl 150 / 174 · b2 bl 206 ·
 *    b3 bl 238 · b4 bl 270 · b5 box x560..1040 y296..340 bl 326
 *    b6 bl 372 / 396 · b7 box x560..1040 y420..464 bl 450
 *  b8 | bar x66 y500..585 · lines st x84 bl 520 / 546 / 572
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec52({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={20} fill={INK} script>
          {t(
            "CBSE Derivation — maximum safe speed with friction",
            "CBSE Derivation — friction ke saath maximum safe speed"
          )}
        </T>
      </Fade>

      {/* beat 1 — the figure + friction direction reasoning */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 100 400 L 400 400 L 400 365 L 140 355 Z"
        stroke={INK}
        sw={2.4}
        dur={1}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.8)}
        d="M 220 325 h 60 v 30 h -60 z"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.4)}
        d="M 152 400 Q 150 384 138 382"
        stroke={INK}
        sw={1.8}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.8)}>
        <T x={163} y={390} size={12} fill={INK} weight={700}>
          θ
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.4)}
        d={arrowD(250, 325, 290, 255)}
        stroke={GREEN}
        sw={2.8}
        dur={0.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 4.2)}
        d={arrowD(250, 340, 250, 405)}
        stroke={RED}
        sw={2.8}
        dur={0.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 5)}
        d={arrowD(255, 335, 290, 355)}
        stroke={AMBER}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 5.6)}>
        <T x={298} y={247} size={13} fill={GREEN} weight={700} anchor="start">
          N
        </T>
        <T x={262} y={392} size={13} fill={RED} weight={700} anchor="start">
          mg
        </T>
        <T x={298} y={358} size={12} fill={AMBER_DARK} weight={700} anchor="start">
          μN
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={560} y={150} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "at v_max the car tends to skid UP and outward —",
            "v_max par car UPAR-BAHAR skid karne ko hoti —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 13)}>
        <T x={560} y={174} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "friction opposes that: it acts DOWN the slope",
            "friction uska virodh karti: slope ke NEECHE lagti"
          )}
        </T>
      </Fade>

      {/* beat 2 — three forces, resolve */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={560} y={206} size={13} fill={INK} script anchor="start">
          {t(
            "three forces: N, mg, μN — resolve all, same logic as before",
            "teen forces: N, mg, μN — sabko resolve karo, wahi tark"
          )}
        </T>
      </Fade>

      {/* beat 3 — vertical */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={560} y={238} size={14} fill={INK} weight={700} anchor="start">
          {t(
            "vertical: N(cosθ − μsinθ) = mg  ...(1)",
            "vertical: N(cosθ − μsinθ) = mg  ...(1)"
          )}
        </T>
      </Fade>

      {/* beat 4 — horizontal */}
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={560} y={270} size={14} fill={INK} weight={700} anchor="start">
          {t(
            "horizontal: N(sinθ + μcosθ) = mv_max²⁄r  ...(2)",
            "horizontal: N(sinθ + μcosθ) = mv_max²⁄r  ...(2)"
          )}
        </T>
      </Fade>

      {/* beat 5 — v_max */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 572 296 h 460 q 12 0 12 12 v 20 q 0 12 -12 12 h -460 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={802} y={326} size={17} fill={INK} weight={800}>
          v_max = √[rg(tanθ + μ)⁄(1 − μtanθ)]
        </T>
      </Fade>

      {/* beat 6 — v_min mirror reasoning */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={560} y={372} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "below v_min the car tends to slip DOWN instead —",
            "v_min se neeche car NEECHE slip karne ko hoti —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={560} y={396} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "friction flips UP the slope — same algebra, μ changes sign",
            "friction palat kar UPAR — wahi algebra, μ ka sign badla"
          )}
        </T>
      </Fade>

      {/* beat 7 — v_min */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.8)}
        d="M 572 420 h 460 q 12 0 12 12 v 20 q 0 12 -12 12 h -460 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.8)}>
        <T x={802} y={450} size={17} fill={INK} weight={800}>
          v_min = √[rg(tanθ − μ)⁄(1 + μtanθ)]
        </T>
      </Fade>

      {/* beat 8 — the sanity check */}
      <Draw on={beat >= 8} delay={dl(8, 0.6)} d="M 66 500 v 90" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={520} size={14} fill={RED} script anchor="start">
          {t(
            "sanity check: set μ = 0 in EITHER formula",
            "sanity check: DONO formula mein μ = 0 rakho"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 7)}>
        <T x={84} y={546} size={14} fill={GREEN} script anchor="start">
          {t(
            "both collapse to √(rg·tanθ) — the frictionless design speed ✓",
            "dono simat kar √(rg·tanθ) ban jaate — friction-free design speed ✓"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 13)}>
        <T x={84} y={572} size={14} fill={RED} script anchor="start">
          {t(
            "if not, a sign is flipped — caught before it cost the marks",
            "agar nahi, koi sign palta hai — marks jaane se pehle pakda"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
