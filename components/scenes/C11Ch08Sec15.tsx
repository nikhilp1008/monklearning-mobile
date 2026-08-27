/**
 * C11 Ch08 · Section 15 — "Building a name: lock the suffix first"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 7.77, 27.05, 50.09, 64.43, 78.34, 84.99, 109.82]):
 *  0 title (always-on, seq1) · 1 seniority ladder (one line, high→low) · 2 four
 *  suffix/prefix chips · 3 red note (always-prefix groups) · 4 steps 1-2 (principal
 *  group → suffix, longest chain) · 5 step 3 (lowest locant) · 6 steps 4-5
 *  (alphabetical prefixes + tie-break example) · 7 red closer (alphabetize
 *  exceptions)
 *
 * Layout plan:
 *  b1 | seniority line (14, ink, w700) | T mid | y100
 *  b2 | 4 suffix/prefix chips          | Chip  | x60/290/460/615 y140..176
 *  b3 | margin bar + red note          | Draw+T| x60 y195..225 · x76 y213
 *  b4 | steps 1-2 (13, ink)            | T st  | x70 y255
 *  b5 | step 3 (13, ink)               | T st  | x70 y285
 *  b6 | steps 4-5, 2 lines             | T st  | x70 y315/345
 *  b7 | margin bar + red closer        | Draw+T| x60 y380..410 · x76 y398
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, GREEN, RED, CREAM, AMBER,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch08Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} script>
          {t("Building a name: lock the suffix first", "Naam banao: pehle suffix lock karo")}
        </T>
      </Fade>

      {/* beat 1 — seniority ladder */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={100} size={14} fill={INK} weight={700}>
          COOH {">"} SO₃H {">"} ester {">"} amide {">"} CN {">"} CHO {">"} C=O {">"} OH {">"} NH₂
        </T>
      </Fade>

      {/* beat 2 — suffix / prefix forms */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Chip x={60} y={140} w={210} h={36} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          COOH: -oic acid / carboxy-
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <Chip x={290} y={140} w={150} h={36} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          OH: -ol / hydroxy-
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <Chip x={460} y={140} w={135} h={36} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          C=O: -one / oxo-
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <Chip x={615} y={140} w={165} h={36} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          NH₂: -amine / amino-
        </Chip>
      </Fade>

      {/* beat 3 — always-prefix groups */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 60 195 L 60 225" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={76} y={213} size={15} fill={RED} script anchor="start">
          {t(
            "halogens, -NO2, alkyl, alkoxy are ALWAYS prefixes — never the principal group",
            "halogens, -NO2, alkyl, alkoxy HAMESHA prefix — kabhi principal group nahi"
          )}
        </T>
      </Fade>

      {/* beat 4 — steps 1-2 */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={70} y={255} size={13} fill={INK} anchor="start">
          {t(
            "Step 1-2: principal group → suffix; longest chain that contains it",
            "Step 1-2: principal group → suffix; longest chain jisme wo group ho"
          )}
        </T>
      </Fade>

      {/* beat 5 — step 3 */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={70} y={285} size={13} fill={INK} anchor="start">
          {t(
            "Step 3: number for the lowest locant to the principal group first",
            "Step 3: principal group ko sabse pehle lowest locant do"
          )}
        </T>
      </Fade>

      {/* beat 6 — steps 4-5 */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={70} y={315} size={13} fill={INK} anchor="start">
          {t(
            "Step 4-5: substituents = alphabetical prefixes + locants",
            "Step 4-5: substituents = alphabetical prefixes + locants"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={70} y={345} size={13} fill={GREEN} anchor="start">
          {t(
            "tie-break: first point of difference — {2,3,6} beats {2,4,5}",
            "tie-break: first point of difference — {2,3,6} jeetega {2,4,5} se"
          )}
        </T>
      </Fade>

      {/* beat 7 — alphabetizing exceptions */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 60 380 L 60 410" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={398} size={15} fill={RED} script anchor="start">
          {t(
            "ignore di/tri/tetra, sec-/tert- when alphabetizing — but cyclo- and iso- DO count",
            "di/tri/tetra, sec-/tert- ko ignore karo — par cyclo- aur iso- COUNT hote hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
