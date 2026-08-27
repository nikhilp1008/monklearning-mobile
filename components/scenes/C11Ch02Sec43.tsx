/**
 * C11 Ch02 · Section 43 — "The electron's postal address: four quantum numbers and orbital shapes"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_CHEMISTRY.md. `section_type: concept`.
 *
 * Beats (en [0, 15.36, 29.44, 45.82, 58.88, 73.47, 82.09, 96.68]):
 *  0 anchor: a fan disc needs a few numbers — an orbital needs quantum numbers
 *  1 explain: they fall out of Schrödinger's equation — 3 orbital + 1 spin
 *  2 represent: the postal-address row (n/l/mₗ/mₛ)
 *  3 guardrail (high, RED): no two electrons share the same full address (Pauli)
 *  4 explain: shape fixed by l — s sphere, p dumbbell
 *  5 represent: the three orbital shapes (s, p, d)
 *  6 explain: d has 5 members, f has 7 — pattern is 2l+1
 *  7 land: those orientations are the house numbers mₗ is allowed to take
 *
 * Layout plan (single column, x540 center):
 *  title (always)          | T mid | x540 y52 script red
 *  b0 | anchor caption      | T mid | x540 y74            [dims@b1]
 *  b1 | explain caption     | T mid | x540 y98
 *  b2 | address chips ×4    | Chip  | x50/294/538/782 y120..152
 *  b3 | guardrail (RED)     | Chip  | x110..930 y170..206
 *  b4 | shape-intro caption | T mid | x540 y232
 *  b5 | s / p / d shapes    | circ  | cx260/540/820 cy380
 *  b5 | shape labels        | T mid | y460
 *  b6 | 2l+1 caption         | T mid | y490
 *  b7 | closing caption      | T mid | y516
 */

import React from "react";
import { Circle, Ellipse } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, T, Chip, INK, RED, CREAM, AMBER, AMBER_DARK,
  Scene,
} from '@/components/scenes/kit';

const ADDR = [
  { x: 50, s: "n = city (shell)" },
  { x: 294, s: "l = street (shape)" },
  { x: 538, s: "ml = house" },
  { x: 782, s: "ms = seat" },
];

export default function C11Ch02Sec43({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={52} size={13} fill={RED} script>
          {t(
            "the electron's postal address: quantum numbers and orbital shapes",
            "electron ka postal address: quantum numbers aur orbital shapes"
          )}
        </T>
      </Fade>

      {/* beat 0 — anchor */}
      <Fade on={beat >= 0} dim={beat >= 1} delay={dl(0, 0.3)}>
        <T x={540} y={74} size={11} fill={RED} script>
          {t(
            "a fan disc needs a few numbers — an orbital needs quantum numbers",
            "fan disc ko kuch numbers chahiye — orbital ko quantum numbers chahiye"
          )}
        </T>
      </Fade>

      {/* beat 1 — explain */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={98} size={12} fill={INK} script>
          {t(
            "they fall out of solving Schrödinger's equation — 3 describe the orbital, 1 the spin",
            "ye Schrödinger ka equation solve karne se nikalte hain — 3 orbital, 1 spin describe karta"
          )}
        </T>
      </Fade>

      {/* beat 2 — represent: the postal address */}
      {ADDR.map((a, i) => (
        <Fade key={a.x} on={beat >= 2} delay={dl(2, 0.3 + i * 0.2)}>
          <Chip x={a.x} y={120} w={230} h={32} fill={CREAM} stroke={INK} textFill={INK} size={12} script={false}>
            {a.s}
          </Chip>
        </Fade>
      ))}

      {/* beat 3 — guardrail (high): Pauli's exclusion principle */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <Chip x={110} y={170} w={820} h={36} fill={CREAM} stroke={RED} textFill={RED} size={13} script={false}>
          {t(
            "no two electrons share the same full address — Pauli's exclusion principle",
            "koi do electrons same poora address share nahi karte — Pauli's exclusion principle"
          )}
        </Chip>
      </Fade>

      {/* beat 4 — explain: shape fixed by l */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={232} size={12} fill={INK} script>
          {t(
            "shape is fixed by l: s (l=0) = sphere, p (l=1) = dumbbell",
            "shape l se tay hoti hai: s (l=0) = sphere, p (l=1) = dumbbell"
          )}
        </T>
      </Fade>

      {/* beat 5 — represent: the three orbital shapes */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <Circle cx={260} cy={380} r={40} fill={AMBER_DARK} fillOpacity={0.28} stroke={AMBER_DARK} strokeWidth={1.4} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <Ellipse cx={540} cy={352} rx={25} ry={30} fill={AMBER} fillOpacity={0.32} stroke={AMBER} strokeWidth={1.4} />
        <Ellipse cx={540} cy={408} rx={25} ry={30} fill={AMBER} fillOpacity={0.32} stroke={AMBER} strokeWidth={1.4} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <Ellipse cx={820} cy={352} rx={19} ry={22} fill={INK} fillOpacity={0.2} stroke={INK} strokeWidth={1.2} />
        <Ellipse cx={820} cy={408} rx={19} ry={22} fill={INK} fillOpacity={0.2} stroke={INK} strokeWidth={1.2} />
        <Ellipse cx={792} cy={380} rx={22} ry={19} fill={INK} fillOpacity={0.2} stroke={INK} strokeWidth={1.2} />
        <Ellipse cx={848} cy={380} rx={22} ry={19} fill={INK} fillOpacity={0.2} stroke={INK} strokeWidth={1.2} />
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={260} y={460} size={12} fill={AMBER_DARK}>
          {t("s — sphere", "s — sphere")}
        </T>
        <T x={540} y={460} size={12} fill={AMBER_DARK}>
          {t("p — dumbbell", "p — dumbbell")}
        </T>
        <T x={820} y={460} size={12} fill={INK}>
          {t("d — cloverleaf", "d — cloverleaf")}
        </T>
      </Fade>

      {/* beat 6 — explain: the 2l+1 pattern */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={490} size={12} fill={INK} script>
          {t(
            "d (l=2) has five members, f (l=3) has seven — the pattern is 2l+1",
            "d (l=2) mein paanch members hain, f (l=3) mein saat — pattern hai 2l+1"
          )}
        </T>
      </Fade>

      {/* beat 7 — land: house numbers */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <T x={540} y={516} size={12} fill={INK} script>
          {t(
            "those orientations are the house numbers ml is allowed to take",
            "wo orientations bas wo house numbers hain jo ml le sakta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
