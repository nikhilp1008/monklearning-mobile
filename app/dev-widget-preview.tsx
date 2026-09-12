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
import { CHARGE_UC_MAX, CHARGE_UC_MIN, fieldLines } from '@/lib/widgets/field-lines';
import type { FieldLinesParams } from '@/lib/widgets/field-lines';
import { xyPlot } from '@/lib/widgets/xy-plot';
import type { XyPlotParams } from '@/lib/widgets/xy-plot';
import { reactionScheme } from '@/lib/widgets/reaction-scheme';
import type { ReactionSchemeParams } from '@/lib/widgets/reaction-scheme';
import { processFlow } from '@/lib/widgets/process-flow';
import type { ProcessFlowParams } from '@/lib/widgets/process-flow';
import { circuitNetwork } from '@/lib/widgets/circuit-network';
import type { CircuitNetworkParams } from '@/lib/widgets/circuit-network';
import { moleculeStruct } from '@/lib/widgets/molecule-struct';
import type { MoleculeStructParams } from '@/lib/widgets/molecule-struct';
import { useCueTrackByTime, type TimedCue } from '@/lib/widgets/use-cue-track';
import type { WidgetTheme } from '@/lib/widgets/types';
import { apiFetch } from '@/lib/api';
import type { AssetRow } from '@/lib/widgets/labelled-figure/figure-file-cache';
import { r2FigureResolver, setChapterAssets } from '@/lib/widgets/labelled-figure/r2-figure-resolver';
import { createFigureResolver, type FigureRecord } from '@/lib/widgets/labelled-figure/figure-resolver';
import { toFigureRecord, validateLabelSet } from '@/lib/widgets/labelled-figure/label-set';
import { describeViolations, gateLabelSet, layoutFigure } from '@/lib/widgets/labelled-figure/figure-layout';
import FROG_LABEL_FIXTURE from '@/test/fixtures/frog-circulatory-labels.preview.json';

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
  | 'molecule_struct'
  | 'circuit_network' | 'figures' | 'wframes' | 'froglabels';

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
        <Pressable
          onPress={() => setMode('circuit_network')}
          style={[styles.pill, mode === 'circuit_network' && styles.pillActive]}
        >
          <Text style={[styles.pillText, mode === 'circuit_network' && styles.pillTextActive]}>
            circuit_network
          </Text>
        </Pressable>
      <Pressable
          onPress={() => setMode('figures')}
          style={[styles.pill, mode === 'figures' && styles.pillActive]}
        >
          <Text style={[styles.pillText, mode === 'figures' && styles.pillTextActive]}>figures</Text>
        </Pressable>
        <Pressable
          onPress={() => setMode('wframes')}
          style={[styles.pill, mode === 'wframes' && styles.pillActive]}
        >
          <Text style={[styles.pillText, mode === 'wframes' && styles.pillTextActive]}>wframes</Text>
        </Pressable>
        <Pressable
          onPress={() => setMode('froglabels')}
          style={[styles.pill, mode === 'froglabels' && styles.pillActive]}
        >
          <Text style={[styles.pillText, mode === 'froglabels' && styles.pillTextActive]}>froglabels</Text>
        </Pressable>
      </View>
      {mode === 'figures' && <FigureLab />}
      {mode === 'wframes' && <WidgetFrameLab />}
      {mode === 'froglabels' && <FrogLabelLab />}
      {mode === 'manual' && <ManualPreview />}
      {mode === 'narration' && <NarrationPreview />}
      {mode === 'classroom' && <ClassroomPreview />}
      {mode === 'xy_plot' && <XyPlotPreview />}
      {mode === 'reaction_scheme' && <ReactionSchemePreview />}
      {mode === 'process_flow' && <ProcessFlowPreview />}
      {mode === 'molecule_struct' && <MoleculeStructPreview />}
      {mode === 'circuit_network' && <CircuitNetworkPreview />}
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
      fontFamily: 'Onest_400Regular',
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


/* ------------------------------------------------------------- figure lab */
/*
 * The illustration tier at EXACT board frames, through the production path.
 *
 * Everything here is the real thing: the chapter rows come from
 * GET /drona/chapter/{id}/figures, the art is downloaded and verified by
 * figure-file-cache into cacheDirectory/figures/, and the render goes through
 * BoardWidget — resolver, validate(), Component — not a hand-mounted
 * LabelledFigure. The only synthetic part is the board EVENT, because the lab
 * is standing in for slot 3, which is the one piece that lives server-side.
 *
 * The figure-letter pills are a figure cue, made tactile: a cue switching
 * from figure a to figure b is, on the client, exactly a payload whose
 * asset_slug names the other member of the set.
 */
const LAB_CONCEPTS = [
  {
    label: 'cockroach morphology',
    chapterId: '5ec9dcb0-2679-5515-9422-5ca618283550',
    conceptSlug: 'bio11-ch7-cockroach--morphology-and-digestive-system',
    figures: ['a', 'b'],
  },
  {
    label: 'connective tissue',
    chapterId: '5ec9dcb0-2679-5515-9422-5ca618283550',
    conceptSlug: 'bio11-ch7-connective-tissue--types-and-matrix',
    figures: ['a', 'b', 'c', 'd', 'e', 'f'],
  },
  {
    label: 'phylum arthropoda',
    chapterId: 'f6bee128-d309-5443-b6f2-e9914769623d',
    conceptSlug: 'bio11-ch4-phylum-arthropoda',
    figures: ['a', 'b', 'c', 'd', 'e', 'f'],
  },
] as const;

/** The two frames the gate binds at: spec-small and the wide board. */
const LAB_FRAMES = [
  { label: '343\u00d7236', w: 343, h: 236 },
  { label: '900\u00d7430', w: 900, h: 430 },
] as const;

function FigureLab() {
  const theme = useDevTheme();
  const [concept, setConcept] = useState(0);
  const [frame, setFrame] = useState(0);
  const [fig, setFig] = useState(0);
  const [status, setStatus] = useState('fetching chapter assets\u2026');

  const c = LAB_CONCEPTS[concept];
  const letter = c.figures[Math.min(fig, c.figures.length - 1)];
  const slug = `${c.conceptSlug}--${letter}`;
  const box = LAB_FRAMES[frame];

  useEffect(() => {
    let cancelled = false;
    setStatus('fetching chapter assets\u2026');
    void apiFetch<{ assets: AssetRow[] }>(`/drona/chapter/${c.chapterId}/figures`)
      .then((res) => {
        if (cancelled) return;
        setChapterAssets(res.assets ?? []);
        setStatus(`chapter has ${res.assets?.length ?? 0} assets; downloading\u2026`);
        return r2FigureResolver.prefetch(
          (res.assets ?? [])
            .filter((a) => a.asset_slug.startsWith(c.conceptSlug))
            .map((a) => a.asset_slug)
        );
      })
      .then((rep) => {
        if (cancelled || !rep) return;
        setStatus(rep.missing.length
          ? `missing: ${rep.missing.join(', ')}`
          : `set cached from file:// (${rep.resolved.length} figures)`);
      })
      .catch((e) => { if (!cancelled) setStatus(`prefetch failed: ${String(e)}`); });
    return () => { cancelled = true; };
  }, [c]);

  return (
    <ScrollView contentContainerStyle={{ padding: 12, gap: 10, alignItems: 'flex-start' }}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
        {LAB_CONCEPTS.map((k, i) => (
          <Pressable key={k.conceptSlug} onPress={() => { setConcept(i); setFig(0); }}
            style={[styles.pill, i === concept && styles.pillActive]}>
            <Text style={[styles.pillText, i === concept && styles.pillTextActive]}>{k.label}</Text>
          </Pressable>
        ))}
        {LAB_FRAMES.map((f, i) => (
          <Pressable key={f.label} onPress={() => setFrame(i)}
            style={[styles.pill, i === frame && styles.pillActive]}>
            <Text style={[styles.pillText, i === frame && styles.pillTextActive]}>{f.label}</Text>
          </Pressable>
        ))}
        {c.figures.map((g, i) => (
          <Pressable key={g} onPress={() => setFig(i)}
            style={[styles.pill, i === fig && styles.pillActive]}>
            <Text style={[styles.pillText, i === fig && styles.pillTextActive]}>fig {g}</Text>
          </Pressable>
        ))}
      </View>
      <Text style={{ fontSize: 11, color: INK_MUTED }}>{slug} \u00b7 {status}</Text>
      <View style={{ width: box.w, height: box.h, borderWidth: StyleSheet.hairlineWidth,
                     borderColor: HAIRLINE, backgroundColor: colors.paper }}>
        <BoardWidget
          event={{ seq: 1, tier: 'precomputed',
                   payload: { widget: 'labelled_figure', version: 1,
                              params: { asset_slug: slug, lang: 'english' } } }}
          activeSeq={1}
          width={box.w}
          height={box.h}
          theme={theme}
          services={DEV_SERVICES}
          figures={r2FigureResolver}
          onGap={(reason, detail) => console.warn('[figure-lab gap]', reason, detail)}
        />
      </View>
    </ScrollView>
  );
}

/* --------------------------------------------------------- frog label lab */
/*
 * PRE-REVIEW ONLY. Draws the frog circulatory plate with its svg-authored
 * label anchors so a human can look at the placement BEFORE anything is
 * marked reviewed.
 *
 * IT DOES NOT TOUCH THE REVIEW GATE. `r2-figure-resolver` refuses a set with
 * no `reviewed_by`, and that refusal is correct and stays exactly as it is —
 * an unreviewed anchor is a guess about where a structure is, and a correct
 * word on the wrong organ is the worst thing this pipeline can ship. So this
 * lab does not publish a set, does not add reviewed_by, and does not call the
 * production loader for labels. It builds a record directly with
 * `toFigureRecord` from a checked-in fixture, and feeds it to BoardWidget
 * through a throwaway resolver. Nothing here can make an unreviewed set reach
 * a classroom: the classroom asks R2, and R2 has no set for this slug.
 *
 * The ART still comes through the real path — the production resolver
 * downloads and sha-verifies it into the file:// cache — so what is on screen
 * is the real plate at the real frame, with proposed anchors on top.
 *
 * FOUR TERMS ARE MISSING ON PURPOSE. The draft carries 16 terms; the authored
 * SVG had leader endpoints for 12. lung, buccal cavity, glottis and skin have
 * a null anchor, `validateLabelSet` refuses null anchors, and inventing
 * coordinates for them is precisely the failure the gate exists to prevent.
 * They need a person to place them.
 */
/** Screenshot driver: set these, let fast refresh apply, capture. Tapping the
 *  pills is unreliable at the 900 frame, which is taller than the viewport and
 *  pushes them off-screen — so the taps land on the board instead. */
const SHOT_FRAME = -1;   // 0 = 343x236, 1 = 900x430
const SHOT_GROUP = -1;   // 0 = heart, 1 = arterial, 2 = venous
const FROG_SLUG = 'bio11-ch7-frog--circulatory-and-respiratory-systems--a';
const FROG_CHAPTER = '5ec9dcb0-2679-5515-9422-5ca618283550';

function FrogLabelLab() {
  const theme = useDevTheme();
  const [frameSel, setFrame] = useState(0);
  const [lang, setLang] = useState<'english' | 'hinglish'>('english');
  const [groupSel, setGroupIdx] = useState(0);
  // Read EVERY render, not just at mount: fast refresh keeps component state,
  // so a changed `useState` initial value does nothing. A module const does.
  // -1 in either means "the pills decide".
  const frame = SHOT_FRAME >= 0 ? SHOT_FRAME : frameSel;
  const groupIdx = SHOT_GROUP >= 0 ? SHOT_GROUP : groupSel;
  const [status, setStatus] = useState('fetching chapter assets\u2026');
  const [record, setRecord] = useState<FigureRecord | null>(null);


  useEffect(() => {
    let cancelled = false;
    const check = validateLabelSet(FROG_LABEL_FIXTURE as unknown as Record<string, unknown>);
    if (!check.ok) {
      setStatus(`fixture rejected: ${check.errors.join('; ')}`);
      return;
    }
    void apiFetch<{ assets: AssetRow[] }>(`/drona/chapter/${FROG_CHAPTER}/figures`)
      .then((res) => {
        if (cancelled) return;
        setChapterAssets(res.assets ?? []);
        return r2FigureResolver.prefetch([FROG_SLUG]);
      })
      .then((rep) => {
        if (cancelled || !rep) return;
        // The plate-only record the production resolver produces (no labels,
        // because R2 has no published set for this slug — as it should not).
        const plate = r2FigureResolver.get(FROG_SLUG);
        if (!plate) {
          setStatus(`art did not resolve: ${rep.missing.join(', ') || 'unknown'}`);
          return;
        }
        const art = plate.art.source as { uri?: string };
        if (!art?.uri) {
          setStatus('plate resolved without a file uri');
          return;
        }
        setRecord(toFigureRecord(check.set, art.uri));
        setStatus(`art from file:// cache \u00b7 ${check.set.labels.length} placed labels \u00b7 4 unplaced omitted`);
      })
      .catch((e) => { if (!cancelled) setStatus(`failed: ${String(e)}`); });
    return () => { cancelled = true; };
  }, []);

  const group = record?.groups[Math.min(groupIdx, record.groups.length - 1)]?.id ?? '';
  // The gate's verdict for the whole set, shown beside the render: a reviewer
  // should not have to run jest to see whether this set would be accepted.
  const gate = useMemo(
    () => (record ? describeViolations(gateLabelSet(record.labels, record.groups, record.art)) : ''),
    [record]
  );

  const devResolver = useMemo(
    () => (record ? createFigureResolver(async () => record, [record]) : r2FigureResolver),
    [record]
  );

  return (
    <ScrollView contentContainerStyle={{ padding: 12, gap: 10, alignItems: 'flex-start' }}>
      {(() => {
        // ONE frame at a time, chosen by the pill. Both stacked no longer fits
        // on the phone once the 900 box is there, and a screenshot of a frame
        // that is half off-screen proves nothing about that frame.
        const f = LAB_FRAMES[frame];
        return (
          <View style={{ gap: 4 }}>
            <Text style={{ fontSize: 10, color: INK_MUTED }}>{f.label} · {lang} · {group}</Text>
            {record && (
              <Text style={{ fontSize: 9, color: INK_MUTED }}>
                {layoutFigure(
                  { ...record, active_group: group, lang } as never,
                  f.w, f.h
                ).labels.map((l) =>
                  `${l.id}:${l.dir}/${l.leaderLen.toFixed(0)}pt${l.overlapped ? '!OVERLAP' : ''}`
                ).join('  ')}
              </Text>
            )}
            <View style={{ width: f.w, height: f.h, borderWidth: StyleSheet.hairlineWidth,
                           borderColor: HAIRLINE, backgroundColor: colors.paper }}>
              {record && (
                <BoardWidget
                  event={{ seq: 1, tier: 'precomputed',
                           payload: { widget: 'labelled_figure', version: 1,
                                      params: { asset_slug: FROG_SLUG, lang,
                                                active_group: group } } }}
                  activeSeq={1}
                  width={f.w}
                  height={f.h}
                  theme={theme}
                  services={DEV_SERVICES}
                  figures={devResolver}
                  onGap={(reason, detail) => console.warn('[frog-label-lab gap]', reason, detail)}
                />
              )}
            </View>
          </View>
        );
      })()}
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
        {LAB_FRAMES.map((f, i) => (
          <Pressable key={f.label} onPress={() => setFrame(i)}
            style={[styles.pill, i === frame && styles.pillActive]}>
            <Text style={[styles.pillText, i === frame && styles.pillTextActive]}>{f.label}</Text>
          </Pressable>
        ))}
        {(record?.groups ?? []).map((g, i) => (
          <Pressable key={g.id} onPress={() => setGroupIdx(i)}
            style={[styles.pill, i === groupIdx && styles.pillActive]}>
            <Text style={[styles.pillText, i === groupIdx && styles.pillTextActive]}>{g.id}</Text>
          </Pressable>
        ))}
        {(['english', 'hinglish'] as const).map((l) => (
          <Pressable key={l} onPress={() => setLang(l)}
            style={[styles.pill, l === lang && styles.pillActive]}>
            <Text style={[styles.pillText, l === lang && styles.pillTextActive]}>{l}</Text>
          </Pressable>
        ))}
      </View>
      <Text style={{ fontSize: 11, color: INK_MUTED }}>{FROG_SLUG} — {status}</Text>
      <Text style={{ fontSize: 10, color: INK_MUTED }}>GATE: {gate}</Text>
    </ScrollView>
  );
}

/* ------------------------------------------------------- widget frame lab */
/*
 * W7's exact-frame evidence: the two live-class widget payloads rendered
 * through BoardWidget at the gate's binding frames. Mirrors FigureLab, minus
 * the network — a registry widget's payload is self-contained, so the only
 * synthetic part is (again) the board EVENT standing in for the server.
 *
 * The payloads reproduce the classes verified on production 2026-09-10:
 * xy_plot's "area under y = x² + 1 on [0, 2]" (readout area 4.67 = 14/3) and
 * field_lines' parallel plates. Params are written out in full, defaults
 * included, so what renders here is exactly what validate() admits — not a
 * partial payload leaning on defaulting behaviour.
 */
const WFRAME_CASES = [
  {
    label: 'xy_plot (maths 12 ch8)',
    payload: {
      widget: 'xy_plot', version: 4,
      params: {
        mode: 'area', curve: 'parabola', a: 1, b: 0, c: 1,
        curve2: 'line', a2: 0, b2: 0, c2: 0,
        x_min: 0, x_max: 2, shade_from: 0, shade_to: 2,
        values: [], x_label: 'x', y_label: 'y', integrate_along: 'x',
        pieces: [], tangent_at: 0, tangent_kind: 'none',
        secant: 'none', secant_from: 0, secant_to: 0,
        family_param: 'a', family_values: [], named_shape: '',
      },
    },
  },
  {
    label: 'field_lines (physics 12 ch1)',
    payload: {
      widget: 'field_lines', version: 2,
      params: {
        configuration: 'parallel_plates', charge_uc: 10, surface_scale: 1,
        enclosed: true, show_arrows: true, annotate: null, caption: '',
      },
    },
  },
] as const;

function WidgetFrameLab() {
  const theme = useDevTheme();
  const [caseIdx, setCaseIdx] = useState(0);
  const [frame, setFrame] = useState(0);

  const kase = WFRAME_CASES[caseIdx];
  const box = LAB_FRAMES[frame];

  return (
    <ScrollView contentContainerStyle={{ padding: 12, gap: 10, alignItems: 'flex-start' }}>
      <View style={{ flexDirection: 'row', flexWrap: 'wrap', gap: 6 }}>
        {WFRAME_CASES.map((k, i) => (
          <Pressable key={k.label} onPress={() => setCaseIdx(i)}
            style={[styles.pill, i === caseIdx && styles.pillActive]}>
            <Text style={[styles.pillText, i === caseIdx && styles.pillTextActive]}>{k.label}</Text>
          </Pressable>
        ))}
        {LAB_FRAMES.map((f, i) => (
          <Pressable key={f.label} onPress={() => setFrame(i)}
            style={[styles.pill, i === frame && styles.pillActive]}>
            <Text style={[styles.pillText, i === frame && styles.pillTextActive]}>{f.label}</Text>
          </Pressable>
        ))}
      </View>
      <Text style={{ fontSize: 11, color: INK_MUTED }}>{kase.payload.widget}@{kase.payload.version} · {box.label}</Text>
      <View style={{ width: box.w, height: box.h, borderWidth: StyleSheet.hairlineWidth,
                     borderColor: HAIRLINE, backgroundColor: colors.paper }}>
        <BoardWidget
          event={{ seq: 1, tier: 'precomputed', payload: kase.payload }}
          activeSeq={1}
          width={box.w}
          height={box.h}
          theme={theme}
          services={DEV_SERVICES}
          figures={r2FigureResolver}
          onGap={(reason, detail) => console.warn('[wframe-lab gap]', reason, detail)}
        />
      </View>
    </ScrollView>
  );
}

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
        {/* Bounded by the SCHEMA's own constants, not by copies of 4 and 20.
            `validate()` no longer launders an illegal charge_uc into a legal
            one — a value at or below zero is refused outright — so a harness
            that walked past a bound would blank the board instead of quietly
            drawing something else, and a bound that moved in physics.ts would
            take this screen with it. */}
        <Pressable
          onPress={() => setChargeUc((v) => Math.max(CHARGE_UC_MIN, v - 2))}
          style={styles.pill}
        >
          <Text style={styles.pillText}>charge_uc −2</Text>
        </Pressable>
        <Text style={styles.readout}>{chargeUc}</Text>
        <Pressable
          onPress={() => setChargeUc((v) => Math.min(CHARGE_UC_MAX, v + 2))}
          style={styles.pill}
        >
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
    label: 'Maths 12 Ch8 · between y = x and y = x²',
    expect: 'area 0.17  (= 1/6)',
    params: { ...xyPlot.defaults, mode: 'area_between', curve: 'line', a: 1, b: 0, c: 0,
      curve2: 'parabola', a2: 1, b2: 0, c2: 0,
      x_min: -0.2, x_max: 1.2, shade_from: 0, shade_to: 1, x_label: 'x', y_label: 'y' },
  },
  {
    // The crossings are at 0 and 1, both inside the shaded span — the case a
    // single |∫(f−g)| gets wrong (it would say 1.50).
    label: 'Maths 12 Ch8 · the same pair across BOTH crossings',
    expect: 'area 1.83  (= 11/6, not 3/2)',
    params: { ...xyPlot.defaults, mode: 'area_between', curve: 'line', a: 1, b: 0, c: 0,
      curve2: 'parabola', a2: 1, b2: 0, c2: 0,
      x_min: -1.2, x_max: 2.2, shade_from: -1, shade_to: 2, x_label: 'x', y_label: 'y' },
  },
  {
    // Transposed on purpose: the horizontal axis carries the textbook's y.
    label: 'Maths 12 Ch8 · y² = 4ax and its latus rectum (a = 1)',
    expect: 'area 2.67  (= 8a²/3)',
    params: { ...xyPlot.defaults, mode: 'area_between', curve: 'line', a: 0, b: 0, c: 1,
      curve2: 'parabola', a2: 0.25, b2: 0, c2: 0,
      x_min: -2.4, x_max: 2.4, shade_from: -2, shade_to: 2, x_label: 'y', y_label: 'x' },
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

/**
 * molecule_struct example payloads — the six reference values from
 * lib/widgets/molecule-struct/vsepr-math.ts's header, plus the two cases that
 * exist to fail a naive implementation. Each `expect` states what the readout
 * must show; if the board disagrees with the string, the widget is wrong. The
 * chemistry behind every number is asserted in
 * lib/widgets/__tests__/physics.test.ts.
 *
 * THE ONE THING TO LOOK AT FIRST is methane: four bonds drawn 90 DEGREES APART
 * on the page, annotated 109.5°. Those are deliberately different numbers —
 * 109.5 cannot be drawn in a plane, and a widget that "fixed" the drawing by
 * measuring it would be reporting a projection as a physical angle.
 *
 * molecule_struct is not in the REGISTRY yet, so these go through
 * `moleculeStruct.validate()` and straight into the module's own Component
 * rather than through BoardWidget — which is the better test anyway, since it
 * puts validate() on the path a real payload takes.
 */
const MOL_CASES: { label: string; expect: string; params: MoleculeStructParams }[] = [
  {
    label: 'CH4 · NCERT Cl.11 Unit 4 Table 4.6 · the drawn/reported split',
    expect: 'sp3   tetrahedral   109.5°  —  bonds DRAWN 90° apart on the page',
    params: { ...moleculeStruct.defaults },
  },
  {
    label: 'NH3 · the middle point of NCERT’s own 109.5 / 107 / 104.5 series',
    expect: 'sp3   trigonal pyramidal   107°   (= 109.5 − 1×2.5), one lone pair on top',
    params: {
      mode: 'electron_domain', centre: 'N', bond_pairs: 3, lone_pairs: 1,
      ligands: ['H', 'H', 'H'], bond_orders: [1, 1, 1],
      bond_styles: ['plain', 'wedge', 'dash'],
      charge: 0, bracket: false, show_lone_pairs: true, show_angle: true,
      label: 'Ammonia', highlight_site: -1,
    },
  },
  {
    label: 'H2O · the third point — and the −2.5 constant is READ OFF, not tuned',
    expect: 'sp3   bent   104.5°   (= 109.5 − 2×2.5), two lone-pair dot pairs above',
    params: {
      mode: 'electron_domain', centre: 'O', bond_pairs: 2, lone_pairs: 2,
      ligands: ['H', 'H'], bond_orders: [1, 1], bond_styles: ['plain', 'plain'],
      charge: 0, bracket: false, show_lone_pairs: true, show_angle: true,
      label: 'Water', highlight_site: -1,
    },
  },
  {
    label: 'PCl5 · the fixture that proves secondary_angle_deg is real',
    expect: 'sp3d   trigonal bipyramidal   120° / 90°   — TWO angles, not one',
    params: {
      mode: 'electron_domain', centre: 'P', bond_pairs: 5, lone_pairs: 0,
      ligands: ['Cl', 'Cl', 'Cl', 'Cl', 'Cl'], bond_orders: [1, 1, 1, 1, 1],
      bond_styles: ['plain', 'plain', 'plain', 'wedge', 'dash'],
      charge: 0, bracket: false, show_lone_pairs: true, show_angle: true,
      label: 'Phosphorus(V) chloride', highlight_site: 3,
    },
  },
  {
    label: 'O3 · NCERT’s own formal-charge worked example',
    expect: 'sp2   bent   117.5°   · centre +1, terminals 0 and −1, sum 0',
    params: {
      mode: 'electron_domain', centre: 'O', bond_pairs: 2, lone_pairs: 1,
      ligands: ['O', 'O'], bond_orders: [2, 1], bond_styles: ['plain', 'plain'],
      charge: 0, bracket: false, show_lone_pairs: true, show_angle: true,
      label: 'Ozone', highlight_site: 1,
    },
  },
  {
    label: 'XeF2 · THE COUNTER-FIXTURE · a naive rule gives ~172.5 and is wrong',
    expect: 'sp3d   linear   180°   — three EQUATORIAL lone pairs, bonds trans',
    params: {
      mode: 'electron_domain', centre: 'Xe', bond_pairs: 2, lone_pairs: 3,
      ligands: ['F', 'F'], bond_orders: [1, 1], bond_styles: ['plain', 'plain'],
      charge: 0, bracket: false, show_lone_pairs: true, show_angle: false,
      label: 'Xenon difluoride', highlight_site: -1,
    },
  },
  {
    label: 'CO2 · the ink fixture · two collinear bonds have a zero-height bbox',
    expect: 'sp   linear   180°   — the arc is FORCED on, or coverage is 0%',
    params: {
      mode: 'electron_domain', centre: 'C', bond_pairs: 2, lone_pairs: 0,
      ligands: ['O', 'O'], bond_orders: [2, 2], bond_styles: ['plain', 'plain'],
      charge: 0, bracket: false, show_lone_pairs: true, show_angle: false,
      label: 'Carbon dioxide', highlight_site: -1,
    },
  },
  {
    label: 'K4[Fe(CN)6] · NCERT Cl.12 Unit 5 · coordination mode',
    expect: 'ox +2   CN 6   EAN 36   · six dative bonds inside brackets, 4− outside',
    params: {
      mode: 'coordination', centre: 'Fe', bond_pairs: 6, lone_pairs: 0,
      ligands: ['CN', 'CN', 'CN', 'CN', 'CN', 'CN'],
      bond_orders: [1, 1, 1, 1, 1, 1],
      bond_styles: ['dative', 'dative', 'dative', 'dative', 'dative', 'dative'],
      charge: -4, bracket: true, show_lone_pairs: false, show_angle: false,
      label: 'Hexacyanoferrate(II)', highlight_site: 2,
    },
  },
  {
    label: 'Ni(CO)4 · the EAN cross-check · same 36 from a different triple',
    expect: 'ox 0   CN 4   EAN 36   (28 − 0 + 8, not 26 − 2 + 12)',
    params: {
      mode: 'coordination', centre: 'Ni', bond_pairs: 4, lone_pairs: 0,
      ligands: ['CO', 'CO', 'CO', 'CO'], bond_orders: [1, 1, 1, 1],
      bond_styles: ['dative', 'dative', 'dative', 'dative'],
      charge: 0, bracket: false, show_lone_pairs: false, show_angle: false,
      label: 'Nickel tetracarbonyl', highlight_site: -1,
    },
  },
  {
    label: '[F−H···F]− · interaction mode · the SMALLEST site radius (72.4 at 343)',
    expect: 'linear   180°   · one plain and one DOTTED bond, legend row at the foot',
    params: {
      mode: 'interaction', centre: 'H', bond_pairs: 2, lone_pairs: 0,
      ligands: ['F', 'F'], bond_orders: [1, 1],
      bond_styles: ['plain', 'hbond'],
      charge: -1, bracket: true, show_lone_pairs: true, show_angle: false,
      label: 'Bifluoride ion', highlight_site: 1,
    },
  },
  {
    label: 'H3O+ · interaction mode · a DATIVE bond, and all three numbers right',
    expect: 'trigonal pyramidal   107°   · formal charge +1 on the O, arrow on bond 3',
    params: {
      mode: 'interaction', centre: 'O', bond_pairs: 3, lone_pairs: 1,
      ligands: ['H', 'H', 'H'], bond_orders: [1, 1, 1],
      bond_styles: ['plain', 'plain', 'dative'],
      charge: 1, bracket: false, show_lone_pairs: true, show_angle: true,
      label: 'Hydronium ion', highlight_site: 2,
    },
  },
];

/**
 * Renders `moleculeStruct.Component` DIRECTLY rather than through
 * `BoardWidget`. BoardWidget dispatches through `lib/widgets/registry.ts`, and
 * molecule_struct is not registered yet — registry wiring is a separate serial
 * step. Swap this for a `BoardWidget` + payload once it lands, the way the
 * xy_plot tab does.
 */
function MoleculeStructPreview() {
  const box = useDiagramBox();
  const diagramBox = { availableWidth: box.availableWidth, maxHeight: box.maxHeight - 70 };
  const theme = useDevTheme();
  const [i, setI] = useState(0);
  const kase = MOL_CASES[i];

  /**
   * The one animatable param. "ring next" walks it so the marker can be
   * watched travelling the site ring — which is the whole justification for
   * `highlight_site` being animatable at all, and the thing a still tree
   * cannot show. -1 is the "none" sentinel, because 0 is a valid site.
   */
  const siteSv = useSharedValue(-1);
  const [site, setSite] = useState(-1);
  const motion = useMemo(() => ({ highlight_site: siteSv }), [siteSv]);

  const result = useMemo(() => moleculeStruct.validate(kase.params), [kase]);
  const derived = useMemo(
    () => (result.ok ? moleculeStruct.computeDerived(result.params) : null),
    [result]
  );

  return (
    <View style={styles.body}>
      <View style={styles.controlsContent}>
        <Pressable
          onPress={() => {
            setI((v) => (v + 1) % MOL_CASES.length);
            siteSv.value = -1;
            setSite(-1);
          }}
          style={[styles.pill, styles.pillActive]}
        >
          <Text style={styles.pillTextActive}>next case</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            const n = result.ok ? result.params.bond_pairs : 0;
            const next = site + 1 >= n ? -1 : site + 1;
            setSite(next);
            siteSv.value = next < 0 ? -1 : withTiming(next, { duration: 700 });
          }}
          style={[styles.pill, styles.pillActive]}
        >
          <Text style={styles.pillTextActive}>ring next site</Text>
        </Pressable>
        <Text style={styles.readout}>{i + 1}/{MOL_CASES.length}</Text>
        <Text style={styles.readout}>s{site}</Text>
        {derived ? (
          <Text style={styles.readout}>SN {derived.steric_number}</Text>
        ) : null}
      </View>
      <View style={[styles.controlsContent, { paddingTop: 0 }]}>
        <Text style={styles.pillText} numberOfLines={1}>
          {kase.label}  ·  expect: {kase.expect}
        </Text>
      </View>

      <View style={styles.boardArea}>
        <View style={{ width: diagramBox.availableWidth, height: diagramBox.maxHeight }}>
          {result.ok ? (
            <moleculeStruct.Component
              params={{ ...result.params, highlight_site: site }}
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
 * circuit_network example payloads — one per real NCERT use, so correctness is
 * checkable here without a lesson existing. Each `expect` states what the board
 * must show; if the picture disagrees with it, the widget is wrong. The five
 * numeric reference values behind these readouts are asserted in
 * lib/widgets/__tests__/physics.test.ts and derived by hand in
 * lib/widgets/circuit-network/circuit-math.ts's header.
 *
 * The last two are the pair the `topology` param exists for: the same four
 * resistors reduce to different equivalents in a series-parallel and in a
 * ladder, and the drawing is what says which one the question means.
 */
const CIRCUIT_CASES: { label: string; expect: string; params: CircuitNetworkParams }[] = [
  {
    label: 'Phys 12 Ch3 · two banks in series (ref 1)',
    expect: 'Req 6 Ω   I 2.29 A   V 13.7 V  (4‖4 = 2, 12‖6 = 4)',
    params: { ...circuitNetwork.defaults },
  },
  {
    label: 'Phys 12 Ch3 · metre bridge, null at 53.5 cm (ref 2)',
    expect: 'a diamond with G at its centre · X 5.21 Ω, NOT 6 Ω · "deflect" swings the needle',
    params: {
      topology: 'bridge',
      elements: [
        { kind: 'resistor', name: 'P', value: 6 },
        { kind: 'resistor', name: 'Q', value: 4 },
        { kind: 'resistor', name: 'R', value: 3 },
        { kind: 'resistor', name: 'S', value: 5 },
        { kind: 'galvanometer', name: 'G', value: 50 },
      ],
      source_v: 2, internal_r: 0, bridge_null_cm: 53.5,
      show_current: false, t_frac: 0, bridge_delta: 0,
      caption: 'Metre bridge',
    },
  },
  {
    label: 'Phys 12 Ch3 · RC charging, τ = 0.1 s (ref 3)',
    expect: 'a real GAP between the plates, filling as "charge" runs · τ 100 ms',
    params: {
      topology: 'series',
      elements: [
        { kind: 'resistor', name: 'R', value: 20000 },
        { kind: 'capacitor', name: 'C', value: 5 },
      ],
      source_v: 12, internal_r: 0, bridge_null_cm: 50,
      show_current: true, t_frac: 0, bridge_delta: 0,
      caption: 'RC charging',
    },
  },
  {
    label: 'Phys 12 Ch2 · three capacitors in series (ref 4)',
    expect: 'Ceq 923 nF (= 12/13 µF), NOT 9 µF · no Req, no current',
    params: {
      topology: 'series',
      elements: [
        { kind: 'capacitor', name: 'C1', value: 2 },
        { kind: 'capacitor', name: 'C2', value: 3 },
        { kind: 'capacitor', name: 'C3', value: 4 },
      ],
      source_v: 12, internal_r: 0, bridge_null_cm: 50,
      show_current: false, t_frac: 0, bridge_delta: 0,
      caption: 'Capacitors in series',
    },
  },
  {
    label: 'Phys 12 Ch7 · series LCR at resonance (ref 5)',
    expect: 'R, four inductor humps and a plate gap on one rail · Req 40 Ω, Ceq 80 µF',
    params: {
      topology: 'series',
      elements: [
        { kind: 'resistor', name: 'R', value: 40 },
        { kind: 'inductor', name: 'L', value: 5000 },
        { kind: 'capacitor', name: 'C', value: 80 },
      ],
      source_v: 230, internal_r: 0, bridge_null_cm: 50,
      show_current: true, t_frac: 0, bridge_delta: 0,
      caption: 'Series LCR',
    },
  },
  {
    label: 'Phys 12 Ch3 · three resistors in parallel',
    expect: '3 branches between two bus bars · Req 4 Ω (= 3.997, from 4700‖12‖6)',
    params: {
      topology: 'parallel',
      elements: [
        { kind: 'resistor', name: 'R1', value: 4700 },
        { kind: 'resistor', name: 'R2', value: 12 },
        { kind: 'resistor', name: 'R3', value: 6 },
      ],
      source_v: 6, internal_r: 0.5, bridge_null_cm: 50,
      show_current: true, t_frac: 0, bridge_delta: 0,
      caption: 'Three in parallel',
    },
  },
  {
    label: 'Phys 12 Ch3 · the SAME four resistors as a LADDER',
    expect: 'Req 10 + (20‖70) = 25.6 Ω — a different answer from the same four values',
    params: {
      topology: 'ladder',
      elements: [
        { kind: 'resistor', name: 'R1', value: 10 },
        { kind: 'resistor', name: 'R2', value: 20 },
        { kind: 'resistor', name: 'R3', value: 30 },
        { kind: 'resistor', name: 'R4', value: 40 },
      ],
      source_v: 12, internal_r: 0, bridge_null_cm: 50,
      show_current: true, t_frac: 0, bridge_delta: 0,
      caption: 'Ladder network',
    },
  },
  {
    label: 'Phys 12 Ch3 · two-mesh (Kirchhoff) network',
    expect: 'two rectangles sharing a middle branch · Req 10+20+(30‖150) = 55 Ω',
    params: {
      topology: 'two_loop',
      elements: [
        { kind: 'resistor', name: 'R1', value: 10 },
        { kind: 'resistor', name: 'R2', value: 20 },
        { kind: 'resistor', name: 'R3', value: 30 },
        { kind: 'resistor', name: 'R4', value: 40 },
        { kind: 'resistor', name: 'R5', value: 50 },
        { kind: 'resistor', name: 'R6', value: 60 },
      ],
      source_v: 24, internal_r: 2, bridge_null_cm: 50,
      show_current: true, t_frac: 0, bridge_delta: 0,
      caption: 'Two-mesh network',
    },
  },
  {
    label: 'Phys 12 Ch3 · lamp behind a switch',
    expect: 'an OPEN switch blade and a crossed lamp circle · Req 4.7 kΩ (switch = 0 Ω)',
    params: {
      topology: 'series',
      elements: [
        { kind: 'switch', name: 'S', value: 1 },
        { kind: 'resistor', name: 'R', value: 4700 },
        { kind: 'lamp', name: 'L1', value: 12 },
      ],
      source_v: 6, internal_r: 0, bridge_null_cm: 50,
      show_current: true, t_frac: 0, bridge_delta: 0,
      caption: 'Lamp and switch',
    },
  },
];

/**
 * Renders `circuitNetwork.Component` DIRECTLY rather than through
 * `BoardWidget`. BoardWidget dispatches through `lib/widgets/registry.ts`, and
 * circuit_network is not registered yet — registry wiring is a separate serial
 * step. Swap this for a `BoardWidget` + payload once it lands, the way the
 * xy_plot tab does.
 *
 * The two buttons drive the two animatable params, which is the whole reason
 * they are animatable and the thing a still tree cannot show: "charge" runs
 * t_frac 0 -> 1 (the fill grows as 1 − e^(−2.5t), so it is visibly fast then
 * slow, not linear) and "deflect" swings bridge_delta across its full range.
 */
function CircuitNetworkPreview() {
  const box = useDiagramBox();
  const diagramBox = { availableWidth: box.availableWidth, maxHeight: box.maxHeight - 70 };
  const theme = useDevTheme();
  const [i, setI] = useState(0);
  const kase = CIRCUIT_CASES[i];

  const tFrac = useSharedValue(0);
  const bridgeDelta = useSharedValue(0);
  const motion = useMemo(
    () => ({ t_frac: tFrac, bridge_delta: bridgeDelta }),
    [tFrac, bridgeDelta]
  );

  const validated = useMemo(() => {
    const r = circuitNetwork.validate(kase.params as unknown as Record<string, unknown>);
    if (!r.ok) console.warn('[dev-widget-preview][circuit_network]', r.errors);
    return r.ok ? r.params : circuitNetwork.defaults;
  }, [kase]);

  return (
    <View style={styles.body}>
      <View style={styles.controlsContent}>
        <Pressable
          onPress={() => {
            setI((v) => (v + 1) % CIRCUIT_CASES.length);
            tFrac.value = 0;
            bridgeDelta.value = 0;
          }}
          style={[styles.pill, styles.pillActive]}
        >
          <Text style={styles.pillTextActive}>next case</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            tFrac.value = 0;
            tFrac.value = withTiming(1, { duration: 2200 });
          }}
          style={[styles.pill, styles.pillActive]}
        >
          <Text style={styles.pillTextActive}>charge</Text>
        </Pressable>
        <Pressable
          onPress={() => {
            bridgeDelta.value = withTiming(bridgeDelta.value > 0 ? -0.8 : 0.8, { duration: 900 });
          }}
          style={[styles.pill, styles.pillActive]}
        >
          <Text style={styles.pillTextActive}>deflect</Text>
        </Pressable>
        <Text style={styles.readout}>
          {i + 1}/{CIRCUIT_CASES.length}
        </Text>
      </View>
      <View style={[styles.controlsContent, { paddingTop: 0 }]}>
        <Text style={styles.pillText} numberOfLines={1}>
          {kase.label}  ·  expect: {kase.expect}
        </Text>
      </View>

      <View style={styles.boardArea}>
        <View style={{ width: diagramBox.availableWidth, height: diagramBox.maxHeight }}>
          <circuitNetwork.Component
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
