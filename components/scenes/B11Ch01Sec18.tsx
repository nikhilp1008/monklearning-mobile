/**
 * B11 Ch01 · Section 18 — "The seven ranks, defined"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * A persistent compact ladder (7 bands, Kingdom top to Species bottom)
 * highlights live as `beat` changes — the stroke/fill of each band is
 * computed directly from `beat`, not re-drawn per beat, so the highlight
 * moves like a pointer while a single flashcard slot below states that
 * rank's definition.
 *
 * 9 reveal timestamps → beats 0-8; every beat maps to a distinct narration
 * segment (checked against segment count, not assumed).
 *
 * Beats (en [0, 12.75, 35.2, 48.38, 66.49, 77.55, 99.06, 105.52, 119.81]):
 *  0 title — the ladder is drawn, unhighlighted
 *  1 "here is the full ladder, species to kingdom" — caption only
 *  2 SPECIES — highlighted
 *  3 GENUS — highlighted
 *  4 monotypic vs polytypic (genus stays highlighted)
 *  5 FAMILY → ORDER → CLASS — all three highlighted
 *  6 PHYLUM/DIVISION → KINGDOM — both highlighted
 *  7 preview: category vs taxon (no rank highlighted)
 *  8 the two trends — every rank highlighted
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title bl64 · underline y86
 *  b0+ | 7 bands x340..740 y100/145/190/235/280/325/370 h35
 *  b0+ | "broad" bl118 (end,x300) · "specific" bl390 (end,x300)
 *  b1 | caption (script13 muted) bl430
 *  b2-8 | def header (18 ink w800) bl430 · def (14 anek) bl458
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

const RANKS = ["Kingdom", "Phylum / Division", "Class", "Order", "Family", "Genus", "Species"];

// which rank indices are highlighted at each beat (0 = Kingdom ... 6 = Species)
const HIGHLIGHT: Record<number, number[]> = {
  2: [6],
  3: [5],
  4: [5],
  5: [4, 3, 2],
  6: [1, 0],
  7: [],
  8: [0, 1, 2, 3, 4, 5, 6],
};

export default function B11Ch01Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const active = HIGHLIGHT[beat] || [];

  return (
    <Scene>
      {/* beat 0 — title + the ladder */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("naming and defining the seven ranks", "saaton ranks ko naam aur define karna")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2)} d="M 330 86 C 430 82, 650 82, 750 86" stroke={RED} sw={2.2} dur={0.6} />

      {RANKS.map((label, i) => {
        const y = 100 + i * 45;
        const on = active.includes(i);
        return (
          <React.Fragment key={label}>
            <Draw on={beat >= 0} delay={dl(0, 3 + i * 0.3)} d={`M 340 ${y} h 400 v 35 h -400 z`} stroke={on ? GREEN : AMBER_DARK} sw={on ? 3 : 1.6} dur={0.5} />
            <Fade on={beat >= 0} delay={dl(0, 3.4 + i * 0.3)}>
              <T x={540} y={y + 23} size={14} fill={on ? GREEN : INK} weight={on ? 800 : 600}>
                {label}
              </T>
            </Fade>
          </React.Fragment>
        );
      })}
      <Fade on={beat >= 0} delay={dl(0, 5.5)}>
        <T x={300} y={118} size={11} fill={MUTED} script={false} anchor="end">
          {t("broad", "broad")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5.7)}>
        <T x={300} y={390} size={11} fill={MUTED} script={false} anchor="end">
          {t("specific", "specific")}
        </T>
      </Fade>

      {/* beat 1 — the full ladder is on the board */}
      <Fade on={beat === 1} delay={dl(1, 0.3)}>
        <T x={540} y={430} size={14} fill={MUTED} script>
          {t("the full ladder — species at the bottom, kingdom at the top", "poori ladder — species neeche, kingdom sabse upar")}
        </T>
      </Fade>

      {/* beat 2 — SPECIES */}
      <Fade on={beat === 2} delay={dl(2, 0.3)}>
        <T x={540} y={430} size={18} fill={INK} weight={800}>
          SPECIES
        </T>
      </Fade>
      <Fade on={beat === 2} delay={dl(2, 1)}>
        <T x={540} y={458} size={14} fill={INK} script={false}>
          {t(
            "basic unit — interbreed + fertile offspring; MAXIMUM shared characters",
            "basic unit — interbreed + fertile offspring; MAXIMUM shared characters"
          )}
        </T>
      </Fade>

      {/* beat 3 — GENUS */}
      <Fade on={beat === 3} delay={dl(3, 0.3)}>
        <T x={540} y={430} size={18} fill={INK} weight={800}>
          GENUS
        </T>
      </Fade>
      <Fade on={beat === 3} delay={dl(3, 1)}>
        <T x={540} y={458} size={14} fill={INK} script={false}>
          {t("closely related species, from a common ancestor", "closely related species, ek common ancestor se")}
        </T>
      </Fade>

      {/* beat 4 — monotypic vs polytypic */}
      <Fade on={beat === 4} delay={dl(4, 0.3)}>
        <T x={540} y={430} size={17} fill={INK} weight={800}>
          MONOTYPIC vs POLYTYPIC
        </T>
      </Fade>
      <Fade on={beat === 4} delay={dl(4, 1)}>
        <T x={540} y={458} size={14} fill={INK} script={false}>
          {t(
            "1 species (Homo) vs ≥2 species (Panthera, Solanum)",
            "1 species (Homo) vs ≥2 species (Panthera, Solanum)"
          )}
        </T>
      </Fade>

      {/* beat 5 — family, order, class */}
      <Fade on={beat === 5} delay={dl(5, 0.3)}>
        <T x={540} y={430} size={17} fill={INK} weight={800}>
          FAMILY → ORDER → CLASS
        </T>
      </Fade>
      <Fade on={beat === 5} delay={dl(5, 1)}>
        <T x={540} y={458} size={14} fill={INK} script={false}>
          {t("each groups the rank below it", "har ek apne neeche wale rank ko group karta hai")}
        </T>
      </Fade>

      {/* beat 6 — phylum/division, kingdom */}
      <Fade on={beat === 6} delay={dl(6, 0.3)}>
        <T x={540} y={430} size={16} fill={INK} weight={800}>
          PHYLUM/DIVISION → KINGDOM
        </T>
      </Fade>
      <Fade on={beat === 6} delay={dl(6, 1)}>
        <T x={540} y={458} size={13} fill={INK} script={false}>
          {t(
            "Phylum (animals, Cuvier) / Division (plants, Eichler) → Kingdom = all phyla",
            "Phylum (animals, Cuvier) / Division (plants, Eichler) → Kingdom = saare phyla"
          )}
        </T>
      </Fade>

      {/* beat 7 — preview: category vs taxon */}
      <Fade on={beat === 7} delay={dl(7, 0.3)}>
        <T x={540} y={430} size={17} fill={AMBER_DARK} weight={800}>
          {t("PREVIEW", "PREVIEW")}
        </T>
      </Fade>
      <Fade on={beat === 7} delay={dl(7, 1)}>
        <T x={540} y={458} size={14} fill={AMBER_DARK} script={false}>
          {t("category = abstract RANK; taxon = the REAL group", "category = abstract RANK; taxon = REAL group")}
        </T>
      </Fade>

      {/* beat 8 — the two governing trends */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <T x={540} y={430} size={17} fill={GREEN} weight={800}>
          {t("THE TWO TRENDS", "DO TRENDS")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1)}>
        <T x={540} y={458} size={14} fill={GREEN} script={false}>
          {t(
            "species → kingdom: common characters ↓, number of organisms ↑",
            "species → kingdom: common characters ↓, organisms ki sankhya ↑"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
