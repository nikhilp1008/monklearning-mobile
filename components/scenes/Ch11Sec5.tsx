/**
 * Ch11 · Section 5 — "A gas-law numerical, and the equilibrium trap"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Two worked examples, side by side (divider at x540).
 *
 * Beats (8): 0 hook · 1 given data + cylinder · 2 rearrange & compute ·
 *  3 unit check · 4 trap setup (P~Q, Q~R flasks) · 5 P~R & same-T both ✓ ·
 *  6 equal-U trap ✗ · 7 final answer.
 *
 * Layout plan — LEFT col (x60..510, center 285), RIGHT col (x570..1020,
 * center 795), divider dashed at x540:
 *  b1 | GIVEN chip(h26)         | Chip  | x80..180  y150..176
 *  b1 | 3 given lines (16)      | T st  | x90  y196/221/246
 *  b1 | cylinder box(h90)       | Draw  | x350..490 y180..270 · label y285
 *  b2 | "n=PV/RT"(18,w800)      | T mid | x285 y300
 *  b2 | expansion (13)          | T mid | x285 y326
 *  b2 | "≈2.0 mol"(22,w800,grn) | T mid | x285 y360
 *  b3 | unit note (12,script)   | T mid | x285 y400
 *  b4 | THE TRAP chip(h26)      | Chip  | x610..750 y150..176
 *  b4 | P/Q/R flasks(h60)       | Draw  | x600/760/920 y185..245
 *  b4 | P-Q, Q-R ticks          | Draw  | c(720,215)/(880,215)
 *  b4 | note (13)               | T mid | x795 y280
 *  b5 | P-R arc + tick          | Draw  | M640,245 Q800,305 960,245
 *  b5 | chip(i)/(ii) (h28)      | Chip  | x610..780 / x800..970 y335..363
 *  b6 | trap chip (h30)         | Chip  | x625..965 y380..410
 *  b6 | sub-note (11)           | T mid | x795 y420
 *  b7 | final chip (h34)        | Chip  | x610..980 y455..489
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch11Sec5({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={68} size={28} fill={RED} script>
          {t("a gas-law numerical, and the equilibrium trap", "gas-law numerical, aur equilibrium ka trap")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={102} size={14} fill={MUTED} script>
          {t("two examples — a clean plug-in, then a trap", "do example — pehla seedha, doosra trap")}
        </T>
      </Fade>

      <Draw on={beat >= 0} delay={dl(0, 0.6)} d="M 540 140 L 540 470" stroke={MUTED} sw={1.4} dur={0.5} />

      {/* ===== LEFT — the plug-in ===== */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <Chip x={80} y={150} w={100} h={26} fill={INK} textFill={CREAM} size={12} script={false}>
          GIVEN
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={90} y={196} size={16} fill={INK} anchor="start" script={false}>
          V = 0.025 m³
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={90} y={221} size={16} fill={INK} anchor="start" script={false}>
          P = 2.0×10⁵ Pa
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={90} y={246} size={16} fill={INK} anchor="start" script={false}>
          T = 300 K
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.9)} d="M 350 180 h 140 v 90 h -140 z" stroke={INK} sw={2.2} dur={0.7} />
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={420} y={285} size={11} fill={MUTED} script>
          {t("rigid cylinder", "rigid cylinder")}
        </T>
      </Fade>

      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={285} y={300} size={18} fill={INK} weight={800} script={false}>
          n = PV / RT
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={285} y={326} size={13} fill={INK} script={false}>
          = (2.0×10⁵)(0.025) / (8.314)(300)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.2)}>
        <T x={285} y={360} size={22} fill={GREEN} weight={800} script={false}>
          ≈ 2.0 mol
        </T>
      </Fade>

      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={285} y={400} size={12} fill={MUTED} script>
          {t("Pa·m³ = J, cancels with R's J ⇒ mol", "Pa·m³ = J, R ke J se cancel ⇒ mol")}
        </T>
      </Fade>

      {/* ===== RIGHT — the trap ===== */}
      <Fade on={beat >= 4} delay={dl(4, 0.1)}>
        <Chip x={610} y={150} w={140} h={26} fill={INK} textFill={CREAM} size={12} script={false}>
          {t("THE TRAP", "THE TRAP")}
        </Chip>
      </Fade>
      {[[600, "P"], [760, "Q"], [920, "R"]].map(([x, label], i) => (
        <React.Fragment key={label}>
          <Draw on={beat >= 4} delay={dl(4, 0.6 + i * 0.3)} d={`M ${x} 185 h 80 v 60 h -80 z`} stroke={INK} sw={2.2} dur={0.6} />
          <Fade on={beat >= 4} delay={dl(4, 1 + i * 0.3)}>
            <T x={Number(x) + 40} y={222} size={20} fill={INK} weight={800} script={false}>
              {label}
            </T>
          </Fade>
        </React.Fragment>
      ))}
      <Draw on={beat >= 4} delay={dl(4, 2.1)} d="M 680 215 L 760 215" stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 2.4)} d="M 840 215 L 920 215" stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 2.8)} d="M 708 208 l 5 5 l 10 -11" stroke={GREEN} sw={2.2} dur={0.4} />
      <Draw on={beat >= 4} delay={dl(4, 3.1)} d="M 868 208 l 5 5 l 10 -11" stroke={GREEN} sw={2.2} dur={0.4} />
      <Fade on={beat >= 4} delay={dl(4, 3.6)}>
        <T x={795} y={280} size={13} fill={MUTED} script={false}>
          {t("P ↔ R: direct link?", "P ↔ R: seedha link?")}
        </T>
      </Fade>

      <Draw on={beat >= 5} delay={dl(5, 0.3)} d="M 640 245 Q 800 305, 960 245" stroke={GREEN} sw={2.2} dur={0.8} />
      <Draw on={beat >= 5} delay={dl(5, 1.2)} d="M 790 297 l 5 5 l 10 -11" stroke={GREEN} sw={2.2} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <Chip x={610} y={335} w={170} h={28} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14} script={false}>
          (i) P~R ✓
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2.3)}>
        <Chip x={800} y={335} w={170} h={28} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14} script={false}>
          (ii) same T ✓
        </Chip>
      </Fade>

      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={625} y={380} w={340} h={30} fill={CREAM} stroke={RED} textFill={RED} size={15} script={false}>
          {t("(iii) equal U? ✗ — extensive!", "(iii) equal U? ✗ — extensive!")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.2)}>
        <T x={795} y={420} size={11} fill={MUTED} script={false}>
          {t("1 mol vs 5 mol, same T ≠ same U", "1 mol vs 5 mol, same T ≠ same U")}
        </T>
      </Fade>

      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <Chip x={610} y={455} w={370} h={34} fill={INK} textFill={CREAM} size={16} script={false}>
          {t("answer: (i) and (ii) only", "answer: sirf (i) aur (ii)")}
        </Chip>
      </Fade>
    </Scene>
  );
}
