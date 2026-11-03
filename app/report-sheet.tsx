import { router, useLocalSearchParams } from 'expo-router';

import { ReportSheet } from '@/components/report-sheet';
import type { ReportSurface } from '@/lib/reports';

/**
 * Report a mistake, as a route: reached from Snap, Doubts, Practice, the
 * textbook reader and a mock paper's review (lib/reports.ts openReportSheet). The
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
    /** JSON, from openReportSheet: route params are strings. */
    context?: string;
  }>();
  let context: Record<string, unknown> | null = null;
  try {
    const parsed = params.context ? JSON.parse(params.context) : null;
    context = parsed && typeof parsed === 'object' && !Array.isArray(parsed) ? parsed : null;
  } catch {
    // A context that does not parse costs the extras, not the report.
  }
  return <ReportSheet target={{ ...params, context }} onClose={() => router.back()} />;
}
