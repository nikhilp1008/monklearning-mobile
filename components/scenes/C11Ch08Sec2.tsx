/**
 * C11 Ch08 · Section 2 — "The four pillars: why carbon is special"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 10.58, 22.95, 39.42, 54.44, 73.39, 86.87, 98.05]):
 *  0 title (always-on, board_content seq1) · 1 Pillar 1 — tetravalence card · 2 Pillar 2
 *  — catenation card · 3 Pillar 3 — π-bonds/small-size card · 4 Pillar 3 extra red note
 *  (close p-orbital overlap) · 5 Pillar 4 — isomerism card · 6 summary line (no other
 *  element combines all four) · 7 red-margin caveat (catenation not infinite)
 *
 * Four columns, centers x=170/400/630/860, each ≈220px wide, icon zone y150-215,
 * label stack y235(Pillar N)/258(title)/280(subtitle)/302(P3 extra red line).
 *
 * Layout plan:
 *  b0 | title (script 28, red)         | T mid | x214..866 y36..78
 *  b1 | P1 tetravalent-C icon          | Draw  | c(170,190) r10..28
 *  b1 | P1 labels ×3                   | T mid | x60..280 y224..291
 *  b2 | P2 chain icon (4 atoms)        | Draw  | x330..470 y175..200
 *  b2 | P2 labels ×3                   | T mid | x290..510 y224..291
 *  b3 | P3 C=C + C≡C icons             | Draw  | x555..595 / x665..705 y175
 *  b3 | P3 labels ×3                   | T mid | x520..740 y224..291
 *  b4 | P3 extra red line              | T mid | x526..734 y302..315 (bl 306)
 *  b5 | P4 straight+branched icons     | Draw  | x800..850 / x895..935 y160..205
 *  b5 | P4 labels ×3                   | T mid | x750..970 y224..291
 *  b6 | summary (20, green, w800)      | T mid | x250..830 y390..406 (bl 400)
 *  b7 | margin bar + caveat (15 red)   | Draw+T| x60 y560..590 · text x76..777 y572..585
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, doubleBondD, tripleBondD } from "./chem-kit";

function tetraStubs(cx: number, cy: number, rIn: number, rOut: number) {
  const angles = [-0.785, -2.356, 0.785, 2.356];
  return angles
    .map((a) => {
      const c = Math.cos(a),
        s = Math.sin(a);
      return bondD(cx + c * rIn, cy + s * rIn, cx + c * rOut, cy + s * rOut);
    })
    .join(" ");
}

export default function C11Ch08Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const Card = ({
    cx,
    n,
    title,
    sub,
  }: {
    cx: number;
    n: string;
    title: string;
    sub: string;
  }) => (
    <>
      <T x={cx} y={235} size={14} fill={AMBER_DARK} weight={700}>
        {n}
      </T>
      <T x={cx} y={258} size={17} fill={INK} weight={700}>
        {title}
      </T>
      <T x={cx} y={280} size={13} fill={MUTED}>
        {sub}
      </T>
    </>
  );

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={28} fill={RED} script>
          {t("Four pillars make carbon unique", "Char pillars carbon ko unique banate hain")}
        </T>
      </Fade>

      {/* beat 1 — Pillar 1: tetravalence */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.2)}
        d={tetraStubs(170, 190, 10, 28)}
        stroke={INK}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.15)}>
        <T x={170} y={196} size={16} fill={INK} weight={800}>
          C
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.9)}>
        <Card
          cx={170}
          n={t("PILLAR 1", "PILLAR 1")}
          title={t("Tetravalence", "Tetravalence")}
          sub={t("4 e⁻ → 4 bonds, 3-D frame", "4 e⁻ → 4 bonds, 3-D frame")}
        />
      </Fade>

      {/* beat 2 — Pillar 2: catenation */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.2)}
        d="M 330 200 L 365 175 L 400 200 L 435 175 L 470 200"
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.1)}>
        <Card
          cx={400}
          n={t("PILLAR 2", "PILLAR 2")}
          title={t("Catenation", "Catenation")}
          sub={t("strong C–C → chains, rings", "strong C–C → chains, rings")}
        />
      </Fade>

      {/* beat 3 — Pillar 3: multiple bonds + small size */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.2)}
        d={doubleBondD(555, 180, 595, 180, 3)}
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.7)}
        d={tripleBondD(665, 180, 705, 180, 5)}
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <Card
          cx={630}
          n={t("PILLAR 3", "PILLAR 3")}
          title={t("π-bonds (small size)", "π-bonds (small size)")}
          sub={t("small atom → strong π bonds", "small atom → strong π bonds")}
        />
      </Fade>

      {/* beat 4 — subtlety: small atom, close approach, strong overlap */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={630} y={306} size={13} fill={RED} script>
          {t("big atoms can't overlap well", "bade atoms achhe se overlap nahi karte")}
        </T>
      </Fade>

      {/* beat 5 — Pillar 4: isomerism (straight vs branched skeleton) */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.2)}
        d="M 800 195 L 825 175 L 850 195"
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.7)}
        d={`${bondD(915, 190, 915, 165)} ${bondD(915, 190, 893, 210)} ${bondD(915, 190, 937, 210)}`}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <Card
          cx={860}
          n={t("PILLAR 4", "PILLAR 4")}
          title={t("Isomerism", "Isomerism")}
          sub={t("same atoms, new arrangement", "same atoms, new arrangement")}
        />
      </Fade>

      {/* beat 6 — the unique combination */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={400} size={20} fill={GREEN} weight={800}>
          {t(
            "no other element combines all four → millions of compounds",
            "koi aur element ye chaaron nahi jodta → lakhon compounds"
          )}
        </T>
      </Fade>

      {/* beat 7 — honest limit, red-margin */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 60 560 L 60 590" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={579} size={15} fill={RED} script anchor="start">
          {t(
            "catenation is exceptional, not infinite — very long chains get unstable",
            "catenation exceptional hai, infinite nahi — lambi chains unstable ho jaati hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
