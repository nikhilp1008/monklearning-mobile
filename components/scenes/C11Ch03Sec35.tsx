/**
 * C11 Chemistry Ch03 · Section 35 — "The diagonal relationship"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 6.31, 15.1, 27.14, 43.78, 59.14, 71.94, 87.81]):
 *  0 title + underline
 *  1 rule: resembles the element ONE DOWN + ONE RIGHT
 *  2 red-margin: the mini grid — Li/Be/B (period 2) staggered above
 *    Mg/Al/Si (period 3), three diagonal arrows connecting the pairs
 *  3 why: size up down a group, size down across to the right
 *  4 shifts nearly cancel ⇒ similar size & charge/radius ratio
 *  5 charge density dictates chemistry ⇒ Li~Mg, not Li~Na
 *  6 evidence: Li/Mg normal oxides; Be/Al amphoteric covalent-leaning
 *  7 closing green stamp: draw down-one right-one, read the partner
 *
 * Layout plan:
 *  b2 | Li,Be,B cells (period 2)    | Draw | x305..655 y110..160
 *  b2 | Mg,Al,Si cells (period 3)   | Draw | x425..775 y175..225
 *  b2 | 3 diagonal arrows           | Draw | connecting each pair
 *  b2 | red margin bar              | Draw | x70 y110..225
 *  b3-6 | 4 lines                  | T mid | x?..? y241..338
 *  b7 | closing stamp (green)       | Chip | x250..830 y350..386
 */

import React from "react";
import { Rect } from 'react-native-svg';
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
  Scene,
} from '@/components/scenes/kit';

const ROW1 = [
  { sym: "Li", x: 305 },
  { sym: "Be", x: 425 },
  { sym: "B", x: 545 },
];
const ROW2 = [
  { sym: "Mg", x: 425 },
  { sym: "Al", x: 545 },
  { sym: "Si", x: 665 },
];
const CELL_W = 110;
const CELL_H = 50;

export default function C11Ch03Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("the diagonal relationship", "diagonal relationship")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 400 88 C 460 84, 620 84, 680 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — the rule */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={100} size={14} fill={INK}>
          {t("resembles the element ONE DOWN + ONE RIGHT", "us element jaisa jo ONE DOWN + ONE RIGHT hai")}
        </T>
      </Fade>

      {/* beat 2 — red-margin: the classic pairs, drawn as a mini grid */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 70 110 L 70 225" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={280} y={140} size={11} fill={MUTED} anchor="end">P2</T>
        <T x={400} y={205} size={11} fill={MUTED} anchor="end">P3</T>
      </Fade>
      {ROW1.map((c, i) => (
        <Fade key={c.sym} on={beat >= 2} delay={dl(2, 0.7 + i * 0.2)}>
          <Rect x={c.x} y={110} width={CELL_W} height={CELL_H} fill="none" stroke={INK} strokeWidth={2} />
          <T x={c.x + CELL_W / 2} y={141} size={20} fill={INK} weight={800}>{c.sym}</T>
        </Fade>
      ))}
      {ROW2.map((c, i) => (
        <Fade key={c.sym} on={beat >= 2} delay={dl(2, 1.3 + i * 0.2)}>
          <Rect x={c.x} y={175} width={CELL_W} height={CELL_H} fill="none" stroke={AMBER_DARK} strokeWidth={2} />
          <T x={c.x + CELL_W / 2} y={206} size={20} fill={INK} weight={800}>{c.sym}</T>
        </Fade>
      ))}
      {[0, 1, 2].map((i) => (
        <Draw
          key={i}
          on={beat >= 2}
          delay={dl(2, 1.9 + i * 0.2)}
          d={arrowD(ROW1[i].x + 95, 158, ROW1[i].x + 133, 177)}
          stroke={GREEN}
          sw={2.4}
          dur={0.4}
        />
      ))}

      {/* beat 3 — why: size shifts */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={245} size={13} fill={INK}>
          {t("size ↑ down a group; size ↓ across to the right", "size ↑ group mein neeche; size ↓ right ki taraf across")}
        </T>
      </Fade>

      {/* beat 4 — the near-cancellation */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={268} size={13} weight={700} fill={AMBER_DARK}>
          {t("shifts nearly cancel ⇒ similar size & charge/radius", "shifts lagbhag cancel ⇒ similar size aur charge/radius")}
        </T>
      </Fade>

      {/* beat 5 — charge density dictates chemistry */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={291} size={13} weight={700} fill={GREEN}>
          {"charge density dictates chemistry ⇒ Li ~ Mg, not Li ~ Na"}
        </T>
      </Fade>

      {/* beat 6 — the evidence */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={314} size={12} fill={INK}>
          {t("Li & Mg → normal oxides (not peroxide like Na)", "Li aur Mg → normal oxides (Na jaisa peroxide nahi)")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={540} y={334} size={12} fill={INK}>
          {t("Be & Al → amphoteric, covalent-leaning compounds", "Be aur Al → amphoteric, covalent-leaning compounds")}
        </T>
      </Fade>

      {/* beat 7 — closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={250} y={350} w={580} h={36} fill={GREEN} textFill="#fff" size={14} script={false}>
          {t("draw down-one, right-one — read off the partner", "down-one, right-one banao — partner padh lo")}
        </Chip>
      </Fade>
    </Scene>
  );
}
