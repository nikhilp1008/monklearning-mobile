/**
 * Ch05 · Section 16 — "JEE Advanced: work depends on who is watching"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 19.2, 44.0, 60.2, 85.0, 102.2, 120.2, 139.4, 162.5] · dur 187.3;
 *        hi [0, 21.7, 44.6, 59.1, 83.9, 100.7, 118.2, 134.9, 158.8] · dur 183.6):
 *  0 title + subtitle + "world AND observer" line
 *  1 setup chip
 *  2 two frame panels: headers + divider
 *  3 friction ID chip (frame-independent) + static-friction shock
 *  4 ground frame: S = 6 m, W = +36 J
 *  5 ground check: ΔK = 36 ✓
 *  6 train frame: S = 0, W = 0 J
 *  7 train check: pseudo-force, 0 = 0 ✓
 *  8 verdict band: both correct, never mix frames
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl52 · subtitle cx540 bl80 · b0 line cx540 bl112
 *  b1 | chip x80..1000 y126..164 (size13)
 *  b2 | headers cx300 / cx810 bl205 · divider x540 y300..470
 *  b3 | chip x340..740 y220..256 · script cx540 bl282
 *  b4 | st x100 bl320 / bl350 · b5 | bl385 / bl413
 *  b6 | st x570 bl320 / bl350 · b7 | bl385 / bl413
 *  b8 | bar x66 y500..585 · lines st x84 bl520 / bl546 / bl572
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
  INK,
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch05Sec16({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — title + broken assumption */}
      <Fade on={beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={52} size={22} fill={INK} script>
          {t("Work Depends on Who Is Watching", "Work Is Par Bhi Ki Dekh Kaun Raha Hai")}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 4)}>
        <T x={540} y={80} size={12.5} fill={MUTED} script>
          {t(
            "a JEE Advanced problem that breaks a quiet assumption",
            "JEE Advanced ka sawaal jo ek chupchaap dhoyi hui dharna todta hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 0} delay={dl(0, 10)}>
        <T x={540} y={112} size={14} fill={AMBER_DARK} script>
          {t(
            "work is a fact about the world AND an observer",
            "work duniya AUR observer dono ke baare mein tathya hai"
          )}
        </T>
      </Fade>

      {/* beat 1 — setup */}
      <Fade on={beat >= 1} delay={dl(1, 2)}>
        <Chip x={80} y={126} w={920} h={38} fill={CREAM} stroke={INK} textFill={INK} size={13} script={false}>
          {t(
            "2 kg block on a train floor · a = 3 m/s² from rest · friction just holds it · W by friction over 2 s, in BOTH frames?",
            "2 kg block train ke farsh par · a = 3 m/s², aaram se shuru · friction bas rok raha hai · 2 s mein friction ka W, DONO frames mein?"
          )}
        </Chip>
      </Fade>

      {/* beat 2 — the two panels */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <T x={300} y={205} size={13.5} fill={AMBER_DARK} script>
          {t("ground frame — platform observer", "ground frame — platform waala observer")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 4)}>
        <T x={810} y={205} size={13.5} fill={AMBER_DARK} script>
          {t("train frame — the passenger", "train frame — passenger")}
        </T>
      </Fade>
      <Draw on={beat >= 2} delay={dl(2, 1)} d="M 540 300 V 470" stroke={MUTED} sw={1.6} dur={0.6} />

      {/* beat 3 — friction, frame-independent */}
      <Fade on={beat >= 3} delay={dl(3, 2)}>
        <Chip x={340} y={220} w={400} h={36} fill={CREAM} stroke={INK} textFill={INK} size={14} script={false}>
          {t("f = m a = 2 × 3 = 6 N, forward", "f = m a = 2 × 3 = 6 N, aage ki taraf")}
        </Chip>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 10)}>
        <T x={540} y={282} size={13} fill={RED} script>
          {t(
            "STATIC friction doing + work — a shock if you memorised 'always opposes'",
            "STATIC friction + work kar raha hai — ratta maara tha to jhatka lagega"
          )}
        </T>
      </Fade>

      {/* beat 4 — ground frame */}
      <Fade on={beat >= 4} delay={dl(4, 2)}>
        <T x={100} y={320} size={15} fill={INK} anchor="start" weight={700}>
          S = ½ a t² = ½·3·4 = 6 m
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 8)}>
        <T x={100} y={350} size={15} fill={INK} anchor="start" weight={800}>
          W_f = 6 N × 6 m = +36 J
        </T>
      </Fade>

      {/* beat 5 — ground check */}
      <Fade on={beat >= 5} delay={dl(5, 2)}>
        <T x={100} y={385} size={14} fill={INK} anchor="start" weight={700}>
          v = a t = 6 m/s → ΔK = ½·2·36 = 36 J
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 9)}>
        <T x={100} y={413} size={13} fill={GREEN} script anchor="start">
          {t("✓ the theorem holds perfectly", "✓ theorem bilkul sahi baitha")}
        </T>
      </Fade>

      {/* beat 6 — train frame */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={570} y={320} size={15} fill={INK} anchor="start" weight={700}>
          {t("block never moves → S = 0", "block hilta hi nahi → S = 0")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 9)}>
        <T x={570} y={350} size={15} fill={INK} anchor="start" weight={800}>
          W_f = 6 N × 0 = 0 J
        </T>
      </Fade>

      {/* beat 7 — train check */}
      <Fade on={beat >= 7} delay={dl(7, 2)}>
        <T x={570} y={385} size={14} fill={INK} anchor="start" weight={700}>
          ΔK = 0 · friction +6 N, pseudo −6 N, S = 0
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 9)}>
        <T x={570} y={413} size={13} fill={GREEN} script anchor="start">
          {t("✓ holds here too — on its own terms", "✓ yahan bhi sahi — apni hi sharton par")}
        </T>
      </Fade>

      {/* beat 8 — both correct, never mix */}
      <Draw on={beat >= 8} delay={dl(8, 0.5)} d="M 66 500 v 84" stroke={GREEN} sw={3.4} dur={0.4} />
      <Fade on={beat >= 8} delay={dl(8, 1.5)}>
        <T x={84} y={520} size={13} fill={GREEN} script anchor="start">
          {t(
            "+36 J for the platform · 0 J for the passenger — BOTH are correct",
            "+36 J platform ke liye · 0 J passenger ke liye — DONO sahi hain"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <T x={84} y={546} size={13} fill={GREEN} script anchor="start">
          {t(
            "work depends on displacement — displacement depends on the watcher",
            "work displacement par tikka hai — displacement dekhne waale par"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 15)}>
        <T x={84} y={572} size={13} fill={RED} script anchor="start">
          {t(
            "pick ONE frame at the start and never, ever mix",
            "shuru mein EK frame chuno aur kabhi, kabhi mat milao"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
