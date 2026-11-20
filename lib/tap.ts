/**
 * A deliberate action worth knowing about: starting to pay, trying a promo code.
 *
 * This file imports nothing, on purpose. The code that knows an action happened
 * (lib/promo.ts, lib/payments.ts) is small logic that many tests load on its
 * own; if it imported the tracker it would pull storage, device and app-state
 * modules into every one of them. So it calls `noteTap`, and the tracker
 * (lib/track.ts) plugs itself in when it starts. Before that, or in a test,
 * a tap goes nowhere and costs nothing.
 */

type Sink = (name: string, props?: Record<string, unknown>) => void;

let sink: Sink | null = null;

/** Called once by the tracker when it starts. */
export function setTapSink(fn: Sink | null): void {
  sink = fn;
}

/** Record an action. `name` is a fixed word chosen in code. Never throws. */
export function noteTap(name: string, props?: Record<string, unknown>): void {
  try {
    sink?.(name, props);
  } catch {
    // Telling the tracker must never be what breaks a payment.
  }
}
