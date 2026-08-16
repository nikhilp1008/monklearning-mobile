import { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

type PracticeTabsHeaderProps = {
  activeSegment: 'unlimited' | 'mock';
  onPressUnlimited: () => void;
  onPressMock: () => void;
  questionCounter?: string;
};

export function PracticeTabsHeader({
  activeSegment,
  onPressUnlimited,
  onPressMock,
  questionCounter,
}: PracticeTabsHeaderProps) {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  return (
    <>
      <View style={styles.headerRow}>
        <Text style={styles.heading}>Practice</Text>
        {questionCounter ? <Text style={styles.questionCounter}>{questionCounter}</Text> : null}
      </View>

      <View style={styles.segmentRow}>
        <Pressable
          style={[styles.segment, activeSegment === 'unlimited' && styles.segmentActive]}
          onPress={onPressUnlimited}>
          <Text
            style={[
              styles.segmentText,
              activeSegment === 'unlimited' && styles.segmentTextActive,
            ]}>
            Unlimited
          </Text>
        </Pressable>
        <Pressable
          style={[styles.segment, activeSegment === 'mock' && styles.segmentActive]}
          onPress={onPressMock}>
          <MockIcon size={scale(13)} active={activeSegment === 'mock'} />
          <Text
            style={[styles.segmentText, activeSegment === 'mock' && styles.segmentTextActive]}>
            Mock test
          </Text>
        </Pressable>
      </View>
    </>
  );
}

function MockIcon({ size, active }: { size: number; active: boolean }) {
  const color = active ? colors.ink : colors.slate;
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Rect x={5} y={11} width={14} height={9} rx={2} stroke={color} strokeWidth={2} />
      <Path d="M8 11V8a4 4 0 0 1 8 0v3" stroke={color} strokeWidth={2} strokeLinecap="round" />
    </Svg>
  );
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    heading: {
      fontFamily: 'AnekLatin_500Medium',
      fontSize: scale(24),
      letterSpacing: scale(-0.6),
      color: colors.ink,
    },
    questionCounter: {
      fontFamily: 'Kalam_700Bold',
      fontSize: scale(16),
      color: colors.red,
    },
    segmentRow: {
      flexDirection: 'row',
      gap: scale(20),
      borderBottomWidth: 1,
      borderBottomColor: colors.hairline,
      paddingHorizontal: scale(2),
      marginTop: verticalScale(12),
    },
    segment: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(6),
      paddingVertical: verticalScale(8),
    },
    segmentActive: {
      borderBottomWidth: scale(2),
      borderBottomColor: colors.ink,
    },
    segmentText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(14),
      color: colors.slate,
    },
    segmentTextActive: {
      fontFamily: 'AnekLatin_700Bold',
      color: colors.ink,
    },
  });
}
