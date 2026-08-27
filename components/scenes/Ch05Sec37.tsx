/**
 * Ch05 · Section 37 — "Mass is energy: E = mc squared"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 13.5, 38.3, 51.7, 76.5, 101.4, 117.9, 142.8] · dur 157.2;
 *        hi [0, 15.3, 36.0, 48.9, 73.7, 98.6, 112.7, 137.6] · dur 151.6):
 *  0 title + subtitle
 *  1 mass IS energy lines + still lump
 *  2 hero chip E = mc²
 *  3 the colossal multiplier
 *  4 the Sun and nuclear reactions
 *  5 ΔE = Δm c² chip
 *  6 combined-total line
 *  7 mass-energy note band
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl82
 *  b1 | lump circle (160,210) r30 · lines cx600 bl150 / bl176
 *  b2 | chip x400..680 y210..270 (size 26)
 *  b3 | cx540 bl310 / bl336
 *  b4 | cx540 bl372 / bl398
 *  b5 | chip x400..680 y420..458 · script cx540 bl484
 *  b6 | cx540 bl514
 *  b7 | bar x66 y535..585 · line st x84 bl556
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
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec37({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Mass IS Energy: E = mc²", "Mass Khud Energy Hai: E = mc²")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={82} size={13} fill={MUTED} script>
          {t(
            "the most astonishing twist of twentieth-century physics",
            "beesvi sadi ki physics ka sabse hairan karne wala mod"
          )}
        </T>
      </Fade>

      {/* beat 1 — mass IS energy */}
      <Draw on={beat >= 1} delay={dl(1, 2)} d="M 130 210 a 30 30 0 1 0 60 0 a 30 30 0 1 0 -60 0" stroke={INK} sw={2.4} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={160} y={266} size={11.5} fill={MUTED} script>
          {t("just sitting still", "bas sthir baitha")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={600} y={150} size={13} fill={INK} script>
          {t(
            "not 'has energy' — mass IS energy, another costume",
            "'energy rakhta hai' nahi — mass energy HAI, ek aur costume"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 14)}>
        <T x={600} y={176} size={12.5} fill={MUTED} script>
          {t(
            "a still lump holds an enormous frozen reserve",
            "sthir tukda ek vishal jama hua bhandar rakhta hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — the hero equation */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <Chip x={400} y={210} w={280} h={60} fill={CREAM} stroke={GREEN} textFill={INK} size={26} script={false}>
          E = m c²
        </Chip>
      </Fade>

      {/* beat 3 — the multiplier */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <T x={540} y={310} size={13} fill={INK} script>
          {t(
            "c = 3×10⁸ m/s → c² = 9×10¹⁶ — a colossal multiplier",
            "c = 3×10⁸ m/s → c² = 9×10¹⁶ — ek bheemkaay multiplier"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 12)}>
        <T x={540} y={336} size={13} fill={AMBER_DARK} script>
          {t(
            "a sliver of matter = a city's worth of energy, frozen and waiting",
            "padarth ka ek tukda = ek shehar jitni energy, jami hui, intezar mein"
          )}
        </T>
      </Fade>

      {/* beat 4 — the Sun */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={540} y={372} size={13} fill={GREEN} script>
          {t(
            "nuclear reaction: products weigh slightly LESS — the lost mass returns as energy",
            "nuclear reaction: products ka wazan thoda KAM — khoya mass energy bankar lautta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 13)}>
        <T x={540} y={398} size={13} fill={AMBER_DARK} script>
          {t(
            "the Sun converts mass every second — that is why it shines",
            "Sooraj har second mass badal raha hai — isiliye wo chamakta hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — the mass-change rule */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <Chip x={400} y={420} w={280} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={16} script={false}>
          ΔE = Δm · c²
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <T x={540} y={484} size={12.5} fill={MUTED} script>
          {t(
            "the mass that vanished × c² = the energy released",
            "jo mass gayab hua × c² = release hui energy"
          )}
        </T>
      </Fade>

      {/* beat 6 — the combined total */}
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={540} y={514} size={13} fill={GREEN} script>
          {t(
            "not mass alone, not energy alone — the combined TOTAL is what nature keeps",
            "na akela mass, na akeli energy — mila-jula KUL hi qudrat rakhti hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the final upgrade */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 535 v 42" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={84} y={556} size={13} fill={GREEN} script anchor="start">
          {t(
            "the final upgrade: conservation of MASS-ENERGY — the law's most complete form",
            "aakhri upgrade: conservation of MASS-ENERGY — law ka sabse mukammal roop"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
