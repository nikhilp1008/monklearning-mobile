/**
 * C11 Ch07 · Section 21 — "Two faces of a balanced redox reaction: measuring and making electricity"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_CHEMISTRY.md.
 * Opens Subtopic 3 (Redox Titrations & Electrochemical Cells).
 *
 * Beats (en [0, 11.52, 20.99, 39.25, 51.2, 71.42, 81.92, 96.77]):
 *  0 heading: two powerful things you can do with a redox reaction
 *  1 FACE 1 tag: redox titration
 *  2 process: known oxidant → unknown reductant until every e⁻ taken = endpoint
 *  3 red-margin: KMnO₄ self-indicating — first excess drop → permanent pink
 *  4 FACE 2 tag + cell diagram: two beakers, electrodes, external wire
 *  5 ANODE (oxidation, red) / CATHODE (reduction, green) labels
 *  6 red-margin mnemonic: An Ox / Red Cat — e⁻ flow anode→cathode in wire
 *  7 salt bridge (dashed arc) — keeps both beakers neutral
 *  (everything stays)
 *
 * Layout plan (Anek sans bl−0.78s..+0.31s; longer language counts):
 *  b0 | heading (sans17 700)     | T mid | x540 bl96
 *  b1 | FACE1 chip                | Chip  | x64..424 y110..150
 *  b2 | process (sans15)          | T mid | x540 bl180
 *  b3 | margin bar x64 y205..240, text (sans15 red) x80 bl225
 *  b4 | FACE2 chip                | Chip  | x64..484 y270..310
 *  b4 | beakers x180..320/580..720 y350..440; electrodes x250/650 y340..430;
 *     | wire y340 x250..650 with arrow (clear of chip bottom 310); e⁻ label bl328
 *  b5 | ANODE/CATHODE labels x250/650 y460/478
 *  b6 | margin bar x64 y505..540, mnemonic (sans15 red) x80 bl525
 *  b7 | salt-bridge arc x320..580 y395; label bl 560
 */

import React from "react";
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch07Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("same reaction, two jobs: weigh it, or wire it", "same reaction, do kaam: weigh karo, ya wire karo")}
        </T>
      </Fade>

      {/* ===== beat 0 — heading ===== */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={96} size={17} fill={INK} weight={700}>
          {t("two powerful things you can do with a redox reaction", "redox reaction se do powerful kaam kar sakte ho")}
        </T>
      </Fade>

      {/* ===== beat 1 — Face 1 tag ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={64} y={110} w={360} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17}>
          {t("FACE 1 — REDOX TITRATION", "FACE 1 — REDOX TITRATION")}
        </Chip>
      </Fade>

      {/* ===== beat 2 — process ===== */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={180} size={15} fill={INK}>
          {t(
            "known oxidant → unknown reductant, until every e⁻ is taken = endpoint",
            "known oxidant → unknown reductant, jab tak har e⁻ le liya jaaye = endpoint"
          )}
        </T>
      </Fade>

      {/* ===== beat 3 — self-indicating ===== */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 64 205 L 64 240" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={80} y={225} size={15} fill={RED} weight={700} anchor="start">
          {t("KMnO₄ is self-indicating: first excess drop → permanent pink", "KMnO₄ self-indicating hai: pehla excess drop → permanent pink")}
        </T>
      </Fade>

      {/* ===== beat 4 — Face 2 tag + cell diagram ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Chip x={64} y={270} w={420} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={17}>
          {t("FACE 2 — GALVANIC (VOLTAIC) CELL", "FACE 2 — GALVANIC (VOLTAIC) CELL")}
        </Chip>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1)} d="M 180 350 h 140 v 90 h -140 Z" stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 1.2)} d="M 580 350 h 140 v 90 h -140 Z" stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 4} delay={dl(4, 1.5)} d="M 250 430 L 250 340" stroke={AMBER_DARK} sw={3} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 1.7)} d="M 650 430 L 650 340" stroke={AMBER_DARK} sw={3} dur={0.4} />
      <Draw
        on={beat >= 4}
        delay={dl(4, 2)}
        d="M 250 340 L 650 340 M 638 334 L 650 340 L 638 346"
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 4} delay={dl(4, 2.6)}>
        <T x={450} y={328} size={14} fill={INK} weight={700}>
          e⁻
        </T>
      </Fade>

      {/* ===== beat 5 — anode / cathode labels ===== */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={250} y={460} size={17} fill={RED} weight={800}>
          ANODE
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={250} y={478} size={13} fill={RED}>
          ({t("oxidation", "oxidation")})
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={650} y={460} size={17} fill={GREEN} weight={800}>
          CATHODE
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={650} y={478} size={13} fill={GREEN}>
          ({t("reduction", "reduction")})
        </T>
      </Fade>

      {/* ===== beat 6 — mnemonic ===== */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 64 505 L 64 540" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={80} y={525} size={15} fill={RED} weight={700} anchor="start">
          {t("An Ox · Red Cat — e⁻ flow: anode → cathode, through the wire", "An Ox · Red Cat — e⁻ flow: anode → cathode, wire se")}
        </T>
      </Fade>

      {/* ===== beat 7 — salt bridge ===== */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.3)}
        d="M 320 395 Q 450 350 580 395"
        stroke={MUTED}
        sw={2.4}
        dur={0.6}
      />
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={540} y={565} size={15} fill={MUTED}>
          {t("salt bridge: keeps both beakers neutral — without it, flow chokes", "salt bridge: dono beaker neutral rakhta hai — nahi to flow ruk jaata")}
        </T>
      </Fade>
    </Scene>
  );
}
