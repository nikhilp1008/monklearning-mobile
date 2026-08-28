/**
 * Ch09 · Section 1 — "Pressure: the all-directions squeeze"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en reveals [0, 9.56, 20.14, 29.53, 36.52, 43.01, 44.01, 45.01]):
 *  0 title + "packed train" hook: compartment, 5 people-dots, inward arrows
 *  1 THE DEMO: tank drawn, droplet placed deep inside
 *  2 normal-push diagram: 4 arrows converge on droplet from every side + caption
 *  3 side mini-diagram: flat surface patch, green normal arrow (survives),
 *    red sideways arrow — crossed out
 *  4 label: "at rest, no sideways force" beside the crossed-out patch
 *  5 formula P = F⊥/A + unit chip (tank group dims, freeing the space)
 *  6 red-margin note: force has direction, pressure doesn't (a scalar)
 *  7 green closing insight: same depth ⇒ same push, any orientation
 *
 * Layout plan — boxes are estimated render boxes (Kalam bl −1.3·size..+0.5·size,
 * Anek bl −0.78·size..+0.31·size), longer language counts:
 *  b0 | title (script 28, red)        | T mid  | x338..742  y32..82  (bl 68)
 *  b0 | compartment rect              | Draw   | x360..720  y96..166
 *  b0 | dots ×5 (r13)                 | circle | cy131  cx400/470/540/610/680
 *  b0 | inward arrows ×2 (amber-dk)   | Draw   | (368,131)→(382,131) / (712,131)→(698,131)
 *  b0 | hook caption (script 14)      | T mid  | x386..694  y182..208 (bl 200)
 *  b1 | water line (wavy)             | Draw   | x300..780  y286..298
 *  b1 | tank walls+floor              | Draw   | x300..780  y292..450
 *  b1 | droplet (r14, amber)          | circle | c(540,390)
 *  b2 | arrows N/S/E/W → droplet      | Draw   | tips 5px off r14 edge, tails ≤61px out
 *  b2 | caption (script 15)           | T mid  | x416..664  y465..492 (bl 484)
 *  b3 | patch line                    | Draw   | x860..940  y355
 *  b3 | normal arrow (green)          | Draw   | (900,318)→(900,350)
 *  b3 | check tick (green)            | Draw   | x906..926  y332..341
 *  b3 | sideways arrow (red)          | Draw   | (845,345)→(895,345)
 *  b3 | cross-out (red)               | Draw   | x838..900  y332..356
 *  b4 | "at rest…" label (script 13)  | T mid  | x807..993  y383..400 (bl 400)
 *  b5 | formula (40, w800)            | T mid  | x430..650  y349..392 (bl 380)
 *  b5 | unit chip                     | Chip   | x431..649  y410..444
 *  b6 | margin bar (red)              | Draw   | x60  y503..527
 *  b6 | note (script 17, red)         | T st   | x76..562   y502..533 (bl 524)
 *  b7 | closing (script 18, green)    | T st   | x76..520   y549..581 (bl 572)
 */

import React from "react";
import { Circle, Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  crossD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const DOT_X = [400, 470, 540, 610, 680];

export default function Ch09Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={28} fill={RED} script>
          {t("what exactly is pressure?", "pressure asal mein hai kya?")}
        </T>
      </Fade>

      {/* beat 0 — the packed-train hook */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <Draw
          on={beat >= 0}
          d="M 372 96 h 336 q 12 0 12 12 v 46 q 0 12 -12 12 h -336 q -12 0 -12 -12 v -46 q 0 -12 12 -12"
          stroke={INK}
          sw={2.2}
          dur={0.9}
        />
      </Fade>
      {DOT_X.map((x, i) => (
        <Fade key={x} on={beat >= 0} dim={beat >= 1} delay={dl(0, 1.1 + i * 0.35)}>
          <Circle
            cx={x}
            cy={131}
            r={13}
            fill={x === 540 ? AMBER : CREAM}
            stroke={INK}
            strokeWidth={x === 540 ? 1.6 : 1.3}
          />
        </Fade>
      ))}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 3)}>
        <Draw on={beat >= 0} d={arrowD(368, 131, 382, 131)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      </Fade>
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 3.4)}>
        <Draw on={beat >= 0} d={arrowD(712, 131, 698, 131)} stroke={AMBER_DARK} sw={2.2} dur={0.4} />
      </Fade>
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 4)}>
        <T x={540} y={200} size={14} fill={MUTED} script>
          {t("packed train — squeezed from every side", "khichi train — har taraf se squeeze")}
        </T>
      </Fade>

      {/* beat 1 — the tank, and a droplet deep inside */}
      <Fade on={beat >= 1} dim={beat >= 5} delay={dl(1, 0)}>
        <Draw
          on={beat >= 1}
          d="M 300 290 q 20 -9 40 0 q 20 9 40 0 q 20 -9 40 0 q 20 9 40 0 q 20 -9 40 0 q 20 9 40 0 q 20 -9 40 0 q 20 9 40 0 q 20 -9 40 0 q 20 9 40 0 q 20 -9 40 0 q 20 9 40 0"
          stroke={AMBER_DARK}
          sw={2}
          dur={1}
        />
      </Fade>
      <Fade on={beat >= 1} dim={beat >= 5} delay={dl(1, 0.6)}>
        <Draw
          on={beat >= 1}
          d="M 310 292 V 450 H 770 V 292"
          stroke={INK}
          sw={2.6}
          dur={1}
        />
      </Fade>
      <Fade on={beat >= 1} dim={beat >= 5} delay={dl(1, 1.8)}>
        <Circle cx={540} cy={390} r={14} fill={AMBER} stroke={INK} strokeWidth={1.6} />
      </Fade>

      {/* beat 2 — normal push from every direction */}
      {[
        [540, 330, 540, 371],
        [540, 442, 540, 409],
        [600, 390, 559, 390],
        [480, 390, 521, 390],
      ].map(([x1, y1, x2, y2], i) => (
        <Fade key={i} on={beat >= 2} dim={beat >= 5} delay={dl(2, 0.6 + i * 0.9)}>
          <Draw on={beat >= 2} d={arrowD(x1, y1, x2, y2)} stroke={INK} sw={2.4} dur={0.5} />
        </Fade>
      ))}
      <Fade on={beat >= 2} dim={beat >= 5} delay={dl(2, 4.2)}>
        <T x={540} y={484} size={15} fill={INK} script>
          {t("pushed equally from every side", "har taraf se equal push")}
        </T>
      </Fade>

      {/* beat 3 — a flat surface: perpendicular survives, sideways doesn't */}
      <Draw on={beat >= 3} delay={dl(3, 0)} d="M 860 355 L 940 355" stroke={INK} sw={2.4} dur={0.5} />
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.7)}
        d={arrowD(900, 318, 900, 350)}
        stroke={GREEN}
        sw={2.6}
        dur={0.5}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <Path d="M 906 337 l 6 6 l 14 -15" fill="none" stroke={GREEN} strokeWidth={2.4} strokeLinecap="round" />
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.4)}
        d={arrowD(845, 345, 895, 345)}
        stroke={RED}
        sw={2.6}
        dur={0.5}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 2.3)}
        d={crossD(838, 332, 62, 24)}
        stroke={RED}
        sw={2.8}
        dur={0.6}
      />

      {/* beat 4 — the take-away label */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={900} y={400} size={13} fill={RED} script>
          {t("at rest, no sideways force", "rest mein, sideways force nahi")}
        </T>
      </Fade>

      {/* beat 5 — the formula (the tank group settles into the background) */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={380} size={40} fill={INK} weight={800}>
          P = F⊥ / A
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <Chip x={431} y={410} w={218} h={34} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={15} script>
          unit: pascal (Pa) = N/m²
        </Chip>
      </Fade>

      {/* beat 6 — force is a vector, pressure is not */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 60 503 L 60 527" stroke={RED} sw={3.2} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={524} size={17} fill={RED} script anchor="start">
          {t(
            "force has direction — pressure has NONE (a scalar)",
            "force ka direction hota — pressure ka nahi (scalar)"
          )}
        </T>
      </Fade>

      {/* beat 7 — the closing insight */}
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={76} y={572} size={18} fill={GREEN} script anchor="start">
          {t(
            "same depth, same push — whichever way it faces",
            "same depth, same push — kisi bhi taraf ho"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
