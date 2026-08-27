/**
 * Ch02 · Section 71 — "Pitfalls and pro-tips: variable acceleration"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.7, 32.5, 57.3, 82.2, 102.7, 122.4, 143.5]):
 *  0 title + tally of four
 *  1 trap 1: equations with varying a
 *  2 trap 2: dv/dx is not acceleration
 *  3 trap 3: wrong pairing — and nothing tells you
 *  4 trap 4: the dropped constant
 *  5 pro-tip box + the diagnosis question
 *  6 the three branches, in one line
 *  7 the v² habit
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  badges c(76, 104/168/232/296) · mains st x104 bl 110/174/238/302 ·
 *  subs st x124 bl 136/200/264/328
 *  box x60..1020 y360..556 · header cx540 bl 390 · tips st x140 bl 424/456/488/520
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
  MUTED,
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

export default function Ch02Sec71({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const rows = [
    {
      main: t(
        "using the three equations when a varies — the single most punished mistake",
        "a badalte hue teen equations ka istemaal — sabse zyada sazaa waali galti"
      ),
      sub: t(
        "integrate from the definitions: they are always true; the formulas are not",
        "definitions se integrate karo: woh hamesha sach hain; formulas nahi"
      ),
    },
    {
      main: t(
        "dv⁄dx is NOT acceleration — a = v·dv⁄dx: one missing v reverses the physics",
        "dv⁄dx acceleration NAHI hai — a = v·dv⁄dx: ek gayab v physics palat deta hai"
      ),
      sub: t(
        "the NEET example proved it: 'grows with x' vs the truth, constant 8",
        "NEET example ne dikhaya: 'x se badhta' banaam sach, constant 8"
      ),
    },
    {
      main: t(
        "the wrong pairing for a = f(v) — an unusable integral, and nothing tells you",
        "a = f(v) ki galat jodi — nakara integral, aur koi batata bhi nahi"
      ),
      sub: t(
        "stuck ≠ bad at integration: you took the wrong branch two lines up",
        "atakna ≠ integration kamzor: do line upar galat shaakha li thi"
      ),
    },
    {
      main: t(
        "dropping the integration constant — right shape, wrong value, everywhere",
        "integration ka constant girana — aakaar sahi, value galat, har jagah"
      ),
      sub: t(
        "the fix: definite integrals with limits, every single time",
        "ilaaj: definite integrals limits ke saath, har baar"
      ),
    },
  ];

  return (
    <Scene>
      {/* beat 0 — four traps */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={56} size={25} fill={RED} script>
          {t(
            "four traps — and the first defines the slice",
            "chaar traps — pehla hi poore hisse ko paribhaashit karta hai"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 0.8)}
        d="M 950 44 v 22 M 965 44 v 22 M 980 44 v 22 M 995 44 v 22"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {rows.map((r, i) => (
        <G key={i}>
          <Badge n={i + 1} cy={104 + i * 64} on={beat >= i + 1} delay={dl(i + 1, 0.5)} />
          <Fade on={beat >= i + 1} delay={dl(i + 1, 1.5)}>
            <T x={104} y={110 + i * 64} size={13} fill={RED} script anchor="start">
              {r.main}
            </T>
          </Fade>
          <Fade on={beat >= i + 1} delay={dl(i + 1, 12)}>
            <T x={124} y={136 + i * 64} size={12} fill={GREEN} script anchor="start">
              {r.sub}
            </T>
          </Fade>
        </G>
      ))}

      {/* beat 5 — the pro-tip box + the diagnosis */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 72 360 h 936 q 12 0 12 12 v 172 q 0 12 -12 12 h -936 q -12 0 -12 -12 v -172 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={1}
      />
      <Fade on={beat >= 5} delay={dl(5, 2.2)}>
        <T x={540} y={390} size={15} fill={INK} weight={700}>
          {t("pro-tips:", "pro-tips:")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={140} y={424} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "open EVERY problem with the diagnosis: does a depend on t, v or x? say it, write it",
            "HAR sawaal diagnosis se kholo: a kis par nirbhar — t, v ya x? bolo, likho"
          )}
        </T>
      </Fade>

      {/* beat 6 — the three branches */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={140} y={456} size={13} fill={AMBER_DARK} script anchor="start">
          {t(
            "t → ∫ a dt · v (time asked) → ∫ dv⁄f(v) = ∫ dt · v or x (no time) → v dv = a dx",
            "t → ∫ a dt · v (samay poochha) → ∫ dv⁄f(v) = ∫ dt · v ya x (samay nahi) → v dv = a dx"
          )}
        </T>
      </Fade>

      {/* beat 7 — the fast lane */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={140} y={488} size={14} fill={GREEN} script anchor="start">
          {t(
            "see a in terms of x? think in v² — because v·dv⁄dx = ½·d(v²)⁄dx",
            "a agar x mein dikhe? v² mein socho — kyunki v·dv⁄dx = ½·d(v²)⁄dx"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 12)}>
        <T x={140} y={520} size={13} fill={GREEN} script anchor="start">
          {t(
            "it turned the NEET trap into two seconds: v² = 16x, half the slope = 8 — the fast-lane habit",
            "NEET trap do second mein nipta: v² = 16x, dhalaan ka aadha = 8 — tez raftaari ki aadat"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
