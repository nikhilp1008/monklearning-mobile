/**
 * Ch02 · Section 5 — "Acceleration, retardation, and the zero-velocity trap"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.6, 22.5, 47.4, 72.2, 91.9, 111.5, 131.2]):
 *  0 title + red underline (the everyday word misleads)
 *  1 definition line: rate of change of ~~speed~~ → VELOCITY stamp
 *  2 two formula cards: ā = Δv/Δt · a = dv/dt = d²x/dt² · ladder note
 *  3 two panels: change MAGNITUDE (arrows grow) · change DIRECTION (turn) · verdict
 *  4 retardation: v → and a ← stacked arrows + note
 *  5 ball thrown up: ground, dashed path, ball at top, "v = 0" chip
 *  6 red g-arrow beside ball — not shrunk · "a = g" label
 *  7 green margin verdict: v and a independent at an instant
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title mid bl 56 · underline y70 x340..740
 *  b1 | "a = rate of change of" st x180 bl 118 · "speed" st x385 (crossed) ·
 *       "VELOCITY" st x460 · red aside st x580 bl 118
 *  b2 | cards x80..500 / x560..1000 y158..250 · headers bl 184 · formulas bl 218 ·
 *       note cx540 bl 275
 *  b3 | left cx275: header bl 322 · arrows y355 · sub bl 400 ·
 *       right cx650 (panel x520..780): header bl 322 · arrows y330..370 · sub bl 400 ·
 *       verdict cx400 bl 425
 *  b4 | v arrow (100,470)→(250,470) · "v" st 260 bl 476 · a arrow (250,502)→(110,502) ·
 *       "a" st 260 bl 508 · note st x320 bl 488
 *  b5 | ground x840..1010 y566 · dashed path x920 y560→415 · ball c(920,402) r9 ·
 *       chip x945..1035 y388..416
 *  b6 | g arrow (937,415)→(937,470) · label cx965 bl 495
 *  b7 | bar x56 y542..594 · lines st x70 bl 556 / 582
 */

import React from "react";
import { Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  arrowD,
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

export default function Ch02Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — head-on */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={56} size={24} fill={INK} script>
          {t(
            "acceleration — attack the definition head-on",
            "acceleration — definition par seedha hamla"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 4)}
        d="M 340 70 h 400"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* beat 1 — not speed. VELOCITY. */}
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={180} y={118} size={18} fill={INK} anchor="start" weight={700}>
          {t("a = rate of change of", "a = rate of change of")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={385} y={118} size={18} fill={MUTED} anchor="start" weight={700}>
          speed
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 3)}
        d={crossD(383, 102, 49, 20)}
        stroke={RED}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <T x={460} y={118} size={20} fill={GREEN} anchor="start" weight={800}>
          VELOCITY
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={580} y={118} size={12} fill={RED} script anchor="start">
          {t(
            "— the everyday word misleads you",
            "— rozmarra wala matlab bhatka deta hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — the two flavours, mirroring the velocity pair */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d="M 92 158 h 396 q 12 0 12 12 v 68 q 0 12 -12 12 h -396 q -12 0 -12 -12 v -68 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.7}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={290} y={184} size={13} fill={AMBER_DARK} script>
          {t("average", "average")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={290} y={218} size={20} fill={INK} weight={700}>
          ā = (v₂ − v₁) ⁄ (t₂ − t₁)
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 9)}
        d="M 572 158 h 416 q 12 0 12 12 v 68 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -68 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
      />
      <Fade on={beat >= 2} delay={dl(2, 10)}>
        <T x={780} y={184} size={13} fill={GREEN} script>
          {t("instantaneous", "instantaneous")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 11.5)}>
        <T x={780} y={218} size={20} fill={INK} weight={700}>
          a = dv⁄dt = d²x⁄dt²
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 19)}>
        <T x={540} y={275} size={13} fill={MUTED} script>
          {t(
            "same ladder, one rung further down",
            "wahi seedhi, bas ek paidan aur neeche"
          )}
        </T>
      </Fade>

      {/* beat 3 — two separate ways velocity can change */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={275} y={322} size={14} fill={AMBER_DARK} script>
          {t("change the MAGNITUDE", "MAGNITUDE badlo")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 2)}
        d={arrowD(140, 355, 230, 355)}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 2.8)}
        d={arrowD(270, 355, 430, 355)}
        stroke={INK}
        sw={3.2}
        dur={0.6}
      />
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={275} y={400} size={12} fill={MUTED} script>
          {t("speed up · slow down — |v| changes", "tez ho · dheema ho — |v| badalta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={650} y={322} size={14} fill={AMBER_DARK} script>
          {t("change the DIRECTION only", "sirf DIRECTION badlo")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 9.5)}
        d={arrowD(560, 370, 640, 370)}
        stroke={INK}
        sw={2.4}
        dur={0.5}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 10.5)}
        d={arrowD(660, 368, 718, 330)}
        stroke={INK}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 12)}>
        <T x={650} y={400} size={12} fill={MUTED} script>
          {t("turning, same speed", "mudna, speed wahi")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 16)}>
        <T x={400} y={425} size={14} fill={RED} script>
          {t(
            "either one is a change in velocity ⇒ acceleration",
            "dono hi velocity ka badlav hain ⇒ acceleration"
          )}
        </T>
      </Fade>

      {/* beat 4 — retardation */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d={arrowD(100, 470, 250, 470)}
        stroke={INK}
        sw={2.6}
        dur={0.6}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={260} y={476} size={16} fill={INK} anchor="start" weight={700}>
          v
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 2.6)}
        d={arrowD(250, 502, 110, 502)}
        stroke={RED}
        sw={2.6}
        dur={0.6}
      />
      <Fade on={beat >= 4} delay={dl(4, 3.4)}>
        <T x={260} y={508} size={16} fill={RED} anchor="start" weight={700}>
          a
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.5)}>
        <T x={320} y={488} size={13} fill={RED} script anchor="start">
          {t(
            "retardation = a opposite to v — just a minus sign",
            "retardation = a ulta v ke — bas ek minus sign"
          )}
        </T>
      </Fade>

      {/* beat 5 — the ball at the top */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 840 566 h 170 M 860 566 l -10 12 M 900 566 l -10 12 M 940 566 l -10 12 M 980 566 l -10 12"
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <Path
          d="M 920 560 V 415"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.8}
          strokeDasharray="6 6"
        />
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 3)}
        d="M 911 402 a 9 9 0 1 0 18 0 a 9 9 0 1 0 -18 0"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 4.5)}>
        <Chip
          x={945}
          y={388}
          w={90}
          h={28}
          fill={CREAM}
          stroke={AMBER}
          textFill={INK}
          size={15}
          script={false}
        >
          v = 0
        </Chip>
      </Fade>

      {/* beat 6 — gravity has not shrunk */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d={arrowD(937, 415, 937, 470)}
        stroke={RED}
        sw={2.8}
        dur={0.6}
      />
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={965} y={495} size={12} fill={RED} script>
          {t("a = g — not shrunk!", "a = g — chhota nahi hua!")}
        </T>
      </Fade>

      {/* beat 7 — independence */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 56 542 v 52" stroke={GREEN} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={70} y={556} size={13} fill={GREEN} script anchor="start">
          {t(
            "v and a are INDEPENDENT at an instant —",
            "ek pal par v aur a AZAAD hain —"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.5)}>
        <T x={70} y={582} size={13} fill={GREEN} script anchor="start">
          {t(
            "zero v with huge a · huge v with zero a — both happen",
            "zero v ke saath bada a · bade v ke saath zero a — dono hote hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
