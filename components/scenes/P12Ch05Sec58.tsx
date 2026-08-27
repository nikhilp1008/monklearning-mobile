/**
 * P12Ch05 · Section 58 — "What each application demands from the loop"
 * Subtopic: Permanent Magnets and Electromagnets
 * Canvas 1080×620 · safe x36–1044, y30..596.
 *
 * BOARD REWRITTEN (2026-08-21) — right lesson, wrong ground.
 *
 * WHAT THE BOARD USED TO TEACH: a selection matrix whose second column was
 * a TRANSFORMER CORE, and which read "High B_r, Low H_c" for it. The voice
 * is comparing the permanent magnet with the ELECTROMAGNET, and explicitly
 * demands LOW retentivity there, so the board contradicted the narration on
 * its single most examinable row.
 *
 * WHAT THE NARRATION ACTUALLY TEACHES: a two-column requirements table.
 * Permanent magnet — high retentivity, and (the deciding property) high
 * coercivity, giving a fat hysteresis loop: steel, Alnico, cobalt steel,
 * ferrites, Nd-Fe-B. Electromagnet — very high permeability first, then low
 * retentivity and low coercivity, giving a thin pinched loop: soft iron.
 * Closing image: the disciplined soldier vs the eager recruit.
 *
 * BEAT MAP (8 reveals → gates 0..7, nothing above 7):
 *   0  "a requirements table, property by property"  title + underline
 *   1  "read down the two columns"                   the table frame + headers
 *   2  "you need high retentivity"                   permanent · retentivity
 *   3  "even more important, high coercivity"        permanent · coercivity
 *   4  "high on both means a fat loop"               fat B–H loop + materials
 *   5  "the demands invert: high permeability"       electromagnet · μ_r
 *   6  "low retentivity and low coercivity"          electromagnet rows + thin loop
 *   7  "the soldier and the recruit"                 the domain analogy band
 */

import React from "react";
import { Line } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip,
  INK, INK_LIGHT, MUTED, AMBER_DARK, GREEN, GREEN_DARK, RED,
  Scene,
} from '@/components/scenes/kit';

/** A B–H hysteresis loop: half-width w, half-height h, coercivity c, remanence r. */
function loopD(cx: number, cy: number, w: number, h: number, c: number, r: number): string {
  return (
    `M ${cx - w} ${cy + h}` +
    ` Q ${cx - w * 0.5} ${cy + h * 0.98} ${cx} ${cy + r}` +
    ` Q ${cx + c * 0.65} ${cy + r * 0.45} ${cx + c} ${cy}` +
    ` Q ${cx + w * 0.5} ${cy - h * 0.72} ${cx + w} ${cy - h}` +
    ` Q ${cx + w * 0.5} ${cy - h * 0.98} ${cx} ${cy - r}` +
    ` Q ${cx - c * 0.65} ${cy - r * 0.45} ${cx - c} ${cy}` +
    ` Q ${cx - w * 0.5} ${cy + h * 0.72} ${cx - w} ${cy + h}`
  );
}

export default function P12Ch05Sec58({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const axes = (cx: number, cy: number, on: boolean, delay: number) => (
    <Fade on={on} delay={delay}>
      <Line x1={cx - 138} y1={cy} x2={cx + 138} y2={cy} stroke={MUTED} strokeWidth={1.4} />
      <Line x1={cx} y1={cy - 52} x2={cx} y2={cy + 52} stroke={MUTED} strokeWidth={1.4} />
      <T x={cx + 150} y={cy + 5} size={11.5} fill={MUTED} weight={700}>H</T>
      <T x={cx - 12} y={cy - 56} size={11.5} fill={MUTED} weight={700}>B</T>
    </Fade>
  );

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.35)}>
        <T x={540} y={50} size={25} fill={RED} script>
          {t("What each application demands from the loop", "Har application loop se kya maangti hai")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 1.7)}
        d="M 270 64 C 500 60, 660 68, 810 62" stroke={RED} sw={2.2} dur={0.7} />

      {/* beat 1 — the table frame */}
      <Fade on={beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={88} size={13} fill={INK_LIGHT} weight={700}>
          {t("Read down the two columns — on almost every row they want opposite things.",
             "Dono columns padho — lagbhag har row mein dono ulti cheez maangte hain.")}
        </T>
      </Fade>
      <Draw on={beat >= 1} delay={dl(1, 0.7)} d="M 60 106 H 1020 V 462 H 60 Z" stroke={INK} sw={2} dur={1.0} />
      <Draw on={beat >= 1} delay={dl(1, 1.4)} d="M 268 106 V 462" stroke={INK} sw={1.6} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 1.5)} d="M 644 106 V 462" stroke={INK} sw={1.6} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 1.7)} d="M 60 144 H 1020" stroke={INK} sw={1.6} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 1.8)} d="M 60 196 H 1020" stroke={MUTED} sw={1.3} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 1.9)} d="M 60 248 H 1020" stroke={MUTED} sw={1.3} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 2.0)} d="M 60 300 H 1020" stroke={MUTED} sw={1.3} dur={0.6} />
      <Draw on={beat >= 1} delay={dl(1, 2.1)} d="M 60 412 H 1020" stroke={MUTED} sw={1.3} dur={0.6} />
      <Fade on={beat >= 1} delay={dl(1, 2.4)}>
        <T x={456} y={131} size={14.5} fill={RED} weight={800}>{t("PERMANENT MAGNET", "PERMANENT MAGNET")}</T>
        <T x={832} y={131} size={14.5} fill={RED} weight={800}>{t("ELECTROMAGNET", "ELECTROMAGNET")}</T>
        <T x={76} y={176} size={13} fill={INK} weight={800} anchor="start">{t("Permeability μ_r", "Permeability μ_r")}</T>
        <T x={76} y={228} size={13} fill={INK} weight={800} anchor="start">{t("Retentivity B_r", "Retentivity B_r")}</T>
        <T x={76} y={280} size={13} fill={INK} weight={800} anchor="start">{t("Coercivity H_c", "Coercivity H_c")}</T>
        <T x={76} y={360} size={13} fill={INK} weight={800} anchor="start">{t("Hysteresis loop", "Hysteresis loop")}</T>
        <T x={76} y={440} size={13} fill={INK} weight={800} anchor="start">{t("Typical material", "Typical material")}</T>
      </Fade>

      {/* ---------------- PERMANENT MAGNET COLUMN ---------------- */}
      {/* beat 2 — retentivity */}
      <Fade on={beat >= 2} delay={dl(2, 0.3)}>
        <T x={290} y={176} size={14} fill={MUTED} weight={700} anchor="start">—</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.6)}>
        <T x={290} y={220} size={15} fill={GREEN} weight={900} anchor="start">{t("HIGH", "HIGH")}</T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.0)}>
        <T x={352} y={220} size={11.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("the field left behind when H goes to zero",
             "H zero hone par jo field bach jaata hai")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 1.3)}>
        <T x={290} y={240} size={11.5} fill={MUTED} weight={600} anchor="start">
          {t("without it there is nothing to keep", "iske bina rakhne ko kuch hai hi nahi")}
        </T>
      </Fade>

      {/* beat 3 — coercivity */}
      <Fade on={beat >= 3} delay={dl(3, 0.3)}>
        <T x={290} y={272} size={15} fill={GREEN} weight={900} anchor="start">{t("HIGH", "HIGH")}</T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 0.7)}>
        <T x={352} y={272} size={11.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("the property that actually decides it", "asli faisla yahi property karti hai")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.1)}>
        <T x={290} y={292} size={11.5} fill={RED} weight={700} anchor="start">
          {t("a stray field, a knock or the years cannot wipe it out",
             "stray field, jhatka ya barson ka waqt ise mita nahi paata")}
        </T>
      </Fade>

      {/* beat 4 — fat loop + materials */}
      {axes(456, 356, beat >= 4, dl(4, 0.3))}
      <Draw on={beat >= 4} delay={dl(4, 0.8)} d={loopD(456, 356, 120, 40, 58, 30)} stroke={RED} sw={2.4} dur={1.2} />
      <Fade on={beat >= 4} delay={dl(4, 1.8)}>
        <T x={290} y={440} size={12.5} fill={INK} weight={800} anchor="start">
          {t("steel · Alnico · cobalt steel · ferrites · Nd-Fe-B", "steel · Alnico · cobalt steel · ferrites · Nd-Fe-B")}
        </T>
      </Fade>

      {/* ---------------- ELECTROMAGNET COLUMN ---------------- */}
      {/* beat 5 — permeability */}
      <Fade on={beat >= 5} delay={dl(5, 0.3)}>
        <T x={666} y={172} size={15} fill={GREEN} weight={900} anchor="start">{t("VERY HIGH", "VERY HIGH")}</T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 0.7)}>
        <T x={666} y={190} size={11.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("a big field for a modest current — that keeps it practical",
             "kam current mein bada field — isse device practical rehta hai")}
        </T>
      </Fade>

      {/* beat 6 — low retentivity, low coercivity, thin loop, soft iron */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={666} y={224} size={15} fill={RED} weight={900} anchor="start">{t("LOW", "LOW")}</T>
        <T x={716} y={224} size={11.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("nothing should linger when you switch off", "switch off karte hi kuch bacha nahi rehna chahiye")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.6)}>
        <T x={666} y={276} size={15} fill={RED} weight={900} anchor="start">{t("LOW", "LOW")}</T>
        <T x={716} y={276} size={11.5} fill={INK_LIGHT} weight={600} anchor="start">
          {t("it must let go as easily as it took hold", "jitni aasani se pakda, utni aasani se chhode")}
        </T>
      </Fade>
      {axes(832, 356, beat >= 6, dl(6, 0.9))}
      <Draw on={beat >= 6} delay={dl(6, 1.3)} d={loopD(832, 356, 120, 40, 10, 12)} stroke={GREEN_DARK} sw={2.4} dur={1.2} />
      <Fade on={beat >= 6} delay={dl(6, 2.2)}>
        <T x={666} y={440} size={12.5} fill={INK} weight={800} anchor="start">
          {t("soft iron — the textbook choice", "soft iron — textbook choice")}
        </T>
      </Fade>

      {/* beat 7 — the domain analogy */}
      <Draw on={beat >= 7} delay={dl(7, 0.2)} d="M 60 476 H 1020 V 534 H 60 Z" stroke={AMBER_DARK} sw={1.8} dur={0.7} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={80} y={500} size={12.5} fill={RED} weight={700} anchor="start">
          {t("Steel — the disciplined soldier: once turned, they hold the pose long after you stop directing them.",
             "Steel — anushasit sipahi: ek baar mud gaye toh directing band hone ke baad bhi pose thaame rehte hain.")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.2)}>
        <T x={80} y={522} size={12.5} fill={GREEN_DARK} weight={700} anchor="start">
          {t("Soft iron — the eager recruit: snaps to attention the moment you direct them, relaxes the instant you stop.",
             "Soft iron — utaavla recruit: ishaara karte hi attention mein, rukte hi wapas random.")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <Chip x={40} y={546} w={1000} h={42} fill={GREEN} textFill="#ffffff" size={13.5}>
          {t("★ Retentivity gives it a field · coercivity lets it keep one — and no single material can do both jobs",
             "★ Retentivity field deti hai · coercivity use bachaati hai — ek hi material dono kaam nahi kar sakta")}
        </Chip>
      </Fade>
    </Scene>
  );
}
