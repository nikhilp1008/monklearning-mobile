// Profile: one card for who the student is and how their teacher speaks, with
// Manage plan under it, then the settings list.
//
// THE CARD (2026-10-16, version B of the Profile board). It replaced a card
// whose three stacked gradients (a cream body, a wash from above, a lamp from
// below) matched nothing else in the app and read as decoration. Now:
//
// - A band of the teacher's sky across the top, the same shader as Home's
//   header (components/night-sky.tsx) in that teacher's light: Drona's ember,
//   Vedha's marigold. It carries the student's name.
//   This is the only colour on the card, so the character lives in one place.
// - Everything to read sits on white below it, in the app's list style: exam,
//   class, the exam's three subjects in one row, and the language the teacher
//   speaks (that switch lived outside the card before, as its own section).
// - No orb and no teacher line under the name: the band's light, and the
//   language switch in the teacher's own colour, already say whose class it is.
//
// The page is the settings shell's plain white.
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { Platform, Pressable, StyleSheet, Switch, Text, View } from 'react-native';
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';

import { NightSky } from '@/components/night-sky';
import { PressableScale } from '@/components/pressable-scale';
import { SettingsPage } from '@/components/settings-page';
import { colors } from '@/constants/brand';
import { CONTROL_LABEL_MAX_SCALE } from '@/constants/font-scale';
import { EXAMS, YEARS } from '@/constants/onboarding';
import { useScale } from '@/constants/scale';
import { SKY_THEMES, START_ARROW, TEACHERS } from '@/constants/teachers';
import { signOut } from '@/lib/auth';
import { hapticCommitted, hapticSwitched, hapticsEnabled, setHapticsEnabled } from '@/lib/haptics';
import { PASS_NAME, passStatus, type PassStatus } from '@/lib/pass';
import { pullPersona, pushPersona } from '@/lib/persona-sync';
import {
  getLanguagePreference,
  getTeacherPreference,
  setLanguagePreference,
  type LanguageId,
  type TeacherId,
} from '@/lib/preferences';
import { getProfile, pullProfile, type StudentProfile } from '@/lib/profile';
import { shadow } from '@/lib/shadow';

const THUMB_MS = 380;
const THUMB_EASING = Easing.bezier(0.3, 1.25, 0.45, 1);

const RULE = 'rgba(28,26,22,.1)';
const HAIR = 'rgba(28,26,22,.14)';
const IDLE_INK = '#8A857A';
const LINK = '#B97A0F';

// English first: the default every new student starts in.
const LANGUAGES: { id: LanguageId; label: string; speech: string }[] = [
  { id: 'english', label: 'English', speech: 'Explains everything in English, terms included.' },
  { id: 'hinglish', label: 'Hinglish', speech: 'Explains in Hindi, keeps the terms in English.' },
];

const MORE_LINKS: { label: string; href: Parameters<typeof router.push>[0] }[] = [
  { label: 'Personal information', href: '/account' },
  { label: 'Privacy policy', href: '/privacy-policy' },
  { label: 'Terms & conditions', href: '/terms' },
  { label: 'About us', href: '/about-us' },
];

const asShortDate = (d: Date) => {
  const otherYear = d.getFullYear() !== new Date().getFullYear();
  return d.toLocaleDateString('en-IN', {
    day: 'numeric',
    month: 'short',
    ...(otherYear ? { year: 'numeric' as const } : {}),
  });
};

export default function ProfileScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const [language, setLanguage] = useState<LanguageId>('english');
  const [haptics, setHaptics] = useState(hapticsEnabled);
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [teacher, setTeacher] = useState<TeacherId>('drona');
  const [pass, setPass] = useState<PassStatus | null>(null);

  useEffect(() => {
    let cancelled = false;
    getLanguagePreference().then((l) => !cancelled && setLanguage(l));
    // Read, never written here: the teacher is chosen on Select Teacher. This
    // screen lights its card in their sky and names them.
    getTeacherPreference().then((t) => !cancelled && setTeacher(t));
    passStatus().then((p) => !cancelled && setPass(p));
    // Local first so the page paints at once, then refreshed from the server:
    // this is the screen most likely to be opened on a new device.
    getProfile().then((p) => !cancelled && setProfile(p));
    // Also writes the canonical teacher and language into this device's
    // cache, which the classroom and Home read.
    pullPersona()
      .then((persona) => {
        if (cancelled || !persona) return;
        if (persona.language) setLanguage(persona.language);
        if (persona.teacher) setTeacher(persona.teacher);
      })
      .catch(() => {});
    pullProfile()
      .then(getProfile)
      .then((p) => !cancelled && setProfile(p))
      .catch(() => {
        // The local copy above still stands.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  /** Guarded on the value moving: a tap that changes nothing feels like nothing. */
  const chooseLanguage = (id: LanguageId) => {
    if (id !== language) hapticSwitched();
    setLanguage(id);
    setLanguagePreference(id);
    void pushPersona({ language: id });
  };

  /** On or off for the whole app. Turning it on taps once, so the student
   *  feels what they have just turned on; turning it off is silent. */
  const chooseHaptics = (on: boolean) => {
    setHaptics(on);
    void setHapticsEnabled(on).then(() => {
      if (on) hapticSwitched();
    });
  };

  const exam = profile ? EXAMS[profile.exam] : null;
  const who = TEACHERS.find((t) => t.id === teacher) ?? TEACHERS[0];
  const speech = LANGUAGES.find((l) => l.id === language)?.speech ?? '';
  const passTitle =
    pass?.state === 'active'
      ? // "7 days" is a length; as a name it is a "7-day pass".
        `${PASS_NAME[pass.record.kind].replace(/^(\d+) (day|month)s?$/, '$1-$2')} pass`
      : pass?.state === 'expired'
        ? 'Your pass has ended'
        : 'No pass yet';
  const passLine =
    pass?.state === 'active'
      ? `Active till ${asShortDate(pass.endsAt)}`
      : pass?.state === 'expired'
        ? `Ended ${asShortDate(pass.endsAt)}`
        : 'Take one to start classes, snaps and practice';

  return (
    <SettingsPage title="Profile">
      <View style={styles.card}>
        <SkyBand teacher={teacher} style={styles.band}>
          <Text style={styles.name} numberOfLines={1}>
            {profile?.name || 'Your account'}
          </Text>
        </SkyBand>

        <View style={styles.cardBody}>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Exam</Text>
            <Text style={styles.rowValue}>{exam ? exam.name : '—'}</Text>
          </View>
          <View style={styles.row}>
            <Text style={styles.rowLabel}>Class</Text>
            <Text style={styles.rowValue}>
              {profile ? YEARS[profile.year].replace(/^Class /, '') : '—'}
            </Text>
          </View>

          {/* The exam's three subjects, one row of three equal chips: a student
              prepares for one exam, so there are always exactly three. */}
          <View style={[styles.row, styles.rowStack]}>
            <Text style={styles.rowLabel}>Subjects</Text>
            <View style={styles.chips}>
              {(exam?.subjects ?? []).map((s) => (
                <View key={s.name} style={styles.chip}>
                  <Text
                    style={styles.chipText}
                    numberOfLines={1}
                    maxFontSizeMultiplier={CONTROL_LABEL_MAX_SCALE}>
                    {s.name}
                  </Text>
                </View>
              ))}
            </View>
          </View>

          <Text style={styles.overline}>{who.name} speaks</Text>
          <LanguageSwitch value={language} onChange={chooseLanguage} teacher={teacher} styles={styles} />
          <Text style={styles.speech}>{speech}</Text>
        </View>
      </View>

      {/* Under the card, saying what the student has, not only where to go. */}
      <PressableScale
        style={styles.manage}
        accessibilityRole="button"
        accessibilityLabel={`${passTitle}. ${passLine}. Manage plan`}
        onPress={() => router.push('/subscription')}>
        <View style={styles.manageText}>
          <Text style={styles.manageTitle}>{pass ? passTitle : ' '}</Text>
          <Text style={styles.manageLine}>{pass ? passLine : ' '}</Text>
        </View>
        <Text style={styles.manageLink}>
          {pass?.state === 'active' ? 'Manage plan' : 'Get a pass'} →
        </Text>
      </PressableScale>

      <View style={styles.links}>
        {/* The one setting in the list rather than a page: a switch, so the
            whole row toggles it. */}
        <PressableScale
          style={styles.linkRow}
          accessibilityRole="switch"
          accessibilityState={{ checked: haptics }}
          onPress={() => chooseHaptics(!haptics)}>
          <Text style={styles.linkLabel}>Haptics</Text>
          <Switch
            value={haptics}
            onValueChange={chooseHaptics}
            // Android draws the off track plainer than iOS, and a white thumb on
            // a 16% track nearly vanished; it gets a deeper track.
            trackColor={{
              false: Platform.OS === 'android' ? 'rgba(28,26,22,0.32)' : 'rgba(28,26,22,0.16)',
              // On, it wears the teacher's colour, as the language switch does.
              true: START_ARROW[teacher],
            }}
            thumbColor="#FFFFFF"
            ios_backgroundColor="rgba(28,26,22,0.16)"
          />
        </PressableScale>
        {MORE_LINKS.map((link) => (
          <PressableScale
            key={link.label}
            style={styles.linkRow}
            onPress={() => router.push(link.href)}>
            <Text style={styles.linkLabel}>{link.label}</Text>
            <Svg viewBox="0 0 16 16" width={scale(14)} height={scale(14)} fill="none">
              <Path
                d="M6 3.5 10.5 8 6 12.5"
                stroke={IDLE_INK}
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </PressableScale>
        ))}
      </View>

      {/* Ends the session and clears this student's local data; the root gate
          sees the change and routes to the welcome itself. */}
      <PressableScale
        style={styles.logOut}
        hitSlop={10}
        onPress={() => {
          hapticCommitted();
          signOut();
        }}>
        <Text style={styles.logOutText}>Log out</Text>
      </PressableScale>
    </SettingsPage>
  );
}

/**
 * The band of the teacher's sky across the card's top: measured, then drawn at
 * its own size by the sky shader, with the name and teacher over it. Skia
 * draws it the same on iOS and Android.
 */
function SkyBand({
  teacher,
  style,
  children,
}: {
  teacher: TeacherId;
  style: object;
  children: React.ReactNode;
}) {
  const [box, setBox] = useState({ width: 0, height: 0 });
  return (
    <View
      style={style}
      onLayout={(e) => {
        const { width, height } = e.nativeEvent.layout;
        setBox((b) => (b.width === width && b.height === height ? b : { width, height }));
      }}>
      {box.width > 0 && (
        <NightSky
          width={box.width}
          height={box.height}
          theme={SKY_THEMES[teacher]}
          style={StyleSheet.absoluteFillObject}
        />
      )}
      {children}
    </View>
  );
}

/**
 * The language switch: two halves on a hairline track, and a thumb in the
 * teacher's own colour sliding between them: Drona's ember, Vedha's marigold,
 * the colours of their skies and of Home's Start arrow. It is how this teacher
 * speaks, so it wears them. The words on it follow for contrast: cream on
 * Drona's deep ember, ink on Vedha's bright marigold.
 */
const THUMB_FILL: Record<TeacherId, [string, string]> = {
  drona: ['#EE8A45', START_ARROW.drona],
  vedha: ['#F4BE55', START_ARROW.vedha],
};
const THUMB_INK: Record<TeacherId, string> = { drona: colors.paper, vedha: colors.ink };

function LanguageSwitch({
  value,
  onChange,
  teacher,
  styles,
}: {
  value: LanguageId;
  onChange: (id: LanguageId) => void;
  teacher: TeacherId;
  styles: ReturnType<typeof createStyles>;
}) {
  const index = Math.max(
    0,
    LANGUAGES.findIndex((l) => l.id === value)
  );
  const [width, setWidth] = useState(0);
  const pos = useSharedValue(index);
  useEffect(() => {
    pos.value = withTiming(index, { duration: THUMB_MS, easing: THUMB_EASING });
  }, [index, pos]);
  const half = width > 0 ? (width - 8) / 2 : 0;
  const slide = useAnimatedStyle(() => ({ transform: [{ translateX: pos.value * half }] }));
  return (
    <View style={styles.switch} onLayout={(e) => setWidth(e.nativeEvent.layout.width)}>
      {half > 0 && (
        <Animated.View style={[styles.thumb, { width: half }, slide]}>
          <LinearGradient
            colors={THUMB_FILL[teacher]}
            start={{ x: 0.5, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            style={StyleSheet.absoluteFill}
          />
        </Animated.View>
      )}
      {LANGUAGES.map((l) => {
        const on = l.id === value;
        return (
          <Pressable
            key={l.id}
            accessibilityRole="button"
            accessibilityState={{ selected: on }}
            style={styles.switchHalf}
            onPress={() => onChange(l.id)}>
            <Text
              style={[styles.switchLabel, on && { color: THUMB_INK[teacher] }]}
              maxFontSizeMultiplier={CONTROL_LABEL_MAX_SCALE}>
              {l.label}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
}

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  return StyleSheet.create({
    card: {
      marginTop: verticalScale(8),
      borderRadius: scale(26),
      overflow: 'hidden',
      backgroundColor: '#FFFFFF',
      borderWidth: StyleSheet.hairlineWidth * 2,
      borderColor: 'rgba(28,26,22,.10)',
    },
    // Sized for one line, the name: at 124 it was built for the name and a
    // teacher line, and with that line gone the band read as half empty.
    band: {
      height: verticalScale(84),
      justifyContent: 'flex-end',
      paddingHorizontal: scale(20),
      paddingBottom: verticalScale(14),
      // The sky's own fallback, for the frame before it is drawn.
      backgroundColor: '#2E2A24',
    },
    name: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(24),
      lineHeight: scale(30),
      letterSpacing: scale(-0.5),
      color: colors.paper,
    },
    cardBody: {
      paddingHorizontal: scale(18),
      paddingTop: verticalScale(4),
      paddingBottom: verticalScale(18),
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: verticalScale(13),
      borderBottomWidth: StyleSheet.hairlineWidth * 2,
      borderBottomColor: RULE,
    },
    rowStack: { flexDirection: 'column', alignItems: 'stretch', gap: verticalScale(10) },
    rowLabel: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(15),
      lineHeight: scale(21),
      color: '#8C867A',
    },
    rowValue: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(15),
      lineHeight: scale(21),
      color: colors.ink,
    },
    chips: { flexDirection: 'row', gap: scale(8) },
    chip: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      paddingVertical: verticalScale(9),
      borderRadius: scale(12),
      borderWidth: StyleSheet.hairlineWidth * 2,
      borderColor: HAIR,
    },
    chipText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(14),
      color: colors.ink,
      includeFontPadding: false,
    },
    overline: {
      marginTop: verticalScale(18),
      fontFamily: 'Onest_700Bold',
      fontSize: scale(11),
      lineHeight: scale(14),
      letterSpacing: scale(1.2),
      textTransform: 'uppercase',
      color: '#8C867A',
    },
    switch: {
      marginTop: verticalScale(10),
      flexDirection: 'row',
      height: scale(48),
      padding: 4,
      borderRadius: scale(14),
      borderWidth: StyleSheet.hairlineWidth * 2,
      borderColor: HAIR,
    },
    thumb: {
      position: 'absolute',
      top: 4,
      bottom: 4,
      left: 4,
      borderRadius: scale(11),
      overflow: 'hidden',
    },
    switchHalf: { flex: 1, alignItems: 'center', justifyContent: 'center' },
    switchLabel: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(15),
      color: '#5F5A50',
      includeFontPadding: false,
    },
    speech: {
      marginTop: verticalScale(9),
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(18),
      color: '#8C867A',
    },
    manage: {
      marginTop: verticalScale(14),
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      paddingVertical: verticalScale(15),
      paddingHorizontal: scale(18),
      borderRadius: scale(16),
      backgroundColor: '#FFFFFF',
      borderWidth: StyleSheet.hairlineWidth * 2,
      borderColor: HAIR,
      ...shadow({ color: colors.ink, opacity: 0.06, radius: scale(8), y: scale(4), elevation: 1 }),
    },
    manageText: { flex: 1 },
    manageTitle: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(15),
      lineHeight: scale(20),
      color: colors.ink,
    },
    manageLine: {
      marginTop: verticalScale(2),
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(18),
      color: '#8C867A',
    },
    manageLink: { fontFamily: 'Onest_600SemiBold', fontSize: scale(14.5), color: LINK },
    links: { marginTop: verticalScale(28), borderTopWidth: 1, borderTopColor: RULE },
    linkRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingVertical: verticalScale(16),
      borderBottomWidth: 1,
      borderBottomColor: RULE,
    },
    linkLabel: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(15),
      lineHeight: scale(22),
      color: colors.ink,
    },
    logOut: { marginTop: verticalScale(32), alignItems: 'center' },
    logOutText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(15),
      lineHeight: scale(22),
      color: colors.red,
    },
  });
}
