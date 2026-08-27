/**
 * Ch05 · Section 36 — "The deepest law, and the mechanical equivalent of heat"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 2, 26.8, 51.7, 76.5, 100.2, 122.5] · dur 136.2 —
 *        b0 and b1 last ~1s in en → en-tiny delays;
 *        hi [0, 14.6, 39.0, 63.8, 88.7, 113.5, 137.8, 161.8] · dur 173.4):
 *  0 title + subtitle
 *  1 currency picture
 *  2 dam chain: PE → KE → electrical → light+heat
 *  3 the law chip + forever line
 *  4 the 40 J promise paid
 *  5 Joule chip: 1 cal = 4.186 J
 *  6 Joule's bridge line
 *  7 note band
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl82
 *  b1 | cx540 bl115 / bl141
 *  b2 | chips y170..214 w200: x80/310/540/790 · arrows y192 · green cx540 bl285
 *  b3 | chip x180..900 y310..350 · script cx540 bl378
 *  b4 | cx540 bl410
 *  b5 | chip x390..690 y430..468 · script cx540 bl494
 *  b6 | cx540 bl524
 *  b7 | bar x66 y545..585 · line st x84 bl566
 */

import React from "react";
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
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title (en: ~1s beat) */}
      <Fade on={beat >= 0} delay={dl(0, en ? 0.2 : 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("The Deepest Law — and Joule's Exchange Rate", "Sabse Gehra Law — aur Joule ka Exchange Rate")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, en ? 0.5 : 7)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t(
            "see energy as one substance, and this law is almost inevitable",
            "energy ko ek hi cheez samjho, aur ye law lagbhag atal hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — the currency picture (en: ~1s beat) */}
      <Fade on={beat >= 1} delay={dl(1, en ? 0.2 : 3)}>
        <T x={540} y={115} size={13} fill={INK} script>
          {t(
            "₹ → $ → ¥ — total wealth unchanged in the exchange",
            "₹ → $ → ¥ — badalne mein kul daulat nahi badalti"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, en ? 0.5 : 13)}>
        <T x={540} y={141} size={12.5} fill={MUTED} script>
          {t(
            "none created, none destroyed — only the form changed",
            "na bana, na nasht hua — sirf roop badla"
          )}
        </T>
      </Fade>

      {/* beat 2 — the dam chain */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <Chip x={80} y={170} w={200} h={44} fill={CREAM} stroke={INK} textFill={INK} size={11.5} script={false}>
          {t("PE — reservoir water", "PE — tanki ka paani")}
        </Chip>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 3)} d={arrowD(284, 192, 306, 192)} stroke={MUTED} sw={2} dur={0.25} />
      <Fade on={beat >= 2} delay={dl(2, 3.5)}>
        <Chip x={310} y={170} w={200} h={44} fill={CREAM} stroke={INK} textFill={INK} size={11.5} script={false}>
          {t("KE — falling water", "KE — girta paani")}
        </Chip>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 5)} d={arrowD(514, 192, 536, 192)} stroke={MUTED} sw={2} dur={0.25} />
      <Fade on={beat >= 2} delay={dl(2, 5.5)}>
        <Chip x={540} y={170} w={220} h={44} fill={CREAM} stroke={INK} textFill={INK} size={11.5} script={false}>
          {t("ELECTRICAL — turbine", "ELECTRICAL — turbine")}
        </Chip>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 7)} d={arrowD(764, 192, 786, 192)} stroke={MUTED} sw={2} dur={0.25} />
      <Fade on={beat >= 2} delay={dl(2, 7.5)}>
        <Chip x={790} y={170} w={220} h={44} fill={CREAM} stroke={INK} textFill={INK} size={11.5} script={false}>
          {t("LIGHT + HEAT — home", "LIGHT + HEAT — ghar")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 12)}>
        <T x={540} y={285} size={13} fill={GREEN} script>
          {t(
            "four transformations — the total preserved at every single step",
            "chaar transformations — har ek step par kul barqarar"
          )}
        </T>
      </Fade>

      {/* beat 3 — the law */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <Chip x={180} y={310} w={720} h={40} fill={CREAM} stroke={GREEN} textFill={INK} size={13.5} script={false}>
          {t(
            "energy: never created, never destroyed — only transformed",
            "energy: na banti hai, na nasht hoti hai — sirf badalti hai"
          )}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 12)}>
        <T x={540} y={378} size={13} fill={GREEN} script>
          {t(
            "isolated system: total constant FOREVER — exactly, no exceptions ever found",
            "isolated system: kul HAMESHA constant — bilkul, aaj tak koi apvaad nahi"
          )}
        </T>
      </Fade>

      {/* beat 4 — the promise paid */}
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={540} y={410} size={13} fill={AMBER_DARK} script>
          {t(
            "friction's 40 J → exactly 40 J of heat — a costume change, nothing vanished",
            "friction ke 40 J → bilkul 40 J heat — costume badla, kuchh gayab nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — Joule's number */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <Chip x={390} y={430} w={300} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          1 cal = 4.186 J ≈ 4.2 J
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 10)}>
        <T x={540} y={494} size={13} fill={INK} script>
          {t(
            "Joule: fixed work → fixed heat, the same ratio every time",
            "Joule: tay work → tay heat, har baar wahi anupat"
          )}
        </T>
      </Fade>

      {/* beat 6 — the bridge */}
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={540} y={524} size={13} fill={GREEN} script>
          {t(
            "Joule's bridge between the mechanical and thermal worlds — a measured exchange rate",
            "mechanical aur thermal duniya ke beech Joule ka pul — napa hua exchange rate"
          )}
        </T>
      </Fade>

      {/* beat 7 — the note */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 545 v 40" stroke={AMBER_DARK} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={84} y={566} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "only the form ever changes — the quantity never does",
            "sirf roop badalta hai — matra kabhi nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
