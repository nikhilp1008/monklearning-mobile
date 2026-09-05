import { useEffect, useMemo, useRef, useState } from 'react';
import {
  ActivityIndicator,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { MathLine } from '@/components/math-line';
import { FollowUpTurn, askAboutDoubt } from '@/lib/doubt-followup';

/**
 * Asking about the solution without leaving it.
 *
 * A follow-up is a question about the working directly above, so sending the
 * student to a different screen to ask it means losing the thing they are
 * asking about. This sits over the solution instead, and the solution is still
 * there when it closes.
 *
 * The exchange lives here and nowhere else. It is not saved, by decision: it
 * belongs to this sitting with this solution, and keeping it would mean a
 * table and a retention rule for a conversation nobody asked to keep.
 */

const INK = '#1C1A16';
const INK_70 = '#4A463D';
const INK_50 = '#8A8478';
const PAPER = '#FFFFFF';
const HAIR = 'rgba(28,26,22,0.12)';
const WASH = 'rgba(28,26,22,0.045)';

type FollowUpSheetProps = {
  doubtId: string;
  /** Shown above the conversation so it is clear what is being asked about. */
  questionText: string;
  onClose: () => void;
};

export function FollowUpSheet({ doubtId, questionText, onClose }: FollowUpSheetProps) {
  // In POINTS, not a percentage. A percentage maxHeight resolves against the
  // parent's height, and a KeyboardAvoidingView that is only as tall as its
  // content has none to resolve against — so the sheet collapsed to nothing
  // while the scrim behind it showed, which reads as a broken tap.
  const { height } = useWindowDimensions();
  const styles = useMemo(() => createStyles(height), [height]);
  const [turns, setTurns] = useState<FollowUpTurn[]>([]);
  const [draft, setDraft] = useState('');
  /** The reply as it arrives, before it becomes a finished turn. */
  const [streaming, setStreaming] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const scrollRef = useRef<ScrollView>(null);
  const abortRef = useRef<AbortController | null>(null);

  // Leaving mid-reply stops it. Nothing is stored, so an answer nobody is
  // reading is only costing tokens.
  useEffect(() => () => abortRef.current?.abort(), []);

  const busy = streaming !== null;

  async function send(question: string) {
    const asked = question.trim();
    if (!asked || busy) return;
    setDraft('');
    setError(null);
    const asOf = [...turns, { role: 'user' as const, content: asked }];
    setTurns(asOf);
    setStreaming('');
    abortRef.current?.abort();
    const controller = new AbortController();
    abortRef.current = controller;

    let reply = '';
    try {
      await askAboutDoubt(
        doubtId,
        asked,
        // The turns BEFORE this question — the server appends it itself.
        turns,
        {
          onToken: (text) => {
            reply += text;
            setStreaming(reply);
          },
        },
        controller.signal
      );
      if (controller.signal.aborted) return;
      setTurns([...asOf, { role: 'assistant', content: reply }]);
    } catch (err) {
      if (controller.signal.aborted) return;
      setError(err instanceof Error ? err.message : 'That did not go through.');
      // The question stays on screen — retyping it would be the second
      // annoyance after the failure.
    } finally {
      if (!controller.signal.aborted) setStreaming(null);
    }
  }

  return (
    <View style={styles.root}>
      <Pressable style={styles.scrim} onPress={onClose} />
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.sheetWrap}>
        <View style={styles.sheet}>
          <SafeAreaView edges={['bottom']} style={styles.flex}>
            <View style={styles.handle} />
            <View style={styles.header}>
              <Text style={styles.title}>Ask about this</Text>
              <Pressable onPress={onClose} hitSlop={10}>
                <Text style={styles.close}>Done</Text>
              </Pressable>
            </View>
            <Text style={styles.about} numberOfLines={2}>
              {questionText}
            </Text>

            <ScrollView
              ref={scrollRef}
              style={styles.thread}
              contentContainerStyle={styles.threadContent}
              onContentSizeChange={() =>
                scrollRef.current?.scrollToEnd({ animated: true })
              }
              keyboardShouldPersistTaps="handled">
              {turns.length === 0 && streaming === null && (
                <Text style={styles.empty}>
                  Ask anything about the working above — where a step came from, why a
                  formula applies, what to revise.
                </Text>
              )}
              {turns.map((turn, i) =>
                turn.role === 'user' ? (
                  <View key={i} style={styles.asked}>
                    <Text style={styles.askedText}>{turn.content}</Text>
                  </View>
                ) : (
                  <MathLine
                    key={i}
                    text={turn.content}
                    style={styles.replyText}
                    fontSize={15}
                    color={INK}
                  />
                )
              )}
              {streaming !== null &&
                (streaming ? (
                  <MathLine
                    text={streaming}
                    style={styles.replyText}
                    fontSize={15}
                    color={INK}
                  />
                ) : (
                  <ActivityIndicator style={styles.thinking} color={INK_50} />
                ))}
              {!!error && <Text style={styles.error}>{error}</Text>}
            </ScrollView>

            <View style={styles.composer}>
              <TextInput
                style={styles.input}
                value={draft}
                onChangeText={setDraft}
                placeholder="Ask a follow-up…"
                placeholderTextColor={INK_50}
                multiline
                returnKeyType="send"
                onSubmitEditing={() => send(draft)}
                editable={!busy}
              />
              <Pressable
                style={[styles.send, (!draft.trim() || busy) && styles.sendOff]}
                disabled={!draft.trim() || busy}
                onPress={() => send(draft)}>
                <Text style={styles.sendText}>Ask</Text>
              </Pressable>
            </View>
          </SafeAreaView>
        </View>
      </KeyboardAvoidingView>
    </View>
  );
}

function createStyles(height: number) {
  return StyleSheet.create({
    root: { ...StyleSheet.absoluteFillObject, justifyContent: 'flex-end' },
    flex: { flex: 1 },
    scrim: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(14,12,9,0.35)' },
    sheetWrap: { width: '100%' },
    sheet: {
      backgroundColor: PAPER,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingHorizontal: 20,
      // A definite height, not a ceiling. `maxHeight` alone leaves the sheet
      // sized by its children, and inside a KeyboardAvoidingView that has no
      // height of its own that resolved to nothing — so the scrim painted over
      // the solution and the sheet itself was invisible.
      height: Math.round(height * 0.62),
    },
    handle: {
      alignSelf: 'center',
      width: 38,
      height: 4,
      borderRadius: 2,
      backgroundColor: HAIR,
      marginTop: 10,
    },
    header: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingTop: 14,
    },
    title: { fontFamily: 'AnekLatin_700Bold', fontSize: 19, color: INK },
    close: { fontFamily: 'AnekLatin_600SemiBold', fontSize: 15, color: INK_50 },
    about: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: 13,
      lineHeight: 19,
      color: INK_50,
      paddingTop: 4,
      paddingBottom: 12,
      borderBottomWidth: 1,
      borderBottomColor: HAIR,
    },
    // Grows with the conversation up to the sheet's own ceiling, rather than
    // claiming the whole sheet while it is still empty.
    // Takes the room the header and composer do not.
    thread: { flex: 1 },
    threadContent: { paddingVertical: 16, gap: 16 },
    empty: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: 14,
      lineHeight: 21,
      color: INK_50,
    },
    asked: {
      alignSelf: 'flex-end',
      maxWidth: '86%',
      backgroundColor: WASH,
      borderRadius: 12,
      paddingVertical: 9,
      paddingHorizontal: 13,
    },
    askedText: { fontFamily: 'AnekLatin_600SemiBold', fontSize: 15, color: INK },
    replyText: {
      alignSelf: 'stretch',
      fontFamily: 'AnekLatin_400Regular',
      fontSize: 15,
      lineHeight: 15 * 1.6,
      color: INK_70,
    },
    thinking: { alignSelf: 'flex-start' },
    error: { fontFamily: 'AnekLatin_400Regular', fontSize: 14, color: '#C53A2B' },
    composer: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      gap: 10,
      paddingTop: 10,
      paddingBottom: 10,
      borderTopWidth: 1,
      borderTopColor: HAIR,
    },
    input: {
      flex: 1,
      maxHeight: 110,
      fontFamily: 'AnekLatin_400Regular',
      fontSize: 15,
      color: INK,
      paddingVertical: 10,
    },
    send: {
      height: 40,
      paddingHorizontal: 18,
      borderRadius: 12,
      backgroundColor: INK,
      alignItems: 'center',
      justifyContent: 'center',
    },
    sendOff: { opacity: 0.35 },
    sendText: { fontFamily: 'AnekLatin_600SemiBold', fontSize: 15, color: PAPER },
  });
}
