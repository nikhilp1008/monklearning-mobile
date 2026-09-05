import { RecordingPresets, createAudioPlayer, requestRecordingPermissionsAsync, useAudioRecorder } from 'expo-audio';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import {
  ActivityIndicator,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { SolutionSteps } from '@/components/solution-steps';
import { FollowUpStep, FollowUpTurn, askAboutDoubtAloud, speakFollowUp } from '@/lib/doubt-followup';
import { parseSolutionStep } from '@/lib/solution-steps';

/**
 * Asking about the solution, out loud, without leaving it.
 *
 * It listens the moment it opens. A student who has just pressed "ask a
 * follow-up" has a question in their head right now, and a text box asks them
 * to type it instead — which is a different, slower thing, and turns a tutor
 * into a chatbot.
 *
 * The answer arrives as the same numbered steps the solution above uses, and is
 * read aloud in the teacher the student chose. The steps are useful in silence,
 * so the speech is fetched separately and its absence costs nothing.
 */

const INK = '#1C1A16';
const INK_50 = '#8A8478';
const PAPER = '#FFFFFF';
const HAIR = 'rgba(28,26,22,0.12)';
const LISTENING = '#C53A2B';

type Phase = 'listening' | 'thinking' | 'answered' | 'failed';

type FollowUpSheetProps = {
  doubtId: string;
  questionText: string;
  onClose: () => void;
};

export function FollowUpSheet({ doubtId, questionText, onClose }: FollowUpSheetProps) {
  const { height } = useWindowDimensions();
  const styles = useMemo(() => createStyles(height), [height]);
  const recorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);

  const [phase, setPhase] = useState<Phase>('listening');
  const [heard, setHeard] = useState<string | null>(null);
  const [steps, setSteps] = useState<FollowUpStep[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [seconds, setSeconds] = useState(0);
  const abortRef = useRef<AbortController | null>(null);
  const playerRef = useRef<ReturnType<typeof createAudioPlayer> | null>(null);
  const turnsRef = useRef<FollowUpTurn[]>([]);
  const startedRef = useRef(false);

  /** Everything stops when the sheet goes: nothing here is saved. */
  useEffect(
    () => () => {
      abortRef.current?.abort();
      playerRef.current?.remove();
      recorder.stop().catch(() => {});
    },
    [recorder]
  );

  // A held recording with no visible clock feels broken within about three
  // seconds, so the seconds are shown from the first one.
  useEffect(() => {
    if (phase !== 'listening') return;
    const id = setInterval(() => setSeconds((n) => n + 1), 1000);
    return () => clearInterval(id);
  }, [phase]);

  const listen = useCallback(async () => {
    setError(null);
    setHeard(null);
    setSteps([]);
    setSeconds(0);
    setPhase('listening');
    try {
      const granted = await requestRecordingPermissionsAsync();
      if (!granted.granted) {
        setError('Monk needs the microphone to hear your question. Turn it on in Settings.');
        setPhase('failed');
        return;
      }
      await recorder.prepareToRecordAsync();
      recorder.record();
    } catch {
      setError('Could not start listening. Try again.');
      setPhase('failed');
    }
  }, [recorder]);

  // Listening starts with the sheet, once — React's dev-mode double-invoke
  // would otherwise open two recorders and leave one running.
  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    listen();
  }, [listen]);

  async function askWhatWasHeard() {
    let uri: string | null = null;
    try {
      await recorder.stop();
      uri = recorder.uri ?? null;
    } catch {
      // Fall through: an unstoppable recorder still has whatever it captured.
    }
    if (!uri) {
      setError('Nothing was recorded. Try again.');
      setPhase('failed');
      return;
    }

    setPhase('thinking');
    const controller = new AbortController();
    abortRef.current = controller;
    const arrived: FollowUpStep[] = [];
    let spoken = '';
    let asked = '';

    try {
      await askAboutDoubtAloud(
        doubtId,
        uri,
        turnsRef.current,
        {
          onTranscript: (text) => {
            asked = text;
            setHeard(text);
          },
          onStep: (step) => {
            arrived.push(step);
            setSteps([...arrived]);
            setPhase('answered');
          },
          onSpoken: (text) => {
            spoken = text;
          },
        },
        controller.signal
      );
      if (controller.signal.aborted) return;
      setPhase('answered');
      turnsRef.current = [
        ...turnsRef.current,
        { role: 'user', content: asked },
        { role: 'assistant', content: arrived.map((s) => s.text).join(' ') },
      ];
      if (spoken) void play(spoken, controller);
    } catch (err) {
      if (controller.signal.aborted) return;
      setError(err instanceof Error ? err.message : 'That did not go through.');
      setPhase('failed');
    }
  }

  async function play(spoken: string, controller: AbortController) {
    try {
      const uri = await speakFollowUp(doubtId, spoken);
      if (controller.signal.aborted || !uri) return;
      playerRef.current?.remove();
      const player = createAudioPlayer({ uri });
      playerRef.current = player;
      player.play();
    } catch {
      // The steps are on screen and readable. Speech that will not synthesize
      // is a missing extra, not a failed answer.
    }
  }

  const rail = useMemo(
    () => steps.map((s) => parseSolutionStep(s.text)).filter((s) => s.title || s.lines.length),
    [steps]
  );

  return (
    <View style={styles.root}>
      <Pressable style={styles.scrim} onPress={onClose} />
      <View style={styles.sheet}>
        <SafeAreaView edges={['bottom']} style={styles.flex}>
          <View style={styles.handle} />
          <View style={styles.header}>
            <Text style={styles.title}>
              {phase === 'listening' ? 'Listening…' : 'Ask about this'}
            </Text>
            <Pressable onPress={onClose} hitSlop={10}>
              <Text style={styles.close}>Done</Text>
            </Pressable>
          </View>
          <Text style={styles.about} numberOfLines={2}>
            {questionText}
          </Text>

          <ScrollView
            style={styles.body}
            contentContainerStyle={styles.bodyContent}
            keyboardShouldPersistTaps="handled">
            {!!heard && <Text style={styles.heard}>“{heard}”</Text>}

            {phase === 'listening' && (
              <View style={styles.listening}>
                <View style={styles.pulse}>
                  <MicIcon />
                </View>
                <Text style={styles.listeningHint}>
                  Ask your question out loud — where a step came from, why a formula
                  applies. Tap done speaking when you finish.
                </Text>
                <Text style={styles.clock}>{seconds}s</Text>
              </View>
            )}

            {phase === 'thinking' && !heard && (
              <ActivityIndicator style={styles.thinking} color={INK_50} />
            )}
            {phase === 'thinking' && !!heard && (
              <Text style={styles.working}>Working it out…</Text>
            )}

            {rail.length > 0 && (
              <View style={styles.answer}>
                <SolutionSteps steps={rail} size="compact" />
              </View>
            )}

            {!!error && <Text style={styles.error}>{error}</Text>}
          </ScrollView>

          <View style={styles.actions}>
            {phase === 'listening' ? (
              <Pressable style={styles.primary} onPress={askWhatWasHeard}>
                <Text style={styles.primaryText}>Done speaking</Text>
              </Pressable>
            ) : (
              <Pressable
                style={[styles.primary, phase === 'thinking' && styles.primaryOff]}
                disabled={phase === 'thinking'}
                onPress={listen}>
                <Text style={styles.primaryText}>
                  {phase === 'failed' ? 'Try again' : 'Ask another'}
                </Text>
              </Pressable>
            )}
          </View>
        </SafeAreaView>
      </View>
    </View>
  );
}

function MicIcon() {
  return (
    <Svg viewBox="0 0 24 24" width={26} height={26} fill="none">
      <Path
        d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3Z"
        stroke={PAPER}
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      <Path
        d="M5 11a7 7 0 0 0 14 0M12 18v3"
        stroke={PAPER}
        strokeWidth={1.8}
        strokeLinecap="round"
      />
    </Svg>
  );
}

function createStyles(height: number) {
  return StyleSheet.create({
    root: { ...StyleSheet.absoluteFillObject, justifyContent: 'flex-end' },
    flex: { flex: 1 },
    scrim: { ...StyleSheet.absoluteFillObject, backgroundColor: 'rgba(14,12,9,0.35)' },
    sheet: {
      backgroundColor: PAPER,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20,
      paddingHorizontal: 20,
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
    body: { flex: 1 },
    bodyContent: { paddingVertical: 16, gap: 16 },
    heard: {
      fontFamily: 'AnekLatin_600SemiBold',
      fontSize: 16,
      lineHeight: 24,
      color: INK,
    },
    listening: { alignItems: 'center', gap: 12, paddingVertical: 18 },
    pulse: {
      width: 62,
      height: 62,
      borderRadius: 31,
      backgroundColor: LISTENING,
      alignItems: 'center',
      justifyContent: 'center',
    },
    listeningHint: {
      fontFamily: 'AnekLatin_400Regular',
      fontSize: 14,
      lineHeight: 21,
      color: INK_50,
      textAlign: 'center',
    },
    clock: { fontFamily: 'AnekLatin_700Bold', fontSize: 13, color: LISTENING },
    thinking: { alignSelf: 'flex-start' },
    working: { fontFamily: 'AnekLatin_600SemiBold', fontSize: 14, color: INK_50 },
    answer: { paddingTop: 4 },
    error: { fontFamily: 'AnekLatin_400Regular', fontSize: 14, color: LISTENING },
    actions: { paddingTop: 10, paddingBottom: 10 },
    primary: {
      height: 52,
      borderRadius: 14,
      backgroundColor: INK,
      alignItems: 'center',
      justifyContent: 'center',
    },
    primaryOff: { opacity: 0.35 },
    primaryText: { fontFamily: 'AnekLatin_600SemiBold', fontSize: 16, color: PAPER },
  });
}
