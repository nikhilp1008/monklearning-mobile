import { useEffect, useMemo, useRef, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, useWindowDimensions, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { useAudioPlayer } from 'expo-audio';
import { useSharedValue, withTiming } from 'react-native-reanimated';

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
import { xyPlot } from '@/lib/widgets/xy-plot';
import type { XyPlotParams } from '@/lib/widgets/xy-plot';
import { reactionScheme } from '@/lib/widgets/reaction-scheme';
import type { ReactionSchemeParams } from '@/lib/widgets/reaction-scheme';
import { processFlow } from '@/lib/widgets/process-flow';
import type { ProcessFlowParams } from '@/lib/widgets/process-flow';
import { moleculeStruct } from '@/lib/widgets/molecule-struct';
import type { MoleculeStructParams } from '@/lib/widgets/molecule-struct';
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

type Mode =
  | 'manual'
  | 'narration'
  | 'classroom'
  | 'xy_plot'
  | 'reaction_scheme'
  | 'process_flow'
  | 'molecule_struct';

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
        <Pressable
          onPress={() => setMode('xy_plot')}
          style={[styles.pill, mode === 'xy_plot' && styles.pillActive]}
        >
          <Text style={[styles.pillText, mode === 'xy_plot' && styles.pillTextActive]}>xy_plot</Text>
        </Pressable>
        <Pressable
          onPress={() => setMode('reaction_scheme')}
          style={[styles.pill, mode === 'reaction_scheme' && styles.pillActive]}
        >
          <Text style={[styles.pillText, mode === 'reaction_scheme' && styles.pillTextActive]}>
            reaction_scheme
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setMode('process_flow')}
          style={[styles.pill, mode === 'process_flow' && styles.pillActive]}
        >
          <Text style={[styles.pillText, mode === 'process_flow' && styles.pillTextActive]}>
            process_flow
          </Text>
        </Pressable>
        <Pressable
          onPress={() => setMode('molecule_struct')}
          style={[styles.pill, mode === 'molecule_struct' && styles.pillActive]}
        >
          <Text style={[styles.pillText, mode === 'molecule_struct' && styles.pillTextActive]}>
            molecule_struct
          </Text>
        </Pressable>
      </View>
      {mode === 'manual' && <ManualPreview />}
      {mode === 'narration' && <NarrationPreview />}
      {mode === 'classroom' && <ClassroomPreview />}
      {mode === 'xy_plot' && <XyPlotPreview />}
      {mode === 'reaction_scheme' && <ReactionSchemePreview />}
      {mode === 'process_flow' && <ProcessFlowPreview />}
      {mode === 'molecule_struct' && <MoleculeStructPreview />}
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

/**
 * xy_plot example payloads — one per real syllabus use, so correctness is
 * checkable here without a lesson existing. Each caption states the value the
 * readout must show; if the board disagrees with the caption, the widget is
 * wrong. The integrals are asserted in lib/widgets/__tests__/physics.test.ts.
 */
const XY_CASES: { label: string; expect: string; params: XyPlotParams }[] = [
  {
    label: 'Maths 12 Ch8 · area under y = x²',
    expect: 'area 2.67  (= 8/3)',
    params: { ...xyPlot.defaults, mode: 'area', curve: 'parabola', a: 1, b: 0, c: 0,
      x_min: 0, x_max: 3, shade_from: 0, shade_to: 2, x_label: 'x', y_label: 'y' },
  },
  {
    label: 'Maths 12 Ch8 · ∫₀^π sin x dx',
    expect: 'area 2',
    params: { ...xyPlot.defaults, mode: 'area', curve: 'sine', a: 1, b: 1, c: 0,
      x_min: 0, x_max: 6.283, shade_from: 0, shade_to: 3.1416, x_label: 'x', y_label: 'sin x' },
  },
  {
    label: 'Maths 12 Ch8 · area under y = x',
    expect: 'area 8',
    params: { ...xyPlot.defaults, mode: 'area', curve: 'line', a: 1, b: 0, c: 0,
      x_min: 0, x_max: 5, shade_from: 0, shade_to: 4, x_label: 'x', y_label: 'y' },
  },
  {
    label: 'Maths 11 Ch13 · statistics',
    expect: 'mean 5   median 4.50   sd 2',
    params: { ...xyPlot.defaults, mode: 'data', values: [2, 4, 4, 4, 5, 5, 7, 9],
      x_label: 'observation', y_label: 'value' },
  },
  {
    label: 'curve only · y = e^x',
    expect: 'no readout value — plain curve',
    params: { ...xyPlot.defaults, mode: 'curve', curve: 'exponential', a: 1, b: 1, c: 0,
      x_min: 0, x_max: 3, x_label: 'x', y_label: 'e^x' },
  },
];

function XyPlotPreview() {
  const box = useDiagramBox();
  // This tab carries two extra header rows the other tabs do not, so the
  // shared 0.72-of-window height overflows and the widget's own readout
  // collides with the caption above it. Dev-preview chrome only — the widget
  // is verified at the REAL board boxes by scripts/verify-render.mjs.
  const diagramBox = { availableWidth: box.availableWidth, maxHeight: box.maxHeight - 70 };
  const theme = useDevTheme();
  const [i, setI] = useState(0);
  const kase = XY_CASES[i];

  const event = useMemo(
    () => ({ seq: 0, tier: 'precomputed' as const,
      // WidgetPayload's params default to Record<string, unknown> — the wire
      // shape. Cast at that boundary rather than putting an index signature on
      // XyPlotParams, which would weaken the widget's own type everywhere.
      payload: { widget: 'xy_plot', version: 1,
        params: kase.params as unknown as Record<string, unknown> } }),
    [kase]
  );

  return (
    <View style={styles.body}>
      <View style={styles.controlsContent}>
        <Pressable onPress={() => setI((v) => (v + 1) % XY_CASES.length)} style={[styles.pill, styles.pillActive]}>
          <Text style={styles.pillTextActive}>next case</Text>
        </Pressable>
        <Text style={styles.readout}>{i + 1}/{XY_CASES.length}</Text>
      </View>
      <View style={[styles.controlsContent, { paddingTop: 0 }]}>
        <Text style={styles.pillText} numberOfLines={1}>
          {kase.label}  ·  expect: {kase.expect}
        </Text>
      </View>

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

/**
 * reaction_scheme example payloads — one per shape the ranking rule produces,
 * so correctness is checkable here without a lesson existing. Each `expect`
 * states what the readout must show; if the board disagrees with the string,
 * the widget is wrong. The chemistry behind every number is asserted in
 * lib/widgets/__tests__/physics.test.ts, and the arithmetic is written out in
 * lib/widgets/reaction-scheme/scheme-graph.ts's header.
 *
 * reaction_scheme is not in the REGISTRY yet, so these go through
 * `reactionScheme.validate()` and straight into the module's own Component
 * rather than through BoardWidget — which is the better test anyway, since it
 * puts validate() on the path a real payload takes.
 */
const RXN_CASES: { label: string; expect: string; params: ReactionSchemeParams }[] = [
  {
    label: 'chain · NCERT Cl.11 Hydrocarbons · ethane to benzene',
    expect: '3 steps   ΔC +4   M 78.11   (pathSteps 3, unsatEnd 4)',
    params: { ...reactionScheme.defaults },
  },
  {
    label: 'fan · NCERT Cl.12 Amines · benzenediazonium chloride',
    expect: '5 steps   5 ways   M 112.56   (pathSteps 1, NOT 5)',
    params: {
      species: ['C6H5N2Cl', 'C6H5Cl', 'C6H5Br', 'C6H5CN', 'C6H5OH', 'C6H6'],
      step_from: [0, 0, 0, 0, 0],
      step_to: [1, 2, 3, 4, 5],
      step_reagent: ['CuCl/HCl', 'CuBr/HBr', 'CuCN/KCN', 'H2O,warm', 'H3PO2'],
      step_kind: ['plain', 'plain', 'plain', 'major', 'minor'],
      highlight_step: 0,
      step_progress: 1,
      caption: 'Benzenediazonium chloride',
    },
  },
  {
    label: 'converge · NCERT Cl.12 Alcohols · three routes to ethanol',
    expect: '3 steps   M 46.07   (ranks 0,0,0,1 — no layout param)',
    params: {
      species: ['C2H4', 'C2H5Br', 'CH3CHO', 'C2H5OH'],
      step_from: [0, 1, 2],
      step_to: [3, 3, 3],
      step_reagent: ['H2O/H+', 'aq.KOH', 'H2/Ni'],
      step_kind: ['plain', 'plain', 'plain'],
      highlight_step: 1,
      step_progress: 1,
      caption: 'Three routes to ethanol',
    },
  },
  {
    label: 'Wurtz · NCERT Cl.12 Haloalkanes · the chain doubles',
    expect: '1 step   ΔC +2   M 58.12',
    params: {
      species: ['C2H5Br', 'C4H10'],
      step_from: [0],
      step_to: [1],
      step_reagent: ['Na, ether'],
      step_kind: ['major'],
      highlight_step: 0,
      step_progress: 1,
      caption: 'Wurtz reaction',
    },
  },
  {
    label: 'decarboxylation · NCERT Cl.11 Hydrocarbons · one carbon off',
    expect: '1 step   ΔC -1   M 16.04   (carbonDelta is SIGNED)',
    params: {
      species: ['CH3COONa', 'CH4'],
      step_from: [0],
      step_to: [1],
      step_reagent: ['NaOH/CaO'],
      step_kind: ['major'],
      highlight_step: 0,
      step_progress: 1,
      caption: 'Decarboxylation',
    },
  },
];

function ReactionSchemePreview() {
  const box = useDiagramBox();
  // This tab carries two extra header rows the other tabs do not, exactly as
  // the xy_plot tab does. Dev-preview chrome only — the widget is verified at
  // the REAL board boxes by scripts/verify-render.mjs.
  const diagramBox = { availableWidth: box.availableWidth, maxHeight: box.maxHeight - 70 };
  const theme = useDevTheme();
  const [i, setI] = useState(0);
  const kase = RXN_CASES[i];

  /** The one animatable param. Driven by hand here; by a cue in a real class. */
  const stepProgress = useSharedValue(1);
  const motion = useMemo(() => ({ step_progress: stepProgress }), [stepProgress]);

  const result = useMemo(() => reactionScheme.validate(kase.params), [kase]);

  return (
    <View style={styles.body}>
      <View style={styles.controlsContent}>
        <Pressable
          onPress={() => setI((v) => (v + 1) % RXN_CASES.length)}
          style={[styles.pill, styles.pillActive]}
        >
          <Text style={styles.pillTextActive}>next case</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            stepProgress.value = 0;
            stepProgress.value = withTiming(1, { duration: 1100 });
          }}
          style={styles.pill}
        >
          <Text style={styles.pillText}>trace step</Text>
        </Pressable>
        <Text style={styles.readout}>{i + 1}/{RXN_CASES.length}</Text>
      </View>
      <View style={[styles.controlsContent, { paddingTop: 0 }]}>
        <Text style={styles.pillText} numberOfLines={1}>
          {kase.label}  ·  expect: {kase.expect}
        </Text>
      </View>

      <View style={styles.boardArea}>
        <View style={{ width: diagramBox.availableWidth, height: diagramBox.maxHeight }}>
          {result.ok ? (
            <reactionScheme.Component
              params={result.params}
              motion={motion}
              width={diagramBox.availableWidth}
              height={diagramBox.maxHeight}
              theme={theme}
              services={DEV_SERVICES}
            />
          ) : (
            <Text style={styles.captionText}>validate(): {result.errors.join(' | ')}</Text>
          )}
        </View>
      </View>
    </View>
  );
}

/**
 * process_flow example payloads — one per real NCERT use, so correctness is
 * checkable here without a lesson existing. Each caption states what the board
 * must show; if the picture disagrees with the caption, the widget is wrong.
 * The structural numbers behind the readout are asserted in
 * lib/widgets/__tests__/physics.test.ts.
 *
 * The fourth and fifth are the pair this widget exists as ONE widget for:
 * cyclic and non-cyclic photophosphorylation are the same shape of payload and
 * must draw differently — a chain that closes, and a chain that does not.
 */
const FLOW_CASES: { label: string; expect: string; params: ProcessFlowParams }[] = [
  {
    label: 'Bio 11 Ch14 · citric acid (Krebs) cycle',
    expect: '8 boxes on a pointy-top ring · readout "8 steps · closed loop"',
    params: { ...processFlow.defaults },
  },
  {
    label: 'Bio 11 Ch14 · glycolysis (EMP pathway)',
    expect: '10 boxes serpentine over 2+ rows, no return edge · "9 steps · open"',
    params: {
      layout: 'chain',
      nodes: ['Glucose', 'G-6-P', 'F-6-P', 'F-1,6-bP', 'DHAP', 'G-3-P',
              '1,3-BPG', '3-PGA', '2-PGA', 'PEP'],
      closes: false, branch_at: -1, active_node: -1, caption: 'Glycolysis',
    },
  },
  {
    label: 'Bio 11 Ch13 · Calvin cycle',
    expect: '3 boxes, ring closes · "3 steps · closed loop"',
    params: {
      layout: 'ring',
      nodes: ['Carboxylation', 'Reduction', 'Regeneration'],
      closes: true, branch_at: -1, active_node: -1, caption: 'Calvin cycle',
    },
  },
  {
    label: 'Bio 11 Ch13 · CYCLIC photophosphorylation',
    expect: 'chain PLUS a return edge round the left lane · "4 steps · closed loop"',
    params: {
      layout: 'chain',
      nodes: ['PS I', 'Ferredoxin', 'Cyt b6f', 'Plastocyanin'],
      closes: true, branch_at: -1, active_node: -1, caption: 'Cyclic photophos.',
    },
  },
  {
    label: 'Bio 11 Ch13 · NON-cyclic photophosphorylation',
    expect: 'same shape, NO return edge · "6 steps · open"',
    params: {
      layout: 'chain',
      nodes: ['PS II', 'PQ', 'Cyt b6f', 'PC', 'PS I', 'Ferredoxin', 'NADP+'],
      closes: false, branch_at: -1, active_node: -1, caption: 'Non-cyclic photophos.',
    },
  },
  {
    label: 'Bio 11 Ch14 · fate of pyruvate (branch point)',
    expect: 'an amber spur leaves the Pyruvate box · "3 steps · open · 1 branch"',
    params: {
      layout: 'chain',
      nodes: ['Glucose', 'Pyruvate', 'Acetyl-CoA', 'Krebs cycle'],
      closes: false, branch_at: 1, active_node: -1, caption: 'Fate of pyruvate',
    },
  },
];

/**
 * Renders `processFlow.Component` DIRECTLY rather than through `BoardWidget`.
 * BoardWidget dispatches through `lib/widgets/registry.ts`, and process_flow is
 * not registered yet — registry wiring is a separate serial step. Swap this for
 * a `BoardWidget` + payload once it lands, the way the xy_plot tab does.
 */
function ProcessFlowPreview() {
  const box = useDiagramBox();
  const diagramBox = { availableWidth: box.availableWidth, maxHeight: box.maxHeight - 70 };
  const theme = useDevTheme();
  const [i, setI] = useState(0);
  const kase = FLOW_CASES[i];

  // The one animatable param. "walk" steps it so the highlight plate can be
  // watched travelling the pathway — which is the whole justification for
  // `active_node` being animatable at all, and the thing a still tree cannot
  // show.
  const active = useSharedValue(-1);
  const [activeStep, setActiveStep] = useState(-1);
  const motion = useMemo(() => ({ active_node: active }), [active]);

  const validated = useMemo(() => {
    const r = processFlow.validate(kase.params as unknown as Record<string, unknown>);
    return r.ok ? r.params : processFlow.defaults;
  }, [kase]);

  return (
    <View style={styles.body}>
      <View style={styles.controlsContent}>
        <Pressable
          onPress={() => {
            setI((v) => (v + 1) % FLOW_CASES.length);
            active.value = -1;
            setActiveStep(-1);
          }}
          style={[styles.pill, styles.pillActive]}
        >
          <Text style={styles.pillTextActive}>next case</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            const next = activeStep + 1 >= validated.nodes.length ? -1 : activeStep + 1;
            active.value = next;
            setActiveStep(next);
          }}
          style={[styles.pill, styles.pillActive]}
        >
          <Text style={styles.pillTextActive}>walk</Text>
        </Pressable>
        <Text style={styles.readout}>
          {i + 1}/{FLOW_CASES.length}
        </Text>
        <Text style={styles.readout}>n{activeStep}</Text>
      </View>
      <View style={[styles.controlsContent, { paddingTop: 0 }]}>
        <Text style={styles.pillText} numberOfLines={1}>
          {kase.label}  ·  expect: {kase.expect}
        </Text>
      </View>

      <View style={styles.boardArea}>
        <View style={{ width: diagramBox.availableWidth, height: diagramBox.maxHeight }}>
          <processFlow.Component
            params={validated}
            motion={motion}
            width={diagramBox.availableWidth}
            height={diagramBox.maxHeight}
            theme={theme}
            services={DEV_SERVICES}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: colors.paper },
  body: { flex: 1 },
  modeRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
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
