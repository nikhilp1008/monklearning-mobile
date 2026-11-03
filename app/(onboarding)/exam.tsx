import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Animated, { FadeIn } from 'react-native-reanimated';

import { OnbCard, OnbLabel, OnbScreen } from '@/components/onboarding/onb-screen';
import { ChoiceGrid, SkyChoice } from '@/components/onboarding/sky-choice';
import { EXAMS, ob, obFont, useDesignScale, type ExamKey } from '@/constants/onboarding';
import { examCountdown } from '@/lib/exam-countdown';
import { ANSWERS_TIED_TO_EXAM, getAnswers, saveAnswers, type ExamYear } from '@/lib/onboarding-answers';
import { getProfile, saveProfile } from '@/lib/profile';

/**
 * Screen 3: which exam, which year, and how many days that leaves.
 *
 * One screen rather than two. The year only means something next to the exam,
 * and the countdown is the payoff for answering both: the moment a student
 * sees "99 days" with their exam's name on it, the questions that follow stop
 * feeling like a form.
 */
const EXAM_ORDER: ExamKey[] = ['jee', 'neet'];
const YEARS: { id: ExamYear; label: string }[] = [
  { id: '2027', label: '2027' },
  { id: '2028', label: '2028' },
  { id: 'unsure', label: 'Not sure' },
];

export default function ExamScreen() {
  const { ds, fs, tracking } = useDesignScale();
  const [exam, setExam] = useState<ExamKey | null>(null);
  const [year, setYear] = useState<ExamYear | null>(null);
  /** The exam already saved, if this is a return visit. */
  const [saved, setSaved] = useState<ExamKey | null>(null);

  // Coming back to this screen keeps the answers already given. Exam and year
  // are saved together, so a saved year means the profile's exam is a real
  // pick and not its default.
  useEffect(() => {
    let live = true;
    Promise.all([getProfile(), getAnswers()]).then(([p, a]) => {
      if (!live || !a.examYear) return;
      setYear(a.examYear);
      setExam(p.exam);
      setSaved(p.exam);
    });
    return () => {
      live = false;
    };
  }, []);

  const countdown = exam ? examCountdown(exam, year ?? undefined) : null;
  const ready = !!exam && !!year;

  return (
    <OnbScreen
      title="Select your exam"
      sub="Pick one, and the year you’re writing it."
      cta={{
        label: ready ? 'Continue' : exam ? 'Pick the year' : 'Pick your exam',
        disabled: !ready,
        onPress: () => {
          if (!exam || !year) return;
          saveProfile({ exam });
          // A different exam makes the later answers mean something else.
          saveAnswers({ examYear: year, ...(saved && saved !== exam ? ANSWERS_TIED_TO_EXAM : {}) });
          setSaved(exam);
          router.push('/class');
        },
      }}>
      <View style={{ gap: ds(10) }}>
        {EXAM_ORDER.map((key) => (
          <SkyChoice
            key={key}
            shape="row"
            label={EXAMS[key].name}
            tag={EXAMS[key].tag}
            selected={exam === key}
            onPress={() => setExam(key)}
          />
        ))}
      </View>

      <OnbLabel>Year</OnbLabel>
      <ChoiceGrid cols={3}>
        {YEARS.map((y) => (
          <SkyChoice
            key={y.id}
            shape="tile"
            height={ds(52)}
            label={y.label}
            selected={year === y.id}
            onPress={() => setYear(y.id)}
          />
        ))}
      </ChoiceGrid>

      {countdown ? (
        <Animated.View key={countdown.label} entering={FadeIn.duration(320)} style={{ marginTop: ds(18) }}>
          <OnbCard style={{ flexDirection: 'row', alignItems: 'center', gap: ds(16) }}>
            <Text
              style={{
                fontFamily: obFont.m500,
                fontSize: fs(44),
                letterSpacing: tracking(-0.035, 44),
                color: ob.ink,
                fontVariant: ['tabular-nums'],
              }}>
              {countdown.days}
            </Text>
            <View style={{ flex: 1 }}>
              <Text style={{ fontFamily: obFont.m500, fontSize: fs(15), color: ob.ink }}>
                days to {countdown.label}
              </Text>
              <Text
                style={{
                  marginTop: ds(2),
                  fontFamily: obFont.r400,
                  fontSize: fs(13),
                  lineHeight: fs(18),
                  color: ob.ink55,
                }}>
                {countdown.note}
              </Text>
            </View>
          </OnbCard>
        </Animated.View>
      ) : null}
    </OnbScreen>
  );
}
