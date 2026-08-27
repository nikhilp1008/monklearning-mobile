/**
 * M11 Ch03 · Section 5 — "Angular motion and the shared-arc ratio"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples — two independent examples, side by side columns.
 *
 * Beats (board_reveal_at_english [0, 5.29, 17.15, 27.31, 40.62, 45.14, 63.83, 74.24]):
 *  0 Ex3 heading: a spinning wheel
 *  1 360 rpm = 360/60 = 6 rev/s; each rev = 2π
 *  2 formula: ω = 6×2π = 12π ≈ 37.7 rad/s (boxed)
 *  3 red-margin: ω feeds into v = rω
 *  4 Ex4 heading: equal arcs in two circles
 *  5 same arc: r1θ1 = r2θ2, angles as ratio → degrees fine
 *  6 formula: r1/r2 = θ2/θ1 = 75/60 = 5/4 (boxed)
 *  7 red-margin guardrail (high): bigger angle, same arc ⇒ smaller radius (inverse trap)
 *
 * Layout plan — left column (Ex3) x60-460, right column (Ex4) x580-980, mirrored:
 *  b0 | "Example 3..." (17,amber,w700)   | T st | x60..340   y104..119 (bl 110)
 *  b0 | underline                        | Draw | x60..340  y118
 *  b1 | "360 rpm = 360/60 = 6 rev/s" (16)| T st | x60..330   y139..151 (bl 145)
 *  b1 | "each rev = 2π" (16)             | T st | x60..210   y166..178 (bl 172)
 *  b2 | chip "ω = 6×2π = 12π ≈37.7 rad/s"| Chip | x60..460   y205..253
 *  b3 | margin bar (red)                 | Draw | x60  y275..305
 *  b3 | note (13,red)                    | T st | x76..455   y288..302 (bl 297)
 *  b4 | "Example 4..." (17,amber,w700)   | T st | x580..903  y104..119 (bl 110)
 *  b4 | underline                        | Draw | x580..903 y118
 *  b5 | "same arc: r1θ1 = r2θ2" (16)     | T st | x580..816  y139..151 (bl 145)
 *  b5 | "ratio → degrees fine" (16)      | T st | x580..800  y166..178 (bl 172)
 *  b6 | chip "r1/r2=θ2/θ1=75/60=5/4"     | Chip | x580..920  y205..253
 *  b7 | margin bar (red)                 | Draw | x580  y275..317
 *  b7 | guardrail line1 (14,red,w700)    | T st | x596..980  y283..297 (bl 290)
 *  b7 | guardrail line2 (14,red,w700)    | T st | x596..930  y300..314 (bl 307)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch03Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={23} fill={RED} anchor="middle" script>
          {t("Angular Motion and the Shared-Arc Ratio", "Angular Motion aur Shared-Arc Ratio")}
        </T>
      </Fade>

      {/* beat 0 — Example 3 heading */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={60} y={110} size={17} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 3 — a spinning wheel", "Example 3 — ghumta hua wheel")}
        </T>
      </Fade>
      <Draw on={beat >= 0} d="M 60 118 L 340 118" stroke={AMBER_DARK} sw={1.6} delay={dl(0, 0.5)} />

      {/* beat 1 — revolutions per second */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={60} y={145} size={16} fill={INK} anchor="start">
          360 rpm = 360/60 = 6 rev/s
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={60} y={172} size={16} fill={INK} anchor="start" weight={700}>
          {t("each rev = 2π", "har rev = 2π")}
        </T>
      </Fade>

      {/* beat 2 — angular speed, boxed */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Chip x={60} y={205} w={400} h={48} fill={AMBER} textFill={INK} size={17} script={false}>
          ω = 6×2π = 12π ≈ 37.7 rad/s
        </Chip>
      </Fade>

      {/* beat 3 — red-margin bridge note */}
      <Draw on={beat >= 3} d="M 60 275 L 60 305" stroke={RED} sw={3} delay={dl(3, 0)} />
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={76} y={297} size={13} fill={RED} anchor="start">
          {t("This ω (rad/s) feeds straight into v = rω.", "Ye ω (rad/s) seedha v = rω mein jaata hai.")}
        </T>
      </Fade>

      {/* beat 4 — Example 4 heading */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={580} y={110} size={17} fill={AMBER_DARK} anchor="start" weight={700}>
          {t("Example 4 — equal arcs in two circles", "Example 4 — do circles mein barabar arcs")}
        </T>
      </Fade>
      <Draw on={beat >= 4} d="M 580 118 L 903 118" stroke={AMBER_DARK} sw={1.6} delay={dl(4, 0.5)} />

      {/* beat 5 — same arc, ratio of radii */}
      <Fade on={beat >= 5} delay={dl(5, 0)}>
        <T x={580} y={145} size={16} fill={INK} anchor="start">
          {t("same arc: r1θ1 = r2θ2", "same arc: r1θ1 = r2θ2")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={580} y={172} size={16} fill={INK} anchor="start" weight={700}>
          {t("ratio → degrees fine here", "ratio → yahan degrees theek")}
        </T>
      </Fade>

      {/* beat 6 — the ratio, boxed */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={580} y={205} w={340} h={48} fill={AMBER} textFill={INK} size={18} script={false}>
          r1/r2 = θ2/θ1 = 75/60 = 5/4
        </Chip>
      </Fade>

      {/* beat 7 — guardrail: the inverse relationship trap */}
      <Draw on={beat >= 7} d="M 580 278 L 580 314" stroke={RED} sw={3} delay={dl(7, 0)} />
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={596} y={290} size={14} fill={RED} anchor="start" weight={700}>
          {t("Bigger angle, same arc ⇒ smaller radius —", "Bada angle, same arc ⇒ chhota radius —")}
        </T>
        <T x={596} y={307} size={14} fill={RED} anchor="start" weight={700}>
          {t("the inverse relationship is the trap.", "yahi inverse relationship trap hai.")}
        </T>
      </Fade>
    </Scene>
  );
}
