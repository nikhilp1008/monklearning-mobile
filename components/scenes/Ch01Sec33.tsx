/**
 * Ch01 · Section 33 — "Accuracy versus precision: the archer at the target"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.5, 27.0, 40.2, 65.0, 75.5, 90.5, 107.0]):
 *  0 title · 1 three targets drawn
 *  2 middle target: a tight cluster, off in the corner
 *  3 precise-not-accurate = systematic; the mean shifts too
 *  4 right target: scatter all around the centre
 *  5 imprecise — but the mean hits the bull's-eye = random
 *  6 the two definitions as chips
 *  7 the left target earns its arrows: tight AND centred — the only winner
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title (script 28, red) mid bl 62
 *  b1 | targets c(220,280) c(540,280) c(860,280), rings r22/48/74 + centre dots
 *  b2 | cluster dots near (568,229) · b3 | labels bl 388/416 col-540 + amber ✕
 *  b4 | scatter dots around (860,280) · b5 | green ✕ at centre + labels bl 388/416
 *  b6 | chips y460..500: x100..500 / 560..960
 *  b7 | left dots near (220,280) · label bl 388 col-220 · verdict x62 st bl 545 · bar x51
 */

import React from "react";
import { Circle, G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const TARGETS = [220, 540, 860];

export default function Ch01Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — not synonyms */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={62} size={28} fill={RED} script>
          {t("accuracy vs precision — the archer knows", "accuracy vs precision — teerandaz jaanta hai")}
        </T>
      </Fade>

      {/* beat 1 — three targets */}
      {TARGETS.map((cx, ti) => (
        <G key={cx}>
          {[74, 48, 22].map((r, ri) => (
            <Draw
              key={r}
              on={beat >= 1}
              delay={dl(1, 0.5 + ti * 1.7 + ri * 0.4)}
              d={`M ${cx - r} 280 A ${r} ${r} 0 1 1 ${cx + r} 280 A ${r} ${r} 0 1 1 ${cx - r} 280`}
              stroke={ti === 0 ? INK : ti === 1 ? RED : AMBER_DARK}
              sw={1.8}
              dur={0.4}
            />
          ))}
          <Fade on={beat >= 1} delay={dl(1, 1.7 + ti * 1.7)}>
            <Circle cx={cx} cy={280} r={6} fill={INK} />
          </Fade>
        </G>
      ))}

      {/* beat 2 — the tight, wrong cluster */}
      {[
        [568, 222],
        [578, 232],
        [560, 230],
        [572, 242],
        [565, 218],
      ].map(([cx, cy], i) => (
        <Fade key={`m${i}`} on={beat >= 2} delay={dl(2, 1 + i * 0.5)}>
          <Circle cx={cx} cy={cy} r={3.5} fill={RED} />
        </Fade>
      ))}
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={540} y={130} size={13} fill={RED} script>
          {t("all agree — all miss", "sab ek jaisi — sab chuki")}
        </T>
      </Fade>

      {/* beat 3 — systematic error made visible */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={540} y={388} size={14} fill={RED} script>
          {t("PRECISE — not accurate", "PRECISE — accurate nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={540} y={416} size={13} fill={RED} script>
          {t("systematic: averaging does NOTHING", "systematic: average karne se KUCH nahi hota")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 12)}
        d="M 560 221 L 576 237 M 576 221 L 560 237"
        stroke={AMBER}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 13)}>
        <T x={625} y={214} size={12} fill={AMBER_DARK} script>
          {t("mean: also off", "mean: wo bhi door")}
        </T>
      </Fade>

      {/* beat 4 — the scatter */}
      {[
        [818, 242],
        [902, 252],
        [838, 322],
        [892, 300],
        [826, 282],
        [884, 232],
      ].map(([cx, cy], i) => (
        <Fade key={`r${i}`} on={beat >= 4} delay={dl(4, 1 + i * 0.6)}>
          <Circle cx={cx} cy={cy} r={3.5} fill={AMBER_DARK} />
        </Fade>
      ))}

      {/* beat 5 — the mean lands home */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 2)}
        d="M 852 272 L 868 288 M 868 272 L 852 288"
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={860} y={388} size={14} fill={AMBER_DARK} script>
          {t("IMPRECISE — mean on target!", "IMPRECISE — mean nishane par!")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <T x={860} y={416} size={13} fill={GREEN} script>
          {t("random: averaging tames it", "random: average se qaabu aata hai")}
        </T>
      </Fade>

      {/* beat 6 — the definitions */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <Chip x={100} y={460} w={400} h={40} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("PRECISION = do readings agree?", "PRECISION = readings aapas mein milti?")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <Chip x={560} y={460} w={400} h={40} fill={CREAM} stroke={AMBER} textFill={INK} size={15}>
          {t("ACCURACY = close to the truth?", "ACCURACY = sach ke kitne paas?")}
        </Chip>
      </Fade>

      {/* beat 7 — the only winner */}
      {[
        [212, 272],
        [228, 276],
        [220, 290],
        [214, 284],
        [226, 286],
      ].map(([cx, cy], i) => (
        <Fade key={`l${i}`} on={beat >= 7} delay={dl(7, 2 + i * 0.4)}>
          <Circle cx={cx} cy={cy} r={3.5} fill={GREEN} />
        </Fade>
      ))}
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <T x={220} y={388} size={14} fill={GREEN} script>
          {t("tight AND centred — BOTH ✓", "kasi hui AUR beech mein — DONO ✓")}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 11)}
        d="M 51 522 L 51 580"
        stroke={GREEN}
        sw={3.4}
        dur={0.5}
      />
      <Fade on={beat >= 7} delay={dl(7, 12)}>
        <T x={62} y={545} size={14} fill={GREEN} script anchor="start">
          {t(
            "high precision + low accuracy = small random error, large systematic error",
            "high precision + low accuracy = chhota random error, bada systematic error"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 19)}>
        <T x={62} y={578} size={13} fill={MUTED} script anchor="start">
          {t("(this exact phrasing — NEET & JEE, almost every year)", "(bilkul yahi phrasing — NEET & JEE, lagbhag har saal)")}
        </T>
      </Fade>
    </Scene>
  );
}
