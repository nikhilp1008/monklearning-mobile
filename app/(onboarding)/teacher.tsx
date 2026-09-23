import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ObButton } from '@/components/onboarding-kit';
import { PressableScale } from '@/components/pressable-scale';
import { SWITCH_EASING, TeacherOrb } from '@/components/teacher-orb';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { TEACHERS } from '@/constants/teachers';
import { hapticSwitched } from '@/lib/haptics';
import { pushPersona } from '@/lib/persona-sync';
import {
  setLanguagePreference,
  setTeacherPreference,
  type LanguageId,
  type TeacherId,
} from '@/lib/preferences';

/**
 * "Select your teacher" — the first screen after the pass is paid for.
 *
 * The app has always had two teachers and has never once asked. A new student
 * was given Drona silently, and the only way to discover the choice was to
 * wander into Profile weeks later. This asks, at the one moment a student is
 * certain to be paying attention: they have just bought eleven months of
 * being taught by whichever one this screen picks.
 *
 * WHAT IT WRITES. Exactly what Profile writes when the same two controls are
 * used there — `setTeacherPreference`, `setLanguagePreference` and one
 * `pushPersona` — so a teacher chosen here and a teacher chosen later are the
 * same act. Nothing is written on arrival: a student who taps Continue
 * without touching anything keeps the defaults they can see on screen.
 *
 * THE VOICES ARE SILENT, FOR NOW. Tapping a teacher is meant to play a line
 * in their voice, and `playSample` is where that goes the moment the
 * recordings exist. Until then it does nothing, the speaker starts OFF, and
 * nothing on screen claims otherwise.
 */

const LANGUAGES: { id: LanguageId; label: string; speech: string }[] = [
  { id: 'english', label: 'English', speech: 'Everything in English, start to finish.' },
  { id: 'hinglish', label: 'Hinglish', speech: 'Explains in Hindi, keeps the terms in English.' },
];

type S = (n: number) => number;

/** The voice sample. Silent until there are recordings to play. */
function playSample(_teacher: TeacherId) {}

/** Speaker, and speaker with a slash: one control, two states. */
function SpeakerGlyph({ size, color, muted }: { size: number; color: string; muted: boolean }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M4 9.5h3.2L12 5.6v12.8L7.2 14.5H4z"
        stroke={color}
        strokeWidth={1.7}
        strokeLinejoin="round"
      />
      {muted ? (
        <Path d="M16 9.5l4.5 5M20.5 9.5l-4.5 5" stroke={color} strokeWidth={1.7} strokeLinecap="round" />
      ) : (
        <Path
          d="M15.6 9a4.2 4.2 0 0 1 0 6M18 6.6a7.6 7.6 0 0 1 0 10.8"
          stroke={color}
          strokeWidth={1.7}
          strokeLinecap="round"
        />
      )}
    </Svg>
  );
}

/** Profile's own language switch, transcribed so the two screens match. */
function LanguageToggle({
  value,
  onChange,
  s,
  scale,
}: {
  value: LanguageId;
  onChange: (id: LanguageId) => void;
  s: ReturnType<typeof useStyles>;
  scale: S;
}) {
  const index = Math.max(0, LANGUAGES.findIndex((o) => o.id === value));
  const [width, setWidth] = useState(0);
  const pos = useSharedValue(index);
  useEffect(() => {
    pos.value = withTiming(index, { duration: 380, easing: SWITCH_EASING });
  }, [index, pos]);
  const half = width > 0 ? (width - 6) / 2 : 0;
  const slide = useAnimatedStyle(() => ({ transform: [{ translateX: pos.value * half }] }));
  return (
    <View style={s.toggle} onLayout={(e) => setWidth(e.nativeEvent.layout.width)}>
      {half > 0 && (
        <Animated.View style={[s.knob, { width: half }, slide]}>
          <LinearGradient
            colors={['#F7D779', '#EEA31F']}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 1 }}
            style={[StyleSheet.absoluteFill, s.knobFill]}
          />
        </Animated.View>
      )}
      {LANGUAGES.map((o) => {
        const on = o.id === value;
        return (
          <Pressable
            key={o.id}
            style={s.toggleHalf}
            onPress={() => {
              if (!on) hapticSwitched();
              onChange(o.id);
            }}>
            <Text style={[s.toggleLabel, on && s.toggleLabelOn]}>{o.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

/* ---------------------------------------------------- 1 and 2: the teacher */

export default function TeacherScreen() {
  const { scale, verticalScale } = useScale();
  const s = useStyles(scale, verticalScale);
  /**
   * Drona is already chosen, and the voices start off.
   *
   * The app has always defaulted to Drona; this screen makes that visible and
   * offers the swap, rather than opening on two blank cards and asking a
   * student to commit before they know the difference. Off, because this may
   * be opened in a classroom or on a bus — turning sound ON is a choice a
   * student makes, not one we make for them at full volume.
   */
  const [teacher, setTeacher] = useState<TeacherId>('drona');
  const [language, setLanguage] = useState<LanguageId>('hinglish');
  const [muted, setMuted] = useState(true);

  /**
   * Choosing IS the sample.
   *
   * A "Hear Drona" pill beside every card asked a student to press one thing
   * to listen and another to choose, which is two decisions for one question.
   * A tap picks the teacher and plays a line in their voice; the speaker below
   * turns that off for anyone who cannot listen right now. Silent until the
   * recordings exist — see the note at the top of this file.
   */
  const pick = (id: TeacherId) => {
    if (id !== teacher) hapticSwitched();
    setTeacher(id);
    if (!muted) playSample(id);
  };

  /** Written on the way out, not on every tap: three taps between Drona and
   *  Vedha should not be three writes and three server round trips. */
  const goOn = () => {
    setTeacherPreference(teacher);
    setLanguagePreference(language);
    void pushPersona({ teacher, language });
    router.push('/inside');
  };

  return (
    <View style={s.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={s.safe} edges={['top', 'bottom']}>
        <View style={s.body}>
          <Text style={s.title}>Select your teacher</Text>
          <Text style={s.sub}>You can switch any time, even mid-class.</Text>

          <View style={s.pair}>
            {TEACHERS.map((t) => {
              const on = t.id === teacher;
              return (
                <PressableScale
                  key={t.id}
                  style={[s.card, on && s.cardOn]}
                  onPress={() => pick(t.id)}>
                  <TeacherOrb teacher={t.id} dimmed={!on} size={scale(78)} />
                  <Text style={[s.cardName, !on && s.cardNameIdle]}>{t.name}</Text>
                  <Text style={s.cardTrait}>{t.trait}</Text>
                </PressableScale>
              );
            })}
          </View>

          <Pressable
            style={s.muteRow}
            hitSlop={10}
            onPress={() => {
              hapticSwitched();
              setMuted((m) => !m);
            }}>
            <SpeakerGlyph size={scale(17)} color={muted ? colors.faint : colors.slate} muted={muted} />
            <Text style={[s.muteText, muted && s.muteTextOff]}>
              {muted ? 'Voices off' : 'Voices on'}
            </Text>
          </Pressable>

          <View style={s.langBlock}>
            <Text style={s.langHead}>Speaks</Text>
            <LanguageToggle value={language} onChange={setLanguage} s={s} scale={scale} />
            <Text style={s.langSpeech}>
              {LANGUAGES.find((l) => l.id === language)!.speech}
            </Text>
          </View>
        </View>

        <View style={s.footer}>
          <ObButton label="Continue" withArrow onPress={goOn} />
        </View>
      </SafeAreaView>
    </View>
  );
}


function useStyles(scale: S, verticalScale: S) {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: colors.paper },
    safe: { flex: 1 },
    body: { flex: 1, paddingHorizontal: scale(26), paddingTop: verticalScale(26) },
    title: {
      marginTop: verticalScale(10),
      fontFamily: 'Onest_700Bold',
      fontSize: scale(25),
      lineHeight: scale(31),
      letterSpacing: scale(-0.6),
      color: colors.ink,
    },
    sub: {
      marginTop: verticalScale(8),
      fontFamily: 'Onest_400Regular',
      fontSize: scale(14),
      lineHeight: scale(20),
      color: colors.slate,
    },
    footer: { paddingHorizontal: scale(26), paddingBottom: verticalScale(14) },
    // 1 — the two teachers
    pair: { flexDirection: 'row', gap: scale(12), marginTop: verticalScale(26) },
    card: {
      flex: 1,
      alignItems: 'center',
      paddingVertical: verticalScale(22),
      paddingHorizontal: scale(10),
      borderRadius: scale(22),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.12)',
      backgroundColor: colors.paper,
    },
    cardOn: {
      borderWidth: 1.5,
      borderColor: colors.ink,
      boxShadow: [
        { offsetX: 0, offsetY: scale(8), blurRadius: scale(20), color: 'rgba(28,26,22,.08)' },
      ],
    },
    cardName: {
      marginTop: verticalScale(14),
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(17),
      color: colors.ink,
    },
    cardNameIdle: { color: colors.slate },
    cardTrait: {
      marginTop: verticalScale(4),
      fontFamily: 'Onest_400Regular',
      fontSize: scale(11.5),
      lineHeight: scale(16),
      color: colors.faint,
      textAlign: 'center',
    },

    /** The one control that is not a choice: whether the voices play at all. */
    muteRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: scale(7),
      marginTop: verticalScale(16),
      paddingVertical: verticalScale(6),
    },
    muteText: { fontFamily: 'Onest_500Medium', fontSize: scale(13), color: colors.slate },
    muteTextOff: { color: colors.faint },

    // language — Profile's switch, transcribed
    langBlock: { marginTop: verticalScale(28) },
    langHead: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(10.5),
      letterSpacing: scale(1.2),
      color: colors.faint,
    },
    toggle: {
      marginTop: verticalScale(12),
      height: verticalScale(46),
      borderRadius: 99,
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.16)',
      flexDirection: 'row',
    },
    knob: {
      position: 'absolute',
      top: 3,
      bottom: 3,
      left: 3,
      borderRadius: 99,
      shadowColor: colors.marigold,
      shadowOpacity: 0.45,
      shadowOffset: { width: 0, height: verticalScale(4) },
      shadowRadius: scale(8),
      elevation: 4,
    },
    knobFill: { borderRadius: 99 },
    toggleHalf: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    toggleLabel: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(15),
      lineHeight: scale(22),
      color: colors.slate,
    },
    toggleLabelOn: { fontFamily: 'Onest_700Bold', color: colors.ink },
    langSpeech: {
      marginTop: verticalScale(12),
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(18),
      color: colors.slate,
    },

  });
}
