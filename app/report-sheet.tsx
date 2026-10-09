import { router, useLocalSearchParams } from 'expo-router';

import { ReportSheet } from '@/components/report-sheet';
import type { ReportSurface } from '@/lib/reports';

/**
 * Report a mistake, as a route: reached from Snap, Doubts and Practice. The
 * sheet itself is components/report-sheet.tsx, which the live classroom also
 * shows in place.
 */
export default function ReportSheetScreen() {
  const params = useLocalSearchParams<{
    doubtId?: string;
    questionId?: string;
    sessionId?: string;
    subject?: string;
    chapter?: string;
    quote?: string;
    surface?: ReportSurface;
  }>();
  return <ReportSheet target={params} onClose={() => router.back()} />;
}
