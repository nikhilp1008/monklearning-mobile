/**
 * Ch05 · Section 64 — "Pitfalls, and the vertical-circle method" (tips)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.18, 36.01, 60.84, 81.83, 106.67, 118.36, 130.39, 152.83] · dur 177.66;
 *        hi [0, 10.07, 34.9, 59.73, 79.45, 104.28, 114.35, 126.29, 149.25] · dur 174.08):
 *  0 title · 1 P1 speed not constant · 2 P2 string only pulls · 3 P3 wrong min speed
 *  4 P4 wrong centripetal direction · 5 method chips (radial → energy → T=0)
 *  6 memory aids · 7 P5 tension-before-completion (late, closes Sec 63's loop)
 *  8 master-method closing band — final section of the vertical-circle application
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl80
 *  P1: lbl st x80 bl112 · lines st x90 bl140/166 · P2: bl206 · bl234/260
 *  P3: bl300 · bl328/354
 *  P4: st x570 bl112 · bl140/166 · P5(b7, late): bl206 · bl234/260
 *  b5 | chips x566..1030 y300..338 · note cx798 bl366
 *  b6 | cx798 bl404 / bl430
 *  b8 | bar x66 y460..570 · lines st x84 bl480/506/532
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

export default function Ch05Sec64({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Pitfalls & the Vertical-Circle Method", "Pitfalls & Vertical-Circle Method")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={80} size={13} fill={MUTED} script>
          {t(
            "five pitfalls — then the three-step method that closes the chapter",
            "paanch pitfalls — phir wo three-step method jo chapter band karti hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — P1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={80} y={112} size={13} fill={RED} script anchor="start">
          {t("pitfall 1 — speed is NOT constant", "pitfall 1 — speed CONSTANT nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={90} y={140} size={12.5} fill={INK} script anchor="start">
          {t(
            "slowest at the top, fastest at the bottom — always",
            "top par sabse dheeli, bottom par sabse tez — hamesha"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 13)}>
        <T x={90} y={166} size={12.5} fill={RED} script anchor="start">
          {t(
            "treat it as uniform circular motion → wrong from the start",
            "ise uniform circular motion maano → shuru se hi galat"
          )}
        </T>
      </Fade>

      {/* beat 2 — P2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={80} y={206} size={13} fill={RED} script anchor="start">
          {t("pitfall 2 — a string can only PULL", "pitfall 2 — string sirf KHINCH sakti")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={90} y={234} size={12.5} fill={INK} script anchor="start">
          {t(
            "tension can never go negative — that's WHY T = 0 at the top",
            "tension kabhi negative nahi — isi liye top par T = 0"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 13)}>
        <T x={90} y={260} size={12.5} fill={GREEN} script anchor="start">
          {t(
            "a rod can push too — so its top speed CAN be zero",
            "rod dhakka bhi de sakta — top speed uski zero ho sakti"
          )}
        </T>
      </Fade>

      {/* beat 3 — P3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={80} y={300} size={13} fill={RED} script anchor="start">
          {t("pitfall 3 — the wrong minimum speed", "pitfall 3 — galat minimum speed")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={90} y={328} size={12.5} fill={INK} script anchor="start">
          {t(
            "string: √(5gR) at the bottom · rod: only 2√(gR)",
            "string: bottom par √(5gR) · rod: sirf 2√(gR)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 13)}>
        <T x={90} y={354} size={12.5} fill={MUTED} script anchor="start">
          {t(
            "different objects, different numbers — never swap them",
            "alag objects, alag numbers — kabhi mat badlo"
          )}
        </T>
      </Fade>

      {/* beat 4 — P4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={570} y={112} size={13} fill={RED} script anchor="start">
          {t("pitfall 4 — centripetal direction, mishandled", "pitfall 4 — centripetal direction galat")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={580} y={140} size={12.5} fill={INK} script anchor="start">
          {t(
            "always toward the centre — down at top, up at bottom",
            "hamesha centre ki taraf — top par neeche, bottom par upar"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 13)}>
        <T x={580} y={166} size={12.5} fill={GREEN} script anchor="start">
          {t(
            "set up EACH radial equation for where you actually are",
            "har radial equation apni asli position ke hisaab se banao"
          )}
        </T>
      </Fade>

      {/* beat 5 — the method chips */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <Chip x={566} y={300} w={140} h={38} fill={CREAM} stroke={INK} textFill={INK} size={12} script={false}>
          {t("1 · radial eqn", "1 · radial eqn")}
        </Chip>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3)} d={arrowD(710, 319, 720, 319)} stroke={MUTED} sw={2} dur={0.25} />
      <Fade on={beat >= 5} delay={dl(5, 3.5)}>
        <Chip x={724} y={300} w={166} h={38} fill={CREAM} stroke={INK} textFill={INK} size={12} script={false}>
          {t("2 · energy link", "2 · energy link")}
        </Chip>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 5)} d={arrowD(894, 319, 904, 319)} stroke={MUTED} sw={2} dur={0.25} />
      <Fade on={beat >= 5} delay={dl(5, 5.5)}>
        <Chip x={908} y={300} w={122} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={12} script={false}>
          {t("3 · T=0", "3 · T=0")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={798} y={366} size={12} fill={AMBER_DARK} script>
          {t(
            "T = mv²⁄R + mg cos θ → v² = u² − 2gh → the critical case",
            "T = mv²⁄R + mg cos θ → v² = u² − 2gh → critical case"
          )}
        </T>
      </Fade>

      {/* beat 6 — memory aids */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={798} y={404} size={13} fill={GREEN} script>
          {t(
            "top √(gR) · bottom √(5gR) · always T_bottom − T_top = 6mg",
            "top √(gR) · bottom √(5gR) · hamesha T_bottom − T_top = 6mg"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={798} y={430} size={13} fill={GREEN} script>
          {t(
            "string pulls, rod pushes — that one line settles it",
            "string khinchti hai, rod dhakka deta — bas ek line mein sab tay"
          )}
        </T>
      </Fade>

      {/* beat 7 — P5, the ordering error (arrives late, closes Sec 63's loop) */}
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={570} y={206} size={13} fill={RED} script anchor="start">
          {t("pitfall 5 — tension before completion", "pitfall 5 — completion se pehle tension")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={580} y={234} size={12.5} fill={INK} script anchor="start">
          {t(
            "confirm it stays on the circle FIRST — v_top vs √(gR)",
            "pehle pakka karo circle par hai — v_top vs √(gR)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={580} y={260} size={12.5} fill={RED} script anchor="start">
          {t(
            "reverse the order → a meaningless tension, as in Sec 63",
            "kram ulta karo → bemaani tension, jaisa Sec 63 mein"
          )}
        </T>
      </Fade>

      {/* beat 8 — the master method, closing the vertical-circle application */}
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d="M 66 460 v 110" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 2)}>
        <T x={84} y={480} size={13} fill={GREEN} script anchor="start">
          {t(
            "three steps, in that order — every vertical-circle problem falls",
            "teen steps, usi kram mein — har vertical-circle sawaal gir jaata hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 11)}>
        <T x={84} y={506} size={13} fill={GREEN} script anchor="start">
          {t(
            "keep √(gR), √(3gR), √(5gR) and 6mg on instant recall",
            "√(gR), √(3gR), √(5gR) aur 6mg turant yaad rakho"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 18)}>
        <T x={84} y={532} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "that distinction, and these three steps, close Work, Energy & Power",
            "wahi farq, aur ye teen steps, Work, Energy & Power ko band karte hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
