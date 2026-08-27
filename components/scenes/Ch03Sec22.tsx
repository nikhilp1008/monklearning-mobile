/**
 * Ch03 · Section 22 — "The toolkit: the cross product and the triple products"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 8.0, 26.4, 51.2, 71.4, 96.3, 121.1, 145.9, 153.5]):
 *  0 heading
 *  1 definition box + VECTOR tag
 *  2 properties
 *  3 determinant tool
 *  4 geometry: parallelogram area + glyph
 *  5 scalar triple product
 *  6 vector triple product (BAC−CAB)
 *  7 applications header
 *  8 τ / L / qv×B rows + closing
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  b1 | box x140..760 y76..122 text cx450 bl 106 s15 · tag st x776 bl 106 s12
 *  b2 | header st x84 bl 150 · underline M84 158 h200 · lines st x84 bl 184 / 210
 *  b3 | bars M100 260 v84 · M320 260 v84 · rows cx140/210/280 bl 280/308/336 s12 ·
 *       caption st x84 bl 362 s11
 *  b4 | st x84 bl 398 s13 · script st x84 bl 424 s12 · glyph M360 420 L440 420 L470 385 L390 385 Z
 *  b5 | header st x570 bl 158 s13 · lines st x570 bl 184 / 208 s12
 *  b6 | st x570 bl 248 s14 · script st x570 bl 272 s12
 *  b7 | header st x570 bl 316 · underline M570 324 h330
 *  b8 | rows st x590 bl 352 / 380 / 408 s13 · closing cx540 bl 470 s12
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
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

export default function Ch03Sec22({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — heading */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={48} size={20} fill={INK} script>
          {t(
            "TOOLKIT — cross product & the triple products",
            "TOOLKIT — cross product aur triple products"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 340 62 h 400" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — the definition */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.6)}
        d="M 152 76 h 596 q 12 0 12 12 v 22 q 0 12 -12 12 h -596 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.2}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.6)}>
        <T x={450} y={106} size={15} fill={INK} weight={800}>
          A×B = AB sinθ · n̂     |A×B| = AB sinθ
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 6)}>
        <T x={776} y={106} size={12} fill={RED} script anchor="start">
          {t("VECTOR. sin, not cos.", "VECTOR. sin, cos nahi.")}
        </T>
      </Fade>

      {/* beat 2 — properties */}
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={84} y={150} size={13} fill={INK} script anchor="start">
          {t("PROPERTIES", "PROPERTIES")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1.2)} d="M 84 158 h 200" stroke={AMBER} sw={1.8} dur={0.4} />
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={84} y={184} size={13} fill={INK} weight={700} anchor="start">
          {t("A×B = − B×A — order matters", "A×B = − B×A — order maayne rakhta hai")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 8)}>
        <T x={84} y={210} size={13} fill={INK} weight={700} anchor="start">
          {t("A×A = 0 (the zero VECTOR) · î→ĵ→k̂ cyclic", "A×A = 0 (zero VECTOR) · î→ĵ→k̂ cyclic")}
        </T>
      </Fade>

      {/* beat 3 — the determinant tool */}
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d="M 100 260 v 84" stroke={INK} sw={2} dur={0.4} />
      <Draw on={beat >= 3} delay={dl(3, 1)} d="M 320 260 v 84" stroke={INK} sw={2} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <T x={140} y={280} size={12} fill={INK} weight={700}>î</T>
        <T x={210} y={280} size={12} fill={INK} weight={700}>ĵ</T>
        <T x={280} y={280} size={12} fill={INK} weight={700}>k̂</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.4)}>
        <T x={140} y={308} size={12} fill={INK} weight={700}>Ax</T>
        <T x={210} y={308} size={12} fill={INK} weight={700}>Ay</T>
        <T x={280} y={308} size={12} fill={INK} weight={700}>Az</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3.2)}>
        <T x={140} y={336} size={12} fill={INK} weight={700}>Bx</T>
        <T x={210} y={336} size={12} fill={INK} weight={700}>By</T>
        <T x={280} y={336} size={12} fill={INK} weight={700}>Bz</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 5)}>
        <T x={84} y={362} size={11} fill={RED} script anchor="start">
          {t(
            "expand the top row — write the middle − BEFORE computing",
            "top row se kholo — beech ka − compute se PEHLE likho"
          )}
        </T>
      </Fade>

      {/* beat 4 — the geometry */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={84} y={398} size={13} fill={INK} weight={700} anchor="start">
          {t("|A×B| = AREA of the parallelogram", "|A×B| = parallelogram ka AREA")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 2)}
        d="M 360 420 L 440 420 L 470 385 L 390 385 Z"
        stroke={AMBER_DARK}
        sw={1.8}
        dur={0.7}
      />
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={84} y={424} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "triangle = half of it — keep the ½ straight",
            "triangle uska aadha — ½ ka hisaab saaf rakho"
          )}
        </T>
      </Fade>

      {/* beat 5 — scalar triple product */}
      <Fade on={beat >= 5} delay={dl(5, 0.8)}>
        <T x={570} y={158} size={13} fill={INK} weight={700} anchor="start">
          {t("A·(B×C) — scalar triple product", "A·(B×C) — scalar triple product")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 5)}>
        <T x={570} y={184} size={12} fill={INK_LIGHT} script anchor="start">
          {t(
            "one 3×3 determinant → VOLUME of the parallelepiped",
            "ek 3×3 determinant → parallelepiped ka VOLUME"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 12)}>
        <T x={570} y={208} size={12} fill={GREEN} script anchor="start">
          {t(
            "= 0 → no volume → COPLANAR: the fastest coplanarity test",
            "= 0 → volume nahi → COPLANAR: sabse tez coplanarity test"
          )}
        </T>
      </Fade>

      {/* beat 6 — vector triple product */}
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={570} y={248} size={14} fill={INK} weight={700} anchor="start">
          A×(B×C) = B(A·C) − C(A·B)
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 6)}>
        <T x={570} y={272} size={12} fill={AMBER_DARK} script anchor="start">
          {t(
            "“BAC − CAB” — the answer lies back in the B–C plane",
            "“BAC − CAB” — jawaab wapas B–C ke plane mein hota hai"
          )}
        </T>
      </Fade>

      {/* beat 7 — applications header */}
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={570} y={316} size={14} fill={INK} script anchor="start">
          {t(
            "APPLICATIONS — every one “how much across”",
            "APPLICATIONS — har ek “kitna aar-paar”"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 1.4)} d="M 570 324 h 330" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 8 — the three rows */}
      <Fade on={beat >= 8} delay={dl(8, 0.8)}>
        <T x={590} y={352} size={13} fill={INK} weight={700} anchor="start">
          {t("τ = r × F — force across the lever arm", "τ = r × F — force lever arm ke aar-paar")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 4)}>
        <T x={590} y={380} size={13} fill={INK} weight={700} anchor="start">
          {t("L = r × p — angular momentum", "L = r × p — angular momentum")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <T x={590} y={408} size={13} fill={INK} weight={700} anchor="start">
          {t("F = q v × B — magnetic push", "F = q v × B — magnetic dhakka")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 14)}>
        <T x={540} y={470} size={12} fill={GREEN} script>
          {t(
            "strange directions? the right-hand rule is quietly doing the work",
            "ajeeb directions? right-hand rule chupchaap kaam kar raha hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
