/**
 * C11 Ch08 · Section 24 — "Stereoisomerism II — optical (chirality)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 9.13, 23.64, 29.87, 46.93, 65.62, 80.9, 105.73]):
 *  0 title (always-on, seq1) · 1 chirality def (hands analogy) · 2 diagram: mirror-
 *  image pair around a chiral C (wedge/hash) · 3 d/l rotation labels + mirror line
 *  · 4 enantiomers (same mp/bp, differ only in rotation) · 5 diastereomers (not
 *  mirror images, cis/trans) · 6 red note (racemic vs meso) · 7 red closer
 *  (symmetry test → achiral, meso)
 *
 * Two chiral-C structures, mirrored, centers x=220/780, dashed mirror line x=500.
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, wedgeD, hashD } from "./chem-kit";

export default function C11Ch08Sec24({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={20} fill={RED} script>
          {t("Stereoisomerism II — optical (chirality)", "Stereoisomerism II — optical (chirality)")}
        </T>
      </Fade>

      {/* beat 1 — chirality: like left and right hands */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={97} size={14} fill={INK}>
          {t(
            "chiral = not superimposable on its mirror image — like your two hands",
            "chiral = mirror image pe superimpose nahi hota — jaise do haath"
          )}
        </T>
      </Fade>

      {/* beat 2 — the mirror-image pair, drawn */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d={bondD(220, 180, 220, 145)} stroke={INK} sw={2.2} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 0.5)} d={bondD(220, 180, 220, 215)} stroke={INK} sw={2.2} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d={wedgeD(220, 180, 178, 200)} stroke={INK} sw={1} fill={INK} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 1.1)} d={hashD(220, 180, 262, 200)} stroke={INK} sw={1.4} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={220} y={130} size={14} fill={INK} weight={700}>
          COOH
        </T>
        <T x={220} y={230} size={14} fill={INK} weight={700}>
          CH₃
        </T>
        <T x={165} y={205} size={14} fill={INK} weight={700} anchor="end">
          OH
        </T>
        <T x={277} y={205} size={14} fill={INK} weight={700} anchor="start">
          H
        </T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 1.7)} d={bondD(780, 180, 780, 145)} stroke={INK} sw={2.2} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 2)} d={bondD(780, 180, 780, 215)} stroke={INK} sw={2.2} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 2.3)} d={wedgeD(780, 180, 738, 200)} stroke={INK} sw={1} fill={INK} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 2.6)} d={hashD(780, 180, 822, 200)} stroke={INK} sw={1.4} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <T x={780} y={130} size={14} fill={INK} weight={700}>
          COOH
        </T>
        <T x={780} y={230} size={14} fill={INK} weight={700}>
          CH₃
        </T>
        <T x={725} y={205} size={14} fill={INK} weight={700} anchor="end">
          H
        </T>
        <T x={837} y={205} size={14} fill={INK} weight={700} anchor="start">
          OH
        </T>
      </Fade>

      {/* beat 3 — d/l rotation + the mirror */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 500 115 L 500 245" stroke={MUTED} sw={1.6} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={500} y={175} size={12} fill={MUTED} anchor="middle">
          {t("mirror", "mirror")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.9)}>
        <T x={220} y={262} size={15} fill={INK} weight={700}>
          {t("d (dextro, +)", "d (dextro, +)")}
        </T>
        <T x={780} y={262} size={15} fill={INK} weight={700}>
          {t("l (laevo, −)", "l (laevo, −)")}
        </T>
      </Fade>

      {/* beat 4 — enantiomers */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={300} size={13} fill={INK}>
          {t("enantiomers: same mp/bp/reactivity — differ only in optical rotation", "enantiomers: same mp/bp/reactivity — sirf optical rotation alag")}
        </T>
      </Fade>

      {/* beat 5 — diastereomers */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={330} size={13} fill={INK}>
          {t("diastereomers: NOT mirror images (cis/trans) — ordinary properties differ too", "diastereomers: mirror images NAHI (cis/trans) — ordinary properties bhi alag")}
        </T>
      </Fade>

      {/* beat 6 — racemic vs meso */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 60 350 L 60 380" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={368} size={15} fill={RED} script anchor="start">
          {t(
            "racemic = 1:1 mix, inactive by EXTERNAL cancel. meso = 1 molecule, INTERNAL symmetry",
            "racemic = 1:1 mix, EXTERNAL cancel se inactive. meso = 1 molecule, INTERNAL symmetry se"
          )}
        </T>
      </Fade>

      {/* beat 7 — the symmetry test */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 60 400 L 60 430" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={419} size={15} fill={RED} script anchor="start">
          {t(
            "a plane/centre of symmetry → achiral, even with stereocentres — that's a meso compound",
            "plane/centre of symmetry → achiral, stereocentres ke saath bhi — wahi meso compound hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
