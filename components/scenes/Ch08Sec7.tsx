/**
 * Ch08 · Section 7 — "Elongation of a rod under its own weight"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 * Sibling of Sec6 (same ceiling/clamp/rod idiom) — there a mass hung on the
 * wire, here the rod loads itself, so the tension varies with height.
 * Note: English beats 2..3 are ~1s each and Hinglish beats 5..6 are ~1s each
 * (compressed narration timing) — elements in those beats use short delays
 * (≤1.35s, i.e. inside the +1s verify frame) and settle instantly after.
 *
 * ONE persistent diagram on the left (hatched ceiling → clamp → rod, with a
 * triangular tension profile hugging the rod's left flank and the dx element +
 * x-from-base measure on its right flank) feeds a derivation chain that builds
 * top-to-bottom on the right: T(x) = ρAxg → d(ΔL) = (ρxg/Y)dx → ∫₀ᴸ → boxed
 * hero ΔL = ρgL²/2Y = MgL/2AY, then the ½ ⇒ centre-of-mass punchline.
 *
 * Beats (en [0, 7.25, 19.54, 20.54, 21.54, 37.33, 49.19, 59.51] ·
 *        hi [0, 5.46, 17.41, 27.22, 36.78, 51.37, 52.37, 53.37]):
 *  0 hatched ceiling + clamp drawn — the same support as Sec6
 *  1 the rod itself: length L bracket, and the tension profile triangle
 *    (T = Mg at the top tapering to T ≈ 0 at the base)
 *  2 the Sec6 hanging mass drawn as a ghost and crossed out in red — the
 *    external load is gone, the rod is its own load
 *  3 the thin element: amber slice dx on the rod, base datum, and the
 *    x-from-base measuring arrow up to the slice
 *  4 free body of the slice: green tension pull up, weight ρAxg down ⇒ the
 *    two chain rows T(x) = ρAxg and d(ΔL) = (ρxg / Y) dx
 *  5 integrate over the rod ⇒ the hero box ΔL = ρgL²/2Y = MgL/2AY
 *  6 red L/2 tick on the rod + red margin note — the ½ IS the centre of mass
 *  7 closing line + drawn underline (the average-tension shortcut)
 *
 * Layout plan — text boxes ESTIMATED per spec (Kalam w≈0.55·size·chars, box
 * y−1.3·size .. y+0.5·size; Anek sans w≈0.50·size·chars, box y−0.78·size ..
 * y+0.31·size; longer language shown); strokes are geometric:
 *  title (script 24, red, ALWAYS ON) cx540 bl64 (x283..797 y32.8..76)
 *  b0 | ceiling hatch        | Draw | x144..360 y94..106
 *  b0 | clamp block          | Draw | x228..272 y106..126
 *  b0 | setup line (scr16)   | T mid| cx750 bl112 (x565..935 y91.2..120)
 *  b1 | rod rect             | Draw | x234..266 y126..400
 *  b1 | L dimension          | Draw | x104..116 y126..400
 *  b1 | "L" (18)             | T end| x85..94   bl269 (y255..274.6)
 *  b1 | tension triangle     | Draw | x144..234 y126..400
 *  b1 | profile bars         | Draw | x162..232 y180..348
 *  b1 | "T = Mg" (12)        | T mid| x170..206 bl148 (y138.6..151.7)
 *  b1 | "T ≈ 0" (12)         | T end| x170..200 bl394 (y384.6..397.7)
 *  b1 | caption (scr17)      | T mid| cx750 bl158 (x502..998 y135.9..166.5)
 *  b2 | ghost mass rect      | rect | x206..294 y414..456
 *  b2 | "mass" (scr13)       | T mid| x236..264 bl440 (y423.1..446.5)
 *  b2 | cross-out            | Draw | x202..298 y411..459
 *  b2 | "hata diya" (14)     | T st | x310..373 bl442 (y431.1..446.3)
 *  b2 | no-load line (scr16) | T mid| cx750 bl204 (x539..961 y183.2..212)
 *  b3 | base datum (dashed)  | line | x268..352 y400
 *  b3 | slice dx rect        | rect | x234..266 y318..332
 *  b3 | leader               | Draw | x270..294 y328
 *  b3 | "dx" (14)            | T st | x298..312 bl332 (y321.1..336.3)
 *  b3 | x measure arrow      | Draw | x322..346 y337..400
 *  b3 | "x (from base)" (13) | T st | x348..432 bl372 (y361.9..376)
 *  b3 | slice line (scr15)   | T mid| cx750 bl248 (x556..944 y228.5..255.5)
 *  b4 | tension arrow up     | Draw | x245..255 y288..316
 *  b4 | "T(x)" (14)          | T st | x276..304 bl302 (y291.1..306.3)
 *  b4 | weight arrow down    | Draw | x245..255 y340..388
 *  b4 | "ρAxg" (14)          | T st | x276..304 bl376 (y365.1..380.3)
 *  b4 | "T(x) = ρAxg" (26)   | T mid| x678..822 bl300 (y279.7..308.1)
 *  b4 | cap (12)             | T st | x856..1006 bl300 (y290.6..303.7)
 *  b4 | "d(ΔL) = …dx" (26)   | T mid| x620..880 bl356 (y335.7..364.1)
 *  b4 | cap (12)             | T st | x896..1010 bl356 (y346.6..359.7)
 *  b5 | "ΔL = ∫₀ᴸ …dx" (24)  | T mid| x624..876 bl412 (y393.3..419.4)
 *  b5 | cap (12)             | T st | x896..1010 bl412 (y402.6..415.7)
 *  b5 | hero box             | Draw | x548..952 y436..502
 *  b5 | hero formula (28)    | T mid| x568..932 bl478 (y456.2..486.7)
 *  b5 | "M = ρAL …" (13)     | T mid| x652..848 bl524 (y513.9..528)
 *  b6 | L/2 tick             | Draw | x228..274 y263
 *  b6 | "L/2" (14)           | T st | x284..305 bl267 (y256.1..271.3)
 *  b6 | margin bar           | Draw | x60 y510..538
 *  b6 | note (scr15)         | T st | x76..538 bl530 (y510.5..537.5)
 *  b7 | closing (scr15)      | T mid| cx540 bl574 (x322..758 y554.5..581.5)
 *  b7 | underline            | Draw | x330..750 y585..590
 */

import React from "react";
import { Line, Rect } from 'react-native-svg';
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
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch08Sec7({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on, visible on the blank board before play */}
      <Fade on={true}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t(
            "elongation of a rod under its own weight",
            "apne hi weight se rod ka elongation"
          )}
        </T>
      </Fade>

      {/* beat 0 — the same support as last section: hatched ceiling + clamp */}
      <Draw
        on={beat >= 0}
        delay={dl(0, 0.3)}
        d="M150 106 H360 M156 106 L144 94 M180 106 L168 94 M204 106 L192 94 M228 106 L216 94 M252 106 L240 94 M276 106 L264 94 M300 106 L288 94 M324 106 L312 94 M348 106 L336 94"
        stroke={INK}
        sw={2.4}
        dur={1.1}
      />
      <Draw
        on={beat >= 0}
        delay={dl(0, 1.6)}
        d="M228 106 h44 v20 h-44 z"
        stroke={INK}
        sw={2.4}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 0} delay={dl(0, 2.4)}>
        <T x={750} y={112} size={16} fill={MUTED} script>
          {t(
            "same rod as before — now nothing hangs from it",
            "wahi rod — par ab isse kuch nahi latak raha"
          )}
        </T>
      </Fade>

      {/* beat 1 — the rod, its length L, and how the tension tapers down it */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.2)}
        d="M234 126 h32 v274 h-32 z"
        stroke={INK}
        sw={2.4}
        dur={0.9}
        fill={CREAM}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 1.4)}
        d="M104 126 H116 M110 126 V400 M104 400 H116"
        stroke={INK}
        sw={1.8}
        dur={0.5}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.0)}>
        <T x={94} y={269} size={18} fill={INK} weight={800} anchor="end">
          L
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.6)}
        d="M234 126 H144 L234 400"
        stroke={AMBER_DARK}
        sw={2.2}
        dur={1.0}
      />
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.9)}
        d="M162 180 H232 M180 236 H232 M198 292 H232 M217 348 H232"
        stroke={AMBER}
        sw={1.6}
        dur={0.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 4.7)}>
        <T x={188} y={148} size={12} fill={AMBER_DARK} weight={700}>
          T = Mg
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 5.4)}>
        <T x={200} y={394} size={12} fill={AMBER_DARK} weight={700} anchor="end">
          T ≈ 0
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6.2)}>
        <T x={750} y={158} size={17} fill={AMBER_DARK} script>
          {t(
            "tension is largest at the top, nearly zero at the base",
            "tension upar sabse zyada, base par lagbhag zero"
          )}
        </T>
      </Fade>

      {/* beat 2 — Sec6's hanging mass drawn as a ghost, then struck off */}
      <Fade on={beat >= 2} delay={dl(2, 0.05)}>
        <Rect
          x={206}
          y={414}
          width={88}
          height={42}
          fill="none"
          stroke={MUTED}
          strokeWidth={1.8}
          strokeDasharray="7 6"
        />
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={250} y={440} size={13} fill={MUTED} script>
          {t("mass", "mass")}
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.55)}
        d="M202 411 L298 459 M298 411 L202 459"
        stroke={RED}
        sw={3}
        dur={0.4}
      />
      <Fade on={beat >= 2} delay={dl(2, 0.95)}>
        <T x={310} y={442} size={14} fill={RED} weight={800} anchor="start">
          {t("removed", "hata diya")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.2)}>
        <T x={750} y={204} size={16} fill={RED} script>
          {t(
            "no hanging mass now — the rod is its own load",
            "ab koi hanging mass nahi — rod khud apna load hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — the thin element dx, at height x measured up from the base */}
      <Fade on={beat >= 3} delay={dl(3, 0.05)}>
        <Line
          x1={268}
          y1={400}
          x2={352}
          y2={400}
          stroke={MUTED}
          strokeWidth={1.6}
          strokeDasharray="6 6"
        />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.25)}>
        <Rect
          x={234}
          y={318}
          width={32}
          height={14}
          fill={AMBER}
          stroke={AMBER_DARK}
          strokeWidth={2}
        />
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.45)}
        d="M270 328 H294"
        stroke={AMBER_DARK}
        sw={1.4}
        dur={0.2}
      />
      <Fade on={beat >= 3} delay={dl(3, 0.6)}>
        <T x={298} y={332} size={14} fill={AMBER_DARK} weight={800} anchor="start">
          dx
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.8)}
        d={`M322 400 H346 ${arrowD(334, 398, 334, 337)}`}
        stroke={INK}
        sw={2}
        dur={0.4}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.05)}>
        <T x={348} y={372} size={13} fill={INK} weight={700} anchor="start">
          {t("x (from base)", "x (base se)")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.3)}>
        <T x={750} y={248} size={15} fill={GREEN} script>
          {t(
            "each slice must hold up all the rod below it",
            "har slice ko apne neeche ka poora rod uthana hai"
          )}
        </T>
      </Fade>

      {/* beat 4 — free body of the slice ⇒ the two chain rows */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.3)}
        d={arrowD(250, 316, 250, 288)}
        stroke={GREEN}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={276} y={302} size={14} fill={GREEN} weight={800} anchor="start">
          T(x)
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 1.5)}
        d={arrowD(250, 340, 250, 378)}
        stroke={INK}
        sw={2.4}
        dur={0.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 2.0)}>
        <T x={276} y={376} size={14} fill={INK} weight={800} anchor="start">
          ρAxg
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.0)}>
        <T x={750} y={300} size={26} fill={INK} weight={800}>
          T(x) = ρAxg
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3.8)}>
        <T x={856} y={300} size={12} fill={MUTED} anchor="start">
          {t("= weight of the rod below", "= neeche ke rod ka weight")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5.4)}>
        <T x={750} y={356} size={26} fill={INK} weight={800}>
          d(ΔL) = (ρxg / Y) dx
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 6.2)}>
        <T x={896} y={356} size={12} fill={MUTED} anchor="start">
          {t("one slice's stretch", "ek slice ka stretch")}
        </T>
      </Fade>

      {/* beat 5 — add up every slice: the hero result */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <T x={750} y={412} size={24} fill={INK} weight={800}>
          ΔL = ∫₀ᴸ (ρgx / Y) dx
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={896} y={412} size={12} fill={MUTED} anchor="start">
          {t("add up every slice", "har slice ko jodiye")}
        </T>
      </Fade>
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.0)}
        d="M560 436 h380 q12 0 12 12 v42 q0 12 -12 12 h-380 q-12 0 -12 -12 v-42 q0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={0.9}
      />
      <Fade on={beat >= 5} delay={dl(5, 2.1)}>
        <T x={750} y={478} size={28} fill={INK} weight={800}>
          ΔL = ρgL² / 2Y = MgL / 2AY
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.2)}>
        <T x={750} y={524} size={13} fill={MUTED}>
          {t("M = ρAL is the rod's own mass", "M = ρAL yaani rod ka apna mass")}
        </T>
      </Fade>

      {/* beat 6 — where that ½ comes from: the centre of mass, at L/2 */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.1)}
        d="M228 263 H274"
        stroke={RED}
        sw={2.6}
        dur={0.35}
      />
      <Fade on={beat >= 6} delay={dl(6, 0.45)}>
        <T x={284} y={267} size={14} fill={RED} weight={800} anchor="start">
          L/2
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 0.75)} d="M60 510 L60 538" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 6} delay={dl(6, 1.1)}>
        <T x={76} y={530} size={15} fill={RED} script anchor="start">
          {t(
            "the ½ says the whole weight acts at the centre of mass",
            "yeh ½ kehta hai poora weight centre of mass par lagta hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — the exam-time shortcut this ½ buys you */}
      <Fade on={beat >= 7} delay={dl(7, 0.5)}>
        <T x={540} y={574} size={15} fill={GREEN} script>
          {t(
            "average-tension shortcut: an integral becomes one line",
            "average-tension shortcut: integral ek line mein"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 7}
        delay={dl(7, 1.5)}
        d="M330 588 C430 585, 650 591, 750 587"
        stroke={GREEN}
        sw={2.2}
        dur={0.6}
      />
    </Scene>
  );
}
