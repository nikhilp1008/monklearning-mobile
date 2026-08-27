/**
 * Ch01 · Section 64 — "Choosing the right tool, and the assumptions underneath"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.6, 23.4, 37.7, 49.5, 59.3, 76.5, 101.4]):
 *  0 title
 *  1 table → metre scale (finer = wasted)
 *  2 pipe bore → vernier (earns its keep)
 *  3 wire, slide → screw gauge (nothing else resolves)
 *  4 trade-off chip: finer ⇒ smaller range
 *  5 range-vs-resolution bars
 *  6 four limiting conditions, numbered
 *  7 link back: zero error = systematic · the cure · LC = limiting error
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  rows bl 100/140/180: object script 15 st x80 · → · instrument 16 st x430 · note 13 st x660
 *  b4 | chip x240..840 y210..246
 *  b5 | bar1 x80..980 y272..288, label st x80 bl 312 · bar2 x80..140 y330..346, label st x160 bl 342
 *  b6 | badges c(76, bl−5) r12 · lines script 13 st x100 bl 390/420/450/480
 *  b7 | lines bl 516/544/572 mid 540
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  arrowD,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec64({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const toolRow = (k: number, bl: number, obj: string, tool: string, note: string) => (
    <G>
      <Fade on={beat >= k} delay={dl(k, 1)}>
        <T x={80} y={bl} size={15} fill={INK} script anchor="start">{obj}</T>
      </Fade>
      <Draw on={beat >= k} delay={dl(k, 2.5)} d={arrowD(360, bl - 5, 410, bl - 5)} stroke={INK_LIGHT} sw={1.8} dur={0.4} />
      <Fade on={beat >= k} delay={dl(k, 3.2)}>
        <T x={430} y={bl} size={16} fill={AMBER_DARK} weight={700} anchor="start">{tool}</T>
      </Fade>
      <Fade on={beat >= k} delay={dl(k, 6)}>
        <T x={660} y={bl} size={13} fill={MUTED} script anchor="start">{note}</T>
      </Fade>
    </G>
  );

  const badge = (n: number, bl: number, k: number) => (
    <G>
      <Draw
        on={beat >= k}
        delay={dl(k, 0.5 + (n - 1) * 5)}
        d={`M 64 ${bl - 5} A 12 12 0 1 1 88 ${bl - 5} A 12 12 0 1 1 64 ${bl - 5}`}
        stroke={AMBER}
        sw={2}
        dur={0.3}
      />
      <Fade on={beat >= k} delay={dl(k, 0.9 + (n - 1) * 5)}>
        <T x={76} y={bl - 0.5} size={13} fill={AMBER_DARK} weight={800}>{n}</T>
      </Fade>
    </G>
  );

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={24} fill={INK} script>
          {t(
            "choosing the right tool — and the fine print",
            "sahi auzaar chunna — aur baareek shartein"
          )}
        </T>
      </Fade>

      {/* beats 1–3 — the three bands */}
      {toolRow(1, 100,
        t("length of a table", "mez ki lambai"),
        t("metre scale", "metre scale"),
        t("finer would be wasted effort", "zyada baareek = bekaar mehnat"))}
      {toolRow(2, 140,
        t("pipe bore · small cylinder", "pipe ka bore · chhota belan"),
        t("vernier callipers", "vernier callipers"),
        t("the band where it earns its keep", "yahi patti jahan wo roti kamata hai"))}
      {toolRow(3, 180,
        t("wire · glass slide", "taar · kaanch ki slide"),
        t("screw gauge", "screw gauge"),
        t("nothing else resolves it at all", "aur kuchh resolve kar hi nahi sakta"))}

      {/* beat 4 — the trade-off */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <Chip x={240} y={210} w={600} h={36} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={15}>
          {t(
            "finer instrument ⇒ smaller range — precision isn't free",
            "jitna baareek instrument ⇒ utni chhoti range — precision muft nahi"
          )}
        </Chip>
      </Fade>

      {/* beat 5 — range vs resolution bars */}
      <Draw on={beat >= 5} delay={dl(5, 1)} d="M 80 272 h 900 v 16 h -900 z" stroke={INK} sw={1.8} dur={1} />
      <Fade on={beat >= 5} delay={dl(5, 2.5)}>
        <T x={80} y={312} size={13} fill={INK} script anchor="start">
          {t(
            "metre scale — spans 1 m · resolves only 1 mm",
            "metre scale — 1 m tak failta · sirf 1 mm resolve karta"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 6)} d="M 80 330 h 60 v 16 h -60 z" stroke={GREEN} sw={1.8} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={160} y={344} size={13} fill={GREEN} script anchor="start">
          {t(
            "screw gauge — spans ~2 cm · resolves 0.01 mm",
            "screw gauge — ~2 cm tak · 0.01 mm resolve karta"
          )}
        </T>
      </Fade>

      {/* beat 6 — the four conditions */}
      {badge(1, 390, 6)}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={100} y={390} size={13} fill={INK} script anchor="start">
          {t(
            "least count = BEST-case precision — an uncorrected zero error makes it worse",
            "least count = sabse achhi haalat — bina sudhara zero error use bigaad deta"
          )}
        </T>
      </Fade>
      {badge(2, 420, 6)}
      <Fade on={beat >= 6} delay={dl(6, 6.5)}>
        <T x={100} y={420} size={13} fill={INK} script anchor="start">
          {t(
            "one reading still carries ± LC (some conventions: ± LC/2) — error never vanishes",
            "ek reading mein phir bhi ± LC hai (kuchh mein ± LC/2) — error gaayab nahi hoti"
          )}
        </T>
      </Fade>
      {badge(3, 450, 6)}
      <Fade on={beat >= 6} delay={dl(6, 11.5)}>
        <T x={100} y={450} size={13} fill={INK} script anchor="start">
          {t(
            "the vernier formula assumes uniform divisions — a worn scale breaks it",
            "vernier ka formula ek-saman divisions maanta hai — ghisa scale use tod deta"
          )}
        </T>
      </Fade>
      {badge(4, 480, 6)}
      <Fade on={beat >= 6} delay={dl(6, 16.5)}>
        <T x={100} y={480} size={13} fill={INK} script anchor="start">
          {t(
            "backlash & over-tightening spoil screw readings — the ratchet exists exactly for this",
            "backlash aur zyada kasna reading bigaadte — ratchet theek isi liye hota hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the link back */}
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={540} y={516} size={14} fill={RED} script>
          {t(
            "zero error = a textbook SYSTEMATIC error — no averaging removes it (remember the archer)",
            "zero error = kitaabi SYSTEMATIC error — koi averaging nahi hataati (teerandaaz yaad karo)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 11)}>
        <T x={540} y={544} size={14} fill={GREEN} script>
          {t(
            "the cure: close the jaws, read the offset, correct every reading",
            "ilaaj: jabde band karo, offset padho, har reading sudhaaro"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 19)}>
        <T x={540} y={572} size={13} fill={AMBER_DARK} script>
          {t(
            "and least-count uncertainty = the limiting error of a single reading — now in your hands",
            "aur least-count uncertainty = ek reading ki limiting error — ab tumhare haath mein"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
