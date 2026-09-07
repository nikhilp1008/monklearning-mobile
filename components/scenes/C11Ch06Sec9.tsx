/**
 * C11 Ch06 · Section 9 — "The four-rule toolkit for combining equilibria"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 51, 81.1, 117.1, 189.1, 270.2, 303.2, 333.2]):
 *  0 title + underline
 *  1 card1 badge+name: REVERSE — reaction flips
 *  2 card1 formula: K(rev) = 1/K
 *  3 card2 badge+name: SCALE by n — coefficients ×n
 *  4 card2 formulas: K' = Kⁿ  and  K' = K^(1/n)
 *  5 card3 badge+name: ADD reactions — mechanisms combine
 *  6 card3 formula: K(net) = K1 × K2
 *  7 guardrail: intermediate cancels when reactions add
 *
 * Layout plan — three cards, centers x=170 / 540 / 910 (longer language counts):
 *  b0 | title (script 26, red)      | T mid  | x147..933  y30..92  (bl 64)
 *  b1 | badge① c(170,150) r20       | Fade   |
 *  b1 | "REVERSE" (16) / sub (12)   | T mid  | y185..213
 *  b2 | "K(rev)=1/K" chip (green)   | Chip   | x60..280  y240..280
 *  b3 | badge②③ c(540,150) r20      | Fade   |
 *  b3 | "SCALE by n" (16) / sub(12) | T mid  | y185..213
 *  b4 | "K'=Kⁿ" chip                | Chip   | x430..650 y235..271
 *  b4 | "K'=K^(1/n)" chip           | Chip   | x430..650 y278..314
 *  b5 | badge④ c(910,150) r20       | Fade   |
 *  b5 | "ADD reactions"(16)/sub(12) | T mid  | y185..213
 *  b6 | "K(net)=K1×K2" chip         | Chip   | x800..1020 y240..280
 *  b7 | guardrail (15, amber-dark)  | T mid  | x188..892 y333..350 (bl 345)
 */

import React from "react";
import { Circle, TSpan } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ on, delay, cx, label }: { on: boolean; delay: number; cx: number; label: string }) {
  return (
    <Fade on={on} delay={delay}>
      <Circle cx={cx} cy={150} r={20} fill={CREAM} stroke={INK} strokeWidth={2} />
      <T x={cx} y={155} size={14} fill={INK} weight={700} anchor="middle">
        {label}
      </T>
    </Fade>
  );
}

export default function C11Ch06Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t(
            "four rules to combine equilibria",
            "equilibria combine karne ke 4 rules"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 6)}
        d="M 430 84 C 480 80, 600 87, 650 83"
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />

      {/* card 1 — REVERSE */}
      <Badge on={beat >= 1} delay={dl(1, 0.3)} cx={170} label="1" />
      <Fade on={beat >= 1} delay={dl(1, 0.7)}>
        <T x={170} y={190} size={16} fill={INK} weight={700} anchor="middle">
          {t("REVERSE", "REVERSE")}
        </T>
        <T x={170} y={210} size={12} fill={MUTED} anchor="middle">
          {t("reaction flips", "reaction ulti")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <Chip x={60} y={240} w={220} h={40} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={17} script={false}>
          K(rev) = 1/K
        </Chip>
      </Fade>

      {/* card 2 — SCALE by n */}
      <Badge on={beat >= 3} delay={dl(3, 0.3)} cx={540} label="2,3" />
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={540} y={190} size={16} fill={INK} weight={700} anchor="middle">
          {t("SCALE by n", "SCALE by n")}
        </T>
        <T x={540} y={210} size={12} fill={MUTED} anchor="middle">
          {t("coefficients ×n", "coefficients ×n")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={430} y={235} w={220} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={17} script={false}>
          <>
            K&apos; = K<TSpan dy={-8} fontSize={10.5}>n</TSpan>
          </>
        </Chip>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <Chip x={430} y={278} w={220} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={17} script={false}>
          <>
            K&apos; = K<TSpan dy={-8} fontSize={10.5}>1/n</TSpan>
          </>
        </Chip>
      </Fade>

      {/* card 3 — ADD reactions */}
      <Badge on={beat >= 5} delay={dl(5, 0.3)} cx={910} label="4" />
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={910} y={190} size={16} fill={INK} weight={700} anchor="middle">
          {t("ADD reactions", "ADD reactions")}
        </T>
        <T x={910} y={210} size={12} fill={MUTED} anchor="middle">
          {t("mechanisms combine", "mechanisms combine hote")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Chip x={800} y={240} w={220} h={40} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={16} script={false}>
          K(net) = K₁ × K₂
        </Chip>
      </Fade>

      {/* beat 7 — guardrail: why constants multiply */}
      <Fade on={beat >= 7} delay={dl(7, 0.4)}>
        <T x={540} y={345} size={15} fill={AMBER_DARK} anchor="middle">
          {t(
            "intermediate cancels when reactions add — that's why constants multiply",
            "reactions add hone par intermediate cancel — isliye constants multiply"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
