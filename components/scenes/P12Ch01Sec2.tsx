/**
 * P12Ch01 · Section 2 — "Conductors vs Insulators"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Detailed drawn plastic comb with teeth lifting paper bits
 *  - Detailed metallic rod cutaway with free-roaming electrons vs plastic polymer with bound electrons
 *  - Detailed hand & arm holding metal rod with electron flow arrows down into Earth ground symbol
 *
 * Beats (en [0, 5.89, 13.82, 34.65, 48.98, 59.82, 76.29, 81.83]):
 *  0 Title "conductors vs. insulators" + drawn underline
 *  1 Comb & Rod Demo: comb with teeth lifting paper bits + metal rod losing charge
 *  2 Badge 1: Conductors — metal cylinder with free roaming e⁻ dots & trajectories
 *  3 Badge 2: Insulators — plastic lattice with tightly bound e⁻ locked at nuclei
 *  4 Conductor example chips: Metals, Human Body, Earth, Ionic Solutions
 *  5 Insulator example chips: Plastic, Glass, Rubber, Dry Wood
 *  6 Earthing Demo: hand holding metal rod with charge draining into Earth symbol
 *  7 Grand Verdict: Conductors = free e⁻ (spreads) | Insulators = bound e⁻ (stuck)!
 */

import React from "react";
import { Circle, Ellipse, G, Line, Rect } from 'react-native-svg';
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

export default function P12Ch01Sec2({ currentTime, reveals, language }: SceneProps) {
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
          {t("conductors vs. insulators", "conductors vs. insulators ka antar")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 380 70 C 440 66, 620 74, 700 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Comb with Teeth & Metal Rod Object Drawings ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "why does a plastic comb hold charge, but a metal rod loses it?",
            "plastic comb charge kyun rakhta hai, par metal rod kho deta hai?"
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

      {/* Paper bits floating up to comb */}
      {[605, 635, 665, 695].map((x, idx) => (
        <Fade key={`paper${idx}`} on={beat >= 1} delay={dl(1, 2 + idx * 0.3)}>
          <Rect x={x} y={135 - idx * 2} width={8} height={6} rx={1} fill={INK} opacity={0.6} />
        </Fade>
      ))}

      {/* Metal Rod Object Drawing */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.2)}
        d="M 790 102 L 950 102 M 790 98 L 950 98"
        stroke="#64748b"
        sw={4}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        <T x={870} y={84} size={11} fill={INK}>
          {t("metal rod (drains)", "metal rod (drain)")}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Conductors Microscopic Cylinder ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={15} fill={RED} script anchor="start">
          {t(
            "CONDUCTORS — free roaming electrons",
            "CONDUCTORS — free roaming electrons"
          )}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 6}>
        <G transform="translate(60, 185)">
          {/* Metallic Cylinder Cutaway */}
          <Rect x={0} y={10} width={420} height={100} rx={12} fill="#e2e8f0" stroke="#475569" strokeWidth={2} />
          <Ellipse cx={420} cy={60} rx={14} ry={50} fill="#cbd5e1" stroke="#475569" strokeWidth={1.5} />

          {/* Free electrons & trajectories */}
          <Circle cx={60} cy={45} r={6} fill={GREEN} />
          <Circle cx={150} cy={35} r={6} fill={GREEN} />
          <Circle cx={240} cy={75} r={6} fill={GREEN} />
          <Circle cx={330} cy={50} r={6} fill={GREEN} />
          <Circle cx={190} cy={65} r={6} fill={GREEN} />

          <Draw
            on={beat >= 2}
            delay={dl(2, 1.8)}
            d="M 60 45 Q 105 20, 150 35 M 150 35 Q 195 90, 240 75 M 240 75 Q 285 30, 330 50"
            stroke={GREEN}
            sw={1.8}
            dur={0.9}
          />

          <T x={210} y={132} anchor="middle" size={13} script={true} fill={GREEN}>
            {t(
              "Electrons roam freely → Charge spreads instantly!",
              "Electrons freely roam karte hain → Charge turant spread hota hai!"
            )}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 3: Badge 2 & Insulators Microscopic Polymer Lattice ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={562} y={170} size={15} fill={RED} script anchor="start">
          {t(
            "INSULATORS — tightly bound electrons",
            "INSULATORS — tightly bound electrons"
          )}
        </T>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 6}>
        <G transform="translate(540, 185)">
          {/* Plastic Polymer Rod Cutaway */}
          <Rect x={0} y={10} width={450} height={100} rx={12} fill="#fef3c7" stroke="#f59e0b" strokeWidth={2} />

          {/* Bound Atomic Cores with Locked Electrons */}
          {[70, 170, 270, 370].map((cx, idx) => (
            <G key={`poly${idx}`}>
              <Circle cx={cx} cy={42} r={12} fill="#fed7aa" stroke="#f97316" strokeWidth={1.5} />
              <T x={cx} y={46} anchor="middle" size={10} weight={800} fill="#c2410c">+</T>
              <Circle cx={cx} cy={60} r={4} fill={RED} />
              <Line x1={cx} y1={42} x2={cx} y2={60} stroke={RED} strokeWidth={1.2} />

              <Circle cx={cx} cy={78} r={12} fill="#fed7aa" stroke="#f97316" strokeWidth={1.5} />
              <T x={cx} y={82} anchor="middle" size={10} weight={800} fill="#c2410c">+</T>
              <Circle cx={cx} cy={96} r={4} fill={RED} />
              <Line x1={cx} y1={78} x2={cx} y2={96} stroke={RED} strokeWidth={1.2} />
            </G>
          ))}

          <T x={225} y={132} anchor="middle" size={13} script={true} fill={RED}>
            {t(
              "Electrons locked to atoms → Charge stays stuck!",
              "Electrons atoms se locked hain → Charge wahi stuck rehta hai!"
            )}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 4 & 5: Category Pills ── */}
      {/* Conductors List */}
      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(60, 340)">
          <Chip x={0} y={0} w={90} h={30} fill="#dcfce7" stroke={GREEN} textFill={GREEN} size={12.5} script={false}>
            {t("Metals", "Metals")}
          </Chip>
          <Chip x={100} y={0} w={110} h={30} fill="#dcfce7" stroke={GREEN} textFill={GREEN} size={12.5} script={false}>
            {t("Human Body", "Human Body")}
          </Chip>
          <Chip x={220} y={0} w={80} h={30} fill="#dcfce7" stroke={GREEN} textFill={GREEN} size={12.5} script={false}>
            {t("Earth", "Earth")}
          </Chip>
          <Chip x={310} y={0} w={120} h={30} fill="#dcfce7" stroke={GREEN} textFill={GREEN} size={12.5} script={false}>
            {t("Ionic Solutions", "Ionic Solutions")}
          </Chip>
        </G>
      </Fade>

      {/* Insulators List */}
      <Fade on={beat >= 5} dim={beat >= 6}>
        <G transform="translate(540, 340)">
          <Chip x={0} y={0} w={90} h={30} fill="#ffe4e6" stroke={RED} textFill={RED} size={12.5} script={false}>
            {t("Plastic", "Plastic")}
          </Chip>
          <Chip x={100} y={0} w={80} h={30} fill="#ffe4e6" stroke={RED} textFill={RED} size={12.5} script={false}>
            {t("Glass", "Glass")}
          </Chip>
          <Chip x={190} y={0} w={85} h={30} fill="#ffe4e6" stroke={RED} textFill={RED} size={12.5} script={false}>
            {t("Rubber", "Rubber")}
          </Chip>
          <Chip x={285} y={0} w={100} h={30} fill="#ffe4e6" stroke={RED} textFill={RED} size={12.5} script={false}>
            {t("Dry Wood", "Dry Wood")}
          </Chip>
        </G>
      </Fade>

      {/* ── BEAT 6: Earthing / Grounding Object Demo (Drawn Hand & Earth Ground) ── */}
      <Fade on={beat >= 6} dim={beat >= 7}>
        <G transform="translate(60, 395)">
          <T x={0} y={24} anchor="start" size={14} weight={700} fill="#0369a1">
            {t("Earthing / Grounding Demonstration:", "Earthing / Grounding Demonstration:")}
          </T>

          {/* Metal Rod held by Hand */}
          <Rect x={180} y={40} width={140} height={18} rx={4} fill="#cbd5e1" stroke="#475569" strokeWidth={1.5} />
          <T x={250} y={53} anchor="middle" size={10} fill={INK}>
            {t("Metal Rod", "Metal Rod")}
          </T>

          {/* Hand Holding Rod */}
          <Draw
            on={beat >= 6}
            delay={dl(6, 0.4)}
            d="M 320 49 Q 350 40, 370 49 T 400 49"
            stroke="#b45309"
            sw={2.5}
          />
          <T x={360} y={36} anchor="middle" size={10} fill="#b45309">
            {t("Human Hand", "Human Hand")}
          </T>

          {/* Draining Flow Arrow into Earth */}
          <Draw
            on={beat >= 6}
            delay={dl(6, 0.8)}
            d={arrowD(400, 49, 400, 95)}
            stroke={RED}
            sw={2.5}
          />

          {/* Multi-tiered Earth Ground Symbol */}
          <G transform="translate(400, 95)">
            <Line x1={-20} y1={0} x2={20} y2={0} stroke="#0369a1" strokeWidth={3} />
            <Line x1={-13} y1={5} x2={13} y2={5} stroke="#0369a1" strokeWidth={2.2} />
            <Line x1={-6} y1={10} x2={6} y2={10} stroke="#0369a1" strokeWidth={1.5} />
            <T x={0} y={24} anchor="middle" size={10} weight={800} fill="#0369a1">EARTH</T>
          </G>

          <T x={490} y={55} anchor="start" size={14} script={true} fill={INK}>
            {t(
              "Bare hand touch → Charge leaks straight into Earth!",
              "Bare hand touch → Charge ground mein drain ho jata hai!"
            )}
          </T>

          <T x={490} y={92} anchor="start" size={14} script={true} fill={RED}>
            {t("EARTHING / GROUNDING", "EARTHING / GROUNDING")}
          </T>
          <Draw
            on={beat >= 6}
            delay={dl(6, 1.5)}
            d={ringD(570, 88, 85, 16)}
            stroke={RED}
            sw={2.2}
          />
        </G>
      </Fade>

      {/* ── BEAT 7: Grand Verdict Chip ── */}
      <Fade on={beat >= 7}>
        <Chip
          x={100}
          y={536}
          w={880}
          h={44}
          fill={GREEN}
          textFill="#ffffff"
          size={18}
        >
          {t(
            "★ VERDICT: Conductors = free e⁻ (spreads) | Insulators = bound e⁻ (stuck)!",
            "★ VERDICT: Conductors = free e⁻ (spreads) | Insulators = bound e⁻ (stuck)!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
