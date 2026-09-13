import {
  RecordingPresets,
  requestRecordingPermissionsAsync,
  setAudioModeAsync,
  useAudioRecorder,
} from 'expo-audio';
import { useCallback, useEffect, useRef, useState } from 'react';

import {
  askAboutDoubtAloud,
  speakFollowUpStreaming,
  type FollowUpStep,
  type FollowUpTurn,
} from '@/lib/doubt-followup';
import { FollowUpAudio } from '@/lib/followup-audio';

/**
 * ONE FOLLOW-UP EXCHANGE: hold, ask, hear the answer, read the answer.
 *
 * Lifted out of the bar because the answer needs a surface the bar cannot
 * provide. A sheet rendered inside the bar would be drawn outside its parent's
 * bounds, and on iOS a view outside its parent receives no touches at all — it
 * would appear and then refuse to scroll or close. So the screen owns the
 * layout and this owns the exchange, and the two pieces read the same state.
 *
 * `steps` is the written answer. It used to be collected and thrown away,
 * because the surface for it was still being designed; it is kept now and
 * published as it streams, so the sheet fills while she is speaking.
 */

/** How long the ring lingers after the last touch — the prototype's `hLeave`. */
const LINGER_MS = 1500;

export type FollowUpPhase = 'idle' | 'listening' | 'thinking' | 'speaking';
type Phase = FollowUpPhase;

/**
 * HOW LONG AFTER SHE STARTS TALKING THE ANSWER APPEARS.
 *
 * The sheet used to open on the first written step, and the steps arrive before
 * any sound does — the server sends the spoken text first, then the steps, and
 * only then is the audio fetched and played. So the answer flew up while the
 * student was still waiting in silence, which reads as the screen jumping
 * rather than as a teacher answering.
 *
 * It waits for the first clip to actually sound, and then a beat longer. The
 * beat matters: arriving on the exact syllable is its own kind of startling,
 * and two seconds in she is plainly mid-sentence, so the sheet reads as
 * catching up with her rather than announcing her.
 */
const ANSWER_DELAY_MS = 2000;

export function useFollowUp(doubtId?: string | null) {
  const [steps, setSteps] = useState<FollowUpStep[]>([]);
  /** Separate from `steps`: the steps are the content, this is whether the
   *  sheet is up. They are not the same question. */
  const [answerOpen, setAnswerOpen] = useState(false);
  const openTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const closeAnswer = useCallback(() => {
    if (openTimerRef.current) clearTimeout(openTimerRef.current);
    openTimerRef.current = null;
    setAnswerOpen(false);
  }, []);
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
    setSteps([]);
    closeAnswer();
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
    setSteps([]);
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
          /**
           * The written answer, kept and shown. It arrives a step at a time
           * while she is already speaking, so the sheet fills as she talks
           * rather than appearing finished — which is the difference between
           * reading along and being handed a transcript.
           */
          onStep: (step) => {
            arrived.push(step);
            setSteps([...arrived]);
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
        { role: 'assistant', content: arrived.map((s) => s.text).join(' ') },
      ];
      // No voice ever started — the answer exists but cannot be heard, and
      // with nothing printed there is nothing to show for it.
      if (!spokeStarted) {
        setFailure('retry');
        setPhase('idle');
      } else if (arrived.length > 0) {
        /**
         * The stream finished. If no clip ever sounded — synthesis refused, the
         * route failed, the device is muted at the OS level — `onStart` never
         * fired and the sheet would stay shut on an answer that exists and is
         * perfectly readable. Show it rather than lose it.
         */
        if (openTimerRef.current == null) setAnswerOpen(true);
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
      /**
       * The first sound, not the first step — this is the moment the sheet is
       * allowed to exist. The timer is cleared by `closeAnswer`, so a student
       * who dismisses or asks again inside the two seconds does not get the
       * sheet thrown back at them afterwards.
       */
      audio.onStart = () => {
        if (ctl.signal.aborted) return;
        if (openTimerRef.current) clearTimeout(openTimerRef.current);
        openTimerRef.current = setTimeout(() => {
          if (!ctl.signal.aborted) setAnswerOpen(true);
        }, ANSWER_DELAY_MS);
      };
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
  /** Closing the answer stops the voice with it: a teacher still talking over a
   *  dismissed sheet is the thing this has to avoid. */
  const dismissAnswer = useCallback(() => {
    stopEverything();
    closeAnswer();
    setSteps([]);
  }, [stopEverything, closeAnswer]);

  return {
    phase,
    failure,
    linger,
    steps,
    answerOpen,
    beginHold,
    endHold,
    stopEverything,
    dismissAnswer,
    disabled: !doubtId,
  };
}
