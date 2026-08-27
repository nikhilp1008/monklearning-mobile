/**
 * Ch01 · Section 6 — "The seven SI base quantities and their dimensional formulae"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.2, 35.6, 54.1, 67.8, 87.3, 98.6, 120.3]):
 *  0 title + table header (drawn underline)
 *  1 rows 1–3: length · mass · time
 *  2 row 4: electric current + red "current — not charge!" arrow to [A]
 *  3 row 5: kelvin + "kelvin is base — not celsius" arrow to [K]
 *  4 rows 6–7: mole · candela + bracket "the two everyone forgets"
 *  5 the exam secret stamp: fixed & memorised — not derived
 *  6 what's missing: charge ✗ force ✗ energy ✗ — all derived; ampere the root
 *  7 verdict: every other unit is assembled from these seven
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title (script 28, red)      | T mid | x309..771  y30..80 (bl 66)
 *  b0 | header (sans 14, muted)     | T     | bl 124 · quantity x80 st · unit x290 st ·
 *       symbol x445 mid · dim x545 mid · underline y134 x60..640
 *  b1-4 | rows, bl 166+44i (i 0..6) | T     | quantity sans16 x80 st (≤x232) ·
 *       unit script15 x290 st (≤x356) · symbol sans16 x445 mid · dim sans16 x545 mid
 *  b2 | note (script 15, red)       | T st  | x660..932  y279..306 (bl 298)
 *  b2 | arrow                       | Draw  | (652,293)→(570,294)  [→ [A] cell]
 *  b3 | note (script 15, red)       | T st  | x660..883  y323..350 (bl 342)
 *  b3 | arrow                       | Draw  | (652,337)→(570,338)  [→ [K] cell]
 *  b4 | bracket                     | Draw  | x644..652  y372..444
 *  b4 | note (script 15, muted)     | T st  | x660..858  y389..416 (bl 408)
 *  b5 | stamp (drawn rect + text)   | Draw  | x680..980  y150..194 · text bl 179
 *  b6 | impostors (sans 17)         | T mid | centers (700,470)(800,470)(900,470) + crosses
 *  b6 | "all feel fundamental…" (15)| T st  | x660..973  y491..518 (bl 510)
 *  b6 | ampere-root (script 14)     | T st  | x660..930  y532..557 (bl 550)
 *  b7 | margin bar                  | Draw  | x51 y480..510
 *  b7 | verdict (script 17, green)  | T st  | x62..520   y478..509 (bl 500)
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
  crossD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

/** [quantity-en, quantity-hi, unit, symbol, dim] */
const ROWS: [string, string, string, string, string][] = [
  ["length", "length", "metre", "m", "[L]"],
  ["mass", "mass", "kilogram", "kg", "[M]"],
  ["time", "time", "second", "s", "[T]"],
  ["electric current", "electric current", "ampere", "A", "[A]"],
  ["temperature", "temperature", "kelvin", "K", "[K]"],
  ["amount of substance", "amount of substance", "mole", "mol", "[mol]"],
  ["luminous intensity", "luminous intensity", "candela", "cd", "[cd]"],
];

const rowY = (i: number) => 166 + i * 44;

export default function Ch01Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  /** Which beat reveals row i, and the stagger base within that beat. */
  const rowBeat = [1, 1, 1, 2, 3, 4, 4];
  const rowBase = [2, 9, 15, 1, 1, 1, 7];

  return (
    <Scene>
      {/* beat 0 — title + table header */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={66} size={28} fill={RED} script>
          {t("the seven — memorise them cold", "ye saat — ratta maar ke pakke karo")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={80} y={124} size={14} fill={MUTED} anchor="start">
          {t("quantity", "quantity")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4.3)}>
        <T x={290} y={124} size={14} fill={MUTED} anchor="start">
          unit
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4.6)}>
        <T x={445} y={124} size={14} fill={MUTED}>
          symbol
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4.9)}>
        <T x={545} y={124} size={14} fill={MUTED}>
          dim
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 5.5)}
        d="M 60 134 H 640"
        stroke={MUTED}
        sw={1.4}
        dur={0.7}
      />

      {/* rows — revealed across beats 1–4 */}
      {ROWS.map(([qEn, qHi, unit, sym, dim], i) => {
        const k = rowBeat[i];
        const base = rowBase[i];
        const y = rowY(i);
        return (
          <G key={qEn}>
            <Fade on={beat >= k} delay={dl(k, base)}>
              <T x={80} y={y} size={16} fill={INK} anchor="start" weight={600}>
                {t(qEn, qHi)}
              </T>
            </Fade>
            <Fade on={beat >= k} delay={dl(k, base + 0.5)}>
              <T x={290} y={y} size={15} fill={MUTED} script anchor="start">
                {unit}
              </T>
            </Fade>
            <Fade on={beat >= k} delay={dl(k, base + 0.9)}>
              <T x={445} y={y} size={16} fill={INK} weight={800}>
                {sym}
              </T>
            </Fade>
            <Fade on={beat >= k} delay={dl(k, base + 1.3)}>
              <T x={545} y={y} size={16} fill={AMBER_DARK} weight={800}>
                {dim}
              </T>
            </Fade>
          </G>
        );
      })}

      {/* beat 2 — current, not charge */}
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={660} y={298} size={15} fill={RED} script anchor="start">
          {t("current — not charge, not voltage!", "current — charge nahi, voltage nahi!")}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 7)}
        d={arrowD(652, 293, 570, 294)}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />

      {/* beat 3 — kelvin, not celsius */}
      <Fade on={beat >= 3} delay={dl(3, 5.5)}>
        <T x={660} y={342} size={15} fill={RED} script anchor="start">
          {t("kelvin is base — not celsius", "kelvin base hai — celsius nahi")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 6.5)}
        d={arrowD(652, 337, 570, 338)}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />

      {/* beat 4 — the two everyone forgets */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 12)}
        d="M 652 372 C 644 380, 644 436, 652 444"
        stroke={MUTED}
        sw={2}
        dur={0.6}
      />
      <Fade on={beat >= 4} delay={dl(4, 12.6)}>
        <T x={660} y={408} size={15} fill={MUTED} script anchor="start">
          {t("the two everyone forgets", "jo do sab bhool jaate hain")}
        </T>
      </Fade>

      {/* beat 5 — the exam secret */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.5)}
        d="M 692 150 h 276 q 12 0 12 12 v 20 q 0 12 -12 12 h -276 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={RED}
        sw={2.4}
        dur={0.9}
      />
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <T x={830} y={179} size={17} fill={RED} script>
          {t("fixed & memorised — not derived", "fixed & ratta — derive nahi hota")}
        </T>
      </Fade>

      {/* beat 6 — the impostors that are missing */}
      {[
        ["charge", 700],
        ["force", 800],
        ["energy", 900],
      ].map(([name, cx], i) => {
        const w = 0.52 * 17 * (name as string).length;
        return (
          <G key={name}>
            <Fade on={beat >= 6} delay={dl(6, 1.5 + i * 2)}>
              <T x={cx as number} y={470} size={17} fill={INK} weight={700}>
                {name}
              </T>
            </Fade>
            <Draw
              on={beat >= 6}
              delay={dl(6, 2.2 + i * 2)}
              d={crossD((cx as number) - w / 2, 457, w, 18)}
              stroke={RED}
              sw={2.4}
              dur={0.4}
            />
          </G>
        );
      })}
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={660} y={510} size={15} fill={RED} script anchor="start">
          {t("they all FEEL fundamental — all derived", "sab fundamental LAGTE hain — sab derived")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 14)}>
        <T x={660} y={550} size={14} fill={AMBER_DARK} script anchor="start">
          {t("for electricity, ampere is the root", "electricity ki jad = ampere")}
        </T>
      </Fade>

      {/* beat 7 — everything else is assembled from these */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.5)}
        d="M 51 480 L 51 510"
        stroke={GREEN}
        sw={3.4}
        dur={0.4}
      />
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={62} y={500} size={17} fill={GREEN} script anchor="start">
          {t(
            "every newton, joule, volt — built from these seven",
            "har newton, joule, volt — inhi saat se bana hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
