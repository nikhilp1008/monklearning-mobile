/**
 * Ch14 · Section 28 — "The Doppler effect: why pitch changes"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.17, 15.66, 22.14, 28.18, 37.13, 46.97, 52.34]):
 *  0 hook: train rushes past, pitch drops — driver hears no change
 *  1 the figure: wavefronts bunch ahead, spread behind a moving source
 *  2 the horn itself never changed its note
 *  3 define: Doppler = Δf observed from relative source/observer motion
 *  4 gut check: TOWARD → f UP, AWAY → f DOWN
 *  5 why (toward): wavefronts crowd → shorter λ → HIGHER pitch
 *  6 why (away): wavefronts stretch → longer λ → LOWER pitch
 *  7 same logic if the observer moves instead
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | caption (13,muted)            | T mid | x540 bl110            y97..117
 *  b1 | axis                          | Draw  | x150..950 y330
 *  b1 | source dot + arrow            | Draw  | x550..580 y330
 *  b1 | 5 ahead ticks (15px apart)    | Draw  | x600..660 y320..340
 *  b1 | 5 behind ticks (45px apart)   | Draw  | x320..500 y320..340
 *  b1 | "behind: spread" (12,muted)   | T mid | x410 bl365            y353..367  (dim@b6)
 *  b1 | "ahead: bunched" (12,muted)   | T mid | x630 bl365            y353..367  (dim@b5)
 *  b2 | horn note (12,muted)          | T mid | x540 bl400            y388..403
 *  b3 | definition chip (h42,s14)     | Chip  | x190..890 y430..472
 *  b4 | gut-check chip (h44,s15)      | Chip  | x280..800 y480..524
 *  b5 | "toward: crowds..." (12,green)| T mid | x710 bl365            y353..367
 *  b6 | "away: stretches..." (12,red) | T mid | x330 bl365            y353..367
 *  b7 | observer note (12,amber-d)    | T mid | x540 bl555            y543..558
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

// Ahead ticks sit 15px apart (compressed); behind ticks sit 45px apart
// (stretched, 3:1 ratio) — a uniform-spacing tick row on each side of the
// moving source, matching the real physics (constant λ ahead, constant λ
// behind) far more legibly than overlapping wavefront circles would.
const AHEAD_TICKS = [600, 615, 630, 645, 660];
const BEHIND_TICKS = [500, 455, 410, 365, 320];

export default function Ch14Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={26} fill={RED} script>
          {t("the Doppler effect: why pitch changes", "Doppler effect: pitch kyun badalti hai")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={110} size={13} fill={MUTED} script>
          {t(
            "train rushes past, pitch drops — the driver hears no change",
            "train guzarti — pitch girti; driver ko koi change nahi sunta"
          )}
        </T>
      </Fade>

      {/* beat 1 — the figure: bunched ahead, spread behind */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 150 330 L 950 330" stroke={MUTED} sw={1.6} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <Circle cx={550} cy={330} r={5} fill={AMBER_DARK} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d={arrowD(550, 330, 580, 330)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      {AHEAD_TICKS.map((x, i) => (
        <Draw key={x} on={beat >= 1} delay={dl(1, 1.9 + i * 0.15)} d={`M ${x} 320 L ${x} 340`} stroke={GREEN} sw={2} dur={0.2} />
      ))}
      {BEHIND_TICKS.map((x, i) => (
        <Draw key={x} on={beat >= 1} delay={dl(1, 2.8 + i * 0.15)} d={`M ${x} 320 L ${x} 340`} stroke={RED} sw={2} dur={0.2} />
      ))}
      <Fade on={beat >= 1} dim={beat >= 6} delay={dl(1, 3.8)}>
        <T x={410} y={365} size={12} fill={MUTED}>
          {t("behind: spread (longer λ)", "behind: spread (longer λ)")}
        </T>
      </Fade>
      <Fade on={beat >= 1} dim={beat >= 5} delay={dl(1, 4.2)}>
        <T x={630} y={365} size={12} fill={MUTED}>
          {t("ahead: bunched (shorter λ)", "ahead: bunched (shorter λ)")}
        </T>
      </Fade>

      {/* beat 2 — the horn never changed */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={400} size={12} fill={MUTED} script>
          {t("→ the horn itself never changed its note!", "→ horn ne apna note kabhi badla hi nahi!")}
        </T>
      </Fade>

      {/* beat 3 — the definition */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <Chip x={190} y={430} w={700} h={42} fill="#fff" stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          {t(
            "Doppler = Δf you observe when source & observer move relative to each other",
            "Doppler = Δf jab source & observer relative move karte"
          )}
        </Chip>
      </Fade>

      {/* beat 4 — the gut check */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={280} y={480} w={520} h={44} fill="#fff" stroke={RED} textFill={RED} size={15} script={false}>
          {t("GUT CHECK: TOWARD → f UP  |  AWAY → f DOWN", "GUT CHECK: TOWARD → f UP  |  AWAY → f DOWN")}
        </Chip>
      </Fade>

      {/* beat 5 — why: toward */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={710} y={365} size={12} fill={GREEN}>
          {t("toward: crowds → shorter λ → HIGHER pitch!", "toward: crowd karte → chhoti λ → HIGHER pitch!")}
        </T>
      </Fade>

      {/* beat 6 — why: away */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={330} y={365} size={12} fill={RED}>
          {t("away: stretches → longer λ → LOWER pitch!", "away: stretch karte → badi λ → LOWER pitch!")}
        </T>
      </Fade>

      {/* beat 7 — same logic for a moving observer */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={555} size={12} fill={AMBER_DARK} script>
          {t(
            "same logic if YOU move: toward=more wavefronts/sec=higher f",
            "same logic tum move karo tab bhi: toward=zyada wavefronts/sec=high f"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
