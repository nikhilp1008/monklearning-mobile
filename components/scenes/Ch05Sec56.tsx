/**
 * Ch05 · Section 56 — "A restitution rebound, and the 90-degree oblique result"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 15.8, 29.9, 54.7, 79.5, 89.3, 106.7, 131.5, 156.3, 181.2] · dur 192.5 —
 *        b4 lasts ~1s in hi → hi-tiny delays;
 *        hi [0, 17.8, 31.0, 55.8, 80.6, 81.6, 100.8, 125.6, 150.4, 175.3] · dur 187.5):
 *  0 title · 1 Ex3 setup · 2 first bounce e²h · 3 geometric series distance
 *  4 pivot (hi tiny) · 5 Ex4 setup · 6 vector equations · 7 the dot move → 90°
 *  8 unity remark · 9 note band
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl80
 *  Ex3: lbl st x80 bl114 · chip x80..500 y124..160 · st x90 bl205/233 · muted bl259
 *   b3 st x90 bl299 · chip x90..430 y320..358 · muted cx260 bl384 · b4 amber cx280 bl424
 *  Ex4: lbl st x560 bl114 · chip x560..1035 y124..160 · b6 st x570 bl205/233
 *   b7 bl273 / bl301 / bl329 · b8 green cx790 bl369 · muted bl395
 *  b9 | bar x66 y460..525 · lines st x84 bl480 / bl506
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec56({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t("A Restitution Rebound & the 90° Result", "Restitution Rebound & 90° Waala Result")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 5)}>
        <T x={540} y={80} size={13} fill={MUTED} script>
          {t(
            "an infinite series — then day one's dot product returns",
            "ek infinite series — phir pehle din ka dot product lautta hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — Ex3 setup */}
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={80} y={114} size={13} fill={AMBER_DARK} script anchor="start">
          {t("Ex 3 — JEE Main: the bouncing ball", "Ex 3 — JEE Main: uchhalti gend")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Chip x={80} y={124} w={420} h={36} fill={CREAM} stroke={INK} textFill={INK} size={12} script={false}>
          {t(
            "dropped from h · floor has e · first bounce? total distance?",
            "h se giri · floor ka e · pehli bounce? kul doori?"
          )}
        </Chip>
      </Fade>

      {/* beat 2 — first bounce */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={90} y={205} size={14} fill={INK} anchor="start" weight={700}>
          {t("arrive: √(2gh) · rebound: e × that", "pahunchti: √(2gh) · wapas: e × wahi")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 9)}>
        <T x={90} y={233} size={14} fill={GREEN} anchor="start" weight={800}>
          height ∝ v² → h₁ = e² h
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 16)}>
        <T x={90} y={259} size={12.5} fill={MUTED} script anchor="start">
          {t(
            "each bounce: a fixed fraction e² — geometric decay",
            "har bounce: tay ansh e² — geometric kshay"
          )}
        </T>
      </Fade>

      {/* beat 3 — the series */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={90} y={299} size={14} fill={INK} anchor="start" weight={700}>
          D = h + 2(e²h + e⁴h + …)
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 9)}>
        <Chip x={90} y={320} w={340} h={38} fill={CREAM} stroke={GREEN} textFill={INK} size={14} script={false}>
          D = h (1+e²) ⁄ (1−e²)
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 17)}>
        <T x={260} y={384} size={12.5} fill={MUTED} script>
          {t(
            "e → 1: it blows up — never quite settles",
            "e → 1: uchhal jaati hai — kabhi poori nahi thamti"
          )}
        </T>
      </Fade>

      {/* beat 4 — pivot (hi: ~1s beat) */}
      <Fade on={beat >= 4} delay={dl(4, en ? 3 : 0.2)}>
        <T x={280} y={424} size={13} fill={AMBER_DARK} script>
          {t(
            "now: the most elegant result in the chapter",
            "ab: chapter ka sabse shaandar result"
          )}
        </T>
      </Fade>

      {/* beat 5 — Ex4 setup */}
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={560} y={114} size={13} fill={RED} script anchor="start">
          Ex 4 — JEE Advanced
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <Chip x={560} y={124} w={475} h={36} fill={CREAM} stroke={INK} textFill={INK} size={12} script={false}>
          {t(
            "identical balls · elastic · oblique · prove: they part at 90°",
            "ek jaisi balls · elastic · oblique · saabit karo: 90° par alag"
          )}
        </Chip>
      </Fade>

      {/* beat 6 — the vector equations */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={570} y={205} size={14} fill={INK} anchor="start" weight={700}>
          {t("momentum: u = v₁ + v₂ (vectors)", "momentum: u = v₁ + v₂ (vectors)")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 10)}>
        <T x={570} y={233} size={14} fill={INK} anchor="start" weight={700}>
          {t("energy: u² = v₁² + v₂²", "energy: u² = v₁² + v₂²")}
        </T>
      </Fade>

      {/* beat 7 — the dot-product move */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={570} y={273} size={13} fill={AMBER_DARK} script anchor="start">
          {t("dot the momentum equation with itself:", "momentum equation ko khud se dot karo:")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={570} y={301} size={14} fill={INK} anchor="start" weight={700}>
          u² = v₁² + v₂² + 2 v₁·v₂
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 15)}>
        <T x={570} y={329} size={14} fill={GREEN} anchor="start" weight={800}>
          {t("compare → v₁·v₂ = 0 → ⊥ — exactly 90°", "compare → v₁·v₂ = 0 → ⊥ — bilkul 90°")}
        </T>
      </Fade>

      {/* beat 8 — the unity */}
      <Fade on={beat >= 8} delay={dl(8, 2)}>
        <T x={790} y={369} size={13} fill={GREEN} script>
          {t(
            "the day-one perpendicularity test closes the last argument",
            "pehle din ka perpendicularity test aakhri daleel band karta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 12)}>
        <T x={790} y={395} size={12.5} fill={MUTED} script>
          {t(
            "physics rewards remembering where you started",
            "physics yaad rakhne ka inaam deti hai ki shuru kahan se kiya"
          )}
        </T>
      </Fade>

      {/* beat 9 — the note */}
      <Draw on={beat >= 9} delay={dl(9, 0.5)} d="M 66 460 v 62" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 9} delay={dl(9, 2)}>
        <T x={84} y={480} size={13} fill={GREEN} script anchor="start">
          {t(
            "the dot product from subtopic ONE returns at the very end",
            "subtopic EK ka dot product bilkul aakhir mein lautta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 8)}>
        <T x={84} y={506} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "…to prove a purely geometric fact about colliding balls",
            "…takraati balls ke baare mein ek shuddh geometric sach saabit karne"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
