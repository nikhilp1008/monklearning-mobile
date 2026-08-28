/**
 * Ch12 · Section 38 — "The law of equipartition of energy"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 20.05, 35.16, 44.37, 45.37, 46.37, 47.37]):
 *  0 title + underline · 1 rule: ½kʙT per dof per molecule · 2 THE BARS: 5
 *    equal-height bars (3 trans + 2 rot), equal share ⇒ total energy · 3
 *    average energy = f×½kʙT · 4 U=(f/2)nRT boxed (master key) · 5 U depends
 *    only on T; monatomic f=3 ⇒ 3/2 nRT · 6 bridge to Cv, Cp, γ
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 22, red)          | T mid | x260..820 y33..70 (bl58)
 *  b0 | underline                        | Draw  | y80 x330..750
 *  b1 | rule (14, ink, script)          | T mid | x540 y100
 *  b2 | 5 equal bars + T/R labels        | rect  | x150..480 y160..220
 *  b2 | caption (13, amber_dark)        | T mid | x540 y268
 *  b3 | avg-energy line (15, ink)       | T mid | x540 y298
 *  b4 | boxed U=(f/2)nRT (big, green)   | Chip  | x380..700 y316..360
 *  b5 | verdict (14, ink, script)       | T mid | x540 y396
 *  b6 | bridge (13, amber_dark, script) | T mid | x540 y428
 */

import React from "react";
import { G, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const BARS: [number, string][] = [
  [150, "T"],
  [220, "T"],
  [290, "T"],
  [370, "R"],
  [440, "R"],
];

export default function Ch12Sec38({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={RED} script>
          {t("the law of equipartition of energy", "equipartition of energy ka law")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 330 80 C 420 76, 660 84, 750 78" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 1 — the rule */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={100} size={14} fill={INK} script>
          {t(
            "each degree of freedom gets exactly ½kʙT per molecule (½RT per mole)",
            "har degree of freedom ko exactly ½kʙT per molecule milta"
          )}
        </T>
      </Fade>

      {/* beat 2 — THE BARS: equal share */}
      {BARS.map(([x, label], i) => (
        <G key={x}>
          <Fade on={beat >= 2} delay={dl(2, 0.2 + i * 0.25)}>
            <Rect x={x} y={160} width={40} height={60} fill={AMBER_DARK} />
          </Fade>
          <Fade on={beat >= 2} delay={dl(2, 0.5 + i * 0.25)}>
            <T x={x + 20} y={235} size={13} fill={AMBER_DARK} weight={700}>
              {label}
            </T>
          </Fade>
        </G>
      ))}
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={540} y={268} size={13} fill={AMBER_DARK} script>
          {t("equal share per mode ⇒ stack to total energy", "har mode ka equal share ⇒ total energy tak stack")}
        </T>
      </Fade>

      {/* beat 3 — average energy formula */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={298} size={15} fill={INK}>
          {t("average energy = f × ½kʙT = (f/2)kʙT", "average energy = f × ½kʙT = (f/2)kʙT")}
        </T>
      </Fade>

      {/* beat 4 — master key, boxed */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={380} y={316} w={320} h={44} fill={GREEN} textFill="#fff" size={21} script={false}>
          U = (f/2)nRT
        </Chip>
      </Fade>

      {/* beat 5 — U depends only on T */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={396} size={14} fill={INK} script>
          {t(
            "U depends only on T — monatomic (f=3): U = 3/2 nRT ✓",
            "U sirf T par depend — monatomic (f=3): U = 3/2 nRT ✓"
          )}
        </T>
      </Fade>

      {/* beat 6 — bridge */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={540} y={428} size={13} fill={AMBER_DARK} script>
          {t("from here: Cv, Cp, and γ — derived next", "yahan se: Cv, Cp, aur γ — aage derive karenge")}
        </T>
      </Fade>
    </Scene>
  );
}
