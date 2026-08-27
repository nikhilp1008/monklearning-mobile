/**
 * M11 Ch02 · Section 28 — "Cheat sheet: rapid recall for the whole chapter"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md + SCENE_AUTHORING_MATHS.md.
 * section_type: cheat_sheet — no segments_* for this position (recap type, expected);
 * narration reference is board_content itself. FINAL section of the chapter —
 * the chapter's own mnemonics, revealed in the order the chapter taught them.
 *
 * Beats (board_reveal_at_english [0, 6.83, 22.95, 35.24, 48.9, 66.47, 79.7, 97.37]):
 *  0 title (always-on) · 1 order is sacred; every-with-every⇒multiply; A×B=B×A⟺A=B
 *  2 boxed: pairs=pq | relations=2^pq | functions=q^p
 *  3 Domain Left Range Right; range reached codomain allowed; ∅/universal both legal
 *  4 function=every input used+single-valued; vertical line test; root/denom open-closed
 *  5 margin note (2 lines): recovering A from A×A; common-pairs=(n(A∩B))²
 *  6 standard ranges: |x|,sgn,[x],constant; R×R=XY-plane
 *  7 the three mantras: vending machine; outputs^inputs; highlighted slice
 *
 * Layout plan — single centered column, boxes estimated:
 *  b0 | title (script 24, red)          | T mid | x300..780  y34..65  (bl 58)
 *  b1 | order-sacred line (14)           | T mid | x267..813  y82..97  (bl 93)
 *  b2 | chip pairs/relations/fns (15,grn)| Chip  | x370..711  y120..154
 *  b3 | D-L R-R line (14)                | T mid | x229..852  y169..184 (bl 180)
 *  b4a| function/VLT line (14)           | T mid | x320..761  y199..214 (bl 210)
 *  b4b| root/denom line (14)             | T mid | x351..729  y230..245 (bl 241)
 *  b5 | margin bar (red)                 | Draw  | x60  y265..325
 *  b5 | line1/line2 (14, red)            | T st  | x76..538 / x76..356  y272..317
 *  b6 | standard-ranges line (14)        | T mid | x292..789  y339..354 (bl 350)
 *  b7 | mantras line (14)                 | T mid | x232..848  y371..386 (bl 382)
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, INK, GREEN, RED,
  Scene,
} from '@/components/scenes/kit';

export default function M11Ch02Sec28({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* title — always on */}
      <Fade on={true}>
        <T x={540} y={58} size={24} fill={RED} anchor="middle" script>
          {t("Rapid Recall — Relations and Functions", "Rapid Recall — Relations aur Functions")}
        </T>
      </Fade>

      {/* beat 1 — order is sacred */}
      <Fade on={beat >= 1} delay={dl(1, 0)}>
        <T x={540} y={93} size={14} fill={INK} anchor="middle">
          {"Order is sacred: (a,b)=(c,d)⇔a=c,b=d. \"Every-with-every\"⇒MULTIPLY. A×B=B×A⇔A=B."}
        </T>
      </Fade>

      {/* beat 2 — the three counting formulas, boxed */}
      <Fade on={beat >= 2} delay={dl(2, 0)}>
        <Chip x={370} y={120} w={341} h={34} fill={GREEN} textFill="#FFFEFB" size={15} script={false}>
          {"pairs=pq | relations=2^pq | functions=q^p"}
        </Chip>
      </Fade>

      {/* beat 3 — Domain Left Range Right; reached vs allowed */}
      <Fade on={beat >= 3} delay={dl(3, 0)}>
        <T x={540} y={180} size={14} fill={INK} anchor="middle">
          {"\"Domain Left, Range Right.\" \"Range reached, codomain allowed.\" ∅ & universal both legal."}
        </T>
      </Fade>

      {/* beat 4 — function definition + vertical line test + strict/non-strict */}
      <Fade on={beat >= 4} delay={dl(4, 0)}>
        <T x={540} y={210} size={14} fill={INK} anchor="middle">
          {"Function=every input used, single-valued. Vertical line test."}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.6)}>
        <T x={540} y={241} size={14} fill={INK} anchor="middle">
          {"Root closes(≥0), denom opens(≠0); f/g kicks out g=0."}
        </T>
      </Fade>

      {/* beat 5 — margin note: recovering A, common-pairs formula */}
      <Draw on={beat >= 5} d="M 60 265 L 60 325" stroke={RED} sw={3} delay={dl(5, 0)} />
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={76} y={283} size={14} fill={RED} anchor="start">
          {"\"Square-root to size, list to elements\" — recovering A from A×A."}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={76} y={313} size={14} fill={RED} anchor="start">
          {"Common pairs of A×B & B×A = (n(A∩B))²."}
        </T>
      </Fade>

      {/* beat 6 — standard function ranges */}
      <Fade on={beat >= 6} delay={dl(6, 0)}>
        <T x={540} y={350} size={14} fill={INK} anchor="middle">
          {"Standard ranges: |x|→[0,∞); sgn→{-1,0,1}; [x]→Z; c→{c}. R×R=XY-plane."}
        </T>
      </Fade>

      {/* beat 7 — the chapter's mantras, one last time */}
      <Fade on={beat >= 7} delay={dl(7, 0)}>
        <T x={540} y={382} size={14} fill={INK} anchor="middle">
          {"Mantras: \"one button, one snack\"; \"outputs^inputs\"; \"relation=highlighted slice of A×B\""}
        </T>
      </Fade>
    </Scene>
  );
}
