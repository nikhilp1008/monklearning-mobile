/**
 * C11 Chemistry Ch04 · Section 28 — "Pitfalls and pro-tips: MOT and hydrogen bonding"
 * Canvas 1080×620 · safe x36–1044, y30–596. Closes subtopic 3.
 *
 * Beats (en [0, 9.9, 28.42, 43.35, 60.76, 79.87, 100.01, 114.6]):
 *  0 anchor
 *  1 pitfall 1: one MO ordering != everything
 *  2 pitfall 2: don't drop the 1/2
 *  3 pitfall 3: ionisation doesn't always weaken
 *  4 pitfall 4: don't flip intra/intermolecular
 *  5 pro-tip: O-family ion shortcut
 *  6 pro-tip: H-bond first check
 *  7 key bond orders chip
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch04Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const rows = [
    {
      n: 1,
      y: 112,
      h: 38,
      title: t("PITFALL 1: one MO ordering ≠ everything", "PITFALL 1: ek MO ordering ≠ sab kuch"),
      detail: t(
        "σ2pz/π crossover: O,F differ from B-N — pick by e⁻ count (≤14 vs >14)",
        "σ2pz/π crossover: O,F, B-N se alag — e⁻ count se choose karo (≤14 vs >14)"
      ),
    },
    {
      n: 2,
      y: 154,
      h: 34,
      title: t("PITFALL 2: don't drop the ½", "PITFALL 2: ½ mat chodo"),
      detail: t(
        "BO = ½(N_b−N_a), not the raw difference — BO=4 for N₂ is the tell",
        "BO = ½(N_b−N_a), raw difference nahi — N₂ ke liye BO=4 hi tell hai"
      ),
    },
    {
      n: 3,
      y: 192,
      h: 34,
      title: t("PITFALL 3: ionisation doesn't always weaken", "PITFALL 3: ionisation hamesha weaken nahi karta"),
      detail: t(
        "e⁻ lost from ANTIBONDING (NO, O₂) → BO rises — check which orbital first",
        "e⁻ ANTIBONDING se gaya (NO, O₂) → BO badhta — pehle check karo kaunsa orbital"
      ),
    },
    {
      n: 4,
      y: 230,
      h: 34,
      title: t("PITFALL 4: don't flip intra/intermolecular", "PITFALL 4: intra/intermolecular ulta mat karo"),
      detail: t(
        "intramolecular → LOWERS bp/solubility · intermolecular → RAISES them",
        "intramolecular → bp/solubility GHATATA · intermolecular → BADHATA"
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
          {t("closing subtopic 3: traps + speed reflexes", "subtopic 3 band: traps + speed reflexes")}
        </T>
      </Fade>

      {/* pitfall rows */}
      {rows.map((r) => (
        <React.Fragment key={r.n}>
          <Draw on={beat >= r.n} delay={dl(r.n, 0.1)} d={`M 45 ${r.y} h 990 v ${r.h} h -990 z`} stroke={INK} sw={1.6} dur={0.4} />
          <Draw on={beat >= r.n} delay={dl(r.n, 0.1)} d={`M 45 ${r.y} L 45 ${r.y + r.h}`} stroke={RED} sw={4} dur={0.3} />
          <Fade on={beat >= r.n} delay={dl(r.n, 0.4)}>
            <T x={540} y={r.y + 16} size={12} weight={800} fill={RED}>
              {r.title}
            </T>
          </Fade>
          <Fade on={beat >= r.n} delay={dl(r.n, 0.8)}>
            <T x={540} y={r.y + 32} size={9.5} fill={INK}>
              {r.detail}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 5 — O-family shortcut */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={287} size={11.5} weight={700} fill={GREEN}>
          {t(
            "pro-tip: O-family ion shortcut — start O₂ BO=2, each e⁻ shifts BO by ∓½ (goes to π*)",
            "pro-tip: O-family ion shortcut — O₂ BO=2 se shuru, har e⁻ BO ko ∓½ shift karta (π* mein)"
          )}
        </T>
      </Fade>

      {/* beat 6 — H-bond first check */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={311} size={11.5} weight={700} fill={GREEN}>
          {t(
            "pro-tip: H-bond first check — N–H, O–H, or F–H present? No donor, no H-bond, full stop",
            "pro-tip: H-bond pehla check — N–H, O–H, ya F–H hai? Donor nahi, H-bond nahi, bas"
          )}
        </T>
      </Fade>

      {/* beat 7 — key bond orders */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={160} y={335} w={760} h={30} fill={GREEN} textFill="#fff" size={12} script={false}>
          {t(
            "recall: N₂=3, O₂=2, F₂=1, NO=2.5, NO⁺=3, He₂=0 (doesn't exist)",
            "yaad: N₂=3, O₂=2, F₂=1, NO=2.5, NO⁺=3, He₂=0 (exist nahi karta)"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
