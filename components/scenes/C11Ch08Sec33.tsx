/**
 * C11 Ch08 · Section 33 — "The reactive intermediates"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 8.11, 14.08, 31.49, 48.13, 63.4, 77.65, 95.66]):
 *  0 title (always-on, seq1) · 1 diagram: cation + anion icons drawn side by side
 *  · 2 cation stats (sextet, sp2, planar, empty p, electrophilic) · 3 anion stats
 *  (octet+lp, sp3, pyramidal, nucleophilic) · 4 radical (icon+stats together) ·
 *  5 carbene (icon+stats together) · 6 red note (planar cation vs pyramidal
 *  anion, don't swap) · 7 closer (four actors, next Q = stability)
 *
 * Four columns, centers x=150/400/650/900. Icon zone y100-165, 5-line stats
 * y180-256.
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, MUTED, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD } from "./chem-kit";

export default function C11Ch08Sec33({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const Stats = ({ cx, on, delay, lines, lastColor }: { cx: number; on: boolean; delay: number; lines: string[]; lastColor: string }) => (
    <Fade on={on} delay={delay}>
      {lines.map((l, i) => (
        <T
          key={i}
          x={cx}
          y={180 + i * 19}
          size={11.5}
          fill={i === 0 ? INK : i === lines.length - 1 ? lastColor : INK}
          weight={i === 0 || i === lines.length - 1 ? 700 : 400}
        >
          {l}
        </T>
      ))}
    </Fade>
  );

  const ThreeBonds = ({ cx, on, delay }: { cx: number; on: boolean; delay: number }) => (
    <Draw
      on={on}
      delay={delay}
      d={`${bondD(cx, 140, cx, 108)} ${bondD(cx, 140, cx - 26, 160)} ${bondD(cx, 140, cx + 26, 160)}`}
      stroke={INK}
      sw={2}
      dur={0.6}
    />
  );

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={25} fill={RED} script>
          {t("The reactive intermediates", "Reactive intermediates")}
        </T>
      </Fade>

      {/* beat 1 — cation + anion icons */}
      <Draw on={beat >= 1} delay={dl(1, 0.2)} d={`${bondD(150, 140, 150, 108)} ${bondD(150, 140, 124, 160)} ${bondD(150, 140, 176, 160)}`} stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={175} y={118} size={15} fill={INK} weight={700}>
          +
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.1)} d={`${bondD(400, 140, 400, 108)} ${bondD(400, 140, 374, 160)} ${bondD(400, 140, 426, 160)}`} stroke={INK} sw={2} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 1.7)}>
        <Circle cx={418} cy={104} r={2.2} fill={INK} />
        <Circle cx={428} cy={104} r={2.2} fill={INK} />
        <T x={425} y={122} size={15} fill={INK} weight={700}>
          −
        </T>
      </Fade>

      {/* beat 2 — cation stats */}
      <Stats
        cx={150}
        on={beat >= 2}
        delay={dl(2, 0.2)}
        lines={["R₃C⁺", t("sextet, sp², planar", "sextet, sp², planar"), t("empty p orbital", "empty p orbital"), t("electron-deficient", "electron-deficient"), t("electrophilic", "electrophilic")]}
        lastColor={RED}
      />

      {/* beat 3 — anion stats */}
      <Stats
        cx={400}
        on={beat >= 3}
        delay={dl(3, 0.2)}
        lines={["R₃C⁻", t("octet + lone pair, sp³", "octet + lone pair, sp³"), t("pyramidal", "pyramidal"), t("electron-rich", "electron-rich"), t("nucleophilic", "nucleophilic")]}
        lastColor={GREEN}
      />

      {/* beat 4 — free radical, icon + stats */}
      <ThreeBonds cx={650} on={beat >= 4} delay={dl(4, 0.2)} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <Circle cx={672} cy={108} r={2.4} fill={INK} />
        <Stats
          cx={650}
          on={true}
          delay={0}
          lines={["R₃C•", t("neutral, odd e⁻", "neutral, odd e⁻"), t("~sp², near-planar", "~sp², near-planar"), t("paramagnetic", "paramagnetic"), t("short-lived, reactive", "short-lived, reactive")]}
          lastColor={INK}
        />
      </Fade>

      {/* beat 5 — carbene, icon + stats */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.2)}
        d={`${bondD(900, 140, 874, 160)} ${bondD(900, 140, 926, 160)}`}
        stroke={INK}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <Circle cx={894} cy={108} r={2.2} fill={INK} />
        <Circle cx={906} cy={108} r={2.2} fill={INK} />
      </Fade>
      <Stats
        cx={900}
        on={beat >= 5}
        delay={dl(5, 0.9)}
        lines={[":CR₂", t("neutral, sextet", "neutral, sextet"), t("divalent C", "divalent C"), t("singlet / triplet", "singlet / triplet"), t("highly reactive", "highly reactive")]}
        lastColor={INK}
      />

      {/* beat 6 — don't swap planar and pyramidal */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 60 290 L 60 320" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={308} size={15} fill={RED} script anchor="start">
          {t(
            "cation is sp² PLANAR (empty p); carbanion is sp³ PYRAMIDAL (lone pair) — don't swap",
            "cation sp² PLANAR (empty p); carbanion sp³ PYRAMIDAL (lone pair) — swap mat karo"
          )}
        </T>
      </Fade>

      {/* beat 7 — the next question */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={345} size={14} fill={INK} weight={700}>
          {t("four actors — the next question: which is most stable?", "chaar actors — agla sawaal: kaunsa sabse stable?")}
        </T>
      </Fade>
    </Scene>
  );
}
