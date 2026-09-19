import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Keyboard,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  useWindowDimensions,
  View,
} from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Easing,
  FadeIn,
  interpolate,
  runOnJS,
  useAnimatedKeyboard,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
  type SharedValue,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { reportDoubt } from '@/lib/doubts';
import { hapticCommitted, hapticSwitched } from '@/lib/haptics';
import { reportPracticeQuestion } from '@/lib/practice';

/**
 * REPORT A MISTAKE — the reasons, a note if there is more to say, and Send.
 *
 * WHAT IT WAS. A red flag badge, a quote of the question on a ruled-notebook
 * card, reasons as a wrap of pills that broke across two uneven lines, a notes
 * box always open, a line of reassurance, and a Send button that sat on the
 * home indicator with no room under it. Every part of that was either
 * repeating what the screen behind already shows — the student is looking at
 * the question they are reporting — or decoration.
 *
 * WHAT IT IS. A title, five reasons as a list, and one button. The reasons are
 * rows rather than pills so they align on one edge and read top to bottom, and
 * the choice is shown by a soft marigold wash that glides to the row picked,
 * the radio filling as it arrives: the one piece of motion, and it is the one
 * that confirms the tap. The note is one quiet link away, and opens by itself
 * for "Something else", where a reason alone says nothing.
 *
 * IT MOVES LIKE THE TOPICS SHEET: up on a spring, down under the thumb, and
 * away on its own animation whether it was closed, flicked, tapped past or
 * sent — never cut. The route itself does not animate (see `_layout.tsx`),
 * because a navigator-owned slide moved the scrim with the sheet.
 *
 * Reached from snap-solved.tsx and doubt-detail.tsx with a doubtId, and from
 * practice.tsx with a questionId. live-classroom.tsx has its own separate,
 * in-file report drawer for session mistakes, not this screen.
 */

const REASONS = ['Wrong answer', 'Confusing step', 'Audio glitch', 'Wrong language', 'Something else'];
const SOMETHING_ELSE = REASONS.length - 1;

/** Drag distance or flick speed that closes the sheet — the topics sheet's. */
const CLOSE_DISTANCE = 110;
const CLOSE_VELOCITY = 800;
/** How long "Sent" stays on the button before the sheet goes. */
const SENT_HOLD_MS = 650;

const OUT = { duration: 220, easing: Easing.bezier(0.4, 0, 0.9, 0.4) };
const GLIDE = { damping: 22, stiffness: 320, mass: 0.7 };

export default function ReportSheetScreen() {
  const params = useLocalSearchParams<{
    doubtId?: string;
    /** A practice question instead of a doubt — see `reportPracticeQuestion`. */
    questionId?: string;
  }>();
  const practice = !params.doubtId && !!params.questionId;
  const reportable = !!params.doubtId || practice;

  const insets = useSafeAreaInsets();
  const { height: windowHeight } = useWindowDimensions();
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const rowHeight = verticalScale(50);

  const [reason, setReason] = useState(0);
  const [noteOpen, setNoteOpen] = useState(false);
  const noteInput = useRef<TextInput>(null);
  const [note, setNote] = useState('');
  const [phase, setPhase] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [sendError, setSendError] = useState<string | null>(null);

  /* ---- the sheet's own motion ---- */

  /** 0 is open; `travel` is fully off the bottom of the screen. */
  const travel = windowHeight;
  const y = useSharedValue(travel);
  useEffect(() => {
    y.value = withSpring(0, { damping: 22, stiffness: 240, mass: 0.7 });
  }, [y]);

  /** Once only: a close, a flick and a send can all end the sheet, and a
   *  second `router.back()` would take the student off the screen behind. */
  const gone = useRef(false);
  const leave = useCallback(() => {
    if (gone.current) return;
    gone.current = true;
    router.back();
  }, []);
  const dismiss = useCallback(() => {
    Keyboard.dismiss();
    y.value = withTiming(travel, OUT, (done) => {
      if (done) runOnJS(leave)();
    });
  }, [y, travel, leave]);

  const pan = Gesture.Pan()
    .onUpdate((e) => {
      // Downward only; there is nothing above the sheet to reveal.
      y.value = Math.max(0, e.translationY);
    })
    .onEnd((e) => {
      if (e.translationY > CLOSE_DISTANCE || e.velocityY > CLOSE_VELOCITY) {
        y.value = withTiming(travel, OUT, (done) => {
          if (done) runOnJS(leave)();
        });
        return;
      }
      y.value = withSpring(0, { damping: 24, stiffness: 260, mass: 0.7 });
    });

  /** Rides up with the keyboard, less the home-indicator room the keyboard
   *  now covers, so Send keeps the same gap above the keys as above the bar. */
  const keyboard = useAnimatedKeyboard();
  const sheetStyle = useAnimatedStyle(() => ({
    transform: [
      { translateY: y.value - Math.max(0, keyboard.height.value - insets.bottom) },
    ],
  }));
  const scrimStyle = useAnimatedStyle(() => ({
    opacity: interpolate(y.value, [0, travel * 0.6], [1, 0], 'clamp'),
  }));

  /* ---- choosing ---- */

  /** Where the wash is, in rows; springs between them. */
  const selected = useSharedValue(0);
  const choose = (index: number) => {
    if (phase !== 'idle') return;
    if (index !== reason) hapticSwitched();
    setReason(index);
    selected.value = withSpring(index, GLIDE);
    if (index === SOMETHING_ELSE) openNote(false);
  };
  const washStyle = useAnimatedStyle(() => ({
    transform: [{ translateY: selected.value * rowHeight }],
  }));

  /**
   * THE NOTE OPENS IN PLACE. Its slot grows from the link's height to the
   * field's, and the two cross-fade inside it. Growing the slot — rather than
   * animating the sheet's frame — keeps everything under it still: the sheet
   * is pinned to the bottom, so it simply rises, and Send never moves.
   */
  const linkHeight = verticalScale(40);
  const noteHeight = verticalScale(104);
  const noteShown = useSharedValue(0);
  const openNote = (focus: boolean) => {
    if (noteOpen) return;
    setNoteOpen(true);
    noteShown.value = withTiming(1, { duration: 240, easing: Easing.bezier(0.2, 0.8, 0.2, 1) });
    if (focus) setTimeout(() => noteInput.current?.focus(), 120);
  };
  const slotStyle = useAnimatedStyle(() => ({
    height: linkHeight + (noteHeight - linkHeight) * noteShown.value,
  }));
  const linkStyle = useAnimatedStyle(() => ({ opacity: 1 - noteShown.value }));
  const fieldStyle = useAnimatedStyle(() => ({
    opacity: noteShown.value,
    transform: [{ translateY: (1 - noteShown.value) * 8 }],
  }));

  /* ---- sending ---- */

  const send = async () => {
    if (!reportable || phase !== 'idle') return;
    hapticCommitted();
    Keyboard.dismiss();
    setPhase('sending');
    setSendError(null);
    try {
      const comment = [REASONS[reason], note.trim()].filter(Boolean).join(': ');
      if (params.doubtId) await reportDoubt(params.doubtId, comment);
      else await reportPracticeQuestion(params.questionId!, comment);
      setPhase('sent');
      setTimeout(dismiss, SENT_HOLD_MS);
    } catch (err) {
      setPhase('idle');
      // A practice report fails with the server's bare "Not Found" until its
      // endpoint exists, which says nothing to a student.
      setSendError(
        !practice && err instanceof Error && err.message
          ? err.message
          : "Couldn't send that. Try again."
      );
    }
  };

  return (
    <View style={styles.root}>
      <StatusBar style="light" />
      <Animated.View style={[styles.scrim, scrimStyle]}>
        <Pressable style={StyleSheet.absoluteFill} onPress={dismiss} accessibilityLabel="Close" />
      </Animated.View>

      <Animated.View
        style={[styles.sheet, { paddingBottom: insets.bottom + verticalScale(12) }, sheetStyle]}>
        {/* The whole top of the sheet is the drag target, not only the
            grabber: a 38pt bar is something you have to aim at. */}
        <GestureDetector gesture={pan}>
          <View>
            <View style={styles.grabRow}>
              <View style={styles.grabber} />
            </View>
            <View style={styles.head}>
              <View style={styles.headText}>
                <Text style={styles.title}>Report a mistake</Text>
                <Text style={styles.subtitle}>What&apos;s wrong?</Text>
              </View>
              <Pressable
                style={({ pressed }) => [styles.close, pressed && styles.closePressed]}
                onPress={dismiss}
                hitSlop={10}
                accessibilityRole="button"
                accessibilityLabel="Close">
                <CloseIcon size={scale(12)} />
              </Pressable>
            </View>
          </View>
        </GestureDetector>

        <View>
          <View style={styles.list}>
            <Animated.View
              pointerEvents="none"
              style={[styles.wash, { height: rowHeight }, washStyle]}
            />
            {REASONS.map((label, index) => (
              <Pressable
                key={label}
                onPress={() => choose(index)}
                accessibilityRole="radio"
                accessibilityState={{ selected: index === reason }}
                style={({ pressed }) => [
                  styles.row,
                  { height: rowHeight },
                  pressed && index !== reason && styles.rowPressed,
                ]}>
                <Text style={styles.rowText}>{label}</Text>
                <Radio index={index} selected={selected} size={scale(20)} />
              </Pressable>
            ))}
          </View>

          <Animated.View style={[styles.noteSlot, slotStyle]}>
            <Animated.View
              style={[styles.noteLayer, linkStyle]}
              pointerEvents={noteOpen ? 'none' : 'auto'}>
              <Pressable
                onPress={() => openNote(true)}
                hitSlop={8}
                style={({ pressed }) => [styles.addNote, pressed && styles.addNotePressed]}>
                <PlusIcon size={scale(12)} />
                <Text style={styles.addNoteText}>Add a note</Text>
              </Pressable>
            </Animated.View>
            <Animated.View
              style={[styles.noteLayer, fieldStyle]}
              pointerEvents={noteOpen ? 'auto' : 'none'}>
              <TextInput
                ref={noteInput}
                style={styles.note}
                value={note}
                onChangeText={setNote}
                placeholder="Tell us more (optional)"
                placeholderTextColor={colors.faint}
                multiline
                maxLength={500}
              />
            </Animated.View>
          </Animated.View>

          {sendError ? (
            <Animated.Text entering={FadeIn.duration(180)} style={styles.error}>
              {sendError}
            </Animated.Text>
          ) : null}

          <Pressable
            onPress={send}
            disabled={!reportable || phase !== 'idle'}
            accessibilityRole="button"
            style={({ pressed }) => [
              styles.send,
              !reportable && styles.sendOff,
              pressed && styles.sendPressed,
            ]}>
            {phase === 'sending' ? (
              <ActivityIndicator color={colors.paper} size="small" />
            ) : phase === 'sent' ? (
              <Animated.View entering={FadeIn.duration(160)} style={styles.sentRow}>
                <CheckIcon size={scale(15)} />
                <Text style={styles.sendText}>Sent</Text>
              </Animated.View>
            ) : (
              <Text style={styles.sendText}>Send report</Text>
            )}
          </Pressable>
        </View>
      </Animated.View>
    </View>
  );
}

/**
 * The radio fills as the wash ARRIVES, not when the finger lifts: it reads the
 * same spring the wash rides, so the dot grows under the moving highlight
 * instead of jumping ahead of it.
 */
function Radio({
  index,
  selected,
  size,
}: {
  index: number;
  selected: SharedValue<number>;
  size: number;
}) {
  const ring = useAnimatedStyle(() => {
    const on = interpolate(Math.abs(selected.value - index), [0, 0.7], [1, 0], 'clamp');
    return { borderColor: on > 0.5 ? colors.marigold : 'rgba(28,26,22,.2)' };
  });
  const dot = useAnimatedStyle(() => {
    const on = interpolate(Math.abs(selected.value - index), [0, 0.7], [1, 0], 'clamp');
    return { opacity: on, transform: [{ scale: 0.4 + 0.6 * on }] };
  });
  return (
    <Animated.View
      style={[
        {
          width: size,
          height: size,
          borderRadius: size / 2,
          borderWidth: 1.6,
          alignItems: 'center',
          justifyContent: 'center',
        },
        ring,
      ]}>
      <Animated.View
        style={[
          {
            width: size * 0.5,
            height: size * 0.5,
            borderRadius: size / 4,
            backgroundColor: colors.marigold,
          },
          dot,
        ]}
      />
    </Animated.View>
  );
}

function CloseIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 16 16" width={size} height={size} fill="none">
      <Path d="M4 4l8 8M12 4l-8 8" stroke={colors.slate} strokeWidth={1.9} strokeLinecap="round" />
    </Svg>
  );
}

function PlusIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 16 16" width={size} height={size} fill="none">
      <Path d="M8 3v10M3 8h10" stroke={colors.amberText} strokeWidth={2} strokeLinecap="round" />
    </Svg>
  );
}

function CheckIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 16 16" width={size} height={size} fill="none">
      <Path
        d="M3.5 8.5l3 3 6-7"
        stroke={colors.paper}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    root: { flex: 1, justifyContent: 'flex-end' },
    scrim: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(28,26,22,.34)' },
    sheet: {
      backgroundColor: '#fff',
      borderTopLeftRadius: scale(26),
      borderTopRightRadius: scale(26),
      paddingHorizontal: scale(20),
      boxShadow: [
        { offsetX: 0, offsetY: -6, blurRadius: 24, spreadDistance: -8, color: 'rgba(28,26,22,0.24)' },
      ],
    },

    grabRow: { alignItems: 'center', paddingTop: verticalScale(9), paddingBottom: verticalScale(3) },
    grabber: { width: scale(38), height: 4, borderRadius: 99, backgroundColor: 'rgba(28,26,22,.16)' },

    head: {
      flexDirection: 'row',
      alignItems: 'center',
      paddingTop: verticalScale(8),
      paddingBottom: verticalScale(14),
    },
    headText: { flex: 1 },
    title: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(19),
      letterSpacing: scale(-0.3),
      color: colors.ink,
    },
    subtitle: {
      marginTop: verticalScale(2),
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      color: colors.faint,
    },
    close: {
      width: scale(32),
      height: scale(32),
      borderRadius: scale(16),
      borderWidth: 1,
      borderColor: colors.hairline,
      alignItems: 'center',
      justifyContent: 'center',
    },
    closePressed: { backgroundColor: 'rgba(28,26,22,.04)' },

    /** The rows hang off one left edge, and the wash behind them is inset to
     *  the same radius as the sheet's other rounded rows. */
    list: { position: 'relative' },
    wash: {
      position: 'absolute',
      left: 0,
      right: 0,
      top: 0,
      borderRadius: scale(14),
      backgroundColor: colors.tint,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: scale(16),
      borderRadius: scale(14),
    },
    rowPressed: { backgroundColor: 'rgba(28,26,22,.035)' },
    rowText: {
      fontFamily: 'Onest_500Medium',
      fontSize: scale(15.5),
      color: colors.ink,
    },

    /** Clips while it grows, so the field fades in rather than spilling. */
    noteSlot: { overflow: 'hidden' },
    noteLayer: { position: 'absolute', top: 0, left: 0, right: 0 },
    addNote: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'flex-start',
      gap: scale(7),
      marginTop: verticalScale(10),
      marginLeft: scale(16),
      paddingVertical: verticalScale(6),
    },
    addNotePressed: { opacity: 0.6 },
    addNoteText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(14),
      color: colors.amberText,
    },
    /** A fixed height, so its slot has one size to grow to; a long note
     *  scrolls inside it. */
    note: {
      marginTop: verticalScale(12),
      height: verticalScale(92),
      paddingTop: verticalScale(12),
      paddingBottom: verticalScale(12),
      paddingHorizontal: scale(16),
      borderRadius: scale(14),
      borderWidth: 1,
      borderColor: colors.inputBorder,
      fontFamily: 'Onest_400Regular',
      fontSize: scale(15),
      lineHeight: scale(21),
      color: colors.ink,
      textAlignVertical: 'top',
    },

    error: {
      marginTop: verticalScale(12),
      textAlign: 'center',
      fontFamily: 'Onest_500Medium',
      fontSize: scale(13),
      color: colors.red,
    },

    /** Topic sheet's Start learning, so the two primary keys in the app's
     *  sheets are the same key. */
    send: {
      marginTop: verticalScale(20),
      height: verticalScale(52),
      borderRadius: scale(99),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: colors.ink,
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(6) },
      shadowOpacity: 0.3,
      shadowRadius: scale(10),
      elevation: 6,
    },
    sendPressed: { transform: [{ scale: 0.985 }], opacity: 0.92 },
    sendOff: { opacity: 0.4 },
    sendText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(15),
      color: colors.paper,
    },
    sentRow: { flexDirection: 'row', alignItems: 'center', gap: scale(7) },
  });
}
