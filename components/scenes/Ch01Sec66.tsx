/**
 * Ch01 · Section 66 — "Procedure C: zero error — the part students fail"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.1, 27.1, 48.1, 73, 83.4, 106.3, 117.8]):
 *  0 title
 *  1 close the jaws — should read zero
 *  2 three panels: aligned (green) · past (red) · short (amber)
 *  3 red case: +0.04 ⇒ subtract, reading comes down
 *  4 amber case: −0.04
 *  5 observed − (−0.04) = +0.04 — the mistake that costs 2× the error
 *  6 black bar: corrected = observed − zero error (sign included)
 *  7 why one rule works · memorise the formula, not the cases
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b2 | panels centers cx 250/540/830 · main line y155 (0-tick up bl 148) · vernier y195 (0-tick, bl 215) · labels bl 240
 *  b3 | red script 14 st x120 bl 285
 *  b4 | amber script 14 st x120 bl 320
 *  b5 | sans 16 st x120 bl 360 · red script 13 st x120 bl 392
 *  b6 | bar x140..940 y420..458 · cream 17 bl 444
 *  b7 | script 13 mid bl 500/528 · green 15 mid bl 566
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
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec66({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const panel = (cx: number, offset: number) =>
    `M ${cx - 80} 155 h 160 M ${cx} 155 v 15 ` +
    `M ${cx - 80} 195 h 160 M ${cx + offset} 195 v -15`;

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={24} fill={INK} script>
          {t(
            "zero error — the part students fail",
            "zero error — jahan students fail hote hain"
          )}
        </T>
      </Fade>

      {/* beat 1 — close the jaws */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={540} y={92} size={14} fill={INK} script>
          {t(
            "close the jaws, nothing between them — it should read zero; if not, EVERY reading carries the offset",
            "jabde band karo, beech mein kuchh nahi — zero dikhna chahiye; warna HAR reading offset dhoegi"
          )}
        </T>
      </Fade>

      {/* beat 2 — the three faces */}
      <Draw on={beat >= 2} delay={dl(2, 1)} d={panel(250, 0)} stroke={GREEN} sw={2} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={250} y={148} size={12} fill={GREEN}>0</T>
        <T x={250} y={215} size={12} fill={GREEN}>0</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={250} y={240} size={13} fill={GREEN} script>
          {t("aligned — no error", "mile hue — koi error nahi")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 7)} d={panel(540, 14)} stroke={RED} sw={2} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={540} y={148} size={12} fill={RED}>0</T>
        <T x={554} y={215} size={12} fill={RED}>0</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={540} y={240} size={13} fill={RED} script>
          {t("past the main zero → +ve", "main zero se aage → +ve")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 13)} d={panel(830, -14)} stroke={AMBER_DARK} sw={2} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 14)}>
        <T x={830} y={148} size={12} fill={AMBER_DARK}>0</T>
        <T x={816} y={215} size={12} fill={AMBER_DARK}>0</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 15)}>
        <T x={830} y={240} size={13} fill={AMBER_DARK} script>
          {t("short of it → −ve", "usse peechhe → −ve")}
        </T>
      </Fade>

      {/* beat 3 — the red case */}
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={120} y={285} size={14} fill={RED} script anchor="start">
          {t(
            "red: an excess before you measure anything — +0.04 cm ⇒ subtract 0.04, reading comes DOWN",
            "laal: napne se pehle hi zyada dikha raha — +0.04 cm ⇒ 0.04 ghatao, reading NEECHE aati"
          )}
        </T>
      </Fade>

      {/* beat 4 — the amber case */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={120} y={320} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "yellow: sits short of the main zero — the error is −0.04 cm",
            "peela: main zero se peechhe baitha — error hai −0.04 cm"
          )}
        </T>
      </Fade>

      {/* beat 5 — where the marks die */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={120} y={360} size={16} fill={INK} weight={700} anchor="start">
          observed − (−0.04) = observed + 0.04
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 10)}>
        <T x={120} y={392} size={13} fill={RED} script anchor="start">
          {t(
            "the hand sees 'negative' and writes a subtraction — wrong by TWICE the zero error",
            "haath 'negative' dekhte hi ghatav likh deta — zero error ke DUGNE se galat"
          )}
        </T>
      </Fade>

      {/* beat 6 — the black bar */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <Rect x={140} y={420} width={800} height={38} rx={10} fill={INK} />
        <T x={540} y={445} size={17} fill={CREAM} weight={700}>
          {t(
            "corrected = observed − zero error  (sign included)",
            "corrected = observed − zero error  (sign samet)"
          )}
        </T>
      </Fade>

      {/* beat 7 — one universal rule */}
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={540} y={500} size={13} fill={INK} script>
          {t(
            "+ error → subtracted → the reading drops",
            "+ error → ghata → reading girti hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={540} y={528} size={13} fill={INK} script>
          {t(
            "− error → subtracted → the reading rises (minus a minus = plus)",
            "− error → ghata → reading chadhti hai (minus ka minus = plus)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 15)}>
        <T x={540} y={566} size={15} fill={GREEN} script>
          {t(
            "memorise the FORMULA, not the cases — the single most valuable habit here",
            "FORMULA yaad karo, maamle nahi — yahan ki sabse keemti aadat"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
