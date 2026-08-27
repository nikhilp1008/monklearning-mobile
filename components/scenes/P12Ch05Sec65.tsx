/**
 * P12Ch05 · Section 65 — "Speed trap: soft iron or steel for the core?"
 * Subtopic: Permanent Magnets and Electromagnets
 *
 * BOARD REWRITTEN 2026-08-21 — the artwork taught a different topic from the voice.
 *
 * WHAT THE BOARD USED TO TEACH: why heating a magnet past the Curie
 * temperature destroys its field — k_B T ≫ exchange energy, ferromagnet →
 * paramagnet. The Curie temperature is never mentioned in this narration.
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: the NEET speed trap "soft iron or steel
 * for the core of an electromagnet, and why". Soft iron, because an
 * electromagnet must produce a strong field while current flows AND lose it the
 * moment the current stops; high permeability satisfies the first, low
 * retentivity the second, and together they are a thin loop. The trap is
 * linguistic — "hard" in everyday speech versus magnetically hard, which means
 * high coercivity and is exactly wrong for a core. Closes on the mnemonic
 * "Soft for Switching, Hard for Holding". The board is now two comparison
 * panels with their real B–H loops drawn underneath.
 *
 * BEAT MAP (n_reveals = 8 → valid gates 0..7):
 *   0  "a NEET speed trap, pure recall"            title + underline
 *   1  "two panels side by side, properties listed" both panels + both loops
 *   2  "which for the core — and importantly, WHY" the question band
 *   3  "soft iron — it must do two separate things" the answer + the two demands
 *   4  "high permeability, low retentivity → thin"  the two ticks + ring on the thin loop
 *   5  "students pick steel because steel sounds hard" the linguistic trap
 *   6  "magnetically hard = high coercivity"        why a steel core sticks; cross on the wide loop
 *   7  "Soft for Switching, Hard for Holding"       the two roles + the mnemonic chip
 */

import React from "react";
import { Line, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, crossD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

/** closed B–H hysteresis loop */
function loopD(cx: number, cy: number, hw: number, hh: number, c: number, r: number): string {
  return [
    `M ${cx + hw} ${cy - hh}`,
    `C ${cx + hw * 0.4} ${cy - hh} ${cx + c} ${cy - r * 1.15} ${cx} ${cy - r}`,
    `C ${cx - c * 0.9} ${cy - r * 0.85} ${cx - c} ${cy - r * 0.35} ${cx - c} ${cy}`,
    `C ${cx - c} ${cy + r * 0.55} ${cx - hw * 0.45} ${cy + hh * 0.8} ${cx - hw} ${cy + hh}`,
    `C ${cx - hw * 0.4} ${cy + hh} ${cx - c} ${cy + r * 1.15} ${cx} ${cy + r}`,
    `C ${cx + c * 0.9} ${cy + r * 0.85} ${cx + c} ${cy + r * 0.35} ${cx + c} ${cy}`,
    `C ${cx + c} ${cy - r * 0.55} ${cx + hw * 0.45} ${cy - hh * 0.8} ${cx + hw} ${cy - hh}`,
  ].join(" ");
}

export default function P12Ch05Sec65({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* ---------------- beat 0 — title ---------------- */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={44} size={25} fill={RED} script>
          {t("Soft iron or steel for the core?", "Core ke liye soft iron ya steel?")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.5)}
        d="M 330 60 C 490 56, 650 64, 760 58" stroke={RED} sw={2.2} dur={0.6} />

      {/* ---------------- beat 1 — the two panels ---------------- */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Rect x={40} y={70} width={480} height={222} rx={12} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
        <Rect x={560} y={70} width={480} height={222} rx={12} fill={CREAM} stroke={RED} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={280} y={96} size={16} fill={GREEN} weight={900}>SOFT IRON</T>
        <T x={800} y={96} size={16} fill={RED} weight={900}>STEEL</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={280} y={122} size={13.5} fill={INK} weight={700}>
          {t("permeability — HIGH", "permeability — HIGH")}
        </T>
        <T x={800} y={122} size={13.5} fill={INK} weight={700}>
          {t("magnetically HARD", "magnetically HARD")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={280} y={144} size={13.5} fill={INK} weight={700}>
          {t("retentivity — LOW", "retentivity — LOW")}
        </T>
        <T x={800} y={144} size={13.5} fill={INK} weight={700}>
          {t("coercivity — HIGH", "coercivity — HIGH")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={280} y={166} size={13.5} fill={INK_LIGHT} weight={700}>
          {t("loses its field at switch-off", "switch-off par field chhod deta hai")}
        </T>
        <T x={800} y={166} size={13.5} fill={INK_LIGHT} weight={700}>
          {t("keeps its field after switch-off", "switch-off ke baad bhi field rakhta hai")}
        </T>
      </Fade>
      {/* the loops themselves */}
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <Line x1={172} y1={232} x2={388} y2={232} stroke={MUTED} strokeWidth={1.3} />
        <Line x1={280} y1={188} x2={280} y2={276} stroke={MUTED} strokeWidth={1.3} />
        <Line x1={692} y1={232} x2={908} y2={232} stroke={MUTED} strokeWidth={1.3} />
        <Line x1={800} y1={188} x2={800} y2={276} stroke={MUTED} strokeWidth={1.3} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 2.6)} d={loopD(280, 232, 100, 40, 16, 28)} stroke={GREEN} sw={2.4} dur={1} />
      <Draw on={beat >= 1} delay={dl(1, 3.2)} d={loopD(800, 232, 100, 40, 62, 32)} stroke={RED} sw={2.4} dur={1} />

      {/* ---------------- beat 2 — the question ---------------- */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 40 304 H 1040 V 348 H 40 Z" stroke={AMBER_DARK} sw={1.9} dur={0.8} />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={540} y={332} size={15} fill={AMBER_DARK} weight={800}>
          {t("Which is better for the CORE of an electromagnet — and WHY? (a bare answer earns nothing)",
             "Electromagnet ke CORE ke liye kaun behtar — aur KYUN? (khaali answer se marks nahi)")}
        </T>
      </Fade>

      {/* ---------------- beat 3 — the answer and the two demands ---------------- */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={48} y={378} size={15} fill={GREEN} weight={900} anchor="start">
          {t("ANSWER · SOFT IRON — two separate demands",
             "ANSWER · SOFT IRON — do alag demands")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={54} y={402} size={13} fill={INK} weight={700} anchor="start">
          {t("① a strong field while the current flows", "① current chalte waqt strong field")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={54} y={424} size={13} fill={INK} weight={700} anchor="start">
          {t("② no field the moment the current stops", "② current rukte hi field bilkul khatam")}
        </T>
      </Fade>

      {/* ---------------- beat 4 — soft iron meets both ---------------- */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={54} y={450} size={13} fill={GREEN} weight={800} anchor="start">
          {t("high permeability  ✓ satisfies ①", "high permeability  ✓ ① pura")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={54} y={472} size={13} fill={GREEN} weight={800} anchor="start">
          {t("low retentivity    ✓ satisfies ②", "low retentivity    ✓ ② pura")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.3)} d={ringD(280, 232, 120, 54)} stroke={GREEN} sw={2.2} dur={0.9} />
      <Fade on={beat >= 4} delay={dl(4, 2.1)}>
        <T x={280} y={288} size={12.5} fill={GREEN} weight={800}>
          {t("together — a THIN loop", "dono milkar — THIN loop")}
        </T>
      </Fade>

      {/* ---------------- beat 5 — the linguistic trap ---------------- */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={568} y={378} size={15} fill={RED} weight={900} anchor="start">
          {t("THE TRAP · A WORD, NOT A FACT", "TRAP · SHABD KA, PHYSICS KA NAHI")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={574} y={402} size={13} fill={INK} weight={700} anchor="start">
          {t("students pick steel because steel sounds strong and hard",
             "log steel chunte hain kyunki steel strong aur hard lagta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={574} y={424} size={12.5} fill={AMBER_DARK} weight={800} anchor="start">
          {t("the everyday meaning of “hard” has hijacked the technical one",
             "“hard” ka rozmarra matlab technical matlab ko kha gaya")}
        </T>
      </Fade>

      {/* ---------------- beat 6 — magnetically hard = high coercivity ---------------- */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={574} y={450} size={13} fill={RED} weight={800} anchor="start">
          {t("magnetically HARD = high coercivity — exactly wrong here",
             "magnetically HARD = high coercivity — yahaan bilkul galat")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={574} y={472} size={12.5} fill={INK_LIGHT} weight={700} anchor="start">
          {t("a steel core stays magnetised after you cut the current",
             "steel core current kaatne ke baad bhi magnetised rehta hai")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.3)} d={crossD(700, 192, 200, 80)} stroke={RED} sw={2.4} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={800} y={288} size={12.5} fill={RED} weight={800}>
          {t("the doorbell sticks · the crane never lets go",
             "doorbell chipak jaayegi · crane chhodega hi nahi")}
        </T>
      </Fade>

      {/* ---------------- beat 7 — keep the two roles apart ---------------- */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={48} y={512} size={14} fill={RED} weight={800} anchor="start">
          {t("STEEL → permanent magnets, where you want the field to persist",
             "STEEL → permanent magnets, jahaan field bana rehna chahiye")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={48} y={534} size={14} fill={GREEN} weight={800} anchor="start">
          {t("SOFT IRON → electromagnets, where you want it to vanish",
             "SOFT IRON → electromagnets, jahaan field gayab hona chahiye")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <Chip x={40} y={548} w={1000} h={44} fill={GREEN} textFill="#ffffff" size={16}>
          {t("★ Soft for Switching, Hard for Holding",
             "★ Soft for Switching, Hard for Holding")}
        </Chip>
      </Fade>
    </Scene>
  );
}
