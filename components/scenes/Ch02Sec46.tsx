/**
 * Ch02 · Section 46 — "Relative acceleration, and the free-fall shortcut"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.4, 31.6, 41.6, 59.7, 83.8, 108.6, 133.5]):
 *  0 title + formula card a_AB = a_A − a_B
 *  1 nothing-new line
 *  2 the-one-case line
 *  3 picture: two falling balls, both −g, the gap
 *  4 red note: a_AB = 0, always
 *  5 meaning lines: steady gap, gravity 'off'
 *  6 collapse card: s_rel = u_rel·t
 *  7 green: one-line division teaser
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 card x340..740 y85..145 (bl 122) · b1 line cx540 bl 172 · b2 line cx540 bl 200
 *  picture: A c(180,280) arrow →(180,346) "−g" st (194,326) · B c(300,340)
 *  arrow →(300,406) "−g" st (314,386) · gap dashed M186,288→294,332 · label cx240 bl 294
 *  b4 | bar x430 y240..300 · lines st x446 bl 260 / 286
 *  b5 | lines st x446 bl 330 / 354
 *  b6 | card x430..1030 y385..460 (bl 420 · sub bl 444)
 *  b7 | bar x66 y500..560 · lines st x84 bl 520 / 546
 */

import React from "react";
import { Path } from 'react-native-svg';
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

export default function Ch02Sec46({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the companion */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={23} fill={INK} script>
          {t(
            "relative acceleration — and the free-fall shortcut",
            "relative acceleration — aur free-fall ka shortcut"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 5)}
        d="M 352 85 h 376 q 12 0 12 12 v 36 q 0 12 -12 12 h -376 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 0} delay={dl(0, 6.2)}>
        <T x={540} y={122} size={22} fill={INK} weight={800}>
          a_AB = a_A − a_B
        </T>
      </Fade>

      {/* beat 1 — nothing new */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={540} y={172} size={12} fill={MUTED} script>
          {t(
            "same subtraction, same subscripts — one rung down the ladder: nothing new to learn",
            "wahi ghatana, wahi subscripts — seedhi ka ek paidan neeche: kuchh naya nahi"
          )}
        </T>
      </Fade>

      {/* beat 2 — the one case */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={540} y={200} size={12} fill={AMBER_DARK} script>
          {t(
            "now watch one specific case — the most elegant shortcut in this chapter",
            "ab ek khaas case dekho — is chapter ka sabse sundar shortcut"
          )}
        </T>
      </Fade>

      {/* beat 3 — both in free fall */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.8)}
        d="M 171 280 a 9 9 0 1 0 18 0 a 9 9 0 1 0 -18 0"
        stroke={INK}
        fill={INK}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.6)}
        d={arrowD(180, 296, 180, 346)}
        stroke={RED}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <T x={194} y={326} size={13} fill={RED} anchor="start" weight={700}>
          −g
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 3.6)}
        d="M 291 340 a 9 9 0 1 0 18 0 a 9 9 0 1 0 -18 0"
        stroke={INK}
        fill={INK}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 4.4)}
        d={arrowD(300, 356, 300, 406)}
        stroke={RED}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 5.2)}>
        <T x={314} y={386} size={13} fill={RED} anchor="start" weight={700}>
          −g
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6.5)}>
        <Path
          d="M 186 288 L 294 332"
          fill="none"
          stroke={MUTED}
          strokeWidth={1.5}
          strokeDasharray="5 6"
        />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7.5)}>
        <T x={240} y={294} size={11} fill={MUTED} script>
          {t("the gap", "beech ka gap")}
        </T>
      </Fade>

      {/* beat 4 — exactly zero */}
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d="M 430 240 v 60" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={446} y={260} size={14} fill={RED} script anchor="start">
          a_AB = −g − (−g) = 0 — {t("ALWAYS", "HAMESHA")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 9)}>
        <T x={446} y={286} size={13} fill={RED} script anchor="start">
          {t(
            "any masses, any speeds, any throw directions",
            "koi bhi mass, koi bhi speed, kisi bhi disha mein phenko"
          )}
        </T>
      </Fade>

      {/* beat 5 — gravity, switched off */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={446} y={330} size={12} fill={INK} script anchor="start">
          {t(
            "zero relative a ⇒ each sees the other drift at CONSTANT relative velocity",
            "zero relative a ⇒ har ek ko doosra CONSTANT relative velocity se sarakta dikhta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 10)}>
        <T x={446} y={354} size={12} fill={INK} script anchor="start">
          {t(
            "both accelerating madly — yet the gap changes steadily, as if gravity were off",
            "dono zor se accelerate karte — phir bhi gap ek chaal se badalta, jaise gravity band ho"
          )}
        </T>
      </Fade>

      {/* beat 6 — the collapse */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 442 385 h 576 q 12 0 12 12 v 51 q 0 12 -12 12 h -576 q -12 0 -12 -12 v -51 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={730} y={420} size={20} fill={INK} weight={800}>
          s_rel = u_rel · t
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={730} y={444} size={11} fill={GREEN} script>
          {t(
            "the ½gt² term vanished — no t² anywhere",
            "½gt² waala term gayab — t² kahin nahi"
          )}
        </T>
      </Fade>

      {/* beat 7 — one division */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 500 v 60" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={520} size={13} fill={GREEN} script anchor="start">
          {t(
            "a quadratic-looking problem becomes one division: t = distance ⁄ relative speed",
            "quadratic jaisa dikhta sawaal ek bhaag ban jaata hai: t = doori ⁄ relative speed"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={84} y={546} size={13} fill={GREEN} script anchor="start">
          {t(
            "two balls 100 m apart will meet in a single line — coming up in example 4",
            "100 m door do gendein ek hi line mein milengi — example 4 mein aa raha hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
