import { router } from 'expo-router';
import { Pressable, Text, View, type StyleProp, type ViewStyle } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

import { colors } from '@/constants/brand';
import { pageTitle } from '@/constants/page-title';
import { useScale } from '@/constants/scale';
import type { HistoryFilter, HistoryResult } from '@/lib/practice-history';

/**
 * Pieces shared by the three Practice history screens (app/practice-history*.tsx).
 */

/** Soft orange, picked 17 Nov 2026: one hue, capped soft, so dark date
 *  numbers read on every step. Index 0 is a day with no practice. */
export const SHADES = ['#FFFFFF', '#FEEEE4', '#FCD9C3', '#F9BC98', '#F59C6B'] as const;

export const HAIRLINE = 'rgba(28,26,22,.10)';
export const GREEN = '#1C9B57';
export const GREEN_TEXT = '#157A45';
export const RED_TEXT = '#C53A2B';

export const SUBJECT_SHORT: Record<string, string> = {
  physics: 'Physics',
  chemistry: 'Chem',
  mathematics: 'Maths',
  biology: 'Bio',
};

export const FILTER_LABEL: Record<HistoryFilter, string> = {
  all: 'All',
  correct: 'Correct',
  wrong: 'Wrong',
  skipped: 'Skipped',
};

export function BackIcon({ size, color = colors.ink }: { size: number; color?: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path d="M15 5l-7 7 7 7" stroke={color} strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function ForwardIcon({ size, color = colors.ink }: { size: number; color?: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path d="M9 5l7 7-7 7" stroke={color} strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

export function ChevronDown({ size, color = colors.ink }: { size: number; color?: string }) {
  return (
    <Svg viewBox="0 0 16 16" width={size} height={size} fill="none">
      <Path d="m4 6 4 4 4-4" stroke={color} strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

/** The clock-with-a-back-arrow on Practice's header. */
export function HistoryIcon({ size, color = colors.ink }: { size: number; color?: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1" stroke={color} strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M3 4v4h4" stroke={color} strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" />
      <Path d="M12 7.5V12l3 2" stroke={color} strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
}

/** A small picture glyph standing in for a question's figure in a list row. */
export function FigureIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5z" stroke={colors.faint} strokeWidth={1.6} />
      <Path d="M4.5 16.5l4.5-4.5 3.5 3.5 2.5-2.5 4.5 4.5" stroke={colors.faint} strokeWidth={1.6} strokeLinejoin="round" />
      <Circle cx={15.5} cy={8.5} r={1.5} fill={colors.faint} />
    </Svg>
  );
}

/**
 * The answer's mark: green tick, red cross, sand dash. No word beside it —
 * the three shapes say it (Nikhil, 17 Nov).
 */
export function ResultMark({ result, size }: { result: HistoryResult | 'all'; size: number }) {
  if (result === 'all') {
    return (
      <View
        style={{ width: size, height: size, borderRadius: size / 2, borderWidth: 1.4, borderColor: colors.quiet }}
      />
    );
  }
  const filled = result !== 'skipped';
  return (
    <View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: result === 'correct' ? GREEN : result === 'wrong' ? colors.red : 'transparent',
        borderWidth: filled ? 0 : 1.4,
        borderColor: colors.quiet,
      }}>
      <Svg viewBox="0 0 24 24" width={size * 0.55} height={size * 0.55} fill="none">
        {result === 'correct' ? (
          <Path d="M5 13l4 4L19 7" stroke="#fff" strokeWidth={3.4} strokeLinecap="round" strokeLinejoin="round" />
        ) : result === 'wrong' ? (
          <Path d="M7 7l10 10M17 7L7 17" stroke="#fff" strokeWidth={3.4} strokeLinecap="round" />
        ) : (
          <Path d="M7 12h10" stroke={colors.faint} strokeWidth={3.2} strokeLinecap="round" />
        )}
      </Svg>
    </View>
  );
}

/** The app's 36pt round header button (Practice's back and report). */
export function RoundButton({
  onPress,
  label,
  children,
  style,
}: {
  onPress: () => void;
  label: string;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
}) {
  const { scale } = useScale();
  return (
    <Pressable
      onPress={onPress}
      hitSlop={6}
      accessibilityRole="button"
      accessibilityLabel={label}
      style={({ pressed }) => [
        {
          width: scale(36),
          height: scale(36),
          flexShrink: 0,
          borderRadius: scale(18),
          borderWidth: 1,
          borderColor: colors.hairline,
          alignItems: 'center',
          justifyContent: 'center',
          opacity: pressed ? 0.6 : 1,
        },
        style,
      ]}>
      {children}
    </Pressable>
  );
}

/** Back button and page title, as on Practice. `titleNode` replaces the
 *  standard bold title when a page wants a quieter one. */
export function HistoryHeader({ title, titleNode }: { title: string; titleNode?: React.ReactNode }) {
  const { scale, verticalScale } = useScale();
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        gap: scale(10),
        paddingTop: verticalScale(10),
        paddingBottom: verticalScale(8),
        paddingHorizontal: scale(22),
      }}>
      <RoundButton label="Back" onPress={() => router.back()}>
        <BackIcon size={scale(16)} />
      </RoundButton>
      {titleNode ?? (
        <Text style={pageTitle(scale)} numberOfLines={1} accessibilityRole="header">
          {title}
        </Text>
      )}
    </View>
  );
}
