/**
 * Ch04 · Section 54 — "Worked Example 1 [CBSE Board]: banking a highway"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.8, 34.3, 56.2, 57.2, 66.7, 91.5, 116.4]):
 *  0 title
 *  1 problem + the tell: "without relying on friction"
 *  2 given data + figure: banked wedge, N tilted, mg down (no derivation needed)
 *  3 formula substitution → tanθ = 0.2
 *  4 θ = 11.3° box
 *  5 red margin: two sentences that earn full marks
 *  6 green chip: truck & scooter, same curve, same speed
 *  7 closing line
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · problem st x84 bl 92 / 116
 *  b2 | given st x84 bl 155 · fig x120..380 y185..320:
 *    wedge M120 320 L380 320 L380 290 L150 282 Z · car x210..270 y258..290 ·
 *    N arr (240,258)→(275,195) "N"(282,188 st) · mg arr (240,270)→(240,330) "mg"(252,318 st)
 *  R col x560..1044 | b3 line bl 200 · b4 box x640..940 y224..268 bl 254
 *  b5 | bar x66 y390..460 · lines st x84 bl 410 / 436 / 460
 *  b6 chip x230..850 y480..516
 *  b7 line cx540 bl 550
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
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec54({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Example 1 [CBSE Board] — banking a highway",
            "Example 1 [CBSE Board] — highway ka banking"
          )}
        </T>
      </Fade>

      {/* beat 1 */}
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={84} y={92} size={13} fill={INK} script anchor="start">
          {t(
            "highway curve r = 200 m · car takes it at v = 20 m⁄s · g = 10",
            "highway curve r = 200 m · car use v = 20 m⁄s se leti hai · g = 10"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={84} y={116} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "'without relying on friction' — the tell: use the design-speed formula",
            "'friction par bharosa kiye bina' — ishaara: design-speed formula lagao"
          )}
        </T>
      </Fade>

      {/* beat 2 — given + figure */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={84} y={155} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "r = 200 m · v = 20 m⁄s · frictionless design",
            "r = 200 m · v = 20 m⁄s · frictionless design"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 2)}
        d="M 120 320 L 380 320 L 380 290 L 150 282 Z"
        stroke={INK}
        sw={2.4}
        dur={0.9}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 3.2)}
        d="M 210 258 h 60 v 32 h -60 z"
        stroke={INK}
        sw={2.2}
        dur={0.5}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 4)}
        d={arrowD(240, 258, 275, 195)}
        stroke={GREEN}
        sw={2.6}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 4.8)}
        d={arrowD(240, 270, 240, 330)}
        stroke={RED}
        sw={2.6}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 5.4)}>
        <T x={282} y={188} size={13} fill={GREEN} weight={700} anchor="start">
          N
        </T>
        <T x={252} y={318} size={13} fill={RED} weight={700} anchor="start">
          mg
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={250} y={355} size={12} fill={AMBER_DARK} script>
          {t(
            "same setup as our derivation — nothing new to resolve",
            "wahi setup jo derivation mein tha — resolve karne ko nayi kuchh nahi"
          )}
        </T>
      </Fade>

      {/* beat 3 — substitution */}
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={560} y={200} size={15} fill={INK} weight={700} anchor="start">
          tanθ = 20² ÷ (200×10) = 400 ÷ 2000
        </T>
      </Fade>

      {/* beat 4 — the angle */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.8)}
        d="M 652 224 h 296 q 12 0 12 12 v 20 q 0 12 -12 12 h -296 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.8}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={800} y={254} size={18} fill={INK} weight={800}>
          tanθ = 0.2 → θ ≈ 11.3°
        </T>
      </Fade>

      {/* beat 5 — two sentences for full marks */}
      <Draw on={beat >= 5} delay={dl(5, 0.6)} d="M 66 390 v 82" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={84} y={410} size={14} fill={RED} script anchor="start">
          {t(
            "say it: this is the DESIGN-SPEED angle — friction-free only at 20 m⁄s",
            "kaho: ye DESIGN-SPEED angle hai — sirf 20 m⁄s par friction-free"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 7)}>
        <T x={84} y={436} size={14} fill={RED} script anchor="start">
          {t(
            "say it: the answer never depended on the car's mass",
            "kaho: answer car ke mass par kabhi nirbhar nahi tha"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 13)}>
        <T x={84} y={460} size={14} fill={GREEN} script anchor="start">
          {t(
            "boards award a mark for each sentence — leave nothing on the table",
            "boards har vaakya ke marks dete hain — kuchh chhodo mat"
          )}
        </T>
      </Fade>

      {/* beat 6 — truck & scooter */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <Chip x={230} y={480} w={620} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN} size={15}>
          {t(
            "a truck and a scooter — both safe at 20 m⁄s on this one curve",
            "truck ho ya scooter — is ek curve par dono 20 m⁄s par safe"
          )}
        </Chip>
      </Fade>

      {/* beat 7 — the whole point */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={540} y={550} size={13} fill={AMBER_DARK} script>
          {t(
            "one banked curve, chosen once, serves every vehicle that will ever use it",
            "ek banked curve, ek baar chuni, har uss gaadi ka kaam karti hai jo kabhi ayegi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
