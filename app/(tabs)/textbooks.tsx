import { useMemo } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { TextbooksPage } from '@/components/textbook/textbooks-page';
import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

/**
 * Textbooks — a tab of its own, in the slot Lessons used to hold.
 *
 * Lessons is on hold pending a rethink of how lessons are built, and a
 * catalogue that tags most of its rows SOON is worse than no tab at all. The
 * screen itself is kept (`app/(tabs)/lessons.tsx`, still routable, just not
 * reachable from the bar) so the work is there to come back to.
 *
 * The subject grid is the same `TextbooksPage` that used to be a segment
 * inside Library. It is only mounted here now — two doors into one room would
 * have read as the duplication it was.
 */
export default function TextbooksScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  return (
    <View style={styles.screen}>
      <SafeAreaView style={styles.safeArea} edges={['top']}>
        <View style={styles.headerFixed}>
          <Text style={styles.heading}>Textbooks</Text>
        </View>
        <ScrollView contentContainerStyle={styles.content} showsVerticalScrollIndicator={false}>
          <TextbooksPage scale={scale} verticalScale={verticalScale} />
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: '#fff',
    },
    safeArea: {
      flex: 1,
    },
    headerFixed: {
      paddingTop: verticalScale(12),
      paddingHorizontal: scale(20),
    },
    content: {
      // The grid brings its own horizontal padding; only the tab bar's
      // clearance is owed here.
      paddingBottom: verticalScale(130),
    },
    heading: {
      fontFamily: 'AnekLatin_500Medium',
      fontSize: scale(24),
      letterSpacing: scale(-0.6),
      color: colors.ink,
    },
  });
}
