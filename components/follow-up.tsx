import { RecordingPresets, createAudioPlayer, requestRecordingPermissionsAsync, useAudioRecorder } from 'expo-audio';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { SolutionSteps } from '@/components/solution-steps';
import { FollowUpStep, FollowUpTurn, askAboutDoubtAloud, speakFollowUp } from '@/lib/doubt-followup';
import { parseSolutionStep } from '@/lib/solution-steps';

/**
 * A follow-up, asked out loud, answered on whichever surface the answer needs.
 *
 * Pressing "ask a follow-up" starts LISTENING, not a sheet. A sheet is a room
 * you have to leave, and most follow-ups do not deserve one: "is that the same
 * as the other formula" wants a sentence back, not a modal over the working
 * the student is still reading.
 *
 * So the answer decides. One short step comes back on the bar itself, spoken
 * aloud, with the solution still fully visible behind it. An explanation that
 * genuinely runs to several steps opens the sheet, because at that length it
 * needs the room and the numbered rail.
 */

const INK = '#1C1A16';
const INK_50 = '#8A8478';
const PAPER = '#FFFFFF';
const HAIR = 'rgba(28,26,22,0.12)';
const LISTENING = '#C53A2B';

/** Past this, an answer wants the rail and the room rather than a bar. */
const SHORT_ANSWER_CHARS = 240;

type Phase = 'listening' | 'thinking' | 'brief' | 'detailed' | 'failed';

type FollowUpProps = {
  doubtId: string;
  questionText: string;
  onClose: () => void;
};

export function FollowUp({ doubtId, questionText, onClose }: FollowUpProps) {
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

  useEffect(
    () => () => {
      abortRef.current?.abort();
      playerRef.current?.remove();
      recorder.stop().catch(() => {});
    },
    [recorder]
  );

  // A held recording with no visible clock feels broken within a few seconds.
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
        setError('Monk needs the microphone to hear you. Turn it on in Settings.');
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

  // Once — React's dev-mode double-invoke would leave a second recorder running.
  useEffect(() => {
    if (startedRef.current) return;
    startedRef.current = true;
    listen();
  }, [listen]);

  async function ask() {
    let uri: string | null = null;
    try {
      await recorder.stop();
      uri = recorder.uri ?? null;
    } catch {
      // An unstoppable recorder still has whatever it captured.
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
          },
          onSpoken: (text) => {
            spoken = text;
          },
        },
        controller.signal
      );
      if (controller.signal.aborted) return;

      // The answer picks its own surface. One short step stays on the bar;
      // anything longer earns the sheet.
      const body = arrived.map((s) => s.text).join(' ');
      setPhase(arrived.length <= 1 && body.length <= SHORT_ANSWER_CHARS ? 'brief' : 'detailed');
      turnsRef.current = [
        ...turnsRef.current,
        { role: 'user', content: asked },
        { role: 'assistant', content: body },
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
      // The words are on screen. Speech that will not synthesize is a missing
      // extra, not a failed answer.
    }
  }

  const rail = useMemo(
    () => steps.map((s) => parseSolutionStep(s.text)).filter((s) => s.title || s.lines.length),
    [steps]
  );

  // Only a long answer takes the screen. Everything else sits above the actions
  // with the working still visible behind it.
  if (phase === 'detailed') {
    return (
      <View style={styles.root}>
        <Pressable style={styles.scrim} onPress={onClose} />
        <View style={styles.sheet}>
          <SafeAreaView edges={['bottom']} style={styles.flex}>
            <View style={styles.handle} />
            <View style={styles.header}>
              <Text style={styles.title}>Ask about this</Text>
              <Pressable onPress={onClose} hitSlop={10}>
                <Text style={styles.close}>Done</Text>
              </Pressable>
            </View>
            {!!heard && <Text style={styles.heardInSheet}>“{heard}”</Text>}
            <ScrollView style={styles.flex} contentContainerStyle={styles.sheetBody}>
              <SolutionSteps steps={rail} size="compact" />
            </ScrollView>
            <Pressable style={styles.primary} onPress={listen}>
              <Text style={styles.primaryText}>Ask another</Text>
            </Pressable>
          </SafeAreaView>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.barRoot} pointerEvents="box-none">
      <View style={styles.bar}>
        {phase === 'listening' && (
          <>
            <View style={styles.mic}>
              <MicIcon />
            </View>
            <View style={styles.barBody}>
              <Text style={styles.barTitle}>Listening… {seconds}s</Text>
              <Text style={styles.barHint} numberOfLines={1}>
                Ask about the working out loud
              </Text>
            </View>
            <Pressable style={styles.barAction} onPress={ask}>
              <Text style={styles.barActionText}>Done</Text>
            </Pressable>
          </>
        )}

        {phase === 'thinking' && (
          <>
            <ActivityIndicator color={INK_50} />
            <View style={styles.barBody}>
              <Text style={styles.barTitle} numberOfLines={1}>
                {heard ? `“${heard}”` : 'Hearing you out…'}
              </Text>
              <Text style={styles.barHint}>Working it out…</Text>
            </View>
          </>
        )}

        {(phase === 'brief' || phase === 'failed') && (
          <>
            <View style={styles.barBody}>
              {!!heard && (
                <Text style={styles.barHint} numberOfLines={1}>
                  “{heard}”
                </Text>
              )}
              <Text style={styles.answer}>
                {error ?? steps.map((s) => s.text).join(' ')}
              </Text>
            </View>
            <Pressable style={styles.barAction} onPress={listen}>
              <Text style={styles.barActionText}>Ask</Text>
            </Pressable>
          </>
        )}

        <Pressable onPress={onClose} hitSlop={10} style={styles.dismiss}>
          <Text style={styles.close}>✕</Text>
        </Pressable>
      </View>
    </View>
  );
}

function MicIcon() {
  return (
    <Svg viewBox="0 0 24 24" width={20} height={20} fill="none">
      <Path
        d="M12 15a3 3 0 0 0 3-3V6a3 3 0 0 0-6 0v6a3 3 0 0 0 3 3Z"
        stroke={PAPER}
        strokeWidth={1.8}
        strokeLinejoin="round"
      />
      <Path d="M5 11a7 7 0 0 0 14 0M12 18v3" stroke={PAPER} strokeWidth={1.8} strokeLinecap="round" />
    </Svg>
  );
}

function createStyles(height: number) {
  return StyleSheet.create({
    flex: { flex: 1 },
    // The bar sits over the action row, not over the page.
    barRoot: { position: 'absolute', left: 0, right: 0, bottom: 0, paddingBottom: 34 },
    bar: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 12,
      marginHorizontal: 16,
      paddingVertical: 12,
      paddingHorizontal: 14,
      borderRadius: 16,
      backgroundColor: PAPER,
      borderWidth: 1,
      borderColor: HAIR,
      shadowColor: '#000',
      shadowOpacity: 0.12,
      shadowRadius: 18,
      shadowOffset: { width: 0, height: 6 },
      elevation: 6,
    },
    barBody: { flex: 1, gap: 2 },
    barTitle: { fontFamily: 'Onest_700Bold', fontSize: 14, color: INK },
    barHint: { fontFamily: 'Onest_400Regular', fontSize: 12.5, color: INK_50 },
    answer: {
      fontFamily: 'Onest_400Regular',
      fontSize: 14.5,
      lineHeight: 21,
      color: INK,
    },
    mic: {
      width: 38,
      height: 38,
      borderRadius: 19,
      backgroundColor: LISTENING,
      alignItems: 'center',
      justifyContent: 'center',
    },
    barAction: {
      height: 36,
      paddingHorizontal: 14,
      borderRadius: 10,
      backgroundColor: INK,
      alignItems: 'center',
      justifyContent: 'center',
    },
    barActionText: { fontFamily: 'Onest_600SemiBold', fontSize: 14, color: PAPER },
    dismiss: { paddingLeft: 2 },

    root: { ...StyleSheet.absoluteFillObject, justifyContent: 'flex-end' },
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
    title: { fontFamily: 'Onest_700Bold', fontSize: 19, color: INK },
    close: { fontFamily: 'Onest_600SemiBold', fontSize: 15, color: INK_50 },
    heardInSheet: {
      fontFamily: 'Onest_600SemiBold',
      fontSize: 15,
      lineHeight: 22,
      color: INK,
      paddingTop: 6,
      paddingBottom: 12,
      borderBottomWidth: 1,
      borderBottomColor: HAIR,
    },
    sheetBody: { paddingVertical: 16 },
    primary: {
      height: 50,
      borderRadius: 14,
      backgroundColor: INK,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10,
    },
    primaryText: { fontFamily: 'Onest_600SemiBold', fontSize: 16, color: PAPER },
  });
}
