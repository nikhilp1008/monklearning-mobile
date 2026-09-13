import {
  RecordingPresets,
  requestRecordingPermissionsAsync,
  setAudioModeAsync,
  useAudioRecorder,
} from 'expo-audio';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, View, useWindowDimensions } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { SolutionSteps } from '@/components/solution-steps';
import { FollowUpStep, FollowUpTurn, askAboutDoubtAloud, speakFollowUpStreaming } from '@/lib/doubt-followup';
import { FollowUpAudio } from '@/lib/followup-audio';
import { teacherNameNow, withTeacherName } from '@/lib/preferences';
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

/**
 * The iOS audio session, which this screen has to move between two categories.
 *
 * expo-audio's recorder cannot start unless the session allows recording, and
 * nothing else in the app ever puts it there: the classroom records through
 * `@siteed/audio-studio`, which asks for its own category, and deliberately
 * leaves expo-audio's mode on playback so Drona is not routed to the earpiece
 * (see the comment in live-classroom.tsx). Anywhere else the session is on
 * iOS's default `soloAmbient`. Both refuse to record, which is why
 * `prepareToRecordAsync` threw every single time and the bar said "Could not
 * start listening" even with a microphone that works in class.
 *
 * The two modes cannot be collapsed into one. `allowsRecording: true` puts iOS
 * into `.playAndRecord`, and expo-audio has no `defaultToSpeaker`, so the
 * spoken answer would come back through the EARPIECE — audible only against
 * your ear, which reads as broken. So: record in one mode, speak in the other.
 */
const RECORDING_SESSION = {
  allowsRecording: true,
  playsInSilentMode: true,
  shouldPlayInBackground: false,
  interruptionMode: 'mixWithOthers',
} as const;

/** What the rest of the app expects to find: playback, through the speaker. */
const PLAYBACK_SESSION = {
  allowsRecording: false,
  playsInSilentMode: true,
  shouldPlayInBackground: false,
  interruptionMode: 'mixWithOthers',
} as const;

type Phase = 'listening' | 'thinking' | 'brief' | 'detailed' | 'failed';

type FollowUpProps = {
  doubtId: string;
  questionText: string;
  onClose: () => void;
};

export function FollowUp({ doubtId, questionText, onClose: dismiss }: FollowUpProps) {
  const { height } = useWindowDimensions();
  const styles = useMemo(() => createStyles(height), [height]);
  const recorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);

  const [phase, setPhase] = useState<Phase>('listening');
  const [steps, setSteps] = useState<FollowUpStep[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [seconds, setSeconds] = useState(0);
  const abortRef = useRef<AbortController | null>(null);
  const audioRef = useRef<FollowUpAudio | null>(null);
  const turnsRef = useRef<FollowUpTurn[]>([]);
  const startedRef = useRef(false);
  /** Whether this answer has already begun speaking. */
  const spokeRef = useRef(false);

  useEffect(
    () => () => {
      abortRef.current?.abort();
      audioRef.current?.stop();
      recorder.stop().catch(() => {});
      // Closing mid-listen must not leave the session recording-shaped. The
      // classroom sets playback once on entry and never again, so a session
      // left in `.playAndRecord` here would route Drona to the earpiece for
      // the rest of the app's life.
      setAudioModeAsync(PLAYBACK_SESSION).catch(() => {});
    },
    [recorder]
  );

  // A held recording with no visible clock feels broken within a few seconds.
  useEffect(() => {
    if (phase !== 'listening') return;
    const id = setInterval(() => setSeconds((n) => n + 1), 1000);
    return () => clearInterval(id);
  }, [phase]);

  /**
   * Closing stops the voice, here rather than only on unmount.
   *
   * The cleanup effect does stop it, but leaning on unmount ordering to
   * silence audio is how a teacher ends up still talking over a screen the
   * student has already dismissed. The recording is stopped too: Done can be
   * pressed while it is still listening.
   */
  const onClose = useCallback(() => {
    abortRef.current?.abort();
    audioRef.current?.stop();
    recorder.stop().catch(() => {});
    dismiss();
  }, [dismiss, recorder]);

  const listen = useCallback(async () => {
    setError(null);
    setSteps([]);
    setSeconds(0);
    setPhase('listening');
    try {
      const granted = await requestRecordingPermissionsAsync();
      if (!granted.granted) {
        setError(`${teacherNameNow()} needs the microphone to hear you. Turn it on in Settings.`);
        setPhase('failed');
        return;
      }
      // Before prepareToRecordAsync, not after: on iOS the recorder cannot be
      // prepared at all while the session is on a non-recording category, and
      // it is on one every time this screen opens.
      await setAudioModeAsync(RECORDING_SESSION);
      await recorder.prepareToRecordAsync();
      recorder.record();
    } catch {
      setError('Could not start listening. Try again.');
      setPhase('failed');
      // Do not leave the session in .playAndRecord after a failed start — the
      // earpiece routing would outlive this screen and quieten Drona.
      setAudioModeAsync(PLAYBACK_SESSION).catch(() => {});
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
    // Back to playback the moment the microphone is done, and before the
    // answer is spoken: `.playAndRecord` would send Drona's voice to the
    // earpiece, which sounds like the feature failed rather than like a
    // routing choice.
    setAudioModeAsync(PLAYBACK_SESSION).catch(() => {});
    if (!uri) {
      setError('Nothing was recorded. Try again.');
      setPhase('failed');
      return;
    }

    setPhase('thinking');
    const controller = new AbortController();
    abortRef.current = controller;
    const arrived: FollowUpStep[] = [];
    spokeRef.current = false;
    let spoken = '';
    let asked = '';
    let settled = false;
    let inlineAudio: FollowUpAudio | null = null;

    // The player for clips the server sends down the answer stream itself.
    // Created on the first frame that needs it, not up front — an answer
    // whose voice never arrives should not have torn down the previous one
    // for nothing.
    const inlinePlayer = () => {
      if (!inlineAudio) {
        audioRef.current?.stop();
        inlineAudio = new FollowUpAudio(doubtId);
        audioRef.current = inlineAudio;
      }
      return inlineAudio;
    };

    // The answer picks its own surface the moment it is COMPLETE — the
    // `answered` frame — not when the stream closes. The stream now stays
    // open while the voice synthesises into it, and a sheet that waits for
    // audio to finish is a sheet held shut by the slowest part of the answer.
    const settle = () => {
      if (settled || controller.signal.aborted) return;
      settled = true;
      if (!arrived.length && spoken) {
        // A voice-only answer still deserves a screen: the spoken line
        // becomes the single step rather than leaving the bar blank.
        arrived.push({ n: 1, text: spoken });
        setSteps([...arrived]);
      }
      if (!arrived.length) {
        // Nothing came back at all. A blank bar reads as the app dying —
        // this happened live, twice in a row, on a language-switch request
        // the server answered with unparseable JSON. Say so instead.
        setError(`${teacherNameNow()} could not answer that just now. Try asking again.`);
        setPhase('failed');
        return;
      }
      const body = arrived.map((s) => s.text).join(' ');
      setPhase(arrived.length <= 1 && body.length <= SHORT_ANSWER_CHARS ? 'brief' : 'detailed');
      turnsRef.current = [
        ...turnsRef.current,
        { role: 'user', content: asked },
        { role: 'assistant', content: body },
      ];
    };

    // One writer for finished steps and the step mid-write. Partials carry
    // the full text-so-far and REPLACE the step they belong to — upsert by
    // n, never append, or a step that streamed as six frames becomes six
    // steps. The final `step` frame is just the last replacement.
    const absorb = (step: FollowUpStep) => {
      const at = arrived.findIndex((s) => s.n === step.n);
      if (at >= 0) arrived[at] = step;
      else arrived.push(step);
      arrived.sort((a, b) => a.n - b.n);
      setSteps([...arrived]);
      // The board opens on the first WORDS of step one, not its last. Same
      // formula settle() uses, so the surface picked mid-stream is the one
      // the finished answer confirms — more steps never demote a sheet.
      const body = arrived.map((s) => s.text).join(' ');
      setPhase(
        arrived.length <= 1 && body.length <= SHORT_ANSWER_CHARS ? 'brief' : 'detailed'
      );
    };

    try {
      await askAboutDoubtAloud(
        doubtId,
        uri,
        turnsRef.current,
        {
          // Kept for the conversation history the next turn is sent with,
          // but no longer shown: the student knows what they just asked, and
          // printing it back delays the only new thing on screen.
          onTranscript: (text) => {
            asked = text;
          },
          onStep: absorb,
          onStepPartial: absorb,
          onSpoken: (text, inlineVoice) => {
            spoken = text;
            // Once per answer. Two `spoken` frames — a server that emits it
            // early AND at the end, a reader that re-parses a frame — would
            // build two players and put two voices in the air, which is the
            // failure this whole path keeps coming back to.
            if (spokeRef.current) return;
            spokeRef.current = true;
            // A server that speaks into its own stream needs nothing from us
            // but a player; the fetch-it-back call is only for servers from
            // before the audio moved inline.
            if (!inlineVoice) void play(text, controller);
          },
          onAudio: (wav) => {
            if (controller.signal.aborted) return;
            inlinePlayer().enqueue(wav);
          },
          onAnswered: settle,
          onVoiceDone: (chunks) => {
            // The inline voice came to nothing. The old fetch is still there
            // and still works — silence is the one outcome that is never
            // right while the steps are being read aloud elsewhere.
            if (chunks === 0 && spoken && !controller.signal.aborted) {
              void play(spoken, controller);
            }
          },
        },
        controller.signal
      );
      if (controller.signal.aborted) return;
      // A server from before the `answered` frame never sends one; the screen
      // settles here at stream end, exactly as it always did.
      settle();
    } catch (err) {
      if (controller.signal.aborted) return;
      // Server and lib failure lines say "Monk" — the API cannot know which
      // teacher this student picked, or the app's spelling of her name. The
      // rebrand happens here, at display, like every other surface.
      setError(err instanceof Error ? withTeacherName(err.message) : 'That did not go through.');
      setPhase('failed');
    }
  }

  async function play(spoken: string, controller: AbortController) {
    try {
      audioRef.current?.stop();
      const audio = new FollowUpAudio(doubtId);
      audioRef.current = audio;
      // One WHOLE SENTENCE per clip now, not a slice of audio. The earlier
      // attempts cut every 0.8s by byte count, which lands mid-word, and
      // sequential file playback has a load-and-start gap at every join — so
      // the voice broke twice a second however cleanly it was sequenced. Split
      // where a speaker pauses and the gap falls on a break that was there
      // anyway. See lib/followup-audio.ts and followup_voice._spoken_sentences.
      await speakFollowUpStreaming(
        doubtId,
        spoken,
        (wav) => {
          if (controller.signal.aborted) return;
          audio.enqueue(wav);
        },
        controller.signal
      );
    } catch {
      // The words are on screen. Speech that will not synthesise is a missing
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
              <Text style={styles.barHint}>Working it out…</Text>
            </View>
          </>
        )}

        {(phase === 'brief' || phase === 'failed') && (
          <>
            <View style={styles.barBody}>
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
