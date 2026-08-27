/**
 * Ch07 · Section 14 — "From action-at-a-distance to the field picture"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.25, 28.42, 40.53, 54.1, 63.66, 76.46, 86.78]):
 *  0 title + OLD panel: Earth grabs Moon across space (direct arrow)
 *  1 cross the old arrow · NEW panel: Earth + inward field arrows, Moon responds locally
 *  2 test point: 1 kg square at P, arrow toward Earth = the field
 *  3 amber line: every mass warps space into a landscape of pulls
 *  4 formula E_g = F/m₀
 *  5 red note: N/kg = m/s² — field IS the acceleration
 *  6 green definition line + underline
 *  7 red margin: the field is there even with no mass
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52
 *  OLD panel: Earth c(170,200) r40 · Moon c(420,150) r14 · arrow (215,193)→(398,155) ·
 *   label cx280 bl270 · cross c(276,164) w60 h20
 *  NEW panel: Earth c(700,200) r40 · 6 field arrows r100→r68 · Moon c(960,140) r12 ·
 *   moon arrow (945,153)→(910,161) · label cx950 bl265 (861..1039)
 *  b2 | 1kg square (812..828, 262..278) · arrow (808,272)→(774,252) · "E_g" (790,238) ·
 *      caption cx820 bl300 (721..919)
 *  b3 | line cx540 bl340 (326..755)
 *  b4 | formula cx250 bl395
 *  b5 | bar x430 y368..420 · lines st x448 bl388 / 414
 *  b6 | line cx540 bl460 · underline M300 472 h480
 *  b7 | bar x66 y500..552 · lines st x84 bl520 / 546
 */

import React from "react";
import { Circle, TSpan } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  crossD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const FIELD_ANGLES = [-90, -30, 30, 90, 150, 210];

export default function Ch07Sec14({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the old picture */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("The field: gravity's middleman", "Field: gravity ka middleman")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3)} dim={beat >= 1}>
        <Draw
          on={beat >= 0}
          delay={dl(0, 3)}
          d="M 170 160 A 40 40 0 1 1 169.9 160"
          stroke={INK}
          sw={2.4}
          dur={0.7}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)} dim={beat >= 1}>
        <T x={170} y={205} size={13} fill={INK} weight={700}>
          Earth
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4.8)} dim={beat >= 1}>
        <Circle cx={420} cy={150} r={14} fill="none" stroke={INK} strokeWidth={2.2} />
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 5.6)}
        d={arrowD(215, 193, 398, 155)}
        stroke={MUTED}
        sw={2.2}
        dur={0.6}
      />
      <Fade on={beat >= 0} delay={dl(0, 7)} dim={beat >= 1}>
        <T x={280} y={270} size={12} fill={MUTED} script>
          {t("action at a distance", "action at a distance")}
        </T>
      </Fade>

      {/* beat 1 — cross it; the field picture */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d={crossD(276, 164, 60, 20)}
        stroke={RED}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <Draw
          on={beat >= 1}
          delay={dl(1, 1.5)}
          d="M 700 160 A 40 40 0 1 1 699.9 160"
          stroke={INK}
          sw={2.4}
          dur={0.7}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.3)}>
        <T x={700} y={205} size={13} fill={INK} weight={700}>
          Earth
        </T>
      </Fade>
      {FIELD_ANGLES.map((deg, i) => {
        const a = (deg * Math.PI) / 180;
        return (
          <Draw
            key={deg}
            on={beat >= 1}
            delay={dl(1, 2.8 + i * 0.35)}
            d={arrowD(
              700 + 100 * Math.cos(a),
              200 + 100 * Math.sin(a),
              700 + 68 * Math.cos(a),
              200 + 68 * Math.sin(a)
            )}
            stroke={GREEN}
            sw={2}
            dur={0.3}
          />
        );
      })}
      <Fade on={beat >= 1} delay={dl(1, 5.2)}>
        <Circle cx={960} cy={140} r={12} fill="none" stroke={INK} strokeWidth={2.2} />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 5.8)}
        d={arrowD(945, 153, 910, 161)}
        stroke={GREEN}
        sw={2}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 6.6)}>
        <T x={950} y={265} size={12} fill={GREEN} script>
          {t("responds to the LOCAL field", "LOCAL field ko respond karta hai")}
        </T>
      </Fade>

      {/* beat 2 — measuring the field with 1 kg */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d="M 812 262 h 16 v 16 h -16 Z"
        stroke={INK}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.6)}
        d={arrowD(808, 272, 774, 252)}
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={790} y={238} size={12} fill={GREEN} weight={700}>
          E
          <TSpan dy={3} fontSize={9}>
            g
          </TSpan>
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3.5)}>
        <T x={820} y={300} size={12} fill={INK} script>
          {t("the force on 1 kg IS the field", "1 kg par force HI field hai")}
        </T>
      </Fade>

      {/* beat 3 — a landscape of pulls */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={540} y={340} size={13} fill={AMBER_DARK} script>
          {t(
            "every mass warps the space around it into a landscape of pulls",
            "har mass apne aas-paas ki space ko pulls ke landscape mein warp karta hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — the formula */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={250} y={395} size={20} fill={INK} weight={800}>
          E
          <TSpan dy={5} fontSize={13}>
            g
          </TSpan>
          <TSpan dy={-5} fontSize={20}>
            {" "}= F ⁄ m₀
          </TSpan>
        </T>
      </Fade>

      {/* beat 5 — the units speak */}
      <Draw on={beat >= 5} delay={dl(5, 0.5)} d="M 430 368 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={448} y={388} size={13} fill={RED} script anchor="start">
          {t("units: N ⁄ kg = m ⁄ s²", "units: N ⁄ kg = m ⁄ s²")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={448} y={414} size={13} fill={RED} script anchor="start">
          {t(
            "the field IS the acceleration a free mass would get",
            "field wahi acceleration hai jo free mass ko milegi"
          )}
        </T>
      </Fade>

      {/* beat 6 — the definition in one line */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={540} y={460} size={13} fill={GREEN} script>
          {t(
            "definition: put 1 kg at the point — the force it feels, direction included, is the field",
            "definition: point par 1 kg rakho — jo force lage, direction samet, wahi field hai"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 4)} d="M 300 472 h 480" stroke={GREEN} sw={2} dur={0.5} />

      {/* beat 7 — the middleman waits */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 500 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={84} y={520} size={13} fill={RED} script anchor="start">
          {t(
            "the field is there at every point — mass or no mass",
            "field har point par hai — mass ho ya na ho"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.5)}>
        <T x={84} y={546} size={13} fill={RED} script anchor="start">
          {t("the middleman is always waiting", "middleman hamesha taiyaar hai")}
        </T>
      </Fade>
    </Scene>
  );
}
