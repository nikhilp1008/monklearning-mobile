import { router } from 'expo-router';

import { TeacherPicker } from '@/components/teacher-picker';
import { pushPersona } from '@/lib/persona-sync';
import {
  getLanguagePreference,
  setLanguagePreference,
  setTeacherPreference,
} from '@/lib/preferences';

/**
 * "Choose your teacher" — the first screen after the pass is paid for.
 *
 * The app has always had two teachers and has never once asked. A new student
 * was given Drona silently, and the only way to discover the choice was to
 * wander into Profile weeks later. This asks, at the one moment a student is
 * certain to be paying attention: they have just bought eleven months of
 * being taught by whichever one this screen picks.
 *
 * IT IS THE SELECT TEACHER PAGE. This used to be its own drawing — two small
 * orbs on cream, a voices switch and a language switch — and once Home grew a
 * real Select Teacher page, a new student met one picture of their teacher in
 * sign-up and a different one on Home a minute later. Now it is the same page
 * (components/teacher-picker.tsx), with onboarding's title and button.
 *
 * THE LANGUAGE IS NOT ASKED HERE. It is one decision too many for this step,
 * and it has a default (English) that the page names under the button, with
 * where to change it. Profile's "Speaks" is where it is chosen.
 *
 * WHAT IT WRITES. What Profile writes when the same controls are used there —
 * the teacher, and the language as it stands — in one `pushPersona`, so the
 * server learns both at sign-up exactly as it did before.
 */
export default function TeacherScreen() {
  return (
    <TeacherPicker
      initial="drona"
      variant="onboarding"
      onChoose={(teacher) => {
        void (async () => {
          const language = await getLanguagePreference();
          await Promise.all([setTeacherPreference(teacher), setLanguagePreference(language)]);
          void pushPersona({ teacher, language });
        })();
        router.push({ pathname: '/inside', params: { teacher } });
      }}
    />
  );
}
