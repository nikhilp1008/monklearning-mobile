/**
 * C11 Ch09 · Section 20 — "Tetramethylbutane: m.p., chlorination, conformers"
 * (JEE Advanced, three-parter)
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 11.43, 19.88, 35.84, 47.79, 57.86, 69.12]):
 *  0 heading · 1 structure drawn (two tert-butyl halves) + "(i) compact,
 *  near-spherical, symmetric" · 2 symmetric ⇒ packs efficiently ⇒ high m.p.
 *  · 3 "(ii) all 12H on equivalent methyls, no 2°/3° C-H" · 4 chlorination
 *  gives ONE product · 5 RED: 3°>2°>1° irrelevant · 6 "(iii) conformations
 *  exist but not separable"
 *
 * Layout plan — structure: central bond (500,200)-(580,200), 3 methyl bonds
 *  each side:
 *  b1 | 7 bonds + label        | Draw+T | x440..640 y150..250 · label y280
 *  b2 | packing line           | T mid  | y312
 *  b3 | "(ii) all 12H…" line   | T mid  | y344
 *  b4 | "chlorination…" line   | T mid  | y376
 *  b5 | margin bar + red note  | Draw+T | bar x60 y410..446 · text bl432
 *  b6 | "(iii) conformations…" | T mid  | y478
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD } from "./chem-kit";

export default function C11Ch09Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const bonds = [
    [500, 200, 580, 200],
    [500, 200, 470, 160],
    [500, 200, 455, 200],
    [500, 200, 470, 240],
    [580, 200, 610, 160],
    [580, 200, 625, 200],
    [580, 200, 610, 240],
  ];

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={65} size={22} fill={RED} script>
          {t("tetramethylbutane: m.p., chlorination, conformers", "tetramethylbutane: m.p., chlorination, conformers")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={95} size={15} fill={INK} weight={700}>
          [JEE Advanced] 2,2,3,3-tetramethylbutane
        </T>
      </Fade>

      {/* beat 1 — the structure: two tert-butyl halves */}
      {bonds.map(([x1, y1, x2, y2], i) => (
        <Draw key={i} on={beat >= 1} delay={dl(1, 0.2 + i * 0.15)} d={bondD(x1, y1, x2, y2)} stroke={INK} sw={2.2} dur={0.35} />
      ))}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={540} y={280} size={15} fill={INK} script>
          {t("(i) compact, near-spherical, highly symmetric", "(i) compact, near-spherical, highly symmetric")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={312} size={15} fill={INK}>
          {t("symmetric molecules pack efficiently ⇒ strong lattice ⇒ high m.p.", "symmetric molecules efficiently pack hote ⇒ strong lattice ⇒ high m.p.")}
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={344} size={15} fill={INK}>
          {t("(ii) all twelve H's on equivalent methyls: no 2° or 3° C–H", "(ii) sabhi barah H equivalent methyls pe: koi 2° ya 3° C–H nahi")}
        </T>
      </Fade>

      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={376} size={15} fill={INK} weight={700}>
          {t("chlorination gives ONE product: 1-chloro-2,2,3,3-tetramethylbutane", "chlorination sirf EK product deta: 1-chloro-2,2,3,3-tetramethylbutane")}
        </T>
      </Fade>

      {/* beat 5 — the rule doesn't apply */}
      <Draw on={beat >= 5} delay={dl(5, 0.3)} d="M 60 410 L 60 446" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={76} y={432} size={16} fill={RED} script anchor="start">
          {t(
            "the 3°>2°>1° rule is irrelevant when only 1° H exist",
            "3°>2°>1° rule irrelevant hai jab sirf 1° H hi hain"
          )}
        </T>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={478} size={15} fill={INK}>
          {t("(iii) conformations exist in principle, but no separable conformers", "(iii) conformations principle mein hain, par separable conformers nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
