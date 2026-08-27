/**
 * C11 Ch01 · Section 10 — "Mass versus weight, and temperature scales"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,7.34,22.87,41.3,59.05,81.33,94.38,110.09]):
 *  0 anchor: two ideas trip students — mass vs weight first
 *  1 represent: mass (green, constant) vs weight (amber, variable) columns
 *  2 land: chemistry uses MASS — balances read kg/g, not N
 *  3 represent: the three temperature scales (Celsius/Kelvin/Fahrenheit)
 *  4 explain: same thing, different rulers (step size, offset)
 *  5 guardrail 1: the offset is EXACTLY 273.15
 *  6 guardrail 2: kelvin never negative — the cheapest error detector
 *  7 fine print: density depends on temperature (foreshadow)
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | anchor (script15 ink)        | T mid | x540  y95
 *  b1 | "mass"/"weight" chips        | Chip  | cx270/810 y122..152
 *  b1 | defs (12 muted script)       | T mid | cx270/810 y180
 *  b2 | consequence l1 (13 ink)      | T mid | x540  y210
 *  b2 | consequence l2 (13 green)    | T mid | x540  y238
 *  b3 | scale name (14 ink bold)     | T mid | cx200/540/880 y272
 *  b3 | scale subtitle (11 muted)    | T mid | cx200/540/880 y296
 *  b4 | ruler l1 (13 ink script)     | T mid | x540  y328
 *  b4 | ruler l2 (13 muted script)   | T mid | x540  y352
 *  b5 | guardrail 1 (14 red script)  | T mid | x540  y384
 *  b6 | guardrail 2 (14 red script)  | T mid | x540  y414
 *  b7 | fine print l1 (13 amber-drk) | T mid | x540  y446
 *  b7 | fine print l2 (12 muted)     | T mid | x540  y470
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, MUTED, AMBER, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch01Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={23} fill={RED} script>
          {t("mass vs weight, and temperature scales", "mass vs weight, aur temperature scales")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={95} size={15} fill={INK} script>
          {t(
            "two ideas trip students constantly — mass vs weight is first",
            "do baatein students ko baar baar girati hain — pehli hai mass vs weight"
          )}
        </T>
      </Fade>

      {/* beat 1 — mass (constant) vs weight (variable) */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={210} y={122} w={120} h={30} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          mass
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <Chip x={750} y={122} w={120} h={30} fill={CREAM} stroke={AMBER} textFill={INK} size={15} script={false}>
          {t("weight", "weight")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={270} y={180} size={12} fill={MUTED} script>
          {t("amount of matter · kg · NEVER changes", "amount of matter · kg · KABHI nahi badalta")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={810} y={180} size={12} fill={MUTED} script>
          {t("= mass × g · newton (N) · changes with location", "= mass × g · newton (N) · location se badalta")}
        </T>
      </Fade>

      {/* beat 2 — chemistry uses mass */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={210} size={13} fill={INK} script>
          {t(
            "mountaintop: weight ↓ slightly · Moon: weight ↓↓ a lot · mass: SAME everywhere",
            "mountaintop: weight thoda ↓ · Moon: weight bahut ↓↓ · mass: HAMESHA same"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={540} y={238} size={13} fill={GREEN} script>
          {t("chemistry uses MASS → balances read kg/g, not N", "chemistry MASS use karti hai → balances kg/g padhte hain, N nahi")}
        </T>
      </Fade>

      {/* beat 3 — the three temperature scales */}
      {[
        [200, "Celsius", t("everyday scale", "rozmarra ka scale")],
        [540, "Kelvin", t("SI absolute, 0K = abs. zero", "SI absolute, 0K = abs. zero")],
        [880, "Fahrenheit", t("a few countries", "kuch deshon mein")],
      ].map(([cx, name, sub]) => (
        <React.Fragment key={name as string}>
          <Fade on={beat >= 3} delay={dl(3, 0.3)}>
            <T x={cx as number} y={272} size={14} fill={INK} weight={700} script={false}>
              {name}
            </T>
          </Fade>
          <Fade on={beat >= 3} delay={dl(3, 1)}>
            <T x={cx as number} y={296} size={11} fill={MUTED} script>
              {sub}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 4 — same thing, different rulers */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={328} size={13} fill={INK} script>
          {t(
            "°C and K: SAME step size — only an OFFSET separates them",
            "°C aur K: SAME step size — sirf ek OFFSET alag karta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={540} y={352} size={13} fill={MUTED} script>
          {t(
            "°F steps are smaller (180°F spans 100°C) + a shifted zero",
            "°F steps chhote hain (180°F = 100°C ki range) + zero bhi khiska hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — guardrail: the exact offset */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={384} size={14} fill={RED} script>
          {t("offset = EXACTLY 273.15 (not 273!)", "offset = EXACTLY 273.15 (273 nahi!)")}
        </T>
      </Fade>

      {/* beat 6 — guardrail: kelvin never negative */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={414} size={14} fill={RED} script>
          {t(
            "K: no ° symbol, NEVER negative — negative K = arithmetic error!",
            "K: ° symbol nahi, kabhi negative nahi — negative K = arithmetic error!"
          )}
        </T>
      </Fade>

      {/* beat 7 — fine print: density depends on temperature */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={446} size={13} fill={AMBER_DARK} script>
          {t(
            "density depends on TEMPERATURE — substances expand on heating",
            "density TEMPERATURE par depend karti hai — garam hone par substances failte hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={540} y={470} size={12} fill={MUTED} script>
          {t(
            "always quoted AT a stated T (returns in Concentration Terms)",
            "hamesha ek T par quote hoti hai (Concentration Terms mein wapas aayega)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
