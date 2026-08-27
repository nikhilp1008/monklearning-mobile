/**
 * C11 Chemistry Ch04 · Section 10 — "Pitfalls and pro-tips: formal charge, Fajans, and polarity"
 * Canvas 1080×620 · safe x36–1044, y30–596. Closes subtopic 1.
 *
 * Beats (en [0, 9.22, 31.83, 51.71, 70.66, 86.7, 103.08, 118.95]):
 *  0 anchor: traps + speed reflexes
 *  1 pitfall 1: FC ≠ oxidation number
 *  2 pitfall 2: don't drop the ½ on the bonding term
 *  3 pitfall 3: many polar bonds ≠ polar molecule
 *  4 pitfall 4: don't invert Fajans' logic
 *  5 Fajans mnemonic: S H a P e → more covalent
 *  6 pro-tip: sketch for a centre of symmetry, never calculate
 *  7 pro-tip: speed trick e×100pm≈4.8D, green chip
 *
 * Layout plan:
 *  b1-4 | 4 pitfall rows (red margin) | Draw/T | x45..1035 y112..274
 *  b5   | Fajans mnemonic             | T mid  | y310 / y334
 *  b6   | polarity pro-tip            | T mid  | y364 / y386
 *  b7   | speed-trick chip            | Chip   | y404..434
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
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch04Sec10({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const rows = [
    {
      n: 1,
      y: 112,
      h: 42,
      titleY: 132,
      detailY: 148,
      title: t("PITFALL 1: FC ≠ oxidation number", "PITFALL 1: FC ≠ oxidation number"),
      detail: t(
        "FC splits pairs equally (covalent) · ON gives both e⁻ to the more electronegative atom (ionic)",
        "FC pairs ko equally split karta (covalent) · ON dono e⁻ zyada electronegative atom ko deta (ionic)"
      ),
    },
    {
      n: 2,
      y: 160,
      h: 34,
      titleY: 176,
      detailY: 190,
      title: t("PITFALL 2: don't drop the ½", "PITFALL 2: don't drop the ½"),
      detail: t(
        "double bond = 4 shared e⁻ · triple = 6 — count both e⁻, then halve",
        "double bond = 4 shared e⁻ · triple = 6 — dono e⁻ ginno, phir half karo"
      ),
    },
    {
      n: 3,
      y: 200,
      h: 34,
      titleY: 216,
      detailY: 230,
      title: t("PITFALL 3: many polar bonds ≠ polar molecule", "PITFALL 3: many polar bonds ≠ polar molecule"),
      detail: t(
        "CCl₄, CO₂, BF₃ — sum dipoles as VECTORS, check symmetry first",
        "CCl₄, CO₂, BF₃ — dipoles ko VECTORS ki tarah sum karo, symmetry pehle check karo"
      ),
    },
    {
      n: 4,
      y: 240,
      h: 34,
      titleY: 256,
      detailY: 270,
      title: t("PITFALL 4: don't invert Fajans", "PITFALL 4: don't invert Fajans"),
      detail: t(
        "small, high-charge cation + large anion → MORE covalent (not ionic)",
        "small, high-charge cation + large anion → MORE covalent (ionic nahi)"
      ),
    },
  ];

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Pitfalls and pro-tips", "Pitfalls aur pro-tips")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.0)} d="M 440 80 C 490 76, 590 76, 640 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={95} size={12} fill={MUTED} script>
          {t("closing subtopic 1: traps + speed reflexes", "subtopic 1 band: traps + speed reflexes")}
        </T>
      </Fade>

      {/* beats 1-4 — pitfall rows */}
      {rows.map((r) => (
        <React.Fragment key={r.n}>
          <Draw on={beat >= r.n} delay={dl(r.n, 0.1)} d={`M 45 ${r.y} h 990 v ${r.h} h -990 z`} stroke={INK} sw={1.6} dur={0.4} />
          <Draw on={beat >= r.n} delay={dl(r.n, 0.1)} d={`M 45 ${r.y} L 45 ${r.y + r.h}`} stroke={RED} sw={4} dur={0.3} />
          <Fade on={beat >= r.n} delay={dl(r.n, 0.4)}>
            <T x={540} y={r.titleY} size={12.5} weight={800} fill={RED}>
              {r.title}
            </T>
          </Fade>
          <Fade on={beat >= r.n} delay={dl(r.n, 0.8)}>
            <T x={540} y={r.detailY} size={10} fill={INK}>
              {r.detail}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 5 — Fajans mnemonic */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={310} size={14} weight={800} fill={AMBER_DARK}>
          {t("Fajans mnemonic: S H a P e", "Fajans mnemonic: S H a P e")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={540} y={334} size={12} fill={INK}>
          {t(
            "Small cation · High charge · Pseudo-noble-gas config → MORE covalent",
            "Small cation · High charge · Pseudo-noble-gas config → MORE covalent"
          )}
        </T>
      </Fade>

      {/* beat 6 — polarity pro-tip */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={364} size={12.5} weight={700} fill={GREEN}>
          {t(
            "pro-tip: never calculate — sketch + find a centre of symmetry",
            "pro-tip: calculate mat karo — sketch banao + centre of symmetry dhoondo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={540} y={386} size={11} fill={MUTED}>
          {t("flips onto itself → μ ≈ 0", "flips onto itself → μ ≈ 0")}
        </T>
      </Fade>

      {/* beat 7 — speed-trick chip */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={220} y={404} w={640} h={30} fill={GREEN} textFill="#fff" size={12.5} script={false}>
          {t(
            "speed trick: e × 100 pm ≈ 4.8 D — scale linearly with bond length",
            "speed trick: e × 100 pm ≈ 4.8 D — bond length ke saath linearly scale"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
