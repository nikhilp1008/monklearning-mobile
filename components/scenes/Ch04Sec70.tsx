/**
 * Ch04 · Section 70 — "The string keeps a rigid promise, and that promise is the constraint"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 24.83, 43.61, 68.44, 86.95, 107.26, 132.1, 156.93]):
 *  0 title
 *  1 diagram: pulley + two blocks, down-one/up-one indicator arrows, caption
 *  2 text: real machines are connected bodies — lift+counterweight, crane, tow-truck, wagons
 *  3 text: no new physics — Newton's 2nd law per body + one new idea, the constraint
 *  4 red margin: inextensible string — one down 1cm, other up 1cm, always
 *  5 formula box: a1 = a2 = a — single fixed pulley, equal magnitudes
 *  6 the universal recipe: 5-step list, two columns
 *  7 red margin: count the string — 4 unknowns collapse to 2, movable pulleys preview
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · b2/b3 st x84 bl 92 / 116
 *  b1 diagram (right col): pulley c(820,100) r18 · block A x745..800 y140..175 ·
 *    block B x845..900 y140..175 · arr A x725 y140..175 lbl (715,160) ·
 *    arr B x920 y175..140 lbl (928,160) · caption cx820 bl 235
 *  b4 | bar x66 y260..330 · lines st x84 bl 280 / 306
 *  b5 box x300..780 y350..392 bl 378
 *  b6 head cx540 bl 410 · L st x84 bl 434/458/482 · R st x560 bl 434/458
 *  b7 | bar x66 y520..590 · lines st x84 bl 540 / 566
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  ringD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec70({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t(
            "the string keeps a rigid promise — that promise is the constraint",
            "string ek kadaa vaada nibhaati hai — wahi vaada constraint hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — diagram: pulley + two blocks */}
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d={ringD(820, 100, 18, 18)} stroke={INK} sw={2.2} dur={0.5} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.2)}
        d="M 806 112 L 772 140"
        stroke={INK}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.6)}
        d="M 834 112 L 868 140"
        stroke={INK}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.2)}
        d="M 745 140 h 55 v 35 h -55 z"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.8)}
        d="M 845 140 h 55 v 35 h -55 z"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.6)}
        d={arrowD(725, 140, 725, 175)}
        stroke={GREEN}
        sw={2.4}
        dur={0.3}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 4.2)}
        d={arrowD(920, 175, 920, 140)}
        stroke={GREEN}
        sw={2.4}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 4.8)}>
        <T x={715} y={160} size={11} fill={GREEN} weight={700} anchor="end">
          {t("↓ 1 cm", "↓ 1 cm")}
        </T>
        <T x={928} y={160} size={11} fill={GREEN} weight={700} anchor="start">
          {t("↑ 1 cm", "↑ 1 cm")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.6)}>
        <T x={820} y={235} size={11} fill={MUTED} script>
          {t(
            "what one side of the string gives, the other side takes",
            "string ki ek taraf jo deti, doosri taraf wahi leti"
          )}
        </T>
      </Fade>

      {/* beat 2 — connected bodies */}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "lift+counterweight, crane, tow-truck, coupled wagons — all CONNECTED",
            "lift+counterweight, crane, tow-truck, jude wagons — sab CONNECTED"
          )}
        </T>
      </Fade>

      {/* beat 3 — no new physics */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "no new physics — Newton's 2nd law per body + one new idea: the constraint",
            "koi nayi physics nahi — Newton ka 2nd law har body par + ek naya idea: constraint"
          )}
        </T>
      </Fade>

      {/* beat 4 — the constraint itself */}
      <Draw on={beat >= 4} delay={dl(4, 0.6)} d="M 66 260 v 70" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={84} y={280} size={14} fill={RED} script anchor="start">
          {t(
            "inextensible string: whatever length leaves one side arrives on the other",
            "inextensible string: jitni lambaai ek taraf jaati, utni doosri taraf aati"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 7)}>
        <T x={84} y={306} size={14} fill={RED} script anchor="start">
          {t(
            "one block down 1 cm → the other up EXACTLY 1 cm — always",
            "ek block 1 cm neeche → doosra THEEK 1 cm upar — hamesha"
          )}
        </T>
      </Fade>

      {/* beat 5 — the formula */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 312 350 h 456 q 12 0 12 12 v 18 q 0 12 -12 12 h -456 q -12 0 -12 -12 v -18 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={540} y={378} size={15} fill={INK} weight={800}>
          a₁ = a₂ = a — single fixed pulley, equal magnitudes
        </T>
      </Fade>

      {/* beat 6 — the universal recipe */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={410} size={14} fill={AMBER_DARK} script>
          {t(
            "the universal recipe — use it for every connected-body problem",
            "universal vidhi — har connected-body problem ke liye"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={84} y={434} size={13} fill={INK} script anchor="start">
          {t("1. decide the direction of motion", "1. motion ki disha tay karo")}
        </T>
        <T x={84} y={458} size={13} fill={INK} script anchor="start">
          {t("2. FBD of each body, separately", "2. har body ka FBD, alag-alag")}
        </T>
        <T x={84} y={482} size={13} fill={INK} script anchor="start">
          {t("3. ΣF = ma per body, motion = positive", "3. har body ke liye ΣF = ma, motion = positive")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 8)}>
        <T x={560} y={434} size={13} fill={INK} script anchor="start">
          {t("4. add the constraint linking a's", "4. a's ko jodne waala constraint daalo")}
        </T>
        <T x={560} y={458} size={13} fill={INK} script anchor="start">
          {t("5. solve together for a and T", "5. a aur T ke liye saath hal karo")}
        </T>
      </Fade>

      {/* beat 7 — count the string */}
      <Draw on={beat >= 7} delay={dl(7, 0.6)} d="M 66 520 v 70" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={540} size={14} fill={RED} script anchor="start">
          {t(
            "count the string: one fixed pulley locks 4 unknowns down to 2",
            "string ginno: ek fixed pulley 4 unknowns ko 2 tak baandh deta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={566} size={14} fill={GREEN} script anchor="start">
          {t(
            "movable pulleys make a richer promise — same idea, more string to count",
            "movable pulleys zyada mahaan vaada karte — wahi idea, zyada string ginni"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
