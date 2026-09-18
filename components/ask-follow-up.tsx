import {
  RecordingPresets,
  requestRecordingPermissionsAsync,
  setAudioModeAsync,
  useAudioRecorder,
} from 'expo-audio';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

import { INK, INK_FAINT, INK_MUTED, GREEN_INK, LevelBars, PAPER } from '@/components/classroom-chrome';
import { DockRing, type RingMood } from '@/components/dock-ring';
import { SolutionSteps } from '@/components/solution-steps';
import {
  askAboutDoubtAloud,
  speakFollowUpStreaming,
  type FollowUpStep,
  type FollowUpTurn,
} from '@/lib/doubt-followup';
import { FollowUpAudio } from '@/lib/followup-audio';
import { pcmAvailable, pcmFeed, pcmFedSeconds, pcmFinish, pcmStart, pcmStop } from '@/lib/pcm-player';
import { parseSolutionStep } from '@/lib/solution-steps';

/**
 * ASK FOLLOW-UP — hold the bar, ask out loud, and the teacher answers where you
 * are standing. Ported from `followup_handoff/Ask Follow-up 12a`.
 *
 * The whole point is that nothing moves. A follow-up is a question ABOUT the
 * working already on screen, so sending the student to a live classroom to ask
 * it would take away the very thing being asked about. The recording goes up
 * with the doubt's own context, the answer comes back as speech, and the
 * solution never leaves the screen.
 *
 * It is the live class's dock, stretched into a bar: the same white lifted
 * face, the same hairline, the same ring — literally the same component, so the
 * two surfaces cannot drift apart. Colourless at rest; the ring only wakes
 * while a student is actually using it.
 *
 * THE BOARD ATTACHED AT `onStep`, exactly where the note below said it would.
 * Voice carries every answer; the WRITTEN steps open a sheet only when the
 * answer earns one — more than one step, or a long one. Conversation ("what's
 * your name", "thanks") stays voice-plus-bar; an explanation of working gets
 * the board, streaming word by word as the model writes it. One short step is
 * spoken and kept for history but opens nothing: a board over the student's
 * solution is furniture falling over unless there is working to put on it.
 */

/** A follow-up answer opens the sheet past ONE short step — the same line
 *  the model's own prompt draws ("the board is for working"). */
const SHORT_ANSWER_CHARS = 240;

/** How long the ring lingers after the last touch — the prototype's `hLeave`. */
const LINGER_MS = 1500;

type Phase = 'idle' | 'listening' | 'thinking' | 'speaking';

function MicIcon({ color }: { color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke={color}
      strokeWidth={1.9} strokeLinecap="round" strokeLinejoin="round">
      <Path d="M12 3a3 3 0 0 1 3 3v5a3 3 0 0 1-6 0V6a3 3 0 0 1 3-3z" />
      <Path d="M6 11a6 6 0 0 0 12 0" />
      <Path d="M12 17v4" />
    </Svg>
  );
}

/** Shown while the answer is playing, because a bar you can stop should look
 *  stoppable. The prototype has no such state — it never had to answer. */
function StopIcon({ color }: { color: string }) {
  return (
    <Svg viewBox="0 0 24 24" width={15} height={15} fill={color}>
      <Rect x={6} y={6} width={12} height={12} rx={2.5} />
    </Svg>
  );
}

/** The reference's own flag: an upright staff with a pennant, in muted ink so
 *  Report reads as the quieter of the two controls. */
function FlagIcon() {
  return (
    <Svg viewBox="0 0 24 24" width={18} height={18} fill="none" stroke={INK_MUTED}
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <Path d="M5 21V4" />
      <Path d="M5 4h11l-1.5 4L16 12H5" />
    </Svg>
  );
}

export function AskFollowUpBar({
  doubtId,
  onReport,
}: {
  doubtId?: string | null;
  onReport?: () => void;
}) {
  const recorder = useAudioRecorder(RecordingPresets.HIGH_QUALITY);
  /** The board is capped rather than free: it grows upward over the solution,
   *  and past a little under half the screen there is nothing of the solution
   *  left to read behind it. */
  const { height: windowHeight } = useWindowDimensions();
  const [phase, setPhase] = useState<Phase>('idle');
  /**
   * A FAILURE IS TWO WORDS, NOT A SENTENCE.
   *
   * This used to put whatever message came back into the hint line — "Monk
   * could not answer that just now. Try again in a moment." sitting under a
   * bar whose reference has no error line at all. A long apology in the one
   * slot the design gives to "Hold to speak" reads as something bolted on,
   * and naming the product while apologising for it makes it worse.
   *
   * So there are exactly two outcomes worth telling apart, because they ask
   * different things of the student: press it again, or go and turn the
   * microphone on. "Try again" would be a lie for the second — pressing again
   * does nothing at all while permission is refused.
   */
  const [failure, setFailure] = useState<null | 'retry' | 'mic'>(null);
  const [linger, setLinger] = useState(false);
  /** The written answer, when it earned a board. Empty array = no board. */
  const [boardSteps, setBoardSteps] = useState<FollowUpStep[]>([]);
  const [boardOpen, setBoardOpen] = useState(false);

  const abortRef = useRef<AbortController | null>(null);
  const audioRef = useRef<FollowUpAudio | null>(null);
  const turnsRef = useRef<FollowUpTurn[]>([]);
  const lingerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  /** Set when the sentence stream has finished, so a queue running dry between
   *  sentences is not mistaken for the end of the answer. */
  const streamDoneRef = useRef(false);
  /** The gapless path has no didJustFinish: the end is computed from seconds
   *  fed against seconds elapsed, checked when the stream closes. */
  const pcmIdleRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pcmStartedAtRef = useRef(0);

  const wake = useCallback(() => {
    if (lingerRef.current) clearTimeout(lingerRef.current);
    setLinger(true);
    lingerRef.current = setTimeout(() => setLinger(false), LINGER_MS);
  }, []);

  /**
   * Back to a playback session, always, and never left recording-shaped.
   *
   * `allowsRecording: true` puts iOS into `.playAndRecord`, and expo-audio has
   * no `defaultToSpeaker` — so a session left that way sends every later sound
   * in the app to the EARPIECE, including Drona in class. That outlives this
   * screen, which is why it is restored on every exit from every path.
   */
  const toPlayback = useCallback(() => {
    setAudioModeAsync({
      allowsRecording: false,
      playsInSilentMode: true,
      shouldPlayInBackground: false,
      interruptionMode: 'mixWithOthers',
    }).catch(() => {});
  }, []);

  const stopEverything = useCallback(() => {
    abortRef.current?.abort();
    abortRef.current = null;
    audioRef.current?.stop();
    audioRef.current = null;
    pcmStop();
    if (pcmIdleRef.current) clearTimeout(pcmIdleRef.current);
    setPhase('idle');
  }, []);

  useEffect(
    () => () => {
      abortRef.current?.abort();
      audioRef.current?.stop();
      pcmStop();
      if (pcmIdleRef.current) clearTimeout(pcmIdleRef.current);
      recorder.stop().catch(() => {});
      if (lingerRef.current) clearTimeout(lingerRef.current);
      toPlayback();
    },
    [recorder, toPlayback]
  );

  const beginHold = useCallback(async () => {
    if (!doubtId) return;
    wake();
    setFailure(null);
    // A second question interrupts the first answer rather than talking over
    // it — the student has clearly stopped listening.
    audioRef.current?.stop();
    audioRef.current = null;
    pcmStop();
    if (pcmIdleRef.current) clearTimeout(pcmIdleRef.current);
    abortRef.current?.abort();
    abortRef.current = null;
    setPhase('listening');
    try {
      const granted = await requestRecordingPermissionsAsync();
      if (!granted.granted) {
        setFailure('mic');
        setPhase('idle');
        return;
      }
      /**
       * The session has to allow recording BEFORE `prepareToRecordAsync`, not
       * after. Nothing else in the app leaves it that way — the classroom
       * records through a different library and deliberately keeps expo-audio
       * on playback so Drona is not routed to the earpiece — so every time
       * this bar is pressed the session is on a category that refuses to
       * record.
       */
      await setAudioModeAsync({
        allowsRecording: true,
        playsInSilentMode: true,
        shouldPlayInBackground: false,
        interruptionMode: 'mixWithOthers',
      });
      await recorder.prepareToRecordAsync();
      recorder.record();
    } catch {
      setFailure('retry');
      setPhase('idle');
      toPlayback();
    }
  }, [doubtId, recorder, toPlayback, wake]);

  const endHold = useCallback(async () => {
    if (!doubtId) return;
    wake();
    let uri: string | null = null;
    try {
      await recorder.stop();
      uri = recorder.uri ?? null;
    } catch {
      // A recorder that will not stop still has whatever it captured.
    }
    // Before the answer is spoken, never after: `.playAndRecord` would put the
    // teacher's voice in the earpiece, which reads as broken rather than quiet.
    toPlayback();
    if (!uri) {
      setFailure('retry');
      setPhase('idle');
      return;
    }

    setPhase('thinking');
    const controller = new AbortController();
    abortRef.current = controller;
    streamDoneRef.current = false;
    const arrived: FollowUpStep[] = [];
    let asked = '';
    let spokenText = '';
    let spokeStarted = false;
    setBoardSteps([]);
    setBoardOpen(false);

    // One writer for finished steps and the step mid-write. Partials carry
    // full text-so-far and REPLACE their step — upsert by n, never append,
    // or a step that streamed as six frames becomes six steps. The board
    // opens the moment the answer has earned it: a second step, or a long
    // first one. One short step is conversation and opens nothing.
    const absorb = (step: FollowUpStep) => {
      if (controller.signal.aborted) return;
      const at = arrived.findIndex((s) => s.n === step.n);
      if (at >= 0) arrived[at] = step;
      else arrived.push(step);
      arrived.sort((a, b) => a.n - b.n);
      const body = arrived.map((s) => s.text).join(' ');
      if (arrived.length > 1 || body.length > SHORT_ANSWER_CHARS) {
        setBoardSteps([...arrived]);
        setBoardOpen(true);
      }
    };

    // Clips the server synthesises into the SAME stream as the answer. The
    // old contract fetched the voice back with a second request; on this
    // server that means paying for the same voice twice.
    const inlinePlayer = () => {
      if (!audioRef.current) {
        const audio = new FollowUpAudio(doubtId!);
        audio.onIdle = () => {
          if (streamDoneRef.current && !controller.signal.aborted) setPhase('idle');
        };
        audioRef.current = audio;
        setPhase('speaking');
      }
      return audioRef.current;
    };

    try {
      await askAboutDoubtAloud(
        doubtId,
        uri,
        turnsRef.current,
        {
          // Kept for the history the next question is sent with. Not shown —
          // the student knows what they just said.
          onTranscript: (text) => {
            asked = text;
          },
          onStep: absorb,
          onStepPartial: absorb,
          onSpoken: (text, inlineVoice) => {
            // Once per answer. A server that emits `spoken` both early and at
            // the end would otherwise build two players and put two voices in
            // the air.
            if (spokeStarted) return;
            spokeStarted = true;
            spokenText = text;
            // Three dialects, one decision, made here: gapless PCM when this
            // build carries the native player, inline WAV clips otherwise,
            // and the fetch only for servers from before the voice moved
            // into the answer stream.
            if (inlineVoice && pcmAvailable) {
              pcmStart();
              pcmStartedAtRef.current = Date.now();
              setPhase('speaking');
            } else if (inlineVoice) {
              inlinePlayer();
            } else {
              void speak(text, controller);
            }
          },
          onPcm: (b64) => {
            if (controller.signal.aborted) return;
            pcmFeed(b64);
          },
          onAudio: (wav) => {
            if (controller.signal.aborted) return;
            inlinePlayer().enqueue(wav);
          },
          onVoiceDone: (chunks) => {
            if (controller.signal.aborted) return;
            if (chunks === 0 && spokenText) {
              // The inline voice came to nothing; the old fetch still works.
              void speak(spokenText, controller);
              return;
            }
            streamDoneRef.current = true;
            if (pcmAvailable && pcmStartedAtRef.current) {
              // Release an answer still held by the jitter buffer.
              pcmFinish();
              // No didJustFinish on the gapless path: the end is seconds fed
              // (at the played rate) against seconds elapsed, plus a breath.
              const played = (Date.now() - pcmStartedAtRef.current) / 1000;
              const remains = pcmFedSeconds() / 1.15 - played + 0.5;
              pcmIdleRef.current = setTimeout(() => {
                if (!controller.signal.aborted) setPhase('idle');
              }, Math.max(0, remains * 1000));
            }
          },
        },
        controller.signal
      );
      if (controller.signal.aborted) return;
      turnsRef.current = [
        ...turnsRef.current,
        { role: 'user', content: asked },
        { role: 'assistant', content: arrived.map((s) => s.text).join(' ') },
      ];
      // No voice ever started. With a board on screen that is a quiet answer,
      // not a failed one; with nothing printed either, there is nothing to
      // show for the question at all.
      if (!spokeStarted) {
        if (arrived.length) {
          setPhase('idle');
        } else {
          setFailure('retry');
          setPhase('idle');
        }
      }
    } catch {
      if (controller.signal.aborted) return;
      // The server's own message is deliberately not read: it is a sentence,
      // and this is a two-word slot. What the student can DO about it is the
      // same however it failed.
      setFailure('retry');
      setPhase('idle');
    }

    async function speak(spoken: string, ctl: AbortController) {
      const audio = new FollowUpAudio(doubtId!);
      audioRef.current = audio;
      audio.onIdle = () => {
        // A queue runs dry between sentences while the next is still being
        // synthesised; only a finished stream makes an empty queue the end.
        if (streamDoneRef.current && !ctl.signal.aborted) setPhase('idle');
      };
      setPhase('speaking');
      try {
        await speakFollowUpStreaming(
          doubtId!,
          spoken,
          (wav) => {
            if (!ctl.signal.aborted) audio.enqueue(wav);
          },
          ctl.signal
        );
      } finally {
        streamDoneRef.current = true;
      }
    }
  }, [doubtId, recorder, toPlayback, wake]);

  const listening = phase === 'listening';
  const speaking = phase === 'speaking';
  const disabled = !doubtId;

  const label = listening
    ? 'Listening…'
    : phase === 'thinking'
      ? 'Thinking…'
      : speaking
        ? 'Answering…'
        : 'Ask follow-up';

  const hint = failure
    ? failure === 'mic'
      ? 'Microphone is off'
      : 'Try again'
    : listening
      ? 'Release to stop'
      : phase === 'thinking'
        ? 'One moment'
        : speaking
          ? 'Tap to stop'
          : 'Hold to speak';

  /** Green while the student holds the floor, amber the rest of the time —
   *  the dock's own two palettes, meaning the same two things. */
  const mood: RingMood = listening ? 'student' : 'teacher';

  return (
    <View style={styles.block}>
      {/*
        THE BOARD SITS ABOVE THE BAR, IN THE LAYOUT, NOT OVER IT.
        It was a Modal, chosen so the bar and the solution behind it never
        moved. They didn't — but a Modal is its own window anchored to the
        bottom of the SCREEN, and the bar is at the bottom of the screen, so
        the sheet landed squarely on top of the one control the student needed
        next. Asking a second follow-up meant closing the answer to the first.
        A Modal cannot be fixed by insetting it either: everything behind it is
        untouchable, so a bar left visible under the scrim would still be dead.
        So the board is an ordinary view now, rendered before the bar inside a
        container that is anchored to the bottom and sizes to its content —
        which means the board grows UPWARD over the solution and the bar does
        not move a pixel. It keeps the property the Modal was chosen for, and
        stops covering the thing it was covering.
      */}
      {boardOpen && (
        <View style={[styles.board, { maxHeight: Math.round(windowHeight * 0.44) }]}>
          <View style={styles.sheetHandle} />
          <View style={styles.sheetHeader}>
            <Text style={styles.sheetTitle}>Follow-up</Text>
            <Pressable onPress={() => setBoardOpen(false)} hitSlop={10}>
              <Text style={styles.sheetDone}>Done</Text>
            </Pressable>
          </View>
          <ScrollView style={styles.sheetBody} showsVerticalScrollIndicator={false}>
            <BoardRail steps={boardSteps} />
          </ScrollView>
        </View>
      )}

      <View style={styles.row}>
        <View style={styles.anchor}>
        <DockRing mood={mood} awake={phase !== 'idle' || linger} id="followup" />
          <Pressable
            style={[styles.face, disabled && styles.faceOff]}
            disabled={disabled}
            accessibilityLabel={speaking ? 'Stop the answer' : 'Hold to ask a follow-up'}
            onPressIn={() => {
              if (speaking || phase === 'thinking') return;
              void beginHold();
            }}
            onPressOut={() => {
              if (phase !== 'listening') return;
              void endHold();
            }}
            onPress={() => {
              // Only meaningful while the answer is playing; a hold's own press
              // event arrives after `onPressOut` has already sent the question.
              if (speaking) stopEverything();
            }}>
            <View style={[styles.thumb, listening && styles.thumbOn]}>
              {listening ? (
                <LevelBars color={PAPER} heights={[9, 17, 12]} />
              ) : speaking ? (
                <StopIcon color={PAPER} />
              ) : (
                <MicIcon color={PAPER} />
              )}
            </View>
            <Text style={styles.label} numberOfLines={1}>
              {label}
            </Text>
          </Pressable>
        </View>

        {/* Report, as a disc matching the bar's own plate. It lives here rather
            than in the screen because 12a centres the PAIR: the bar is content
            sized, the disc is 52, and the two are centred together. Split
            across two files the row could only be laid out by guesswork. */}
        <Pressable
          style={styles.disc}
          onPress={onReport}
          accessibilityLabel="Report a problem">
          <FlagIcon />
        </Pressable>
      </View>
      <Text style={[styles.hint, listening && styles.hintLive]} numberOfLines={1}>
        {hint}
      </Text>

    </View>
  );
}

/** The written answer in the same numbered rail the solution uses. Parsed at
 *  render because partials replace their step's text frame by frame. */
function BoardRail({ steps }: { steps: FollowUpStep[] }) {
  const rail = useMemo(
    () => steps.map((s) => parseSolutionStep(s.text)).filter((s) => s.title || s.lines.length),
    [steps]
  );
  return <SolutionSteps steps={rail} size="compact" />;
}

/** The dock's plate, verbatim — negative spreads included, which is why this is
 *  `boxShadow` and not the older shadow props. */
const PLATE = {
  backgroundColor: '#FFFFFF',
  borderWidth: 1,
  borderColor: 'rgba(28,26,22,.10)',
  boxShadow: [
    { offsetX: 0, offsetY: 18, blurRadius: 36, spreadDistance: -20, color: 'rgba(28,26,22,0.5)' },
    { offsetX: 0, offsetY: 2, blurRadius: 6, spreadDistance: -2, color: 'rgba(28,26,22,0.12)' },
  ],
} as const;

const styles = StyleSheet.create({
  /**
   * THE BAR IS NOT FULL WIDTH, and that was the mistake worth fixing.
   *
   * Built with `flex: 1` it stretched to whatever the footer gave it — 280pt
   * against a 342pt row — and shoved the report disc against the right edge.
   * Measured off the reference, the pill is CONTENT sized at 196 (1 + 6 + 40
   * thumb + 10 + 118 label + 20 + 1) and the pair is centred: 42pt of air
   * either side of bar-gap-disc. So nothing here flexes; the row centres.
   */
  block: { gap: 9 },
  row: { flexDirection: 'row', alignItems: 'center', justifyContent: 'center', gap: 10 },
  /** Holds ring and face together and sizes itself to the face, so the ring's
   *  -1.5 and -6 insets are measured off the bar's own edge. */
  anchor: { position: 'relative' },
  face: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 10,
    height: 52,
    borderRadius: 99,
    // 6 on the left because the 40pt disc sits there; 20 on the right so the
    // label is not crowded against the edge.
    paddingLeft: 6,
    paddingRight: 20,
    ...PLATE,
  },
  faceOff: { opacity: 0.5 },
  disc: {
    width: 52,
    height: 52,
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
    ...PLATE,
  },
  thumb: {
    width: 40,
    height: 40,
    borderRadius: 99,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: INK,
  },
  thumbOn: { backgroundColor: GREEN_INK, transform: [{ scale: 1.06 }] },
  label: {
    fontFamily: 'Onest_700Bold',
    fontSize: 14,
    letterSpacing: -0.14,
    color: INK,
    /**
     * Fixed, from the handoff: the label changes between "Ask follow-up",
     * "Listening…", "Thinking…" and "Answering…", and without a floor the bar
     * would breathe in and out under the student's thumb every time it did.
     * 118 is the widest of them.
     */
    minWidth: 118,
  },
  hint: {
    textAlign: 'center',
    fontFamily: 'Onest_700Bold',
    fontSize: 10.5,
    letterSpacing: 0.84,
    textTransform: 'uppercase',
    color: INK_FAINT,
  },
  hintLive: { color: GREEN_INK },
  /**
   * A panel that floats above the bar, not a sheet stuck to the screen's edge.
   * Rounded on all four corners because it no longer meets the bottom of the
   * screen, and lifted on a shadow so it reads as sitting over the solution
   * rather than being part of it.
   */
  board: {
    backgroundColor: PAPER,
    borderRadius: 22,
    paddingBottom: 10,
    marginBottom: 10,
    overflow: 'hidden',
    boxShadow: [
      { offsetX: 0, offsetY: 10, blurRadius: 28, spreadDistance: -6, color: 'rgba(28,26,22,0.26)' },
      { offsetX: 0, offsetY: 0, blurRadius: 0, spreadDistance: 1, color: 'rgba(28,26,22,0.08)', inset: true },
    ],
  },
  sheetHandle: {
    alignSelf: 'center',
    width: 40,
    height: 4,
    borderRadius: 2,
    marginTop: 10,
    backgroundColor: 'rgba(28,26,22,0.16)',
  },
  sheetHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingTop: 12,
    paddingBottom: 4,
  },
  sheetTitle: { fontFamily: 'Onest_700Bold', fontSize: 16, color: INK },
  sheetDone: { fontFamily: 'Onest_700Bold', fontSize: 14, color: GREEN_INK },
  sheetBody: { paddingHorizontal: 20 },
});
