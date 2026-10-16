import { View } from 'react-native';

import { Skeleton, stagger } from '@/components/skeleton';
import { useScale } from '@/constants/scale';

/**
 * LOADING, IN THE SHAPE OF WHAT IS COMING: rows of a thumb and two lines, for
 * any list or page that used to show a lone spinner while it loaded. A spinner
 * belongs inside a button that is working, never on an empty page.
 */
export function ListSkeleton({ rows = 5, thumb = true }: { rows?: number; thumb?: boolean }) {
  const { scale, verticalScale } = useScale();
  return (
    <View accessibilityLabel="Loading" accessibilityRole="progressbar">
      {Array.from({ length: rows }).map((_, i) => (
        <View
          key={i}
          style={{ flexDirection: 'row', alignItems: 'center', gap: scale(14), marginBottom: verticalScale(18) }}>
          {thumb && (
            <Skeleton delay={stagger(i)} style={{ width: scale(54), height: scale(72), borderRadius: scale(10) }} />
          )}
          <View style={{ flex: 1, gap: verticalScale(10) }}>
            <Skeleton delay={stagger(i)} style={{ width: '72%', height: scale(16), borderRadius: scale(8) }} />
            <Skeleton delay={stagger(i)} style={{ width: '42%', height: scale(12), borderRadius: scale(6) }} />
          </View>
        </View>
      ))}
    </View>
  );
}

/** A reading page about to appear: a title line and paragraphs. */
export function PageSkeleton() {
  const { scale, verticalScale } = useScale();
  return (
    <View accessibilityLabel="Loading" accessibilityRole="progressbar" style={{ gap: verticalScale(12) }}>
      <Skeleton style={{ width: '30%', height: scale(12), borderRadius: scale(6) }} />
      <Skeleton style={{ width: '78%', height: scale(26), borderRadius: scale(8), marginBottom: verticalScale(10) }} />
      {[100, 96, 100, 88, 60].map((w, i) => (
        <Skeleton key={i} delay={stagger(i)} style={{ width: `${w}%`, height: scale(15), borderRadius: scale(7) }} />
      ))}
    </View>
  );
}
