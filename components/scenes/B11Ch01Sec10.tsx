/**
 * B11 Ch01 · Section 10 — "Why scientific names? Local chaos to one
 * universal label"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Two phases. Phase A (beats 0-5, "why scientific names") occupies the
 * whole board, then vanishes (on={beat<6}) so Phase B (beats 6-8, "what is
 * biodiversity") can reuse the same coordinates without ghost-stacking.
 *
 * Beats (en [0, 17.66, 26.41, 44.4, 60.2, 70.57, 85.79, 103.86, 129.79]):
 *  0 title + hook: 5 local names, one vegetable
 *  1 the botanist-email problem [dim@2]
 *  2 DIAGRAM: 4 local names converge on one plant → Solanum melongena
 *  3 vernacular names are useless for worldwide precision
 *  4 restate: Solanum melongena — one universal name
 *  5 analogy: scientific names are the pin codes of life
 *  6 Phase B title: what is biodiversity? + definition
 *  7 DIAGRAM: single-crop field (1 species) vs mixed habitat (40 species)
 *  8 closing: so much variety makes naming & classifying unavoidable
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title (script24 red) x?..? y30..75 (bl64) · underline y86
 *  b0 | hook (script15 ink) x243..837 y93..119 (bl112)
 *  b1 | text (script14 muted) x279..801 y131..157 (bl150) [dim@2]
 *  b2 | 4 name chips y185..213/360..388 x110/850/90/870
 *  b2 | ellipse "one plant" c(540,300) rx90 ry55
 *  b2 | arrow down + "Solanum melongena" chip x370..710 y400..438
 *  b3 | warning (13 anek red) x319..761 y450..464 (bl460)
 *  b4 | restate (13 anek green) x?..? y476..490 (bl486)
 *  b5 | analogy (script14 green) x?..? y497..522 (bl515)
 *  b6 | title2 (script22 red) bl64 · underline y86
 *  b6 | definition (script15 ink) x218..861 y100..127 (bl120)
 *  b7 | box1 "single-crop" (muted) x120..460 y180..320
 *  b7 | box2 "mixed habitat" (green) x620..960 y180..320
 *  b7 | caption (script14 amber-d) bl350
 *  b8 | banner (ink→cream) x300..780 y460..498
 *  b8 | subtitle (script13 muted) bl520
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
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function B11Ch01Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — five names, one vegetable */}
      <Fade on={beat >= 0 && beat < 6} delay={dl(0, 0.2)}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("five names, one vegetable", "paanch naam, ek hi sabzi")}
        </T>
      </Fade>
      <Fade on={beat >= 0 && beat < 6} delay={dl(0, 2)}>
        <Draw on={true} d="M 330 86 C 430 82, 650 82, 750 86" stroke={RED} sw={2.2} dur={0.6} />
      </Fade>
      <Fade on={beat >= 0 && beat < 6} delay={dl(0, 2.8)}>
        <T x={540} y={112} size={15} fill={INK} script>
          {t(
            "begun · kathirikai · vangi · brinjal · eggplant — same purple vegetable",
            "begun · kathirikai · vangi · brinjal · eggplant — ek hi baingani sabzi"
          )}
        </T>
      </Fade>

      {/* beat 1 — the botanist-email problem */}
      <Fade on={beat >= 1 && beat < 6} dim={beat >= 2} delay={dl(1, 0.3)}>
        <T x={540} y={150} size={14} fill={MUTED} script>
          {t(
            "a botanist emails another — the local name gets lost in translation",
            "ek botanist doosre ko email karta hai — local naam translation mein kho jaata hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1 && beat < 6} dim={beat >= 2} delay={dl(1, 1.2)}>
        <Draw on={true} d="M 400 160 L 680 160" stroke={MUTED} sw={1.4} dur={0.4} />
      </Fade>

      {/* beat 2 — THE DIAGRAM: many local names, one scientific name */}
      <Fade on={beat >= 2 && beat < 6} delay={dl(2, 0.3)}>
        <Chip x={110} y={185} w={110} h={28} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script>
          begun
        </Chip>
      </Fade>
      <Fade on={beat >= 2 && beat < 6} delay={dl(2, 0.8)}>
        <Chip x={850} y={185} w={150} h={28} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script>
          kathirikai
        </Chip>
      </Fade>
      <Fade on={beat >= 2 && beat < 6} delay={dl(2, 1.3)}>
        <Chip x={90} y={360} w={100} h={28} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script>
          vangi
        </Chip>
      </Fade>
      <Fade on={beat >= 2 && beat < 6} delay={dl(2, 1.8)}>
        <Chip x={870} y={360} w={120} h={28} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script>
          brinjal
        </Chip>
      </Fade>
      <Fade on={beat >= 2 && beat < 6} delay={dl(2, 2.5)}>
        <Draw on={true} d="M 540 245 a 90 55 0 1 0 0.1 0" stroke={GREEN} sw={2.4} dur={0.8} />
      </Fade>
      <Fade on={beat >= 2 && beat < 6} delay={dl(2, 3.3)}>
        <T x={540} y={304} size={14} fill={GREEN} weight={700}>
          {t("one plant", "ek plant")}
        </T>
      </Fade>
      <Fade on={beat >= 2 && beat < 6} delay={dl(2, 3.9)}>
        <Draw on={true} d="M 220 199 L 465 275" stroke={MUTED} sw={1.3} dur={0.4} />
      </Fade>
      <Fade on={beat >= 2 && beat < 6} delay={dl(2, 4.1)}>
        <Draw on={true} d="M 850 199 L 615 275" stroke={MUTED} sw={1.3} dur={0.4} />
      </Fade>
      <Fade on={beat >= 2 && beat < 6} delay={dl(2, 4.3)}>
        <Draw on={true} d="M 190 374 L 465 330" stroke={MUTED} sw={1.3} dur={0.4} />
      </Fade>
      <Fade on={beat >= 2 && beat < 6} delay={dl(2, 4.5)}>
        <Draw on={true} d="M 870 374 L 615 330" stroke={MUTED} sw={1.3} dur={0.4} />
      </Fade>
      <Fade on={beat >= 2 && beat < 6} delay={dl(2, 5.3)}>
        <Draw on={true} d={arrowD(540, 355, 540, 397)} stroke={AMBER_DARK} sw={2.2} dur={0.5} />
      </Fade>
      <Fade on={beat >= 2 && beat < 6} delay={dl(2, 6)}>
        <Chip x={370} y={400} w={340} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={16} script={false}>
          Solanum melongena
        </Chip>
      </Fade>

      {/* beat 3 — vernacular names are useless for precision */}
      <Fade on={beat >= 3 && beat < 6} delay={dl(3, 0.3)}>
        <T x={540} y={460} size={13} fill={RED} script={false}>
          {t(
            "vernacular names change by region → useless for worldwide precision",
            "vernacular naam region ke saath badalte hain → worldwide precision ke liye bekaar"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3 && beat < 6} delay={dl(3, 1)}>
        <Draw on={true} d="M 340 468 L 740 468" stroke={RED} sw={1.4} dur={0.4} />
      </Fade>

      {/* beat 4 — restate: one universal name */}
      <Fade on={beat >= 4 && beat < 6} delay={dl(4, 0.3)}>
        <T x={540} y={486} size={13} fill={GREEN} script={false}>
          {t(
            "Solanum melongena — one universal name, the same everywhere",
            "Solanum melongena — ek universal naam, har jagah wahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — the pin-code analogy */}
      <Fade on={beat >= 5 && beat < 6} delay={dl(5, 0.3)}>
        <T x={540} y={515} size={14} fill={GREEN} script>
          {t(
            "like NDLS or a PIN code — points to exactly ONE thing, everywhere",
            "NDLS ya PIN code jaisa — hamesha bilkul EK cheez ko point karta hai"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 5 && beat < 6} delay={dl(5, 1.4)} d="M 380 524 C 450 521, 630 521, 700 524" stroke={GREEN} sw={1.8} dur={0.5} />

      {/* beat 6 — Phase B: what is biodiversity? */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={64} size={22} fill={RED} script>
          {t("what is biodiversity?", "biodiversity kya hai?")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.3)} d="M 330 86 C 430 82, 650 82, 750 86" stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 2.1)}>
        <T x={540} y={120} size={15} fill={INK} script>
          {t(
            "variety & variability among living organisms — across genes, species, ecosystems",
            "living organisms ke beech variety aur variability — genes, species, ecosystems ke aar-paar"
          )}
        </T>
      </Fade>

      {/* beat 7 — DIAGRAM: variety, not raw count */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 120 180 h 340 v 140 h -340 z" stroke={MUTED} sw={2} dur={0.8} />
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={290} y={204} size={14} fill={MUTED} weight={700}>
          {t("single-crop field", "ek hi crop ka field")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={290} y={278} size={30} fill={INK} weight={800}>
          1
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 2.2)}>
        <T x={290} y={306} size={13} fill={RED} script={false}>
          {t("= LOW diversity", "= LOW diversity")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2.9)} d="M 620 180 h 340 v 140 h -340 z" stroke={GREEN} sw={2} dur={0.8} />
      <Fade on={beat >= 7} delay={dl(7, 3.7)}>
        <T x={790} y={204} size={14} fill={GREEN} weight={700}>
          {t("mixed habitat", "mix species wala habitat")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.3)}>
        <T x={790} y={278} size={30} fill={INK} weight={800}>
          40
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.9)}>
        <T x={790} y={306} size={13} fill={GREEN} script={false}>
          {t("= HIGH diversity", "= HIGH diversity")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5.6)}>
        <T x={540} y={350} size={14} fill={AMBER_DARK} script>
          {t("biodiversity = VARIETY, not raw count", "biodiversity = VARIETY hai, raw count nahi")}
        </T>
      </Fade>

      {/* beat 8 — naming & classifying is unavoidable */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <Chip x={300} y={460} w={480} h={38} fill={INK} textFill={CREAM} size={14} script={false}>
          {t(
            "so much variety → naming & classifying UNAVOIDABLE",
            "itni variety → naming aur classifying UNAVOIDABLE"
          )}
        </Chip>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.3)}>
        <T x={540} y={520} size={13} fill={MUTED} script>
          {t(
            "like a library of millions of books — you need a cataloguing scheme",
            "lakhon kitaabon ki library jaisa — cataloguing scheme chahiye hi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
