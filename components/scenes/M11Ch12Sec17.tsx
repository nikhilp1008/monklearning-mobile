/**
 * M11 Ch12 · Section 17 — "Deriving the standard results from scratch"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: concept — FLAGGED (three first-principle derivations packed into one board,
 * authored directly for extra scrutiny, no coordinate geometry involved — pure symbol layout).
 *
 * Three parallel mini-derivations (x^n, sin x, e^x) run FIRST PRINCIPLE (Sec15's definition)
 * to reproduce results already used since Sec3/Sec8/Sec11 — the payoff is "same four-step
 * machine, three different standard limits," landed as a 3-column comparison, then a fourth
 * column-less teaser (product rule) that needs the same add-subtract trick, one level up.
 * All exponents here are SYMBOLIC (n, h, x are variables) — plain caret text throughout
 * ("x^n", "x^(n-1)", "e^h"), per this chapter's established convention (Sec3-6), NOT true
 * Unicode superscripts (those are reserved for literal numeric exponents like x²).
 *
 * board_reveal_at_english = [0, 13.74, 30.55, 46.17, 67.24, 84.99, 101.8, 114.18] (8 beats 0-7).
 * board_reveal_at_hinglish = [0, 9.98, 23.98, 38.4, 60.59, 76.63, 91.22, 104.62].
 *
 * Beats:
 *  0(title, always-on) | "Deriving the standard results from scratch"
 *  1 | recall line: f'(x) = lim(h->0) [f(x+h)-f(x)]/h
 *  2 | COL1 (x60-350): d/dx x^n via point-form limit t->x -> n*x^(n-1)   [HIGH]
 *  3 | COL2 (x372-682): d/dx sin x via 2cos(x+h/2)sin(h/2)/h -> cos x
 *  4 | COL3 (x704-1010): d/dx e^x via e^x * (e^h-1)/h -> e^x   [HIGH]
 *  5 | divider + product-rule setup: add/subtract u(x+h)v(x)
 *  6 | product rule landed: (uv)' = uv' + vu'   [HIGH]
 *  7 | red-margin guardrail: every derivation aims to manufacture a standard limit
 *
 * Layout plan (each column: label row y150, Limit+Frac row y210, "=" + boxed result y272-310):
 *  b1 | "Recall:" + f'(x)=lim Frac      | T+Limit+Frac | x60..470  y100..120
 *  b2 | "d/dx x^n" label                | T mid  | x205 y150
 *  b2 | Limit(t->x) + Frac((t^n-x^n)/(t-x)) | Limit+Frac | x90..250 y~193..227
 *  b2 | "=" + boxed "n*x^(n-1)"         | T+Chip | x90..265 y272..310
 *  b3 | "d/dx sin x" label              | T mid  | x527 y150
 *  b3 | Limit(h->0) + Frac(2cos(x+h/2)sin(h/2)/h) | Limit+Frac | x390..670 y~193..227
 *  b3 | "=" + boxed "cos x"             | T+Chip | x480..605 y272..310
 *  b4 | "d/dx e^x" label                | T mid  | x857 y150
 *  b4 | "e^x*" + Limit(h->0) + Frac((e^h-1)/h) | T+Limit+Frac | x715..892 y~193..227
 *  b4 | "=" + boxed "e^x"               | T+Chip | x790..905 y272..310
 *  b5 | divider line                    | Draw   | x60..1010 y395
 *  b5 | product-rule label + add/subtract | T st | x60 y420/448
 *  b6 | "divide by h" + boxed (uv)'=uv'+vu' | T+Chip | x60 y480, chip y496..538
 *  b7 | red margin bar + guardrail line  | Draw+T | x60 y560..590, text y576
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
  MUTED,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { Frac, Limit } from "./math-kit";

export default function M11Ch12Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={25} fill={RED} anchor="middle" script>
          {t("Deriving the standard results from scratch", "Standard results ko scratch se derive karna")}
        </T>
      </Fade>

      {/* beat 1 — recall the first-principle definition */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={106} size={13} fill={MUTED} anchor="start">
          {t("Recall:", "Yaad:")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={130} y={106} size={15} fill={INK} anchor="start" weight={700}>
          f&apos;(x) =
        </T>
      </Fade>
      <Limit on={beat >= 1} delay={dl(1, 0.6)} x={200} y={110} size={16} condition="h → 0" anchor="start" fill={INK} />
      <Frac on={beat >= 1} delay={dl(1, 0.9)} x={300} y={110} size={16} numerator="f(x+h) − f(x)" denominator="h" width={150} fill={INK} />
      <Draw on={beat >= 1} d="M58 128 L470 128" stroke={AMBER_DARK} sw={1.2} delay={dl(1, 1.3)} />

      {/* beat 2 — COLUMN 1: d/dx x^n */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={205} y={152} size={16} fill={INK} anchor="middle" weight={700}>
          d/dx x^n
        </T>
      </Fade>
      <Limit on={beat >= 2} delay={dl(2, 0.4)} x={90} y={216} size={18} condition="t → x" anchor="start" fill={INK} />
      <Frac on={beat >= 2} delay={dl(2, 0.7)} x={195} y={216} size={18} numerator="t^n − x^n" denominator="t − x" width={110} fill={INK} />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <T x={90} y={296} size={18} fill={INK} anchor="start">
          =
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)} dim={false}>
        <Chip x={115} y={278} w={155} h={38} fill="#FCF4E0" stroke={GREEN} textFill={GREEN_DARK} size={17} script={false}>
          {"n · x^(n−1)"}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <T x={205} y={334} size={12} fill={MUTED} anchor="middle">
          {t("(the star limit, a→x)", "(star limit, a→x)")}
        </T>
      </Fade>

      {/* beat 3 — COLUMN 2: d/dx sin x */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={527} y={152} size={16} fill={INK} anchor="middle" weight={700}>
          d/dx sin x
        </T>
      </Fade>
      <Limit on={beat >= 3} delay={dl(3, 0.4)} x={390} y={216} size={17} condition="h → 0" anchor="start" fill={INK} />
      <Frac
        on={beat >= 3}
        delay={dl(3, 0.7)}
        x={575}
        y={216}
        size={17}
        numerator="2cos(x+h/2)·sin(h/2)"
        denominator="h"
        width={225}
        fill={INK}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={480} y={296} size={18} fill={INK} anchor="start">
          =
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)} dim={false}>
        <Chip x={505} y={278} w={100} h={38} fill="#FCF4E0" stroke={GREEN} textFill={GREEN_DARK} size={17} script={false}>
          cos x
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        <T x={527} y={334} size={12} fill={MUTED} anchor="middle">
          {t("(sin(h/2)/(h/2) → 1)", "(sin(h/2)/(h/2) → 1)")}
        </T>
      </Fade>

      {/* beat 4 — COLUMN 3: d/dx e^x */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={857} y={152} size={16} fill={INK} anchor="middle" weight={700}>
          d/dx e^x
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={715} y={216} size={17} fill={INK} anchor="start">
          {"e^x ·"}
        </T>
      </Fade>
      <Limit on={beat >= 4} delay={dl(4, 0.7)} x={775} y={216} size={17} condition="h → 0" anchor="start" fill={INK} />
      <Frac on={beat >= 4} delay={dl(4, 1)} x={862} y={216} size={17} numerator="e^h − 1" denominator="h" width={80} fill={INK} />
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <T x={790} y={296} size={18} fill={INK} anchor="start">
          =
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.7)} dim={false}>
        <Chip x={815} y={278} w={90} h={38} fill="#FCF4E0" stroke={GREEN} textFill={GREEN_DARK} size={17} script={false}>
          e^x
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <T x={857} y={334} size={12} fill={MUTED} anchor="middle">
          {t("(the e-junction, → 1)", "(e-junction, → 1)")}
        </T>
      </Fade>

      {/* beat 5 — divider + product-rule setup */}
      <Draw on={beat >= 5} d="M60 395 L1010 395" stroke={MUTED} sw={1.2} delay={dl(5, 0)} />
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={60} y={422} size={15} fill={INK} anchor="start" weight={600}>
          {t("Product rule: add & subtract u(x+h)v(x):", "Product rule: u(x+h)v(x) add & subtract kijiye:")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={60} y={450} size={14} fill={INK} anchor="start">
          {"= u(x+h)[v(x+h) − v(x)] + v(x)[u(x+h) − u(x)]"}
        </T>
      </Fade>

      {/* beat 6 — land the product rule */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={60} y={482} size={13} fill={MUTED} anchor="start">
          {t("Divide by h, take the limit:", "h se divide kijiye, limit lijiye:")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)} dim={false}>
        <Chip x={60} y={498} w={260} h={42} fill="#FCF4E0" stroke={GREEN} textFill={GREEN_DARK} size={20} script={false}>
          {"(uv)' = uv' + vu'"}
        </Chip>
      </Fade>

      {/* beat 7 — closing guardrail */}
      <Draw on={beat >= 7} d="M60 560 L60 590" stroke={RED} sw={3} delay={dl(7, 0)} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={76} y={578} size={15} fill={RED} anchor="start" weight={700}>
          {t(
            "Every derivation's goal: manufacture a standard limit.",
            "Har derivation ka goal: ek standard limit banaana."
          )}
        </T>
      </Fade>
    </Scene>
  );
}
