/**
 * Ch03 · Section 52 — "Pro-tip: two channels, linked only by time"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.8, 22.6, 33.3, 44.7, 50.4, 62.9, 74.5]):
 *  0 heading
 *  1 horizontal channel chip + formula
 *  2 vertical channel chip + formula
 *  3 workflow: vertical → T → horizontal
 *  4 shortcuts header
 *  5 the shortcut rows
 *  6 recognition = speed
 *  7 mnemonic hero
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | chip x110 y96 w330 h38 · formula st x130 bl 168 s14
 *  b2 | chip x610 y96 w340 h38 · formula st x630 bl 168 s14
 *  b3 | arrows (330,200)→(330,240) / (620,240)→(620,200)?? → workflow line cx540 bl 232 s12 ·
 *       underline M280 242 h520
 *  b4 | header st x84 bl 288 s13 · underline M84 296 h300
 *  b5 | st x104 bl 324 / 352 / 380 s13
 *  b6 | green st x570 bl 324 / 348 s12
 *  b7 | box x280 y440 w520 h52 text cx540 bl 472 s15
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
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch03Sec52({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "PRO-TIP — two channels, linked only by time",
            "PRO-TIP — do channels, sirf time se jude"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — the horizontal channel */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <Chip x={110} y={96} w={330} h={38} fill={CREAM} stroke={AMBER_DARK} textFill={AMBER_DARK} size={14}>
          {t("HORIZONTAL — it just coasts", "HORIZONTAL — bas behta hai")}
        </Chip>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4)}>
        <T x={130} y={168} size={14} fill={INK} weight={700} anchor="start">
          x = u cosθ · t
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 7)}>
        <T x={130} y={192} size={11} fill={MUTED} script anchor="start">
          {t("the entire sideways story", "sideways ki poori kahani")}
        </T>
      </Fade>

      {/* beat 2 — the vertical channel */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <Chip x={610} y={96} w={340} h={38} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14}>
          {t("VERTICAL — pure free fall", "VERTICAL — shuddh free fall")}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={630} y={168} size={14} fill={INK} weight={700} anchor="start">
          y = u sinθ · t − ½ g t²
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={630} y={192} size={11} fill={MUTED} script anchor="start">
          {t("all the rising and falling lives here", "saara uthna-girna yahin rehta hai")}
        </T>
      </Fade>

      {/* beat 3 — the workflow */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={540} y={232} size={12} fill={INK} script>
          {t(
            "workflow: get T from the VERTICAL channel → feed it to the HORIZONTAL for range",
            "workflow: T ko VERTICAL channel se nikaalo → HORIZONTAL mein daal kar range lo"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 3} delay={dl(3, 2.2)} d="M 280 242 h 520" stroke={AMBER} sw={1.8} dur={0.6} />

      {/* beat 4 — shortcuts header */}
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={84} y={288} size={13} fill={INK} script anchor="start">
          {t("KEEP THE SHORTCUTS HANDY", "SHORTCUTS haath ke paas rakho")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.4)} d="M 84 296 h 300" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 5 — the shortcut rows */}
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={104} y={324} size={13} fill={INK} weight={700} anchor="start">
          R max = 4 H max   (at 45°)
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3)}>
        <T x={104} y={352} size={13} fill={INK} weight={700} anchor="start">
          R = 4 H cotθ
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 6)}>
        <T x={104} y={380} size={13} fill={INK} weight={700} anchor="start">
          {t(
            "θ and (90° − θ) share a range",
            "θ aur (90° − θ) ki range ek hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — recognition */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={570} y={324} size={12} fill={GREEN} script anchor="start">
          {t(
            "spot one of these → a full calculation collapses into a one-liner",
            "inmein se ek dikha → poori calculation ek line mein simat jaati hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={570} y={348} size={12} fill={INK} script anchor="start">
          {t(
            "that recognition separates fast solvers from slow ones",
            "yahi pehchan tez aur dheeme solver ka fark hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the mnemonic */}
      <Draw
        on={beat >= 7}
        delay={dl(7, 0.6)}
        d="M 292 440 h 496 q 12 0 12 12 v 28 q 0 12 -12 12 h -496 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={540} y={472} size={15} fill={GREEN} weight={800} script>
          {t(
            "Horizontal coasts, vertical falls — time ties them together",
            "Horizontal behta hai, vertical girta hai — time dono ko baandhta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
