// 05 Choose exam — pixel replica of design_handoff_onboarding_flow
// `design/Onboarding Final v2.dc.html`, frame data-screen-label="05 Choose exam".
// Every number below is a raw design px off that markup, passed through ds().
//
// The prototype's logic class still carries dead `row()` / `tick()` helpers that
// paint a dark ink fill and an amber checkmark. They are unreferenced by the
// template and contradict the README ("Text stays ink — deliberately no dark
// fill", "No checkmarks — the wash is the selection signal"), so the template's
// amber wash is what is built here — now in components/select-row.tsx, shared
// with the year and pass screens.
import { router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LeaderRow, ObBack, ObButton } from '@/components/onboarding-kit';
import { SelectRow } from '@/components/select-row';
import { EXAMS, examTotal, ob, obFont, useDesignScale, type ExamKey } from '@/constants/onboarding';
import { saveProfile } from '@/lib/profile';

const EXAM_ORDER: ExamKey[] = ['jee', 'neet', 'both'];

export default function ExamScreen() {
  const { ds, fs, tracking } = useDesignScale();
  const styles = useMemo(() => createStyles(ds, fs, tracking), [ds, fs, tracking]);

  // Nothing preselected. A highlighted row reads as an answer already given,
  // and the exam decides which subjects exist for the rest of the account —
  // it is the one thing in onboarding that must be a deliberate choice.
  const [exam, setExam] = useState<ExamKey | null>(null);
  const [playToken, setPlayToken] = useState(0);

  const select = useCallback((key: ExamKey) => {
    setExam(key);
    setPlayToken((n) => n + 1);
  }, []);

  const active = exam ? EXAMS[exam] : null;
  const total = exam ? examTotal(exam) : 0;

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <ObBack />
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

          {/* `padding:34px 34px 0` — live syllabus summary.
              Hidden until a row is picked: the line above promises "the
              syllabus below is what we teach for it", and there is no "it"
              yet. Revealing it on the tap is also what makes the choice feel
              answered. */}
          {active && (
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
          )}
        </ScrollView>

        {/* `margin-top:auto; padding:0 34px 34px` */}
        <View style={styles.footer}>
          <ObButton
            label={active ? `Continue with ${active.label}` : 'Pick your exam'}
            withArrow
            disabled={!exam}
            onPress={() => {
              if (!exam) return;
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

function createStyles(
  ds: (size: number) => number,
  fs: (size: number) => number,
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
      fontSize: fs(44),
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
      fontSize: fs(17),
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
      fontSize: fs(13),
      letterSpacing: tracking(0.1, 13),
      color: ob.ink55,
    },
    summaryLabelExam: {
      fontFamily: obFont.b700,
      fontSize: fs(13),
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
      fontSize: fs(26),
      letterSpacing: tracking(-0.03, 26),
      color: ob.ink,
    },
    summaryTotalUnit: {
      fontFamily: obFont.r400,
      fontSize: fs(14),
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
      fontSize: fs(15),
      lineHeight: ds(15 * 1.45),
      color: ob.ink55,
    },
    footer: {
      paddingHorizontal: ds(34),
      paddingBottom: ds(34),
    },
  });
}
