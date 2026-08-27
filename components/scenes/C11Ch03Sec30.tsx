/**
 * C11 Chemistry Ch03 · Section 30 — "Chemistry is electronic configuration in disguise"
 * Canvas 1080×620 · safe x36–1044, y30–596. Opens subtopic 3 (Periodic Trends
 * in Chemical Properties & Anomalous Behaviour).
 *
 * Beats (en [0, 17.66, 38.23, 47.36, 59.73, 83.54, 97.37, 108.97]):
 *  0 title + underline
 *  1 every chemical property = valence-shell config, different costume
 *  2 the drawer: front-drawer cash = outer electrons
 *  3 valence = deals this cash can fund
 *  4 red-margin: Group 1 (1 note, hands over, +1) vs Group 17 (7/8 full,
 *    grabs one, -1) — two fill-bar drawers side by side
 *  5 drawer fills across a period ⇒ capacity rises, then falls
 *  6 the payoff: physical trends ⇒ real reactions, formulas, oxides
 *  7 closing green stamp: bridge to real reactivity
 *
 * Layout plan:
 *  b1 | line (14, ink)              | T mid | x?..?     y93..106 (bl 100)
 *  b2 | drawer box + notes          | Draw  | x440..640 y140..210
 *  b2 | caption (12, muted)         | T mid | x?..?     y214..227 (bl 225)
 *  b3 | valence line (13,w700)      | T mid | x?..?     y235..249 (bl 248)
 *  b4 | Group-1 drawer (fill 1/8)   | Draw  | x140..320 y290..334
 *  b4 | Group-17 drawer (fill 7/8)  | Draw  | x760..940 y290..334
 *  b5 | rhythm line (13,w700)       | T mid | x?..?     y379..391 (bl 390)
 *  b6 | payoff line (13, ink)       | T mid | x?..?     y404..416 (bl 415)
 *  b7 | closing stamp (green)       | Chip  | x230..850 y430..466
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch03Sec30({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={19} fill={RED} script>
          {t("chemistry is electronic configuration in disguise", "chemistry hai electronic configuration ka costume")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.5)} d="M 380 88 C 450 84, 630 84, 700 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — the bridge idea */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={100} size={14} fill={INK}>
          {t("every chemical property = valence-shell config, different costume", "har chemical property = valence-shell config, alag costume")}
        </T>
      </Fade>

      {/* beat 2 — the drawer picture */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 440 140 h 200 v 70 h -200 z" stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        {[460, 495, 530].map((x) => (
          <Rect key={x} x={x} y={158} width={26} height={34} fill={AMBER} fillOpacity={0.4} stroke={AMBER_DARK} strokeWidth={1.6} />
        ))}
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={540} y={225} size={12} fill={MUTED}>
          {t("front-drawer cash = outer electrons", "front-drawer cash = outer electrons")}
        </T>
      </Fade>

      {/* beat 3 — valence defined */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={248} size={13} weight={700} fill={AMBER_DARK}>
          {t("valence = how many deals this cash can fund", "valence = ye cash kitne deals fund kar sakti")}
        </T>
      </Fade>

      {/* beat 4 — red-margin: Group 1 vs Group 17 */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 140 290 h 180 v 44 h -180 z" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <Rect x={144} y={294} width={22} height={36} fill={GREEN} fillOpacity={0.4} stroke={GREEN} strokeWidth={1.6} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={230} y={282} size={13} weight={800} fill={INK}>Group 1 (ns¹)</T>
        <T x={230} y={352} size={12} weight={700} fill={GREEN}>
          {t("1 note ⇒ hands over ⇒ +1", "1 note ⇒ de deta ⇒ +1")}
        </T>
      </Fade>

      <Draw on={beat >= 4} delay={dl(4, 1.4)} d="M 760 290 h 180 v 44 h -180 z" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.9)}>
        <Rect x={764} y={294} width={154} height={36} fill={RED} fillOpacity={0.28} stroke={RED} strokeWidth={1.6} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <T x={850} y={282} size={13} weight={800} fill={INK}>Group 17 (ns²np⁵)</T>
        <T x={850} y={352} size={12} weight={700} fill={RED}>
          {t("1 short ⇒ grabs one ⇒ −1", "1 kam ⇒ ek grab karta ⇒ −1")}
        </T>
      </Fade>

      {/* beat 5 — the rhythm across a period */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={390} size={13} weight={700} fill={AMBER_DARK}>
          {t("drawer fills across a period ⇒ capacity rises, then falls", "drawer period ke across bharta ⇒ capacity badhti, phir girti")}
        </T>
      </Fade>

      {/* beat 6 — the payoff question */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={415} size={13} fill={INK}>
          {t("the payoff: physical trends ⇒ real reactions, formulas, oxides", "payoff: physical trends ⇒ asli reactions, formulas, oxides")}
        </T>
      </Fade>

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={230} y={430} w={620} h={36} fill={GREEN} textFill="#fff" size={14} script={false}>
          {t("bridge: physical trends ⇒ real reactivity", "bridge: physical trends ⇒ asli reactivity")}
        </Chip>
      </Fade>
    </Scene>
  );
}
