/**
 * M11 Ch02 · Section 23 — "Worked: is it a function? — and counting functions"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: worked_examples (TOP = Ex1 verify-a-function, BOTTOM = Ex2 counting speed trap).
 *
 * Beats (board_reveal_at_english [0, 17.66, 37.55, 53.08, 63.91, 77.82, 91.14, 101.8]):
 *  0 Ex1 given: A={1,2,3,4}, B={2,3,5,7}, R={(1,2),(2,3),(3,2),(4,5)}
 *  1 checklist: Promise1✓ all of A present; Promise2✓ no repeats
 *  2 verdict: output 2 shared by 1,3 (many-to-one OK) ⇒ R IS a function
 *  3 Domain={1,2,3,4}, Range={2,3,5}
 *  4 guardrail: 7∈B never hit — codomain not range
 *  5 Ex2 heading: n(A)=3, n(B)=4 — how many functions?
 *  6 boxed: q^p = 4^3 = 64
 *  7 wrong reflexes: 2^12=4096(relations), 3^4=81(swap), 3×4=12(pairs)
 *
 * Layout plan — TOP zone (Ex1, y90..259) + divider + BOTTOM zone (Ex2, y296..409):
 *  b0 | given (17,amber,w700)            | T mid | x264..816  y92..105 (bl 100)
 *  b1 | 2 checklist chips (14)           | Chip  | x322..551 / x571..758  y130..160
 *  b2 | verdict (15,green,w700)          | T mid | x323..758  y173..190 (bl 185)
 *  b3 | Domain/Range (15)                 | T mid | x417..664  y206..223 (bl 218)
 *  b4 | margin bar (red)                  | Draw  | x60  y238..268
 *  b4 | guardrail (14, red)               | T st  | x76..377   y244..259 (bl 255)
 *  --divider-- y=282
 *  b5 | Ex2 heading (17,amber,w800)      | T mid | x298..782  y293..310 (bl 305→310)
 *  b6 | chip "q^p=4^3=64" (19,green)     | Chip  | x461..620  y335..375
 *  b7 | wrong reflexes (14)               | T mid | x327..754  y395..409 (bl 405)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, AMBER_DARK, GREEN, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch02Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={64} size={25} fill={RED} anchor="middle" script>
          {t("Worked Examples — Is It a Function?", "Solved Examples — Kya Yeh Function Hai?")}
        </T>
      </Fade>

      {/* beat 0 — Example 1 given */}
      <Fade on={beat >= 0} delay={dl(0, 0)}>
        <T x={540} y={100} size={17} fill={AMBER_DARK} anchor="middle" weight={700}>
          {"Example 1: A={1,2,3,4}, B={2,3,5,7}, R={(1,2),(2,3),(3,2),(4,5)}"}
        </T>
      </Fade>

      {/* beat 1 — checklist: both promises checked */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <Chip x={322} y={130} w={229} h={30} fill="#E8F5EC" stroke={GREEN_DARK} textFill={GREEN_DARK} size={14} script={false}>
          {t("✓ Promise 1: all of A present", "✓ Promise 1: A poora present")}
        </Chip>
        <Chip x={571} y={130} w={187} h={30} fill="#E8F5EC" stroke={GREEN_DARK} textFill={GREEN_DARK} size={14} script={false}>
          {t("✓ Promise 2: no repeats", "✓ Promise 2: no repeats")}
        </Chip>
      </Fade>

      {/* beat 2 — the verdict */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={185} size={15} fill={GREEN_DARK} anchor="middle" weight={700}>
          {t(
            "Output 2 shared by 1,3 (many-to-one OK) ⇒ R IS a function",
            "Output 2, 1 aur 3 dono se (many-to-one OK) ⇒ R function HAI"
          )}
        </T>
      </Fade>

      {/* beat 3 — domain and range */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={218} size={15} fill={INK} anchor="middle" weight={700}>
          {"Domain={1,2,3,4},  Range={2,3,5}"}
        </T>
      </Fade>

      {/* beat 4 — guardrail: 7 is codomain, not range */}
      <Draw on={beat >= 4} d="M 60 238 L 60 268" stroke={RED} sw={3} delay={dl(4, 0)} />
      <Fade on={beat >= 4} delay={dl(4, 0.4)}>
        <T x={76} y={255} size={14} fill={RED} anchor="start">
          {t(
            "7∈B never hit — in codomain, NOT in range",
            "7∈B kabhi hit nahi hota — codomain mein hai, range mein NAHI"
          )}
        </T>
      </Fade>

      {/* divider */}
      <Draw on={beat >= 5} d="M 100 282 L 980 282" stroke={AMBER_DARK} sw={1} delay={dl(5, 0)} />

      {/* beat 5 — Example 2 heading */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={540} y={310} size={17} fill={AMBER_DARK} anchor="middle" weight={800}>
          {t(
            "Example 2 (JEE speed trap): n(A)=3, n(B)=4 — functions?",
            "Example 2 (JEE speed trap): n(A)=3, n(B)=4 — kitne functions?"
          )}
        </T>
      </Fade>

      {/* beat 6 — the correct count, boxed */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <Chip x={461} y={335} w={159} h={40} fill={GREEN} textFill="#FFFEFB" size={19} script={false}>
          {"q^p = 4^3 = 64"}
        </Chip>
      </Fade>

      {/* beat 7 — the three wrong reflexes, named */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={405} size={14} fill={INK} anchor="middle">
          {t(
            "Wrong: 2^12=4096(relations!); 3^4=81(swapped); 3×4=12(pairs)",
            "Galat: 2^12=4096(relations!); 3^4=81(swap); 3×4=12(pairs)"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
