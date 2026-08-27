/**
 * C11 Ch08 · Section 3 — "One molecule, four drawings" (propan-1-ol)
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 11.43, 24.83, 37.63, 47.96, 62.04, 78.59, 92.67]):
 *  0 title (always-on, seq1) · 1 complete/Lewis structure, every atom+bond+lone pair ·
 *  2 condensed formula CH3CH2CH2OH · 3 "same molecule" linking note · 4 bond-line
 *  zig-zag skeleton · 5 red note (vertex=carbon, heteroatoms always shown) · 6
 *  wedge-dash 3-D convention (plain/wedge/hash) + closing "pick your drawing" line
 *
 * Four stacked rows, each with a small AMBER_DARK header at x60:
 *  row1 y100-238 (Lewis) · row2 y266-335 (condensed + link note) ·
 *  row3 y368-470 (bond-line + red note) · row4 y495-594 (wedge-dash + closer)
 *
 * Layout plan:
 *  b1 | row1 header                    | T st  | x60..  y100
 *  b1 | backbone C1-C2-C3-O-H           | Draw  | y185, x160..740 (gapped)
 *  b1 | 7×H stubs+labels                | Draw+T| y138(up) / y234(down) / x83(C1 left)
 *  b1 | O × 2 lone pairs                | dots  | cx645/675 cy150
 *  b2 | row2 header                     | T st  | x60 y266
 *  b2 | "CH3CH2CH2OH" (24, w800)        | T mid | x540 y294
 *  b3 | link note (14, green script)    | T mid | x540 y335
 *  b4 | row3 header                     | T st  | x60 y368
 *  b4 | zig-zag P1-P2-P3→O-H            | Draw  | x200..410 y375..410, "OH" x382 y372
 *  b5 | margin bar + red note           | Draw+T| x60 y440..470 · x76 y460
 *  b6 | row4 header                     | T st  | x60 y495
 *  b6 | tetrahedral C + plain/wedge/hash| Draw  | c(300,545)
 *  b6 | closer line (18, green, w800)   | T mid | x525..975 y545
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';
import { bondD, wedgeD, hashD, LonePair } from "./chem-kit";

export default function C11Ch08Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const carbons = [140, 320, 500];
  const AY = 185;

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={26} fill={RED} script>
          {t("One molecule, four drawings — propan-1-ol", "Ek molecule, chaar drawings — propan-1-ol")}
        </T>
      </Fade>

      {/* beat 1 — complete (Lewis) structure */}
      <Fade on={beat >= 1} delay={dl(1, 0.1)}>
        <T x={60} y={100} size={13} fill={AMBER_DARK} weight={700} anchor="start">
          {t("COMPLETE (LEWIS) — clear, but bulky", "COMPLETE (LEWIS) — clear, but bulky")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d={`${bondD(160, AY, 300, AY)} ${bondD(340, AY, 480, AY)} ${bondD(520, AY, 640, AY)} ${bondD(680, AY, 740, AY)}`}
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      {carbons.map((cx, i) => (
        <React.Fragment key={cx}>
          <Fade on={beat >= 1} delay={dl(1, 1.6 + i * 0.15)}>
            <T x={cx} y={AY} size={18} fill={INK} weight={700}>
              C
            </T>
          </Fade>
          <Draw
            on={beat >= 1}
            delay={dl(1, 2.1 + i * 0.2)}
            d={`${bondD(cx, AY - 15, cx, AY - 37)} ${bondD(cx, AY + 15, cx, AY + 37)}`}
            stroke={INK}
            sw={1.8}
            dur={0.4}
          />
          <Fade on={beat >= 1} delay={dl(1, 2.5 + i * 0.2)}>
            <T x={cx} y={AY - 49} size={14} fill={INK} weight={700}>
              H
            </T>
            <T x={cx} y={AY + 49} size={14} fill={INK} weight={700}>
              H
            </T>
          </Fade>
        </React.Fragment>
      ))}
      <Draw
        on={beat >= 1}
        delay={dl(1, 3.2)}
        d={bondD(120, AY, 95, AY)}
        stroke={INK}
        sw={1.8}
        dur={0.3}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.5)}>
        <T x={83} y={AY} size={14} fill={INK} weight={700} anchor="end">
          H
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.9)}>
        <T x={660} y={AY} size={18} fill={INK} weight={700}>
          O
        </T>
        <T x={760} y={AY} size={14} fill={INK} weight={700}>
          H
        </T>
      </Fade>
      <LonePair on={beat >= 1} delay={dl(1, 4.3)} cx={645} cy={150} angle={0} />
      <LonePair on={beat >= 1} delay={dl(1, 4.5)} cx={675} cy={150} angle={0} />

      {/* beat 2 — condensed formula */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={60} y={266} size={13} fill={AMBER_DARK} weight={700} anchor="start">
          {t("CONDENSED — compact, unambiguous", "CONDENSED — compact, unambiguous")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.7)}>
        <T x={540} y={294} size={24} fill={INK} weight={800}>
          CH₃CH₂CH₂OH
        </T>
      </Fade>

      {/* beat 3 — same molecule, side by side */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={335} size={14} fill={GREEN} script>
          {t("↓ same molecule, one identical structure", "↓ same molecule, ek hi structure")}
        </T>
      </Fade>

      {/* beat 4 — bond-line (zig-zag) skeleton */}
      <Fade on={beat >= 4} delay={dl(4, 0.1)}>
        <T x={60} y={368} size={13} fill={AMBER_DARK} weight={700} anchor="start">
          {t("BOND-LINE (ZIG-ZAG) — the workhorse", "BOND-LINE (ZIG-ZAG) — the workhorse")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 0.6)}
        d="M 200 410 L 260 375 L 320 410 L 370 378"
        stroke={INK}
        sw={2.4}
        dur={0.9}
      />
      <Fade on={beat >= 4} delay={dl(4, 1.6)}>
        <T x={382} y={372} size={18} fill={INK} weight={700} anchor="start">
          OH
        </T>
      </Fade>

      {/* beat 5 — vertex = carbon, red-margin note */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d="M 60 440 L 60 470" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 0.6)}>
        <T x={76} y={460} size={15} fill={RED} script anchor="start">
          {t(
            "vertex = carbon. heteroatoms (O, N, halogens) always shown — only C-H hidden",
            "vertex = carbon. heteroatoms (O, N, halogens) hamesha likhte — sirf C-H chhupa"
          )}
        </T>
      </Fade>

      {/* beat 6 — wedge-dash 3-D convention + closer */}
      <Fade on={beat >= 6} delay={dl(6, 0.1)}>
        <T x={60} y={495} size={13} fill={AMBER_DARK} weight={700} anchor="start">
          {t("WEDGE-DASH (3-D) — the real shape", "WEDGE-DASH (3-D) — real shape")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={300} y={545} size={18} fill={INK} weight={800}>
          C
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1)} d={bondD(315, 545, 370, 545)} stroke={INK} sw={2.2} dur={0.35} />
      <Fade on={beat >= 6} delay={dl(6, 1.3)}>
        <T x={380} y={545} size={13} fill={MUTED} anchor="start">
          {t("in plane", "plane mein")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.6)} d={wedgeD(300, 545, 255, 578)} stroke={INK} sw={1} fill={INK} dur={0.35} />
      <Fade on={beat >= 6} delay={dl(6, 1.9)}>
        <T x={215} y={590} size={13} fill={GREEN} weight={700} anchor="end">
          {t("toward you", "aapki taraf")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 2.2)} d={hashD(300, 545, 348, 578)} stroke={INK} sw={1.4} dur={0.35} />
      <Fade on={beat >= 6} delay={dl(6, 2.5)}>
        <T x={362} y={590} size={13} fill={RED} weight={700} anchor="start">
          {t("away", "door")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={750} y={545} size={18} fill={GREEN} weight={800}>
          {t(
            "same propan-1-ol every time — pick your drawing",
            "hamesha wahi propan-1-ol — apni drawing chuno"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
