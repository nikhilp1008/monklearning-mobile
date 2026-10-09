import { router, useLocalSearchParams } from 'expo-router';

import { TeacherPicker } from '@/components/teacher-picker';
import { pushPersona } from '@/lib/persona-sync';
import { setTeacherPreference, type TeacherId } from '@/lib/preferences';

/**
 * Select Teacher, opened from Home's header. The page itself lives in
 * components/teacher-picker.tsx, shared with onboarding's teacher step.
 *
 * WHAT COMMITS AND WHAT DOES NOT. The choice is written when "Select Teacher"
 * is pressed — to this device first, so the classroom reads the right teacher
 * even offline, then to the server so another device learns about it. The X
 * leaves without writing anything.
 */
export default function SelectTeacherScreen() {
  const params = useLocalSearchParams<{ teacher?: string }>();
  const opened: TeacherId = params.teacher === 'vedha' ? 'vedha' : 'drona';
  return (
    <TeacherPicker
      initial={opened}
      variant="home"
      onClose={() => router.back()}
      onChoose={(teacher) => {
        void setTeacherPreference(teacher);
        void pushPersona({ teacher });
        router.back();
      }}
    />
  );
}
