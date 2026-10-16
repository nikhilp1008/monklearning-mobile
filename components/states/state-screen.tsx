import { StatusBar } from 'expo-status-bar';
import { type ComponentProps } from 'react';
import { Pressable, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Svg, { Path } from 'react-native-svg';

import { StateCard } from '@/components/states/state-card';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

/**
 * A WHOLE SCREEN THAT IS A STATE: a page that could not open (a doubt, a
 * note). It keeps a way back, which the old error text did not: those pages
 * printed the server's message on a blank screen with no header and no
 * button, so the only way out was the system's own back.
 */
export function StateScreen({
  onBack,
  ...card
}: { onBack: () => void } & ComponentProps<typeof StateCard>) {
  const { scale, verticalScale } = useScale();
  return (
    <View style={{ flex: 1, backgroundColor: colors.paper }}>
      <StatusBar style="dark" />
      <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
        <View style={{ paddingHorizontal: scale(22), paddingTop: verticalScale(8) }}>
          <Pressable
            onPress={onBack}
            hitSlop={scale(10)}
            accessibilityRole="button"
            accessibilityLabel="Go back"
            style={({ pressed }) => ({
              width: scale(44),
              height: scale(44),
              borderRadius: scale(22),
              borderWidth: StyleSheet.hairlineWidth * 2,
              borderColor: 'rgba(28,26,22,.14)',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: pressed ? 0.55 : 1,
            })}>
            <Svg width={scale(16)} height={scale(16)} viewBox="0 0 16 16" fill="none">
              <Path
                d="M10 3.5 5.5 8 10 12.5"
                stroke={colors.ink}
                strokeWidth={1.9}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </Svg>
          </Pressable>
        </View>
        <View style={{ flex: 1, justifyContent: 'center', paddingHorizontal: scale(24), paddingBottom: verticalScale(60) }}>
          <StateCard {...card} />
        </View>
      </SafeAreaView>
    </View>
  );
}
