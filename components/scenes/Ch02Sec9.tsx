/**
 * Ch02 · Section 9 — "The kinematic quantities: symbols, units, dimensions"
 * Canvas 1080×620 · safe x36–1044, y30..596. Spec: SCENE_AUTHORING.md.
 *
 * Beats (en [0, 16.8, 37.9, 62.1, 82.9, 93.9, 113.8, 133.2, 158]):
 *  0 title · table frame + header row
 *  1 row 1: distance (never negative)
 *  2 row 2: displacement · amber underlines under the twin [L] cells · note
 *  3 rows 3–4 qty+def · amber underlines under the numerators
 *  4 rows 3–4 unit+dim cells · "identical again" note
 *  5 row 5: instantaneous velocity & speed (strip the sign)
 *  6 row 6 qty+def: a = dv/dt = d²x/dt²
 *  7 row 6 unit+dim · red ladder note
 *  8 ring the "dimension" header · green-red finale note
 *
 * Layout plan (Kalam bl−1.3s..+0.5s · Anek bl−0.78s..+0.31s):
 *  table x60..1020 y90..398 · verticals x330/640/800 · rows 46px, lines y122..398 step 46
 *  header bl 112: qty st x80 · def cx485 · unit cx720 · dim cx908
 *  row baselines: 152 / 198 / 244 / 290 / 336 / 382
 *  qty col st x80 script 13 · def cx485 sans 14 · unit cx720 · dim cx908
 *  notes: b2 bl 448 · b4 bl 484 · b7 bl 520 · b8 bl 556 (+underline y572), all cx540 script 12/13
 */

import React from "react";
import { G } from 'react-native-svg';
import {
  SceneProps,
  useBeat,
  delayFor,
  Fade,
  Draw,
  T,
  ringD,
  INK,
  MUTED,
  AMBER,
  AMBER_DARK,
  GREEN,
  RED,
  Scene,
} from '@/components/scenes/kit';

function Row({
  on,
  d1,
  d2,
  bl,
  qty,
  qtyFill,
  def,
  unit,
  dim,
  dl,
}: {
  on: boolean;
  d1: number;
  d2: number;
  bl: number;
  qty: string;
  qtyFill: string;
  def: string;
  unit?: string;
  dim?: string;
  dl: (k: number, d: number) => number;
  k?: number;
}) {
  return (
    <G>
      <Fade on={on} delay={d1}>
        <T x={80} y={bl} size={13} fill={qtyFill} script anchor="start">
          {qty}
        </T>
      </Fade>
      <Fade on={on} delay={d2}>
        <T x={485} y={bl} size={14} fill={INK} weight={600}>
          {def}
        </T>
        {unit ? (
          <T x={720} y={bl} size={14} fill={INK} weight={600}>
            {unit}
          </T>
        ) : null}
        {dim ? (
          <T x={908} y={bl} size={14} fill={INK} weight={600}>
            {dim}
          </T>
        ) : null}
      </Fade>
    </G>
  );
}

export default function Ch02Sec9({ currentTime, reveals, language }: SceneProps) {
  const beat = useBeat(currentTime, reveals);
  const en = language === "english";
  const t = (e: string, h: string) => (en ? e : h);
  const dl = (k: number, d: number) => delayFor(beat, k, d);

  return (
    <Scene>
      {/* beat 0 — the frame */}
      <Fade on={beat >= 0} delay={dl(0, 0.4)}>
        <T x={540} y={58} size={23} fill={INK} script>
          {t(
            "the reference table — hold it as one pattern",
            "reference table — ek pattern ki tarah pakdo"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 0}
        delay={dl(0, 2)}
        d="M 60 90 h 960 v 308 h -960 z M 330 90 V 398 M 640 90 V 398 M 800 90 V 398"
        stroke={INK}
        sw={2}
        dur={1.6}
      />
      <Fade on={beat >= 0} delay={dl(0, 4.2)}>
        <T x={80} y={112} size={13} fill={MUTED} script anchor="start">
          {t("quantity", "quantity")}
        </T>
        <T x={485} y={112} size={13} fill={MUTED} script>
          {t("definition / symbol", "definition / symbol")}
        </T>
        <T x={720} y={112} size={13} fill={MUTED} script>
          unit
        </T>
        <T x={908} y={112} size={13} fill={MUTED} script>
          dimension
        </T>
      </Fade>
      <Draw on={beat >= 0} delay={dl(0, 5.5)} d="M 60 122 H 1020" stroke={INK} sw={1.6} dur={0.6} />

      {/* beat 1 — distance */}
      <Row
        on={beat >= 1}
        d1={dl(1, 0.8)}
        d2={dl(1, 2.5)}
        bl={152}
        qty={t("distance (scalar)", "distance (scalar)")}
        qtyFill={AMBER_DARK}
        def={t("s — total path, never −", "s — poora raasta, kabhi − nahi")}
        unit="m"
        dim="[L]"
        dl={dl}
      />
      <Draw on={beat >= 1} delay={dl(1, 6)} d="M 60 168 H 1020" stroke={INK} sw={1.2} dur={0.5} />

      {/* beat 2 — displacement + the twin [L]s */}
      <Row
        on={beat >= 2}
        d1={dl(2, 0.8)}
        d2={dl(2, 2.5)}
        bl={198}
        qty={t("displacement (vector)", "displacement (vector)")}
        qtyFill={RED}
        def="Δx = x_f − x_i"
        unit="m"
        dim="[L]"
        dl={dl}
      />
      <Draw on={beat >= 2} delay={dl(2, 6)} d="M 60 214 H 1020" stroke={INK} sw={1.2} dur={0.5} />
      <Draw
        on={beat >= 2}
        delay={dl(2, 10)}
        d="M 884 160 h 48 M 884 206 h 48"
        stroke={AMBER}
        sw={2.4}
        dur={0.7}
      />
      <Fade on={beat >= 2} delay={dl(2, 12)}>
        <T x={540} y={448} size={12} fill={AMBER_DARK} script>
          {t(
            "same m, same [L] — a dimensional check can't tell them apart",
            "same m, same [L] — dimensional check inhe alag nahi kar sakta"
          )}
        </T>
      </Fade>

      {/* beat 3 — the two averages: it's all in the numerator */}
      <Row
        on={beat >= 3}
        d1={dl(3, 0.8)}
        d2={dl(3, 2.5)}
        bl={244}
        qty={t("avg speed", "avg speed")}
        qtyFill={AMBER_DARK}
        def={t("total distance ⁄ total time", "total distance ⁄ total time")}
        dl={dl}
      />
      <Draw on={beat >= 3} delay={dl(3, 4)} d="M 60 260 H 1020" stroke={INK} sw={1.2} dur={0.5} />
      <Row
        on={beat >= 3}
        d1={dl(3, 5.5)}
        d2={dl(3, 7)}
        bl={290}
        qty={t("avg velocity", "avg velocity")}
        qtyFill={RED}
        def="Δx ⁄ Δt"
        dl={dl}
      />
      <Draw on={beat >= 3} delay={dl(3, 8.5)} d="M 60 306 H 1020" stroke={INK} sw={1.2} dur={0.5} />
      <Draw
        on={beat >= 3}
        delay={dl(3, 12)}
        d="M 391 252 h 96 M 458 298 h 22"
        stroke={AMBER}
        sw={2.4}
        dur={0.7}
      />

      {/* beat 4 — identical units again */}
      <Fade on={beat >= 4} delay={dl(4, 0.8)}>
        <T x={720} y={244} size={14} fill={INK} weight={600}>
          m/s
        </T>
        <T x={908} y={244} size={14} fill={INK} weight={600}>
          [L T⁻¹]
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 2.2)}>
        <T x={720} y={290} size={14} fill={INK} weight={600}>
          m/s
        </T>
        <T x={908} y={290} size={14} fill={INK} weight={600}>
          [L T⁻¹]
        </T>
      </Fade>
      <Fade on={beat >= 4} delay={dl(4, 5)}>
        <T x={540} y={484} size={12} fill={MUTED} script>
          {t(
            "both averages: m/s and [L T⁻¹] — dimensions won't save you here either",
            "dono averages: m/s aur [L T⁻¹] — yahan bhi dimensions nahi bachayenge"
          )}
        </T>
      </Fade>

      {/* beat 5 — the instantaneous pair */}
      <Row
        on={beat >= 5}
        d1={dl(5, 0.8)}
        d2={dl(5, 2.5)}
        bl={336}
        qty={t("inst. velocity & speed", "inst. velocity & speed")}
        qtyFill={INK}
        def={t("v = dx⁄dt · speed = |dx⁄dt|", "v = dx⁄dt · speed = |dx⁄dt|")}
        unit="m/s"
        dim="[L T⁻¹]"
        dl={dl}
      />
      <Draw on={beat >= 5} delay={dl(5, 6)} d="M 60 352 H 1020" stroke={INK} sw={1.2} dur={0.5} />

      {/* beat 6 — acceleration, once or twice down */}
      <Row
        on={beat >= 6}
        d1={dl(6, 0.8)}
        d2={dl(6, 2.5)}
        bl={382}
        qty={t("acceleration (vector)", "acceleration (vector)")}
        qtyFill={RED}
        def="a = dv⁄dt = d²x⁄dt²"
        dl={dl}
      />

      {/* beat 7 — pin the units, see the ladder */}
      <Fade on={beat >= 7} delay={dl(7, 0.8)}>
        <T x={720} y={382} size={14} fill={INK} weight={600}>
          m/s²
        </T>
        <T x={908} y={382} size={14} fill={INK} weight={600}>
          [L T⁻²]
        </T>
      </Fade>
      <Fade on={beat >= 7} delay={dl(7, 4)}>
        <T x={540} y={520} size={13} fill={RED} script>
          {t(
            "T⁻¹ → T⁻² : each rung down the ladder costs one more power of time",
            "T⁻¹ → T⁻² : seedhi ka har paidan time ki ek aur power leta hai"
          )}
        </T>
      </Fade>

      {/* beat 8 — the trap the table sets */}
      <Draw
        on={beat >= 8}
        delay={dl(8, 0.8)}
        d={ringD(908, 107, 52, 13)}
        stroke={RED}
        sw={2.2}
        dur={0.7}
      />
      <Fade on={beat >= 8} delay={dl(8, 2.5)}>
        <T x={540} y={556} size={13} fill={GREEN} script>
          {t(
            "dimensions can NEVER tell a scalar from a vector — only meaning can",
            "dimensions scalar ko vector se KABHI alag nahi kar sakte — sirf matlab kar sakta hai"
          )}
        </T>
      </Fade>
      <Draw
        on={beat >= 8}
        delay={dl(8, 4.5)}
        d="M 300 572 h 480"
        stroke={GREEN}
        sw={2}
        dur={0.7}
      />
    </Scene>
  );
}
