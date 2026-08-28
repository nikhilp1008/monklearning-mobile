/**
 * Ch08 · Section 64 — "Chapter 8 rapid-recall cheat sheet"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Note: hi beats 1..4 are ~1s apart — short delays there.
 *
 * Final section of the chapter: seven punchy recall lines, one per beat.
 *
 * Beats (en [0, 7.17, 18.26, 30.29, 45.74, 59.05, 72.36, 88.41]):
 *  0 title only
 *  1 red margin: more Y=more elastic, steel beats rubber; strain never in Pa
 *  2 text: wire=spring k=YA/L, short&fat=stiff; series adds stretch, parallel adds stiffness
 *  3 text: slow gas soft (B=P), fast gas stiff (B=γP); only 2 of 4 constants free
 *  4 text: stretch→slims (ν); U=½FΔL; drop it→doubles: x_max=2x_static
 *  5 text: slope=stiffness, area=energy, length=ductility, loop=lost heat
 *  6 red margin: depth³/breadth¹; heat builds stress not by the metre; twist loves r⁴; mountains end where rock gives way
 *  7 text: milestones in order P,E,Y,U,F — "Please Eat Your Usual Food"
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title (script 20, red, ALWAYS ON) cx540 bl64
 *  b1 | margin bar        | Draw | x60 y110..138
 *  b1 | note (14)         | T st | x76..~676 bl128
 *  b2 | tick/text (14)    | T st | x80..682 bl190
 *  b3 | tick/text (14)    | T st | x80..605 bl260
 *  b4 | tick/text (14)    | T st | x80..500 bl330
 *  b5 | tick/text (14)    | T st | x80..521 bl400
 *  b6 | margin bar        | Draw | x60 y460..488
 *  b6 | note (13)         | T st | x76..~834 bl478
 *  b7 | tick/text (15)    | T st | x80..552 bl540
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
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec64({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("chapter 8: rapid-recall cheat sheet", "chapter 8: rapid-recall cheat sheet")}
        </T>
      </Fade>

      {/* beat 1 — the golden rule */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d="M60 110 L60 138" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={76} y={128} size={14} fill={RED} script anchor="start">
          {t("more Y = more elastic — steel beats rubber; strain is never in Pa", "zyada Y = zyada elastic — steel rubber ko haraye; strain kabhi Pa nahi")}
        </T>
      </Fade>

      {/* beat 2 — wire as spring */}
      <Draw on={beat >= 2} delay={dl(2, 0.1)} d="M65 186 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={80} y={190} size={14} fill={INK} weight={600} anchor="start">
          {t("wire=spring: k=YA/L, short&fat=stiff; series adds stretch, parallel adds stiffness", "wire=spring: k=YA/L, short&fat=stiff; series stretch jode, parallel stiffness")}
        </T>
      </Fade>

      {/* beat 3 — gas modulus */}
      <Draw on={beat >= 3} delay={dl(3, 0.1)} d="M65 256 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={80} y={260} size={14} fill={INK} weight={600} anchor="start">
          {t("slow gas=soft (B=P), fast gas=stiff (B=γP); only 2 of 4 constants free", "slow gas=soft (B=P), fast gas=stiff (B=γP); 4 mein sirf 2 free")}
        </T>
      </Fade>

      {/* beat 4 — Poisson, energy, sudden loading */}
      <Draw on={beat >= 4} delay={dl(4, 0.1)} d="M65 326 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={80} y={330} size={14} fill={INK} weight={600} anchor="start">
          {t("stretch→slims (ν); U=½FΔL; drop it→doubles: x_max=2x_static", "stretch→slim (ν); U=½FΔL; girao→double: x_max=2x_static")}
        </T>
      </Fade>

      {/* beat 5 — reading the curve */}
      <Draw on={beat >= 5} delay={dl(5, 0.1)} d="M65 396 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={80} y={400} size={14} fill={INK} weight={600} anchor="start">
          {t("slope=stiffness, area=energy, length=ductility, loop=lost heat", "slope=stiffness, area=energy, length=ductility, loop=lost heat")}
        </T>
      </Fade>

      {/* beat 6 — the four applications, in one breath */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M60 460 L60 488" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={478} size={13} fill={RED} script anchor="start">
          {t("depth³, breadth¹; heat builds stress not by the metre; twist loves r⁴; mountains end where rock gives way", "depth³, breadth¹; heat stress banata metre se nahi; twist ko r⁴ pasand; mountains wahan khatam jahan rock de")}
        </T>
      </Fade>

      {/* beat 7 — the milestones, in order */}
      <Draw on={beat >= 7} delay={dl(7, 0.1)} d="M65 536 h8" stroke={INK} sw={1.4} dur={0.2} />
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={80} y={540} size={15} fill={INK} weight={700} anchor="start">
          {t('milestones in order: P,E,Y,U,F — "Please Eat Your Usual Food"', 'milestones order mein: P,E,Y,U,F — "Please Eat Your Usual Food"')}
        </T>
      </Fade>
    </Scene>
  );
}
