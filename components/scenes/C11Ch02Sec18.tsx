/**
 * C11 Ch02 · Section 18 — "Line spectra: the fingerprint that says quantised"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 8.28, 22.1, 30.55, 42.84, 54.95, 63.32, 75.86]):
 *  0 anchor: "spectra: the barcode of an atom"
 *  1 explain: atoms emit sharp lines, not a continuous band
 *  2 represent: continuous spectrum (unbroken band)
 *  3 represent: emission line spectrum (bright lines, dark bg)
 *  4 represent: absorption line spectrum (dark lines, bright bg)
 *  5 explain: same positions — mirror images
 *  6 guardrail (high): sharp fixed lines ⇒ energy is QUANTISED
 *  7 explain: launch-pad for Bohr's model
 *
 * Layout plan (3 strips, x300..900):
 *  title (always)            | T mid | x540 y52 size15 script red
 *  b0 | anchor caption        | T mid | x540 y76             [dims@b1]
 *  b1 | thesis caption        | T mid | x540 y108
 *  b2 | continuous strip      | Fade  | x300..900 y124..152
 *  b2 | "continuous" label    | T end | x250 y142
 *  b3 | emission strip+lines  | Fade  | x300..900 y172..200
 *  b3 | "emission" label      | T end | x250 y190
 *  b4 | absorption strip+lines| Fade  | x300..900 y220..248
 *  b4 | "absorption" label    | T end | x250 y238
 *  b5 | "mirror images" cap   | T mid | x540 y275
 *  b6 | guardrail box (high)  | Chip  | x310..770 y305..341
 *  b7 | "launch-pad" caption  | T mid | x540 y380
 */

import React from "react";
import { Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  T,
  Chip,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const CONTINUOUS: [number, string][] = [
  [300, MUTED],
  [420, AMBER],
  [540, AMBER_DARK],
  [660, GREEN],
  [780, RED],
];

const LINE_X: [number, string][] = [
  [400, AMBER],
  [530, GREEN],
  [660, RED],
  [790, AMBER_DARK],
];

export default function C11Ch02Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={15} fill={RED} script>
          {t("line spectra: the fingerprint that says quantised", "line spectra: fingerprint jo quantised bolta hai")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={76} size={11} fill={RED} script>
          {t("spectra: the barcode of an atom", "spectra: atom ka barcode")}
        </T>
      </Fade>

      {/* beat 1 — thesis: sharp lines, not continuous */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={108} size={12} fill={INK} script>
          {t(
            "energised atoms emit sharp lines, not a continuous band",
            "energised atoms sharp lines chhodte hain, continuous band nahi"
          )}
        </T>
      </Fade>

      {/* beat 2 — represent: continuous spectrum */}
      {CONTINUOUS.map(([x, fill], i) => (
        <Fade key={`c${x}`} on={beat >= 2} delay={dl(2, 0.2 + i * 0.15)}>
          <Rect x={x} y={124} width={120} height={28} fill={fill} />
        </Fade>
      ))}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={250} y={142} size={12} fill={INK} anchor="end">
          {t("continuous", "continuous")}
        </T>
      </Fade>

      {/* beat 3 — represent: emission line spectrum */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Rect x={300} y={172} width={600} height={28} fill={INK} />
      </Fade>
      {LINE_X.map(([x, fill], i) => (
        <Fade key={`e${x}`} on={beat >= 3} delay={dl(3, 0.6 + i * 0.15)}>
          <Rect x={x} y={172} width={6} height={28} fill={fill} />
        </Fade>
      ))}
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={250} y={190} size={12} fill={INK} anchor="end">
          {t("emission", "emission")}
        </T>
      </Fade>

      {/* beat 4 — represent: absorption line spectrum */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <Rect x={300} y={220} width={600} height={28} fill={MUTED} />
      </Fade>
      {LINE_X.map(([x], i) => (
        <Fade key={`a${x}`} on={beat >= 4} delay={dl(4, 0.6 + i * 0.15)}>
          <Rect x={x} y={220} width={6} height={28} fill={INK} />
        </Fade>
      ))}
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={250} y={238} size={12} fill={INK} anchor="end">
          {t("absorption", "absorption")}
        </T>
      </Fade>

      {/* beat 5 — explain: mirror images at the same positions */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={275} size={12} fill={MUTED} script>
          {t("same positions — mirror images", "same positions — mirror images")}
        </T>
      </Fade>

      {/* beat 6 — guardrail (high): energy is quantised */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={310} y={305} w={460} h={36} fill={CREAM} stroke={RED} textFill={RED} size={15} script={false}>
          {t("sharp fixed lines ⇒ energy is QUANTISED", "sharp fixed lines ⇒ energy QUANTISED hai")}
        </Chip>
      </Fade>

      {/* beat 7 — explain: launch-pad for Bohr */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={380} size={13} fill={GREEN} script>
          {t("the launch-pad for Bohr's model", "Bohr ke model ka launch-pad")}
        </T>
      </Fade>
    </Scene>
  );
}
