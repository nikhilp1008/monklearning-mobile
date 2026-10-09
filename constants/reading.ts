/**
 * READING TEXT — one set of sizes for everything a student reads as an
 * explanation: the worked solution on a doubt, the solution under a Practice
 * question, and the follow-up board's answers.
 *
 * They had drifted into three systems. A doubt's steps were 16 on 25, a
 * Practice step's body was 14 on 22 under a 15.5 heading, the board was 14.5
 * under a 16.5 heading, and the same kind of paragraph sat at a different
 * size and spacing on every screen a student met it. One explanation, one
 * look.
 *
 *   Explanation text   15 on 24 — headings, body, formulas, options alike.
 *                      A heading is set apart by weight and ink, never size:
 *                      bigger AND bolder in the middle of working reads as
 *                      shouting.
 *   The question       16 on 26 — the one thing a step above the working.
 *   Side margins       24, the page gutter every redesigned screen uses.
 *
 * Short labels (buttons, captions, small capitals) are not reading text and
 * keep the app's tighter spacing.
 */
export const READ_SIZE = 15;
export const READ_LINE = 24;

export const QUESTION_READ_SIZE = 16;
export const QUESTION_READ_LINE = 26;

/** Between one step and the next, and between the rows inside a step. */
export const STEP_GAP = 28;
export const ROW_GAP = 10;

/** Ink for headings, formulas and a step's first sentence; grey for the rest. */
export const READ_INK = '#1C1A16';
export const READ_GREY = '#4A463D';

export const READING_GUTTER = 24;
