import { useMemo } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { StateCard } from '@/components/states';
import { VideosIcon } from '@/components/tab-bar';
import { pageTitle } from '@/constants/page-title';
import { useScale } from '@/constants/scale';

/**
 * VIDEOS — coming soon (Nikhil, 9 Nov 2026).
 *
 * The tab will hold short concept videos, one for each concept that keeps
 * coming back in JEE and NEET papers, and scrolling on from a video brings up
 * the real past-year questions on it. The videos and their questions are not
 * ready, so for now the tab says so, in the app's one empty-state card, with
 * the tab's own icon on the teacher's sky. The bar stays.
 */
export default function VideosScreen() {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);

  return (
    <SafeAreaView style={styles.safeArea} edges={['top']}>
      <View style={styles.header}>
        <Text style={styles.heading}>Videos</Text>
      </View>
      <View style={styles.body}>
        <StateCard
          glyph="search"
          icon={(size, color) => <VideosIcon color={color} size={size} />}
          title="Coming soon"
          line="Short videos on the concepts that keep coming back in JEE and NEET, each followed by the real questions from past papers."
        />
      </View>
    </SafeAreaView>
  );
}

function createStyles(scale: (n: number) => number, verticalScale: (n: number) => number) {
  return StyleSheet.create({
    safeArea: { flex: 1, backgroundColor: '#fff' },
    // The same header as Notes and Snaps (components/library-list.tsx).
    header: {
      paddingTop: verticalScale(12),
      paddingHorizontal: scale(24),
      minHeight: verticalScale(40),
      justifyContent: 'center',
    },
    heading: pageTitle(scale),
    body: {
      paddingTop: verticalScale(30),
      paddingHorizontal: scale(24),
    },
  });
}
