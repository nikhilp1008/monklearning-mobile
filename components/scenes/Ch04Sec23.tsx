/**
 * Ch04 · Section 23 — "Pitfalls and pro-tips: Momentum Conservation"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 7.6, 8.6, 28.7, 51.0, 67.7, 83.9, 89.4, 103.7]):
 *  0 title
 *  1 pitfall 1: KE on inelastic ✗ (+detail)
 *  2 pitfall 2: vector signs / 2D components
 *  3 pitfall 3: instant only
 *  4 pitfall 4: e = speeds, not heights
 *  5 e = √(h_reb/h_drop) formula line
 *  6 pro-tip heading
 *  7 v_cm identical line
 *  8 red margin: compute both ways, 10-second catch
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52
 *  p1 chip x84..130 y88..118 · hdr st x150 bl 109 · det bl 137
 *  p2 chip y164..194 · hdr bl 185 · det bl 213
 *  p3 chip y240..270 · hdr bl 261 · det bl 289
 *  p4 chip y316..346 · hdr bl 337
 *  b5 st x150 bl 380 · b6 head cx540 bl 425 · b7 cx540 bl 456
 *  b8 | bar x66 y480..550 · lines st x84 bl 500 / 526
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  Chip,
  T,
  INK,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec23({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const pit = (k: number, y: number, n: string, header: string) => (
    <G>
      <Fade on={beat >= k} delay={dl(k, 0.6)}>
        <Chip x={84} y={y} w={46} h={30} fill={CREAM} stroke={RED} textFill={RED} size={14} script={false}>
          {n}
        </Chip>
      </Fade>
      <Fade on={beat >= k} delay={dl(k, 1.4)}>
        <T x={150} y={y + 21} size={15} fill={RED} script anchor="start">
          {header}
        </T>
      </Fade>
    </G>
  );

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "four pitfalls — each with a worked example behind it",
            "chaar pitfalls — har ek ke peechhe ek worked example"
          )}
        </T>
      </Fade>

      {/* pitfall 1 */}
      {pit(
        1,
        88,
        "✗ 1",
        t(
          "KE conservation on an inelastic collision — momentum yes, energy NO",
          "inelastic collision par KE conservation — momentum haan, energy NAHI"
        )
      )}
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={150} y={137} size={13} fill={INK} script anchor="start">
          {t(
            "bullet embeds · cars crumple · clay sticks → KE is lost to heat",
            "bullet dhansi · cars kuchli · clay chipki → KE heat mein gayi"
          )}
        </T>
      </Fade>

      {/* pitfall 2 */}
      {pit(
        2,
        164,
        "✗ 2",
        t(
          "momentum is a VECTOR — opposite motion needs opposite signs",
          "momentum VECTOR hai — ulti motion ko ulte signs chahiye"
        )
      )}
      <Fade on={beat >= 2} delay={dl(2, 7)}>
        <T x={150} y={213} size={13} fill={INK} script anchor="start">
          {t(
            "in 2D conserve x and y separately — speeds never 'just add'",
            "2D mein x aur y alag-alag conserve karo — speeds 'bas judti' nahi"
          )}
        </T>
      </Fade>

      {/* pitfall 3 */}
      {pit(
        3,
        240,
        "✗ 3",
        t(
          "conserving across a long window — gravity edits p between bounces",
          "lambi window ke aar-paar conserve karna — bounces ke beech gravity p badalti hai"
        )
      )}
      <Fade on={beat >= 3} delay={dl(3, 12)}>
        <T x={150} y={289} size={13} fill={GREEN} script anchor="start">
          {t(
            "across the INSTANT of impact only",
            "sirf impact ke INSTANT ke aar-paar"
          )}
        </T>
      </Fade>

      {/* pitfall 4 */}
      {pit(
        4,
        316,
        "✗ 4",
        t(
          "e compares SPEEDS of separation ⁄ approach — not heights, not energies",
          "e SPEEDS ki tulna karta hai — heights nahi, energies nahi"
        )
      )}

      {/* beat 5 — the one-line fix */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={150} y={380} size={15} fill={INK} weight={700} anchor="start">
          {t(
            "bounce off a floor: e = √(h_rebound ⁄ h_drop) — note the SQUARE ROOT",
            "floor se bounce: e = √(h_rebound ⁄ h_drop) — SQUARE ROOT dekho"
          )}
        </T>
      </Fade>

      {/* beat 6 — pro-tip */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={425} size={16} fill={AMBER_DARK} script>
          {t(
            "pro-tip: the centre-of-mass sanity check",
            "pro-tip: centre-of-mass ka sanity check"
          )}
        </T>
      </Fade>

      {/* beat 7 — v_cm never notices */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={540} y={456} size={14} fill={INK} script>
          {t(
            "v_cm is IDENTICAL before and after — it never notices the event",
            "v_cm pehle aur baad mein EK JAISI — use pata hi nahi chalta kuchh hua"
          )}
        </T>
      </Fade>

      {/* beat 8 — the ten-second catch */}
      <Draw on={beat >= 8} delay={dl(8, 0.6)} d="M 66 480 v 62" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={500} size={14} fill={RED} script anchor="start">
          {t(
            "after solving: compute v_cm from the BEFORE picture and the AFTER picture",
            "solve karne ke baad: v_cm BEFORE picture se aur AFTER picture se nikaalo"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <T x={84} y={526} size={14} fill={GREEN} script anchor="start">
          {t(
            "mismatch = a sign or arithmetic error — a ten-second catch",
            "mel nahi khaya = sign ya arithmetic ki galti — das second ka check"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
