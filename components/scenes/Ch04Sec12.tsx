/**
 * Ch04 · Section 12 — "Pitfalls and pro-tips: Newton's Laws and Impulse"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 10.7, 19.9, 37.0, 51.9, 69.1, 86.6, 91.7, 102.9]):
 *  0 title
 *  1 pitfall 1 chip+header (vectors)
 *  2 pitfall 1 details (2mv + fix direction)
 *  3 pitfall 2 (action-reaction never cancels)
 *  4 pitfall 3 (F=ma with variable mass)
 *  5 pitfall 4 (inertia ≠ weight)
 *  6 pro-tip heading
 *  7 [MLT⁻¹] ⇒ N·s = kg·m/s line
 *  8 red margin: joules/newtons impulse = algebra error
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52
 *  p1 chip x84..130 y92..122 · header st x150 bl 113 · det bl 143 · green bl 167
 *  p2 chip y200..230 · header bl 221 · det bl 247
 *  p3 chip y278..308 · header bl 299 · det bl 325
 *  p4 chip y356..386 · header bl 377 · det bl 403
 *  b6 heading cx540 bl 448 · b7 line cx540 bl 480
 *  b8 | bar x66 y505..575 · lines st x84 bl 525 / 551
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

export default function Ch04Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const pit = (
    k: number,
    y: number,
    n: string,
    header: string,
    detail: React.ReactNode
  ) => (
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
      {detail}
    </G>
  );

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={21} fill={INK} script>
          {t(
            "the four worst traps — and one five-second habit",
            "chaar sabse bure traps — aur ek 5-second ki aadat"
          )}
        </T>
      </Fade>

      {/* pitfall 1 — beats 1 & 2 */}
      {pit(
        1,
        92,
        "✗ 1",
        t(
          "momentum & impulse are VECTORS — forgetting this tops the list",
          "momentum aur impulse VECTORS hain — yahi bhoolna sabse upar"
        ),
        <>
          <Fade on={beat >= 2} delay={dl(2, 1)}>
            <T x={150} y={143} size={13} fill={INK} script anchor="start">
              {t(
                "a reversal: speed unchanged, sign flips — Δp can be 2mv, not 0",
                "ball palti: speed wahi, sign palta — Δp poora 2mv ho sakta hai, 0 nahi"
              )}
            </T>
          </Fade>
          <Fade on={beat >= 2} delay={dl(2, 8)}>
            <T x={150} y={167} size={13} fill={GREEN} script anchor="start">
              {t(
                "fix the + direction BEFORE substituting a single number",
                "ek bhi number daalne se PEHLE + direction fix karo"
              )}
            </T>
          </Fade>
        </>
      )}

      {/* pitfall 2 — beat 3 */}
      {pit(
        3,
        200,
        "✗ 2",
        t(
          "'action-reaction cancels' — NO: they act on two DIFFERENT bodies",
          "'action-reaction cancel ho jaati hai' — NAHI: do ALAG bodies par"
        ),
        <Fade on={beat >= 3} delay={dl(3, 6)}>
          <T x={150} y={247} size={13} fill={INK} script anchor="start">
            {t(
              "if they cancelled, nothing could ever accelerate",
              "cancel hoti, to kuchh kabhi accelerate na kar paata"
            )}
          </T>
        </Fade>
      )}

      {/* pitfall 3 — beat 4 */}
      {pit(
        4,
        278,
        "✗ 3",
        t(
          "F = m·a with changing mass — rockets · chains · sand · leaks",
          "badalte mass par F = m·a — rockets · chains · sand · leaks"
        ),
        <Fade on={beat >= 4} delay={dl(4, 6)}>
          <T x={150} y={325} size={13} fill={GREEN} script anchor="start">
            {t(
              "mass variable? retreat to F = dp⁄dt — as the conveyor belt showed",
              "mass variable? F = dp⁄dt par lauto — jaisa conveyor belt ne dikhaya"
            )}
          </T>
        </Fade>
      )}

      {/* pitfall 4 — beat 5 */}
      {pit(
        5,
        356,
        "✗ 4",
        t(
          "inertia ≠ weight — inertia is mass, the same on the Moon",
          "inertia ≠ weight — inertia mass hai, Moon par bhi wahi"
        ),
        <Fade on={beat >= 5} delay={dl(5, 6)}>
          <T x={150} y={403} size={13} fill={INK} script anchor="start">
            {t(
              "weight = m·g changes with g — a crate is hard to push in deep space too",
              "weight = m·g, g ke saath badalta — bhaari crate deep space mein bhi mushkil"
            )}
          </T>
        </Fade>
      )}

      {/* beat 6 — the pro-tip */}
      <Fade on={beat >= 6} delay={dl(6, 1)}>
        <T x={540} y={448} size={16} fill={AMBER_DARK} script>
          {t("pro-tip: the units sanity check", "pro-tip: units ka sanity check")}
        </T>
      </Fade>

      {/* beat 7 — same unit */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={540} y={480} size={15} fill={INK} weight={700}>
          {t(
            "[M L T⁻¹] shared ⇒ N·s = kg·m⁄s — the same unit",
            "[M L T⁻¹] same ⇒ N·s = kg·m⁄s — ek hi unit"
          )}
        </T>
      </Fade>

      {/* beat 8 — the five-second check */}
      <Draw on={beat >= 8} delay={dl(8, 0.6)} d="M 66 505 v 62" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={525} size={14} fill={RED} script anchor="start">
          {t(
            "'impulse' in joules or newtons? that is an ALGEBRA ERROR — stop, recheck",
            "'impulse' joules ya newtons mein aaya? ALGEBRA ERROR hai — ruko, dobara dekho"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 8)}>
        <T x={84} y={551} size={14} fill={GREEN} script anchor="start">
          {t(
            "five seconds — catches more mistakes than any other habit in this chapter",
            "paanch second — is chapter ki har aadat se zyada galtiyan pakadta hai"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
