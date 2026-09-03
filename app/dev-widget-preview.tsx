import { useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAudioPlayer } from 'expo-audio';

import {
  BOARD_LEFT,
  BOARD_TOP,
  CaptionStrip,
  DEEP_AMBER,
  HAIRLINE,
  INK,
  INK_MUTED,
  MarginRule,
  RuledGround,
} from '@/components/classroom-chrome';
import { colors } from '@/constants/brand';
import { useLandscapeLock } from '@/hooks/use-landscape-lock';
import { BoardWidget } from '@/lib/widgets/BoardWidget';
import { fieldLines } from '@/lib/widgets/field-lines';
import type { FieldLinesParams } from '@/lib/widgets/field-lines';
import { useCueTrackByTime, type TimedCue } from '@/lib/widgets/use-cue-track';
import type { WidgetTheme } from '@/lib/widgets/types';

/**
 * DEV-ONLY. Not part of the live classroom flow, not linked from any nav —
 * open it with a deep link (`monklearningapp://dev-widget-preview`) or
 * `router.push('/dev-widget-preview')` from a debug menu.
 *
 * Two tabs answer two different questions:
 *
 *  - Manual: does `field_lines` render correctly, at the real board box, on a
 *    real device? (Answered — see the session that built this file.)
 *  - Narration: does the diagram land with the WORDS? The only question that
 *    actually matters before any server work gets scoped. The gate the
 *    project set before this ("Physics 12 Ch 1 end to end") turned out to be
 *    unreachable without an entire unbuilt precompute pipeline — this tab is
 *    the reachable version of the same question: one concept, one real
 *    synthesized narration, one cue track anchored to MEASURED PCM durations
 *    (not estimated from word count), played locally with no server, no
 *    endpoints, no migrations.
 */

/** Copy of live-classroom.tsx's own BOARD_RIGHT_GUTTER — not exported from
 *  anywhere shared, so duplicated here rather than reaching into that
 *  screen's module scope for one constant. */
const BOARD_RIGHT_GUTTER = 116;

const CONFIGURATIONS: FieldLinesParams['configuration'][] = [
  'point',
  'dipole',
  'like_charges',
  'parallel_plates',
];
const ANNOTATIONS: FieldLinesParams['annotate'][] = [null, 'neutral_point', 'termination'];

/**
 * Physics 12 Ch 1 · "Electric Field Lines" — narration synthesized with
 * dronav1project/scripts/synth_rumik.py's real `synth_section_segments`
 * (the same measured-PCM-duration mechanism `board_reveal_at_*` already uses
 * in the lesson pipeline), one segment at a time so each segment's own
 * duration is recoverable. `atMs` below is that measurement, not an estimate.
 * Regenerate via the one-off script this session wrote if the narration text
 * ever changes — do not hand-edit these numbers.
 */
const NARRATION_CUES: TimedCue[] = [
  {
    atMs: 0,
    // annotate omitted: null is already fieldLines.defaults' own value, and
    // Cue.patch's value type (number | string | boolean) has no `null` case.
    patch: { configuration: 'point', charge_uc: 6, show_arrows: true },
  },
  {
    atMs: 10546,
    patch: { charge_uc: 14 },
    caption: 'Lines: {{lineCount}}',
  },
  {
    atMs: 23311,
    patch: { configuration: 'dipole' },
  },
  {
    atMs: 31295,
    patch: { annotate: 'termination' },
  },
];
const NARRATION_TOTAL_MS = 44010;

/**
 * The actual spoken sentences, same boundaries as NARRATION_CUES — kept
 * separate because `Cue.caption` is a {{token}}-interpolated OVERLAY
 * (only present on the one cue that needs it), not a transcript. The
 * classroom-chrome `CaptionStrip` shows what Drona is saying right now, which
 * is this, not the cue overlay.
 */
const NARRATION_SEGMENTS: { atMs: number; text: string }[] = [
  {
    atMs: 0,
    text: 'This is a single positive point charge. Notice how its electric field lines radiate straight outward in every direction, evenly spaced around it.',
  },
  {
    atMs: 10546,
    text:
      "Now watch what happens as we make the charge stronger. The field lines don't just get longer, more of them appear, because the number of lines is proportional to the charge itself.",
  },
  {
    atMs: 23311,
    text: "Let's bring in a second charge, this time negative, right next to it. This pair is called a dipole.",
  },
  {
    atMs: 31295,
    text:
      'Every line that leaves the positive charge curves around and lands exactly on the negative one. None of them escape to infinity, because the total charge here is exactly zero.',
  },
];

function narrationTextAt(currentTimeMs: number): string {
  let text = NARRATION_SEGMENTS[0].text;
  for (const seg of NARRATION_SEGMENTS) {
    if (seg.atMs <= currentTimeMs) text = seg.text;
    else break;
  }
  return text;
}

type Mode = 'manual' | 'narration' | 'classroom';

export default function DevWidgetPreviewScreen() {
  useLandscapeLock();
  const [mode, setMode] = useState<Mode>('manual');
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.root, { paddingLeft: insets.left, paddingRight: insets.right }]}>
      <View style={[styles.modeRow, { paddingTop: insets.top || 10 }]}>
        <Pressable
          onPress={() => setMode('manual')}
          style={[styles.pill, mode === 'manual' && styles.pillActive]}
        >
          <Text style={[styles.pillText, mode === 'manual' && styles.pillTextActive]}>manual</Text>
        </Pressable>
        <Pressable
          onPress={() => setMode('narration')}
          style={[styles.pill, mode === 'narration' && styles.pillActive]}
        >
          <Text style={[styles.pillText, mode === 'narration' && styles.pillTextActive]}>narration</Text>
        </Pressable>
        <Pressable
          onPress={() => setMode('classroom')}
          style={[styles.pill, mode === 'classroom' && styles.pillActive]}
        >
          <Text style={[styles.pillText, mode === 'classroom' && styles.pillTextActive]}>classroom</Text>
        </Pressable>
      </View>
      {mode === 'manual' && <ManualPreview />}
      {mode === 'narration' && <NarrationPreview />}
      {mode === 'classroom' && <ClassroomPreview />}
    </View>
  );
}

/**
 * Drives `field_lines` off the real, measured narration track. Shared by
 * `NarrationPreview` (bare debug view) and `ClassroomPreview` (dressed in the
 * real classroom's own chrome) so both read off the exact same clock.
 */
function useNarrationPlayback() {
  const player = useAudioPlayer(require('../assets/dev/field-lines-narration-test.mp3'));
  const [currentTimeMs, setCurrentTimeMs] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const rafRef = useRef<number | null>(null);

  /**
   * CLAUDE.md rule 2: never drive cue sync from `useAudioPlayerStatus` (500ms
   * default update interval, unreliable on Android) — read `player.currentTime`
   * directly on a rAF loop instead. This is that loop.
   */
  useEffect(() => {
    function tick() {
      setCurrentTimeMs(player.currentTime * 1000);
      setIsPlaying(player.playing);
      rafRef.current = requestAnimationFrame(tick);
    }
    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current != null) cancelAnimationFrame(rafRef.current);
    };
  }, [player]);

  const { params, motion, caption } = useCueTrackByTime(
    fieldLines,
    fieldLines.defaults,
    NARRATION_CUES,
    currentTimeMs
  );

  return { player, currentTimeMs, isPlaying, params, motion, caption };
}

function useDiagramBox() {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  /** Same formula as live-classroom.tsx's `diagramBox`. `windowHeight` here
   *  stands in for the real screen's measured `boardHeight` — an
   *  approximation (this screen has no ruled-paper chrome above/below the
   *  board to subtract), close enough for a "does it render legibly" check,
   *  not a pixel-exact stand-in for the production layout. */
  return useMemo(
    () => ({
      availableWidth: Math.max(0, windowWidth - BOARD_LEFT - BOARD_RIGHT_GUTTER),
      maxHeight: windowHeight * 0.72,
    }),
    [windowWidth, windowHeight]
  );
}

function useDevTheme(): WidgetTheme {
  return useMemo(
    () => ({
      ink: INK,
      inkMuted: INK_MUTED,
      rule: HAIRLINE,
      accent: DEEP_AMBER,
      surface: colors.paper,
      fontFamily: 'AnekLatin_400Regular',
      monoFontFamily: 'Menlo',
    }),
    []
  );
}

const DEV_SERVICES = {
  resolveStructure: async (ref: string) => {
    throw new Error(`dev-widget-preview: no structure cache for ${ref}`);
  },
};

function ManualPreview() {
  const diagramBox = useDiagramBox();
  const theme = useDevTheme();

  const [configuration, setConfiguration] = useState<FieldLinesParams['configuration']>('point');
  const [chargeUc, setChargeUc] = useState(10);
  const [showArrows, setShowArrows] = useState(true);
  const [annotate, setAnnotate] = useState<FieldLinesParams['annotate']>(null);

  const event = useMemo(
    () => ({
      seq: 0,
      tier: 'precomputed' as const,
      payload: {
        widget: 'field_lines',
        version: 1,
        params: { configuration, charge_uc: chargeUc, show_arrows: showArrows, annotate },
      },
    }),
    [configuration, chargeUc, showArrows, annotate]
  );

  return (
    <View style={styles.body}>
      <ScrollView
        horizontal
        style={styles.controls}
        contentContainerStyle={styles.controlsContent}
        showsHorizontalScrollIndicator={false}
      >
        {CONFIGURATIONS.map((c) => (
          <Pressable
            key={c}
            onPress={() => setConfiguration(c)}
            style={[styles.pill, configuration === c && styles.pillActive]}
          >
            <Text style={[styles.pillText, configuration === c && styles.pillTextActive]}>{c}</Text>
          </Pressable>
        ))}
        <Pressable onPress={() => setChargeUc((v) => Math.max(4, v - 2))} style={styles.pill}>
          <Text style={styles.pillText}>charge_uc −2</Text>
        </Pressable>
        <Text style={styles.readout}>{chargeUc}</Text>
        <Pressable onPress={() => setChargeUc((v) => Math.min(20, v + 2))} style={styles.pill}>
          <Text style={styles.pillText}>charge_uc +2</Text>
        </Pressable>
        <Pressable onPress={() => setShowArrows((v) => !v)} style={[styles.pill, showArrows && styles.pillActive]}>
          <Text style={[styles.pillText, showArrows && styles.pillTextActive]}>arrows</Text>
        </Pressable>
        <Pressable
          onPress={() => setAnnotate((a) => ANNOTATIONS[(ANNOTATIONS.indexOf(a) + 1) % ANNOTATIONS.length])}
          style={styles.pill}
        >
          <Text style={styles.pillText}>annotate: {annotate ?? 'none'}</Text>
        </Pressable>
      </ScrollView>

      <View style={styles.boardArea}>
        <View style={{ width: diagramBox.availableWidth, height: diagramBox.maxHeight }}>
          <BoardWidget
            event={event}
            activeSeq={0}
            width={diagramBox.availableWidth}
            height={diagramBox.maxHeight}
            theme={theme}
            services={DEV_SERVICES}
            onGap={(reason, detail) => console.warn('[dev-widget-preview][board-gap]', reason, detail)}
          />
        </View>
      </View>
    </View>
  );
}

function NarrationPreview() {
  const diagramBox = useDiagramBox();
  const theme = useDevTheme();
  const { player, currentTimeMs, isPlaying, params, motion, caption } = useNarrationPlayback();

  return (
    <View style={styles.body}>
      <View style={styles.controlsContent}>
        <Pressable
          onPress={() => (player.playing ? player.pause() : player.play())}
          style={[styles.pill, styles.pillActive]}
        >
          <Text style={styles.pillTextActive}>{isPlaying ? 'pause' : 'play'}</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            player.pause();
            player.seekTo(0);
          }}
          style={styles.pill}
        >
          <Text style={styles.pillText}>restart</Text>
        </Pressable>
        <Text style={styles.readout}>
          {(currentTimeMs / 1000).toFixed(1)}s / {(NARRATION_TOTAL_MS / 1000).toFixed(1)}s
        </Text>
      </View>

      <View style={styles.boardArea}>
        <View style={{ width: diagramBox.availableWidth, height: diagramBox.maxHeight }}>
          <fieldLines.Component
            params={params}
            motion={motion}
            width={diagramBox.availableWidth}
            height={diagramBox.maxHeight}
            theme={theme}
            services={DEV_SERVICES}
          />
        </View>
        {caption && (
          <View style={styles.captionBar}>
            <Text style={styles.captionText}>{caption}</Text>
          </View>
        )}
      </View>
    </View>
  );
}

/**
 * The same narration playback, dressed in the real classroom's own chrome
 * (`RuledGround`, `MarginRule`, `CaptionStrip`, the real board padding) —
 * "how this looks like in a class" rather than the bare debug harness above.
 * Not a claim that this IS `app/live-classroom.tsx` — no socket, no session,
 * no header/rail/mic controls — only the visual frame a diagram actually
 * sits inside there, which is what the question was about.
 */
function ClassroomPreview() {
  const { width: windowWidth, height: windowHeight } = useWindowDimensions();
  const theme = useDevTheme();
  const { player, currentTimeMs, isPlaying, params, motion, caption } = useNarrationPlayback();

  const diagramBox = useMemo(
    () => ({
      availableWidth: Math.max(0, windowWidth - BOARD_LEFT - BOARD_RIGHT_GUTTER),
      maxHeight: (windowHeight - BOARD_TOP * 2) * 0.72,
    }),
    [windowWidth, windowHeight]
  );

  return (
    <View style={styles.classroomScreen}>
      <RuledGround height={windowHeight} />
      <View style={styles.classroomContent}>
        <View style={{ width: diagramBox.availableWidth, height: diagramBox.maxHeight }}>
          <fieldLines.Component
            params={params}
            motion={motion}
            width={diagramBox.availableWidth}
            height={diagramBox.maxHeight}
            theme={theme}
            services={DEV_SERVICES}
          />
        </View>
      </View>
      <MarginRule />

      <CaptionStrip open listening={false} text={caption ?? narrationTextAt(currentTimeMs)} />

      <View style={styles.classroomTransport}>
        <Pressable
          onPress={() => (player.playing ? player.pause() : player.play())}
          style={[styles.pill, styles.pillActive]}
        >
          <Text style={styles.pillTextActive}>{isPlaying ? 'pause' : 'play'}</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            player.pause();
            player.seekTo(0);
          }}
          style={styles.pill}
        >
          <Text style={styles.pillText}>restart</Text>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.paper },
  body: { flex: 1 },
  modeRow: {
    flexDirection: 'row',
    gap: 8,
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: HAIRLINE,
  },
  controls: { flexGrow: 0, borderBottomWidth: 1, borderBottomColor: HAIRLINE },
  controlsContent: { flexDirection: 'row', alignItems: 'center', gap: 8, padding: 10 },
  pill: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 14,
    borderWidth: 1,
    borderColor: HAIRLINE,
  },
  pillActive: { backgroundColor: DEEP_AMBER, borderColor: DEEP_AMBER },
  pillText: { color: INK, fontSize: 13 },
  pillTextActive: { color: colors.paper },
  readout: { color: INK, fontSize: 13, fontFamily: 'Menlo', minWidth: 24, textAlign: 'center' },
  boardArea: { flex: 1, alignItems: 'center', justifyContent: 'center' },
  captionBar: {
    position: 'absolute',
    bottom: 8,
    left: 8,
    right: 8,
    alignItems: 'center',
  },
  captionText: {
    color: INK,
    backgroundColor: colors.paper,
    borderWidth: 1,
    borderColor: HAIRLINE,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 4,
    fontFamily: 'Menlo',
    fontSize: 13,
  },
  classroomScreen: {
    flex: 1,
    backgroundColor: '#fff',
    position: 'relative',
    overflow: 'hidden',
  },
  classroomContent: {
    flex: 1,
    paddingTop: BOARD_TOP,
    paddingBottom: BOARD_TOP,
    paddingLeft: BOARD_LEFT,
    paddingRight: BOARD_RIGHT_GUTTER,
    alignItems: 'center',
    justifyContent: 'center',
  },
  classroomTransport: {
    position: 'absolute',
    top: 10,
    right: 10,
    flexDirection: 'row',
    gap: 8,
  },
});
