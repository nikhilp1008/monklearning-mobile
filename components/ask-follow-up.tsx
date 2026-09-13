import { Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

import { INK, INK_FAINT, INK_MUTED, GREEN_INK, LevelBars, PAPER } from '@/components/classroom-chrome';
import { DockRing, type RingMood } from '@/components/dock-ring';
import { useFollowUp } from '@/hooks/use-follow-up';

/**
 * ASK FOLLOW-UP — hold the bar, ask out loud, and the teacher answers where you
 * are standing. Ported from `followup_handoff/Ask Follow-up 12a`.
 *
 * The whole point is that nothing moves. A follow-up is a question ABOUT the
 * working already on screen, so sending the student to a live classroom to ask
 * it would take away the very thing being asked about. The recording goes up
 * with the doubt's own context, the answer comes back as speech, and the
 * solution never leaves the screen.
 *
 * It is the live class's dock, stretched into a bar: the same white lifted
 * face, the same hairline, the same ring — literally the same component, so the
 * two surfaces cannot drift apart. Colourless at rest; the ring only wakes
 * while a student is actually using it.
 *
 * VOICE ONLY, DELIBERATELY. The server streams the answer's written steps as
 * well, and they are read here — but only to build the conversation history the
 * next question is sent with. Nothing is printed. The written answer is getting
 * its own surface, a board that is still being designed; until that exists,
 * half-showing the text would be a worse answer than not showing it, and would
 * have to be torn out again. `onStep` is where it will attach.
 */

function MicIcon({ color }: { color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke={color}
      strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
      <Path d="M12 3a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3z" />
      <Path d="M6 11a6 6 0 0 0 12 0" />
      <Path d="M12 17v4" />
    </Svg>
  );
}

/** Shown while the answer is playing, because a bar you can stop should look
 *  stoppable. The prototype has no such state — it never had to answer. */
function StopIcon({ color }: { color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={15} height={15} fill={color}>
      <Rect x={6} y={6} width={12} height={12} rx={2.5} />
    </Svg>
  );
}

/** The reference's own flag: an upright staff with a pennant, in muted ink so
 *  Report reads as the quieter of the two controls. */
function FlagIcon() {
  return (
    <Svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke={INK_MUTED}
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <Path d="M5 21V4" />
      <Path d="M5 4h11l-1.5 4L16 12H5" />
    </Svg>
  );
}

export function AskFollowUpBar({
  fu,
  onReport,
}: {
  /** The exchange, owned by the screen so the answer sheet can share it. */
  fu: ReturnType<typeof useFollowUp>;
  onReport?: () => void;
}) {
  const { phase, failure, linger, disabled } = fu;


  const listening = phase === 'listening';
  const speaking = phase === 'speaking';

  const label = listening
    ? 'Listening…'
    : phase === 'thinking'
      ? 'Thinking…'
      : speaking
        ? 'Answering…'
        : 'Ask follow-up';

  const hint = failure
    ? failure === 'mic'
      ? 'Microphone is off'
      : 'Try again'
    : listening
      ? 'Release to stop'
      : phase === 'thinking'
        ? 'One moment'
        : speaking
          ? 'Tap to stop'
          : 'Hold to speak';

  /** Green while the student holds the floor, amber the rest of the time —
   *  the dock's own two palettes, meaning the same two things. */
  const mood: RingMood = listening ? 'student' : 'teacher';

  return (
    <View style={styles.block}>
      <View style={styles.row}>
        <View style={styles.anchor}>
        <DockRing mood={mood} awake={phase !== 'idle' || linger} id="followup" />
          <Pressable
            style={[styles.face, disabled && styles.faceOff]}
            disabled={disabled}
            accessibilityLabel={speaking ? 'Stop the answer' : 'Hold to ask a follow-up'}
            onPressIn={() => {
              if (speaking || phase === 'thinking') return;
              void fu.beginHold();
            }}
            onPressOut={() => {
              if (phase !== 'listening') return;
              void fu.endHold();
            }}
            onPress={() => {
              // Only meaningful while the answer is playing; a hold's own press
              // event arrives after `onPressOut` has already sent the question.
              if (speaking) fu.stopEverything();
            }}>
            <View style={[styles.thumb, listening && styles.thumbOn]}>
              {listening ? (
                <LevelBars color={PAPER} heights={[9, 17, 12]} />
              ) : speaking ? (
                <StopIcon color={PAPER} />
              ) : (
                <MicIcon color={PAPER} />
              )}
            </View>
            <Text style={styles.label} numberOfLines={1}>
              {label}
            </Text>
          </Pressable>
        </View>

        {/* Report, as a disc matching the bar's own plate. It lives here rather
            than in the screen because 12a centres the PAIR: the bar is content
            sized, the disc is 52, and the two are centred together. Split
            across two files the row could only be laid out by guesswork. */}
        <Pressable
          style={styles.disc}
          onPress={onReport}
          accessibilityLabel="Report a problem">
          <FlagIcon />
        </Pressable>
      </View>
      <Text style={[styles.hint, listening && styles.hintLive]} numberOfLines={1}>
        {hint}
      </Text>
    </View>
  );
}

/** The dock's plate, verbatim — negative spreads included, which is why this is
 *  `boxShadow` and not the older shadow props. */
const PLATE = {
  backgroundColor: '#FFFFFF',
  borderWidth: 1,
  borderColor: 'rgba(28,26,22,.10)',
  boxShadow: [
    { offsetX: 0, offsetY: 18, blurRadius: 36, spreadDistance: -20, color: 'rgba(28,26,22,0.5)' },
    { offsetX: 0, offsetY: 2, blurRadius: 6, spreadDistance: -2, color: 'rgba(28,26,22,0.12)' },
  ],
} as const;

const styles = StyleSheet.create({
  /**
   * THE BAR IS NOT FULL WIDTH, and that was the mistake worth fixing.
   *
   * Built with `flex: 1` it stretched to whatever the footer gave it — 280pt
   * against a 342pt row — and shoved the report disc against the right edge.
   * Measured off the reference, the pill is CONTENT sized at 196 (1 + 6 + 40
   * thumb + 10 + 118 label + 20 + 1) and the pair is centred: 42pt of air
   * either side of bar-gap-disc. So nothing here flexes; the row centres.
   */
  block: { gap: 9 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10 },
  /** Holds ring and face together and sizes itself to the face, so the ring's
   *  -1.5 and -6 insets are measured off the bar's own edge. */
  anchor: { position: 'relative' },
  face: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    height: 52,
    borderRadius: 99,
    // 6 on the left because the 40pt disc sits there; 20 on the right so the
    // label is not crowded against the edge.
    paddingLeft: 6,
    paddingRight: 20,
    ...PLATE,
  },
  faceOff: { opacity: 0.5 },
  disc: {
    width: 52,
    height: 52,
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
    ...PLATE,
  },
  thumb: {
    width: 40,
    height: 40,
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: INK,
  },
  thumbOn: { backgroundColor: GREEN_INK, transform: [{ scale: 1.06 }] },
  label: {
    fontFamily: 'Onest_700Bold',
    fontSize: 14,
    letterSpacing: -0.14,
    color: INK,
    /**
     * Fixed, from the handoff: the label changes between "Ask follow-up",
     * "Listening…", "Thinking…" and "Answering…", and without a floor the bar
     * would breathe in and out under the student's thumb every time it did.
     * 118 is the widest of them.
     */
    minWidth: 118,
  },
  hint: {
    textAlign: 'center',
    fontFamily: 'Onest_700Bold',
    fontSize: 10.5,
    letterSpacing: 0.84,
    textTransform: 'uppercase',
    color: INK_FAINT,
  },
  hintLive: { color: GREEN_INK },
});
