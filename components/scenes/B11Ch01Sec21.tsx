/**
 * B11 Ch01 · Section 21 — "Taxon vs category, and phylum vs division"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Two phases. Phase A (beats 0-4, category vs taxon) occupies the whole
 * board, then vanishes (on={beat<5}) so Phase B (beats 5-7, phylum vs
 * division) can reuse the coordinates without ghost-stacking.
 *
 * Beats (en [0, 8.4, 21.19, 32.85, 46.46, 56.08, 68.55, 84.28]):
 *  0 title — the abstract-or-concrete test
 *  1 DIAGRAM: CATEGORY box vs TAXON box, side by side
 *  2 category = abstract rank, no organisms — underline the header
 *  3 taxon = concrete real group — underline the header
 *  4 mnemonic: catalogue heading vs the taxa filed under it
 *  5 Phase B title: phylum vs division — same rank, different kingdoms
 *  6 Phylum = animals (Cuvier); Division = plants (Eichler)
 *  7 the trap Q&A: phylum in animals ≡ which plant level? → Division
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function B11Ch01Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0 && beat < 5} delay={dl(0, 0.2)}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("the abstract-or-concrete test", "abstract-ya-concrete test")}
        </T>
      </Fade>
      <Fade on={beat >= 0 && beat < 5} delay={dl(0, 1.8)}>
        <Draw on={true} d="M 330 86 C 430 82, 650 82, 750 86" stroke={RED} sw={2.2} dur={0.6} />
      </Fade>

      {/* beat 1 — the two boxes: CATEGORY vs TAXON */}
      <Fade on={beat >= 1 && beat < 5} delay={dl(1, 0.2)}>
        <Draw on={true} d="M 140 100 h 350 v 170 h -350 z" stroke={AMBER_DARK} sw={2.2} dur={0.7} />
      </Fade>
      <Fade on={beat >= 1 && beat < 5} delay={dl(1, 1)}>
        <T x={315} y={125} size={15} fill={AMBER_DARK} weight={700}>
          CATEGORY
        </T>
      </Fade>
      <Fade on={beat >= 1 && beat < 5} delay={dl(1, 1.4)}>
        <T x={315} y={145} size={11} fill={MUTED} script={false}>
          {t("the rank / shelf-label (abstract)", "the rank / shelf-label (abstract)")}
        </T>
      </Fade>
      <Fade on={beat >= 1 && beat < 5} delay={dl(1, 1.9)}>
        <Chip x={180} y={160} w={270} h={26} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={12} script={false}>
          Order
        </Chip>
      </Fade>
      <Fade on={beat >= 1 && beat < 5} delay={dl(1, 2.3)}>
        <Chip x={180} y={192} w={270} h={26} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={12} script={false}>
          Class
        </Chip>
      </Fade>
      <Fade on={beat >= 1 && beat < 5} delay={dl(1, 2.8)}>
        <T x={315} y={248} size={10} fill={MUTED} script={false}>
          {t("a level, no organisms attached", "ek level, koi organisms attached nahi")}
        </T>
      </Fade>

      <Fade on={beat >= 1 && beat < 5} delay={dl(1, 0.5)}>
        <Draw on={true} d="M 590 100 h 350 v 170 h -350 z" stroke={GREEN} sw={2.2} dur={0.7} />
      </Fade>
      <Fade on={beat >= 1 && beat < 5} delay={dl(1, 1.3)}>
        <T x={765} y={125} size={15} fill={GREEN} weight={700}>
          TAXON
        </T>
      </Fade>
      <Fade on={beat >= 1 && beat < 5} delay={dl(1, 1.7)}>
        <T x={765} y={145} size={11} fill={MUTED} script={false}>
          {t("the real group (concrete)", "the real group (concrete)")}
        </T>
      </Fade>
      <Fade on={beat >= 1 && beat < 5} delay={dl(1, 2.1)}>
        <Chip x={630} y={160} w={270} h={26} fill={CREAM} stroke={GREEN} textFill={INK} size={12} script={false}>
          Mammalia
        </Chip>
      </Fade>
      <Fade on={beat >= 1 && beat < 5} delay={dl(1, 2.5)}>
        <Chip x={630} y={192} w={270} h={26} fill={CREAM} stroke={GREEN} textFill={INK} size={12} script={false}>
          Bryophyta
        </Chip>
      </Fade>
      <Fade on={beat >= 1 && beat < 5} delay={dl(1, 3)}>
        <T x={765} y={248} size={10} fill={MUTED} script={false}>
          {t("organisms you could point to", "organisms jinki taraf tum point kar sako")}
        </T>
      </Fade>

      {/* beat 2 — category is abstract */}
      <Fade on={beat >= 2 && beat < 5} delay={dl(2, 0.3)}>
        <Draw on={true} d="M 260 132 L 370 132" stroke={AMBER_DARK} sw={2.4} dur={0.4} />
      </Fade>
      <Fade on={beat >= 2 && beat < 5} delay={dl(2, 0.9)}>
        <T x={540} y={300} size={13} fill={AMBER_DARK} script={false}>
          {t(
            "category = a rank with NO organisms attached — ABSTRACT",
            "category = ek rank jisse KOI organisms attached nahi — ABSTRACT"
          )}
        </T>
      </Fade>

      {/* beat 3 — taxon is concrete */}
      <Fade on={beat >= 3 && beat < 5} delay={dl(3, 0.3)}>
        <Draw on={true} d="M 710 132 L 820 132" stroke={GREEN} sw={2.4} dur={0.4} />
      </Fade>
      <Fade on={beat >= 3 && beat < 5} delay={dl(3, 0.9)}>
        <T x={540} y={325} size={13} fill={GREEN} script={false}>
          {t(
            "taxon = a real group you can point to — CONCRETE",
            "taxon = ek real group jiski taraf tum point kar sako — CONCRETE"
          )}
        </T>
      </Fade>

      {/* beat 4 — the mnemonic */}
      <Fade on={beat >= 4 && beat < 5} delay={dl(4, 0.3)}>
        <T x={540} y={358} size={13} fill={AMBER_DARK} script>
          {t(
            "mnemonic: category = catalogue heading; taxon = the taxa filed under it",
            "mnemonic: category = catalogue heading; taxon = uske neeche filed taxa"
          )}
        </T>
      </Fade>

      {/* beat 5 — Phase B: phylum vs division */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={64} size={21} fill={RED} script>
          {t("phylum vs division — same rank, different kingdoms", "phylum vs division — same rank, alag kingdoms")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.3)} d="M 330 86 C 430 82, 650 82, 750 86" stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={540} y={115} size={14} fill={MUTED} script>
          {t("same rank, between Class and Kingdom", "same rank, Class aur Kingdom ke beech")}
        </T>
      </Fade>

      {/* beat 6 — Phylum (animals) vs Division (plants) */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={200} y={160} w={320} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={15} script={false}>
          {t("Phylum = animals (Cuvier)", "Phylum = animals (Cuvier)")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <Chip x={600} y={160} w={320} h={40} fill={CREAM} stroke={GREEN} textFill={GREEN} size={15} script={false}>
          {t("Division = plants (Eichler)", "Division = plants (Eichler)")}
        </Chip>
      </Fade>

      {/* beat 7 — the trap Q&A */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={250} size={15} fill={INK} script>
          {t("phylum in animals ≡ which plant level?", "animals mein phylum ≡ plants ki kaunsi level?")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.3)} d={arrowD(540, 262, 540, 282)} stroke={GREEN} sw={2.2} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <Chip x={460} y={286} w={160} h={38} fill={GREEN} textFill="#fff" size={16} script={false}>
          DIVISION
        </Chip>
      </Fade>
    </Scene>
  );
}
