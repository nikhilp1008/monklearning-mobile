import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
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
  fromTop = false,
  fadeTo,
  disabled = false,
}: {
  uri: string;
  label: string;
  /** The closed-state frame — size it like the thing it replaces. */
  frameStyle?: StyleProp<ViewStyle>;
  imageStyle?: StyleProp<ImageStyle>;
  /** 'cover' fills the frame; 'contain' fits the whole picture inside it. */
  contentFit?: 'cover' | 'contain';
  /** Hold the picture's TOP edge when it is cropped, so a photographed
   *  question starts at its first line rather than at its middle. */
  fromTop?: boolean;
  /**
   * The colour under the frame. Given one, the foot of the picture dissolves
   * into it rather than ending on a cut line — the cue that there is more of
   * the page than the frame is showing, and that tapping opens it.
   */
  fadeTo?: string;
  /** Erase mode on the list: the row's gestures own the touch. */
  disabled?: boolean;
}) {
  /**
   * WHETHER THERE IS ANYTHING BELOW THE FRAME, measured rather than assumed.
   *
   * A page photographed portrait is taller than the frame, so it is filled
   * from its top edge and faded at the foot: the fade is the cue that the
   * rest is a tap away. A crop that is WIDER than the frame has nothing
   * below — filling would only cut its sides — so it is fitted whole and the
   * fade stays off. A fade over a question with nothing behind it is just a
   * line of the question greyed out for no reason.
   */
  const [natural, setNatural] = useState<{ w: number; h: number } | null>(null);
  const [frame, setFrame] = useState<{ w: number; h: number } | null>(null);
  const overflows =
    !!fromTop && !!natural && !!frame && natural.h / natural.w > frame.h / frame.w + 0.02;
  const fit = fromTop ? (overflows ? 'cover' : 'contain') : contentFit;

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
        onLayout={(e) =>
          setFrame({ w: e.nativeEvent.layout.width, h: e.nativeEvent.layout.height })
        }
        disabled={disabled}
        onPress={() => {
          zoom.value = 1;
          setOpen(true);
        }}>
        <Image
          source={{ uri }}
          style={[styles.image, imageStyle]}
          contentFit={fit}
          contentPosition={overflows ? 'top center' : 'center'}
          transition={120}
          accessibilityLabel={label}
          onLoad={(e) => setNatural({ w: e.source.width, h: e.source.height })}
        />
        {/* Transparent for most of its height and only solid at the very
            foot, so the fade reads as the page running out rather than as a
            grey band laid over the words. */}
        {!!fadeTo && overflows && (
          <LinearGradient
            colors={[`${fadeTo}00`, `${fadeTo}66`, `${fadeTo}E6`, fadeTo]}
            locations={[0, 0.5, 0.85, 1]}
            style={styles.fade}
            pointerEvents="none"
          />
        )}
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
    /** Deep enough to be a fade rather than an edge, shallow enough to leave
     *  most of the picture untouched. */
    fade: {
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 0,
      // Deep enough to read as a fade; strong only over the last few points,
      // so a line of the question sitting at the edge is dimmed rather than
      // erased.
      height: scale(52),
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
