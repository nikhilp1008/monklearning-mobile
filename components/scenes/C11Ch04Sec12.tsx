/**
 * C11 Chemistry Ch04 · Section 12 — "Valence bond theory and the need for hybridisation"
 * Canvas 1080×620 · safe x36–1044, y30–596. Only 7 beats.
 *
 * Beats (en [0, 13.57, 30.21, 49.66, 64.77, 88.92, 110.76]):
 *  0 orbital overlap → bond forms, more overlap = stronger
 *  1 sigma (head-on, strong) vs pi (sidewise, weaker)
 *  2 mismatch: raw VBT → 90°, but CH4 = 109.5° all identical
 *  3 fix = hybridisation chip
 *  4 1s + 3p → 4 sp³ orbital boxes, tetrahedral CH4
 *  5 limitations: diborane, O2 paramagnetism → MOT next
 *  6 caution: hybridisation is bookkeeping, not a physical event
 *
 * Layout plan:
 *  b0   | overlap circles      | Fade   | x428..552 y118..182
 *  b1   | sigma/pi mini icons  | Fade   | x220..280 / x780..820 y225..270
 *  b2   | mismatch text        | T mid  | y295 / y318
 *  b3   | hybridisation chip   | Chip   | x260..820 y336..362
 *  b4   | orbital boxes        | Draw/T | x220..582 y370..438
 *  b5   | limitations chip     | Chip   | x160..920 y456..484
 *  b6   | caution line         | T mid  | y508
 */

import React from "react";
import { Circle, Ellipse } from 'react-native-svg';
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
  RED,
  Scene,
} from '@/components/scenes/kit';
import { OrbitalBox } from "./chem-kit";

export default function C11Ch04Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const srcX = [220, 258, 296, 334];
  const srcLabel = ["s", "p", "p", "p"];
  const hybX = [430, 470, 510, 550];

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={58} size={19} fill={RED} script>
          {t("Valence bond theory & hybridisation", "Valence bond theory & hybridisation")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.4)} d="M 400 80 C 460 76, 620 76, 680 80" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 0 — orbital overlap */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <Circle cx={460} cy={150} r={32} fill="none" stroke={INK} strokeWidth={1.8} />
        <Circle cx={520} cy={150} r={32} fill="none" stroke={INK} strokeWidth={1.8} />
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 0.7)}>
        <Ellipse cx={490} cy={150} rx={13} ry={26} fill={AMBER} opacity={0.6} />
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 1.2)}>
        <T x={490} y={200} size={11.5} fill={INK}>
          {t("orbitals overlap → bond forms (more overlap ⇒ stronger)", "orbitals overlap karte → bond banta (zyada overlap ⇒ strong)")}
        </T>
      </Fade>

      {/* beat 1 — sigma vs pi */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <Ellipse cx={222} cy={240} rx={14} ry={7} fill="none" stroke={INK} strokeWidth={1.6} />
        <Ellipse cx={278} cy={240} rx={14} ry={7} fill="none" stroke={INK} strokeWidth={1.6} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={250} y={266} size={11.5} fill={INK}>
          σ: {t("head-on (strong)", "head-on (strong)")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <Ellipse cx={800} cy={232} rx={20} ry={7} fill="none" stroke={INK} strokeWidth={1.6} />
        <Ellipse cx={800} cy={250} rx={20} ry={7} fill="none" stroke={INK} strokeWidth={1.6} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.4)}>
        <T x={800} y={272} size={11.5} fill={INK}>
          π: {t("sidewise (weaker)", "sidewise (weaker)")}
        </T>
      </Fade>

      {/* beat 2 — mismatch */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={295} size={12.5} fill={INK}>
          {t("raw VBT: carbon's orbitals → 90°", "raw VBT: carbon ke orbitals → 90°")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={540} y={318} size={13} weight={700} fill={RED}>
          {t("but CH₄ = 109.5°, all 4 IDENTICAL → mismatch!", "but CH₄ = 109.5°, chaaron IDENTICAL → mismatch!")}
        </T>
      </Fade>

      {/* beat 3 — hybridisation fix */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={260} y={336} w={560} h={26} fill={AMBER_DARK} textFill="#fff" size={12.5} script={false}>
          {t(
            "hybridisation: blend orbitals → point where VSEPR demands",
            "hybridisation: orbitals blend karo → VSEPR jahan demand kare wahan point karo"
          )}
        </Chip>
      </Fade>

      {/* beat 4 — sp3 orbital boxes */}
      {srcX.map((x, i) => (
        <OrbitalBox key={i} on={beat >= 4} delay={dl(4, 0.2 + i * 0.15)} x={x} y={370} w={30} h={28} up={1} label={srcLabel[i]} />
      ))}
      <Fade on={beat >= 4} delay={dl(4, 0.9)}>
        <T x={397} y={390} size={18} fill={INK}>
          →
        </T>
      </Fade>
      {hybX.map((x, i) => (
        <OrbitalBox key={i} on={beat >= 4} delay={dl(4, 1.1 + i * 0.15)} x={x} y={370} w={32} h={28} up={1} label="sp³" />
      ))}
      <Fade on={beat >= 4} delay={dl(4, 1.9)}>
        <T x={540} y={438} size={11.5} fill={INK}>
          {t("1s + 3p → 4 identical sp³ → tetrahedral CH₄", "1s + 3p → 4 identical sp³ → tetrahedral CH₄")}
        </T>
      </Fade>

      {/* beat 5 — limitations */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={160} y={456} w={760} h={28} fill={RED} textFill="#fff" size={12} script={false}>
          {t(
            "strained for electron-deficient species (diborane); can't explain O₂ paramagnetism → MOT next",
            "electron-deficient species (diborane) ke liye strained; O₂ ki paramagnetism explain nahi karta → MOT next"
          )}
        </Chip>
      </Fade>

      {/* beat 6 — caution */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={508} size={12} fill={MUTED} script>
          {t(
            "caution: hybridisation = bookkeeping AFTER knowing geometry, not a physical event",
            "caution: hybridisation = geometry pata hone KE BAAD ki bookkeeping, physical event nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
