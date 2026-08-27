/**
 * B11 Ch01 · Section 12 — "Writing a scientific name: the five conventions"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 11.98, 24.46, 39.89, 51.78, 69.83, 92.6, 105.26, 118.93]):
 *  0 title + underline
 *  1 RULE 1 (flashcard slot): two words, in Latin
 *  2 RULE 2: genus Capital, species lowercase — the example lands
 *    (wrong-case flashed in red, correct case in ink)
 *  3 the capitalisation rule is the most-tested point — ring the example
 *  4 RULE 3: both words italicised — example turns italic live
 *  5 RULE 4: handwritten → underline separately — underlines drawn live
 *  6 dissect the name: DIAGRAM anatomy (generic / specific epithet boxes)
 *  7 RULE 5: author citation, Roman, optional — "Linn." added + 3rd box
 *  8 closing: 3 written items, still 2 NAMES
 *
 * The example name is ONE persistent element (from beat 2 on) whose italic/
 * underline styling is driven directly by `beat`, not re-created per beat —
 * a live "the same word gets re-styled in front of you" demonstration.
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  b0 | title (script24 red) bl64 · underline y86
 *  b1,2,4,5,7 | rule header+def (flashcard slot) bl120/148
 *  b2 | wrong example (13 anek red) bl220 [on===2]
 *  b2+ | "Mangifera" (34 amber-d) x330..450 · "indica" (34 green) x570..670  bl280
 *  b3 | ring around example c(500,262) rx180 ry30
 *  b5+ | underlines under each word y290
 *  b6 | caption (script15 green) bl158 [on===6]
 *  b6+ | box1 "generic name" (amber-d) x150..400 y340..430
 *  b6+ | box2 "specific epithet" (green) x420..670 y340..430
 *  b7+ | "Linn." (28 red, roman) x760..860 bl280 · box3 (red) x690..960 y340..430
 *  b8 | banner (ink→cream) x300..780 y470..506
 */

import React from "react";
import { Text as SvgText } from 'react-native-svg';
import { SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD, INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

export default function B11Ch01Sec12({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  const italic = beat >= 4;
  const underlined = beat >= 5;

  return (
    <Scene>
      {/* beat 0 — title */}
      <Fade on={beat >= 0} delay={dl(0, 0.2)}>
        <T x={540} y={64} size={24} fill={RED} script>
          {t("how to write a scientific name — five rules", "scientific naam kaise likhein — paanch rules")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2)} d="M 330 86 C 430 82, 650 82, 750 86" stroke={RED} sw={2.2} dur={0.6} />

      {/* beat 1 — RULE 1 */}
      <Fade on={beat === 1} delay={dl(1, 0.2)}>
        <T x={540} y={120} size={18} fill={INK} weight={800}>
          RULE 1
        </T>
      </Fade>
      <Fade on={beat === 1} delay={dl(1, 0.7)}>
        <Draw on={true} d="M 470 132 L 610 132" stroke={INK} sw={1.6} dur={0.4} />
      </Fade>
      <Fade on={beat === 1} delay={dl(1, 1)}>
        <T x={540} y={150} size={14} fill={INK} script={false}>
          {t(
            "two words, in Latin — a 'dead' language, so meanings stay stable",
            "do shabd, Latin mein — ek 'dead' language, isliye meanings stable rehte hain"
          )}
        </T>
      </Fade>

      {/* beat 2 — RULE 2 + the example lands */}
      <Fade on={beat === 2} delay={dl(2, 0.2)}>
        <T x={540} y={120} size={18} fill={INK} weight={800}>
          RULE 2
        </T>
      </Fade>
      <Fade on={beat === 2} delay={dl(2, 0.7)}>
        <Draw on={true} d="M 470 132 L 610 132" stroke={INK} sw={1.6} dur={0.4} />
      </Fade>
      <Fade on={beat === 2} delay={dl(2, 1)}>
        <T x={540} y={150} size={14} fill={INK} script={false}>
          {t("genus Capitalised, species lowercase", "genus Capitalised, species lowercase")}
        </T>
      </Fade>
      <Fade on={beat === 2} delay={dl(2, 2)}>
        <T x={540} y={220} size={13} fill={RED} script={false}>
          mangifera Indica ✗
        </T>
      </Fade>

      {/* the example name: styled live by `beat`, persists from beat 2 */}
      <Fade on={beat >= 2} delay={dl(2, 2.8)}>
        <SvgText
          x={390}
          y={280}
          textAnchor="middle"
          fontSize={34}
          fontWeight={800}
          fontStyle={italic ? "italic" : "normal"}
          fill={AMBER_DARK}
          fontFamily="var(--font-anek-latin), sans-serif"
        >
          Mangifera
        </SvgText>
        <SvgText
          x={620}
          y={280}
          textAnchor="middle"
          fontSize={34}
          fontWeight={800}
          fontStyle={italic ? "italic" : "normal"}
          fill={GREEN}
          fontFamily="var(--font-anek-latin), sans-serif"
        >
          indica
        </SvgText>
      </Fade>

      {/* beat 3 — the most-tested point, ringed */}
      <Fade on={beat === 3} delay={dl(3, 0.2)}>
        <T x={540} y={148} size={15} fill={RED} weight={700}>
          {t("⚠ the most-tested point in the whole subtopic", "⚠ poore subtopic ka sabse zyada test hone wala point")}
        </T>
      </Fade>
      <Draw on={beat === 3} delay={dl(3, 1)} d={ringD(500, 262, 180, 30)} stroke={RED} sw={2.4} dur={0.8} />

      {/* beat 4 — RULE 3: italics (the example above turns italic live) */}
      <Fade on={beat === 4} delay={dl(4, 0.2)}>
        <T x={540} y={120} size={18} fill={INK} weight={800}>
          RULE 3
        </T>
      </Fade>
      <Fade on={beat === 4} delay={dl(4, 0.7)}>
        <Draw on={true} d="M 470 132 L 610 132" stroke={INK} sw={1.6} dur={0.4} />
      </Fade>
      <Fade on={beat === 4} delay={dl(4, 1)}>
        <T x={540} y={150} size={14} fill={INK} script={false}>
          {t("both words italicised in print", "print mein dono shabd italic hote hain")}
        </T>
      </Fade>

      {/* beat 5 — RULE 4: underline separately (drawn live) */}
      <Fade on={beat === 5} delay={dl(5, 0.2)}>
        <T x={540} y={120} size={18} fill={INK} weight={800}>
          RULE 4
        </T>
      </Fade>
      <Fade on={beat === 5} delay={dl(5, 0.7)}>
        <Draw on={true} d="M 460 132 L 620 132" stroke={INK} sw={1.6} dur={0.4} />
      </Fade>
      <Fade on={beat === 5} delay={dl(5, 1)}>
        <T x={540} y={150} size={14} fill={INK} script={false}>
          {t(
            "handwritten → underline the two words separately",
            "handwritten → dono shabdon ko alag-alag underline karo"
          )}
        </T>
      </Fade>
      <Draw on={underlined} delay={dl(5, 1.8)} d="M 330 292 L 450 292" stroke={AMBER_DARK} sw={2} dur={0.4} />
      <Draw on={underlined} delay={dl(5, 2.2)} d="M 570 292 L 670 292" stroke={GREEN} sw={2} dur={0.4} />

      {/* beat 6 — dissect the name: the anatomy diagram */}
      <Fade on={beat === 6} delay={dl(6, 0.2)}>
        <T x={540} y={148} size={15} fill={GREEN} script>
          {t("let's dissect this name, part by part:", "chalo is naam ko hissa-dar-hissa dekhte hain:")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 1)} d="M 390 295 L 300 340" stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 1.3)} d="M 620 295 L 545 340" stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 6} delay={dl(6, 1.6)} d="M 150 340 h 250 v 90 h -250 z" stroke={AMBER_DARK} sw={2} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 2.3)}>
        <T x={275} y={365} size={13} fill={AMBER_DARK} weight={700}>
          {t("generic name", "generic name")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 2.7)}>
        <T x={275} y={388} size={11} fill={AMBER_DARK} script={false}>
          {t("Capital + italic", "Capital + italic")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 3)}>
        <T x={275} y={408} size={11} fill={AMBER_DARK} script={false}>
          {t("(the genus)", "(the genus)")}
        </T>
      </Fade>
      <Draw on={beat >= 6} delay={dl(6, 3.5)} d="M 420 340 h 250 v 90 h -250 z" stroke={GREEN} sw={2} dur={0.7} />
      <Fade on={beat >= 6} delay={dl(6, 4.2)}>
        <T x={545} y={365} size={13} fill={GREEN} weight={700}>
          {t("specific epithet", "specific epithet")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.6)}>
        <T x={545} y={388} size={11} fill={GREEN} script={false}>
          {t("lowercase + italic", "lowercase + italic")}
        </T>
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 4.9)}>
        <T x={545} y={408} size={11} fill={GREEN} script={false}>
          {t("(the species)", "(the species)")}
        </T>
      </Fade>

      {/* beat 7 — RULE 5: author citation added */}
      <Fade on={beat === 7} delay={dl(7, 0.2)}>
        <T x={540} y={120} size={18} fill={INK} weight={800}>
          RULE 5
        </T>
      </Fade>
      <Fade on={beat === 7} delay={dl(7, 0.7)}>
        <Draw on={true} d="M 460 132 L 620 132" stroke={INK} sw={1.6} dur={0.4} />
      </Fade>
      <Fade on={beat === 7} delay={dl(7, 1)}>
        <T x={540} y={150} size={14} fill={INK} script={false}>
          {t(
            "author citation after the epithet — Roman, optional",
            "author citation epithet ke baad — Roman, optional"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 1.8)}>
        <SvgText
          x={790}
          y={280}
          textAnchor="middle"
          fontSize={28}
          fontWeight={700}
          fill={RED}
          fontFamily="var(--font-anek-latin), sans-serif"
        >
          Linn.
        </SvgText>
      </Fade>
      <Draw on={beat >= 7} delay={dl(7, 2.6)} d="M 790 295 L 720 340" stroke={MUTED} sw={1.4} dur={0.4} />
      <Draw on={beat >= 7} delay={dl(7, 3)} d="M 690 340 h 270 v 90 h -270 z" stroke={RED} sw={2} dur={0.7} />
      <Fade on={beat >= 7} delay={dl(7, 3.7)}>
        <T x={825} y={365} size={13} fill={RED} weight={700}>
          {t("author citation", "author citation")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.1)}>
        <T x={825} y={388} size={11} fill={RED} script={false}>
          {t("Roman, last,", "Roman, last,")}
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4.4)}>
        <T x={825} y={408} size={11} fill={RED} script={false}>
          {t("optional", "optional")}
        </T>
      </Fade>

      {/* beat 8 — closing */}
      <Fade on={beat >= 8} delay={dl(8, 0.3)}>
        <Chip x={300} y={470} w={480} h={36} fill={INK} textFill={CREAM} size={16} script={false}>
          {t("3 written items, still 2 NAMES", "3 likhe items, phir bhi 2 NAMES")}
        </Chip>
      </Fade>
    </Scene>
  );
}
