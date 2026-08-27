/**
 * Ch02 · Section 59 — "The same ladder — you just climb it honestly"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.4, 21.4, 35.2, 36.2, 59.5, 76.1, 95.2]):
 *  0 title
 *  1 the ladder: x · v · a boxes (unchanged from sub-topic 2)
 *  2 red arrows right: differentiate (slope → derivative)
 *  3 green arrows left: integrate (area → integral)
 *  4 amber note: constant a = this ladder, pre-climbed
 *  5 red note: same ladder, climb honestly
 *  6 line: nothing new in spirit — heavier arithmetic
 *  7 green: only the willingness to integrate
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  boxes 90×70 y150..220 at cx 260/540/820 · letters bl 195 · names bl 242
 *  red arrows y130 (320→480, 600→760) labels bl 114
 *  green arrows y270 (760→600, 480→320) labels bl 296
 *  b4 | bar x66 y330..384 · lines st x84 bl 350 / 376
 *  b5 | bar x66 y404..458 · lines st x84 bl 424 / 450
 *  b6 | line cx540 bl 490
 *  b7 | bar x56 y515..570 · lines st x72 bl 534 / 560
 */

import React from "react";
import { G } from 'react-native-svg';
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

const BOX = (cx: number) =>
  `M ${cx - 33} 150 h 66 q 12 0 12 12 v 46 q 0 12 -12 12 h -66 q -12 0 -12 -12 v -46 q 0 -12 12 -12`;

export default function Ch02Sec59({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — how little is new */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={23} fill={INK} script>
          {t(
            "the same ladder — you just climb it honestly",
            "wahi seedhi — bas imaandaari se chadhna hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — you have seen this before */}
      {[260, 540, 820].map((cx, i) => (
        <G key={i}>
          <Draw
            on={beat >= 1}
            delay={dl(1, 0.8 + i * 1.8)}
            d={BOX(cx)}
            stroke={INK}
            sw={2.6}
            dur={0.6}
          />
          <Fade on={beat >= 1} delay={dl(1, 1.6 + i * 1.8)}>
            <T x={cx} y={195} size={30} fill={INK} weight={800}>
              {["x", "v", "a"][i]}
            </T>
          </Fade>
        </G>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={540} y={242} size={11} fill={MUTED} script>
          {t(
            "sub-topic 2's ladder — it has not changed at all",
            "sub-topic 2 waali seedhi — bilkul nahi badli"
          )}
        </T>
      </Fade>

      {/* beat 2 — down by differentiation */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d={arrowD(320, 130, 480, 130)}
        stroke={RED}
        sw={2.8}
        dur={0.6}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.6)}
        d={arrowD(600, 130, 760, 130)}
        stroke={RED}
        sw={2.8}
        dur={0.6}
      />
      <Fade on={beat >= 2} delay={dl(2, 2.6)}>
        <T x={540} y={114} size={12} fill={RED} script>
          {t(
            "differentiate — the graph's 'slope', in algebra's language",
            "differentiate — graph ka 'slope', algebra ki zubaan mein"
          )}
        </T>
      </Fade>

      {/* beat 3 — up by integration */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.8)}
        d={arrowD(760, 270, 600, 270)}
        stroke={GREEN}
        sw={2.8}
        dur={0.6}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.6)}
        d={arrowD(480, 270, 320, 270)}
        stroke={GREEN}
        sw={2.8}
        dur={0.6}
      />
      <Fade on={beat >= 3} delay={dl(3, 2.6)}>
        <T x={540} y={296} size={12} fill={GREEN} script>
          {t(
            "integrate — the graph's 'area', in algebra's language",
            "integrate — graph ka 'area', algebra ki zubaan mein"
          )}
        </T>
      </Fade>

      {/* beat 4 — where the three equations came from */}
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d="M 66 330 v 54" stroke={AMBER_DARK} sw={3.4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={84} y={350} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "constant a: climbing this ladder GAVE the three equations — we derived them that way",
            "constant a: isi seedhi ko chadh kar teeno equations MILE the — humne waise hi nikaale"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 10)}>
        <T x={84} y={376} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "they were never separate knowledge — the ladder, pre-climbed for one special case",
            "woh alag gyaan kabhi nahi the — wahi seedhi, ek khaas case ke liye pehle se chadhi hui"
          )}
        </T>
      </Fade>

      {/* beat 5 — nobody moved the ladder */}
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d="M 66 404 v 54" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={84} y={424} size={13} fill={RED} script anchor="start">
          {t(
            "variable a: the SAME ladder — nobody moved it, the rungs are where they were",
            "variable a: WAHI seedhi — kisi ne hilaayi nahi, paidan wahin hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={84} y={450} size={13} fill={RED} script anchor="start">
          {t(
            "you just do the integral honestly, instead of reading someone else's answer",
            "bas integral khud imaandaari se karo, kisi aur ka jawaab padhne ke bajaay"
          )}
        </T>
      </Fade>

      {/* beat 6 — the relief */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={540} y={490} size={13} fill={INK} script>
          {t(
            "nothing new in spirit — only the arithmetic is heavier. no new subject began.",
            "bhaav mein kuchh naya nahi — bas hisaab bhaari hai. koi naya vishay shuru nahi hua."
          )}
        </T>
      </Fade>

      {/* beat 7 — the real test */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 56 515 v 55" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={72} y={534} size={13} fill={GREEN} script anchor="start">
          {t(
            "no new concepts asked for — only the willingness to integrate",
            "koi naya concept nahi maanga — bas integrate karne ki taiyari"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={72} y={560} size={13} fill={GREEN} script anchor="start">
          {t(
            "if sub-topic 3 felt easy, here you learn whether you understood WHY it worked",
            "agar sub-topic 3 aasaan laga, to yahan pata chalega ki KYUN chala, samjhe the ya nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
