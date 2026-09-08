/**
 * Projectile motion — closed-form, no drag. Every function here is a worklet so
 * the trajectory path can be rebuilt on the UI thread during a cue tween.
 *
 * Reference results (verified):
 *   v0=22, theta=45, g=9.81  ->  R=49.34 m, H=12.34 m, T=3.17 s
 *   v0=22, theta=65, g=9.81  ->  R=37.79 m, H=20.26 m
 *   complementary angles (25/65) share a range
 */

export interface ProjectileParams {
  launch_angle_deg: number;
  initial_speed_ms: number;
  gravity_ms2: number;
  /** Label only; never used in the maths. */
  body: 'earth' | 'moon' | 'mars' | 'jupiter';
}

export interface Derived {
  range: number;
  apexHeight: number;
  flightTime: number;
  apexX: number;
  /** Structurally, `Derived` IS a `Record<string, number>` — this is what
   *  lets `derive` serve directly as `WidgetModule.computeDerived` with no
   *  wrapper, so there is only one function computing these values, not two
   *  that could drift. */
  [key: string]: number;
}

const DEG = Math.PI / 180;

export function derive(p: ProjectileParams): Derived {
  'worklet';
  const th = p.launch_angle_deg * DEG;
  const vy = p.initial_speed_ms * Math.sin(th);
  const g = p.gravity_ms2;
  return {
    range: (p.initial_speed_ms * p.initial_speed_ms * Math.sin(2 * th)) / g,
    apexHeight: (vy * vy) / (2 * g),
    flightTime: (2 * vy) / g,
    apexX: (p.initial_speed_ms * p.initial_speed_ms * Math.sin(2 * th)) / (2 * g),
  };
}

/**
 * Pixels per metre.
 *
 * Depends ONLY on speed and gravity — never on angle. This is deliberate: the
 * launch angle is the parameter cues move most, and an axis that rescales
 * mid-tween makes two trajectories visually incomparable, which destroys the
 * one thing the animation is meant to teach.
 */
export function metresToPx(
  speed: number,
  gravity: number,
  plotW: number,
  plotH: number
): number {
  'worklet';
  const maxRange = (speed * speed) / gravity;       // at 45 deg
  const maxApex = (speed * speed) / (2 * gravity);  // at 90 deg
  return Math.min(plotW / (maxRange * 1.1), plotH / (maxApex * 1.14));
}

/**
 * Nice axis step for a world span, so tick labels stay round numbers.
 *
 * Generated on the 1-2-5 decade ladder rather than read from a fixed table.
 * The table this replaced ran [1 .. 1000] with a hard `return 2000` fallback,
 * and both ends were reachable from legal payloads:
 *
 *   span 0.04 m  (speed 1, gravity 24.8) -> returned 1, so NO gridline fell
 *     inside the plot at all. Ink coverage collapsed to 0.7% and the render
 *     gate called the board degenerate.
 *   span 25000 m (speed 200, gravity 1.6) -> returned 2000, giving 12+
 *     intervals where this function promises at most 7. Seven five-digit
 *     labels ran off a 343pt board and eleven pairs collided.
 *
 * Neither appears in a one-parameter sweep: both need a CORNER of the legal
 * (angle, speed, gravity) box. The ladder has no ends, so no span can fall
 * off it.
 */
export function tickStep(worldSpan: number): number {
  'worklet';
  if (!(worldSpan > 0) || !Number.isFinite(worldSpan)) return 1;
  // Smallest 1-2-5 step giving at most 7 intervals.
  const raw = worldSpan / 7;
  const decade = Math.pow(10, Math.floor(Math.log10(raw)));
  const n = raw / decade;
  const mult = n <= 1 ? 1 : n <= 2 ? 2 : n <= 5 ? 5 : 10;
  return mult * decade;
}

/**
 * SVG path `d` for the trajectory, in board coordinates.
 * Worklet-safe: only string concatenation and Math.
 */
export function trajectoryPath(
  angleDeg: number,
  speed: number,
  gravity: number,
  originX: number,
  groundY: number,
  pxPerM: number,
  samples: number
): string {
  'worklet';
  const th = angleDeg * DEG;
  const vx = speed * Math.cos(th);
  const vy = speed * Math.sin(th);
  const T = (2 * vy) / gravity;
  let d = '';
  for (let i = 0; i <= samples; i++) {
    const t = (T * i) / samples;
    const x = vx * t;
    const y = vy * t - 0.5 * gravity * t * t;
    const px = originX + x * pxPerM;
    const py = groundY - Math.max(0, y) * pxPerM;
    d += (i === 0 ? 'M' : 'L') + px.toFixed(2) + ' ' + py.toFixed(2);
  }
  return d;
}

/** Closed area under the trajectory, for the subtle fill. */
export function trajectoryArea(
  angleDeg: number,
  speed: number,
  gravity: number,
  originX: number,
  groundY: number,
  pxPerM: number,
  samples: number
): string {
  'worklet';
  const line = trajectoryPath(angleDeg, speed, gravity, originX, groundY, pxPerM, samples);
  const th = angleDeg * DEG;
  const R = (speed * speed * Math.sin(2 * th)) / gravity;
  return line + 'L' + (originX + R * pxPerM).toFixed(2) + ' ' + groundY.toFixed(2) +
         'L' + originX.toFixed(2) + ' ' + groundY.toFixed(2) + 'Z';
}
