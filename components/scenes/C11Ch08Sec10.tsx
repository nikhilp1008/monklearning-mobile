/**
 * C11 Ch08 · Section 10 — "Pitfalls & pro-tips — Foundations"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 8.87, 22.02, 35.67, 51.03, 63.74, 73.05, 84.57]):
 *  0 title (always-on, seq1) · 1 Pitfall 1 (vertex=carbon) · 2 Pitfall 2 (hidden
 *  heteroatoms) · 3 Pitfall 3 RED (heteroatom beats aromatic) · 4 Pitfall 4 (CH2
 *  increment / lone C=C ≠ aromatic) · 5 pro-tip: count vertices, fill H to 4 · 6
 *  pro-tip line 2 (never count H one at a time) · 7 red-margin closer
 *
 * 2×2 pitfall-card grid, columns centered x=285/795. Layout plan:
 *  b1 | card 1 (amber border)          | rect+T| x60..510 y130..225
 *  b2 | card 2 (amber border)          | rect+T| x570..1020 y130..225
 *  b3 | card 3 (red border)            | rect+T| x60..510 y245..340
 *  b4 | card 4 (amber border)          | rect+T| x570..1020 y245..340
 *  b5-6 | pro-tip box (green border)   | rect+T| x150..930 y365..425
 *  b7 | margin bar + closer            | Draw+T| x60 y455..483 · x76 y473
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch08Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const Card = ({
    x,
    y,
    cx,
    stroke,
    title,
    body,
  }: {
    x: number;
    y: number;
    cx: number;
    stroke: string;
    title: string;
    body: string;
  }) => (
    <>
      <Rect x={x} y={y} width={450} height={95} rx={10} fill={CREAM} stroke={stroke} strokeWidth={stroke === RED ? 2.4 : 1.6} />
      <T x={cx} y={y + 28} size={15} fill={stroke === RED ? RED : INK} weight={700}>
        {title}
      </T>
      <T x={cx} y={y + 58} size={13} fill={MUTED}>
        {body}
      </T>
    </>
  );

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={27} fill={RED} script>
          {t("Pitfalls & pro-tips — Foundations", "Pitfalls & pro-tips — Foundations")}
        </T>
      </Fade>

      {/* beat 1 — pitfall 1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Card
          x={60}
          y={130}
          cx={285}
          stroke={AMBER}
          title={t("✗ Pitfall 1: vertex = carbon", "✗ Pitfall 1: vertex = carbon")}
          body={t("corner/free end = carbon (H's auto-filled)", "corner/free end = carbon (H auto-fill)")}
        />
      </Fade>

      {/* beat 2 — pitfall 2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <Card
          x={570}
          y={130}
          cx={795}
          stroke={AMBER}
          title={t("✗ Pitfall 2: hiding heteroatoms", "✗ Pitfall 2: heteroatoms chhupana")}
          body={t("O, N, halogens + their H's — always drawn", "O, N, halogens + unke H — hamesha drawn")}
        />
      </Fade>

      {/* beat 3 — pitfall 3, red */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <Card
          x={60}
          y={245}
          cx={285}
          stroke={RED}
          title={t("✗ Pitfall 3: heteroatom beats aromatic", "✗ Pitfall 3: heteroatom > aromatic")}
          body={t("pyridine = heterocyclic first, aromatic 2nd", "pyridine = heterocyclic pehle, aromatic baad")}
        />
      </Fade>

      {/* beat 4 — pitfall 4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <Card
          x={570}
          y={245}
          cx={795}
          stroke={AMBER}
          title={t("✗ Pitfall 4: two sloppy habits", "✗ Pitfall 4: do sloppy habits")}
          body={t("CH2 = increment; 1 ring C=C ≠ aromatic", "CH2 = increment; 1 ring C=C ≠ aromatic")}
        />
      </Fade>

      {/* beat 5 — pro-tip: count vertices, fill H */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Rect x={150} y={365} width={780} height={60} rx={10} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
        <T x={540} y={388} size={15} fill={GREEN} weight={700}>
          {t("⚡ SPEED: count vertices/ends for C, then fill H to 4 bonds", "⚡ SPEED: vertices/ends gino C ke liye, phir H bharo — 4 bonds")}
        </T>
      </Fade>

      {/* beat 6 — never count one at a time */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={410} size={14} fill={GREEN}>
          {t("never count H one at a time — fill by tetravalence", "H ek-ek karke mat gino — tetravalence se bharo")}
        </T>
      </Fade>

      {/* beat 7 — closer */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 60 455 L 60 483" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={473} size={16} fill={RED} script anchor="start">
          {t(
            "master these 4 + this habit → classification stops bleeding you marks",
            "ye 4 + ye habit master karo → classification marks nahi katega"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
