import { Image } from 'expo-image';
import { useMemo, useState } from 'react';
import { Modal, Pressable, StyleSheet, Text, View } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ZoomableImage } from '@/components/zoomable-image';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';
import type { DiagramFigure } from '@/lib/practice';

/**
 * The figure a question cannot be answered without.
 *
 * What this component guarantees (and what it does not): it renders whatever
 * `cdn_crop` figure the payload contains. Whether a figure is attached to the
 * RIGHT question is the data pipeline's responsibility, and that attribution
 * is currently under repair — nothing here is an assurance of correct
 * attribution.
 *
 * The white surface is explicit (never implied), so a later theme pass cannot
 * silently invert a figure into invisibility. Figure content is never
 * colour-manipulated: ~6% of crops carry meaningful colour.
 */

// Practical upscale ceiling: ~2x intrinsic pixels, so a small crop (median
// 211 px wide) does not become a blurry smear. Reading width matches the
// web's max-w-sm target on a phone-width canvas.
const MAX_UPSCALE = 2;
const FALLBACK_ASPECT = 16 / 9;

export function QuestionDiagram({
  figure,
  index = 0,
  total = 1,
}: {
  figure: DiagramFigure;
  index?: number;
  total?: number;
}) {
  const { scale, verticalScale } = useScale();
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const [ratio, setRatio] = useState<number>(
    figure.region && figure.region.h > 0 ? figure.region.w / figure.region.h : FALLBACK_ASPECT,
  );
  const [failed, setFailed] = useState(false);
  const [retryKey, setRetryKey] = useState(0);
  const [open, setOpen] = useState(false);

  const label = total > 1 ? `Figure ${index + 1} of ${total}` : 'Question diagram';

  // A failed fetch is the worst case for a question whose stem says "as shown
  // in the figure" — say so visibly and offer a retry, never a silent gap.
  if (failed) {
    return (
      <View style={styles.frame}>
        <FigureLoadFailed
          onRetry={() => {
            setFailed(false);
            setRetryKey((k) => k + 1);
          }}
        />
      </View>
    );
  }

  return (
    <>
      <Pressable
        accessibilityRole="imagebutton"
        accessibilityLabel={`${label} — tap to enlarge`}
        style={styles.frame}
        onPress={() => setOpen(true)}
      >
        <Image
          key={retryKey}
          source={{ uri: figure.url }}
          style={[styles.image, { aspectRatio: ratio }]}
          contentFit="contain"
          transition={120}
          accessibilityLabel={label}
          onLoad={({ source }) => {
            // region gives the intrinsic size up front; the load event is the
            // fallback when the payload has no region.
            if (!figure.region && source?.width && source?.height) {
              setRatio(source.width / source.height);
            }
          }}
          onError={() => setFailed(true)}
        />
      </Pressable>

      {/* The enlarged figure is the same viewer as question-peek's
          (components/zoomable-image.tsx). It used to be an Image sized
          width 100% / height 85% inside a style-less Pressable: a percentage of
          an auto-sized parent is zero, so the Modal opened on a dark scrim
          with nothing in it. And a Modal is its own native hierarchy, so the
          app's gesture root does not reach into it: it brings its own, or the
          pinch and drag never fire. */}
      <Modal
        visible={open}
        transparent
        animationType="fade"
        // Edge to edge, so the scrim covers the status bar and the close
        // button's insets.top offset is measured from the real top.
        statusBarTranslucent
        navigationBarTranslucent
        onRequestClose={() => setOpen(false)}
      >
        <GestureHandlerRootView style={styles.gestureRoot}>
          <View style={styles.backdrop}>
            {/* The scrim closes the viewer and sits BEHIND the figure, a
                sibling not a parent: a pinch that ended over the figure must
                not count as a tap that shuts it. */}
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Close enlarged figure"
              style={StyleSheet.absoluteFill}
              onPress={() => setOpen(false)}
            />
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Close enlarged figure"
              hitSlop={10}
              // Clear of the status bar and camera: the Modal is drawn edge to
              // edge, and a fixed 48 sat on the punch-hole on some Androids.
              style={[styles.closeButton, { top: Math.max(verticalScale(48), insets.top + 8) }]}
              onPress={() => setOpen(false)}
            >
              <Text style={styles.closeText}>Close ✕</Text>
            </Pressable>
            <ZoomableImage uri={figure.url} label={label} />
          </View>
        </GestureHandlerRootView>
      </Modal>
    </>
  );
}

/**
 * What stands where a figure failed to load: says so, and offers Retry.
 *
 * Shared with the snap solution's figures and picture options
 * (components/solution-screen.tsx), which had no failure state at all and
 * showed an empty box where the circuit should have been.
 */
export function FigureLoadFailed({
  message = 'This figure could not be loaded, and the question refers to it.',
  onRetry,
}: {
  message?: string;
  onRetry: () => void;
}) {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  return (
    <View style={styles.failureBox} accessibilityRole="alert">
      <Text style={styles.failureText}>{message}</Text>
      <Pressable
        accessibilityRole="button"
        accessibilityLabel="Retry loading the figure"
        style={styles.retryButton}
        onPress={onRetry}
      >
        <Text style={styles.retryText}>Retry</Text>
      </Pressable>
    </View>
  );
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    frame: {
      marginTop: verticalScale(12),
      borderRadius: scale(10),
      borderWidth: 1,
      borderColor: colors.hairline,
      backgroundColor: '#fff',
      overflow: 'hidden',
      alignSelf: 'center',
      width: '100%',
      // Small crops (median 211 px) upscale toward reading width, capped.
      maxWidth: scale(384 / MAX_UPSCALE) * MAX_UPSCALE,
    },
    image: {
      width: '100%',
      backgroundColor: '#fff',
    },
    failureBox: {
      padding: scale(16),
      alignItems: 'center',
      gap: verticalScale(10),
      backgroundColor: '#fff',
    },
    failureText: {
      fontSize: scale(12),
      color: colors.faint,
      textAlign: 'center',
      fontWeight: '600',
    },
    retryButton: {
      paddingHorizontal: scale(16),
      paddingVertical: verticalScale(6),
      borderRadius: scale(16),
      borderWidth: 1,
      borderColor: colors.hairline,
      backgroundColor: '#fff',
    },
    retryText: {
      fontSize: scale(12),
      fontWeight: '700',
      color: '#1c1a16',
    },
    gestureRoot: { flex: 1 },
    backdrop: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.75)',
      alignItems: 'center',
      justifyContent: 'center',
      padding: scale(16),
      // Room for the close button above the figure.
      paddingTop: verticalScale(96),
    },
    closeButton: {
      position: 'absolute',
      top: verticalScale(48),
      right: scale(20),
      zIndex: 2,
      backgroundColor: '#fff',
      borderRadius: scale(16),
      paddingHorizontal: scale(14),
      paddingVertical: verticalScale(6),
    },
    closeText: {
      fontSize: scale(12),
      fontWeight: '700',
      color: '#1c1a16',
    },
  });
}
