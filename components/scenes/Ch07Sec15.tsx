/**
 * Ch07 · Section 15 — "You already know one field — it is g"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 12.61, 21.05, 31.12, 42.13, 50.41, 59.2]):
 *  0 title
 *  1 Earth + inward surface arrows + g = 9.8 caption
 *  2 amber: g is the Earth's property → g is a FIELD
 *  3 outer field points (mountain/orbit) + "landscape, not a number"
 *  4 red: there whether or not anything feels it
 *  5 green: your first lesson in fields
 *  6 generalise: every mass (two mini masses with arrows)
 *  7 amber teaser chip: spheres come out clean
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · Earth c(320,270) r80 · 6 inward arrows r130→r95 ·
 *  "g = 9.8" cx320 bl378 (14 sans) · caption cx320 bl404
 *  b3 | dots (424,210)/(376,115)/(508,338) + inward arrows · label cx430 bl445 (315..565)
 *  b2 | lines st x560 bl140 / 168
 *  b4 | bar x560 y210..262 · lines st x578 bl230 / 256
 *  b5 | line st x560 bl305 · underline M560 317 h330
 *  b6 | line st x560 bl360 · dots (600,410) r6 / (720,410) r9 + inward arrows
 *  b7 | chip x560..980 y470..505
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
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const SURFACE_ANGLES = [-90, -30, 30, 90, 150, 210];

export default function Ch07Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — a reassuring surprise */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "g is nothing but the Earth's field",
            "g aur kuchh nahi — Earth ka field hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — the field you already know */}
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <Draw
          on={beat >= 1}
          delay={dl(1, 0.6)}
          d="M 320 190 A 80 80 0 1 1 319.9 190"
          stroke={INK}
          sw={2.4}
          dur={0.8}
          fill={CREAM}
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={320} y={275} size={14} fill={INK} weight={700}>
          Earth
        </T>
      </Fade>
      {SURFACE_ANGLES.map((deg, i) => {
        const a = (deg * Math.PI) / 180;
        return (
          <Draw
            key={deg}
            on={beat >= 1}
            delay={dl(1, 2.4 + i * 0.35)}
            d={arrowD(
              320 + 130 * Math.cos(a),
              270 + 130 * Math.sin(a),
              320 + 95 * Math.cos(a),
              270 + 95 * Math.sin(a)
            )}
            stroke={GREEN}
            sw={2}
            dur={0.3}
          />
        );
      })}
      <Fade on={beat >= 1} delay={dl(1, 5.2)}>
        <T x={320} y={432} size={14} fill={INK} weight={800}>
          g = 9.8 m ⁄ s²
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6.5)}>
        <T x={320} y={458} size={12} fill={GREEN} script>
          {t(
            "the Earth's field at its surface — inward everywhere",
            "surface par Earth ka field — har jagah andar ki taraf"
          )}
        </T>
      </Fade>

      {/* beat 2 — you were speaking field all along */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={560} y={140} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "g is a property of the EARTH, not of the falling object",
            "g EARTH ki property hai, girti cheez ki nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={560} y={168} size={14} fill={AMBER_DARK} script anchor="start" weight={700}>
          {t("→ g is a FIELD", "→ g ek FIELD hai")}
        </T>
      </Fade>

      {/* beat 3 — a landscape, not a number */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <Circle cx={424} cy={210} r={3.5} fill={INK} />
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.2)}
        d={arrowD(417, 214, 400, 224)}
        stroke={GREEN}
        sw={1.8}
        dur={0.3}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <Circle cx={376} cy={115} r={3.5} fill={INK} />
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 2.2)}
        d={arrowD(372, 126, 364, 148)}
        stroke={GREEN}
        sw={1.8}
        dur={0.3}
      />
      <Fade on={beat >= 3} delay={dl(3, 2.8)}>
        <Circle cx={508} cy={338} r={3.5} fill={INK} />
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 3.2)}
        d={arrowD(497, 334, 476, 326)}
        stroke={GREEN}
        sw={1.8}
        dur={0.3}
      />
      <Fade on={beat >= 3} delay={dl(3, 4.5)}>
        <T x={430} y={500} size={12} fill={INK} script>
          {t(
            "a landscape of pulls — not one number",
            "pulls ka landscape — koi ek number nahi"
          )}
        </T>
      </Fade>

      {/* beat 4 — independence from the test mass */}
      <Draw on={beat >= 4} delay={dl(4, 0.5)} d="M 560 210 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={578} y={230} size={13} fill={RED} script anchor="start">
          {t(
            "it is there — whether or not anything feels it",
            "wahan hai — chahe koi feel kare ya na kare"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4)}>
        <T x={578} y={256} size={13} fill={RED} script anchor="start">
          {t(
            "independence from the test mass = being a field",
            "test mass se azaadi = field hone ka matlab"
          )}
        </T>
      </Fade>

      {/* beat 5 — your first lesson in fields */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={560} y={305} size={13} fill={GREEN} script anchor="start">
          {t(
            "the g subtopic was secretly your FIRST lesson in fields",
            "g wala subtopic chupke se fields ka PEHLA lesson tha"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 3)} d="M 560 317 h 330" stroke={GREEN} sw={2} dur={0.4} />

      {/* beat 6 — every mass does this */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={560} y={360} size={13} fill={INK} script anchor="start">
          {t(
            "generalise: EVERY mass sets up its own field",
            "generalise: HAR mass apna field banata hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <Circle cx={600} cy={410} r={6} fill={INK} />
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 2.6)}
        d={arrowD(632, 410, 614, 410)}
        stroke={GREEN}
        sw={1.8}
        dur={0.3}
      />
      <Fade on={beat >= 6} delay={dl(6, 3.2)}>
        <Circle cx={720} cy={410} r={9} fill={INK} />
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 3.8)}
        d={arrowD(757, 410, 737, 410)}
        stroke={GREEN}
        sw={1.8}
        dur={0.3}
      />

      {/* beat 7 — the payoff teaser */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <Chip x={560} y={470} w={420} h={35} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={13}>
          {t(
            "next: for spheres, the field comes out astonishingly clean",
            "aage: spheres ka field hairaani-bhara saaf niklega"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
