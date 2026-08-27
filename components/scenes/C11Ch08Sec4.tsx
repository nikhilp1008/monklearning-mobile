/**
 * C11 Ch08 · Section 4 — "Classifying by skeleton, then by group"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 10.75, 20.57, 30.38, 42.67, 53.42, 71.59, 84.82]):
 *  0 title (always-on, seq1) · 1 Q1 root splits acyclic/cyclic · 2 "family tree" spine
 *  guide (diagram beat, no new text) · 3 Q2 cyclic splits carbocyclic/heterocyclic ·
 *  4 Q3 carbocyclic splits aromatic/alicyclic · 5 red note (heteroatom beats aromatic,
 *  pyridine) · 6 four anchor examples (butane/cyclohexane/benzene/pyridine) · 7 closing
 *  green line (classification predicts chemistry)
 *
 * A top-down decision tree. Layout plan:
 *  b1 | root chip "organic compound"   | Chip | x450..630 y98..132
 *  b1 | Q1 label                       | T mid| x475..605 y155 (bl, muted13)
 *  b1 | ACYCLIC / CYCLIC chips + edges | Chip | x190..350 / x730..890 y183..215
 *  b2 | spine guide (dashed, muted)    | Draw | x60 y140..400 + label y135
 *  b3 | CARBOCYCLIC/HETEROCYCLIC chips | Chip | x615..785 / x865..1035 y263..295
 *  b3 | Q2 label                       | T mid| x734..916 y245
 *  b4 | AROMATIC/ALICYCLIC chips       | Chip | x535..685 / x735..885 y343..375
 *  b4 | Q3 label                       | T mid| x647..763 y325
 *  b5 | margin bar + red note          | Draw+T| x60 y420..448 · x76 y440
 *  b6 | 4 anchor labels (13, muted)    | T mid| under each terminal leaf, y232/318/398/398
 *  b7 | closer (18, green, w800)       | T mid| x540 y475..500 (bl 493)
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch08Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const Leaf = ({
    x,
    y,
    w,
    label,
    stroke,
  }: {
    x: number;
    y: number;
    w: number;
    label: string;
    stroke: string;
  }) => (
    <Chip x={x} y={y} w={w} h={32} fill={CREAM} stroke={stroke} textFill={INK} size={14} script={false}>
      {label}
    </Chip>
  );

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={27} fill={RED} script>
          {t("Classifying by skeleton, then by group", "Skeleton se pehle, phir group se classify")}
        </T>
      </Fade>

      {/* beat 1 — Q1: open chain or ring? */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <Chip x={450} y={98} w={180} h={34} fill={INK} textFill="#fff" size={15} script={false}>
          {t("organic compound", "organic compound")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={540} y={155} size={13} fill={MUTED}>
          {t("open chain, or ring?", "khula chain, ya ring?")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1)} d={arrowD(540, 132, 270, 181)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d={arrowD(540, 132, 810, 181)} stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <Leaf x={190} y={183} w={160} label={t("ACYCLIC (chain)", "ACYCLIC (chain)")} stroke={AMBER} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <Leaf x={730} y={183} w={160} label={t("CYCLIC (ring)", "CYCLIC (ring)")} stroke={AMBER} />
      </Fade>

      {/* beat 2 — the whole family tree, followed top to bottom */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={60} y={135} size={13} fill={MUTED} anchor="start">
          {t("the family tree ↓", "family tree ↓")}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.6)}
        d="M 60 145 L 60 400"
        stroke={MUTED}
        sw={1.6}
        dur={1.4}
      />

      {/* beat 3 — Q2: carbocyclic or heterocyclic? */}
      <Fade on={beat >= 3} delay={dl(3, 0.1)}>
        <T x={825} y={245} size={13} fill={MUTED}>
          {t("only carbon, or heteroatom?", "sirf carbon, ya heteroatom?")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d={arrowD(810, 215, 700, 261)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d={arrowD(810, 215, 950, 261)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <Leaf x={615} y={263} w={170} label={t("CARBOCYCLIC (only C)", "CARBOCYCLIC (only C)")} stroke={AMBER} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <Leaf x={865} y={263} w={170} label={t("HETEROCYCLIC (+N,O..)", "HETEROCYCLIC (+N,O..)")} stroke={AMBER} />
      </Fade>

      {/* beat 4 — Q3: aromatic or alicyclic? */}
      <Fade on={beat >= 4} delay={dl(4, 0.1)}>
        <T x={705} y={325} size={13} fill={MUTED}>
          {t("aromatic, or not?", "aromatic, ya nahi?")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d={arrowD(700, 295, 610, 341)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d={arrowD(700, 295, 810, 341)} stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <Leaf x={535} y={343} w={150} label={t("AROMATIC", "AROMATIC")} stroke={GREEN} />
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <Leaf x={735} y={343} w={150} label={t("ALICYCLIC", "ALICYCLIC")} stroke={GREEN} />
      </Fade>

      {/* beat 5 — heteroatom beats aromatic */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 60 420 L 60 448" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={76} y={440} size={15} fill={RED} script anchor="start">
          {t(
            "heteroatom beats aromatic — pyridine is heterocyclic first, aromatic second",
            "heteroatom aromatic se pehle — pyridine heterocyclic pehle, aromatic baad mein"
          )}
        </T>
      </Fade>

      {/* beat 6 — four anchors to hold onto */}
      <Fade on={beat >= 6} delay={dl(6, 0.1)}>
        <T x={270} y={232} size={13} fill={AMBER_DARK} script>
          {t("e.g. butane", "e.g. butane")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={950} y={318} size={13} fill={AMBER_DARK} script>
          {t("e.g. pyridine", "e.g. pyridine")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.7)}>
        <T x={610} y={398} size={13} fill={AMBER_DARK} script>
          {t("e.g. benzene", "e.g. benzene")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={810} y={398} size={13} fill={AMBER_DARK} script>
          {t("e.g. cyclohexane", "e.g. cyclohexane")}
        </T>
      </Fade>

      {/* beat 7 — why bother */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={493} size={18} fill={GREEN} weight={800}>
          {t(
            "classification predicts chemistry — before you write a single reaction",
            "classification chemistry predict karta hai — reaction likhne se pehle"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
