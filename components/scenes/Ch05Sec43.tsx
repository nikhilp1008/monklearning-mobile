/**
 * Ch05 · Section 43 — "Average, instantaneous, and P = Fv"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 6.8, 31.7, 55.4, 69.8, 94.6, 119.5, 133.4] · dur 158.2;
 *        hi [0, 6.7, 31.6, 55.5, 68.8, 91.4, 116.2, 129.6] · dur 154.5):
 *  0 title + subtitle
 *  1 average power card
 *  2 instantaneous power card + sprinter
 *  3 hero chip P = F·v
 *  4 one-line derivation
 *  5 weightlifter: F huge, v = 0 → P = 0
 *  6 cos θ lesson line
 *  7 car consequence band
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl80
 *  b1 | lbl st x80 bl112 · chip x80..360 y122..158 · muted cx250 bl186 · amber bl212
 *  b2 | lbl bl248 · chip x80..360 y258..294 · script cx250 bl322 · muted bl348
 *  b3 | chip x560..940 y120..164
 *  b4 | st x570 bl205 / bl233 · green cx760 bl261
 *  b5 | bar (660,290)-(740,290) · weights (652/748,290) r9 · head (700,308) r9
 *     | body/arms/legs to y395 · lbls cx700 bl425 / bl451
 *  b6 | amber cx250 bl395
 *  b7 | bar x66 y475..565 · lines st x84 bl495 / bl521 / bl547
 */

import React from "react";
import { Circle } from 'react-native-svg';
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

export default function Ch05Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Average, Instantaneous & P = F v", "Average, Instantaneous & P = F v")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3)}>
        <T x={540} y={80} size={13} fill={MUTED} script>
          {t(
            "two flavours of power — the rate isn't always steady",
            "power ke do roop — rate hamesha steady nahi hoti"
          )}
        </T>
      </Fade>

      {/* beat 1 — average power */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={80} y={112} size={13} fill={AMBER_DARK} script anchor="start">
          {t("average — over the whole job", "average — poore kaam par")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Chip x={80} y={122} w={280} h={36} fill={CREAM} stroke={INK} textFill={INK} size={15} script={false}>
          P_avg = W_total ⁄ t_total
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={250} y={186} size={12.5} fill={MUTED} script>
          {t("the simple, overall rate", "seedhi, samagra rate")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 15)}>
        <T x={250} y={212} size={12.5} fill={AMBER_DARK} script>
          {t(
            "but the rate can change — an accelerating car",
            "par rate badal sakti hai — accelerate karti car"
          )}
        </T>
      </Fade>

      {/* beat 2 — instantaneous power */}
      <Fade on={beat >= 2} delay={dl(2, 0.5)}>
        <T x={80} y={248} size={13} fill={AMBER_DARK} script anchor="start">
          {t("instantaneous — right now", "instantaneous — theek abhi")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <Chip x={80} y={258} w={280} h={36} fill={CREAM} stroke={INK} textFill={INK} size={15} script={false}>
          P_inst = dW ⁄ dt
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={250} y={322} size={12} fill={INK} script>
          {t(
            "sprinter: 400 W average — far higher peak, lower coasting",
            "sprinter: 400 W average — shuru mein unchi choti, coast par neeche"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 17)}>
        <T x={250} y={348} size={12.5} fill={MUTED} script>
          {t("know which one the question wants", "jaano sawaal kaunsi maang raha hai")}
        </T>
      </Fade>

      {/* beat 3 — the hero formula */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <Chip x={560} y={120} w={380} h={44} fill={CREAM} stroke={GREEN} textFill={INK} size={17} script={false}>
          P = F · v = F v cos θ
        </Chip>
      </Fade>

      {/* beat 4 — one-line derivation */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={570} y={205} size={14} fill={INK} anchor="start" weight={700}>
          dW = F dx = F (v dt)
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 9)}>
        <T x={570} y={233} size={14} fill={INK} anchor="start" weight={800}>
          ÷ dt → P = F v
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 15)}>
        <T x={760} y={261} size={12.5} fill={GREEN} script>
          {t("clean and inevitable", "saaf aur atal")}
        </T>
      </Fade>

      {/* beat 5 — the weightlifter */}
      <Draw on={beat >= 5} delay={dl(5, 1.5)} d="M 660 290 H 740" stroke={INK} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 2.2)}>
        <Circle cx={652} cy={290} r={9} fill={INK} />
        <Circle cx={748} cy={290} r={9} fill={INK} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3)} d="M 691 308 a 9 9 0 1 0 18 0 a 9 9 0 1 0 -18 0" stroke={INK} sw={2.2} dur={0.4} />
      <Draw
        on={beat >= 5}
        delay={dl(5, 3.8)}
        d="M 700 317 V 360 M 700 322 L 665 292 M 700 322 L 735 292 M 700 360 L 682 395 M 700 360 L 718 395"
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={700} y={425} size={13} fill={INK} script>
          {t("F is huge — but v = 0", "F bahut bada — par v = 0")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 14)}>
        <T x={700} y={451} size={13} fill={RED} script>
          {t(
            "P = F × 0 = 0 — force without motion is powerless",
            "P = F × 0 = 0 — bina motion ke force powerless hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — the cos θ lesson */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={250} y={395} size={12.5} fill={AMBER_DARK} script>
          {t(
            "only the along-v component delivers — ⊥ delivers nothing",
            "sirf v ke along waala component deta hai — ⊥ kuchh nahi"
          )}
        </T>
      </Fade>

      {/* beat 7 — the car */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 475 v 88" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={84} y={495} size={13} fill={GREEN} script anchor="start">
          {t(
            "F = P ⁄ v — as v grows, the available force shrinks",
            "F = P ⁄ v — v badhte hi uplabdh force sikudta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <T x={84} y={521} size={13} fill={INK} script anchor="start">
          {t(
            "brisk at low speed, struggling near the top — same power, spread thinner",
            "kam speed par tez, top ke paas jujhti — wahi power, patli phaili hui"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 17)}>
        <T x={84} y={547} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "the physics of your speedometer, in one rearranged formula",
            "aapke speedometer ki physics, ek rearrange kiye formula mein"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
