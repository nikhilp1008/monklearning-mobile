/**
 * Ch04 · Section 58 — "Pitfalls and pro-tips: Circular Motion and Banking"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 15.9, 16.9, 41.3, 66.1, 90.9, 105.1, 129.9, 148.6]):
 *  0 title
 *  1 pitfall 1: centrifugal treated as real in ground frame
 *  2 pitfall 2: forgetting mass cancels
 *  3 pitfall 3: botching the banking+friction denominator
 *  4 pitfall 4: centripetal confused with a new force
 *  5 pro-tip heading
 *  6 design-speed check line
 *  7 straddle rule + sign-error catch
 *  8 red margin: three memory aids
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  title cx540 bl 52
 *  p1 chip x84..130 y82..112 hdr st x150 bl 103 · det bl 131
 *  p2 chip y156..186 hdr bl 177 · det bl 205
 *  p3 chip y230..260 hdr bl 251 · det bl 279
 *  p4 chip y304..334 hdr bl 325 · det bl 353
 *  b5 head cx540 bl 395 · b6 st x84 bl 425 · b7 st x84 bl 455 / 481
 *  b8 | bar x66 y510..585 · lines st x84 bl 530 / 556 / 580
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

export default function Ch04Sec58({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const pit = (k: number, y: number, n: string, header: string, det: string, detFill: string, detDelay: number) => (
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
      <Fade on={beat >= k} delay={dl(k, detDelay)}>
        <T x={150} y={y + 49} size={13} fill={detFill} script anchor="start">
          {det}
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
            "the minefield — where circular-motion marks quietly leak",
            "baaroodi surang — circular-motion marks chupke se kahan jaate hain"
          )}
        </T>
      </Fade>

      {pit(
        1,
        82,
        "✗ 1",
        t(
          "treating centrifugal force as real in the GROUND frame",
          "GROUND frame mein centrifugal force ko asli maanna"
        ),
        t(
          "ground frame: only inward force + inertia — never mix it with a fictional outward one",
          "ground frame: sirf inward force + inertia — kabhi kalpanik outward se mat milao"
        ),
        RED,
        9
      )}

      {pit(
        2,
        156,
        "✗ 2",
        t(
          "forgetting that mass CANCELS — cornering, banking, well of death",
          "bhoolna ki mass KAT'TA hai — cornering, banking, maut ka kuaan"
        ),
        t(
          "an m surviving in your final answer is a red flag, not a result",
          "final answer mein bacha m ek khatre ka jhanda hai, result nahi"
        ),
        GREEN,
        9
      )}

      {pit(
        3,
        230,
        "✗ 3",
        t(
          "botching the banking+friction denominator",
          "banking+friction denominator bigaadna"
        ),
        t(
          "don't memorize raw symbols — set μ=0, both must collapse to tanθ = v²⁄rg",
          "kacche symbols mat ratto — μ=0 rakho, dono tanθ = v²⁄rg ban'ne chahiye"
        ),
        AMBER_DARK,
        9
      )}

      {pit(
        4,
        304,
        "✗ 4",
        t(
          "confusing 'centripetal' with a NEW force",
          "'centripetal' ko NAYI force samajhna"
        ),
        t(
          "ask which REAL force points to the centre, set only THAT to mv²⁄r",
          "poocho kaunsi ASLI force centre ki taraf — sirf USE mv²⁄r ke barabar karo"
        ),
        RED,
        9
      )}

      {/* beat 5 — pro-tip heading */}
      <Fade on={beat >= 5} delay={dl(5, 1)}>
        <T x={540} y={395} size={16} fill={AMBER_DARK} script>
          {t("pro-tip: the design-speed check", "pro-tip: design-speed check")}
        </T>
      </Fade>

      {/* beat 6 — compute it first */}
      <Fade on={beat >= 6} delay={dl(6, 1.5)}>
        <T x={84} y={425} size={14} fill={INK} script anchor="start">
          {t(
            "banking + friction? FIRST compute the frictionless design speed √(rg·tanθ)",
            "banking + friction? PEHLE frictionless design speed √(rg·tanθ) nikaalo"
          )}
        </T>
      </Fade>

      {/* beat 7 — the straddle rule */}
      <Fade on={beat >= 7} delay={dl(7, 1.5)}>
        <T x={84} y={455} size={14} fill={GREEN} script anchor="start">
          {t(
            "v_max must exceed it, v_min must fall short — the range STRADDLES it",
            "v_max usse bada, v_min usse chhota — range dono taraf FAILTI hai"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 7)}>
        <T x={84} y={481} size={14} fill={RED} script anchor="start">
          {t(
            "range doesn't straddle it? a friction-direction sign is wrong — caught in time",
            "range straddle nahi karti? friction-direction ka sign galat — waqt rehte pakda"
          )}
        </T>
      </Fade>

      {/* beat 8 — memory aids */}
      <Draw on={beat >= 8} delay={dl(8, 0.6)} d="M 66 510 v 82" stroke={RED} sw={3.4} dur={0.5} />
      <Fade on={beat >= 8} delay={dl(8, 1.6)}>
        <T x={84} y={530} size={14} fill={RED} script anchor="start">
          {t(
            "'the centre pulls, inertia flings'",
            "'centre kheenchta hai, inertia phenkti hai'"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 7)}>
        <T x={84} y={556} size={14} fill={RED} script anchor="start">
          {t("banking: 'tanθ = v²⁄rg'", "banking: 'tanθ = v²⁄rg'")}
        </T>
      </Fade>
      <Fade on={beat >= 8} delay={dl(8, 13)}>
        <T x={84} y={580} size={14} fill={RED} script anchor="start">
          {t(
            "well of death: 'faster means safer'",
            "maut ka kuaan: 'tez matlab safe'"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
