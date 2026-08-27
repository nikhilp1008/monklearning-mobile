/**
 * C11 Ch06 · Section 4 — "The conditions equilibrium needs"
 * Canvas 1080×620 · safe x36–1044, y30–596. Spec: SCENE_AUTHORING_CHEMISTRY.md
 * + SCENE_AUTHORING.md.
 *
 * Beats (board_reveal_at_english: [0, 6.06, 7.06, 8.06, 9.06, 10.06, 11.06]):
 *  0 title + underline
 *  1 row1: ① closed system + why (products escape ⇒ never settles)
 *  2 row1: coach callback — needs doors AND walls (second note line)
 *  3 row2: ② constant temperature — K fixed only at fixed T
 *  4 row3: ③ no bulk disturbance — nothing added/removed
 *  5 row4: ④ ideal behaviour — dilute solutions, ideal gases
 *  6 caveat box: real systems need activities, not raw concentrations
 *
 * Layout plan — numbered checklist, badge x=90 heading x=130 (longer lang counts):
 *  b0 | title (script 26, red)        | T mid  | x230..850 y30..92  (bl 64)
 *  b1 | badge① circle r18             | Fade   | c(90,160)
 *  b1 | "closed system" (20, ink)     | T st   | x130..340 y150..172 (bl 166)
 *  b1 | noteA (14, muted)             | T st   | x130..438 y178..197 (bl 192)
 *  b2 | noteB coach callback (14, mu) | T st   | x130..522 y196..219 (bl 214)
 *  b3 | badge② + heading + note       | —      | badge c(90,260) hd y266 nt y292
 *  b4 | badge③ + heading + note       | —      | badge c(90,345) hd y351 nt y377
 *  b5 | badge④ + heading + note       | —      | badge c(90,430) hd y436 nt y462
 *  b6 | caveat dashed box             | rect   | x60..980 y490..554
 *  b6 | caveat text (15, amber-dark)  | T mid  | y517..535 (bl 528)
 */

import React from "react";
import { Circle, Rect } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  RED,
  CREAM,
  Scene,
} from '@/components/scenes/kit';

function Badge({ on, delay, n, cy }: { on: boolean; delay: number; n: number; cy: number }) {
  return (
    <Fade on={on} delay={delay}>
      <Circle cx={90} cy={cy} r={18} fill={CREAM} stroke={INK} strokeWidth={2} />
      <T x={90} y={cy + 6} size={18} fill={INK} weight={700} anchor="middle">
        {n}
      </T>
    </Fade>
  );
}

export default function C11Ch06Sec4({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      <Fade on={true}>
        <T x={540} y={64} size={26} fill={RED} script>
          {t(
            "equilibrium needs four conditions to exist",
            "equilibrium ko chaar conditions chahiye"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 6)}
        d="M 430 84 C 480 80, 600 87, 650 83"
        stroke={RED}
        sw={2.4}
        dur={0.6}
      />

      {/* row 1 — closed system */}
      <Badge on={beat >= 1} delay={dl(1, 0.3)} n={1} cy={160} />
      <Fade on={beat >= 1} delay={dl(1, 0.6)}>
        <T x={130} y={166} size={20} fill={INK} weight={700} anchor="start">
          {t("closed system", "closed system")}
        </T>
      </Fade>
      <Fade on={beat >= 1} delay={dl(1, 1.3)}>
        <T x={130} y={192} size={14} fill={MUTED} anchor="start">
          {t(
            "open flask → products escape → never settles",
            "flask khula → products nikal jaate → kabhi nahi banta"
          )}
        </T>
      </Fade>
      <Fade on={beat >= 2} delay={dl(2, 0.4)}>
        <T x={130} y={214} size={14} fill={MUTED} script anchor="start">
          {t(
            "like the train coach — needs both doors AND walls",
            "train coach jaisa — doors AUR walls dono chahiye"
          )}
        </T>
      </Fade>

      {/* row 2 — constant temperature */}
      <Badge on={beat >= 3} delay={dl(3, 0.2)} n={2} cy={260} />
      <Fade on={beat >= 3} delay={dl(3, 0.5)}>
        <T x={130} y={266} size={20} fill={INK} weight={700} anchor="start">
          {t("constant temperature", "constant temperature")}
        </T>
      </Fade>
      <Fade on={beat >= 3} delay={dl(3, 1.2)}>
        <T x={130} y={292} size={14} fill={MUTED} anchor="start">
          {t(
            "K is a constant only at a fixed T",
            "K sirf fixed T par hi constant hai"
          )}
        </T>
      </Fade>

      {/* row 3 — no bulk disturbance */}
      <Badge on={beat >= 4} delay={dl(4, 0.2)} n={3} cy={345} />
      <Fade on={beat >= 4} delay={dl(4, 0.5)}>
        <T x={130} y={351} size={20} fill={INK} weight={700} anchor="start">
          {t("no bulk disturbance", "koi bulk disturbance nahi")}
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 1.2)}>
        <T x={130} y={377} size={14} fill={MUTED} anchor="start">
          {t(
            "nothing added or removed from outside",
            "bahar se kuch add/remove nahi ho raha"
          )}
        </T>
      </Fade>

      {/* row 4 — ideal behaviour */}
      <Badge on={beat >= 5} delay={dl(5, 0.2)} n={4} cy={430} />
      <Fade on={beat >= 5} delay={dl(5, 0.5)}>
        <T x={130} y={436} size={20} fill={INK} weight={700} anchor="start">
          {t("ideal behaviour", "ideal behaviour")}
        </T>
      </Fade>
      <Fade on={beat >= 5} delay={dl(5, 1.2)}>
        <T x={130} y={462} size={14} fill={MUTED} anchor="start">
          {t("dilute solutions + ideal gases", "dilute solutions + ideal gases")}
        </T>
      </Fade>

      {/* beat 6 — the caveat: activities, not raw concentrations */}
      <Fade on={beat >= 6} delay={dl(6, 0.3)}>
        <Rect
          x={60}
          y={490}
          width={920}
          height={64}
          rx={12}
          fill={CREAM}
          stroke={AMBER}
          strokeWidth={1.8}
          strokeDasharray="7 6"
        />
      </Fade>
      <Fade on={beat >= 6} delay={dl(6, 0.9)}>
        <T x={540} y={528} size={15} fill={AMBER_DARK} anchor="middle">
          {t(
            "real systems (high P / conc.) need ACTIVITIES, not raw concentrations",
            "real systems (high P / conc.) ko ACTIVITIES chahiye, sirf concentration nahi"
          )}
        </T>
      </Fade>
    </Scene>
  );
}
