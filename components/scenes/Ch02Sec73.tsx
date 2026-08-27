/**
 * Ch02 · Section 73 — "Cheat sheet: what to carry into the exam"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.7, 34.6, 58.8, 82.5, 99.4, 124.3, 146.5, 171.4]):
 *  0 title
 *  1 red safe-ground card: the four expressions that never expire
 *  2 amber habit: fix + first
 *  3 the spine: slope down · area up (+ starting-value warning)
 *  4 word-for-word pair + the free check
 *  5 three equations + stamp + withhold + ∝ v₀²
 *  6 relative velocity in one line + the gift
 *  7 variable a mnemonic + the factor of v
 *  8 green habits of mind: v = 0 ≠ a = 0 · test roots against physics
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 card x60..1020 y78..140 (bl 108 · sub bl 132)
 *  rows st x84, bars x66:
 *  b2 bl 168 · b3 bl 196/220 · b4 bl 248/272 · b5 bl 300/324/348 ·
 *  b6 bl 376/400 · b7 bl 428/452
 *  b8 box x60..1020 y478..586 (lines bl 508/536/566)
 */

import React from "react";
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
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec73({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the page to keep */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={22} fill={INK} script>
          {t(
            "the cheat sheet — if you keep one page, keep this",
            "cheat sheet — ek hi panna rakhna ho, to yahi"
          )}
        </T>
      </Fade>

      {/* beat 1 — the safe ground */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 72 78 h 936 q 12 0 12 12 v 38 q 0 12 -12 12 h -936 q -12 0 -12 -12 v -38 q 0 -12 12 -12"
        stroke={RED}
        sw={2.6}
        dur={0.9}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={540} y={108} size={15} fill={INK} weight={700}>
          {t(
            "ALWAYS TRUE: v = dx⁄dt · a = dv⁄dt = d²x⁄dt² = v·dv⁄dx",
            "HAMESHA SACH: v = dx⁄dt · a = dv⁄dt = d²x⁄dt² = v·dv⁄dx"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={540} y={132} size={11} fill={RED} script>
          {t(
            "no conditions attached — when any shortcut fails, retreat here",
            "koi shart nahi — jab koi shortcut toote, yahin lauto"
          )}
        </T>
      </Fade>

      {/* beat 2 — the opening habit */}
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 66 152 v 24" stroke={AMBER} sw={3.2} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={84} y={168} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "fix a positive direction FIRST — every sub-topic opened with it; without it every sign is unanchored",
            "pehle positive disha tay karo — har sub-topic isi se khula; iske bina har sign bina langar ke hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — the spine */}
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d="M 66 182 v 48" stroke={AMBER} sw={3.2} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={84} y={198} size={13} fill={INK} script anchor="start">
          {t(
            "the spine: slope steps down (x → v → a) · area climbs up (a → v → x)",
            "reedh: slope neeche utarta (x → v → a) · area upar chadhta (a → v → x)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 12)}>
        <T x={84} y={222} size={12} fill={RED} script anchor="start">
          {t(
            "climbing up always needs a starting value — area gives the CHANGE, not the value",
            "upar chadhne ko shuruaati value chahiye — area BADLAV deta hai, poori value nahi"
          )}
        </T>
      </Fade>

      {/* beat 4 — word for word */}
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d="M 66 234 v 48" stroke={AMBER} sw={3.2} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={84} y={250} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "'same DISTANCE → harmonic · same TIME → arithmetic' — in that rhythm",
            "'same DISTANCE → harmonic · same TIME → arithmetic' — usi taal mein"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 10)}>
        <T x={84} y={274} size={12} fill={GREEN} script anchor="start">
          {t(
            "distance ≥ |displacement| — a free check on every answer you produce",
            "distance ≥ |displacement| — har jawaab par muft jaanch"
          )}
        </T>
      </Fade>

      {/* beat 5 — the three, stamped */}
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d="M 66 286 v 72" stroke={AMBER} sw={3.2} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={84} y={302} size={13} fill={INK} script anchor="start">
          {t(
            "① v = u+at · ② s = ut+½at² · ③ v² = u²+2as — CONSTANT a ONLY, never otherwise",
            "① v = u+at · ② s = ut+½at² · ③ v² = u²+2as — SIRF CONSTANT a, warna kabhi nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={84} y={326} size={12} fill={INK} script anchor="start">
          {t(
            "pick by what is withheld: ① no s · ② no v · ③ no t — free fall is these with a = ±g",
            "jo nahi diya usi se chuno: ① s nahi · ② v nahi · ③ t nahi — free fall inhi ka a = ±g roop"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 12)}>
        <T x={84} y={350} size={12} fill={RED} script anchor="start">
          {t(
            "d_stop ∝ v₀² — double the speed, quadruple the distance",
            "d_stop ∝ v₀² — speed dugni, rukne ki doori chaugni"
          )}
        </T>
      </Fade>

      {/* beat 6 — relative velocity, one line */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 66 362 v 48" stroke={AMBER} sw={3.2} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={378} size={13} fill={INK} script anchor="start">
          {t(
            "v_AB = v_A − v_B — sign the ground-frame velocities first; add-or-subtract handles itself",
            "v_AB = v_A − v_B — pehle ground-frame velocities ko sign do; jodna-ghatana khud ho jaata hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 11)}>
        <T x={84} y={402} size={12} fill={GREEN} script anchor="start">
          {t(
            "the gift: both in free fall ⇒ a_rel = 0 — a quadratic becomes a division",
            "tohfa: dono free fall mein ⇒ a_rel = 0 — quadratic ek bhaag ban jaata hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — variable a, in the mnemonic */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 414 v 48" stroke={AMBER} sw={3.2} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={430} size={13} fill={INK} script anchor="start">
          {t(
            "variable a: diagnose the dependence — t, v or x — then integrate · a(x) → v dv = a dx",
            "variable a: nirbharta pehchano — t, v ya x — phir integrate · a(x) → v dv = a dx"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={84} y={454} size={12} fill={RED} script anchor="start">
          {t(
            "v given as v(x)? a = v·dv⁄dx — the factor of v is the whole thing",
            "v agar v(x) mila hai? a = v·dv⁄dx — v ka factor hi poori baat hai"
          )}
        </T>
      </Fade>

      {/* beat 8 — habits of mind */}
      <Draw
        on={beat >= 8}
        delay={dl(8, 0.8)}
        d="M 72 478 h 936 q 12 0 12 12 v 84 q 0 12 -12 12 h -936 q -12 0 -12 -12 v -84 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={1}
      />
      <Fade on={beat >= 8} delay={dl(8, 2.2)}>
        <T x={540} y={508} size={13} fill={GREEN} script>
          {t(
            "habits of mind: zero velocity NEVER implies zero acceleration — the ball at the top",
            "mann ki aadatein: zero velocity ka matlab zero acceleration KABHI nahi — choti waali gend"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 9)}>
        <T x={540} y={536} size={13} fill={GREEN} script>
          {t(
            "and test every root against the PHYSICS — negative times, falls with no 'last second'",
            "aur har root ko PHYSICS se jaancho — negative samay, aisi girawat jiska 'aakhri second' hi nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 15)}>
        <T x={540} y={564} size={12} fill={INK} script>
          {t(
            "carry this page — everything else in the chapter regenerates from it",
            "yeh panna saath rakho — chapter ka baaki sab isi se dobara ban jaata hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
