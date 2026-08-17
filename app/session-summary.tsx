import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { usePortraitLock } from '@/hooks/use-landscape-lock';
import { saveNote } from '@/lib/notes';

/**
 * Class dismissed — what the student sees the moment a live class ends.
 *
 * Rebuilt in the same language as the note and solution pages: ruled paper,
 * amber section label, plain rows instead of cards. The old version was from an
 * earlier design era — a badge above the heading saying the same thing twice, a
 * Hinglish line, and four bordered boxes stacked down the screen.
 *
 * Deliberately absent: the class duration. How long a class ran is not an
 * achievement and not something a student acts on; what they answered and what
 * was covered are.
 */

const INK = '#1C1A16';
const INK_70 = '#4A463D';
const INK_50 = '#8A8478';
const PAPER = '#FFFFFF';
const RULE = 'rgba(28,26,22,0.055)';
const HAIR = 'rgba(28,26,22,0.12)';
const AMBER = '#B08420';
const GREEN = '#1C9B57';
const RED = '#DD4433';

const LINE_HEIGHT = 34;
const GUTTER = 24;

type SaveState = 'idle' | 'saving' | 'saved' | 'error';

function RuledGround() {
  const { height } = useWindowDimensions();
  const rows = Math.ceil(height / LINE_HEIGHT) + 1;
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {Array.from({ length: rows }, (_, i) => (
        <View
          key={i}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: (i + 1) * LINE_HEIGHT - 1,
            height: 1,
            backgroundColor: RULE,
          }}
        />
      ))}
    </View>
  );
}

export default function SessionSummaryScreen() {
  // This screen is reached straight from the landscape classroom, so it asks
  // for portrait itself rather than relying on the classroom to restore it on
  // the way out — that restore was timer-based, and losing the race is what
  // made this screen appear in landscape for a moment before snapping.
  const isPortrait = usePortraitLock();
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => createStyles(), []);

  const params = useLocalSearchParams<{
    sessionId?: string;
    chapterTitle?: string;
    summaryPoints?: string;
    mistakesCount?: string;
    questionsAnswered?: string;
  }>();

  const chapterTitle = params.chapterTitle || 'this class';
  const questionsAnswered = Number(params.questionsAnswered) || 0;
  const mistakesCount = Number(params.mistakesCount) || 0;
  const correctCount = Math.max(0, questionsAnswered - mistakesCount);
  const covered = useMemo(() => {
    if (!params.summaryPoints) return [];
    try {
      const parsed = JSON.parse(params.summaryPoints);
      return Array.isArray(parsed) ? parsed.filter((p): p is string => typeof p === 'string') : [];
    } catch {
      return [];
    }
  }, [params.summaryPoints]);

  const [saveState, setSaveState] = useState<SaveState>('idle');
  const [saveError, setSaveError] = useState<string | null>(null);
  const savedNoteId = useRef<string | null>(null);

  const handleSave = async () => {
    if (!params.sessionId || saveState === 'saving') return;
    if (saveState === 'saved') {
      if (savedNoteId.current) {
        router.push({ pathname: '/note-detail', params: { id: savedNoteId.current } });
      }
      return;
    }
    setSaveState('saving');
    setSaveError(null);
    try {
      const note = await saveNote(params.sessionId);
      savedNoteId.current = note.id;
      setSaveState('saved');
    } catch (err) {
      setSaveState('error');
      setSaveError(err instanceof Error ? err.message : 'Could not save this class.');
    }
  };

  const saveLabel =
    saveState === 'saving'
      ? 'Saving…'
      : saveState === 'saved'
        ? 'Saved — open your note'
        : saveState === 'error'
          ? 'Couldn’t save — tap to retry'
          : 'Save to notes';

  if (!isPortrait) {
    return <View style={styles.rotateHold} />;
  }

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <RuledGround />
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          <Text style={styles.heading}>Class dismissed.</Text>
          <Text style={styles.sub}>Good work today — here&apos;s what you covered.</Text>

          <Text style={styles.topic}>{chapterTitle}</Text>

          {/* Plain rows on a hairline rather than bordered cards. Duration is
              gone: it is not something a student can act on. */}
          {(questionsAnswered > 0 || covered.length > 0) && (
            <View style={styles.stats}>
              {questionsAnswered > 0 && (
                <View style={styles.statRow}>
                  <Text style={styles.statValue}>
                    {correctCount}
                    <Text style={styles.statOf}> of {questionsAnswered}</Text>
                  </Text>
                  <Text style={styles.statLabel}>answered in class</Text>
                </View>
              )}
              {covered.length > 0 && (
                <View style={styles.statRow}>
                  <Text style={styles.statValue}>{covered.length}</Text>
                  <Text style={styles.statLabel}>
                    topic{covered.length === 1 ? '' : 's'} covered
                  </Text>
                </View>
              )}
            </View>
          )}

          {covered.length > 0 && (
            <View style={styles.coveredBlock}>
              <Text style={styles.label}>WHAT WE COVERED</Text>
              {covered.map((line, i) => (
                <View key={i} style={styles.coveredRow}>
                  <View style={styles.tick}>
                    <TickIcon />
                  </View>
                  <Text style={styles.coveredText}>{line}</Text>
                </View>
              ))}
            </View>
          )}

          <Text style={styles.foot}>
            {params.sessionId
              ? 'Unsaved classes are kept for seven days, then they go. Saving keeps this board for good.'
              : 'This class wasn’t recorded, so there’s nothing to save.'}
          </Text>

          {!!saveError && <Text style={styles.error}>{saveError}</Text>}
        </ScrollView>
      </SafeAreaView>

      <View style={[styles.actions, { paddingBottom: Math.max(insets.bottom - 16, 12) }]}>
        {!!params.sessionId && (
          <Pressable
            style={[styles.primary, saveState === 'saved' && styles.primarySaved]}
            onPress={handleSave}
            disabled={saveState === 'saving'}>
            <Text style={[styles.primaryText, saveState === 'saved' && styles.primaryTextSaved]}>
              {saveLabel}
            </Text>
          </Pressable>
        )}
        <Pressable onPress={() => router.dismissTo('/')} hitSlop={10}>
          <Text style={styles.dashboardLink}>Go to dashboard</Text>
        </Pressable>
      </View>
    </View>
  );
}

function TickIcon() {
  return (
    <Svg viewBox="0 0 24 24" width={11} height={11} fill="none">
      <Path
        d="M20 6 9 17l-5-5"
        stroke={GREEN}
        strokeWidth={3.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function createStyles() {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: PAPER },
    rotateHold: { flex: 1, backgroundColor: PAPER },
    safeArea: { flex: 1 },
    scroll: { flex: 1, minHeight: 0 },
    scrollContent: { paddingHorizontal: GUTTER, paddingTop: 26, paddingBottom: 40 },

    heading: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: 31,
      letterSpacing: -0.04 * 31,
      lineHeight: 31 * 1.06,
      color: INK,
    },
    sub: {
      marginTop: 8,
      fontFamily: 'AnekLatin_400Regular',
      fontSize: 16,
      lineHeight: 16 * 1.5,
      color: INK_70,
    },
    topic: {
      marginTop: 22,
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: 17,
      color: INK,
    },

    stats: {
      flexDirection: 'row',
      gap: 28,
      marginTop: 18,
      paddingTop: 16,
      paddingBottom: 4,
      borderTopWidth: 1,
      borderTopColor: HAIR,
    },
    statRow: {},
    statValue: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: 26,
      letterSpacing: -0.03 * 26,
      color: INK,
    },
    statOf: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: 17,
      color: INK_50,
    },
    statLabel: {
      marginTop: 2,
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: 13,
      color: INK_50,
    },

    coveredBlock: { marginTop: 30, gap: 12 },
    label: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: 11,
      letterSpacing: 0.14 * 11,
      color: AMBER,
    },
    coveredRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 11 },
    tick: {
      width: 18,
      height: 18,
      marginTop: 3,
      flexShrink: 0,
      borderRadius: 9,
      backgroundColor: 'rgba(28,155,87,0.12)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    coveredText: {
      flex: 1,
      fontFamily: 'AnekLatin_400Regular',
      fontSize: 16,
      lineHeight: 16 * 1.62,
      color: INK_70,
    },

    foot: {
      marginTop: 30,
      fontFamily: 'AnekLatin_400Regular',
      fontSize: 14,
      lineHeight: 14 * 1.5,
      color: INK_50,
    },
    error: {
      marginTop: 12,
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: 13,
      color: RED,
    },

    actions: {
      paddingHorizontal: GUTTER,
      paddingTop: 12,
      gap: 4,
      backgroundColor: PAPER,
      borderTopWidth: 1,
      borderTopColor: HAIR,
    },
    // No drop shadow: the ruled ground reads as paper, and a floating shadow
    // over it is exactly the boxiness this screen was rebuilt to lose.
    primary: {
      height: 54,
      borderRadius: 99,
      backgroundColor: INK,
      alignItems: 'center',
      justifyContent: 'center',
    },
    primarySaved: {
      backgroundColor: 'rgba(28,155,87,0.12)',
    },
    primaryText: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: 16,
      color: PAPER,
    },
    primaryTextSaved: {
      color: '#14663A',
    },
    dashboardLink: {
      textAlign: 'center',
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: 14,
      color: INK_50,
      paddingVertical: 14,
    },
  });
}
