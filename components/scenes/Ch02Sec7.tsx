/**
 * Ch02 · Section 7 — "Procedure A: a 1-D trip with reversals"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13, 31.6, 49, 71.3, 94.3, 117.4, 138.3]):
 *  0 title
 *  1 STEP 1 chip · +x mini axis · "write it at the top"
 *  2 STEP 2 chip · leg definition
 *  3 the trip: number line 0→300→200 · leg arrows +300 / −100
 *  4 STEP 3 card: keep signs → +200 m · endpoint check
 *  5 STEP 4 card: drop signs → 400 m · the minus now adds
 *  6 STEP 5 red note: 400 ≥ |+200| ✓ — fails ⇒ slipped sign
 *  7 green verdict: same legs added twice · costume line
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | chip x60..190 y92..122 · axis (220,110)→(340,110) · "+x" st 350 ·
 *       note st x420 bl 116
 *  b2 | chip x60..270 y150..184 · note st x290 bl 172
 *  b3 | line y300 x140..900 · ticks x180/580/780 · tick labels bl 326 ·
 *       leg1 arrow y270 (180→776) label cx480 bl 250 ·
 *       leg2 arrow y238 (780→584) label cx680 bl 220
 *  b4 | box x60..560 y350..432 · header cx310 bl 374 · formula bl 404 · note bl 460
 *  b5 | box x600..1030 y350..432 · header cx815 bl 374 · formula bl 404 · note bl 460
 *  b6 | bar x66 y482..538 · lines st x84 bl 502 / 528
 *  b7 | bar x56 y552..594 · lines cx540 bl 564 / 588
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the procedure */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={INK} script>
          {t(
            "Procedure A — the trip that turns around",
            "Procedure A — woh safar jo palat jaata hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — fix the positive direction */}
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Chip x={60} y={92} w={130} h={30} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={14}>
          {t("STEP 1 — fix +", "STEP 1 — + tay karo")}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.8)}
        d={arrowD(220, 110, 340, 110)}
        stroke={INK}
        sw={2.4}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.6)}>
        <T x={350} y={116} size={16} fill={INK} anchor="start" weight={700}>
          +x
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <T x={430} y={116} size={13} fill={MUTED} script anchor="start">
          {t(
            "write it at the top of your working",
            "apne working ke sabse upar likho"
          )}
        </T>
      </Fade>

      {/* beat 2 — split into legs */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <Chip x={60} y={150} w={210} h={34} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={14}>
          {t("STEP 2 — split into legs", "STEP 2 — legs mein todo")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={290} y={172} size={13} fill={MUTED} script anchor="start">
          {t(
            "a leg = one direction · every turnaround starts a new leg",
            "leg = ek hi disha · har palatna nayi leg shuru karta hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — the two-leg trip */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.6)}
        d="M 140 300 H 900 M 180 293 v 14 M 580 293 v 14 M 780 293 v 14"
        stroke={INK}
        sw={2}
        dur={1}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={180} y={326} size={13} fill={INK} weight={700}>
          0
        </T>
        <T x={580} y={326} size={13} fill={INK} weight={700}>
          +200
        </T>
        <T x={780} y={326} size={13} fill={INK} weight={700}>
          +300
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 3.5)}
        d={arrowD(180, 270, 776, 270)}
        stroke={GREEN}
        sw={3}
        dur={1.2}
      />
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={480} y={250} size={13} fill={GREEN} script>
          {t("+300 m (leg 1)", "+300 m (leg 1)")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 8)}
        d={arrowD(780, 238, 584, 238)}
        stroke={RED}
        sw={3}
        dur={0.8}
      />
      <Fade on={beat >= 3} delay={dl(3, 9.2)}>
        <T x={680} y={220} size={13} fill={RED} script>
          {t("−100 m (leg 2)", "−100 m (leg 2)")}
        </T>
      </Fade>

      {/* beat 4 — displacement keeps the signs */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.6)}
        d="M 72 350 h 476 q 12 0 12 12 v 58 q 0 12 -12 12 h -476 q -12 0 -12 -12 v -58 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={310} y={374} size={14} fill={GREEN} script>
          {t(
            "STEP 3 — displacement: keep every sign",
            "STEP 3 — displacement: har sign rakho"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.5)}>
        <T x={310} y={404} size={18} fill={INK} weight={700}>
          +300 + (−100) = +200 m
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 12)}>
        <T x={310} y={460} size={12} fill={MUTED} script>
          {t(
            "check: must equal x_final − x_initial (endpoints)",
            "jaanch: x_final − x_initial ke barabar hona chahiye"
          )}
        </T>
      </Fade>

      {/* beat 5 — distance drops the signs */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 612 350 h 406 q 12 0 12 12 v 58 q 0 12 -12 12 h -406 q -12 0 -12 -12 v -58 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.7}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={815} y={374} size={14} fill={AMBER_DARK} script>
          {t(
            "STEP 4 — distance: drop every sign",
            "STEP 4 — distance: har sign hatao"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.5)}>
        <T x={815} y={404} size={18} fill={INK} weight={700}>
          |+300| + |−100| = 400 m
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 12)}>
        <T x={815} y={460} size={12} fill={MUTED} script>
          {t(
            "the minus that subtracted now ADDS",
            "jo minus ghata raha tha, ab JODTA hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — the free-marks check */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 66 482 v 56" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={502} size={14} fill={RED} script anchor="start">
          {t(
            "STEP 5 — run the fence: 400 ≥ |+200| ✓ passes",
            "STEP 5 — baad chalao: 400 ≥ |+200| ✓ paas"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={84} y={528} size={14} fill={RED} script anchor="start">
          {t(
            "fails? not new physics — a slipped sign in step 3 or 4",
            "fail? nayi physics nahi — step 3 ya 4 mein sign phisla hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the whole procedure in one line */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 56 552 v 42" stroke={GREEN} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={540} y={564} size={13} fill={GREEN} script>
          {t(
            "same legs added twice: with signs → displacement · without → distance",
            "wahi legs do baar jode: sign ke saath → displacement · bina → distance"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <T x={540} y={588} size={12} fill={GREEN} script>
          {t(
            "every distance-vs-displacement problem is this procedure in a costume",
            "har distance-vs-displacement sawaal isi procedure ka roop hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
