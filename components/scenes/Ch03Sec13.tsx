/**
 * Ch03 · Section 13 — "The five pitfalls that cost marks in vector algebra"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.9, 33.7, 47.4, 55.6, 80.4, 89.5, 114.1, 138.9]):
 *  0 heading
 *  1 ① |A+B| = A+B crossed out
 *  2 fix: components or parallelogram
 *  3 ② sin/cos swap title
 *  4 the FROM-axis rule
 *  5 ③ dot scalar / cross vector
 *  6 the instant lost mark
 *  7 ④ anticommutative
 *  8 ⑤ unit vectors carry no units
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  rows: number circle r14 cx100 · title st x130 · subs st x130
 *  r1 | circle cy140 · wrong st x130 bl 146 s15 → crossD(130,134,113,17) ·
 *       green st x280 bl 146 s12 · b2 sub st x130 bl 178 s12 · underline M130 186 h360
 *  r2 | circle cy230 · title st x130 bl 236 s14 · sub1 bl 268 s12 · underline M130 276 h340 ·
 *       sub2 bl 298 s12
 *  r3 | circle cy330 · title st x130 bl 336 s14 · sub bl 368 s12 · underline M130 376 h400
 *  r4 | circle cy420 · title st x130 bl 426 s14 · sub bl 452 s12
 *  r5 | circle cy495 · title st x130 bl 501 s14 · sub bl 527 s12
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  crossD,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

function NumCircle({ on, delay, cy, n }: { on: boolean; delay: number; cy: number; n: string }) {
  return (
    <>
      <Draw
        on={on}
        delay={delay}
        d={`M 86 ${cy} a 14 14 0 1 0 28 0 a 14 14 0 1 0 -28 0`}
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={on} delay={delay + 0.6}>
        <T x={100} y={cy + 4.5} size={13} fill={RED} weight={800}>{n}</T>
      </Fade>
    </>
  );
}

export default function Ch03Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "FIVE PITFALLS that cost real marks",
            "PAANCH PITFALLS jo asli marks khaate hain"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* ① adding magnitudes */}
      <NumCircle on={beat >= 1} delay={dl(1, 0.6)} cy={140} n="1" />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={130} y={146} size={15} fill={INK} weight={700} anchor="start">
          |A + B| = A + B
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3)} d={crossD(130, 134, 113, 17)} stroke={RED} sw={2.4} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={280} y={146} size={12} fill={GREEN} script anchor="start">
          {t(
            "true ONLY when the vectors are parallel",
            "sirf tab sach jab vectors parallel hon"
          )}
        </T>
      </Fade>

      {/* beat 2 — no third option */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={130} y={178} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "otherwise: components, or the parallelogram law — no third option",
            "warna: components, ya parallelogram law — teesra raasta nahi hai"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2)} d="M 130 186 h 360" stroke={AMBER} sw={1.5} dur={0.5} />

      {/* ② sin/cos swap */}
      <NumCircle on={beat >= 3} delay={dl(3, 0.6)} cy={230} n="2" />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={130} y={236} size={14} fill={INK} weight={700} anchor="start">
          {t("resolution: sin and cos SWAPPED", "resolution: sin aur cos ULTE likh diye")}
        </T>
      </Fade>

      {/* beat 4 — the FROM-axis rule */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={130} y={268} size={12} fill={RED} script anchor="start">
          {t(
            "cos belongs to the FROM-axis — measured from y? they SWITCH",
            "cos FROM-axis ka hai — y-axis se naapa? dono SWITCH"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 2)} d="M 130 276 h 340" stroke={RED} sw={1.5} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={130} y={298} size={12} fill={INK_LIGHT} script anchor="start">
          {t(
            "inclined-plane questions do this deliberately — note the axis first",
            "inclined-plane sawaal jaan-boojh kar aisa karte hain — pehle axis dekho"
          )}
        </T>
      </Fade>

      {/* ③ two products, two species */}
      <NumCircle on={beat >= 5} delay={dl(5, 0.6)} cy={330} n="3" />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={130} y={336} size={14} fill={INK} weight={700} anchor="start">
          {t("A·B → SCALAR   ·   A×B → VECTOR", "A·B → SCALAR   ·   A×B → VECTOR")}
        </T>
      </Fade>

      {/* beat 6 — instant lost mark */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={130} y={368} size={12} fill={RED} script anchor="start">
          {t(
            "A·B with î ĵ k̂ in it, or A×B as a bare number → mark gone instantly",
            "A·B mein î ĵ k̂, ya A×B ek nanga number → mark turant gaya"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2)} d="M 130 376 h 400" stroke={RED} sw={1.5} dur={0.5} />

      {/* ④ anticommutative */}
      <NumCircle on={beat >= 7} delay={dl(7, 0.6)} cy={420} n="4" />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={130} y={426} size={14} fill={INK} weight={700} anchor="start">
          A×B = − B×A
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={290} y={426} size={12} fill={AMBER_DARK} script anchor="start">
          {t("swap the order → the arrow flips", "order palto → arrow palat jata hai")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={130} y={452} size={12} fill={INK_LIGHT} script anchor="start">
          {t(
            "that sign IS physics: torque, angular momentum, magnetic push",
            "woh sign physics HAI: torque, angular momentum, magnetic dhakka"
          )}
        </T>
      </Fade>

      {/* ⑤ unit vectors carry no units */}
      <NumCircle on={beat >= 8} delay={dl(8, 0.6)} cy={495} n="5" />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={130} y={501} size={14} fill={INK} weight={700} anchor="start">
          {t("unit vectors carry NO units", "unit vector par units NAHI hote")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 6)}>
        <T x={130} y={527} size={12} fill={RED} script anchor="start">
          {t(
            "û in newtons contradicts the definition on the very line you used it",
            "û newton mein likha to usi line par definition se takraav ho gaya"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
