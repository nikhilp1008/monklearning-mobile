import {
  RecordingPresets,
  requestRecordingPermissionsAsync,
  setAudioModeAsync,
  useAudioRecorder,
} from 'expo-audio';
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Path, Rect } from 'react-native-svg';

import { DEEP_AMBER, INK, INK_FAINT, INK_MUTED, GREEN_INK, LevelBars, PAPER } from '@/components/classroom-chrome';
import { DockRing, type RingMood } from '@/components/dock-ring';
import { SolutionSteps } from '@/components/solution-steps';
import {
  askAboutDoubtAloud,
  speakFollowUpStreaming,
  type FollowUpStep,
  type FollowUpSurface,
  type FollowUpTurn,
} from '@/lib/doubt-followup';
import { FollowUpAudio } from '@/lib/followup-audio';
import { pcmAvailable, pcmFeed, pcmFedSeconds, pcmFinish, pcmStart, pcmStop } from '@/lib/pcm-player';
import { parseSolutionStep } from '@/lib/solution-steps';
import { hapticFloorReleased, hapticFloorTaken, hapticRefused } from '@/lib/haptics';

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

/**
 * How much of the screen the board may take, and the air under it.
 *
 * It was 44% with 10pt between the board and the buttons, which read as the
 * board sitting ON the bar rather than floating above it — and on Practice,
 * where Next shares the row, as a crowded stack. 56% gives a three-step answer
 * room to be read without scrolling inside the board, and 18pt lets the two
 * buttons below stand clear of it.
 */
const BOARD_SHARE = 0.56;

/** A follow-up answer opens the sheet past ONE short step — the same line
 *  the model's own prompt draws ("the board is for working"). */
const SHORT_ANSWER_CHARS = 240;

/** How long the ring lingers after the last touch — the prototype's `hLeave`. */
const LINGER_MS = 1500;

/** How long a failure keeps the ring grey — the classroom dock's figure. */
const FAILED_SHOW_MS = 2600;

/**
 * Shorter than this is a tap, not a question. The server would transcribe
 * silence and answer it, or say nothing, and either way the student would be
 * left wondering what happened. Said here instead, at once.
 */
const MIN_HOLD_MS = 350;

/**
 * The recorder with metering on, so the ring's halo can move with the voice.
 * A module constant because `useAudioRecorder` keys its recorder on the
 * options — a fresh object each render would still hash the same, but there
 * is no reason to make it.
 */
const RECORDING = { ...RecordingPresets.HIGH_QUALITY, isMeteringEnabled: true };

/** How often the level is read while the mic is held. */
const METER_MS = 80;

/** iOS reports metering in dBFS, silence around -60 and speech at -30 to -10;
 *  this is the stretch that reads as a voice getting louder. */
function meterLevel(db: number | undefined): number {
  if (db == null || !Number.isFinite(db)) return 0;
  return Math.min(1, Math.max(0, (db + 55) / 45));
}

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
 *  Report reads as the quieter of the two controls. Practice's header uses it
 *  too, so a report looks like a report wherever it is. */
export function FlagIcon({ size = 18 }: { size?: number }) {
  return (
    <Svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke={INK_MUTED}
      strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
      <Path d="M5 21V4" />
      <Path d="M5 4h11l-1.5 4L16 12H5" />
    </Svg>
  );
}

export function AskFollowUpBar({
  doubtId,
  onReport,
  surface = 'doubts',
  trailing,
}: {
  /** The thing being asked about — a doubt id, or a practice question id when
   *  `surface` says so. Named for its first caller; it is an id either way. */
  doubtId?: string | null;
  onReport?: () => void;
  /**
   * Which store the id belongs to. Practice asks the same question of the same
   * three endpoints under its own prefix, so the bar itself is unchanged —
   * only where it sends. Defaults to doubts so every existing caller is
   * untouched.
   */
  surface?: FollowUpSurface;
  /**
   * A control that shares the bar's row — Practice's Next.
   *
   * It lives INSIDE the bar's block rather than beside it in the screen,
   * because the board is laid out in that block and takes its width from it.
   * Beside the bar, the block was only as wide as the bar itself (~196pt), so
   * Practice's board opened as a narrow column over one button instead of
   * across the screen above both. Passed in, the block spans the row and the
   * board spans with it.
   */
  trailing?: ReactNode;
}) {
  const recorder = useAudioRecorder(RECORDING);
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
  const [failure, setFailure] = useState<null | 'retry' | 'mic' | 'short'>(null);
  const [linger, setLinger] = useState(false);
  /** The student's voice, 0–1, for the ring's halo while they hold. */
  const voiceLevel = useSharedValue(0);
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
  /**
   * THE HOLD, AS THE FINGER SEES IT — not as the recorder does.
   *
   * Opening the mic is three awaits (permission, audio session, prepare), and
   * a release could land in the middle of them. `endHold` then stopped a
   * recorder that had not started, and `beginHold` carried on and started it
   * anyway — a microphone left recording with nobody holding the bar. The
   * first press on a fresh install always did this, because the permission
   * prompt takes the touch away. So the release is recorded here, the setup
   * checks it after every await, and `endHold` waits for the setup to settle
   * before it decides anything.
   */
  const pressedRef = useRef(false);
  const pressedAtRef = useRef(0);
  const setupRef = useRef<Promise<'recording' | 'released' | 'failed'> | null>(null);
  const meterRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const wake = useCallback((ms: number = LINGER_MS) => {
    if (lingerRef.current) clearTimeout(lingerRef.current);
    setLinger(true);
    lingerRef.current = setTimeout(() => setLinger(false), ms);
  }, []);

  /** Every failure ends the same way: said under the bar, and the ring gone
   *  grey for a moment. */
  const fail = useCallback(
    (kind: 'retry' | 'mic' | 'short') => {
      setFailure(kind);
      setPhase('idle');
      wake(FAILED_SHOW_MS);
    },
    [wake]
  );

  const stopMeter = useCallback(() => {
    if (meterRef.current) clearInterval(meterRef.current);
    meterRef.current = null;
    voiceLevel.value = withTiming(0, { duration: 220 });
  }, [voiceLevel]);

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
      if (meterRef.current) clearInterval(meterRef.current);
      toPlayback();
    },
    [recorder, toPlayback]
  );

  const beginHold = useCallback(async () => {
    if (!doubtId) return;
    /**
     * The tap lands BEFORE the microphone opens, and that ordering is the
     * whole reason it can be felt on an iPhone. iOS silences haptics while an
     * app is recording from the mic unless the app opts back in, which nothing
     * here does. This bar records only while held and only from
     * `recorder.record()` below — after permission and setup — so a tap fired
     * here is outside the silent window, exactly as WhatsApp's voice note is.
     * The classroom mic is different: it records for the whole class.
     */
    // A release is still settling the last hold; a second press now would
    // let that hold's setup see a finger down and start recording after all.
    if (setupRef.current) return;
    hapticFloorTaken();
    wake();
    setFailure(null);
    pressedRef.current = true;
    pressedAtRef.current = Date.now();
    // A second question interrupts the first answer rather than talking over
    // it — the student has clearly stopped listening.
    audioRef.current?.stop();
    audioRef.current = null;
    pcmStop();
    if (pcmIdleRef.current) clearTimeout(pcmIdleRef.current);
    abortRef.current?.abort();
    abortRef.current = null;
    setPhase('listening');
    const setup = (async (): Promise<'recording' | 'released' | 'failed'> => {
      try {
        const granted = await requestRecordingPermissionsAsync();
        if (!granted.granted) {
          hapticRefused();
          fail('mic');
          // No release will come to clear it: the bar is idle again, so the
          // lift of this finger is not a hold ending.
          setupRef.current = null;
          return 'failed';
        }
        if (!pressedRef.current) return 'released';
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
        if (!pressedRef.current) {
          toPlayback();
          return 'released';
        }
        await recorder.prepareToRecordAsync();
        if (!pressedRef.current) {
          toPlayback();
          return 'released';
        }
        recorder.record();
        meterRef.current = setInterval(() => {
          voiceLevel.value = withTiming(meterLevel(recorder.getStatus().metering), {
            duration: METER_MS,
          });
        }, METER_MS);
        return 'recording';
      } catch {
        fail('retry');
        toPlayback();
        setupRef.current = null;
        return 'failed';
      }
    })();
    setupRef.current = setup;
    await setup;
  }, [doubtId, recorder, toPlayback, wake, fail, voiceLevel]);

  const endHold = useCallback(async () => {
    if (!doubtId) return;
    wake();
    pressedRef.current = false;
    const heldMs = Date.now() - pressedAtRef.current;
    stopMeter();
    const pending = setupRef.current;
    const setup = await (pending ?? Promise.resolve('failed' as const));
    if (setupRef.current === pending) setupRef.current = null;
    // The setup already said why, and "Microphone is off" must not be
    // overwritten by a guess.
    if (setup === 'failed') return;
    if (setup === 'released') {
      hapticFloorReleased();
      // A quick tap is told to hold longer. A release that was long but still
      // beat the setup is the permission prompt taking the touch: nothing
      // went wrong, the student just has to press again.
      if (heldMs < MIN_HOLD_MS) fail('short');
      else setPhase('idle');
      return;
    }
    let uri: string | null = null;
    try {
      await recorder.stop();
      uri = recorder.uri ?? null;
    } catch {
      // A recorder that will not stop still has whatever it captured.
    }
    // After the stop, not before — the mic is closed by now, so this one can
    // be felt too.
    hapticFloorReleased();
    // Before the answer is spoken, never after: `.playAndRecord` would put the
    // teacher's voice in the earpiece, which reads as broken rather than quiet.
    toPlayback();
    if (heldMs < MIN_HOLD_MS) {
      fail('short');
      return;
    }
    if (!uri) {
      fail('retry');
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
          // the student knows what they just said, and the ring is what tells
          // them it was heard.
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
        controller.signal,
        surface
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
          fail('retry');
        }
      }
    } catch {
      if (controller.signal.aborted) return;
      // The server's own message is deliberately not read: it is a sentence,
      // and this is a two-word slot. What the student can DO about it is the
      // same however it failed.
      fail('retry');
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
          ctl.signal,
          surface
        );
      } finally {
        streamDoneRef.current = true;
      }
    }
  }, [doubtId, recorder, toPlayback, wake, surface, fail, stopMeter]);

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
      : failure === 'short'
        ? 'Hold a little longer'
        : 'Try again'
    : listening
      ? 'Release to stop'
      : phase === 'thinking'
        ? 'One moment'
        : speaking
          ? 'Tap to stop'
          : 'Hold to speak';

  /**
   * THE RING CARRIES THE WHOLE EXCHANGE, the way the classroom dock's does.
   *
   * Green and moving with the voice while the student holds; amber and
   * breathing slowly while the teacher works out the reply; grey for a moment
   * when it failed. It used to be awake for the answer too, which put it on
   * the bar all the way through the teacher's voice — the one stretch where
   * the voice itself is the signal. Now it hands over: it goes when the
   * teacher starts speaking, after a short linger, and the label says
   * "Answering…" from there.
   */
  const thinking = phase === 'thinking';
  const mood: RingMood = listening
    ? 'student'
    : thinking
      ? 'thinking'
      : failure
        ? 'paused'
        : 'teacher';
  const ringAwake = listening || thinking || linger;
  const hintColor = listening ? styles.hintLive : thinking ? styles.hintThinking : null;

  /**
   * THE BOARD'S OWN OPEN AND CLOSE.
   *
   * It appeared and vanished between two frames, which on a panel this size
   * reads as a glitch rather than as something arriving. `open` runs 0 to 1 and
   * the board rises 34pt into place as it fades; closing runs it back down and
   * only then unmounts, which is the part a plain `boardOpen &&` cannot do —
   * the view is gone before any exit animation could play.
   *
   * Up is slower than down and eased differently: arriving is the thing worth
   * watching, leaving should get out of the way. The same pair of curves the
   * rest of the app uses for entrances and exits.
   */
  const open = useSharedValue(0);
  const [boardMounted, setBoardMounted] = useState(false);
  useEffect(() => {
    if (boardOpen) {
      setBoardMounted(true);
      open.value = withTiming(1, { duration: 300, easing: Easing.bezier(0.2, 0.8, 0.2, 1) });
      return;
    }
    open.value = withTiming(0, { duration: 210, easing: Easing.bezier(0.4, 0, 0.6, 1) }, (done) => {
      if (done) runOnJS(setBoardMounted)(false);
    });
  }, [boardOpen, open]);

  const boardStyle = useAnimatedStyle(() => ({
    opacity: open.value,
    transform: [{ translateY: (1 - open.value) * 34 }],
  }));

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
      {boardMounted && (
        <Animated.View
          style={[styles.board, { maxHeight: Math.round(windowHeight * BOARD_SHARE) }, boardStyle]}>
          <View style={styles.sheetHandle} />
          <View style={styles.sheetHeader}>
            <Text style={styles.sheetTitle}>Follow-up</Text>
            {/* A cross, not the word Done. "Done" claims the student finished
                something; this board is an answer they are dismissing, and
                nothing is completed by closing it. A cross also stops the
                header competing with the green Report and Stop language used
                for the controls that do act. */}
            <Pressable
              onPress={() => setBoardOpen(false)}
              hitSlop={12}
              accessibilityRole="button"
              accessibilityLabel="Close the follow-up answer"
              style={({ pressed }) => [styles.sheetClose, pressed && styles.sheetClosePressed]}>
              <CloseIcon />
            </Pressable>
          </View>
          <ScrollView style={styles.sheetBody} showsVerticalScrollIndicator={false}>
            <BoardRail steps={boardSteps} />
          </ScrollView>
        </Animated.View>
      )}

      {trailing ? (
        // With a trailing control the bar and its hint stack as one column on
        // the left and the control sits on the right, aligned to the bar's top
        // — so Next lines up with the pill, not with the middle of pill-plus-
        // hint, which is where `center` used to leave it.
        <View style={[styles.row, styles.rowSpread]}>
          <View style={styles.barColumn}>
            <View style={styles.anchor}>
            <DockRing mood={mood} awake={ringAwake} id="followup" level={voiceLevel} />
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
          <Text style={[styles.hint, hintColor]} numberOfLines={1}>
            {hint}
          </Text>
          </View>
          {/* Report, as a disc matching the bar's own plate. It lives here rather
              than in the screen because 12a centres the PAIR: the bar is content
              sized, the disc is 52, and the two are centred together. Split
              across two files the row could only be laid out by guesswork.

              Only when there is somewhere to report TO. It used to render
              whatever the props said, so a caller that passed no `onReport` —
              Practice — got a flag that did nothing when pressed, and paid 62pt
              of row width for it. A control with no handler is not a quiet
              control, it is a broken one. */}
          {onReport ? (
            <Pressable
              style={styles.disc}
              onPress={onReport}
              accessibilityLabel="Report a problem">
              <FlagIcon />
            </Pressable>
          ) : null}
          {trailing}
        </View>
      ) : (
        <>
        <View style={styles.row}>
          <View style={styles.anchor}>
          <DockRing mood={mood} awake={ringAwake} id="followup" level={voiceLevel} />
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
              across two files the row could only be laid out by guesswork.

              Only when there is somewhere to report TO. It used to render
              whatever the props said, so a caller that passed no `onReport` —
              Practice — got a flag that did nothing when pressed, and paid 62pt
              of row width for it. A control with no handler is not a quiet
              control, it is a broken one. */}
          {onReport ? (
            <Pressable
              style={styles.disc}
              onPress={onReport}
              accessibilityLabel="Report a problem">
              <FlagIcon />
            </Pressable>
          ) : null}
        </View>
        <Text style={[styles.hint, hintColor]} numberOfLines={1}>
          {hint}
        </Text>
        </>
      )}

    </View>
  );
}

/** The written answer in the same numbered rail the solution uses. Parsed at
 *  render because partials replace their step's text frame by frame. */
function CloseIcon() {
  return (
    <Svg viewBox="0 0 16 16" width={13} height={13} fill="none">
      <Path
        d="M4 4l8 8M12 4l-8 8"
        stroke={INK_MUTED}
        strokeWidth={1.9}
        strokeLinecap="round"
      />
    </Svg>
  );
}

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
  /** The row with a trailing control: bar column left, control right, both
   *  hung from the top so the control levels with the pill, not the hint. */
  rowSpread: { justifyContent: 'space-between', alignItems: 'flex-start' },
  /** The bar and its "Hold to speak" line, stacked and centred on each other. */
  barColumn: { alignItems: 'center', gap: 9 },
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
  hintThinking: { color: DEEP_AMBER },
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
    marginBottom: 18,
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
  /** A disc, so the glyph has a target worth tapping and reads as a control
   *  rather than as a mark printed in the corner. */
  sheetClose: {
    width: 26,
    height: 26,
    borderRadius: 13,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(28,26,22,0.05)',
  },
  sheetClosePressed: { backgroundColor: 'rgba(28,26,22,0.11)' },
  sheetBody: { paddingHorizontal: 20 },
});
