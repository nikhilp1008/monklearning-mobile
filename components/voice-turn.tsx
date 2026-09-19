import { StyleSheet, Text, type StyleProp, type ViewStyle } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

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

/**
 * "YOU ASKED" — what the teacher heard, shown while it works out the reply.
 *
 * The strongest possible "I heard you", and the one that catches a mishearing
 * BEFORE the teacher answers the wrong question rather than after. It arrives
 * with the server's transcript, which lands after the student lets go and
 * before the teacher starts answering; it stays a moment into the answer so it
 * is never a flash.
 *
 * "You answered" when the words were a reply to a checkpoint, because calling
 * an answer a question is the kind of small wrongness a student notices.
 */
export function HeardLine({
  text,
  answered,
  style,
}: {
  text: string;
  answered: boolean;
  style?: StyleProp<ViewStyle>;
}) {
  return (
    <Animated.View
      entering={FadeIn.duration(220)}
      exiting={FadeOut.duration(260)}
      style={[styles.heard, style]}
      pointerEvents="none">
      <Text style={styles.heardLabel}>{answered ? 'You answered' : 'You asked'}</Text>
      <Text style={styles.heardText} numberOfLines={2}>
        “{text.trim()}”
      </Text>
    </Animated.View>
  );
}

/**
 * The same, for the landscape rail — which is deliberately label-free ("three
 * round targets and nothing else"), so the words have no line of their own
 * there. This sits beside the rail only while something is happening and is
 * gone the rest of the time, so the rail keeps its restraint when idle.
 */
export function RailStatus({
  turn,
  heard,
  answered,
}: {
  turn: VoiceTurn;
  heard: string | null;
  answered: boolean;
}) {
  if (turn === 'idle' && !heard) return null;
  return (
    <Animated.View
      entering={FadeIn.duration(200)}
      exiting={FadeOut.duration(260)}
      style={styles.rail}
      pointerEvents="none">
      {turn !== 'idle' && (
        <Text style={[styles.railWord, { color: turnColor(turn) }]}>{turnWords(turn, false)}</Text>
      )}
      {heard ? (
        <>
          <Text style={styles.heardLabel}>{answered ? 'You answered' : 'You asked'}</Text>
          <Text style={styles.heardText} numberOfLines={3}>
            “{heard.trim()}”
          </Text>
        </>
      ) : null}
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  /** A white card over the ruled board, so the words read against any line
   *  of writing behind them, and a hairline so it sits ON the board rather
   *  than punching a hole in it. */
  heard: {
    alignSelf: 'center',
    maxWidth: '86%',
    alignItems: 'center',
    gap: 3,
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'rgba(28,26,22,.10)',
    boxShadow: [{ offsetX: 0, offsetY: 6, blurRadius: 16, spreadDistance: -8, color: 'rgba(28,26,22,0.28)' }],
  },
  heardLabel: {
    fontFamily: 'Onest_700Bold',
    fontSize: 10,
    letterSpacing: 0.8,
    textTransform: 'uppercase',
    color: DEEP_AMBER,
  },
  heardText: {
    fontFamily: 'Onest_500Medium',
    fontSize: 14,
    lineHeight: 19,
    color: INK,
    textAlign: 'center',
  },
  /** Beside the rail: its right edge sits 10pt clear of the rail's left. */
  rail: {
    position: 'absolute',
    right: '100%',
    marginRight: 10,
    top: '50%',
    transform: [{ translateY: -34 }],
    width: 220,
    gap: 3,
    paddingVertical: 9,
    paddingHorizontal: 13,
    borderRadius: 14,
    backgroundColor: '#FFFFFF',
    borderWidth: 1,
    borderColor: 'rgba(28,26,22,.10)',
    boxShadow: [{ offsetX: 0, offsetY: 6, blurRadius: 16, spreadDistance: -8, color: 'rgba(28,26,22,0.28)' }],
  },
  railWord: {
    fontFamily: 'Onest_700Bold',
    fontSize: 10.5,
    letterSpacing: 0.84,
    textTransform: 'uppercase',
    marginBottom: 2,
  },
});
