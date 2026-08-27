/**
 * B11 Ch01 · Section 25 — "The Living World — one-screen recall" (cheat_sheet)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * The whole chapter as a 3-column reference card, one column per subtopic,
 * accumulating short lines as the ten beats progress, closing with the
 * three exam mnemonics.
 *
 * Beats (en [0, 8.54, 20.13, 34.16, 48.19, 61.62, 75.04, 88.46, 102.49, 115.3]):
 *  0 title + 3 column headers + dividers
 *  1 col1 · MCC defines
 *  2 col1 · growth/reproduction fail, test-tube neither
 *  3 col2 · binomial rules (case, italic/underline, author)
 *  4 col2 · the three codes
 *  5 col2 · term nesting + species (Mayr)
 *  6 col3 · seven ranks + King Philip mnemonic
 *  7 col3 · master trend + containment
 *  8 col3 · taxon vs category, phylum ≡ division
 *  9 closing: the three mnemonics, one line each + tagline
 *
 * Layout plan: col1 x60..380 (c220) · col2 x400..720 (c560) · col3 x740..1040 (c890)
 * dividers x390 & x730, y95..400. Headers bl100. Body lines size11 anek.
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

function Bullet({ x, y, on, delay }: { x: number; y: number; on: boolean; delay: number }) {
  return <Draw on={on} delay={delay} d={`M ${x} ${y} L ${x + 8} ${y}`} stroke={AMBER_DARK} sw={2} dur={0.3} />;
}

export default function B11Ch01Sec25({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title + column headers + dividers */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={62} size={22} fill={RED} script>
          THE LIVING WORLD — quick recall
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.5)} d="M 330 82 C 430 78, 650 78, 750 82" stroke={RED} sw={2.2} dur={0.5} />
      <Draw on={beat >= 0} delay={dl(0, 2.2)} d="M 390 95 L 390 400" stroke={MUTED} sw={1} dur={0.4} />
      <Draw on={beat >= 0} delay={dl(0, 2.4)} d="M 730 95 L 730 400" stroke={MUTED} sw={1} dur={0.4} />
      <Fade on={beat >= 0} delay={dl(0, 2.8)}>
        <T x={220} y={108} size={14} fill={AMBER_DARK} weight={800}>
          {t("WHAT IS LIVING?", "WHAT IS LIVING?")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3.1)}>
        <T x={560} y={108} size={14} fill={AMBER_DARK} weight={800}>
          {t("NOMENCLATURE", "NOMENCLATURE")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3.4)}>
        <T x={890} y={108} size={14} fill={AMBER_DARK} weight={800}>
          {t("HIERARCHY", "HIERARCHY")}
        </T>
      </Fade>

      {/* beat 1 — col1: MCC */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <Bullet x={70} y={131} on={true} delay={0} />
        <T x={85} y={135} size={11} fill={INK} script={false} anchor="start">
          {t("MCC = Metabolism+Cell.org.+Consciousness", "MCC = Metabolism+Cell.org.+Consciousness")}
        </T>
      </Fade>

      {/* beat 2 — col1: growth/reproduction fail */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Bullet x={70} y={158} on={true} delay={0} />
        <T x={85} y={162} size={11} fill={INK} script={false} anchor="start">
          {t("Growth✗(extrinsic) Reproduction✗(mule)", "Growth✗(extrinsic) Reproduction✗(mule)")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={85} y={185} size={11} fill={INK} script={false} anchor="start">
          {t("test-tube = NEITHER living/non-living", "test-tube = NEITHER living/non-living")}
        </T>
      </Fade>

      {/* beat 3 — col2: binomial rules */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Bullet x={410} y={131} on={true} delay={0} />
        <T x={425} y={135} size={11} fill={INK} script={false} anchor="start">
          {t("Binomial: Genus Capital+epithet lower", "Binomial: Genus Capital+epithet lower")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={425} y={162} size={11} fill={INK} script={false} anchor="start">
          {t("italic/underlined; author Roman, last", "italic/underlined; author Roman, last")}
        </T>
      </Fade>

      {/* beat 4 — col2: the three codes */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <Bullet x={410} y={185} on={true} delay={0} />
        <T x={425} y={189} size={11} fill={INK} script={false} anchor="start">
          {t("Codes: ICBN-plant ICZN-animal ICNB-bact", "Codes: ICBN-plant ICZN-animal ICNB-bact")}
        </T>
      </Fade>

      {/* beat 5 — col2: nesting + species */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Bullet x={410} y={212} on={true} delay={0} />
        <T x={425} y={216} size={11} fill={INK} script={false} anchor="start">
          {t("Nesting: ID/nom./class. ⊂ taxonomy ⊂ systematics", "Nesting: ID/nom./class. ⊂ taxonomy ⊂ systematics")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={425} y={243} size={11} fill={INK} script={false} anchor="start">
          {t("Species (Mayr) = interbreed + fertile", "Species (Mayr) = interbreed + fertile")}
        </T>
      </Fade>

      {/* beat 6 — col3: seven ranks + mnemonic */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Bullet x={750} y={131} on={true} delay={0} />
        <T x={765} y={135} size={11} fill={INK} script={false} anchor="start">
          {t("7 ranks: Species→Genus→Family→Order→", "7 ranks: Species→Genus→Family→Order→")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={765} y={156} size={11} fill={INK} script={false} anchor="start">
          {t("Class→Phylum/Div→Kingdom", "Class→Phylum/Div→Kingdom")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={765} y={183} size={11} fill={AMBER_DARK} script={false} anchor="start">
          "King Philip Came Over For Good Soup"
        </T>
      </Fade>

      {/* beat 7 — col3: trend + containment */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Bullet x={750} y={206} on={true} delay={0} />
        <T x={765} y={210} size={11} fill={INK} script={false} anchor="start">
          {t("Up: characters ↓, organisms ↑", "Up: characters ↓, organisms ↑")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <T x={765} y={237} size={11} fill={INK} script={false} anchor="start">
          {t("Containment: same lower ⇒ share all higher", "Containment: same lower ⇒ share all higher")}
        </T>
      </Fade>

      {/* beat 8 — col3: taxon vs category */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <Bullet x={750} y={260} on={true} delay={0} />
        <T x={765} y={264} size={11} fill={INK} script={false} anchor="start">
          {t("Taxon(Mammalia)=real; Category(Class)=rank", "Taxon(Mammalia)=real; Category(Class)=rank")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 0.7)}>
        <T x={765} y={287} size={11} fill={INK} script={false} anchor="start">
          Phylum ≡ Division
        </T>
      </Fade>

      {/* beat 9 — closing: the three mnemonics */}
      <Fade on={beat >= 9} delay={dl(9, 0.3)}>
        <Chip x={245} y={330} w={176} h={32} fill={CREAM} stroke={GREEN} textFill={GREEN} size={11} script={false}>
          {t("MCC defines, G&R decline", "MCC defines, G&R decline")}
        </Chip>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 0.7)}>
        <Chip x={437} y={330} w={140} h={32} fill={CREAM} stroke={GREEN} textFill={GREEN} size={11} script={false}>
          {t("B in ICBN = Botany", "B in ICBN = Botany")}
        </Chip>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 1.1)}>
        <Chip x={593} y={330} w={242} h={32} fill={CREAM} stroke={GREEN} textFill={GREEN} size={11} script={false}>
          "King Philip Came Over For Good Soup"
        </Chip>
      </Fade>
      <Draw on={beat >= 9} delay={dl(9, 1.9)} d="M 300 378 C 420 374, 660 374, 780 378" stroke={GREEN} sw={2} dur={0.6} />
      <Fade on={beat >= 9} delay={dl(9, 2.6)}>
        <T x={540} y={405} size={14} fill={GREEN} script>
          {t(
            "that's the whole chapter — one screen, three subtopics",
            "yehi poora chapter hai — ek screen, teen subtopics"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
