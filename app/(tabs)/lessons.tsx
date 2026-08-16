import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path, Rect } from 'react-native-svg';

import { CheckIcon } from '@/components/check-icon';
import { PressableScale } from '@/components/pressable-scale';
import { SlidingToggle } from '@/components/sliding-toggle';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

type ChapterStatus = 'done' | 'new';

type Chapter = {
  number: string;
  title: string;
  status: ChapterStatus;
};

// Real NCERT Class 11 Physics syllabus (current rationalized CBSE
// curriculum, 14 official chapters) — "Kinematics" informally combines
// the two motion chapters, matching how this app (and most JEE/NEET
// coaching material) already refers to that pair as one unit elsewhere.
const CHAPTERS: Chapter[] = [
  { number: '01', title: 'Units & Measurement', status: 'done' },
  { number: '02', title: 'Kinematics', status: 'new' },
  { number: '03', title: 'Laws of Motion', status: 'new' },
  { number: '04', title: 'Work, Energy & Power', status: 'new' },
  { number: '05', title: 'Rotational Motion', status: 'new' },
  { number: '06', title: 'Gravitation', status: 'new' },
  { number: '07', title: 'Mechanical Properties of Solids', status: 'new' },
  { number: '08', title: 'Mechanical Properties of Fluids', status: 'new' },
  { number: '09', title: 'Thermal Properties of Matter', status: 'new' },
  { number: '10', title: 'Thermodynamics', status: 'new' },
  { number: '11', title: 'Kinetic Theory', status: 'new' },
  { number: '12', title: 'Oscillations', status: 'new' },
  { number: '13', title: 'Waves', status: 'new' },
];

const CLASSES = ['Class 11', 'Class 12'] as const;
const SUBJECTS = ['Physics', 'Chemistry', 'Maths'] as const;

export default function LessonsScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const [activeClass, setActiveClass] = useState<(typeof CLASSES)[number]>('Class 11');
  const [activeSubject, setActiveSubject] = useState<(typeof SUBJECTS)[number]>('Physics');

  const openChapter = (chapter: Chapter) =>
    router.push({ pathname: '/entering-lesson', params: { chapterTitle: chapter.title } });

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.content}>
          <View style={styles.headerRow}>
            <Text style={styles.heading}>Lessons</Text>
            <View style={styles.jeePill}>
              <LockIcon size={scale(11)} color={colors.slate} />
              <Text style={styles.jeePillText}>JEE Main</Text>
            </View>
          </View>

          <View style={styles.subjectRow}>
            {SUBJECTS.map((subject) => (
              <PressableScale key={subject} onPress={() => setActiveSubject(subject)}>
                <View
                  style={[
                    styles.subjectPill,
                    activeSubject === subject && styles.subjectPillActive,
                  ]}>
                  <Text
                    style={[
                      styles.subjectPillText,
                      activeSubject === subject && styles.subjectPillTextActive,
                    ]}>
                    {subject}
                  </Text>
                </View>
              </PressableScale>
            ))}
          </View>

          <View style={styles.classRow}>
            <SlidingToggle
              options={CLASSES}
              value={activeClass}
              onChange={setActiveClass}
              trackStyle={styles.classTrack}
              thumbStyle={styles.classThumb}
              pillStyle={styles.classPill}
              textStyle={styles.classPillText}
              textActiveStyle={styles.classPillTextActive}
            />
            <Text style={styles.chaptersCount}>13 chapters</Text>
          </View>

          <ScrollView
            style={styles.listWrap}
            contentContainerStyle={styles.listContent}
            showsVerticalScrollIndicator={false}>
            {CHAPTERS.map((chapter, index) => (
              <PressableScale
                key={chapter.number}
                onPress={() => openChapter(chapter)}
                style={[styles.row, index < CHAPTERS.length - 1 && styles.rowDivider]}>
                <Text style={styles.rowNumber}>{chapter.number}</Text>
                <View style={styles.rowTitleWrap}>
                  <Text style={styles.rowTitle}>{chapter.title}</Text>
                </View>
                {chapter.status === 'done' && (
                  <View style={styles.doneBadge}>
                    <CheckIcon size={scale(9)} color="#157A45" strokeWidth={3} />
                    <Text style={styles.doneBadgeText}>Done</Text>
                  </View>
                )}
                {chapter.status === 'new' && (
                  <View style={styles.newBadge}>
                    <Text style={styles.newBadgeText}>New</Text>
                  </View>
                )}
              </PressableScale>
            ))}
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  );
}

function LockIcon({ size, color }: { size: number; color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Rect
        x={5}
        y={11}
        width={14}
        height={9}
        rx={2}
        stroke={color}
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path d="M8 11V8a4 4 0 0 1 8 0v3" stroke={color} strokeWidth={2} strokeLinecap="round" />
    </Svg>
  );
}

// Same ink triple + border treatment as the Home redesign — see
// app/(tabs)/index.tsx.
const hairline = (alpha: number) => `rgba(28,25,20,${alpha})`;

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#fff',
    },
    safeArea: {
      flex: 1,
    },
    content: {
      flex: 1,
      paddingTop: verticalScale(12),
      paddingHorizontal: scale(20),
    },
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
    jeePill: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(6),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.12)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(6),
      paddingHorizontal: scale(12),
      backgroundColor: '#fff',
    },
    jeePillText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(11),
      color: colors.slate,
    },
    classRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
      marginTop: verticalScale(12),
    },
    classTrack: {
      gap: scale(3),
      padding: scale(3),
      backgroundColor: 'rgba(28,26,22,.055)',
      borderRadius: scale(99),
    },
    classThumb: {
      backgroundColor: '#fff',
      borderRadius: scale(99),
      borderWidth: 1,
      borderColor: hairline(0.13),
    },
    classPill: {
      paddingVertical: verticalScale(6),
      paddingHorizontal: scale(14),
      borderRadius: scale(99),
    },
    classPillText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(12),
      color: colors.slate,
    },
    classPillTextActive: {
      fontFamily: 'AnekLatin_700Bold',
      color: colors.ink,
    },
    chaptersCount: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(11),
      color: colors.faint,
    },
    subjectRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(7),
      marginTop: verticalScale(16),
    },
    subjectPill: {
      paddingVertical: verticalScale(6),
      paddingHorizontal: scale(14),
      borderRadius: scale(99),
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.14)',
      backgroundColor: '#fff',
    },
    subjectPillActive: {
      borderWidth: 0,
      backgroundColor: '#1C1A16',
    },
    subjectPillText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(12),
      color: colors.slate,
    },
    subjectPillTextActive: {
      fontFamily: 'AnekLatin_700Bold',
      color: colors.paper,
    },
    listWrap: {
      flex: 1,
      minHeight: 0,
      marginTop: verticalScale(24),
    },
    listContent: {
      paddingBottom: verticalScale(130),
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      paddingVertical: verticalScale(14),
      paddingHorizontal: scale(4),
    },
    rowDivider: {
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.1)',
      borderStyle: 'dashed',
    },
    rowNumber: {
      width: scale(22),
      fontFamily: 'Kalam_700Bold',
      fontSize: scale(12),
      color: '#C2BCAF',
    },
    rowTitleWrap: {
      flex: 1,
      minWidth: 0,
    },
    rowTitle: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(14),
      color: colors.ink,
    },
    doneBadge: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(5),
      backgroundColor: 'rgba(28,155,87,.1)',
      borderWidth: 1,
      borderColor: 'rgba(28,155,87,.3)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(3),
      paddingHorizontal: scale(9),
    },
    doneBadgeText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(10),
      color: '#157A45',
    },
    newBadge: {
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.14)',
      borderRadius: scale(99),
      paddingVertical: verticalScale(3),
      paddingHorizontal: scale(9),
    },
    newBadgeText: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(10),
      color: colors.slate,
    },
  });
}
