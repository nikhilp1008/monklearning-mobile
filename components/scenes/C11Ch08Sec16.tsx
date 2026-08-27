/**
 * C11 Ch08 · Section 16 — "Worked example — name & hybridize (CBSE)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 5.72, 18.77, 28.84, 48.9, 65.28, 79.7, 95.66]):
 *  0 title (always-on, seq1) · 1 task (CH3-CH(OH)-CH2-CHO) · 2 diagram: the
 *  structure drawn, C4-C3-C2-C1 numbered · 3 seniority → suffix -al · 4 name:
 *  3-hydroxybutanal (stamped) · 5 hybridization tags on each carbon · 6 red note
 *  (suffix first, avoid the -ol error) · 7 green closer (only C1 touches C=O)
 *
 * Same molecule as Sec 14's slot diagram, now built and hybridized.
 * Layout plan:
 *  b1 | task (14, ink)                 | T mid | y90
 *  b2 | zig-zag C4..C1 + OH + CHO       | Draw+T| x180..410 y114..220
 *  b2 | numbers 4/3/2/1                 | T mid | y245
 *  b3 | seniority (13, ink)             | T mid | y305
 *  b4 | chain+locants (13, ink)         | T mid | y335
 *  b4 | name box "3-hydroxybutanal"     | rect+T| x390..690 y355..395
 *  b5 | sp3/sp3/sp3/sp2 tags            | T mid | y275
 *  b6 | margin bar + red note           | Draw+T| x60 y420..450 · x76 y438
 *  b7 | closer (16, green, w700)        | T mid | x540 y475
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM, AMBER,
  Scene,
} from '@/components/scenes/kit';
import { bondD, doubleBondD } from "./chem-kit";

export default function C11Ch08Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const xs = [180, 240, 300, 360]; // C4, C3, C2, C1

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={21} fill={RED} script>
          {t("Worked example — name & hybridize (CBSE)", "Worked example — naam do & hybridize (CBSE)")}
        </T>
      </Fade>

      {/* beat 1 — task */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={90} size={14} fill={INK}>
          CH₃−CH(OH)−CH₂−CHO: {t("IUPAC name + hybridization of each C", "IUPAC naam + har C ka hybridization")}
        </T>
      </Fade>

      {/* beat 2 — the structure, drawn */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.2)}
        d={`M ${xs[0]} 220 L ${xs[1]} 185 L ${xs[2]} 220`}
        stroke={INK}
        sw={2.4}
        dur={0.7}
      />
      <Draw on={beat >= 2} delay={dl(2, 1)} d={bondD(xs[2], 220, xs[3], 185)} stroke={INK} sw={2.4} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 1.4)} d={bondD(xs[1], 185, xs[1], 150)} stroke={AMBER_DARK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 1.7)}>
        <T x={xs[1]} y={135} size={15} fill={AMBER_DARK} weight={700}>
          OH
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2)} d={doubleBondD(xs[3], 185, xs[3], 140, 3)} stroke={INK} sw={2.2} dur={0.35} />
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <T x={xs[3]} y={125} size={15} fill={INK} weight={700}>
          O
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.5)} d={bondD(xs[3], 185, 400, 165)} stroke={INK} sw={2} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <T x={412} y={160} size={15} fill={INK} weight={700}>
          H
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.1)}>
        {xs.map((x, i) => (
          <T key={x} x={x} y={245} size={13} fill={MUTED} weight={700}>
            {4 - i}
          </T>
        ))}
      </Fade>

      {/* beat 3 — seniority decides the suffix */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={305} size={13} fill={INK}>
          {t("CHO outranks OH → suffix -al; OH demoted to hydroxy-", "CHO, OH se senior → suffix -al; OH hydroxy- ban jaata")}
        </T>
      </Fade>

      {/* beat 4 — build the name */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={335} size={13} fill={INK}>
          {t("4C incl. CHO = butanal; CHO terminal = C1; OH on C3", "4C CHO samet = butanal; CHO terminal = C1; OH C3 par")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.7)}>
        <Rect x={390} y={355} width={300} height={42} rx={8} fill={CREAM} stroke={AMBER} strokeWidth={2} />
        <T x={540} y={382} size={19} fill={INK} weight={800}>
          3-hydroxybutanal
        </T>
      </Fade>

      {/* beat 5 — hybridization of each carbon */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={xs[0]} y={275} size={13} fill={GREEN} weight={700}>
          sp³
        </T>
        <T x={xs[1]} y={275} size={13} fill={GREEN} weight={700}>
          sp³
        </T>
        <T x={xs[2]} y={275} size={13} fill={GREEN} weight={700}>
          sp³
        </T>
        <T x={xs[3]} y={275} size={13} fill={RED} weight={700}>
          sp²
        </T>
      </Fade>

      {/* beat 6 — the habit that saves marks */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 60 420 L 60 450" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={438} size={15} fill={RED} script anchor="start">
          {t(
            "state the suffix first, then demote the rest — stops the classic '-ol' error",
            "pehle suffix batao, phir baaki demote karo — classic '-ol' error rukega"
          )}
        </T>
      </Fade>

      {/* beat 7 — closer */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={475} size={16} fill={GREEN} weight={700}>
          {t("only C1 touches C=O → only C1 is sp²; rest single-bonded = sp³", "sirf C1 mein C=O → sirf C1 sp²; baaki single-bond = sp³")}
        </T>
      </Fade>
    </Scene>
  );
}
