import { requireOptionalNativeModule } from 'expo';
import { useEffect, useRef, useState, type ComponentType } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import Svg, { Circle, Path, Rect } from 'react-native-svg';

import { CONTROL_LABEL_MAX_SCALE } from '@/constants/font-scale';
import { useScale } from '@/constants/scale';
import { hapticKey, hapticSwitched } from '@/lib/haptics';

/**
 * SNAP'S OWN CAMERA, inside the app.
 *
 * Snap used to hand off to the phone's camera app. That app shows its own
 * "use this photo?" screen before ours, so every snap was confirmed twice, and
 * the gallery was unreachable from it: a student who wanted a saved photo had
 * to close the camera first, then find the gallery on the screen behind it.
 *
 * Here the camera is part of the page: the preview fills the screen, the
 * gallery sits at the bottom left, the shutter in the middle, and the photo
 * goes straight to the crop. Corner guides show where to fit the question.
 *
 * expo-camera keeps a photo upright on Android by default (skipProcessing is
 * left off on purpose: some Samsung and Sony phones return sideways images
 * without it). Loaded lazily: an installed build without the native module
 * cannot use it, and `inAppCameraAvailable` lets the caller fall back to the
 * phone's camera app there.
 */
export function inAppCameraAvailable(): boolean {
  return !!requireOptionalNativeModule('ExpoCamera');
}

type CameraHandle = {
  takePictureAsync: (options: { quality?: number; shutterSound?: boolean }) => Promise<{
    uri: string;
    width: number;
    height: number;
  }>;
};

type CameraViewProps = {
  style: object;
  facing: 'back';
  enableTorch: boolean;
  animateShutter: boolean;
  onCameraReady: () => void;
  onMountError: () => void;
  ref: React.Ref<CameraHandle>;
};

function cameraView(): ComponentType<CameraViewProps> | null {
  if (!inAppCameraAvailable()) return null;
  try {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    return require('expo-camera').CameraView;
  } catch {
    return null;
  }
}

const CREAM = '#FFFDF8';

export function SnapCamera({
  onCapture,
  onGallery,
  onClose,
  onFailed,
}: {
  onCapture: (picture: { uri: string; width: number; height: number }) => void;
  onGallery: () => void;
  onClose: () => void;
  /** The camera could not start or could not take the picture. */
  onFailed: () => void;
}) {
  const { scale, verticalScale } = useScale();
  const insets = useSafeAreaInsets();
  const CameraView = useRef(cameraView()).current;
  const camera = useRef<CameraHandle>(null);
  const [ready, setReady] = useState(false);
  const [torch, setTorch] = useState(false);
  const [busy, setBusy] = useState(false);

  // The caller checks first; this only covers a broken build. Said after
  // render, never during it.
  useEffect(() => {
    if (!CameraView) onFailed();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  if (!CameraView) return null;

  const shoot = async () => {
    if (!ready || busy || !camera.current) return;
    setBusy(true);
    hapticKey();
    try {
      const picture = await camera.current.takePictureAsync({ quality: 0.85 });
      onCapture(picture);
    } catch {
      setBusy(false);
      onFailed();
    }
  };

  const glass = {
    backgroundColor: 'rgba(26,24,20,.45)',
    borderWidth: StyleSheet.hairlineWidth * 2,
    borderColor: 'rgba(255,253,248,.18)',
  };
  const corner = scale(28);
  const guideInset = scale(28);

  return (
    <View style={styles.root}>
      <CameraView
        ref={camera}
        style={StyleSheet.absoluteFillObject}
        facing="back"
        enableTorch={torch}
        animateShutter
        onCameraReady={() => setReady(true)}
        onMountError={onFailed}
      />

      {/* Where to fit the question: four corners, nothing that hides the page. */}
      <View
        pointerEvents="none"
        style={{
          position: 'absolute',
          left: guideInset,
          right: guideInset,
          top: insets.top + verticalScale(96),
          bottom: insets.bottom + verticalScale(190),
        }}>
        {(['tl', 'tr', 'bl', 'br'] as const).map((c) => (
          <View
            key={c}
            style={{
              position: 'absolute',
              width: corner,
              height: corner,
              ...(c[0] === 't' ? { top: 0 } : { bottom: 0 }),
              ...(c[1] === 'l' ? { left: 0 } : { right: 0 }),
              borderColor: CREAM,
              borderTopWidth: c[0] === 't' ? 3 : 0,
              borderBottomWidth: c[0] === 'b' ? 3 : 0,
              borderLeftWidth: c[1] === 'l' ? 3 : 0,
              borderRightWidth: c[1] === 'r' ? 3 : 0,
              borderTopLeftRadius: c === 'tl' ? scale(10) : 0,
              borderTopRightRadius: c === 'tr' ? scale(10) : 0,
              borderBottomLeftRadius: c === 'bl' ? scale(10) : 0,
              borderBottomRightRadius: c === 'br' ? scale(10) : 0,
            }}
          />
        ))}
      </View>

      {/* Top: close, the page's name, the torch. */}
      <View style={[styles.top, { paddingTop: insets.top + verticalScale(8), paddingHorizontal: scale(16) }]}>
        <Pressable
          onPress={onClose}
          hitSlop={scale(8)}
          accessibilityRole="button"
          accessibilityLabel="Close"
          style={[styles.round, glass, { width: scale(44), height: scale(44), borderRadius: scale(22) }]}>
          <Svg width={scale(16)} height={scale(16)} viewBox="0 0 16 16">
            <Path d="M3.5 3.5l9 9M12.5 3.5l-9 9" stroke={CREAM} strokeWidth={1.9} strokeLinecap="round" />
          </Svg>
        </Pressable>
        <Text style={[styles.title, { fontSize: scale(17) }]} maxFontSizeMultiplier={CONTROL_LABEL_MAX_SCALE}>
          Snap and Solve
        </Text>
        <Pressable
          onPress={() => {
            hapticSwitched();
            setTorch((t) => !t);
          }}
          hitSlop={scale(8)}
          accessibilityRole="switch"
          accessibilityState={{ checked: torch }}
          accessibilityLabel="Torch"
          style={[
            styles.round,
            glass,
            { width: scale(44), height: scale(44), borderRadius: scale(22) },
            torch && { backgroundColor: CREAM },
          ]}>
          <Svg width={scale(18)} height={scale(18)} viewBox="0 0 24 24" fill="none">
            <Path
              d="M13 2.5 5.5 13.5H11l-1 8 7.5-11H12l1-8z"
              stroke={torch ? '#1C1A16' : CREAM}
              strokeWidth={1.8}
              strokeLinejoin="round"
            />
          </Svg>
        </Pressable>
      </View>

      {/* Bottom: the hint, then gallery at the left and the shutter. */}
      <View style={[styles.bottom, { paddingBottom: insets.bottom + verticalScale(18) }]}>
        <View style={[styles.hint, glass, { paddingHorizontal: scale(14), paddingVertical: verticalScale(8), borderRadius: scale(99) }]}>
          <Text style={[styles.hintText, { fontSize: scale(13.5) }]} maxFontSizeMultiplier={CONTROL_LABEL_MAX_SCALE}>
            Fit one question in the frame, or up to 3 on a page
          </Text>
        </View>
        <View style={[styles.controls, { paddingHorizontal: scale(28), marginTop: verticalScale(18) }]}>
          <Pressable
            onPress={onGallery}
            hitSlop={scale(8)}
            accessibilityRole="button"
            accessibilityLabel="Choose from gallery"
            style={({ pressed }) => [
              styles.round,
              glass,
              { width: scale(52), height: scale(52), borderRadius: scale(14), opacity: pressed ? 0.6 : 1 },
            ]}>
            <Svg width={scale(22)} height={scale(22)} viewBox="0 0 24 24" fill="none">
              <Rect x={3.5} y={4.5} width={17} height={15} rx={3} stroke={CREAM} strokeWidth={1.8} />
              <Circle cx={9} cy={10} r={1.6} fill={CREAM} />
              <Path d="M4 17l4.5-4.5 3.5 3.5 3-3 5 5" stroke={CREAM} strokeWidth={1.8} strokeLinejoin="round" />
            </Svg>
          </Pressable>

          <Pressable
            onPress={shoot}
            disabled={!ready || busy}
            accessibilityRole="button"
            accessibilityLabel="Take the photo"
            style={({ pressed }) => [
              styles.round,
              {
                width: scale(78),
                height: scale(78),
                borderRadius: scale(39),
                borderWidth: 4,
                borderColor: CREAM,
                opacity: ready ? 1 : 0.5,
                transform: [{ scale: pressed ? 0.94 : 1 }],
              },
            ]}>
            <View style={{ width: scale(62), height: scale(62), borderRadius: scale(31), backgroundColor: CREAM }} />
          </Pressable>

          {/* Balances the gallery, so the shutter sits in the true middle. */}
          <View style={{ width: scale(52) }} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  root: { flex: 1, backgroundColor: '#000' },
  top: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  round: { alignItems: 'center', justifyContent: 'center' },
  title: { fontFamily: 'Onest_600SemiBold', color: CREAM, includeFontPadding: false },
  bottom: { position: 'absolute', left: 0, right: 0, bottom: 0, alignItems: 'center' },
  hint: { alignSelf: 'center' },
  hintText: { fontFamily: 'Onest_500Medium', color: CREAM, includeFontPadding: false },
  controls: { width: '100%', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' },
});
