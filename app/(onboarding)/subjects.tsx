import { router } from 'expo-router';
import { useEffect, useState } from 'react';

import { Insight, OnbLabel, OnbScreen } from '@/components/onboarding/onb-screen';
import { ChoiceGrid, SkyChoice } from '@/components/onboarding/sky-choice';
import { useDesignScale, type ExamKey } from '@/constants/onboarding';
import { SUBJECT_NAMES, SUBJECTS_FOR, type SubjectKey } from '@/constants/onboarding-chapters';
import { getAnswers, saveAnswers } from '@/lib/onboarding-answers';
import { getProfile } from '@/lib/profile';

/**
 * Question 3: strongest and weakest subject, in those words.
 *
 * Plain on purpose. "Where do your marks come from" and "which section do you
 * open first" were both tried and both read as riddles to a seventeen-year-old.
 * The subjects follow the exam: Maths for JEE, Biology for NEET. The same
 * subject cannot be strongest and weakest, so it dims in the other row.
 */
export default function SubjectsScreen() {
  const { ds } = useDesignScale();
  const [exam, setExam] = useState<ExamKey>('jee');
  const [strongest, setStrongest] = useState<SubjectKey | null>(null);
  const [weakest, setWeakest] = useState<SubjectKey | null>(null);
  /** What was saved last time, so a change can clear the chapter answers. */
  const [saved, setSaved] = useState<{ strongest: SubjectKey | null; weakest: SubjectKey | null }>({
    strongest: null,
    weakest: null,
  });

  useEffect(() => {
    let live = true;
    Promise.all([getProfile(), getAnswers()]).then(([p, a]) => {
      if (!live) return;
      setExam(p.exam);
      const allowed = SUBJECTS_FOR[p.exam];
      const st = a.strongest && allowed.includes(a.strongest) ? a.strongest : null;
      const wk = a.weakest && allowed.includes(a.weakest) ? a.weakest : null;
      setStrongest(st);
      setWeakest(wk);
      setSaved({ strongest: st, weakest: wk });
    });
    return () => {
      live = false;
    };
  }, []);

  const subjects = SUBJECTS_FOR[exam];
  const cols = subjects.length === 4 ? 2 : 3;
  const tileH = cols === 2 ? ds(50) : ds(56);

  const reply =
    strongest && weakest
      ? `Got it. We’ll work most on ${SUBJECT_NAMES[weakest]} and keep ${SUBJECT_NAMES[strongest]} sharp.`
      : null;

  return (
    <OnbScreen
      title="Which subject are you strongest in, and which are you weakest in?"
      cta={{
        label: 'Continue',
        disabled: !strongest || !weakest,
        onPress: () => {
          saveAnswers({
            strongest: strongest ?? undefined,
            weakest: weakest ?? undefined,
            // The chapters were picked from the old weakest subject's list.
            ...(saved.weakest !== weakest || saved.strongest !== strongest
              ? { hardChapters: undefined, confidentChapter: undefined }
              : {}),
          });
          setSaved({ strongest, weakest });
          router.push('/chapters');
        },
      }}
      onSkip={() => router.push('/chapters')}>
      <OnbLabel first>Strongest</OnbLabel>
      <ChoiceGrid cols={cols}>
        {subjects.map((s) => (
          <SkyChoice
            key={s}
            shape="tile"
            height={tileH}
            labelSize={16}
            label={SUBJECT_NAMES[s]}
            selected={strongest === s}
            disabled={weakest === s}
            onPress={() => setStrongest(s)}
          />
        ))}
      </ChoiceGrid>
      <OnbLabel>Weakest</OnbLabel>
      <ChoiceGrid cols={cols}>
        {subjects.map((s) => (
          <SkyChoice
            key={s}
            shape="tile"
            height={tileH}
            labelSize={16}
            label={SUBJECT_NAMES[s]}
            selected={weakest === s}
            disabled={strongest === s}
            onPress={() => setWeakest(s)}
          />
        ))}
      </ChoiceGrid>
      {reply ? <Insight text={reply} /> : null}
    </OnbScreen>
  );
}
