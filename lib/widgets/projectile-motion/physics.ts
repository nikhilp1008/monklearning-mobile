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

/** Nice axis step for a world span, so tick labels stay round numbers. */
export function tickStep(worldSpan: number): number {
  'worklet';
  const steps = [1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000];
  for (let i = 0; i < steps.length; i++) {
    if (worldSpan / steps[i] <= 7) return steps[i];
  }
  return 2000;
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
