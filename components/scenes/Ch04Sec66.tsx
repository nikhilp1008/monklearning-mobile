/**
 * Ch04 · Section 66 — "Worked Example 2 [NEET Speed Trap]: the angled push"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 15.19, 28.67, 52.99, 76.89, 77.89, 102.72]):
 *  0 title
 *  1 problem: 2 kg block, frictionless floor, F=10N at 30° below horizontal, find N
 *  2 red margin: the trap — N=mg=20N on autopilot, but push slants down → N must exceed mg
 *  3 diagram: block + floor, angled force into surface, mg down, N up
 *  4 formula box: N = mg + F sin30° = 20 + 10(0.5) = 25 N
 *  5 red margin: the reflex — vertical part ADD or SUBTRACT? push down/pull up rules, mg bait
 *  6 red→green: frictionless floor was a red herring, never enters vertical balance
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 116
 *  b2 | bar x66 y138..198 · lines st x84 bl 158 / 184
 *  b3 diagram cx540 y230..378: tail(400,230)→head(470,270) · block x470..530 y268..310 ·
 *    floor y310 · mg arr x500 y310..342 lbl 357 · N arr x440 y310..276 lbl 265 ·
 *    30° arc+label · F=10N lbl (388,220) · caption cx540 bl 378
 *  b4 box x260..820 y400..446 bl 430
 *  b5 | bar x66 y468..566 · lines st x84 bl 488 / 512 / 536 / 558
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

export default function Ch04Sec66({ currentTime, reveals, language }: SceneProps) {
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
            "Example 2 [NEET Speed Trap] — the angled push",
            "Example 2 [NEET Speed Trap] — jhuka hua dhakka"
          )}
        </T>
      </Fade>

      {/* beat 1 — problem */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "2 kg block on a frictionless floor, pushed by F = 10 N, 30° below horizontal",
            "frictionless floor par 2 kg block, F = 10 N se dhakela, horizontal se 30° neeche"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t("find: normal reaction N · g = 10 m⁄s²", "nikaalo: normal reaction N · g = 10 m⁄s²")}
        </T>
      </Fade>

      {/* beat 2 — the trap */}
      <Draw on={beat >= 2} delay={dl(2, 0.6)} d="M 66 138 v 60" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={84} y={158} size={14} fill={RED} script anchor="start">
          {t(
            "the reflex: N = mg = 20 N — sitting right there among the options",
            "reflex: N = mg = 20 N — options mein wahin baitha"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={84} y={184} size={14} fill={RED} script anchor="start">
          {t(
            "but the push slants DOWN, presses harder → N must EXCEED mg",
            "par dhakka NEECHE jhuka, zyada dabaata → N mg se ZYADA hoga"
          )}
        </T>
      </Fade>

      {/* beat 3 — diagram */}
      <Draw on={beat >= 3} delay={dl(3, 0.8)} d="M 340 310 H 740" stroke={INK} sw={2.4} dur={0.5} />
      <Draw
        on={beat >= 3}
        delay={dl(3, 1.6)}
        d="M 470 268 h 60 v 42 h -60 z"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw on={beat >= 3} delay={dl(3, 2.4)} d="M 400 230 H 465" stroke={MUTED} sw={1.6} dur={0.4} />
      <Draw
        on={beat >= 3}
        delay={dl(3, 3)}
        d={arrowD(400, 230, 470, 270)}
        stroke={AMBER_DARK}
        sw={2.6}
        dur={0.4}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 3.6)}
        d="M 424 230 Q 421 238 420.8 241.9"
        stroke={AMBER_DARK}
        sw={1.6}
        dur={0.3}
      />
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={428} y={240} size={11} fill={AMBER_DARK} weight={700} anchor="start">
          30°
        </T>
        <T x={388} y={220} size={12} fill={AMBER_DARK} weight={700} anchor="end">
          F = 10 N
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 4.6)}
        d={arrowD(500, 310, 500, 342)}
        stroke={RED}
        sw={2.2}
        dur={0.3}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 5.2)}
        d={arrowD(440, 310, 440, 276)}
        stroke={GREEN}
        sw={2.2}
        dur={0.3}
      />
      <Fade on={beat >= 3} delay={dl(3, 5.8)}>
        <T x={500} y={357} size={12} fill={RED} weight={700}>
          mg
        </T>
        <T x={440} y={265} size={12} fill={GREEN} weight={700}>
          N
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 7)}>
        <T x={540} y={378} size={12} fill={MUTED} script>
          {t(
            "the push slants down — vertical part ADDS to the weight",
            "dhakka neeche jhuka — vertical hissa weight mein judta hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — the formula */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d="M 272 400 h 536 q 12 0 12 12 v 22 q 0 12 -12 12 h -536 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={540} y={430} size={16} fill={INK} weight={800}>
          N = mg + F sin30° = 20 + 10(0.5) = 25 N
        </T>
      </Fade>

      {/* beat 5 — the beating reflex */}
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d="M 66 468 v 98" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={84} y={488} size={14} fill={RED} script anchor="start">
          {t(
            "angled force? don't reach for mg — ask ONE question first",
            "jhuki force? mg ki taraf mat badho — pehle EK sawaal poocho"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={84} y={512} size={14} fill={RED} script anchor="start">
          {t(
            "push down → N = mg + F sinθ · pull up → N = mg − F sinθ",
            "neeche dhakka → N = mg + F sinθ · upar khinchaai → N = mg − F sinθ"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 13)}>
        <T x={84} y={536} size={14} fill={GREEN} script anchor="start">
          {t(
            "the option that simply equals mg is almost always the bait",
            "jo option bas mg ke barabar hai wo lagbhag hamesha chaara hai"
          )}
        </T>
      </Fade>

      {/* beat 6 — the red herring */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={84} y={558} size={14} fill={GREEN} script anchor="start">
          {t(
            "frictionless floor? a red herring — friction never enters a vertical balance",
            "frictionless floor? ek bhatkaava — friction vertical balance mein kabhi nahi aati"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
