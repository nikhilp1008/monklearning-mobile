import { LinearGradient } from 'expo-linear-gradient';
import { useEffect, useRef } from 'react';
import { Animated, Easing, StyleSheet } from 'react-native';
import Svg, { Path } from 'react-native-svg';

import { ob } from '@/constants/onboarding';

/**
 * THE CONFIRMATION'S MOTION — the tick, its rings, and the staggered rise.
 *
 * These lived inside `pass-active`, the last screen of onboarding, and the
 * paywall's own confirmation needs the identical sequence: the same 620ms pop
 * to 1.08 before settling, the same two rings 460ms apart, the same 14pt rise
 * on each receipt row. Copying them would have guaranteed the two screens
 * drift, and a student who buys a plan should see exactly what a student who
 * buys a pass sees. So they moved here, which is what this codebase already
 * did when `exam` and `class` needed the same option row.
 */

/** `mkRise` — 14px up, fading in. The handoff staggers the receipt rows out of
 *  the headline; each row gets its own delay. */
export function Rise({ delay, children }: { delay: number; children: React.ReactNode }) {
  const anim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const run = Animated.timing(anim, {
      toValue: 1,
      duration: 480,
      delay,
      easing: Easing.bezier(0.2, 0.85, 0.2, 1),
      useNativeDriver: true,
    });
    run.start();
    return () => run.stop();
  }, [anim, delay]);
  return (
    <Animated.View
      style={{
        opacity: anim,
        transform: [{ translateY: anim.interpolate({ inputRange: [0, 1], outputRange: [14, 0] }) }],
      }}>
      {children}
    </Animated.View>
  );
}

/**
 * `mkRing` — an amber disc that expands out from under the tick and fades.
 * Two of them, staggered, so the confirmation has something moving in it
 * rather than four rows that are simply present. Runs once; this is a moment,
 * not a loop.
 */
export function Ring({ size, delay }: { size: number; delay: number }) {
  const anim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const run = Animated.timing(anim, {
      toValue: 1,
      duration: 1400,
      delay,
      easing: Easing.bezier(0.2, 0.8, 0.2, 1),
      useNativeDriver: true,
    });
    run.start();
    return () => run.stop();
  }, [anim, delay]);
  return (
    <Animated.View
      pointerEvents="none"
      style={{
        position: 'absolute',
        width: size,
        height: size,
        borderRadius: size / 2,
        backgroundColor: ob.amber,
        opacity: anim.interpolate({ inputRange: [0, 0.7, 1], outputRange: [0.5, 0.1, 0] }),
        transform: [
          { scale: anim.interpolate({ inputRange: [0, 1], outputRange: [0.65, 2] }) },
        ],
      }}
    />
  );
}

/** The tick pops out of nothing at 1.08 before settling — `mkPop`. */
export function Tick({ size }: { size: number }) {
  const anim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const run = Animated.timing(anim, {
      toValue: 1,
      duration: 620,
      delay: 60,
      easing: Easing.bezier(0.2, 0.9, 0.2, 1),
      useNativeDriver: true,
    });
    run.start();
    return () => run.stop();
  }, [anim]);
  return (
    <Animated.View
      style={{
        width: size,
        height: size,
        borderRadius: size / 2,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: anim,
        transform: [
          { scale: anim.interpolate({ inputRange: [0, 0.62, 1], outputRange: [0.5, 1.08, 1] }) },
        ],
      }}>
      {/* `linear-gradient(150deg, …)` in the handoff — light amber falling to
          the deeper one, so the disc has some roundness under the tick rather
          than reading as a flat sticker. */}
      <LinearGradient
        colors={[ob.amberLight, ob.amber]}
        start={{ x: 0.15, y: 0 }}
        end={{ x: 0.85, y: 1 }}
        style={StyleSheet.absoluteFill}
      />
      <Svg viewBox="0 0 24 24" width={size * 0.46} height={size * 0.46} fill="none">
        <Path
          d="M5 12.5l4.5 4.5L19 7.5"
          stroke={ob.ink}
          strokeWidth={3}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </Animated.View>
  );
}

