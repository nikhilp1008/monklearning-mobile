import AsyncStorage from '@react-native-async-storage/async-storage';

export interface PlanItem {
  id: string;
  text: string;
  done: boolean;
}

export const MAX_PLAN_ITEMS = 3;

const STORAGE_KEY = 'monklearning.todayPlan';

interface StoredPlan {
  date: string;
  items: PlanItem[];
}

// Local date, not toISOString's UTC date — a plan set at 11pm IST shouldn't
// roll over to "tomorrow" a few hours early just because UTC already has.
function todayKey(date: Date): string {
  const y = date.getFullYear();
  const m = String(date.getMonth() + 1).padStart(2, '0');
  const d = String(date.getDate()).padStart(2, '0');
  return `${y}-${m}-${d}`;
}

/** There's no backend concept of a student's daily plan at all (confirmed —
 *  the only "plan" in the API is a Drona lesson's internal segment plan) —
 *  this is intentionally local-only, resetting each real-world day. */
export async function getTodayPlan(): Promise<PlanItem[]> {
  const raw = await AsyncStorage.getItem(STORAGE_KEY);
  if (!raw) return [];
  try {
    const stored: StoredPlan = JSON.parse(raw);
    if (stored.date !== todayKey(new Date())) return [];
    return Array.isArray(stored.items) ? stored.items : [];
  } catch {
    return [];
  }
}

export async function saveTodayPlan(items: PlanItem[]): Promise<void> {
  const stored: StoredPlan = { date: todayKey(new Date()), items };
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(stored));
}

export function newPlanId(): string {
  return `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`;
}

/** Forgets today's plan. Called on sign-out — it is one student's list, and
 *  the next person to sign in on this phone should not inherit it. */
export async function clearTodayPlan(): Promise<void> {
  try {
    await AsyncStorage.removeItem(STORAGE_KEY);
  } catch {
    // Nothing useful to do; the plan is per-day anyway.
  }
}
