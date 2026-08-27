/**
 * P12Ch01 · Section 3 — "Quantisation of Electric Charge"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Drawn discrete number line with allowed packet dots vs forbidden fraction cross-out
 *  - Drawn egg carton box containing 6 individual eggs (egg-dozen analogy)
 *  - Drawn sand dune hills with a magnifying lens showing individual discrete sand grains (macro vs micro)
 *
 * Beats (en [0, 5.55, 11.78, 19.29, 28.16, 29.16, 38.8, 53.82]):
 *  0 Title "quantisation of electric charge" + drawn underline
 *  1 Hook note: charge comes in discrete packets
 *  2 Badge 1: Formula Q = ± n e (n = 1, 2, 3...)
 *  3 Number line with discrete packet dots (1.5e crossed out)
 *  4 Drawn egg carton box with eggs (whole items only!)
 *  5 Badge 2: Elementary charge quantum e = 1.6 × 10⁻¹⁹ C
 *  6 Sand dune hills with magnifying lens showing sand grains (macro vs micro)
 *  7 Grand Verdict: Q = ± n e (charge is strictly quantised!)
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

export default function P12Ch01Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ── BEAT 0: Title ── */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("quantisation of electric charge", "electric charge ka quantisation")}
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

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "charge is not infinitely divisible — it comes only in discrete packets!",
            "charge infinitely divisible nahi hai — yeh sirf discrete packets mein aata hai!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Formula Q = ± n e ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={15} fill={RED} script anchor="start">
          {t("QUANTISATION FORMULA", "QUANTISATION FORMULA")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 6}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={0} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER} strokeWidth={1.8} />
          <T x={215} y={42} anchor="middle" size={26} fill={INK} weight={800}>
            Q = ± n e
          </T>
          <T x={215} y={70} anchor="middle" size={13} fill={AMBER_DARK} script>
            {t("where n = 1, 2, 3, 4 ... (integers only!)", "jahan n = 1, 2, 3, 4 ... (sirf integers!)")}
          </T>
          <Draw on={beat >= 2} delay={dl(2, 1.8)} d="M 130 50 h 170 M 130 54 h 170" stroke={AMBER_DARK} sw={1.5} />
        </G>
      </Fade>

      {/* ── BEAT 3: Discrete Number Line Object Drawing ── */}
      <Fade on={beat >= 3} dim={beat >= 6}>
        <G transform="translate(530, 185)">
          <T x={240} y={15} anchor="middle" size={13} weight={700} fill={INK}>
            {t("Discrete Charge Allowed States:", "Discrete Charge Allowed States:")}
          </T>

          <Draw on={beat >= 3} delay={dl(3, 0.5)} d="M 30 50 H 450" stroke={INK} sw={2} />

          {[-2, -1, 0, 1, 2].map((idx) => {
            const cx = 240 + idx * 80;
            const label = idx === 0 ? "0" : `${idx > 0 ? "+" : ""}${idx}e`;
            return (
              <G key={`numline${idx}`}>
                <Circle cx={cx} cy={50} r={6.5} fill={GREEN} />
                <T x={cx} y={74} anchor="middle" size={12} weight={700} fill={GREEN}>
                  {label}
                </T>
              </G>
            );
          })}

          {/* Forbidden 1.5e */}
          <Circle cx={360} cy={50} r={5} fill={RED} opacity={0.4} />
          <T x={360} y={35} anchor="middle" size={10} fill={RED}>1.5e</T>
          <Draw on={beat >= 3} delay={dl(3, 1.2)} d={crossD(350, 38, 20, 24)} stroke={RED} sw={2} />
        </G>
      </Fade>

      {/* ── BEAT 4: Drawn Egg Carton Box with 6 Eggs ── */}
      <Fade on={beat >= 4} dim={beat >= 6}>
        <G transform="translate(60, 295)">
          <T x={0} y={16} anchor="start" size={14} weight={700} fill={AMBER_DARK}>
            {t("Egg-Dozen Analogy:", "Egg-Dozen Analogy:")}
          </T>

          {/* Egg Carton Outline */}
          <Draw
            on={beat >= 4}
            delay={dl(4, 0.5)}
            d="M 180 5 h 240 v 65 h -240 z M 260 5 v 65 M 340 5 v 65"
            stroke={AMBER_DARK}
            sw={1.5}
          />

          {/* 6 Individual Drawn Oval Eggs */}
          {[220, 300, 380].map((cx, idx) => (
            <G key={`egg${idx}`}>
              <Ellipse cx={cx} cy={22} rx={14} ry={11} fill="#fff7ed" stroke={AMBER_DARK} strokeWidth={1.2} />
              <Ellipse cx={cx} cy={52} rx={14} ry={11} fill="#fff7ed" stroke={AMBER_DARK} strokeWidth={1.2} />
            </G>
          ))}

          <T x={225} y={92} anchor="middle" size={13} script={true} fill={INK}>
            {t(
              "Eggs sell in whole dozens, never half-eggs — charge is indivisible!",
              "Eggs dozen mein bikte hain, kabhi half-egg nahi — charge bhi waisa hi!"
            )}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 5: Badge 2 & Elementary Charge Quantum Value ── */}
      <Badge n={2} cx={540} cy={295} on={beat >= 5} delay={dl(5, 0.4)} />
      <Fade on={beat >= 5} dim={beat >= 6}>
        <G transform="translate(562, 295)">
          <T x={0} y={16} anchor="start" size={14} fill={RED} script>
            {t("Elementary Quantum:", "Elementary Quantum:")}
          </T>
          <T x={220} y={55} anchor="middle" size={22} weight={800} fill={RED}>
            e = 1.6 × 10⁻¹⁹ C
          </T>
          <Draw on={beat >= 5} delay={dl(5, 1.4)} d={ringD(220, 52, 115, 18)} stroke={AMBER} sw={2.2} />
        </G>
      </Fade>

      {/* ── BEAT 6: Drawn Sand Dune Hills & Magnifying Lens Object ── */}
      <Fade on={beat >= 6} dim={beat >= 7}>
        <G transform="translate(60, 400)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill="#0369a1">
            {t("Macroscopic Smoothness Metaphor (Sand Dune):", "Macroscopic Smoothness Metaphor (Sand Dune):")}
          </T>

          {/* Sand Dune Hill Curves */}
          <Draw
            on={beat >= 6}
            delay={dl(6, 0.5)}
            d="M 50 80 Q 150 35, 250 80 T 450 80"
            stroke="#0284c7"
            sw={2.5}
          />
          <T x={250} y={102} anchor="middle" size={12} script={true} fill="#0369a1">
            {t("Macro Scale: Smooth sand dune hill", "Macro Scale: Smooth sand dune")}
          </T>

          {/* Magnifying Lens Circle */}
          <Circle cx={630} cy={60} r={35} fill="#f0f9ff" stroke="#0284c7" strokeWidth={2.5} />
          <Line x1={655} y1={85} x2={685} y2={110} stroke="#0284c7" strokeWidth={4} strokeLinecap="round" />

          {/* Individual sand grains visible inside lens */}
          {[610, 625, 640, 615, 635, 650].map((cx, idx) => (
            <Circle key={`sgrain${idx}`} cx={cx} cy={48 + (idx % 3) * 10} r={3.5} fill={AMBER_DARK} />
          ))}

          <T x={630} y={112} anchor="middle" size={12} script={true} fill={AMBER_DARK}>
            {t("Micro Scale: Discrete grains e", "Micro Scale: Discrete grains e")}
          </T>

          <T x={840} y={65} anchor="middle" size={13} script={true} fill={INK}>
            {t("1 e is too tiny to notice!", "1 e itna tiny hai ki notice nahi hota!")}
          </T>
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
            "★ VERDICT: Q = ± n e (Electric charge is strictly quantised at all scales!)",
            "★ VERDICT: Q = ± n e (Electric charge strictly quantised hota hai!)"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
