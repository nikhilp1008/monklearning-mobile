/**
 * Ch07 · Section 28 — "Gravity cannot be shielded — and g is the field"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.34, 18.18, 28.93, 40.45, 48.98, 49.98, 50.98]):
 *  0 title
 *  1 Faraday cage panel: box, +, E arrows stop at wall, E = 0 inside
 *  2 gravity panel: box, arrows sail straight through
 *  3 red: cannot block/absorb/screen
 *  4 two reasons (amber lines)
 *  5 contrast line: gravity has no opposite
 *  6 mass reaches through everything
 *  7 green box: g ≡ field strength
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52
 *  left box x120..340 y140..280 · "+" (230,220) · E arrows (60,180)→(112,180) / (60,250)→(112,250) ·
 *   "E = 0" cx230 bl258 · caption cx230 bl320
 *  right box x560..780 y140..280 · through-arrows (500,180)→(740,180) / (500,250)→(740,250) ·
 *   caption cx670 bl320
 *  b3 | bar x66 y362..390 · line st x84 bl382
 *  b4 | lines st x84 bl420 / 448
 *  b5 | line st x560 bl420 · b6 | line st x560 bl448
 *  b7 | green box x280..800 y490..542 (bl522)
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch07Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the one-liner examiners love */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "There is no Faraday cage for gravity",
            "Gravity ke liye koi Faraday cage nahi"
          )}
        </T>
      </Fade>

      {/* beat 1 — electricity can be caged */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 1)}
        d="M 120 140 h 220 v 140 h -220 Z"
        stroke={INK}
        sw={2.6}
        dur={0.7}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={230} y={225} size={16} fill={INK} weight={800}>
          +
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.4)}
        d={arrowD(60, 180, 112, 180)}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.9)}
        d={arrowD(60, 250, 112, 250)}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.6)}>
        <T x={230} y={258} size={13} fill={GREEN} weight={800}>
          E = 0
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <T x={230} y={320} size={12} fill={INK} script>
          {t(
            "Faraday cage: the E-field stops at the walls",
            "Faraday cage: E-field deewaron par ruk jaata hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — gravity sails through */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d="M 560 140 h 220 v 140 h -220 Z"
        stroke={INK}
        sw={2.6}
        dur={0.7}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.6)}
        d={arrowD(500, 180, 740, 180)}
        stroke={GREEN}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.4)}
        d={arrowD(500, 250, 740, 250)}
        stroke={GREEN}
        sw={2.2}
        dur={0.8}
      />
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={670} y={320} size={12} fill={INK} script>
          {t(
            "gravity sails straight through — untouched",
            "gravity seedha aar-paar — bina chhue"
          )}
        </T>
      </Fade>

      {/* beat 3 — no blocking, ever */}
      <Draw on={beat >= 3} delay={dl(3, 0.5)} d="M 66 362 v 28" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={84} y={382} size={13} fill={RED} script anchor="start">
          {t(
            "no material, no shell can block, absorb or screen gravity",
            "koi material, koi shell gravity ko block/absorb/screen nahi kar sakta"
          )}
        </T>
      </Fade>

      {/* beat 4 — the twofold reason */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={84} y={420} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "reason 1 — independent of the medium in between",
            "wajah 1 — beech ke medium se independent"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={84} y={448} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "reason 2 — no negative mass to cancel it",
            "wajah 2 — cancel karne ko koi negative mass nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — gravity has no opposite */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={560} y={420} size={13} fill={INK} script anchor="start">
          {t(
            "electricity: opposites + dielectrics · gravity: NO opposite",
            "electricity: opposites + dielectrics · gravity: koi opposite NAHI"
          )}
        </T>
      </Fade>

      {/* beat 6 — mass reaches through everything */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={560} y={448} size={13} fill={INK} script anchor="start">
          {t(
            "wherever there is mass, its pull reaches through everything",
            "jahan mass hai, uski kheench har cheez ke aar-paar"
          )}
        </T>
      </Fade>

      {/* beat 7 — g IS the field */}
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <Draw
          on={beat >= 7}
          delay={dl(7, 0.8)}
          d="M 292 490 h 496 q 12 0 12 12 v 28 q 0 12 -12 12 h -496 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
          stroke={GREEN}
          sw={2.4}
          dur={0.6}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={540} y={522} size={14} fill={INK} weight={800}>
          {t(
            "g at any point ≡ the field strength there — felt as acceleration",
            "kisi bhi point par g ≡ wahan ki field strength — acceleration ki tarah"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
