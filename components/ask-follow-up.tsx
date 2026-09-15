import {
  RecordingPresets,
  requestRecordingPermissionsAsync,
  setAudioModeAsync,
  useAudioRecorder,
} from 'expo-audio';
import { useCallback, useEffect, useRef, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Svg, { Path, Rect } from 'react-native-svg';

import { INK, INK_FAINT, INK_MUTED, GREEN_INK, LevelBars, PAPER } from '@/components/classroom-chrome';
import { DockRing, type RingMood } from '@/components/dock-ring';
import { askAboutDoubtAloud, speakFollowUpStreaming, type FollowUpTurn } from '@/lib/doubt-followup';
import { FollowUpAudio } from '@/lib/followup-audio';

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
 * VOICE ONLY, DELIBERATELY. The server streams the answer's written steps as
 * well, and they are read here — but only to build the conversation history the
 * next question is sent with. Nothing is printed. The written answer is getting
 * its own surface, a board that is still being designed; until that exists,
 * half-showing the text would be a worse answer than not showing it, and would
 * have to be torn out again. `onStep` is where it will attach.
 */

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

  const abortRef = useRef<AbortController | null>(null);
  const audioRef = useRef<FollowUpAudio | null>(null);
  const turnsRef = useRef<FollowUpTurn[]>([]);
  const lingerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  /** Set when the sentence stream has finished, so a queue running dry between
   *  sentences is not mistaken for the end of the answer. */
  const streamDoneRef = useRef(false);

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
    setPhase('idle');
  }, []);

  useEffect(
    () => () => {
      abortRef.current?.abort();
      audioRef.current?.stop();
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
    const steps: string[] = [];
    let asked = '';
    let spokeStarted = false;

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
          // Read, not rendered: this is the written answer, and it is waiting
          // on a surface of its own. It still has to be collected, because the
          // next turn is sent with it as context.
          onStep: (step) => {
            steps.push(step.text);
          },
          onSpoken: (text) => {
            // Once per answer. A server that emits `spoken` both early and at
            // the end would otherwise build two players and put two voices in
            // the air.
            if (spokeStarted) return;
            spokeStarted = true;
            void speak(text, controller);
          },
        },
        controller.signal
      );
      if (controller.signal.aborted) return;
      turnsRef.current = [
        ...turnsRef.current,
        { role: 'user', content: asked },
        { role: 'assistant', content: steps.join(' ') },
      ];
      // No voice ever started — the answer exists but cannot be heard, and
      // with nothing printed there is nothing to show for it.
      if (!spokeStarted) {
        setFailure('retry');
        setPhase('idle');
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
});
