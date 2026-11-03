import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import Animated, { FadeIn } from 'react-native-reanimated';

import { Insight, OnbLabel, OnbScreen } from '@/components/onboarding/onb-screen';
import { ChoiceGrid, SkyChoice } from '@/components/onboarding/sky-choice';
import { useDesignScale, type ExamKey, type YearKey } from '@/constants/onboarding';
import { getAnswers, saveAnswers } from '@/lib/onboarding-answers';
import { getProfile } from '@/lib/profile';

/**
 * Question 2: their last mock score.
 *
 * Banded, because nobody remembers 117 exactly and a band is easier to admit.
 * Out of 300 for JEE and 720 for NEET. Class 11 rarely has a full mock yet, so they are asked for a recent
 * test as a percentage instead.
 *
 * "Haven't taken one" is a real answer, and opens one small follow-up in place:
 * how much of the syllabus they have covered.
 */
type Band = { id: string; label: string };
const NONE = 'none';

const BANDS: Record<'jee' | 'neet' | 'class11', Band[]> = {
  jee: [
    { id: '0-60', label: 'Under 60' },
    { id: '60-100', label: '60 to 100' },
    { id: '100-150', label: '100 to 150' },
    { id: '150-200', label: '150 to 200' },
    { id: '200+', label: '200 or more' },
    { id: NONE, label: 'Haven’t taken one' },
  ],
  neet: [
    { id: '0-300', label: 'Under 300' },
    { id: '300-450', label: '300 to 450' },
    { id: '450-550', label: '450 to 550' },
    { id: '550-650', label: '550 to 650' },
    { id: '650+', label: '650 or more' },
    { id: NONE, label: 'Haven’t taken one' },
  ],
  class11: [
    { id: 'p0-40', label: 'Under 40%' },
    { id: 'p40-60', label: '40 to 60%' },
    { id: 'p60-75', label: '60 to 75%' },
    { id: 'p75-90', label: '75 to 90%' },
    { id: 'p90+', label: 'Above 90%' },
    { id: NONE, label: 'No test yet' },
  ],
};

const SYLLABUS: Band[] = [
  { id: 'quarter', label: 'Under a quarter' },
  { id: 'half', label: 'About half' },
  { id: 'most', label: 'Most of it' },
  { id: 'all', label: 'All, revising' },
];

export default function MockScreen() {
  const { ds } = useDesignScale();
  const [exam, setExam] = useState<ExamKey>('jee');
  const [year, setYear] = useState<YearKey>('class12');
  const [band, setBand] = useState<string | null>(null);
  const [syllabus, setSyllabus] = useState<string | null>(null);

  useEffect(() => {
    let live = true;
    Promise.all([getProfile(), getAnswers()]).then(([p, a]) => {
      if (!live) return;
      setExam(p.exam);
      setYear(p.year);
      // Only a band from the list this student is shown: one out of 300 left
      // from before a switch to NEET would enable Continue with nothing lit.
      const list = BANDS[p.year === 'class11' ? 'class11' : p.exam];
      if (a.mockBand && list.some((b) => b.id === a.mockBand)) setBand(a.mockBand);
      if (a.syllabus) setSyllabus(a.syllabus);
    });
    return () => {
      live = false;
    };
  }, []);

  const isClass11 = year === 'class11';
  const scale = isClass11 ? 'class11' : exam;
  const bands = BANDS[scale];
  const none = band === NONE;

  const title = isClass11 ? 'What did you score in your last test?' : 'What did you score in your last mock test?';
  const sub = isClass11
    ? 'School or coaching, any recent one. Only you see this.'
    : `Out of ${scale === 'neet' ? 720 : 300}. Only you see this.`;

  const reply = !band
    ? null
    : none
      ? syllabus
        ? 'That’s fine. The starting-point paper at the end will show us where you are.'
        : null
      : isClass11
        ? 'Class 11 is the best time to fix a chapter, before Class 12 piles on top of it.'
        : 'Good to know. Fixing a few weak chapters is usually the fastest way up from here.';

  const ready = !!band && (!none || !!syllabus);

  return (
    <OnbScreen
      title={title}
      sub={sub}
      cta={{
        label: 'Continue',
        disabled: !ready,
        onPress: () => {
          saveAnswers({
            mockBand: band ?? undefined,
            syllabus: none ? (syllabus ?? undefined) : undefined,
          });
          router.push('/subjects');
        },
      }}
      onSkip={() => router.push('/subjects')}>
      <ChoiceGrid cols={2}>
        {bands.map((b) => (
          <SkyChoice
            key={b.id}
            shape="tile"
            height={ds(56)}
            labelSize={b.label.length > 14 ? 15 : 17}
            label={b.label}
            selected={band === b.id}
            onPress={() => setBand(b.id)}
          />
        ))}
      </ChoiceGrid>
      {none ? (
        <Animated.View entering={FadeIn.duration(320)}>
          <OnbLabel>Then, how much of the syllabus have you covered?</OnbLabel>
          <ChoiceGrid cols={2}>
            {SYLLABUS.map((b) => (
              <SkyChoice
                key={b.id}
                shape="tile"
                height={ds(52)}
                labelSize={16}
                label={b.label}
                selected={syllabus === b.id}
                onPress={() => setSyllabus(b.id)}
              />
            ))}
          </ChoiceGrid>
        </Animated.View>
      ) : null}
      {reply ? <Insight text={reply} /> : null}
    </OnbScreen>
  );
}
