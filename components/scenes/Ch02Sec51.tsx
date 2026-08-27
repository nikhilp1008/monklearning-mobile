/**
 * Ch02 · Section 51 — "The definition and the rules it generates"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.3, 23.4, 35.6, 50, 59.7, 75.2, 100, 116.8]):
 *  0 title
 *  1 definition card
 *  2 relative-acceleration card
 *  3 antisymmetry card
 *  4 1-D rules chip
 *  5 the two rule lines
 *  6 red note: same subtraction, signs decide
 *  7 free-fall card: a_rel = 0
 *  8 red note: units unchanged — the two trains again
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  cards: b1 x80..520 y90..165 (bl 128 · sub bl 152) · b2 x560..1000 y90..165 ·
 *  b3 x80..520 y185..255 (bl 222 · sub bl 246) · b4 chip x560..1000 y185..230 ·
 *  b5 lines st x580 bl 260 / 288
 *  b6 | bar x66 y300..372 · lines st x84 bl 320 / 344 / 368
 *  b7 | card x80..640 y400..470 (bl 428 · sub bl 454)
 *  b8 | bar x66 y500..556 · lines st x84 bl 520 / 546
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec51({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — an unusually short sheet */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={23} fill={INK} script>
          {t(
            "the sheet — short, because it all flows from line one",
            "sheet — chhoti, kyunki sab pehli line se nikalta hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — the definition */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 92 90 h 416 q 12 0 12 12 v 51 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -51 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={300} y={128} size={20} fill={INK} weight={800}>
          v_AB = v_A − v_B
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={300} y={152} size={11} fill={MUTED} script>
          {t("first = watched · second = watching", "pehla = jise dekha · doosra = jo dekhe")}
        </T>
      </Fade>

      {/* beat 2 — one differentiation later */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.6)}
        d="M 572 90 h 416 q 12 0 12 12 v 51 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -51 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.8)}>
        <T x={780} y={128} size={20} fill={INK} weight={800}>
          a_AB = a_A − a_B
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={780} y={152} size={11} fill={MUTED} script>
          {t("same structure, one d⁄dt later", "wahi dhaancha, ek d⁄dt baad")}
        </T>
      </Fade>

      {/* beat 3 — antisymmetry */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.6)}
        d="M 92 185 h 416 q 12 0 12 12 v 46 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -46 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.7}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={300} y={222} size={18} fill={INK} weight={800}>
          v_AB = − v_BA
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={300} y={246} size={11} fill={AMBER_DARK} script>
          {t("swap → flip sign — your free check", "palto → sign palte — muft jaanch")}
        </T>
      </Fade>

      {/* beat 4 — the working rules */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <Chip x={560} y={185} w={440} h={36} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={13}>
          {t(
            "1-D working rules — after fixing +",
            "1-D ke working rules — + tay karne ke baad"
          )}
        </Chip>
      </Fade>

      {/* beat 5 — the two lines */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={580} y={260} size={14} fill={INK} anchor="start" weight={700}>
          {t("same direction: |v_A − v_B|", "ek disha: |v_A − v_B|")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={580} y={288} size={14} fill={INK} anchor="start" weight={700}>
          {t("opposite: |v_A| + |v_B|", "ulti disha: |v_A| + |v_B|")}
        </T>
      </Fade>

      {/* beat 6 — the arithmetic remembers */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 66 300 v 74" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={320} size={13} fill={RED} script anchor="start">
          {t("but they are NOT two rules — the same subtraction:", "par yeh do rules NAHI — wahi ek ghatav:")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={84} y={344} size={13} fill={RED} script anchor="start">
          {t(
            "opposite directions carry opposite signs — the − hits a negative and becomes +",
            "ulti dishaon ke sign ulte hote hain — − ek negative se takraakar + ban jaata hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 13)}>
        <T x={84} y={368} size={13} fill={RED} script anchor="start">
          {t(
            "sign the velocities first — the arithmetic remembers for you",
            "pehle velocities ko sign do — hisaab tumhaare liye yaad rakhega"
          )}
        </T>
      </Fade>

      {/* beat 7 — the shortcut, filed */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.6)}
        d="M 92 400 h 536 q 12 0 12 12 v 46 q 0 12 -12 12 h -536 q -12 0 -12 -12 v -46 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.7}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.8)}>
        <T x={360} y={428} size={14} fill={INK} weight={700}>
          {t("both free-falling: a_rel = −g − (−g) = 0", "dono free fall mein: a_rel = −g − (−g) = 0")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={360} y={454} size={11} fill={GREEN} script>
          {t("zero relative a → no t² term → no quadratic", "zero relative a → t² gayab → quadratic gayab")}
        </T>
      </Fade>

      {/* beat 8 — grounded */}
      <Draw on={beat >= 8} delay={dl(8, 0.8)} d="M 66 500 v 56" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={520} size={13} fill={RED} script anchor="start">
          {t(
            "units and dimensions unchanged: still m/s, still [L T⁻¹]",
            "units aur dimensions waise hi: ab bhi m/s, ab bhi [L T⁻¹]"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <T x={84} y={546} size={13} fill={RED} script anchor="start">
          {t(
            "an ordinary velocity from a different vantage point — the two trains again",
            "bas ek aam velocity, alag nazariye se — phir wahi do trains"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
