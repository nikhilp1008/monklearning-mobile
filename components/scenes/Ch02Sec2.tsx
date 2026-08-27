/**
 * Ch02 · Section 2 — "Speed and velocity: the scalar twin and the vector twin"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.9, 26.5, 44, 64.3, 84.6, 102.9, 125.6, 142.3]):
 *  0 title · parent chips (distance/displacement) · arrows sprout down
 *  1 SPEED child chip + "rate of change of distance / always +"
 *  2 VELOCITY child chip + "direction included / can be −"
 *  3 red-margin note: same units & dimensions — only difference is WHICH WAY
 *  4 speedometer gauge, needle swings positive
 *  5 cricket pitch: creases + run arrow "17.68 m"
 *  6 return arrow + two tally boxes (35.36 m vs 0)
 *  7 ring the 0 · "round trip" line
 *  8 green margin verdict: the gap is the heart of kinematics
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title mid bl 58 · chips x215..385 / x680..880 y92..124 · arrows (300/780,132→168)
 *  b1 | chip x240..360 y170..206 · subs cx300 bl 236 / 260
 *  b2 | chip x710..850 y170..206 · subs cx780 bl 236 / 260
 *  b3 | bar x66 y282..330 · lines st x84 bl 300 / 324
 *  b4 | gauge c(200,455) r65 · needle → (247,410) · labels cx200 bl 505 / 529
 *  b5 | creases x420/x900 y360..455 · arrow y385 · "17.68 m" cx660 bl 370 · note bl 412
 *  b6 | return arrow y438 · label bl 464 · boxes x380..700 / x720..1030 y480..556 ·
 *       headers bl 502 · values bl 536
 *  b7 | double underline under the "0" x921..942 y542/547 · line cx705 bl 585
 *  b8 | bar x54 y546..594 · lines st x70 bl 562 / 586
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
  ringD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec2({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the family tree sprouts */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={58} size={24} fill={INK} script>
          {t(
            "two ways of 'how far' → two ways of 'how fast'",
            "do tarah ka 'kitni door' → do tarah ka 'kitna tez'"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.2)}
        d="M 227 92 h 146 q 12 0 12 12 v 8 q 0 12 -12 12 h -146 q -12 0 -12 -12 v -8 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.2}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 0} delay={dl(0, 2)}>
        <T x={300} y={113} size={15} fill={AMBER_DARK} script>
          {t("DISTANCE (scalar)", "DISTANCE (scalar)")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 3)}
        d="M 692 92 h 176 q 12 0 12 12 v 8 q 0 12 -12 12 h -176 q -12 0 -12 -12 v -8 q 0 -12 12 -12"
        stroke={RED}
        sw={2.2}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 0} delay={dl(0, 3.8)}>
        <T x={780} y={113} size={15} fill={RED} script>
          {t("DISPLACEMENT (vector)", "DISPLACEMENT (vector)")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 5.5)}
        d={arrowD(300, 132, 300, 164)}
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 0}
        delay={dl(0, 6.2)}
        d={arrowD(780, 132, 780, 164)}
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />

      {/* beat 1 — SPEED, the scalar twin */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 252 170 h 96 q 12 0 12 12 v 12 q 0 12 -12 12 h -96 q -12 0 -12 -12 v -12 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={300} y={195} size={18} fill={AMBER_DARK} weight={700}>
          SPEED
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.5)}>
        <T x={300} y={236} size={13} fill={AMBER_DARK} script>
          {t("rate of change of distance", "distance ke badhne ki raftaar")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={300} y={260} size={13} fill={AMBER_DARK} script>
          {t("always positive — scalar twin", "hamesha positive — scalar twin")}
        </T>
      </Fade>

      {/* beat 2 — VELOCITY, the vector twin */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.6)}
        d="M 722 170 h 116 q 12 0 12 12 v 12 q 0 12 -12 12 h -116 q -12 0 -12 -12 v -12 q 0 -12 12 -12"
        stroke={RED}
        sw={2.6}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={780} y={195} size={18} fill={RED} weight={700}>
          VELOCITY
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.5)}>
        <T x={780} y={236} size={13} fill={RED} script>
          {t("rate of change of displacement", "displacement ke badalne ki raftaar")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={780} y={260} size={13} fill={RED} script>
          {t("can be − : direction included", "− ho sakta hai — direction ke saath")}
        </T>
      </Fade>

      {/* beat 3 — same units, same dimensions */}
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d="M 66 282 v 48" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={84} y={300} size={14} fill={RED} script anchor="start">
          {t(
            "same units (m/s) · same dimensions [L T⁻¹]",
            "same units (m/s) · same dimensions [L T⁻¹]"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={84} y={324} size={14} fill={RED} script anchor="start">
          {t(
            "the ONLY difference: velocity tells you WHICH WAY",
            "sirf ek fark: velocity batata hai KIS TARAF"
          )}
        </T>
      </Fade>

      {/* beat 4 — the speedometer test */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d="M 135 455 A 65 65 0 0 1 265 455 M 135 455 h -8 M 154 409 l -6 -6 M 200 390 v -8 M 246 409 l 6 -6 M 265 455 h 8"
        stroke={INK}
        sw={2.2}
        dur={1.2}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 2.6)}
        d={arrowD(200, 455, 247, 410)}
        stroke={RED}
        sw={2.6}
        dur={0.6}
      />
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={200} y={505} size={13} fill={INK} script>
          {t("speedometer — SPEED only", "speedometer — sirf SPEED")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 12)}>
        <T x={200} y={529} size={13} fill={MUTED} script>
          {t("reverse? needle still positive", "reverse mein bhi needle positive")}
        </T>
      </Fade>

      {/* beat 5 — the quick single */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 420 360 v 95 M 900 360 v 95"
        stroke={INK}
        sw={2.4}
        dur={0.8}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 2.2)}
        d={arrowD(430, 385, 888, 385)}
        stroke={GREEN}
        sw={2.6}
        dur={1.1}
      />
      <Fade on={beat >= 5} delay={dl(5, 3.8)}>
        <T x={660} y={370} size={16} fill={INK} weight={700}>
          17.68 m
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={660} y={412} size={12} fill={MUTED} script>
          {t("(his displacement — so far)", "(abhi tak ka displacement)")}
        </T>
      </Fade>

      {/* beat 6 — scrambling back · the two tallies */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.5)}
        d={arrowD(890, 438, 432, 438)}
        stroke={RED}
        sw={2.6}
        dur={1.1}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={660} y={464} size={12} fill={RED} script>
          {t("back — call cancelled", "call cancel — waapas bhaaga")}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 3.2)}
        d="M 392 480 h 296 q 12 0 12 12 v 52 q 0 12 -12 12 h -296 q -12 0 -12 -12 v -52 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.7}
      />
      <Fade on={beat >= 6} delay={dl(6, 4.2)}>
        <T x={540} y={502} size={14} fill={AMBER_DARK} script>
          distance
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5.4)}>
        <T x={540} y={536} size={18} fill={INK} weight={700}>
          17.68 + 17.68 = 35.36 m
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 9)}
        d="M 732 480 h 286 q 12 0 12 12 v 52 q 0 12 -12 12 h -286 q -12 0 -12 -12 v -52 q 0 -12 12 -12"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />
      <Fade on={beat >= 6} delay={dl(6, 10)}>
        <T x={875} y={502} size={14} fill={RED} script>
          displacement
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 11.2)}>
        <T x={875} y={536} size={18} fill={INK} weight={700}>
          +17.68 − 17.68 = 0
        </T>
      </Fade>

      {/* beat 7 — the famous result */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 1)}
        d="M 921 542 h 21 M 923 547 h 17"
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={705} y={585} size={13} fill={RED} script>
          {t(
            "round trip — zero displacement, plenty of distance",
            "round trip — displacement zero, distance bharpoor"
          )}
        </T>
      </Fade>

      {/* beat 8 — the heart of kinematics */}
      <Draw on={beat >= 8} delay={dl(8, 0.8)} d="M 54 546 v 48" stroke={GREEN} sw={3.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={70} y={562} size={13} fill={GREEN} script anchor="start">
          {t(
            "distance climbs · displacement can sit at zero —",
            "distance badhta jaaye · displacement zero par baitha rahe —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 4.5)}>
        <T x={70} y={586} size={13} fill={GREEN} script anchor="start">
          {t(
            "that gap is the heart of kinematics (and its traps)",
            "yahi gap kinematics ka dil hai (aur traps ka bhi)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
