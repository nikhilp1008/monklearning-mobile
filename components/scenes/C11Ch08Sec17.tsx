/**
 * C11 Ch08 · Section 17 — "Worked example — count sp2 carbons (NEET)"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING(_CHEMISTRY).md.
 *
 * Beats (board_reveal_at, en [0, 5.72, 23.64, 32.34, 43.69, 67.33, 72.11, 88.49]):
 *  0 title (always-on, seq1) · 1 task + structure drawn (but-3-en-2-one) · 2 speed
 *  method (scan for double bonds) · 3 C=C→2sp2, C=O→1 more · 4 numbers + per-carbon
 *  sp2/sp3 tags on the structure · 5 answer stamp (3 sp2) · 6 red trap (forgetting
 *  carbonyl) · 7 red closer (mental check)
 *
 * Layout plan:
 *  b1 | zig-zag C1=C2-C3(=O)-C4          | Draw  | x160..340 y185..220, O x310..322 y255
 *  b1 | task (14, ink)                   | T mid | y90
 *  b4 | numbers 1/2/3/4                  | T mid | y295
 *  b4 | sp2/sp2/sp2/sp3 tags             | T mid | y325
 *  b2 | speed method (13, ink)           | T mid | y360
 *  b3 | counts (13, ink)                 | T mid | y385
 *  b5 | answer box "3 sp² carbons"       | rect+T| x420..660 y415..455
 *  b6 | margin bar + red trap            | Draw+T| x60 y475..505 · x76 y493
 *  b7 | margin bar + red closer          | Draw+T| x60 y520..550 · x76 y538
 */

import React from "react";
import { Rect } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, INK, GREEN, RED, CREAM, AMBER,
  Scene,
} from '@/components/scenes/kit';
import { bondD, doubleBondD } from "./chem-kit";

export default function C11Ch08Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const xs = [160, 220, 280, 340]; // C1, C2, C3, C4

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={22} fill={RED} script>
          {t("Worked example — count sp2 carbons (NEET)", "Worked example — sp2 carbons gino (NEET)")}
        </T>
      </Fade>

      {/* beat 1 — task + structure */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={540} y={90} size={14} fill={INK}>
          {t("but-3-en-2-one: CH2=CH−CO−CH3 — how many C are sp²?", "but-3-en-2-one: CH2=CH−CO−CH3 — kitne C sp² hain?")}
        </T>
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.7)}
        d={doubleBondD(xs[0], 220, xs[1], 185, 3)}
        stroke={INK}
        sw={2.4}
        dur={0.5}
      />
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d={bondD(xs[1], 185, xs[2], 220)} stroke={INK} sw={2.4} dur={0.35} />
      <Draw on={beat >= 1} delay={dl(1, 1.7)} d={bondD(xs[2], 220, xs[3], 185)} stroke={INK} sw={2.4} dur={0.35} />
      <Draw
        on={beat >= 1}
        delay={dl(1, 2.1)}
        d={doubleBondD(xs[2], 220, 310, 255, 3)}
        stroke={INK}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={324} y={262} size={15} fill={INK} weight={700}>
          O
        </T>
      </Fade>

      {/* beat 4 — number the carbons and tag each hybridization */}
      <Fade on={beat >= 4} delay={dl(4, 0.2)}>
        {xs.map((x, i) => (
          <T key={x} x={x} y={295} size={13} fill={INK} weight={700}>
            {i + 1}
          </T>
        ))}
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={xs[0]} y={325} size={13} fill={RED} weight={700}>
          sp²
        </T>
        <T x={xs[1]} y={325} size={13} fill={RED} weight={700}>
          sp²
        </T>
        <T x={xs[2]} y={325} size={13} fill={RED} weight={700}>
          sp²
        </T>
        <T x={xs[3]} y={325} size={13} fill={GREEN} weight={700}>
          sp³
        </T>
      </Fade>

      {/* beat 2 — speed method */}
      <Fade on={beat >= 2} delay={dl(2, 0.2)}>
        <T x={540} y={360} size={13} fill={INK}>
          {t("scan for double bonds — every C touching one is sp²", "double bonds dhoondo — jo bhi C usse touch kare, sp²")}
        </T>
      </Fade>

      {/* beat 3 — the counts */}
      <Fade on={beat >= 3} delay={dl(3, 0.2)}>
        <T x={540} y={385} size={13} fill={INK}>
          {t("C=C → 2 sp²; C=O → 1 more", "C=C → 2 sp²; C=O → 1 aur")}
        </T>
      </Fade>

      {/* beat 5 — the answer */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Rect x={420} y={415} width={240} height={40} rx={8} fill={CREAM} stroke={AMBER} strokeWidth={2} />
        <T x={540} y={441} size={18} fill={INK} weight={800}>
          {t("3 sp² carbons", "3 sp² carbons")}
        </T>
      </Fade>

      {/* beat 6 — the trap */}
      <Draw on={beat >= 6} delay={dl(6, 0.2)} d="M 60 475 L 60 505" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={76} y={493} size={15} fill={RED} script anchor="start">
          {t(
            "trap: counting the 2 alkene C's but forgetting the carbonyl C is ALSO sp²",
            "trap: 2 alkene C gin lete par carbonyl C bhi sp² hai — wo bhool jaate"
          )}
        </T>
      </Fade>

      {/* beat 7 — mental check */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 60 520 L 60 550" stroke={RED} sw={3} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={76} y={538} size={15} fill={RED} script anchor="start">
          {t(
            "mental check: every carbon touching a double bond — including C=O — is sp²",
            "mental check: double bond touch karne wala har carbon — C=O bhi — sp² hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
