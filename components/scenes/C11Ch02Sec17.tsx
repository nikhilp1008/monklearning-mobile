/**
 * C11 Ch02 · Section 17 — "Einstein's photons and the photoelectric puzzle"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md.
 *
 * Beats (en [0, 5.63, 22.27, 32.51, 39.34, 50.26, 59.9, 76.97]):
 *  0 anchor: "light as a stream of particles"
 *  1 represent: a photon, E = hν
 *  2 represent: shine it on a metal → an electron is ejected
 *  3 guardrail: wave theory made 3 predictions — all wrong
 *  4 the 3 wrong predictions, crossed
 *  5 guardrail (high): below threshold ν, no electrons however intense
 *  6 formula: hν = W₀ + KE (one photon → one electron)
 *  7 explain: speed ∝ frequency not brightness; emission is instant
 *
 * Layout plan (single column, x540 center):
 *  title (always)              | T mid | x540 y52 size15 script red
 *  b0 | anchor caption          | T mid | x540 y76             [dims@b1]
 *  b1 | photon arrow + label    | Draw/T| y210 x280..495 / x387 y190
 *  b2 | metal plate             | Draw  | x500..516 y140..280
 *  b2 | "metal surface" lbl     | T     | x508 y298
 *  b2 | electron arrow+dot+lbl  | Draw/T| (525,210)→(660,180)
 *  b2 | effect caption          | T mid | x540 y330
 *  b3 | guardrail chip (RED)    | Chip  | x260..820 y350..380
 *  b4 | 3 wrong predictions     | T mid | x540 y405
 *  b5 | guardrail chip (high)   | Chip  | x230..850 y425..457
 *  b6 | hν=W₀+KE box (GREEN)   | Chip  | x380..700 y470..504
 *  b7 | "speed ∝ ν…" caption    | T mid | x540 y535
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch02Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={15} fill={RED} script>
          {t("Einstein's photons and the photoelectric puzzle", "Einstein ke photons aur photoelectric puzzle")}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={76} size={11} fill={RED} script>
          {t("light as a stream of particles", "light particles ki stream ki tarah")}
        </T>
      </Fade>

      {/* beat 1 — represent: a photon, E = hν */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d={arrowD(280, 210, 495, 210)} stroke={AMBER} sw={2.4} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={387} y={190} size={12} fill={AMBER_DARK}>
          {t("photon (hν)", "photon (hν)")}
        </T>
      </Fade>

      {/* beat 2 — the photoelectric effect: electron ejected */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 500 140 h 16 v 140 h -16 z" stroke={INK} sw={2} dur={0.6} fill={INK} />
      <Fade on={beat >= 2} delay={dl(2, 0.9)}>
        <T x={508} y={298} size={11} fill={MUTED}>
          {t("metal surface", "metal surface")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.3)} d={arrowD(525, 210, 660, 180)} stroke={RED} sw={2.2} dur={0.6} />
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <Circle cx={660} cy={180} r={5} fill={RED} />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={670} y={175} size={12} fill={RED} anchor="start">
          {t("e⁻ ejected!", "e⁻ ejected!")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <T x={540} y={330} size={12} fill={INK} script>
          {t("shine light on a metal → electrons fly off", "metal par light daalo → electrons udd jaate hain")}
        </T>
      </Fade>

      {/* beat 3 — guardrail: wave theory's 3 predictions, all wrong */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={260} y={350} w={560} h={30} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t("wave theory made 3 predictions — ALL WRONG", "wave theory ne 3 predictions kiye — SAB GALAT")}
        </Chip>
      </Fade>

      {/* beat 4 — the 3 wrong predictions */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={405} size={11} fill={RED}>
          {t(
            "✗ any colour works if bright  ·  ✗ brighter = faster e⁻  ·  ✗ dim light just needs time",
            "✗ koi bhi colour chalega agar bright ho  ·  ✗ brighter = faster e⁻  ·  ✗ dim light ko time chahiye"
          )}
        </T>
      </Fade>

      {/* beat 5 — guardrail (high): the threshold reality */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={230} y={425} w={620} h={32} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t(
            "reality: below threshold ν → NO electrons, however intense",
            "reality: threshold ν se neeche → koi electron nahi, chahe kitna bhi intense ho"
          )}
        </Chip>
      </Fade>

      {/* beat 6 — formula: one photon, one electron */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={380} y={470} w={320} h={34} fill={GREEN} textFill="#fff" size={16} script={false}>
          hν = W₀ + KE
        </Chip>
      </Fade>

      {/* beat 7 — explain: frequency not brightness, instantaneous */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={535} size={12} fill={INK} script>
          {t(
            "speed depends on frequency, not brightness — emission is instant",
            "speed frequency par depend karti hai, brightness par nahi — emission instant hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
