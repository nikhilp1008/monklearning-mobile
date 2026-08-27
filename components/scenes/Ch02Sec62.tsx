/**
 * Ch02 · Section 62 — "The one question: what does the acceleration depend on?"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.5, 28.1, 45.1, 69.9, 84.6, 109.4, 130.4]):
 *  0 title + tree skeleton
 *  1 top box: the ONE question
 *  2 branch a(t): integrate dt twice
 *  3 branch a(v): two leaves, chosen by what's asked
 *  4 branch a(x): the master key
 *  5 red note: v(x) given ⇒ a = v·dv/dx, NOT dv/dx
 *  6 amber: diagnose first, integrate second
 *  7 green: the diagnosis is the whole skill
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  top box x330..750 y80..126 · branch boxes y162..208: x90..350 / x410..670 / x730..990
 *  arrows (450,126)→(220,158) · (540,126)→(540,158) · (630,126)→(860,158)
 *  B1 lines cx220 bl 238 / 262 · B3 lines cx860 bl 238 / 264 / 290
 *  B2 leaves y250..330: x380..520 (bl 274/304) · x560..700 (bl 274/304) ·
 *  arrows (505,208)→(450,246) / (575,208)→(630,246)
 *  b5 | bar x66 y370..430 · lines st x84 bl 390 / 416
 *  b6 | lines st x84 bl 460 / 484
 *  b7 | bar x56 y510..566 · lines st x72 bl 530 / 556
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

function box(x1: number, y1: number, x2: number, y2: number) {
  const w = x2 - x1 - 24;
  const h = y2 - y1 - 24;
  return `M ${x1 + 12} ${y1} h ${w} q 12 0 12 12 v ${h} q 0 12 -12 12 h -${w} q -12 0 -12 -12 v -${h} q 0 -12 12 -12`;
}

export default function Ch02Sec62({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — one picture runs everything */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={23} fill={INK} script>
          {t(
            "one question runs the whole sub-topic",
            "ek sawaal poore sub-topic ko chalaata hai"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d={box(330, 80, 750, 126)} stroke={MUTED} sw={1.8} dur={0.5} />
      <Draw on={beat >= 0} delay={dl(0, 4.7)} d={arrowD(450, 126, 222, 158)} stroke={MUTED} sw={1.8} dur={0.4} />
      <Draw on={beat >= 0} delay={dl(0, 5.2)} d={arrowD(540, 126, 540, 158)} stroke={MUTED} sw={1.8} dur={0.4} />
      <Draw on={beat >= 0} delay={dl(0, 5.7)} d={arrowD(630, 126, 858, 158)} stroke={MUTED} sw={1.8} dur={0.4} />
      <Draw on={beat >= 0} delay={dl(0, 6.4)} d={box(90, 162, 350, 208)} stroke={MUTED} sw={1.8} dur={0.4} />
      <Draw on={beat >= 0} delay={dl(0, 6.9)} d={box(410, 162, 670, 208)} stroke={MUTED} sw={1.8} dur={0.4} />
      <Draw on={beat >= 0} delay={dl(0, 7.4)} d={box(730, 162, 990, 208)} stroke={MUTED} sw={1.8} dur={0.4} />

      {/* beat 1 — the question itself */}
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d={box(330, 80, 750, 126)} stroke={AMBER} sw={2.8} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={540} y={110} size={14} fill={AMBER_DARK} script>
          {t("what does a depend on?", "a kis par nirbhar hai?")}
        </T>
      </Fade>

      {/* beat 2 — a(t) */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={box(90, 162, 350, 208)} stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={220} y={192} size={15} fill={INK} weight={700}>
          a = f(t)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={220} y={238} size={12} fill={GREEN} script>
          {t("integrate a dt → v,", "a dt integrate karo → v,")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={220} y={262} size={12} fill={GREEN} script>
          {t("then v dt → x — two climbs", "phir v dt → x — do chadhaai")}
        </T>
      </Fade>

      {/* beat 3 — a(v): the choice */}
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d={box(410, 162, 670, 208)} stroke={AMBER} sw={2.4} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={540} y={192} size={15} fill={INK} weight={700}>
          a = f(v)
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 3)} d={arrowD(505, 208, 452, 246)} stroke={AMBER} sw={1.8} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 3.6)} d={arrowD(575, 208, 628, 246)} stroke={AMBER} sw={1.8} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 4.4)} d={box(380, 250, 520, 330)} stroke={AMBER} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 5.2)}>
        <T x={450} y={276} size={11} fill={MUTED} script>
          {t("want v(t)?", "v(t) chahiye?")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6.2)}>
        <T x={450} y={306} size={13} fill={INK} weight={700}>
          a = dv⁄dt
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 8)} d={box(560, 250, 700, 330)} stroke={AMBER} sw={2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 8.8)}>
        <T x={630} y={276} size={11} fill={MUTED} script>
          {t("want v(x)?", "v(x) chahiye?")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 9.8)}>
        <T x={630} y={306} size={13} fill={INK} weight={700}>
          a = v·dv⁄dx
        </T>
      </Fade>

      {/* beat 4 — a(x): the master key */}
      <Draw on={beat >= 4} delay={dl(4, 0.6)} d={box(730, 162, 990, 208)} stroke={GREEN} sw={2.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <T x={860} y={192} size={15} fill={INK} weight={700}>
          a = f(x)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.5)}>
        <T x={860} y={238} size={12} fill={GREEN} script>
          {t("reach for the master key:", "master key uthao:")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.5)}>
        <T x={860} y={264} size={14} fill={INK} weight={700}>
          v dv = f(x) dx
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={860} y={290} size={12} fill={GREEN} script>
          {t("both sides integrate cleanly", "dono taraf saaf integrate hoti hai")}
        </T>
      </Fade>

      {/* beat 5 — the single most common slip */}
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d="M 66 370 v 60" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={84} y={390} size={13} fill={RED} script anchor="start">
          {t(
            "given v as a function of x? then a = v·dv⁄dx — NOT dv⁄dx",
            "v agar x ke function mein mila hai? to a = v·dv⁄dx — dv⁄dx NAHI"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <T x={84} y={416} size={13} fill={RED} script anchor="start">
          {t(
            "drop the v and it is not acceleration (wrong units) — yet it looks reasonable",
            "v hataao to woh acceleration hai hi nahi (galat units) — phir bhi theek dikhta hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — diagnose first */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={84} y={460} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "diagnose FIRST, integrate second — name the dependence out loud before writing",
            "pehle DIAGNOSE karo, phir integrate — likhne se pehle nirbharta bol kar batao"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 10)}>
        <T x={84} y={484} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "an impossible integral usually means the wrong branch, not a hard problem",
            "na ho pane waala integral aksar galat shaakha hai, mushkil sawaal nahi"
          )}
        </T>
      </Fade>

      {/* beat 7 — the whole skill */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 56 510 v 56" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={72} y={530} size={13} fill={GREEN} script anchor="start">
          {t(
            "read off t, v or x — and the right tool snaps into place almost automatically",
            "t, v ya x padh lo — aur sahi auzaar lagbhag apne aap haath mein aata hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={72} y={556} size={13} fill={GREEN} script anchor="start">
          {t(
            "the diagnosis is the whole skill; the integration is just Class-11 calculus",
            "poora hunar diagnosis hai; integration to bas Class-11 ka calculus hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
