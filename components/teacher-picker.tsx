import { useClock } from '@shopify/react-native-skia';
import { useFocusEffect } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Animated, LayoutChangeEvent, Pressable, StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { runOnJS, useSharedValue } from 'react-native-reanimated';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { ObButton } from '@/components/onboarding-kit';
import { PressableScale } from '@/components/pressable-scale';
import {
  MAX_RIPPLES,
  RIPPLE_THROTTLE,
  SWIPE_THRESHOLD,
  TeacherField,
  type Ripple,
} from '@/components/teacher-field';
import { colors } from '@/constants/brand';
import { TEACHERS, titleCaseTrait } from '@/constants/teachers';
import { useScale } from '@/constants/scale';
import { hapticSwitched } from '@/lib/haptics';
import { getLanguagePreference, type LanguageId, type TeacherId } from '@/lib/preferences';
import {
  playTeacherVoice,
  prepareTeacherVoices,
  releaseTeacherVoices,
  stopTeacherVoice,
} from '@/lib/teacher-voice';

/**
 * SELECT TEACHER — "11a" in the handoff — as a component, because it is shown
 * in two places: opened from Home's header (app/select-teacher.tsx), and as
 * the teacher step of onboarding (app/(onboarding)/teacher.tsx). One page in
 * both, so the teacher a new student meets in sign-up is the same object they
 * meet again on Home, not an older drawing of it.
 *
 * The two differ only at the edges, by `variant`:
 *   home        — a close button, and "Select Teacher".
 *   onboarding  — no close (there is nowhere to go back to after paying), a
 *                 title in its place, "Continue with …" and the language line.
 * Both use square chips and onboarding's own button, so the page is one shape
 * wherever it is opened.
 *
 * What follows is the page's original note.
 *
 * The one place a student chooses who teaches them. It used to be a row in
 * Profile, which meant the choice existed and nothing ever said so; now the
 * header on Home names the teacher and this is what it opens.
 *
 * THE SCREEN IS THE TEACHER. There is no photograph and no illustration —
 * each teacher is a field of moving light in their own colours with a sphere
 * turning in it, and the whole screen changes when you switch. That is the
 * argument the design is making: the difference between Drona and Vedha is a
 * temperature, not a face, and a student picking between two stock portraits
 * would be picking nothing. See components/teacher-field.tsx for the shader.
 *
 * WHAT COMMITS AND WHAT DOES NOT. Switching changes only what is on screen.
 * The choice is written when "Select Teacher" is pressed — to this device and
 * to the server, the same two calls Profile used to make, so a teacher chosen
 * here is the same act as a teacher chosen anywhere else. The X leaves without
 * writing anything.
 *
 * NO BLUR ON THE GLASS, deliberately. The design frosts the close button and
 * the two chips over the field. A backdrop blur has no React Native
 * equivalent, and the trick the home header uses — blurring a second copy of a
 * still — cannot work against a field that moves. It does not matter here:
 * blur removes high-frequency detail, and there is none to remove. The chips
 * sit in the bottom third where the shader has already darkened the field to
 * near-flat night, and the field itself is six soft lights with no edges in
 * it. A Gaussian over that returns almost exactly what it was given, so the
 * tint alone carries the whole visible effect, on both platforms, for nothing.
 */

/**
 * The weight of the ripple a switch throws, against 1 for a finger.
 *
 * Choosing a name is not a touch on the glass and the design does not treat it
 * like one: it fires a heavier wave from the middle of the screen, so the
 * light visibly reacts to the choice rather than merely fading to the other
 * palette. It is the whole reason switching feels like an event.
 */
const SWITCH_RIPPLE = 1.2;

/** Which teacher a mix of 0 and 1 means, in the order the dots are drawn. */
const ORDER: TeacherId[] = ['drona', 'vedha'];

const LANGUAGE_NAME: Record<LanguageId, string> = { english: 'English', hinglish: 'Hinglish' };

export function TeacherPicker({
  initial,
  variant,
  onChoose,
  onClose,
}: {
  initial: TeacherId;
  variant: 'home' | 'onboarding';
  /** The teacher on screen when the button was pressed. The caller saves it
   *  and moves on; the field has already been stopped. */
  onChoose: (teacher: TeacherId) => void;
  /** Home only: leave without choosing. */
  onClose?: () => void;
}) {
  const insets = useSafeAreaInsets();
  const { scale } = useScale();
  const styles = useMemo(() => createStyles(scale), [scale]);
  const onboarding = variant === 'onboarding';
  const opened = initial;

  /** The language the first class will be in, named under the button in
   *  onboarding so the default is visible rather than discovered. */
  const [language, setLanguage] = useState<LanguageId | null>(null);
  useEffect(() => {
    if (!onboarding) return;
    let live = true;
    getLanguagePreference().then((l) => {
      if (live) setLanguage(l);
    });
    return () => {
      live = false;
    };
  }, [onboarding]);

  /** The language the voice plays in: always English in onboarding, the
   *  student's own choice on the page opened from Home. See lib/teacher-voice.ts. */
  const voiceLanguage = useRef<LanguageId>('english');
  /** On the page: both voices loaded and ready, so a switch plays at once.
   *  Off it, however it is left: released, and the audio handed back. */
  useFocusEffect(
    useCallback(() => {
      let live = true;
      const language: Promise<LanguageId> = onboarding
        ? Promise.resolve('english')
        : getLanguagePreference();
      language.then((l) => {
        if (!live) return;
        voiceLanguage.current = l;
        prepareTeacherVoices(l);
      });
      return () => {
        live = false;
        releaseTeacherVoices();
      };
    }, [onboarding])
  );
  useEffect(() => () => releaseTeacherVoices(), []);

  /** What the controls say. Changes the instant a chip is tapped. */
  const [view, setView] = useState<TeacherId>(opened);
  /** What the words say. Trails `view` by one half of the cross-fade. */
  const [shown, setShown] = useState<TeacherId>(opened);
  /** False while leaving, which unmounts the shader. */
  const [running, setRunning] = useState(true);
  /** Back on screen — a swipe back from the next onboarding step — the field
   *  that was stopped on the way out starts again. */
  useFocusEffect(
    useCallback(() => {
      setRunning(true);
    }, [])
  );

  const [page, setPage] = useState({ width: 0, height: 0 });
  const [stage, setStage] = useState({ x: 0, y: 0, width: 0, height: 0 });

  const clock = useClock();
  const ripples = useSharedValue<Ripple[]>([]);
  const target = useSharedValue(opened === 'vedha' ? 1 : 0);
  const lastDrag = useSharedValue(0);
  const fade = useRef(new Animated.Value(1)).current;

  const teacher = TEACHERS.find((t) => t.id === shown) ?? TEACHERS[0];

  /**
   * The orb: a circle in the middle of the empty area above the name, sized to
   * whichever of the two axes runs out first, so it stays a sphere on a short
   * phone instead of being cropped by the text below it.
   */
  const orb = useMemo(
    () => ({
      x: stage.x + stage.width / 2,
      y: stage.y + stage.height / 2,
      r: Math.min(stage.width * 0.3, stage.height * 0.4),
    }),
    [stage]
  );

  const switchTo = (next: TeacherId) => {
    if (next === view) return;
    hapticSwitched();
    playTeacherVoice(next, onboarding ? 'english' : voiceLanguage.current);
    setView(next);
    // The field starts blending straight away; the words wait, so they are
    // never caught half-changed over a colour that has already moved on.
    target.value = next === 'vedha' ? 1 : 0;
    pulse(page.width / 2, page.height / 2, SWITCH_RIPPLE);
    Animated.timing(fade, { toValue: 0, duration: 200, useNativeDriver: true }).start(() => {
      setShown(next);
      Animated.timing(fade, { toValue: 1, duration: 200, useNativeDriver: true }).start();
    });
  };

  const leave = () => {
    stopTeacherVoice();
    setRunning(false);
    onClose?.();
  };

  const choose = () => {
    stopTeacherVoice();
    setRunning(false);
    onChoose(view);
  };

  const viewName = TEACHERS.find((t) => t.id === view)?.name ?? '';

  /**
   * Adds a wave. Written so it is safe from either thread: a touch arrives on
   * the UI thread inside a gesture worklet, a switch arrives on the JavaScript
   * thread from a button press, and both end up writing the same shared value.
   */
  const pulse = (x: number, y: number, w: number) => {
    'worklet';
    const kept = ripples.value.slice(-(MAX_RIPPLES - 1));
    kept.push({ x, y, t0: clock.value, w });
    ripples.value = kept;
  };

  const touch = useMemo(
    () =>
      Gesture.Pan()
        .minDistance(0)
        .onBegin((e) => {
          'worklet';
          pulse(e.x, e.y, 1);
        })
        .onUpdate((e) => {
          'worklet';
          if (clock.value - lastDrag.value < RIPPLE_THROTTLE) return;
          lastDrag.value = clock.value;
          pulse(e.x, e.y, 0.55);
        })
        .onEnd((e) => {
          'worklet';
          if (Math.abs(e.translationX) > SWIPE_THRESHOLD) {
            runOnJS(switchTo)(e.translationX < 0 ? 'vedha' : 'drona');
          }
        }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [view]
  );

  return (
    <View
      style={styles.page}
      onLayout={(e: LayoutChangeEvent) =>
        setPage({ width: e.nativeEvent.layout.width, height: e.nativeEvent.layout.height })
      }>
      <StatusBar style="light" animated />

      <GestureDetector gesture={touch}>
        <View style={StyleSheet.absoluteFill}>
          {/* NO SEPARATE GRAIN LAYER. The design lays a noise tile over the
              canvas at 18%, and ours did too — on top of the dither the shader
              already finishes every pixel with. Two grains over one smooth
              field is what made this screen read as textured rather than lit,
              and the coarser of the two was sitting still while the light
              moved under it, which is what hid the motion. The shader's own
              dither is the film grain; it is now at the frequency it was
              written for (see components/teacher-field.tsx). */}
          <TeacherField
            width={page.width}
            height={page.height}
            orb={orb}
            target={target}
            ripples={ripples}
            clock={clock}
            running={running}
          />
        </View>
      </GestureDetector>

      {onboarding ? (
        <View style={[styles.obBar, { marginTop: insets.top }]} pointerEvents="none">
          <View style={styles.obHeading}>
            <Text style={styles.obTitle}>Choose your teacher</Text>
            <Text style={styles.obSub}>You can switch any time, even mid-class.</Text>
          </View>
          <View style={[styles.dots, styles.obDots]}>
            {ORDER.map((id) => (
              <View key={id} style={[styles.dot, id === view && styles.dotOn]} />
            ))}
          </View>
        </View>
      ) : (
        <View style={[styles.topBar, { marginTop: insets.top }]} pointerEvents="box-none">
          <PressableScale style={styles.close} accessibilityLabel="Close" onPress={leave}>
            <Svg viewBox="0 0 24 24" width={scale(16)} height={scale(16)} fill="none">
              <Path
                d="M6 6l12 12M18 6L6 18"
                stroke={colors.paper}
                strokeWidth={2.2}
                strokeLinecap="round"
              />
            </Svg>
          </PressableScale>
          <View style={styles.dots}>
            {ORDER.map((id) => (
              <View key={id} style={[styles.dot, id === view && styles.dotOn]} />
            ))}
          </View>
          {/* Balances the close button so the dots sit on the screen's centre. */}
          <View style={styles.topBarSpacer} />
        </View>
      )}

      <View
        style={styles.stage}
        pointerEvents="none"
        onLayout={(e: LayoutChangeEvent) => setStage(e.nativeEvent.layout)}
      />

      <Animated.View style={[styles.info, { opacity: fade }]} pointerEvents="none">
        <Text style={styles.name}>{teacher.name}</Text>
        <Text style={styles.traits}>{titleCaseTrait(teacher.trait)}</Text>
        <Text style={styles.desc}>{teacher.line}</Text>
      </Animated.View>

      <View
        style={[
          styles.controls,
          { paddingBottom: onboarding ? Math.max(insets.bottom, scale(24)) : Math.max(insets.bottom, scale(40)) },
        ]}>
        <View style={styles.chips}>
          {TEACHERS.map((t) => {
            const on = t.id === view;
            return (
              <Pressable
                key={t.id}
                accessibilityRole="button"
                accessibilityState={{ selected: on }}
                style={[styles.chip, on ? styles.chipOn : styles.chipOff]}
                onPress={() => switchTo(t.id)}>
                <Text style={styles.chipLabel}>{t.name}</Text>
              </Pressable>
            );
          })}
        </View>
        {onboarding ? (
          <View style={styles.obFoot}>
            <ObButton label={`Continue with ${viewName}`} variant="cream" withArrow onPress={choose} />
            {language ? (
              <Text style={styles.obNote}>
                Explains in {LANGUAGE_NAME[language]}. Change it in Profile any time.
              </Text>
            ) : null}
          </View>
        ) : (
          <ObButton label="Select Teacher" variant="cream" onPress={choose} />
        )}
      </View>
    </View>
  );
}

function createStyles(scale: (n: number) => number) {
  return StyleSheet.create({
    page: { flex: 1, backgroundColor: colors.nightDeep },

    topBar: {
      paddingTop: scale(6),
      paddingHorizontal: scale(20),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    close: {
      width: scale(44),
      height: scale(44),
      borderRadius: scale(22),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(26,24,20,.45)',
      boxShadow: [
        { offsetX: 0, offsetY: 0, blurRadius: 0, spreadDistance: 1, color: 'rgba(255,253,248,.16)', inset: true },
      ],
    },
    topBarSpacer: { width: scale(44) },
    /** Onboarding's head: what this step asks, where Home has a close button. */
    obBar: {
      paddingTop: scale(14),
      paddingHorizontal: scale(24),
      flexDirection: 'row',
      alignItems: 'flex-start',
      gap: scale(16),
    },
    obHeading: { flex: 1, gap: scale(4) },
    obTitle: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(22),
      lineHeight: scale(27),
      letterSpacing: scale(22 * -0.03),
      color: colors.paper,
    },
    obSub: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(14),
      lineHeight: scale(20),
      color: 'rgba(255,253,248,.72)',
    },
    obDots: { paddingTop: scale(11) },
    dots: { flexDirection: 'row', alignItems: 'center', gap: scale(6) },
    dot: {
      width: scale(6),
      height: scale(6),
      borderRadius: scale(3),
      backgroundColor: 'rgba(255,253,248,.35)',
    },
    dotOn: { width: scale(18), backgroundColor: colors.paleGold },

    stage: { flex: 1, minHeight: 0 },

    info: {
      alignItems: 'center',
      gap: scale(8),
      paddingHorizontal: scale(32),
    },
    name: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(34),
      lineHeight: scale(34 * 1.05),
      letterSpacing: scale(34 * -0.04),
      color: colors.paper,
    },
    traits: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(14),
      color: colors.paleGold,
    },
    desc: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(15),
      lineHeight: scale(15 * 1.5),
      color: 'rgba(255,253,248,.8)',
      textAlign: 'center',
      maxWidth: scale(310),
    },

    controls: {
      alignItems: 'center',
      gap: scale(18),
      paddingTop: scale(22),
      paddingHorizontal: scale(20),
    },
    chips: { flexDirection: 'row', gap: scale(10) },
    chip: {
      height: scale(44),
      paddingHorizontal: scale(22),
      // Square, not a pill: the corners of the onboarding buttons scaled to a
      // 44pt chip, so the chips and the button under them are one family.
      borderRadius: scale(14),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(26,24,20,.5)',
    },
    chipOn: {
      opacity: 1,
      boxShadow: [
        { offsetX: 0, offsetY: 0, blurRadius: 0, spreadDistance: 1.5, color: colors.paleGold, inset: true },
      ],
    },
    chipOff: {
      opacity: 0.72,
      boxShadow: [
        { offsetX: 0, offsetY: 0, blurRadius: 0, spreadDistance: 1, color: 'rgba(255,253,248,.16)', inset: true },
      ],
    },
    chipLabel: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(14),
      color: colors.paper,
    },

    /*
     * THE BUTTON IS ONBOARDING'S, in both places: cream, 60 tall, 18 corners,
     * with its raised edge. Paper rather than the design's marigold is still
     * the brand decision it was — the primary button is the maximum contrast
     * against its ground, and marigold here put three golds in the bottom
     * third (the chosen chip's ring, the traits line, the button) with
     * nothing to say which one was the action.
     */
    obFoot: { alignSelf: 'stretch', gap: scale(12), alignItems: 'center' },
    obNote: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(18),
      color: 'rgba(255,253,248,.55)',
      textAlign: 'center',
    },
  });
}
