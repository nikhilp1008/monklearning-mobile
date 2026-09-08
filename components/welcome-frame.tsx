import { router } from 'expo-router';
import { useEffect, useMemo, useRef } from 'react';
import { Animated, Easing, Image, Pressable, StyleSheet, View, type ImageSourcePropType } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { ob, useDesignScale } from '@/constants/onboarding';

/**
 * The shape both welcome screens share: a photograph filling the top of the
 * page under a rounded bottom edge, a headline on white beneath it, and a
 * pagination/arrow row at the foot.
 *
 * The photo is `flex: 1` rather than the handoff's fixed 620pt. 620 is 73% of
 * its 844pt frame, and pinning that number would overflow once the safe-area
 * inset and a two-line headline are added on a shorter device. Taking the
 * remaining space gives the same proportion where the frames agree and cannot
 * push the button off-screen where they don't.
 *
 * Why the photo shrank at all: the previous screens were full-bleed, and the
 * source images are 1162px tall against the 2796px a 932pt screen wants at 3x
 * -- a 0.42 scale factor, upscaled well past soft. Covering ~620pt instead
 * needs 2054px, so the same file lands at 0.57. That is a 36% sharper image
 * for no new art. It is still short of 1.0; only new photography fixes that.
 */
export function WelcomeFrame({
  photo,
  index,
  next,
  children,
}: {
  photo: ImageSourcePropType;
  /** 0 or 1 — which pagination pill is filled. */
  index: 0 | 1;
  next: string;
  /** The headline block, rendered on white under the photograph. */
  children: React.ReactNode;
}) {
  const { ds } = useDesignScale();
  const styles = useMemo(() => createStyles(ds), [ds]);

  // `rise` — the same 14pt lift and fade every onboarding screen enters with.
  const anim = useRef(new Animated.Value(0)).current;
  useEffect(() => {
    const run = Animated.timing(anim, {
      toValue: 1,
      duration: 340,
      delay: 90,
      easing: Easing.bezier(0.2, 0.85, 0.2, 1),
      useNativeDriver: true,
    });
    run.start();
    return () => run.stop();
  }, [anim]);

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <View style={styles.photoFrame}>
          <Image source={photo} style={styles.photo} resizeMode="cover" />
        </View>

        <Animated.View
          style={[
            styles.headBlock,
            {
              opacity: anim,
              transform: [
                { translateY: anim.interpolate({ inputRange: [0, 1], outputRange: [14, 0] }) },
              ],
            },
          ]}>
          {children}
        </Animated.View>

        <View style={styles.footer}>
          <View style={styles.dots}>
            <View style={[styles.dot, index === 0 && styles.dotOn]} />
            <View style={[styles.dot, index === 1 && styles.dotOn]} />
          </View>
          <Pressable
            accessibilityRole="button"
            accessibilityLabel="Continue"
            onPress={() => router.push(next as never)}
            style={({ pressed }) => [styles.arrow, pressed && styles.arrowHeld]}>
            <Svg viewBox="0 0 24 24" width={ds(22)} height={ds(22)} fill="none">
              <Path
                d="M5 12h13M12.5 5.5 19 12l-6.5 6.5"
                stroke={ob.cream}
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}

function createStyles(ds: (n: number) => number) {
  return StyleSheet.create({
    screen: { flex: 1, backgroundColor: ob.surface },
    safeArea: { flex: 1 },
    photoFrame: {
      flex: 1,
      overflow: 'hidden',
      borderBottomLeftRadius: ds(34),
      borderBottomRightRadius: ds(34),
      backgroundColor: '#EDEAE4',
    },
    photo: { width: '100%', height: '100%' },
    headBlock: { paddingHorizontal: ds(28), paddingTop: ds(32) },
    footer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      paddingHorizontal: ds(28),
      paddingTop: ds(24),
      paddingBottom: ds(18),
    },
    dots: { flexDirection: 'row', alignItems: 'center', gap: ds(5) },
    dot: { width: ds(6), height: ds(3), borderRadius: ds(2), backgroundColor: '#DDD8CF' },
    dotOn: { width: ds(16), backgroundColor: ob.ink },
    arrow: {
      width: ds(62),
      height: ds(62),
      borderRadius: ds(31),
      backgroundColor: ob.ink,
      alignItems: 'center',
      justifyContent: 'center',
    },
    arrowHeld: { opacity: 0.85, transform: [{ scale: 0.97 }] },
  });
}
