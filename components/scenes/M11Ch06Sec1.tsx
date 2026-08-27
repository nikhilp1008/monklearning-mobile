/**
 * M11 Ch06 · Section 1 — "The Multiplication Principle: counting without listing"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md +
 * SCENE_AUTHORING_MATHS.md.
 *
 * Beats (board_reveal_at_english [0,11.78,25.17,45.48,58.45,78.08,91.05],
 * hinglish [0,9.47,23.47,39.59,51.11,68.01,79.27]):
 *  0 heading: the anchor question — count a huge pile without listing it
 *  1 thali counter setup: sabzi(4) / roti(3) / sweet(2) chips
 *  2 formula lands: 4 × 3 × 2 = 24 thalis
 *  3 the reasoning: same 3 rotis, same 2 sweets, every time
 *  4 [erase group A] branching tree: sabzi→roti→sweet, first branch expanded,
 *    rest abbreviated, 24-leaves chip
 *  5 guardrail: AND → multiply (red)
 *  6 [erase group B] punchline: 6-char password, 2 billion+ settings
 *
 * Layout plan (boxes = estimated render boxes; longer language counts):
 *  always | title (script 24, red)          | T mid | x322..758 y39..82
 *  b0 | anchor question (20, ink)            | T mid | x280..800 y114..136
 *  b1 | "pick one of each:" (16, ink)        | T mid | x420..660 y164..177
 *  b1 | sabzi/roti/sweet chips (h48)         | Chip  | x100..320 / 430..650 / 760..980 y194..242
 *  b2 | "4 × 3 × 2 = 24 thalis" (28, ink)    | T mid | x393..687 y278..309
 *  b3 | "same 3 rotis..." (16, muted)        | T mid | x348..732 y327..341
 *  [group A erased at beat>=4]
 *  b4 | col headers (16, muted) ×3           | T mid | y~132..148 over x220/560/820
 *  b4 | root dot + 4 sabzi fan lines         | Draw  | x140→280 y215..425
 *  b4 | 4 sabzi dots                          | circle| x280 y215/285/355/425
 *  b4 | top-sabzi→3 roti fan + dots           | Draw  | x280..560 y155..275
 *  b4 | abbreviated-branch caption (14,muted)| T mid | x430 y398
 *  b4 | top-roti→2 leaf fan + dots            | Draw  | x560..820 y130..180
 *  b4 | abbreviated-branch caption (14,muted)| T mid | x690 y253
 *  b4 | "= 1 thali" (14, green)              | T start| x845..908 y159
 *  b4 | 24-leaves chip (green, h50)          | Chip  | x370..710 y470..520
 *  b5 | guardrail chip (red, h42)            | Chip  | x380..700 y534..576
 *  [group B erased at beat>=6]
 *  b6 | "a 6-char password," (18, ink)       | T mid | x?..?  y188..204
 *  b6 | "letters + digits:" (18, ink)        | T mid | x?..?  y214..230
 *  b6 | hero "2,000,000,000+" (52, green)    | T mid | x?..?  y270..320
 *  b6 | "...nobody had to list one" (16,mut) | T mid | x?..?  y360..374
 *  b6 | closing chip (green, h54)            | Chip  | x300..780 y420..474
 *  b6 | checkmark                             | Draw  | x321..339 y440..456
 */

import React from "react";
import { Circle } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  Chip,
  INK,
  MUTED,
  GREEN,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';
import { checkD } from "./math-kit";

export default function M11Ch06Sec1({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  // Group A (beats 0-3) is erased once the tree lands (beat 4); group B (the
  // tree, beats 4-5) is erased once the punchline lands (beat 6). Each
  // element's own `on` is bounded to its beat window (rather than a wrapper
  // div's opacity) so the verifier's Fade-opacity visibility check — which
  // walks up to the nearest g.sc-fade, not an arbitrary ancestor — sees the
  // erasure too; seeking back into an earlier beat correctly restores it.
  const aOn = beat >= 0 && beat < 4;
  const bOn = beat >= 4 && beat < 6;

  return (
    <Scene>
      {/* title always-on */}
      <Fade on={true}>
        <T x={540} y={70} size={24} fill={RED} script>
          {t("choices stack: AND means multiply", "choices stack: AND matlab multiply")}
        </T>
      </Fade>

      {/* Group A — beats 0-3 (setup), erased when tree arrives at beat 4 */}
      <Fade on={aOn && beat >= 0} delay={dl(0, 0.3)}>
        <T x={540} y={130} size={20} fill={INK}>
          {t(
            "How do you count a HUGE pile — without listing it?",
            "Bina list banaye, itna bada dher kaise ginte hain?"
          )}
        </T>
      </Fade>

      <Fade on={aOn && beat >= 1} delay={dl(1, 0.3)}>
        <T x={540} y={176} size={16} fill={INK}>
          {t("pick one of each:", "ek-ek chuno:")}
        </T>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 0.9)}>
        <Chip x={100} y={194} w={220} h={48} fill={CREAM} stroke={INK} textFill={INK} size={18} script={false}>
          {t("sabzi = 4", "sabzi = 4")}
        </Chip>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.4)}>
        <Chip x={430} y={194} w={220} h={48} fill={CREAM} stroke={INK} textFill={INK} size={18} script={false}>
          {t("roti = 3", "roti = 3")}
        </Chip>
      </Fade>
      <Fade on={aOn && beat >= 1} delay={dl(1, 1.9)}>
        <Chip x={760} y={194} w={220} h={48} fill={CREAM} stroke={INK} textFill={INK} size={18} script={false}>
          {t("sweet = 2", "sweet = 2")}
        </Chip>
      </Fade>

      <Fade on={aOn && beat >= 2} delay={dl(2, 0.3)}>
        <T x={540} y={300} size={28} fill={INK} weight={800}>
          4 × 3 × 2 = 24 {t("thalis", "thalis")}
        </T>
      </Fade>

      <Fade on={aOn && beat >= 3} delay={dl(3, 0.3)}>
        <T x={540} y={340} size={16} fill={MUTED}>
          {t(
            "same 3 rotis, same 2 sweets — every single time",
            "hamesha wahi 3 roti, wahi 2 sweet — har baar"
          )}
        </T>
      </Fade>

      {/* Group B — beat 4 tree + beat 5 guardrail, erased when beat 6 lands */}
      {/* column headers */}
      <Fade on={bOn} delay={dl(4, 0.2)}>
        <T x={280} y={140} size={16} fill={MUTED}>
          {t("sabzi (4)", "sabzi (4)")}
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(4, 1.4)}>
        <T x={560} y={132} size={16} fill={MUTED}>
          {t("roti (3)", "roti (3)")}
        </T>
      </Fade>
      <Fade on={bOn} delay={dl(4, 2.6)}>
        <T x={820} y={110} size={16} fill={MUTED}>
          {t("sweet (2)", "sweet (2)")}
        </T>
      </Fade>

      {/* root + 4 sabzi branches */}
      <Draw
        on={bOn}
        delay={dl(4, 0.4)}
        d={`M140 320 L280 215 M140 320 L280 285 M140 320 L280 355 M140 320 L280 425`}
        stroke={MUTED}
        sw={1.6}
        dur={0.8}
      />
      <Fade on={bOn} delay={dl(4, 0.4)}>
        <Circle cx={140} cy={320} r={5} fill={INK} />
      </Fade>
      <Fade on={bOn} delay={dl(4, 1.0)}>
        {[215, 285, 355, 425].map((y) => (
          <Circle key={y} cx={280} cy={y} r={5} fill={INK} />
        ))}
      </Fade>

      {/* top sabzi branch → 3 roti dots */}
      <Draw
        on={bOn}
        delay={dl(4, 1.6)}
        d={`M280 215 L560 155 M280 215 L560 215 M280 215 L560 275`}
        stroke={INK}
        sw={1.8}
        dur={0.8}
      />
      <Fade on={bOn} delay={dl(4, 2.2)}>
        {[155, 215, 275].map((y) => (
          <Circle key={y} cx={560} cy={y} r={5} fill={INK} />
        ))}
      </Fade>

      {/* abbreviated other 3 sabzi branches */}
      <Draw
        on={bOn}
        delay={dl(4, 2.6)}
        d={`M280 285 L360 300 M280 355 L360 360 M280 425 L360 420`}
        stroke={MUTED}
        sw={1.4}
        dur={0.6}
      />
      <Fade on={bOn} delay={dl(4, 3.1)}>
        <T x={430} y={398} size={14} fill={MUTED} script>
          {t("(same pattern, ×3 more)", "(wahi pattern, ×3 aur)")}
        </T>
      </Fade>

      {/* top roti branch → 2 sweet/leaf dots */}
      <Draw
        on={bOn}
        delay={dl(4, 3.6)}
        d={`M560 155 L820 130 M560 155 L820 180`}
        stroke={GREEN}
        sw={2}
        dur={0.6}
      />
      <Fade on={bOn} delay={dl(4, 4.1)}>
        {[130, 180].map((y) => (
          <Circle key={y} cx={820} cy={y} r={5} fill={GREEN} />
        ))}
      </Fade>
      <Fade on={bOn} delay={dl(4, 4.5)}>
        <T x={845} y={159} size={14} fill={GREEN} anchor="start">
          {t("= 1 thali", "= 1 thali")}
        </T>
      </Fade>

      {/* abbreviated other 2 roti branches */}
      <Draw
        on={bOn}
        delay={dl(4, 4.8)}
        d={`M560 215 L640 235 M560 275 L640 275`}
        stroke={MUTED}
        sw={1.4}
        dur={0.5}
      />
      <Fade on={bOn} delay={dl(4, 5.2)}>
        <T x={690} y={253} size={14} fill={MUTED} script>
          {t("(same, ×2 more)", "(wahi, ×2 aur)")}
        </T>
      </Fade>

      <Fade on={bOn} delay={dl(4, 5.8)}>
        <Chip x={370} y={470} w={340} h={50} fill={GREEN} textFill="#fff" size={19} script={false}>
          {t("24 leaves total = 4 × 3 × 2", "24 leaves total = 4 × 3 × 2")}
        </Chip>
      </Fade>

      <Fade on={bOn && beat >= 5} delay={dl(5, 0.3)}>
        <Chip x={380} y={534} w={320} h={42} fill={CREAM} stroke={RED} textFill={RED} size={18}>
          {t("trigger word: AND → multiply", "trigger word: AND → multiply")}
        </Chip>
      </Fade>

      {/* beat 6 — punchline (group B erased) */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <T x={540} y={200} size={18} fill={INK}>
          {t("a 6-character password,", "ek 6-character password,")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.8)}>
        <T x={540} y={226} size={18} fill={INK}>
          {t("letters + digits:", "letters + digits se:")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 1.4)}>
        <T x={540} y={300} size={48} fill={GREEN} weight={800}>
          2,000,000,000+
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.1)}>
        <T x={540} y={358} size={16} fill={MUTED}>
          {t("...and nobody had to list a single one", "...aur kisi ne ek bhi list nahi kiya")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.8)}>
        <Chip x={300} y={410} w={480} h={54} fill={GREEN} textFill="#fff" size={19} script={false}>
          {t("AND → multiply: that's this whole chapter", "AND → multiply: yehi poora chapter hai")}
        </Chip>
      </Fade>
      <Draw
        on={beat >= 6}
        delay={dl(6, 3.4)}
        d={checkD(272, 437, 18)}
        stroke={GREEN}
        sw={3}
        dur={0.5}
      />
    </Scene>
  );
}
