/**
 * C11 Ch01 · Section 3 — "Properties, and physical versus chemical change"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0,7.94,24.75,41.65,65.88,82.18,96.69,113.24]):
 *  0 anchor: properties come in two families (dims at beat 1)
 *  1 represent: "physical" column — property examples + "same substance after"
 *  2 represent: "chemical" column — property examples + "must destroy original"
 *  3 extend both columns: physical/chemical CHANGE examples + reversible tags
 *  4 land: THE TEST — was a new substance formed? (central callout)
 *  5 explain via worked mini-case: salt+water --evaporate--> salt, unchanged
 *  6 fine print 1: "pure" = one substance (air looks pure, is a mixture)
 *  7 guardrail: homogeneous/heterogeneous depends on scale (milk = colloid)
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | question (script17 ink)      | T mid | x540  y104  [dims@b1]
 *  b1 | "physical" chip (green)      | Chip  | x200..340 y130..162
 *  b1 | examples (12 muted)          | T mid | x270  y178
 *  b1 | tag "same substance ✓" (12)  | T mid | x270  y200
 *  b2 | "chemical" chip (red)        | Chip  | x740..880 y130..162
 *  b2 | examples (12 muted)          | T mid | x810  y178
 *  b2 | tag "must destroy ✗" (12)    | T mid | x810  y200
 *  b3 | phys change examples (12)    | T mid | x270  y245
 *  b3 | phys "reversible ✓" (12)     | T mid | x270  y268
 *  b3 | chem change examples (12)    | T mid | x810  y245
 *  b3 | chem "not reversed ✗" (12)   | T mid | x810  y268
 *  b4 | THE TEST chip (18, w440)     | Chip  | x320..760 y305..357
 *  b5 | chip "salt+water" (15)       | Chip  | x150..380 y392..426
 *  b5 | ReactionArrow over=evaporate | Draw  | x390..660 y412
 *  b5 | chip "salt unchanged" (15)   | Chip  | x670..930 y392..426
 *  b5 | "= physical change" (14 grn) | T mid | x540  y458
 *  b6 | note1 (13 amber-dark script) | T mid | x540  y488
 *  b6 | note2 (12 muted script)      | T mid | x540  y510
 *  b7 | guardrail l1 (14 red script) | T mid | x540  y545
 *  b7 | guardrail l2 (12 muted)      | T mid | x540  y568
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
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
import { ReactionArrow } from "./chem-kit";

export default function C11Ch01Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={25} fill={RED} script>
          {t("physical vs chemical change", "physical vs chemical change")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.4)}>
        <T x={540} y={104} size={17} fill={INK} script>
          {t(
            "properties come in two families — mirroring two kinds of change",
            "properties do parivaar mein aati hain — do tarah ke changes ka aaina"
          )}
        </T>
      </Fade>

      {/* beat 1 — physical property column */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Chip x={200} y={130} w={140} h={32} fill={CREAM} stroke={GREEN} textFill={INK} size={17} script={false}>
          {t("physical", "physical")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={270} y={178} size={12} fill={MUTED} script>
          {t("colour · melting pt · boiling pt · density · solubility", "rang · melting pt · boiling pt · density · solubility")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <T x={270} y={200} size={12} fill={GREEN} script>
          {t("same substance after ✓", "same substance after ✓")}
        </T>
      </Fade>

      {/* beat 2 — chemical property column */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={740} y={130} w={140} h={32} fill={CREAM} stroke={RED} textFill={INK} size={17} script={false}>
          {t("chemical", "chemical")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={810} y={178} size={12} fill={MUTED} script>
          {t("combustibility · acidity · reacts with water", "combustibility · acidity · paani ke saath reactivity")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={810} y={200} size={12} fill={RED} script>
          {t("must destroy original ✗", "original ko todna padta hai ✗")}
        </T>
      </Fade>

      {/* beat 3 — physical / chemical CHANGE, extending both columns */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={270} y={245} size={12} fill={MUTED} script>
          {t("melt ice · dissolve sugar · tear paper", "baraf pighalna · sugar ghulna · kagaz phaadna")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={270} y={268} size={12} fill={GREEN} script>
          {t("reversible ✓", "reversible ✓")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={810} y={245} size={12} fill={MUTED} script>
          {t("burn paper · rust iron · curdle milk", "kagaz jalna · lohe mein jung · doodh phatna")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.5)}>
        <T x={810} y={268} size={12} fill={RED} script>
          {t("not easily reversed ✗", "aasani se ulta nahi hota ✗")}
        </T>
      </Fade>

      {/* beat 4 — THE TEST */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <Chip x={320} y={305} w={440} h={52} fill={INK} textFill="#fff" size={18} script={false}>
          {t("THE TEST: was a NEW substance formed?", "THE TEST: kya ek NAYI substance bani?")}
        </Chip>
      </Fade>

      {/* beat 5 — the salt trap: dissolve then evaporate, unchanged */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <Chip x={150} y={392} w={230} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          {t("salt dissolved in water", "namak paani mein ghula")}
        </Chip>
      </Fade>
      <ReactionArrow
        on={beat >= 5}
        delay={dl(5, 1.3)}
        x1={392}
        x2={658}
        y={409}
        over={t("evaporate", "evaporate (paani udao)")}
        color={INK}
      />
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <Chip x={670} y={392} w={260} h={34} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          {t("salt — unchanged", "namak — waisa hi")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.6)}>
        <T x={540} y={462} size={14} fill={GREEN} script>
          {t("= physical change (reversible)", "= physical change (reversible)")}
        </T>
      </Fade>

      {/* beat 6 — fine print: what "pure" really means */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={492} size={13} fill={AMBER_DARK} script>
          {t(
            "chemistry's “pure” = one substance only, not “clean”",
            "chemistry ka “pure” = sirf ek substance, “clean” nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={540} y={514} size={12} fill={MUTED} script>
          {t(
            "air LOOKS pure — really a homogeneous mixture",
            "air dekhne mein pure — asal mein homogeneous mixture"
          )}
        </T>
      </Fade>

      {/* beat 7 — guardrail: homogeneous/heterogeneous depends on scale */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={548} size={15} fill={RED} script>
          {t(
            "homogeneous vs heterogeneous depends on scale",
            "homogeneous vs heterogeneous — scale par depend karta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={540} y={572} size={12} fill={MUTED} script>
          {t(
            "milk looks uniform — but is a colloid (heterogeneous)",
            "doodh uniform dikhta hai — par colloid hai (heterogeneous)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
