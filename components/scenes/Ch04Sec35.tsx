/**
 * Ch04 · Section 35 — "Pitfalls and pro-tips: Concurrent Forces and Equilibrium"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.8, 37.6, 62.5, 81.6, 106.2, 112.6, 137.4, 153.7]):
 *  0 title
 *  1 pitfall 1: adding unresolved vectors
 *  2 pitfall 2: Lami angle misread (plausible wrong number)
 *  3 pitfall 3: negative tension
 *  4 pitfall 4: pseudo-force misuse
 *  5 pro-tip heading: smart axes
 *  6 axes detail lines
 *  7 Lami reflex line
 *  8 red margin: three memory aids
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52
 *  p1 chip x84..130 y84..114 hdr st x150 bl 105 · det bl 133
 *  p2 chip y158..188 hdr bl 179 · det bl 207
 *  p3 chip y232..262 hdr bl 253 · det bl 281
 *  p4 chip y306..336 hdr bl 327 · det bl 355
 *  b5 head cx540 bl 395 · b6 st x84 bl 425 / 449 · b7 st x84 bl 480
 *  b8 | bar x66 y505..575 · lines st x84 bl 525 / 551
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const pit = (k: number, y: number, n: string, header: string, det: string, detFill: string, detDelay: number) => (
    <G>
      <Fade on={beat >= k} delay={dl(k, 0.6)}>
        <Chip x={84} y={y} w={46} h={30} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {n}
        </Chip>
      </Fade>
      <Fade on={beat >= k} delay={dl(k, 1.4)}>
        <T x={150} y={y + 21} size={15} fill={RED} script anchor="start">
          {header}
        </T>
      </Fade>
      <Fade on={beat >= k} delay={dl(k, detDelay)}>
        <T x={150} y={y + 49} size={13} fill={detFill} script anchor="start">
          {det}
        </T>
      </Fade>
    </G>
  );

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "the minefield — four avoidable ways to lose equilibrium marks",
            "baaroodi surang — equilibrium marks gawane ke 4 taalne-laayak raaste"
          )}
        </T>
      </Fade>

      {pit(
        1,
        84,
        "✗ 1",
        t(
          "adding angled forces without resolving — 5 + 12 ≠ 17",
          "tedhi forces ko bina resolve kiye jodna — 5 + 12 ≠ 17"
        ),
        t(
          "resolve into ⊥ components first, balance each direction alone",
          "pehle ⊥ components mein todo, phir har disha alag balance karo"
        ),
        INK,
        9
      )}

      {pit(
        2,
        158,
        "✗ 2",
        t(
          "Lami with misread angles — a clean, plausible, WRONG number",
          "Lami mein galat angles — saaf, bharosemand dikhta, GALAT number"
        ),
        t(
          "sketch from the common point · read each OPPOSITE angle deliberately",
          "common point se sketch banao · har SAAMNE waala angle soch kar padho"
        ),
        INK,
        12
      )}

      {pit(
        3,
        232,
        "✗ 3",
        t(
          "negative tension reported — strings can only PULL",
          "negative tension likh dena — strings sirf KHEENCH sakti hain"
        ),
        t(
          "negative T = slack string = impossible setup — rethink the geometry",
          "negative T = dheeli string = asambhav setup — geometry dobara socho"
        ),
        INK,
        8
      )}

      {pit(
        4,
        306,
        "✗ 4",
        t(
          "pseudo-force in the wrong frame, or the wrong way — both fatal",
          "pseudo-force galat frame mein, ya ulti disha — dono jaanleva"
        ),
        t(
          "in doubt? solve in the ground frame — no pseudo-force exists there",
          "shak ho? ground frame mein hal karo — wahan pseudo-force hoti hi nahi"
        ),
        GREEN,
        10
      )}

      {/* beat 5 — smart axes */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={395} size={16} fill={AMBER_DARK} script>
          {t("pro-tip: pick smart axes", "pro-tip: samajhdari se axes chuno")}
        </T>
      </Fade>

      {/* beat 6 — the five-second habit */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={84} y={425} size={13} fill={INK} script anchor="start">
          {t(
            "incline → along + perpendicular to the slope · wall → plain horizontal + vertical",
            "incline → slope ke along + perpendicular · deewar → seedhe horizontal + vertical"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 10)}>
        <T x={84} y={449} size={13} fill={GREEN} script anchor="start">
          {t(
            "five seconds choosing axes = the highest-return five seconds in the problem",
            "paanch second axes chunna = poore problem ke sabse zyada return waale 5 second"
          )}
        </T>
      </Fade>

      {/* beat 7 — Lami as reflex */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={84} y={480} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "exactly three forces? Lami FIRST — one line, done; practise it into a reflex",
            "theek teen forces? pehle Lami — ek line, khatam; ise reflex bana lo"
          )}
        </T>
      </Fade>

      {/* beat 8 — memory aids */}
      <Draw on={beat >= 8} delay={dl(8, 0.6)} d="M 66 505 v 62" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={525} size={14} fill={RED} script anchor="start">
          {t(
            "equilibrium: 'resolve, right and up, set to zero' · Lami: 'love the angle across'",
            "equilibrium: 'resolve, right and up, set to zero' · Lami: 'saamne waala angle pyaara'"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <T x={84} y={551} size={14} fill={RED} script anchor="start">
          {t(
            "lifts: 'up adds, down subtracts, free-fall floats'",
            "lifts: 'up adds, down subtracts, free-fall floats'"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
