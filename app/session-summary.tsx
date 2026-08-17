import { LinearGradient } from 'expo-linear-gradient';
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useMemo, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { usePortraitLock } from '@/hooks/use-landscape-lock';
import { saveNote } from '@/lib/notes';

/**
 * Class dismissed — what the student sees the moment a live class ends.
 *
 * The page itself is plain: a warm amber wash at the top, then white. The
 * ruled paper lives inside one card instead, because that card is a preview of
 * the note this class becomes — the board, the derivations, the diagrams and
 * the student's own doubts, rewritten into portrait. Making it look like the
 * note page is what tells the student what "Save to notes" actually gets them,
 * and it is the one thing on the screen that should read as an object.
 *
 * Deliberately absent: the class duration. How long a class ran is not an
 * achievement and not something a student acts on.
 */

const INK = '#1C1A16';
const INK_70 = '#4A463D';
const INK_50 = '#8A8478';
const PAPER = '#FFFFFF';
const RULE = 'rgba(28,26,22,0.05)';
const HAIR = 'rgba(28,26,22,0.12)';
const AMBER = '#B08420';
const GREEN = '#1C9B57';
const RED = '#DD4433';

const GUTTER = 24;
/** The note card's own ruled rhythm, matching its prose line-height. */
const CARD_RULE = 30;

type SaveState = 'idle' | 'saving' | 'saved' | 'error';

export default function SessionSummaryScreen() {
  // Reached straight from the landscape classroom, so it asks for portrait
  // itself rather than relying on a timed restore on the way out.
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

      {/* A warm wash behind the heading, fading to white — the page's only
          decoration, so nothing competes with the note card below. */}
      <LinearGradient
        colors={['rgba(238,163,31,0.13)', 'rgba(238,163,31,0.03)', 'rgba(255,255,255,0)']}
        locations={[0, 0.55, 1]}
        style={styles.wash}
        pointerEvents="none"
      />

      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <ScrollView
          style={styles.scroll}
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}>
          <Animated.View entering={FadeInDown.duration(340)}>
            <Text style={styles.heading}>Class dismissed.</Text>
            <Text style={styles.sub}>Good work today — here&apos;s what you covered.</Text>
            <Text style={styles.topic}>{chapterTitle}</Text>
          </Animated.View>

          {(questionsAnswered > 0 || covered.length > 0) && (
            <Animated.View entering={FadeInDown.duration(340).delay(70)} style={styles.stats}>
              {questionsAnswered > 0 && (
                <View>
                  <Text style={styles.statValue}>
                    {correctCount}
                    <Text style={styles.statOf}> of {questionsAnswered}</Text>
                  </Text>
                  <Text style={styles.statLabel}>answered in class</Text>
                </View>
              )}
              {covered.length > 0 && (
                <View>
                  <Text style={styles.statValue}>{covered.length}</Text>
                  <Text style={styles.statLabel}>
                    topic{covered.length === 1 ? '' : 's'} covered
                  </Text>
                </View>
              )}
            </Animated.View>
          )}

          {/* The note itself, in miniature. Ruled like the note page, so the
              student can see what they are about to keep. */}
          {covered.length > 0 && (
            <Animated.View entering={FadeInDown.duration(340).delay(140)} style={styles.noteCard}>
              <View style={styles.noteRules} pointerEvents="none">
                {Array.from({ length: 14 }, (_, i) => (
                  <View key={i} style={[styles.noteRule, { top: (i + 1) * CARD_RULE }]} />
                ))}
              </View>

              <View style={styles.noteTab}>
                <Text style={styles.noteTabText}>YOUR NOTE</Text>
              </View>

              <Text style={styles.label}>WHAT WE COVERED</Text>

              {covered.map((line, i) => (
                <View key={i} style={styles.coveredRow}>
                  <View style={styles.tick}>
                    <TickIcon />
                  </View>
                  <Text style={styles.coveredText}>{line}</Text>
                </View>
              ))}

              <View style={styles.noteMore}>
                <Text style={styles.noteMoreText}>
                  The full board, every derivation and diagram, and the doubts you asked — all
                  rewritten to read on your phone.
                </Text>
              </View>
            </Animated.View>
          )}

          <Text style={styles.foot}>
            {params.sessionId
              ? 'Unsaved classes are kept for seven days, then they go.'
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
    wash: { position: 'absolute', left: 0, right: 0, top: 0, height: 280 },
    scroll: { flex: 1, minHeight: 0 },
    scrollContent: { paddingHorizontal: GUTTER, paddingTop: 24, paddingBottom: 36 },

    heading: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: 32,
      letterSpacing: -0.04 * 32,
      lineHeight: 32 * 1.06,
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
      marginTop: 16,
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: 15,
      color: AMBER,
    },

    stats: { flexDirection: 'row', gap: 30, marginTop: 22 },
    statValue: {
      fontFamily: 'AnekLatin_700Bold',
      fontSize: 26,
      letterSpacing: -0.03 * 26,
      color: INK,
    },
    statOf: { fontFamily: 'AnekLatin_600SemiBold', fontSize: 17, color: INK_50 },
    statLabel: {
      marginTop: 2,
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: 13,
      color: INK_50,
    },

    noteCard: {
      position: 'relative',
      marginTop: 28,
      paddingTop: 26,
      paddingHorizontal: 18,
      paddingBottom: 18,
      borderWidth: 1,
      borderColor: HAIR,
      borderRadius: 18,
      backgroundColor: PAPER,
      overflow: 'hidden',
      // A single soft lift, so the note reads as an object without becoming a
      // heavy box.
      shadowColor: INK,
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.06,
      shadowRadius: 14,
      elevation: 2,
    },
    noteRules: { ...StyleSheet.absoluteFillObject },
    noteRule: { position: 'absolute', left: 0, right: 0, height: 1, backgroundColor: RULE },
    noteTab: {
      position: 'absolute',
      top: 0,
      left: 18,
      paddingHorizontal: 10,
      paddingVertical: 4,
      borderBottomLeftRadius: 7,
      borderBottomRightRadius: 7,
      backgroundColor: INK,
    },
    noteTabText: {
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: 9,
      letterSpacing: 0.14 * 9,
      color: PAPER,
    },

    label: {
      marginBottom: 14,
      fontFamily: 'AnekLatin_800ExtraBold',
      fontSize: 11,
      letterSpacing: 0.14 * 11,
      color: AMBER,
    },
    coveredRow: { flexDirection: 'row', alignItems: 'flex-start', gap: 11, marginBottom: 12 },
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
      fontSize: 15.5,
      lineHeight: CARD_RULE,
      color: INK_70,
    },

    noteMore: {
      marginTop: 6,
      paddingTop: 14,
      borderTopWidth: 1,
      borderTopColor: HAIR,
    },
    noteMoreText: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: 13.5,
      lineHeight: 13.5 * 1.5,
      color: INK_50,
    },

    foot: {
      marginTop: 22,
      fontFamily: 'AnekLatin_400Regular',
      fontSize: 13.5,
      lineHeight: 13.5 * 1.5,
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
      gap: 2,
      backgroundColor: PAPER,
    },
    primary: {
      height: 54,
      borderRadius: 99,
      backgroundColor: INK,
      alignItems: 'center',
      justifyContent: 'center',
    },
    primarySaved: { backgroundColor: 'rgba(28,155,87,0.12)' },
    primaryText: { fontFamily: 'AnekLatin_600SemiBold', fontSize: 16, color: PAPER },
    primaryTextSaved: { color: '#14663A' },
    dashboardLink: {
      textAlign: 'center',
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: 14,
      color: INK_50,
      paddingVertical: 14,
    },
  });
}
