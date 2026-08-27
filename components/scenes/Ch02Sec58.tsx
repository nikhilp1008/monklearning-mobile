/**
 * Ch02 · Section 58 — "This is where kinematics grows up"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.7, 32.5, 54.8, 71.3, 84.5, 101.9, 117.5, 118.5]):
 *  0 title
 *  1 three equation chips + red dashed stamp box
 *  2 red note: traps, not approximations
 *  3 panel 1: parachutist — a(v)
 *  4 panel 2: charge near plate — a(x)
 *  5 panel 3: rocket — a(t)
 *  6 line: go back to what generated the shortcut
 *  7 definition cards: v = dx/dt · a = dv/dt
 *  8 green: integrate honestly
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  chips cx240/540/840 y85..118 · stamp rect x120..960 y75..130 dashed ·
 *  stamp label cx540 bl 152
 *  b2 | bar x66 y172..224 · lines st x84 bl 192 / 218
 *  panels: headers bl 268 cx220/540/860 · glyphs y280..365 · captions bl 390
 *  b6 line cx540 bl 425
 *  b7 cards x160..500 / x580..920 y445..505 (bl 483) · sub cx540 bl 530
 *  b8 | bar x56 y550..590 · line st x72 bl 574
 */

import React from "react";
import { Path } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  arrowD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec58({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — growing up */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={23} fill={INK} script>
          {t(
            "this is where kinematics grows up",
            "yahin kinematics bada hota hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — the three, stamped */}
      {["v = u + at", "s = ut + ½at²", "v² = u² + 2as"].map((f, i) => (
        <Fade key={i} on={beat >= 1} delay={dl(1, 0.8 + i * 1.4)}>
          <Chip
            x={140 + i * 300}
            y={85}
            w={200}
            h={33}
            fill={CREAM}
            stroke={INK}
            textFill={INK}
            size={14}
            script={false}
          >
            {f}
          </Chip>
        </Fade>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <Path
          d="M 120 75 H 960 V 130 H 120 Z"
          fill="none"
          stroke={RED}
          strokeWidth={1.8}
          strokeDasharray="8 6"
        />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={540} y={152} size={12} fill={RED} script>
          {t("stamped in red: CONSTANT a ONLY", "laal stamp: SIRF CONSTANT a")}
        </T>
      </Fade>

      {/* beat 2 — traps, not approximations */}
      <Draw on={beat >= 2} delay={dl(2, 0.8)} d="M 66 172 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={84} y={192} size={13} fill={RED} script anchor="start">
          {t(
            "when a changes with time, speed or position they become TRAPS — not approximations",
            "jab a samay, speed ya jagah se badle to yeh TRAP ban jaate hain — approximation nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 10)}>
        <T x={84} y={218} size={13} fill={RED} script anchor="start">
          {t(
            "they hand you a clean, confident, completely wrong number",
            "yeh ek saaf, aatmavishwaasi, poori tarah galat number thama dete hain"
          )}
        </T>
      </Fade>

      {/* beat 3 — the parachutist: a(v) */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={220} y={268} size={12} fill={AMBER_DARK} script>
          {t("a depends on VELOCITY", "a VELOCITY par nirbhar")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 2)}
        d="M 150 300 q 70 -50 140 0 M 160 302 L 210 350 M 280 302 L 230 350 M 212 356 a 8 8 0 1 0 16 0 a 8 8 0 1 0 -16 0"
        stroke={INK}
        sw={2}
        dur={1.2}
      />
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={220} y={390} size={11} fill={MUTED} script>
          {t("more speed → more drag → less a", "zyada speed → zyada drag → kam a")}
        </T>
      </Fade>

      {/* beat 4 — the charge: a(x) */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={540} y={268} size={12} fill={AMBER_DARK} script>
          {t("a depends on POSITION", "a POSITION par nirbhar")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 2)}
        d="M 640 285 V 365 M 648 285 V 365 M 452 325 a 8 8 0 1 0 16 0 a 8 8 0 1 0 -16 0"
        stroke={INK}
        sw={2}
        dur={0.9}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 3.2)}
        d={arrowD(478, 325, 620, 325)}
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 4.5)}>
        <T x={540} y={390} size={11} fill={MUTED} script>
          {t("nearer the plate → bigger push", "plate ke paas → zyada dhakka")}
        </T>
      </Fade>

      {/* beat 5 — the rocket: a(t) */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={860} y={268} size={12} fill={AMBER_DARK} script>
          {t("a depends on TIME", "a TIME par nirbhar")}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 2)}
        d="M 845 358 v -50 l 15 -22 l 15 22 v 50 z M 850 364 l 5 12 M 867 364 l 5 12 M 858 364 l 3 16"
        stroke={INK}
        sw={2}
        dur={1}
      />
      <Fade on={beat >= 5} delay={dl(5, 3.5)}>
        <T x={860} y={390} size={11} fill={MUTED} script>
          {t("fuel burns → lighter → more a", "fuel jalta → halka → zyada a")}
        </T>
      </Fade>

      {/* beat 6 — go back to the source */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={540} y={425} size={13} fill={INK} script>
          {t(
            "when a shortcut expires, go back to what generated it",
            "jab shortcut ki miyaad khatam ho, wahan lauto jahan se woh bana tha"
          )}
        </T>
      </Fade>

      {/* beat 7 — the safe ground */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.6)}
        d="M 172 445 h 316 q 12 0 12 12 v 36 q 0 12 -12 12 h -316 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.8)}>
        <T x={330} y={483} size={20} fill={INK} weight={800}>
          v = dx⁄dt
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 3.5)}
        d="M 592 445 h 316 q 12 0 12 12 v 36 q 0 12 -12 12 h -316 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 4.7)}>
        <T x={750} y={483} size={20} fill={INK} weight={800}>
          a = dv⁄dt
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={540} y={530} size={11} fill={GREEN} script>
          {t(
            "no stamps — true for EVERY motion: the safe ground under the whole chapter",
            "koi stamp nahi — HAR motion ke liye sach: poore chapter ki pakki zameen"
          )}
        </T>
      </Fade>

      {/* beat 8 — one sentence */}
      <Draw on={beat >= 8} delay={dl(8, 0.8)} d="M 56 550 v 40" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={72} y={574} size={13} fill={GREEN} script anchor="start">
          {t(
            "the whole sub-topic in one sentence: stop leaning on the formula — integrate honestly",
            "poora sub-topic ek vaakya mein: formula ka sahara chhodo — imaandaari se integrate karo"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
