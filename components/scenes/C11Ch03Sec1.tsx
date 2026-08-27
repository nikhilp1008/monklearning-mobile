/**
 * C11 Chemistry Ch03 · Section 1 — "Why chemistry needed a shelving system"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (board_reveal_at, en [0, 14.42, 33.11, 53.67, 68.44, 79.53, 90.28, 94.81]):
 *  0 title + drawn underline (the 200-year-old question)
 *  1 CHAOS: 8 element symbols scattered in two ragged rows — "memorised from
 *    scratch" (this group fully vacates at beat 2 — the chaos gets shelved)
 *  2 THE SHELF: a real period (Li Be B C N O) drawn as six cells, atomic
 *    numbers in the corner — the "shelving system" landing
 *  3 the big promise: red margin bar + "know WHERE ⇒ predict HOW it behaves"
 *  4 findability demo: known / ? / known cells, ring on "?", arrows in from
 *    both neighbours, green verdict line
 *  5 verdict stamp: "position is not decorative — it encodes chemistry"
 *  6 new heading: "one seat, many predictions" + drawn underline
 *  7 three branches: size / reactivity / oxide formula chips
 *
 * Layout plan — boxes are MEASURED-estimate render boxes (Kalam ink box ≈
 * baseline −1.3·size … +0.5·size; Anek ≈ −0.78 … +0.31), longer language counts:
 *  b0 | title (script 26, red)        | T mid  | x261..819  y30..77 (bl 64)
 *  b0 | underline                     | Draw   | y88  x400..680
 *  b1 | chips row A ×4 (h28)          | Chip   | y96..124   x70/290/510/730 (w64)
 *  b1 | chips row B ×4 (h28)          | Chip   | y140..168  x180/400/620/840 (w64)
 *  b1 | caption (script 14, muted)    | T mid  | x417..663  y183..209 (bl 202)
 *  b2 | 6 cells (Li Be B C N O)       | Draw   | y222..274  x195..885 (105w,12gap)
 *  b2 | atomic numbers ×6 (11, ink)   | T st   | corner of each cell
 *  b2 | symbols ×6 (22, ink, bold)    | T mid  | centered each cell (bl 255.5)
 *  b3 | red margin bar                | Draw   | x70  y296..330
 *  b3 | promise line (19, w700, ink)  | T st   | x94..588  y302..323 (bl 317)
 *  b4 | 3 cells (known/?/known)       | Draw   | y352..398 x315/490/665 (105w)
 *  b4 | ring on "?" cell              | Draw   | c(542.5,375) rx66.5 ry35
 *  b4 | arrows ×2 (green)             | Draw   | (425,375)→(485,375) · (660,375)→(600,375)
 *  b4 | caption (script 16, green)    | T mid  | x?..?      y437..466 (bl 458)
 *  b5 | verdict stamp (green chip)    | Chip   | x190..890  y478..516
 *  b6 | heading (20, w800, ink)       | T mid  | x?..?      y526..548 (bl 542)
 *  b6 | underline (amber)             | Draw   | y552 x430..650
 *  b7 | 3 chips (size/reactivity/     | Chip   | y564..592  x365/460/590
 *       oxide formula)
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  ringD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const CELLS: { sym: string; z: number }[] = [
  { sym: "Li", z: 3 },
  { sym: "Be", z: 4 },
  { sym: "B", z: 5 },
  { sym: "C", z: 6 },
  { sym: "N", z: 7 },
  { sym: "O", z: 8 },
];
const CELL_W = 105;
const CELL_GAP = 12;
const CELL_Y = 222;
const CELL_H = 52;
const CELL_X0 = 195;

export default function C11Ch03Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title always-on; everything else beat-gated */}
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("why chemistry needed a shelving system", "chemistry ko shelving system kyun chahiye")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 6)}
        d="M 400 88 C 460 84, 620 84, 680 88"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* beat 1 — CHAOS: memorised element by element. Fully vacates at beat 2. */}
      <G>
        {[
          { sym: "Fe", x: 70 },
          { sym: "Au", x: 290 },
          { sym: "Ca", x: 510 },
          { sym: "Cl", x: 730 },
        ].map((c, i) => (
          <Fade key={c.sym} on={beat === 1} delay={dl(1, 0.3 + i * 0.35)}>
            <Chip x={c.x} y={96} w={64} h={28} fill={CREAM} stroke={MUTED} textFill={INK} size={15} script={false}>
              {c.sym}
            </Chip>
          </Fade>
        ))}
        {[
          { sym: "Na", x: 180 },
          { sym: "K", x: 400 },
          { sym: "H", x: 620 },
          { sym: "O", x: 840 },
        ].map((c, i) => (
          <Fade key={c.sym} on={beat === 1} delay={dl(1, 1.9 + i * 0.35)}>
            <Chip x={c.x} y={140} w={64} h={28} fill={CREAM} stroke={MUTED} textFill={INK} size={15} script={false}>
              {c.sym}
            </Chip>
          </Fade>
        ))}
        <Fade on={beat === 1} delay={dl(1, 3.6)}>
          <T x={540} y={202} size={14} fill={MUTED} script>
            {t("each one memorised from scratch", "har ek scratch se yaad karna")}
          </T>
        </Fade>
      </G>

      {/* beat 2 — THE SHELF: a real period, drawn cell by cell */}
      {CELLS.map((c, i) => {
        const cx = CELL_X0 + i * (CELL_W + CELL_GAP);
        return (
          <React.Fragment key={c.sym}>
            <Draw
              on={beat >= 2}
              delay={dl(2, 0.3 + i * 0.5)}
              d={`M ${cx} ${CELL_Y} h ${CELL_W} v ${CELL_H} h ${-CELL_W} z`}
              stroke={INK}
              sw={2.2}
              dur={0.5}
            />
            <Fade on={beat >= 2} delay={dl(2, 0.7 + i * 0.5)}>
              <T x={cx + 10} y={238} size={11} fill={INK} anchor="start">
                {c.z}
              </T>
              <T x={cx + CELL_W / 2} y={255.5} size={22} fill={INK} weight={800}>
                {c.sym}
              </T>
            </Fade>
          </React.Fragment>
        );
      })}

      {/* beat 3 — the big promise (red-margin note) */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 70 296 L 70 330" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={94} y={317} size={19} weight={700} fill={INK} anchor="start">
          {t(
            "know WHERE it sits ⇒ predict HOW it behaves",
            "pata ho WHERE baitha hai ⇒ predict karo HOW behave karega"
          )}
        </T>
      </Fade>

      {/* beat 4 — findability demo: known / ? / known */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 315 352 h 105 v 46 h -105 z" stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 0.6)} d="M 665 352 h 105 v 46 h -105 z" stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 1)} d="M 490 352 h 105 v 46 h -105 z" stroke={MUTED} sw={2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={367.5} y={380.1} size={15} fill={INK}>
          {t("known", "pata")}
        </T>
        <T x={717.5} y={380.1} size={15} fill={INK}>
          {t("known", "pata")}
        </T>
        <T x={542.5} y={384.5} size={28} fill={RED} weight={800}>
          ?
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.9)} d={ringD(542.5, 375, 66.5, 35)} stroke={RED} sw={3} dur={0.8} />
      <Draw on={beat >= 4} delay={dl(4, 2.8)} d={arrowD(425, 375, 485, 375)} stroke={GREEN} sw={2.6} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 3.3)} d={arrowD(660, 375, 600, 375)} stroke={GREEN} sw={2.6} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 3.9)}>
        <T x={540} y={458} size={16} fill={GREEN} script>
          {t("same shelf as its neighbours ⇒ still findable", "neighbours jaisa shelf ⇒ phir bhi findable")}
        </T>
      </Fade>

      {/* beat 5 — verdict stamp */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={190} y={478} w={700} h={38} fill={GREEN} textFill="#fff" size={18} script>
          {t("position is not decorative — it encodes chemistry", "position sirf decoration nahi — chemistry encode karti hai")}
        </Chip>
      </Fade>

      {/* beat 6 — new heading */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={542} size={20} weight={800} fill={INK}>
          {t("one seat, many predictions", "ek seat, kai predictions")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1)} d="M 430 552 C 480 549, 600 549, 650 552" stroke={AMBER} sw={2.2} dur={0.5} />

      {/* beat 7 — three branches from that one seat */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={365} y={564} w={80} h={28} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          {t("size", "size")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <Chip x={460} y={564} w={115} h={28} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          {t("reactivity", "reactivity")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.3)}>
        <Chip x={590} y={564} w={140} h={28} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          {t("oxide formula", "oxide ka formula")}
        </Chip>
      </Fade>
    </Scene>
  );
}
