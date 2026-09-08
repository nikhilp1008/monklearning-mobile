import { Image } from 'expo-image';
import { useMemo, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import { colors } from '@/constants/brand';
import { useScale } from '@/constants/scale';

/**
 * The figure a question cannot be answered without.
 *
 * `/practice/next` has always returned these — `routers/practice.py` json-parses
 * the `diagram` column into `[{url, form, …}]` before it answers — and mobile
 * dropped the field entirely, so a circuit or a ray diagram arrived as its
 * caption alone. Measured against the bank: 54 servable rows carry one, all
 * `form: "cdn_crop"`, all public R2 jpgs. The pipeline withholds any figure it
 * is not confident renders on its own, so anything reaching here is meant to
 * be shown.
 *
 * The remote file's dimensions are unknown until it loads, and a fixed height
 * would either crop a tall circuit or leave a band of white under a wide graph.
 * `onLoad` reports the real size, so the box takes the image's own aspect ratio
 * and the layout settles once.
 */
export function QuestionDiagram({ url }: { url: string }) {
  const { scale, verticalScale } = useScale();
  const styles = useMemo(() => createStyles(scale, verticalScale), [scale, verticalScale]);
  const [ratio, setRatio] = useState(16 / 9);
  const [failed, setFailed] = useState(false);

  // A figure that will not load must not leave a grey box sitting in the middle
  // of the question — the stem still reads, and an empty frame only suggests
  // something is still coming.
  if (failed) return null;

  return (
    <View style={styles.frame}>
      <Image
        source={{ uri: url }}
        style={[styles.image, { aspectRatio: ratio }]}
        contentFit="contain"
        transition={120}
        onLoad={({ source }) => {
          if (source?.width && source?.height) setRatio(source.width / source.height);
        }}
        onError={() => setFailed(true)}
      />
    </View>
  );
}

function createStyles(scale: (size: number) => number, verticalScale: (size: number) => number) {
  return StyleSheet.create({
    frame: {
      marginTop: verticalScale(12),
      borderRadius: scale(10),
      borderWidth: 1,
      borderColor: colors.hairline,
      backgroundColor: '#fff',
      overflow: 'hidden',
    },
    image: {
      width: '100%',
    },
  });
}
