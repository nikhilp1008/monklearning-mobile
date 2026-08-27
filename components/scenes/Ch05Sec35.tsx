/**
 * Ch05 · Section 35 — "Energy in many costumes"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 17.6, 38.9, 55.3, 56.3, 80.3, 103.7, 127.6] · dur 150.2 —
 *        b3 lasts ~1s in en → en-tiny;
 *        hi [0, 18.0, 39.2, 51.5, 73.4, 94.7, 117.3, 137.6] · dur 157.0):
 *  0 title + subtitle
 *  1 everyday list lines
 *  2 card: MECHANICAL
 *  3 card: THERMAL (en tiny)
 *  4 cards: CHEMICAL + ELECTRICAL
 *  5 cards: NUCLEAR + RADIANT + SOUND
 *  6 one-substance line
 *  7 bottom band
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl82
 *  b1 | cx540 bl112 / bl136
 *  cards row1 y154..244 x80/320/560/800 (w220) · row2 y264..354 x200/440/680
 *  card: title bl182 · desc bl206 / bl226 (script 11)
 *  b6 | cx540 bl404 · b7 | bar x66 y434..504 · lines st x84 bl454 / bl480
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
  Scene,
} from '@/components/scenes/kit';

function Card({
  on,
  delay,
  x,
  y,
  title,
  l1,
  l2,
}: {
  on: boolean;
  delay: number;
  x: number;
  y: number;
  title: string;
  l1: string;
  l2: string;
}) {
  const cx = x + 110;
  return (
    <>
      <Draw
        on={on}
        delay={delay}
        d={`M ${x + 12} ${y} h 196 q 12 0 12 12 v 66 q 0 12 -12 12 h -196 q -12 0 -12 -12 v -66 q 0 -12 12 -12`}
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.5}
      />
      <Fade on={on} delay={delay + 0.6}>
        <T x={cx} y={y + 28} size={14} fill={INK} weight={800}>
          {title}
        </T>
      </Fade>
      <Fade on={on} delay={delay + 1.4}>
        <T x={cx} y={y + 52} size={11} fill={AMBER_DARK} script>
          {l1}
        </T>
      </Fade>
      <Fade on={on} delay={delay + 2.2}>
        <T x={cx} y={y + 72} size={11} fill={MUTED} script>
          {l2}
        </T>
      </Fade>
    </>
  );
}

export default function Ch05Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Energy in Many Costumes", "Energy ke Kai Costume")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 8)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t(
            "step outside the mechanical room — energy is enormous",
            "mechanical kamre se bahar aao — energy bahut badi hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — the everyday list */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={540} y={112} size={13} fill={INK} script>
          {t(
            "food · petrol · battery charge · sunlight · loudspeaker · reactor",
            "khana · petrol · battery ka charge · dhoop · loudspeaker · reactor"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={540} y={136} size={13} fill={AMBER_DARK} script>
          {t(
            "every one is energy — just wearing a different costume",
            "har ek energy hai — bas alag costume pehne hue"
          )}
        </T>
      </Fade>

      {/* beat 2 — mechanical */}
      <Card
        on={beat >= 2}
        delay={dl(2, 1.5)}
        x={80}
        y={154}
        title="MECHANICAL"
        l1={t("K + U", "K + U")}
        l2={t("the rest of this chapter", "baaqi poora chapter")}
      />

      {/* beat 3 — thermal (en: ~1s beat) */}
      <Card
        on={beat >= 3}
        delay={dl(3, en ? 0.2 : 2)}
        x={320}
        y={154}
        title="THERMAL"
        l1={t("jiggling molecules", "hilte molecules")}
        l2={t("hot chai = faster dance", "garam chai = tez naach")}
      />

      {/* beat 4 — chemical + electrical */}
      <Card
        on={beat >= 4}
        delay={dl(4, 2)}
        x={560}
        y={154}
        title="CHEMICAL"
        l1={t("locked in bonds", "bonds mein qaid")}
        l2={t("food · fuel · batteries", "khana · fuel · batteries")}
      />
      <Card
        on={beat >= 4}
        delay={dl(4, 11)}
        x={800}
        y={154}
        title="ELECTRICAL"
        l1={t("moving charges", "chalte charges")}
        l2={t("every wire at home", "ghar ki har taar")}
      />

      {/* beat 5 — nuclear + waves */}
      <Card
        on={beat >= 5}
        delay={dl(5, 2)}
        x={200}
        y={264}
        title="NUCLEAR"
        l1={t("inside the nucleus", "nucleus ke andar")}
        l2={t("fission · fusion (the Sun)", "fission · fusion (Sooraj)")}
      />
      <Card
        on={beat >= 5}
        delay={dl(5, 9)}
        x={440}
        y={264}
        title="RADIANT"
        l1={t("EM waves — light", "EM waves — roshni")}
        l2={t("sunlight on your arm", "baanh par dhoop")}
      />
      <Card
        on={beat >= 5}
        delay={dl(5, 15)}
        x={680}
        y={264}
        title="SOUND"
        l1={t("pressure waves", "pressure waves")}
        l2={t("the loudspeaker's rumble", "loudspeaker ki gadgadahat")}
      />

      {/* beat 6 — one substance */}
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={540} y={404} size={13.5} fill={GREEN} script>
          {t(
            "one substance, seven appearances — and it changes costume constantly",
            "ek hi cheez, saat roop — aur wo lagatar costume badalti hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the takeaway */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 434 v 70" stroke={AMBER_DARK} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={84} y={454} size={13} fill={INK} script anchor="start">
          {t(
            "six everyday things — six forms of ONE thing",
            "chhe rozmarra cheezen — EK hi cheez ke chhe roop"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={84} y={480} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "see it that way, and the deepest law in physics is a step away",
            "aise dekho, aur physics ka sabse gehra law bas ek kadam door hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
