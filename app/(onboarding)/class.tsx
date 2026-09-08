// 06 Pick year — pixel replica of design_handoff_onboarding_flow
// `design/Onboarding Final v2.dc.html`, frame data-screen-label="06 Pick year".
// Every number below is a raw design px off that markup, passed through ds().
//
// The option rows are the exact same component screen 05 uses — imported from
// `./exam` rather than re-declared, which is what keeps the two selected-row
// treatments (amber border + wiped wash, ink text, no checkmark) identical.
import { router, useLocalSearchParams } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useCallback, useMemo, useState } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { LeaderRow, ObButton, ObHeader } from '@/components/onboarding-kit';
import {
  EXAMS,
  YEARS,
  YEAR_NOTES,
  examTotal,
  ob,
  obFont,
  useDesignScale,
  type ExamKey,
  type YearKey,
} from '@/constants/onboarding';
import { saveProfile } from '@/lib/profile';

import { SelectRow } from '@/components/select-row';

const YEAR_ORDER: YearKey[] = ['class11', 'class12', 'dropper'];

function resolveExam(param: string | string[] | undefined): ExamKey {
  const value = Array.isArray(param) ? param[0] : param;
  return value && value in EXAMS ? (value as ExamKey) : 'jee';
}

export default function ClassScreen() {
  const { ds, fs, tracking } = useDesignScale();
  const styles = useMemo(() => createStyles(ds, fs, tracking), [ds, fs, tracking]);

  const params = useLocalSearchParams<{ exam?: string }>();
  const exam = resolveExam(params.exam);

  // Nothing preselected, for the same reason as the exam rows: a highlighted
  // row reads as an answer the student already gave.
  const [year, setYear] = useState<YearKey | null>(null);
  const [playToken, setPlayToken] = useState(0);

  const select = useCallback((key: YearKey) => {
    setYear(key);
    setPlayToken((n) => n + 1);
  }, []);

  return (
    <View style={styles.screen}>
      <StatusBar style="dark" />
      <SafeAreaView style={styles.safeArea} edges={['top', 'bottom']}>
        <ObHeader title="Select your year" />
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.scrollContent}>
          <Text style={styles.sub}>Same syllabus. Only the pace changes.</Text>

          {/* `padding:32px 26px 0; gap:10px` */}
          <View style={styles.rowStack}>
            {YEAR_ORDER.map((key) => (
              <SelectRow
                key={key}
                name={YEARS[key]}
                note={YEAR_NOTES[key]}
                selected={year === key}
                playToken={playToken}
                onPress={() => select(key)}
              />
            ))}
          </View>

          {/* `padding:34px 34px 0` — follows both selections */}
          <View style={styles.summary}>
            <View style={styles.summaryHeader}>
              <Text style={styles.summaryLabel}>YOUR CLASSROOM</Text>
            </View>

            <LeaderRow
              label="Exam"
              value={EXAMS[exam].label}
              labelSize={16}
              valueSize={17}
              style={styles.summaryRow}
            />
            <LeaderRow
              label="Year"
              value={year ? YEARS[year] : '—'}
              labelSize={16}
              valueSize={17}
              style={styles.summaryRow}
            />
            <LeaderRow
              label="Chapters taught"
              value={String(examTotal(exam))}
              labelSize={16}
              valueSize={17}
              style={styles.summaryRow}
            />
          </View>
        </ScrollView>

        {/* `margin-top:auto; padding:0 34px 34px` */}
        <View style={styles.footer}>
          <ObButton
            label={year ? 'Continue' : 'Pick your year'}
            disabled={!year}
            withArrow
            onPress={async () => {
              if (!year) return;
              // Saved locally only. The write that reaches the server -- and
              // with it the `display_name` the gate reads as "onboarded" --
              // now happens on the last screen, because three more steps
              // follow this one and a reload in between would otherwise drop
              // the student on Home with no pass.
              await saveProfile({ year });
              router.push({ pathname: '/pass', params: { exam: exam ?? 'jee' } });
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
      // Clears the pinned footer; the syllabus block was running under it.
      paddingBottom: ds(110),
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
    // 14pt under the title — `padding:14px 30px 0` in the handoff. This
    // briefly carried a paddingTop AND a marginTop of 14 each, which is the
    // gap that read as too wide.
    sub: {
      paddingHorizontal: ds(30),
      marginTop: ds(14),
      fontFamily: obFont.r400,
      fontSize: fs(16),
      lineHeight: fs(23),
      color: ob.ink80,
    },
    rowStack: {
      paddingTop: ds(32),
      paddingHorizontal: ds(26),
      gap: ds(10),
    },
    summary: {
      paddingTop: ds(34),
      paddingHorizontal: ds(34),
    },
    summaryHeader: {
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
    summaryRow: {
      paddingVertical: ds(12),
      borderBottomWidth: 1,
      borderBottomColor: ob.hairline10,
    },
    footer: {
      paddingHorizontal: ds(30),
      paddingBottom: ds(16),
    },
    saveError: {
      marginBottom: ds(12),
      fontFamily: obFont.r400,
      fontSize: fs(15),
      lineHeight: ds(15 * 1.4),
      color: '#DD4433',
    },
  });
}
