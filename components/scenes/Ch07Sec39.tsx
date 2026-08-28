/**
 * Ch07 · Section 39 — "The valley in action: binding, escape, and black holes"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 3, 4, 5, 12.68, 22.92]):
 *  0 title + one valley curve (shared reference)
 *  1 "more negative U = more tightly bound" pointing to deep part
 *  2 satellite dot trapped in the well
 *  3 rim arrow: escape needs to climb to the top
 *  4 second, steeper well drawn beside (smaller R)
 *  5 v_e formula climbs
 *  6 red: push until v_e = c — nothing escapes
 *  7 green margin: black hole = infinitely steep valley
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  well1: axes x140..420 y120..380 · curve M140 130 Q220 130 260 300 Q300 380 420 390 ·
 *   zero line M140 130 H420
 *  b1 | label st x300 bl420 (deep part)
 *  b2 | satellite dot (280,290)
 *  b3 | rim arrow (280,290)→(150,140) · "escape" label
 *  b4 | well2 axes x620..900 y120..420 steeper curve M620 130 Q660 130 680 400 Q690 420 900 424
 *  b5 | ve formula cx760 bl460
 *  b6 | bar x66 y470..522 lines bl490/516
 *  b7 | bar x480 y470..522 (unused if fits in 6) — actually b7 green margin at bottom
 */

import React from "react";
import { Circle } from 'react-native-svg';
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
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec39({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — one picture explains everything */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "One valley picture — binding, escape, black holes",
            "Ek valley tasveer — binding, escape, black holes"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1)} d="M 140 130 H 420" stroke={MUTED} sw={1.6} dur={0.5} />
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.6)}
        d="M 140 130 Q 220 130 260 300 Q 300 380 420 390"
        stroke={GREEN}
        sw={2.6}
        dur={1}
      />

      {/* beat 1 — more negative = more tightly bound */}
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={300} y={420} size={12} fill={AMBER_DARK} script>
          {t(
            "more negative U = more tightly bound",
            "zyada negative U = zyada tightly bound"
          )}
        </T>
      </Fade>

      {/* beat 2 — a satellite, trapped */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <Circle cx={280} cy={290} r={6} fill={INK} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={310} y={295} size={11} fill={INK} anchor="start" weight={700}>
          {t("satellite (E < 0)", "satellite (E < 0)")}
        </T>
      </Fade>

      {/* beat 3 — the climb to escape */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.6)}
        d={arrowD(280, 282, 155, 145)}
        stroke={RED}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={165} y={130} size={11} fill={RED} anchor="start" weight={700}>
          {t("escape: climb to the rim", "escape: rim tak chado")}
        </T>
      </Fade>

      {/* beat 4 — squeeze into a smaller R: steeper well */}
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d="M 620 130 H 900" stroke={MUTED} sw={1.6} dur={0.5} />
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.1)}
        d="M 620 130 Q 660 130 680 400 Q 690 420 900 424"
        stroke={RED}
        sw={2.6}
        dur={1}
      />
      <Fade on={beat >= 4} delay={dl(4, 2.3)}>
        <T x={760} y={445} size={12} fill={RED} script>
          {t(
            "same M, smaller R — the well steepens",
            "same M, chhota R — well steep hota hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — the escape speed climbs */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={760} y={478} size={16} fill={INK} weight={800}>
          v(e) = √(2GM ⁄ R)  ↑
        </T>
      </Fade>

      {/* beat 6 — push to the extreme */}
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d="M 480 470 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={498} y={490} size={13} fill={RED} script anchor="start">
          {t(
            "push until v(e) = c — not even light escapes",
            "v(e) = c tak dhakelo — light bhi nahi bachti"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={498} y={516} size={13} fill={RED} script anchor="start">
          {t(
            "that object has become a black hole",
            "wo object black hole ban gaya"
          )}
        </T>
      </Fade>

      {/* beat 7 — the deep unification */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 470 v 52" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={84} y={490} size={13} fill={GREEN} script anchor="start">
          {t(
            "a black hole = gravity's valley, infinitely steep",
            "black hole = gravity ki valley, infinitely steep"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={84} y={516} size={13} fill={GREEN} script anchor="start">
          {t(
            "same physics of bound systems, taken to its limit",
            "bound systems ki wahi physics, apni hadd tak"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
