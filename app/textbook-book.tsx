import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect, useMemo, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown, useAnimatedScrollHandler, useSharedValue } from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { SettingsHeader } from '@/components/settings-page';
import { ListSkeleton, StateCard, StateLine } from '@/components/states';
import { BOOK_NAME, BookCover, type BookLevel, type BookSubject } from '@/components/textbook/book-cover';
import { VerifiedSeal } from '@/components/textbook/verified-seal';
import { colors } from '@/constants/brand';
import { READ_LINE, READ_SIZE } from '@/constants/reading';
import { useScale } from '@/constants/scale';
import { friendlyLoadError } from '@/lib/api';
import { opensOnChoice } from '@/lib/chapter-essentials';
import { getCatalogue, type CatalogueSubject } from '@/lib/drona';
import { isChapterReady } from '@/lib/textbooks';

/**
 * ONE BOOK'S CHAPTERS (Nikhil, 9 Nov 2026), opened from the Textbooks gallery.
 *
 * The book itself at the top, so the student knows which book they are in,
 * then its chapters. A written chapter opens exactly as it did from the old
 * carousel: the reader, or for one chapter the "full or essentials" choice
 * first (lib/chapter-essentials.ts), with the same params, so nothing past
 * this screen changed. Chapters still being written are listed and say so.
 */
export default function TextbookBookScreen() {
  const params = useLocalSearchParams<{ subject?: string; classLevel?: string }>();
  const subject = ((params.subject ?? 'physics').toLowerCase() as BookSubject) || 'physics';
  const level: BookLevel = params.classLevel === '12' ? 12 : 11;
  const { scale } = useScale();
  const s = useMemo(() => createStyles(scale), [scale]);

  const [catalogue, setCatalogue] = useState<CatalogueSubject[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setError(null);
    getCatalogue()
      .then((c) => !cancelled && setCatalogue(c))
      .catch((err) => !cancelled && setError(friendlyLoadError(err, 'chapters')));
    return () => {
      cancelled = true;
    };
  }, [attempt]);

  const chapters = useMemo(
    () =>
      (catalogue ?? [])
        .find((g) => g.subject.trim().toLowerCase() === subject)
        ?.chapters.filter((c) => (c.class_level ?? 11) === level) ?? [],
    [catalogue, subject, level]
  );
  const ready = chapters.filter((c) => isChapterReady(subject, level, c.name)).length;
  const scrollY = useSharedValue(0);
  const onScroll = useAnimatedScrollHandler((e) => {
    scrollY.value = e.contentOffset.y;
  });

  return (
    <View style={s.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={s.screen} edges={['top']}>
        {/* The subject is the page's title, beside Back, as on every other
            pushed screen (Exam scope, Settings). */}
        <SettingsHeader title={BOOK_NAME[subject]} scrollY={scrollY} />

        <Animated.ScrollView
          contentContainerStyle={s.content}
          showsVerticalScrollIndicator={false}
          onScroll={onScroll}
          scrollEventThrottle={16}>
          <View style={s.hero}>
            <BookCover subject={subject} level={level} w={scale(112)} />
            <View style={s.heroText}>
              <Text style={s.overline}>Class {level} textbook</Text>
              <Text style={s.count}>
                {!catalogue
                  ? ' '
                  : ready === chapters.length
                    ? `${ready} chapters`
                    : `${ready} of ${chapters.length} chapters ready`}
              </Text>
              <Text style={s.meta}>Follows the NCERT syllabus, chapter for chapter.</Text>
              <View style={s.sealRow}>
                <VerifiedSeal size={scale(18)} />
                <Text style={s.sealText}>Verified by teachers</Text>
              </View>
            </View>
          </View>

          <Text style={[s.overline, s.listHead]}>Chapters</Text>

          {error ? (
            <View style={s.state}>
              <StateCard glyph="retry" title="Couldn't load the chapters" line={error} action={{ label: 'Try again', onPress: () => setAttempt((n) => n + 1) }} />
            </View>
          ) : !catalogue ? (
            <View style={s.state}>
              <ListSkeleton rows={6} thumb={false} />
            </View>
          ) : chapters.length === 0 ? (
            <View style={s.state}>
              <StateLine glyph="book" text="No chapters here yet. They're being written." />
            </View>
          ) : (
            <View style={s.list}>
              {chapters.map((c, i) => {
                const open = isChapterReady(subject, level, c.name);
                return (
                  <Animated.View key={c.id} entering={FadeInDown.delay(Math.min(i, 10) * 22).duration(300)}>
                    <Pressable
                      disabled={!open}
                      accessibilityRole="button"
                      accessibilityState={{ disabled: !open }}
                      style={({ pressed }) => [s.row, pressed && s.rowPressed]}
                      onPress={() =>
                        router.push({
                          pathname: opensOnChoice(subject, level, i) ? '/textbook-chapter' : '/textbook-reader',
                          params: {
                            subject,
                            classLevel: String(level),
                            title: c.name,
                            number: String(i + 1).padStart(2, '0'),
                          },
                        })
                      }>
                      <Text style={s.rowNumber}>{i + 1}</Text>
                      <Text style={[s.rowTitle, !open && s.rowTitleSoon]}>{c.name}</Text>
                      {open ? (
                        <Svg viewBox="0 0 16 16" width={scale(15)} height={scale(15)} fill="none">
                          <Path d="M6 3l5 5-5 5" stroke="#9C988C" strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round" />
                        </Svg>
                      ) : (
                        <View style={s.soonTag}>
                          <Text style={s.soonText} maxFontSizeMultiplier={1.2}>
                            BEING WRITTEN
                          </Text>
                        </View>
                      )}
                    </Pressable>
                  </Animated.View>
                );
              })}
            </View>
          )}
        </Animated.ScrollView>
      </SafeAreaView>
    </View>
  );
}

function createStyles(scale: (n: number) => number) {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: '#fff' },
    content: { paddingBottom: scale(60) },
    hero: { flexDirection: 'row', alignItems: 'center', gap: scale(20), paddingHorizontal: scale(24), paddingTop: scale(16), paddingBottom: scale(28) },
    heroText: { flex: 1, gap: scale(4) },
    count: { fontFamily: 'Onest_600SemiBold', fontSize: scale(16), lineHeight: scale(22), color: colors.ink, marginTop: scale(2) },
    sealRow: { flexDirection: 'row', alignItems: 'center', gap: scale(6), marginTop: scale(10) },
    sealText: { fontFamily: 'Onest_600SemiBold', fontSize: scale(13), lineHeight: scale(18), color: colors.ink },
    listHead: { paddingHorizontal: scale(24), marginBottom: scale(10), color: colors.slate },
    overline: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(11),
      lineHeight: scale(14),
      letterSpacing: scale(1.1),
      textTransform: 'uppercase',
      color: colors.amberText,
    },
    meta: { fontFamily: 'Onest_400Regular', fontSize: scale(13), lineHeight: scale(18), color: colors.slate },
    state: { paddingHorizontal: scale(24), paddingTop: scale(8) },
    list: { borderTopWidth: 1, borderTopColor: 'rgba(28,26,22,.08)' },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(14),
      minHeight: 54,
      paddingVertical: scale(13),
      paddingLeft: scale(24),
      paddingRight: scale(22),
      borderBottomWidth: 1,
      borderBottomColor: 'rgba(28,26,22,.08)',
    },
    rowPressed: { opacity: 0.5 },
    rowNumber: { width: scale(24), textAlign: 'right', fontFamily: 'Onest_500Medium', fontSize: scale(13), color: '#B3AB98', fontVariant: ['tabular-nums'] },
    rowTitle: { flex: 1, minWidth: 0, fontFamily: 'Onest_500Medium', fontSize: READ_SIZE, lineHeight: READ_LINE - 2, color: colors.ink },
    rowTitleSoon: { color: '#8C867A' },
    soonTag: {
      paddingHorizontal: scale(8),
      paddingVertical: scale(4),
      borderRadius: scale(7),
      borderWidth: StyleSheet.hairlineWidth * 2,
      borderColor: 'rgba(28,26,22,.14)',
    },
    soonText: { fontFamily: 'Onest_700Bold', fontSize: scale(10.5), letterSpacing: scale(0.8), color: '#5F5A50', includeFontPadding: false },
  });
}
