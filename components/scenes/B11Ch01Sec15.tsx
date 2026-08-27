/**
 * B11 Ch01 · Section 15 — "Worked examples: Brassica names & statement count"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Two independent NEET examples. Example 3 (beats 0-3) occupies the whole
 * board, then vanishes (on={beat<4}) so Example 4 (beats 4-7) can reuse the
 * same coordinates without ghost-stacking.
 *
 * Beats (en [0, 18.37, 39.89, 58.07, 70.49, 85.35, 109.74, 120.18]):
 *  0 Example 3 title — three Brassica names
 *  1 DIAGRAM: 3 name rows, read the first two words only
 *  2 cabbage & cauliflower = same species; mustard = same genus only
 *  3 answer: option 2 + the "Brassica ×3" speed-trap
 *  4 Example 4 title + 4 statements A-D (reusing the freed slot)
 *  5 A and C marked FALSE
 *  6 B marked TRUE, D marked FALSE → only ONE correct
 *  7 pattern insight: 3 of 4 traps rest on one reversed word
 */

import React from "react";
import { Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, crossD, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const STATEMENTS: [number, string, string][] = [
  [104, "A: systematics is NARROWER than taxonomy", "A: systematics taxonomy se NARROWER hai"],
  [132, "B: biological species = interbreeding + fertile offspring (Mayr)", "B: biological species = interbreeding + fertile offspring (Mayr)"],
  [160, "C: ICBN → animals, ICZN → plants", "C: ICBN → animals, ICZN → plants"],
  [188, "D: tautonyms (e.g. Rattus rattus) are NOT valid", "D: tautonyms (jaise Rattus rattus) valid NAHI hain"],
];

export default function B11Ch01Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — Example 3 title */}
      <Fade on={beat >= 0 && beat < 4} delay={dl(0, 0.2)}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("Example 3 — the three Brassica names (NEET)", "Example 3 — teen Brassica naam (NEET)")}
        </T>
      </Fade>
      <Fade on={beat >= 0 && beat < 4} delay={dl(0, 1.8)}>
        <Draw on={true} d="M 330 86 C 430 82, 650 82, 750 86" stroke={RED} sw={2.2} dur={0.6} />
      </Fade>

      {/* beat 1 — the three names, side by side */}
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 0.3)}>
        <SvgText x={60} y={120} fontStyle="italic" fontWeight={700} fontSize={16} fill={GREEN} fontFamily="var(--font-anek-latin), sans-serif">
          Brassica oleracea
        </SvgText>
        <T x={330} y={120} size={13} fill={MUTED} script={false} anchor="start">
          var. capitata — cabbage
        </T>
      </Fade>
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 0.9)}>
        <Draw on={true} d="M 60 134 L 950 134" stroke={MUTED} sw={1} dur={0.3} />
      </Fade>
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 1.4)}>
        <SvgText x={60} y={150} fontStyle="italic" fontWeight={700} fontSize={16} fill={GREEN} fontFamily="var(--font-anek-latin), sans-serif">
          Brassica oleracea
        </SvgText>
        <T x={330} y={150} size={13} fill={MUTED} script={false} anchor="start">
          var. botrytis — cauliflower
        </T>
      </Fade>
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 2)}>
        <Draw on={true} d="M 60 164 L 950 164" stroke={MUTED} sw={1} dur={0.3} />
      </Fade>
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 2.5)}>
        <SvgText x={60} y={180} fontStyle="italic" fontWeight={700} fontSize={16} fill={AMBER_DARK} fontFamily="var(--font-anek-latin), sans-serif">
          Brassica nigra
        </SvgText>
        <T x={330} y={180} size={13} fill={MUTED} script={false} anchor="start">
          — black mustard
        </T>
      </Fade>
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 3.3)}>
        <T x={540} y={205} size={12} fill={MUTED} script>
          {t("read the FIRST TWO words only", "sirf PEHLE do words padho")}
        </T>
      </Fade>

      {/* beat 2 — the explanation */}
      <Fade on={beat >= 2 && beat < 4} delay={dl(2, 0.3)}>
        <T x={540} y={240} size={14} fill={INK} script>
          {t(
            "cabbage & cauliflower = same species; mustard = same genus only",
            "cabbage & cauliflower = same species; mustard = sirf same genus"
          )}
        </T>
      </Fade>

      {/* beat 3 — the answer + speed-trap */}
      <Fade on={beat >= 3 && beat < 4} delay={dl(3, 0.3)}>
        <Chip x={370} y={270} w={340} h={32} fill={INK} textFill={CREAM} size={15} script={false}>
          {t("ANSWER: option 2", "ANSWER: option 2")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3 && beat < 4} delay={dl(3, 1.3)}>
        <T x={540} y={328} size={13} fill={RED} script>
          {t(
            "speed-trap: seeing 'Brassica' 3× ≠ all same species — the 2ND word fixes species",
            "speed-trap: 'Brassica' 3× dekh kar all same species mat bhago — 2ND word species fix karta hai"
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
          <T x={60} y={y} size={14} fill={INK} script={false} anchor="start">
            {t(e2, h2)}
          </T>
        </Fade>
      ))}

      {/* beat 5 — A and C are FALSE */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Draw on={true} d={crossD(875, 92, 18, 14)} stroke={RED} sw={2} dur={0.4} />
        <Chip x={900} y={91} w={100} h={26} fill={CREAM} stroke={RED} textFill={RED} size={12} script={false}>
          FALSE ✗
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <Draw on={true} d={crossD(875, 148, 18, 14)} stroke={RED} sw={2} dur={0.4} />
        <Chip x={900} y={147} w={100} h={26} fill={CREAM} stroke={RED} textFill={RED} size={12} script={false}>
          FALSE ✗
        </Chip>
      </Fade>

      {/* beat 6 — B is TRUE, D is FALSE → only one correct */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Draw on={true} d="M 877 123 L 883 129 L 895 115" stroke={GREEN} sw={2.2} dur={0.35} />
        <Chip x={900} y={119} w={100} h={26} fill={CREAM} stroke={GREEN} textFill={GREEN} size={12} script={false}>
          TRUE ✓
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <Draw on={true} d={crossD(875, 176, 18, 14)} stroke={RED} sw={2} dur={0.4} />
        <Chip x={900} y={175} w={100} h={26} fill={CREAM} stroke={RED} textFill={RED} size={12} script={false}>
          FALSE ✗
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <Chip x={320} y={230} w={440} h={34} fill={INK} textFill={CREAM} size={15} script={false}>
          {t("ANSWER: only ONE correct — B", "ANSWER: only ONE correct — B")}
        </Chip>
      </Fade>

      {/* beat 7 — the pattern */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={292} size={13} fill={AMBER_DARK} script>
          {t(
            "3 of 4 traps rest on a single REVERSED word — read every word",
            "4 mein se 3 traps ek hi ULTE word par tike hain — har word padho"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
