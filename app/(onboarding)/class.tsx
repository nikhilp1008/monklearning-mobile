import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

import { Insight, OnbCard, OnbScreen } from '@/components/onboarding/onb-screen';
import { SkyChoice } from '@/components/onboarding/sky-choice';
import { ob, obFont, useDesignScale, type ExamKey, type YearKey } from '@/constants/onboarding';
import { examCountdown, type ExamCountdown } from '@/lib/exam-countdown';
import { ANSWERS_TIED_TO_EXAM, getAnswers, saveAnswers } from '@/lib/onboarding-answers';
import { getProfile, saveProfile } from '@/lib/profile';

/**
 * Screen 4: the class, and what the calendar leaves them.
 *
 * The weekends card turns the countdown into something a student plans with:
 * not "99 days" but fourteen Saturdays, the first of them this one.
 */
const ORDER: YearKey[] = ['class11', 'class12', 'dropper'];

function rowsFor(exam: ExamKey): Record<YearKey, { label: string; note?: string }> {
  const which = exam === 'neet' ? 'NEET' : 'JEE';
  return {
    class11: { label: 'Class 11' },
    class12: { label: 'Class 12', note: `Boards and ${which} in the same year` },
    dropper: { label: 'Done with Class 12', note: 'Taking a year to prepare' },
  };
}

function insightFor(year: YearKey, exam: ExamKey, soon: boolean): string {
  if (year === 'class11')
    return soon
      ? 'Your plan covers the Class 11 chapters that come up most, first.'
      : 'Two years is a real head start. Your plan builds the base first, one chapter at a time.';
  if (year === 'dropper') return 'A full year on one goal. Your plan starts with what needs fixing most.';
  return exam === 'neet'
    ? 'Boards come before NEET, so your plan eases off around them and picks up straight after.'
    : 'Boards begin a few weeks after Session 1, so your plan keeps school days light and gives weekends to JEE.';
}

/** One square a weekend, when there are few enough to count on sight. */
const MAX_SQUARES = 26;

function Weekends({ countdown }: { countdown: ExamCountdown }) {
  const { ds, fs, tracking } = useDesignScale();
  const n = countdown.weekends;
  const squares = n <= MAX_SQUARES ? n : 0;
  return (
    <OnbCard>
      <View style={{ flexDirection: 'row', alignItems: 'baseline', gap: ds(8) }}>
        <Text style={{ fontFamily: obFont.m500, fontSize: fs(28), letterSpacing: tracking(-0.03, 28), color: ob.ink }}>
          {n}
        </Text>
        <Text style={{ fontFamily: obFont.m500, fontSize: fs(15), color: ob.ink }}>
          weekends before {countdown.label}
        </Text>
      </View>
      {squares > 0 ? (
        <>
          <View style={{ marginTop: ds(12), flexDirection: 'row', flexWrap: 'wrap', gap: ds(4) }}>
            {Array.from({ length: squares }).map((_, i) => (
              <View
                key={i}
                style={{
                  width: ds(17),
                  height: ds(22),
                  borderRadius: ds(6),
                  backgroundColor: i === 0 ? ob.ink : 'transparent',
                  borderWidth: i === 0 ? 0 : 1.5,
                  borderColor: i >= squares - 4 ? ob.amber : 'rgba(28,26,22,0.16)',
                }}
              />
            ))}
          </View>
          <View style={{ marginTop: ds(8), flexDirection: 'row', justifyContent: 'space-between' }}>
            <Text style={{ fontFamily: obFont.r400, fontSize: fs(12), color: ob.ink55 }}>This weekend</Text>
            <Text style={{ fontFamily: obFont.r400, fontSize: fs(12), color: ob.ink55 }}>Final month</Text>
          </View>
        </>
      ) : null}
    </OnbCard>
  );
}

export default function ClassScreen() {
  const { ds } = useDesignScale();
  const [exam, setExam] = useState<ExamKey>('jee');
  const [countdown, setCountdown] = useState<ExamCountdown | null>(null);
  const [year, setYear] = useState<YearKey | null>(null);
  /** The class already saved, if this is a return visit. */
  const [saved, setSaved] = useState<YearKey | null>(null);
  /** Writing the exam next year: a Class 11 student has months, not two years. */
  const [soon, setSoon] = useState(false);

  useEffect(() => {
    let live = true;
    Promise.all([getProfile(), getAnswers()]).then(([p, a]) => {
      if (!live) return;
      setExam(p.exam);
      setCountdown(examCountdown(p.exam, a.examYear));
      setSoon(a.examYear === '2027');
      if (a.classPicked) {
        setYear(p.year);
        setSaved(p.year);
      }
    });
    return () => {
      live = false;
    };
  }, []);

  const rows = rowsFor(exam);

  return (
    <OnbScreen
      title="Which class are you in?"
      cta={{
        label: year ? 'Continue' : 'Pick your class',
        disabled: !year,
        onPress: () => {
          if (!year) return;
          saveProfile({ year });
          // Class 11 is asked a different mock question and shown different
          // chapters, so a changed class clears what was answered for the old one.
          saveAnswers({ classPicked: true, ...(saved && saved !== year ? ANSWERS_TIED_TO_EXAM : {}) });
          setSaved(year);
          router.push('/goal');
        },
      }}>
      <View style={{ gap: ds(10) }}>
        {ORDER.map((key) => (
          <SkyChoice
            key={key}
            shape="row"
            label={rows[key].label}
            note={rows[key].note}
            selected={year === key}
            onPress={() => setYear(key)}
          />
        ))}
      </View>
      {year ? (
        <Animated.View entering={FadeIn.duration(320)} style={{ marginTop: ds(18) }}>
          {countdown ? <Weekends countdown={countdown} /> : null}
          <Insight text={insightFor(year, exam, soon)} style={countdown ? undefined : { marginTop: 0 }} />
        </Animated.View>
      ) : null}
    </OnbScreen>
  );
}
