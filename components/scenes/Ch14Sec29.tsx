/**
 * Ch14 · Section 29 — "The asymmetry examiners love, and where Doppler shows up"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.14, 22.65, 30.81, 46.78, 56.8, 73.14, 92.44]):
 *  0 hook: JEE/NEET favourite subtlety — separates real understanding
 *  1 the figure: source moves (left) vs observer moves (right)
 *  2 key claim: moving source ≠ moving observer, even at same speed
 *  3 why: source moving changes λ in air; observer moving changes effective speed
 *  4 2 mechanisms → 2 formulas → different answers (the trap!)
 *  5 why sound behaves this way: medium is a fixed stage; light has none → symmetric
 *  6 Doppler everywhere: radar gun, sonar, galaxy redshift
 *  7 3 limits: line-of-sight only, wind adds, v_source<v_sound (else shock wave)
 *
 * Layout plan (measured ratios: Kalam bl−1.3s..+0.5s, Anek bl−0.78s..+0.31s):
 *  b0 | caption (13,muted)            | T mid | x540 bl110            y97..117
 *  b1 | LEFT header (14)              | T mid | x290 bl285            y273..286
 *  b1 | LEFT axis+source+arrow+ticks  | Draw  | x120..460 y315
 *  b1 | LEFT observer dot             | Draw  | c(440,315) r6
 *  b1 | RIGHT header (14)             | T mid | x790 bl285            y273..286
 *  b1 | RIGHT axis+source+ticks       | Draw  | x620..960 y315
 *  b1 | RIGHT observer dot+arrow      | Draw  | c(920,315) r6 + arrow
 *  b3 | LEFT label (11)               | T mid | x290 bl355            y344..355
 *  b3 | RIGHT label (11)              | T mid | x790 bl355            y344..355
 *  b2 | key-claim chip (h40,s15)      | Chip  | x270..810 y390..430
 *  b4 | trap text (12)                | T mid | x540 bl450            y438..451
 *  b5 | medium note (12)              | T mid | x540 bl475            y463..476
 *  b6 | doppler-everywhere chip (h40) | Chip  | x200..880 y500..540
 *  b7 | limits chip (h44,s12.5)       | Chip  | x150..930 y550..594
 */

import React from "react";
import { Circle } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, arrowD, INK, MUTED, AMBER, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

const LEFT_TICKS = [280, 300, 320, 340, 360, 380];
const RIGHT_TICKS = [700, 740, 780, 820, 860, 900];

export default function Ch14Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={68} size={22} fill={RED} script>
          {t("the asymmetry examiners love", "asymmetry jo examiners ko pasand hai")}
        </T>
      </Fade>

      {/* beat 0 — hook */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={110} size={13} fill={MUTED} script>
          {t(
            "JEE/NEET favourite subtlety — separates real understanding",
            "JEE/NEET favourite subtlety — sach mein samajhne walon ko alag karti"
          )}
        </T>
      </Fade>

      {/* beat 1 — the figure: source moves vs observer moves */}
      <Fade on={beat >= 1} delay={dl(1, 0.2)}>
        <T x={290} y={285} size={14} fill={INK} weight={700}>
          SOURCE MOVES
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.6)} d="M 120 315 L 460 315" stroke={MUTED} sw={1.4} dur={0.4} />
      <Fade on={beat >= 1} delay={dl(1, 1.0)}>
        <Circle cx={200} cy={315} r={5} fill={AMBER_DARK} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.3)} d={arrowD(200, 315, 230, 315)} stroke={AMBER_DARK} sw={2} dur={0.3} />
      {LEFT_TICKS.map((x, i) => (
        <Draw key={x} on={beat >= 1} delay={dl(1, 1.7 + i * 0.12)} d={`M ${x} 308 L ${x} 322`} stroke={GREEN} sw={1.8} dur={0.2} />
      ))}
      <Draw on={beat >= 1} delay={dl(1, 2.6)} d="M 434 315 A 6 6 0 1 1 446 315 A 6 6 0 1 1 434 315" stroke={INK} sw={1.8} dur={0.3} />

      <Fade on={beat >= 1} delay={dl(1, 3.0)}>
        <T x={790} y={285} size={14} fill={INK} weight={700}>
          OBSERVER MOVES
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 3.4)} d="M 620 315 L 960 315" stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 1} delay={dl(1, 3.8)} d="M 634 315 A 6 6 0 1 1 646 315 A 6 6 0 1 1 634 315" stroke={INK} sw={1.8} dur={0.3} />
      {RIGHT_TICKS.map((x, i) => (
        <Draw key={x} on={beat >= 1} delay={dl(1, 4.2 + i * 0.12)} d={`M ${x} 308 L ${x} 322`} stroke={AMBER} sw={1.8} dur={0.2} />
      ))}
      <Fade on={beat >= 1} delay={dl(1, 5.1)}>
        <Circle cx={920} cy={315} r={5} fill={AMBER_DARK} />
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 5.4)} d={arrowD(920, 315, 890, 315)} stroke={AMBER_DARK} sw={2} dur={0.3} />

      {/* beat 3 — why they differ */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={290} y={355} size={11} fill={GREEN}>
          {t("air's λ physically changes", "air ka λ physically badalta")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={790} y={355} size={11} fill={AMBER_DARK}>
          {t("λ unchanged; effective speed changes", "λ same rehta; effective speed badalta")}
        </T>
      </Fade>

      {/* beat 2 — the key claim */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <Chip x={270} y={390} w={540} h={40} fill="#fff" stroke={RED} textFill={RED} size={15} script={false}>
          {t("moving source ≠ moving observer — even at SAME speed!", "moving source ≠ moving observer — same speed pe bhi!")}
        </Chip>
      </Fade>

      {/* beat 4 — the trap */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={540} y={450} size={12} fill={INK} script>
          {t(
            "2 mechanisms → 2 formulas → different answers (favourite trap!)",
            "2 mechanisms → 2 formulas → alag answers (favourite trap!)"
          )}
        </T>
      </Fade>

      {/* beat 5 — why sound behaves this way */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={475} size={12} fill={MUTED} script>
          {t(
            "sound needs a medium (air=fixed stage); light has NONE → symmetric!",
            "sound ko medium chahiye (air=fixed stage); light ka koi nahi → symmetric!"
          )}
        </T>
      </Fade>

      {/* beat 6 — Doppler everywhere */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Chip x={200} y={500} w={680} h={40} fill={CREAM} stroke={AMBER_DARK} textFill={INK} size={13} script={false}>
          {t(
            "Doppler everywhere: radar gun · sonar · galaxy redshift (universe expanding!)",
            "Doppler har jagah: radar gun · sonar · galaxy redshift (universe expand ho raha!)"
          )}
        </Chip>
      </Fade>

      {/* beat 7 — the three limits */}
      <Fade on={beat >= 7} delay={dl(7, 0.3)}>
        <Chip x={150} y={550} w={780} h={44} fill="#fff" stroke={INK} textFill={INK} size={12.5} script={false}>
          {t(
            "3 limits: line-of-sight component only · wind adds · v_source<v_sound (else shock wave!)",
            "3 limits: sirf line-of-sight component · wind add hota · v_source<v_sound (nahi toh shock wave!)"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
