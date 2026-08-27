/**
 * C11 Ch06 · Section 6 — "Sizing up a reaction: K for extent, Q for direction"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 34.7, 67.3, 108.6, 149.8, 186.8, 249.7, 325.7]):
 *  0 title + underline
 *  1 draw the K number-line bar (3 zones + dividers + "K" axis label)
 *  2 fill right zone GREEN: Kc > 10^3 — products dominate, nearly complete
 *  3 fill left zone RED: Kc < 10^-3 — reactants dominate, barely proceeds
 *  4 fill middle zone AMBER: both present, appreciable amounts
 *  5 Q defined — same form as K, evaluated at ANY instant
 *  6 row1 Q<K ⇒ forward; row2 Q>K ⇒ backward (both land together)
 *  7 row3 Q=K ⇒ ⇌ equilibrium, no net change
 *
 * Layout plan (longer language counts):
 *  b0 | title (script 26, red)      | T mid  | x213..867  y30..92  (bl 64)
 *  b1 | bar outline + 2 dividers    | Draw   | x100..980 y165..215
 *  b1 | tick labels "1e-3"/"1e3"    | T mid  | y142..158
 *  b1 | "K" axis label              | T st   | x1000..1010 y187..203
 *  b2 | zoneR fill + "Kc>1e3"       | Fade/T | x760..980 y165..215
 *  b2 | zoneR description           | T mid  | x753..987 y231..249
 *  b3 | zoneL fill + "Kc<1e-3"      | Fade/T | x100..320 y165..215
 *  b3 | zoneL description           | T mid  | x93..327  y231..249
 *  b4 | zoneM fill + "both present" | Fade/T | x320..760 y165..215
 *  b4 | zoneM description           | T mid  | x426..653 y231..249
 *  b5 | Q-definition line (16, ink) | T mid  | x352..728 y266..305 (bl 300)
 *  b6 | row1 "Q<K" → forward (grn)  | T/Draw | y314..342 (bl 336)
 *  b6 | row2 "Q>K" ← backward (red) | T/Draw | y374..402 (bl 396)
 *  b7 | row3 "Q=K" ⇌ no change      | T      | y434..462 (bl 456)
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
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("K tells how far, Q tells which way", "K bataata door, Q bataata kis taraf")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 6)}
        d="M 430 84 C 480 80, 600 87, 650 83"
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />

      {/* beat 1 — the K number-line bar */}
      <Draw
        on={beat >= 1}
        d="M 100 165 H 980 V 215 H 100 Z M 320 165 V 215 M 760 165 V 215"
        stroke={INK}
        sw={2.2}
        dur={beat > 1 ? 0.3 : 1}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={320} y={155} size={12} fill={MUTED} anchor="middle">10⁻³</T>
        <T x={760} y={155} size={12} fill={MUTED} anchor="middle">10³</T>
        <T x={1000} y={195} size={16} fill={INK} anchor="start">K</T>
      </Fade>

      {/* beat 2 — right zone: products dominate */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Rect x={760} y={165} width={220} height={50} fill={GREEN} opacity={0.22} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={870} y={195} size={14} fill={GREEN_DARK} weight={700} anchor="middle">
          Kc &gt; 10³
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={870} y={245} size={13} fill={GREEN_DARK} anchor="middle">
          {t("products dominate, nearly complete", "products dominate, nearly complete")}
        </T>
      </Fade>

      {/* beat 3 — left zone: reactants dominate */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Rect x={100} y={165} width={220} height={50} fill={RED} opacity={0.18} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={210} y={195} size={14} fill={RED} weight={700} anchor="middle">
          Kc &lt; 10⁻³
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={210} y={245} size={13} fill={RED} anchor="middle">
          {t("reactants dominate, barely proceeds", "reactants dominate, barely proceeds")}
        </T>
      </Fade>

      {/* beat 4 — middle zone: both present */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Rect x={320} y={165} width={440} height={50} fill={AMBER} opacity={0.2} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <T x={540} y={195} size={14} fill={AMBER_DARK} weight={700} anchor="middle">
          {t("both present", "dono maujood")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={540} y={245} size={13} fill={AMBER_DARK} anchor="middle">
          {t("appreciable reactants AND products", "reactants AUR products, dono kaafi matra mein")}
        </T>
      </Fade>

      {/* beat 5 — Q defined */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={300} size={16} fill={INK} anchor="middle">
          {t(
            "Q has the same form as K — but at ANY instant",
            "Q ka form K jaisa — par KISI BHI instant par"
          )}
        </T>
      </Fade>

      {/* beat 6 — Q<K forward, Q>K backward */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={150} y={336} size={20} fill={INK} weight={700} anchor="middle">Q &lt; K</T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d={arrowD(230, 330, 340, 330)}
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.3)}>
        <T x={360} y={336} size={16} fill={GREEN_DARK} anchor="start">
          {t("forward — too few products yet", "forward — abhi products kam hain")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.9)}>
        <T x={150} y={396} size={20} fill={INK} weight={700} anchor="middle">Q &gt; K</T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 2.4)}
        d={arrowD(340, 390, 230, 390)}
        stroke={RED}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 6} delay={dl(6, 2.9)}>
        <T x={360} y={396} size={16} fill={RED} anchor="start">
          {t("backward — too many products", "backward — products zyada ho gaye")}
        </T>
      </Fade>

      {/* beat 7 — Q=K, equilibrium, no net change */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={150} y={456} size={20} fill={INK} weight={700} anchor="middle">Q = K</T>
        <T x={285} y={458} size={24} fill={INK} anchor="middle">⇌</T>
        <T x={360} y={456} size={16} fill={INK} anchor="start">
          {t("at equilibrium — no net change", "equilibrium par — koi net change nahi")}
        </T>
      </Fade>
    </Scene>
  );
}
