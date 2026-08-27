/**
 * Ch02 · Section 64 — "Procedures A and B: going down the ladder, and a = f(t)"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.3, 24.5, 46.3, 69.7, 82.4, 100.1, 113.2, 131.9]):
 *  0 title
 *  1 Procedure A: differentiate down (two derivatives)
 *  2 step 3: answer the actual question
 *  3 red note: differentiation destroys constants — the cheap direction
 *  4 Procedure B header: a = f(t), constants arrive
 *  5 the two climbs with v₀ and x₀
 *  6 red: anchor BOTH constants
 *  7 the forced order — no leapfrog
 *  8 green: each climb costs one initial condition
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  A col x60..510: chip y90..122 · lines st x90 bl 158/190 · q-lines bl 222/246
 *  b3 | bar x66 y275..330 · lines st x84 bl 294 / 320
 *  B col x560..1030: chip y90..122 · lines st x590 bl 158/190 · sub bl 222 ·
 *  b6 lines st x590 bl 258 / 282
 *  b7 | lines st x84 bl 368 / 392
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

export default function Ch02Sec64({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the easy pair */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={23} fill={INK} script>
          {t(
            "the easy pair — down the ladder, and a = f(t)",
            "aasaan jodi — seedhi se neeche, aur a = f(t)"
          )}
        </T>
      </Fade>

      {/* beat 1 — Procedure A */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <Chip x={60} y={90} w={450} h={32} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={13}>
          {t(
            "Procedure A — given x(t): go DOWN the ladder",
            "Procedure A — x(t) mila hai: seedhi se NEECHE jao"
          )}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={90} y={158} size={14} fill={INK} anchor="start" weight={700}>
          {t("v = dx⁄dt   (differentiate once)", "v = dx⁄dt   (ek baar differentiate)")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={90} y={190} size={14} fill={INK} anchor="start" weight={700}>
          {t("a = dv⁄dt   (and again)", "a = dv⁄dt   (aur phir se)")}
        </T>
      </Fade>

      {/* beat 2 — answer the actual question */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={90} y={222} size={12} fill={MUTED} script anchor="start">
          {t(
            "'at rest' ⇒ v = 0 · 'zero acceleration' ⇒ a = 0 — solve for t",
            "'at rest' ⇒ v = 0 · 'acceleration zero' ⇒ a = 0 — t nikaalo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 10)}>
        <T x={90} y={246} size={12} fill={MUTED} script anchor="start">
          {t(
            "then substitute back — the cubic example from sub-topic 1, again",
            "phir waapas substitute karo — sub-topic 1 ka cubic, dobara"
          )}
        </T>
      </Fade>

      {/* beat 3 — the cheap direction */}
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d="M 66 275 v 55" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={84} y={294} size={13} fill={RED} script anchor="start">
          {t(
            "no integration, no initial conditions — differentiation DESTROYS constants",
            "na integration, na initial conditions — differentiation constants ko MITAATA hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 10)}>
        <T x={84} y={320} size={13} fill={RED} script anchor="start">
          {t(
            "a +5 inside x(t)? the velocity never sees it — the cheap direction",
            "x(t) ke andar +5? velocity ko dikhta hi nahi — sasti disha"
          )}
        </T>
      </Fade>

      {/* beat 4 — Procedure B */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <Chip x={560} y={90} w={470} h={32} fill={CREAM} stroke={GREEN} textFill={GREEN} size={13}>
          {t(
            "Procedure B — a = f(t): climb UP, constants arrive",
            "Procedure B — a = f(t): UPAR chadho, constants aate hain"
          )}
        </Chip>
      </Fade>

      {/* beat 5 — the two climbs */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={590} y={158} size={14} fill={INK} anchor="start" weight={700}>
          v = v₀ + ∫ a dt
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={590} y={190} size={14} fill={INK} anchor="start" weight={700}>
          x = x₀ + ∫ v dt
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 11)}>
        <T x={590} y={222} size={12} fill={MUTED} script anchor="start">
          {t("two honest climbs: a → v → x", "do imaandaar chadhaai: a → v → x")}
        </T>
      </Fade>

      {/* beat 6 — anchor BOTH */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={590} y={258} size={12} fill={RED} script anchor="start">
          {t(
            "anchor BOTH constants before substituting —",
            "substitute se pehle DONO constants ko baandho —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={590} y={282} size={12} fill={RED} script anchor="start">
          {t(
            "students anchor the first, then float the second",
            "students pehla baandhte hain, doosra tairta chhod dete hain"
          )}
        </T>
      </Fade>

      {/* beat 7 — the forced order */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={84} y={368} size={12} fill={INK} script anchor="start">
          {t(
            "the order is forced, not chosen: you cannot find x until you have v — its integral needs v",
            "kram thopa gaya hai, chuna nahi: v ke bina x nahi milta — uske integral ko v chahiye"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={84} y={392} size={12} fill={INK} script anchor="start">
          {t(
            "bottom of the ladder upward, in sequence — no leapfrog from a straight to x",
            "seedhi ke neeche se upar, kram mein — a se seedha x par chhalaang nahi"
          )}
        </T>
      </Fade>

      {/* beat 8 — what both conditions are telling you */}
      <Draw on={beat >= 8} delay={dl(8, 0.8)} d="M 56 430 v 60" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={72} y={450} size={13} fill={GREEN} script anchor="start">
          {t(
            "two climbs up the same ladder — each costs exactly ONE initial condition",
            "usi seedhi par do chadhaai — har ek ki keemat theek EK initial condition"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <T x={72} y={476} size={13} fill={GREEN} script anchor="start">
          {t(
            "given both v₀ and x₀? not generosity — you are expected to climb twice",
            "v₀ aur x₀ dono diye hain? udaarata nahi — do baar chadhne ki umeed hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
