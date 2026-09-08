// 02 Welcome — handoff-onboarding, screen 2 of 10.
//
// Two lines, the second in grey: the promise, then what it is worth. Same
// frame as screen 1.
import { StatusBar } from 'expo-status-bar';
import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { WelcomeFrame } from '@/components/welcome-frame';
import { ob, obFont, useDesignScale } from '@/constants/onboarding';

export default function WelcomeTwoScreen() {
  const { ds, fs, tracking } = useDesignScale();
  const styles = useMemo(() => createStyles(ds, fs, tracking), [ds, fs, tracking]);

  return (
    <>
      <StatusBar style="dark" />
      <WelcomeFrame
        photo={require('@/assets/images/welcome-02-ask-doubt.png')}
        index={1}
        next="/email">
        <View style={styles.lines}>
          <Text style={styles.headline}>Ask anything.</Text>
          <Text style={[styles.headline, styles.headlineQuiet]}>Understand everything.</Text>
        </View>
      </WelcomeFrame>
    </>
  );
}

function createStyles(
  ds: (n: number) => number,
  fs: (n: number) => number,
  tracking: (em: number, size: number) => number
) {
  return StyleSheet.create({
    lines: { gap: ds(2) },
    headline: {
      fontFamily: obFont.r400,
      fontSize: fs(31),
      lineHeight: fs(36),
      letterSpacing: tracking(-0.034, 31),
      color: ob.ink,
    },
    headlineQuiet: { color: ob.ink55 },
  });
}
