// 01 Welcome — handoff-onboarding, screen 1 of 10.
//
// The full-bleed photograph with a dark veil and a six-row spec list is gone.
// Two reasons, and the second is the stronger one: the new design says its
// promise in one line rather than a table, and covering only the top of the
// screen puts the source image within reach of the pixels it actually has —
// see the note in components/welcome-frame.tsx.
import { StatusBar } from 'expo-status-bar';
import { useMemo } from 'react';
import { StyleSheet, Text } from 'react-native';

import { WelcomeFrame } from '@/components/welcome-frame';
import { ob, obFont, useDesignScale } from '@/constants/onboarding';

export default function WelcomeScreen() {
  const { ds, fs, tracking } = useDesignScale();
  const styles = useMemo(() => createStyles(ds, fs, tracking), [ds, fs, tracking]);

  return (
    <>
      {/* The photo sits below the inset, so the bar is over white, not over
          the image. Dark glyphs. */}
      <StatusBar style="dark" />
      <WelcomeFrame
        photo={require('@/assets/images/welcome-01-scan-doubt.png')}
        index={0}
        next="/welcome-2">
        <Text style={styles.headline}>AI for JEE &amp; NEET aspirants.</Text>
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
    headline: {
      fontFamily: obFont.r400,
      fontSize: fs(31),
      lineHeight: fs(36),
      letterSpacing: tracking(-0.034, 31),
      color: ob.ink,
    },
  });
}
