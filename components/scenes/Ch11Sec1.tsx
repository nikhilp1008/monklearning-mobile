/**
 * Ch11 · Section 1 — "What thermodynamics actually measures"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (8, seg text): 0 warmth hook · 1 not every molecule (macroscopic) ·
 *  2 P·V·T·m·composition = the state · 3 system/wall diagram (system box,
 *  "the wall" leader, surroundings note) · 4 ring the wall + "decides
 *  everything" · 5 diathermic wall demo (heat arrows cross, settle) ·
 *  6 adiabatic wall demo (wall turns red, arrows crossed out) · 7 verdict:
 *  interaction depends entirely on the WALL.
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s).
 * Diagram 1 (b3/4, system·wall·surroundings) and diagram 2 (b5/6, twin gas
 * boxes) live in DISTINCT y-bands (278–390 vs 400–507) — no shared footprint,
 * so dim-on-supersede never ghosts through a later diagram:
 *  title (script 30, red)         | T mid | x226..854  y31..85  (bl 70)
 *  b0 | hook quote (script20,muted)| T mid | x298..782  y100..136 (bl 126)
 *  b1 | molecule box + dots        | Draw  | x60..220  y165..225
 *  b1 | crossout                   | Draw  | x56..224  y162..228
 *  b1 | "not every molecule ✗"(13) | T mid | x140       y252
 *  b2 | 5 state chips (h36)        | Chip  | y168..204  x260/410/560/710/860 w140
 *  b2 | "= the STATE" chip (h32)   | Chip  | x550..710 y220..252
 *  b3 | surroundings note (12)     | T st  | x230..435 y257..272
 *  b3 | system box (h48)           | Draw  | x230..410 y278..326
 *  b3 | "system — gas in a cylinder"(13) | T mid | x235..405 y306
 *  b3 | wall leader + "the wall"(14,script) | T st | x440..502 y290..315 · leader (414,302)→(436,304)
 *  b4 | ring around "the wall"     | Draw  | c(471,302) rx45 ry25 → y272..341
 *  b4 | callout chip (h30)         | Chip  | x185..455 y360..390
 *  b5/6 | Gas A / Gas B boxes(h78) | Draw  | x170..370 / 394..594  y400..478
 *  b5/6 | wall rect (w24,h78)      | Draw  | x370..394 y400..478
 *  b5 | heat arrows (2, cross wall)| Draw  | y423 & y458, x355..405 — dims at b6
 *  b6 | crossout over arrow zone   | Draw  | x351..409 y410..463
 *  b5 | note "diathermic — heat flows.."(14,scr) | T mid | x382 y500 (green) — dims at b6
 *  b6 | note "adiabatic — blocked.."(14,script)  | T mid | x382 y500 (red) — supersedes b5 note
 *  b7 | verdict T1 "...on the"(21) | T end | x655 y525
 *  b7 | verdict T2 "WALL"(26,green)| T st  | x690 y525 · ring c(716,519) rx40 ry26
 *  b7 | closing note (15,script)   | T mid | x540 y575
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
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
  crossD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const DOTS: [number, number][] = [
  [78, 180], [104, 197], [130, 178], [156, 200], [182, 182], [200, 210],
  [92, 213], [118, 210], [146, 190], [170, 213], [66, 198], [190, 176],
];

const STATE_CHIPS: [number, string][] = [
  [260, "P — pressure"],
  [410, "V — volume"],
  [560, "T — temp"],
  [710, "m — mass"],
  [860, "composition"],
];

export default function Ch11Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always-on, blank board otherwise */}
      <Fade on={true}>
        <T x={540} y={70} size={30} fill={RED} script>
          {t("what thermodynamics actually measures", "thermodynamics asal mein measure kya karta hai")}
        </T>
      </Fade>

      {/* beat 0 — the warmth hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={126} size={20} fill={MUTED} script>
          {t(
            "“you can’t see it, weigh it, or bottle it”",
            "“na dikh sakta, na tol sakta, na bottle mein bhar sakta”"
          )}
        </T>
      </Fade>

      {/* beat 1 — macroscopic: not every molecule */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.2)}
        d="M 60 165 h 160 v 60 h -160 z"
        stroke={INK}
        sw={2.4}
        dur={0.7}
      />
      {DOTS.map(([x, y], i) => (
        <Fade key={i} on={beat >= 1} delay={dl(1, 0.5 + i * 0.06)}>
          <Circle cx={x} cy={y} r={3} fill={INK} />
        </Fade>
      ))}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.4)}
        d={crossD(60, 165, 160, 60)}
        stroke={RED}
        sw={2.6}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.1)}>
        <T x={140} y={252} size={13} fill={RED}>
          {t("not every molecule ✗", "har molecule nahi ✗")}
        </T>
      </Fade>

      {/* beat 2 — the bulk numbers = state */}
      {STATE_CHIPS.map(([x, label], i) => (
        <Fade key={label} on={beat >= 2} delay={dl(2, 0.3 + i * 0.5)}>
          <Chip x={x} y={168} w={140} h={36} fill={CREAM} stroke={AMBER} textFill={INK} size={15} script={false}>
            {label}
          </Chip>
        </Fade>
      ))}
      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <Chip x={550} y={220} w={160} h={32} fill={INK} textFill={CREAM} size={17}>
          {t("= the STATE", "= the STATE")}
        </Chip>
      </Fade>

      {/* beat 3 — system, wall, surroundings */}
      <Fade on={beat >= 3} dim={beat >= 5} delay={dl(3, 0.2)}>
        <T x={230} y={268} size={12} fill={MUTED} anchor="start" script={false}>
          {t("everything else = surroundings", "baaki sab kuch = surroundings")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.6)}
        d="M 230 278 h 180 v 48 h -180 z"
        stroke={INK}
        sw={2.6}
        dur={0.8}
      />
      <Fade on={beat >= 3} dim={beat >= 5} delay={dl(3, 1.3)}>
        <T x={320} y={306} size={13} fill={INK} weight={700} script={false}>
          {t("system — gas in a cylinder", "system — cylinder ki gas")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 2)}
        d="M 414 302 L 436 304"
        stroke={AMBER_DARK}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 3} dim={beat >= 5} delay={dl(3, 2.3)}>
        <T x={440} y={308} size={14} fill={AMBER_DARK} script anchor="start">
          {t("the wall", "the wall")}
        </T>
      </Fade>

      {/* beat 4 — the wall decides everything */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.4)}
        d={ringD(471, 302, 45, 25)}
        stroke={AMBER}
        sw={2.6}
        dur={0.8}
      />
      <Fade on={beat >= 4} dim={beat >= 5} delay={dl(4, 1.2)}>
        <Chip x={185} y={360} w={270} h={30} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14}>
          {t("wall type ⇒ decides everything", "wall ka type ⇒ sab decide karta hai")}
        </Chip>
      </Fade>

      {/* beats 5/6 — the two gases, twin boxes + shared wall */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0)}
        d="M 170 400 h 200 v 78 h -200 z"
        stroke={INK}
        sw={2.4}
        dur={0.8}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.3)}
        d="M 394 400 h 200 v 78 h -200 z"
        stroke={INK}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={270} y={436} size={16} fill={INK} weight={800} script={false}>
          Gas A
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={494} y={436} size={16} fill={INK} weight={800} script={false}>
          Gas B
        </T>
      </Fade>

      {/* wall state — diathermic (beat 5) */}
      <Fade on={beat >= 5} dim={beat >= 6} delay={dl(5, 0.6)}>
        <Rect x={370} y={400} width={24} height={78} rx={4} fill={AMBER} stroke={INK} strokeWidth={2} />
      </Fade>
      <Fade on={beat >= 5} dim={beat >= 6} delay={dl(5, 1.6)}>
        <Draw on={beat >= 5} delay={0} d={arrowD(355, 423, 405, 423)} stroke={AMBER_DARK} sw={2.4} dur={0.5} />
        <Draw on={beat >= 5} delay={0.3} d={arrowD(405, 458, 355, 458)} stroke={AMBER_DARK} sw={2.4} dur={0.5} />
      </Fade>
      <Fade on={beat >= 5} dim={beat >= 6} delay={dl(5, 2.4)}>
        <T x={382} y={500} size={14} fill={GREEN} script>
          {t("diathermic — heat flows until they settle", "diathermic — heat flow, jab tak settle na ho")}
        </T>
      </Fade>

      {/* wall state — adiabatic (beat 6, supersedes) */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Rect x={370} y={400} width={24} height={78} rx={4} fill={RED} stroke={INK} strokeWidth={2} />
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.6)}
        d={crossD(351, 410, 58, 53)}
        stroke={RED}
        sw={2.8}
        dur={0.6}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <T x={382} y={500} size={14} fill={RED} script>
          {t("adiabatic — blocked completely, own world", "adiabatic — poori tarah blocked, apni duniya")}
        </T>
      </Fade>

      {/* beat 7 — verdict */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={655} y={534} size={21} fill={INK} weight={800} anchor="end" script={false}>
          {t("interaction depends on the", "interaction depend karta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={690} y={534} size={26} fill={GREEN} weight={800} anchor="start" script={false}>
          WALL
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.8)}
        d={ringD(716, 528, 40, 26)}
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
      />
      <Fade on={beat >= 7} delay={dl(7, 2.6)}>
        <T x={540} y={586} size={14} fill={MUTED} script>
          {t("hold on to that — the next law is built on it", "yeh yaad rakhna — agla law isi par bana hai")}
        </T>
      </Fade>
    </Scene>
  );
}
