/**
 * Ch01 · Section 85 — "Order of magnitude, and the ranges worth knowing"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 15.2, 34.1, 58.9, 83.7, 93.4, 118.3, 143.1]):
 *  0 title + definition
 *  1 the method line
 *  2 two rounding-rule chips (√10 vs 5)
 *  3 the practical resolution — state your rule
 *  4 three axis skeletons
 *  5 LENGTH landmarks (span 10⁴¹)
 *  6 MASS landmarks (span 10⁸⁵, proton ≈ 1000×e⁻)
 *  7 TIME landmarks (span 10³⁹) + the two anchors
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | 15 mid bl 112 · b2 chips y134..168 x140/x560 · b3 12 mid bl 196
 *  axes y 260/370/480 x100..980 · headers 12 st x100 bl 238/348/458
 *  ticks ±6 · labels 10.5 above (y−14) / below (y+24), alternating
 *  b7 | green 13 mid bl 560
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER_DARK,
  GREEN,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

type Mark = { x: number; label: string; above: boolean; anchor?: boolean };

export default function Ch01Sec85({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const axis = (y: number, marks: Mark[], k: number, header: string, span: string, spanBelow = false) => (
    <G>
      <Fade on={beat >= 4} delay={dl(4, 1 + (y - 260) / 110)}>
        <T x={100} y={y - 38} size={12} fill={MUTED} anchor="start">{header}</T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.5 + (y - 260) / 110)} d={`M 100 ${y} h 880`} stroke={INK_LIGHT} sw={1.6} dur={0.8} />
      <Draw
        on={beat >= k}
        delay={dl(k, 1)}
        d={marks.map((m) => `M ${m.x} ${y - 6} v 12`).join(" ")}
        stroke={INK}
        sw={1.8}
        dur={0.9}
      />
      {marks.map((m, i) => (
        <Fade key={i} on={beat >= k} delay={dl(k, 2.5 + i * 2.6)}>
          <T
            x={m.x}
            y={m.above ? y - 14 : y + 24}
            size={10.5}
            fill={m.anchor ? AMBER_DARK : INK_LIGHT}
            weight={m.anchor ? 800 : 600}
          >
            {m.label}
          </T>
        </Fade>
      ))}
      <Fade on={beat >= k} delay={dl(k, 18)}>
        <T x={980} y={spanBelow ? y + 44 : y - 38} size={11} fill={GREEN} anchor="end" weight={700}>{span}</T>
      </Fade>
    </G>
  );

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={22} fill={INK} script>
          {t(
            "order of magnitude — and the ranges worth knowing",
            "order of magnitude — aur jaanne laayak ranges"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={540} y={78} size={13} fill={MUTED} script>
          {t(
            "the power of ten nearest a quantity — scale, not precision",
            "quantity ke sabse nazdeek ten ki power — paimana, precision nahi"
          )}
        </T>
      </Fade>

      {/* beat 1 — the method */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={540} y={112} size={15} fill={INK} weight={600}>
          {t(
            "write m × 10ⁿ (1 ≤ m < 10) → round m to 1 or 10 → order = 10ⁿ or 10ⁿ⁺¹",
            "m × 10ⁿ likho (1 ≤ m < 10) → m ko 1 ya 10 tak round karo → order = 10ⁿ ya 10ⁿ⁺¹"
          )}
        </T>
      </Fade>

      {/* beat 2 — the two rules, honestly */}
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <Chip x={140} y={134} w={380} h={32} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={13}>
          {t("cut at √10 ≈ 3.16 — geometrically right", "kataav √10 ≈ 3.16 par — jyamiti se sahi")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 14)}>
        <Chip x={560} y={134} w={380} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={13}>
          {t("cut at 5 — the textbook shortcut", "kataav 5 par — kitaabi shortcut")}
        </Chip>
      </Fade>

      {/* beat 3 — the resolution */}
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={540} y={196} size={12} fill={INK} script>
          {t(
            "they disagree only for m between 3.16 and 5 — state the rule you used; a stated assumption can't be faulted",
            "sirf 3.16 aur 5 ke beech waale m par matbhed — jo niyam liya wo likh do; batayi dhaarna par dosh nahi lagta"
          )}
        </T>
      </Fade>

      {/* beats 4–7 — the three axes */}
      {axis(
        260,
        [
          { x: 100, label: t("nucleus 10⁻¹⁵", "nabhik 10⁻¹⁵"), above: false },
          { x: 205, label: t("atom 10⁻¹⁰", "parmanu 10⁻¹⁰"), above: true },
          { x: 415, label: t("human 1 m", "insaan 1 m"), above: false, anchor: true },
          { x: 561, label: t("Earth R 10⁷", "dharti R 10⁷"), above: true },
          { x: 645, label: "AU 10¹¹", above: false },
          { x: 960, label: t("universe 10²⁶", "brahmaand 10²⁶"), above: true },
        ],
        5,
        t("LENGTH (m)", "LAMBAI (m)"),
        t("span ~10⁴¹", "failav ~10⁴¹"),
        true
      )}
      {axis(
        370,
        [
          { x: 100, label: "e⁻ 10⁻³⁰", above: false },
          { x: 130, label: "p⁺ 10⁻²⁷", above: true },
          { x: 424, label: t("human 10²", "insaan 10²"), above: false, anchor: true },
          { x: 656, label: t("Earth 10²⁵", "dharti 10²⁵"), above: true },
          { x: 707, label: t("Sun 10³⁰", "sooraj 10³⁰"), above: false },
          { x: 960, label: t("universe 10⁵⁵", "brahmaand 10⁵⁵"), above: true },
        ],
        6,
        t("MASS (kg)", "MASS (kg)"),
        t("span ~10⁸⁵", "failav ~10⁸⁵"),
        true
      )}
      {axis(
        480,
        [
          { x: 100, label: t("light–nucleus 10⁻²⁴", "prakash–nabhik 10⁻²⁴"), above: false },
          { x: 289, label: t("light wave 10⁻¹⁵", "prakash tarang 10⁻¹⁵"), above: true },
          { x: 603, label: t("heartbeat 1 s", "dhadkan 1 s"), above: false, anchor: true },
          { x: 750, label: t("a year 10⁷", "ek saal 10⁷"), above: true },
          { x: 960, label: t("universe 10¹⁷", "brahmaand 10¹⁷"), above: false },
        ],
        7,
        t("TIME (s)", "TIME (s)"),
        t("span ~10³⁹", "failav ~10³⁹")
      )}

      {/* beat 6 extra — proton vs electron */}
      <Fade on={beat >= 6} delay={dl(6, 20)}>
        <T x={540} y={418} size={11} fill={AMBER_DARK} script>
          {t("proton ≈ 1000 × electron — worth remembering on its own", "proton ≈ 1000 × electron — apne aap mein yaad rakhne laayak")}
        </T>
      </Fade>

      {/* beat 7 — the anchors */}
      <Fade on={beat >= 7} delay={dl(7, 20)}>
        <T x={540} y={560} size={13} fill={GREEN} script>
          {t(
            "no table needed — two anchors: a human is 1 m, a heartbeat is 1 s; everything else is distance from them",
            "koi table nahi chahiye — do langar: insaan 1 m, dhadkan 1 s; baaki sab unse doori hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
