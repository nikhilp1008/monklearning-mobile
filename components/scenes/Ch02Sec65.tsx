/**
 * Ch02 · Section 65 — "Procedures C and D: a = f(v) and a = f(x)"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9, 22.9, 38.3, 49.7, 70.7, 95.5, 106.4, 128.8]):
 *  0 title
 *  1 C: the decision — time involved? pair dv/dt
 *  2 separation: dv/f(v) = dt
 *  3 distance, no time? pair the master key
 *  4 v dv/f(v) = dx — the fingerprint
 *  5 red note: wrong pairing = unusable integral
 *  6 D chip: no choice, one tool
 *  7 v dv = f(x) dx → (v²−v₀²)/2
 *  8 green: the optional second climb
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  C chip x60..520 y88..120 · C col st x90: b1 bl 152 · b2 bl 186 + sub bl 212 ·
 *  b3 bl 246 · b4 bl 280 + sub bl 306
 *  b5 | bar x66 y335..395 · lines st x84 bl 354 / 380
 *  D chip x560..1030 y88..120 · D col st x590: b6 bl 152 · b7 bl 186 / 218 + sub bl 246
 *  b8 | bar x56 y430..490 · lines st x72 bl 450 / 476
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec65({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the judgement pair */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={23} fill={INK} script>
          {t(
            "the judgement pair — a = f(v) and a = f(x)",
            "faisle waali jodi — a = f(v) aur a = f(x)"
          )}
        </T>
      </Fade>

      {/* beat 1 — C: the decision */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <Chip x={60} y={88} w={460} h={32} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={13}>
          {t(
            "Procedure C — a = f(v): first, a DECISION",
            "Procedure C — a = f(v): pehle ek FAISLA"
          )}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={90} y={152} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "does the question involve TIME? → pair with dv⁄dt",
            "kya sawaal mein TIME hai? → dv⁄dt ke saath jodo"
          )}
        </T>
      </Fade>

      {/* beat 2 — the clean separation */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={90} y={186} size={14} fill={INK} anchor="start" weight={700}>
          dv⁄dt = f(v) → dv ⁄ f(v) = dt
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={90} y={212} size={11} fill={MUTED} script anchor="start">
          {t(
            "separate and integrate — v on the left, t on the right",
            "alag karo aur integrate — v baayein, t daayein"
          )}
        </T>
      </Fade>

      {/* beat 3 — the other pairing */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={90} y={246} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "position or distance, and no time? → pair with the master key",
            "position ya doori hai, time nahi? → master key ke saath jodo"
          )}
        </T>
      </Fade>

      {/* beat 4 — the fingerprint */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={90} y={280} size={14} fill={INK} anchor="start" weight={700}>
          v·dv⁄dx = f(v) → v dv ⁄ f(v) = dx
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={90} y={306} size={11} fill={AMBER_DARK} script anchor="start">
          {t(
            "the extra v in the numerator is the master key's fingerprint",
            "numerator ka extra v master key ka nishaan hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — why step one is a decision */}
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d="M 66 335 v 60" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={84} y={354} size={13} fill={RED} script anchor="start">
          {t(
            "the wrong pairing forces an UNUSABLE integral — not a harder one",
            "galat jodi ek NAKARA integral thopti hai — mushkil nahi, bekaar"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 10)}>
        <T x={84} y={380} size={13} fill={RED} script anchor="start">
          {t(
            "both pairings are true; only one separates — read for 'time' or 'distance' first",
            "dono jodiyan sach hain; alag sirf ek hoti hai — pehle 'time' ya 'distance' padho"
          )}
        </T>
      </Fade>

      {/* beat 6 — D: no choice */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <Chip x={560} y={88} w={470} h={32} fill={CREAM} stroke={GREEN} textFill={GREEN} size={13}>
          {t(
            "Procedure D — a = f(x): no choice, one tool",
            "Procedure D — a = f(x): koi faisla nahi, ek hi auzaar"
          )}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={590} y={152} size={12} fill={GREEN} script anchor="start">
          {t("only the master key fits here", "yahan sirf master key lagti hai")}
        </T>
      </Fade>

      {/* beat 7 — two steps, no decisions */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={590} y={186} size={14} fill={INK} anchor="start" weight={700}>
          v dv = f(x) dx
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={590} y={218} size={14} fill={INK} anchor="start" weight={700}>
          (v² − v₀²) ⁄ 2 = ∫ f(x) dx
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 12)}>
        <T x={590} y={246} size={11} fill={MUTED} script anchor="start">
          {t(
            "two steps, no decisions — solve for v(x)",
            "do kadam, koi faisla nahi — v(x) nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 8 — the optional second climb */}
      <Draw on={beat >= 8} delay={dl(8, 0.8)} d="M 56 430 v 60" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={72} y={450} size={13} fill={GREEN} script anchor="start">
          {t(
            "need time afterwards? one optional extra climb: dx ⁄ v(x) = dt — integrate again",
            "baad mein time chahiye? ek aur chadhaai, marzi se: dx ⁄ v(x) = dt — phir integrate"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 9)}>
        <T x={72} y={476} size={13} fill={GREEN} script anchor="start">
          {t(
            "most of the time, stopping at v(x) IS the answer",
            "aksar v(x) par ruk jaana hi jawaab hota hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
