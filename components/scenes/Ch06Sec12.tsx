/**
 * Ch06 · Section 12 — "Common pitfalls and pro-tips" (Center of Mass)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.45, 20.65, 31.49, 41.56, 55.3, 68.27, 84.39]):
 *  0 title + underline
 *  1 trap 1: not a midpoint — mini rod with M/m blocks, CoM dot near M
 *  2 green reflex line + arrow leaning toward M
 *  3 trap 2 header: wire ≠ disc
 *  4 two chips 2R/π vs 4R/3π + arc/filled icons + "both options" warning
 *  5 trap 3: internal forces line + anchor sub
 *  6 trap 4: negative-mass signs + flip warning
 *  7 pro-tip green box: ratio form + direction check
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title script24 cx540 bl 52 · underline y72 x330..750
 *  b1 | L1 script14 st x100 bl 130 · L2 script12 st x120 bl 158 ·
 *       rod (680,150)-(930,150) · M rect x680..714 y112..146 · m rect x905..925
 *       y126..146 · CoM dot (760,150) · "CoM" cx760 bl 178
 *  b2 | line script13 st x100 bl 200 · arrow (880,95)→(740,95) green
 *  b3 | header script14 st x100 bl 245
 *  b4 | chipA x120 y262 w270 h40 · chipB x430 y262 w300 h40 · arc icon (790..846,300) ·
 *       filled icon (880..936,300) · labels script11 cx818/908 bl 322 ·
 *       warning script12 st x120 bl 340
 *  b5 | header script14 st x100 bl 385 · sub script12 st x120 bl 412
 *  b6 | header script14 st x100 bl 450 · sub script12 st x120 bl 477
 *  b7 | green box x100..980 y495..580 · L1 script14 cx540 bl 525 · L2 script12 cx540 bl 557
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
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch06Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the four traps */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={24} fill={INK} script>
          {t("pitfalls that cost easy marks", "galtiyan jo aasan marks kha jaati hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 330 72 h 420" stroke={RED} sw={2.2} dur={0.7} />

      {/* beat 1 — trap 1: not a midpoint */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={100} y={130} size={14} fill={RED} script anchor="start">
          {t(
            "1 · CoM is NOT the midpoint — it's mass-weighted",
            "1 · CoM seedha midpoint NAHI — mass-weighted hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={120} y={158} size={12} fill={MUTED} script anchor="start">
          {t(
            "exactly halfway only for EQUAL masses",
            "theek beech mein sirf EQUAL masses par"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3)} d="M 680 150 H 930" stroke={INK} sw={2.4} dur={0.6} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.8)}
        d="M 680 112 h 34 v 34 h -34 z"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 4.4)}>
        <T x={697} y={134} size={14} fill={INK} weight={700}>
          M
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 5)}
        d="M 905 126 h 20 v 20 h -20 z"
        stroke={INK}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 5.5)}>
        <T x={915} y={140} size={11} fill={INK} weight={700}>
          m
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 7)}
        d="M 755 150 a 5 5 0 1 0 10 0 a 5 5 0 1 0 -10 0"
        stroke={RED}
        fill={RED}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 7.8)}>
        <T x={760} y={178} size={12} fill={RED} weight={700}>
          CoM
        </T>
      </Fade>

      {/* beat 2 — the reflex */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 3.5)}
        d={arrowD(880, 95, 740, 95)}
        stroke={GREEN}
        sw={2.4}
        dur={0.6}
      />
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={100} y={200} size={13} fill={GREEN_DARK} script anchor="start">
          {t(
            "reflex: lean toward the heavier mass — then CHECK it did ✓",
            "reflex: bhaari mass ki taraf jhukao — phir CHECK karo ✓"
          )}
        </T>
      </Fade>

      {/* beat 3 — trap 2 header */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={100} y={245} size={14} fill={RED} script anchor="start">
          {t(
            "2 · wire ≠ disc — the deadliest mix-up",
            "2 · wire ≠ disc — sabse ghaatak confusion"
          )}
        </T>
      </Fade>

      {/* beat 4 — tattoo these two */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <Chip x={120} y={262} w={270} h={40} fill={CREAM} stroke={AMBER} textFill={INK} size={16} script={false}>
          {t("wire (arc):  2R/π", "wire (arc):  2R/π")}
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.5)}>
        <Chip x={430} y={262} w={300} h={40} fill={CREAM} stroke={AMBER} textFill={INK} size={16} script={false}>
          {t("disc (filled):  4R/3π", "disc (bhari):  4R/3π")}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 5.5)}
        d="M 790 300 A 28 28 0 0 1 846 300"
        stroke={INK}
        sw={3}
        dur={0.5}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 6.2)}
        d="M 880 300 A 28 28 0 0 1 936 300 z"
        stroke={INK}
        sw={2}
        dur={0.5}
        fill={AMBER}
      />
      <Fade on={beat >= 4} delay={dl(4, 7)}>
        <T x={818} y={322} size={11} fill={MUTED} script>
          wire
        </T>
        <T x={908} y={322} size={11} fill={MUTED} script>
          disc
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 9)}>
        <T x={120} y={340} size={12} fill={RED} script anchor="start">
          {t(
            "examiners put BOTH in the options — on purpose",
            "examiners dono ko options mein rakhte hain — jaan-boojh kar"
          )}
        </T>
      </Fade>

      {/* beat 5 — trap 3 */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={100} y={385} size={14} fill={RED} script anchor="start">
          {t(
            "3 · internal forces NEVER move the CoM",
            "3 · internal forces CoM ko KABHI nahi hilate"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={120} y={412} size={12} fill={GREEN_DARK} script anchor="start">
          {t(
            "explosion / recoil / man-on-boat → anchor to the CoM first",
            "explosion / recoil / naav → pehle CoM ko anchor karo"
          )}
        </T>
      </Fade>

      {/* beat 6 — trap 4 */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={100} y={450} size={14} fill={RED} script anchor="start">
          {t(
            "4 · negative mass: minus in numerator AND denominator",
            "4 · negative mass: minus numerator AUR denominator dono mein"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={120} y={477} size={12} fill={RED} script anchor="start">
          {t(
            "drop one sign → the CoM flips to the wrong side",
            "ek sign chhoota → CoM galat taraf palat jaata hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the pro-tip */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.8)}
        d="M 112 495 h 856 q 12 0 12 12 v 61 q 0 12 -12 12 h -856 q -12 0 -12 -12 v -61 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.9}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 2.2)}>
        <T x={540} y={525} size={14} fill={GREEN_DARK} script>
          {t(
            "PRO-TIP: ratio form + direction check — the CoM always shifts AWAY from the hole",
            "PRO-TIP: ratio form + direction check — CoM hamesha hole se DOOR khisakta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={540} y={557} size={12} fill={MUTED} script>
          {t(
            "catches half of all sign slips — 30 seconds saved per question [NEET]",
            "aadhi sign mistakes pakad leta hai — har question par 30 second bachat [NEET]"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
