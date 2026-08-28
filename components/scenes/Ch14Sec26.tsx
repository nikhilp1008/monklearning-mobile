/**
 * Ch14 · Section 26 — "Worked example: the resonance tube"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.45, 26.39, 31.87, 38.6, 41.09, 56.03, 64.24]):
 *  0 hook badge + setup: f=480Hz, l1=17cm, l2=52cm
 *  1 the figure: tube = closed pipe, both l measured from antinode (+e)
 *  2 two conditions, unknown e in each — looks awkward
 *  3 write them: l1+e=λ/4, l2+e=3λ/4
 *  4 same unknown e in both!
 *  5 MASTER MOVE: subtract → e cancels → λ=70cm → v=336 m/s
 *  6 back out e: λ/4=17.5cm, l1=17 → e=0.5cm
 *  7 lesson + final: v=336 m/s, e=0.5 cm
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | badge chip (13)               | Chip  | x90..350  y100..132
 *  b0 | setup chip (h34)              | Chip  | x370..770 y100..134
 *  b1 | tube + water hatch            | Draw  | x190..210 y150..250
 *  b1 | l1/l2 ticks + labels (12)     | Draw+T| x170..230 y160/210
 *  b1 | insight (12,muted)            | T st  | x400 bl175/195         y163..208
 *  b2 | setup text (13)               | T st  | x60 bl290             y278..295
 *  b3 | "l1+e=λ/4" (15)               | T st  | x60 bl320             y308..325
 *  b3 | "l2+e=3λ/4" (15)              | T st  | x60 bl345             y333..350
 *  b4 | "same unknown e!" (13,amber-d)| T st  | x60 bl375             y363..380
 *  b5 | subtract text (13)            | T st  | x60 bl400             y388..405
 *  b5 | v chip (h38,s16)              | Chip  | x60..340  y420..458
 *  b6 | e compute (13)                | T st  | x60 bl475             y463..480
 *  b7 | lesson (13,green)             | T mid | x540 bl510            y497..514
 *  b7 | final chip (h50,s18)          | Chip  | x300..780 y530..580
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch14Sec26({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={25} fill={RED} script>
          {t("worked example: the resonance tube", "worked example: resonance tube")}
        </T>
      </Fade>

      {/* beat 0 — hook + setup */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <Chip x={90} y={100} w={260} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13}>
          {t("★ JEE Advanced — end correction matters!", "★ JEE Advanced — end correction matlab!")}
        </Chip>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 1.0)}>
        <Chip x={370} y={100} w={400} h={34} fill="#fff" stroke={INK} textFill={INK} size={13} script={false}>
          f=480Hz, l₁=17cm, l₂=52cm
        </Chip>
      </Fade>

      {/* beat 1 — the figure: tube, levels, insight */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 190 150 L 190 250 M 210 150 L 210 250" stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 0.9)} d="M 192 240 L 208 240 M 192 246 L 208 246" stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d="M 170 210 L 230 210" stroke={INK} sw={1.6} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={236} y={214} size={12} fill={INK} anchor="start">
          l₁=17cm
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.2)} d="M 170 160 L 230 160" stroke={INK} sw={1.6} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={236} y={164} size={12} fill={INK} anchor="start">
          l₂=52cm
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.1)}>
        <T x={400} y={175} size={12} fill={MUTED} anchor="start">
          {t("resonance tube = closed pipe", "resonance tube = closed pipe")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.6)}>
        <T x={400} y={195} size={12} fill={MUTED} anchor="start">
          {t("(both measured from antinode, +e)", "(dono antinode se, +e)")}
        </T>
      </Fade>

      {/* beat 2 — two unknowns */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={60} y={290} size={13} fill={INK} anchor="start">
          {t("two conditions, unknown e in each...", "dono conditions mein unknown e...")}
        </T>
      </Fade>

      {/* beat 3 — write them down */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={60} y={320} size={15} fill={INK} anchor="start">
          l₁ + e = λ/4
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.0)}>
        <T x={60} y={345} size={15} fill={INK} anchor="start">
          l₂ + e = 3λ/4
        </T>
      </Fade>

      {/* beat 4 — same unknown */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={60} y={375} size={13} fill={AMBER_DARK} anchor="start">
          {t("→ same unknown e in both!", "→ dono mein same unknown e!")}
        </T>
      </Fade>

      {/* beat 5 — the master move */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={60} y={400} size={13} fill={INK} anchor="start">
          {t("subtract: l₂−l₁=λ/2 → λ=2(52−17)=70cm", "subtract: l₂−l₁=λ/2 → λ=2(52−17)=70cm")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <Chip x={60} y={420} w={280} h={38} fill={GREEN} textFill="#fff" size={16} script={false}>
          v = fλ = 480×0.7 = 336 m/s
        </Chip>
      </Fade>

      {/* beat 6 — back out e */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={60} y={475} size={13} fill={INK} anchor="start">
          e: λ/4 = 17.5cm, l₁=17 → e = 0.5 cm
        </T>
      </Fade>

      {/* beat 7 — the lesson and final answer */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={510} size={13} fill={GREEN} script>
          {t(
            "subtracting kills e, gives λ cleanly — recover e after!",
            "subtract karne se e maar jaata, λ saaf milta — e baad mein!"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <Chip x={300} y={530} w={480} h={50} fill={GREEN} textFill="#fff" size={18} script={false}>
          v = 336 m/s · e = 0.5 cm
        </Chip>
      </Fade>
    </Scene>
  );
}
