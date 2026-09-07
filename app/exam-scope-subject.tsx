import { useLocalSearchParams } from 'expo-router';
import { useMemo, useState } from 'react';
import { LayoutAnimation, StyleSheet, Text, View } from 'react-native';

import { PressableScale } from '@/components/pressable-scale';
import { SettingsPage } from '@/components/settings-page';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { EXAM_SCOPE, type ScopeExam } from '@/lib/exam-scope';
import { type ScopeChapter, type SubjectKey, subjectScope } from '@/lib/exam-scope-chapters';

/**
 * One subject's chapter scope.
 *
 * The research document renders this as a table with "IN SCOPE" repeated
 * down every row — accurate, and unreadable. Two things replace it here.
 *
 * First a chapter map: one small tile per chapter, so the shape of the
 * answer arrives before any reading. Almost every tile is solid, which is
 * the finding — after 2023, what is in your book is what is examined.
 *
 * Then the spine: chapters hung off a rail, split by class the way a
 * student's shelf is. Ordinary chapters stay quiet; only the exceptions
 * speak — amber where a topic is trimmed out, green where this exam keeps
 * something the other one drops. Tapping an amber chapter says exactly
 * what is cut, which is the question a chapter-level list can never answer.
 */

type TileState = 'in' | 'trimmed' | 'kept' | 'archived';

function stateOf(chapter: ScopeChapter): TileState {
  if (chapter.trims?.length) return 'trimmed';
  if (chapter.kept?.length) return 'kept';
  return 'in';
}

export default function ExamScopeSubjectScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const params = useLocalSearchParams<{ subject?: string; exam?: string }>();

  const exam: ScopeExam = params.exam === 'neet' ? 'neet' : 'jee';
  const subject = subjectScope(exam, (params.subject ?? 'physics') as SubjectKey);
  const [openChapter, setOpenChapter] = useState<string | null>(null);

  if (!subject) {
    return (
      <SettingsPage title="Subject">
        <Text style={styles.summary}>This subject isn&apos;t part of {EXAM_SCOPE[exam].label}.</Text>
      </SettingsPage>
    );
  }

  const trimmed = subject.chapters.filter((c) => c.trims?.length);
  const kept = subject.chapters.filter((c) => c.kept?.length);
  const class11 = subject.chapters.filter((c) => c.classLevel === 11);
  const class12 = subject.chapters.filter((c) => c.classLevel === 12);

  const toggle = (name: string) => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    setOpenChapter((current) => (current === name ? null : name));
  };

  return (
    <SettingsPage title={subject.label}>
      <Text style={styles.summary}>
        <Text style={styles.summaryStrong}>
          All {subject.chapters.length} chapters in your {subject.label} books
        </Text>{' '}
        are examinable in {EXAM_SCOPE[exam].label}
        {trimmed.length > 0
          ? ` — ${trimmed.length} of them with a topic trimmed out.`
          : '.'}
      </Text>

      {/* The map: the whole subject before a single word is read. */}
      <View style={styles.map}>
        {subject.chapters.map((chapter, i) => (
          <View
            key={`${chapter.name}-${chapter.classLevel}-${i}`}
            style={[
              styles.tile,
              stateOf(chapter) === 'trimmed' && styles.tileTrimmed,
              stateOf(chapter) === 'kept' && styles.tileKept,
            ]}
          />
        ))}
        {subject.archived.map((entry) => (
          <View key={entry.name} style={[styles.tile, styles.tileArchived]} />
        ))}
      </View>

      <View style={styles.legend}>
        <Legend styles={styles} kind="in" label="In your exam" />
        {trimmed.length > 0 && <Legend styles={styles} kind="trimmed" label="Topic trimmed" />}
        {kept.length > 0 && <Legend styles={styles} kind="kept" label="Yours only" />}
        {subject.archived.length > 0 && (
          <Legend styles={styles} kind="archived" label="Left the books" />
        )}
      </View>

      {[
        { level: 11 as const, list: class11 },
        { level: 12 as const, list: class12 },
      ].map(({ level, list }) =>
        list.length === 0 ? null : (
          <View key={level}>
            <View style={styles.classHeadRow}>
              <Text style={styles.classHead}>Class {level}</Text>
              <Text style={styles.classCount}>{list.length} chapters</Text>
            </View>

            <View style={styles.spine}>
              <View style={styles.rail} />
              {list.map((chapter, i) => {
                const state = stateOf(chapter);
                const open = openChapter === `${chapter.name}-${level}`;
                const interactive = state === 'trimmed' || state === 'kept';
                const Row = interactive ? PressableScale : View;
                return (
                  <Row
                    key={`${chapter.name}-${level}-${i}`}
                    {...(interactive
                      ? { onPress: () => toggle(`${chapter.name}-${level}`) }
                      : {})}
                    style={styles.chapterRow}>
                    <View
                      style={[
                        styles.dot,
                        state === 'trimmed' && styles.dotTrimmed,
                        state === 'kept' && styles.dotKept,
                      ]}
                    />
                    <View style={styles.chapterTextBlock}>
                      <View style={styles.chapterTitleRow}>
                        <Text style={styles.chapterName}>{chapter.name}</Text>
                        {chapter.heavy && <Text style={styles.heavyTag}>heavy</Text>}
                      </View>

                      {interactive && !open && (
                        <Text
                          style={[
                            styles.hint,
                            state === 'kept' ? styles.hintKept : styles.hintTrimmed,
                          ]}>
                          {state === 'trimmed'
                            ? `${chapter.trims!.length} topic${
                                chapter.trims!.length === 1 ? '' : 's'
                              } not examined · tap`
                            : 'the other exam drops this · tap'}
                        </Text>
                      )}

                      {open && state === 'trimmed' && (
                        <View style={styles.detailBox}>
                          <Text style={styles.detailLabel}>Not examined in {EXAM_SCOPE[exam].label}</Text>
                          {chapter.trims!.map((t) => (
                            <Text key={t} style={styles.detailItem}>
                              {t}
                            </Text>
                          ))}
                          <Text style={styles.detailNote}>
                            Still in your CBSE boards — learn it lightly, don&apos;t skip it.
                          </Text>
                        </View>
                      )}

                      {open && state === 'kept' && (
                        <View style={[styles.detailBox, styles.detailBoxKept]}>
                          <Text style={[styles.detailLabel, styles.detailLabelKept]}>
                            Examined in {EXAM_SCOPE[exam].label}
                          </Text>
                          {chapter.kept!.map((t) => (
                            <Text key={t} style={styles.detailItem}>
                              {t}
                            </Text>
                          ))}
                          <Text style={styles.detailNote}>
                            {exam === 'neet' ? 'JEE Main' : 'NEET UG'} students skip this. You
                            don&apos;t.
                          </Text>
                        </View>
                      )}
                    </View>
                  </Row>
                );
              })}
            </View>
          </View>
        )
      )}

      {subject.boardOnly && subject.boardOnly.length > 0 && (
        <View style={styles.noteCard}>
          <Text style={styles.noteCardText}>
            <Text style={styles.noteCardStrong}>
              {subject.boardOnly.map((c) => c.name).join(', ')}
            </Text>{' '}
            is still a live chapter in your Class {subject.boardOnly[0].classLevel} book and a
            board topic — but it isn&apos;t in the {EXAM_SCOPE[exam].label} syllabus at all.
          </Text>
        </View>
      )}

      {subject.archived.length > 0 && (
        <>
          <View style={styles.classHeadRow}>
            <Text style={styles.classHead}>Left the books in 2023</Text>
            <Text style={styles.classCount}>{subject.archived.length}</Text>
          </View>
          <Text style={styles.archivedIntro}>
            Deleted from NCERT, so they&apos;re in neither exam and not in your boards. Old
            coaching material still teaches them.
          </Text>
          <View style={styles.archivedList}>
            {subject.archived.map((entry) => (
              <View key={entry.name} style={styles.archivedRow}>
                <Text style={styles.archivedName}>{entry.name}</Text>
                <Text style={styles.archivedClass}>Class {entry.classLevel}</Text>
              </View>
            ))}
          </View>
          {subject.archived
            .filter((e) => e.survives)
            .map((e) => (
              <View key={e.name} style={styles.noteCard}>
                <Text style={styles.noteCardText}>
                  <Text style={styles.noteCardStrong}>One exception.</Text> {e.survives} — so that
                  part is still examinable even though {e.name} is gone.
                </Text>
              </View>
            ))}
        </>
      )}
    </SettingsPage>
  );
}

function Legend({
  styles,
  kind,
  label,
}: {
  styles: ReturnType<typeof createStyles>;
  kind: TileState;
  label: string;
}) {
  return (
    <View style={styles.legendItem}>
      <View
        style={[
          styles.legendSwatch,
          kind === 'trimmed' && styles.tileTrimmed,
          kind === 'kept' && styles.tileKept,
          kind === 'archived' && styles.tileArchived,
        ]}
      />
      <Text style={styles.legendText}>{label}</Text>
    </View>
  );
}

const hairline = (alpha: number) => `rgba(28,26,22,${alpha})`;

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    summary: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(15),
      lineHeight: scale(22.5),
      color: colors.slate,
      marginTop: verticalScale(4),
    },
    summaryStrong: {
      fontFamily: 'Onest_700Bold',
      color: colors.ink,
    },
    map: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: scale(6),
      marginTop: verticalScale(20),
    },
    tile: {
      width: scale(26),
      height: scale(26),
      borderRadius: scale(7),
      backgroundColor: colors.ink,
    },
    tileTrimmed: {
      backgroundColor: colors.marigold,
    },
    tileKept: {
      backgroundColor: colors.masteryStrong,
    },
    tileArchived: {
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: hairline(0.2),
    },
    legend: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: scale(14),
      marginTop: verticalScale(14),
    },
    legendItem: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(6),
    },
    legendSwatch: {
      width: scale(10),
      height: scale(10),
      borderRadius: scale(3),
      backgroundColor: colors.ink,
    },
    legendText: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(11),
      color: colors.slate,
    },
    classHeadRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: verticalScale(30),
      paddingBottom: verticalScale(8),
      borderBottomWidth: 1,
      borderBottomColor: hairline(0.12),
    },
    classHead: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(9.9),
      letterSpacing: scale(1.05),
      textTransform: 'uppercase',
      color: colors.ink,
    },
    classCount: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(11),
      color: colors.faint,
    },
    spine: {
      position: 'relative',
      paddingLeft: scale(22),
      marginTop: verticalScale(14),
    },
    rail: {
      position: 'absolute',
      left: scale(4),
      top: verticalScale(8),
      bottom: verticalScale(8),
      width: 1,
      backgroundColor: hairline(0.12),
    },
    chapterRow: {
      flexDirection: 'row',
      alignItems: 'flex-start',
      paddingVertical: verticalScale(9),
    },
    dot: {
      position: 'absolute',
      left: -scale(22),
      top: verticalScale(13),
      width: scale(9),
      height: scale(9),
      borderRadius: scale(99),
      backgroundColor: colors.ink,
    },
    dotTrimmed: {
      backgroundColor: colors.marigold,
    },
    dotKept: {
      backgroundColor: colors.masteryStrong,
    },
    chapterTextBlock: {
      flex: 1,
      minWidth: 0,
    },
    chapterTitleRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(8),
    },
    chapterName: {
      flexShrink: 1,
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(14.5),
      lineHeight: scale(20),
      color: colors.ink,
    },
    heavyTag: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(8.1),
      letterSpacing: scale(0.45),
      textTransform: 'uppercase',
      color: colors.amberText,
    },
    hint: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(11.5),
      marginTop: verticalScale(2),
    },
    hintTrimmed: {
      color: colors.amberText,
    },
    hintKept: {
      color: '#157A45',
    },
    detailBox: {
      backgroundColor: '#FCF4E0',
      borderRadius: scale(12),
      paddingVertical: verticalScale(10),
      paddingHorizontal: scale(12),
      marginTop: verticalScale(8),
    },
    detailBoxKept: {
      backgroundColor: 'rgba(28,155,87,.09)',
    },
    detailLabel: {
      fontFamily: 'Onest_800ExtraBold',
      fontSize: scale(8.55),
      letterSpacing: scale(0.6),
      textTransform: 'uppercase',
      color: colors.amberText,
    },
    detailLabelKept: {
      color: '#157A45',
    },
    detailItem: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(14),
      lineHeight: scale(20),
      color: colors.ink,
      marginTop: verticalScale(3),
    },
    detailNote: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(12),
      lineHeight: scale(18),
      color: colors.slate,
      marginTop: verticalScale(6),
    },
    noteCard: {
      backgroundColor: '#FCF4E0',
      borderWidth: 1,
      borderColor: 'rgba(238,163,31,.45)',
      borderRadius: scale(12),
      paddingVertical: verticalScale(12),
      paddingHorizontal: scale(14),
      marginTop: verticalScale(18),
    },
    noteCardText: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(19.5),
      color: colors.amberText,
    },
    noteCardStrong: {
      fontFamily: 'Onest_700Bold',
    },
    archivedIntro: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      lineHeight: scale(19.5),
      color: colors.slate,
      marginTop: verticalScale(10),
    },
    archivedList: {
      marginTop: verticalScale(12),
      gap: verticalScale(10),
    },
    archivedRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(10),
    },
    archivedName: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'Onest_400Regular',
      fontSize: scale(14),
      color: colors.faint,
      textDecorationLine: 'line-through',
    },
    archivedClass: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(10),
      letterSpacing: scale(0.4),
      textTransform: 'uppercase',
      color: colors.faint,
    },
  });
}
