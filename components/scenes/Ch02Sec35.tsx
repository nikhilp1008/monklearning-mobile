/**
 * Ch02 · Section 35 — "Derivation 3: v² = u² + 2as, eliminating time"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 21.5, 29.7, 30.7, 31.7, 47.1, 58.7, 83.5]):
 *  0 title + why line
 *  1 goal chip: kill the dt
 *  2 chain-rule lines: a = v·dv/ds ⇒ v dv = a ds
 *  3 integral line
 *  4 evaluate line
 *  5 result box: v² = u² + 2as (no t anywhere)
 *  6 red note: stopping distances
 *  7 green: know them by what each leaves out
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | sub cx540 bl 86 · b1 chip x330..750 y105..140
 *  left col st x110: b2 bl 185 / 220 / 255 · note bl 285 · b3 bl 325 · b4 bl 365
 *  b5 | box x620..1000 y180..245 (formula bl 222, underline y232) · sub cx810 bl 268
 *  b6 | bar x620 y300..352 · lines st x636 bl 320 / 344
 *  b7 | bar x66 y412..496 · lines st x84 bl 432 / 462 / 490
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

export default function Ch02Sec35({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — why this one exists */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={22} fill={INK} script>
          {t(
            "Derivation 3 — v² = u² + 2as, eliminating time",
            "Derivation 3 — v² = u² + 2as, samay ko hataakar"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 6)}>
        <T x={540} y={86} size={12} fill={MUTED} script>
          {t(
            "speeds and distances given — time neither given nor wanted",
            "speed aur doori di hain — samay na diya hai, na chahiye"
          )}
        </T>
      </Fade>

      {/* beat 1 — the goal */}
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <Chip x={330} y={105} w={420} h={35} fill={CREAM} stroke={AMBER} textFill={AMBER_DARK} size={13}>
          {t("goal: a relation with NO t — kill the dt", "lakshya: bina t ka rishta — dt ko maaro")}
        </Chip>
      </Fade>

      {/* beat 2 — the chain-rule move */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={110} y={185} size={15} fill={INK} anchor="start" weight={700}>
          a = dv⁄dt = (dv⁄ds)·(ds⁄dt)
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={110} y={220} size={15} fill={INK} anchor="start" weight={700}>
          {t("but ds⁄dt = v  ⇒  a = v·dv⁄ds", "par ds⁄dt = v  ⇒  a = v·dv⁄ds")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 14)}>
        <T x={110} y={255} size={15} fill={INK} anchor="start" weight={700}>
          ⇒ v dv = a ds
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 18)}>
        <T x={110} y={285} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "dt has vanished — time traded for position",
            "dt gayab — samay ke badle position"
          )}
        </T>
      </Fade>

      {/* beat 3 — integrate with the right limits */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={110} y={325} size={15} fill={INK} anchor="start" weight={700}>
          {t("∫ v dv from u to v = ∫ a ds from 0 to s", "∫ v dv, u se v = ∫ a ds, 0 se s")}
        </T>
      </Fade>

      {/* beat 4 — evaluate */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={110} y={365} size={15} fill={INK} anchor="start" weight={700}>
          (v² − u²) ⁄ 2 = a·s
        </T>
      </Fade>

      {/* beat 5 — equation three */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 632 180 h 356 q 12 0 12 12 v 41 q 0 12 -12 12 h -356 q -12 0 -12 -12 v -41 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.8)}>
        <T x={810} y={222} size={24} fill={INK} weight={800}>
          v² = u² + 2as
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 3.5)}
        d="M 706 232 h 208"
        stroke={GREEN}
        sw={2}
        dur={0.5}
      />
      <Fade on={beat >= 5} delay={dl(5, 5.5)}>
        <T x={810} y={268} size={11} fill={MUTED} script>
          {t("no t anywhere in it", "ismein t kahin nahi hai")}
        </T>
      </Fade>

      {/* beat 6 — the payoff */}
      <Draw on={beat >= 6} delay={dl(6, 0.8)} d="M 620 300 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={636} y={320} size={12} fill={RED} script anchor="start">
          {t(
            "links v and u straight to s — time sidestepped entirely",
            "v aur u ko seedha s se jodta hai — samay ko ghuma ke"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={636} y={344} size={12} fill={RED} script anchor="start">
          {t(
            "perfect for stopping distances: brakes + how far? one line",
            "stopping distance ke liye behtareen: brake + kitni door? ek line"
          )}
        </T>
      </Fade>

      {/* beat 7 — know them by their absences */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 66 412 v 84" stroke={GREEN} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={84} y={432} size={13} fill={GREEN} script anchor="start">
          {t(
            "know the three by what each LEAVES OUT:",
            "teeno ko is se pehchano ki har ek kya CHHODTA hai:"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 6)}>
        <T x={84} y={462} size={15} fill={INK} anchor="start" weight={700}>
          {t("eq 1: no s · eq 2: no v · eq 3: no t", "eq 1: s nahi · eq 2: v nahi · eq 3: t nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 12)}>
        <T x={84} y={490} size={13} fill={GREEN} script anchor="start">
          {t(
            "match the equation to what the question refuses to give you",
            "equation ko us cheez se milao jo sawaal dene se mana karta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
