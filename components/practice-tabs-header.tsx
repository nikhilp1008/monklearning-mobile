import { useMemo, type ReactNode } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

type PracticeTabsHeaderProps = {
  /** The focus-mode control, rendered on the right of the title row. */
  action?: ReactNode;
};

/**
 * Practice's header: the title, and the focus-mode control beside it.
 *
 * The Unlimited / Mock test tabs used to sit under the title. They were the
 * only route to a screen that is locked anyway, and they pushed the two
 * controls a student actually uses -- subject and focus -- into a single
 * cramped row below. Title and focus now share the top line, which is the
 * shape Lessons already uses, and the subject selector gets the next line to
 * itself at full width.
 */
export function PracticeTabsHeader({ action }: PracticeTabsHeaderProps) {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  return (
    <View style={styles.headerRow}>
      <Text style={styles.heading}>Practice</Text>
      {action}
    </View>
  );
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    headerRow: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: scale(12),
      minHeight: verticalScale(38),
    },
    heading: {
      fontFamily: 'AnekLatin_500Medium',
      fontSize: scale(24),
      letterSpacing: scale(-0.6),
      color: colors.ink,
    },
  });
}
