import { DEEP_AMBER, GREEN_INK, INK, INK_FAINT } from '@/components/classroom-chrome';

/**
 * THE STUDENT'S TURN, SAID — the words that go with the dock's ring.
 *
 * The ring already showed a hold: green and quick while the mic was down. What
 * it could not show was the stretch after letting go, while the server
 * transcribes, decides and synthesises a reply. The ring lingered for 1.5s and
 * faded, the hint still read "Hold mic to speak", and a student who had just
 * asked a question watched the screen go quiet at exactly the moment they were
 * wondering whether they had been heard.
 *
 * So the turn has four states, and each is said in words as well as in colour:
 * words, because colour alone is a peripheral signal and a student holding the
 * mic is looking at the board; and colour, because a word under a thumb is
 * easy to miss. They live under the button, not in the captions — the caption
 * line is the teacher's voice, and putting the student's status on it would
 * make it unclear who is talking.
 *
 * What the student SAID is never shown. The feeling of being heard belongs to
 * the command bar — the ring's colour and motion, and these few words — not to
 * a card that repeats the question back.
 */
export type VoiceTurn = 'idle' | 'listening' | 'thinking' | 'failed';

/** The line under the mic, for each state. */
export function turnWords(turn: VoiceTurn, voiceOff: boolean): string {
  if (voiceOff) return 'Mic off';
  switch (turn) {
    case 'listening':
      return 'Listening…';
    case 'thinking':
      return 'Thinking…';
    case 'failed':
      return "Didn't catch that — hold a little longer";
    default:
      return 'Hold mic to speak';
  }
}

/** Green while the student speaks, amber while the teacher works, ink when it
 *  failed — the same three the ring wears, so word and ring never disagree. */
export function turnColor(turn: VoiceTurn): string {
  switch (turn) {
    case 'listening':
      return GREEN_INK;
    case 'thinking':
      return DEEP_AMBER;
    case 'failed':
      return INK;
    default:
      return INK_FAINT;
  }
}
