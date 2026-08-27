/**
 * C11 Chemistry Ch03 · Section 15 — "The master engine: effective nuclear charge"
 * Canvas 1080×620 · safe x36–1044, y30–596. Opens subtopic 2 (Periodic Trends,
 * Physical Properties) — Zeff is the engine every later section reuses.
 *
 * Beats (en [0, 13.06, 27.73, 43.35, 65.28, 79.79, 85.08, 101.89]):
 *  0 title + underline
 *  1 what we'll predict: size · grip on electrons · pull on shared pairs
 *  2 the train compartment: a compartment + ticket-checker (nucleus, +Z) at
 *    the door
 *  3 inner electrons packed close (block the view) + one valence electron
 *    far away (feels a reduced pull) — arrow drawn under the dots
 *  4 red-margin: what it truly feels = effective nuclear charge (Zeff)
 *  5 formula, high emphasis: Zeff = Z − σ
 *  6 σ = screening from inner electrons; hold onto Zeff
 *  7 closing amber stamp: every trend = tug-of-war, pull vs shielding
 *
 * Layout plan:
 *  b1 | line (16,w700,ink)         | T mid | x?..?     y95..106 (bl 100)
 *  b2 | compartment + checker      | Draw  | x140..940 y160..230
 *  b3 | arrow (amber) under dots   | Draw  | x160..800 y195
 *  b3 | 5 inner dots + label       | Fade  | x230..350 y195; label bl 250
 *  b3 | 1 valence dot + label      | Fade  | x820      y195; label bl 250
 *  b4 | red margin bar + line      | Draw  | x70  y270..306 (bl 292)
 *  b5 | formula box (26,w800,ink)  | Draw  | x380..700 y320..370 (bl 352)
 *  b6 | 2 lines                    | T mid | x?..?     y384..425 (bl 396/420)
 *  b7 | closing stamp (amber)      | Chip  | x150..930 y440..480
 */

import React from "react";
import { Circle, Line } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch03Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("the master engine: effective nuclear charge", "master engine: effective nuclear charge")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 380 88 C 450 84, 630 84, 700 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — what we'll predict */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={100} size={16} weight={700} fill={INK}>
          {t("predict: size · grip on electrons · pull on shared pairs", "predict: size · electrons pe grip · shared pairs pe pull")}
        </T>
      </Fade>

      {/* beat 2 — the train compartment: ticket-checker at the door */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 140 160 h 800 v 70 h -800 z" stroke={INK} sw={2} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <Circle cx={140} cy={195} r={11} fill={INK} />
        <Line x1={140} y1={206} x2={140} y2={224} stroke={INK} strokeWidth={2.4} />
        <T x={140} y={250} size={12} fill={MUTED}>{t("nucleus", "nucleus")}</T>
        <T x={158} y={190} size={13} weight={800} fill={INK} anchor="start">+Z</T>
      </Fade>

      {/* beat 3 — inner electrons block the view; valence feels less */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d={arrowD(160, 195, 800, 195)} stroke={AMBER_DARK} sw={2} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        {[230, 260, 290, 320, 350].map((x) => (
          <Circle key={x} cx={x} cy={195} r={5} fill={AMBER_DARK} />
        ))}
        <T x={290} y={250} size={12} fill={AMBER_DARK}>
          {t("inner e⁻ — block the view", "inner e⁻ — view block karte")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <Circle cx={820} cy={195} r={7} fill={GREEN} />
        <T x={820} y={250} size={12} fill={GREEN}>
          {t("valence e⁻ — reduced pull felt", "valence e⁻ — kam pull mehsoos")}
        </T>
      </Fade>

      {/* beat 4 — red-margin: effective nuclear charge */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 70 270 L 70 306" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={94} y={292} size={16} weight={700} fill={INK} anchor="start">
          {t("what it truly feels = effective nuclear charge (Zeff)", "asal mein jo feel hota = effective nuclear charge (Zeff)")}
        </T>
      </Fade>

      {/* beat 5 — the formula */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 380 320 h 320 v 50 h -320 z" stroke={AMBER_DARK} sw={2} dur={0.6} />
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={352} size={26} weight={800} fill={INK}>
          Zeff = Z − σ
        </T>
      </Fade>

      {/* beat 6 — screening, and the takeaway */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={396} size={15} fill={INK}>
          {t("σ = screening from inner electrons", "σ = inner electrons se screening")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={540} y={420} size={15} weight={700} fill={GREEN}>
          {t("hold onto Zeff — the engine under every trend", "Zeff pakde raho — har trend ka engine")}
        </T>
      </Fade>

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={150} y={440} w={780} h={40} fill={AMBER} textFill={INK} size={15} script={false}>
          {t("every trend = tug-of-war: nuclear pull vs electron shielding", "har trend = tug-of-war: nuclear pull vs electron shielding")}
        </Chip>
      </Fade>
    </Scene>
  );
}
