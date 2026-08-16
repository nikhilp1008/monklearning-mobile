import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { ArrowRightIcon } from '@/components/arrow-right-icon';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

const TOPICS = [
  "Drift velocity & Ohm's law",
  'Resistance & resistivity',
  'Series & parallel circuits',
  "Kirchhoff's laws",
  'Wheatstone bridge',
  'Meter bridge & potentiometer',
  'EMF & internal resistance',
  'Heating effects of current',
];

const TALKS = [
  { title: 'EMF vs terminal voltage', when: '2d ago' },
  { title: 'Why a fuse wire melts first', when: 'last week' },
];

export default function TopicSheetScreen() {
  const params = useLocalSearchParams<{
    chapterId?: string;
    chapterNumber?: string;
    chapterTitle?: string;
    subject?: string;
    classLabel?: string;
  }>();
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const [selected, setSelected] = useState<string | null>(null);

  const chapterId = params.chapterId;
  const chapterNumber = params.chapterNumber ?? '03';
  const chapterTitle = params.chapterTitle ?? 'Current Electricity';
  const subject = params.subject ?? 'Physics';
  const classLabel = params.classLabel ?? 'Class 12';

  // TOPICS below is still a placeholder list (not the real per-chapter
  // subtopics from /drona/catalogue) — replacing it is a separate follow-up.
  // Whatever the student taps/free-talks still reaches the real backend: it's
  // forwarded as the scoping conversation's opening line in entering-classroom.
  const goToClassroom = (initialUtterance?: string) =>
    router.push({
      pathname: '/entering-classroom',
      params: { chapterId: chapterId ?? '', chapterTitle, initialUtterance: initialUtterance ?? '' },
    });

  return (
    <View style={styles.root}>
      <StatusBar style="dark" />
      <Pressable style={styles.scrim} onPress={() => router.back()} />
      <View style={styles.sheet}>
        <SafeAreaView style={styles.flex} edges={['bottom']}>
          <View style={styles.handle} />
          <View style={styles.headerRow}>
            <View style={styles.headerTextBlock}>
              <Text style={styles.headerOverline}>
                Chapter {chapterNumber} · {subject} · {classLabel}
              </Text>
              <Text style={styles.headerTitle}>{chapterTitle}</Text>
            </View>
            <Text style={styles.headerHint}>pick one topic</Text>
          </View>

          <ScrollView style={styles.flex} showsVerticalScrollIndicator={false}>
            <View style={styles.grid}>
              {TOPICS.map((topic) => {
                const isSelected = selected === topic;
                const dimmed = selected !== null && !isSelected;
                return (
                  <Pressable
                    key={topic}
                    onPress={() => setSelected(topic)}
                    style={[
                      styles.topicCard,
                      isSelected && styles.topicCardSelected,
                      dimmed && styles.topicCardDimmed,
                    ]}>
                    <Text
                      style={[styles.topicCardText, isSelected && styles.topicCardTextSelected]}>
                      {topic}
                    </Text>
                    {isSelected && (
                      <View style={styles.topicCheck}>
                        <Svg viewBox="0 0 24 24" width={scale(10)} height={scale(10)} fill="none">
                          <Path
                            d="M5 13l4 4L19 7"
                            stroke="#241a08"
                            strokeWidth={3.4}
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </Svg>
                      </View>
                    )}
                  </Pressable>
                );
              })}
            </View>

            <Pressable
              style={[styles.freetalkRow, selected && styles.dimmedSection]}
              onPress={() => goToClassroom()}>
              <MicIcon size={scale(15)} />
              <Text style={styles.freetalkText}>
                Can&apos;t find your topic? <Text style={styles.freetalkBold}>Just start talking</Text>
              </Text>
              <ArrowRightIcon color={colors.faint} size={scale(13)} />
            </Pressable>

            <View style={[styles.talksSection, selected && styles.dimmedSection]}>
              <Text style={styles.talksOverline}>From your talks</Text>
              <View style={styles.talksList}>
                {TALKS.map((talk) => (
                  <Pressable
                    key={talk.title}
                    style={styles.talkRow}
                    onPress={() => goToClassroom(talk.title)}>
                    <Text style={styles.talkTitle} numberOfLines={1}>
                      {talk.title}
                    </Text>
                    <Text style={styles.talkWhen}>{talk.when}</Text>
                    <ChevronRightIcon size={scale(12)} />
                  </Pressable>
                ))}
              </View>
            </View>
          </ScrollView>

          <View style={styles.footer}>
            <Pressable
              style={[styles.cta, !selected && styles.ctaDisabled]}
              disabled={!selected}
              onPress={() => goToClassroom(selected ?? undefined)}>
              <Text style={[styles.ctaText, !selected && styles.ctaTextDisabled]}>
                {selected ? `Start with ${selected}` : 'Pick a topic to start'}
              </Text>
              {selected && <ArrowRightIcon color={colors.paper} size={scale(15)} />}
            </Pressable>
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
}

function MicIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M12 3a4 4 0 0 1 4 4v4a4 4 0 0 1-8 0V7a4 4 0 0 1 4-4Z"
        stroke={colors.slate}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M5 11a7 7 0 0 0 14 0M12 18v3"
        stroke={colors.slate}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function ChevronRightIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 16 16" width={size} height={size} fill="none">
      <Path
        d="M5.5 3 10.5 8 5.5 13"
        stroke={colors.faint}
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    root: {
      flex: 1,
    },
    flex: {
      flex: 1,
    },
    scrim: {
      ...StyleSheet.absoluteFillObject,
      backgroundColor: 'rgba(28,26,22,.42)',
    },
    sheet: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      top: verticalScale(96),
      backgroundColor: colors.paper,
      borderTopLeftRadius: scale(24),
      borderTopRightRadius: scale(24),
      paddingHorizontal: scale(20),
      shadowColor: '#16130E',
      shadowOffset: { width: 0, height: verticalScale(-10) },
      shadowOpacity: 0.25,
      shadowRadius: scale(20),
      elevation: 12,
    },
    handle: {
      width: scale(40),
      height: verticalScale(5),
      borderRadius: scale(99),
      backgroundColor: 'rgba(28,26,22,.18)',
      alignSelf: 'center',
      marginTop: verticalScale(10),
      marginBottom: verticalScale(14),
    },
    headerRow: {
      flexDirection: 'row',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      gap: scale(10),
    },
    headerTextBlock: {
      minWidth: 0,
    },
    headerOverline: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(9),
      letterSpacing: scale(1.26),
      textTransform: 'uppercase',
      color: colors.faint,
    },
    headerTitle: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: scale(21),
      letterSpacing: scale(-0.42),
      color: colors.ink,
      marginTop: verticalScale(3),
    },
    headerHint: {
      flexShrink: 0,
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(11),
      color: colors.faint,
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: scale(9),
      marginTop: verticalScale(16),
    },
    topicCard: {
      flexBasis: '48%',
      flexGrow: 1,
      minHeight: verticalScale(58),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: scale(8),
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.12)',
      borderRadius: scale(13),
      paddingVertical: verticalScale(12),
      paddingHorizontal: scale(14),
    },
    topicCardSelected: {
      backgroundColor: '#FCF4E0',
      borderWidth: scale(1.6),
      borderColor: colors.marigold,
      shadowColor: colors.marigold,
      shadowOffset: { width: 0, height: verticalScale(4) },
      shadowOpacity: 0.35,
      shadowRadius: scale(6),
      elevation: 3,
    },
    topicCardDimmed: {
      opacity: 0.6,
    },
    topicCardText: {
      flex: 1,
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(13),
      lineHeight: scale(17.55),
      color: colors.ink,
    },
    topicCardTextSelected: {
      fontFamily: 'AnekLatin_700Bold',
    },
    topicCheck: {
      width: scale(17),
      height: scale(17),
      flexShrink: 0,
      borderRadius: scale(8.5),
      backgroundColor: colors.marigold,
      alignItems: 'center',
      justifyContent: 'center',
    },
    dimmedSection: {
      opacity: 0.65,
    },
    freetalkRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(9),
      paddingVertical: verticalScale(13),
      paddingHorizontal: scale(2),
      marginTop: verticalScale(8),
      borderTopWidth: 1,
      borderTopColor: 'rgba(28,26,22,.08)',
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.08)',
    },
    freetalkText: {
      flex: 1,
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(13),
      color: colors.slate,
    },
    freetalkBold: {
      fontFamily: 'AnekLatin_700Bold',
      color: colors.ink,
      textDecorationLine: 'underline',
      textDecorationColor: 'rgba(238,163,31,.6)',
    },
    talksSection: {
      marginTop: verticalScale(16),
      paddingBottom: verticalScale(16),
    },
    talksOverline: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: scale(9),
      letterSpacing: scale(1.26),
      textTransform: 'uppercase',
      color: colors.faint,
      marginBottom: verticalScale(9),
    },
    talksList: {
      flexDirection: 'column',
      gap: verticalScale(7),
    },
    talkRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(11),
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: 'rgba(28,26,22,.08)',
      borderRadius: scale(12),
      paddingVertical: verticalScale(13),
      paddingHorizontal: scale(15),
    },
    talkTitle: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(13.5),
      color: colors.ink,
    },
    talkWhen: {
      flexShrink: 0,
      fontFamily: 'AnekLatin_400Regular',
      fontSize: scale(11),
      color: colors.faint,
    },
    footer: {
      flexShrink: 0,
      paddingTop: verticalScale(12),
      paddingBottom: verticalScale(10),
      backgroundColor: colors.paper,
    },
    cta: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: scale(9),
      width: '100%',
      height: verticalScale(52),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
      shadowColor: colors.ink,
      shadowOffset: { width: 0, height: verticalScale(6) },
      shadowOpacity: 0.3,
      shadowRadius: scale(10),
      elevation: 6,
    },
    ctaDisabled: {
      backgroundColor: 'rgba(28,26,22,.07)',
      shadowOpacity: 0,
      elevation: 0,
    },
    ctaText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: scale(16),
      color: colors.paper,
    },
    ctaTextDisabled: {
      color: colors.faint,
    },
  });
}
