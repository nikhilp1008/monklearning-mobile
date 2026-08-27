/**
 * C11 Ch08 · Section 14 — "Nomenclature — chemistry's PIN-code system"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 11.43, 27.73, 50.86, 58.28, 74.07, 88.49, 98.39]):
 *  0 title (always-on, seq1) · 1 millions of compounds, IUPAC = 1:1 · 2 postal-
 *  address analogy · 3 diagram: "3-hydroxybutanal" split into 5 colored slots ·
 *  4 slot labels (locant/substituent/C-count/bond-type/group) · 5 roots table
 *  1-10 · 6 red note (reversibility) · 7 red closer (tie-breaks win marks)
 *
 * Layout plan:
 *  b1 | text (14, ink)                 | T mid | y100
 *  b2 | breadcrumb (14, muted)         | T mid | y135
 *  b3 | 5 slot boxes                   | rect+T| x140..570 y180..220
 *  b4 | 5 slot labels (12, muted)      | T mid | y245
 *  b5 | 10 roots, 2 rows of 5          | T mid | x150/350/550/750/950 y300/325
 *  b6 | margin bar + red note          | Draw+T| x60 y365..395 · x76 y383
 *  b7 | margin bar + red closer        | Draw+T| x60 y415..445 · x76 y433
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const SLOTS: [number, number, string, string][] = [
  [140, 60, "3-", AMBER],
  [205, 130, "hydroxy", GREEN],
  [340, 80, "but", INK],
  [425, 70, "an", AMBER_DARK],
  [500, 70, "al", RED],
];
const LABELS = ["locant", "substituent", "C-count", "bond type", "group"];

export default function C11Ch08Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const roots1 = ["1 meth", "2 eth", "3 prop", "4 but", "5 pent"];
  const roots2 = ["6 hex", "7 hept", "8 oct", "9 non", "10 dec"];
  const cols = [150, 350, 550, 750, 950];

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={24} fill={RED} script>
          {t("Nomenclature — chemistry's PIN-code system", "Nomenclature — chemistry ka PIN-code system")}
        </T>
      </Fade>

      {/* beat 1 — millions of compounds, one name each */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={14} fill={INK}>
          {t(
            "millions of compounds — IUPAC: one name per structure, one structure per name",
            "lakhon compounds — IUPAC: ek structure ka ek naam, ek naam ka ek structure"
          )}
        </T>
      </Fade>

      {/* beat 2 — postal address analogy */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={135} size={14} fill={MUTED}>
          {t("landmark → locality → lane → house number", "landmark → locality → lane → house number")}
        </T>
      </Fade>

      {/* beat 3 — the name split into slots: 3-hydroxybutanal */}
      {SLOTS.map(([x, w, label, color], i) => (
        <Fade key={label} on={beat >= 3} delay={dl(3, 0.2 + i * 0.35)}>
          <Rect x={x} y={180} width={w} height={40} rx={7} fill={CREAM} stroke={color} strokeWidth={2} />
          <T x={x + w / 2} y={206} size={17} fill={color} weight={700}>
            {label}
          </T>
        </Fade>
      ))}

      {/* beat 4 — what each slot means */}
      {SLOTS.map(([x, w], i) => (
        <Fade key={i} on={beat >= 4} delay={dl(4, 0.2 + i * 0.3)}>
          <T x={x + w / 2} y={245} size={12} fill={MUTED}>
            {t(LABELS[i], LABELS[i])}
          </T>
        </Fade>
      ))}

      {/* beat 5 — carbon-count roots, 1 through 10 */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        {roots1.map((r, i) => (
          <T key={r} x={cols[i]} y={300} size={14} fill={INK} weight={700}>
            {r}
          </T>
        ))}
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        {roots2.map((r, i) => (
          <T key={r} x={cols[i]} y={325} size={14} fill={INK} weight={700}>
            {r}
          </T>
        ))}
      </Fade>

      {/* beat 6 — reversibility, nothing guessed */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 60 365 L 60 395" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={383} size={15} fill={RED} script anchor="start">
          {t(
            "read structure off the name; rebuild name off the structure — nothing is guessed",
            "naam se structure padho; structure se naam banao — kuch bhi guess nahi"
          )}
        </T>
      </Fade>

      {/* beat 7 — tie-breaks win marks */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 60 415 L 60 445" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={433} size={15} fill={RED} script anchor="start">
          {t(
            "ties break by explicit rules — that's exactly where exam marks are won and lost",
            "ties explicit rules se todte — wahi pe exam ke marks ban ya bigadte hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
