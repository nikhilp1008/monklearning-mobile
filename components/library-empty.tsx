import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Defs, RadialGradient, Rect as SvgRect, Stop } from 'react-native-svg';

import { Grain } from '@/components/grain';
import { ObButton } from '@/components/onboarding-kit';
import { DoubtsIcon, NotesIcon } from '@/components/tab-bar';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

/**
 * NOTHING HERE YET, SAID PROPERLY.
 *
 * Both lists used to stand in demo cards while the real list was empty —
 * scaffolding so the Library could be judged on a phone before anything real
 * existed. On a new account that reads as notes the student never wrote, so
 * they are gone and nothing fake replaces them. An empty list here is not a
 * failure state, it is the first day.
 *
 * THE MARK IS THE TAB'S OWN ICON. It was a drawn page inside amber brackets —
 * a second symbol for a thing that already has one. A student reading this
 * card has the same glyph lit in the bar at the bottom of the screen, so the
 * card names the tab rather than introducing a picture of it.
 *
 * THE BUTTON IS THE ONBOARDING KEY. The same `ObButton` the pass screens
 * press: 3pt ledge, inset highlight, travel on press, key haptic. A flat pill
 * here was the one control in the app that belonged to no system.
 */

type Kind = 'notes' | 'doubts';
type S = (n: number) => number;

const COPY: Record<Kind, { head: string; line: string; cta: string; go: string }> = {
  doubts: {
    head: 'Stuck on a question?',
    line: 'You get the steps, not just the answer.',
    cta: 'Snap a question',
    go: '/snap-capture',
  },
  notes: {
    head: 'Your notes start with a class.',
    line: 'When a class ends, save the board and those notes are kept here.',
    cta: 'Start a live class',
    go: '/drona',
  },
};

/**
 * THE PLATE, borrowed from Home.
 *
 * Home draws Snap and Solve and Practice on a dark plate with a warm glow in
 * the lower-right and grain over it — the app's one premium object. A flat
 * white square holding a line-art glyph was the generic version of exactly
 * that, on a screen a student meets before anything else they own. Same
 * ground, same glow, same grain, a third of the size.
 */
function Plate({ size, radius, children }: { size: number; radius: number; children: React.ReactNode }) {
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: radius,
        overflow: 'hidden',
        backgroundColor: PLATE_GROUND,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Svg style={StyleSheet.absoluteFill} pointerEvents="none">
        <Defs>
          <RadialGradient id="emptyPlateGlow" cx="0.85" cy="1.05" r="1.35">
            <Stop offset="0" stopColor="#F0AE39" stopOpacity={0.95} />
            <Stop offset="0.5" stopColor="#C4821F" stopOpacity={0.43} />
            <Stop offset="1" stopColor="#8A5A14" stopOpacity={0} />
          </RadialGradient>
        </Defs>
        <SvgRect x="0" y="0" width="100%" height="100%" fill="url(#emptyPlateGlow)" />
      </Svg>
      <Grain freq={1} strength={0.16} />
      {children}
    </View>
  );
}

/** Home's plate ground, and the grain strengths it carries. */
const PLATE_GROUND = '#2E2A24';

export function EmptyState({ kind }: { kind: Kind }) {
  const { scale, verticalScale } = useScale();
  const s = useStyles(scale, verticalScale);
  const copy = COPY[kind];
  const Glyph = kind === 'notes' ? NotesIcon : DoubtsIcon;

  const button = (
    <View style={s.buttonWrap}>
      <ObButton compact label={copy.cta} withArrow onPress={() => router.push(copy.go as never)} />
    </View>
  );

  // 1 — the card: the tab's own mark on Home's plate, one line, and the key.
  return (
    <View style={s.wrap}>
      <LinearGradient
        colors={['#FFFBF0', '#FAF0D9']}
        start={{ x: 0.1, y: 0 }}
        end={{ x: 0.9, y: 1 }}
        style={s.card}>
        <Grain freq={1} strength={0.06} />
        <Plate size={scale(62)} radius={scale(19)}>
          <Glyph color={colors.paper} size={scale(30)} />
        </Plate>
        <Text style={s.head}>{copy.head}</Text>
        <Text style={s.line}>{copy.line}</Text>
        {button}
      </LinearGradient>
    </View>
  );
}

function useStyles(scale: S, verticalScale: S) {
  return StyleSheet.create({
    /**
     * No gutter of its own. The list sets the page's 24pt margin, and 4pt on
     * top of that left the card inset from the search field above it by
     * exactly enough to look like a mistake.
     *
     * The list area is most of a phone screen: left at its natural height the
     * card sat under the search field with a third of a page of nothing
     * beneath it, which is the look being fixed.
     */
    wrap: { minHeight: verticalScale(470), justifyContent: 'center' },

    card: {
      alignItems: 'center',
      overflow: 'hidden',
      paddingTop: verticalScale(28),
      paddingBottom: verticalScale(26),
      paddingHorizontal: scale(22),
      borderRadius: scale(24),
      borderWidth: 1,
      // Amber at a twelfth, so the card has an edge without a border on it.
      borderColor: 'rgba(238,163,31,.22)',
      boxShadow: [{ offsetX: 0, offsetY: scale(10), blurRadius: scale(24), color: 'rgba(28,26,22,.07)' }],
    },
    /** The mark sits on paper inside the tint, the way every icon in this app
     *  sits on a plate rather than floating on a field of colour. */
    plate: {
      width: scale(64),
      height: scale(64),
      borderRadius: scale(20),
      backgroundColor: colors.paper,
      alignItems: 'center',
      justifyContent: 'center',
    },
    head: {
      marginTop: verticalScale(16),
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(18),
      lineHeight: scale(24),
      letterSpacing: scale(-0.3),
      color: colors.ink,
      textAlign: 'center',
    },
    line: {
      marginTop: verticalScale(6),
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13.5),
      lineHeight: scale(19),
      color: colors.slate,
      textAlign: 'center',
    },
    buttonWrap: { marginTop: verticalScale(22) },

  });
}
