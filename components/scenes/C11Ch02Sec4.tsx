/**
 * C11 Ch02 · Section 4 — "The iso-family: same or different?"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Re-verified against real audio/reveals (en [0,7.42,15.96,27.82,41.13,
 * 47.96,56.49,67.41]) — content/beat mapping unchanged, VERDICT PASS.
 *
 * Beats:
 *  0 anchor: the four confusing names, one question
 *  1 the trick: anchor each name to what stays CONSTANT — draw the empty grid
 *  2 represent: Isotopes row — same Z (¹H/²H/³H)
 *  3 represent: Isobars row — same A (⁴⁰Ar/⁴⁰K/⁴⁰Ca)
 *  4 represent: Isotones row — same N (¹⁴C & ¹⁵N)
 *  5 represent: Isoelectronic row — same e⁻ count (Na⁺ & Mg²⁺)
 *  6 guardrail (high): mnemonic — toP/Bar/toN → Proton/mAss/Neutron
 *  7 land: fix the constant first, the name follows
 *
 * Layout plan (table x140..940 y165..378, cols name/constant/example):
 *  title (always)                 | T mid | x540 y62 size21 script red
 *  b0 | the four names, "?"       | T mid | x540 y110 size17 script red [dims@b1]
 *  b1 | "anchor to CONSTANT"      | T mid | x540 y150 size14 script
 *  b1 | grid (border+dividers)    | Draw  | x140..940 y165..378
 *  b1 | header labels ×3          | T     | y185  x200/380/715
 *  b2 | Isotopes row              | T     | y225  x200/380/715
 *  b3 | Isobars row               | T     | y270  x200/380/715
 *  b4 | Isotones row               | T     | y315  x200/380/715
 *  b5 | Isoelectronic row         | T     | y360  x200/380/715
 *  b6 | mnemonic chip (RED)       | Chip  | x200..880 y395..431
 *  b7 | land line (GREEN)         | T mid | x540 y468
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
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const GRID_D =
  "M140 165 H940 V378 H140 Z M270 165 V378 M490 165 V378 " +
  "M140 198 H940 M140 243 H940 M140 288 H940 M140 333 H940";

type Row = { y: number; name: [string, string]; constant: [string, string]; example: string };

const ROWS: Row[] = [
  { y: 225, name: ["Isotopes", "Isotopes"], constant: ["same Z", "same Z"], example: "¹H, ²H, ³H" },
  { y: 270, name: ["Isobars", "Isobars"], constant: ["same A", "same A"], example: "⁴⁰Ar, ⁴⁰K, ⁴⁰Ca" },
  { y: 315, name: ["Isotones", "Isotones"], constant: ["same N", "same N"], example: "¹⁴C & ¹⁵N (both N=8)" },
  {
    y: 360,
    name: ["Isoelectronic", "Isoelectronic"],
    constant: ["same e⁻ count", "same e⁻ count"],
    example: "Na⁺ & Mg²⁺ (both 10 e⁻)",
  },
];

export default function C11Ch02Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={62} size={21} fill={RED} script>
          {t("same or different? — the iso-family", "same ya different? — iso-family")}
        </T>
      </Fade>

      {/* beat 0 — anchor: the four confusing names */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={110} size={17} fill={RED} script>
          {t(
            "isotopes? isobars? isotones? isoelectronic?",
            "isotopes? isobars? isotones? isoelectronic?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the trick + the empty grid */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={150} size={14} fill={MUTED} script>
          {t(
            "anchor each name to what stays CONSTANT",
            "har naam ko us cheez se anchor karo jo CONSTANT rehti hai"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d={GRID_D} stroke={INK} sw={1.8} dur={1.1} />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={200} y={185} size={13} fill={MUTED} weight={700}>
          {t("name", "naam")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={380} y={185} size={13} fill={MUTED} weight={700}>
          {t("held constant", "constant kya")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={715} y={185} size={13} fill={MUTED} weight={700}>
          {t("example", "example")}
        </T>
      </Fade>

      {/* beats 2–5 — the four rows fill in */}
      {ROWS.map((row, i) => (
        <React.Fragment key={row.y}>
          <Fade on={beat >= i + 2} delay={dl(i + 2, 0.2)}>
            <T x={200} y={row.y} size={14} fill={INK} weight={700}>
              {t(...row.name)}
            </T>
          </Fade>
          <Fade on={beat >= i + 2} delay={dl(i + 2, 0.6)}>
            <T x={380} y={row.y} size={13} fill={INK}>
              {t(...row.constant)}
            </T>
          </Fade>
          <Fade on={beat >= i + 2} delay={dl(i + 2, 1)}>
            <T x={715} y={row.y} size={13} fill={INK}>
              {row.example}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 6 — guardrail (high emphasis): the mnemonic */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={200} y={395} w={680} h={36} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "toP → Proton (Z)  ·  Bar → mAss (A)  ·  toN → Neutron (N)",
            "toP → Proton (Z)  ·  Bar → mAss (A)  ·  toN → Neutron (N)"
          )}
        </Chip>
      </Fade>

      {/* beat 7 — land: fix the constant first */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={468} size={16} fill={GREEN} script>
          {t(
            "fix the constant first — the name follows",
            "pehle constant fix karo — naam khud aa jaayega"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
