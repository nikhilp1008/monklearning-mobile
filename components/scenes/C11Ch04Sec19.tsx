/**
 * C11 Chemistry Ch04 · Section 19 — "Pitfalls and pro-tips: VSEPR and hybridisation"
 * Canvas 1080×620 · safe x36–1044, y30–596. Closes subtopic 2. Only 7 beats.
 *
 * Beats (en [0, 11.01, 30.46, 47.7, 70.57, 88.32, 103.85]):
 *  0 anchor: traps + speed reflexes
 *  1 pitfall 1: e-pair geometry ≠ molecular shape
 *  2 pitfall 2: never drop lone pairs from SN
 *  3 pitfall 3: same hybridisation ≠ same angle
 *  4 pitfall 4: don't muddle sigma and pi
 *  5 pro-tip: SN in one glance
 *  6 pro-tip: two shrinking forces + green chip
 *
 * Layout plan:
 *  b1-4 | 4 pitfall rows (red margin) | Draw/T | x45..1035 y112..274
 *  b5   | pro-tip 1                    | T mid  | y300
 *  b6   | pro-tip 2 + chip             | T/Chip | y326 / y346..376
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch04Sec19({ currentTime, reveals, language }: SceneProps) {
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
      title: t("PITFALL 1: e-pair geometry ≠ shape", "PITFALL 1: e-pair geometry ≠ shape"),
      detail: t(
        "water: e-geometry tetrahedral, but SHAPE = bent (atoms only)",
        "water: e-geometry tetrahedral, par SHAPE = bent (sirf atoms)"
      ),
    },
    {
      n: 2,
      y: 160,
      h: 34,
      titleY: 176,
      detailY: 190,
      title: t("PITFALL 2: never drop lone pairs from SN", "PITFALL 2: never drop lone pairs from SN"),
      detail: t(
        "skip LPs → XeF₂ looks sp, SF₄ looks sp³ (both wrong)",
        "LPs skip karo → XeF₂ sp lagta, SF₄ sp³ lagta (dono galat)"
      ),
    },
    {
      n: 3,
      y: 200,
      h: 34,
      titleY: 216,
      detailY: 230,
      title: t("PITFALL 3: same hybridisation ≠ same angle", "PITFALL 3: same hybridisation ≠ same angle"),
      detail: t(
        "H₂O, H₂S, H₂Se: all sp³, yet 104.5° → ~91°",
        "H₂O, H₂S, H₂Se: sab sp³, phir bhi 104.5° → ~91°"
      ),
    },
    {
      n: 4,
      y: 240,
      h: 34,
      titleY: 256,
      detailY: 270,
      title: t("PITFALL 4: don't muddle σ and π", "PITFALL 4: σ aur π ko mat gaddmadd karo"),
      detail: t(
        "σ = head-on (stronger) · π = sidewise, only unhybridised p",
        "σ = head-on (stronger) · π = sidewise, sirf unhybridised p"
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
      <Draw on={beat >= 0} delay={dl(0, 2.6)} d="M 440 80 C 490 76, 590 76, 640 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={95} size={12} fill={MUTED} script>
          {t("closing subtopic 2: traps + speed reflexes", "subtopic 2 band: traps + speed reflexes")}
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

      {/* beat 5 — pro-tip 1 */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={300} size={12.5} weight={700} fill={GREEN}>
          {t(
            "pro-tip: SN in one glance = bonded atoms + lone pairs",
            "pro-tip: SN ek nazar mein = bonded atoms + lone pairs"
          )}
        </T>
      </Fade>

      {/* beat 6 — pro-tip 2 + chip */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={326} size={12} fill={INK}>
          {t(
            "2 shrinking forces: more lone pairs ↓angle · less electronegative centre ↓angle too",
            "2 shrinking forces: zyada lone pairs ↓angle · kam electronegative centre bhi ↓angle"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <Chip x={260} y={346} w={560} h={30} fill={GREEN} textFill="#fff" size={12.5} script={false}>
          {t("spot the force → the order falls out immediately", "force pehchano → order turant nikal aata")}
        </Chip>
      </Fade>
    </Scene>
  );
}
