// 05 Choose exam — pixel replica of design_handoff_onboarding_flow
// `design/Onboarding Final v2.dc.html`, frame data-screen-label="05 Choose exam".
// Every number below is a raw design px off that markup, passed through ds().
//
// The prototype's logic class still carries dead `row()` / `tick()` helpers that
// paint a dark ink fill and an amber checkmark. They are unreferenced by the
// template and contradict the README ("Text stays ink — deliberately no dark
// fill", "No checkmarks — the wash is the selection signal"), so the template's
// amber wash is what is built here.
import { LinearGradient } from 'expo-linear-gradient';
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useMemo, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';
import Animated, {
  Easing,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LeaderRow, ObButton } from '@/components/onboarding-kit';
import { EXAMS, examTotal, ob, obFont, useDesignScale, type ExamKey } from '@/constants/onboarding';
import { saveProfile } from '@/lib/profile';

// `wipe` — background-size 0% 100% -> 100% 100%, .55s cubic-bezier(.2,.75,.2,1)
// in the original CSS handoff. Reworked as an opacity fade below — see the
// comment on `progress` for why.
const WIPE_DURATION = 260;
const WIPE_EASING = Easing.out(Easing.quad);

type SelectRowProps = {
  /** Row title — 22px/700/-.02em. */
  name: string;
  /** Right-hand subject tag; screen 05 only, screen 06 has none. */
  tag?: string;
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
export function SelectRow({ name, tag, selected, playToken, onPress }: SelectRowProps) {
  const { ds, tracking } = useDesignScale();
  const styles = useMemo(() => createRowStyles(ds, tracking), [ds, tracking]);

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
        <Text style={styles.rowName}>{name}</Text>
        {tag ? (
          <Text style={[styles.rowTag, selected ? styles.rowTagSelected : styles.rowTagIdle]}>
            {tag}
          </Text>
        ) : null}
      </View>
    </Pressable>
  );
}

const EXAM_ORDER: ExamKey[] = ['jee', 'neet', 'both'];

export default function ExamScreen() {
  const { ds, tracking } = useDesignScale();
  const styles = useMemo(() => createStyles(ds, tracking), [ds, tracking]);

  const [exam, setExam] = useState<ExamKey>('jee');
  const [playToken, setPlayToken] = useState(0);

  const select = useCallback((key: ExamKey) => {
    setExam(key);
    setPlayToken((n) => n + 1);
  }, []);

  const active = EXAMS[exam];
  const total = examTotal(exam);

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>
          {/* `padding:52px 34px 0` */}
          <View style={styles.headlineBlock}>
            <Text style={styles.headline}>
              Select <Text style={styles.headlineBold}>your exam</Text>.
            </Text>
            <Text style={styles.sub}>Pick one. The syllabus below is what we teach for it.</Text>
          </View>

          {/* `padding:30px 26px 0; gap:10px` */}
          <View style={styles.rowStack}>
            {EXAM_ORDER.map((key) => (
              <SelectRow
                key={key}
                name={EXAMS[key].name}
                tag={EXAMS[key].tag}
                selected={exam === key}
                playToken={playToken}
                onPress={() => select(key)}
              />
            ))}
          </View>

          {/* `padding:34px 34px 0` — live syllabus summary */}
          <View style={styles.summary}>
            <View style={styles.summaryHeader}>
              <Text style={styles.summaryLabel}>
                WE TEACH ALL OF <Text style={styles.summaryLabelExam}>{active.upper}</Text>
              </Text>
              <View style={styles.summaryTotal}>
                <Text style={styles.summaryTotalValue}>{total}</Text>
                <Text style={styles.summaryTotalUnit}>chapters</Text>
              </View>
            </View>

            {active.subjects.map((subject) => (
              <LeaderRow
                key={subject.name}
                label={subject.name}
                value={String(subject.count)}
                labelSize={16}
                valueSize={19}
                style={styles.subjectRow}
              />
            ))}

            <Text style={styles.footnote}>{active.sample}</Text>
          </View>
        </ScrollView>

        {/* `margin-top:auto; padding:0 34px 34px` */}
        <View style={styles.footer}>
          <ObButton
            label={`Continue with ${active.label}`}
            withArrow
            onPress={() => {
              // Persist the entitlement the student chose — the Lessons exam
              // pill and Personal information read it from the same store.
              saveProfile({ exam });
              router.push({ pathname: '/class', params: { exam } });
            }}
          />
        </View>
      </SafeAreaView>
    </View>
  );
}

function createRowStyles(
  ds: (size: number) => number,
  tracking: (em: number, fontSize: number) => number
) {
  return StyleSheet.create({
    // `border-radius:20px; 1.5px solid; background:#FFFFFF`
    row: {
      borderRadius: ds(20),
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
      paddingVertical: ds(16),
      paddingHorizontal: ds(22),
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    rowName: {
      fontFamily: obFont.b700,
      fontSize: ds(22),
      letterSpacing: tracking(-0.02, 22),
      color: ob.ink,
    },
    rowTag: {
      fontSize: ds(15),
      letterSpacing: tracking(0.08, 15),
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

function createStyles(
  ds: (size: number) => number,
  tracking: (em: number, fontSize: number) => number
) {
  return StyleSheet.create({
    screen: {
      flex: 1,
      backgroundColor: ob.surface,
    },
    safeArea: {
      flex: 1,
    },
    // The frame is 932pt tall; on a short phone the stack + summary would
    // clip, so the middle scrolls and the button stays pinned below it.
    scrollContent: {
      flexGrow: 1,
    },
    headlineBlock: {
      paddingTop: ds(52),
      paddingHorizontal: ds(34),
    },
    headline: {
      fontFamily: obFont.sb600,
      fontSize: ds(44),
      lineHeight: ds(44 * 1.02),
      letterSpacing: tracking(-0.035, 44),
      color: ob.ink,
    },
    headlineBold: {
      fontFamily: obFont.xb800,
    },
    sub: {
      marginTop: ds(14),
      fontFamily: obFont.r400,
      fontSize: ds(17),
      lineHeight: ds(17 * 1.45),
      color: ob.ink80,
    },
    rowStack: {
      paddingTop: ds(30),
      paddingHorizontal: ds(26),
      gap: ds(10),
    },
    summary: {
      paddingTop: ds(34),
      paddingHorizontal: ds(34),
    },
    summaryHeader: {
      flexDirection: 'row',
      alignItems: 'baseline',
      justifyContent: 'space-between',
      paddingBottom: ds(12),
      borderBottomWidth: 1,
      borderBottomColor: ob.hairline16,
    },
    summaryLabel: {
      fontFamily: obFont.b700,
      fontSize: ds(13),
      letterSpacing: tracking(0.1, 13),
      color: ob.ink55,
    },
    summaryLabelExam: {
      fontFamily: obFont.b700,
      fontSize: ds(13),
      letterSpacing: tracking(0.1, 13),
      color: ob.ink,
    },
    summaryTotal: {
      flexDirection: 'row',
      alignItems: 'baseline',
      gap: ds(5),
    },
    summaryTotalValue: {
      fontFamily: obFont.xb800,
      fontSize: ds(26),
      letterSpacing: tracking(-0.03, 26),
      color: ob.ink,
    },
    summaryTotalUnit: {
      fontFamily: obFont.r400,
      fontSize: ds(14),
      color: ob.ink55,
    },
    subjectRow: {
      paddingVertical: ds(12),
      borderBottomWidth: 1,
      borderBottomColor: ob.hairline10,
    },
    footnote: {
      marginTop: ds(14),
      fontFamily: obFont.r400,
      fontSize: ds(15),
      lineHeight: ds(15 * 1.45),
      color: ob.ink55,
    },
    footer: {
      paddingHorizontal: ds(34),
      paddingBottom: ds(34),
    },
  });
}
