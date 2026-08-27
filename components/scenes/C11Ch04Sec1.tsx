/**
 * C11 Chemistry Ch04 · Section 1 — "The octet rule and the two routes to a full shell"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 18.86, 36.69, 54.78, 66.56, 77.4, 96.26, 114.6]):
 *  0 generic atom shell icon (5 filled + 3 empty dots) + "wants a full shell"
 *  1 octet-rule chip (8 valence e⁻, 2 for H/He)
 *  2 fork: TRANSFER card / SHARE card
 *  3 red labels under each card: → ionic bond / → covalent bond
 *  4 attribution (Kossel / Lewis) + "the Kossel-Lewis approach" chip
 *  5 real example: Na (1 dot) + Cl (7 dots) Lewis structures, transfer arrow
 *  6 Na⁺ / Cl⁻ swap (mutually-exclusive with beat5 labels), Cl's 8th dot
 *    pairs up, dashed electrostatic-attraction line
 *  7 green verdict chip: ionic = a sale · covalent = a joint venture
 *
 * Layout plan:
 *  b0 | shell icon (ring+dots)  | Fade | cx540 cy125 r24, box x510..570 y97..153
 *  b0 | shell label             | T mid| x540 y176  box x~440..640 y159..182
 *  b1 | octet chip               | Chip | x390..690 y194..218
 *  b2 | TRANSFER card            | Draw | x170..430 y228..260
 *  b2 | SHARE card               | Draw | x650..910 y228..260
 *  b3 | → ionic bond (red)       | T mid| x300 y284  box x?..?  y273..288
 *  b3 | → covalent bond (red)    | T mid| x780 y284
 *  b4 | Kossel / Lewis           | T mid| x300/780 y310
 *  b4 | Kossel-Lewis chip        | Chip | x430..650 y326..352
 *  b5 | Na label + dot           | T/dot| x260 y430; dot (284,408)
 *  b5 | Cl label + 3 pairs + 1   | T/dot| x820 y430; pairs top/right/bottom,
 *     | single dot (left, facing Na)  |   single (788,430)
 *  b5 | transfer arrow           | Draw | (284,408) -> (784,428)
 *  b6 | Na⁺ / Cl⁻ (swap b5 text) | T mid| same boxes as b5 labels
 *  b6 | Cl left pair (swap single)|      | cx788 cy430
 *  b6 | attraction line + label  | Draw/T| x320..760 y478; label y506
 *  b7 | verdict chip             | Chip | x280..800 y534..568
 */

import React from "react";
import { Circle } from 'react-native-svg';
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
  Scene,
} from '@/components/scenes/kit';
import { curvedArrowD, LonePair } from "./chem-kit";

export default function C11Ch04Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const ringR = 24;
  const shellCx = 540;
  const shellCy = 125;
  const dotPos = Array.from({ length: 8 }, (_, i) => {
    const a = ((-90 + i * 45) * Math.PI) / 180;
    return { x: shellCx + ringR * Math.cos(a), y: shellCy + ringR * Math.sin(a) };
  });

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={60} size={19} fill={RED} script>
          {t("Kossel-Lewis: the octet rule", "Kossel-Lewis: octet rule")}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 3.2)}
        d="M 390 82 C 460 78, 620 78, 690 82"
        stroke={RED}
        sw={2.2}
        dur={0.6}
      />

      {/* beat 0 — generic atom shell: 5 filled + 3 empty dots */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <Circle cx={shellCx} cy={shellCy} r={ringR} fill="none" stroke={MUTED} strokeWidth={1.3} strokeDasharray="3 3" />
        <Circle cx={shellCx} cy={shellCy} r={5} fill={INK} />
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 1.0)}>
        {dotPos.slice(0, 5).map((p, i) => (
          <Circle key={i} cx={p.x} cy={p.y} r={3} fill={INK} />
        ))}
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 1.6)}>
        {dotPos.slice(5, 8).map((p, i) => (
          <Circle key={i} cx={p.x} cy={p.y} r={3.4} fill="none" stroke={RED} strokeWidth={1.3} strokeDasharray="2 2" />
        ))}
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 2.3)}>
        <T x={540} y={176} size={13} fill={INK} script>
          {t("wants a full outer shell", "poora outer shell chahta hai")}
        </T>
      </Fade>

      {/* beat 1 — octet rule */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Chip x={390} y={194} w={300} h={24} fill={AMBER} textFill={INK} size={13} script={false}>
          {t("octet rule: 8 valence e⁻ (2 for H, He)", "octet rule: 8 valence e⁻ (H, He ke liye 2)")}
        </Chip>
      </Fade>

      {/* beat 2 — fork: transfer vs share */}
      <Draw on={beat >= 2} delay={dl(2, 0.2)} d="M 170 228 h 260 v 32 h -260 z" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={300} y={249} size={16} weight={800} fill={INK}>
          TRANSFER
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.3)} d="M 650 228 h 260 v 32 h -260 z" stroke={INK} sw={2} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.9)}>
        <T x={780} y={249} size={16} weight={800} fill={INK}>
          SHARE
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <T x={540} y={249} size={13} fill={MUTED}>
          {t("or", "ya")}
        </T>
      </Fade>

      {/* beat 3 — red-margin split */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={300} y={284} size={13} fill={RED}>
          {t("→ ionic bond", "→ ionic bond")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={780} y={284} size={13} fill={RED}>
          {t("→ covalent bond", "→ covalent bond")}
        </T>
      </Fade>

      {/* beat 4 — attribution + name */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={300} y={310} size={12} fill={INK}>
          Kossel
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={780} y={310} size={12} fill={INK}>
          Lewis
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.1)}>
        <Chip x={430} y={326} w={220} h={26} fill={AMBER} textFill={INK} size={14} script={false}>
          {t("the Kossel-Lewis approach", "Kossel-Lewis approach")}
        </Chip>
      </Fade>

      {/* beat 5 — real example: Na (1 dot), Cl (7 dots), transfer */}
      <Fade on={beat === 5} delay={dl(5, 0.2)}>
        <T x={260} y={430} size={24} weight={700} fill={INK}>
          Na
        </T>
      </Fade>
      <Fade on={beat === 5} delay={dl(5, 0.8)}>
        <Circle cx={284} cy={408} r={3} fill={INK} />
      </Fade>
      <Fade on={beat === 5} delay={dl(5, 1.4)}>
        <T x={820} y={430} size={24} weight={700} fill={INK}>
          Cl
        </T>
      </Fade>
      <LonePair on={beat >= 5} delay={dl(5, 2.0)} cx={820} cy={400} angle={0} spread={8} />
      <LonePair on={beat >= 5} delay={dl(5, 2.5)} cx={852} cy={430} angle={Math.PI / 2} spread={8} />
      <LonePair on={beat >= 5} delay={dl(5, 3.0)} cx={820} cy={460} angle={0} spread={8} />
      <Fade on={beat === 5} delay={dl(5, 3.5)}>
        <Circle cx={788} cy={430} r={3} fill={INK} />
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 4.2)}
        d={curvedArrowD(284, 408, 784, 428, -30)}
        stroke={RED}
        sw={2.2}
        dur={1.0}
      />
      <Fade on={beat >= 5} delay={dl(5, 5.4)}>
        <T x={535} y={390} size={13} fill={AMBER_DARK}>
          {t("transfer", "transfer")}
        </T>
      </Fade>

      {/* beat 6 — ions form, electrostatic attraction */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={260} y={430} size={24} weight={700} fill={INK}>
          Na⁺
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.5)}>
        <T x={820} y={430} size={24} weight={700} fill={INK}>
          Cl⁻
        </T>
      </Fade>
      <LonePair on={beat >= 6} delay={dl(6, 0.9)} cx={788} cy={430} angle={Math.PI / 2} spread={8} />
      <Draw
        on={beat >= 6}
        delay={dl(6, 1.6)}
        d="M 320 478 L 760 478 M 340 470 L 320 478 L 340 486 M 740 470 L 760 478 L 740 486"
        stroke={INK}
        sw={2}
        dur={0.8}
      />
      <Fade on={beat >= 6} delay={dl(6, 2.6)}>
        <T x={540} y={506} size={13} fill={INK} script>
          {t("electrostatic attraction (like magnets)", "electrostatic attraction (magnets jaisa)")}
        </T>
      </Fade>

      {/* beat 7 — verdict */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={280} y={534} w={520} h={34} fill={GREEN} textFill="#fff" size={15} script={false}>
          {t(
            "ionic = a sale · covalent = a joint venture (shared pair)",
            "ionic = ek sale · covalent = ek joint venture (shared pair)"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
