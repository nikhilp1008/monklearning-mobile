/**
 * Ch02 · Section 29 — "From describing motion to predicting it"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 17, 39.2, 59.5, 84.3, 105.6, 120.1, 144.9]):
 *  0 title
 *  1 five quantity chips (u v a t s) + connecting line
 *  2 the deal chip: any 3 in → other 2 out
 *  3 left panel: disciplined driver, straight green v-t
 *  4 right panel: bad day, red wiggle
 *  5 red note: ONLY for uniform acceleration
 *  6 line: special case of Newton's laws, not universal
 *  7 green: varying a → calculus · expiry stamp
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  chips w70 h32 y85 at cx 240/390/540/690/840 · subs bl 140 · line cx540 bl 168
 *  b2 | chip x300..780 y192..228
 *  panels y250..420: L x80..510 (hdr bl 272 · axes M130,420 V295 H480 ·
 *  line M150,405→460,310 · label bl 436) · R x570..1000 (hdr bl 272 ·
 *  axes M620,420 V295 H970 · wiggle · label bl 436)
 *  b5 | bar x66 y452..478 · line st x84 bl 470
 *  b6 | line st x84 bl 506
 *  b7 | bar x56 y524..584 · lines st x72 bl 542 / 578
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
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function Ch02Sec29({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const subs = [
    t("initial v", "shuruaati v"),
    t("final v", "aakhri v"),
    t("acceleration", "acceleration"),
    t("time", "samay"),
    t("displacement", "displacement"),
  ];

  return (
    <Scene>
      {/* beat 0 — the promise of prediction */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={54} size={23} fill={INK} script>
          {t(
            "from describing motion to predicting it",
            "motion bataane se motion ki bhavishyavani tak"
          )}
        </T>
      </Fade>

      {/* beat 1 — five quantities */}
      {["u", "v", "a", "t", "s"].map((q, i) => (
        <G key={q}>
          <Fade on={beat >= 1} delay={dl(1, 0.8 + i * 1.2)}>
            <Chip
              x={205 + i * 150}
              y={85}
              w={70}
              h={32}
              fill={CREAM}
              stroke={AMBER}
              textFill={INK}
              size={17}
              script={false}
            >
              {q}
            </Chip>
          </Fade>
          <Fade on={beat >= 1} delay={dl(1, 1.4 + i * 1.2)}>
            <T x={240 + i * 150} y={140} size={10} fill={MUTED} script>
              {subs[i]}
            </T>
          </Fade>
        </G>
      ))}
      <Fade on={beat >= 1} delay={dl(1, 8)}>
        <T x={540} y={168} size={12} fill={AMBER_DARK} script>
          {t(
            "three compact equations connect these five — for UNIFORM acceleration",
            "teen chhote equations in paanchon ko jodte hain — UNIFORM acceleration par"
          )}
        </T>
      </Fade>

      {/* beat 2 — the generous trade */}
      <Fade on={beat >= 2} delay={dl(2, 2)}>
        <Chip x={300} y={192} w={480} h={36} fill={CREAM} stroke={GREEN} textFill={GREEN} size={14}>
          {t(
            "any 3 in → the other 2 out: PREDICTION",
            "koi 3 do → baaki 2 milenge: PREDICTION"
          )}
        </Chip>
      </Fade>

      {/* beat 3 — the disciplined driver */}
      <Fade on={beat >= 3} delay={dl(3, 0.8)}>
        <T x={295} y={272} size={13} fill={GREEN} script>
          {t("disciplined driver — steady pedal", "anushaasit driver — pedal ek jaisa")}
        </T>
      </Fade>
      <Draw
        on={beat >= 3}
        delay={dl(3, 2)}
        d="M 130 295 V 420 H 480"
        stroke={MUTED}
        sw={1.8}
        dur={0.7}
      />
      <Draw
        on={beat >= 3}
        delay={dl(3, 3.2)}
        d="M 150 405 L 460 310"
        stroke={GREEN}
        sw={2.8}
        dur={1}
      />
      <Fade on={beat >= 3} delay={dl(3, 6)}>
        <T x={295} y={436} size={11} fill={GREEN} script>
          {t(
            "same chunk of speed every second — calculable future",
            "har second speed ka wahi tukda — bhavishya ginne laayak"
          )}
        </T>
      </Fade>

      {/* beat 4 — the bad day */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={785} y={272} size={13} fill={RED} script>
          {t("same driver, bad day", "wahi driver, kharaab din")}
        </T>
      </Fade>
      <Draw
        on={beat >= 4}
        delay={dl(4, 2)}
        d="M 620 295 V 420 H 970"
        stroke={MUTED}
        sw={1.8}
        dur={0.7}
      />
      <Draw
        on={beat >= 4}
        delay={dl(4, 3.2)}
        d="M 640 400 C 690 350, 720 410, 770 370 C 810 340, 850 405, 900 350 C 930 320, 940 335, 955 330"
        stroke={RED}
        sw={2.8}
        dur={1.4}
      />
      <Fade on={beat >= 4} delay={dl(4, 6)}>
        <T x={785} y={436} size={11} fill={RED} script>
          {t(
            "still physics — but the three equations no longer apply",
            "physics ab bhi hai — par teen equations ab kaam nahi karte"
          )}
        </T>
      </Fade>

      {/* beat 5 — the most important sentence */}
      <Draw on={beat >= 5} delay={dl(5, 0.8)} d="M 66 452 v 26" stroke={RED} sw={3.4} dur={0.4} />
      <Fade on={beat >= 5} delay={dl(5, 1.6)}>
        <T x={84} y={470} size={14} fill={RED} script anchor="start">
          {t(
            "these hold ONLY for uniform acceleration — not usually. ONLY.",
            "yeh SIRF uniform acceleration par chalte hain — aksar nahi. SIRF."
          )}
        </T>
      </Fade>

      {/* beat 6 — special case, not law */}
      <Fade on={beat >= 6} delay={dl(6, 2)}>
        <T x={84} y={506} size={13} fill={INK} script anchor="start">
          {t(
            "not universal laws — the special case a = constant; drop it and you have NO answer",
            "universal laws nahi — a = constant ka khaas hal; hataao to KOI jawaab nahi"
          )}
        </T>
      </Fade>

      {/* beat 7 — the expiry stamp */}
      <Draw on={beat >= 7} delay={dl(7, 0.8)} d="M 56 524 v 60" stroke={GREEN} sw={3.4} dur={0.5} />
      <Fade on={beat >= 7} delay={dl(7, 1.6)}>
        <T x={72} y={542} size={13} fill={GREEN} script anchor="start">
          {t(
            "a varies? back to calculus — dx⁄dt and dv⁄dt (that is sub-topic 5)",
            "a badalta hai? waapas calculus — dx⁄dt aur dv⁄dt (wahi sub-topic 5)"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 8)}>
        <T x={72} y={578} size={13} fill={GREEN} script anchor="start">
          {t(
            "a trusted shortcut with an expiry stamp: CONSTANT a ONLY — check before every use",
            "bharosemand shortcut, par expiry stamp ke saath: SIRF CONSTANT a — har baar dekho"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
