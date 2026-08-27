/**
 * Ch07 · Section 17 — "Reading gravity from its field lines"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.3, 15.87, 29.61, 37.21, 38.21, 39.21, 40.21]):
 *  0 title + mass dot + first two inward arrows
 *  1 two more arrows + plughole caption
 *  2 ghost outgoing arrow crossed out + red note (only converge)
 *  3 line: no negative mass → no outgoing lines
 *  4 red note: crowded strong / spread weak / never cross
 *  5 four diagonal spokes complete + caption
 *  6 two-mass diagram: curved lines converge, null point circle + caption
 *  7 green margin: sketch = instant sanity check
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · mass (260,240) r10 · spokes r95→r30 (8 dirs) · plughole caption cx260 bl120
 *  ghost arrow (300,200)→(350,170) + cross (313,172,42,20)
 *  b2 | bar x560 y110..162 · lines st x578 bl130 / 156
 *  b3 | line st x560 bl195
 *  b4 | bar x560 y225..277 · lines st x578 bl245 / 271
 *  b5 | caption cx260 bl370
 *  b6 | masses (650,420) r8 / (850,420) r6 · curves + heads · null (760,420) r6 open ·
 *      caption cx760 bl480
 *  b7 | bar x66 y540..580 · line st x84 bl562
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  arrowD,
  crossD,
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

const spoke = (deg: number) => {
  const a = (deg * Math.PI) / 180;
  return arrowD(
    260 + 95 * Math.cos(a),
    240 + 95 * Math.sin(a),
    260 + 30 * Math.cos(a),
    240 + 30 * Math.sin(a)
  );
};

export default function Ch07Sec17({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — arrows a test mass would follow */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "Field lines: arrows a test mass would follow",
            "Field lines: arrows jinke peechhe test mass chalega"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 2.5)}>
        <Circle cx={260} cy={240} r={10} fill={INK} />
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3.5)} d={spoke(-90)} stroke={GREEN} sw={2} dur={0.4} />
      <Draw on={beat >= 0} delay={dl(0, 4.2)} d={spoke(0)} stroke={GREEN} sw={2} dur={0.4} />

      {/* beat 1 — draining inward */}
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d={spoke(90)} stroke={GREEN} sw={2} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 1.2)} d={spoke(180)} stroke={GREEN} sw={2} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={260} y={120} size={12} fill={AMBER_DARK} script>
          {t(
            "like water draining to a plughole",
            "jaise paani plughole ki taraf"
          )}
        </T>
      </Fade>

      {/* beat 2 — never outward */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.8)}
        d={arrowD(357, 200, 399, 183)}
        stroke={MUTED}
        sw={2}
        dur={0.4}
      />
      <Draw
        on={beat >= 2}
        delay={dl(2, 1.6)}
        d={crossD(363, 180, 30, 22)}
        stroke={RED}
        sw={2.4}
        dur={0.4}
      />
      <Draw on={beat >= 2} delay={dl(2, 2.6)} d="M 560 110 v 52" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 3.2)}>
        <T x={578} y={130} size={13} fill={RED} script anchor="start">
          {t(
            "lines only CONVERGE onto masses — never spray outward",
            "lines sirf masses par CONVERGE — kabhi bahar nahi"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 6)}>
        <T x={578} y={156} size={13} fill={RED} script anchor="start">
          {t(
            "mirror electric lines, with one crucial difference",
            "electric lines jaisi — par ek crucial difference"
          )}
        </T>
      </Fade>

      {/* beat 3 — no negative mass */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={560} y={195} size={13} fill={INK} script anchor="start">
          {t(
            "no negative mass → no outgoing source lines at all",
            "koi negative mass nahi → koi outgoing line hi nahi"
          )}
        </T>
      </Fade>

      {/* beat 4 — reading density */}
      <Draw on={beat >= 4} delay={dl(4, 0.3)} d="M 560 225 v 52" stroke={RED} sw={3.4} dur={0.3} />
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={578} y={245} size={13} fill={RED} script anchor="start">
          {t(
            "crowded = STRONG field · spread out = WEAK",
            "paas-paas = STRONG field · phaili hui = WEAK"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={578} y={271} size={13} fill={RED} script anchor="start">
          {t(
            "and lines NEVER cross — one direction per point",
            "aur lines kabhi CROSS nahi — har point par ek direction"
          )}
        </T>
      </Fade>

      {/* beat 5 — the full spokes */}
      <Draw on={beat >= 5} delay={dl(5, 0.2)} d={spoke(45)} stroke={GREEN} sw={2} dur={0.3} />
      <Draw on={beat >= 5} delay={dl(5, 0.45)} d={spoke(135)} stroke={GREEN} sw={2} dur={0.3} />
      <Draw on={beat >= 5} delay={dl(5, 0.7)} d={spoke(225)} stroke={GREEN} sw={2} dur={0.3} />
      <Draw on={beat >= 5} delay={dl(5, 0.95)} d={spoke(315)} stroke={GREEN} sw={2} dur={0.3} />
      <Fade on={beat >= 5} delay={dl(5, 1.3)}>
        <T x={260} y={370} size={12} fill={INK} script>
          {t(
            "point mass: straight spokes, radially inward",
            "point mass: seedhi spokes, radially andar"
          )}
        </T>
      </Fade>

      {/* beat 6 — two masses and the null point */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Circle cx={650} cy={420} r={8} fill={INK} />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <Circle cx={850} cy={420} r={6} fill={INK} />
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 0.9)}
        d="M 570 340 Q 610 390 638 410"
        stroke={GREEN}
        sw={1.8}
        dur={0.4}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 1.3)}
        d="M 570 500 Q 610 450 638 430"
        stroke={GREEN}
        sw={1.8}
        dur={0.4}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 1.7)}
        d="M 930 350 Q 890 390 858 412"
        stroke={GREEN}
        sw={1.8}
        dur={0.4}
      />
      <Draw
        on={beat >= 6}
        delay={dl(6, 2.1)}
        d="M 930 490 Q 890 450 858 428"
        stroke={GREEN}
        sw={1.8}
        dur={0.4}
      />
      <Fade on={beat >= 6} delay={dl(6, 2.8)}>
        <Circle cx={760} cy={420} r={6} fill="none" stroke={RED} strokeWidth={2} strokeDasharray="3 3" />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3.4)}>
        <T x={760} y={480} size={12} fill={RED} script>
          {t(
            "null point — no line passes through",
            "null point — koi line nahi guzarti"
          )}
        </T>
      </Fade>

      {/* beat 7 — the fast sanity check */}
      <Draw on={beat >= 7} delay={dl(7, 0.5)} d="M 66 540 v 40" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={84} y={562} size={13} fill={GREEN} script anchor="start">
          {t(
            "sketch the lines — you instantly know the force direction everywhere",
            "lines sketch karo — har jagah force ki direction turant saaf"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
