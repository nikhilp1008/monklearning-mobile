/**
 * Ch01 · Section 48 — "Load-bearing digits and scaffolding digits"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.9, 28.2, 43.9, 59.2, 84.1, 102.3, 112.2]):
 *  0 title · beam on two green columns + muted scaffold lattice beside it
 *  1 hero number 0.00450 kg digit by digit · "six digits — how many working?"
 *  2 legend chips: load-bearing (green) / scaffolding (muted)
 *  3 leading zeros turn muted · bracket beneath · "only places the decimal"
 *  4 arrow → "= 4.50 g" · zeros vanished ⇒ never information
 *  5 green underlines under 450 in both numbers · survive the unit change
 *  6 chip "3 sig figs — not 6" · count the structure, not the digits
 *  7 closing: holding weight, or holding the decimal point?
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | beam M100 128 h190 · cols x135/x255 y128..206 · lattice x305..330 · ground y210
 *  b2 | legend chips x700..1030 y120..152 / y164..196 script 15
 *  b1 | question script 15 mid 540 bl 268 · digits 56 bl 330: 0@400 .@428 0@456 0@494 4@532 5@570 0@608 · kg 26 st 642
 *  b3 | bracket x386..508 y354..362 · label cx430 bl 392 (box 296..564)
 *  b4 | arrow (678,315)→(717,315) · "= 4.50 g" 40 st x730 bl 330 · label cx840 bl 400 (663..1017)
 *  b5 | underline x518..622 y354 · underline x770..838 y348 · label cx530 bl 442 (319..741)
 *  b6 | chip x150..390 y480..520 · script cx700 bl 505 (546..854)
 *  b7 | script 15 amber-dark mid bl 570
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
  AMBER_DARK,
  GREEN,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch01Sec48({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);
  const scaff = beat >= 3 ? MUTED : INK;

  return (
    <Scene>
      {/* beat 0 — the mental image */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={62} size={26} fill={INK} script>
          {t(
            "load-bearing digits vs scaffolding digits",
            "load-bearing digits vs scaffolding digits"
          )}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 3)} d="M 95 210 h 250" stroke={INK_LIGHT} sw={2} dur={0.5} />
      <Draw on={beat >= 0} delay={dl(0, 4)} d="M 100 128 h 190" stroke={INK} sw={3} dur={0.7} />
      <Draw
        on={beat >= 0}
        delay={dl(0, 5)}
        d="M 135 128 v 78 M 255 128 v 78"
        stroke={GREEN}
        sw={3.2}
        dur={0.8}
      />
      <Draw
        on={beat >= 0}
        delay={dl(0, 6.2)}
        d="M 305 128 v 82 M 330 128 v 82 M 305 210 L 330 128 M 305 128 L 330 210"
        stroke={MUTED}
        sw={1.8}
        dur={0.9}
      />

      {/* beat 1 — the six digits */}
      <Fade on={beat >= 1} delay={dl(1, 5)}>
        <T x={540} y={268} size={15} fill={MUTED} script>
          {t(
            "six digits printed — how many are actually working?",
            "chhe digits chhape — kaam kitne kar rahe hain?"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={400} y={330} size={56} fill={scaff} weight={700}>0</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.5)}>
        <T x={428} y={330} size={56} fill={scaff} weight={700}>.</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <T x={456} y={330} size={56} fill={scaff} weight={700}>0</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 2.5)}>
        <T x={494} y={330} size={56} fill={scaff} weight={700}>0</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3)}>
        <T x={532} y={330} size={56} fill={INK} weight={700}>4</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.4)}>
        <T x={570} y={330} size={56} fill={INK} weight={700}>5</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 3.8)}>
        <T x={608} y={330} size={56} fill={INK} weight={700}>0</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 4.2)}>
        <T x={642} y={330} size={26} fill={INK_LIGHT} anchor="start">kg</T>
      </Fade>

      {/* beat 2 — the two jobs */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <Chip x={700} y={120} w={330} h={32} fill={CREAM} stroke={GREEN} textFill={GREEN} size={15}>
          {t(
            "load-bearing — carries real information",
            "load-bearing — asli jaankari dhota hai"
          )}
        </Chip>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <Chip x={700} y={164} w={330} h={32} fill={CREAM} stroke={MUTED} textFill={INK_LIGHT} size={15}>
          {t(
            "scaffolding — just holds the place",
            "scaffolding — bas jagah thaame rakhta hai"
          )}
        </Chip>
      </Fade>

      {/* beat 3 — the leading zeros are scaffolding */}
      <Draw
        on={beat >= 3}
        delay={dl(3, 2)}
        d="M 386 354 q 2 8 10 8 h 102 q 8 0 10 -8"
        stroke={MUTED}
        sw={2}
        dur={0.6}
      />
      <Fade on={beat >= 3} delay={dl(3, 4)}>
        <T x={430} y={392} size={15} fill={MUTED} script>
          {t("only places the decimal", "sirf decimal ko jagah dikhate")}
        </T>
      </Fade>

      {/* beat 4 — the proof: switch units */}
      <Draw
        on={beat >= 4}
        delay={dl(4, 1)}
        d={arrowD(678, 315, 717, 315)}
        stroke={AMBER_DARK}
        sw={2.2}
        dur={0.5}
      />
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={730} y={330} size={40} fill={INK} weight={700} anchor="start">= 4.50 g</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 9)}>
        <T x={840} y={400} size={14} fill={AMBER_DARK} script>
          {t(
            "same mass — zeros VANISHED ⇒ never information",
            "wahi mass — zeros GAAYAB ⇒ jaankari thi hi nahi"
          )}
        </T>
      </Fade>

      {/* beat 5 — the survivors */}
      <Draw
        on={beat >= 5}
        delay={dl(5, 1)}
        d="M 518 354 C 552 350, 590 358, 622 353"
        stroke={GREEN}
        sw={3}
        dur={0.6}
      />
      <Draw
        on={beat >= 5}
        delay={dl(5, 2)}
        d="M 770 348 C 792 344, 816 352, 838 347"
        stroke={GREEN}
        sw={3}
        dur={0.6}
      />
      <Fade on={beat >= 5} delay={dl(5, 4)}>
        <T x={530} y={442} size={15} fill={GREEN} script>
          {t(
            "load-bearing digits survive the unit change",
            "load-bearing digits unit badalne par bhi bachte hain"
          )}
        </T>
      </Fade>

      {/* beat 6 — the count */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <Chip x={150} y={480} w={240} h={40} fill={CREAM} stroke={GREEN} textFill={GREEN} size={18}>
          {t("3 sig figs — not 6", "3 sig figs — 6 nahi")}
        </Chip>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 5)}>
        <T x={700} y={505} size={16} fill={INK} script>
          {t(
            "count the structure, not the digits",
            "dhaancha gino, digits nahi"
          )}
        </T>
      </Fade>

      {/* beat 7 — the question to ask */}
      <Fade on={beat >= 7} delay={dl(7, 3)}>
        <T x={540} y={570} size={15} fill={AMBER_DARK} script>
          {t(
            "is it holding weight — or just holding the decimal point?",
            "yeh bojh thaame hai — ya bas decimal ko roke khada hai?"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
