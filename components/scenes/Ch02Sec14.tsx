/**
 * Ch02 · Section 14 — "Example 4 [JEE Advanced]: split the time axis before integrating"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 23.2, 48, 65.8, 90.6, 115.5, 134.6, 159.4, 175.4]):
 *  0 title + given card v(t) = t² − 6t + 8, 0..5 s
 *  1 framing: ∫v dt vs ∫|v| dt piecewise
 *  2 picture: parabola dips below axis 2→4 · hatches on the dip · legend
 *  3 factorise card: roots 2 & 4, sign pattern, (a)
 *  4 antiderivative card: F(t) + four values
 *  5 (b) displacement card: F(5)−F(0) = 20/3
 *  6 (c) distance card: 20/3 + 4/3 + 4/3 = 28/3
 *  7 (d) ÷5 arrows + averages line
 *  8 red note: the gap is the price of the detour
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title bl 52 · card x360..720 y66..104 formula bl 92
 *  b1 | lines cx540 bl 128 / 152
 *  b2 | axis y300 x120..600 · parabola (150,236)→(550,276) roots x310/x470 ·
 *       ticks + labels bl 322 · "+" (185,222) & (540,258) · "−" (390,334) ·
 *       hatches x330..440 · legend cx350 bl 356
 *  b3 | card x620..1030 y188..272 · lines bl 212 / 238 / 262
 *  b4 | card x620..1030 y292..372 · header bl 314 · F bl 338 · values bl 360
 *  b5 | card x60..520 y390..450 · header bl 412 · value bl 438
 *  b6 | card x560..1030 y390..450 · header bl 412 · value bl 438
 *  b7 | arrows (290,455)→(290,470) & (790,455)→(790,470) · line cx540 bl 490
 *  b8 | bar x66 y518..588 · lines st x84 bl 536 / 560 / 584
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
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the final boss */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example 4 [JEE Advanced] — split the time axis before integrating",
            "Example 4 [JEE Advanced] — integrate se pehle time axis ko todo"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 8)}
        d="M 372 66 h 336 q 12 0 12 12 v 14 q 0 12 -12 12 h -336 q -12 0 -12 -12 v -14 q 0 -12 12 -12"
        stroke={INK}
        sw={2.2}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 0} delay={dl(0, 9)}>
        <T x={540} y={92} size={16} fill={INK} weight={700}>
          v(t) = t² − 6t + 8,&nbsp; 0 ≤ t ≤ 5 s
        </T>
      </Fade>

      {/* beat 1 — the framing */}
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={540} y={128} size={13} fill={RED} script>
          {t(
            "displacement = ∫ v dt — let the negatives cancel",
            "displacement = ∫ v dt — negatives ko cancel hone do"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={540} y={152} size={13} fill={GREEN} script>
          {t(
            "distance = ∫ |v| dt, piecewise — cancellation forbidden",
            "distance = ∫ |v| dt, tukdon mein — cancel karna mana hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — the parabola shows the structure */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d={arrowD(120, 300, 600, 300)}
        stroke={INK}
        sw={2}
        dur={0.8}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2)}
        d="M 150 236 C 210 262, 270 288, 310 300 C 350 310, 430 310, 470 300 C 510 290, 530 284, 550 276"
        stroke={INK}
        sw={2.4}
        dur={1.6}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 4)}
        d="M 310 293 v 14 M 470 293 v 14 M 150 293 v 14"
        stroke={INK}
        sw={1.8}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={150} y={322} size={12} fill={INK} weight={700}>
          0
        </T>
        <T x={310} y={322} size={12} fill={INK} weight={700}>
          2
        </T>
        <T x={470} y={322} size={12} fill={INK} weight={700}>
          4
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6.5)}>
        <T x={185} y={222} size={14} fill={GREEN} weight={800}>
          +
        </T>
        <T x={540} y={258} size={14} fill={GREEN} weight={800}>
          +
        </T>
        <T x={390} y={334} size={14} fill={RED} weight={800}>
          −
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 9)}
        d="M 335 302 l 10 6 M 365 303 l 10 6 M 395 304 l 10 6 M 425 302 l 10 6"
        stroke={RED}
        sw={1.6}
        dur={0.8}
      />
      <Fade on={beat >= 2} delay={dl(2, 11)}>
        <T x={350} y={356} size={11} fill={MUTED} script>
          {t(
            "green = forward · red = backtracking",
            "green = aage · red = peechhe jaana"
          )}
        </T>
      </Fade>

      {/* beat 3 — factorise: (a) */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.6)}
        d="M 632 188 h 386 q 12 0 12 12 v 60 q 0 12 -12 12 h -386 q -12 0 -12 -12 v -60 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={825} y={212} size={15} fill={INK} weight={700}>
          v = (t − 2)(t − 4)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={825} y={238} size={12} fill={AMBER_DARK} script>
          {t(
            "signs: + (0→2) · − (2→4) · + (4→5)",
            "signs: + (0→2) · − (2→4) · + (4→5)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 15)}>
        <T x={825} y={262} size={12} fill={GREEN} script>
          {t("(a) reversals at t = 2 s and 4 s", "(a) palatna t = 2 s aur 4 s par")}
        </T>
      </Fade>

      {/* beat 4 — one antiderivative, four numbers */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.6)}
        d="M 632 292 h 386 q 12 0 12 12 v 56 q 0 12 -12 12 h -386 q -12 0 -12 -12 v -56 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={825} y={314} size={12} fill={GREEN} script>
          {t("one antiderivative, reused everywhere", "ek antiderivative, har jagah reuse")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.5)}>
        <T x={825} y={338} size={14} fill={INK} weight={700}>
          F(t) = t³⁄3 − 3t² + 8t
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 10)}>
        <T x={825} y={360} size={12} fill={INK} weight={600}>
          F(0)=0 · F(2)=20⁄3 · F(4)=16⁄3 · F(5)=20⁄3
        </T>
      </Fade>

      {/* beat 5 — (b) endpoints only */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 72 390 h 436 q 12 0 12 12 v 36 q 0 12 -12 12 h -436 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={RED}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={290} y={412} size={12} fill={RED} script>
          {t("(b) displacement = F(5) − F(0)", "(b) displacement = F(5) − F(0)")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={290} y={438} size={15} fill={INK} weight={700}>
          {t("= 20⁄3 ≈ 6.67 m — endpoints only", "= 20⁄3 ≈ 6.67 m — sirf endpoints")}
        </T>
      </Fade>

      {/* beat 6 — (c) split at the roots */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.6)}
        d="M 572 390 h 446 q 12 0 12 12 v 36 q 0 12 -12 12 h -446 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={798} y={412} size={12} fill={AMBER_DARK} script>
          {t("(c) distance — pieces, magnitudes on", "(c) distance — tukde, magnitude lagakar")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={798} y={438} size={14} fill={INK} weight={700}>
          20⁄3 + 4⁄3 + 4⁄3 = 28⁄3 ≈ 9.33 m
        </T>
      </Fade>

      {/* beat 7 — (d) divide both by 5 s */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 1)}
        d={arrowD(290, 455, 290, 470)}
        stroke={INK}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 7}
        delay={dl(7, 2)}
        d={arrowD(790, 455, 790, 470)}
        stroke={INK}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 7} delay={dl(7, 3.5)}>
        <T x={540} y={490} size={14} fill={INK} weight={700}>
          {t(
            "(d) avg velocity = (20⁄3)⁄5 ≈ 1.33 m/s · avg speed = (28⁄3)⁄5 ≈ 1.87 m/s",
            "(d) avg velocity = (20⁄3)⁄5 ≈ 1.33 m/s · avg speed = (28⁄3)⁄5 ≈ 1.87 m/s"
          )}
        </T>
      </Fade>

      {/* beat 8 — the price of the detour */}
      <Draw on={beat >= 8} delay={dl(8, 0.8)} d="M 66 518 v 70" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={536} size={13} fill={RED} script anchor="start">
          {t(
            "1.87 > 1.33 ✓ — the inequality holds, as it must",
            "1.87 > 1.33 ✓ — inequality kayam, jaisa hona chahiye"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 6)}>
        <T x={84} y={560} size={13} fill={RED} script anchor="start">
          {t(
            "the gap IS the backtracking (2→4 s): distance counted it,",
            "gap HI backtracking hai (2→4 s): distance ne gina,"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 10)}>
        <T x={84} y={584} size={13} fill={RED} script anchor="start">
          {t(
            "displacement cancelled it — the averages differ by that detour's price",
            "displacement ne kaata — averages ka fark usi chakkar ki keemat hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
