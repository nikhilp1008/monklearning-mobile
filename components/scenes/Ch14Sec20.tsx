/**
 * Ch14 · Section 20 — "Harmonics, resonance, and pipes"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.8, 16.31, 30.84, 46.8, 61.69, 74.45, 85.09]):
 *  0 hook: a bounded medium is picky about which waves it holds
 *  1 preview: two workhorses — open pipe and closed pipe
 *  2 rule: only certain λ survive — clamped string needs a node at each end
 *  3 fundamental = lowest allowed f; shorter length → higher pitch (bansuri)
 *  4 resonance: drive at natural f → swells (swing analogy)
 *  5 pipe outlines: closed end = node (still), open end = antinode (free)
 *  6 OPEN pipe: fundamental pattern, ALL harmonics
 *  7 CLOSED pipe: fundamental pattern, ODD harmonics only, 1 octave lower
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | caption (12.5,muted)          | T mid | x540 bl105            y94..109
 *  b1 | preview (13,muted)            | T mid | x540 bl125            y114..129
 *  b2 | rule (12.5)                   | T mid | x540 bl150            y139..154
 *  b3 | fundamental (12.5)            | T mid | x540 bl175            y164..179
 *  b4 | resonance (12.5)              | T mid | x540 bl200            y189..204
 *  b5 | OPEN title (14)               | T mid | x300 bl285            y272..286
 *  b5 | OPEN tube                     | Draw  | x150..450 y300/340
 *  b5 | CLOSED title (14)             | T mid | x750 bl285            y272..286
 *  b5 | CLOSED tube + end cap        | Draw  | x600..900 y300/340
 *  b5 | open note (11,green)          | T mid | x300 bl455            y444..456
 *  b5 | closed note (11)              | T mid | x750 bl455            y444..456
 *  b6 | OPEN wave curve               | Draw  | x150..450 y280..320
 *  b6 | node/antinode dots            | Fade  | x150/300/450 y280/320
 *  b6 | harmonic label (12,green)     | T mid | x300 bl478            y467..479
 *  b7 | CLOSED wave curve             | Draw  | x600..900 y280..320
 *  b7 | node/antinode dots            | Fade  | x600/900 y320/280
 *  b7 | odd-harmonic label (12)       | T mid | x750 bl478            y467..479
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

function pipeWaveD(x1: number, centerline: number, amp: number, width: number, mode: "open" | "closed"): string {
  const N = 48;
  let d = "";
  for (let i = 0; i <= N; i++) {
    const u = i / N;
    const y = mode === "open" ? centerline - amp * Math.abs(Math.cos(Math.PI * u)) : centerline - amp * Math.sin((Math.PI * u) / 2);
    const x = x1 + width * u;
    d += `${i === 0 ? "M" : "L"} ${x.toFixed(1)} ${y.toFixed(1)} `;
  }
  return d;
}

export default function Ch14Sec20({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={26} fill={RED} script>
          {t("harmonics, resonance, and pipes", "harmonics, resonance, aur pipes")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={105} size={12.5} fill={MUTED}>
          {t("a bounded medium is picky about which waves it holds", "bounded medium picky hai ki kaunsi waves rakhega")}
        </T>
      </Fade>

      {/* beat 1 — preview: two workhorses */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={125} size={13} fill={MUTED}>
          {t("two workhorses: open pipe vs closed pipe (below)", "do workhorses: open pipe vs closed pipe (neeche)")}
        </T>
      </Fade>

      {/* beat 2 — the rule */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={150} size={12.5} fill={INK}>
          {t(
            "rule: only certain λ survive — a clamped string needs a node at each end",
            "rule: sirf kuch λ bachti — dono ends clamped string ko har end pe node"
          )}
        </T>
      </Fade>

      {/* beat 3 — fundamental */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={175} size={12.5} fill={INK}>
          {t(
            "fundamental = lowest allowed f | shorter length → higher pitch (bansuri!)",
            "fundamental = sabse neechi allowed f | chhota length → high pitch (bansuri!)"
          )}
        </T>
      </Fade>

      {/* beat 4 — resonance */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={200} size={12.5} fill={AMBER_DARK}>
          {t(
            "resonance: drive at natural f → swells (swing pushed in rhythm)",
            "resonance: natural f pe drive karo → swell (swing rhythm mein push)"
          )}
        </T>
      </Fade>

      {/* beat 5 — pipe outlines and the boundary rule */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={300} y={285} size={14} fill={INK} weight={700}>
          OPEN PIPE
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d="M 150 300 L 450 300 M 150 340 L 450 340" stroke={INK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={750} y={285} size={14} fill={INK} weight={700}>
          CLOSED PIPE
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.9)} d="M 600 300 L 900 300 M 600 340 L 900 340 M 600 300 L 600 340" stroke={INK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 2.8)}>
        <T x={300} y={455} size={11} fill={GREEN}>
          {t("antinode at BOTH ends", "dono ends pe antinode")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.2)}>
        <T x={750} y={455} size={11} fill={INK}>
          {t("node (closed) ↔ antinode (open)", "node (closed) ↔ antinode (open)")}
        </T>
      </Fade>

      {/* beat 6 — open pipe: fundamental, all harmonics */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d={pipeWaveD(150, 320, 40, 300, "open")} stroke={GREEN} sw={2} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <>
          <Circle cx={150} cy={280} r={4} fill={GREEN} />
          <Circle cx={450} cy={280} r={4} fill={GREEN} />
          <Circle cx={300} cy={320} r={4} fill={RED} />
        </>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={300} y={478} size={12} fill={GREEN}>
          {t("f, 2f, 3f... ALL harmonics!", "f, 2f, 3f... SAARE harmonics!")}
        </T>
      </Fade>

      {/* beat 7 — closed pipe: fundamental, odd harmonics only */}
      <Draw on={beat >= 7} delay={dl(7, 0.3)} d={pipeWaveD(600, 320, 40, 300, "closed")} stroke={GREEN} sw={2} dur={0.7} />
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <>
          <Circle cx={600} cy={320} r={4} fill={RED} />
          <Circle cx={900} cy={280} r={4} fill={GREEN} />
        </>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={750} y={478} size={12} fill={INK}>
          {t("f, 3f, 5f... ODD only, 1 octave below!", "f, 3f, 5f... sirf ODD, 1 octave neeche!")}
        </T>
      </Fade>
    </Scene>
  );
}
