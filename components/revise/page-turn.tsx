import { LinearGradient } from 'expo-linear-gradient';
import { forwardRef, ReactNode, useCallback, useImperativeHandle, useState } from 'react';
import { LayoutChangeEvent, StyleSheet, View } from 'react-native';
import { Gesture, GestureDetector } from 'react-native-gesture-handler';
import Animated, { cancelAnimation, Easing, runOnJS, SharedValue, useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';

import { useScale } from '@/constants/scale';
import { hapticSoft } from '@/lib/haptics';

/**
 * PAGES THAT TURN, for the formula sheet and the diagram viewer.
 *
 * One card on screen; nothing waits behind it. The card follows the finger
 * exactly and turns a little in depth, hinged at its edge. While it moves it
 * takes on Home's sky, faintly (pale gold to marigold to ember), and the
 * marigold ring from the app's "picked" gesture (components/gradient-select)
 * lights its edge and turns with the swipe. Let go and it settles on a soft
 * spring that carries the flick; as it lands the ring sweeps once round it
 * and fades, with a light haptic. At rest every card is white.
 */
export type PageTurnHandle = { goTo: (i: number) => void };
type Props = { count: number; initial?: number; renderPage: (i: number) => ReactNode; onIndex?: (i: number) => void };

const SPRING = { stiffness: 190, damping: 21, mass: 1, restDisplacementThreshold: 0.001, restSpeedThreshold: 0.01 };
const SKY = ['rgba(251,221,160,0.42)', 'rgba(242,178,58,0.18)', 'rgba(238,150,34,0.12)'] as const;
export const RING = ['rgba(238,163,31,0)', 'rgba(247,215,121,0.35)', '#EEA31F', 'rgba(247,215,121,0.5)', 'rgba(238,163,31,0)', 'rgba(238,163,31,0)'] as const;
export const RING_AT = [0, 0.194, 0.361, 0.5, 0.778, 1] as const;

function Page({ i, pos, land, landIndex, w, h, children }: { i: number; pos: SharedValue<number>; land: SharedValue<number>; landIndex: SharedValue<number>; w: number; h: number; children: ReactNode }) {
  const { scale } = useScale();
  const turn = useAnimatedStyle(() => {
    const d = i - pos.value, a = Math.min(1, Math.abs(d));
    return { transformOrigin: d > 0 ? '0% 50%' : '100% 50%', transform: [{ perspective: 1100 }, { rotateY: `${-d * 9}deg` }, { scale: 1 - 0.05 * a }] };
  });
  const warm = useAnimatedStyle(() => ({ opacity: Math.min(1, Math.abs(i - pos.value) * 1.8) }));
  const ring = useAnimatedStyle(() => {
    const d = i - pos.value, a = Math.min(1, Math.abs(d));
    const dragging = a > 0.001 && a < 1 ? Math.min(1, a * 2.2) * (1 - a * 0.4) : 0;
    const landing = landIndex.value === i && land.value < 1 ? (land.value < 0.7 ? 1 : ((1 - land.value) / 0.3) * 0.9) : 0;
    const deg = landing > dragging ? land.value * 360 : -d * 220;
    return { opacity: Math.max(dragging, landing), transform: [{ rotate: `${deg}deg` }] };
  });
  const diag = Math.ceil(Math.hypot(w, h));
  return (
    <Animated.View style={[{ width: w, paddingHorizontal: scale(20), paddingBottom: scale(8) }, turn]}>
      <View style={[st.frame, { borderRadius: scale(24) }]}>
        <View pointerEvents="none" style={[StyleSheet.absoluteFill, st.centre]}>
          <Animated.View style={[{ width: diag, height: diag }, ring]}>
            <LinearGradient colors={[...RING]} locations={[...RING_AT]} start={{ x: 0.5, y: 0 }} end={{ x: 0.5, y: 1 }} style={st.fill} />
          </Animated.View>
        </View>
        <View style={[st.card, { borderRadius: scale(22) }]}>
          {children}
          <Animated.View pointerEvents="none" style={[StyleSheet.absoluteFill, warm]}>
            <LinearGradient colors={[...SKY]} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} style={st.fill} />
          </Animated.View>
        </View>
      </View>
    </Animated.View>
  );
}

export const PageTurn = forwardRef<PageTurnHandle, Props>(function PageTurn({ count, initial = 0, renderPage, onIndex }, ref) {
  const [size, setSize] = useState({ w: 0, h: 0 });
  const [index, setIndex] = useState(initial);
  const pos = useSharedValue(initial), target = useSharedValue(initial), width = useSharedValue(1), start = useSharedValue(0);
  const land = useSharedValue(1), landIndex = useSharedValue(-1);

  const told = useCallback((i: number) => { setIndex(i); onIndex?.(i); }, [onIndex]);
  const landed = useCallback(() => hapticSoft(), []);

  const settle = (to: number, velocity: number) => {
    'worklet';
    const t = Math.max(0, Math.min(count - 1, to));
    target.value = t;
    runOnJS(told)(t);
    pos.value = withSpring(t, { ...SPRING, velocity }, (done) => {
      if (!done) return;
      landIndex.value = t;
      land.value = 0;
      land.value = withTiming(1, { duration: 950, easing: Easing.bezier(0.2, 0.75, 0.2, 1) });
      runOnJS(landed)();
    });
  };
  // The same settle, started from a tap (an arrow, the index) on the JS side.
  useImperativeHandle(ref, () => ({
    goTo: (i: number) => {
      const t = Math.max(0, Math.min(count - 1, i));
      cancelAnimation(pos);
      target.value = t;
      told(t);
      pos.value = withSpring(t, SPRING, (done) => {
        if (!done) return;
        landIndex.value = t;
        land.value = 0;
        land.value = withTiming(1, { duration: 950, easing: Easing.bezier(0.2, 0.75, 0.2, 1) });
        runOnJS(landed)();
      });
    },
  }));

  const pan = Gesture.Pan()
    .activeOffsetX([-12, 12])
    .failOffsetY([-14, 14])
    .onStart(() => { cancelAnimation(pos); start.value = pos.value; land.value = 1; })
    .onUpdate((e) => {
      let p = start.value - e.translationX / width.value;
      // past either end the page resists, so the edge is felt
      if (p < 0) p = -Math.pow(-p, 0.7) * 0.35;
      else if (p > count - 1) p = count - 1 + Math.pow(p - (count - 1), 0.7) * 0.35;
      pos.value = p;
    })
    .onEnd((e) => {
      const flick = -e.velocityX / width.value, moved = pos.value - target.value;
      let to = target.value;
      if (moved > 0.18 || flick > 0.9) to += 1;
      else if (moved < -0.18 || flick < -0.9) to -= 1;
      settle(to, flick);
    });

  const strip = useAnimatedStyle(() => ({ transform: [{ translateX: -pos.value * width.value }] }));
  const onLayout = (e: LayoutChangeEvent) => {
    const { width: w, height: h } = e.nativeEvent.layout;
    width.value = w;
    setSize({ w, h });
  };

  return (
    <GestureDetector gesture={pan}>
      <View style={st.pager} onLayout={onLayout}>
        {size.w > 0 && (
          <Animated.View style={[st.strip, { width: size.w * count, height: size.h }, strip]}>
            {Array.from({ length: count }, (_, i) => (
              <Page key={i} i={i} pos={pos} land={land} landIndex={landIndex} w={size.w} h={size.h}>
                {/* only the pages near the one in view are drawn: two either side, so a
                    fast double turn lands on a drawn page, not a blank card */}
                {Math.abs(i - index) <= 2 ? renderPage(i) : null}
              </Page>
            ))}
          </Animated.View>
        )}
      </View>
    </GestureDetector>
  );
});

const st = StyleSheet.create({
  pager: { flex: 1, overflow: 'hidden' },
  strip: { flexDirection: 'row' },
  frame: { flex: 1, overflow: 'hidden', padding: 2 },
  centre: { alignItems: 'center', justifyContent: 'center' },
  fill: { flex: 1 },
  card: { flex: 1, backgroundColor: '#FFFFFF', borderWidth: 1, borderColor: 'rgba(28,26,22,.14)', overflow: 'hidden' },
});
