/**
 * B11 Ch01 · Section 13 — "The naming codes and the biological species
 * concept"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Two phases. Phase A (beats 0-3, naming codes) occupies the whole board,
 * then vanishes (on={beat<4}) so Phase B (beats 4-8, species concept) can
 * reuse the coordinates without ghost-stacking.
 *
 * Beats (en [0, 20.87, 45.26, 54.45, 69.66, 96.47, 113.16, 131.34, 148.59]):
 *  0 title + binomial nomenclature (Linnaeus) intro
 *  1 3 code chips: ICBN plants / ICZN animals / ICNB bacteria
 *  2 the ICBN↔ICZN swap trap + "Z = zoo = animals" mnemonic
 *  3 transition into the species-concept test case
 *  4 DIAGRAM: horse × donkey → mule (sterile) → still two species (Mayr)
 *  5 Mayr's definition: interbreed freely + fertile offspring, shared genes
 *  6 mule test recap
 *  7 tautonym: identical genus + epithet (Rattus rattus), valid in zoology
 *  8 classification systems: artificial / natural / phylogenetic / karyo- / chemo-
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title bl64 · underline y86 · binomial line (script15) bl112
 *  b1 | 3 chips y150..180 x220/430/640 · bracket underline y184
 *  b2 | trap (script14 red) bl214 · mnemonic (13 anek) bl238
 *  b3 | transition (script15 green) bl270 · arrow down
 *  b4 | horse ellipse c(200,160) rx75 ry48 · donkey ellipse c(880,160)
 *  b4 | mule box x430..650 y225..279 · caption bl305
 *  b5 | Mayr def (13 anek) bl332
 *  b6 | mule recap (13 anek) bl356
 *  b7 | tautonym (13 anek) bl380
 *  b8 | label bl404 · 5 chips y418..444
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const CODES: [number, number, string][] = [
  [220, 190, "ICBN → plants"],
  [430, 200, "ICZN → animals"],
  [650, 200, "ICNB → bacteria"],
];

const SYSTEMS: [number, number, string][] = [
  [250, 152, "artificial (Linnaeus)"],
  [414, 68, "natural"],
  [494, 98, "phylogenetic"],
  [604, 104, "karyotaxonomy"],
  [720, 110, "chemotaxonomy"],
];

export default function B11Ch01Sec13({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title + binomial nomenclature */}
      <Fade on={beat >= 0 && beat < 4} delay={dl(0, 0.2)}>
        <T x={540} y={64} size={23} fill={RED} script>
          {t("codes & the definition of a species", "codes & species ki definition")}
        </T>
      </Fade>
      <Fade on={beat >= 0 && beat < 4} delay={dl(0, 1.8)}>
        <Draw on={true} d="M 330 86 C 430 82, 650 82, 750 86" stroke={RED} sw={2.2} dur={0.6} />
      </Fade>
      <Fade on={beat >= 0 && beat < 4} delay={dl(0, 2.6)}>
        <T x={540} y={112} size={15} fill={INK} script>
          {t(
            "binomial nomenclature (Linnaeus) = generic name + specific epithet",
            "binomial nomenclature (Linnaeus) = generic naam + specific epithet"
          )}
        </T>
      </Fade>

      {/* beat 1 — the three codes */}
      {CODES.map(([x, w, label], i) => (
        <Fade key={label} on={beat >= 1 && beat < 4} delay={dl(1, 0.3 + i * 0.5)}>
          <Chip x={x} y={150} w={w} h={30} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
            {label}
          </Chip>
        </Fade>
      ))}
      <Fade on={beat >= 1 && beat < 4} delay={dl(1, 2.2)}>
        <Draw on={true} d="M 220 184 L 750 184" stroke={MUTED} sw={1.4} dur={0.5} />
      </Fade>

      {/* beat 2 — the swap trap */}
      <Fade on={beat >= 2 && beat < 4} delay={dl(2, 0.3)}>
        <T x={540} y={214} size={14} fill={RED} script>
          {t(
            "ICBN ↔ ICZN swap is the SINGLE most-exploited trap",
            "ICBN ↔ ICZN swap chapter ka sabse zyada exploit hone wala trap hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2 && beat < 4} delay={dl(2, 1.3)}>
        <T x={540} y={238} size={13} fill={AMBER_DARK} script={false}>
          {t("Z = zoo = animals", "Z = zoo = animals")}
        </T>
      </Fade>

      {/* beat 3 — transition to the species test case */}
      <Fade on={beat >= 3 && beat < 4} delay={dl(3, 0.3)}>
        <T x={540} y={270} size={15} fill={GREEN} script>
          {t(
            "the definition of a species — seen best through its most famous test case…",
            "species ki definition — iske sabse famous test case se sabse achhi dikhti hai…"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3 && beat < 4} delay={dl(3, 1.5)}>
        <Draw on={true} d={arrowD(540, 286, 540, 306)} stroke={GREEN} sw={2} dur={0.4} />
      </Fade>

      {/* beat 4 — THE DIAGRAM: horse × donkey → mule (sterile) */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 125 160 a 75 48 0 1 0 0.1 0" stroke={AMBER_DARK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={200} y={156} size={13} fill={AMBER_DARK} script={false}>
          {t("horse", "horse")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.3)}>
        <T x={200} y={174} size={11} fill={AMBER_DARK} script={false}>
          {t("(female)", "(female)")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.8)} d="M 805 160 a 75 48 0 1 0 0.1 0" stroke={GREEN} sw={2.2} dur={0.8} />
      <Fade on={beat >= 4} delay={dl(4, 2.6)}>
        <T x={880} y={156} size={13} fill={GREEN} script={false}>
          {t("donkey", "donkey")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.9)}>
        <T x={880} y={174} size={11} fill={GREEN} script={false}>
          {t("(male)", "(male)")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.3)}>
        <T x={540} y={160} size={13} fill={MUTED} script={false}>
          {t("interbreed →", "interbreed →")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 3.8)} d="M 273 188 L 448 225" stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 4)} d="M 807 188 L 632 225" stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 4.5)} d="M 430 225 h 220 v 54 h -220 z" stroke={AMBER_DARK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 5.2)}>
        <T x={540} y={248} size={14} fill={AMBER_DARK} weight={700}>
          {t("mule", "mule")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.6)}>
        <T x={540} y={268} size={12} fill={RED} weight={700}>
          STERILE ✗
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6.4)}>
        <T x={540} y={305} size={13} fill={RED} script={false}>
          {t(
            "offspring not fertile → still TWO separate species",
            "offspring fertile nahi → phir bhi DO alag species"
          )}
        </T>
      </Fade>

      {/* beat 5 — Mayr's definition */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={332} size={13} fill={INK} script={false}>
          {t(
            "species (Mayr): interbreed freely + fertile offspring, sharing a common gene pool",
            "species (Mayr): nature mein freely interbreed + fertile offspring, common gene pool share karte hue"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <Draw on={true} d="M 350 340 L 730 340" stroke={INK} sw={1.4} dur={0.4} />
      </Fade>

      {/* beat 6 — mule test recap */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={356} size={13} fill={RED} script={false}>
          {t(
            "mule test: interbreed but STERILE → separate species",
            "mule test: interbreed karte hain par STERILE → separate species"
          )}
        </T>
      </Fade>

      {/* beat 7 — tautonym */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={380} size={13} fill={AMBER_DARK} script={false}>
          {t(
            "tautonym: identical genus + epithet — e.g. Rattus rattus — valid in zoology",
            "tautonym: genus + epithet identical — jaise Rattus rattus — zoology mein valid"
          )}
        </T>
      </Fade>

      {/* beat 8 — classification systems */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <T x={540} y={404} size={12} fill={MUTED} script>
          {t("classification systems:", "classification systems:")}
        </T>
      </Fade>
      {SYSTEMS.map(([x, w, label], i) => (
        <Fade key={label} on={beat >= 8} delay={dl(8, 1.1 + i * 0.4)}>
          <Chip x={x} y={418} w={w} h={26} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={12} script={false}>
            {label}
          </Chip>
        </Fade>
      ))}
    </Scene>
  );
}
