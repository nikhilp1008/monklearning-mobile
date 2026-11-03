import { StyleSheet, Text, View } from 'react-native';
import Svg, { Circle, Path } from 'react-native-svg';

import { ObButton } from '@/components/onboarding-kit';
import { colors } from '@/constants/brand';

/**
 * WHAT A STUDENT SEES WHEN A SCREEN BREAKS — shown by the root error boundary
 * (app/_layout.tsx) in place of the screen that failed to draw, instead of the
 * app closing. The words are the boundary's own; this is only how they look.
 *
 * Laid out like the rest of the app rather than as a centred alert: the
 * page's heading and body sizes on the left edge, and the onboarding's square
 * key at the bottom where a thumb already is.
 *
 * Deliberately plain in what it may depend on. It is drawn when something has
 * already gone wrong, so it reads no stored data and no context a broken tree
 * may not have provided — just fixed insets for the status bar and the home
 * indicator.
 */
export function ErrorScreen({ onRetry }: { onRetry: () => void }) {
  return (
    <View style={styles.page}>
      <View style={styles.middle}>
        <TangledThread />
        <Text style={styles.title}>Something went wrong</Text>
        <Text style={styles.body}>That screen hit a problem. Your progress is saved.</Text>
      </View>
      <ObButton label="Try again" onPress={onRetry} />
    </View>
  );
}

/** A straight line that got knotted, in ink, with a marigold dot where it
 *  carries on: the thread is interrupted, not cut. */
function TangledThread() {
  return (
    <Svg width={96} height={64} viewBox="0 0 96 64" fill="none" style={styles.mark}>
      <Path
        d="M4 50 C 18 50, 22 14, 38 18 S 30 52, 46 46 S 66 10, 58 26 S 44 40, 62 40 S 80 30, 92 30"
        stroke={colors.ink}
        strokeWidth={3.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Circle cx={92} cy={30} r={4} fill={colors.marigold} />
    </Svg>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: colors.paper,
    paddingHorizontal: 24,
    paddingTop: 56,
    paddingBottom: 40,
  },
  middle: { flex: 1, justifyContent: 'center' },
  mark: { marginBottom: 22, marginLeft: -2 },
  title: {
    fontFamily: 'Onest_600SemiBold',
    fontSize: 24,
    lineHeight: 29,
    letterSpacing: -0.025 * 24,
    color: colors.ink,
  },
  body: {
    marginTop: 8,
    maxWidth: 320,
    fontFamily: 'Onest_400Regular',
    fontSize: 15,
    lineHeight: 22,
    color: colors.slate,
  },
});
