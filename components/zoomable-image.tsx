import { Image } from 'expo-image';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withDecay,
  withTiming,
} from 'react-native-reanimated';
import { StyleSheet } from 'react-native';

import {
  DOUBLE_TAP_ZOOM,
  MAX_ZOOM,
  MIN_ZOOM,
  clamp,
  clampPan,
  containedSize,
  maxPan,
  translationAbout,
} from '@/lib/zoom-math';

/** expo-image has no animated variant of its own. Module scope: creating it
 *  per render would remount the image. */
const AnimatedImage = Animated.createAnimatedComponent(Image);

/**
 * A picture to look at properly: pinch to zoom (around the fingers, not the
 * centre), drag to move it once zoomed, a flick that glides, and a double-tap
 * that zooms in on the spot and out again.
 *
 * Everything runs on the UI thread — a shared value per number, worklet
 * gestures, nothing crossing to JS while a finger is down — and every
 * movement is held inside `maxPan`, so the picture can never be dragged out of
 * view and a photo that still fits the frame stays put.
 *
 * It must sit under a GestureHandlerRootView. The app's own root does not
 * reach into a `Modal` (a separate native hierarchy), so a viewer drawn in a
 * Modal brings its own — see question-peek.tsx.
 */
export function ZoomableImage({ uri, label }: { uri: string; label: string }) {
  const scale = useSharedValue(1);
  const tx = useSharedValue(0);
  const ty = useSharedValue(0);

  // Where the current gesture began.
  const startScale = useSharedValue(1);
  const startTx = useSharedValue(0);
  const startTy = useSharedValue(0);
  const startFx = useSharedValue(0);
  const startFy = useSharedValue(0);

  // Measured: the frame the picture sits in, and the picture's own size.
  const frameW = useSharedValue(0);
  const frameH = useSharedValue(0);
  const naturalW = useSharedValue(0);
  const naturalH = useSharedValue(0);

  const limitAt = (s: number) => {
    'worklet';
    const frame = { w: frameW.value, h: frameH.value };
    return maxPan(containedSize({ w: naturalW.value, h: naturalH.value }, frame), frame, s);
  };

  const pinch = Gesture.Pinch()
    .onStart((e) => {
      startScale.value = scale.value;
      startTx.value = tx.value;
      startTy.value = ty.value;
      startFx.value = e.focalX - frameW.value / 2;
      startFy.value = e.focalY - frameH.value / 2;
    })
    .onUpdate((e) => {
      const next = clamp(startScale.value * e.scale, MIN_ZOOM, MAX_ZOOM);
      const t = translationAbout(
        { x: startFx.value, y: startFy.value },
        { x: e.focalX - frameW.value / 2, y: e.focalY - frameH.value / 2 },
        { x: startTx.value, y: startTy.value },
        next / startScale.value,
      );
      const held = clampPan(t, limitAt(next));
      scale.value = next;
      tx.value = held.x;
      ty.value = held.y;
    })
    .onEnd(() => {
      // Let go almost at rest: settle on the whole picture.
      if (scale.value < 1.05) {
        scale.value = withTiming(1, { duration: 150 });
        tx.value = withTiming(0, { duration: 150 });
        ty.value = withTiming(0, { duration: 150 });
      }
    });

  // One finger only: with two, the pinch's own focal point moves the picture.
  const pan = Gesture.Pan()
    .maxPointers(1)
    .minDistance(4)
    .onStart(() => {
      startTx.value = tx.value;
      startTy.value = ty.value;
    })
    .onUpdate((e) => {
      const limit = limitAt(scale.value);
      const held = clampPan(
        { x: startTx.value + e.translationX, y: startTy.value + e.translationY },
        limit,
      );
      tx.value = held.x;
      ty.value = held.y;
    })
    .onEnd((e) => {
      const limit = limitAt(scale.value);
      // The flick keeps going and eases to a stop; it cannot run past an edge.
      tx.value = withDecay({ velocity: e.velocityX, clamp: [-limit.x, limit.x] });
      ty.value = withDecay({ velocity: e.velocityY, clamp: [-limit.y, limit.y] });
    });

  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onEnd((e) => {
      if (scale.value > 1.5) {
        scale.value = withTiming(1, { duration: 180 });
        tx.value = withTiming(0, { duration: 180 });
        ty.value = withTiming(0, { duration: 180 });
        return;
      }
      // Eased, not set outright: a jump from 1x to 2.5x in one frame reads as
      // the photo being swapped rather than zoomed.
      const focal = { x: e.x - frameW.value / 2, y: e.y - frameH.value / 2 };
      const t = translationAbout(
        focal,
        focal,
        { x: tx.value, y: ty.value },
        DOUBLE_TAP_ZOOM / scale.value,
      );
      const held = clampPan(t, limitAt(DOUBLE_TAP_ZOOM));
      scale.value = withTiming(DOUBLE_TAP_ZOOM, { duration: 180 });
      tx.value = withTiming(held.x, { duration: 180 });
      ty.value = withTiming(held.y, { duration: 180 });
    });

  // A pinch and a drag work together; a double-tap is its own thing.
  const gesture = Gesture.Race(doubleTap, Gesture.Simultaneous(pinch, pan));

  const moved = useAnimatedStyle(() => ({
    transform: [{ translateX: tx.value }, { translateY: ty.value }, { scale: scale.value }],
  }));

  return (
    <GestureDetector gesture={gesture}>
      <Animated.View
        style={styles.frame}
        onLayout={(e) => {
          frameW.value = e.nativeEvent.layout.width;
          frameH.value = e.nativeEvent.layout.height;
        }}>
        <AnimatedImage
          source={{ uri }}
          style={[styles.image, moved]}
          contentFit="contain"
          accessibilityLabel={label}
          onLoad={(e) => {
            naturalW.value = e.source.width;
            naturalH.value = e.source.height;
          }}
        />
      </Animated.View>
    </GestureDetector>
  );
}

const styles = StyleSheet.create({
  /** The wrapper owns real size: the image's percentage height resolves
   *  against its parent, and an auto-sized parent gave it 85% of nothing. */
  frame: {
    width: '100%',
    height: '85%',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 12,
    backgroundColor: '#fff',
  },
});
