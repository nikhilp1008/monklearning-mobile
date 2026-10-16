import { router } from 'expo-router';
import { useEffect, useState } from 'react';
import Animated, { FadeIn } from 'react-native-reanimated';

import { Insight, OnbLabel, OnbScreen } from '@/components/onboarding/onb-screen';
import { ChipWrap, ChoiceGrid, SkyChoice } from '@/components/onboarding/sky-choice';
import { useDesignScale } from '@/constants/onboarding';
import { getAnswers, saveAnswers, type AiUse } from '@/lib/onboarding-answers';
import { getProfile } from '@/lib/profile';
import { supabase } from '@/lib/supabase';

/**
 * Question 5: have they used AI for studying, and how did it feel.
 *
 * Last of the five on purpose: whatever disappointed them about a chatbot is
 * the difference we are about to ask them to sign up for. "Never" skips the
 * follow-up; there is nothing to feel about a tool you have not tried.
 */
const USE: { id: AiUse; label: string }[] = [
  { id: 'often', label: 'Often' },
  { id: 'sometimes', label: 'Sometimes' },
  { id: 'once', label: 'Tried it once' },
  { id: 'never', label: 'Never' },
];

const FEELINGS = [
  'Fast answers, but I didn’t learn',
  'Good for clearing doubts',
  'Sometimes just wrong',
  'Didn’t follow my syllabus',
  'Too much text, no steps',
];

/**
 * The last question. Next is "Create your account", unless there is already an
 * account: a student who came in through "Sign in" with a new email is
 * verified before the questions, and asking for a second code (or letting
 * them type a different address) would be wrong. They go to the pass.
 */
async function afterQuestions() {
  await saveAnswers({ questionsDone: true });
  const { data } = await supabase.auth.getSession().catch(() => ({ data: { session: null } }));
  const user = data.session?.user;
  if (user && !user.is_anonymous) {
    const { exam } = await getProfile();
    router.push({ pathname: '/pass', params: { exam } });
  } else {
    router.push('/email');
  }
}

export default function AiScreen() {
  const { ds } = useDesignScale();
  const [use, setUse] = useState<AiUse | null>(null);
  const [feelings, setFeelings] = useState<string[]>([]);

  useEffect(() => {
    let live = true;
    getAnswers().then((a) => {
      if (!live) return;
      if (a.ai) setUse(a.ai);
      if (a.aiFeelings) setFeelings(a.aiFeelings);
    });
    return () => {
      live = false;
    };
  }, []);

  const tried = !!use && use !== 'never';
  const reply = !use
    ? null
    : use === 'never'
      ? 'No problem. Here, every answer comes one step at a time, from your syllabus.'
      : 'Fair. Here, answers come one step at a time, from your syllabus, and you can stop at any step to ask why.';

  return (
    <OnbScreen
      title="Have you used AI, like ChatGPT, for studying?"
      cta={{
        label: 'Continue',
        disabled: !use,
        onPress: () => {
          saveAnswers({ ai: use ?? undefined, aiFeelings: tried ? feelings : [] });
          afterQuestions();
        },
      }}
      onSkip={afterQuestions}>
      <ChoiceGrid cols={2}>
        {USE.map((u) => (
          <SkyChoice
            key={u.id}
            shape="tile"
            height={ds(52)}
            labelSize={16}
            label={u.label}
            selected={use === u.id}
            onPress={() => setUse(u.id)}
          />
        ))}
      </ChoiceGrid>
      {tried ? (
        <Animated.View entering={FadeIn.duration(320)}>
          <OnbLabel>How did it feel? Pick any that fit.</OnbLabel>
          <ChipWrap>
            {FEELINGS.map((f) => (
              <SkyChoice
                key={f}
                shape="chip"
                labelSize={14}
                label={f}
                selected={feelings.includes(f)}
                onPress={() => setFeelings((list) => (list.includes(f) ? list.filter((x) => x !== f) : [...list, f]))}
              />
            ))}
          </ChipWrap>
        </Animated.View>
      ) : null}
      {reply ? <Insight text={reply} /> : null}
    </OnbScreen>
  );
}
