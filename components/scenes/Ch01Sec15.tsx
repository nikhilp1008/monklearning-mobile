/**
 * Ch01 · Section 15 — "Pitfalls and pro-tips: units and SI"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.8, 27.1, 51.4, 66.1, 88.8, 107.8, 114.7]):
 *  0 title + four red tally marks
 *  1 pitfall 1: charge/force/energy as base — only current
 *  2 pitfall 2: sloppy symbols (Kg crossed → kg; kgs; sec → s; K vs k)
 *  3 the two rules: no plural s, no full stop — free marks
 *  4 pitfall 3: forgetting the dimensional power (cube for density)
 *  5 pitfall 4: giving rad/sr dimensions
 *  6 the whisper: one habit worth more than any formula
 *  7 WRITE → PLUG → CHECK chips + closing line
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title (script 28, red)  | T mid | x170..910  y30..76 (bl 62) · tally x930..975 y48..72
 *  b1 | badge r15 c(76,110) · line (script 16, red) x104..700 bl 116
 *  b2 | badge c(76,164) · symbol bits bl 170: "Kg" x104 (crossed) · "→ kg ✓" x150 ·
 *       "kgs ✗" x250 · "sec ✗" x350 · "→ s ✓" x424 · "K = kelvin, k = kilo!" x510 (script 14)
 *  b3 | rules (script 15, amber) x104..660 bl 208 · underline y222
 *  b4 | badge c(76,256) · line x104..540 bl 262 · formula (sans 16) x600..740 bl 262
 *  b5 | badge c(76,310) · line x104..570 bl 316
 *  b6 | whisper (script 15, muted) x383..698 bl 372
 *  b7 | habit chips (h60) y400..460: x110..390 / 430..730 / 770..1030 + arrows
 *  b7 | closing (script 16, green) x292..788 bl 510 · underline y528
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  crossD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  PAPER,
  Scene,
} from '@/components/scenes/kit';

function Badge({
  n,
  cy,
  on,
  delay,
}: {
  n: number;
  cy: number;
  on: boolean;
  delay: number;
}) {
  return (
    <G>
      <Draw
        on={on}
        delay={delay}
        d={`M 61 ${cy} A 15 15 0 1 1 91 ${cy} A 15 15 0 1 1 61 ${cy}`}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={on} delay={delay + 0.4}>
        <T x={76} y={cy + 5.5} size={15} fill={RED} weight={800}>
          {n}
        </T>
      </Fade>
    </G>
  );
}

export default function Ch01Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — four ways to lose marks, one habit */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={62} size={28} fill={RED} script>
          {t(
            "four ways to lose marks — one habit to save them",
            "marks katne ke chaar raaste — bachane ki ek aadat"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 3)}
        d="M 930 48 v 24 M 945 48 v 24 M 960 48 v 24 M 975 48 v 24"
        stroke={RED}
        sw={2.6}
        dur={0.8}
      />

      {/* beat 1 — pitfall 1: intuition about "fundamental" */}
      <Badge n={1} cy={110} on={beat >= 1} delay={dl(1, 0.5)} />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={104} y={116} size={16} fill={RED} script anchor="start">
          {t(
            "charge / force / energy as base ✗ — only CURRENT; the seven are a fixed list",
            "charge / force / energy ko base bolna ✗ — sirf CURRENT; saat ki list pakki"
          )}
        </T>
      </Fade>

      {/* beat 2 — pitfall 2: sloppy symbols */}
      <Badge n={2} cy={164} on={beat >= 2} delay={dl(2, 0.5)} />
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={104} y={170} size={16} fill={INK} weight={700} anchor="start">
          Kg
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 2.5)}
        d={crossD(102, 158, 26, 15)}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <T x={150} y={170} size={16} fill={GREEN} weight={700} anchor="start">
          → kg ✓
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 5)}>
        <T x={250} y={170} size={16} fill={RED} weight={700} anchor="start">
          kgs ✗
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 12)}>
        <T x={350} y={170} size={16} fill={RED} weight={700} anchor="start">
          sec ✗
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 13)}>
        <T x={424} y={170} size={16} fill={GREEN} weight={700} anchor="start">
          → s ✓
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={520} y={170} size={14} fill={AMBER_DARK} script anchor="start">
          {t("K = kelvin, but k = kilo — different!", "K = kelvin, par k = kilo — alag cheez!")}
        </T>
      </Fade>

      {/* beat 3 — the two spelling rules */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={104} y={208} size={15} fill={AMBER_DARK} script anchor="start">
          {t(
            "no plural 's' · no full stop · boards deduct real marks for this",
            "koi plural 's' nahi · koi full stop nahi · boards sach mein marks kaat te hain"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 5)}
        d="M 104 222 C 240 218, 420 224, 560 220"
        stroke={AMBER}
        sw={2}
        dur={0.6}
      />

      {/* beat 4 — pitfall 3: the forgotten power */}
      <Badge n={3} cy={256} on={beat >= 4} delay={dl(4, 0.5)} />
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={104} y={262} size={16} fill={RED} script anchor="start">
          {t(
            "density: forget to CUBE the length ratio → off by 10⁶",
            "density: length ratio ka CUBE bhoolna → 10⁶ ka jhol"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={600} y={262} size={16} fill={INK} weight={700} anchor="start">
          [M L⁻³] → (L₁/L₂)³
        </T>
      </Fade>

      {/* beat 5 — pitfall 4: rad/sr with dimensions */}
      <Badge n={4} cy={310} on={beat >= 5} delay={dl(5, 0.5)} />
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={104} y={316} size={16} fill={RED} script anchor="start">
          {t(
            "giving rad / sr dimensions — invisible corruption downstream",
            "rad / sr ko dimensions dena — chupke se sab kharab ho jaata hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — the whisper */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={372} size={15} fill={MUTED} script>
          {t(
            "the one habit worth more than any formula:",
            "ek aadat — har formula se zyada keemti:"
          )}
        </T>
      </Fade>

      {/* beat 7 — write · plug · check */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <Chip x={110} y={400} w={280} h={60} fill={PAPER} stroke={GREEN} textFill={GREEN} size={17}>
          {t("1 · WRITE the dimensions", "1 · dimensions LIKHO")}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 4.5)}
        d={arrowD(396, 430, 424, 430)}
        stroke={GREEN}
        sw={2.6}
        dur={0.3}
      />
      <Fade on={beat >= 7} delay={dl(7, 5)}>
        <Chip x={430} y={400} w={300} h={60} fill={PAPER} stroke={GREEN} textFill={GREEN} size={17}>
          {t("2 · PLUG the master relation", "2 · master relation mein PLUG")}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 9.5)}
        d={arrowD(736, 430, 764, 430)}
        stroke={GREEN}
        sw={2.6}
        dur={0.3}
      />
      <Fade on={beat >= 7} delay={dl(7, 10)}>
        <Chip x={770} y={400} w={260} h={60} fill={GREEN} textFill="#fff" size={17}>
          {t("3 · CHECK the direction", "3 · direction CHECK karo")}
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 15)}>
        <T x={540} y={510} size={16} fill={GREEN} script>
          {t(
            "write · plug · check — seconds, no cleverness needed",
            "likho · plug karo · check karo — seconds mein, bina dimaag lagaye"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 16)}
        d="M 340 528 C 470 524, 610 530, 740 526"
        stroke={GREEN}
        sw={2}
        dur={0.6}
      />
    </Scene>
  );
}
