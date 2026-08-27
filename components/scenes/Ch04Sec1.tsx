/**
 * Ch04 · Section 1 — "Inertia: the train leaves your body behind"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.9, 27.6, 42.8, 55.0, 65.3, 79.7, 98.7]):
 *  0 title + draw the Mumbai local: floor, train, upright passenger
 *  1 the jerk: amber arrow, passenger tilts (old pose dims), two labels
 *  2 the First Law, three script lines + amber underline (right column)
 *  3 "the law is about:" — motion crossed out, CHANGE ringed
 *  4 green chip: constant v (zero included) = FREE state
 *  5 inertia definition line
 *  6 mass measures inertia: wagon vs handcart · ball vs shot put
 *  7 red margin: inertial frames only, fictitious force
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · floor y215 x100..530 · train x130..470 y112..200 ·
 *  windows y128..152 · wheels cy207 r8 · person feet y200 head cy138
 *  b1 | arrow (476,158)→(548,158) · "jerk!" cx512 bl 142 ·
 *      labels cx300 bl 240 (green) / bl 264 (red)
 *  b2 | lines st x572 bl 128/152/176 sz14 · underline y190 x572..872
 *  b3 | "law is about:" st x572 bl 236 · motion cx760 bl 236 (cross box
 *      x730..790) · CHANGE cx880 bl 238 ring c(880,233) rx47 ry24
 *  b4 | chip x220..860 y284..320, text sz16
 *  b5 | line cx540 bl 352 sz15
 *  b6 | wagon x150..280 y392..442 · handcart x330..400 y417..442 ·
 *      ball c(660,415) r10 · shot c(820,418) r16 · labels bl 462 ·
 *      summary cx540 bl 492
 *  b7 | bar x66 y515..570 · lines st x84 bl 534 / 560
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
  ringD,
  crossD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const circleD = (cx: number, cy: number, r: number) =>
  `M ${cx - r} ${cy} a ${r} ${r} 0 1 0 ${2 * r} 0 a ${r} ${r} 0 1 0 ${-2 * r} 0`;

export default function Ch04Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the crowded local, before the jerk */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Newton's First Law — it is CHANGE that needs a force",
            "Newton's First Law — force sirf CHANGE ko chahiye"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2)} d="M 100 215 H 530" stroke={INK} sw={2.6} dur={0.5} />
      <Draw
        on={beat >= 0}
        delay={dl(0, 2.8)}
        d="M 142 112 h 316 q 12 0 12 12 v 64 q 0 12 -12 12 h -316 q -12 0 -12 -12 v -64 q 0 -12 12 -12"
        stroke={INK}
        sw={2.6}
        dur={1.1}
      />
      <Draw
        on={beat >= 0}
        delay={dl(0, 4.2)}
        d="M 160 128 h 40 v 24 h -40 z M 230 128 h 40 v 24 h -40 z M 390 128 h 40 v 24 h -40 z"
        stroke={MUTED}
        sw={2}
        dur={0.7}
      />
      <Draw
        on={beat >= 0}
        delay={dl(0, 5)}
        d={`${circleD(190, 207, 8)} ${circleD(410, 207, 8)}`}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      {/* upright passenger — becomes the dim "before" once the jerk lands */}
      <Fade on={beat >= 0} delay={dl(0, 5.8)} dim={beat >= 1}>
        <Draw
          on={beat >= 0}
          delay={dl(0, 5.8)}
          d={`${circleD(310, 138, 9)} M 310 147 V 180 M 310 156 L 296 170 M 310 156 L 324 170 M 310 180 L 298 200 M 310 180 L 322 200`}
          stroke={INK}
          sw={2.4}
          dur={1}
        />
      </Fade>

      {/* beat 1 — the jerk: floor leaves, torso stays */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d={arrowD(476, 158, 548, 158)}
        stroke={AMBER}
        sw={3}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={512} y={142} size={14} fill={AMBER_DARK} script>
          {t("jerk!", "jhatka!")}
        </T>
      </Fade>
      {/* tilted passenger: feet went with the floor, torso stayed behind */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.6)}
        d={`${circleD(312, 141, 9)} M 315 150 L 338 180 M 320 157 L 306 172 M 320 157 L 334 168 M 338 180 L 326 200 M 338 180 L 350 200`}
        stroke={RED}
        sw={2.4}
        dur={1}
      />
      <Fade on={beat >= 1} delay={dl(1, 5.5)}>
        <T x={300} y={240} size={14} fill={GREEN} script>
          {t("feet go with the floor", "feet floor ke saath chale gaye")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8.5)}>
        <T x={300} y={264} size={14} fill={RED} script>
          {t("torso stays — NOBODY pushed you", "torso wahi raha — kisi ne push NAHI kiya")}
        </T>
      </Fade>

      {/* beat 2 — the law itself */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={572} y={128} size={14} fill={INK} script anchor="start">
          {t("a body continues in its state of rest,", "body apni rest ki state mein,")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={572} y={152} size={14} fill={INK} script anchor="start">
          {t(
            "or of uniform straight-line motion,",
            "ya uniform straight-line motion mein, bani rehti hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7.5)}>
        <T x={572} y={176} size={14} fill={INK} script anchor="start">
          {t(
            "unless a net external force compels a change",
            "jab tak net external force badalne par majboor na kare"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 11)} d="M 572 190 h 300" stroke={AMBER} sw={3} dur={0.5} />

      {/* beat 3 — not motion. change. */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={572} y={236} size={14} fill={INK} script anchor="start">
          {t("the law is about:", "law kis baare mein hai:")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={760} y={236} size={20} fill={INK} weight={700}>
          motion
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 3.4)}
        d={crossD(730, 220, 60, 21)}
        stroke={RED}
        sw={3}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 4.6)}>
        <T x={880} y={238} size={22} fill={GREEN} weight={800}>
          CHANGE
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 5.6)}
        d={ringD(880, 233, 47, 24)}
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
      />

      {/* beat 4 — the free state */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <Chip
          x={220}
          y={284}
          w={640}
          h={36}
          fill={CREAM}
          stroke={GREEN}
          textFill={GREEN}
          size={16}
        >
          {t(
            "constant velocity (zero included) = the FREE state — no force needed",
            "constant velocity (zero bhi) = FREE state — koi force nahi chahiye"
          )}
        </Chip>
      </Fade>

      {/* beat 5 — naming the stubbornness */}
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={540} y={352} size={15} fill={AMBER_DARK} script>
          {t(
            "inertia = matter's refusal to change its state — not a force, a stubbornness",
            "inertia = state badalne se matter ka inkaar — koi force nahi, sirf zid"
          )}
        </T>
      </Fade>

      {/* beat 6 — mass measures it */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 150 392 h 130 v 50 h -130 z"
        stroke={INK}
        sw={2.6}
        dur={0.8}
      />
      <Fade on={beat >= 6} delay={dl(6, 1.8)}>
        <T x={215} y={462} size={13} fill={RED} script>
          {t("loaded wagon — brutal", "bhara wagon — mushkil")}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 3.2)}
        d="M 330 417 h 70 v 25 h -70 z"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 6} delay={dl(6, 3.9)}>
        <T x={365} y={462} size={13} fill={GREEN} script>
          {t("handcart — easy", "handcart — aasaan")}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 6.5)}
        d={circleD(660, 415, 10)}
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 6} delay={dl(6, 7.2)}>
        <T x={660} y={462} size={13} fill={GREEN} script>
          {t("ball — one flick", "ball — ek flick")}
        </T>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 9)}
        d={circleD(820, 418, 16)}
        stroke={INK}
        sw={2.6}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 9.7)}>
        <T x={820} y={462} size={13} fill={RED} script>
          {t("shot put — wrist alarm", "shot put — wrist ka alarm")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 13)}>
        <T x={540} y={492} size={14} fill={AMBER_DARK} script>
          {t(
            "more mass = more inertia — that is all mass measures here",
            "zyada mass = zyada inertia — mass yahi naapta hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the exam catch */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 515 v 55" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={84} y={534} size={14} fill={RED} script anchor="start">
          {t(
            "exam catch: Newton's laws hold only in INERTIAL frames",
            "exam catch: Newton's laws sirf INERTIAL frames mein chalte hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={84} y={560} size={14} fill={RED} script anchor="start">
          {t(
            "the jerking train is NOT one — its backward push is fictitious",
            "jhatke waali train aisi frame NAHI — uska backward push fictitious hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
