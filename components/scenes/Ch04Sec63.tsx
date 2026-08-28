/**
 * Ch04 · Section 63 — "Derivation: three cases where N is not mg"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 14.4, 32.0, 56.8, 81.7, 106.5, 131.3, 156.2]):
 *  0 title
 *  1 the one principle
 *  2 case (i): lift accelerating up — N − mg = ma → N = m(g+a)
 *  3 case (ii): pulled up at θ — N + Fsinθ = mg → N = mg − Fsinθ
 *  4 case (iii): pushed down at θ — N = mg + Fsinθ
 *  5 amber line: three situations, one sentence, never plain mg
 *  6 red margin: the moral — never substitute N=mg by reflex
 *  7 green closing line
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52 · b1 box x120..960 y82..126 bl 110
 *  three cases x84/x400/x716 w280 y160..350:
 *    hdr bl 180 · eq bl 214 · result box y240..280 bl 266 · note bl 310
 *  b5 line cx540 bl 380
 *  b6 | bar x66 y415..490 · lines st x84 bl 435 / 461
 *  b7 line cx540 bl 530
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
  MUTED,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch04Sec63({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={52} size={19} fill={INK} script>
          {t(
            "CBSE Derivation — three cases where N is not mg",
            "CBSE Derivation — teen cases jahan N, mg nahi"
          )}
        </T>
      </Fade>

      {/* beat 1 — the one principle */}
      <Draw
        on={beat >= 1}
        delay={dl(1, 0.8)}
        d="M 120 82 h 840 q 12 0 12 12 v 20 q 0 12 -12 12 h -840 q -12 0 -12 -12 v -20 q 0 -12 12 -12"
        stroke={AMBER_DARK}
        sw={2.6}
        dur={0.7}
        fill={CREAM}
      />
      <Fade on={beat >= 1} delay={dl(1, 1.8)}>
        <T x={540} y={110} size={14} fill={INK} weight={700}>
          {t(
            "N balances the net perpendicular push of everything else — that is all",
            "N surface ke perpendicular baaki har cheez ke net dhakke ko balance karta — bas itna"
          )}
        </T>
      </Fade>

      {/* beat 2 — case (i) lift up */}
      <Fade on={beat >= 2} delay={dl(2, 1)}>
        <T x={224} y={180} size={13} fill={AMBER_DARK} script>
          {t("(i) lift accelerating UP at a", "(i) lift a se UPAR accelerate")}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 3)}>
        <T x={224} y={214} size={13} fill={INK} weight={700}>
          N − mg = ma
        </T>
      </Fade>
      <Draw
        on={beat >= 2}
        delay={dl(2, 6)}
        d="M 96 240 h 256 q 12 0 12 12 v 28 q 0 12 -12 12 h -256 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 2} delay={dl(2, 6.8)}>
        <T x={224} y={266} size={15} fill={INK} weight={800}>
          N = m(g+a) &gt; mg
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 10)}>
        <T x={224} y={310} size={11} fill={MUTED} script>
          {t(
            "down: N = m(g−a) · free fall a=g: N = 0",
            "neeche: N = m(g−a) · free fall a=g: N = 0"
          )}
        </T>
      </Fade>

      {/* beat 3 — case (ii) pulled up */}
      <Fade on={beat >= 3} delay={dl(3, 1)}>
        <T x={540} y={180} size={13} fill={AMBER_DARK} script>
          {t("(ii) pulled UP by a rope at θ", "(ii) rope se θ par UPAR khincha")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 3)}>
        <T x={540} y={214} size={13} fill={INK} weight={700}>
          N + F·sinθ = mg
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 6)}
        d="M 412 240 h 256 q 12 0 12 12 v 28 q 0 12 -12 12 h -256 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 3} delay={dl(3, 6.8)}>
        <T x={540} y={266} size={15} fill={INK} weight={800}>
          N = mg − F·sinθ &lt; mg
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 10)}>
        <T x={540} y={310} size={11} fill={MUTED} script>
          {t(
            "the pull unweighted it — why a lifted handle drags easier",
            "khinchaai ne halka kar diya — isiliye uthaaya handle aasan khichta"
          )}
        </T>
      </Fade>

      {/* beat 4 — case (iii) pushed down */}
      <Fade on={beat >= 4} delay={dl(4, 1)}>
        <T x={856} y={180} size={13} fill={AMBER_DARK} script>
          {t("(iii) pushed DOWN at θ", "(iii) θ par NEECHE dhakela")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 3)}>
        <T x={856} y={214} size={13} fill={INK} weight={700}>
          N = mg + F·sinθ
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 6)}
        d="M 728 240 h 256 q 12 0 12 12 v 28 q 0 12 -12 12 h -256 q -12 0 -12 -12 v -28 q 0 -12 12 -12"
        stroke={GREEN}
        sw={2.4}
        dur={0.5}
        fill={CREAM}
      />
      <Fade on={beat >= 4} delay={dl(4, 6.8)}>
        <T x={856} y={266} size={15} fill={INK} weight={800}>
          N &gt; mg
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 10)}>
        <T x={856} y={310} size={11} fill={MUTED} script>
          {t(
            "the push adds to the load, presses harder",
            "dhakka bojh mein juda, zyada dabaata hai"
          )}
        </T>
      </Fade>

      {/* beat 5 — three situations, one sentence */}
      <Fade on={beat >= 5} delay={dl(5, 1.5)}>
        <T x={540} y={380} size={14} fill={AMBER_DARK} script>
          {t(
            "three situations, one sentence — not once was N plain mg",
            "teen halatein, ek vaakya — kabhi bhi N sada mg nahi tha"
          )}
        </T>
      </Fade>

      {/* beat 6 — the moral */}
      <Draw on={beat >= 6} delay={dl(6, 0.6)} d="M 66 415 v 75" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 6} delay={dl(6, 1.6)}>
        <T x={84} y={435} size={14} fill={RED} script anchor="start">
          {t(
            "never substitute N = mg by reflex — write the perpendicular balance",
            "reflex mein N = mg mat rakho — perpendicular balance likho"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 7)}>
        <T x={84} y={461} size={14} fill={RED} script anchor="start">
          {t(
            "for the ACTUAL situation — the most common single mistake in the subject",
            "ASLI situation ke liye — vishay ki sabse aam ek galti"
          )}
        </T>
      </Fade>

      {/* beat 7 — closing */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={540} y={530} size={13} fill={GREEN} script>
          {t(
            "one sentence, three cases — that is the whole of the normal reaction",
            "ek vaakya, teen cases — yahi hai poora normal reaction"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
