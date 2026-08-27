/**
 * C11 Ch08 · Section 21 — "Isomers — same formula, different compound"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 8.45, 27.56, 46.76, 65.11, 81.66, 101.97, 107.61, 114.6]):
 *  0 title (always-on, seq1) · 1 same-ID-different-people analogy · 2 C2H6O:
 *  ethanol vs dimethyl ether, both drawn · 3 red note (O-H bond difference) · 4
 *  isomer counts explode · 5 railway coach analogy · 6 heading: the master split
 *  · 7 Q1 (connectivity → structural) · 8 red Q2 (space → stereo, compare formula
 *  first)
 *
 * Layout plan:
 *  b1 | analogy (14, muted, script)     | T mid | y90
 *  b2 | ethanol + DME structures        | Draw+T| x200..260 / x700..820 y130..236
 *  b2 | "C2H6O" / "≠"                   | T mid | x540 y140 / x480 y175
 *  b3 | margin bar + red note           | Draw+T| x60 y248..278 · x76 y266
 *  b4 | isomer counts (13, ink)         | T mid | y300
 *  b5 | railway analogy (13, ink)       | T mid | y330
 *  b6 | heading (14, amber, w700)       | T mid | y365
 *  b7 | Q1 box                          | rect+T| x170..870 y385..417
 *  b8 | Q2 box (red), 2 lines           | rect+T| x150..930 y432..480
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, AMBER_DARK, RED, CREAM, AMBER,
  Scene,
} from '@/components/scenes/kit';
import { bondD } from "./chem-kit";

export default function C11Ch08Sec21({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("Isomers — same formula, different compound", "Isomers — formula same, compound alag")}
        </T>
      </Fade>

      {/* beat 1 — the analogy */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={90} size={14} fill={MUTED} script>
          {t(
            "same ID data, different people — isomers are molecules like that",
            "same ID data, alag log — isomers bhi aise hi molecules hain"
          )}
        </T>
      </Fade>

      {/* beat 2 — C2H6O: two very different molecules */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={140} size={18} fill={INK} weight={800}>
          C₂H₆O
        </T>
        <T x={480} y={175} size={20} fill={INK} weight={700}>
          ≠
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d={bondD(200, 190, 260, 165)} stroke={INK} sw={2.4} dur={0.4} />
      <Draw on={beat >= 2} delay={dl(2, 1)} d={bondD(260, 165, 260, 130)} stroke={INK} sw={2.2} dur={0.3} />
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={260} y={118} size={15} fill={INK} weight={700}>
          OH
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={230} y={215} size={15} fill={INK} weight={700}>
          {t("ethanol", "ethanol")}
        </T>
        <T x={230} y={232} size={12} fill={MUTED}>
          {t("bp ~78°C, fizzes with Na", "bp ~78°C, Na se fizz karta")}
        </T>
      </Fade>

      <Draw on={beat >= 2} delay={dl(2, 2)} d={bondD(700, 190, 743, 164)} stroke={INK} sw={2.4} dur={0.35} />
      <Fade on={beat >= 2} delay={dl(2, 2.3)}>
        <T x={760} y={158} size={15} fill={INK} weight={700}>
          O
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 2.6)} d={bondD(777, 164, 820, 190)} stroke={INK} sw={2.4} dur={0.35} />
      <Fade on={beat >= 2} delay={dl(2, 2.9)}>
        <T x={760} y={215} size={15} fill={INK} weight={700}>
          {t("dimethyl ether", "dimethyl ether")}
        </T>
        <T x={760} y={232} size={12} fill={MUTED}>
          {t("bp ~-24°C, ignores Na", "bp ~-24°C, Na ignore karta")}
        </T>
      </Fade>

      {/* beat 3 — different in kind, not degree */}
      <Draw on={beat >= 3} delay={dl(3, 0.2)} d="M 60 248 L 60 278" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={76} y={266} size={15} fill={RED} script anchor="start">
          {t(
            "one has an O-H bond a metal can attack — the other simply doesn't",
            "ek mein O-H bond hai jo metal attack kar sakta — dusre mein wo hai hi nahi"
          )}
        </T>
      </Fade>

      {/* beat 4 — isomer counts explode */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        <T x={540} y={300} size={13} fill={INK}>
          {t("C4H10: 2 isomers · C10H22: 75 · bigger alkanes → billions", "C4H10: 2 isomers · C10H22: 75 · bade alkanes → billions")}
        </T>
      </Fade>

      {/* beat 5 — railway coaches */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={540} y={330} size={13} fill={INK}>
          {t(
            "railway coaches: reorder → structural isomer; flip facing → stereoisomer",
            "railway coaches: reorder → structural isomer; facing flip → stereoisomer"
          )}
        </T>
      </Fade>

      {/* beat 6 — the master split */}
      <Fade on={beat >= 6} delay={dl(6, 0.2)}>
        <T x={540} y={365} size={14} fill={AMBER_DARK} weight={700}>
          {t("The master split — two questions in order", "The master split — do sawaal, order mein")}
        </T>
      </Fade>

      {/* beat 7 — Q1 */}
      <Fade on={beat >= 7} delay={dl(7, 0.2)}>
        <Rect x={170} y={385} width={700} height={32} rx={8} fill={CREAM} stroke={AMBER} strokeWidth={1.8} />
        <T x={540} y={407} size={14} fill={INK} weight={700}>
          {t("Q1: connected the same way? NO → structural isomers", "Q1: connectivity same hai? NO → structural isomers")}
        </T>
      </Fade>

      {/* beat 8 — Q2, red */}
      <Fade on={beat >= 8} delay={dl(8, 0.2)}>
        <Rect x={150} y={432} width={780} height={48} rx={8} fill={CREAM} stroke={RED} strokeWidth={2.2} />
        <T x={540} y={452} size={14} fill={RED} weight={700}>
          {t("Q2: same connectivity, different in space? YES → stereoisomers", "Q2: connectivity same, space mein alag? YES → stereoisomers")}
        </T>
        <T x={540} y={470} size={12} fill={RED} script>
          {t("(always compare the FORMULA first)", "(hamesha pehle FORMULA compare karo)")}
        </T>
      </Fade>
    </Scene>
  );
}
