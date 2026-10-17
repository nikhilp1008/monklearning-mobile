// "Your pass is active", for a new student: the receipt after the pass is
// taken in onboarding. Its button starts the pass's clock and leads on to the
// teacher. The screen itself is components/pass-confirmation.tsx, shared with
// the plans page so a pass looks the same however it was bought.
import { router, useLocalSearchParams } from 'expo-router';
import { useEffect, useState } from 'react';

import { useAndroidBack } from '@/lib/android-back';
import { PassConfirmation, activeTill } from '@/components/pass-confirmation';
import {
  EXAMS,
  PASSES,
  promoDiscount,
  rupees,
  type ExamKey,
  type PassKey,
} from '@/constants/onboarding';
import { startPass } from '@/lib/pass';
import { getProfile } from '@/lib/profile';

export default function PassActiveScreen() {
  const params = useLocalSearchParams<{ pass?: string; promo?: string; exam?: string; paid?: string }>();
  const passId = (PASSES.some((p) => p.id === params.pass) ? params.pass : 'week') as PassKey;
  const pass = PASSES.find((p) => p.id === passId) ?? PASSES[1];
  // The profile, not the param: a student who resumes after the app was
  // closed reaches the pass with no param, and a NEET receipt must not say JEE.
  const [examKey, setExamKey] = useState<ExamKey>(params.exam === 'neet' ? 'neet' : 'jee');
  useEffect(() => {
    let live = true;
    getProfile().then((p) => {
      if (live) setExamKey(p.exam);
    });
    return () => {
      live = false;
    };
  }, []);
  const exam = EXAMS[examKey];
  const paid = Math.max(0, pass.price - promoDiscount(params.promo ?? '', pass.price));

  const [saving, setSaving] = useState(false);
  // Paid: Back would return to the price list. Held, as the swipe is (see
  // (onboarding)/_layout).
  useAndroidBack(() => true);
  const [error, setError] = useState<string | null>(null);

  /**
   * THE RECEIPT IS NOT THE END OF THE FLOW ANY MORE.
   *
   * Two screens follow it — the teacher they will hear, and the starting-point
   * paper — so the button leads on and this does the one thing that belongs
   * to the purchase: start the pass's clock, where it was bought. The profile
   * write and the handover to the app happen on the last of those screens.
   */
  const finish = async () => {
    if (saving) return;
    setSaving(true);
    setError(null);
    try {
      // A paid pass was made when the payment was verified; only a free one
      // (a promo code) is started here, and the server decides if the code is good.
      if (params.paid !== '1') await startPass(passId, params.promo ?? '');
    } catch {
      setSaving(false);
      setError('Couldn’t start your pass. Check your connection and try again.');
      return;
    }
    router.push('/teacher');
  };

  return (
    <PassConfirmation
      // No teacher named: the student has not chosen one yet. That is the
      // very next screen, so this line points at it.
      sub={`${pass.name} of live classes, doubts and practice. Next, choose who teaches you.`}
      rows={[
        ['Pass', pass.name],
        ['Exam', exam.name],
        ['Active till', activeTill(passId)],
        ['Paid', rupees(paid)],
      ]}
      buttonLabel="Choose Drona or Vedha"
      onPress={finish}
      busy={saving}
      error={error}
    />
  );
}
