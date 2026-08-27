/**
 * Ch06 · Section 3 — "One calm point inside the chaos"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.9, 25.6, 36.27, 45.31, 56.83, 72.36, 87.13]):
 *  0 title + question subline
 *  1 hero demo: four tumbling bats along a flight, CoM dots, green parabola
 *  2 red looping curve through the handle ends — chaos
 *  3 ring the CoM dot on bat 4 + label with arrow: the calm point
 *  4 red-margin definition: mass-weighted average position
 *  5 see-saw: heavy M, light m, pivot leans toward heavy
 *  6 messy particle cloud → arrow → one equivalent particle M
 *  7 green verdict: all mass + all external force act at that point
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title script24 cx540 bl 54 · sub script13 cx540 bl 98
 *  b1 | parabola M100,315 Q460,60 820,315 (y=315−510t+510t², x=100+720t) ·
 *       bats c(186,261)θ20 / (388,193)θ100 hl35 / (590,204)θ200 / (770,282)θ280,
 *       handle=c−45u blade=c+40u · CoM dots r4.5 amber · label script14 cx460 bl 140
 *  b2 | red loop through handle ends (144,246)(396,149)(632,219)(762,326) ·
 *       label script13 cx250 bl 362 (x121..379)
 *  b3 | ringD(770,282,15,13) green · label script14 cx910 bl 200 (x779..1041) ·
 *       arrowD(885,225,792,276)
 *  b4 | red bar x66 y390..470 · L1 st x84 bl 414 · L2 st x84 bl 442 (≤x413)
 *  b5 | plank (420,462)→(680,442) · pivot apex(500,458) base 482/518 y486 ·
 *       heavy rect x424..456 y427..459 "M" · light x651..669 y424..442 "m" ·
 *       amber label cx550 bl 520 (x392..708)
 *  b6 | dashed ellipse (800,445) rx55 ry45 · 8 dots · arrow (865,445)→(915,445) ·
 *       dot (945,445) r9 · "M" bl 425 · sub script12 cx930 bl 517
 *  b7 | verdict script14 cx540 bl 572 (x248..833) · underline y590 x260..820
 */

import React from "react";
import { Ellipse } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  ringD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  Scene,
} from '@/components/scenes/kit';

const PARABOLA = "M 100 315 Q 460 60 820 315";

// tumbling bat: [cx, cy, ux, uy, handleLen] — handle end = c−hl·u, blade = c+40u
const BATS: [number, number, number, number, number][] = [
  [186, 261, 0.94, 0.34, 45],
  [388, 193, -0.17, 0.98, 35],
  [590, 204, -0.94, -0.34, 45],
  [770, 282, 0.17, -0.98, 45],
];

const CHAOS =
  "M 144 246 C 220 160, 280 240, 394 159 C 475 135, 520 260, 632 219 C 700 195, 700 300, 762 326";

export default function Ch06Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the bat toss question */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={54} size={24} fill={INK} script>
          {t("one calm point inside the chaos", "chaos ke beech ek shaant point")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 3.5)}>
        <T x={540} y={98} size={13} fill={MUTED} script>
          {t(
            "toss a spinning bat — where will the handle be? nobody can say",
            "spinning bat uchhaalo — aadhe second mein handle kahaan? koi nahi jaanta"
          )}
        </T>
      </Fade>

      {/* beat 1 — four tumbling bats, and the clean parabola through them */}
      {BATS.map(([cx, cy, ux, uy, hl], i) => (
        <React.Fragment key={i}>
          <Draw
            on={beat >= 1}
            delay={dl(1, 1 + i * 1.3)}
            d={`M ${cx - hl * ux} ${cy - hl * uy} L ${cx + 40 * ux} ${cy + 40 * uy}`}
            stroke={INK}
            sw={2.6}
            dur={0.6}
          />
          <Draw
            on={beat >= 1}
            delay={dl(1, 1.5 + i * 1.3)}
            d={`M ${cx + 12 * ux} ${cy + 12 * uy} L ${cx + 40 * ux} ${cy + 40 * uy}`}
            stroke={INK}
            sw={7}
            dur={0.3}
          />
        </React.Fragment>
      ))}
      <Draw
        on={beat >= 1}
        delay={dl(1, 6.8)}
        d={BATS.map(
          ([cx, cy]) => `M ${cx - 4.5} ${cy} a 4.5 4.5 0 1 0 9 0 a 4.5 4.5 0 1 0 -9 0`
        ).join(" ")}
        stroke={AMBER}
        fill={AMBER}
        sw={2}
        dur={0.8}
      />
      <Draw on={beat >= 1} delay={dl(1, 8.5)} d={PARABOLA} stroke={GREEN} sw={2.6} dur={2.8} />
      <Fade on={beat >= 1} delay={dl(1, 12.5)}>
        <T x={460} y={138} size={14} fill={GREEN_DARK} script>
          {t(
            "a clean parabola — a thrown stone's path",
            "clean parabola — jaise pheka hua patthar"
          )}
        </T>
      </Fade>

      {/* beat 2 — everything else loops like crazy */}
      <Draw on={beat >= 2} delay={dl(2, 1)} d={CHAOS} stroke={RED} sw={2} dur={2.6} />
      <Fade on={beat >= 2} delay={dl(2, 4.5)}>
        <T x={250} y={362} size={13} fill={RED} script>
          {t(
            "handle, toe, edges — random loops",
            "handle, toe, edges — random se loops"
          )}
        </T>
      </Fade>

      {/* beat 3 — the calm point has a name */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 1)}
        d={ringD(770, 282, 15, 13)}
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
      />
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <T x={910} y={200} size={14} fill={GREEN_DARK} script>
          {t(
            "the calm point = CENTRE OF MASS",
            "wahi shaant point = CENTRE OF MASS"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 3.2)}
        d={arrowD(885, 225, 792, 276)}
        stroke={GREEN}
        sw={2.2}
        dur={0.5}
      />

      {/* beat 4 — the definition */}
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d="M 66 390 v 80" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={84} y={414} size={14} fill={RED} script anchor="start">
          CENTRE OF MASS =
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.5)}>
        <T x={84} y={442} size={13} fill={RED} script anchor="start">
          {t(
            "mass-weighted average position of all matter",
            "saari matter ki mass-weighted average position"
          )}
        </T>
      </Fade>

      {/* beat 5 — the see-saw leans toward the heavy one */}
      <Draw on={beat >= 5} delay={dl(5, 1)} d="M 420 462 L 680 442" stroke={INK} sw={3} dur={0.7} />
      <Draw
        on={beat >= 5}
        delay={dl(5, 2.2)}
        d="M 500 458 L 482 486 h 36 z"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 3.5)}
        d="M 424 427 h 32 v 32 h -32 z"
        stroke={INK}
        sw={2.4}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 4.2)}>
        <T x={440} y={447} size={15} fill={INK} weight={700}>
          M
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 5.2)}
        d="M 651 424 h 18 v 18 h -18 z"
        stroke={INK}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 5} delay={dl(5, 5.8)}>
        <T x={660} y={437} size={12} fill={INK} weight={700}>
          m
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <T x={550} y={520} size={13} fill={AMBER_DARK} script>
          {t(
            "the balance point leans toward the heavy one",
            "balance point heavy waale ki taraf jhukta hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — replace the swarm with one particle */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <Ellipse
          cx={800}
          cy={445}
          rx={55}
          ry={45}
          fill="none"
          stroke={MUTED}
          strokeWidth={1.6}
          strokeDasharray="7 6"
        />
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 2.5)}
        d={[
          [770, 425],
          [800, 415],
          [830, 430],
          [775, 455],
          [810, 450],
          [838, 460],
          [790, 475],
          [820, 470],
        ]
          .map(([x, y]) => `M ${x - 3} ${y} a 3 3 0 1 0 6 0 a 3 3 0 1 0 -6 0`)
          .join(" ")}
        stroke={INK}
        fill={INK}
        sw={1.6}
        dur={1.6}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 6.5)}
        d={arrowD(865, 445, 915, 445)}
        stroke={AMBER}
        sw={2.6}
        dur={0.5}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 8)}
        d="M 936 445 a 9 9 0 1 0 18 0 a 9 9 0 1 0 -18 0"
        stroke={INK}
        fill={INK}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 6} delay={dl(6, 8.8)}>
        <T x={945} y={425} size={14} fill={INK} weight={700}>
          M
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 10.5)}>
        <T x={930} y={517} size={12} fill={MUTED} script>
          {t(
            "one equivalent particle, mass M",
            "ek equivalent particle, mass M"
          )}
        </T>
      </Fade>

      {/* beat 7 — the power it hands us */}
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={540} y={572} size={14} fill={GREEN} script>
          {t(
            "CoM moves as if ALL the mass and ALL external forces acted at that one point",
            "CoM aise chalta hai jaise saari mass aur saare external forces wahin lage hon"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 4.5)}
        d="M 260 590 h 560"
        stroke={GREEN}
        sw={2.2}
        dur={0.7}
      />
    </Scene>
  );
}
