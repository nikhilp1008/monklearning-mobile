/**
 * C11 Ch08 · Section 18 — "Worked example — name + property (JEE Main)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 6.66, 18.52, 29.7, 37.8, 55.81, 78.59, 99.33]):
 *  0 title (always-on, seq1) · 1 task + bare structure drawn · 2 seniority fixes
 *  C1 (COOH) · 3 remaining numbers 4/3/2, longest chain = butanoic acid · 4 name
 *  assembled (stamped) · 5 sp2/sp3 tags, C2 highlighted as the answer · 6 red note
 *  (seniority anchors numbering even when idle) · 7 green closer (the standard move)
 *
 * Layout plan:
 *  b1 | zig-zag C4=C3-C2(CH3)-C1(COOH)   | Draw  | x160..385 y125..220
 *  b1 | task (14, ink)                    | T mid | y90
 *  b2 | "1" label (amber)                 | T mid | x340 y245
 *  b2 | text                              | T mid | y300
 *  b3 | "4","3","2" labels                | T mid | x160/220/280 y245
 *  b3 | text                              | T mid | y330
 *  b4 | text + name box                   | T+rect| y360, box y385..425
 *  b5 | sp2/sp2/sp3(big)/sp2 tags         | T mid | y275
 *  b6 | margin bar + red note             | Draw+T| x60 y455..485 · x76 y473
 *  b7 | closer (16, green, w700)          | T mid | x540 y510
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, GREEN, RED, CREAM, AMBER,
  Scene,
} from '@/components/scenes/kit';
import { bondD, doubleBondD } from "./chem-kit";

export default function C11Ch08Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const xs = [160, 220, 280, 340]; // C4, C3, C2, C1

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={RED} script>
          {t("Worked example — name + property (JEE Main)", "Worked example — naam + property (JEE Main)")}
        </T>
      </Fade>

      {/* beat 1 — task + bare structure */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={90} size={14} fill={INK}>
          CH₂=CH−CH(CH₃)−COOH: {t("name it + hybridization of C2", "naam do + C2 ka hybridization")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.7)}
        d={doubleBondD(xs[0], 220, xs[1], 185, 3)}
        stroke={INK}
        sw={2.4}
        dur={0.5}
      />
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d={bondD(xs[1], 185, xs[2], 220)} stroke={INK} sw={2.4} dur={0.35} />
      <Draw on={beat >= 1} delay={dl(1, 1.7)} d={bondD(xs[2], 220, 280, 182)} stroke={INK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={280} y={167} size={15} fill={INK} weight={700}>
          CH₃
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.3)} d={bondD(xs[2], 220, xs[3], 185)} stroke={INK} sw={2.4} dur={0.35} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.7)}
        d={doubleBondD(xs[3], 185, xs[3], 140, 3)}
        stroke={INK}
        sw={2.2}
        dur={0.35}
      />
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={xs[3]} y={125} size={15} fill={INK} weight={700}>
          O
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.3)} d={bondD(xs[3], 185, 385, 205)} stroke={INK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 3.6)}>
        <T x={400} y={210} size={15} fill={INK} weight={700}>
          OH
        </T>
      </Fade>

      {/* beat 2 — seniority fixes C1 */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={xs[3]} y={245} size={13} fill={AMBER_DARK} weight={700}>
          1
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={540} y={300} size={13} fill={INK}>
          {t("COOH = principal group → suffix -oic acid; its C = C1", "COOH = principal group → suffix -oic acid; iska C = C1")}
        </T>
      </Fade>

      {/* beat 3 — the rest of the chain */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={xs[0]} y={245} size={13} fill={AMBER_DARK} weight={700}>
          4
        </T>
        <T x={xs[1]} y={245} size={13} fill={AMBER_DARK} weight={700}>
          3
        </T>
        <T x={xs[2]} y={245} size={13} fill={AMBER_DARK} weight={700}>
          2
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={540} y={330} size={13} fill={INK}>
          {t("longest chain through COOH = 4C → butanoic acid", "COOH se guzarne wali longest chain = 4C → butanoic acid")}
        </T>
      </Fade>

      {/* beat 4 — assemble the name */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={360} size={13} fill={INK}>
          {t("C3=C4 → but-3-enoic acid; methyl on C2 → 2-methyl", "C3=C4 → but-3-enoic acid; C2 par methyl → 2-methyl")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <Rect x={330} y={385} width={420} height={40} rx={8} fill={CREAM} stroke={AMBER} strokeWidth={2} />
        <T x={540} y={411} size={18} fill={INK} weight={800}>
          2-methylbut-3-enoic acid
        </T>
      </Fade>

      {/* beat 5 — hybridization, C2 is the answer */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={xs[0]} y={275} size={13} fill={RED} weight={700}>
          sp²
        </T>
        <T x={xs[1]} y={275} size={13} fill={RED} weight={700}>
          sp²
        </T>
        <T x={xs[3]} y={275} size={13} fill={RED} weight={700}>
          sp²
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={xs[2]} y={277} size={16} fill={GREEN} weight={800}>
          sp³
        </T>
      </Fade>

      {/* beat 6 — seniority anchors even when idle */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 60 455 L 60 485" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={473} size={15} fill={RED} script anchor="start">
          {t(
            "seniority fixes C1 even when it 'demotes nothing' here — it still anchors numbering",
            "seniority C1 fix karta hai chahe 'kuch demote' na ho — numbering yahi anchor karti"
          )}
        </T>
      </Fade>

      {/* beat 7 — the standard move */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={510} size={16} fill={GREEN} weight={700}>
          {t(
            "seniority + longest chain through group + lowest-locant + hybridization count",
            "seniority + group wali longest chain + lowest-locant + hybridization count"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
