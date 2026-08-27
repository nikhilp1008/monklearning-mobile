/**
 * P12Ch01 · Section 1 — "Two Kinds of Charge and the Conservation Principle"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Drawn plastic comb with teeth lifting paper bits + glass rod repelling glass
 *  - Drawn charged sphere pairs showing outward repel vs inward attract force arrows
 *  - Drawn atom nucleus with orbiting electron & transfer arrows
 *  - Parameterized badge positions (no overlaps)
 *
 * Beats (en [0, 4.78, 18.35, 27.73, 36.69, 46.93, 64.85, 73.05, 86.44]):
 *  0 Title "two kinds of charge & the conservation principle" + drawn underline
 *  1 Comb & Rod Demo: comb with teeth lifting paper + glass rod with repulsion arrow
 *  2 Badge 1: two kinds of charge — positive (+) and negative (-)
 *  3 THE DEMO: like charges REPEL ← → vs unlike charges ATTRACT → ←
 *  4 Badge 2: Benjamin Franklin named (+/-) — "arbitrary" ringed
 *  5 Atomic picture: charging = electron transfer (lose e⁻ → +, gain e⁻ → -)
 *  6 Conservation law: charge is NEVER created or destroyed — only transferred
 *  7 Kirana shop analogy: till + pockets = fixed total cash all day
 *  8 Grand Verdict: Σ Q = constant — universe's books always balance!
 */

import React from "react";
import { Circle, G, Rect } from 'react-native-svg';
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
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw
        on={on}
        delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 5} size={14} fill={RED} weight={800}>
          {n}
        </T>
      </Fade>
    </G>
  );
}

export default function P12Ch01Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Comb teeth lines
  const combTeeth: string[] = [];
  for (let x = 600; x <= 720; x += 12) {
    combTeeth.push(`M ${x} 104 v 16`);
  }

  return (
    <Scene>
      {/* ── BEAT 0: Title ── */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t(
            "two kinds of charge & the conservation principle",
            "charge ke do types & conservation ka niyam"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 360 70 C 440 66, 640 74, 720 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Comb with Teeth & Glass Rod Object Drawings ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "rubbing transfers something hidden — glass rod repels glass, comb lifts paper",
            "rubbing se kuch hidden transfer hota hai — glass rod glass ko repel karti hai"
          )}
        </T>
      </Fade>

      {/* Comb Object Drawing */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d={`M 590 90 h 140 v 14 h -140 z ${combTeeth.join(" ")}`}
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.8}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={660} y={84} size={11} fill={AMBER_DARK}>
          {t("plastic comb", "plastic comb")}
        </T>
      </Fade>

      {/* Paper bits floating up */}
      {[605, 635, 665, 695].map((x, idx) => (
        <Fade key={`paper1_${idx}`} on={beat >= 1} delay={dl(1, 2 + idx * 0.3)}>
          <Rect x={x} y={135 - idx * 2} width={8} height={6} rx={1} fill={INK} opacity={0.6} />
        </Fade>
      ))}

      {/* Glass Rod Object Drawing */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.2)}
        d="M 790 102 L 930 102"
        stroke="#64748b"
        sw={4}
        dur={0.6}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.8)}
        d={arrowD(935, 102, 990, 102)}
        stroke={RED}
        sw={2.2}
      />
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <T x={860} y={84} size={11} fill={INK}>
          {t("glass rod (repels)", "glass rod (repel)")}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Two Kinds of Charge ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={15} fill={RED} script anchor="start">
          {t(
            "exactly two kinds of charge — positive (+) and negative (-)",
            "exactly do types ke charge — positive (+) aur negative (-)"
          )}
        </T>
      </Fade>

      {/* ── BEAT 3: Charged Spheres & Force Vector Arrows ── */}
      {/* Left Pair: Like Repel */}
      <Fade on={beat >= 3} dim={beat >= 5}>
        <Circle cx={180} cy={225} r={22} fill="#ffe4e6" stroke={RED} strokeWidth={2} />
        <T x={180} y={232} size={20} fill={RED} weight={800}>+</T>

        <Circle cx={320} cy={225} r={22} fill="#ffe4e6" stroke={RED} strokeWidth={2} />
        <T x={320} y={232} size={20} fill={RED} weight={800}>+</T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 1)}
        d={arrowD(150, 225, 100, 225)}
        stroke={RED}
        sw={2.5}
        dur={0.5}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 1)}
        d={arrowD(350, 225, 400, 225)}
        stroke={RED}
        sw={2.5}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.8)} dim={beat >= 5}>
        <T x={250} y={270} size={14} fill={RED} script>
          {t("like charges REPEL ← →", "same-sign charges REPEL ← →")}
        </T>
      </Fade>

      {/* Right Pair: Unlike Attract */}
      <Fade on={beat >= 3} dim={beat >= 5}>
        <Circle cx={660} cy={225} r={22} fill="#ffe4e6" stroke={RED} strokeWidth={2} />
        <T x={660} y={232} size={20} fill={RED} weight={800}>+</T>

        <Circle cx={800} cy={225} r={22} fill="#dcfce7" stroke={GREEN} strokeWidth={2} />
        <T x={800} y={232} size={22} fill={GREEN} weight={800}>-</T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 2.5)}
        d={arrowD(690, 225, 725, 225)}
        stroke={GREEN}
        sw={2.5}
        dur={0.5}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 2.5)}
        d={arrowD(770, 225, 735, 225)}
        stroke={GREEN}
        sw={2.5}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 3.2)} dim={beat >= 5}>
        <T x={730} y={270} size={14} fill={GREEN} script>
          {t("unlike charges ATTRACT → ←", "opposite-sign charges ATTRACT → ←")}
        </T>
      </Fade>

      {/* ── BEAT 4: Badge 2 & Franklin Naming ── */}
      <Badge n={2} cx={52} cy={300} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} dim={beat >= 6}>
        <T x={74} y={305} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "Benjamin Franklin named (+ / -) arbitrarily long before electron discovery",
            "Benjamin Franklin ne (+ / -) arbitrary naam diye electrons discover hone se pehle"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 2)}
        d={ringD(440, 301, 45, 15)}
        stroke={AMBER}
        sw={2.2}
        dur={0.6}
      />

      {/* ── BEAT 5: Atomic Picture (Electron Transfer) ── */}
      <Fade on={beat >= 5} dim={beat >= 7}>
        <Circle cx={120} cy={385} r={18} fill="#ffe4e6" stroke={RED} strokeWidth={1.8} />
        <T x={120} y={391} size={14} fill={RED} weight={700}>+</T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.4)}
        d="M 75 385 C 75 360, 165 360, 165 385 C 165 410, 75 410, 75 385"
        stroke={MUTED}
        sw={1.4}
        dur={0.7}
      />
      <Fade on={beat >= 5} delay={dl(5, 1)} dim={beat >= 7}>
        <Circle cx={165} cy={380} r={5} fill={GREEN} />
        <T x={175} y={376} size={10} fill={GREEN} anchor="start">e⁻</T>
      </Fade>

      {/* Lose e⁻ */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 2)}
        d={arrowD(210, 368, 270, 368)}
        stroke={RED}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 5} delay={dl(5, 2.4)} dim={beat >= 7}>
        <T x={240} y={362} size={11} fill={RED}>lose e⁻</T>
        <Chip x={280} y={354} w={105} h={30} fill="#ffe4e6" stroke={RED} textFill={RED} size={14}>
          {t("POSITIVE", "POSITIVE")}
        </Chip>
      </Fade>

      {/* Gain e⁻ */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 3.6)}
        d={arrowD(210, 404, 270, 404)}
        stroke={GREEN}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 5} delay={dl(5, 4)} dim={beat >= 7}>
        <T x={240} y={398} size={11} fill={GREEN}>gain e⁻</T>
        <Chip x={280} y={392} w={105} h={30} fill="#dcfce7" stroke={GREEN} textFill={GREEN} size={14}>
          {t("NEGATIVE", "NEGATIVE")}
        </Chip>
      </Fade>

      {/* Side Note */}
      <Fade on={beat >= 5} delay={dl(5, 5)} dim={beat >= 7}>
        <T x={550} y={385} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "charging is ONLY moving electrons around!",
            "charging sirf electrons ko idhar-udhar karna hai!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 6: Conservation Law Open Note ── */}
      <Fade on={beat >= 6} dim={beat >= 8}>
        <Rect
          x={60}
          y={445}
          width={450}
          height={65}
          rx={8}
          fill="#fff7ed"
          stroke={AMBER_DARK}
          strokeWidth={1.8}
        />
        <T x={285} y={482} size={15} fill={AMBER_DARK} weight={800}>
          {t(
            "charge is NEVER created or destroyed",
            "charge KABHI create ya destroy nahi hota"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 2)}
        d="M 155 492 C 170 489, 195 494, 215 490"
        stroke={RED}
        sw={2.4}
        dur={0.5}
      />

      {/* ── BEAT 7: Kirana Shop Analogy ── */}
      <Fade on={beat >= 7} dim={beat >= 8}>
        <Rect
          x={530}
          y={445}
          width={490}
          height={65}
          rx={8}
          fill="#f0f9ff"
          stroke="#0284c7"
          strokeWidth={1.8}
        />
        <T x={775} y={482} size={14} fill="#0369a1" script>
          {t(
            "kirana shop: till + pockets = fixed total cash all day",
            "kirana shop: galla + jeb = fixed total cash din bhar"
          )}
        </T>
      </Fade>

      {/* ── BEAT 8: Grand Verdict Chip ── */}
      <Fade on={beat >= 8}>
        <Chip
          x={100}
          y={536}
          w={880}
          h={44}
          fill={GREEN}
          textFill="#ffffff"
          size={19}
        >
          {t(
            "★ VERDICT: Σ Q_initial = Σ Q_final (universe's books always balance!)",
            "★ VERDICT: Σ Q_initial = Σ Q_final (universe ka khata hamesha balance!)"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
