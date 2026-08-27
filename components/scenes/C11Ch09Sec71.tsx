/**
 * C11 Ch09 · Section 71 — "Directive influence: where does the next group go?"
 * Canvas 1080×620 · safe x36–1044, y30–596.
 *
 * Beats (en [0, 11.95, 21.5, 38.91, 50.43, 62.12, 77.4]):
 *  0 heading · 1 o/p-directors push density in (ring + G label appear) ·
 *  2 donor: o/p stabilises + charge (green marks) · 3 meta gives donor no
 *  help, ring activated · 4 meta-directors pull density out, deactivating
 *  (amber mark) · 5 withdrawer: o/p puts + next to poor carbon · 6 RED:
 *  always draw the resonance structures
 *
 * Layout plan — ring c(190,330) r=65 on left, text column x=560 on right:
 */

import React from "react";
import { SceneProps, useBeat, delayFor, Fade, Draw, T, AMBER_DARK, GREEN, INK, RED,
  Scene,
} from '@/components/scenes/kit';
import { ringD } from "./chem-kit";

export default function C11Ch09Sec71({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const cx = 190, cy = 250, r = 68;
  const vert = (i: number) => {
    const a = Math.PI / 6 + (i * 2 * Math.PI) / 6;
    return [cx + r * Math.cos(a), cy + r * Math.sin(a)];
  };
  const [gx, gy] = vert(0);
  const [ox, oy] = vert(1);
  const [mx, my] = vert(2);
  const [px, py] = vert(3);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={62} size={22} fill={RED} script>
          {t("directive influence: where does the next group go?", "directive influence: agla group kahan jaata?")}
        </T>
      </Fade>

      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={92} size={15} fill={INK} weight={700}>
          {t("an existing group decides speed and position", "ek existing group speed aur position dono tay karta")}
        </T>
      </Fade>

      {/* beat 1 — the ring with G, and o/p pushed in */}
      <Draw on={beat >= 1} delay={dl(1, 0.3)} d={ringD(cx, cy, r, 6)} stroke={INK} sw={2.2} dur={0.8} />
      <Fade on={beat >= 1} delay={dl(1, 1)}>
        <T x={gx} y={gy - 14} size={14} fill={INK} weight={800}>G</T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={560} y={135} size={14} fill={GREEN} weight={700} anchor="start">
          {t("o/p-directors push electron density INTO the ring", "o/p-directors electron density ring ke ANDAR push karte")}
        </T>
      </Fade>

      {/* beat 2 — donor: o/p stabilises */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={ox + 20} y={oy + 3} size={15} fill={GREEN} weight={800} anchor="start">o</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={px} y={py + 24} size={15} fill={GREEN} weight={800}>p</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={560} y={167} size={13} fill={INK} anchor="start">
          {t("donor: o/p attack lets the group stabilise the + charge", "donor: o/p attack se group + charge ko stabilise karta")}
        </T>
      </Fade>

      {/* beat 3 — o/p wins, ring activated */}
      <Fade on={beat >= 3} delay={dl(3, 0.4)}>
        <T x={560} y={199} size={13} fill={GREEN} weight={700} anchor="start">
          {t("meta gives a donor no help — o/p wins, ring activated", "meta donor ko koi help nahi deta — o/p jeetta, ring activated")}
        </T>
      </Fade>

      {/* beat 4 — meta-directors pull density out */}
      <Fade on={beat >= 4} delay={dl(4, 0.3)}>
        <T x={mx - 20} y={my + 3} size={15} fill={AMBER_DARK} weight={800} anchor="end">m</T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={560} y={260} size={14} fill={AMBER_DARK} weight={700} anchor="start">
          {t("meta-directors pull electron density OUT — deactivating", "meta-directors electron density BAHAR khinchte — deactivating")}
        </T>
      </Fade>

      {/* beat 5 — withdrawer: o/p is bad, meta least bad */}
      <Fade on={beat >= 5} delay={dl(5, 0.4)}>
        <T x={560} y={292} size={13} fill={INK} anchor="start">
          {t("withdrawer: o/p puts + charge next to an electron-poor carbon", "withdrawer: o/p + charge ko electron-poor carbon ke paas rakh deta")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.9)}>
        <T x={560} y={320} size={13} fill={AMBER_DARK} weight={700} anchor="start">
          {t("so meta becomes the least-bad option", "isliye meta sabse kam-bura option banta")}
        </T>
      </Fade>

      {/* beat 6 — the guardrail */}
      <Draw on={beat >= 6} delay={dl(6, 0.3)} d="M 60 420 L 60 476" stroke={RED} sw={3.4} dur={0.6} />
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={76} y={442} size={15} fill={RED} weight={700} anchor="start">
          {t("the reasoning is always arenium-ion stability", "reasoning hamesha arenium-ion stability hi hai")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={76} y={468} size={14} fill={RED} script anchor="start">
          {t("draw the resonance structures for o, m, and p attack", "o, m, aur p attack ke resonance structures banao")}
        </T>
      </Fade>
    </Scene>
  );
}
