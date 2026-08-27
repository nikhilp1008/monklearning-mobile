/**
 * Ch02 · Section 31 — "The symmetry of a vertical throw"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.8, 26.1, 38.6, 63.4, 76.7, 96.9, 121.8]):
 *  0 title
 *  1 picture: hand line, up shaft, apex arc, down shaft
 *  2 u labels on both arrows + green time brackets underneath
 *  3 symmetry chip: returns at exactly u
 *  4 results card: H = u²/2g · t_up = u/g · T = 2u/g
 *  5 green: equal brackets — solve up, double it
 *  6 red note + apex chip: v = 0 but a = g
 *  7 red: never weightless — the zero-velocity trap
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  hand M260,400 H490 · up arrow (300,390)→(300,170) · arc M300,170 Q375,110 450,170 ·
 *  down arrow (450,170)→(450,390) · "u" labels (285,290) end / (467,290) st ·
 *  brackets M270,420 v8 h90 v-8 · M390,420 v8 h90 v-8 · labels cx315/cx435 bl 452
 *  b3 | chip x600..1040 y120..156 · sub cx820 bl 182
 *  b4 | card x600..1040 y210..330 (bl 244/280/316)
 *  b5 | lines cx820 bl 360 / 386
 *  b6 | apex chip x315..435 y82..110 · bar x66 y480..532 · lines st x84 bl 500 / 526
 *  b7 | bar x66 y545..590 · lines st x84 bl 560 / 584
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
  arrowD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec31({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — feel it in the bones */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={23} fill={INK} script>
          {t(
            "the vertical throw — symmetry for free",
            "seedha upar phenko — symmetry muft mein"
          )}
        </T>
      </Fade>

      {/* beat 1 — the flight */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d="M 260 400 H 490 M 290 400 l -10 12 M 350 400 l -10 12 M 410 400 l -10 12 M 470 400 l -10 12"
        stroke={INK}
        sw={2.2}
        dur={0.8}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.2)}
        d={arrowD(300, 390, 300, 170)}
        stroke={GREEN}
        sw={3}
        dur={1}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.6)}
        d="M 300 170 Q 375 110 450 170"
        stroke={MUTED}
        sw={1.8}
        dur={0.7}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 4.6)}
        d={arrowD(450, 170, 450, 390)}
        stroke={RED}
        sw={3}
        dur={1}
      />

      {/* beat 2 — labels and the two halves */}
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={285} y={290} size={16} fill={GREEN} anchor="end" weight={800}>
          u
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={467} y={290} size={16} fill={RED} anchor="start" weight={800}>
          u
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 4)}
        d="M 270 420 v 8 h 90 v -8"
        stroke={GREEN}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 5)}
        d="M 390 420 v 8 h 90 v -8"
        stroke={GREEN}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={315} y={452} size={12} fill={GREEN} script>
          {t("time up", "chadhne ka samay")}
        </T>
        <T x={435} y={452} size={12} fill={GREEN} script>
          {t("time down", "girne ka samay")}
        </T>
      </Fade>

      {/* beat 3 — exactly, not roughly */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <Chip x={600} y={120} w={440} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN} size={13}>
          {t(
            "returns with EXACTLY the speed it left: u",
            "jis speed se gaya, THEEK usi se lauta: u"
          )}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 8)}>
        <T x={820} y={182} size={11} fill={MUTED} script>
          {t(
            "gravity refunds speed at the same rate it charged it",
            "gravity jis raftaar se speed leti hai, usi se lautaati hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — the three results */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d="M 612 210 h 416 q 12 0 12 12 v 96 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -96 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.4}
        dur={0.8}
      />
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={820} y={244} size={16} fill={INK} weight={700}>
          H_max = u² ⁄ 2g
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={820} y={280} size={16} fill={INK} weight={700}>
          t_up = u ⁄ g
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={820} y={316} size={16} fill={INK} weight={700}>
          T_flight = 2u ⁄ g
        </T>
      </Fade>

      {/* beat 5 — double it */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={820} y={360} size={12} fill={GREEN} script>
          {t(
            "time up = time down — the brackets match exactly",
            "chadhna = girna — brackets bilkul barabar"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={820} y={386} size={12} fill={GREEN} script>
          {t(
            "so solve the way up, then DOUBLE it",
            "isliye sirf chadhaai hal karo, phir DUGNA"
          )}
        </T>
      </Fade>

      {/* beat 6 — the trap inside the elegance */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <Chip x={315} y={82} w={120} h={28} fill={CREAM} stroke={AMBER} textFill={INK} size={13} script={false}>
          v = 0
        </Chip>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.5)} d="M 66 480 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 3.3)}>
        <T x={84} y={500} size={14} fill={RED} script anchor="start">
          {t(
            "at the top v = 0 — but a is still a FULL g, unchanged",
            "choti par v = 0 — par a ab bhi POORA g hai, jyon ka tyon"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={84} y={526} size={14} fill={RED} script anchor="start">
          {t(
            "saw v = 0? do NOT write a = 0",
            "v = 0 dikha? a = 0 MAT likho"
          )}
        </T>
      </Fade>

      {/* beat 7 — never weightless */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 545 v 46" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={562} size={13} fill={RED} script anchor="start">
          {t(
            "it never hangs weightless — it is accelerating the whole time it looks paused",
            "woh kabhi bhaar-heen nahi latakta — jab tak ruka dikhta hai, accelerate ho raha hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={586} size={13} fill={RED} script anchor="start">
          {t(
            "the zero-velocity trap — and free fall is where exams love to set it",
            "zero-velocity trap — aur free fall hi exams ki pasandeeda jagah hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
