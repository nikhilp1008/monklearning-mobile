/**
 * Ch05 · Section 18 — "Two flavours of energy: motion and position"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 21.2, 34.7, 46.7, 68.4, 76.6, 101.5, 118.1] · dur 142.9;
 *        hi [0, 21.8, 37.4, 52.1, 72.2, 80.0, 104.8, 121.4] · dur 146.3):
 *  0 title + subtitle
 *  1 split board: KINETIC | POTENTIAL headers + divider
 *  2 kinetic definition lines
 *  3 cricket-ball contrast: resting vs 140 km/h
 *  4 K = ½mv² chip
 *  5 two features: always +, v² growth
 *  6 potential definition lines
 *  7 bow / stone-at-edge / spring icons + locked-energy lines
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl84
 *  b1 | divider x540 y110..480 · headers cx290 / cx810 bl130
 *  b2 | cx290 bl165 · muted bl191
 *  b3 | ground (110,278)-(240,278) · ball1 (150,260) r14 · "harmless" cx160 bl305
 *     | ball2 (330,255) r14 + speed lines · "140 km/h" cx340 bl225 · red cx345 bl305
 *     | green cx250 bl345
 *  b4 | chip x170..390 y365..405
 *  b5 | green cx280 bl435 · red cx280 bl461
 *  b6 | cx810 bl165 · muted bl191
 *  b7 | bow cx645 y240..320 · terrace (760,300)-(840,300)-(840,340) · stone (825,288) r10
 *     | spring x895..955 y295..325 · labels bl370 · scripts cx810 bl408 / bl434 · amber bl470
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
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Two Flavours of Energy", "Energy ke Do Flavours")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 8)}>
        <T x={540} y={84} size={13} fill={MUTED} script>
          {t(
            "almost every problem is a story of one turning into the other",
            "lagbhag har sawaal ek ke doosre mein badalne ki kahani hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — the split */}
      <Draw on={beat >= 1} delay={dl(1, 1)} d="M 540 110 V 480" stroke={MUTED} sw={1.6} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={290} y={130} size={16} fill={AMBER_DARK} script>
          {t("KINETIC — motion", "KINETIC — motion")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={810} y={130} size={16} fill={AMBER_DARK} script>
          {t("POTENTIAL — position", "POTENTIAL — position")}
        </T>
      </Fade>

      {/* beat 2 — kinetic defined */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={290} y={165} size={13} fill={INK} script>
          {t("energy simply because it is MOVING", "energy sirf isliye ki wo HIL rahi hai")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={290} y={191} size={12.5} fill={MUTED} script>
          {t("no position, no history — just now", "na position, na itihaas — bas abhi")}
        </T>
      </Fade>

      {/* beat 3 — the cricket ball */}
      <Draw on={beat >= 3} delay={dl(3, 1)} d="M 110 278 H 240" stroke={INK} sw={2.2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 2)} d="M 136 260 a 14 14 0 1 0 28 0 a 14 14 0 1 0 -28 0" stroke={INK} sw={2.2} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={160} y={305} size={12.5} fill={MUTED} script>
          {t("harmless — rest your hand on it", "haanirahit — haath rakh lo")}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 8)} d="M 316 255 a 14 14 0 1 0 28 0 a 14 14 0 1 0 -28 0" stroke={INK} sw={2.2} dur={0.5} />
      <Draw on={beat >= 3} delay={dl(3, 8.6)} d="M 285 248 h 22 M 282 258 h 19 M 285 268 h 22" stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 9.5)}>
        <T x={340} y={225} size={13} fill={AMBER_DARK} script>
          140 km/h
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 11)}>
        <T x={345} y={305} size={12.5} fill={RED} script>
          {t("cracks a helmet", "helmet tod deti hai")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 16)}>
        <T x={250} y={345} size={13} fill={GREEN} script>
          {t("nothing changed except the motion", "motion ke siwa kuchh nahi badla")}
        </T>
      </Fade>

      {/* beat 4 — the formula */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <Chip x={170} y={365} w={220} h={40} fill={CREAM} stroke={GREEN} textFill={INK} size={17} script={false}>
          K = ½ m v²
        </Chip>
      </Fade>

      {/* beat 5 — two features */}
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={280} y={435} size={13} fill={GREEN} script>
          {t(
            "always + — speed², direction irrelevant",
            "hamesha + — speed², direction bemaani"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 14)}>
        <T x={280} y={461} size={13} fill={RED} script>
          {t(
            "2× v → 4× K — why fast crashes are brutal",
            "2× v → 4× K — tez hadse isiliye vinashkari"
          )}
        </T>
      </Fade>

      {/* beat 6 — potential defined */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={810} y={165} size={13} fill={INK} script>
          {t(
            "stored because of position or configuration",
            "position ya configuration ki wajah se jama"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={810} y={191} size={12.5} fill={MUTED} script>
          {t(
            "really the system's — waiting to be released",
            "asal mein system ki — release ka intezar karti"
          )}
        </T>
      </Fade>

      {/* beat 7 — where it hides */}
      <Draw on={beat >= 7} delay={dl(7, 1.5)} d="M 645 240 q 45 40 0 80 M 645 240 L 620 280 L 645 320" stroke={INK} sw={2.2} dur={0.8} />
      <Draw on={beat >= 7} delay={dl(7, 3.5)} d="M 760 300 H 840 V 340" stroke={INK} sw={2.2} dur={0.6} />
      <Draw on={beat >= 7} delay={dl(7, 4.3)} d="M 811 288 a 10 10 0 1 0 20 0 a 10 10 0 1 0 -20 0" stroke={INK} sw={2.2} dur={0.4} />
      <Draw
        on={beat >= 7}
        delay={dl(7, 5.5)}
        d="M 895 295 V 325 M 955 295 V 325 M 895 320 l 10 -18 l 10 18 l 10 -18 l 10 18 l 10 -18 l 10 18"
        stroke={INK}
        sw={2}
        dur={0.8}
      />
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={645} y={370} size={12} fill={MUTED} script>
          {t("bowstring", "bowstring")}
        </T>
        <T x={800} y={370} size={12} fill={MUTED} script>
          {t("stone at the edge", "kinare par patthar")}
        </T>
        <T x={930} y={370} size={12} fill={MUTED} script>
          {t("pressed spring", "daba spring")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={810} y={408} size={13} fill={INK} script>
          {t(
            "nothing is moving — yet energy is locked in place",
            "kuchh nahi hil raha — phir bhi energy qaid hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 14)}>
        <T x={810} y={434} size={13} fill={GREEN} script>
          {t(
            "ready to convert the instant you let go",
            "jis pal chhodo, motion mein badalne ko taiyar"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 19)}>
        <T x={810} y={470} size={13} fill={AMBER_DARK} script>
          {t(
            "the whole trick: learn to read where it hides",
            "poora hunar: padhna seekho ki wo chhipi kahan hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
