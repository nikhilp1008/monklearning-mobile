/**
 * Ch01 · Section 17 — "The principle of homogeneity: physics' spell-checker"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.1, 29.8, 47.9, 72.7, 92.6, 107.4, 131.6]):
 *  0 title + "same nature only" subline
 *  1 "3 kg + 5 s" written, then crossed out — gibberish
 *  2 the rule box: HOMOGENEITY — every added term identical dimensions
 *  3 green panel: s = ut + ½at², [L][L][L] ✓ · red panel: P = F×A mismatch ✗
 *  4 the three powers: check · derive · convert
 *  5 proofreading a friend's answer
 *  6 the 5-second catch, underlined
 *  7 the spell-checker verdict
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title (script 28, red)   | T mid | x220..860 y30..76 (bl 62)
 *  b0 | subline (script 15)      | T mid | x330..750 y87..114 (bl 106)
 *  b1 | "3 kg + 5 s" (sans 22)   | T mid | x195..305 y135..159 (bl 152) + cross
 *  b1 | note (script 15, red)    | T st  | x360..690 y133..160 (bl 152)
 *  b2 | rule box                 | Draw  | x60..1020 y176..228 · line (script 17) bl 206
 *  b3 | green panel x60..520 y270..430: eq (sans 20) bl 302 · [L]×3 bl 344 at
 *       x222/285/340 · verdict bl 402 — red panel x560..1020: eq bl 302 ·
 *       rows (sans 15) x600 st bl 344/376 · verdict bl 402
 *  b4 | chips (h40) y450..490: x60..300 / 330..580 / 610..810 · note x840 st bl 476
 *  b5 | line (script 15) x60..525 bl 524
 *  b6 | catch (sans 16) x60..420 bl 560 · underline y574
 *  b7 | verdict (script 16, green) x480..896 bl 560 · underline y578
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
  crossD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the most powerful idea */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={62} size={28} fill={RED} script>
          {t("homogeneity — physics' spell-checker", "homogeneity — physics ka spell-checker")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={106} size={15} fill={MUTED} script>
          {t(
            "you can only add things of the same nature",
            "sirf same nature ki cheezein jud sakti hain"
          )}
        </T>
      </Fade>

      {/* beat 1 — gibberish */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={250} y={152} size={22} fill={INK} weight={700}>
          3 kg + 5 s
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.5)}
        d={crossD(198, 136, 104, 22)}
        stroke={RED}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 5.5)}>
        <T x={360} y={152} size={15} fill={RED} script anchor="start">
          {t("gibberish — the question is broken", "bakwaas — sawaal hi toota hua hai")}
        </T>
      </Fade>

      {/* beat 2 — the rule */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 1)}
        d="M 72 176 h 936 q 12 0 12 12 v 28 q 0 12 -12 12 h -936 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.9}
      />
      <Fade on={beat >= 2} delay={dl(2, 2.5)}>
        <T x={540} y={206} size={17} fill={INK} script>
          {t(
            "HOMOGENEITY: every added / equated term carries identical dimensions",
            "HOMOGENEITY: har juda / barabar term ki dimensions same honi chahiye"
          )}
        </T>
      </Fade>

      {/* beat 3 — one lives, one dies */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.5)}
        d="M 72 270 h 436 q 12 0 12 12 v 136 q 0 12 -12 12 h -436 q -12 0 -12 -12 v -136 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={290} y={302} size={20} fill={INK} weight={700}>
          s = u t + ½ a t²
        </T>
      </Fade>
      {[222, 285, 340].map((x, i) => (
        <Fade key={x} on={beat >= 3} delay={dl(3, 4 + i * 2)}>
          <T x={x} y={344} size={16} fill={GREEN} weight={700}>
            [L]
          </T>
        </Fade>
      ))}
      <Fade on={beat >= 3} delay={dl(3, 10)}>
        <T x={290} y={402} size={15} fill={GREEN} script>
          {t("every term matches — may be right ✓", "har term match — sahi ho sakti hai ✓")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 13)}
        d="M 572 270 h 436 q 12 0 12 12 v 136 q 0 12 -12 12 h -436 q -12 0 -12 -12 v -136 q 0 -12 12 -12"
        stroke={RED}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={beat >= 3} delay={dl(3, 14)}>
        <T x={790} y={302} size={20} fill={INK} weight={700}>
          P = F × A
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 16)}>
        <T x={600} y={344} size={15} fill={INK} weight={600} anchor="start">
          {t("left:  [M L⁻¹ T⁻²]", "left:  [M L⁻¹ T⁻²]")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 18)}>
        <T x={600} y={376} size={15} fill={INK} weight={600} anchor="start">
          {t("right: [M L³ T⁻²]", "right: [M L³ T⁻²]")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 20)}>
        <T x={790} y={402} size={15} fill={RED} script>
          {t("MISMATCH — dead on arrival ✗", "MISMATCH — shuru mein hi khatam ✗")}
        </T>
      </Fade>

      {/* beat 4 — three powers from one rule */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <Chip x={60} y={450} w={240} h={40} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("1 · CHECK an equation", "1 · equation CHECK karo")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <Chip x={330} y={450} w={250} h={40} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("2 · DERIVE the unknown", "2 · anjaana DERIVE karo")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7)}>
        <Chip x={610} y={450} w={200} h={40} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("3 · CONVERT units", "3 · units CONVERT karo")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 12)}>
        <T x={840} y={476} size={14} fill={MUTED} script anchor="start">
          {t("no physics needed", "bina physics kiye")}
        </T>
      </Fade>

      {/* beat 5 — the proofreading picture */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={60} y={524} size={15} fill={INK} script anchor="start">
          {t(
            "proofreading a friend's answer? match recipe-left with recipe-right",
            "dost ka answer proofread karna? left ki recipe = right ki recipe, bas"
          )}
        </T>
      </Fade>

      {/* beat 6 — caught in five seconds */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={60} y={560} size={16} fill={INK} weight={600} anchor="start">
          {t("P: [ML⁻¹T⁻²]  vs  F·A: [ML³T⁻²]  → caught in 5 s", "P: [ML⁻¹T⁻²]  vs  F·A: [ML³T⁻²]  → 5 second mein pakda")}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 8)}
        d="M 60 574 C 160 570, 300 576, 420 572"
        stroke={RED}
        sw={2}
        dur={0.5}
      />

      {/* beat 7 — what a spell-checker is */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={480} y={560} size={16} fill={GREEN} script anchor="start">
          {t(
            "doesn't say what's right — says instantly what CAN'T be",
            "kya sahi hai nahi batata — kya NAHI ho sakta, turant batata hai"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 8)}
        d="M 480 578 C 600 574, 760 580, 896 576"
        stroke={GREEN}
        sw={2}
        dur={0.5}
      />
    </Scene>
  );
}
