/**
 * C11 Chemistry Ch04 · Section 36 — "Pitfalls and pro-tips: coordinate, back bonding, Bent and Drago"
 * Canvas 1080×620 · safe x36–1044, y30–596. Closes subtopic 4 (last regular-content section).
 *
 * Beats (en [0, 7.59, 23.64, 45.23, 64.94, 78.59, 98.56, 116.65]):
 *  0 anchor
 *  1 pitfall 1: coordinate bond != different/weaker
 *  2 pitfall 2: don't apply raw EN to BX3 acidity
 *  3 pitfall 3: don't force tetrahedral angles on heavy hydrides
 *  4 pitfall 4: don't miscount diborane's bonds
 *  5 pro-tip: back-bonding reflex
 *  6 pro-tip: bond-angle diagnostic
 *  7 mnemonics chip
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch04Sec36({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const rows = [
    {
      n: 1,
      y: 112,
      h: 38,
      title: t("PITFALL 1: coordinate bond ≠ different/weaker", "PITFALL 1: coordinate bond ≠ alag/weak"),
      detail: t(
        "once formed, IDENTICAL to covalent — NH₄⁺ has 4 EQUIVALENT bonds",
        "banne ke baad, covalent se IDENTICAL — NH₄⁺ mein 4 EQUIVALENT bonds"
      ),
    },
    {
      n: 2,
      y: 154,
      h: 34,
      title: t("PITFALL 2: don't apply raw EN to BX₃ acidity", "PITFALL 2: BX₃ acidity par raw EN mat lagao"),
      detail: t(
        "back bonding (strongest in F) REVERSES the EN prediction",
        "back bonding (F mein strongest) EN prediction ko REVERSE karta"
      ),
    },
    {
      n: 3,
      y: 192,
      h: 34,
      title: t("PITFALL 3: don't force tetrahedral angles on heavy hydrides", "PITFALL 3: heavy hydrides par tetrahedral angle mat thopo"),
      detail: t(
        "PH₃, H₂S, AsH₃ ≈ 90° (Drago's) — NOT 107°/104.5°",
        "PH₃, H₂S, AsH₃ ≈ 90° (Drago's) — 107°/104.5° NAHI"
      ),
    },
    {
      n: 4,
      y: 230,
      h: 34,
      title: t("PITFALL 4: don't miscount diborane's bonds", "PITFALL 4: diborane ke bonds galat mat gino"),
      detail: t(
        "4 terminal (2c-2e) + ONLY 2 bridging (3c-2e) — don't mix them up",
        "4 terminal (2c-2e) + SIRF 2 bridging (3c-2e) — inhe gaddmadd mat karo"
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
          {t("closing subtopic 4: traps + speed reflexes", "subtopic 4 band: traps + speed reflexes")}
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

      {/* beat 5 — back-bonding reflex */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={287} size={11} weight={700} fill={GREEN}>
          {t(
            "pro-tip: B-halide or Si/P/S–O species → check for back bonding (LP beside empty orbital)",
            "pro-tip: B-halide ya Si/P/S–O species → back bonding check karo (LP empty orbital ke paas)"
          )}
        </T>
      </Fade>

      {/* beat 6 — bond-angle diagnostic */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={311} size={11} weight={700} fill={GREEN}>
          {t(
            "pro-tip: same centre, different substituent → Bent's · same substituent, heavier centre → Drago's",
            "pro-tip: same centre, alag substituent → Bent's · same substituent, heavier centre → Drago's"
          )}
        </T>
      </Fade>

      {/* beat 7 — mnemonics */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={140} y={335} w={800} h={30} fill={GREEN} textFill="#fff" size={11.5} script={false}>
          {t(
            "Bent: “bent eNegative gets P” · Drago: “down the group drops to 90”",
            "Bent: “bent eNegative gets P” · Drago: “down the group drops to 90”"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
