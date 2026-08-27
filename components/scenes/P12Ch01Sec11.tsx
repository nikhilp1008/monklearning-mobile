/**
 * P12Ch01 · Section 11 — "Pitfalls and Pro-Tips for Charge Fundamentals"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md & SCENE_PLAYBOOK.md.
 *
 * OBJECT-RICH OPEN CHALKBOARD DESIGN (NO HEAVY CONTAINERS):
 *  - Pitfall 1: Mass transfer during charging (Δm = n m_e, where m_e = 9.1 × 10⁻³¹ kg)
 *  - Pitfall 2: Attraction is NOT proof of charge — REPULSION is the ONLY sure test!
 *  - Pitfall 3: Quarks (+2/3 e, -1/3 e) exist inside hadrons but NEVER free in nature!
 *
 * Beats (en [0, 6, 20, 34, 48, 62, 78]):
 *  0 Title "pitfalls & pro-tips: charge fundamentals" + drawn underline
 *  1 Hook note: avoiding common exam traps on charge, mass, and quantisation!
 *  2 Badge 1 & Pitfall 1: Mass transfer during charging Δm = n m_e (losing e⁻ = lighter)
 *  3 Badge 2 & Pitfall 2: Attraction is NOT proof — REPULSION is the ONLY sure test!
 *  4 Pitfall 3: Quarks (+2/3e, -1/3e) exist inside protons/neutrons but NEVER free!
 *  5 Summary cheat-sheet table of charge rules
 *  6 Grand Verdict: Charging changes mass! | REPULSION is the ONLY sure test of charge!
 */

import React from "react";
import { G, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  ringD,
  INK,
  MUTED,
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

export default function P12Ch01Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ── BEAT 0: Title ── */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t(
            "pitfalls & pro-tips: charge fundamentals",
            "pitfalls & pro-tips: charge fundamentals"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.5)}
        d="M 320 70 C 440 66, 640 74, 760 69"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* ── BEAT 1: Hook Note ── */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={60} y={110} size={15} fill={MUTED} script anchor="start">
          {t(
            "avoiding common exam traps on charge, mass, and quantisation!",
            "charge, mass, aur quantisation ke common exam traps se bachein!"
          )}
        </T>
      </Fade>

      {/* ── BEAT 2: Badge 1 & Pitfall 1 (Mass Transfer) ── */}
      <Badge n={1} cx={52} cy={165} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={74} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("PITFALL 1: Mass Changes During Charging!", "PITFALL 1: Charging ke dauran Mass change hota hai!")}
        </T>
      </Fade>

      <Fade on={beat >= 2} dim={beat >= 5}>
        <G transform="translate(60, 185)">
          <Rect x={0} y={10} width={430} height={85} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={215} y={42} anchor="middle" size={18} fill={INK} weight={800}>
            Δm = n · m_e
          </T>
          <T x={215} y={72} anchor="middle" size={12.5} fill={AMBER_DARK} script>
            {t(
              "Negatively charged = heavier | Positively charged = lighter!",
              "Negative body = heavy | Positive body = light (m_e = 9.1 × 10⁻³¹ kg)"
            )}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 3: Badge 2 & Pitfall 2 (Repulsion Test) ── */}
      <Badge n={2} cx={540} cy={165} on={beat >= 3} delay={dl(3, 0.4)} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={562} y={170} size={14} fill={RED} weight={700} anchor="start">
          {t("PITFALL 2: Attraction Is NOT Proof of Charge!", "PITFALL 2: Attraction charge ka proof NAHI hai!")}
        </T>
      </Fade>

      <Fade on={beat >= 3} dim={beat >= 5}>
        <G transform="translate(540, 185)">
          <T x={0} y={25} anchor="start" size={13} fill={MUTED}>
            {t(
              "A charged body attracts neutral bodies by induction!",
              "Charged body neutral bodies ko induction se attract kar sakti hai!"
            )}
          </T>
          <T x={0} y={60} anchor="start" size={15} fill={RED} weight={800}>
            REPULSION is the ONLY sure test of electrification!
          </T>
          <Draw on={beat >= 3} delay={dl(3, 1.6)} d={ringD(220, 56, 210, 16)} stroke={RED} sw={1.8} />
        </G>
      </Fade>

      {/* ── BEAT 4: Pitfall 3 (Quarks vs Free Charge) ── */}
      <Fade on={beat >= 4} dim={beat >= 5}>
        <G transform="translate(60, 305)">
          <T x={0} y={20} anchor="start" size={14} weight={700} fill="#0369a1">
            {t("PITFALL 3: Quarks (+2/3 e, -1/3 e)", "PITFALL 3: Quarks (+2/3 e, -1/3 e)")}
          </T>
          <T x={0} y={48} anchor="start" size={13} script={true} fill={INK}>
            {t(
              "Quarks exist inside protons & neutrons, but NEVER exist free in nature!",
              "Quarks protons/neutrons mein hote hain, par nature mein KABHI free nahi hote!"
            )}
          </T>
        </G>
      </Fade>

      {/* ── BEAT 5: Summary Rules Table ── */}
      <Fade on={beat >= 5} dim={beat >= 6}>
        <G transform="translate(60, 380)">
          <T x={480} y={20} anchor="middle" size={14} weight={700} fill={INK}>
            {t("EXAM CHEAT SHEET — CHARGE FUNDAMENTALS", "EXAM CHEAT SHEET — CHARGE FUNDAMENTALS")}
          </T>
          <Draw on={beat >= 5} delay={dl(5, 0.4)} d="M 20 32 H 940" stroke="#cbd5e1" sw={1.5} />

          <T x={80} y={62} anchor="start" size={13} fill={INK}>Gain Electrons (e⁻)</T>
          <T x={340} y={62} anchor="start" size={13} fill={GREEN} weight={700}>Negative Charge (-)</T>
          <T x={660} y={62} anchor="start" size={13} fill={RED} weight={700}>Mass INCREASES (+ n m_e)</T>

          <Draw on={beat >= 5} delay={dl(5, 0.8)} d="M 20 80 H 940" stroke="#cbd5e1" sw={1} />

          <T x={80} y={110} anchor="start" size={13} fill={INK}>Lose Electrons (e⁻)</T>
          <T x={340} y={110} anchor="start" size={13} fill={RED} weight={700}>Positive Charge (+)</T>
          <T x={660} y={110} anchor="start" size={13} fill={GREEN} weight={700}>Mass DECREASES (- n m_e)</T>
        </G>
      </Fade>

      {/* ── BEAT 6: Grand Verdict Chip ── */}
      <Fade on={beat >= 6}>
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
            "★ VERDICT: Charging changes mass! | REPULSION is the ONLY sure test of charge!",
            "★ VERDICT: Charging changes mass! | REPULSION is the ONLY sure test of charge!"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
