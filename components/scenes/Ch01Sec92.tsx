/**
 * Ch01 · Section 92 — "Quick revision: the memory aids that survive exam pressure"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en, 10): [0, 13.5, 33.6, 52, 68.5, 86.9, 110.7, 128.3, 146.6, 166.1]
 *  0 title · 1..8 mantra rows (zig-zag two columns) · 9 the through-line box
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  left col st x60 bl 110/190/270/350 (+gloss +26) · right col st x560
 *  b9 | box x60..1020 y400..580 · lines bl 436/470/508/544
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec92({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const mantra = (k: number, x: number, bl: number, quote: string, gloss: string, size = 16) => (
    <G>
      <Fade on={beat >= k} delay={dl(k, 1.5)}>
        <T x={x} y={bl} size={size} fill={AMBER_DARK} script anchor="start">
          {quote}
        </T>
      </Fade>
      <Fade on={beat >= k} delay={dl(k, 8)}>
        <T x={x + 20} y={bl + 26} size={12} fill={MUTED} script anchor="start">
          {gloss}
        </T>
      </Fade>
    </G>
  );

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={24} fill={INK} script>
          {t(
            "the sentences that survive exam pressure",
            "wo vaakya jo exam ke dabaav mein bache rehte hain"
          )}
        </T>
      </Fade>

      {/* beats 1–8 — the mantras */}
      {mantra(1, 60, 110,
        t("“only like adds to like”", "“barabar hi barabar mein judta hai”"),
        t("homogeneity — the free five-second check", "homogeneity — muft paanch-second waali jaanch"))}
      {mantra(2, 560, 110,
        t("“bigger unit, smaller number”", "“badi unit, chhoti sankhya”"),
        t("ly → parsec: divide, don't multiply", "ly → parsec: bhaag do, guna nahi"))}
      {mantra(3, 60, 190,
        t("“plus for minus”", "“minus ke liye plus”"),
        t("in a difference the absolute errors still ADD", "difference mein bhi absolute errors JUDTE hain"))}
      {mantra(4, 560, 190,
        t("“the power multiplies”", "“power guna karti hai”"),
        t("a square doubles · a square root halves", "square dugna karta · square root aadha"))}
      {mantra(5, 60, 270,
        t("“times counts figures, plus counts places”", "“guna figures ginta, jod places ginta”"),
        t("ask the operation before counting anything", "kuchh bhi ginne se pehle operation poochho"))}
      {mantra(6, 560, 270,
        t("“main − vernier · pitch ⁄ circle · obs − zero”", "“main − vernier · pitch ⁄ circle · obs − zero”"),
        t("one rule, every sign — never two cases", "ek niyam, har sign — do maamle kabhi nahi"), 14)}
      {mantra(7, 60, 350,
        t("“there and back — halve the track”", "“jaakar aur aakar — raasta aadha karo”"),
        t("vt ⁄ 2 · AU < ly < parsec · radians always", "vt ⁄ 2 · AU < ly < parsec · radians hamesha"))}
      {mantra(8, 560, 350,
        t("“zero error is systematic — measure, correct”", "“zero error systematic hai — naapo, sudhaaro”"),
        t("the archer in the corner; averaging won't help", "kone waala teerandaaz; averaging kaam nahi aayegi"), 14)}

      {/* beat 9 — the through-line */}
      <Draw
        on={beat >= 9}
        delay={dl(9, 0.8)}
        d="M 72 400 h 936 q 12 0 12 12 v 156 q 0 12 -12 12 h -936 q -12 0 -12 -12 v -156 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.8}
        dur={1.1}
      />
      <Fade on={beat >= 9} delay={dl(9, 2.5)}>
        <T x={540} y={436} size={17} fill={INK} weight={700}>
          {t(
            "every digit you write is a claim about reality",
            "tumhara likha har digit haqeeqat ke baare mein ek daava hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 8)}>
        <T x={540} y={470} size={13} fill={AMBER_DARK} script>
          {t(
            "dimensions say WHAT · sig figs say HOW WELL · ± says HOW WRONG · least count says what the instrument could ever tell",
            "dimensions batate KYA · sig figs batate KITNA ACHHA · ± batata KITNA GALAT · least count batata instrument kya keh sakta tha"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 15)}>
        <T x={540} y={508} size={14} fill={GREEN} script>
          {t(
            "six subtopics — one idea wearing different clothes",
            "chhe subtopics — ek hi vichaar, alag-alag kapde pehne"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 20)}>
        <T x={540} y={544} size={15} fill={GREEN} script>
          {t(
            "measure honestly — and say exactly how honestly you measured",
            "imaandaari se naapo — aur theek-theek batao kitni imaandaari se naapa"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
