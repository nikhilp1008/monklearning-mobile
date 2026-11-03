import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import { View } from 'react-native';

import { firstName, Insight, OnbScreen } from '@/components/onboarding/onb-screen';
import { SkyChoice } from '@/components/onboarding/sky-choice';
import { useDesignScale, type ExamKey } from '@/constants/onboarding';
import { getAnswers, saveAnswers } from '@/lib/onboarding-answers';
import { getProfile } from '@/lib/profile';

/**
 * Question 1: what they are really aiming for.
 *
 * The options follow the exam: colleges for JEE, medical seats for NEET.
 */
type Goal = { id: string; label: string; note: string; reply: string };

const GOALS: Record<ExamKey, Goal[]> = {
  jee: [
    { id: 'iit', label: 'An IIT', note: 'Main first, then Advanced', reply: 'An IIT it is. We’ll prepare you for Main in a way that sets up Advanced too.' },
    { id: 'top-nit', label: 'A top NIT', note: 'The branch you want, at a top campus', reply: 'A top NIT it is. We’ll aim for the rank that gets you the branch, not just the seat.' },
    { id: 'nit-iiit', label: 'Any NIT or IIIT', note: 'Get in, then grow', reply: 'Good. We’ll get you a seat first, then keep pushing the rank up.' },
    { id: 'cutoff', label: 'Clearing the cutoff first', note: 'One step at a time', reply: 'A clear first step. We’ll make the cutoff safe, then build from there.' },
  ],
  neet: [
    { id: 'aiims', label: 'AIIMS or a top government college', note: 'The most competitive seats', reply: 'A top seat it is. We’ll plan for the score it takes, chapter by chapter.' },
    { id: 'gov-mbbs', label: 'Any government MBBS seat', note: 'Lower fees, strong colleges', reply: 'A government seat it is. We’ll plan for the score that gets you there, not just the cutoff.' },
    { id: 'mbbs', label: 'Any MBBS seat', note: 'Government or private', reply: 'An MBBS seat it is. We’ll make sure the basics are solid, then raise the score.' },
    { id: 'cutoff', label: 'Clearing the cutoff first', note: 'One step at a time', reply: 'A clear first step. We’ll make the cutoff safe, then build from there.' },
  ],
};

export default function GoalScreen() {
  const { ds } = useDesignScale();
  const [exam, setExam] = useState<ExamKey>('jee');
  const [name, setName] = useState('');
  const [goal, setGoal] = useState<string | null>(null);

  useEffect(() => {
    let live = true;
    Promise.all([getProfile(), getAnswers()]).then(([p, a]) => {
      if (!live) return;
      setExam(p.exam);
      setName(firstName(p.name));
      if (a.goal && GOALS[p.exam].some((g) => g.id === a.goal)) setGoal(a.goal);
    });
    return () => {
      live = false;
    };
  }, []);

  const options = GOALS[exam];
  const picked = options.find((g) => g.id === goal);
  const title = `What are you really aiming for${name ? `, ${name}` : ''}?`;

  return (
    <OnbScreen
      title={title}
      sub="Say it the way you’d say it to yourself."
      cta={{
        label: 'Continue',
        disabled: !goal,
        onPress: () => {
          saveAnswers({ goal: goal ?? undefined });
          router.push('/mock');
        },
      }}
      onSkip={() => router.push('/mock')}>
      <View style={{ gap: ds(10) }}>
        {options.map((g) => (
          <SkyChoice
            key={g.id}
            shape="row"
            label={g.label}
            note={g.note}
            selected={goal === g.id}
            onPress={() => setGoal(g.id)}
          />
        ))}
      </View>
      {picked ? <Insight text={picked.reply} /> : null}
    </OnbScreen>
  );
}
