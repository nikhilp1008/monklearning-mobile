/**
 * Ch05 · Section 28 — "The three tests: path, loop, and recovery"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.7, 25.0, 49.4, 74.2, 99.1, 123.1] · dur 148.0;
 *        hi [0, 12.9, 25.4, 50.3, 73.6, 98.5, 121.2] · dur 146.0):
 *  0 title + subtitle
 *  1 home→market drawing: two routes, Δh
 *  2 gravity: path independence
 *  3 friction: path dependence
 *  4 round trip: 0 vs charged-both-ways
 *  5 three-test panel
 *  6 verdict: one property, three faces
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl82
 *  b1 | ground (90,275)-(500,275) · house x110..170 y210..260 + roof
 *     | market x400..480 y140..190 · straight (175,240)-(398,182)
 *     | winding M175,248 C.. · "home" cx140 bl298 · "market" cx440 bl130
 *     | Δh dash (490,190)-(490,272) · lbl st x498 bl235
 *     | lane lbl (290,170) · winding lbl (285,322)
 *  b2 | right col cx790 bl140 / bl166 · b3 | bl206 / bl232
 *  b4 | bl272 / bl300 / bl326
 *  b5 | panel x540..1040 y350..470 · lines st x560 bl378/404/430
 *  b6 | bar x66 y500..585 · lines st x84 bl520 / bl546 / bl572
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("The Three Tests: Path, Loop, Recovery", "Teen Tests: Path, Loop, Recovery")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t(
            "three faces of a single property — and they always agree",
            "ek hi property ke teen chehre — aur wo hamesha sehmat rehte hain"
          )}
        </T>
      </Fade>

      {/* beat 1 — home, market, two routes */}
      <Draw on={beat >= 1} delay={dl(1, 0.8)} d="M 90 275 H 500" stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d="M 110 260 V 210 L 140 185 L 170 210 V 260 Z" stroke={INK} sw={2} dur={0.8} />
      <Draw on={beat >= 1} delay={dl(1, 2.8)} d="M 400 190 V 145 H 480 V 190 Z M 400 190 H 480" stroke={INK} sw={2} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        <T x={140} y={298} size={12.5} fill={MUTED} script>
          {t("home", "ghar")}
        </T>
        <T x={440} y={130} size={12.5} fill={MUTED} script>
          {t("market", "bazaar")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 5)} d="M 175 240 L 398 182" stroke={AMBER_DARK} sw={2.2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 5.8)}>
        <T x={290} y={170} size={12} fill={AMBER_DARK} script>
          {t("short straight lane", "chhoti seedhi gali")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 7)}
        d="M 175 248 C 230 300, 280 140, 340 220 C 370 260, 385 200, 398 188"
        stroke={AMBER_DARK}
        sw={2.2}
        dur={1}
      />
      <Fade on={beat >= 1} delay={dl(1, 8.2)}>
        <T x={285} y={322} size={12} fill={AMBER_DARK} script>
          {t("long winding route", "lamba ghumavdar raasta")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 9.5)} d="M 490 194 v 12 m 0 10 v 12 m 0 10 v 12 m 0 10 v 10" stroke={MUTED} sw={1.6} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 10.2)}>
        <T x={498} y={235} size={13} fill={INK} anchor="start" weight={700}>
          Δh
        </T>
      </Fade>

      {/* beat 2 — gravity, path independent */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={790} y={140} size={13} fill={INK} script>
          {t(
            "gravity's bill: same on both — only Δh matters",
            "gravity ka bill: dono par same — sirf Δh mayne rakhta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 12)}>
        <T x={790} y={166} size={13} fill={GREEN} script>
          {t(
            "path INDEPENDENCE — signature #1 of conservative",
            "path INDEPENDENCE — conservative ka pehla hastakshar"
          )}
        </T>
      </Fade>

      {/* beat 3 — friction, path dependent */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={790} y={206} size={13} fill={INK} script>
          {t(
            "friction charges every metre — winding tires you more",
            "friction har metre par vasoolta hai — ghumavdar zyada thakata hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 12)}>
        <T x={790} y={232} size={13} fill={RED} script>
          {t(
            "path DEPENDENCE — the skimmer's fingerprint",
            "path DEPENDENCE — kaatne waale ka fingerprint"
          )}
        </T>
      </Fade>

      {/* beat 4 — the round trip */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={790} y={272} size={13} fill={AMBER_DARK} script>
          {t("round trip — end where you began:", "round trip — wahin khatam jahan shuru:")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7)}>
        <T x={790} y={300} size={13} fill={GREEN} script>
          {t("gravity: total W = exactly 0", "gravity: kul W = bilkul 0")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 14)}>
        <T x={790} y={326} size={13} fill={RED} script>
          {t(
            "friction: charged both ways — exhausted, all heat",
            "friction: dono baar vasoola — thake hue, sab heat"
          )}
        </T>
      </Fade>

      {/* beat 5 — the three tests */}
      <Draw on={beat >= 5} delay={dl(5, 1)} d="M 540 350 H 1040 V 470 H 540 Z" stroke={AMBER_DARK} sw={1.8} dur={0.8} />
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={560} y={378} size={13} fill={INK} script anchor="start">
          {t("1 · path-independent — endpoints only", "1 · path-independent — sirf endpoints")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <T x={560} y={404} size={13} fill={INK} script anchor="start">
          {t("2 · any closed loop → W = 0", "2 · koi bhi closed loop → W = 0")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 15)}>
        <T x={560} y={430} size={13} fill={INK} script anchor="start">
          {t("3 · fully recoverable → it has a U", "3 · poora recoverable → uska U hota hai")}
        </T>
      </Fade>

      {/* beat 6 — one property, three faces */}
      <Draw on={beat >= 6} delay={dl(6, 0.5)} d="M 66 500 v 85" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={84} y={520} size={13} fill={GREEN} script anchor="start">
          {t(
            "three faces of ONE property — pass one, pass all three",
            "EK property ke teen chehre — ek paas, teeno paas"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 11)}>
        <T x={84} y={546} size={13} fill={INK} script anchor="start">
          {t(
            "pass: gravity, spring, electrostatic · fail: friction, drag, air resistance",
            "paas: gravity, spring, electrostatic · fail: friction, drag, air resistance"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 18)}>
        <T x={84} y={572} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "in an exam, establish any ONE — the other two come free",
            "exam mein koi EK saabit karo — baaqi do muft milte hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
