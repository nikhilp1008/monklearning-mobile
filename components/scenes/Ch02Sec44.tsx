/**
 * Ch02 · Section 44 — "Velocity is never absolute"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 24.8, 36.4, 56.8, 76, 99.3, 124.2, 142]):
 *  0 title
 *  1 two panel headers: from your window · from the platform
 *  2 left: the other train, frozen (≈ 0, drifting)
 *  3 right: platform person sees both at 60
 *  4 red note: never absolute — left of WHAT?
 *  5 amber: the silent 'relative to the ground'
 *  6 ink line: only who is watching changed
 *  7 green: choose the frame, make it easy
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  headers cx295 / cx800 bl 116
 *  left train x140..400 y160..230 + windows · small arrow (410,195)→(432,195) ·
 *  label cx275 bl 290
 *  right person head c(640,215) r12 + body · trains x700..980 y150..200 & y220..270 ·
 *  arrows (985,175)→(1035,175) / (985,245)→(1035,245) · label cx840 bl 300
 *  b4 | bar x66 y360..412 · lines st x84 bl 380 / 406
 *  b5 | lines st x84 bl 440 / 464 · b6 | line st x84 bl 494
 *  b7 | bar x56 y520..574 · lines st x72 bl 540 / 566
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
  Scene,
} from '@/components/scenes/kit';

const train = (x: number, y: number, w: number) =>
  `M ${x + 10} ${y} h ${w - 20} q 10 0 10 10 v 30 q 0 10 -10 10 h -${w - 20} q -10 0 -10 -10 v -30 q 0 -10 10 -10 ` +
  `M ${x + 30} ${y + 12} h 26 v 16 h -26 z M ${x + 80} ${y + 12} h 26 v 16 h -26 z M ${x + 130} ${y + 12} h 26 v 16 h -26 z`;

export default function Ch02Sec44({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the station moment */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={23} fill={INK} script>
          {t(
            "velocity is never absolute — the two-train moment",
            "velocity kabhi absolute nahi — do-train wala pal"
          )}
        </T>
      </Fade>

      {/* beat 1 — same scene, drawn twice */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={295} y={116} size={13} fill={AMBER_DARK} script>
          {t("from your window", "tumhaari khidki se")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={800} y={116} size={13} fill={AMBER_DARK} script>
          {t("from the platform", "platform se")}
        </T>
      </Fade>

      {/* beat 2 — the frozen train */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d={train(140, 160, 260)}
        stroke={INK}
        sw={2}
        dur={1.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.6)}
        d={arrowD(410, 195, 432, 195)}
        stroke={MUTED}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={275} y={290} size={12} fill={AMBER_DARK} script>
          {t(
            "the other train: ≈ 0 — frozen, drifting — and you are not wrong",
            "doosri train: ≈ 0 — jami hui, sarakti — aur tum galat nahi ho"
          )}
        </T>
      </Fade>

      {/* beat 3 — the platform's answer */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.8)}
        d="M 632 215 a 12 12 0 1 0 24 0 a 12 12 0 1 0 -24 0 M 644 227 V 265 M 644 240 l -16 12 M 644 240 l 16 12 M 644 265 l -12 20 M 644 265 l 12 20"
        stroke={INK}
        sw={2}
        dur={1}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 2.2)}
        d={train(700, 150, 280)}
        stroke={INK}
        sw={2}
        dur={1.2}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 3.6)}
        d={train(700, 220, 280)}
        stroke={INK}
        sw={2}
        dur={1.2}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 5)}
        d={arrowD(985, 175, 1035, 175)}
        stroke={GREEN}
        sw={2.4}
        dur={0.5}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 5.8)}
        d={arrowD(985, 245, 1035, 245)}
        stroke={GREEN}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 7.5)}>
        <T x={840} y={300} size={12} fill={GREEN} script>
          {t(
            "both racing at 60 km/h — also not wrong",
            "dono 60 km/h se bhaagti — yeh bhi galat nahi"
          )}
        </T>
      </Fade>

      {/* beat 4 — the badly formed question */}
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d="M 66 360 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={84} y={380} size={14} fill={RED} script anchor="start">
          {t(
            "velocity is NEVER absolute — always measured with respect to a FRAME",
            "velocity kabhi absolute NAHI — hamesha kisi FRAME ke saapeksh napti hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 9)}>
        <T x={84} y={406} size={14} fill={RED} script anchor="start">
          {t(
            "'how fast?' without 'with respect to what?' = 'is it to the left?' — left of WHAT?",
            "'kitni tez?' bina 'kiske saapeksh?' = 'kya woh baayein hai?' — KISKE baayein?"
          )}
        </T>
      </Fade>

      {/* beat 5 — the hidden phrase */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={84} y={440} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "'the car does 60' silently means 60 RELATIVE TO THE GROUND",
            "'gaadi 60 par hai' ka chhupa matlab: ZAMEEN KE SAAPEKSH 60"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 10)}>
        <T x={84} y={464} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "the ground is the default frame — familiar, not privileged",
            "zameen default frame hai — jaani-pehchaani, par khaas nahi"
          )}
        </T>
      </Fade>

      {/* beat 6 — only the observer changed */}
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={84} y={494} size={13} fill={INK} script anchor="start">
          {t(
            "nothing about the trains changed — not one atom. only who is watching did",
            "trains mein kuchh nahi badla — ek atom bhi nahi. bas dekhne waala badla"
          )}
        </T>
      </Fade>

      {/* beat 7 — the power move */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 56 520 v 54" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={72} y={540} size={13} fill={GREEN} script anchor="start">
          {t(
            "next: make the dependence explicit, then turn it into a calculating tool",
            "aage: is nirbharta ko saaf likhenge, phir usse hisaab ka auzaar banayenge"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={72} y={566} size={13} fill={GREEN} script anchor="start">
          {t(
            "choose who watches, and a hard problem becomes an easy one",
            "dekhne waala chun lo, aur mushkil sawaal aasaan ban jaata hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
