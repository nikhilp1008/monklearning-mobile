/**
 * P12Ch02 · Section 80 — "Sign conventions, where the marks actually go"
 * Beats (en [0,1,2,3,4,5,7]): 7 beats
 */

import React from "react";
import { G, Rect } from 'react-native-svg';
import {
  SceneProps, useBeat, delayFor, Fade, Draw, T, Chip, ringD,
  INK, MUTED, AMBER_DARK, GREEN, RED, CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ n, cx, cy, on, delay }: { n: number; cx: number; cy: number; on: boolean; delay: number }) {
  return (
    <G>
      <Draw on={on} delay={delay}
        d={`M ${cx - 13} ${cy} A 13 13 0 1 1 ${cx + 13} ${cy} A 13 13 0 1 1 ${cx - 13} ${cy}`}
        stroke={RED} sw={2.2} dur={0.4} />
      <Fade on={on} delay={delay + 0.3}>
        <T x={cx} y={cy + 5} size={14} fill={RED} weight={800}>{n}</T>
      </Fade>
    </G>
  );
}

export default function P12Ch03Sec80({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={24} fill={RED} script>
          {t("Mastering Loop Traversal Sign Conventions", "Mastering Loop Traversal Sign Conventions")}
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 2.5)} d="M 200 70 C 440 66, 640 74, 880 69" stroke={RED} sw={2.4} dur={0.7} />

      {/* BEAT 2 & 3: Resistor Sign Rules */}
      <Badge n={1} cx={52} cy={140} on={beat >= 2} delay={dl(2, 0.4)} />
      <Fade on={beat >= 2} delay={dl(2, 0.8)}>
        <T x={74} y={145} size={14} fill={RED} weight={700} anchor="start">RESISTOR TRAVERSAL SIGNS</T>
      </Fade>
      <Fade on={beat >= 2} dim={beat >= 4}>
        <G transform="translate(60, 160)">
          <Rect x={0} y={5} width={450} height={60} rx={8} fill={CREAM} stroke={AMBER_DARK} strokeWidth={1.8} />
          <T x={225} y={30} anchor="middle" size={15} fill={INK} weight={800}>
            With Current Arrow ⇒  − I R (Drop)
          </T>
          <T x={225} y={52} anchor="middle" size={15} fill={INK} weight={800}>
            Against Current Arrow ⇒  + I R (Rise)
          </T>
        </G>
      </Fade>

      {/* BEAT 4 & 5: Cell Terminal Sign Rules */}
      <Badge n={2} cx={540} cy={140} on={beat >= 4} delay={dl(4, 0.4)} />
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={562} y={145} size={14} fill={RED} weight={700} anchor="start">CELL TRAVERSAL SIGNS</T>
      </Fade>
      <Fade on={beat >= 4} dim={beat >= 7}>
        <G transform="translate(540, 160)">
          <Rect x={0} y={5} width={480} height={60} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={240} y={30} anchor="middle" size={15} fill={INK} weight={800}>
            Enter − to + Terminal ⇒  + E (Gain)
          </T>
          <T x={240} y={52} anchor="middle" size={15} fill={INK} weight={800}>
            Enter + to − Terminal ⇒  − E (Drop)
          </T>
        </G>
      </Fade>

      {/* BEAT 7: Negative Current Pro-Tip */}
      <Badge n={3} cx={52} cy={270} on={beat >= 7} delay={dl(7, 0.4)} />
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={74} y={275} size={14} fill={RED} weight={700} anchor="start">NEGATIVE CURRENT RESULT INTERPRETATION</T>
      </Fade>
      <Fade on={beat >= 7}>
        <G transform="translate(60, 290)">
          <Rect x={0} y={5} width={960} height={50} rx={8} fill={CREAM} stroke={GREEN} strokeWidth={1.8} />
          <T x={480} y={35} anchor="middle" size={15} fill={GREEN} weight={800} script>
            {t(
              "Negative answer (e.g., I = -2A) just means current flows opposite to assumed arrow! Value is correct!",
              "Negative answer (e.g., I = -2A) ka matlab hai current assumed arrow ke opposite beh raha hai!"
            )}
          </T>
        </G>
      </Fade>

      {/* BEAT 7: Summary Chip */}
      <Fade on={beat >= 7}>
        <Chip x={100} y={480} w={880} h={44} fill={GREEN} textFill="#ffffff" size={18}>
          {t(
            "★ With I: -IR; Against I: +IR. Exit + terminal: +E; Exit - terminal: -E! Perfect rule! ✓",
            "★ Current ke sath: -IR; Opposite: +IR. + terminal se exit: +E; - terminal se exit: -E! ✓"
          )}
        </Chip>
      </Fade>
    </Scene>
  );
}
