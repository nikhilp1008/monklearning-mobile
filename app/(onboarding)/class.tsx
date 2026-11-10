import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { View } from 'react-native';

import { OnbScreen } from '@/components/onboarding/onb-screen';
import { SkyChoice } from '@/components/onboarding/sky-choice';
import { useDesignScale, type ExamKey, type YearKey } from '@/constants/onboarding';
import { getAnswers, saveAnswers } from '@/lib/onboarding-answers';
import { getProfile, saveProfile } from '@/lib/profile';

/**
 * The class, the last question of onboarding. The weekends-left card and the
 * tip line under the choices were removed (Nikhil, 9 Nov 2026).
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

export default function ClassScreen() {
  const { ds } = useDesignScale();
  const [exam, setExam] = useState<ExamKey>('jee');
  const [year, setYear] = useState<YearKey | null>(null);

  useEffect(() => {
    let live = true;
    Promise.all([getProfile(), getAnswers()]).then(([p, a]) => {
      if (!live) return;
      setExam(p.exam);
      if (a.classPicked) {
        setYear(p.year);
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
          // The last question (Nikhil, 9 Nov 2026): the goal, mock score,
          // strong/weak subjects, hard chapters and AI questions were removed,
          // so the class goes straight to the pass. `questionsDone` lets a
          // student who closes the app now resume at the pass.
          saveAnswers({ classPicked: true, questionsDone: true });
          router.push({ pathname: '/pass', params: { exam } });
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
    </OnbScreen>
  );
}
