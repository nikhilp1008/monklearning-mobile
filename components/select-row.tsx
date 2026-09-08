import { LinearGradient } from 'expo-linear-gradient';
import { useMemo } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';

import { ob, obFont, useDesignScale } from '@/constants/onboarding';

/**
 * The option row every choice in onboarding is made with: exam, year, and now
 * the pass.
 *
 * It used to live inside exam.tsx with class.tsx importing it from there --
 * a screen importing a component out of a sibling screen. The pass screen made
 * that a three-way dependency, so it moved here.
 *
 * The selection mark is this app's amber wash, not the handoff's gold
 * gradient. Two reasons: the wash is already the answer everywhere else a
 * choice is made, and it is a wipe rather than a static fill, so selecting
 * reads as something happening rather than something being coloured in.
 */

// `wipe` — background-size 0% 100% -> 100% 100%, .55s cubic-bezier(.2,.75,.2,1)
// in the original CSS handoff. Reworked as an opacity fade below — see the
// comment on `progress` for why.
const WIPE_DURATION = 260;
const WIPE_EASING = Easing.out(Easing.quad);

type SelectRowProps = {
  /** Row title — 22px/700/-.02em. */
  name: string;
  /** Right-hand subject tag; the exam screen only. */
  tag?: string;
  /** A quiet second line under the title — the year and pass screens. */
  note?: string;
  /** Right-hand value, set solid rather than as a tag — the pass price. */
  trailing?: string;
  selected: boolean;
  /**
   * Bumped by the parent on *every* tap. The wash has to re-run its wipe even
   * when the already-selected row is tapped again, and `selected` alone does
   * not change in that case — this token does.
   */
  playToken: number;
  onPress: () => void;
};

/**
 * The shared option row for screens 05 and 06. Screen 06 (`class.tsx`) imports
 * it from here so the two screens cannot drift apart.
 *
 * The padding lives on an inner view rather than on the pressable itself: the
 * wash has to cover the row's full inner area, and an absolutely positioned
 * child is inset by its parent's padding under Yoga. Geometry is identical.
 */
export function SelectRow({
  name,
  tag,
  note,
  trailing,
  selected,
  playToken,
  onPress,
}: SelectRowProps) {
  const { ds, fs, tracking } = useDesignScale();
  const styles = useMemo(() => createRowStyles(ds, fs, tracking), [ds, fs, tracking]);

  // A width-based wipe (measured pixel width, or a "NN%" string) depends on
  // Reanimated's UI-thread width mutation propagating into LinearGradient's
  // own layout every frame — on real devices this has shown up as a
  // hard-edged jump partway through instead of a smooth sweep, twice, across
  // two different fix attempts (see components/wash-select-row.tsx, this
  // screen's main-app equivalent, for the same history). Opacity has no
  // layout dependency at all: the gradient is always full-size, and only its
  // visibility animates, so it cannot produce that class of artifact.
  // The playToken dep (unused in the body) is what replays the fade on a
  // re-tap of an already-selected row: it forces this derivation to
  // re-evaluate even though `selected` alone wouldn't have changed.
  const progress = useDerivedValue(() => {
    return selected ? withTiming(1, { duration: WIPE_DURATION, easing: WIPE_EASING }) : withTiming(0, { duration: 150 });
  }, [selected, playToken]);

  const washStyle = useAnimatedStyle(() => ({
    opacity: progress.value,
  }));

  return (
    <Pressable onPress={onPress} style={[styles.row, selected ? styles.rowSelected : styles.rowIdle]}>
      <View style={StyleSheet.absoluteFill} pointerEvents="none">
        <Animated.View style={[styles.washClip, washStyle]}>
          <LinearGradient
            colors={[...ob.wash]}
            locations={[...ob.washLocations]}
            start={{ x: 0, y: 0.5 }}
            end={{ x: 1, y: 0.5 }}
            style={styles.washFill}
          />
        </Animated.View>
      </View>

      <View style={styles.rowInner}>
        <View style={styles.rowText}>
          <Text style={styles.rowName}>{name}</Text>
          {note ? (
            <Text style={[styles.rowNote, selected && styles.rowNoteSelected]}>{note}</Text>
          ) : null}
        </View>
        {tag ? (
          <Text style={[styles.rowTag, selected ? styles.rowTagSelected : styles.rowTagIdle]}>
            {tag}
          </Text>
        ) : null}
        {trailing ? <Text style={styles.rowTrailing}>{trailing}</Text> : null}
      </View>
    </Pressable>
  );
}

function createRowStyles(
  ds: (size: number) => number,
  fs: (size: number) => number,
  tracking: (em: number, fontSize: number) => number
) {
  return StyleSheet.create({
    // `border-radius:20px; 1.5px solid; background:#FFFFFF`
    row: {
      borderRadius: ds(14),
      borderWidth: 1.5,
      backgroundColor: ob.surface,
      overflow: 'hidden',
    },
    rowIdle: {
      borderColor: ob.hairline14,
    },
    rowSelected: {
      borderColor: ob.amber,
    },
    washClip: {
      height: '100%',
    },
    washFill: {
      flex: 1,
    },
    // `padding:16px 22px; display:flex; align-items:center; justify-content:space-between`
    rowInner: {
      paddingVertical: ds(20),
      paddingHorizontal: ds(20),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    rowText: {
      flex: 1,
      minWidth: 0,
      gap: ds(2),
    },
    rowNote: {
      fontFamily: obFont.r400,
      fontSize: fs(13),
      color: ob.ink55,
    },
    // On the wash, the note has to darken or it sinks into the amber.
    rowNoteSelected: {
      color: ob.amberDark,
    },
    rowTrailing: {
      fontFamily: obFont.m500,
      fontSize: fs(23),
      letterSpacing: tracking(-0.03, 23),
      color: ob.ink,
    },
    rowName: {
      fontFamily: obFont.m500,
      fontSize: fs(19),
      letterSpacing: tracking(-0.02, 19),
      color: ob.ink,
    },
    rowTag: {
      fontSize: fs(12),
      letterSpacing: tracking(0.1, 12),
    },
    rowTagIdle: {
      fontFamily: obFont.sb600,
      color: ob.ink40,
    },
    rowTagSelected: {
      fontFamily: obFont.b700,
      color: ob.amberDark,
    },
  });
}

