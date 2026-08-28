/**
 * Ch08 · Section 6 — "Deriving Young's modulus of a hanging wire"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: English beats 1..4 are ~1s each (compressed narration timing) —
 * elements there use short delays (≤1.35s) and settle near-instantly; the
 * Hinglish track has normal pacing and uses the same staggers.
 *
 * ONE persistent diagram on the left (hatched ceiling → clamp → wire → mass,
 * annotated as the derivation needs it) feeds a derivation chain that builds
 * top-to-bottom on the right: F = Mg → σ, ε → Y = σ/ε → boxed hero result.
 *
 * Beats (en [0, 6.74, 7.74, 8.74, 9.74, 10.74, 20.64, 32.33] ·
 *        hi [0, 7.51, 16.3, 28.25, 38.06, 45.65, 53.67, 64.34]):
 *  0 hatched ceiling + clamp drawn — the setup starts
 *  1 the arrangement: wire (natural length L, radius r) + mass M hung on it
 *  2 free body: green restoring pull up, weight arrow down ⇒ F = Mg
 *  3 dashed natural-length ref + ΔL bracket, cross-section hatch A = πr²,
 *    and the two ratios σ = Mg/πr² · ε = ΔL/L
 *  4 brace under both ratios funnels into Y = σ/ε (the definition)
 *  5 the hero box: Y = MgL / (πr² ΔL)
 *  6 red margin-bar note — Searle's experiment working formula
 *  7 closing line + drawn underline
 *
 * Layout plan — text boxes are MEASURED (getBoundingClientRect, viewBox units,
 * longer language shown); strokes are geometric:
 *  title (script 24, red, ALWAYS ON) cx540 bl64 (x310..769 y37.9..76.5)
 *  b0 | ceiling hatch        | Draw | x144..360 y94..106
 *  b0 | clamp block          | Draw | x228..272 y106..126
 *  b0 | goal line (script16) | T mid| cx760 bl116 (x627..893 y99..123.9)
 *  b1 | wire rect            | Draw | x238..262 y126..322
 *  b1 | L dimension          | Draw | x176..188 y126..296
 *  b1 | "L" (18)             | T end| x156.7..166 bl216 (y200..219.4)
 *  b1 | mass block           | Draw | x204..296 y322..370
 *  b1 | "M" (24)             | T mid| x240..260 bl354 (y332.5..358.5)
 *  b1 | radius mark          | Draw | x250..262 y188..212
 *  b1 | "r" (13)             | T st | x272..277 bl205 (y193.7..207.3)
 *  b2 | weight arrow         | Draw | x244..256 y378..424
 *  b2 | "F = Mg" (16)        | T st | x266..311 bl406 (y391.3..409.4)
 *  b2 | restoring arrow      | Draw | x315..325 y262..322
 *  b2 | "restoring pull"(13) | T st | x332..427 bl288 (y276.7..290.5)
 *  b2 | balance line (scr17) | T mid| cx760 bl168 (x593..927 y149.9..177.1)
 *  b3 | dashed natural ref   | line | x200..270 y296
 *  b3 | ΔL bracket           | Draw | x272..284 y296..322
 *  b3 | "ΔL" (14)            | T st | x293.7..310 bl314 (y301.5..316.3)
 *  b3 | section hatch        | Draw | x238..260 y150..170
 *  b3 | leader               | Draw | x268..294 y162
 *  b3 | "A = πr²" (14)       | T st | x300..340.5 bl167 (y154.5..169.3)
 *  b3 | "σ = Mg / πr²" (26)  | T mid| cx650 bl228 (x584..716 y204.2..233.7)
 *  b3 | "ε = ΔL / L" (26)    | T mid| cx880 bl228 (x830..930 y204.2..233.7)
 *  b3 | "stress" (12)        | T mid| x634..666 bl260 (y248.7..262.3)
 *  b3 | "strain" (12)        | T mid| x865..895 bl260 (y248.7..262.3)
 *  b4 | brace                | Draw | x650..870 y272..280
 *  b4 | funnel arrow         | Draw | x755..765 y280..292
 *  b4 | "Y = σ / ε" (26)     | T mid| x716..804 bl322 (y298.2..327.7)
 *  b4 | "by definition" (12) | T st | x860..926 bl322 (y310.7..324.3)
 *  b5 | hero box             | Draw | x580..940 y344..420
 *  b5 | hero formula (34)    | T mid| x630..890 bl390 (y359.4..396.8)
 *  b5 | master-result (scr15)| T mid| cx760 bl452 (x641..889 y436.1..459.9)
 *  b6 | margin bar           | Draw | x60 y512..540
 *  b6 | note (script 15)     | T st | x76..444 bl532 (y516.1..539.9)
 *  b7 | closing (script 15)  | T mid| cx540 bl574 (x349..732 y558.1..581.9)
 *  b7 | underline            | Draw | x330..750 y585..591
 */

import React from "react";
import { Line } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on, visible on the blank board before play */}
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t(
            "deriving Young's modulus — a hanging wire",
            "Young's modulus derive — hanging wire"
          )}
        </T>
      </Fade>

      {/* beat 0 — the support: hatched ceiling and the clamp */}
      <Draw
        on={beat >= 0}
        delay={dl(0, 0.3)}
        d="M150 106 H360 M156 106 L144 94 M180 106 L168 94 M204 106 L192 94 M228 106 L216 94 M252 106 L240 94 M276 106 L264 94 M300 106 L288 94 M324 106 L312 94 M348 106 L336 94"
        stroke={INK}
        sw={2.4}
        dur={1.1}
      />
      <Fade on={beat >= 0} delay={0}>
        <Draw
          on={beat >= 0}
          delay={dl(0, 1.6)}
          d="M228 106 h44 v20 h-44 z"
          stroke={INK}
          sw={2.4}
          dur={0.5}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 2.4)}>
        <T x={760} y={116} size={16} fill={MUTED} script>
          {t(
            "simplest setup: one wire, one mass",
            "sabse simple setup: ek wire, ek mass"
          )}
        </T>
      </Fade>

      {/* beat 1 — the arrangement: wire of length L, radius r, mass M */}
      <Fade on={beat >= 1} delay={0}>
        <Draw
          on={beat >= 1}
          delay={dl(1, 0.1)}
          d="M238 126 h24 v196 h-24 z"
          stroke={INK}
          sw={2.4}
          dur={0.7}
          fill={CREAM}
        />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.5)}
        d="M176 126 H188 M182 126 V296 M176 296 H188"
        stroke={INK}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={166} y={216} size={18} fill={INK} weight={800} anchor="end">
          L
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={0}>
        <Draw
          on={beat >= 1}
          delay={dl(1, 0.85)}
          d="M204 322 h92 v48 h-92 z"
          stroke={INK}
          sw={2.4}
          dur={0.5}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.05)}>
        <T x={250} y={354} size={24} fill={INK} weight={800}>
          M
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.2)}
        d="M250 188 V212 M250 200 H262 M262 195 V205"
        stroke={AMBER_DARK}
        sw={1.6}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.35)}>
        <T x={272} y={205} size={13} fill={AMBER_DARK} weight={700} anchor="start">
          r
        </T>
      </Fade>

      {/* beat 2 — equilibrium: the pull up balances the weight, so F = Mg */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.1)}
        d={arrowD(250, 378, 250, 424)}
        stroke={INK}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 0.35)}>
        <T x={266} y={406} size={16} fill={INK} weight={800} anchor="start">
          F = Mg
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.6)}
        d={arrowD(320, 322, 320, 262)}
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 0.85)}>
        <T x={332} y={288} size={13} fill={GREEN} weight={700} anchor="start">
          {t("restoring pull", "wire ka upar pull")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={760} y={168} size={17} fill={GREEN} script>
          {t(
            "in equilibrium: pull up = weight down",
            "equilibrium mein: upar pull = neeche weight"
          )}
        </T>
      </Fade>

      {/* beat 3 — the two ratios: stress on the section, strain along the wire */}
      <Fade on={beat >= 3} delay={dl(3, 0.05)}>
        <Line
          x1={200}
          y1={296}
          x2={270}
          y2={296}
          stroke={MUTED}
          strokeWidth={1.6}
          strokeDasharray="6 6"
        />
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.15)}
        d="M272 296 H284 M278 296 V322 M272 322 H284"
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.3}
      />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={294} y={314} size={14} fill={AMBER_DARK} weight={700} anchor="start">
          ΔL
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.45)}
        d="M244 150 L238 170 M252 150 L246 170 M260 150 L254 170"
        stroke={AMBER_DARK}
        sw={2}
        dur={0.3}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.6)}
        d="M268 162 H294"
        stroke={AMBER_DARK}
        sw={1.4}
        dur={0.2}
      />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={300} y={167} size={14} fill={AMBER_DARK} weight={700} anchor="start">
          A = πr²
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.85)}>
        <T x={650} y={228} size={26} fill={INK} weight={800}>
          σ = Mg / πr²
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={880} y={228} size={26} fill={INK} weight={800}>
          ε = ΔL / L
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={650} y={260} size={12} fill={MUTED}>
          {t("stress", "stress")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={880} y={260} size={12} fill={MUTED}>
          {t("strain", "strain")}
        </T>
      </Fade>

      {/* beat 4 — divide one by the other: that IS Young's modulus */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.1)}
        d="M650 272 L650 280 L870 280 L870 272"
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.4}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.35)}
        d={arrowD(760, 280, 760, 292)}
        stroke={AMBER_DARK}
        sw={2}
        dur={0.25}
      />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={760} y={322} size={26} fill={AMBER_DARK} weight={800}>
          Y = σ / ε
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.85)}>
        <T x={860} y={322} size={12} fill={MUTED} anchor="start">
          {t("by definition", "definition se")}
        </T>
      </Fade>

      {/* beat 5 — the hero result */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.3)}
        d="M592 344 h336 q12 0 12 12 v52 q0 12 -12 12 h-336 q-12 0 -12 -12 v-52 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.8}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={760} y={390} size={34} fill={INK} weight={800}>
          Y = MgL / (πr² ΔL)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.8)}>
        <T x={760} y={452} size={15} fill={GREEN} script>
          {t(
            "the master result for a loaded wire",
            "loaded wire ka master result"
          )}
        </T>
      </Fade>

      {/* beat 6 — where this formula actually gets used */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M60 512 L60 540" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={76} y={532} size={15} fill={RED} script anchor="start">
          {t(
            "this is the working formula behind Searle's experiment",
            "yeh Searle's experiment ki working equation hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — what the formula contains, and what it does not */}
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={540} y={574} size={15} fill={GREEN} script>
          {t(
            "only material + geometry inputs — not how it's loaded",
            "sirf material aur geometry inputs — loading se farq nahi"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.5)}
        d="M330 588 C430 585, 650 591, 750 587"
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
    </Scene>
  );
}
