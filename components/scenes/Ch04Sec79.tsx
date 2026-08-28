/**
 * Ch04 · Section 79 — "Pitfalls and pro-tips: Connected Bodies and Pulleys"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 15.36, 40.19, 65.02, 89.6, 111.79, 136.62, 147.46, 172.29]):
 *  0 title
 *  1 pitfall 1: forgetting the constraint
 *  2 pitfall 2: inconsistent positive directions
 *  3 pitfall 3: full applied force used as the internal force
 *  4 pitfall 4: tension 'differing' across an ideal pulley
 *  5 pitfall 5: movable-pulley factor of two mishandled
 *  6 pro-tip heading: add the equations
 *  7 pro-tip text: cut, draw, add — tension cancels
 *  8 red margin: two memory aids
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52
 *  p1 st x84 bl 92 / 114 · p2 bl 142 / 164 · p3 bl 192 / 214 ·
 *  p4 bl 242 / 264 · p5 bl 292 / 314
 *  b6 head cx540 bl 350
 *  b7 st x84 bl 380 / 404
 *  b8 | bar x66 y430..500 · lines st x84 bl 450 / 476
 */

import React from "react";
import { G } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, AMBER_DARK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec79({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const pit = (k: number, hy: number, dy: number, hdr: string, det: string, detFill: string) => (
    <G>
      <Fade on={beat >= k} delay={dl(k, 1)}>
        <T x={84} y={hy} size={14} fill={RED} script anchor="start">
          {hdr}
        </T>
      </Fade>
      <Fade on={beat >= k} delay={dl(k, 8)}>
        <T x={84} y={dy} size={12} fill={detFill} script anchor="start">
          {det}
        </T>
      </Fade>
    </G>
  );

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t(
            "where connected-body marks quietly leak",
            "connected-body marks chupke se kahan jaate hain"
          )}
        </T>
      </Fade>

      {pit(
        1,
        92,
        114,
        t("1 · forgetting the constraint", "1 · constraint bhoolna"),
        t(
          "2 eqns, 3 unknowns — add a₁=a₂ (fixed pulley) as the third",
          "2 eqns, 3 unknowns — teesri a₁=a₂ (fixed pulley) jodo"
        ),
        AMBER_DARK
      )}
      {pit(
        2,
        142,
        164,
        t("2 · inconsistent positive directions", "2 · asangat positive dishayen"),
        t(
          "each body's OWN direction of motion = positive, every time",
          "har body ki APNI motion ki disha = positive, har baar"
        ),
        AMBER_DARK
      )}
      {pit(
        3,
        192,
        214,
        t("3 · full F used as the internal force", "3 · poori F ko internal force maanna"),
        t(
          "a junction only accelerates the mass BEYOND it — never the whole load",
          "junction sirf uske PARE ka mass accelerate karta — poora load nahi"
        ),
        GREEN
      )}
      {pit(
        4,
        242,
        264,
        t("4 · tension 'differing' across an ideal pulley", "4 · ideal pulley ke aar-paar tension 'alag'"),
        t(
          "massless string, frictionless pulley → ONE tension, always",
          "massless string, frictionless pulley → HAMESHA EK tension"
        ),
        GREEN
      )}
      {pit(
        5,
        292,
        314,
        t("5 · movable-pulley factor of two, mishandled", "5 · movable-pulley factor of two, galat"),
        t(
          "count the string segments physically — don't guess the ratio",
          "string segments physically gino — ratio ka andaaza mat lagao"
        ),
        RED
      )}

      {/* beat 6 — pro-tip heading */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={350} size={16} fill={AMBER_DARK} script>
          {t("pro-tip: add the equations", "pro-tip: equations jodo")}
        </T>
      </Fade>

      {/* beat 7 — cut, draw, add */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={84} y={380} size={14} fill={INK} script anchor="start">
          {t(
            "cut the bodies free, draw each FBD, ΣF=ma with consistent signs",
            "bodies ko azaad karo, har FBD banao, ΣF=ma consistent signs se"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={404} size={14} fill={GREEN} script anchor="start">
          {t(
            "add them — T cancels, a falls out in one clean line",
            "unhe jodo — T cancel, a ek saaf line mein nikal aata"
          )}
        </T>
      </Fade>

      {/* beat 8 — memory aids */}
      <Draw on={beat >= 8} delay={dl(8, 0.6)} d="M 66 430 v 70" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={450} size={14} fill={RED} script anchor="start">
          {t(
            "'cut, draw, add — tension falls out'",
            "'cut, draw, add — tension nikal aati'"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 7)}>
        <T x={84} y={476} size={14} fill={RED} script anchor="start">
          {t(
            "Atwood: 'difference over sum, times g'",
            "Atwood: 'antar upon jod, guna g'"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
