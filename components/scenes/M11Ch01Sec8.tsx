/**
 * M11 Ch01 · Section 8 — "Advanced: parameter a with n(T) = 1 over the naturals"
 * Canvas 1080×620 · safe x36–1044, y30–596. section_type: worked_examples (ADVANCED).
 *
 * Beats (board_reveal_at_english [0, 17.32, 33.37, 50.86, 70.57, 84.31, 101.97]):
 *  0 title (always-on)
 *  1 SET UP: T = {x∈N : x²-(a+1)x+a=0}, a a real parameter
 *  2 FACTOR: x²-(a+1)x+a = (x-1)(x-a) = 0 ⇒ x=1 or x=a
 *  3 domain rule: x=1 always ∈ N; x=a counts only if a∈N, distinct only if a≠1
 *  4 CASE 1 (card, red — avoid): a∈N,a≠1 ⇒ T={1,a}, n(T)=2
 *  5 CASE 2/3 (cards, green): a=1 ⇒ T={1}; a∉N ⇒ T={1} — both n(T)=1
 *  6 LAND: n(T)=1 ⇔ a=1 OR a∉N
 *
 * Layout plan (estimated render boxes, longer language counts):
 *  b1 | "T = {x∈N : x²-(a+1)x+a=0}" / "a a real parameter" | T st/script | x100 y120/150
 *  b2 | "x²-(a+1)x+a = (x-1)(x-a) = 0" / "⇒ x=1 or x=a" | T mid (18) | x540 y188/218
 *  b3 | "x=1 always ∈ N ✓" / "x=a needs a∈N — distinct needs a≠1" | T mid | x540 y280/308
 *  b4 | card1 (red): header/T=/chip  | T mid + Chip | center255 y340/375/395
 *  b5 | card2,3 (green): header/T=/chip | T mid + Chip | center540/825 y340/375/395
 *  b5 | divider lines between cards   | Draw | x397,682 y330..435
 *  b6 | verdict box, iff statement    | rect+T | x200..880 y500..570
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
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch01Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("for which a is n(T) = 1?", "kis a ke liye n(T) = 1?")}
        </T>
      </Fade>

      {/* beat 1 — set up */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={100} y={120} size={18} fill={INK} anchor="start" weight={700}>
          {"T = {x ∈ N : x² − (a+1)x + a = 0}"}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={100} y={150} size={15} fill={MUTED} script anchor="start">
          {t("a is a real parameter", "a ek real parameter hai")}
        </T>
      </Fade>

      {/* beat 2 — factor the quadratic */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={188} size={18} fill={INK} weight={700}>
          {"x² − (a+1)x + a = (x − 1)(x − a) = 0"}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={540} y={218} size={18} fill={INK} weight={700}>
          {t("⇒   x = 1   or   x = a", "⇒   x = 1   ya   x = a")}
        </T>
      </Fade>

      {/* beat 3 — the domain rule that decides everything */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={280} size={17} fill={GREEN} weight={700}>
          {"x = 1 is always ∈ N ✓"}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={540} y={308} size={15} fill={AMBER_DARK} weight={600}>
          {t(
            "x = a counts only if a ∈ N — distinct only if a ≠ 1",
            "x = a tabhi counts if a ∈ N — distinct tabhi if a ≠ 1"
          )}
        </T>
      </Fade>

      {/* dividers between the three case cards */}
      <Draw on={beat >= 4} d="M 397 330 L 397 435" stroke={MUTED} sw={1.4} delay={dl(4, 0.2)} dur={0.5} />
      <Draw on={beat >= 5} d="M 682 330 L 682 435" stroke={MUTED} sw={1.4} delay={dl(5, 0.2)} dur={0.5} />

      {/* beat 4 — CASE 1 (avoid): a ∈ N, a ≠ 1 */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={255} y={340} size={16} fill={RED} weight={700}>
          {"a ∈ N, a ≠ 1"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <T x={255} y={372} size={18} fill={INK} weight={700}>
          {"T = {1, a}"}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <Chip x={190} y={392} w={130} h={32} fill={RED} textFill="#fff" size={15} script={false}>
          {"n(T) = 2 ✗"}
        </Chip>
      </Fade>

      {/* beat 5 — CASE 2 & 3 (both give n(T)=1) */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={540} y={340} size={16} fill={GREEN} weight={700}>
          {"a = 1"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={540} y={372} size={18} fill={INK} weight={700}>
          {"T = {1}"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.2)}>
        <Chip x={475} y={392} w={130} h={32} fill={GREEN} textFill="#fff" size={15} script={false}>
          {"n(T) = 1 ✓"}
        </Chip>
      </Fade>

      <Fade on={beat >= 5} delay={dl(5, 3.1)}>
        <T x={825} y={340} size={16} fill={GREEN} weight={700}>
          {"a ∉ N"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.9)}>
        <T x={825} y={372} size={18} fill={INK} weight={700}>
          {"T = {1}"}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4.7)}>
        <Chip x={760} y={392} w={130} h={32} fill={GREEN} textFill="#fff" size={15} script={false}>
          {"n(T) = 1 ✓"}
        </Chip>
      </Fade>

      {/* beat 6 — LAND: the iff */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Rect x={200} y={500} width={680} height={78} rx={12} fill={AMBER_DARK} opacity={0.1} stroke={AMBER_DARK} strokeWidth={2} />
        <T x={540} y={534} size={19} fill={INK} weight={800}>
          {"n(T) = 1   ⇔   a = 1   OR   a ∉ N"}
        </T>
        <T x={540} y={562} size={14} fill={AMBER_DARK} script>
          {t(
            "(a is not a natural number greater than 1)",
            "(a, 1 se bada natural number nahi hai)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
