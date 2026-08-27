/**
 * Ch02 · Section 50 — "Procedure B: approach, separation, and crossing lengths"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.6, 30.3, 50.8, 68.4, 90.1, 114.9, 115.9]):
 *  0 title
 *  1 head-on row: gap closes at the sum
 *  2 apart + chase rows
 *  3 one-liner card: t = separation / closing speed
 *  4 picture: fronts touch, tails not clear
 *  5 red note: crossing = L₁ + L₂
 *  6 discipline list: pole / train / platform
 *  7 green: deciding the distance is the skill
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  rows y110/150/190: arrows x120..400 · labels st x430 bl 116/156/196
 *  b3 card x250..830 y225..285 (bl 262)
 *  trains y330..380: x150..430 / x430..710 · L labels bl 322 · note cx430 bl 410
 *  b5 | bar x66 y435..488 · lines st x84 bl 454 / 480
 *  b6 | lines st x84 bl 512 / 536
 *  b7 | bar x56 y552..592 · line st x72 bl 572
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
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec50({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the quick method */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={23} fill={INK} script>
          {t(
            "the quick method — gap ÷ closing speed",
            "tez tareeka — gap ÷ paas aane ki speed"
          )}
        </T>
      </Fade>

      {/* beat 1 — head-on */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d={arrowD(120, 110, 220, 110)}
        stroke={INK}
        sw={2.4}
        dur={0.4}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.4)}
        d={arrowD(400, 110, 300, 110)}
        stroke={INK}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={430} y={116} size={12} fill={INK} script anchor="start">
          {t(
            "head-on: the gap closes at v₁ + v₂ — both eat the same gap, from both ends",
            "aamne-saamne: gap v₁ + v₂ se band hota hai — dono wahi gap khaate hain"
          )}
        </T>
      </Fade>

      {/* beat 2 — apart and chasing */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d={arrowD(220, 150, 120, 150)}
        stroke={INK}
        sw={2.4}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.4)}
        d={arrowD(300, 150, 400, 150)}
        stroke={INK}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 2.4)}>
        <T x={430} y={156} size={12} fill={INK} script anchor="start">
          {t("moving apart: the gap grows, also at v₁ + v₂", "door jaate: gap badhta hai, wahi v₁ + v₂ se")}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 6)}
        d={arrowD(120, 190, 220, 190)}
        stroke={INK}
        sw={2.4}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 6.6)}
        d={arrowD(300, 190, 380, 190)}
        stroke={INK}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 7.6)}>
        <T x={430} y={196} size={12} fill={INK} script anchor="start">
          {t("chasing (same way): the gap changes at |v₁ − v₂|", "peechha (ek disha): gap |v₁ − v₂| se badalta hai")}
        </T>
      </Fade>

      {/* beat 3 — the one-liner */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.6)}
        d="M 262 225 h 556 q 12 0 12 12 v 36 q 0 12 -12 12 h -556 q -12 0 -12 -12 v -36 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.8)}>
        <T x={540} y={262} size={16} fill={INK} weight={700}>
          {t(
            "t_meet = initial separation ⁄ closing speed",
            "t_meet = shuruaati doori ⁄ paas aane ki speed"
          )}
        </T>
      </Fade>

      {/* beat 4 — the word 'meet' hides a trap */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d="M 160 330 h 250 q 20 0 20 25 q 0 25 -20 25 h -250 q -10 0 -10 -10 v -30 q 0 -10 10 -10"
        stroke={INK}
        sw={2}
        dur={1}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 2.2)}
        d="M 700 330 h -250 q -20 0 -20 25 q 0 25 20 25 h 250 q 10 0 10 -10 v -30 q 0 -10 -10 -10"
        stroke={INK}
        sw={2}
        dur={1}
      />
      <Fade on={beat >= 4} delay={dl(4, 3.4)}>
        <T x={290} y={322} size={13} fill={INK} weight={700}>
          L₁
        </T>
        <T x={570} y={322} size={13} fill={INK} weight={700}>
          L₂
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={430} y={410} size={12} fill={AMBER_DARK} script>
          {t(
            "fronts touch — but the tails still have to clear: crossing is not a point event",
            "aage ke sire chhoo gaye — par poonchh abhi baaki hai: crossing ek pal ki baat nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — the sum of lengths */}
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d="M 66 435 v 53" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={84} y={454} size={13} fill={RED} script anchor="start">
          {t(
            "crossing two trains = a relative displacement of L₁ + L₂ — the SUM",
            "do trains ka paar hona = L₁ + L₂ ka relative displacement — JOD"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 8)}>
        <T x={84} y={480} size={13} fill={RED} script anchor="start">
          {t(
            "treat them as points and you are wrong by exactly the trains' length",
            "unhe bindu maano aur jawaab theek trains ki lambaai jitna galat hoga"
          )}
        </T>
      </Fade>

      {/* beat 6 — which distance? read the word */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={84} y={512} size={12} fill={INK} script anchor="start">
          {t(
            "a pole → own length only · another train → both lengths · a platform → own + platform's",
            "khamba → sirf apni lambaai · doosri train → dono lambaaiyan · platform → apni + platform ki"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={84} y={536} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "the question tells you which — in one skimmable word. READ it.",
            "sawaal batata hai kaunsa — ek aise shabd mein jo aankh se phisal jaata hai. PADHO."
          )}
        </T>
      </Fade>

      {/* beat 7 — the division was never the hard part */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 56 552 v 40" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={72} y={572} size={13} fill={GREEN} script anchor="start">
          {t(
            "t = distance-to-cover ⁄ relative speed — deciding the DISTANCE was the whole skill",
            "t = dooriya-jo-paar-karni-hai ⁄ relative speed — asli hunar DOORI tay karna tha"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
