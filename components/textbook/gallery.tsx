import { router } from 'expo-router';
import { useEffect, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { PressableScale } from '@/components/pressable-scale';
import { StateCard } from '@/components/states';
import { BOOK_NAME, BookCover, bookSize, type BookLevel, type BookSubject } from '@/components/textbook/book-cover';
import { VerifiedSeal } from '@/components/textbook/verified-seal';
import { colors } from '@/constants/brand';
import { pageTitle } from '@/constants/page-title';
import { useScale } from '@/constants/scale';
import { friendlyLoadError } from '@/lib/api';
import { getCatalogue, type CatalogueSubject } from '@/lib/drona';
import { getProfile } from '@/lib/profile';
import { isChapterReady, textbookSubjects } from '@/lib/textbooks';

/**
 * THE TEXTBOOKS TAB: A GALLERY OF BOOKS (Nikhil, 9 Nov 2026).
 *
 * Every book at once, as they sit on a desk: Class 11 and Class 12 each on
 * its own shelf, three books to a row, the name and the number of chapters
 * ready under each. A book opens its chapter list (app/textbook-book.tsx);
 * a chapter opens exactly as it did from the carousel this replaced
 * (components/textbook/shelf.tsx, kept but no longer reached).
 */

const ORDER: BookSubject[] = ['physics', 'chemistry', 'mathematics', 'biology'];

export function TextbooksGallery() {
  const { scale } = useScale();
  const { width } = useWindowDimensions();
  const s = useMemo(() => createStyles(scale), [scale]);

  const [subjects, setSubjects] = useState<string[] | null>(null);
  const [catalogue, setCatalogue] = useState<CatalogueSubject[] | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [attempt, setAttempt] = useState(0);

  useEffect(() => {
    let cancelled = false;
    getProfile()
      .then((p) => !cancelled && setSubjects(textbookSubjects(p.exam)))
      // The JEE trio is the safe default when the profile will not load.
      .catch(() => !cancelled && setSubjects(['physics', 'chemistry', 'mathematics']));
    setError(null);
    getCatalogue()
      .then((c) => !cancelled && setCatalogue(c))
      .catch((err) => !cancelled && setError(friendlyLoadError(err, 'chapters')));
    return () => {
      cancelled = true;
    };
  }, [attempt]);

  const books = ORDER.filter((b) => subjects?.includes(b));
  const chaptersOf = (key: string, level: BookLevel) =>
    (catalogue ?? [])
      .find((g) => g.subject.trim().toLowerCase() === key)
      ?.chapters.filter((c) => (c.class_level ?? 11) === level) ?? [];
  const readyCount = (key: string, level: BookLevel) =>
    chaptersOf(key, level).filter((c) => isChapterReady(key, level, c.name)).length;

  const pad = scale(24);
  const gap = scale(16);
  const coverW = Math.floor((width - pad * 2 - gap * 2) / 3 / 1.04);
  const slot = bookSize(coverW);

  return (
    <SafeAreaView style={s.screen} edges={['top']}>
      <View style={s.header}>
        <Text style={s.title}>Textbooks</Text>
      </View>
      {error ? (
        <View style={s.state}>
          <StateCard glyph="retry" title="Couldn't load the books" line={error} action={{ label: 'Try again', onPress: () => setAttempt((n) => n + 1) }} />
        </View>
      ) : (
        <ScrollView contentContainerStyle={s.content} showsVerticalScrollIndicator={false}>
          {([11, 12] as const).map((level) => (
            <View key={level} style={level === 12 ? s.sectionNext : undefined}>
              <Text style={s.overline}>Class {level}</Text>
              <View style={[s.row, { columnGap: gap }]}>
                {books.map((b) => {
                  const ready = readyCount(b, level);
                  const total = chaptersOf(b, level).length;
                  return (
                    <PressableScale
                      key={b}
                      style={{ width: slot.width }}
                      accessibilityRole="button"
                      accessibilityLabel={`${BOOK_NAME[b]}, Class ${level}. ${ready} chapters.`}
                      onPress={() => router.push({ pathname: '/textbook-book', params: { subject: b, classLevel: String(level) } })}>
                      <BookCover subject={b} level={level} w={coverW} />
                      <View style={s.labelRow}>
                        <Text style={s.name} numberOfLines={1}>
                          {b === 'mathematics' ? 'Maths' : BOOK_NAME[b]}
                        </Text>
                        <Svg viewBox="0 0 24 24" width={scale(13)} height={scale(13)} fill="none">
                          <Path d="M9 6l6 6-6 6" stroke={colors.slate} strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" />
                        </Svg>
                      </View>
                      <Text style={s.meta}>
                        {!catalogue ? ' ' : ready > 0 ? `${ready} chapter${ready === 1 ? '' : 's'}` : total > 0 ? 'Being written' : 'Coming soon'}
                      </Text>
                    </PressableScale>
                  );
                })}
              </View>
            </View>
          ))}
          {/* How the books are made, said plainly: the best AI writes them,
              teachers check them. The tick is what a student looks for. */}
          <View style={s.verified}>
            <VerifiedSeal size={scale(34)} />
            <View style={s.verifiedText}>
              <Text style={s.verifiedTitle}>Textbooks verified by teachers</Text>
              <Text style={s.verifiedLine}>Written with the best AI models, then checked by teachers, chapter by chapter.</Text>
            </View>
          </View>
        </ScrollView>
      )}
    </SafeAreaView>
  );
}

function createStyles(scale: (n: number) => number) {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: '#fff' },
    header: { paddingTop: scale(12), paddingHorizontal: scale(24), minHeight: scale(40), justifyContent: 'center' },
    title: pageTitle(scale),
    state: { paddingHorizontal: scale(24), paddingTop: scale(24) },
    content: { paddingHorizontal: scale(24), paddingTop: scale(20), paddingBottom: scale(140) },
    sectionNext: { marginTop: scale(32) },
    overline: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(11),
      lineHeight: scale(14),
      letterSpacing: scale(1.1),
      textTransform: 'uppercase',
      color: colors.slate,
    },
    row: { flexDirection: 'row', flexWrap: 'wrap', rowGap: scale(24), marginTop: scale(14) },
    labelRow: { flexDirection: 'row', alignItems: 'center', gap: scale(3), marginTop: scale(10) },
    name: { flexShrink: 1, fontFamily: 'Onest_600SemiBold', fontSize: scale(15), lineHeight: scale(20), color: colors.ink },
    meta: { fontFamily: 'Onest_400Regular', fontSize: scale(13), lineHeight: scale(18), color: colors.slate },
    verified: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      marginTop: scale(36),
      paddingTop: scale(20),
      borderTopWidth: 1,
      borderTopColor: 'rgba(28,26,22,.08)',
    },
    verifiedText: { flex: 1, gap: scale(2) },
    verifiedTitle: { fontFamily: 'Onest_600SemiBold', fontSize: scale(15), lineHeight: scale(22), color: colors.ink },
    verifiedLine: { fontFamily: 'Onest_400Regular', fontSize: scale(13), lineHeight: scale(18), color: colors.slate },
  });
}
