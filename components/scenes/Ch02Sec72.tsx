/**
 * Ch02 · Section 72 — "Formula recap: the whole of Motion in a Straight Line"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.7, 26.1, 46.3, 71.2, 90.2, 112.5, 130.9, 151.6]):
 *  0 title
 *  1 skeleton: five stacked bands + dependency arrows + headers
 *  2 band 1 line 1: the split + inequality
 *  3 band 1 line 2: instantaneous pair + the two means
 *  4 band 2: geometry — slope down, area up
 *  5 band 3 line 1: the three equations
 *  6 band 3 line 2: free-fall forms
 *  7 band 4: relative velocity
 *  8 band 5: master key + templates · closing line
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  bands x60..1020: y 84/174/264/354/444, h 78 · headers st x76 bl top+20 ·
 *  lines cx540 bl top+44 / top+68 · arrows x540 between bands
 *  closing cx540 bl 560
 */

import React from "react";
import { G } from 'react-native-svg';
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
  GREEN,
  Scene,
} from '@/components/scenes/kit';

const TOPS = [84, 174, 264, 354, 444];

function band(y: number) {
  return `M 72 ${y} h 936 q 12 0 12 12 v 54 q 0 12 -12 12 h -936 q -12 0 -12 -12 v -54 q 0 -12 12 -12`;
}

export default function Ch02Sec72({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const headers = [
    t("1 · kinematic quantities", "1 · kinematic quantities"),
    t("2 · graphical analysis", "2 · graphical analysis"),
    t("3 · equations of motion & free fall", "3 · equations of motion & free fall"),
    t("4 · relative velocity", "4 · relative velocity"),
    t("5 · variable acceleration", "5 · variable acceleration"),
  ];

  return (
    <Scene>
      {/* beat 0 — a story, not a list */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={56} size={22} fill={INK} script>
          {t(
            "the whole chapter — each line grew from the one above",
            "poora chapter — har line apne upar waali se ugi"
          )}
        </T>
      </Fade>

      {/* beat 1 — the dependency is real */}
      {TOPS.map((y, i) => (
        <G key={i}>
          <Draw
            on={beat >= 1}
            delay={dl(1, 0.5 + i * 1.4)}
            d={band(y)}
            stroke={i === 4 ? GREEN : AMBER}
            sw={2}
            dur={0.5}
          />
          <Fade on={beat >= 1} delay={dl(1, 1.1 + i * 1.4)}>
            <T x={76 + 8} y={y + 20} size={11} fill={MUTED} script anchor="start">
              {headers[i]}
            </T>
          </Fade>
          {i < 4 ? (
            <Draw
              on={beat >= 1}
              delay={dl(1, 1.5 + i * 1.4)}
              d={arrowD(540, y + 78, 540, y + 89)}
              stroke={MUTED}
              sw={2}
              dur={0.25}
            />
          ) : null}
        </G>
      ))}

      {/* beat 2 — the split */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={540} y={TOPS[0] + 44} size={13} fill={INK} weight={600}>
          {t(
            "Δx = x_f − x_i · avg speed = distance⁄t · avg velocity = Δx⁄t · distance ≥ |Δx|",
            "Δx = x_f − x_i · avg speed = distance⁄t · avg velocity = Δx⁄t · distance ≥ |Δx|"
          )}
        </T>
      </Fade>

      {/* beat 3 — the instantaneous pair */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={540} y={TOPS[0] + 68} size={13} fill={INK} weight={600}>
          {t(
            "v = dx⁄dt · a = dv⁄dt = d²x⁄dt² · equal d → harmonic · equal t → arithmetic",
            "v = dx⁄dt · a = dv⁄dt = d²x⁄dt² · equal d → harmonic · equal t → arithmetic"
          )}
        </T>
      </Fade>

      {/* beat 4 — geometry */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={540} y={TOPS[1] + 44} size={13} fill={INK} weight={600}>
          {t(
            "slope: x-t → v · v-t → a · signed area: v-t → Δx · a-t → Δv",
            "slope: x-t → v · v-t → a · signed area: v-t → Δx · a-t → Δv"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={540} y={TOPS[1] + 68} size={12} fill={MUTED} script>
          {t("slope steps down · area climbs up", "slope neeche utarta · area upar chadhta")}
        </T>
      </Fade>

      {/* beat 5 — the three equations */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={TOPS[2] + 44} size={13} fill={INK} weight={600}>
          {t(
            "v = u+at · s = ut+½at² · v² = u²+2as · s_nth = u+(a⁄2)(2n−1) — constant a ONLY",
            "v = u+at · s = ut+½at² · v² = u²+2as · s_nth = u+(a⁄2)(2n−1) — SIRF constant a"
          )}
        </T>
      </Fade>

      {/* beat 6 — free fall */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={TOPS[2] + 68} size={13} fill={INK} weight={600}>
          {t(
            "free fall: a → ±g · H = u²⁄2g · T = 2u⁄g · d_stop = v₀²⁄2a (∝ v₀²)",
            "free fall: a → ±g · H = u²⁄2g · T = 2u⁄g · d_stop = v₀²⁄2a (∝ v₀²)"
          )}
        </T>
      </Fade>

      {/* beat 7 — who is watching */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={540} y={TOPS[3] + 44} size={13} fill={INK} weight={600}>
          v_AB = v_A − v_B · v_AB = −v_BA · a_AB = a_A − a_B
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={540} y={TOPS[3] + 68} size={12} fill={GREEN} script>
          {t(
            "both in free fall ⇒ a_rel = 0 — the t² term dies",
            "dono free fall mein ⇒ a_rel = 0 — t² waala term khatam"
          )}
        </T>
      </Fade>

      {/* beat 8 — honesty, and it contains the rest */}
      <Fade on={beat >= 8} delay={dl(8, 1)}>
        <T x={540} y={TOPS[4] + 44} size={13} fill={INK} weight={600}>
          {t(
            "a = v·dv⁄dx · templates: a(t) → ∫a dt · a(v) → pair by the question · a(x) → v dv = f(x)dx",
            "a = v·dv⁄dx · templates: a(t) → ∫a dt · a(v) → sawaal se jodi · a(x) → v dv = f(x)dx"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 10)}>
        <T x={540} y={TOPS[4] + 68} size={12} fill={GREEN} script>
          {t(
            "put a = constant into v dv = a dx and sub-topic 3 falls straight out",
            "v dv = a dx mein a = constant rakho aur sub-topic 3 seedha gir padta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 16)}>
        <T x={540} y={560} size={12} fill={GREEN} script>
          {t(
            "the last band contains all the others — that is what 'built in order' means",
            "aakhri band baaki sabko samete hai — 'kram se bana' ka yahi matlab hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
