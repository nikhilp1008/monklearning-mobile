/**
 * Ch12 · Section 1 — "Everything is made of atoms in motion"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 22.48, 36.3, 57.21, 67.54]; hi [0, 12.63, 13.63, 14.63,
 * 15.63, 16.63, 17.63] — beats 0-2 are near-instant in both tracks, beat 2
 * (Dalton's claims) gets the real 20s window in English):
 *  0 title + drawn underline · 1 thinkers timeline (Kanada–Democritus–Dalton)
 *  2 Dalton's three claims (chip + drawn tick each) · 3 zoom into steel rod /
 *    water / air: three panel outlines + names, staggered · 4 fill each panel
 *    with a molecule dot-grid + descriptor (solid caged, liquid sliding, gas
 *    racing) · 5 verdict line (same particles, spacing/force differ) · 6
 *    Feynman quote, verdict dims to make room
 *
 * Layout plan — boxes are estimated render boxes (Kalam ink box ≈ baseline
 * −1.3·size..+0.5·size; Anek ≈ −0.78·size..+0.31·size), longer language counts:
 *  b0 | title (script 28, red)        | T mid | x278..802  y36..86  (bl 72)
 *  b0 | underline                     | Draw  | y94  x330..750
 *  b1 | "atomic hypothesis" (14)      | T mid | x475..605  y106..131 (bl 124)
 *  b1 | timeline line + arrowhead     | Draw  | y148 x150..930
 *  b1 | ticks ×3 (r5)                 | circ  | (230,540,850)×148
 *  b1 | names ×3 (14, kalam)          | T mid | x207..253 / 502..579 /
 *       "Kanada"/"Democritus"/"Dalton ~1800s"    x800..900  y164..189 (bl 182)
 *  b2 | claim chips ×3 (h32)          | Chip  | y216..248
 *       "matter=atoms" x205 w130 · "same element⇒identical atoms" x355 w250
 *       · "whole-number ratio⇒compounds" x625 w250 — each + drawn tick
 *  b3 | panel outlines ×3 (h198)      | Draw  | y272..470  x70../400../730..
 *       (w280 each: 70-350 / 400-680 / 730-1010)
 *  b3 | panel titles (sans 20, w800)  | T mid | y284..306 (bl 300) "SOLID"/
 *       "LIQUID"/"GAS" at col centers 210/540/870
 *  b3 | panel subtitles (kalam 12)    | T mid | y316..338 (bl 332)
 *       "(steel rod)"/"(cup of water)"/"(the air)"
 *  b4 | dot grids (r6) per column     | circ  | rows y360/384/408, x offsets
 *       col+50/110/170/230 (solid tight grid; liquid row-shifted; gas sparse
 *       6-dot spread + short motion tails)
 *  b4 | descriptors (kalam 13, ink)   | T mid | y427..451 (bl 444)
 *       "caged, vibrating in place" / "touching, but sliding past" /
 *       "far apart, racing freely"
 *  b5 | verdict (script 19, green)    | T mid | x300..780  y499..534 (bl 524)
 *  b5 | underline                     | Draw  | y540 x300..780
 *  b6 | Feynman quote (script 17)     | T mid | x273..807  y550..581 (bl 572)
 *  b6 | attribution (12, muted, end)  | T end | x896..950  y583..596 (bl 592)
 *       (verdict b5 dims to 0.14 once b6 fires)
 */

import React from "react";
import { Circle, G, Line } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
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

const NAMES: [number, string][] = [
  [230, "Kanada"],
  [540, "Democritus"],
  [850, "Dalton ~1800s"],
];

const CLAIMS: [number, number, string, string][] = [
  [205, 130, "matter = atoms", "matter = atoms"],
  [355, 250, "same element ⇒ identical atoms", "ek element ⇒ identical atoms"],
  [625, 250, "whole-number ratio ⇒ compounds", "whole-number ratio ⇒ compound"],
];

const PANELS: [number, string, string, string][] = [
  [70, "SOLID", "(steel rod)", "(steel rod)"],
  [400, "LIQUID", "(cup of water)", "(paani ka cup)"],
  [730, "GAS", "(the air)", "(hawa)"],
];

const DESCR: [string, string][] = [
  ["caged, vibrating in place", "caged, apni jagah vibrate"],
  ["touching, but sliding past", "touching, par slide karte"],
  ["far apart, racing freely", "bahut door, freely racing"],
];

export default function Ch12Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title always-on; the underline is the beat-0 drawn action */}
      <Fade on={true}>
        <T x={540} y={72} size={28} fill={RED} script>
          {t("everything is atoms in motion", "sab kuch atoms hai, hamesha moving")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 0.3)}
        d="M 330 94 C 420 90, 660 98, 750 92"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* beat 1 — thinkers timeline */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={124} size={14} fill={AMBER_DARK} script>
          atomic hypothesis
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.2)}
        d={arrowD(150, 148, 930, 148)}
        stroke={AMBER}
        sw={2.4}
        dur={0.6}
      />
      {NAMES.map(([x], i) => (
        <Fade key={x} on={beat >= 1} delay={dl(1, 0.3 + i * 0.15)}>
          <Circle cx={x} cy={148} r={5} fill={AMBER_DARK} />
        </Fade>
      ))}
      {NAMES.map(([x, name], i) => (
        <Fade key={name} on={beat >= 1} delay={dl(1, 0.4 + i * 0.15)}>
          <T x={x} y={182} size={14} fill={INK} script>
            {name}
          </T>
        </Fade>
      ))}

      {/* beat 2 — Dalton's three claims, each with a drawn tick */}
      {CLAIMS.map(([x, w, eTxt, hTxt], i) => (
        <G key={eTxt}>
          <Fade on={beat >= 2} delay={dl(2, 0.5 + i * 4.5)}>
            <Chip x={x} y={216} w={w} h={32} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
              {t(eTxt, hTxt)}
            </Chip>
          </Fade>
          <Draw
            on={beat >= 2}
            delay={dl(2, 1.1 + i * 4.5)}
            d={`M ${x + w - 26} 228 l 5 5 l 10 -11`}
            stroke={AMBER_DARK}
            sw={2.4}
            dur={0.4}
          />
        </G>
      ))}

      {/* beat 3 — zoom into three real objects: panel outlines + names */}
      {PANELS.map(([x, name, subE, subH], i) => (
        <G key={name}>
          <Draw
            on={beat >= 3}
            delay={dl(3, i * 4)}
            d={`M ${x + 10} 272 h 260 q 10 0 10 10 v 178 q 0 10 -10 10 h -260 q -10 0 -10 -10 v -178 q 0 -10 10 -10`}
            stroke={INK}
            sw={2.4}
            dur={0.9}
          />
          <Fade on={beat >= 3} delay={dl(3, 0.7 + i * 4)}>
            <T x={x + 140} y={300} size={20} fill={INK} weight={800}>
              {name}
            </T>
          </Fade>
          <Fade on={beat >= 3} delay={dl(3, 1.2 + i * 4)}>
            <T x={x + 140} y={332} size={12} fill={MUTED} script>
              {t(subE, subH)}
            </T>
          </Fade>
        </G>
      ))}

      {/* beat 4 — fill each panel: molecule dot-grid + descriptor */}
      {/* solid: tight 3x4 lattice */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <G>
          {[360, 384, 408].map((y) =>
            [120, 180, 240, 300].map((x) => (
              <Circle key={`${x}-${y}`} cx={x} cy={y} r={6} fill={INK} />
            ))
          )}
        </G>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={210} y={444} size={13} fill={INK} script>
          {t(DESCR[0][0], DESCR[0][1])}
        </T>
      </Fade>

      {/* liquid: rows shifted to suggest sliding */}
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <G>
          {[450, 510, 570, 630].map((x) => (
            <Circle key={`r1-${x}`} cx={x} cy={360} r={6} fill={INK} />
          ))}
          {[465, 525, 585, 645].map((x) => (
            <Circle key={`r2-${x}`} cx={x} cy={384} r={6} fill={INK} />
          ))}
          {[450, 510, 570, 630].map((x) => (
            <Circle key={`r3-${x}`} cx={x} cy={408} r={6} fill={INK} />
          ))}
        </G>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7)}>
        <T x={540} y={444} size={13} fill={INK} script>
          {t(DESCR[1][0], DESCR[1][1])}
        </T>
      </Fade>

      {/* gas: sparse spread + short motion tails */}
      <Fade on={beat >= 4} delay={dl(4, 12)}>
        <G>
          {[
            [785, 368],
            [935, 362],
            [860, 390],
            [800, 414],
            [930, 408],
            [870, 378],
          ].map(([x, y]) => (
            <G key={`${x}-${y}`}>
              <Line x1={x - 15} y1={y - 9} x2={x - 5} y2={y - 3} stroke={MUTED} strokeWidth={1.6} />
              <Circle cx={x} cy={y} r={6} fill={INK} />
            </G>
          ))}
        </G>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 13)}>
        <T x={870} y={444} size={13} fill={INK} script>
          {t(DESCR[2][0], DESCR[2][1])}
        </T>
      </Fade>

      {/* beat 5 — verdict: same particles, spacing/force differ */}
      <G opacity={beat >= 6 ? 0.14 : 1}>
        <Fade on={beat >= 5} delay={dl(5, 0.4)}>
          <T x={540} y={524} size={19} fill={GREEN} script>
            {t(
              "same particles — only spacing & force differ",
              "same particles — bas spacing & force alag hai"
            )}
          </T>
        </Fade>
        <Draw
          on={beat >= 5}
          delay={dl(5, 3)}
          d="M 300 540 C 400 536, 660 544, 780 538"
          stroke={GREEN}
          sw={2.2}
          dur={0.6}
        />
      </G>

      {/* beat 6 — the Feynman line */}
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={540} y={572} size={17} fill={INK} script>
          {t(
            "everything is atoms — tiny particles, forever in motion",
            "sab kuch atoms hai — tiny particles, hamesha motion mein"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.4)}>
        <T x={950} y={592} size={12} fill={MUTED} anchor="end">
          — Feynman
        </T>
      </Fade>
    </Scene>
  );
}
