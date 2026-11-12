import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { View } from 'react-native';

import { OnbLabel, OnbScreen } from '@/components/onboarding/onb-screen';
import { ChoiceGrid, SkyChoice } from '@/components/onboarding/sky-choice';
import { EXAMS, useDesignScale, type ExamKey } from '@/constants/onboarding';
import { getAnswers, saveAnswers, type ExamYear } from '@/lib/onboarding-answers';
import { getProfile, saveProfile } from '@/lib/profile';

/**
 * Which exam, and which year. One screen rather than two: the year only means
 * something next to the exam. The days-left card that used to sit under it
 * was removed (Nikhil, 9 Nov 2026).
 */
const EXAM_ORDER: ExamKey[] = ['jee', 'neet'];
const YEARS: { id: ExamYear; label: string }[] = [
  { id: '2027', label: '2027' },
  { id: '2028', label: '2028' },
  { id: 'unsure', label: 'Not sure' },
];

export default function ExamScreen() {
  const { ds } = useDesignScale();
  const [exam, setExam] = useState<ExamKey | null>(null);
  const [year, setYear] = useState<ExamYear | null>(null);

  // Coming back to this screen keeps the answers already given. Exam and year
  // are saved together, so a saved year means the profile's exam is a real
  // pick and not its default.
  useEffect(() => {
    let live = true;
    Promise.all([getProfile(), getAnswers()]).then(([p, a]) => {
      if (!live || !a.examYear) return;
      setYear(a.examYear);
      setExam(p.exam);
    });
    return () => {
      live = false;
    };
  }, []);

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
          saveAnswers({ examYear: year });
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

    </OnbScreen>
  );
}
