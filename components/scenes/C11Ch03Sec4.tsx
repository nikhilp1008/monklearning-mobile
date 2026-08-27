/**
 * C11 Chemistry Ch03 · Section 4 — "Mendeleev's law and the Moseley correction"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 9.64, 22.7, 36.86, 51.03, 61.87, 76.12, 88.06, 94.12]):
 *  0 title + underline
 *  1 red-margin: Mendeleev's Law (1869) — f(atomic WEIGHT)
 *  2 red-margin: Modern Law (Moseley, ~1913) — f(atomic NUMBER, Z), green
 *  3 lock mnemonic: Mendeleev→weight / Modern→number chips + red ✗ "never swap"
 *  4 assumption note: weight quietly assumed master variable
 *  5 three cracks by weight order (all ✗, red) — Ar/K, Te/I, Co/Ni
 *  6 same three pairs re-ordered by Z (all ✓, green) — same row, old vacates
 *  7 new heading: why the swap is deep, not cosmetic
 *  8 closing green stamp: electron count fixed by Z ⇒ Z is the honest ruler
 *
 * Layout plan:
 *  b1 | red bar + text (16,w700)   | T st  | x94..374  y110..128 (bl 122)
 *  b2 | red bar + text (16,w700,green) | T st | x94..462 y152..170 (bl 164)
 *  b3 | 2 chips + red X + label    | Chip  | x120..960 y192..226; X c(540,209)
 *  b4 | assumption note (script15) | T mid | x?..?     y259..286 (bl 278)
 *  b5/6 | 3 rows (vacate-swap)     | T mid | x?..?     y308..397 (bl 320/356/392)
 *  b7 | heading (18,w800,ink)      | T mid | x?..?     y414..432 (bl 428)
 *  b7 | underline (amber)          | Draw  | y436 x360..720
 *  b8 | closing stamp (green)      | Chip  | x160..920 y446..486
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
  INK,
  MUTED,
  AMBER,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

function PairRow({
  beat,
  dl,
  k,
  y,
  weightText,
  zText,
}: {
  beat: number;
  dl: (k: number, d: number) => number;
  k: number;
  y: number;
  weightText: string;
  zText: string;
}) {
  return (
    <>
      <Fade on={beat === 5} delay={dl(5, 0.4 + k * 0.5)}>
        <T x={540} y={y} size={16} weight={700} fill={RED}>
          {weightText}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.4 + k * 0.5)}>
        <T x={540} y={y} size={16} weight={700} fill={GREEN}>
          {zText}
        </T>
      </Fade>
    </>
  );
}

export default function C11Ch03Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("two laws, one crucial swap", "do laws, ek crucial swap")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 400 88 C 460 84, 620 84, 680 88" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — Mendeleev's Law: f(atomic WEIGHT) */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M 70 98 L 70 134" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={94} y={122} size={16} weight={700} fill={INK} anchor="start">
          {t("Mendeleev (1869): f(atomic WEIGHT)", "Mendeleev (1869): f(atomic WEIGHT)")}
        </T>
      </Fade>

      {/* beat 2 — Modern Law (Moseley): f(atomic NUMBER, Z) */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 70 140 L 70 176" stroke={RED} sw={4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={94} y={164} size={16} weight={700} fill={GREEN} anchor="start">
          {t("Modern · Moseley (~1913): f(atomic NUMBER, Z)", "Modern · Moseley (~1913): f(atomic NUMBER, Z)")}
        </T>
      </Fade>

      {/* beat 3 — lock the pair; never swap */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={120} y={192} w={280} h={34} fill="#FFFEFB" stroke={INK} textFill={INK} size={15} script={false}>
          {t("Mendeleev → weight", "Mendeleev → weight")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <Chip x={680} y={192} w={280} h={34} fill="#FFFEFB" stroke={GREEN} textFill={GREEN} size={15} script={false}>
          {t("Modern → number (Z)", "Modern → number (Z)")}
        </Chip>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 1.4)} d="M 528 197 L 552 221 M 552 197 L 528 221" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.9)}>
        <T x={540} y={248} size={12} fill={RED} script>
          {t("never swap!", "kabhi swap mat karo!")}
        </T>
      </Fade>

      {/* beat 4 — the quiet assumption */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={278} size={15} fill={INK} script>
          {t("quietly assumed WEIGHT was the master variable", "chupchaap maan liya WEIGHT hi master variable hai")}
        </T>
      </Fade>

      {/* beats 5/6 — three cracks by weight, healed by Z (same row, swaps content) */}
      <PairRow
        beat={beat}
        dl={dl}
        k={0}
        y={320}
        weightText={t("weight order: K(39.1) before Ar(39.9) ✗", "weight order: K(39.1) before Ar(39.9) ✗")}
        zText={t("Z order: Ar(18) before K(19) ✓", "Z order: Ar(18) before K(19) ✓")}
      />
      <PairRow
        beat={beat}
        dl={dl}
        k={1}
        y={356}
        weightText={t("weight order: I(126.9) before Te(127.6) ✗", "weight order: I(126.9) before Te(127.6) ✗")}
        zText={t("Z order: Te(52) before I(53) ✓", "Z order: Te(52) before I(53) ✓")}
      />
      <PairRow
        beat={beat}
        dl={dl}
        k={2}
        y={392}
        weightText={t("weight order: Ni(58.7) before Co(58.9) ✗", "weight order: Ni(58.7) before Co(58.9) ✗")}
        zText={t("Z order: Co(27) before Ni(28) ✓", "Z order: Co(27) before Ni(28) ✓")}
      />

      {/* beat 7 — new heading */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={428} size={18} weight={800} fill={INK}>
          {t("why the swap is deep, not cosmetic", "swap deep hai, cosmetic nahi")}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1)} d="M 360 436 C 430 433, 650 433, 720 436" stroke={AMBER} sw={2.2} dur={0.5} />

      {/* beat 8 — closing insight */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <Chip x={160} y={446} w={760} h={40} fill={GREEN} textFill="#fff" size={15} script={false}>
          {t("electron count is fixed by Z ⇒ Z is the honest ruler", "electron count Z se fix hota hai ⇒ Z hi honest ruler hai")}
        </Chip>
      </Fade>
    </Scene>
  );
}
