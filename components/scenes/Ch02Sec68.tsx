/**
 * Ch02 · Section 68 — "Example 2 [NEET speed trap]: the missing factor of v"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 21.3, 35, 59.8, 84.7, 109.5, 133.7, 152.6]):
 *  0 title + problem line
 *  1 options row
 *  2 two-routes header
 *  3 left panel: the hasty route (dv/dx)
 *  4 right panel: the master key
 *  5 work card: the √x cancellation → 8
 *  6 ring B, cross A, verdict line
 *  7 green cue: v² linear in x ⇒ half the slope
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  chips y110..146: A x80..390 · B x410..650 · C x670..790 · D x810..930
 *  b2 line cx540 bl 180
 *  b3 panel x70..520 y200..330 (hdr bl 222 · l1 bl 252 · l2 bl 280 · l3 bl 306)
 *  b4 panel x560..1030 y200..330 (hdr bl 222 · l1 bl 252 · l2 bl 280)
 *  b5 card x140..940 y350..420 (bl 390)
 *  b6 ring c(530,128) rx130 ry24 · cross A · line cx540 bl 450
 *  b7 | bar x56 y480..560 · lines st x72 bl 500 / 526 / 552
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
  ringD,
  crossD,
  INK,
  MUTED,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec68({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — half a master key is none */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example 2 [NEET] — the missing factor of v",
            "Example 2 [NEET] — v ka gayab factor"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 7)}>
        <T x={540} y={84} size={12} fill={MUTED} script>
          {t(
            "along the x-axis, v = 4√x (SI) — the acceleration is?",
            "x-axis par, v = 4√x (SI) — acceleration kitna?"
          )}
        </T>
      </Fade>

      {/* beat 1 — the options */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <Chip x={80} y={110} w={310} h={36} fill={CREAM} stroke={INK} textFill={INK} size={12} script={false}>
          {t("A · not constant, grows with x", "A · constant nahi, x se badhta")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.2)}>
        <Chip x={410} y={110} w={240} h={36} fill={CREAM} stroke={INK} textFill={INK} size={12} script={false}>
          {t("B · 8 m/s², constant", "B · 8 m/s², constant")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <Chip x={670} y={110} w={120} h={36} fill={CREAM} stroke={INK} textFill={INK} size={12} script={false}>
          C · 4
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.6)}>
        <Chip x={810} y={110} w={120} h={36} fill={CREAM} stroke={INK} textFill={INK} size={12} script={false}>
          D · 2
        </Chip>
      </Fade>

      {/* beat 2 — the whole question */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={540} y={180} size={12} fill={MUTED} script>
          {t(
            "two routes, side by side — that is the whole question",
            "do raaste, aamne-saamne — poora sawaal yahi hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — the hasty route */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.6)}
        d="M 82 200 h 426 q 12 0 12 12 v 106 q 0 12 -12 12 h -426 q -12 0 -12 -12 v -106 q 0 -12 12 -12"
        stroke={RED}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={295} y={222} size={12} fill={RED} script>
          {t("the hasty route", "jaldbaaz raasta")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.5)}>
        <T x={295} y={252} size={14} fill={INK} weight={700}>
          a = dv⁄dx = 2⁄√x ✗
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 9)}>
        <T x={295} y={280} size={12} fill={RED} script>
          {t("'depends on x, not constant' → option A", "'x par nirbhar, constant nahi' → option A")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 15)}>
        <T x={295} y={306} size={11} fill={MUTED} script>
          {t(
            "feels like reasonable calculus — but dv⁄dx is not acceleration",
            "calculus jaisa lagta hai — par dv⁄dx acceleration hai hi nahi"
          )}
        </T>
      </Fade>

      {/* beat 4 — the master key */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.6)}
        d="M 572 200 h 446 q 12 0 12 12 v 106 q 0 12 -12 12 h -446 q -12 0 -12 -12 v -106 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={795} y={222} size={12} fill={GREEN} script>
          {t("the master key", "master key")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.5)}>
        <T x={795} y={252} size={14} fill={INK} weight={700}>
          {t("a = v·dv⁄dx — the v is NOT optional", "a = v·dv⁄dx — v vaikalpik NAHI hai")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 12)}>
        <T x={795} y={280} size={11} fill={MUTED} script>
          {t(
            "drop it → wrong units, a quantity nobody asked for",
            "hataao → galat units, aisi cheez jo kisi ne poochhi nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — the cancellation */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 152 350 h 776 q 12 0 12 12 v 46 q 0 12 -12 12 h -776 q -12 0 -12 -12 v -46 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={540} y={390} size={15} fill={INK} weight={700}>
          {t(
            "dv⁄dx = 2⁄√x → a = (4√x)·(2⁄√x) = 8 — the √x cancels completely",
            "dv⁄dx = 2⁄√x → a = (4√x)·(2⁄√x) = 8 — √x poora kat jaata hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — B, and the x vanished */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d={ringD(530, 128, 132, 25)}
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 2)}
        d={crossD(80, 110, 310, 36)}
        stroke={RED}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={540} y={450} size={12} fill={GREEN} script>
          {t(
            "answer B: 8 m/s², constant — the x vanished; the trap said 'grows with x'",
            "jawaab B: 8 m/s², constant — x gayab ho gaya; trap kehta tha 'x se badhta'"
          )}
        </T>
      </Fade>

      {/* beat 7 — the two-second cue */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 56 480 v 80" stroke={GREEN} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={72} y={500} size={13} fill={GREEN} script anchor="start">
          {t(
            "cue: v² linear in x ⇒ a is CONSTANT — square first: v² = 16x",
            "cue: v², x mein linear ⇒ a CONSTANT — pehle varg karo: v² = 16x"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={72} y={526} size={13} fill={GREEN} script anchor="start">
          {t(
            "because v·dv⁄dx = ½·d(v²)⁄dx — a is half the slope of v² against x",
            "kyunki v·dv⁄dx = ½·d(v²)⁄dx — a hai v² banaam x ki dhalaan ka aadha"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 14)}>
        <T x={72} y={552} size={13} fill={GREEN} script anchor="start">
          {t("half of 16 = 8 — no calculus at all", "16 ka aadha = 8 — bina kisi calculus ke")}
        </T>
      </Fade>
    </Scene>
  );
}
