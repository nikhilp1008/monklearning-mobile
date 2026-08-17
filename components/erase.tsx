import * as Haptics from 'expo-haptics';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { AccessibilityInfo, LayoutChangeEvent, Pressable, StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  Easing,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from 'react-native-reanimated';
import Svg, { Circle, Defs, Path, RadialGradient, Stop } from 'react-native-svg';

/**
 * Erase to remove — from handoff_erase_feature/ (README + MECHANICS + the
 * reference implementation in demo/erase-feature.html).
 *
 * Instead of a delete button and a confirm dialog, the student picks up an
 * eraser and rubs a card until the writing is gone. The gesture IS the
 * confirmation: 55% coverage is a deliberate amount of work that a stray
 * touch cannot produce, so nothing has to be asked. Rubbing is reversible
 * until the finger lifts, and removing is undoable for five seconds after.
 *
 * The rub is painted with react-native-svg rather than Skia. The spec's brush
 * is a radial gradient — opaque to 0.62r, transparent at 1.0r — which is
 * exactly what an SVG <Circle> filled with a RadialGradient is, so this keeps
 * the reference's soft rubber edge without pulling in a native dependency.
 * (The spec's no-Skia fallback, a grid of fading tiles, would have had visible
 * square edges; that is the one thing the falloff exists to avoid.)
 *
 * The canvas paints card-coloured paper OVER the ink rather than cutting holes
 * — it needs no masks or blend modes, and it is why the card must stay white
 * while erasing.
 */

/** Every value here is the spec's. See MECHANICS.md for why each one. */
export const ERASE = {
  brushRadius: 27,
  /** Opaque core out to this fraction of the radius, then falls away. */
  brushCore: 0.62,
  strokeStep: 9,
  gridCols: 10,
  gridRows: 4,
  threshold: 0.55,
  collapseMs: 340,
  undoMs: 5000,
  restoreMs: 320,
  restoreFadeMs: 300,
  dipMs: 200,
  /** The list's own gap, absorbed on collapse so no ghost gap is left. */
  gap: 9,
} as const;

const INK = '#1C1A16';
const INK_MUTED = '#57534B';
const PAPER = '#FCFAF4';
const AMBER_WASH = '#FCF4E0';
const DEEP_AMBER = '#9A6A12';
const HAIRLINE = 'rgba(28,26,22,.14)';
/** The page recedes to a draft grey while the cards stay pure white — the
 *  cards read as the paper, the page as the desk. */
export const DRAFT_GREY = '#F4F3EF';

const CELLS = ERASE.gridCols * ERASE.gridRows;

/** True when the OS asks for less movement; polled once and on change. */
export function useReduceMotion() {
  const [reduce, setReduce] = useState(false);
  useEffect(() => {
    let alive = true;
    AccessibilityInfo.isReduceMotionEnabled().then((v) => {
      if (alive) setReduce(v);
    });
    const sub = AccessibilityInfo.addEventListener('reduceMotionChanged', setReduce);
    return () => {
      alive = false;
      sub.remove();
    };
  }, []);
  return reduce;
}

/** The angled eraser, filled with the amber wash at rest and paper when down. */
function EraserMark({ active }: { active: boolean }) {
  const stroke = active ? PAPER : INK;
  return (
    <Svg viewBox="0 0 24 24" width={16} height={16} fill="none">
      <Path
        d="M4.8 16.9 12.5 6.6a1.9 1.9 0 0 1 2.7-.4l2.9 2.1a1.9 1.9 0 0 1 .4 2.7L13.4 19H6.7a1.9 1.9 0 0 1-1.9-2.1z"
        fill={active ? PAPER : AMBER_WASH}
        stroke={stroke}
        strokeWidth={1.6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path d="M9.4 12.2 15.7 16.8" stroke={stroke} strokeWidth={1.6} strokeLinecap="round" />
      <Path d="M13.4 19h4.9" stroke={stroke} strokeWidth={1.6} strokeLinecap="round" />
    </Svg>
  );
}

/**
 * The entry point: a pill at the right end of the tab row. The gesture is
 * unusual, so the way in deliberately isn't — it is a labelled button.
 */
export function EraseTool({ active, onPress }: { active: boolean; onPress: () => void }) {
  return (
    <Pressable
      style={[toolStyles.pill, active && toolStyles.pillActive]}
      onPress={onPress}
      accessibilityRole="button"
      accessibilityLabel={active ? 'Stop erasing' : 'Erase notes'}>
      <EraserMark active={active} />
      <Text style={[toolStyles.label, active && toolStyles.labelActive]}>
        {active ? 'Erasing' : 'Erase'}
      </Text>
    </Pressable>
  );
}

/** Once the eraser is down, this says exactly what to do. */
export function EraseModeLine({ onDone }: { onDone: () => void }) {
  return (
    <View style={lineStyles.row}>
      <Text style={lineStyles.hand}>rub any card to erase it</Text>
      <View style={lineStyles.rule} />
      <Pressable onPress={onDone} hitSlop={10}>
        <Text style={lineStyles.done}>DONE</Text>
      </Pressable>
    </View>
  );
}

/** Five seconds to change your mind, then the removal is final. */
export function UndoRow({ onUndo }: { onUndo: () => void }) {
  return (
    <Animated.View style={lineStyles.undoRow}>
      <View style={lineStyles.rule} />
      <Text style={lineStyles.hand}>erased</Text>
      <Pressable onPress={onUndo} hitSlop={10}>
        <Text style={lineStyles.undo}>UNDO</Text>
      </Pressable>
      <View style={lineStyles.rule} />
    </Animated.View>
  );
}

type Stamp = { x: number; y: number };
type Speck = { id: number; x: number; y: number; size: number; duration: number };

/** One graphite speck, drifting up-left off the contact point. */
function Dust({ speck }: { speck: Speck }) {
  const progress = useSharedValue(0);
  useEffect(() => {
    progress.value = withTiming(1, { duration: speck.duration, easing: Easing.out(Easing.ease) });
  }, [progress, speck.duration]);
  const animated = useAnimatedStyle(() => ({
    opacity: 0.8 * (1 - progress.value),
    transform: [
      { translateX: -14 * progress.value },
      { translateY: -9 * progress.value },
      { scale: 1 - 0.6 * progress.value },
    ],
  }));
  return (
    <Animated.View
      pointerEvents="none"
      style={[
        dustStyles.speck,
        {
          left: speck.x,
          top: speck.y,
          width: speck.size,
          height: speck.size,
          borderRadius: speck.size / 2,
        },
        animated,
      ]}
    />
  );
}

/**
 * Wraps one list row. Outside erase mode it adds nothing at all — no gesture,
 * no overlay — so scrolling and tapping through to the note are untouched.
 */
export function Erasable({
  enabled,
  onRemove,
  children,
}: {
  enabled: boolean;
  /** Called once the row has finished collapsing. */
  onRemove: () => void;
  children: React.ReactNode;
}) {
  const reduceMotion = useReduceMotion();
  const [box, setBox] = useState({ width: 0, height: 0 });
  const [stamps, setStamps] = useState<Stamp[]>([]);
  const [dust, setDust] = useState<Speck[]>([]);

  /** Which of the 40 cells have been rubbed. Travel is what counts, not time:
   *  scrubbing one spot marks one cell and never commits. */
  const cells = useRef(new Set<number>()).current;
  const last = useRef<Stamp | null>(null);
  const lastDust = useRef<Stamp | null>(null);
  const speckId = useRef(0);
  const boxRef = useRef(box);
  boxRef.current = box;

  const progress = useSharedValue(0);
  const paint = useSharedValue(1);
  const dip = useSharedValue(0);
  const collapse = useSharedValue(0);
  const height = useSharedValue(0);

  const reset = useCallback(() => {
    cells.clear();
    last.current = null;
    lastDust.current = null;
    setStamps([]);
    setDust([]);
    progress.value = 0;
  }, [cells, progress]);

  const addStamps = useCallback(
    (points: Stamp[]) => {
      const { width, height: h } = boxRef.current;
      if (!width || !h) return;
      for (const p of points) {
        // Stamps outside the box clamp to the edge cells, which matches a real
        // eraser overshooting the page.
        const col = Math.min(
          ERASE.gridCols - 1,
          Math.max(0, Math.floor((p.x / width) * ERASE.gridCols))
        );
        const row = Math.min(
          ERASE.gridRows - 1,
          Math.max(0, Math.floor((p.y / h) * ERASE.gridRows))
        );
        cells.add(row * ERASE.gridCols + col);
      }
      setStamps((prev) => prev.concat(points));
      progress.value = cells.size / CELLS;
    },
    [cells, progress]
  );

  const puff = useCallback(
    (x: number, y: number) => {
      if (reduceMotion) return;
      const made: Speck[] = [0, 1].map(() => ({
        id: speckId.current++,
        x: x + (Math.random() * 16 - 8),
        y: y + (Math.random() * 14 - 7),
        size: 2 + Math.random() * 2.2,
        duration: 700 + Math.random() * 500,
      }));
      // Never let particles accumulate in the tree.
      setDust((prev) => prev.concat(made).slice(-18));
      setTimeout(() => {
        setDust((prev) => prev.filter((s) => !made.some((m) => m.id === s.id)));
      }, 1300);
    },
    [reduceMotion]
  );

  /** Lifted below the threshold: every stroke fades and the writing comes back
   *  exactly as it was. Nothing is asked, nothing is confirmed. */
  const restore = useCallback(() => {
    paint.value = withTiming(0, { duration: ERASE.restoreFadeMs });
    setTimeout(() => {
      reset();
      paint.value = 1;
    }, ERASE.restoreMs);
  }, [paint, reset]);

  /** Lifted above it: the card dips, then collapses its own height so the rows
   *  below rise into the space rather than snapping into it. */
  const commit = useCallback(() => {
    setDust([]);
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light).catch(() => {});
    // The item leaves the data source at collapse + 80ms, per the spec —
    // removing the node first and animating afterwards is where a jump comes
    // from. This is a plain timer rather than the animation's completion
    // callback: that callback is a worklet, and a removal that has to cross
    // back to JS to happen at all is a removal that can silently not happen.
    if (reduceMotion) {
      collapse.value = withTiming(1, { duration: 200 });
      setTimeout(onRemove, 280);
      return;
    }
    dip.value = withTiming(1, { duration: ERASE.dipMs });
    collapse.value = withDelay(
      ERASE.dipMs,
      withTiming(1, { duration: ERASE.collapseMs, easing: Easing.bezier(0.3, 0.85, 0.3, 1) })
    );
    setTimeout(onRemove, ERASE.dipMs + ERASE.collapseMs + 80);
  }, [collapse, dip, onRemove, reduceMotion]);

  // The gesture is built once per mode change, so it must not close over
  // anything that changes per render — a stale `release` here silently used
  // the wrong callbacks and a finished rub stopped committing. The handlers
  // live in a ref that every render refreshes; the gesture only ever calls
  // the current ones.
  const handlers = useRef({ begin: (_x: number, _y: number) => {}, move: (_x: number, _y: number) => {}, end: () => {} });

  const pan = useMemo(
    () =>
      Gesture.Pan()
        // Erasing must begin on contact: no minimum distance, no fixed axis.
        .minDistance(0)
        .enabled(enabled)
        .onBegin((e) => {
          runOnJS(callBegin)(e.x, e.y);
        })
        .onUpdate((e) => {
          runOnJS(callMove)(e.x, e.y);
        })
        .onFinalize(() => {
          runOnJS(callEnd)();
        }),
    [enabled]
  );

  function callBegin(x: number, y: number) {
    handlers.current.begin(x, y);
  }
  function callMove(x: number, y: number) {
    handlers.current.move(x, y);
  }
  function callEnd() {
    handlers.current.end();
  }

  /** Pointer events arrive far apart on fast moves, so the path is
   *  interpolated every 9px — otherwise the stroke is a dotted line. */
  function stroke(x: number, y: number) {
    const prev = last.current;
    const points: Stamp[] = [];
    if (prev) {
      const dx = x - prev.x;
      const dy = y - prev.y;
      const distance = Math.hypot(dx, dy);
      const steps = Math.max(1, Math.ceil(distance / ERASE.strokeStep));
      for (let i = 1; i <= steps; i++) {
        points.push({ x: prev.x + (dx * i) / steps, y: prev.y + (dy * i) / steps });
      }
      const sinceDust = lastDust.current;
      if (!sinceDust || Math.hypot(x - sinceDust.x, y - sinceDust.y) > 10) {
        lastDust.current = { x, y };
        puff(x, y);
      }
    } else {
      points.push({ x, y });
      lastDust.current = { x, y };
    }
    last.current = { x, y };
    addStamps(points);
  }

  function release() {
    if (cells.size / CELLS > ERASE.threshold) commit();
    else restore();
  }

  handlers.current = {
    begin: (x, y) => {
      last.current = { x, y };
      lastDust.current = { x, y };
      addStamps([{ x, y }]);
    },
    move: stroke,
    end: release,
  };

  const cardStyle = useAnimatedStyle(() => {
    // Capped so the card never appears to shrink out of the list.
    const rub = reduceMotion ? 1 : 1 - Math.min(0.035, progress.value * 0.05);
    const dipScale = 1 - 0.035 * dip.value;
    const collapseScale = 1 - 0.06 * collapse.value;
    return {
      opacity: (1 - 0.45 * dip.value) * (1 - collapse.value),
      transform: [{ scale: reduceMotion ? 1 : rub * dipScale * collapseScale }],
    };
  });

  const wrapStyle = useAnimatedStyle(() => {
    if (collapse.value === 0 || height.value === 0) return {};
    return {
      height: height.value * (1 - collapse.value),
      // Absorbs the list's own gap, or a 9pt ghost gap is left behind.
      marginBottom: -ERASE.gap * collapse.value,
      overflow: 'hidden',
    };
  });

  const paintStyle = useAnimatedStyle(() => ({ opacity: paint.value }));

  const onLayout = (e: LayoutChangeEvent) => {
    const { width, height: h } = e.nativeEvent.layout;
    setBox({ width, height: h });
    height.value = h;
  };

  const body = (
    <Animated.View style={cardStyle} onLayout={onLayout}>
      {children}

      {stamps.length > 0 && (
        <Animated.View style={[StyleSheet.absoluteFill, paintStyle]} pointerEvents="none">
          <Svg width={box.width} height={box.height}>
            <Defs>
              {/* The brush: opaque core to 0.62r, gone by 1.0r. A hard circle
                  leaves visible scallops; this reads as rubber on paper. */}
              <RadialGradient id="rub" cx="50%" cy="50%" r="50%">
                <Stop offset="0" stopColor="#FFFFFF" stopOpacity={1} />
                <Stop offset={String(ERASE.brushCore)} stopColor="#FFFFFF" stopOpacity={0.97} />
                <Stop offset="1" stopColor="#FFFFFF" stopOpacity={0} />
              </RadialGradient>
            </Defs>
            {stamps.map((s, i) => (
              <Circle key={i} cx={s.x} cy={s.y} r={ERASE.brushRadius} fill="url(#rub)" />
            ))}
          </Svg>
        </Animated.View>
      )}

      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        {dust.map((speck) => (
          <Dust key={speck.id} speck={speck} />
        ))}
      </View>
    </Animated.View>
  );

  if (!enabled) return <>{children}</>;

  return (
    <Animated.View style={wrapStyle}>
      <GestureDetector gesture={pan}>{body}</GestureDetector>
    </Animated.View>
  );
}

const toolStyles = StyleSheet.create({
  pill: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
    // Clears the tab underline.
    marginBottom: 7,
    paddingTop: 5,
    paddingRight: 12,
    paddingBottom: 5,
    paddingLeft: 9,
    borderRadius: 99,
    borderWidth: 1,
    borderColor: HAIRLINE,
    backgroundColor: 'transparent',
  },
  pillActive: {
    backgroundColor: INK,
    borderColor: INK,
  },
  label: {
    fontFamily: 'AnekLatin_700Bold',
    fontSize: 12,
    color: INK_MUTED,
  },
  labelActive: {
    color: PAPER,
  },
});

const lineStyles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 7,
    marginTop: 9,
  },
  undoRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    marginTop: 12,
  },
  hand: {
    fontFamily: 'Kalam_700Bold',
    fontSize: 13,
    color: INK_MUTED,
  },
  rule: {
    flex: 1,
    height: 1,
    backgroundColor: HAIRLINE,
  },
  done: {
    fontFamily: 'AnekLatin_800ExtraBold',
    fontSize: 11.5,
    letterSpacing: 0.06 * 11.5,
    color: INK,
  },
  undo: {
    fontFamily: 'AnekLatin_800ExtraBold',
    fontSize: 11.5,
    letterSpacing: 0.06 * 11.5,
    color: DEEP_AMBER,
  },
});

const dustStyles = StyleSheet.create({
  speck: {
    position: 'absolute',
    backgroundColor: 'rgba(28,26,22,.3)',
  },
});
