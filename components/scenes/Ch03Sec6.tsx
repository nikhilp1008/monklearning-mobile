/**
 * Ch03 · Section 6 — "The toolkit: unit vectors, component form, and resolution"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 9.1, 22.1, 32.0, 56.8, 64.4, 65.4, 66.4, 79.4, 97.0]):
 *  0 title
 *  1 unit vector: pure direction
 *  2 formula: Â = A/|A| + "hat = length one"
 *  3 î ĵ k̂ chips · dimensionless · null vector
 *  4 component form header
 *  5 A = Axî + Ayĵ + Azk̂
 *  6 resolution header
 *  7 Ax = A cosθ · Ay = A sinθ
 *  8 reverse: magnitude + tan
 *  9 red note: cos belongs to the FROM-axis + axes glyph
 *
 * Layout plan (Kalam bl −1.3s..+0.5s · Anek bl −0.78s..+0.31s):
 *  L col x66..520:
 *  b1 | header st x84 bl 108 · underline M84 116 h330 · sub st x84 bl 132 s12
 *  b2 | box x84..300 y150..196 text cx192 bl 180 s16 · caption st x330 bl 180
 *  b3 | bracket M84 208 h152 · chips w44 h32 y216 x84/138/192 · "along x,y,z"
 *       st x260 bl 238 · red line st x84 bl 280 · null line st x84 bl 304
 *  R col x580..1044:
 *  b4 | header st x580 bl 108 · underline M580 116 h380
 *  b5 | box x580..1020 y126..170 text cx800 bl 156 s17 · caption cx800 bl 192 s11
 *  b6 | header st x580 bl 224 · underline M580 232 h330
 *  b7 | "Ax=A cosθ" st x600 bl 258 · "Ay=A sinθ" st x800 bl 258
 *  b8 | "A=√(Ax²+Ay²)" st x600 bl 300 · "tanθ=Ay/Ax" st x820 bl 300 ·
 *       caption st x600 bl 326 s11
 *  b9 | bar M66 356 v64 · lines st x84 bl 376/400/424 · glyph origin (800,458):
 *       x→(940,458) y→(800,352) vec→(908,382) θ arc r34 lbl (852,446) ·
 *       caption cx860 bl 496 s12
 */

import React from "react";
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
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

export default function Ch03Sec6({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={50} size={20} fill={INK} script>
          {t("TOOLKIT 1 — describing a vector", "TOOLKIT 1 — vector ko likhne ka tarika")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.2)} d="M 380 64 h 320" stroke={AMBER} sw={2.2} dur={0.6} />

      {/* beat 1 — unit vector */}
      <Fade on={beat >= 1} delay={dl(1, 0.8)}>
        <T x={84} y={108} size={14} fill={INK} script anchor="start">
          {t("UNIT VECTOR — pure direction", "UNIT VECTOR — sirf direction")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 1.6)} d="M 84 116 h 260" stroke={AMBER} sw={1.8} dur={0.5} />
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={84} y={136} size={12} fill={INK_LIGHT} script anchor="start">
          {t(
            "divide a vector by its own size — direction survives",
            "vector ko usi ke size se bhaag do — direction bachti hai"
          )}
        </T>
      </Fade>

      {/* beat 2 — the notation */}
      <Draw
        on={beat >= 2}
        delay={dl(2, 0.6)}
        d="M 96 150 h 192 q 12 0 12 12 v 22 q 0 12 -12 12 h -192 q -12 0 -12 -12 v -22 q 0 -12 12 -12"
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 2} delay={dl(2, 1.6)}>
        <T x={192} y={180} size={16} fill={INK} weight={800}>
          Â = A ⁄ |A|
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={330} y={180} size={12} fill={AMBER_DARK} script anchor="start">
          {t("the hat means: length ONE", "hat ka matlab: length EK")}
        </T>
      </Fade>

      {/* beat 3 — axis units, dimensionless, null */}
      <Draw on={beat >= 3} delay={dl(3, 0.6)} d="M 84 208 h 152" stroke={AMBER} sw={1.8} dur={0.4} />
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <Chip x={84} y={216} w={44} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={15} script={false}>
          î
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.6)}>
        <Chip x={138} y={216} w={44} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={15} script={false}>
          ĵ
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 2.2)}>
        <Chip x={192} y={216} w={44} h={32} fill={CREAM} stroke={INK_LIGHT} textFill={INK} size={15} script={false}>
          k̂
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={260} y={238} size={12} fill={INK_LIGHT} script anchor="start">
          {t("along x, y, z", "x, y, z ke saath")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={84} y={280} size={12} fill={RED} script anchor="start">
          {t(
            "DIMENSIONLESS — writing û in newtons is a straight error",
            "DIMENSIONLESS — û ko newton mein likhna seedha error hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 10)}>
        <T x={84} y={304} size={12} fill={MUTED} script anchor="start">
          {t(
            "null vector: zero size, direction undefined",
            "null vector: size zero, direction undefined"
          )}
        </T>
      </Fade>

      {/* beat 4 — component form */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={580} y={108} size={14} fill={INK} script anchor="start">
          {t("COMPONENT FORM — how vectors are written", "COMPONENT FORM — vector likha kaise jata hai")}
        </T>
      </Fade>
      <Draw on={beat >= 4} delay={dl(4, 1.6)} d="M 580 116 h 380" stroke={AMBER} sw={1.8} dur={0.5} />

      {/* beat 5 — the form itself */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 0.6)}
        d="M 592 126 h 416 q 12 0 12 12 v 20 q 0 12 -12 12 h -416 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={INK_LIGHT}
        sw={2}
        dur={0.6}
        fill={CREAM}
      />
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={800} y={156} size={17} fill={INK} weight={800}>
          A = Ax î + Ay ĵ + Az k̂
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 3.5)}>
        <T x={800} y={192} size={11} fill={MUTED} script>
          {t(
            "hats carry the directions, components carry the sizes",
            "hats direction dhote hain, components size dhote hain"
          )}
        </T>
      </Fade>

      {/* beat 6 — resolution header */}
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={580} y={224} size={13} fill={INK} script anchor="start">
          {t("RESOLUTION — angle θ from the x-axis", "RESOLUTION — x-axis se angle θ")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1.2)} d="M 580 232 h 330" stroke={AMBER} sw={1.8} dur={0.4} />

      {/* beat 7 — the two workhorses */}
      <Fade on={beat >= 7} delay={dl(7, 0.6)}>
        <T x={600} y={258} size={15} fill={INK} weight={700} anchor="start">
          Ax = A cos θ
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.4)}>
        <T x={800} y={258} size={15} fill={INK} weight={700} anchor="start">
          Ay = A sin θ
        </T>
      </Fade>

      {/* beat 8 — the reverse trip */}
      <Fade on={beat >= 8} delay={dl(8, 0.8)}>
        <T x={600} y={300} size={15} fill={INK} weight={700} anchor="start">
          A = √(Ax² + Ay²)
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 1.8)}>
        <T x={820} y={300} size={15} fill={INK} weight={700} anchor="start">
          tan θ = Ay ⁄ Ax
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 3.5)}>
        <T x={600} y={326} size={11} fill={GREEN} script anchor="start">
          {t("Pythagoras again — components are ⊥", "phir Pythagoras — components ⊥ hain")}
        </T>
      </Fade>

      {/* beat 9 — the FROM-axis warning */}
      <Draw on={beat >= 9} delay={dl(9, 0.8)} d="M 66 356 v 64" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 9} delay={dl(9, 1.6)}>
        <T x={84} y={376} size={13} fill={RED} script anchor="start">
          {t(
            "cos belongs to the axis the angle is measured FROM",
            "cos us axis ka hai jis SE angle naapa gaya hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 6)}>
        <T x={84} y={400} size={13} fill={RED} script anchor="start">
          {t(
            "measure θ from the y-axis → sin and cos SWAP places",
            "θ ko y-axis se naapo → sin aur cos jagah BADAL lete hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 10)}>
        <T x={84} y={424} size={13} fill={RED} script anchor="start">
          {t(
            "before writing anything, ask: from which axis?",
            "kuchh bhi likhne se pehle poochho: kis axis se?"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 9} delay={dl(9, 2.5)} d={arrowD(800, 458, 940, 458)} stroke={INK_LIGHT} sw={1.8} dur={0.5} />
      <Draw on={beat >= 9} delay={dl(9, 3.1)} d={arrowD(800, 458, 800, 352)} stroke={INK_LIGHT} sw={1.8} dur={0.5} />
      <Draw on={beat >= 9} delay={dl(9, 3.8)} d={arrowD(800, 458, 908, 382)} stroke={INK} sw={2.6} dur={0.6} />
      <Draw on={beat >= 9} delay={dl(9, 4.6)} d="M 834 458 A 34 34 0 0 0 827.9 438.5" stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Fade on={beat >= 9} delay={dl(9, 5.2)}>
        <T x={852} y={446} size={11} fill={AMBER_DARK} weight={700}>θ</T>
      </Fade>
      <Fade on={beat >= 9} delay={dl(9, 11)}>
        <T x={860} y={496} size={12} fill={RED} script>
          {t("same vector, angle from y → swap!", "wahi vector, angle y se → swap!")}
        </T>
      </Fade>
    </Scene>
  );
}
