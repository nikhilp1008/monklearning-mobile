/**
 * M11 Ch02 · Section 19 — "Fine print: single-valued roots, natural domain, equality of functions"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 *
 * Beats (board_reveal_at_english [0, 11.09, 29.1, 48.55, 68.1, 85.93, 103.77]):
 *  0 title (always-on) · 1 √x = NON-NEGATIVE root only; ± is crossed out
 *  2 many-to-one ALLOWED; one-to-many BANNED; missing image ⇒ not on A
 *  3 natural domain: f(x)=1/x, no stated domain → R − {0}
 *  4 boxed formula: f=g ⟺ same domain AND f(x)=g(x) ∀x
 *  5 guardrail (2 lines): same rule, different domain ⇒ DIFFERENT function
 *  6 real-valued vs real function distinction
 *
 * Layout plan — single centered column, boxes estimated:
 *  b0 | title (script 26, red)          | T mid  | x300..780  y34..70  (bl 62)
 *  b1 | "√x→NON-NEG only; ± NOT fn" (14)| T st   | x369..712  y89..104 (bl 100) · ± crossed
 *  b2 | many/one-to-many line (14)      | T mid  | x309..771  y121..136 (bl 132)
 *  b3 | natural domain line (14)        | T mid  | x267..813  y153..168 (bl 164)
 *  b4 | chip f=g formula (17,green)     | Chip   | x379..702  y195..233
 *  b5 | margin bar (red)                | Draw   | x60  y258..310
 *  b5 | line1 (14, red)                 | T st   | x76..433   y261..276 (bl 272)
 *  b5 | line2 (14, red)                 | T st   | x76..293   y291..306 (bl 302)
 *  b6 | real-valued/real-function (14)  | T mid  | x337..743  y325..339 (bl 335)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, crossD, INK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch02Sec19({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={62} size={26} fill={RED} anchor="middle" script>
          {t("Fine print that decides marks", "Fine print jo marks decide karta hai")}
        </T>
      </Fade>

      {/* beat 1 — square root convention */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={355} y={100} size={14} fill={INK} anchor="start">
          {"√x → NON-NEGATIVE root only;"}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 0.5)}>
        <T x={578} y={100} size={14} fill={RED} anchor="start" weight={800}>
          ±
        </T>
      </Fade>
      <Draw on={beat >= 1} d={crossD(576, 88, 13, 15)} stroke={RED} sw={1.8} delay={dl(1, 0.9)} />
      <Fade on={beat >= 1} delay={dl(1, 1.2)}>
        <T x={602} y={100} size={14} fill={INK} anchor="start">
          {"is NOT a function"}
        </T>
      </Fade>

      {/* beat 2 — many-to-one allowed, one-to-many banned */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <T x={540} y={132} size={14} fill={INK} anchor="middle">
          {t(
            "Many-to-one ALLOWED; one-to-many BANNED; missing image ⇒ not on A",
            "Many-to-one ALLOWED; one-to-many BANNED; image missing ⇒ A pe function nahi"
          )}
        </T>
      </Fade>

      {/* beat 3 — natural domain convention */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={164} size={14} fill={INK} anchor="middle">
          {t(
            "Natural domain: f(x)=1/x (no domain stated) → all x where rule works (R − {0})",
            "Natural domain: f(x)=1/x (domain nahi diya) → jahan rule chale (R − {0})"
          )}
        </T>
      </Fade>

      {/* beat 4 — equality of functions, boxed */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <Chip x={379} y={195} w={323} h={38} fill={GREEN} textFill="#FFFEFB" size={17} script={false}>
          {"f=g ⇔ same domain AND f(x)=g(x) ∀x"}
        </Chip>
      </Fade>

      {/* beat 5 — guardrail: same rule, different domain, different function */}
      <Draw on={beat >= 5} d="M 60 258 L 60 310" stroke={RED} sw={3} delay={dl(5, 0)} />
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={76} y={272} size={14} fill={RED} anchor="start" weight={700}>
          {t("Same rule, different domain ⇒ DIFFERENT function:", "Same rule, alag domain ⇒ DIFFERENT function:")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={76} y={302} size={14} fill={RED} anchor="start">
          {"f(x)=x on R  ≠  g(x)=x on [0,1]"}
        </T>
      </Fade>

      {/* beat 6 — real-valued vs real function */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={335} size={14} fill={INK} anchor="middle">
          {"Real-valued: Range(f)⊆R.  Real function: ALSO Domain⊆R."}
        </T>
      </Fade>
    </Scene>
  );
}
