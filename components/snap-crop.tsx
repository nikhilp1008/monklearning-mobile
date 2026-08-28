import { Image } from 'expo-image';
import { SaveFormat, manipulateAsync } from 'expo-image-manipulator';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { Image as RNImage, Pressable, StyleSheet, Text, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import { DoubtPhoto } from '@/lib/doubts';

/**
 * Crop the shot before sending it.
 *
 * This is the student's control over what they send, not a workaround for the
 * reader: a photo of a page holds several questions, and being able to send
 * one of them is the difference between asking what you meant and asking what
 * happened to be on the paper.
 *
 * Dark, like the rest of the snap flow — the capture screen it follows is
 * `#0E0C09`, and a photo is easiest to judge against something that is not
 * competing with it.
 */

/** Smallest crop the handles can produce, in display points. */
const MIN_SIDE = 64;
/** How far outside a corner still counts as grabbing it. */
const HANDLE_TOUCH = 44;

type Rect = { x: number; y: number; w: number; h: number };
type Corner = 'tl' | 'tr' | 'bl' | 'br';
type Edge = 'top' | 'bottom' | 'left' | 'right';

export function SnapCrop({
  photo,
  onCancel,
  onDone,
}: {
  photo: DoubtPhoto;
  onCancel: () => void;
  onDone: (cropped: DoubtPhoto) => void;
}) {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  /** Intrinsic pixels, needed to turn a display rect into a crop in pixels. */
  const [source, setSource] = useState<{ w: number; h: number } | null>(null);
  const [rotation, setRotation] = useState(0);
  /** Where the image is actually drawn inside the stage, after `contain`. */
  const [frame, setFrame] = useState<Rect | null>(null);
  const [stage, setStage] = useState<{ w: number; h: number } | null>(null);
  const [crop, setCrop] = useState<Rect | null>(null);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    RNImage.getSize(
      photo.uri,
      (w, h) => setSource({ w, h }),
      () => setSource(null)
    );
  }, [photo.uri]);

  /** The rotated image's aspect, which is what the stage has to fit. */
  const shown = useMemo(() => {
    if (!source) return null;
    const turned = rotation % 180 !== 0;
    return { w: turned ? source.h : source.w, h: turned ? source.w : source.h };
  }, [source, rotation]);

  // Fit the image into the stage, then start the crop at the whole of it.
  useEffect(() => {
    if (!shown || !stage) return;
    const k = Math.min(stage.w / shown.w, stage.h / shown.h);
    const w = shown.w * k;
    const h = shown.h * k;
    const next = { x: (stage.w - w) / 2, y: (stage.h - h) / 2, w, h };
    setFrame(next);
    setCrop(next);
  }, [shown, stage]);

  /** Keep a rect inside the image and above the minimum side. */
  const clamp = useCallback(
    (r: Rect): Rect => {
      if (!frame) return r;
      const w = Math.max(MIN_SIDE, Math.min(r.w, frame.w));
      const h = Math.max(MIN_SIDE, Math.min(r.h, frame.h));
      return {
        w,
        h,
        x: Math.max(frame.x, Math.min(r.x, frame.x + frame.w - w)),
        y: Math.max(frame.y, Math.min(r.y, frame.y + frame.h - h)),
      };
    },
    [frame]
  );

  /**
   * Gestures are built once and read the live rect through refs.
   *
   * They were rebuilt on every render, which meant `GestureDetector` was handed
   * a new object mid-drag and the closure holding the drag's start rect was
   * thrown away with it. Nothing moved. State that changes on every frame has
   * to reach a long-lived gesture through a ref, not a closure.
   */
  const cropRef = useRef<Rect | null>(null);
  const startRef = useRef<Rect | null>(null);
  const clampRef = useRef(clamp);
  cropRef.current = crop;
  clampRef.current = clamp;

  const pan = useMemo(
    () =>
      Gesture.Pan()
        .onBegin(() => {
          startRef.current = cropRef.current;
        })
        .onUpdate((e) => {
          const from = startRef.current;
          if (!from) return;
          setCrop(
            clampRef.current({
              ...from,
              x: from.x + e.translationX,
              y: from.y + e.translationY,
            })
          );
        })
        .runOnJS(true),
    []
  );

  const corners = useMemo(() => {
    const make = (corner: Corner) =>
      Gesture.Pan()
        .onBegin(() => {
          startRef.current = cropRef.current;
        })
        .onUpdate((e) => {
          const from = startRef.current;
          if (!from) return;
          // Each corner moves its own two edges; the opposite one is pinned.
          const left = corner === 'tl' || corner === 'bl';
          const top = corner === 'tl' || corner === 'tr';
          const w = left ? from.w - e.translationX : from.w + e.translationX;
          const h = top ? from.h - e.translationY : from.h + e.translationY;
          if (w < MIN_SIDE || h < MIN_SIDE) return;
          setCrop(
            clampRef.current({
              x: left ? from.x + e.translationX : from.x,
              y: top ? from.y + e.translationY : from.y,
              w,
              h,
            })
          );
        })
        .runOnJS(true);
    return { tl: make('tl'), tr: make('tr'), bl: make('bl'), br: make('br') };
  }, []);

  const edges = useMemo(() => {
    const make = (edge: Edge) =>
      Gesture.Pan()
        .onBegin(() => {
          startRef.current = cropRef.current;
        })
        .onUpdate((e) => {
          const from = startRef.current;
          if (!from) return;
          const next = { ...from };
          if (edge === 'top') {
            next.y = from.y + e.translationY;
            next.h = from.h - e.translationY;
          } else if (edge === 'bottom') {
            next.h = from.h + e.translationY;
          } else if (edge === 'left') {
            next.x = from.x + e.translationX;
            next.w = from.w - e.translationX;
          } else {
            next.w = from.w + e.translationX;
          }
          if (next.w < MIN_SIDE || next.h < MIN_SIDE) return;
          setCrop(clampRef.current(next));
        })
        .runOnJS(true);
    return { top: make('top'), bottom: make('bottom'), left: make('left'), right: make('right') };
  }, []);

  const rotate = () => setRotation((r) => (r + 90) % 360);

  const confirm = async () => {
    if (!crop || !frame || !shown || !source || busy) return;
    setBusy(true);
    try {
      // Display points -> pixels of the ROTATED image, which is the space the
      // crop action works in once the rotate has been applied before it.
      const k = shown.w / frame.w;
      const px = {
        originX: Math.max(0, Math.round((crop.x - frame.x) * k)),
        originY: Math.max(0, Math.round((crop.y - frame.y) * k)),
        width: Math.round(crop.w * k),
        height: Math.round(crop.h * k),
      };
      px.width = Math.min(px.width, shown.w - px.originX);
      px.height = Math.min(px.height, shown.h - px.originY);

      const result = await manipulateAsync(
        photo.uri,
        rotation ? [{ rotate: rotation }, { crop: px }] : [{ crop: px }],
        { compress: 0.9, format: SaveFormat.JPEG }
      );
      onDone({
        uri: result.uri,
        fileName: photo.fileName ?? 'doubt.jpg',
        mimeType: 'image/jpeg',
        fileSize: undefined,
      });
    } catch {
      // Cropping is a convenience, never a gate: if it fails, send what the
      // student actually took rather than stranding them on this screen.
      onDone(photo);
    }
  };

  return (
    <View style={styles.root}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        {/* No title. The button at the bottom already says what this is, and
            saying it twice cost the photo a band of height. */}
        <View style={styles.bar}>
          <Pressable style={styles.close} onPress={onCancel} accessibilityLabel="Cancel" hitSlop={10}>
            <Text style={styles.closeGlyph}>✕</Text>
          </Pressable>
        </View>

        <View
          style={styles.stage}
          onLayout={(e) =>
            setStage({ w: e.nativeEvent.layout.width, h: e.nativeEvent.layout.height })
          }>
          {frame && (
            /**
             * The image turns with the button, so what the student judges is
             * what the crop will produce.
             *
             * `frame` is already sized for the ROTATED aspect, so at 90 and
             * 270 the element is laid out with those sides swapped and then
             * rotated into it: a view rotated a quarter turn keeps its own
             * width and height, it only looks transposed.
             */
            <Image
              source={{ uri: photo.uri }}
              style={{
                position: 'absolute',
                left: rotation % 180 ? frame.x + (frame.w - frame.h) / 2 : frame.x,
                top: rotation % 180 ? frame.y + (frame.h - frame.w) / 2 : frame.y,
                width: rotation % 180 ? frame.h : frame.w,
                height: rotation % 180 ? frame.w : frame.h,
                transform: [{ rotate: `${rotation}deg` }],
              }}
              contentFit="fill"
              transition={0}
            />
          )}

          {crop && frame && (
            <>
              {/* Everything outside the crop dims, so the kept area is the
                  only lit thing on screen. Four bands rather than a mask:
                  react-native-svg would need a whole overlay tree for what
                  four views already do. */}
              <View style={[styles.shade, { top: 0, left: 0, right: 0, height: crop.y }]} />
              <View style={[styles.shade, { top: crop.y + crop.h, left: 0, right: 0, bottom: 0 }]} />
              <View style={[styles.shade, { top: crop.y, left: 0, width: crop.x, height: crop.h }]} />
              <View
                style={[
                  styles.shade,
                  { top: crop.y, left: crop.x + crop.w, right: 0, height: crop.h },
                ]}
              />

              <GestureDetector gesture={pan}>
                <View style={{ position: 'absolute', ...crop }}>
                  {/* Rule of thirds, the standard aid for placing a crop. */}
                  <View style={[styles.grid, { left: '33.33%' }]} />
                  <View style={[styles.grid, { left: '66.66%' }]} />
                  <View style={[styles.gridH, { top: '33.33%' }]} />
                  <View style={[styles.gridH, { top: '66.66%' }]} />
                </View>
              </GestureDetector>

              {/* Corners resize both sides at once; the mid-edge bars move one
                  edge. Four brackets on their own read as a viewfinder rather
                  than as something you can take hold of. */}
              {(['top', 'bottom', 'left', 'right'] as Edge[]).map((e) => (
                <EdgeHandle key={e} edge={e} crop={crop} styles={styles} gesture={edges[e]} />
              ))}
              {(['tl', 'tr', 'bl', 'br'] as Corner[]).map((c) => (
                <CornerHandle
                  key={c}
                  corner={c}
                  crop={crop}
                  styles={styles}
                  gesture={corners[c]}
                />
              ))}
            </>
          )}
        </View>

        <View style={styles.footer}>
          <Pressable style={styles.rotate} onPress={rotate} accessibilityLabel="Rotate">
            <Svg viewBox="0 0 24 24" width={20} height={20} fill="none">
              <Path
                d="M3.5 12a8.5 8.5 0 1 0 2.6-6.1M5.5 3v3.4h3.4"
                stroke="#FFFFFF"
                strokeWidth={1.9}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </Pressable>
          <Pressable style={styles.cta} onPress={confirm} disabled={busy}>
            <Text style={styles.ctaText}>{busy ? 'Cropping…' : 'Crop & continue'}</Text>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}

/** One mid-edge bar, and the touch target that drags that edge alone. */
function EdgeHandle({
  edge,
  crop,
  styles,
  gesture,
}: {
  edge: Edge;
  crop: Rect;
  styles: ReturnType<typeof createStyles>;
  gesture: ReturnType<typeof Gesture.Pan>;
}) {
  const vertical = edge === 'left' || edge === 'right';
  const cx = edge === 'left' ? crop.x : edge === 'right' ? crop.x + crop.w : crop.x + crop.w / 2;
  const cy = edge === 'top' ? crop.y : edge === 'bottom' ? crop.y + crop.h : crop.y + crop.h / 2;
  return (
    <GestureDetector gesture={gesture}>
      <View
        style={{
          position: 'absolute',
          left: cx - HANDLE_TOUCH / 2,
          top: cy - HANDLE_TOUCH / 2,
          width: HANDLE_TOUCH,
          height: HANDLE_TOUCH,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View style={vertical ? styles.edgeBarV : styles.edgeBarH} />
      </View>
    </GestureDetector>
  );
}

/** One corner bracket, and the touch target that drags it. */
function CornerHandle({
  corner,
  crop,
  styles,
  gesture,
}: {
  corner: Corner;
  crop: Rect;
  styles: ReturnType<typeof createStyles>;
  gesture: ReturnType<typeof Gesture.Pan>;
}) {
  const left = corner === 'tl' || corner === 'bl';
  const top = corner === 'tl' || corner === 'tr';
  return (
    <GestureDetector gesture={gesture}>
      <View
        style={{
          position: 'absolute',
          left: (left ? crop.x : crop.x + crop.w) - HANDLE_TOUCH / 2,
          top: (top ? crop.y : crop.y + crop.h) - HANDLE_TOUCH / 2,
          width: HANDLE_TOUCH,
          height: HANDLE_TOUCH,
          // Centred, so the bracket straddles the corner the way a viewfinder
          // does rather than hanging off the outside of it.
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={[
            styles.bracket,
            left ? styles.bracketL : styles.bracketR,
            top ? styles.bracketT : styles.bracketB,
          ]}
        />
      </View>
    </GestureDetector>
  );
}

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  const BRACKET = scale(26);
  const THICK = scale(3);
  return StyleSheet.create({
    root: { ...StyleSheet.absoluteFillObject, backgroundColor: '#0E0C09' },
    safeArea: { flex: 1, paddingHorizontal: scale(20) },
    bar: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'flex-end',
      paddingTop: verticalScale(6),
      paddingBottom: verticalScale(10),
    },
    close: {
      width: scale(34),
      height: scale(34),
      borderRadius: scale(99),
      backgroundColor: 'rgba(255,255,255,.12)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    closeGlyph: { fontFamily: 'AnekLatin_600SemiBold', fontSize: scale(15), color: '#FFFFFF' },
    // No overflow clip: a crop corner sits ON the image edge, so half of its
    // touch target and half of its bracket are outside the stage by design.
    // Clipping them turned every bracket into a dot.
    stage: { flex: 1, position: 'relative' },
    shade: { position: 'absolute', backgroundColor: 'rgba(14,12,9,.62)' },
    // Over a photographed page the guides compete with white paper, so they
    // carry a dark edge as well: legible on both.
    grid: {
      position: 'absolute',
      top: 0,
      bottom: 0,
      width: 1,
      backgroundColor: 'rgba(255,255,255,.5)',
      shadowColor: '#000000',
      shadowOpacity: 0.35,
      shadowRadius: 1,
      shadowOffset: { width: 0, height: 0 },
    },
    gridH: {
      position: 'absolute',
      left: 0,
      right: 0,
      height: 1,
      backgroundColor: 'rgba(255,255,255,.5)',
      shadowColor: '#000000',
      shadowOpacity: 0.35,
      shadowRadius: 1,
      shadowOffset: { width: 0, height: 0 },
    },
    // Short bars, half a bracket long, so they read as grips rather than as
    // more frame.
    edgeBarH: {
      width: BRACKET,
      height: scale(3),
      borderRadius: scale(2),
      backgroundColor: '#FFFFFF',
      shadowColor: '#000000',
      shadowOpacity: 0.4,
      shadowRadius: 2,
      shadowOffset: { width: 0, height: 0 },
    },
    edgeBarV: {
      width: scale(3),
      height: BRACKET,
      borderRadius: scale(2),
      backgroundColor: '#FFFFFF',
      shadowColor: '#000000',
      shadowOpacity: 0.4,
      shadowRadius: 2,
      shadowOffset: { width: 0, height: 0 },
    },
    bracket: {
      width: BRACKET,
      height: BRACKET,
      borderColor: '#FFFFFF',
      shadowColor: '#000000',
      shadowOpacity: 0.4,
      shadowRadius: 2,
      shadowOffset: { width: 0, height: 0 },
    },
    bracketL: { borderLeftWidth: THICK, borderTopLeftRadius: scale(3), borderBottomLeftRadius: scale(3) },
    bracketR: { borderRightWidth: THICK, borderTopRightRadius: scale(3), borderBottomRightRadius: scale(3) },
    bracketT: { borderTopWidth: THICK },
    bracketB: { borderBottomWidth: THICK },
    footer: {
      paddingTop: verticalScale(16),
      paddingBottom: verticalScale(8),
      alignItems: 'center',
      gap: verticalScale(14),
    },
    rotate: {
      width: scale(46),
      height: scale(46),
      borderRadius: scale(99),
      backgroundColor: 'rgba(255,255,255,.12)',
      alignItems: 'center',
      justifyContent: 'center',
    },
    cta: {
      alignSelf: 'stretch',
      paddingVertical: verticalScale(15),
      borderRadius: scale(99),
      alignItems: 'center',
      backgroundColor: '#FFFFFF',
    },
    ctaText: { fontFamily: 'AnekLatin_700Bold', fontSize: scale(16), color: colors.ink },
  });
}
