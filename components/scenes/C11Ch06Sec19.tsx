/**
 * C11 Ch06 · Section 19 — "From ΔG = ΔG° + RT ln Q to ΔG° = −RT ln K"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md. The master derivation of the subtopic.
 *
 * Beats (board_reveal_at_english: [0, 7.8, 17.3, 24.3, 33.2, 48.5, 61, 70.7]):
 *  0 title + underline
 *  1 note: at any composition, actual ΔG = standard + RT ln Q correction
 *  2 master equation, boxed: ΔG = ΔG° + RT ln Q
 *  3 transition: as reaction rolls to the valley floor, Q→K, ΔG→0
 *  4 land, ringed: 0 = ΔG° + RT ln K ⇒ ΔG° = −RT ln K = −2.303 RT log K
 *  5 profound callout: one measured number predicts the whole equilibrium
 *  6 solve for K, boxed: K = e^(−ΔG°/RT)
 *  7 sign map: 3 chips — ΔG°<0→K>1, =0→K=1, >0→K<1
 *
 * Layout plan (centered stack; longer language counts):
 *  b0 | title (script 22, red)      | T mid  | x190..890  y30..86  (bl 64)
 *  b1 | note (14, muted)            | T mid  | y99..114 (bl 110)
 *  b2 | "ΔG=ΔG°+RTlnQ" chip         | Chip   | x350..730 y122..166
 *  b3 | transition (14, amber, scr) | T mid  | y185..201 (bl 200)
 *  b4 | "0=ΔG°+RTlnK" (16, muted)   | T mid  | y224..239 (bl 235)
 *  b4 | main result ringed (20, gr) | T mid  | x361..719 y254..276 (bl 270)
 *  b5 | profound (14, red, script)  | T mid  | y312..330 (bl 330)
 *  b6 | "K=e^(-ΔG°/RT)" chip        | Chip   | x430..650 y350..394
 *  b7 | 3 sign-map chips            | Chip   | x265..815 y420..464
 */

import React from "react";
import { Rect, TSpan, Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, MUTED, AMBER, AMBER_DARK, GREEN, GREEN_DARK, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const ANEK = "var(--font-anek-latin), sans-serif";

export default function C11Ch06Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={22} fill={RED} script>
          ΔG = ΔG° + RT ln Q → ΔG° = −RT ln K
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

      {/* beat 1 — the correction */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={110} size={14} fill={MUTED} anchor="middle">
          {t(
            "at any composition: actual ΔG = standard value + RT ln Q correction",
            "kisi bhi composition par: actual ΔG = standard value + RT ln Q correction"
          )}
        </T>
      </Fade>

      {/* beat 2 — the master equation */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <Chip x={350} y={122} w={380} h={44} fill={CREAM} stroke={AMBER} textFill={INK} size={20} script={false}>
          ΔG = ΔG° + RT ln Q
        </Chip>
      </Fade>

      {/* beat 3 — transition to equilibrium */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={200} size={14} fill={AMBER_DARK} script anchor="middle">
          {t(
            "as the reaction rolls to the valley floor: Q → K, ΔG → 0",
            "reaction valley floor tak rolls: Q → K, ΔG → 0"
          )}
        </T>
      </Fade>

      {/* beat 4 — impose equilibrium, land the result */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={235} size={16} fill={MUTED} anchor="middle">
          0 = ΔG° + RT ln K
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={540} y={270} size={20} fill={GREEN} weight={800} anchor="middle">
          ΔG° = −RT ln K = −2.303 RT log K
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.7)}
        d={ringD(540, 265, 179, 23)}
        stroke={GREEN}
        sw={2.4}
        dur={0.8}
      />

      {/* beat 5 — the profound callout */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={540} y={330} size={14} fill={RED} script anchor="middle">
          {t(
            "one measured number predicts the whole equilibrium composition!",
            "ek measured number poora equilibrium composition predict karta!"
          )}
        </T>
      </Fade>

      {/* beat 6 — solve for K */}
      <Fade on={beat >= 6} delay={dl(6, 0.4)}>
        <Rect x={430} y={350} width={220} height={44} rx={14} fill={CREAM} stroke={AMBER} strokeWidth={1.8} />
        <SvgText x={540} y={378} textAnchor="middle" fontSize={20} fontWeight={700} fill={INK} fontFamily={ANEK}>
          K = e<TSpan dy={-9} fontSize="0.6em">−ΔG°/RT</TSpan>
        </SvgText>
      </Fade>

      {/* beat 7 — the sign map */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={265} y={420} w={170} h={44} fill={CREAM} stroke={GREEN} textFill={GREEN_DARK} size={15} script={false}>
          ΔG° &lt; 0 → K &gt; 1
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 0.7)}>
        <Chip x={455} y={420} w={170} h={44} fill={CREAM} stroke={MUTED} textFill={INK} size={15} script={false}>
          ΔG° = 0 → K = 1
        </Chip>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.1)}>
        <Chip x={645} y={420} w={170} h={44} fill={CREAM} stroke={RED} textFill={RED} size={15} script={false}>
          ΔG° &gt; 0 → K &lt; 1
        </Chip>
      </Fade>
    </Scene>
  );
}
