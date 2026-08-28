/**
 * Ch12 · Section 3 — "How we know molecules really move"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 1, 18.83, 34.02, 54.76, 67.73, 86.33]):
 *  0 title + underline · 1 THE DEMO: dish of still water, pollen grains, one
 *    grain's erratic zigzag path traced (Brown, 1827) · 2 zoom: invisible
 *    water-molecule dots bombard the grain from every side · 3 comparison —
 *    bigger/cooler → calmer path vs smaller/hotter → wilder path; verdict
 *    (fingerprint of molecular motion) · 4 diffusion: ink rings + perfume
 *    spread · 5 oil-film: drop → one-molecule-thick film → size ~nm-Å · 6
 *    four windows, one conclusion
 *
 * Layout plan (Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | title (script 28, red)         | T mid | x260..820 y36..86 (bl72)
 *  b0 | underline                       | Draw  | y94 x330..750
 *  b1 | dish outline                    | Draw  | x120..960 y120..290
 *  b1 | "Robert Brown, 1827" (13,muted)| T st  | x140..~260 y145..167 (bl160)
 *  b1 | static grains ×2 (r6, ink)      | circ  | (350,255) (760,245)
 *  b1 | zigzag path + moving grain      | Draw  | x500..560 y130..210
 *  b2 | molecule dots ×6 + bombard arr. | mix   | ring r25 around (560,150)
 *  b2 | "invisible water molecules"    | T mid | x560 y112 (13, muted)
 *  b3 | calm path + label (left)        | Draw  | x230..290 y230..270
 *  b3 | wild path + label (right)       | Draw  | x800..880 y225..270
 *  b3 | verdict (script 16, green)      | T mid | x540 y303 (bl303)
 *  b4 | ink rings + label                | Draw  | c(250,352)
 *  b4 | perfume dots + label             | Draw  | c(830,352)
 *  b4 | "diffusion…" (13, amber_dark)   | T mid | x540 y352
 *  b5 | oil drop → film + chip           | mix   | x160..980 y400..450
 *  b6 | 4 chips + verdict line           | Chip  | y480..514, verdict y550
 */

import React from "react";
import { Circle, Line } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  arrowD,
  INK,
  INK_LIGHT,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch12Sec3({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const bombardAngles = [0, 60, 120, 180, 240, 300];

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={72} size={26} fill={RED} script>
          {t("how we know molecules really move", "hume kaise pata molecules move karte hain")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 0.3)} d="M 330 94 C 420 90, 660 98, 750 92" stroke={RED} sw={2.4} dur={0.7} />

      {/* beat 1 — THE DEMO: dish, grains, one grain's erratic path traced */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0)}
        d="M 132 120 h 816 q 12 0 12 12 v 146 q 0 12 -12 12 h -816 q -12 0 -12 -12 v -146 q 0 -12 12 -12"
        stroke={INK}
        sw={2.2}
        dur={0.9}
      />
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={140} y={160} size={13} fill={MUTED} script anchor="start">
          {t("Robert Brown, 1827", "Robert Brown, 1827")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <Circle cx={350} cy={255} r={6} fill={INK} />
        <Circle cx={760} cy={245} r={6} fill={INK} />
      </Fade>
      <Draw
        on={beat >= 1}
        delay={dl(1, 2)}
        d="M 500 210 L 525 195 L 510 175 L 535 165 L 515 145 L 555 150 L 540 130 L 560 150"
        stroke={MUTED}
        sw={1.6}
        dur={1.6}
      />
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        <Circle cx={560} cy={150} r={8} fill={AMBER_DARK} />
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.3)}>
        <T x={560} y={272} size={13} fill={INK} script>
          {t("pollen grains in still water", "pollen grains, still paani mein")}
        </T>
      </Fade>

      {/* beat 2 — zoom: bombarding water molecules */}
      {bombardAngles.map((a, i) => {
        const rad = (a * Math.PI) / 180;
        const ox = 560 + 25 * Math.cos(rad);
        const oy = 150 + 25 * Math.sin(rad);
        const ix = 560 + 12 * Math.cos(rad);
        const iy = 150 + 12 * Math.sin(rad);
        return (
          <Fade key={a} on={beat >= 2} delay={dl(2, 0.3 + i * 0.15)}>
            <Circle cx={ox} cy={oy} r={2.6} fill={INK_LIGHT} />
            <Line x1={ox} y1={oy} x2={ix} y2={iy} stroke={INK_LIGHT} strokeWidth={1.4} />
          </Fade>
        );
      })}
      <Fade on={beat >= 2} delay={dl(2, 1.5)}>
        <T x={560} y={112} size={13} fill={MUTED} script>
          {t("invisible water molecules kick it", "invisible water molecules jhatka dete")}
        </T>
      </Fade>

      {/* beat 3 — comparison + verdict */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 0.3)}
        d="M 240 260 L 255 248 L 248 236 L 262 230"
        stroke={INK}
        sw={1.4}
        dur={0.6}
      />
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <Circle cx={262} cy={230} r={5} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.4)}>
        <T x={252} y={222} size={11} fill={MUTED} script>
          {t("bigger/cooler → calm", "bada/thanda → calm")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 2)}
        d="M 800 268 L 825 250 L 808 238 L 838 228 L 815 210 L 850 216 L 830 195"
        stroke={INK}
        sw={1.4}
        dur={0.9}
      />
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <Circle cx={830} cy={195} r={5} fill={INK} />
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.3)}>
        <T x={815} y={186} size={11} fill={MUTED} script>
          {t("smaller/hotter → wild", "chota/garam → wild")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 4.2)}>
        <T x={540} y={306} size={16} fill={GREEN} script>
          {t(
            "Brownian motion = visible fingerprint of molecular motion",
            "Brownian motion = molecular motion ka visible fingerprint"
          )}
        </T>
      </Fade>

      {/* beat 4 — diffusion: ink rings + perfume spread */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Circle cx={220} cy={358} r={4} fill={AMBER_DARK} />
      </Fade>
      {[14, 24, 34].map((r, i) => (
        <Fade key={r} on={beat >= 4} delay={dl(4, 0.4 + i * 0.4)}>
          <Circle cx={220} cy={358} r={r} fill="none" stroke={AMBER_DARK} strokeWidth={1.4} opacity={1 - i * 0.28} />
        </Fade>
      ))}
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={220} y={402} size={12} fill={MUTED} script>
          {t("ink in water", "ink paani mein")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.4)}>
        <Circle cx={860} cy={358} r={4} fill={GREEN} />
      </Fade>
      {[
        [30, 20],
        [-28, 22],
        [10, -26],
        [-16, -24],
        [34, -6],
      ].map(([dx, dy], i) => (
        <Fade key={`${dx}-${dy}`} on={beat >= 4} delay={dl(4, 2.8 + i * 0.15)}>
          <Circle cx={860 + dx} cy={358 + dy} r={2.6} fill={GREEN} opacity={0.7} />
        </Fade>
      ))}
      <Fade on={beat >= 4} delay={dl(4, 3.6)}>
        <T x={860} y={402} size={12} fill={MUTED} script>
          {t("perfume across a room", "perfume kamre mein")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 4.3)}>
        <T x={540} y={358} size={13} fill={AMBER_DARK} script>
          {t("diffusion: random thermal motion", "diffusion: random thermal motion")}
        </T>
      </Fade>

      {/* beat 5 — oil-film: drop spreads one molecule thick */}
      <Fade on={beat >= 5} delay={dl(5, 0.2)}>
        <Circle cx={460} cy={440} r={7} fill={AMBER_DARK} />
      </Fade>
      <Draw on={beat >= 5} delay={dl(5, 1)} d={arrowD(478, 440, 504, 440)} stroke={INK} sw={2} dur={0.4} />
      <Draw
        on={beat >= 5}
        delay={dl(5, 1.6)}
        d="M 540 408 A 32 32 0 1 1 539.9 408"
        stroke={AMBER_DARK}
        sw={1.4}
        dur={0.9}
      />
      <Fade on={beat >= 5} delay={dl(5, 2.6)}>
        <T x={540} y={498} size={12} fill={MUTED} script>
          {t("film — one molecule thick", "film — ek molecule mota")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.2)}>
        <Chip x={700} y={418} w={280} h={38} fill={CREAM} stroke={AMBER} textFill={INK} size={15} script={false}>
          {t("size ≈ 1 nm down to 1 Å", "size ≈ 1 nm se 1 Å tak")}
        </Chip>
      </Fade>

      {/* beat 6 — four windows, one conclusion */}
      {[
        [80, "Brownian"],
        [310, "Diffusion"],
        [540, "Oil-film"],
        [770, "Whole-ratios"],
      ].map(([x, label], i) => (
        <Fade key={label as string} on={beat >= 6} delay={dl(6, 0.3 + i * 0.5)}>
          <Chip
            x={x as number}
            y={520}
            w={190}
            h={32}
            fill={CREAM}
            stroke={AMBER}
            textFill={INK}
            size={14}
            script={false}
          >
            {label}
          </Chip>
        </Fade>
      ))}
      <Fade on={beat >= 6} delay={dl(6, 2.8)}>
        <T x={540} y={583} size={19} fill={GREEN} script weight={700}>
          {t(
            "matter is molecular — and its molecules move",
            "matter molecular hai — aur molecules move karte hain"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
