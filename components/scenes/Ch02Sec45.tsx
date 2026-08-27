/**
 * Ch02 · Section 45 — "One definition, and the two rules it generates"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.7, 23.2, 48, 60.8, 82.3, 104.9, 125.1]):
 *  0 title
 *  1 definition card: v_AB = v_A − v_B
 *  2 reading notes: watched/watcher · 1-D collapse
 *  3 panel headers: same direction · opposite directions
 *  4 left: both +80 → v_AB = 0, parked alongside
 *  5 right: +80 and −80 → 160, piling up
 *  6 red note: identical speeds, wildly different relatives
 *  7 green: one fact — honest signs do the thinking
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 card x300..780 y85..150 (bl 124)
 *  b2 lines cx540 bl 178 / 202
 *  panels: headers cx295/cx800 bl 250 · arrows y290/y340 · labels st x330/x820,
 *  end x808 · results bl 395 · subs bl 420
 *  b6 | bar x66 y450..504 · lines st x84 bl 470 / 496
 *  b7 | bar x56 y524..580 · lines st x72 bl 544 / 570
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
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

export default function Ch02Sec45({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — squeeze one definition */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={23} fill={INK} script>
          {t(
            "one definition — then squeeze it",
            "ek definition — phir usse nichodo"
          )}
        </T>
      </Fade>

      {/* beat 1 — the whole sub-topic */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 312 85 h 456 q 12 0 12 12 v 41 q 0 12 -12 12 h -456 q -12 0 -12 -12 v -41 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={540} y={124} size={24} fill={INK} weight={800}>
          v_AB = v_A − v_B
        </T>
      </Fade>

      {/* beat 2 — how to read it */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={540} y={178} size={12} fill={AMBER_DARK} script>
          {t(
            "read: 'velocity of A as SEEN BY B' — first = the watched, second = the watcher",
            "padho: 'A ki velocity, B KI NAZAR SE' — pehla = jise dekha, doosra = jo dekhta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 12)}>
        <T x={540} y={202} size={12} fill={MUTED} script>
          {t(
            "in 1-D: fix a + direction and the vectors collapse to signed numbers",
            "1-D mein: + tay karo aur vectors sirf signed numbers ban jaate hain"
          )}
        </T>
      </Fade>

      {/* beat 3 — same speeds throughout */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={295} y={250} size={12} fill={AMBER_DARK} script>
          {t("same direction", "ek hi disha")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={800} y={250} size={12} fill={AMBER_DARK} script>
          {t("opposite directions", "ulti dishaayein")}
        </T>
      </Fade>

      {/* beat 4 — subtract */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d={arrowD(140, 290, 320, 290)}
        stroke={INK}
        sw={2.6}
        dur={0.6}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={330} y={296} size={13} fill={INK} anchor="start" weight={700}>
          A: +80
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 2.6)}
        d={arrowD(140, 340, 320, 340)}
        stroke={INK}
        sw={2.6}
        dur={0.6}
      />
      <Fade on={beat >= 4} delay={dl(4, 3.4)}>
        <T x={330} y={346} size={13} fill={INK} anchor="start" weight={700}>
          B: +80
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={295} y={395} size={15} fill={GREEN} weight={700}>
          v_AB = 80 − 80 = 0
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 12)}>
        <T x={295} y={420} size={11} fill={MUTED} script>
          {t(
            "each sees the other parked alongside",
            "har ek ko doosra bagal mein khada dikhta hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — add */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d={arrowD(630, 290, 810, 290)}
        stroke={INK}
        sw={2.6}
        dur={0.6}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={820} y={296} size={13} fill={INK} anchor="start" weight={700}>
          A: +80
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 3)}
        d={arrowD(1000, 340, 820, 340)}
        stroke={RED}
        sw={2.6}
        dur={0.6}
      />
      <Fade on={beat >= 5} delay={dl(5, 3.8)}>
        <T x={808} y={346} size={13} fill={RED} anchor="end" weight={700}>
          B: −80
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={800} y={395} size={15} fill={RED} weight={700}>
          v_AB = 80 − (−80) = 160
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 13)}>
        <T x={800} y={420} size={11} fill={MUTED} script>
          {t(
            "closing at 160 — the speeds pile up",
            "160 se paas aate — speeds jud jaati hain"
          )}
        </T>
      </Fade>

      {/* beat 6 — pause on this */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 66 450 v 54" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={470} size={14} fill={RED} script anchor="start">
          {t(
            "identical speeds both times: 80 and 80 — yet the relatives are 0 and 160",
            "dono baar wahi speeds: 80 aur 80 — phir bhi relatives 0 aur 160"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={84} y={496} size={14} fill={RED} script anchor="start">
          {t(
            "the difference is ENTIRELY in the directions — nothing else changed",
            "poora fark SIRF dishaon mein hai — aur kuchh nahi badla"
          )}
        </T>
      </Fade>

      {/* beat 7 — one fact */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 56 524 v 56" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={72} y={544} size={13} fill={GREEN} script anchor="start">
          {t(
            "not two rules — ONE definition; both fall out when your signs are honest",
            "do rules nahi — EK definition; sign imaandaar ho to dono apne aap girte hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={72} y={570} size={13} fill={GREEN} script anchor="start">
          {t(
            "sign the velocities in the ground frame first — the subtraction does the thinking",
            "pehle ground frame mein velocities ko sign do — ghatana khud soch lega"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
