/**
 * Ch02 · Section 12 — "Example 2 [NEET speed trap]: 40 and 60 over equal halves"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 15.6, 30, 54.9, 70.9, 89.1, 109.1]):
 *  0 title + problem line (3 Ts so "equal distance" can be rung later)
 *  1 picture: two equal boxes, 40 vs 60 · "same length d each"
 *  2 options row: A 50 · B 48 · C 52 · D 24
 *  3 red note: the eye's answer 50 + arrow at chip A
 *  4 ring "equal distance" in the problem line
 *  5 computation card: harmonic → 48 km/h
 *  6 ring chip B · cross chip A · green checks line
 *  7 green cue: harmonic < arithmetic always
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title bl 52 · problem bl 92 (T1 st 260 · T2 st ~526 · T3 st ~628, per language) ·
 *  ring c(576/561, 88) rx 62/57 ry 11
 *  b1 | boxes x180..530 / x550..900 y120..180 · texts bl 155 · label cx540 bl 200
 *  b2 | chips y230..266: A x150..330 · B x370..550 · C x590..770 · D x810..990
 *  b3 | bar x66 y300..356 · lines st x84 bl 320 / 346 · arrow (210,294)→(240,273)
 *  b4 | note cx540 bl 386
 *  b5 | card x240..840 y405..480 · formula cx540 bl 445 · sub cx540 bl 468
 *  b6 | ring c(460,248) rx100 ry22 · cross chip A · checks cx540 bl 510
 *  b7 | bar x56 y540..592 · lines st x72 bl 560 / 586
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
  ringD,
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

export default function Ch02Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // problem line segments — split so "equal distance" can be rung precisely
  const p1 = t("first half at 40 km/h, second half — ", "pehla aadha 40 par, doosra aadha — ");
  const p2 = t("equal distance", "barabar doori");
  const p3 = t(" — at 60: average speed?", " — 60 par: average speed?");
  const x2 = en ? 526 : 514;
  const x3 = en ? 630 : 612;
  const ringCx = en ? 576 : 561;
  const ringRx = en ? 62 : 57;

  return (
    <Scene>
      {/* beat 0 — the trap MCQ */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t(
            "Example 2 [NEET] — 40 and 60 over equal halves",
            "Example 2 [NEET] — 40 aur 60, barabar aadhon par"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.8)}>
        <T x={260} y={92} size={13} fill={MUTED} script anchor="start">
          {p1}
        </T>
        <T x={x2} y={92} size={13} fill={MUTED} script anchor="start">
          {p2}
        </T>
        <T x={x3} y={92} size={13} fill={MUTED} script anchor="start">
          {p3}
        </T>
      </Fade>

      {/* beat 1 — the picture lays it bare */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d="M 192 120 h 326 q 12 0 12 12 v 36 q 0 12 -12 12 h -326 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={355} y={155} size={15} fill={INK} weight={700}>
          d @ 40 km/h
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.5)}
        d="M 562 120 h 326 q 12 0 12 12 v 36 q 0 12 -12 12 h -326 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 4.5)}>
        <T x={725} y={155} size={15} fill={INK} weight={700}>
          d @ 60 km/h
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={540} y={200} size={11} fill={MUTED} script>
          {t(
            "same length d each — that is the whole question",
            "dono ki lambaai d — poora sawaal yahi hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — the options */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <Chip x={150} y={230} w={180} h={36} fill={CREAM} stroke={INK} textFill={INK} size={15} script={false}>
          A · 50
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <Chip x={370} y={230} w={180} h={36} fill={CREAM} stroke={INK} textFill={INK} size={15} script={false}>
          B · 48
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <Chip x={590} y={230} w={180} h={36} fill={CREAM} stroke={INK} textFill={INK} size={15} script={false}>
          C · 52
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4.4)}>
        <Chip x={810} y={230} w={180} h={36} fill={CREAM} stroke={INK} textFill={INK} size={15} script={false}>
          D · 24
        </Chip>
      </Fade>

      {/* beat 3 — why 50 seduces */}
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d="M 66 300 v 56" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={84} y={320} size={14} fill={RED} script anchor="start">
          {t(
            "the eye jumps: (40+60)/2 = 50 — option A, feels right",
            "aankh kudti hai: (40+60)/2 = 50 — option A, sahi lagta hai"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 3)}
        d={arrowD(210, 294, 240, 273)}
        stroke={RED}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={84} y={346} size={14} fill={RED} script anchor="start">
          {t(
            "wrong: the arithmetic mean is for equal TIMES only",
            "galat: arithmetic mean sirf equal TIMES ke liye hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — two words decide everything */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 1)}
        d={ringD(ringCx, 88, ringRx, 11)}
        stroke={AMBER}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={540} y={386} size={12} fill={AMBER_DARK} script>
          {t(
            "those two words ARE the question — Procedure B: 'which pieces are equal?'",
            "wahi do shabd sawaal hain — Procedure B: 'kya barabar hai?'"
          )}
        </T>
      </Fade>

      {/* beat 5 — the honest computation */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 252 405 h 576 q 12 0 12 12 v 51 q 0 12 -12 12 h -576 q -12 0 -12 -12 v -51 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 2.2)}>
        <T x={540} y={442} size={18} fill={INK} weight={700}>
          v̄ = 2·40·60 ⁄ (40+60) = 4800 ⁄ 100 = 48 km/h
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={540} y={468} size={11} fill={MUTED} script>
          {t("equal distances ⇒ harmonic mean", "equal distances ⇒ harmonic mean")}
        </T>
      </Fade>

      {/* beat 6 — B, and both checks pass */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d={ringD(460, 248, 100, 22)}
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 2)}
        d={crossD(150, 230, 180, 36)}
        stroke={RED}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={540} y={510} size={12} fill={GREEN} script>
          {t(
            "between 40 & 60 ✓ · closer to the slower (48 → 40) ✓ · 50 fails that",
            "40 aur 60 ke beech ✓ · dheeme ke paas (48 → 40) ✓ · 50 yahin fail"
          )}
        </T>
      </Fade>

      {/* beat 7 — the speed cue */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 56 540 v 52" stroke={GREEN} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={72} y={560} size={13} fill={GREEN} script anchor="start">
          {t(
            "cue: harmonic < arithmetic — ALWAYS",
            "cue: harmonic < arithmetic — HAMESHA"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={72} y={586} size={13} fill={GREEN} script anchor="start">
          {t(
            "'equal distances, two speeds' → cross the simple average, pick the smaller",
            "'equal distances, do speeds' → seedha average kaato, chhota wala uthao"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
