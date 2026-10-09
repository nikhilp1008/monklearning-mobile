/**
 * Switches for features that are built but deliberately not on screen.
 */

/**
 * MOMENTS — "your teacher noticed" (MOMENTS.md). On hold since 2026-10-08
 * while how and where it is shown is rethought.
 *
 * Off hides its two surfaces: the observation row on Home and the teacher's
 * note on Class Dismissed. Everything behind them keeps running — the progress
 * snapshot taken as a class starts, and the count of classes taken — so that
 * turning this back on picks up from true numbers rather than from the day it
 * was switched off (a tenth class must never be greeted as a first).
 */
export const MOMENTS_VISIBLE = false;
