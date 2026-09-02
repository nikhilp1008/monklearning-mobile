/**
 * B11 Ch01 · Section 14 — "Worked examples: correct the name & the
 * binomial A-R"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Two independent examples. Example 1 (beats 0-3) occupies the whole board,
 * then vanishes (on={beat<4}) so Example 2 (beats 4-7) can reuse the same
 * coordinates without ghost-stacking.
 *
 * Beats (en [0, 13.48, 28.19, 43.6, 59.88, 73.8, 92.71, 106.19]):
 *  0 Example 1 title — correct "felis Catus"
 *  1 errors crossed out: felis (should Capitalise) · Catus (should lowercase)
 *  2 corrected forms: Print (italic), Hand (underlined separately)
 *  3 the answer shape that earns marks
 *  4 Example 2 title + Assertion & Reason (reusing the freed slot)
 *  5 A TRUE, R TRUE
 *  6 does R explain A? YES → option 1
 *  7 takeaway: binomial = genus + epithet only, author is optional
 */

import React from "react";
import { Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, crossD, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function B11Ch01Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — Example 1 title */}
      <Fade on={beat >= 0 && beat < 4} delay={dl(0, 0.2)}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("Example 1 — correct 'felis Catus' (CBSE)", "Example 1 — 'felis Catus' sahi karo (CBSE)")}
        </T>
      </Fade>
      <Fade on={beat >= 0 && beat < 4} delay={dl(0, 1.8)}>
        <Draw on={true} d="M 330 86 C 430 82, 650 82, 750 86" stroke={RED} sw={2.2} dur={0.6} />
      </Fade>

      {/* beat 1 — the two errors */}
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 0.2)}>
        <T x={430} y={130} size={26} fill={RED} weight={800} script={false}>
          felis
        </T>
      </Fade>
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 0.9)}>
        <Draw on={true} d={crossD(398, 112, 65, 24)} stroke={RED} sw={2} dur={0.4} />
      </Fade>
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 1.6)}>
        <T x={650} y={130} size={26} fill={RED} weight={800} script={false}>
          Catus
        </T>
      </Fade>
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 2.3)}>
        <Draw on={true} d={crossD(618, 112, 65, 24)} stroke={RED} sw={2} dur={0.4} />
      </Fade>
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 3.1)}>
        <T x={430} y={168} size={13} fill={GREEN} script={false}>
          {t("genus → Felis (Capital)", "genus → Felis (Capital)")}
        </T>
      </Fade>
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 3.6)}>
        <T x={650} y={168} size={13} fill={GREEN} script={false}>
          {t("epithet → catus (lowercase)", "epithet → catus (lowercase)")}
        </T>
      </Fade>

      {/* beat 2 — the corrected forms */}
      <Fade on={beat >= 2 && beat < 4} delay={dl(2, 0.2)}>
        <T x={270} y={220} size={14} fill={INK} script={false} anchor="start">
          {t("Print:", "Print:")}
        </T>
      </Fade>
      <Fade on={beat >= 2 && beat < 4} delay={dl(2, 0.7)}>
        <SvgText x={375} y={222} textAnchor="middle" fontSize={19} fontWeight={700} fontStyle="italic" fill={AMBER_DARK} fontFamily='AnekLatin_700Bold'>
          Felis
        </SvgText>
        <SvgText x={460} y={222} textAnchor="middle" fontSize={19} fontWeight={700} fontStyle="italic" fill={AMBER_DARK} fontFamily='AnekLatin_700Bold'>
          catus
        </SvgText>
      </Fade>
      <Fade on={beat >= 2 && beat < 4} delay={dl(2, 1.6)}>
        <T x={270} y={258} size={14} fill={INK} script={false} anchor="start">
          {t("Hand:", "Hand:")}
        </T>
      </Fade>
      <Fade on={beat >= 2 && beat < 4} delay={dl(2, 2.1)}>
        <SvgText x={375} y={260} textAnchor="middle" fontSize={19} fontWeight={700} fill={INK} fontFamily='AnekLatin_700Bold'>
          Felis
        </SvgText>
        <SvgText x={460} y={260} textAnchor="middle" fontSize={19} fontWeight={700} fill={INK} fontFamily='AnekLatin_700Bold'>
          catus
        </SvgText>
      </Fade>
      <Fade on={beat >= 2 && beat < 4} delay={dl(2, 2.9)}>
        <Draw on={true} d="M 350 271 L 400 271" stroke={INK} sw={1.8} dur={0.3} />
      </Fade>
      <Fade on={beat >= 2 && beat < 4} delay={dl(2, 3.2)}>
        <Draw on={true} d="M 435 271 L 485 271" stroke={INK} sw={1.8} dur={0.3} />
      </Fade>

      {/* beat 3 — the answer shape */}
      <Fade on={beat >= 3 && beat < 4} delay={dl(3, 0.3)}>
        <Chip x={270} y={300} w={540} h={34} fill={INK} textFill={CREAM} size={14} script={false}>
          {t(
            "state the RULE VIOLATED → then the CORRECTED name, in the asked form",
            "RULE VIOLATED bolo → phir CORRECTED naam, poochhe gaye form mein"
          )}
        </Chip>
      </Fade>

      {/* beat 4 — Example 2: the assertion-reason */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("Example 2 — Assertion-Reason (HOTS)", "Example 2 — Assertion-Reason (HOTS)")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.3)} d="M 330 86 C 430 82, 650 82, 750 86" stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={60} y={120} size={14} fill={INK} script={false} anchor="start">
          {t(
            "A: Mangifera indica Linn. has THREE written items, yet is still binomial",
            "A: Mangifera indica Linn. ke TEEN likhe items hain, phir bhi binomial hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.8)}>
        <T x={60} y={148} size={14} fill={INK} script={false} anchor="start">
          {t(
            "R: the author's name is optional — not counted in the binomial",
            "R: author ka naam optional hai — binomial mein count nahi hota"
          )}
        </T>
      </Fade>

      {/* beat 5 — test each statement */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Draw on={true} d="M 902 106 L 908 112 L 920 98" stroke={GREEN} sw={2.2} dur={0.4} />
        <Chip x={928} y={98} w={82} h={24} fill={CREAM} stroke={GREEN} textFill={GREEN} size={12} script={false}>
          TRUE ✓
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <Draw on={true} d="M 902 134 L 908 140 L 920 126" stroke={GREEN} sw={2.2} dur={0.4} />
        <Chip x={928} y={126} w={82} h={24} fill={CREAM} stroke={GREEN} textFill={GREEN} size={12} script={false}>
          TRUE ✓
        </Chip>
      </Fade>

      {/* beat 6 — does R explain A? */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={185} size={15} fill={GREEN} script>
          {t("does R explain A? — YES", "kya R hi A ki explanation hai? — HAAN")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={100} y={210} size={12} fill={GREEN} weight={700} anchor="start">
          1) Both true, R explains A ✓
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.7)}>
        <Draw on={true} d="M 98 213 L 336 213" stroke={GREEN} sw={2} dur={0.4} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={100} y={232} size={12} fill={INK} script={false} anchor="start">
          2) Both true, R does NOT explain A
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.6)}>
        <T x={100} y={254} size={12} fill={INK} script={false} anchor="start">
          3) A true, R false
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={100} y={276} size={12} fill={INK} script={false} anchor="start">
          4) A false, R true
        </T>
      </Fade>

      {/* beat 7 — the takeaway */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={270} y={300} w={540} h={34} fill={INK} textFill={CREAM} size={14} script={false}>
          {t(
            "binomial = genus + epithet ONLY — the author is optional",
            "binomial = genus + epithet HI — author optional hai"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
