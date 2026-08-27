/**
 * Ch05 · Section 34 — "Pitfalls, and choosing your energy tool" (tips)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.8, 37.6, 62.5, 82.6, 107.4, 132.3, 146.2] · dur 171.0;
 *        hi [0, 11.7, 36.5, 61.4, 81.8, 106.6, 131.4, 144.6] · dur 169.4):
 *  0 title · 1 P1 round trip ≠ 0 · 2 P2 wrong law with friction
 *  3 P3 the minus sign · 4 P4 path length not displacement
 *  5 P5 converted, not destroyed · 6 decision diagram · 7 pro-tip band
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl82
 *  P1: lbl st x80 bl114 · lines st x90 bl142/168 · P2: bl210 · bl238/264
 *  P3: bl306 · bl334/360 · P4: st x570 bl114 · bl142/168 · P5: bl210 · bl238/264
 *  b6 | box x640..900 y295..333 · arrows → chips x580..760 / x790..1030 y375..411
 *  b7 | bar x66 y450..560 · lines st x84 bl470/496/522/548
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

export default function Ch05Sec34({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Pitfalls & Choosing Your Energy Tool", "Pitfalls & Apna Energy Tool Chunna")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t(
            "five vanished marks — then a two-second decision",
            "paanch gayab hote marks — phir do-second ka faisla"
          )}
        </T>
      </Fade>

      {/* beat 1 — P1 */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={80} y={114} size={13} fill={RED} script anchor="start">
          {t("pitfall 1 — friction's round trip", "pitfall 1 — friction ka round trip")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={90} y={142} size={12.5} fill={INK} script anchor="start">
          {t(
            "'closed loop → 0' is conservative-only — a privilege",
            "'closed loop → 0' sirf conservative ka hai — visheshadhikar"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 13)}>
        <T x={90} y={168} size={12.5} fill={RED} script anchor="start">
          {t(
            "friction: negative every leg → round trip ALWAYS negative",
            "friction: har leg par negative → round trip HAMESHA negative"
          )}
        </T>
      </Fade>

      {/* beat 2 — P2 */}
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={80} y={210} size={13} fill={RED} script anchor="start">
          {t("pitfall 2 — the wrong law", "pitfall 2 — galat law")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={90} y={238} size={12.5} fill={INK} script anchor="start">
          {t(
            "any W_nc ≠ 0 → K + U simply is NOT constant",
            "koi bhi W_nc ≠ 0 → K + U bas constant NAHI hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 13)}>
        <T x={90} y={264} size={12.5} fill={RED} script anchor="start">
          {t(
            "switch to W_nc = ΔE — the wrong law is fundamentally wrong",
            "W_nc = ΔE par jao — galat law buniyadi taur par galat hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — P3 */}
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={80} y={306} size={13} fill={RED} script anchor="start">
          {t("pitfall 3 — the minus sign", "pitfall 3 — minus sign")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={90} y={334} size={12.5} fill={INK} script anchor="start">
          {t(
            "W_cons = −ΔU — falling stone: + work, U goes down",
            "W_cons = −ΔU — girta patthar: + work, U neeche"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 12)}>
        <T x={90} y={360} size={12.5} fill={RED} script anchor="start">
          {t(
            "flip that sign → every energy balance flips",
            "wo sign ulta → har energy balance ulta"
          )}
        </T>
      </Fade>

      {/* beat 4 — P4 */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={570} y={114} size={13} fill={RED} script anchor="start">
          {t("pitfall 4 — displacement vs path (Adv.)", "pitfall 4 — displacement vs path (Adv.)")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={580} y={142} size={12.5} fill={INK} script anchor="start">
          {t(
            "heat = f × PATH LENGTH — every metre that slid",
            "heat = f × PATH LENGTH — har metre jo fisla"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 13)}>
        <T x={580} y={168} size={12.5} fill={RED} script anchor="start">
          {t(
            "back-and-forth: net d may be 0 — the heat is not",
            "aage-peechhe: net d 0 ho sakta hai — heat nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — P5 */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={570} y={210} size={13} fill={RED} script anchor="start">
          {t("pitfall 5 — how you write it", "pitfall 5 — likhne ka tareeqa")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={580} y={238} size={12.5} fill={INK} script anchor="start">
          {t(
            "friction doesn't DESTROY energy — it converts it",
            "friction energy NASHT nahi karta — badal deta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 13)}>
        <T x={580} y={264} size={12.5} fill={GREEN} script anchor="start">
          {t(
            "write 'converted to heat', not 'lost' — it wins concept marks",
            "'converted to heat' likho, 'lost' nahi — concept marks milte hain"
          )}
        </T>
      </Fade>

      {/* beat 6 — the decision diagram */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <Chip x={640} y={295} w={260} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={14} script={false}>
          {t("friction or drag ?", "friction ya drag ?")}
        </Chip>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.2)} d={arrowD(720, 337, 665, 371)} stroke={GREEN} sw={2.2} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 2.8)}>
        <Chip x={580} y={375} w={180} h={36} fill={CREAM} stroke={GREEN} textFill={INK} size={13} script={false}>
          NO → E_i = E_f
        </Chip>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 3.6)} d={arrowD(820, 337, 885, 371)} stroke={RED} sw={2.2} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 4.2)}>
        <Chip x={790} y={375} w={240} h={36} fill={CREAM} stroke={RED} textFill={INK} size={13} script={false}>
          YES → E_i = E_f + heat
        </Chip>
      </Fade>

      {/* beat 7 — the pro-tip */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 450 v 110" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={84} y={470} size={13} fill={GREEN} script anchor="start">
          {t(
            "before any equation: scan the forces — a two-second decision",
            "kisi equation se pehle: forces scan karo — do-second ka faisla"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={84} y={496} size={13} fill={GREEN} script anchor="start">
          {t(
            "all conservative → jump to E_i = E_f — the path is irrelevant",
            "sab conservative → seedha E_i = E_f — path bemaani"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 14)}>
        <T x={84} y={522} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "friction or drag anywhere → E_i = E_f + f·d_slide",
            "friction ya drag kahin bhi → E_i = E_f + f·d_slide"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 20)}>
        <T x={84} y={548} size={13} fill={MUTED} script anchor="start">
          {t(
            "no grinding through Newton along a messy path",
            "uljhe path par Newton mein ghisne ki zaroorat nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
