/**
 * Ch05 · Section 66 — "Rapid-revision memory hooks" (cheat sheet)
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 * Final section of the chapter.
 *
 * Beats (en [0, 19.2, 36.95, 56.15, 74.5, 98.73, 123.56, 140.97, 152.06] · dur 176.9;
 *        hi [0, 19.2, 38.4, 54.78, 73.56, 98.39, 123.22, 142.76, 152.75] · dur 177.58):
 *  0 title + subtitle
 *  1 hook 1 — scalar product (dot/cross, work = signed scalar)
 *  2 hook 2 — SAD angles
 *  3 hook 3 — K ∝ p², PE curve valley/hilltop
 *  4 hook 4 — conservative vs non-conservative, round-trip test
 *  5 hook 5 — E = mc², the two anchor numbers
 *  6 hook 6 — power = how fast, km/h trap
 *  7 hook 7 — momentum fixed in every collision (bridge line)
 *  8 hook 8 (vertical circle) + closing box: eight hooks, go and show it
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl78
 *  bars x66, rows st x84: H1 bl112/136 · H2 bl172/196 · H3 bl232/256 ·
 *  H4 bl292/316 · H5 bl352/376 · H6 bl412/436 · H7 bl472 (single)
 *  b8 | box x60..1020 y500..590 · H8 bl528 · closing bl554/578
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
  MUTED,
  AMBER,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec66({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Cheat Sheet — Eight Hooks for the Last Five Minutes", "Cheat Sheet — Aakhri Paanch Minute Ke Aath Hooks")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={540} y={78} size={13} fill={MUTED} script>
          {t(
            "read them once, right before you walk into the exam hall",
            "inhe ek baar padho, exam hall mein jaane se theek pehle"
          )}
        </T>
      </Fade>

      {/* beat 1 — hook 1: scalar product */}
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d="M 66 98 v 52" stroke={AMBER} sw={3.2} dur={0.3} />
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={84} y={112} size={13} fill={INK} script anchor="start">
          {t(
            "hook 1 — dot → scalar, cross → vector; zero dot = right angle",
            "hook 1 — dot → scalar, cross → vector; zero dot = right angle"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={84} y={136} size={12.5} fill={GREEN} script anchor="start">
          {t(
            "work IS a dot product → a SIGNED scalar, never a direction",
            "work ek dot product HAI → ek SIGNED scalar, kabhi direction nahi"
          )}
        </T>
      </Fade>

      {/* beat 2 — hook 2: SAD angles */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 66 158 v 52" stroke={AMBER} sw={3.2} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 1.4)}>
        <T x={84} y={172} size={13} fill={INK} script anchor="start">
          {t(
            "hook 2 — SAD angles: Same dir = + · Against = − · Dead ⊥ = 0",
            "hook 2 — SAD angles: Same dir = + · Against = − · Dead ⊥ = 0"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={84} y={196} size={12.5} fill={MUTED} script anchor="start">
          {t(
            "holding a weight still: force yes, displacement no → zero work",
            "weight ko sthir pakadna: force haan, displacement nahi → zero work"
          )}
        </T>
      </Fade>

      {/* beat 3 — hook 3: energy shapes */}
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d="M 66 218 v 52" stroke={AMBER} sw={3.2} dur={0.3} />
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={84} y={232} size={13} fill={INK} script anchor="start">
          {t(
            "hook 3 — K goes as p² — double the momentum, quadruple K",
            "hook 3 — K chalta hai p² se — momentum dugna, K chauguna"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={84} y={256} size={12.5} fill={GREEN} script anchor="start">
          {t(
            "on a PE curve: valley = stable · hilltop = unstable · F = −slope",
            "PE curve par: valley = stable · hilltop = unstable · F = −slope"
          )}
        </T>
      </Fade>

      {/* beat 4 — hook 4: two families of force */}
      <Draw on={beat >= 4} delay={dl(4, 0.6)} d="M 66 278 v 52" stroke={AMBER} sw={3.2} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 1.4)}>
        <T x={84} y={292} size={13} fill={INK} script anchor="start">
          {t(
            "hook 4 — conservative gives it back; non-conservative burns it as heat",
            "hook 4 — conservative wapas deta; non-conservative heat bana ke jalata"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={84} y={316} size={12.5} fill={RED} script anchor="start">
          {t(
            "round trip: gravity = exactly 0 · friction is NEVER zero",
            "round trip: gravity = bilkul 0 · friction KABHI zero nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — hook 5: mass-energy */}
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d="M 66 338 v 52" stroke={AMBER} sw={3.2} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 1.4)}>
        <T x={84} y={352} size={13} fill={INK} script anchor="start">
          {t(
            "hook 5 — E = mc² — always square c; mass loss ⇒ nuclear, never chemical",
            "hook 5 — E = mc² — hamesha c square karo; mass loss ⇒ nuclear, chemical kabhi nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={84} y={376} size={12.5} fill={MUTED} script anchor="start">
          {t(
            "anchors: 1 kg = 9×10¹⁶ J · 1 u = 931.5 MeV",
            "anchors: 1 kg = 9×10¹⁶ J · 1 u = 931.5 MeV"
          )}
        </T>
      </Fade>

      {/* beat 6 — hook 6: power */}
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d="M 66 398 v 52" stroke={AMBER} sw={3.2} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <T x={84} y={412} size={13} fill={INK} script anchor="start">
          {t(
            "hook 6 — power is how FAST you work, not how much",
            "hook 6 — power ye hai ki kitni TEZ kaam karte ho, kitna nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={84} y={436} size={12.5} fill={RED} script anchor="start">
          {t(
            "see km/h? ÷3.6 first — constant FORCE ≠ constant power",
            "km/h dikha? pehle ÷3.6 — constant FORCE ≠ constant power"
          )}
        </T>
      </Fade>

      {/* beat 7 — hook 7: momentum, the bridge line */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 458 v 28" stroke={AMBER} sw={3.2} dur={0.3} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={472} size={13} fill={INK} script anchor="start">
          {t(
            "hook 7 — momentum is fixed in every collision → write it down first",
            "hook 7 — har collision mein momentum tay hai → pehle wahi likho"
          )}
        </T>
      </Fade>

      {/* beat 8 — hook 8 + the closing box */}
      <Draw
        on={beat >= 8}
        delay={dl(8, 0.8)}
        d="M 72 500 h 936 q 12 0 12 12 v 66 q 0 12 -12 12 h -936 q -12 0 -12 -12 v -66 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.9}
      />
      <Fade on={beat >= 8} delay={dl(8, 2.2)}>
        <T x={540} y={528} size={13} fill={INK} weight={700}>
          {t(
            "hook 8 — top needs √(gR), bottom √(5gR) · T_bottom − T_top = 6mg, always",
            "hook 8 — top ko √(gR), bottom ko √(5gR) chahiye · T_bottom − T_top = 6mg, hamesha"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 10)}>
        <T x={540} y={554} size={13} fill={GREEN} script>
          {t(
            "eight hooks, one for each corner of the chapter",
            "aath hooks, chapter ke har kone ke liye ek"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 17)}>
        <T x={540} y={578} size={13} fill={GREEN} script>
          {t("you know this chapter now — go and show it", "ab tum ye chapter jaante ho — jao aur dikhao")}
        </T>
      </Fade>
    </Scene>
  );
}
