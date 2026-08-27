/**
 * Ch02 · Section 15 — "Pitfalls and pro-tips: kinematic quantities"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 25.8, 50.7, 73.2, 96.7, 115.4, 140.2]):
 *  0 title + tally of four
 *  1 trap 1: distance ≠ displacement (turn-around question)
 *  2 trap 2: arithmetic-averaging equal distances (48 not 50)
 *  3 trap 3: v = 0 forces a = 0
 *  4 trap 4: unfixed + direction — meaningless signs
 *  5 pro-tip box + tip 1: the rhythm phrase
 *  6 tip 2: endpoints, never the wiggly path
 *  7 tip 3: split at the roots + the silent-cancel warning
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  badges c(76, 106/172/238/304) · mains st x104 bl 112/178/244/310 script 14 ·
 *  cues st x124 bl 140/206/272 script 12 green
 *  box x60..1020 y330..524 · header cx540 bl 360 · tips st x140 bl 396/432/468 ·
 *  warning st x140 bl 502
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

export default function Ch02Sec15({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — name the traps */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={58} size={26} fill={RED} script>
          {t(
            "four traps — and the questions that kill them",
            "chaar traps — aur unhe maarne waale sawaal"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 0.8)}
        d="M 950 46 v 22 M 965 46 v 22 M 980 46 v 22 M 995 46 v 22"
        stroke={RED}
        sw={2.4}
        dur={0.7}
      />

      {/* beat 1 — interchangeable twins */}
      <Badge n={1} cy={106} on={beat >= 1} delay={dl(1, 0.5)} />
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={104} y={112} size={14} fill={RED} script anchor="start">
          {t(
            "distance ≠ displacement — they coincide ONLY for straight one-way motion",
            "distance ≠ displacement — sirf seedhi ek-disha chaal par barabar"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 12)}>
        <T x={124} y={140} size={12} fill={GREEN} script anchor="start">
          {t(
            "ask of every problem: did the body turn around?",
            "har sawaal se poochho: kya body palti thi?"
          )}
        </T>
      </Fade>

      {/* beat 2 — the expensive average */}
      <Badge n={2} cy={172} on={beat >= 2} delay={dl(2, 0.5)} />
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={104} y={178} size={14} fill={RED} script anchor="start">
          {t(
            "equal distances at 40 & 60 is NOT 50 — it is the harmonic 48",
            "equal distances par 40 & 60 ka jawaab 50 NAHI — harmonic 48 hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 12)}>
        <T x={124} y={206} size={12} fill={GREEN} script anchor="start">
          {t(
            "arithmetic is for equal TIMES — and 50 always sits in the options, waiting",
            "arithmetic sirf equal TIMES ke liye — aur 50 hamesha options mein baitha hai"
          )}
        </T>
      </Fade>

      {/* beat 3 — zero velocity, full acceleration */}
      <Badge n={3} cy={238} on={beat >= 3} delay={dl(3, 0.5)} />
      <Fade on={beat >= 3} delay={dl(3, 1.5)}>
        <T x={104} y={244} size={14} fill={RED} script anchor="start">
          {t(
            "v = 0 does not force a = 0 — top of the throw: at rest, still pulled at g",
            "v = 0 se a = 0 nahi hota — throw ki choti: ruka hua, phir bhi poora g"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 12)}>
        <T x={124} y={272} size={12} fill={GREEN} script anchor="start">
          {t(
            "v and a are independent at an instant — true of every reversal",
            "ek pal par v aur a azaad hain — har palatne par sach"
          )}
        </T>
      </Fade>

      {/* beat 4 — the quiet trap */}
      <Badge n={4} cy={304} on={beat >= 4} delay={dl(4, 0.5)} />
      <Fade on={beat >= 4} delay={dl(4, 1.5)}>
        <T x={104} y={310} size={14} fill={RED} script anchor="start">
          {t(
            "no fixed + direction ⇒ −3 m/s is MEANINGLESS — and sign errors cascade",
            "+ direction fix nahi ⇒ −3 m/s BEMAANI hai — aur sign errors failte hain"
          )}
        </T>
      </Fade>

      {/* beat 5 — the pro-tip box + the rhythm phrase */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.8)}
        d="M 72 330 h 936 q 12 0 12 12 v 170 q 0 12 -12 12 h -936 q -12 0 -12 -12 v -170 q 0 -12 12 -12"
        stroke={AMBER}
        sw={2.6}
        dur={1}
      />
      <Fade on={beat >= 5} delay={dl(5, 2.2)}>
        <T x={540} y={360} size={15} fill={INK} weight={700}>
          {t(
            "pro-tips — say them until they are automatic:",
            "pro-tips — tab tak dohraao jab tak aadat na ban jaayein:"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={140} y={396} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "'same DISTANCE → harmonic · same TIME → arithmetic' — in that rhythm",
            "'same DISTANCE → harmonic · same TIME → arithmetic' — isi taal mein"
          )}
        </T>
      </Fade>

      {/* beat 6 — endpoints, never the wiggle */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={140} y={432} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "avg velocity = (x_f − x_i) ⁄ total time — endpoints, never the wiggly path",
            "avg velocity = (x_f − x_i) ⁄ total time — endpoints, kabhi wiggly raasta nahi"
          )}
        </T>
      </Fade>

      {/* beat 7 — split before integrating */}
      <Fade on={beat >= 7} delay={dl(7, 1)}>
        <T x={140} y={468} size={14} fill={AMBER_DARK} script anchor="start">
          {t(
            "v changes sign? split the time axis at the roots BEFORE integrating distance",
            "v ka sign badla? distance integrate karne se PEHLE roots par axis todo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={140} y={502} size={13} fill={RED} script anchor="start">
          {t(
            "skip the split and it silently reports displacement wearing distance's name",
            "split chhoda to woh chupchaap displacement ko distance ke naam se pesh karega"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
