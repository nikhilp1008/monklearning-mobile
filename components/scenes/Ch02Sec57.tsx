/**
 * Ch02 · Section 57 — "Pitfalls and pro-tips: relative velocity"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.2, 36, 59.3, 80.4, 98.8, 117, 139.9]):
 *  0 title + tally of five
 *  1 trap 1: switching frames mid-solution
 *  2 trap 2: forgetting signs
 *  3 trap 3: trains as points
 *  4 trap 4: the quadratic that was never there
 *  5 trap 5: 'relative' ≠ 'subtract'
 *  6 pro-tip box + sign-first tip
 *  7 tips 2 & 3: free-fall jump + antisymmetry check
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  badges c(76, 104/158/212/266/320) · mains st x104 bl 110..326 step 54 script 13
 *  box x60..1020 y356..540 · header cx540 bl 384 · tips st x140 bl 420/452/484/516
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cy, on, delay }: { n: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw
        on={on}
        delay={delay}
        d={`M 61 ${cy} A 15 15 0 1 1 91 ${cy} A 15 15 0 1 1 61 ${cy}`}
        stroke={RED}
        sw={2.2}
        dur={0.4}
      />
      <Fade on={on} delay={delay + 0.4}>
        <T x={76} y={cy + 5.5} size={15} fill={RED} weight={800}>
          {n}
        </T>
      </Fade>
    </G>
  );
}

export default function Ch02Sec57({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const traps = [
    t(
      "switching frames mid-solution — a relative velocity × a ground distance = fluent nonsense",
      "beech mein frame badalna — relative velocity × ground ki doori = raviaan galti"
    ),
    t(
      "forgetting signs — 'opposite adds' is the same subtraction with an honest minus",
      "sign bhoolna — 'ulti disha mein jodo' wahi ghatav hai, imaandaar minus ke saath"
    ),
    t(
      "treating trains as points — crossing covers L₁ + L₂; a pole, only your own L",
      "trains ko bindu maanna — paar karne mein L₁ + L₂ lagta hai; khambe mein sirf apna L"
    ),
    t(
      "grinding a quadratic when a_rel = 0 — a right answer, three minutes late",
      "a_rel = 0 hote hue quadratic ghisna — sahi jawaab, teen minute der se"
    ),
    t(
      "reading 'relative' as 'subtract' — decide from the DIRECTIONS, not the word",
      "'relative' ko 'ghatao' padhna — faisla DISHAON se karo, shabd se nahi"
    ),
  ];

  return (
    <Scene>
      {/* beat 0 — five versions of one disrespect */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={56} size={25} fill={RED} script>
          {t(
            "five traps — all failures to respect one definition",
            "paanch traps — sab ek definition ki anadekhi"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 0.8)}
        d="M 950 44 v 22 M 965 44 v 22 M 980 44 v 22 M 995 44 v 22 M 943 66 l 60 -18"
        stroke={RED}
        sw={2.2}
        dur={0.8}
      />

      {traps.map((txt, i) => (
        <G key={i}>
          <Badge n={i + 1} cy={104 + i * 54} on={beat >= i + 1} delay={dl(i + 1, 0.5)} />
          <Fade on={beat >= i + 1} delay={dl(i + 1, 1.5)}>
            <T x={104} y={110 + i * 54} size={13} fill={RED} script anchor="start">
              {txt}
            </T>
          </Fade>
        </G>
      ))}

      {/* beat 6 — the tip that dissolves the traps */}
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.8)}
        d="M 72 356 h 936 q 12 0 12 12 v 160 q 0 12 -12 12 h -936 q -12 0 -12 -12 v -160 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={1}
      />
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={540} y={384} size={15} fill={INK} weight={700}>
          {t("pro-tips:", "pro-tips:")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4)}>
        <T x={140} y={420} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "sign the ground-frame velocities FIRST — then v_AB = v_A − v_B, mechanically",
            "PEHLE ground-frame velocities ko sign do — phir v_AB = v_A − v_B, bina soche"
          )}
        </T>
      </Fade>

      {/* beat 7 — the last two */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={140} y={452} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "two bodies under gravity alone → jump to a_rel = 0 and s_rel = u_rel·t",
            "do cheezein sirf gravity mein → seedha a_rel = 0 aur s_rel = u_rel·t par jao"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={140} y={484} size={14} fill={GREEN} script anchor="start">
          {t(
            "before finishing: swap the subscripts — the answer must ONLY flip sign",
            "khatam karne se pehle: subscripts palto — jawaab ka SIRF sign palte"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 14)}>
        <T x={140} y={516} size={13} fill={GREEN} script anchor="start">
          {t(
            "ten seconds of checking — it catches the sign errors that cost whole questions",
            "das second ki jaanch — woh sign errors pakadti hai jo poora sawaal kha jaate hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
