import { Image } from 'expo-image';
import { useMemo, useState } from 'react';
import { ImageStyle, Modal, Pressable, StyleSheet, Text, ViewStyle, StyleProp } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import Svg, { Path } from 'react-native-svg';

import { useScale } from '@/constants/scale';

/** expo-image doesn't ship an animated variant, so the zoom transform needs
 *  one made here. Module scope: creating it per render remounts the image. */
const AnimatedImage = Animated.createAnimatedComponent(Image);

/**
 * A question's photograph, tappable to read properly.
 *
 * Wherever a snapped question shows as an image — the 84pt thumbnail on the
 * doubts list, the pinned stem on a solution screen — the image is too small
 * to actually READ, and reading it is the whole reason it exists. Tapping
 * opens the same full-screen viewer the figures use: dark scrim, pinch and
 * double-tap to zoom, no blur — this is the student's own question, not a
 * tease.
 *
 * The chevron badge is the affordance, the WHOLE image is the target: an
 * icon-sized hitbox on an 84pt thumb is a test of aim, not a control. On the
 * doubts list this sits inside a row whose own press navigates — the inner
 * responder wins, so the thumb peeks and the rest of the row still opens the
 * doubt.
 */
export function QuestionPeek({
  uri,
  label,
  frameStyle,
  imageStyle,
  contentFit = 'cover',
  disabled = false,
}: {
  uri: string;
  label: string;
  /** The closed-state frame — size it like the thing it replaces. */
  frameStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  /** 'cover' fills the list thumbnail; the solution screen passes 'contain'
   *  because its image carries words and the page's own aspect must hold. */
  contentFit?: 'cover' | 'contain';
  /** Erase mode on the list: the row's gestures own the touch. */
  disabled?: boolean;
}) {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const [open, setOpen] = useState(false);

  /**
   * Zoom is a shared value, so the pinch runs on the UI thread.
   *
   * As React state this re-rendered the component and committed a new style on
   * every frame of the gesture, which is why the zoom felt like it was catching
   * up with the fingers rather than following them. `.onUpdate` is a worklet
   * now — nothing crosses to JS while a student is pinching.
   *
   * The pinch is relative to where the last gesture left off (`start`), which
   * also fixes a smaller bug: each new pinch used to jump back to the raw
   * gesture scale, so zooming in twice reset to roughly 1× on the second try.
   */
  const zoom = useSharedValue(1);
  const zoomStart = useSharedValue(1);

  const pinch = Gesture.Pinch()
    .onStart(() => {
      zoomStart.value = zoom.value;
    })
    .onUpdate((e) => {
      zoom.value = Math.min(Math.max(zoomStart.value * e.scale, 1), 5);
    });
  const doubleTap = Gesture.Tap()
    .numberOfTaps(2)
    .onEnd(() => {
      // Eased, not set outright. The setState version snapped, but a jump
      // from 1x to 2.5x in one frame reads as the photo being swapped rather
      // than zoomed; 180ms is enough to see where the zoom went.
      zoom.value = withTiming(zoom.value > 1.5 ? 1 : 2.5, { duration: 180 });
    });
  const composed = Gesture.Race(pinch, doubleTap);

  const zoomStyle = useAnimatedStyle(() => ({
    transform: [{ scale: zoom.value }],
  }));

  return (
    <>
      <Pressable
        accessibilityRole="imagebutton"
        accessibilityLabel={`${label} — tap to enlarge`}
        style={frameStyle}
        disabled={disabled}
        onPress={() => {
          zoom.value = 1;
          setOpen(true);
        }}>
        <Image
          source={{ uri }}
          style={[styles.image, imageStyle]}
          contentFit={contentFit}
          transition={120}
          accessibilityLabel={label}
        />
        {/* The invitation: a small chevron at the image's foot. */}
        <Svg
          style={styles.chevron}
          width={scale(18)}
          height={scale(18)}
          viewBox="0 0 18 18"
          pointerEvents="none">
          <Path d="M9 0a9 9 0 1 0 0 18A9 9 0 0 0 9 0Z" fill="rgba(28,26,22,0.55)" />
          <Path
            d="M5.5 7.5 9 11l3.5-3.5"
            stroke="#fff"
            strokeWidth={1.8}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </Svg>
      </Pressable>

      <Modal
        visible={open}
        transparent
        animationType="fade"
        onRequestClose={() => setOpen(false)}>
        <Pressable style={styles.backdrop} onPress={() => setOpen(false)}>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Close enlarged question"
            style={styles.closeButton}
            onPress={() => setOpen(false)}>
            <Text style={styles.closeText}>Close ✕</Text>
          </Pressable>
          <GestureDetector gesture={composed}>
            {/* The wrapper must own real size: the image's percentage height
                resolves against its parent, and an auto-sized Pressable gave
                it 85% of nothing — the viewer opened as scrim and a Close
                button around an invisible image. */}
            <Pressable style={styles.fullFrame} onPress={(e) => e.stopPropagation()}>
              <AnimatedImage
                source={{ uri }}
                style={[styles.fullImage, zoomStyle]}
                contentFit="contain"
                accessibilityLabel={label}
              />
            </Pressable>
          </GestureDetector>
        </Pressable>
      </Modal>
    </>
  );
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    image: {
      width: '100%',
      height: '100%',
    },
    chevron: {
      position: 'absolute',
      bottom: scale(5),
      right: scale(5),
    },
    // The viewer, matched to question-diagram's: same scrim, same close
    // button, deliberately NO blur.
    backdrop: {
      flex: 1,
      backgroundColor: 'rgba(0,0,0,0.75)',
      alignItems: 'center',
      justifyContent: 'center',
      padding: scale(16),
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
    fullFrame: {
      width: '100%',
      height: '85%',
      justifyContent: 'center',
    },
    fullImage: {
      width: '100%',
      height: '100%',
      borderRadius: scale(12),
      backgroundColor: '#fff',
    },
  });
}
