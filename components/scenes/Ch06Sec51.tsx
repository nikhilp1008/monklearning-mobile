/**
 * Ch06 · Section 51 — "Rotation mirrors straight-line motion"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0,13.06,14.06,15.06,24.7,37.75,50.13,66] — b1,b2 fast in EN;
 * hi [0,11.69,27.82,28.82,29.82,41.51,54.99,72.23] — b2,b3 fast in HI →
 * b1,b2,b3 kept ≤0.9 s; b0,b4..b7 have room in both languages):
 *  0 title + "good news" subline
 *  1 figure: wheel with swept angle θ, rotation arrow ω, caption re: α
 *  2 correspondence line: every linear quantity has a rotational twin
 *  3 θ replaces distance, ω replaces speed
 *  4 α = rate of change of ω, sign convention
 *  5 rigid body: one ω, one α for the whole body
 *  6 three symbol-swap chips: s→θ, v→ω, a→α
 *  7 closing gift line + underline
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b1 | circle c(270,175) r70 · crosshair centre · radius-up (270,175)→(270,105) ·
 *       radius-to-P (270,175)→(327,135) · θ arc same span · "θ" cx298 bl148 ·
 *       ω tangent arrow (327,135)→(343,158) · "ω" st(350,166) ·
 *       caption script11 cx270 bl270
 *  b2 | script13 cx540 bl310
 *  b3 | sans15 st x80 bl340
 *  b4 | sans15 st x80 bl375 · sub script12 st x80 bl400
 *  b5 | sans14 st x80 bl435
 *  b6 | chips y460 h36: x60 w300 / x390 w300 / x720 w300
 *  b7 | script13 cx540 bl525 · underline y545 x300..780
 */

import React from "react";
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
  AMBER,
  AMBER_DARK,
  GREEN,
  GREEN_DARK,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch06Sec51({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the good news */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t(
            "rotation mirrors straight-line motion",
            "rotation, straight-line motion ka aina hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={540} y={88} size={12} fill={MUTED} script>
          {t(
            "not new physics — every idea already has a rotational twin",
            "nayi physics nahi — har idea ka rotational twin pehle se hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — the wheel: θ, ω, and a hint of α */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.1)}
        d="M 200 175 a 70 70 0 1 0 140 0 a 70 70 0 1 0 -140 0"
        stroke={INK}
        sw={2.2}
        dur={0.7}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.3)}
        d="M 270 175 a 4 4 0 1 0 0.1 0 M 264 175 h -6 M 276 175 h 6 M 270 169 v -6 M 270 181 v 6"
        stroke={INK}
        sw={1.6}
        dur={0.3}
      />
      <Draw on={beat >= 1} delay={dl(1, 0.4)} d="M 270 175 L 270 105" stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 0.5)} d="M 270 175 L 327 135" stroke={AMBER} sw={2} dur={0.4} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 270 105 A 70 70 0 0 1 327 135"
        stroke={AMBER_DARK}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.65)}>
        <T x={298} y={148} size={13} fill={AMBER_DARK} weight={700}>
          θ
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.7)}
        d="M 327 135 L 343 158 M 336 152 L 343 158 L 333 161"
        stroke={INK}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 0.75)}>
        <T x={350} y={166} size={13} fill={INK} anchor="start" weight={700}>
          ω
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={270} y={270} size={11} fill={MUTED} script>
          {t(
            "α — the spin rate itself can change",
            "α — spin rate khud badal sakti hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — the exact correspondence */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={310} size={13} fill={INK} script>
          {t(
            "every linear quantity has a rotational twin — measured in angle",
            "har linear quantity ka rotational twin hai — angle mein mapa"
          )}
        </T>
      </Fade>

      {/* beat 3 — θ and ω replace distance and speed */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={340} size={15} fill={INK} anchor="start" weight={700}>
          θ {t("replaces distance", "distance ki jagah")} ,  ω {t("replaces speed", "speed ki jagah")}
        </T>
      </Fade>

      {/* beat 4 — α, sign convention */}
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={80} y={375} size={15} fill={INK} anchor="start" weight={700}>
          α = dω/dt   {t("(twin of linear acceleration)", "(linear acceleration ka twin)")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={80} y={400} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "ω grows → α positive · ω shrinks → α negative",
            "ω badhe → α positive · ω ghate → α negative"
          )}
        </T>
      </Fade>

      {/* beat 5 — one ω, one α for the whole body */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={80} y={435} size={14} fill={INK} anchor="start" weight={700}>
          {t(
            "rigid body: same angle, same time — ONE ω, ONE α for the whole body",
            "rigid body: same angle, same time — poori body ka EK ω, EK α"
          )}
        </T>
      </Fade>

      {/* beat 6 — the symbol swap */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <Chip x={60} y={460} w={300} h={36} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          s → θ
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        <Chip x={390} y={460} w={300} h={36} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          v → ω
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <Chip x={720} y={460} w={300} h={36} fill={CREAM} stroke={GREEN} textFill={INK} size={15} script={false}>
          a → α
        </Chip>
      </Fade>

      {/* beat 7 — the gift */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={540} y={525} size={13} fill={GREEN_DARK} script>
          {t(
            "you're not learning new physics — you're re-labelling physics you already own",
            "nayi physics nahi seekh rahe — apni hi physics ko naya label de rahe ho"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 3.5)} d="M 300 545 h 480" stroke={GREEN} sw={2.2} dur={0.6} />
    </Scene>
  );
}
