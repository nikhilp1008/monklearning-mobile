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
  interpolateColor,
  runOnJS,
  useAnimatedKeyboard,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { reportDoubt } from '@/lib/doubts';
import { hapticCommitted, hapticSwitched } from '@/lib/haptics';
import { reportPracticeQuestion } from '@/lib/practice';

/**
 * REPORT A MISTAKE — the reasons, a note, and Send. Nothing else.
 *
 * The sheet used to quote the question on a ruled-notebook card, label the
 * reasons "WHAT'S WRONG?" under a title that already said it, add a line of
 * reassurance, and leave Send sitting on the home indicator. The student is
 * looking at the question on the screen behind, so all of that is gone; what
 * stays is the red flag, the reasons as pills, the note box and Send, with
 * room around each.
 *
 * MORE THAN ONE REASON. A wrong answer is often a confusing step too, and
 * making a student pick one throws half the report away. The pills toggle,
 * and the report carries every one that is on.
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

/** Drag distance or flick speed that closes the sheet — the topics sheet's. */
const CLOSE_DISTANCE = 110;
const CLOSE_VELOCITY = 800;
/** How long "Sent" stays on the button before the sheet goes. */
const SENT_HOLD_MS = 650;

const OUT = { duration: 220, easing: Easing.bezier(0.4, 0, 0.9, 0.4) };

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

  const [picked, setPicked] = useState<string[]>([]);
  const [note, setNote] = useState('');
  const [phase, setPhase] = useState<'idle' | 'sending' | 'sent'>('idle');
  const [sendError, setSendError] = useState<string | null>(null);

  /** Something to send: a reason, or a note that says it in words. */
  const canSend = reportable && phase === 'idle' && (picked.length > 0 || !!note.trim());

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

  /* ---- choosing and sending ---- */

  const toggle = (reason: string) => {
    if (phase !== 'idle') return;
    hapticSwitched();
    setPicked((now) => (now.includes(reason) ? now.filter((r) => r !== reason) : [...now, reason]));
  };

  const send = async () => {
    if (!canSend) return;
    hapticCommitted();
    Keyboard.dismiss();
    setPhase('sending');
    setSendError(null);
    try {
      // In the order the list shows them, whatever order they were tapped.
      const reasons = REASONS.filter((r) => picked.includes(r)).join(', ');
      const comment = [reasons, note.trim()].filter(Boolean).join(': ');
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
              <View style={styles.flagChip}>
                <FlagIcon size={scale(14)} color="#C53A2B" />
              </View>
              <Text style={styles.title}>Report a mistake</Text>
              <Pressable
                style={({ pressed }) => [styles.close, pressed && styles.closePressed]}
                onPress={dismiss}
                hitSlop={10}
                accessibilityRole="button"
                accessibilityLabel="Close">
                <CloseIcon size={scale(11)} />
              </Pressable>
            </View>
          </View>
        </GestureDetector>

        <View style={styles.chips}>
          {REASONS.map((reason) => (
            <ReasonChip
              key={reason}
              label={reason}
              on={picked.includes(reason)}
              onPress={() => toggle(reason)}
              styles={styles}
            />
          ))}
        </View>

        <TextInput
          style={styles.note}
          value={note}
          onChangeText={setNote}
          placeholder="Anything else we should know? (optional)"
          placeholderTextColor={colors.faint}
          multiline
          maxLength={500}
        />

        {sendError ? (
          <Animated.Text entering={FadeIn.duration(180)} style={styles.error}>
            {sendError}
          </Animated.Text>
        ) : null}

        <Pressable
          onPress={send}
          disabled={!canSend}
          accessibilityRole="button"
          style={({ pressed }) => [
            styles.send,
            !canSend && phase === 'idle' && styles.sendOff,
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
      </Animated.View>
    </View>
  );
}

/**
 * A reason pill. Black when on, as it always was — but it fades there rather
 * than snapping, and gives a little under the finger. The label keeps one
 * weight in both states: a pill that turned bold when picked grew wider and
 * shoved every pill after it along the row.
 */
function ReasonChip({
  label,
  on,
  onPress,
  styles,
}: {
  label: string;
  on: boolean;
  onPress: () => void;
  styles: ReturnType<typeof createStyles>;
}) {
  const lit = useSharedValue(on ? 1 : 0);
  const press = useSharedValue(1);
  useEffect(() => {
    lit.value = withTiming(on ? 1 : 0, { duration: 180, easing: Easing.out(Easing.quad) });
  }, [on, lit]);

  const chipStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(lit.value, [0, 1], ['#FFFFFF', colors.ink]),
    borderColor: interpolateColor(lit.value, [0, 1], [colors.inputBorder, colors.ink]),
    transform: [{ scale: press.value }],
  }));
  const textStyle = useAnimatedStyle(() => ({
    color: interpolateColor(lit.value, [0, 1], [colors.slate, colors.paper]),
  }));

  return (
    <Pressable
      onPress={onPress}
      onPressIn={() => {
        press.value = withTiming(0.95, { duration: 90 });
      }}
      onPressOut={() => {
        press.value = withSpring(1, { damping: 14, stiffness: 320 });
      }}
      accessibilityRole="checkbox"
      accessibilityState={{ checked: on }}>
      <Animated.View style={[styles.chip, chipStyle]}>
        <Animated.Text style={[styles.chipText, textStyle]}>{label}</Animated.Text>
      </Animated.View>
    </Pressable>
  );
}

function FlagIcon({ size, color }: { size: number; color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path d="M5 21V4" stroke={color} strokeWidth={1.9} strokeLinecap="round" />
      <Path
        d="M5 4c4.2-2 8.8 2 14 0v10c-5.2 2-9.8-2-14 0"
        stroke={color}
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function CloseIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 16 16" width={size} height={size} fill="none">
      <Path d="M4 4l8 8M12 4l-8 8" stroke={colors.slate} strokeWidth={1.9} strokeLinecap="round" />
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
      gap: scale(10),
      paddingTop: verticalScale(10),
      paddingBottom: verticalScale(18),
    },
    /** The red flag, on its own faint wash — the one mark that says report. */
    flagChip: {
      width: scale(32),
      height: scale(32),
      flexShrink: 0,
      borderRadius: scale(10),
      backgroundColor: 'rgba(221,68,51,.07)',
      borderWidth: 1,
      borderColor: 'rgba(221,68,51,.25)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      flex: 1,
      fontFamily: 'Onest_700Bold',
      fontSize: scale(18),
      color: colors.ink,
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

    chips: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: scale(8),
    },
    chip: {
      paddingVertical: verticalScale(10),
      paddingHorizontal: scale(16),
      borderRadius: scale(99),
      borderWidth: 1,
    },
    chipText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(14),
    },

    note: {
      marginTop: verticalScale(16),
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
    sendOff: { opacity: 0.35, shadowOpacity: 0 },
    sendText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(15),
      color: colors.paper,
    },
    sentRow: { flexDirection: 'row', alignItems: 'center', gap: scale(7) },
  });
}
