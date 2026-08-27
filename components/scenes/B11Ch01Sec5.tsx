/**
 * B11 Ch01 · Section 5 — "Consciousness, cellular organisation, and the
 * defining bundle"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 12.0, 26.38, 42.12, 55.99, 64.33, 88.33]):
 *  0 title + underline · "these complete the real definition" hook [dim@1]
 *  1 CELLULAR ORGANISATION — all life built of cells [dim@3]
 *  2 CONSCIOUSNESS — sense + respond to stimuli [dim@3]
 *  3 3 chips: universal examples (plants/breeders/microbes) [dim@4]
 *  4 caveat: consciousness ≠ self-consciousness (humans only) [dim@5]
 *  5 THE PAYOFF: 3-circle Venn — Metabolism / Cellular organisation /
 *    Consciousness overlapping on "LIFE"; growth+reproduction are guests
 *  6 verdict stamp: M + C + C = LIFE, ringed
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script25 red)        | T mid  | x?..?  y30..77  (bl64, longer=HI)
 *  b0 | underline swoosh            | Draw   | y90  x340..740
 *  b0 | hook (script18 muted)       | T mid  | x?..?  y107..139 (bl130) [dim@1]
 *  b1 | line (script14 green)       | T mid  | x?..?  y151..177 (bl170) [dim@3]
 *  b2 | line (script14 green)       | T mid  | x?..?  y182..211 (bl204) [dim@3]
 *  b3 | 3 chips (script12)          | Chip   | y172..200  x254/448/648 [dim@4]
 *  b4 | caveat (script15 red)       | T mid  | x276..804 y176..203 (bl195) [dim@5]
 *  b5 | header (16 ink)             | T mid  | x?..?  y207..225 (bl212)
 *  b5 | circle Metabolism (amber-d) | Draw   | c(480,330) r95
 *  b5 | circle Cellular org (green) | Draw   | c(600,330) r95
 *  b5 | circle Consciousness (ink)  | Draw   | c(540,410) r95
 *  b5 | "Metabolism" (14 amber-d)   | T mid  | x?..?  y296..304 (bl300)
 *  b5 | "Cellular organisation"     | T mid  | x?..?  y296..304 (bl300)
 *  b5 | "Consciousness" (14 ink)    | T mid  | x?..?  y466..474 (bl470)
 *  b5 | "LIFE" (18 red)             | T mid  | x508..572 y348..368 (bl362)
 *  b5 | caption (13 anek muted)     | T mid  | x384..696 y520..524 (bl530)
 *  b6 | ring around LIFE            | Draw   | c(540,358) rx32 ry22
 *  b6 | "M + C + C = LIFE" chip     | Chip   | x430..650  y550..584
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

const EXAMPLES: [number, number, string, string][] = [
  [254, 178, "plants → light", "plants → light ki taraf"],
  [448, 184, "breeders → day-length", "breeders → day-length se"],
  [648, 178, "microbes → gradient", "microbes → gradient par"],
];

export default function B11Ch01Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title + hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={64} size={25} fill={RED} script>
          {t("Candidates 4 & 5 — the structural & responsive IDs", "Candidates 4 & 5 — structural aur responsive IDs")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2)} d="M 340 90 C 440 86, 640 86, 740 90" stroke={RED} sw={2.4} dur={0.6} />
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 3)}>
        <T x={540} y={130} size={18} fill={MUTED} script>
          {t(
            "together with metabolism, these complete the real definition",
            "metabolism ke saath, ye poori real definition banate hain"
          )}
        </T>
      </Fade>

      {/* beat 1 — cellular organisation */}
      <Fade on={beat >= 1} dim={beat >= 3} delay={dl(1, 0.3)}>
        <T x={540} y={170} size={14} fill={GREEN} script>
          {t(
            "CELLULAR ORGANISATION — all life built of cells",
            "CELLULAR ORGANISATION — sari life cells se bani hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — consciousness */}
      <Fade on={beat >= 2} dim={beat >= 3} delay={dl(2, 0.3)}>
        <T x={540} y={204} size={14} fill={GREEN} script>
          {t(
            "CONSCIOUSNESS — sense the surroundings, respond to stimuli",
            "CONSCIOUSNESS — surroundings mehsoos karo, stimuli par react karo"
          )}
        </T>
      </Fade>

      {/* beat 3 — it's universal */}
      {EXAMPLES.map(([x, w, e2, h2], i) => (
        <Fade key={e2} on={beat >= 3} dim={beat >= 4} delay={dl(3, 0.3 + i * 0.5)}>
          <Chip x={x} y={172} w={w} h={28} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={12} script>
            {t(e2, h2)}
          </Chip>
        </Fade>
      ))}

      {/* beat 4 — the caveat: consciousness ≠ self-consciousness */}
      <Fade on={beat >= 4} dim={beat >= 5} delay={dl(4, 0.3)}>
        <T x={540} y={195} size={15} fill={RED} script>
          {t(
            "consciousness ≠ self-consciousness — humans alone are self-aware",
            "consciousness ≠ self-consciousness — sirf insaan self-aware hain"
          )}
        </T>
      </Fade>

      {/* beat 5 — THE PAYOFF: the defining bundle, MCC */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={212} size={16} fill={INK} weight={700}>
          {t("the defining bundle — MCC", "the defining bundle — MCC")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1)} d="M 385 330 a 95 95 0 1 0 190 0 a 95 95 0 1 0 -190 0" stroke={AMBER_DARK} sw={2.2} dur={0.9} />
      <Draw on={beat >= 5} delay={dl(5, 1.8)} d="M 505 330 a 95 95 0 1 0 190 0 a 95 95 0 1 0 -190 0" stroke={GREEN} sw={2.2} dur={0.9} />
      <Draw on={beat >= 5} delay={dl(5, 2.6)} d="M 445 410 a 95 95 0 1 0 190 0 a 95 95 0 1 0 -190 0" stroke={INK} sw={2.2} dur={0.9} />
      <Fade on={beat >= 5} delay={dl(5, 3.6)}>
        <T x={410} y={300} size={14} fill={AMBER_DARK} weight={700}>
          {t("Metabolism", "Metabolism")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={670} y={300} size={14} fill={GREEN} weight={700}>
          {t("Cellular org.", "Cellular org.")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4.4)}>
        <T x={540} y={470} size={14} fill={INK} weight={700}>
          {t("Consciousness", "Consciousness")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5.2)}>
        <T x={540} y={362} size={18} fill={RED} weight={800}>
          LIFE
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={540} y={530} size={13} fill={MUTED} script={false}>
          {t("Growth & reproduction are guests, not members", "Growth & reproduction guests hain, members nahi")}
        </T>
      </Fade>

      {/* beat 6 — verdict stamp: M + C + C = LIFE */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d={ringD(540, 358, 32, 22)} stroke={RED} sw={2.2} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 1.3)}>
        <Chip x={430} y={550} w={220} h={34} fill={INK} textFill={CREAM} size={16} script={false}>
          M + C + C = LIFE
        </Chip>
      </Fade>
    </Scene>
  );
}
