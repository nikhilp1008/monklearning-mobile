/**
 * C11 Ch08 · Section 23 — "Stereoisomerism I — geometrical (cis-trans / E-Z)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 11.95, 24.92, 33.19, 41.39, 52.05, 66.3, 81.07]):
 *  0 title (always-on, seq1) · 1 arises from restricted rotation · 2 diagram: cis
 *  and trans but-2-ene drawn · 3 name labels + same-side/opposite-side def · 4
 *  red note (needs restricted rotation + 2 different groups) · 5 fails if
 *  identical groups (ethene, propene) · 6 E/Z system, CIP priority · 7 red closer
 *  (Z=same side, E=opposite; priority by atomic number)
 *
 * Two structures, cis at cx=220, trans at cx=690.
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, doubleBondD } from "./chem-kit";

export default function C11Ch08Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={20} fill={RED} script>
          {t("Stereoisomerism I — geometrical (cis-trans / E-Z)", "Stereoisomerism I — geometrical (cis-trans / E-Z)")}
        </T>
      </Fade>

      {/* beat 1 — restricted rotation */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={95} size={14} fill={INK}>
          {t("arises from restricted rotation — a C=C or a ring", "restricted rotation se aata — C=C ya ek ring")}
        </T>
      </Fade>

      {/* beat 2 — cis and trans but-2-ene, drawn */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d={doubleBondD(180, 180, 260, 180, 3)} stroke={INK} sw={2.4} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d={bondD(180, 180, 150, 150)} stroke={INK} sw={2.2} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 1.1)} d={bondD(180, 180, 150, 210)} stroke={INK} sw={2.2} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 1.4)} d={bondD(260, 180, 290, 150)} stroke={INK} sw={2.2} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 1.7)} d={bondD(260, 180, 290, 210)} stroke={INK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={135} y={140} size={14} fill={INK} weight={700} anchor="end">
          CH₃
        </T>
        <T x={135} y={218} size={14} fill={INK} weight={700} anchor="end">
          H
        </T>
        <T x={305} y={140} size={14} fill={INK} weight={700} anchor="start">
          CH₃
        </T>
        <T x={305} y={218} size={14} fill={INK} weight={700} anchor="start">
          H
        </T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 2.3)} d={doubleBondD(650, 180, 730, 180, 3)} stroke={INK} sw={2.4} dur={0.5} />
      <Draw on={beat >= 2} delay={dl(2, 2.9)} d={bondD(650, 180, 620, 150)} stroke={INK} sw={2.2} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 3.2)} d={bondD(650, 180, 620, 210)} stroke={INK} sw={2.2} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 3.5)} d={bondD(730, 180, 760, 150)} stroke={INK} sw={2.2} dur={0.3} />
      <Draw on={beat >= 2} delay={dl(2, 3.8)} d={bondD(730, 180, 760, 210)} stroke={INK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 4.1)}>
        <T x={605} y={140} size={14} fill={INK} weight={700} anchor="end">
          CH₃
        </T>
        <T x={605} y={218} size={14} fill={INK} weight={700} anchor="end">
          H
        </T>
        <T x={775} y={140} size={14} fill={INK} weight={700} anchor="start">
          H
        </T>
        <T x={775} y={218} size={14} fill={INK} weight={700} anchor="start">
          CH₃
        </T>
      </Fade>

      {/* beat 3 — name + definition */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={220} y={250} size={16} fill={INK} weight={700}>
          {t("cis-but-2-ene", "cis-but-2-ene")}
        </T>
        <T x={220} y={268} size={12} fill={MUTED}>
          {t("like groups, same side", "same groups, same side")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={690} y={250} size={16} fill={INK} weight={700}>
          {t("trans-but-2-ene", "trans-but-2-ene")}
        </T>
        <T x={690} y={268} size={12} fill={MUTED}>
          {t("opposite sides", "opposite sides")}
        </T>
      </Fade>

      {/* beat 4 — the entry condition */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 60 290 L 60 318" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={76} y={309} size={15} fill={RED} script anchor="start">
          {t(
            "needs restricted rotation AND two different groups on each restricted carbon",
            "restricted rotation AND har restricted carbon par do alag groups chahiye"
          )}
        </T>
      </Fade>

      {/* beat 5 — when it fails */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={345} size={13} fill={INK}>
          {t("fails if either C has 2 identical groups — ethene, propene: none", "fails agar kisi C par 2 identical groups hain — ethene, propene: nahi")}
        </T>
      </Fade>

      {/* beat 6 — E/Z removes the ambiguity */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={375} size={13} fill={INK}>
          {t("E/Z removes ambiguity: rank by CIP priority (atomic number first)", "E/Z ambiguity hatata: CIP priority se rank karo (atomic number pehle)")}
        </T>
      </Fade>

      {/* beat 7 — the Z/E rule */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 60 400 L 60 430" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={419} size={15} fill={RED} script anchor="start">
          {t(
            "higher-priority groups same side → Z; opposite → E — priority by atomic number, not size",
            "higher-priority groups same side → Z; opposite → E — priority atomic number se, size se nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
