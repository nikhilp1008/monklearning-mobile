/**
 * Ch05 · Section 8 — "Why holding a heavy bag is zero work"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.4, 30.0, 53.3, 78.1, 79.1, 103.9, 120.9] · dur 145.7 —
 *        b4 lasts ~1s in en → en-tiny delays;
 *        hi [0, 13.1, 29.8, 52.4, 76.2, 90.5, 115.4, 131.9] · dur 156.6):
 *  0 title + subtitle
 *  1 friend holding bag on head, sweat, everyday verdict
 *  2 physics: F large, d = 0 → W = 0 exactly
 *  3 the two-question test (amber panel), "not effort" red line
 *  4 bridge chip: no displacement → no work
 *  5 hook argument: wall + hook + hanging bag
 *  6 green line: work = energy transferred during motion
 *  7 red verdict: "work done by WHICH force?"
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl84
 *  b1 | bag x125..195 y115..145 · head c(160,160) r14 · body/arms/legs to y300
 *     | sweat strokes x185..195 · labels cx230 bl330 / bl356
 *  b2 | chips x420..560 / x580..680 y130..166 · line st x420 bl210
 *     | chip "=0 exactly" x620..790 y182..218
 *  b3 | red line st x420 bl272 · panel x420..740 y280..362
 *     | header cx580 bl302 · q1 st x440 bl330 · q2 st x440 bl354
 *  b4 | chip x430..700 y374..410 · script cx565 bl436
 *  b5 | wall x800 y120..260 + hatches · hook (800,168) · rope · bag x775..825 y200..240
 *     | green cx900 bl285 · muted cx895 bl311
 *  b6 | green line cx540 bl474
 *  b7 | bar x66 y500..558 · lines st x84 bl520 / bl546
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
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec8({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Why Holding a Heavy Bag is ZERO Work", "Bhaari Bag Pakde Rehna ZERO Work Kyun")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={540} y={84} size={13} fill={MUTED} script>
          {t(
            "the day-one question — get it right and the chapter opens up",
            "pehle din ka sawaal — sahi kiya to poora chapter khul jaata hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — the friend and the bag */}
      <Draw on={beat >= 1} delay={dl(1, 1)} d="M 125 145 v -24 q 0 -6 6 -6 h 58 q 6 0 6 6 v 24 Z" stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 1.8)} d="M 146 160 a 14 14 0 1 0 28 0 a 14 14 0 1 0 -28 0" stroke={INK} sw={2.2} dur={0.5} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.5)}
        d="M 160 174 V 250 M 160 195 L 135 148 M 160 195 L 185 148 M 160 250 L 140 300 M 160 250 L 180 300"
        stroke={INK}
        sw={2.2}
        dur={1}
      />
      <Draw on={beat >= 1} delay={dl(1, 4.5)} d="M 186 168 q 3 6 -1 10 M 194 156 q 3 6 -1 10" stroke={MUTED} sw={1.6} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={230} y={330} size={13} fill={AMBER_DARK} script>
          {t("10 full minutes — trembling, sweating", "poore 10 minute — kaanpta, paseena")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={230} y={356} size={13} fill={MUTED} script>
          {t("everyday language: 'of course he did!'", "roz ki bhasha: 'bilkul kiya, dekho to!'")}
        </T>
      </Fade>

      {/* beat 2 — the flat zero */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <Chip x={420} y={130} w={140} h={36} fill={CREAM} stroke={INK} textFill={INK} size={15} script={false}>
          F = large ✓
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5.5)}>
        <Chip x={580} y={130} w={100} h={36} fill={CREAM} stroke={RED} textFill={INK} size={15} script={false}>
          d = 0
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={420} y={210} size={15} fill={INK} anchor="start" weight={700}>
          W = F × d = (large) × 0
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 13)}>
        <Chip x={620} y={182} w={170} h={36} fill={CREAM} stroke={RED} textFill={INK} size={15} script={false}>
          {t("= 0, exactly", "= 0, exactly")}
        </Chip>
      </Fade>

      {/* beat 3 — the two-question test */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={420} y={272} size={13} fill={RED} script anchor="start">
          {t(
            "physics is not measuring effort — no sweat, no burn",
            "physics mehnat naap hi nahi rahi — na paseena, na jalan"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 5)} d="M 420 280 H 740 V 362 H 420 Z" stroke={AMBER_DARK} sw={1.8} dur={0.7} />
      <Fade on={beat >= 3} delay={dl(3, 6.2)}>
        <T x={580} y={302} size={13} fill={AMBER_DARK} script>
          {t("it cares about exactly two things:", "sirf do cheezon se matlab hai:")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 9)}>
        <T x={440} y={330} size={13} fill={INK} script anchor="start">
          {t("1 · is a force acting?", "1 · force lag raha hai kya?")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 13)}>
        <T x={440} y={354} size={13} fill={INK} script anchor="start">
          {t("2 · did the point it acts on move?", "2 · jis point par lagta hai, wo hila kya?")}
        </T>
      </Fade>

      {/* beat 4 — the bridge (en: ~1s beat) */}
      <Fade on={beat >= 4} delay={dl(4, en ? 0.2 : 1)}>
        <Chip x={430} y={374} w={270} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={15} script={false}>
          {t("no displacement → no work", "no displacement → no work")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, en ? 0.5 : 6)}>
        <T x={565} y={436} size={12.5} fill={MUTED} script>
          {t(
            "one end of the bridge missing — nothing crosses",
            "pul ka ek sira gayab — kuchh paar nahi hota"
          )}
        </T>
      </Fade>

      {/* beat 5 — the hook argument */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 1)}
        d="M 800 150 V 290 M 800 165 l 14 -11 M 800 195 l 14 -11 M 800 225 l 14 -11 M 800 255 l 14 -11 M 800 285 l 14 -11"
        stroke={INK}
        sw={2}
        dur={0.8}
      />
      <Draw on={beat >= 5} delay={dl(5, 2)} d="M 800 198 q -12 4 -8 14" stroke={INK} sw={2.4} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 2.8)} d="M 792 212 L 765 232 M 740 232 v 32 q 0 6 6 6 h 38 q 6 0 6 -6 v -32 Z" stroke={INK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={905} y={315} size={13} fill={GREEN} script>
          {t("the hook supplies nothing — ever", "hook kuchh nahi de raha — kabhi bhi")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 14)}>
        <T x={905} y={341} size={13} fill={MUTED} script>
          {t(
            "tiredness = about muscles, not the bag",
            "thakan = muscles ki baat, bag ki nahi"
          )}
        </T>
      </Fade>

      {/* beat 6 — the bookkeeping */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={540} y={474} size={13.5} fill={GREEN} script>
          {t(
            "work = energy a force transfers (or steals) while the object moves — not effort",
            "work = jo energy ek force object ko de (ya cheene) jab wo hilta hai — mehnat nahi"
          )}
        </T>
      </Fade>

      {/* beat 7 — by WHICH force */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 500 v 58" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={84} y={520} size={13} fill={RED} script anchor="start">
          {t(
            "'the work done' is an incomplete sentence — work done by WHICH force?",
            "'the work done' adhoora vaakya hai — work done by WHICH force?"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={84} y={546} size={13} fill={RED} script anchor="start">
          {t(
            "gravity, friction, tension, push — same body, different work, some zero",
            "gravity, friction, tension, push — same body, alag-alag work, kuchh zero"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
