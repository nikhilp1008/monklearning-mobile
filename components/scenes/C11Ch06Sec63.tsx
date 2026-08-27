/**
 * C11 Ch06 · Section 63 — "Buffers: the Henderson equation, capacity and range"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 5.7, 16.5, 23.4, 30, 39.4, 52.7]):
 *  0 title + underline
 *  1 acidic buffer, ringed: pH = pKa + log([salt]/[acid])
 *  2 note: = pKa + log(salt-to-acid ratio)
 *  3 note: basic buffer (weak base + salt), mirror form:
 *  4 basic buffer, ringed: pOH = pKb + log([salt]/[base])
 *  5 two rule-of-thumb chips: max capacity + useful range
 *  6 shortcut, boxed: only the ratio matters, moles = molarities
 *
 * Layout plan (centered stack; longer language counts):
 *  b1 | acidic H-H ringed (20, grn) | T mid  | x376..704 y99..121 (bl 115)
 *  b2 | note (13, muted)            | T mid  | y155..169 (bl 165)
 *  b3 | basic-buffer note (14, mu)  | T mid  | y185..201 (bl 195)
 *  b4 | basic H-H ringed (20, grn)  | T mid  | x376..704 y224..246 (bl 240)
 *  b5 | "max capacity" chip (amber) | Chip   | x230..510 y290..330
 *  b5 | "range" chip (amber)        | Chip   | x530..810 y290..330
 *  b6 | shortcut box (amber)        | rect   | x170..910 y360..402
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, MUTED, AMBER, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function C11Ch06Sec63({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={20} fill={RED} script>
          {t("buffers: Henderson, capacity and range", "buffers: Henderson, capacity aur range")}
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

      {/* beat 1 — the acidic buffer equation */}
      <Fade on={beat >= 1} delay={dl(1, 0.4)}>
        <T x={540} y={115} size={20} fill={GREEN} weight={800} anchor="middle">
          pH = pKa + log([salt]/[acid])
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.1)}
        d={ringD(540, 110, 164, 23)}
        stroke={GREEN}
        sw={2.2}
        dur={0.7}
      />

      {/* beat 2 — restated */}
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={540} y={165} size={13} fill={MUTED} anchor="middle">
          {t("= pKa + log(salt-to-acid ratio)", "= pKa + log(salt-to-acid ratio)")}
        </T>
      </Fade>

      {/* beat 3 — the basic-buffer setup */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={540} y={195} size={14} fill={MUTED} anchor="middle">
          {t(
            "for a BASIC buffer (weak base + salt), mirror form:",
            "BASIC buffer (weak base + salt) ke liye, mirror form:"
          )}
        </T>
      </Fade>

      {/* beat 4 — the basic buffer equation */}
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={540} y={240} size={20} fill={GREEN} weight={800} anchor="middle">
          pOH = pKb + log([salt]/[base])
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.1)}
        d={ringD(540, 235, 164, 23)}
        stroke={GREEN}
        sw={2.2}
        dur={0.7}
      />

      {/* beat 5 — the two rules of thumb */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={230} y={290} w={280} h={40} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          {t("max capacity: pH = pKa", "max capacity: pH = pKa")}
        </Chip>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <Chip x={530} y={290} w={280} h={40} fill={CREAM} stroke={AMBER} textFill={INK} size={14} script={false}>
          {t("useful range: pKa ± 1", "useful range: pKa ± 1")}
        </Chip>
      </Fade>

      {/* beat 6 — the moles shortcut */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Rect x={170} y={360} width={740} height={42} rx={10} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={540} y={386} size={15} fill={AMBER_DARK} weight={600} anchor="middle">
          {t(
            "only the RATIO matters — moles work as well as molarities",
            "sirf RATIO matter karta — moles bhi molarities jaisa kaam"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
