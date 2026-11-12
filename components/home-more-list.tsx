import { router, useFocusEffect } from 'expo-router';
import { useCallback, useMemo, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

import { MockTestsIcon, useMockStanding } from '@/components/mock-tests-card';
import { PressableScale } from '@/components/pressable-scale';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { SCOPE_EXAMS } from '@/lib/exam-scope';
import { getProfile } from '@/lib/profile';

/**
 * EVERYTHING ELSE, AT THE FOOT OF HOME (Nikhil, 9 Nov 2026).
 *
 * Class notes, Exam scope and Mock tests are places a student visits now and
 * then, not things they do every day, so they sit together in one quiet list
 * instead of three loud blocks with an arrow each. Rows between hairlines, no
 * box around them (Nikhil dislikes outlined cards), a small chevron as in
 * iPhone Settings, and a few words of state on the right where there is some.
 */
export function HomeMoreList() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const mock = useMockStanding();
  const [examLabel, setExamLabel] = useState<string | null>(null);

  useFocusEffect(
    useCallback(() => {
      let cancelled = false;
      getProfile()
        .then(({ exam }) => {
          if (cancelled) return;
          const info = SCOPE_EXAMS[exam === 'neet' ? 'neet' : 'jee'];
          setExamLabel(`${info.label} ${info.year}`);
        })
        .catch(() => {});
      return () => {
        cancelled = true;
      };
    }, [])
  );

  const rows: { key: string; title: string; meta: string | null; icon: React.ReactNode; go: () => void }[] = [
    {
      key: 'notes',
      title: 'Class notes',
      meta: null,
      icon: <ClassNotesIcon size={scale(24)} />,
      go: () => router.push('/(tabs)/notes'),
    },
    {
      key: 'scope',
      title: 'Exam scope',
      meta: examLabel,
      icon: <ScopeIcon size={scale(24)} />,
      go: () => router.push('/exam-scope'),
    },
    {
      key: 'mocks',
      title: 'Mock tests',
      meta: mock,
      icon: <MockTestsIcon size={scale(24)} />,
      go: () => router.push('/mocks'),
    },
  ];

  return (
    <View style={styles.section}>
      <Text style={styles.overline}>Everything else</Text>
      <View style={styles.list}>
        {rows.map((row, i) => (
          <PressableScale
            key={row.key}
            style={[styles.row, i > 0 && styles.rowRule]}
            accessibilityRole="button"
            accessibilityLabel={row.meta ? `${row.title}, ${row.meta}` : row.title}
            onPress={row.go}>
            <View style={styles.icon}>{row.icon}</View>
            <Text style={styles.title}>{row.title}</Text>
            {row.meta ? <Text style={styles.meta}>{row.meta}</Text> : null}
            <Chevron size={scale(15)} />
          </PressableScale>
        ))}
      </View>
    </View>
  );
}

/** An ink line with the marigold dot (components/monk-icons.tsx rules). */
function ClassNotesIcon({ size }: { size: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M7.2 3.75h9.6A2.2 2.2 0 0 1 19 5.95v12.1a2.2 2.2 0 0 1-2.2 2.2H7.2A2.2 2.2 0 0 1 5 18.05V5.95a2.2 2.2 0 0 1 2.2-2.2zM9 3.75v16.5M12.2 9h3.6"
        stroke={colors.ink}
        strokeWidth={1.8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={13} cy={12.8} r={1.4} fill={colors.marigold} />
    </Svg>
  );
}

/** A magnifier over the syllabus, the marigold dot at its centre. */
function ScopeIcon({ size }: { size: number }) {
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Circle cx={11} cy={11} r={6.5} stroke={colors.ink} strokeWidth={1.8} />
      <Path d="M16 16l4 4" stroke={colors.ink} strokeWidth={1.8} strokeLinecap="round" />
      <Circle cx={11} cy={11} r={1.6} fill={colors.marigold} />
    </Svg>
  );
}

function Chevron({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M9 6l6 6-6 6"
        stroke={colors.faint}
        strokeWidth={2.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const RULE = 'rgba(28,26,22,.1)';

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  return StyleSheet.create({
    section: { marginTop: verticalScale(32) },
    overline: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(11),
      lineHeight: scale(14),
      letterSpacing: scale(0.1 * 11),
      textTransform: 'uppercase',
      color: colors.slate,
    },
    list: {
      marginTop: verticalScale(8),
      borderTopWidth: 1,
      borderBottomWidth: 1,
      borderColor: RULE,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      minHeight: verticalScale(56),
    },
    rowRule: { borderTopWidth: 1, borderTopColor: RULE },
    icon: { width: scale(28), alignItems: 'center' },
    title: {
      flex: 1,
      fontFamily: 'Onest_500Medium',
      fontSize: scale(15),
      lineHeight: scale(22),
      color: colors.ink,
    },
    meta: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(18),
      color: colors.slate,
    },
  });
}
