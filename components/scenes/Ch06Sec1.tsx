/**
 * Ch06 · Section 1 — "What makes a body rigid"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.77, 17.75, 28.07, 39.77, 53.25, 66.47, 72.28]):
 *  0 title
 *  1 the old world: a point mass + dashed trajectory — "where it goes ✓"
 *  2 second dot: rotation arc drawn, then crossed out — a dot can't spin
 *  3 red-margin definition: distance between ANY two particles never changes
 *  4 the swarm: 5 particles, rods welded one by one · one rod amber = distance fixed
 *  5 right column: bat/flywheel/spanner/planet chips — rigid model works
 *  6 amber retrace of all rods — frozen geometry IS the definition
 *  7 green verdict: whole body rotates as ONE thing + underline
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title script26 cx540 bl 58
 *  b1 | dot A (140,185) r6 · label script13 cx140 bl 222 (x72..208) ·
 *       dashed arrow (152,180)→(360,135) · green label cx256 bl 112 (x106..406 y94..119)
 *  b2 | dot B (480,185) r6 · arc r26 around it · crossD(452,157,56,52) ·
 *       red label cx480 bl 250 (x318..642 y231..257)
 *  b3 | red bar x660 y100..240 · lines st x678 bl 130/165/200 (≤x1008)
 *  b4 | swarm P1(230,330) P2(360,305) P3(455,365) P4(370,450) P5(240,435) r7 ·
 *       rods perimeter+P1P3+P2P4 · amber rod P1P2 · "distance fixed" end-anchor
 *       x212 bl 322 (x112..212 y303..328) · caption script13 cx340 bl 486 (y469..492)
 *  b5 | header script14 cx840 bl 300 · chips (660/850, 325/375) w170 h34 ·
 *       green line script13 cx840 bl 447 (x676..1004)
 *  b6 | amber retrace all rods · amber line script14 cx340 bl 528 (x132..548 y509..534)
 *  b7 | green line script15 cx540 bl 574 (x272..808 y555..581) · underline y590 x300..780
 */

import React from "react";
import { Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  arrowD,
  crossD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const RODS =
  "M 230 330 L 360 305 M 360 305 L 455 365 M 455 365 L 370 450 M 370 450 L 240 435 M 240 435 L 230 330 M 230 330 L 455 365 M 360 305 L 370 450";

const DOTS = [
  [230, 330],
  [360, 305],
  [455, 365],
  [370, 450],
  [240, 435],
] as const;

export default function Ch06Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the question of the chapter */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={58} size={26} fill={INK} script>
          {t("what makes a body rigid?", "koi cheez rigid body kaise banti hai?")}
        </T>
      </Fade>

      {/* beat 1 — the old world: a dot that only travels */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d="M 134 185 a 6 6 0 1 0 12 0 a 6 6 0 1 0 -12 0"
        stroke={INK}
        fill={INK}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={140} y={222} size={13} fill={MUTED} script>
          {t("single point + mass", "single point + mass")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <Path
          d="M 152 180 L 360 135"
          fill="none"
          stroke={INK}
          strokeWidth={2}
          strokeDasharray="7 6"
        />
        <Path
          d="M 348 142 L 360 135 L 356 148"
          fill="none"
          stroke={INK}
          strokeWidth={2}
          strokeLinecap="round"
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.5)}>
        <T x={256} y={112} size={14} fill={GREEN_DARK} script>
          {t("where it goes — works fine ✓", "kahaan jaati hai — bas yahi kaafi tha ✓")}
        </T>
      </Fade>

      {/* beat 2 — but a dot cannot spin */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d="M 474 185 a 6 6 0 1 0 12 0 a 6 6 0 1 0 -12 0"
        stroke={INK}
        fill={INK}
        sw={2}
        dur={0.5}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 2)}
        d="M 506 185 A 26 26 0 1 1 480 159 M 472 165 L 480 159 L 481 169"
        stroke={INK}
        sw={2}
        dur={1}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 4.5)}
        d={crossD(452, 157, 56, 52)}
        stroke={RED}
        sw={2.8}
        dur={0.7}
      />
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={480} y={250} size={14} fill={RED} script>
          {t(
            "no size — can't spin, wobble or roll",
            "size hi nahi — na spin, na wobble, na roll"
          )}
        </T>
      </Fade>

      {/* beat 3 — the definition, red-margin note */}
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d="M 660 100 v 140" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={678} y={130} size={15} fill={RED} script anchor="start">
          RIGID BODY:
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={678} y={165} size={15} fill={RED} script anchor="start">
          {t(
            "distance between ANY two particles",
            "kinhi bhi do particles ke beech distance"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7.5)}>
        <T x={678} y={200} size={15} fill={RED} script anchor="start">
          {t(
            "NEVER changes — whatever the force",
            "kabhi NAHI badalti — force koi bhi ho"
          )}
        </T>
      </Fade>

      {/* beat 4 — the swarm welded by rods */}
      {DOTS.map(([cx, cy], i) => (
        <Draw
          key={i}
          on={beat >= 4}
          delay={dl(4, 0.8 + i * 0.25)}
          d={`M ${cx - 7} ${cy} a 7 7 0 1 0 14 0 a 7 7 0 1 0 -14 0`}
          stroke={INK}
          fill={INK}
          sw={2}
          dur={0.4}
        />
      ))}
      <Draw on={beat >= 4} delay={dl(4, 2.4)} d={RODS} stroke={INK} sw={2.2} dur={2.6} />
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={340} y={486} size={13} fill={MUTED} script>
          {t(
            "particles welded by unstretchable rods",
            "unbreakable rods se welded particles ka swarm"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 8.5)}
        d="M 230 330 L 360 305"
        stroke={AMBER}
        sw={3.4}
        dur={0.7}
      />
      <Fade on={beat >= 4} delay={dl(4, 9.5)}>
        <T x={212} y={322} size={13} fill={AMBER_DARK} script anchor="end">
          {t("distance fixed", "distance fixed")}
        </T>
      </Fade>

      {/* beat 5 — the rigid family */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={840} y={300} size={14} fill={INK} script>
          {t(
            "real objects do deform a little…",
            "real objects thoda deform hote hain…"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.5)}>
        <Chip x={660} y={325} w={170} h={34} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={15}>
          {t("cricket bat", "cricket bat")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <Chip x={850} y={325} w={170} h={34} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={15}>
          {t("flywheel", "flywheel")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5.5)}>
        <Chip x={660} y={375} w={170} h={34} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={15}>
          {t("spanner", "spanner")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <Chip x={850} y={375} w={170} h={34} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={15}>
          {t("planet", "planet")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9.5)}>
        <T x={840} y={447} size={13} fill={GREEN_DARK} script>
          {t(
            "deformation ≈ 0 → treat as perfectly rigid",
            "deformation ≈ 0 → perfectly rigid maan lo"
          )}
        </T>
      </Fade>

      {/* beat 6 — frozen geometry IS the definition */}
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d={RODS} stroke={AMBER} sw={3} dur={1.8} />
      <Fade on={beat >= 6} delay={dl(6, 2.8)}>
        <T x={340} y={528} size={14} fill={AMBER_DARK} script>
          {t(
            "this frozen geometry IS rigidity's whole definition",
            "yahi frozen geometry hi rigidity ki poori pehchaan hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — one body, one rotation */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={540} y={574} size={15} fill={GREEN} script>
          {t(
            "so the whole body rotates as ONE thing",
            "poori body ka rotation = EK cheez, har particle ka alag khel nahi"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 3.5)}
        d="M 300 590 h 480"
        stroke={GREEN}
        sw={2.2}
        dur={0.7}
      />
    </Scene>
  );
}
