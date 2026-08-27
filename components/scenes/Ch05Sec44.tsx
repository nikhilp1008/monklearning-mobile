/**
 * Ch05 · Section 44 — "Negative power, units, and the graph relations"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.3, 35.2, 55.6, 80.5, 105.3, 130.1, 149.8] · dur 174.6;
 *        hi [0, 11.3, 36.1, 56.5, 81.3, 103.7, 127.4, 146.0] · dur 170.8):
 *  0 title + subtitle
 *  1 braking: cos 180 = −1 → P < 0
 *  2 sign reading: + feeds, − drains
 *  3 Watt history lines
 *  4 1 hp ≈ 746 W chip
 *  5 two mini graphs: P-t area, W-t slope
 *  6 mirror-image line
 *  7 kWh warning band
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl80
 *  b1 | car x110..230 y150..195 + wheels · v (250,172)→(320,172) · "v" st x335 bl177
 *     | F (200,225)→(130,225) red · lbl end x120? use st x84? — "brakes" cx165 bl252
 *     | script cx250 bl285 · muted bl311
 *  b2 | cx250: green bl350 · red bl376 · amber bl402
 *  b3 | cx790 bl150 · muted bl176
 *  b4 | chip x640..940 y200..238 · script cx790 bl266
 *  b5 | P-t axes (600,430→310)/(590,420→760) curve + hatch · lbl cx680 bl470
 *     | W-t axes (820,430→310)/(810,420→980) curve + tangent · lbl cx900 bl470
 *  b6 | cx790 bl505
 *  b7 | bar x66 y470..580 · lines st x84 bl490 / bl516 / bl542
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec44({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("Negative Power, Units & the Graph Relations", "Negative Power, Units & Graph Relations")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={80} size={13} fill={MUTED} script>
          {t(
            "three loose ends: the sign, the horse, and two graphs",
            "teen dhile sire: sign, ghoda, aur do graphs"
          )}
        </T>
      </Fade>

      {/* beat 1 — braking */}
      <Draw on={beat >= 1} delay={dl(1, 1)} d="M 110 195 v -33 q 0 -6 6 -6 h 98 q 6 0 6 6 v 33" stroke={INK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <Circle cx={135} cy={200} r={7} fill="none" stroke={INK} strokeWidth={2} />
        <Circle cx={205} cy={200} r={7} fill="none" stroke={INK} strokeWidth={2} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.6)} d={arrowD(250, 172, 320, 172)} stroke={AMBER} sw={2.6} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 3.2)}>
        <T x={335} y={177} size={14} fill={AMBER_DARK} anchor="start" weight={700}>
          v
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 5)} d={arrowD(200, 232, 130, 232)} stroke={RED} sw={2.8} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 5.8)}>
        <T x={165} y={258} size={12} fill={RED} script>
          {t("braking force", "braking force")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 9)}>
        <T x={250} y={290} size={13} fill={INK} script>
          θ = 180° → cos θ = −1 → P &lt; 0
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 16)}>
        <T x={250} y={316} size={12.5} fill={MUTED} script>
          {t(
            "energy leaves, at a rate — heat in the brake pads",
            "energy nikal rahi hai, kisi rate se — pads mein heat"
          )}
        </T>
      </Fade>

      {/* beat 2 — reading the sign */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={250} y={352} size={13} fill={GREEN} script>
          {t("+P feeds energy in — the engine", "+P energy andar deta hai — engine")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={250} y={378} size={13} fill={RED} script>
          {t("−P drains it out — brakes, drag", "−P bahar nikalti hai — brakes, drag")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 14)}>
        <T x={250} y={404} size={13} fill={AMBER_DARK} script>
          {t(
            "the sign = which way energy flows right now",
            "sign = abhi energy kis taraf beh rahi hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — Watt and the horse */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={790} y={150} size={13} fill={INK} script>
          {t(
            "the WATT — James Watt, of the steam engine",
            "WATT — James Watt, steam engine waale"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 10)}>
        <T x={790} y={176} size={12.5} fill={MUTED} script>
          {t(
            "sold engines by horses replaced — so he measured a horse",
            "engines ghodon ke hisaab se biken — to usne ghoda naap liya"
          )}
        </T>
      </Fade>

      {/* beat 4 — 746 W */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <Chip x={640} y={200} w={300} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16} script={false}>
          1 hp ≈ 746 W
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 10)}>
        <T x={790} y={266} size={12.5} fill={AMBER_DARK} script>
          {t(
            "a 15-hp bike claims the muscle of 15 horses",
            "15-hp bike 15 ghodon ki taaqat ka daawa karti hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — the two graphs */}
      <Draw on={beat >= 5} delay={dl(5, 1)} d={arrowD(600, 430, 600, 310)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 1.4)} d={arrowD(590, 420, 760, 420)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 2.2)} d="M 600 420 C 640 360, 700 350, 755 380" stroke={INK} sw={2.4} dur={0.8} />
      <Draw
        on={beat >= 5}
        delay={dl(5, 3.4)}
        d="M 630 420 V 380 M 660 420 V 366 M 690 420 V 362 M 720 420 V 367"
        stroke={GREEN}
        sw={1.4}
        dur={0.6}
      />
      <Fade on={beat >= 5} delay={dl(5, 4.5)}>
        <T x={675} y={465} size={12.5} fill={GREEN} script>
          {t("P–t: AREA = work", "P–t: AREA = work")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 8)} d={arrowD(820, 430, 820, 310)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 8.4)} d={arrowD(810, 420, 980, 420)} stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 9.2)} d="M 820 420 C 870 400, 920 350, 975 325" stroke={INK} sw={2.4} dur={0.8} />
      <Draw on={beat >= 5} delay={dl(5, 10.4)} d="M 870 392 L 930 348" stroke={AMBER} sw={2.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 11.2)}>
        <T x={900} y={465} size={12.5} fill={AMBER_DARK} script>
          {t("W–t: SLOPE = power", "W–t: SLOPE = power")}
        </T>
      </Fade>

      {/* beat 6 — mirror images */}
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={790} y={502} size={13} fill={GREEN} script>
          {t(
            "integration one way, differentiation the other — area or slope, instantly",
            "ek taraf integration, doosri taraf differentiation — area ya slope, turant"
          )}
        </T>
      </Fade>

      {/* beat 7 — the kWh warning */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 470 v 88" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={84} y={490} size={13} fill={RED} script anchor="start">
          {t(
            "kWh = power × time = ENERGY — 3.6×10⁶ J",
            "kWh = power × time = ENERGY — 3.6×10⁶ J"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={84} y={516} size={13} fill={INK} script anchor="start">
          {t(
            "2 kW heater × 3 h = 6 kWh — your meter bills ENERGY",
            "2 kW heater × 3 h = 6 kWh — meter ENERGY ke paise leta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 18)}>
        <T x={84} y={542} size={13} fill={RED} script anchor="start">
          {t(
            "kW is power · kWh is energy — never mix them into P = F v",
            "kW power hai · kWh energy — inhe P = F v mein kabhi mat milao"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
