import { router } from 'expo-router';
import { useMemo } from 'react';
import { StatusBar } from 'expo-status-bar';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native';
import Animated, {
  SharedValue,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { PressableScale } from '@/components/pressable-scale';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

/**
 * The shell every screen reached from Profile sits in — Personal information,
 * Privacy policy, Terms, About us.
 *
 * Two things it exists to hold still. The header is pinned rather than scrolled
 * away: these are long documents, and the way out shouldn't require scrolling
 * back to the top to find. And the page is white on a 24pt gutter, the same as
 * Profile itself, so stepping into one of these rows doesn't change the ground
 * under the reader.
 *
 * The hairline under the header only appears once the page has moved, so a
 * short page reads as one uninterrupted sheet.
 */

const HEADER_HAIRLINE_AT = 8;

export function SettingsHeader({
  title,
  scrollY,
}: {
  title: string;
  /** Drives the hairline. Omit on screens that never scroll. */
  scrollY?: SharedValue<number>;
}) {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createShellStyles(scale, verticalScale), [scale, verticalScale]);

  const hairline = useAnimatedStyle(() => ({
    opacity: scrollY ? interpolate(scrollY.value, [0, HEADER_HAIRLINE_AT], [0, 1], 'clamp') : 0,
  }));

  return (
    <View style={styles.headerRow}>
      <PressableScale style={styles.backButton} onPress={() => router.back()}>
        <BackArrowIcon size={scale(15)} />
      </PressableScale>
      <Text style={styles.headerTitle} numberOfLines={1}>
        {title}
      </Text>
      <Animated.View style={[styles.headerHairline, hairline]} pointerEvents="none" />
    </View>
  );
}

export function SettingsPage({
  title,
  children,
  /** Personal information has a password form under the keyboard. */
  keyboardAware = false,
}: {
  title: string;
  children: React.ReactNode;
  keyboardAware?: boolean;
}) {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createShellStyles(scale, verticalScale), [scale, verticalScale]);

  const scrollY = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const scroller = (
    <Animated.ScrollView
      style={styles.scroll}
      contentContainerStyle={styles.scrollContent}
      onScroll={onScroll}
      scrollEventThrottle={16}
      keyboardShouldPersistTaps="handled"
      showsVerticalScrollIndicator={false}>
      {children}
    </Animated.ScrollView>
  );

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <SettingsHeader title={title} scrollY={scrollY} />
        {keyboardAware ? (
          <KeyboardAvoidingView
            style={styles.scroll}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
            {scroller}
          </KeyboardAvoidingView>
        ) : (
          scroller
        )}
      </SafeAreaView>
    </View>
  );
}

/**
 * The prose scale these four pages share. Kept next to the shell so a change to
 * one document's rhythm can't quietly leave the other three behind.
 */
export function useSettingsStyles() {
  const { scale, verticalScale } = useScale();
  return useMemo(
    () =>
      StyleSheet.create({
        eyebrow: {
          fontFamily: 'AnekLatin_800ExtraBold',
          fontSize: scale(12),
          letterSpacing: scale(0.13 * 12),
          textTransform: 'uppercase',
          color: colors.faint,
          marginTop: verticalScale(20),
        },
        section: {
          marginTop: verticalScale(24),
        },
        sectionTitle: {
          fontFamily: 'AnekLatin_700Bold',
          fontSize: scale(16),
          letterSpacing: scale(-0.02 * 16),
          color: colors.ink,
        },
        sectionBody: {
          fontFamily: 'AnekLatin_400Regular',
          fontSize: scale(14),
          lineHeight: scale(14 * 1.55),
          color: colors.slate,
          marginTop: verticalScale(7),
        },
        link: {
          fontFamily: 'AnekLatin_700Bold',
          color: colors.ink,
          textDecorationLine: 'underline',
          textDecorationColor: 'rgba(238,163,31,.6)',
        },
        // The chip from Profile's exam row, reused for About us's socials.
        chipRow: {
          flexDirection: 'row',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: scale(7),
          marginTop: verticalScale(13),
        },
        chip: {
          backgroundColor: '#F7F4EC',
          borderRadius: scale(99),
          paddingVertical: verticalScale(6),
          paddingHorizontal: scale(13.5),
        },
        chipText: {
          fontFamily: 'AnekLatin_600SemiBold',
          fontSize: scale(13.5),
          color: colors.ink,
        },
        footer: {
          fontFamily: 'AnekLatin_400Regular',
          fontSize: scale(12),
          color: colors.faint,
          textAlign: 'center',
          marginTop: verticalScale(32),
        },
      }),
    [scale, verticalScale]
  );
}

export function BackArrowIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M15 6l-6 6 6 6"
        stroke={colors.ink}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function createShellStyles(
  scale: (size: number) => number,
  verticalScale: (size: number) => number
) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#fff',
    },
    safeArea: {
      flex: 1,
    },
    scroll: {
      flex: 1,
    },
    scrollContent: {
      paddingHorizontal: scale(24),
      paddingBottom: verticalScale(40),
    },
    headerRow: {
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      paddingHorizontal: scale(24),
      paddingTop: verticalScale(8),
      paddingBottom: verticalScale(10),
      backgroundColor: '#fff',
    },
    headerTitle: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(17),
      color: colors.ink,
    },
    headerHairline: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      height: 1,
      backgroundColor: 'rgba(28,26,22,.12)',
    },
    backButton: {
      width: scale(34),
      height: scale(34),
      flexShrink: 0,
      borderRadius: scale(17),
      borderWidth: scale(1.4),
      borderColor: colors.inputBorder,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
}
