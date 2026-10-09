// 24A Profile — rebuilt from "MonkLearning Profile 24A.html".
//
// Only this screen changes. Personal information, privacy policy, manage plan,
// terms and about us keep the layout and the shared `SettingsHeader` they
// already have.
//
// Which is why the header here is local rather than that shared component:
// 24A draws a 40pt back circle beside a 22/700 title, and `SettingsHeader` is
// 34pt beside 24/500 across eight screens. Changing the shared one to match
// would have redesigned all seven of the pages that were meant to stay put.
//
// Fonts are the app's own Onest. The handoff carries an Anek Latin @font-face
// block, but it is dead boilerplate from the kit -- 24A's own phone container
// sets `font-family:'Onest'`, so there was nothing to reconcile.
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Animated as RNAnimated, Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Defs, Path, RadialGradient, Rect as SvgRect, Stop } from 'react-native-svg';

import { Grain } from '@/components/grain';
import { PressableScale } from '@/components/pressable-scale';
import { SettingsPage } from '@/components/settings-page';
import { colors } from '@/constants/brand';
import { TEACHER_THUMB } from '@/constants/teachers';
import { EXAMS, YEARS } from '@/constants/onboarding';
import { useScale } from '@/constants/scale';
import { signOut } from '@/lib/auth';
import { hapticCommitted, hapticSwitched } from '@/lib/haptics';
import {
  getLanguagePreference,
  getTeacherPreference,
  setLanguagePreference,
  type LanguageId,
  type TeacherId,
} from '@/lib/preferences';
import { pullPersona, pushPersona } from '@/lib/persona-sync';
import { getProfile, pullProfile, type StudentProfile } from '@/lib/profile';

/**
 * The thumb's slide and its colour change, both 500ms as the handoff states.
 *
 * The curve overshoots — it passes the far edge and settles back — which is
 * what makes a segmented control feel sprung rather than mechanical. The old
 * value here was 380ms on the orb's easing, imported from the teacher orb this
 * screen no longer draws.
 */
const THUMB_MS = 500;
const THUMB_EASING = Easing.bezier(0.3, 1.25, 0.45, 1);

const RULE = 'rgba(28,26,22,.1)';
/** Inside the profile card only: a warm rule, so it does not go grey on amber. */
const CARD_DIVIDER = 'rgba(58,42,23,.12)';
const OUTLINE = 'rgba(28,26,22,.16)';
const IDLE_INK = '#8A857A';

/**
 * The orb palettes are 24A's two conic gradients, read in order. React Native
 * has no conic-gradient, so each is a rotating linear sweep clipped by a
 * circle -- the same fallback this screen already used for the old selection
 * ring, and the reason the stop list starts and ends on the same colour.
 */
// English first, as 24A draws the toggle.
const LANGUAGES: { id: LanguageId; label: string; speech: string }[] = [
  { id: 'english', label: 'English', speech: 'Explains everything in English, terms included.' },
  {
    id: 'hinglish',
    label: 'Hinglish',
    speech: 'Explains in Hindi, keeps the terms in English.',
  },
];

const MORE_LINKS: { label: string; href: Parameters<typeof router.push>[0] }[] = [
  { label: 'Personal information', href: '/account' },
  { label: 'Privacy policy', href: '/privacy-policy' },
  { label: 'Terms & conditions', href: '/terms' },
  { label: 'About us', href: '/about-us' },
];

export default function ProfileScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  const [language, setLanguage] = useState<LanguageId>('english');
  const [profile, setProfile] = useState<StudentProfile | null>(null);
  const [teacher, setTeacher] = useState<TeacherId>('drona');

  useEffect(() => {
    let cancelled = false;
    getLanguagePreference().then((l) => {
      if (cancelled) return;
      setLanguage(l);
    });
    // Read, never written here. The teacher is chosen on Select Teacher; this
    // screen only borrows their colour for the Speaks thumb.
    getTeacherPreference().then((t) => {
      if (!cancelled) setTeacher(t);
    });
    // Local first so the page paints immediately, then refreshed from the
    // server — this is the screen most likely to be opened on a new device,
    // where the local copy is empty and `profiles` is the only source.
    getProfile().then((p) => !cancelled && setProfile(p));
    // Still pulled, though the teacher no longer appears on this page: the
    // call writes the canonical teacher into this device's cache as a side
    // effect, which is what the classroom and Home's header read. Dropping it
    // would leave a teacher chosen on another device invisible here.
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
        // The locally-loaded copy above still stands.
      });
    return () => {
      cancelled = true;
    };
  }, []);

  /** Both guarded on the value actually moving: a tap that changes nothing
   *  should feel like nothing, or the tick stops meaning "that moved". */
  const chooseLanguage = (id: LanguageId) => {
    if (id !== language) hapticSwitched();
    setLanguage(id);
    setLanguagePreference(id);
    void pushPersona({ language: id });
  };

  const exam = profile ? EXAMS[profile.exam] : null;
  // 24A shows "JEE Main · NEET" for a student sitting both. `EXAMS.both.name`
  // is the word "Both", which is the right label on a row you choose from and
  // the wrong one on a row that reports what you chose.
  const examValue = !exam
    ? '—'
    : profile?.exam === 'both'
      ? `${EXAMS.jee.name} · ${EXAMS.neet.name}`
      : exam.name;
  const speech = LANGUAGES.find((l) => l.id === language)?.speech ?? '';

  return (
    /*
     * THE APP'S OWN SETTINGS SHELL, not a header of this screen's own.
     *
     * Profile used to draw its own, and the note at the top of this file
     * explained why: the handoff wanted a 40pt back circle beside a 22/700
     * title where the shared one was 34 beside 24/500. That reason expired.
     * `constants/page-title.ts` has since collapsed fifteen different page
     * titles into one 24/700 tier, which the shared header already uses, so
     * the two differed only by a back button size and a gutter — and this
     * screen is the one place a student steps from into four others. Sharing
     * the shell is what stops Profile reading as a page from a different app.
     *
     * It brings the 24pt gutter, the pinned header, the hairline that appears
     * on scroll, and the 40pt tail, all of them the same as Personal
     * information, Privacy policy, Terms and About us.
     */
    <SettingsPage title="Profile">
          {/* The card the page is built around. Name, exam, class and
              subjects were four plain rows on white; they are one warm object
              now, and the only thing on the screen that is not a list. */}
          <ProfileCard
            styles={styles}
            scale={scale}
            name={profile?.name || 'Your account'}
            exam={examValue}
            year={profile ? YEARS[profile.year].replace(/^Class /, '') : ''}
            subjects={(exam?.subjects ?? []).map((s2) => s2.name)}
          />

          {/* Tucked 16 under the card's foot, overlapping it, so it reads as
              belonging to the card rather than starting the next section. */}
          <PressableScale
            style={styles.manageLink}
            hitSlop={10}
            onPress={() => router.push('/subscription')}>
            <Text style={styles.manageText}>Manage plan</Text>
            <Svg viewBox="0 0 16 16" width={scale(15)} height={scale(15)} fill="none">
              <Path
                d="M2 8h11M9 3.5 13.5 8 9 12.5"
                stroke={colors.amberText}
                strokeWidth={1.8}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </PressableScale>

          <Text style={styles.overline}>Speaks</Text>
          <LanguageToggle
            styles={styles}
            options={LANGUAGES}
            value={language}
            teacher={teacher}
            onChange={chooseLanguage}
          />
          <Text style={styles.speech}>{speech}</Text>

          <View style={styles.links}>
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

          {/* Ends the Supabase session and clears this student's local data;
              the root gate sees the change and routes to onboarding itself,
              so there is nothing to navigate to here. */}
          <PressableScale style={styles.logOut} hitSlop={10} onPress={() => {
              hapticCommitted();
              signOut();
            }}>
            <Text style={styles.logOutText}>Log out</Text>
          </PressableScale>
    </SettingsPage>
  );
}

/**
 * THE PROFILE CARD — the one warm object on the page.
 *
 * Name, exam, class and subjects used to be four plain rows on white, which
 * said nothing about whose account this is. They are one card now: a marigold
 * field lit from its foot, with the rows reversed out of it.
 *
 * THREE LAYERS, as the handoff specifies, and they are not interchangeable. A
 * single gradient cannot do it — the card is a pale cream body with a warm
 * wash coming down from above the top edge and a strong marigold light rising
 * from below the bottom edge, so the brightest part of the card is outside the
 * card. That is what stops it reading as a flat orange rectangle.
 */
function ProfileCard({
  styles,
  scale,
  name,
  exam,
  year,
  subjects,
}: {
  styles: ReturnType<typeof createStyles>;
  scale: (n: number) => number;
  name: string;
  exam: string;
  /** Already stripped of its "Class " prefix; the row is labelled Class. */
  year: string;
  subjects: string[];
}) {
  /**
   * MEASURED, not `width="100%"`.
   *
   * A percentage inside an `Svg` resolves against the viewport it had when it
   * was first laid out, and this card grows after that: the subject chips
   * arrive with the profile fetch and wrap to a second row. The washes stayed
   * the size of the card before the chips landed, which drew a visible
   * rectangle across it — a hard vertical edge about 100pt short of the right
   * side. Real numbers, from the box the card actually ended up as.
   */
  const [box, setBox] = useState({ width: 0, height: 0 });

  return (
    <View style={styles.cardShadow}>
      <View
        style={styles.profileCard}
        onLayout={(e) =>
          setBox({ width: e.nativeEvent.layout.width, height: e.nativeEvent.layout.height })
        }>
        <LinearGradient
          colors={['#F8E2AE', '#FCF4E0', '#FAE6B4', '#F2B23A']}
          locations={[0, 0.38, 0.72, 1]}
          style={StyleSheet.absoluteFill}
        />
        <Svg
          style={StyleSheet.absoluteFill}
          width={box.width}
          height={box.height}
          pointerEvents="none">
          <Defs>
            {/* `radial-gradient(120% 60% at 50% -18%, …)` */}
            <RadialGradient id="cardTop" cx="0.5" cy="-0.18" rx="1.2" ry="0.6">
              <Stop offset="0" stopColor="#F2B23A" stopOpacity={0.6} />
              <Stop offset="0.72" stopColor="#F2B23A" stopOpacity={0} />
            </RadialGradient>
            {/* `radial-gradient(140% 70% at 50% 120%, …)` — the lamp. */}
            <RadialGradient id="cardFoot" cx="0.5" cy="1.2" rx="1.4" ry="0.7">
              <Stop offset="0" stopColor="#EEA31F" stopOpacity={1} />
              <Stop offset="0.3" stopColor="#EEA31F" stopOpacity={0.75} />
              <Stop offset="0.55" stopColor="#F2B23A" stopOpacity={0.35} />
              <Stop offset="0.8" stopColor="#F2B23A" stopOpacity={0} />
            </RadialGradient>
          </Defs>
          <SvgRect x={0} y={0} width={box.width} height={box.height} fill="url(#cardTop)" />
          <SvgRect x={0} y={0} width={box.width} height={box.height} fill="url(#cardFoot)" />
        </Svg>
        {/* Drawn, not the handoff's 128px tile — see components/grain.tsx.
            This is the one grained surface in the app that is LIGHT, which is
            where an overlay blend actually has something to work with. */}
        <Grain freq={1} strength={0.2} />

        <Text style={styles.cardName}>{name}</Text>
        <View style={styles.cardRow}>
          <Text style={styles.rowLabel}>Exam</Text>
          <Text style={styles.rowValue}>{exam}</Text>
        </View>
        {!!year && (
          <View style={styles.cardRow}>
            <Text style={styles.rowLabel}>Class</Text>
            <Text style={styles.rowValue}>{year}</Text>
          </View>
        )}
        <View style={styles.subjectsBlock}>
          <Text style={styles.rowLabel}>Subjects</Text>
          <View style={styles.chipRow}>
            {subjects.map((subject) => (
              <View key={subject} style={styles.chip}>
                <Text style={styles.chipText}>{subject}</Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

/**
 * The Speaks toggle: one pill, two halves, an amber knob that slides between
 * them in 380ms on 24A's own easing curve.
 *
 * The knob is driven by a shared value rather than by re-rendering into a new
 * position, so the slide survives the preference write that follows the tap.
 */
function LanguageToggle({
  styles,
  options,
  value,
  teacher,
  onChange,
}: {
  styles: ReturnType<typeof createStyles>;
  options: { id: LanguageId; label: string }[];
  value: LanguageId;
  /** Whose colour the thumb wears. Chosen on Select Teacher, not here. */
  teacher: TeacherId;
  onChange: (id: LanguageId) => void;
}) {
  const index = Math.max(
    0,
    options.findIndex((o) => o.id === value)
  );
  const [width, setWidth] = useState(0);
  const pos = useSharedValue(index);

  useEffect(() => {
    pos.value = withTiming(index, { duration: THUMB_MS, easing: THUMB_EASING });
  }, [index, pos]);

  /**
   * The thumb's colour follows the teacher, and it CROSS-FADES rather than
   * swapping. Two copies of the fill are stacked, the old one underneath; when
   * the teacher changes the top one fades in over it across 500ms and then
   * becomes the one underneath. Swapping the gradient's stops instead would
   * jump, because a gradient has no midpoint to animate through.
   */
  const shown = useRef(teacher);
  const blend = useRef(new RNAnimated.Value(1)).current;
  const [, repaint] = useState(0);
  useEffect(() => {
    if (shown.current === teacher) return;
    blend.setValue(0);
    RNAnimated.timing(blend, {
      toValue: 1,
      duration: THUMB_MS,
      useNativeDriver: true,
    }).start(({ finished }) => {
      if (!finished) return;
      shown.current = teacher;
      repaint((n) => n + 1);
    });
  }, [teacher, blend]);

  const Fill = ({ id }: { id: TeacherId }) => (
    <LinearGradient
      colors={TEACHER_THUMB[id]}
      locations={[0, 0.4, 1]}
      start={{ x: 0.2, y: 0 }}
      end={{ x: 0.8, y: 1 }}
      style={[StyleSheet.absoluteFill, styles.knobFill]}
    />
  );

  // `calc(50% - 3px)`, measured, because RN has no calc and the knob has to
  // land exactly inside the 3pt inset on both sides.
  const half = width > 0 ? (width - 6) / 2 : 0;
  const slide = useAnimatedStyle(() => ({ transform: [{ translateX: pos.value * half }] }));

  return (
    <View style={styles.toggle} onLayout={(e) => setWidth(e.nativeEvent.layout.width)}>
      {half > 0 && (
        <Animated.View style={[styles.knob, { width: half }, slide]}>
          <Fill id={shown.current} />
          <RNAnimated.View style={[StyleSheet.absoluteFill, { opacity: blend }]}>
            <Fill id={teacher} />
          </RNAnimated.View>
        </Animated.View>
      )}
      {options.map((o) => {
        const on = o.id === value;
        return (
          <Pressable
            key={o.id}
            accessibilityRole="button"
            accessibilityState={{ selected: on }}
            style={styles.toggleHalf}
            onPress={() => onChange(o.id)}>
            <Text style={[styles.toggleLabel, on && styles.toggleLabelOn]}>{o.label}</Text>
          </Pressable>
        );
      })}
    </View>
  );
}

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  return StyleSheet.create({

    // --- header (local: see the note at the top of the file) ---
    /** The app's one page-title tier — see constants/page-title.ts. */


    // --- identity ---
    /** Two steps under the title. It was 24 — the old title tier exactly —
     *  so the first line of the body read as the heading of the page. */

    // --- exam / subjects ---
    /* 15, the app's body tier, and the same size as the value beside it. The
       handoff sets both to 17; the note this screen already carried says why
       they match each other — at two different sizes the row reads as two
       systems, the answer louder than the question. */
    rowLabel: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(15),
      lineHeight: scale(22),
      color: '#3A2A17',
    },
    /** 15, like the label beside it. At 16 the answer was a size larger
     *  than the question, which is why the row read as two systems. */
    rowValue: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(15),
      lineHeight: scale(22),
      color: colors.ink,
    },
    subjectsBlock: {
      gap: verticalScale(12),
      paddingTop: verticalScale(16),
      paddingBottom: verticalScale(22),
      borderTopWidth: 1,
      borderTopColor: CARD_DIVIDER,
    },
    chipRow: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: scale(8),
    },
    chip: {
      height: verticalScale(36),
      /* 14, not the handoff's 18: at the app's 24pt gutter three chips at 18
         come to a point wider than the row and Maths drops to a second line.
         The gutter is the app's and does not move for one card. */
      paddingHorizontal: scale(14),
      borderRadius: 999,
      justifyContent: 'center',
      /* Paper at 62%, so the marigold under it comes through and the chip
         reads as part of the card rather than a white sticker on it. */
      backgroundColor: 'rgba(255,253,248,.62)',
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,.7)',
    },
    chipText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(15),
      color: colors.ink,
    },
    /* Pulled up over the card's foot, which is what makes it read as the
       card's own control rather than the first item of the next section. */
    manageLink: {
      flexDirection: 'row',
      alignItems: 'center',
      alignSelf: 'flex-start',
      gap: scale(6),
      /* 16 BELOW the card, not over it. The handoff writes `margin-top: -16`
         against a parent whose gap is 32, so the two compose to +16; copied
         literally into a layout with no parent gap it pulled the pill up onto
         the card's foot. */
      marginTop: verticalScale(16),
      height: verticalScale(36),
      paddingLeft: scale(16),
      paddingRight: scale(12),
      borderRadius: 999,
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.14)',
      backgroundColor: '#fff',
    },
    manageText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(15),
      lineHeight: scale(22),
      color: colors.amberText,
    },

    overline: {
      marginTop: verticalScale(32),
      fontFamily: 'Onest_700Bold',
      fontSize: scale(11),
      lineHeight: scale(14),
      letterSpacing: scale(0.1 * 11),
      textTransform: 'uppercase',
      color: colors.slate,
    },

    // --- speaks ---
    toggle: {
      marginTop: verticalScale(12),
      height: verticalScale(46),
      borderRadius: 99,
      borderWidth: 1,
      borderColor: OUTLINE,
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
    speech: {
      marginTop: verticalScale(12),
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(18),
      color: colors.slate,
    },

    // --- rate ---
    /* White, with its weight carried by two amber glows instead of a dark
       fill. `overflow: hidden` is what clips the foot glow to the card. */
    /* The shadow lives out here because `profileCard` clips its children to
       draw the gradients, and a view that clips cannot cast. */
    cardShadow: {
      /* The same 24 the settings pages put between their header and their
         first section. Without it the card sat against the back button and
         the page lost its top. */
      marginTop: verticalScale(24),
      borderRadius: scale(28),
      backgroundColor: '#FCF4E0',
      boxShadow: [
        { offsetX: 0, offsetY: verticalScale(22), blurRadius: scale(40), spreadDistance: scale(-26), color: 'rgba(176,132,32,.75)' },
      ],
    },
    profileCard: {
      borderRadius: scale(28),
      overflow: 'hidden',
      paddingTop: verticalScale(26),
      paddingHorizontal: scale(20),
      paddingBottom: verticalScale(8),
      borderWidth: 1,
      borderColor: 'rgba(176,132,32,.18)',
    },
    /* The hero tier, 17/25. The handoff says 20, which is a size this app
       does not have: its scale runs 24 page title, 17 hero, 16 title, 15 body,
       13 supporting, 11 overline. 17 keeps the name above the rows under it
       and below the page title above it, which is the hierarchy that was being
       asked for. */
    cardName: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(17),
      lineHeight: scale(25),
      letterSpacing: scale(-0.35),
      color: colors.ink,
      textAlign: 'center',
      paddingBottom: verticalScale(18),
    },
    cardRow: {
      height: verticalScale(50),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      borderTopWidth: 1,
      borderTopColor: CARD_DIVIDER,
    },


    // --- links / log out ---
    links: { marginTop: verticalScale(32), borderTopWidth: 1, borderTopColor: RULE },
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
