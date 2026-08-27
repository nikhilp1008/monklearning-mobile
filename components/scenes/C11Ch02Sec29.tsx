/**
 * C11 Ch02 · Section 29 — "Bohr's bold rules and a preview of what breaks them"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: concept`.
 *
 * Beats (en [0, 7.77, 20.22, 29.78, 41.9, 51.46, 64.68, 79.62]):
 *  0 anchor: Bohr (1913) turns the staircase picture into a model
 *  1 explain: electrons orbit only in certain stationary orbits — they do NOT radiate
 *  2 explain: each orbit has a fixed radius+energy; radiation only on a jump
 *  3 formula (high, RED note): mvr = nh/2π — n labels the staircase steps
 *  4 explain: this nailed hydrogen's exact line wavelengths — spectacular success
 *  5 explain: but a patch — de Broglie's wave nature, Heisenberg's uncertainty
 *  6 guardrail: Bohr works only for one-electron species
 *  7 land: for a cricket ball, wave nature is unobservably tiny
 *
 * Layout plan (single column, x540 center):
 *  title (always)          | T mid | x540 y52 script red
 *  b0 | anchor caption      | T mid | x540 y74            [dims@b1]
 *  b1 | explain caption     | T mid | x540 y102
 *  b2 | explain caption     | T mid | x540 y132
 *  b3 | formula chip (RED)  | Chip  | x290..790 y158..192
 *  b4 | explain caption     | T mid | x540 y220
 *  b5 | explain caption     | T mid | x540 y250
 *  b6 | guardrail chip      | Chip  | x220..860 y280..316
 *  b7 | land caption        | T mid | x540 y344
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch02Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={14} fill={RED} script>
          {t(
            "Bohr's bold rules and a preview of what breaks them",
            "Bohr ke bold rules aur ek preview jo unhe todta hai"
          )}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={74} size={11} fill={RED} script>
          {t(
            "Bohr (1913) turns the staircase picture into a model with bold rules",
            "Bohr (1913) staircase picture ko bold rules wale model mein badalta"
          )}
        </T>
      </Fade>

      {/* beat 1 — explain: stationary orbits */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={102} size={12} fill={INK} script>
          {t(
            "electrons orbit only in certain stationary orbits where they do NOT radiate",
            "electrons sirf kuch stationary orbits mein ghoomte jahaan wo radiate NAHI karte"
          )}
        </T>
      </Fade>

      {/* beat 2 — explain: fixed radius+energy */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={132} size={12} fill={INK} script>
          {t(
            "each orbit: fixed radius + fixed energy; radiation only on a jump between orbits",
            "har orbit: fixed radius + fixed energy; radiation sirf orbits ke beech jump par"
          )}
        </T>
      </Fade>

      {/* beat 3 — formula (high, RED note): the quantisation rule */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={290} y={158} w={500} h={34} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {t(
            "mvr = nh/2π — integer n labels the staircase steps",
            "mvr = nh/2π — integer n staircase ke steps label karta"
          )}
        </Chip>
      </Fade>

      {/* beat 4 — explain: spectacular success */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={220} size={12} fill={GREEN} script>
          {t(
            "this nailed hydrogen's exact line wavelengths — a spectacular success",
            "isne hydrogen ki exact line wavelengths nail ki — ek spectacular success"
          )}
        </T>
      </Fade>

      {/* beat 5 — explain: a brilliant patch */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={250} size={12} fill={INK} script>
          {t(
            "but a patch: de Broglie (1924) gives wave nature; Heisenberg (1927) forbids exact position+momentum",
            "par ek patch: de Broglie (1924) wave nature; Heisenberg (1927) exact position+momentum ek saath NAHI"
          )}
        </T>
      </Fade>

      {/* beat 6 — guardrail: one-electron species only */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={220} y={280} w={640} h={36} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t(
            "Bohr works only for one-electron species: H, He⁺, Li²⁺, Be³⁺",
            "Bohr sirf one-electron species ke liye kaam karta: H, He⁺, Li²⁺, Be³⁺"
          )}
        </Chip>
      </Fade>

      {/* beat 7 — land: the everyday world */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={344} size={12} fill={INK} script>
          {t(
            "for a cricket ball, wave nature is unobservably tiny — why the everyday world looks classical",
            "cricket ball ke liye wave nature itni tiny hai ki dikhti nahi — isiliye duniya classical lagti"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
