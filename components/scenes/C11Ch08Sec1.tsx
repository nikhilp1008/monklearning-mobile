/**
 * C11 Ch08 · Section 1 — "Why carbon owns a whole branch of chemistry"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 18.01, 37.55, 48.98, 61.95, 78.93, 98.82, 104.19, 119.55]):
 *  0 title (always-on) · 1 Wohler synthesis: NH4OCN --Δ,1828--> urea (drawn) · 2 "vital
 *  force" crossed out, mysticism note · 3 lone tetravalent C (LEGO brick) · 4 chain +
 *  branch + ring (catenation) · 5 chain gains a C=C double bond + heteroatom tags (-OH,
 *  -NH2, -Cl) · 6 "three foundational skills" heading · 7 three skill chips · 8 red-margin
 *  caveat note (CO/carbonates/carbides/cyanides stay inorganic)
 *
 * Layout plan — boxes are estimated render boxes (Kalam top −1.3·size/bot +0.5·size,
 * Anek top −0.78·size/bot +0.31·size), longer language counts:
 *  b0 | title (script 30, red)        | T mid  | x177..903 y36..81 (bl 66)
 *  b1 | "NH4OCN" (22 anek)            | T mid  | x117..183 y139..157 (bl 150)
 *  b1 | "(inorganic)" (13 muted)      | T mid  | x115..185 y163..176 (bl 172)
 *  b1 | reaction arrow                | Draw   | x220..340 y150, over "Δ, 1828" y138
 *  b1 | urea C=O bond                 | Draw   | x460 y185..128
 *  b1 | "O" label (18 anek)           | T mid  | x448..472 y98..118 (bl 112)
 *  b1 | urea C-N bonds ×2             | Draw   | (460,185)→(412,208) / →(508,208)
 *  b1 | "H2N" (18 anek, end)          | T end  | x371..398 y208..228 (bl 222)
 *  b1 | "NH2" (18 anek, start)        | T st   | x522..549 y208..228 (bl 222)
 *  b1 | "urea — unmistakably organic" | T mid  | x352..568 y228..256 (bl 248, script16 green)
 *  b2 | "vital force" chip (crossed)  | Chip   | x650..810 y105..143
 *  b2 | note (16 red script)          | T st   | x650..949 y154..183 (bl 175)
 *  b3 | "C" label (22 anek)           | T mid  | x139..161 y332..355 (bl 348)
 *  b3 | 4 bond stubs                  | Draw   | radial around (150,340) r14..44
 *  b3 | "tetravalent = 4 bonds" (16)  | T st   | x60..297 y399..428 (bl 420, script amber)
 *  b4 | chain P1-P2-P3                | Draw   | (100,380)-(160,340)-(220,380)
 *  b4 | branch P2-Pb                  | Draw   | (160,340)→(160,395)
 *  b4 | hexagon ring                  | Draw   | c(420,370) r55, y315..425
 *  b5 | P3=P4 double bond             | Draw   | (220,380)→(280,340)
 *  b5 | -OH tag                       | Draw+T | stub (100,380)→(70,350), label x28..85 y336..355
 *  b5 | -NH2 tag                      | Draw+T | stub (280,340)→(280,305), label x240..320 y280..300
 *  b5 | -Cl tag                       | Draw+T | stub (467.6,342.5)→(500,325), label x508..545 y311..331
 *  b4/5 caption (swaps text, 16 amber)| T st   | x60..694 y439..468 (bl 460)
 *  b6 | "Three foundational skills"   | T mid  | x420..660 y483..507 (bl 500, 22 anek w800)
 *  b7 | 3 skill chips                 | Chip   | x60..340 / 390..670 / 720..1000 y518..552
 *  b8 | margin bar                    | Draw   | x60 y570..594 (red)
 *  b8 | caveat note (15 red script)   | T st   | x76..686 y568..596 (bl 588)
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
  crossD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { bondD, doubleBondD, ringD as hexRingD, ReactionArrow } from "./chem-kit";

export default function C11Ch08Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on, blank board otherwise */}
      <Fade on={true}>
        <T x={540} y={66} size={30} fill={RED} script>
          {t(
            "Organic Chemistry = the chemistry of carbon",
            "Organic Chemistry = carbon ki chemistry"
          )}
        </T>
      </Fade>

      {/* beat 1 — Wohler's synthesis: inorganic reactant --Δ,1828--> urea, drawn */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={150} y={150} size={22} fill={INK} weight={700}>
          NH₄OCN
        </T>
        <T x={150} y={172} size={13} fill={MUTED}>
          {t("(inorganic)", "(inorganic)")}
        </T>
      </Fade>
      <ReactionArrow
        on={beat >= 1}
        delay={dl(1, 1.6)}
        x1={220}
        x2={340}
        y={150}
        over={t("Δ, 1828", "Δ, 1828")}
        color={INK}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.6)}
        d={doubleBondD(460, 185, 460, 128, 3)}
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={460} y={112} size={18} fill={INK} weight={700}>
          O
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.4)}
        d={`${bondD(460, 185, 412, 208)} ${bondD(460, 185, 508, 208)}`}
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.9)}>
        <T x={398} y={222} size={18} fill={INK} weight={700} anchor="end">
          H₂N
        </T>
        <T x={522} y={222} size={18} fill={INK} weight={700} anchor="start">
          NH₂
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.6)}>
        <T x={460} y={248} size={16} fill={GREEN} script>
          {t("urea — unmistakably organic", "urea — pakka organic")}
        </T>
      </Fade>

      {/* beat 2 — the name stuck, the mysticism didn't */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={650} y={105} w={160} h={38} fill={CREAM} stroke={MUTED} textFill={MUTED} size={17}>
          {t("vital force", "vital force")}
        </Chip>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.1)} d={crossD(650, 105, 160, 38)} stroke={RED} sw={2.6} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={650} y={175} size={16} fill={RED} script anchor="start">
          {t("name stuck. mysticism didn't.", "naam reh gaya. mysticism nahi bacha.")}
        </T>
      </Fade>

      {/* beat 3 — carbon: the LEGO brick, tetravalent */}
      <Fade on={beat === 3} delay={0}>
        <T x={150} y={348} size={22} fill={INK} weight={800}>
          C
        </T>
      </Fade>
      {beat === 3 &&
        [
          { a: -0.785 },
          { a: -2.356 },
          { a: 0.785 },
          { a: 2.356 },
        ].map((s, i) => {
          const c1 = Math.cos(s.a),
            s1 = Math.sin(s.a);
          const x1 = 150 + c1 * 14,
            y1 = 340 + s1 * 14,
            x2 = 150 + c1 * 44,
            y2 = 340 + s1 * 44;
          return (
            <Draw
              key={i}
              on={beat === 3}
              delay={dl(3, 0.6 + i * 0.35)}
              d={bondD(x1, y1, x2, y2)}
              stroke={INK}
              sw={2.4}
              dur={0.4}
            />
          );
        })}
      <Fade on={beat === 3} delay={dl(3, 2.2)}>
        <T x={60} y={420} size={16} fill={AMBER_DARK} script anchor="start">
          {t("tetravalent = always 4 bonds", "tetravalent = hamesha 4 bonds")}
        </T>
      </Fade>

      {/* beat 4 — catenation: chains, branches, rings (the C icon erases, this replaces it) */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.2)}
        d="M 100 380 L 160 340 L 220 380"
        stroke={INK}
        sw={2.6}
        dur={1}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.1)}
        d={bondD(160, 340, 160, 395)}
        stroke={INK}
        sw={2.6}
        dur={0.4}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.6)}
        d={hexRingD(420, 370, 55)}
        stroke={INK}
        sw={2.4}
        dur={1.1}
      />

      {/* beat 5 — add a double bond + heteroatom links onto the same skeleton */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.2)}
        d={doubleBondD(220, 380, 280, 340, 3)}
        stroke={INK}
        sw={2.4}
        dur={0.6}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 1)}
        d={bondD(100, 380, 95, 358)}
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.35}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={85} y={345} size={16} fill={AMBER_DARK} weight={700} anchor="end">
          -OH
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.6)}
        d={bondD(280, 340, 280, 305)}
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.35}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.9)}>
        <T x={280} y={290} size={16} fill={AMBER_DARK} weight={700}>
          -NH₂
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 2.2)}
        d={bondD(467.6, 342.5, 500, 325)}
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.35}
      />
      <Fade on={beat >= 5} delay={dl(5, 2.5)}>
        <T x={508} y={320} size={16} fill={AMBER_DARK} weight={700} anchor="start">
          -Cl
        </T>
      </Fade>

      {/* shared caption, text swaps once beat 5 fires */}
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <T x={60} y={460} size={16} fill={AMBER_DARK} script anchor="start">
          {beat >= 5
            ? t(
                "+ multiple bonds + H,O,N,S,halogens + isomers → millions of compounds",
                "+ multiple bonds + H,O,N,S,halogens + isomers → lakhon compounds"
              )
            : t(
                "catenation → chains, branches, rings (any size)",
                "catenation → chains, branches, rings (koi bhi size)"
              )}
        </T>
      </Fade>

      {/* beat 6 — three foundational skills */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={500} size={22} fill={INK} weight={800}>
          {t("Three foundational skills", "Teen foundational skills")}
        </T>
      </Fade>

      {/* beat 7 — the three skill chips */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={60} y={518} w={280} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={17}>
          {t("1. Draw it", "1. Draw karo")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <Chip x={390} y={518} w={280} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={17}>
          {t("2. Classify it", "2. Classify karo")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.7)}>
        <Chip x={720} y={518} w={280} h={34} fill={CREAM} stroke={AMBER} textFill={INK} size={17}>
          {t("3. Family (series)", "3. Family (series)")}
        </Chip>
      </Fade>

      {/* beat 8 — the caveat, red-margin note */}
      <Draw on={beat >= 8} delay={dl(8, 0.2)} d="M 60 570 L 60 594" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 0.6)}>
        <T x={76} y={588} size={15} fill={RED} script anchor="start">
          {t(
            "organic = carbon-containing… except CO, carbonates, carbides, cyanides",
            "organic = carbon-containing… except CO, carbonates, carbides, cyanides"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
