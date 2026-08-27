/**
 * C11 Ch06 · Section 18 — "Conditions behind ΔG° = −RT ln K"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 6.1, 14.2, 22.1, 29.7, 40.5, 48.8, 57.5]):
 *  0 title + underline
 *  1 badge① heading: K must be dimensionless (activities)
 *  2 guardrail: never carry concentration units into ln K
 *  3 badge② heading: holds only at ONE fixed T
 *  4 formula, boxed: ΔG° = ΔH° − TΔS°
 *  5 conclusion: both ΔG° and K shift with temperature
 *  6 forward-link: basis for Le Chatelier's heat effect (next!)
 *  7 badge③: assumes ideal behaviour — real systems need activity corrections
 *
 * Layout plan — numbered checklist, badge x=90 heading x=130:
 *  b0 | title (script 24, red)      | T mid  | x223..857  y30..90  (bl 64)
 *  b1 | badge① c(90,130) r18        | Fade   |
 *  b1 | "K must be dimensionless"   | T st   | x130..380 y120..142 (bl 136)
 *  b2 | guardrail (14, red)         | T st   | x130..520 y152..170 (bl 168)
 *  b3 | badge② c(90,230) r18        | Fade   |
 *  b3 | "holds only at ONE fixed T" | T st   | x130..420 y220..242 (bl 236)
 *  b4 | formula chip (amber)        | Chip   | x400..680 y252..292
 *  b5 | conclusion (15, ink)        | T st   | x130..470 y308..325 (bl 320)
 *  b6 | forward-link (14, amber)    | T st   | x130..680 y340..358 (bl 358)
 *  b7 | badge③ c(90,420) r18        | Fade   |
 *  b7 | "assumes ideal behaviour"   | T st   | x130..370 y410..432 (bl 426)
 *  b7 | note (14, muted)            | T st   | x130..570 y442..460 (bl 458)
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, MUTED, AMBER, AMBER_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ on, delay, cy, n }: { on: boolean; delay: number; cy: number; n: number }) {
  return (
    <Fade on={on} delay={delay}>
      <Circle cx={90} cy={cy} r={18} fill={CREAM} stroke={INK} strokeWidth={2} />
      <T x={90} y={cy + 6} size={18} fill={INK} weight={700} anchor="middle">
        {n}
      </T>
    </Fade>
  );
}

export default function C11Ch06Sec18({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("the fine print behind ΔG° = −RT ln K", "ΔG° = −RT ln K ke peeche fine print")}
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

      {/* condition 1 — dimensionless K */}
      <Badge on={beat >= 1} delay={dl(1, 0.3)} cy={130} n={1} />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={130} y={136} size={18} fill={INK} weight={700} anchor="start">
          {t("K must be dimensionless", "K dimensionless hona chahiye")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={130} y={168} size={14} fill={RED} anchor="start">
          {t(
            "✗ never carry concentration units into ln K",
            "✗ concentration units ko kabhi ln K mein mat le jao"
          )}
        </T>
      </Fade>

      {/* condition 2 — fixed temperature */}
      <Badge on={beat >= 3} delay={dl(3, 0.3)} cy={230} n={2} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={130} y={236} size={18} fill={INK} weight={700} anchor="start">
          {t("holds only at ONE fixed T", "sirf EK fixed T par hi hota")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <Chip x={400} y={252} w={280} h={40} fill={CREAM} stroke={AMBER} textFill={INK} size={17} script={false}>
          ΔG° = ΔH° − TΔS°
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={130} y={320} size={15} fill={INK} anchor="start">
          {t(
            "⇒ both ΔG° and K shift with temperature",
            "⇒ ΔG° aur K dono temperature ke saath shift"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <T x={130} y={358} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "→ this is the basis for Le Chatelier's heat effect (next!)",
            "→ isi se Le Chatelier ka heat effect aata (aage!)"
          )}
        </T>
      </Fade>

      {/* condition 3 — ideal behaviour */}
      <Badge on={beat >= 7} delay={dl(7, 0.3)} cy={420} n={3} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={130} y={426} size={18} fill={INK} weight={700} anchor="start">
          {t("assumes ideal behaviour", "ideal behaviour assume karta")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={130} y={458} size={14} fill={MUTED} anchor="start">
          {t(
            "real, concentrated systems need activity corrections",
            "real, concentrated systems ko activity corrections chahiye"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
