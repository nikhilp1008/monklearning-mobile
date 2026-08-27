/**
 * Ch02 · Section 48 — "Limiting conditions and the antisymmetry check"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.7, 27.1, 52, 63.7, 86.4, 106.8, 123.9]):
 *  0 title
 *  1 fence 1 chip: 1-D, ± signs · sub line
 *  2 line: a subtraction, not a construction
 *  3 antisymmetry card: v_AB = −v_BA
 *  4 facing arrows picture + red words
 *  5 green: the free check
 *  6 fence 3 line: Galilean, speeds ≪ c
 *  7 red: the relativistic boundary
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 chip x220..860 y90..126 · sub cx540 bl 152 · b2 line cx540 bl 182
 *  b3 card x330..750 y210..270 (bl 248) · sub cx540 bl 292
 *  b4 arrows y345: (160→300) lbl cx230 bl 328 · (920→780) lbl cx850 bl 328 ·
 *     lines cx540 bl 380 / 404
 *  b5 | bar x66 y430..484 · lines st x84 bl 450 / 476
 *  b6 | line st x84 bl 508
 *  b7 | bar x66 y524..580 · lines st x84 bl 542 / 568
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec48({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the fences */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={23} fill={INK} script>
          {t(
            "the fences — and one check they hand you free",
            "baad — aur ek jaanch jo muft milti hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — one dimension */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <Chip x={220} y={90} w={640} h={36} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={13}>
          {t(
            "fence 1 — one dimension: directions reduce to ± signs",
            "baad 1 — ek dimension: dishaayein ± sign ban jaati hain"
          )}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={540} y={152} size={11} fill={MUTED} script>
          {t(
            "no vector triangles · no components · no angles · no parallelogram law",
            "na vector triangle · na components · na angles · na parallelogram law"
          )}
        </T>
      </Fade>

      {/* beat 2 — arithmetic, not construction */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={540} y={182} size={12} fill={AMBER_DARK} script>
          {t(
            "so relative velocity is a SUBTRACTION, not a vector construction — plain arithmetic",
            "isliye relative velocity GHATANA hai, vector banana nahi — seedha hisaab"
          )}
        </T>
      </Fade>

      {/* beat 3 — antisymmetry */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.6)}
        d="M 342 210 h 396 q 12 0 12 12 v 36 q 0 12 -12 12 h -396 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={540} y={248} size={22} fill={INK} weight={800}>
          v_AB = − v_BA
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={540} y={292} size={11} fill={MUTED} script>
          {t(
            "swap the subscripts → the sign flips",
            "subscripts palto → sign palat jaata hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — of course they agree */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d={arrowD(160, 345, 300, 345)}
        stroke={INK}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={230} y={328} size={11} fill={INK} script>
          {t("A sees B: 25, this way", "A ko B: 25, is taraf")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 3)}
        d={arrowD(920, 345, 780, 345)}
        stroke={INK}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 3.8)}>
        <T x={850} y={328} size={11} fill={INK} script>
          {t("B sees A: 25, that way", "B ko A: 25, us taraf")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6.5)}>
        <T x={540} y={380} size={13} fill={RED} script>
          {t(
            "they must AGREE on how fast — and disagree only on which way",
            "kitni tez, is par SEHMAT hona hi hai — fark sirf disha ka"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 12)}>
        <T x={540} y={404} size={13} fill={RED} script>
          {t("same magnitude, opposite sign. always.", "wahi magnitude, ulta sign. hamesha.")}
        </T>
      </Fade>

      {/* beat 5 — the free check */}
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d="M 66 430 v 54" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={84} y={450} size={13} fill={GREEN} script anchor="start">
          {t(
            "free check: swap the subscripts ⇒ your answer must ONLY flip sign",
            "muft jaanch: subscripts palto ⇒ jawaab ka SIRF sign palte"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={84} y={476} size={13} fill={GREEN} script anchor="start">
          {t(
            "different magnitudes for v_AB and v_BA = an arithmetic slip, caught early",
            "v_AB aur v_BA ke magnitude alag = hisaab ki chook, jaldi pakdi gayi"
          )}
        </T>
      </Fade>

      {/* beat 6 — the Galilean fence */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={84} y={508} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "fence 3 — this is the GALILEAN rule: valid while speeds ≪ the speed of light",
            "baad 3 — yeh GALILEAN rule hai: jab tak speeds ≪ roshni ki speed"
          )}
        </T>
      </Fade>

      {/* beat 7 — the boundary, honestly drawn */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 524 v 56" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={542} size={13} fill={RED} script anchor="start">
          {t(
            "relativistic speeds need Einstein's addition — light beams do not close at 2c",
            "relativistic speeds ko Einstein ka jod chahiye — roshni 2c se paas nahi aati"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={84} y={568} size={13} fill={RED} script anchor="start">
          {t(
            "for trains, cars, cricket balls and your whole syllabus: exact for every practical purpose",
            "trains, gaadiyon, cricket balls aur poore syllabus ke liye: har kaam ke liye exact"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
