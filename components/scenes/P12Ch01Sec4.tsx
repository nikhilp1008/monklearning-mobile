/**
 * P12Ch01 · Section 4 — "Charging by Friction and by Conduction"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Drawn glass rod with woven silk cloth wrapped around it (Friction)
 *  - Drawn metallic spheres touching with spark/contact arc and transfer arrows (Conduction)
 *  - Clean open comparison table layout with parameterized badge positions
 *
 * Beats (en [0, 5.63, 11.18, 31.83, 56.32, 72.11, 83.71, 95.91]):
 *  0 Title "charging by friction and by conduction" + drawn underline
 *  1 Hook note: two clean procedures — electrons do all travelling!
 *  2 Procedure A (Friction): glass rod + silk cloth object drawing with e⁻ transfer
 *  3 Procedure B (Conduction): touching metal spheres with spark contact & e⁻ flow
 *  4 Friction key rule note: materials MUST be different
 *  5 Badge 1: Conduction signature — once-neutral body gets the SAME sign
 *  6 Summary comparison table: Friction vs Conduction
 *  7 Grand Verdict: Friction ⇒ Opposite Signs | Conduction ⇒ Same Sign!
 */

import React from "react";
import { Circle, G, Path, Rect } from 'react-native-svg';
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

export default function P12Ch01Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ── BEAT 0: Title ── */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("charging by friction and by conduction", "friction aur conduction se charging")}
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

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "two clean practical procedures — electrons do all the travelling!",
            "do clean practical procedures — electrons hi travel karte hain!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Procedure A Object Drawing (Friction) ── */}
      <Fade on={beat >= 2} dim={beat >= 6}>
        <T x={60} y={135} anchor="start" size={13.5} weight={700} fill={AMBER_DARK}>
          {t("PROCEDURE A — FRICTION", "PROCEDURE A — FRICTION")}
        </T>
        <G transform="translate(60, 155)">
          {/* Glass Rod Object Drawing */}
          <Rect x={40} y={40} width={140} height={18} rx={4} fill="#e2e8f0" stroke="#64748b" strokeWidth={1.5} />
          <T x={110} y={53} anchor="middle" size={10} fill={INK}>Glass Rod (+)</T>

          {/* Woven Silk Cloth Wrapped around Rod */}
          <Path d="M 140 32 h 60 v 34 h -60 z M 155 32 v 34 M 170 32 v 34 M 185 32 v 34" stroke="#f472b6" strokeWidth={1.2} fill="#fbcfe8" />
          <T x={220} y={53} anchor="start" size={10} fill="#9d174d">Silk Cloth (-)</T>

          {/* Electron Transfer Arrow */}
          <Draw on={beat >= 2} delay={dl(2, 0.8)} d={arrowD(110, 22, 160, 22)} stroke={AMBER_DARK} sw={2} />
          <T x={135} y={14} anchor="middle" size={10} fill={AMBER_DARK}>e⁻ transfer</T>

          <T x={225} y={98} anchor="middle" size={13} script={true} fill={RED}>
            {t("Leaves bodies OPPOSITELY charged (+ / -)!", "Bodies OPPOSITELY charged ho jaati hain (+ / -)!")}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 3: Procedure B Object Drawing (Conduction) ── */}
      <Fade on={beat >= 3} dim={beat >= 6}>
        <T x={540} y={135} anchor="start" size={13.5} weight={700} fill="#0369a1">
          {t("PROCEDURE B — CONDUCTION", "PROCEDURE B — CONDUCTION")}
        </T>
        <G transform="translate(540, 155)">
          {/* Charged sphere touching neutral conductor */}
          <Circle cx={100} cy={40} r={18} fill="#ffe4e6" stroke={RED} strokeWidth={1.8} />
          <T x={100} y={47} anchor="middle" size={14} weight={800} fill={RED}>+</T>

          {/* Touching sphere B */}
          <Circle cx={144} cy={40} r={18} fill="#ffe4e6" stroke={RED} strokeWidth={1.8} />
          <T x={144} y={47} anchor="middle" size={14} weight={800} fill={RED}>+</T>

          {/* Contact Arc */}
          <Path d="M 122 28 Q 124 40, 122 52" stroke="#0284c7" strokeWidth={2} fill="none" />

          {/* Flow Arrow */}
          <Draw on={beat >= 3} delay={dl(3, 0.8)} d={arrowD(180, 40, 240, 40)} stroke="#0284c7" sw={2} />
          <T x={210} y={28} anchor="middle" size={10} fill="#0369a1">charge shared</T>

          <T x={225} y={98} anchor="middle" size={13} script={true} fill={GREEN}>
            {t("Leaves both bodies with SAME sign (+ / +)!", "Dono bodies pe SAME sign rehta hai (+ / +)!")}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 4: Friction Key Rule Note ── */}
      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(60, 285)">
          <T x={0} y={20} anchor="start" size={13.5} script={true} fill={AMBER_DARK}>
            {t(
              "Friction Rule: Materials MUST be different (equal electron grip = zero transfer!)",
              "Friction Rule: Materials different hone chahiye (equal grip = zero transfer!)"
            )}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 5: Badge 1 & Conduction Signature ── */}
      <Badge n={1} cx={50} cy={322} on={beat >= 5} delay={dl(5, 0.4)} />
      <Fade on={beat >= 5} dim={beat >= 6}>
        <G transform="translate(74, 322)">
          <T x={0} y={5} anchor="start" size={13.5} script={true} fill={GREEN}>
            {t(
              "Conduction Signature: Once-neutral body gets the SAME sign!",
              "Conduction Signature: Pehle-neutral body same sign le leti hai!"
            )}
          </T>
          <Draw on={beat >= 5} delay={dl(5, 1.2)} d={ringD(210, 0, 190, 16)} stroke={GREEN} sw={2} />
        </G>
      </Fade>

      {/* ── BEAT 6: Open Summary Comparison Table (No Box) ── */}
      <Fade on={beat >= 6} dim={beat >= 7}>
        <G transform="translate(60, 360)">
          <T x={480} y={20} anchor="middle" size={14} weight={700} fill={INK}>
            {t("FRICTION VS CONDUCTION — SUMMARY COMPARISON", "FRICTION VS CONDUCTION — SUMMARY COMPARISON")}
          </T>
          <Draw on={beat >= 6} delay={dl(6, 0.4)} d="M 20 32 H 940" stroke="#cbd5e1" sw={1.5} />

          {/* Row 1: Friction */}
          <T x={80} y={62} anchor="start" size={13} weight={700} fill={AMBER_DARK}>Friction:</T>
          <T x={240} y={62} anchor="start" size={13} fill={INK}>2 Insulators</T>
          <T x={480} y={62} anchor="start" size={13} fill={RED} weight={700}>OPPOSITE Signs (+ / -)</T>
          <T x={760} y={62} anchor="start" size={12} script={true} fill={MUTED}>Rubbing action</T>

          <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 20 80 H 940" stroke="#cbd5e1" sw={1} />

          {/* Row 2: Conduction */}
          <T x={80} y={110} anchor="start" size={13} weight={700} fill="#0369a1">Conduction:</T>
          <T x={240} y={110} anchor="start" size={13} fill={INK}>1 Conductor</T>
          <T x={480} y={110} anchor="start" size={13} fill={GREEN} weight={700}>SAME Sign (+ / + or - / -)</T>
          <T x={760} y={110} anchor="start" size={12} script={true} fill={MUTED}>Direct contact</T>
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
            "★ VERDICT: Friction ⇒ Opposite Signs | Conduction ⇒ Same Sign!",
            "★ VERDICT: Friction ⇒ Opposite Signs | Conduction ⇒ Same Sign!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
