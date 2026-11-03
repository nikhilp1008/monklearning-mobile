import { type StyleProp, type ViewStyle } from 'react-native';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';

import { StateBanner } from '@/components/states/state-line';
import { useOnline } from '@/lib/connection';

/**
 * "You're offline. Showing what's saved." Rendered only while the phone has
 * no internet, at the top of a page that can still show what it has. It
 * leaves by itself when the connection comes back.
 */
export function OfflineBanner({
  text = "Showing what's saved.",
  style,
}: {
  text?: string;
  style?: StyleProp<ViewStyle>;
}) {
  const online = useOnline();
  if (online) return null;
  return (
    <Animated.View entering={FadeIn.duration(200)} exiting={FadeOut.duration(200)} style={style}>
      <StateBanner bold="You're offline." text={text} />
    </Animated.View>
  );
}
