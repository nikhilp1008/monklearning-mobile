/**
 * P12Ch05 · Section 53 — "Speed trap: a magnet sealed inside a closed surface"
 * Subtopic: Magnetism and Gauss's Law
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * BOARD REWRITTEN (2026-08-21) — the artwork taught a different lesson.
 *
 * WHAT THE BOARD USED TO TEACH: why magnetic field lines cannot cross
 * (a unique tangent at every point, the compass-needle contradiction).
 * The narration is not about crossing field lines at all.
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: the NEET speed trap — a bar magnet
 * sealed entirely inside a closed spherical surface. "Closed surface" is
 * the trigger; Gauss's law gives zero immediately. The board now carries
 * the tempting wrong argument (the N pole is inside, so surely flux is
 * pumped out), both refutations, and the harder variants that still give
 * zero.
 *
 * BEAT MAP (8 reveals → gates 0..7, nothing above 7):
 *   0  "compute absolutely nothing"              title + framing line
 *   1  "the situation, reasoning on either side" magnet inside the sphere, drawn
 *   2  "two words decide everything"             the question, with the words rung
 *   3  "closed surface ⇒ the law applies"        ∮B·dA = 0 ⇒ net flux zero
 *   4  "the trap, and it is a good one"          the red wrong-argument panel
 *   5  "two answers to that"                     the green quick + deep answers
 *   6  "it survives a harder version"            fragment / no pole / whole magnet
 *   7  "pure pattern recognition"                the reflex, as a chip
 */

import React from "react";
import { G, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

function ellD(cx: number, cy: number, rx: number, ry: number): string {
  return `M ${cx - rx} ${cy} A ${rx} ${ry} 0 1 0 ${cx + rx} ${cy} A ${rx} ${ry} 0 1 0 ${cx - rx} ${cy}`;
}

export default function P12Ch05Sec53({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const mini = (cx: number, on: boolean, delay: number, kind: "frag" | "none" | "full") => (
    <G>
      <Draw on={on} delay={delay} d={ellD(cx, 452, 30, 30)} stroke={INK} sw={1.8} dur={0.5} />
      <Fade on={on} delay={delay + 0.4}>
        {kind === "frag" && (
          <>
            <Rect x={cx - 12} y={444} width={24} height={16} fill="#ffe4e6" stroke={RED} strokeWidth={1.5} />
            <T x={cx} y={457} size={9.5} fill={RED} weight={900}>N</T>
          </>
        )}
        {kind === "full" && (
          <>
            <Rect x={cx - 20} y={444} width={20} height={16} fill="#ffe4e6" stroke={RED} strokeWidth={1.5} />
            <Rect x={cx} y={444} width={20} height={16} fill="#dcfce7" stroke={GREEN_DARK} strokeWidth={1.5} />
            <T x={cx - 10} y={457} size={9.5} fill={RED} weight={900}>N</T>
            <T x={cx + 10} y={457} size={9.5} fill={GREEN_DARK} weight={900}>S</T>
          </>
        )}
      </Fade>
    </G>
  );

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.35)}>
        <T x={540} y={50} size={25} fill={RED} script>
          {t("Speed trap: a magnet inside a closed surface", "Speed trap: closed surface ke andar magnet")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.7)}
        d="M 260 64 C 500 60, 660 68, 820 62" stroke={RED} sw={2.2} dur={0.7} />
      <Fade on={beat >= 0} delay={dl(0, 2.4)}>
        <T x={540} y={88} size={13.5} fill={INK_LIGHT} weight={700}>
          {t("The correct method is to compute absolutely nothing. An integral here means you misread it.",
             "Sahi tareeka hai — kuch bhi calculate mat karo. Integral shuru kiya matlab galat padha.")}
        </T>
      </Fade>

      {/* ---------------- beat 1 — the situation ---------------- */}
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d={ellD(250, 268, 130, 130)} stroke={INK} sw={2.2} dur={0.9} />
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <Rect x={200} y={254} width={50} height={28} fill="#ffe4e6" stroke={RED} strokeWidth={2} />
        <Rect x={250} y={254} width={50} height={28} fill="#dcfce7" stroke={GREEN_DARK} strokeWidth={2} />
        <T x={225} y={274} size={13} fill={RED} weight={900}>N</T>
        <T x={275} y={274} size={13} fill={GREEN_DARK} weight={900}>S</T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d={ellD(250, 268, 158, 62)} stroke={AMBER_DARK} sw={1.9} dur={0.9} />
      <Draw on={beat >= 1} delay={dl(1, 1.7)} d={ellD(250, 268, 190, 96)} stroke={AMBER_DARK} sw={1.9} dur={0.9} />
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={250} y={418} size={13} fill={INK_LIGHT} weight={800}>
          {t("closed spherical surface S", "closed spherical surface S")}
        </T>
      </Fade>

      {/* ---------------- beat 2 — the question ---------------- */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={510} y={128} size={14} fill={RED} weight={800} anchor="start">
          {t("THE QUESTION", "SAWAAL")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={510} y={158} size={13.5} fill={INK} weight={700} anchor="start">
          {t("A bar magnet lies entirely inside a closed spherical surface.",
             "Ek bar magnet poori tarah ek closed spherical surface ke andar hai.")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <T x={510} y={182} size={13.5} fill={INK} weight={700} anchor="start">
          {t("Find the net magnetic flux through that sphere.",
             "Us sphere se net magnetic flux nikaalo.")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={510} y={206} size={12.5} fill={MUTED} weight={700} anchor="start">
          {t("two words in there decide everything", "isme do shabd hi sab tay kar dete hain")}
        </T>
      </Fade>

      {/* ---------------- beat 3 — the law settles it ---------------- */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d={ringD(815, 152, 84, 15)} stroke={RED} sw={2.1} dur={0.6} />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={510} y={250} size={14} fill={RED} weight={800} anchor="start">
          {t("'CLOSED SURFACE' ⇒ GAUSS'S LAW APPLIES", "'CLOSED SURFACE' ⇒ GAUSS'S LAW LAGTA HAI")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={510} y={284} size={19} fill={INK} weight={900} anchor="start">∮ B · dA = 0</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={720} y={284} size={16} fill={GREEN} weight={900} anchor="start">
          {t("⇒ net flux = 0. Done.", "⇒ net flux = 0. Bas.")}
        </T>
      </Fade>

      {/* ---------------- beat 4 — the trap ---------------- */}
      <Draw on={beat >= 4} delay={dl(4, 0.2)} d="M 510 302 H 1040 V 372 H 510 Z" stroke={RED} sw={1.9} dur={0.7} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={528} y={326} size={13} fill={RED} weight={800} anchor="start">
          {t("THE TEMPTING WRONG ARGUMENT", "LUBHAANE WAALA GALAT TARK")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={528} y={352} size={12.5} fill={RED} weight={600} anchor="start">
          {t("“the N pole is inside, lines come out of N — so the flux must be positive”",
             "“N pole andar hai, lines N se nikalti hain — toh flux positive hona chahiye”")}
        </T>
      </Fade>

      {/* ---------------- beat 5 — what settles it ---------------- */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 510 384 H 1040 V 470 H 510 Z" stroke={GREEN_DARK} sw={1.9} dur={0.7} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={528} y={408} size={13} fill={GREEN_DARK} weight={800} anchor="start">
          {t("WHAT ACTUALLY SETTLES IT", "ASLI JAWAAB")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={528} y={432} size={12.5} fill={INK} weight={700} anchor="start">
          {t("quick — the S pole is inside too, and takes back whatever N pumps out",
             "jaldi waala — S pole bhi andar hai, jo N bahar bhejta hai wo wapas le leta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={528} y={456} size={12.5} fill={GREEN_DARK} weight={800} anchor="start">
          {t("deep — every field line is a closed loop, so it re-enters exactly as often as it exits",
             "gehra waala — har field line closed loop hai, jitni baar nikalti hai utni baar wapas aati hai")}
        </T>
      </Fade>

      {/* ---------------- beat 6 — the harder versions ---------------- */}
      {mini(110, beat >= 6, dl(6, 0.3), "frag")}
      {mini(250, beat >= 6, dl(6, 0.5), "none")}
      {mini(390, beat >= 6, dl(6, 0.7), "full")}
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={110} y={506} size={11.5} fill={MUTED} weight={700}>{t("a fragment", "ek tukda")}</T>
        <T x={250} y={506} size={11.5} fill={MUTED} weight={700}>{t("no pole at all", "koi pole hi nahi")}</T>
        <T x={390} y={506} size={11.5} fill={MUTED} weight={700}>{t("the whole magnet", "poora magnet")}</T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={470} y={500} size={15} fill={GREEN} weight={900} anchor="start">
          {t("⇒ Φ = 0 in every case —", "⇒ har case mein Φ = 0 —")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={470} y={524} size={12.5} fill={INK} weight={700} anchor="start">
          {t("there is no isolated pole anywhere to act as a net source.",
             "kahin bhi koi isolated pole nahi jo net source ban sake.")}
        </T>
      </Fade>

      {/* beat 7 */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={40} y={540} w={1000} h={44} fill={GREEN} textFill="#ffffff" size={13.5}>
          {t("★ 'net flux' + 'closed surface' ⇒ zero. Write it down and spend the ten saved seconds on real arithmetic.",
             "★ 'net flux' + 'closed surface' ⇒ zero. Likho aur bache hue das second asli arithmetic par lagao.")}
        </Chip>
      </Fade>
    </Scene>
  );
}
