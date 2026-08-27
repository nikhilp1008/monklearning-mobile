/**
 * B11 Ch01 · Section 11 — "Key terms: identification, nomenclature,
 * taxonomy, systematics"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.34, 37.76, 50.27, 66.64, 71.83, 88.61, 101.2, 113.78]):
 *  0 title + underline
 *  1 term NOMENCLATURE (flashcard slot, exact-beat visibility)
 *  2 term IDENTIFICATION (flashcard slot)
 *  3 term CLASSIFICATION (flashcard slot)
 *  4 transition: watch how these terms NEST inside each other
 *  5 DIAGRAM: nested boxes — Systematics ⊃ Taxonomy ⊃ the four jobs
 *  6 recap: TAXONOMY = the four jobs, spelled out
 *  7 recap: SYSTEMATICS = diversity + evolutionary relationships
 *  8 bonus term: a TAXON = a group of ANY rank (3 examples)
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title (script24 red) bl64 · underline y86
 *  b1-3 | term header (20 ink w800) bl120 · def (14 anek) bl150
 *  b4 | transition (script16 green) bl120
 *  b5 | outer box "SYSTEMATICS" (ink)  x140..940 y170..450
 *  b5 | middle box "TAXONOMY" (green)  x190..890 y206..432
 *  b5 | inner box, 4 jobs (amber-d)    x240..840 y244..410
 *  b6 | recap1 (13 anek green) bl468
 *  b7 | recap2 (13 anek ink) bl492
 *  b8 | intro (script13 amber-d) bl520
 *  b8 | 3 taxon chips y536..564 x325/461/633
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const TAXA: [number, number, string][] = [
  [325, 122, "Panthera (genus)"],
  [461, 158, "Panthera leo (species)"],
  [633, 122, "Mammalia (class)"],
];

export default function B11Ch01Sec11({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("the definitions are the equations here", "definitions hi is subtopic ke equations hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2)} d="M 330 86 C 430 82, 650 82, 750 86" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 1 — NOMENCLATURE */}
      <Fade on={beat === 1} delay={dl(1, 0.2)}>
        <T x={540} y={120} size={20} fill={INK} weight={800}>
          NOMENCLATURE
        </T>
      </Fade>
      <Fade on={beat === 1} delay={dl(1, 0.7)}>
        <Draw on={true} d="M 440 132 L 640 132" stroke={INK} sw={1.6} dur={0.4} />
      </Fade>
      <Fade on={beat === 1} delay={dl(1, 0.9)}>
        <T x={540} y={150} size={14} fill={INK} script={false}>
          {t(
            "assigning ONE standardised name — same organism, same name worldwide",
            "ek standardised naam dena — same organism, same naam worldwide"
          )}
        </T>
      </Fade>

      {/* beat 2 — IDENTIFICATION */}
      <Fade on={beat === 2} delay={dl(2, 0.2)}>
        <T x={540} y={120} size={20} fill={INK} weight={800}>
          IDENTIFICATION
        </T>
      </Fade>
      <Fade on={beat === 2} delay={dl(2, 0.7)}>
        <Draw on={true} d="M 430 132 L 650 132" stroke={INK} sw={1.6} dur={0.4} />
      </Fade>
      <Fade on={beat === 2} delay={dl(2, 0.9)}>
        <T x={540} y={150} size={14} fill={INK} script={false}>
          {t("is it the SAME as an already-known organism?", "kya ye kisi already-known organism jaisa hai?")}
        </T>
      </Fade>

      {/* beat 3 — CLASSIFICATION */}
      <Fade on={beat === 3} delay={dl(3, 0.2)}>
        <T x={540} y={120} size={20} fill={INK} weight={800}>
          CLASSIFICATION
        </T>
      </Fade>
      <Fade on={beat === 3} delay={dl(3, 0.7)}>
        <Draw on={true} d="M 430 132 L 650 132" stroke={INK} sw={1.6} dur={0.4} />
      </Fade>
      <Fade on={beat === 3} delay={dl(3, 0.9)}>
        <T x={540} y={150} size={14} fill={INK} script={false}>
          {t(
            "arranging into groups by shared, observable characters",
            "shared, observable characters ke aadhar par groups mein arrange karna"
          )}
        </T>
      </Fade>

      {/* beat 4 — transition into the nesting diagram */}
      <Fade on={beat === 4} delay={dl(4, 0.3)}>
        <T x={540} y={120} size={16} fill={GREEN} script>
          {t(
            "now watch how these terms NEST inside each other…",
            "ab dekho ye terms kaise ek-doosre ke andar NEST karte hain…"
          )}
        </T>
      </Fade>
      <Fade on={beat === 4} delay={dl(4, 1.6)}>
        <Draw on={true} d="M 540 136 L 540 158" stroke={GREEN} sw={2} dur={0.4} />
      </Fade>

      {/* beat 5 — THE DIAGRAM: nested boxes */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 140 170 h 800 v 280 h -800 z" stroke={INK} sw={2.2} dur={0.9} />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={540} y={192} size={15} fill={INK} weight={700}>
          {t("SYSTEMATICS (adds evolution)", "SYSTEMATICS (adds evolution)")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2)} d="M 190 206 h 700 v 226 h -700 z" stroke={GREEN} sw={2.2} dur={0.9} />
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={540} y={228} size={14} fill={GREEN} weight={700}>
          TAXONOMY
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3.8)} d="M 240 244 h 600 v 166 h -600 z" stroke={AMBER_DARK} sw={2.2} dur={0.9} />
      <Fade on={beat >= 5} delay={dl(5, 4.8)}>
        <T x={540} y={270} size={13} fill={AMBER_DARK} script={false}>
          {t("characterisation", "characterisation")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5.3)}>
        <T x={540} y={296} size={13} fill={AMBER_DARK} script={false}>
          {t("identification", "identification")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5.8)}>
        <T x={540} y={322} size={13} fill={AMBER_DARK} script={false}>
          {t("nomenclature", "nomenclature")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6.3)}>
        <T x={540} y={348} size={13} fill={AMBER_DARK} script={false}>
          {t("classification", "classification")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={540} y={390} size={11} fill={MUTED} script>
          {t("(the four jobs of a taxonomist)", "(ek taxonomist ke chaar kaam)")}
        </T>
      </Fade>

      {/* beat 6 — recap: taxonomy spelled out */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={468} size={13} fill={GREEN} script={false}>
          {t(
            "TAXONOMY = characterisation + identification + nomenclature + classification",
            "TAXONOMY = characterisation + identification + nomenclature + classification"
          )}
        </T>
      </Fade>

      {/* beat 7 — recap: systematics */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={492} size={13} fill={INK} script={false}>
          {t(
            "SYSTEMATICS = diversity + evolutionary relationships (Systema Naturae)",
            "SYSTEMATICS = diversity + evolutionary relationships (Systema Naturae)"
          )}
        </T>
      </Fade>

      {/* beat 8 — bonus term: a taxon */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <T x={540} y={520} size={13} fill={AMBER_DARK} script>
          {t("one more term — a TAXON = a group of ANY rank:", "ek aur term — ek TAXON = kisi bhi rank ka group:")}
        </T>
      </Fade>
      {TAXA.map(([x, w, label], i) => (
        <Fade key={label} on={beat >= 8} delay={dl(8, 1.2 + i * 0.5)}>
          <Chip x={x} y={536} w={w} h={28} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={12} script={false}>
            {label}
          </Chip>
        </Fade>
      ))}
    </Scene>
  );
}
