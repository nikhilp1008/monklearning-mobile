import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Keyboard, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { SafeAreaView, useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { friendlyError } from '@/lib/api';
import { shadow } from '@/lib/shadow';
import { KeyboardSpacer } from '@/components/keyboard-spacer';
import { ObButton } from '@/components/onboarding-kit';
import { Skeleton, stagger } from '@/components/skeleton';
import { TopicChoice, TopicField } from '@/components/topic-choice';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { CatalogueSubject, getCatalogue } from '@/lib/drona';

/** export-6c's split: at or under this, a name is a pill; over it, a row. */
const PILL_MAX_CHARS = 26;

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
  const insets = useSafeAreaInsets();
  const [selected, setSelected] = useState<string | null>(null);
  /** A topic the student typed instead. Only one of the two is ever held. */
  const [typed, setTyped] = useState('');
  const field = useRef<TextInput>(null);
  const scrollRef = useRef<ScrollView>(null);

  /**
   * ONE CHOICE AT A TIME. Tapping a topic clears anything typed and puts the
   * keyboard away; the first letter typed lets go of a tapped topic, and
   * erasing every letter gives it back. Focusing the field alone takes nothing
   * away, so a student who taps into it and changes their mind still has the
   * topic they picked.
   */
  const lastTapped = useRef<string | null>(null);
  const select = useCallback((topic: string) => {
    lastTapped.current = topic;
    setSelected(topic);
    setTyped('');
    Keyboard.dismiss();
  }, []);
  const type = useCallback((text: string) => {
    setTyped(text);
    setSelected(text.trim() ? null : lastTapped.current);
  }, []);

  /**
   * The field sits at the foot of the list, where the keyboard lands. Scrolled
   * up once the keyboard has finished opening, when the page has its final
   * height: scrolling any earlier measured the page before it shrank, and the
   * field stayed under the keyboard, so typing looked like it did nothing.
   */
  const fieldFocused = useRef(false);
  useEffect(() => {
    const sub = Keyboard.addListener('keyboardDidShow', () => {
      if (fieldFocused.current) scrollRef.current?.scrollToEnd({ animated: true });
    });
    return () => sub.remove();
  }, []);

  const chapterId = params.chapterId;
  const chapterTitle = params.chapterTitle ?? 'Current Electricity';

  const [catalogue, setCatalogue] = useState<CatalogueSubject[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [reloadToken, setReloadToken] = useState(0);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    setLoadError(null);
    getCatalogue()
      .then((data) => {
        if (!cancelled) setCatalogue(data);
      })
      .catch((err) => {
        if (!cancelled) {
          setLoadError(friendlyError(err, 'load the topics'));
        }
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [reloadToken]);

  // chapterId is matched across every subject's chapters, not just the one
  // named by the subject param — the two aren't guaranteed to agree.
  const chapter = useMemo(() => {
    if (!catalogue) return null;
    for (const subj of catalogue) {
      const found = subj.chapters.find((c) => c.id === chapterId);
      if (found) return found;
    }
    return null;
  }, [catalogue, chapterId]);

  const topics = useMemo(() => chapter?.subtopics.map((s) => s.name) ?? [], [chapter]);

  // Whatever the student taps or types reaches the real backend: it's
  // forwarded as the scoping conversation's opening line in entering-classroom.
  // `replace`, not `push`: this screen is a transparentModal, so pushing left
  // it sitting in the stack underneath the whole class. Nothing showed while
  // the opaque classroom covered it, but the moment the class ended and the
  // summary animated in, this sheet was what showed through behind it for
  // about a second. Replacing takes the sheet out of the stack on the way in.
  const typedTopic = typed.trim();
  const ready = Boolean(selected) || typedTopic.length >= 2;
  /** Set on the way out, so a double tap cannot open two classes. */
  const leaving = useRef(false);
  const start = () => {
    if (!ready || leaving.current) return;
    leaving.current = true;
    Keyboard.dismiss();
    // Typed out word for word, a listed topic is the same as tapping it.
    const listed = selected ?? topics.find((t) => t.toLowerCase() === typedTopic.toLowerCase());
    router.replace({
      pathname: '/entering-classroom',
      params: {
        chapterId: chapterId ?? '',
        chapterTitle,
        initialUtterance: listed ?? typedTopic,
        typed: listed ? '' : '1',
      },
    });
  };

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.flex} edges={['top', 'bottom']}>
        {/* A page now, not a sheet over the chapter list: no scrim, no handle,
            no drag-to-dismiss. The chapter name is the heading, and the back
            button is the way out. */}
        <View style={styles.headerRow}>
          <Pressable style={styles.backButton} onPress={() => router.back()}>
            <BackArrowIcon size={scale(16)} />
          </Pressable>
          <Text style={styles.headerTitle} numberOfLines={1} ellipsizeMode="tail">
            {chapterTitle}
          </Text>
        </View>

        <ScrollView
          ref={scrollRef}
          style={styles.flex}
          showsVerticalScrollIndicator={false}
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag">
          {loading ? (
            // Six cards in the same two-up grid the topics land in.
            <View style={styles.grid}>
              {Array.from({ length: 6 }, (_, i) => (
                <View key={i} style={styles.topicCard}>
                  <Skeleton delay={stagger(i)} style={styles.skeletonTopic} />
                </View>
              ))}
            </View>
          ) : loadError ? (
            <View style={styles.stateBlock}>
              <Text style={styles.stateText}>{loadError}</Text>
              <Pressable onPress={() => setReloadToken((n) => n + 1)}>
                <Text style={styles.retryText}>Try again</Text>
              </Pressable>
            </View>
          ) : topics.length > 0 ? (
            /* Adaptive, per export-6c: a short name is a pill and several
                 share a line; a long one takes the row to itself. Measured
                 across all 648 topic names in the catalogue, the split at 26
                 characters is what keeps the pills to one line each. */
            <View style={styles.grid}>
              {topics.map((topic) => (
                <TopicChoice
                  key={topic}
                  label={topic}
                  selected={selected === topic}
                  wide={topic.length > PILL_MAX_CHARS}
                  onPress={() => select(topic)}
                />
              ))}
            </View>
          ) : (
            <View style={styles.stateBlock}>
              <Text style={styles.stateText}>No specific topics listed for this chapter yet.</Text>
            </View>
          )}

          {loading || loadError ? null : (
            <View style={styles.typeBlock}>
              <TopicField
                ref={field}
                value={typed}
                onChangeText={type}
                onFocus={() => {
                  fieldFocused.current = true;
                  // Already open (moving between fields): no show event comes.
                  if (Keyboard.isVisible()) scrollRef.current?.scrollToEnd({ animated: true });
                }}
                onBlur={() => {
                  fieldFocused.current = false;
                }}
                onSubmit={start}
                placeholder={
                  topics.length > 0
                    ? 'Not here? Type what you want to learn'
                    : 'Type what you want to learn'
                }
              />
            </View>
          )}
        </ScrollView>

        <View style={styles.footer}>
          {/* The onboarding's square key, as every primary button now is.
                Static label, per export-6c: real subtopic names run long
                enough that "Start with <topic>" had to be ellipsised. Its
                own tap lands on press-in, so the step into the classroom is
                felt without a second haptic here. Outlined until a topic is
                chosen or typed. */}
          <ObButton label="Start learning" withArrow disabled={!ready} onPress={start} />
        </View>
        {/* Lifts the button with the keyboard, on both platforms. */}
        <KeyboardSpacer ios bottomInset={insets.bottom} />
      </SafeAreaView>
    </View>
  );
}

function BackArrowIcon({ size }: { size: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none">
      <Path
        d="M15 5l-7 7 7 7"
        stroke={colors.ink}
        strokeWidth={1.9}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#fff',
      paddingHorizontal: scale(20),
    },
    flex: {
      flex: 1,
    },
    // A generous grab target — the handle alone is 5pt tall, which is not
    // something a thumb can reliably catch.
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: scale(12),
      paddingTop: verticalScale(8),
      paddingBottom: verticalScale(16),
    },
    backButton: {
      width: scale(36),
      height: scale(36),
      flexShrink: 0,
      borderRadius: scale(18),
      borderWidth: 1,
      borderColor: colors.hairline,
      alignItems: 'center',
      justifyContent: 'center',
    },
    headerTitle: {
      flex: 1,
      minWidth: 0,
      fontFamily: 'Onest_600SemiBold',
      fontSize: scale(20),
      letterSpacing: scale(-0.4),
      color: colors.ink,
    },
    grid: {
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: scale(8),
      paddingTop: verticalScale(4),
    },
    stateBlock: {
      alignItems: 'center',
      justifyContent: 'center',
      gap: verticalScale(8),
      minHeight: verticalScale(120),
      marginTop: verticalScale(16),
    },
    stateText: {
      fontFamily: 'Onest_400Regular',
      fontSize: scale(13),
      color: colors.slate,
      textAlign: 'center',
      paddingHorizontal: scale(20),
    },
    retryText: {
      fontFamily: 'Onest_700Bold',
      fontSize: scale(13),
      color: colors.marigold,
    },
    // One line of text, centred in the card the topic will fill.
    skeletonTopic: {
      width: '76%',
      height: verticalScale(12),
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
      borderColor: 'rgba(28,26,22,.2)',
      borderRadius: scale(13),
      paddingVertical: verticalScale(12),
      paddingHorizontal: scale(14),
      ...shadow({
        color: colors.ink,
        opacity: 0.05,
        radius: scale(2),
        y: verticalScale(1.5),
        elevation: 1,
      }),
    },
    typeBlock: {
      paddingTop: verticalScale(18),
      paddingBottom: verticalScale(12),
    },
    footer: {
      flexShrink: 0,
      paddingTop: verticalScale(12),
      paddingBottom: verticalScale(10),
      backgroundColor: '#fff',
    },
  });
}
