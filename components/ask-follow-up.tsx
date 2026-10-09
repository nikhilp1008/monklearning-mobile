import {
  RecordingPresets,
  requestRecordingPermissionsAsync,
  setAudioModeAsync,
  useAudioRecorder,
} from 'expo-audio';
import { useCallback, useEffect, useMemo, useRef, useState, type ReactNode } from 'react';
import { Pressable, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  cancelAnimation,
  Easing,
  runOnJS,
  runOnUI,
  scrollTo,
  useAnimatedReaction,
  useAnimatedRef,
  useAnimatedStyle,
  useScrollOffset,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Path, Rect } from 'react-native-svg';
import { LinearGradient } from 'expo-linear-gradient';

import { DEEP_AMBER, INK, INK_FAINT, INK_MUTED, GREEN_INK, LevelBars, PAPER } from '@/components/classroom-chrome';
import { useClock } from '@shopify/react-native-skia';

import { DockBars, MarigoldDisc, ThinkingArc } from '@/components/dock-face';
import { DockLight, type DockLightGeometry } from '@/components/dock-light';
import { DOCK_FLAG_SLOT, DOCK_H0, DOCK_W0, useDockMotion } from '@/components/dock-motion';
import { DockRing, type RingMood } from '@/components/dock-ring';
import { TeacherOrbPoster } from '@/components/teacher-orb-poster';
import type { TeacherId } from '@/lib/preferences';
import { SolutionSteps } from '@/components/solution-steps';
import {
  askAboutDoubtAloud,
  speakFollowUpStreaming,
  type FollowUpStep,
  type FollowUpSurface,
  type FollowUpTurn,
  type TextbookPageContext,
} from '@/lib/doubt-followup';
import { FollowUpAudio } from '@/lib/followup-audio';
import { pcmAvailable, pcmFeed, pcmFedSeconds, pcmFinish, pcmStart, pcmStop } from '@/lib/pcm-player';
import { parseSolutionStep } from '@/lib/solution-steps';
import { countChars, revealChars } from '@/lib/word-reveal';
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
 *
 * THE BOARD IS A THREAD, NOT A SLATE. It used to be wiped the moment the next
 * question was asked — closed, emptied, and reopened for the new answer — so a
 * student asking "and why is that?" lost the working the question was about.
 * Now every answer that reaches the board stays on it, oldest first, and the
 * next one is added below with its own heading; the board scrolls to the new
 * one as it arrives and the old ones are a scroll away. Closing the board
 * hides the thread, it does not clear it: the next answer that earns the board
 * brings the whole thread back. Only leaving the screen ends it.
 */

/**
 * How much of the screen the board takes — always, not at most. It used to
 * size to its content up to this cap, so the first answer opened a short
 * board and the second made it grow: the panel changed shape under the
 * student every time they asked. One height, and the thread scrolls inside.
 *
 * It was 44% with 10pt between the board and the buttons, which read as the
 * board sitting ON the bar rather than floating above it — and on Practice,
 * where Next shares the row, as a crowded stack. At a fixed 60% it covered
 * most of the solution the follow-up is about; 46% leaves that working in
 * view above it, and anything longer scrolls. 16pt lets the buttons below
 * stand clear of it.
 */
const BOARD_SHARE = 0.46;

/**
 * Where the board's sides sit, measured from the screen's edge. The bar row
 * is inset for its buttons; the board is a page of working, and at the bar's
 * width it read as a narrow card squeezed between two margins — so it reaches
 * past them to this. Measured from the SCREEN rather than as a fixed bleed
 * because the two hosts pad the row differently (Doubts 24, Practice 20), and
 * a fixed bleed put the same board in two different places.
 */
const BOARD_EDGE = 14;

/**
 * The board's writing pace, in LETTERS a second (lib/word-reveal.ts). SPOKEN
 * is a teacher's speaking pace, used to guess how long the voice runs wherever
 * its length cannot be read. WRITE is the fastest the hand goes while keeping
 * time with the voice. FLUSH writes out whatever is left once the voice has
 * ended — quick, but still visibly written. A formula lands whole and then
 * costs its length, so the hand pauses over it.
 */
const SPOKEN_CPS = 15;
const WRITE_CPS = 40;
/** Never slower than this, so a long voice over a short answer still reads
 *  as writing rather than as a board that has stopped. */
const MIN_CPS = 6;
const FLUSH_CPS = 240;
/**
 * How quickly the pace may change, per second. The pace is worked out afresh
 * every frame from how much voice is left, and that estimate moves the whole
 * time the audio is arriving; followed directly, the hand sped up and slowed
 * down visibly from one moment to the next. Eased toward instead, it changes
 * the way a hand does — gradually.
 */
const PACE_EASE = 2.5;
/** How often the writing advances: ~30 a second, smooth to the eye. */
const WRITE_TICK_MS = 33;

/** Drag distance or flick speed on the board's header that puts it away. */
const BOARD_CLOSE_DISTANCE = 80;
const BOARD_CLOSE_VELOCITY = 700;

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
  leading,
  page,
  teacherFace,
  onBusyChange,
  gutter = 24,
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
  /** The side padding of the container the bar sits in, so the board can land
   *  at BOARD_EDGE from the screen whichever screen it is on. */
  gutter?: number;
  /**
   * A control on the LEFT of the bar's row — the textbook reader's topics
   * pill. `trailing`'s mirror, inside the block for the same reason: the board
   * takes its width from the block.
   */
  leading?: ReactNode;
  /** The textbook page being asked about, when `surface` is 'textbooks'. */
  page?: TextbookPageContext;
  /**
   * The student's own teacher's orb in place of the marigold mic, and "Ask
   * teacher" for the words — the textbook reader's pill, so the student is
   * asking THEM.
   */
  teacherFace?: TeacherId;
  /** True from the hold until the answer has finished; the textbook reader
   *  freezes its page for exactly that long. */
  onBusyChange?: (busy: boolean) => void;
}) {
  const recorder = useAudioRecorder(RECORDING);
  /** The board is capped rather than free: it grows upward over the solution,
   *  and past a little under half the screen there is nothing of the solution
   *  left to read behind it. */
  const { height: windowHeight, width: windowWidth } = useWindowDimensions();
  const [phase, setPhase] = useState<Phase>('idle');
  /** Tells the host (the textbook reader) when an exchange is under way, so it
   *  can hold its page still from the hold to the end of the answer. */
  const busyChange = useRef(onBusyChange);
  busyChange.current = onBusyChange;
  useEffect(() => {
    busyChange.current?.(phase !== 'idle');
  }, [phase]);
  useEffect(() => () => busyChange.current?.(false), []);
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

  /**
   * THE LIT DOCK — the 20a face: a marigold disc, the footer light and, on a
   * doubt, a stretching bar and a flag that steps aside. Practice wears the
   * same face without the stretch, because Next shares its row. Everything
   * below this point that mentions `litDock` exists for it.
   *
   * GEOMETRY IS MEASURED IN WINDOW COORDINATES, because the light has to be
   * placed against the SCREEN, not against this block. The block sits inside
   * the page's gutter and above the safe-area padding; a light anchored to it
   * started 24pt in from the left and floated 18pt off the bottom, and its
   * ring — computed as though it started at the screen edge — was drawn 24pt
   * right of the pill. One `measureInWindow` on the block gives both offsets.
   * The pill's vertical centre never moves: the row is centred and keeps its
   * height while the pill squeezes symmetrically, so the row's middle is it.
   */
  const litDock = surface === 'doubts' || surface === 'practice' || surface === 'textbooks';
  /** Practice's Next shares the row, so there the bar keeps its size. */
  const shared = !!trailing || !!leading;
  const clock = useClock();
  const down = useSharedValue(false);
  const motion = useDockMotion({ phase, level: voiceLevel, clock, down, stretch: !shared });
  const blockRef = useRef<View>(null);
  const [blockWin, setBlockWin] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
  const [rowBox, setRowBox] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
  const measureBlock = useCallback(() => {
    blockRef.current?.measureInWindow((x, y, w, h) => {
      setBlockWin((prev) =>
        prev && prev.x === x && prev.y === y && prev.w === w && prev.h === h ? prev : { x, y, w, h }
      );
    });
  }, []);

  /**
   * PRACTICE'S PILL, MEASURED ON ITS OWN. On a doubt the row is centred and
   * holds nothing but the pill and flag, so the row's middle is the pill's. In
   * Practice the pill is left and Next is right, so the row's middle is
   * nowhere near it — the light would bloom between the two buttons. There the
   * pill sits in a fixed slot (so its centre holds still while it squeezes)
   * and the slot is measured in window coordinates directly.
   */
  const slotRef = useRef<View>(null);
  const [slotWin, setSlotWin] = useState<{ x: number; y: number; w: number; h: number } | null>(null);
  const measureSlot = useCallback(() => {
    slotRef.current?.measureInWindow((x, y, w, h) => {
      setSlotWin((prev) =>
        prev && prev.x === x && prev.y === y && prev.w === w && prev.h === h ? prev : { x, y, w, h }
      );
    });
  }, []);

  const dockGeo: DockLightGeometry | null = useMemo(() => {
    if (!litDock || !blockWin) return null;
    const bottom = windowHeight - (blockWin.y + blockWin.h);
    if (shared) {
      if (!slotWin) return null;
      return {
        left: blockWin.x,
        bottom,
        rowCentreX: slotWin.x + slotWin.w / 2,
        cyFromBottom: windowHeight - (slotWin.y + slotWin.h / 2),
        flagSlot: 0,
      };
    }
    if (!rowBox) return null;
    return {
      left: blockWin.x,
      bottom,
      rowCentreX: blockWin.x + rowBox.x + rowBox.w / 2,
      cyFromBottom: bottom + blockWin.h - (rowBox.y + rowBox.h / 2),
      flagSlot: onReport ? DOCK_FLAG_SLOT : 0,
    };
  }, [litDock, shared, blockWin, slotWin, rowBox, windowHeight, onReport]);

  /**
   * The light exists while anything is lit or still settling, and not a frame
   * longer. It comes on the instant a finger lands — before the recorder has
   * started, which is when the press glow belongs — and goes once the motion
   * reports everything back at rest, so it fades out instead of popping off.
   */
  const [lit, setLit] = useState(false);
  useEffect(() => {
    if (litDock && phase !== 'idle') setLit(true);
  }, [litDock, phase]);
  useAnimatedReaction(
    () => motion.value.live,
    (live, prev) => {
      if (prev && !live) runOnJS(setLit)(false);
    }
  );

  // The bar's own animated pieces, all read from the one motion.
  const anchorAnim = useAnimatedStyle(() => {
    const m = motion.value;
    return { width: m.w - 6 * m.pr, height: DOCK_H0 - 2 * m.pr };
  });
  const flagSlotAnim = useAnimatedStyle(() => ({ width: DOCK_FLAG_SLOT * (1 - motion.value.ex) }));
  const flagAnim = useAnimatedStyle(() => {
    const ex = motion.value.ex;
    return {
      opacity: Math.max(0, Math.min(1, 1 - ex * 1.8)),
      transform: [{ scale: 1 - 0.35 * ex }],
    };
  });
  const discAnim = useAnimatedStyle(() => ({ transform: [{ scale: motion.value.ds }] }));
  /** Every answer that has reached the board this visit, oldest first. */
  const [thread, setThread] = useState<{ id: number; steps: FollowUpStep[] }[]>([]);
  const [boardOpen, setBoardOpen] = useState(false);
  /** Read from inside an answer's stream, which outlives the render it began in. */
  const boardOpenRef = useRef(false);
  useEffect(() => {
    boardOpenRef.current = boardOpen;
  }, [boardOpen]);
  /** One id per question asked, so an answer's steps land in its own section. */
  const questionIdRef = useRef(0);
  /** The question being worked out while the board is already up — it gets a
   *  placeholder section at once, rather than nothing until the first step. */
  const [pendingTurn, setPendingTurn] = useState<number | null>(null);

  /**
   * THE BOARD WRITES WHILE THE TEACHER TALKS.
   *
   * The written answer streams in seconds before the voice does, so the board
   * used to open on a page that was already finished — the student read it in
   * silence and the voice arrived narrating something they had already seen.
   * Now the text is held back: the board opens on a shimmer while the teacher
   * is still thinking, and the answer is written out, letter by letter, from the
   * moment the voice is heard, paced so the writing ends about when the voice
   * does. Nothing about what the server sends changes — only when each word
   * is shown.
   *
   * `written` is how many letters of the newest answer are on the board. Every
   * older answer is always whole. 0 means the shimmer.
   */
  const [written, setWritten] = useState<{ id: number; words: number } | null>(null);
  const revealRef = useRef<{
    id: number;
    /** Letters in the answer so far — it grows while the text is still streaming. */
    total: number;
    /** Letters written, fractional so a slow pace still moves every tick. */
    shown: number;
    /** The writing speed right now, letters a second — eased, see PACE_EASE. */
    pace: number;
    /** 'wait' until the voice is heard, then 'voice'; 'flush' writes the rest. */
    mode: 'wait' | 'voice' | 'flush';
    startAt: number;
    last: number;
    /** The answer is on the gapless player, whose length is known as it arrives. */
    pcm: boolean;
    voiceDone: boolean;
    textDone: boolean;
  } | null>(null);
  const tickRef = useRef<ReturnType<typeof setInterval> | null>(null);
  /** Keeps the newest words in view while they are being written, until the
   *  student scrolls the board themselves. */
  const followRef = useRef(true);

  const stopTick = useCallback(() => {
    if (tickRef.current) clearInterval(tickRef.current);
    tickRef.current = null;
  }, []);

  const tick = useCallback(() => {
    const r = revealRef.current;
    if (!r) return;
    const now = Date.now();
    const dt = Math.min(0.1, (now - r.last) / 1000);
    r.last = now;
    if (r.mode === 'wait' || now < r.startAt) return;
    // A PACE, NOT A POSITION. The words left are spread over the voice left,
    // every tick. Writing toward a position (words x fraction of the voice
    // played) stalled whenever the voice's known length grew — and on the
    // gapless player it grows the whole time the audio is arriving — so the
    // board wrote, stopped dead, and caught up. A pace only slows down.
    let rate = FLUSH_CPS;
    if (r.mode === 'voice') {
      // How long the voice runs: known exactly on the gapless player once its
      // stream has ended, growing as it arrives before then, and guessed from
      // a speaking pace wherever it cannot be read.
      const heard = r.pcm ? pcmFedSeconds() / 1.15 : 0;
      const runs = r.voiceDone && heard > 0 ? heard : Math.max(heard, r.total / SPOKEN_CPS);
      const left = Math.max(0.6, runs - (now - r.startAt) / 1000);
      rate = Math.max(MIN_CPS, Math.min(WRITE_CPS, (r.total - r.shown) / left));
    }
    // Eased, not jumped to — see PACE_EASE. A flush is a decision, not an
    // estimate, so it takes effect at once.
    r.pace = r.mode === 'flush' ? rate : r.pace + (rate - r.pace) * Math.min(1, dt * PACE_EASE);
    r.shown = Math.min(r.total, r.shown + r.pace * dt);
    const words = Math.floor(r.shown);
    setWritten((prev) => (prev && prev.id === r.id && prev.words === words ? prev : { id: r.id, words }));
    if (r.textDone && words >= r.total) stopTick();
  }, [stopTick]);

  /** Starts (or resumes) the ticker for the newest answer. */
  const runTick = useCallback(() => {
    if (!tickRef.current) tickRef.current = setInterval(tick, WRITE_TICK_MS);
  }, [tick]);

  /** Write the rest out quickly — the voice has ended, or never came. */
  const flushWords = useCallback(() => {
    const r = revealRef.current;
    if (!r || r.mode === 'flush') return;
    r.mode = 'flush';
    r.last = Date.now();
    r.startAt = Math.min(r.startAt, r.last);
    runTick();
  }, [runTick]);

  // The voice has ended (or failed): write out whatever is left.
  useEffect(() => {
    if (phase === 'idle') flushWords();
  }, [phase, flushWords]);

  /** Show the whole answer at once — the student stopped it or moved on. */
  const finishWords = useCallback(() => {
    const r = revealRef.current;
    stopTick();
    if (!r) return;
    revealRef.current = null;
    setWritten(null);
  }, [stopTick]);

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
    finishWords();
    setPhase('idle');
  }, [finishWords]);

  /**
   * A different question under the bar is a different conversation.
   *
   * Practice builds a fresh bar per question, but a snap holds up to three
   * questions under ONE bar, switched by index — and the thread, like the
   * history sent with each follow-up, would otherwise have carried the first
   * question's answers into the second.
   */
  const lastDoubt = useRef(doubtId);
  useEffect(() => {
    if (lastDoubt.current === doubtId) return;
    lastDoubt.current = doubtId;
    stopEverything();
    turnsRef.current = [];
    setThread([]);
    setPendingTurn(null);
    setBoardOpen(false);
  }, [doubtId, stopEverything]);

  useEffect(
    () => () => {
      abortRef.current?.abort();
      audioRef.current?.stop();
      pcmStop();
      if (pcmIdleRef.current) clearTimeout(pcmIdleRef.current);
      recorder.stop().catch(() => {});
      if (lingerRef.current) clearTimeout(lingerRef.current);
      if (meterRef.current) clearInterval(meterRef.current);
      stopTick();
      toPlayback();
    },
    [recorder, toPlayback, stopTick]
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
    finishWords();
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
  }, [doubtId, recorder, toPlayback, wake, fail, voiceLevel, finishWords]);

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
    // Nothing is cleared: the answers already on the board stay on it.
    const turnId = ++questionIdRef.current;
    if (boardOpenRef.current) setPendingTurn(turnId);

    // THE VOICE LEADS, THE WORDS FOLLOW — the classroom's own order.
    // Steps stream in well before the first sound (text ~2s, voice ~4-5s).
    // The board may open as soon as the answer earns it, because what it
    // shows until the voice is heard is a shimmer, not the answer; the words
    // are written from the moment the voice starts. An answer whose voice
    // never comes still gets written — at the end of the stream, quickly.
    revealRef.current = {
      id: turnId,
      total: 0,
      shown: 0,
      pace: SPOKEN_CPS,
      mode: 'wait',
      startAt: Number.MAX_SAFE_INTEGER,
      last: Date.now(),
      pcm: false,
      voiceDone: false,
      textDone: false,
    };
    setWritten({ id: turnId, words: 0 });
    followRef.current = true;
    /** The voice is audible `afterMs` from now: start writing then. */
    const voiceHeard = (afterMs: number, pcm: boolean) => {
      const r = revealRef.current;
      if (!r || r.id !== turnId || r.mode !== 'wait' || controller.signal.aborted) return;
      r.mode = 'voice';
      r.pcm = pcm;
      r.startAt = Date.now() + afterMs;
      r.last = Date.now();
      runTick();
    };

    // One writer for finished steps and the step mid-write. Partials carry
    // full text-so-far and REPLACE their step — upsert by n, never append,
    // or a step that streamed as six frames becomes six steps. The board
    // is EARNED the moment the answer has more than one step, or a long
    // first one — unless the board is already up, where every answer joins
    // the thread. WHEN a first opening happens is the reveal schedule's
    // decision above: the voice leads, the board follows.
    let onBoard = false;
    const absorb = (step: FollowUpStep) => {
      if (controller.signal.aborted) return;
      const at = arrived.findIndex((s) => s.n === step.n);
      if (at >= 0) arrived[at] = step;
      else arrived.push(step);
      arrived.sort((a, b) => a.n - b.n);
      const body = arrived.map((s) => s.text).join(' ');
      const r = revealRef.current;
      if (r && r.id === turnId) {
        r.total = countChars(arrived.map((s) => parseSolutionStep(s.text)));
      }
      if (onBoard || boardOpenRef.current || arrived.length > 1 || body.length > SHORT_ANSWER_CHARS) {
        onBoard = true;
        const steps = [...arrived];
        setThread((prev) => {
          const i = prev.findIndex((t) => t.id === turnId);
          if (i < 0) return [...prev, { id: turnId, steps }];
          const next = prev.slice();
          next[i] = { id: turnId, steps };
          return next;
        });
        // Open now: until the voice is heard the board shows a shimmer
        // where the answer will be written, never the answer itself.
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
            // First frame -> audible ~0.5s later (the anti-shake prebuffer).
            voiceHeard(500, true);
          },
          onAudio: (wav) => {
            if (controller.signal.aborted) return;
            inlinePlayer().enqueue(wav);
            // WAV clips start playing almost immediately once enqueued.
            voiceHeard(100, false);
          },
          onVoiceDone: (chunks) => {
            if (controller.signal.aborted) return;
            if (chunks === 0 && spokenText) {
              // The inline voice came to nothing; the old fetch still works.
              void speak(spokenText, controller);
              return;
            }
            streamDoneRef.current = true;
            // The voice's full length is known now, so the pace can settle on
            // it; with no voice at all, the words are written out at once.
            const r = revealRef.current;
            if (r && r.id === turnId) {
              r.voiceDone = true;
              if (r.mode === 'wait') flushWords();
            }
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
        surface,
        page
      );
      if (controller.signal.aborted) return;
      // The stream is done, so the word count is final. If no voice was ever
      // heard, this is the valve that writes the answer out.
      const done = revealRef.current;
      if (done && done.id === turnId) {
        done.textDone = true;
        if (done.mode === 'wait') flushWords();
        runTick();
      }
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
            if (ctl.signal.aborted) return;
            audio.enqueue(wav);
            voiceHeard(100, false);
          },
          ctl.signal,
          surface
        );
      } finally {
        streamDoneRef.current = true;
      }
    }
  }, [doubtId, recorder, toPlayback, wake, surface, fail, stopMeter, runTick, flushWords]);

  const listening = phase === 'listening';
  const speaking = phase === 'speaking';
  const disabled = !doubtId;

  const label = listening
    ? 'Listening…'
    : phase === 'thinking'
      ? 'Thinking…'
      : speaking
        ? 'Answering…'
        : teacherFace
          ? 'Ask teacher'
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
   * watching, leaving should get out of the way.
   *
   * ONE PROGRESS, THREE THINGS. It rose on a spring and faded on a separate
   * 220ms timer, so the fade was over while the board was still travelling
   * and the spring's overshoot read as a bump. Now a single 0-to-1 drives the
   * fade, a 24pt rise and a slight 97%-to-100% growth from the bottom edge,
   * on one long ease-out that decelerates into place — the board surfaces
   * out of the bar rather than being thrown up from it. The fade runs ahead
   * of the movement so the board is solid before it settles.
   */
  const open = useSharedValue(0);
  /** The finger's pull on the header, added on top. */
  const drag = useSharedValue(0);
  const [boardMounted, setBoardMounted] = useState(false);
  useEffect(() => {
    if (boardOpen) {
      setBoardMounted(true);
      drag.value = 0;
      open.value = withTiming(1, { duration: 560, easing: Easing.bezier(0.16, 1, 0.3, 1) });
      return;
    }
    open.value = withTiming(0, { duration: 300, easing: Easing.bezier(0.4, 0, 0.7, 0.2) }, (done) => {
      if (done) runOnJS(setBoardMounted)(false);
    });
  }, [boardOpen, open, drag]);

  const boardStyle = useAnimatedStyle(() => {
    const p = open.value;
    return {
      opacity: Math.min(1, p * 1.5),
      transform: [{ translateY: (1 - p) * 24 + drag.value }, { scale: 0.97 + 0.03 * p }],
    };
  });

  /** The grabber finally does what it says: pull the header down to put the
   *  board away. A short pull springs back. */
  const boardPan = Gesture.Pan()
    .onUpdate((e) => {
      drag.value = Math.max(0, e.translationY);
    })
    .onEnd((e) => {
      if (e.translationY > BOARD_CLOSE_DISTANCE || e.velocityY > BOARD_CLOSE_VELOCITY) {
        runOnJS(setBoardOpen)(false);
        return;
      }
      drag.value = withSpring(0, { damping: 22, stiffness: 260 });
    });

  /**
   * SCROLL TO WHAT IS NEW, ONCE. When a section for a new question lays out —
   * its placeholder first, then its answer in the same place — the board
   * brings its heading to the top, so the student reads the answer from its
   * first line while the voice starts on it. After that the scroll is theirs.
   */
  const boardScroll = useAnimatedRef<Animated.ScrollView>();
  const scrolled = useScrollOffset(boardScroll);
  /** Where the glide is taking the board, driven on the UI thread: the
   *  native animated scroll is a short fixed tween, and this is meant to feel
   *  like the page settling rather than being yanked. -1 is at rest. */
  const glideTo = useSharedValue(-1);
  useAnimatedReaction(
    () => glideTo.value,
    (y) => {
      if (y >= 0) scrollTo(boardScroll, 0, y, false);
    }
  );
  /** The student's own drag ends any glide in progress — the scroll is theirs. */
  const stopGlide = () => {
    cancelAnimation(glideTo);
    glideTo.value = -1;
    followRef.current = false;
  };
  /** Where the glide in progress is headed, so a nearer target never cuts
   *  short a farther one. */
  const glideEnd = useSharedValue(-1);
  /** Glide forward to `target`, or further along a glide already going there.
   *  Only a glide that FINISHED clears itself: a cancelled one used to reset
   *  the scroll target out from under the glide that replaced it. */
  const glide = (target: number, ms: number) => {
    runOnUI((t: number, d: number) => {
      'worklet';
      const moving = glideTo.value >= 0;
      if (moving ? t <= glideEnd.value + 1 : t <= scrolled.value + 1) return;
      glideEnd.value = t;
      const from = moving ? glideTo.value : scrolled.value;
      glideTo.value = from;
      glideTo.value = withTiming(t, { duration: d, easing: Easing.bezier(0.25, 0.8, 0.25, 1) }, (finished) => {
        if (finished) glideTo.value = -1;
      });
    })(target, ms);
  };
  /** The newest section's heading, as a scroll offset — where the board is
   *  trying to get to. -1 before any. */
  const headRef = useRef(-1);
  /**
   * EVERY TIME THE BOARD'S CONTENT CHANGES SIZE, finish the move.
   *
   * The glide to a new section is aimed the moment the section lays out, but
   * the room below it to scroll into arrives a frame or more later — so the
   * scroll was cut short where the old content ended, and the new answer was
   * written out of sight below the board until something else scrolled it.
   * So each size change re-aims: at the newest heading, and, while words are
   * being written past the bottom, at the newest line — the way a chat keeps
   * up with a reply. Only forward, and never once the student has scrolled
   * the board themselves.
   */
  const onBoardContent = (contentHeight: number) => {
    if (!followRef.current || !viewport) return;
    const end = contentHeight - viewport;
    const want = Math.min(end, headRef.current);
    if (want > 0) glide(want, 380);
  };
  /**
   * KEEP THE NEWEST LINE IN VIEW — measured by where the WORDS end.
   *
   * It used to follow the content's height. But the newest section is padded
   * to the board's full height (so its heading can always be scrolled to the
   * top), which made a short answer look 20pt taller than the board: the
   * board scrolled 20pt for nothing, and step 1 slid up under the fade at the
   * top. Now it follows the bottom of the written words, and only once they
   * actually run past the bottom of the board.
   */
  const sectionTop = useRef<Record<number, number>>({});
  const onWordsLayout = (id: number, height: number) => {
    if (!followRef.current || !viewport || !written || written.id !== id) return;
    const top = sectionTop.current[id];
    if (top === undefined) return;
    // `top` already counts the content's own top padding; 16 is a little
    // air under the last line.
    const bottom = top + height + 16;
    const want = bottom - viewport;
    if (want > headRef.current && want > 0) glide(want, 380);
  };
  const shownTurn = useRef(0);
  const onSectionLayout = (id: number, y: number) => {
    sectionTop.current[id] = y;
    if (id <= shownTurn.current) return;
    shownTurn.current = id;
    const target = Math.max(0, y - 6);
    headRef.current = target;
    followRef.current = true;
    glide(target, 560);
  };
  /** The scroll area's own height, so the newest section can be made tall
   *  enough to be scrolled up to the top however short its answer is. */
  const [viewport, setViewport] = useState(0);
  const showPending =
    boardOpen && thinking && pendingTurn !== null && !thread.some((t) => t.id === pendingTurn);
  const sections = thread.length + (showPending ? 1 : 0);

  /** The lit pill — disc, arc, bars and label — shared by Doubts and Practice. */
  const litFace = (
    <Animated.View style={[styles.anchorLit, anchorAnim]}>
      <Pressable
        style={[styles.face, styles.faceLit, disabled && styles.faceOff]}
        disabled={disabled}
        accessibilityLabel={speaking ? 'Stop the answer' : 'Hold to ask a follow-up'}
        onPressIn={() => {
          if (speaking || phase === 'thinking') return;
          down.value = true;
          setLit(true);
          // Practice's pill is not centred, so where it is matters; re-read
          // it at the moment of touch rather than trust the last layout.
          if (shared) {
            measureBlock();
            measureSlot();
          }
          void beginHold();
        }}
        onPressOut={() => {
          down.value = false;
          if (phase !== 'listening') return;
          void endHold();
        }}
        onPress={() => {
          if (speaking) stopEverything();
        }}>
        <Animated.View style={[styles.thumb, styles.thumbLit, discAnim]}>
          {teacherFace ? (
            // The teacher's orb is the face; bars and stop sit over it only
            // while they mean something, as the mic gives way to them.
            <>
              <TeacherOrbPoster teacher={teacherFace} size={40} />
              <ThinkingArc motion={motion} on={thinking} />
              {listening ? (
                <View style={styles.orbOverlay}>
                  <DockBars motion={motion} />
                </View>
              ) : speaking ? (
                <View style={styles.orbOverlay}>
                  <StopIcon color={INK} />
                </View>
              ) : null}
            </>
          ) : (
            <>
              <MarigoldDisc hot={listening} />
              <ThinkingArc motion={motion} on={thinking} />
              {listening ? (
                <DockBars motion={motion} />
              ) : speaking ? (
                <StopIcon color={INK} />
              ) : (
                <MicIcon color={INK} />
              )}
            </>
          )}
        </Animated.View>
        <Text style={styles.label} numberOfLines={1}>
          {label}
        </Text>
      </Pressable>
    </Animated.View>
  );

  return (
    <View ref={blockRef} style={styles.block} onLayout={litDock ? measureBlock : undefined}>
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
          style={[
            styles.board,
            {
              height: Math.round(windowHeight * BOARD_SHARE),
              marginHorizontal: -Math.max(0, gutter - BOARD_EDGE),
            },
            boardStyle,
          ]}>
          <GestureDetector gesture={boardPan}>
            <View style={styles.boardHead}>
              <View style={styles.boardGrab} />
              <View style={styles.boardTitleRow}>
                <Text style={styles.boardTitle}>Follow-up</Text>
                {/* A cross, not the word Done. "Done" claims the student
                    finished something; this board is an answer they are
                    putting away, and nothing is completed by closing it. */}
                <Pressable
                  onPress={() => setBoardOpen(false)}
                  hitSlop={12}
                  accessibilityRole="button"
                  accessibilityLabel="Close the follow-up answer"
                  style={({ pressed }) => [styles.boardClose, pressed && styles.boardClosePressed]}>
                  <CloseIcon />
                </Pressable>
              </View>
            </View>
          </GestureDetector>
          <View style={styles.boardBody}>
            <Animated.ScrollView
              ref={boardScroll}
              style={styles.boardScroll}
              contentContainerStyle={styles.boardContent}
              onLayout={(e) => setViewport(Math.round(e.nativeEvent.layout.height))}
              onScrollBeginDrag={stopGlide}
              onContentSizeChange={(_, h) => onBoardContent(h)}
              showsVerticalScrollIndicator={false}>
              {thread.map((turn, index) => (
                <View
                  key={turn.id}
                  style={[
                    index > 0 ? styles.turnAfter : null,
                    // The newest answer is always tall enough to sit at the top
                    // of the board, so the glide to it can land its heading
                    // there instead of stopping short at the end of the content.
                    index === thread.length - 1 && !showPending && viewport
                      ? { minHeight: viewport - 20 }
                      : null,
                  ]}
                  onLayout={(e) => onSectionLayout(turn.id, e.nativeEvent.layout.y)}>
                  {/* The words themselves, measured apart from the section's
                      padded height — see followWords. */}
                  <View onLayout={(e) => onWordsLayout(turn.id, e.nativeEvent.layout.height)}>
                    {sections > 1 ? <TurnLabel n={index + 1} /> : null}
                    {written && written.id === turn.id && written.words === 0 ? (
                      <BoardSheen />
                    ) : (
                      <BoardRail
                        steps={turn.steps}
                        words={written && written.id === turn.id ? written.words : undefined}
                      />
                    )}
                  </View>
                </View>
              ))}
              {showPending && pendingTurn !== null ? (
                <View
                  key={pendingTurn}
                  style={[
                    thread.length > 0 ? styles.turnAfter : null,
                    viewport ? { minHeight: viewport - 20 } : null,
                  ]}
                  onLayout={(e) => onSectionLayout(pendingTurn, e.nativeEvent.layout.y)}>
                  <TurnLabel n={thread.length + 1} />
                  <BoardSheen />
                </View>
              ) : null}
            </Animated.ScrollView>
            {/* Lines scrolling up out of the board dissolve under its heading
                instead of being sliced in half by it. */}
            <LinearGradient
              colors={['#FFFFFF', 'rgba(255,255,255,0)']}
              style={styles.boardFade}
              pointerEvents="none"
            />
          </View>
        </Animated.View>
      )}

      {leading && litDock ? (
        <>
          {/* THE TEXTBOOK'S ROW: its topics pill on the left, the bar on the
              right — Practice's arrangement mirrored. Same light, ring and
              board; the light is centred on the pill, not the row. */}
          {lit && dockGeo ? <DockLight width={windowWidth} motion={motion} geometry={dockGeo} /> : null}
          <View style={[styles.row, styles.rowSpread]}>
            {leading}
            <View style={styles.barColumn}>
              <View ref={slotRef} style={styles.barSlot} onLayout={measureSlot}>
                {litFace}
              </View>
              <Text style={[styles.hint, styles.hintLit]} numberOfLines={1}>
                {hint}
              </Text>
            </View>
          </View>
        </>
      ) : trailing && litDock ? (
        <>
          {/* PRACTICE WEARS THE SAME LIGHT, WITHOUT THE STRETCH. Next shares
              this row, so the bar keeps its resting width instead of growing
              into Next's space; the light, ring, disc and words are the
              doubt's own. The light is centred on the pill, not the row. */}
          {lit && dockGeo ? <DockLight width={windowWidth} motion={motion} geometry={dockGeo} /> : null}
          <View style={[styles.row, styles.rowSpread]}>
            <View style={styles.barColumn}>
              <View ref={slotRef} style={styles.barSlot} onLayout={measureSlot}>
                {litFace}
              </View>
              <Text style={[styles.hint, styles.hintLit]} numberOfLines={1}>
                {hint}
              </Text>
            </View>
            {trailing}
          </View>
        </>
      ) : trailing ? (
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
        {/* DOUBTS WEARS THE FOOTER LIGHT, stretch and all. The older ring
            branch below is what the bar wore before; the live classroom shares
            only that ring and is not changing. See components/dock-light.tsx. */}
        {litDock && lit && dockGeo ? (
          <DockLight width={windowWidth} motion={motion} geometry={dockGeo} />
        ) : null}
        {litDock ? (
          <View
            style={[styles.row, styles.rowLit]}
            onLayout={(e) => {
              const l = e.nativeEvent.layout;
              setRowBox((prev) =>
                prev && prev.x === l.x && prev.y === l.y && prev.w === l.width && prev.h === l.height
                  ? prev
                  : { x: l.x, y: l.y, w: l.width, h: l.height }
              );
            }}>
            {litFace}
            {/* The flag steps aside as the bar stretches: its share of the
                row shrinks to nothing, so the pill drifts to the centre, while
                the flag itself fades and shrinks to 65%. It cannot be pressed
                once it is mostly gone. */}
            {onReport ? (
              <Animated.View style={[styles.flagSlot, flagSlotAnim]}>
                <Animated.View
                  style={[styles.flagWrap, flagAnim]}
                  pointerEvents={phase === 'idle' ? 'auto' : 'none'}>
                  <Pressable
                    style={styles.disc}
                    onPress={onReport}
                    accessibilityLabel="Report a problem">
                    <FlagIcon />
                  </Pressable>
                </Animated.View>
              </Animated.View>
            ) : null}
          </View>
        ) : (
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
        )}
        <Text style={[styles.hint, litDock ? styles.hintLit : hintColor]} numberOfLines={1}>
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

function BoardRail({ steps, words }: { steps: FollowUpStep[]; words?: number }) {
  const rail = useMemo(
    () => steps.map((s) => parseSolutionStep(s.text)).filter((s) => s.title || s.lines.length),
    [steps]
  );
  // Parsed whole, then cut to the words written so far — see lib/word-reveal.
  const shown = useMemo(() => (words === undefined ? rail : revealChars(rail, words)), [rail, words]);
  // The first words fade up out of the shimmer rather than replacing it.
  const fade = useSharedValue(words === undefined ? 1 : 0);
  useEffect(() => {
    fade.value = withTiming(1, { duration: 320, easing: Easing.out(Easing.quad) });
  }, [fade]);
  const fadeStyle = useAnimatedStyle(() => ({ opacity: fade.value }));
  // Its own size, between the two: `full` markers and text read as oversized
  // in a panel this height, and `compact` was the smallest text on screen.
  return (
    <Animated.View style={fadeStyle}>
      <SolutionSteps steps={shown} size="board" />
    </Animated.View>
  );
}

/**
 * WHERE THE ANSWER WILL BE WRITTEN, while the teacher is still working it
 * out: a title and three lines in the shape a step takes on the board, with a
 * pale-gold light sweeping across them. Warm, not grey — it is the same
 * marigold family as the disc that is thinking below it, so the two read as
 * one thing happening rather than a loading state bolted onto a panel.
 */
const SHEEN_LINES = [
  { width: '62%', height: 15, gap: 0 },
  { width: '94%', height: 11, gap: 16 },
  { width: '86%', height: 11, gap: 11 },
  { width: '54%', height: 11, gap: 11 },
] as const;
const SHEEN_W = 140;
const SHEEN_MS = 1500;

function BoardSheen() {
  const [w, setW] = useState(0);
  const sweep = useSharedValue(0);
  const shown = useSharedValue(0);
  useEffect(() => {
    shown.value = withTiming(1, { duration: 260, easing: Easing.out(Easing.quad) });
    sweep.value = withRepeat(withTiming(1, { duration: SHEEN_MS, easing: Easing.inOut(Easing.quad) }), -1);
  }, [sweep, shown]);
  const wrapStyle = useAnimatedStyle(() => ({ opacity: shown.value }));
  const sheenStyle = useAnimatedStyle(() => ({
    transform: [{ translateX: -SHEEN_W + sweep.value * (w + SHEEN_W * 2) }],
  }));
  return (
    <Animated.View
      style={[styles.sheen, wrapStyle]}
      onLayout={(e) => setW(Math.round(e.nativeEvent.layout.width))}
      accessibilityLabel="Writing the answer">
      {SHEEN_LINES.map((l, i) => (
        <View key={i} style={[styles.sheenLine, { width: l.width, height: l.height, marginTop: l.gap }]}>
          {w > 0 ? (
            // One sweep for every line, measured off the block's width, so the
            // light crosses the lines together like one pass over a page.
            <Animated.View style={[styles.sheenLight, sheenStyle]}>
              <LinearGradient
                colors={['rgba(251,221,160,0)', 'rgba(255,246,224,0.95)', 'rgba(251,221,160,0)']}
                start={{ x: 0, y: 0.5 }}
                end={{ x: 1, y: 0.5 }}
                style={StyleSheet.absoluteFill}
              />
            </Animated.View>
          ) : null}
        </View>
      ))}
    </Animated.View>
  );
}

/** Heads each answer once there is more than one, so a scroll through the
 *  thread reads as a sequence rather than one long run of steps. */
function TurnLabel({ n }: { n: number }) {
  return <Text style={styles.turnLabel}>Follow-up {n}</Text>;
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
  /** The doubts face: no flat fill, the disc draws its own light. The hairline
   *  and the warm drop are the handoff's `inset 0 0 0 1px … , 0 4px 10px -4px …`. */
  thumbLit: {
    backgroundColor: 'transparent',
    boxShadow: [
      { offsetX: 0, offsetY: 0, blurRadius: 0, spreadDistance: 1, color: 'rgba(176,132,32,.22)', inset: true },
      { offsetX: 0, offsetY: 4, blurRadius: 10, spreadDistance: -4, color: 'rgba(176,132,32,.45)' },
    ],
  },
  /** The doubts row: no gap, because the flag's slot carries its own 10. */
  rowLit: { gap: 0 },
  /** Sized by the motion every frame; the pill fills it. */
  anchorLit: { position: 'relative' },
  /** Fills the animated anchor and keeps the label beside the disc as the
   *  pill stretches, rather than centring it in a widening space. */
  faceLit: { width: '100%', height: '100%', justifyContent: 'flex-start', paddingRight: 0 },
  /** Practice's pill at its resting size, so the squeeze shrinks it about
   *  its own centre instead of pulling its right edge toward its left. */
  barSlot: { width: DOCK_W0, height: DOCK_H0, alignItems: 'center', justifyContent: 'center' },
  /** Bars or stop drawn over the teacher's orb, centred on it. */
  orbOverlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255,255,255,0.55)',
    borderRadius: 99,
  },
  flagSlot: { height: DOCK_H0 },
  flagWrap: { position: 'absolute', left: 10, top: 0 },
  /** The handoff's hint: #3D3A33 in every state. Only the words change. */
  hintLit: { color: '#3D3A33' },
  /** Held: pressed slightly in, as the handoff's spring takes it to 0.9. */
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
   * A PAGE LIFTED OFF THE SOLUTION, in the bar's own material.
   *
   * It was cream on a white screen, ringed by an inset hairline under a heavy
   * drop, and it read as a different object from the bar beneath it — another
   * app's card. Now it is the dock's plate at page size: white, the same 1pt
   * hairline, the same soft lifted shadow, so board and bar are one family and
   * the board stands off the working behind it by lift alone. Rounded on all
   * four corners because it floats; it never meets the screen's edge.
   */
  board: {
    marginBottom: 16,
    // Grows from its bottom edge, where it comes out of the bar.
    transformOrigin: 'bottom',
    backgroundColor: '#FFFFFF',
    borderRadius: 24,
    borderWidth: 1,
    // Twice the dock's own hairline. White on a white screen, the board's
    // edge is the only thing separating it from the solution behind, and at
    // 8% it disappeared wherever the shadow was thin — along the top.
    borderColor: 'rgba(28,26,22,.16)',
    overflow: 'hidden',
    boxShadow: [
      { offsetX: 0, offsetY: 20, blurRadius: 44, spreadDistance: -18, color: 'rgba(28,26,22,0.34)' },
      { offsetX: 0, offsetY: 2, blurRadius: 8, spreadDistance: -2, color: 'rgba(28,26,22,0.08)' },
    ],
  },
  boardHead: { paddingTop: 9, paddingHorizontal: 22, paddingBottom: 10 },
  boardGrab: {
    alignSelf: 'center',
    width: 38,
    height: 4,
    borderRadius: 2,
    backgroundColor: 'rgba(28,26,22,0.14)',
  },
  boardTitleRow: { flexDirection: 'row', alignItems: 'center', gap: 10, marginTop: 12 },
  boardTitle: { flex: 1, fontFamily: 'Onest_600SemiBold', fontSize: 17, letterSpacing: -0.2, color: INK },
  /** The report sheet's close: a hairline disc, a target worth tapping. */
  boardClose: {
    width: 30,
    height: 30,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: 'rgba(28,26,22,0.12)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  boardClosePressed: { backgroundColor: 'rgba(28,26,22,0.05)' },
  boardBody: { flex: 1 },
  boardScroll: { flex: 1 },
  boardFade: { position: 'absolute', top: 0, left: 0, right: 0, height: 18 },
  boardContent: { paddingHorizontal: 22, paddingTop: 12, paddingBottom: 28 },
  /** Each later answer starts below a hairline, with room above it. */
  turnAfter: {
    marginTop: 26,
    paddingTop: 22,
    borderTopWidth: 1,
    borderTopColor: 'rgba(28,26,22,0.08)',
  },
  turnLabel: {
    marginBottom: 14,
    fontFamily: 'Onest_700Bold',
    fontSize: 10.5,
    letterSpacing: 0.9,
    textTransform: 'uppercase',
    color: INK_FAINT,
  },
  sheen: { paddingTop: 2, paddingBottom: 4 },
  sheenLine: { borderRadius: 99, overflow: 'hidden', backgroundColor: 'rgba(242,178,58,0.16)' },
  sheenLight: { position: 'absolute', top: 0, bottom: 0, left: 0, width: SHEEN_W },
});
