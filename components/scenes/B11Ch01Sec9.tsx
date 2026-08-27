/**
 * B11 Ch01 · Section 9 — "Pitfalls & pro-tips: the two-gate speed test"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.89, 24.28, 44.31, 60.64, 79.05, 91.96, 108.48]):
 *  0 title + four red tally marks
 *  1 trap 1 (badge): growth called defining
 *  2 trap 2 (badge): reproduction called all-defining
 *  3 trap 3 (badge): test-tube reaction called "living"
 *  4 trap 4 (badge): consciousness confused with self-consciousness
 *  5 DIAGRAM: the two-gate speed-test flowchart (candidate → gate 1 →
 *    gate 2 → FAILS / DEFINING)
 *  6 pro-tip whisper: run both gates mentally, G & R fall out instantly
 *  7 memory aid: MCC defines, G & R decline
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title (script26 red)     | T mid | x?..? y30..77 (bl64) · tally x930..975 y48..72
 *  b1 | badge c(76,108) r13 · trap1 (script15 red) x104..? bl 113
 *  b2 | badge c(76,144) r13 · trap2 (script15 red) x104..? bl 149
 *  b3 | badge c(76,180) r13 · trap3 (script15 red) x104..? bl 185
 *  b4 | badge c(76,216) r13 · trap4 (script15 red) x104..? bl 221
 *  b5 | candidate box (amber-d)  | Draw | x440..640 y240..270
 *  b5 | gate 1 box (amber-d)     | Draw | x340..740 y288..318
 *  b5 | gate 2 box (amber-d)     | Draw | x340..740 y336..366
 *  b5 | FAILS box (red)          | Draw | x150..410 y392..432
 *  b5 | DEFINING box (green)     | Draw | x670..950 y392..432
 *  b6 | pro-tip (script16 green) | T mid | x?..? y440..460 (bl460)
 *  b6 | underline                | Draw | y470 x400..680
 *  b7 | "MCC defines…" banner    | Chip | x300..780 y490..530
 *  b7 | subtitle (script13 mut)  | T mid | x?..? y543..557 (bl550)
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
  CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ cy, on, delay }: { cy: number; on: boolean; delay: number }) {
  return (
    <Draw
      on={on}
      delay={delay}
      d={`M 61 ${cy} A 15 15 0 1 1 91 ${cy} A 15 15 0 1 1 61 ${cy}`}
      stroke={RED}
      sw={2.2}
      dur={0.4}
    />
  );
}

const TRAPS: [number, number, string, string][] = [
  [108, 113, "growth ✗ — non-living dunes/crystals grow too", "growth ✗ — non-living dunes/crystals bhi badhte hain"],
  [144, 149, "reproduction ✗ — mules, sterile bees, infertile couples", "reproduction ✗ — mules, sterile bees, infertile couples"],
  [180, 185, "test-tube reaction = 'living' ✗ — neither living nor non-living", "test-tube reaction = 'living' ✗ — na living na non-living"],
  [216, 221, "consciousness ≠ self-consciousness — humans only for the latter", "consciousness ≠ self-consciousness — sirf insaan ke liye baad wala"],
];

export default function B11Ch01Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — four traps that cost easy marks */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t("four traps that cost easy marks", "chaar traps jo easy marks kaat te hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.4)} d="M 930 48 v 24 M 945 48 v 24 M 960 48 v 24 M 975 48 v 24" stroke={RED} sw={2.4} dur={0.7} />

      {/* beats 1-4 — the four traps */}
      {TRAPS.map(([cy, bl, e2, h2], i) => (
        <React.Fragment key={cy}>
          <Badge cy={cy} on={beat >= i + 1} delay={dl(i + 1, 0.4)} />
          <Fade on={beat >= i + 1} delay={dl(i + 1, 1.3)}>
            <T x={104} y={bl} size={15} fill={RED} script anchor="start">
              {t(e2, h2)}
            </T>
          </Fade>
        </React.Fragment>
      ))}

      {/* beat 5 — the two-gate speed-test flowchart */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 440 240 h 200 v 30 h -200 z" stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={540} y={259} size={12} fill={AMBER_DARK} script={false}>
          {t("Candidate property", "Candidate property")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1.3)} d="M 540 270 L 540 288" stroke={MUTED} sw={1.6} dur={0.3} />
      <Draw on={beat >= 5} delay={dl(5, 1.7)} d="M 340 288 h 400 v 30 h -400 z" stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 2.3)}>
        <T x={540} y={307} size={12} fill={AMBER_DARK} script={false}>
          {t("Gate 1: does any NON-living thing have it?", "Gate 1: does any NON-living thing have it?")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 2.8)} d="M 540 318 L 540 336" stroke={MUTED} sw={1.6} dur={0.3} />
      <Draw on={beat >= 5} delay={dl(5, 3.2)} d="M 340 336 h 400 v 30 h -400 z" stroke={AMBER_DARK} sw={2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 3.8)}>
        <T x={540} y={355} size={12} fill={AMBER_DARK} script={false}>
          {t("Gate 2: does any LIVING thing lack it?", "Gate 2: does any LIVING thing lack it?")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 4.3)} d="M 400 366 L 280 388" stroke={RED} sw={1.8} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 4.6)} d="M 680 366 L 800 388" stroke={GREEN} sw={1.8} dur={0.4} />
      <Draw on={beat >= 5} delay={dl(5, 5.1)} d="M 150 392 h 260 v 40 h -260 z" stroke={RED} sw={2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 5.7)}>
        <T x={280} y={408} size={12} fill={RED} script={false}>
          {t("Yes to either →", "Yes to either →")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6.1)}>
        <T x={280} y={425} size={11} fill={RED} script={false}>
          {t("FAILS (growth, reproduction)", "FAILS (growth, reproduction)")}
        </T>
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 6.6)} d="M 670 392 h 280 v 40 h -280 z" stroke={GREEN} sw={2} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 7.2)}>
        <T x={810} y={408} size={12} fill={GREEN} script={false}>
          {t("No to both →", "No to both →")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7.6)}>
        <T x={810} y={425} size={10} fill={GREEN} script={false}>
          {t("DEFINING (metabolism, cellular org., consciousness)", "DEFINING (metabolism, cellular org., consciousness)")}
        </T>
      </Fade>

      {/* beat 6 — the pro-tip */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={460} size={16} fill={GREEN} script>
          {t(
            "run both gates mentally — G & R fall out instantly",
            "dono gates dimaag mein chalao — G & R turant bahar ho jaate hain"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.4)} d="M 400 470 C 460 467, 620 467, 680 470" stroke={GREEN} sw={1.8} dur={0.5} />

      {/* beat 7 — the memory aid */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={300} y={490} w={480} h={40} fill={INK} textFill={CREAM} size={18} script={false}>
          MCC defines, G &amp; R decline
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.3)}>
        <T x={540} y={550} size={13} fill={MUTED} script>
          {t(
            "Metabolism, Cellular org., Consciousness = members · Growth, Reproduction = guests",
            "Metabolism, Cellular org., Consciousness = members · Growth, Reproduction = sirf guests"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
