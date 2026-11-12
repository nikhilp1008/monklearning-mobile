import { Image } from 'expo-image';
import { LinearGradient } from 'expo-linear-gradient';
import { useMemo, useState } from 'react';
import { ImageStyle, Modal, Pressable, StyleSheet, View, ViewStyle, StyleProp } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import Svg, { Path } from 'react-native-svg';

import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { ZoomableImage } from '@/components/zoomable-image';
import { useScale } from '@/constants/scale';

/**
 * A question's photograph, tappable to read properly.
 *
 * Wherever a snapped question shows as an image — the 84pt thumbnail on the
 * doubts list, the pinned stem on a solution screen — the image is too small
 * to actually READ, and reading it is the whole reason it exists. Tapping
 * opens a full-screen viewer: dark scrim, pinch to zoom around the fingers,
 * drag to move the photo, double-tap to zoom in and out (components/
 * zoomable-image.tsx), no blur — this is the student's own question, not a
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
  showExpand = true,
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
  /** The expand mark. Off on the Snaps list (Nikhil, 9 Nov 2026): a mark on
   *  every thumbnail was clutter, and a tap on a photo opens it anyway. On
   *  in a snap's solution, where the one big photo needs the hint. */
  showExpand?: boolean;
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
  const insets = useSafeAreaInsets();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const [open, setOpen] = useState(false);

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
        onPress={() => setOpen(true)}>
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
        {/* The invitation: an expand mark (two corners pulling apart), the
            sign phones use for "open this bigger". It was a down chevron,
            which read as "show more below" (Nikhil, 9 Nov 2026). */}
        {showExpand ? (
        <Svg
          style={styles.chevron}
          width={scale(20)}
          height={scale(20)}
          viewBox="0 0 20 20"
          pointerEvents="none">
          <Path d="M10 0a10 10 0 1 0 0 20A10 10 0 0 0 10 0Z" fill="rgba(28,26,22,0.6)" />
          <Path
            d="M11.5 5.5h3v3M14.5 5.5l-3.6 3.6M8.5 14.5h-3v-3M5.5 14.5l3.6-3.6"
            stroke="#fff"
            strokeWidth={1.6}
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </Svg>
        ) : null}
      </Pressable>

      <Modal
        visible={open}
        transparent
        animationType="fade"
        // Edge to edge, so the dark scrim covers the status bar too and the
        // page behind does not show above it.
        statusBarTranslucent
        navigationBarTranslucent
        onRequestClose={() => setOpen(false)}>
        {/* A Modal is its own native hierarchy: the app's root gesture view does
            not reach into it, and without one here the pinch and drag never
            fire. */}
        <GestureHandlerRootView style={styles.gestureRoot}>
          <View style={styles.backdrop}>
            {/* The dark area closes the viewer, and sits BEHIND the picture: a
                lifted finger anywhere inside a closing Pressable counts as a
                tap, so a drag or pinch that ended over the photo used to be
                able to shut it. The picture is a sibling above, not a child. */}
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Close enlarged question"
              style={StyleSheet.absoluteFill}
              onPress={() => setOpen(false)}
            />
            <Pressable
              accessibilityRole="button"
              accessibilityLabel="Close enlarged question"
              // Clear of the status bar and camera: the Modal is drawn edge to
              // edge, and a fixed 48 sat on the punch-hole on some Androids.
              hitSlop={10}
              style={[styles.closeButton, { top: insets.top + verticalScale(10) }]}
              onPress={() => setOpen(false)}>
              <Svg viewBox="0 0 24 24" width={scale(16)} height={scale(16)} fill="none">
                <Path d="M6 6l12 12M18 6L6 18" stroke="#fff" strokeWidth={2.2} strokeLinecap="round" />
              </Svg>
            </Pressable>
            <ZoomableImage uri={uri} label={label} />
          </View>
        </GestureHandlerRootView>
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
    gestureRoot: { flex: 1 },
    // The viewer, matched to question-diagram's: same scrim, same close
    // button, deliberately NO blur.
    backdrop: {
      flex: 1,
      backgroundColor: 'rgba(12,10,8,0.9)',
      alignItems: 'center',
      justifyContent: 'center',
      padding: scale(16),
      paddingTop: scale(72),
    },
    /* A round 40pt close, the app's own circle buttons in glass on the dark
       scrim (the page's back button, Home's profile button), at the top-right
       where a viewer's close is looked for. It was a white "Close ✕" pill in
       the system font, floating over the photo. */
    closeButton: {
      position: 'absolute',
      right: scale(16),
      zIndex: 2,
      width: scale(40),
      height: scale(40),
      borderRadius: scale(20),
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(255,255,255,.14)',
      borderWidth: 1,
      borderColor: 'rgba(255,255,255,.22)',
    },
  });
}
