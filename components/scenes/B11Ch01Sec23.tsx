/**
 * B11 Ch01 · Section 23 — "Worked examples: monotypic vs polytypic &
 * statement count"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Two independent NEET examples. Example 3 (beats 0-3) occupies the whole
 * board, then vanishes (on={beat<4}) so Example 4 (beats 4-7) can reuse
 * the same coordinates without ghost-stacking.
 *
 * Beats (en [0, 14.83, 26.97, 38.64, 51.43, 67.0, 83.22, 100.92]):
 *  0 Example 3 title + intro (Corvus's 3 species vs Pavo's 1)
 *  1 DIAGRAM: Corvus (POLYtypic) box vs Pavo (MONOtypic) box
 *  2 Corvus = 3 species; Pavo = 1
 *  3 answer 2 + the mono/poly prefix speed-trap
 *  4 Example 4 title + 4 statements A-D (reusing the freed slot)
 *  5 A, C, D marked TRUE
 *  6 B marked FALSE (reversed) + correction + THREE correct
 *  7 closing insight: spot the one reversed pair
 */

import React from "react";
import { Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, crossD, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const STATEMENTS: [number, string, string][] = [
  [104, "A: kingdom→species: organisms per taxon DECREASE, shared characters INCREASE", "A: kingdom→species: taxon mein organisms DECREASE, shared characters INCREASE"],
  [132, "B: Family is the TAXON; Felidae is the CATEGORY", "B: Family TAXON hai; Felidae CATEGORY hai"],
  [160, "C: seven obligate categories — intermediates (e.g. sub-class) allowed", "C: saat obligate categories — intermediates (jaise sub-class) allowed"],
  [188, "D: phylum (animals) ≡ division (plants)", "D: phylum (animals) ≡ division (plants)"],
];

export default function B11Ch01Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — Example 3 title + intro */}
      <Fade on={beat >= 0 && beat < 4} delay={dl(0, 0.2)}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("Example 3 — Corvus vs Pavo (NEET)", "Example 3 — Corvus vs Pavo (NEET)")}
        </T>
      </Fade>
      <Fade on={beat >= 0 && beat < 4} delay={dl(0, 1.8)}>
        <Draw on={true} d="M 330 86 C 430 82, 650 82, 750 86" stroke={RED} sw={2.2} dur={0.6} />
      </Fade>
      <Fade on={beat >= 0 && beat < 4} dim={beat >= 1} delay={dl(0, 2.6)}>
        <T x={540} y={110} size={14} fill={MUTED} script>
          {t("Corvus: house crow, jungle crow, raven · Pavo: only peafowl", "Corvus: house crow, jungle crow, raven · Pavo: sirf peafowl")}
        </T>
      </Fade>

      {/* beat 1 — the two genus boxes */}
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 0.2)}>
        <Draw on={true} d="M 140 140 h 320 v 160 h -320 z" stroke={GREEN} sw={2.2} dur={0.7} />
      </Fade>
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 1)}>
        <SvgText x={300} y={169} textAnchor="middle" fontStyle="italic" fontWeight={700} fontSize={16} fill={GREEN} fontFamily="var(--font-anek-latin), sans-serif">
          Corvus
        </SvgText>
      </Fade>
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 1.4)}>
        <T x={300} y={188} size={11} fill={GREEN} script={false}>
          {t("POLYtypic (≥2 species)", "POLYtypic (≥2 species)")}
        </T>
      </Fade>
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 1.8)}>
        <T x={300} y={212} size={11} fill={INK} script={false}>
          house crow
        </T>
      </Fade>
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 2.1)}>
        <T x={300} y={232} size={11} fill={INK} script={false}>
          jungle crow
        </T>
      </Fade>
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 2.4)}>
        <T x={300} y={252} size={11} fill={INK} script={false}>
          raven
        </T>
      </Fade>
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 2.8)}>
        <T x={300} y={282} size={10} fill={MUTED} script={false}>
          {t("three species", "teen species")}
        </T>
      </Fade>

      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 0.5)}>
        <Draw on={true} d="M 620 140 h 320 v 160 h -320 z" stroke={AMBER_DARK} sw={2.2} dur={0.7} />
      </Fade>
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 1.3)}>
        <SvgText x={780} y={169} textAnchor="middle" fontStyle="italic" fontWeight={700} fontSize={16} fill={AMBER_DARK} fontFamily="var(--font-anek-latin), sans-serif">
          Pavo
        </SvgText>
      </Fade>
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 1.7)}>
        <T x={780} y={188} size={11} fill={AMBER_DARK} script={false}>
          {t("MONOtypic (1 species)", "MONOtypic (1 species)")}
        </T>
      </Fade>
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 2.1)}>
        <T x={780} y={228} size={11} fill={INK} script={false}>
          peafowl
        </T>
      </Fade>
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 2.6)}>
        <T x={780} y={282} size={10} fill={MUTED} script={false}>
          {t("single species", "ek hi species")}
        </T>
      </Fade>

      {/* beat 2 — the count */}
      <Fade on={beat >= 2 && beat < 4} delay={dl(2, 0.3)}>
        <T x={540} y={320} size={13} fill={INK} script={false}>
          {t(
            "Corvus = 3 species (polytypic); Pavo = 1 (monotypic)",
            "Corvus = 3 species (polytypic); Pavo = 1 (monotypic)"
          )}
        </T>
      </Fade>

      {/* beat 3 — the answer + speed-trap */}
      <Fade on={beat >= 3 && beat < 4} delay={dl(3, 0.3)}>
        <Chip x={370} y={345} w={340} h={30} fill={INK} textFill={CREAM} size={14} script={false}>
          {t("ANSWER: option 2", "ANSWER: option 2")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3 && beat < 4} delay={dl(3, 1.3)}>
        <T x={540} y={400} size={13} fill={RED} script>
          {t(
            "speed-trap: mono (=1) vs poly (=many) — don't blur the prefixes",
            "speed-trap: mono (=1) vs poly (=many) — prefixes ko blur mat karo"
          )}
        </T>
      </Fade>

      {/* beat 4 — Example 4: the four statements */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("Example 4 — count the correct statements (NEET)", "Example 4 — sahi statements count karo (NEET)")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.3)} d="M 330 86 C 430 82, 650 82, 750 86" stroke={RED} sw={2} dur={0.5} />
      {STATEMENTS.map(([y, e2, h2], i) => (
        <Fade key={y} on={beat >= 4} delay={dl(4, 2 + i * 0.6)}>
          <T x={60} y={y} size={13} fill={INK} script={false} anchor="start">
            {t(e2, h2)}
          </T>
        </Fade>
      ))}

      {/* beat 5 — A, C, D are TRUE */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Draw on={true} d="M 877 87 L 883 93 L 895 79" stroke={GREEN} sw={2.2} dur={0.35} />
        <Chip x={900} y={83} w={90} h={24} fill={CREAM} stroke={GREEN} textFill={GREEN} size={11} script={false}>
          TRUE ✓
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <Draw on={true} d="M 877 143 L 883 149 L 895 135" stroke={GREEN} sw={2.2} dur={0.35} />
        <Chip x={900} y={139} w={90} h={24} fill={CREAM} stroke={GREEN} textFill={GREEN} size={11} script={false}>
          TRUE ✓
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <Draw on={true} d="M 877 171 L 883 177 L 895 163" stroke={GREEN} sw={2.2} dur={0.35} />
        <Chip x={900} y={167} w={90} h={24} fill={CREAM} stroke={GREEN} textFill={GREEN} size={11} script={false}>
          TRUE ✓
        </Chip>
      </Fade>

      {/* beat 6 — B is FALSE (reversed) + the count */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Draw on={true} d={crossD(875, 115, 18, 14)} stroke={RED} sw={2} dur={0.4} />
        <Chip x={900} y={111} w={90} h={24} fill={CREAM} stroke={RED} textFill={RED} size={11} script={false}>
          FALSE ✗
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={540} y={225} size={13} fill={GREEN} script={false}>
          {t("correction: Family = CATEGORY, Felidae = TAXON", "correction: Family = CATEGORY, Felidae = TAXON")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <Chip x={310} y={255} w={460} h={34} fill={INK} textFill={CREAM} size={15} script={false}>
          {t("ANSWER: THREE correct — A, C, D", "ANSWER: THREE correct — A, C, D")}
        </Chip>
      </Fade>

      {/* beat 7 — the closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={315} size={13} fill={AMBER_DARK} script>
          {t(
            "the whole difficulty = spotting the ONE reversed pair in B",
            "poori mushkil = B mein us EK reversed pair ko pakadne mein hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
