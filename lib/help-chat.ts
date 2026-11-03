/**
 * THE SUPPORT CHAT'S CONVERSATION, as plain data (the screen is app/help.tsx).
 *
 * Two things are woven into one chat. What the assistant said lives only on this
 * phone: the server keeps no chat history for it. What the team said lives on the
 * server as a request (a "thread"), so it follows the student to a new phone.
 */

export type HelpTurn = { id: number | string; from: 'team' | 'student'; text: string; at: string };

export type HelpThread = {
  id: string;
  question: string;
  status: 'open' | 'answered' | 'closed';
  created_at: string;
  /** The team's messages only. Every server build has this. */
  replies?: { id: number | string; text: string; at: string }[];
  /** The conversation after the question. Absent from older server builds. */
  messages?: HelpTurn[];
  /** The student has the last word, or has only asked. */
  awaiting_team?: boolean;
  /** Written by the server once the student has waited: show it as it is. */
  note?: string | null;
};

/** What this phone remembers. `threadId` marks the line that handed over to the team. */
export type LocalItem =
  | { kind: 'me'; key: string; text: string; at: string }
  | { kind: 'bot'; key: string; text: string; at: string; askId?: number; route?: string; covered?: boolean; threadId?: string };

export type ChatItem =
  | LocalItem
  | { kind: 'team'; key: string; text: string; at: string }
  | { kind: 'line'; key: string; text: string; at: string };

/** A thread stays the place to write while it could still be answered: three days after its last word. */
const ACTIVE_FOR_MS = 3 * 24 * 60 * 60 * 1000;

const JOINED = 'monklearning team joined';

const time = (iso: string) => {
  const t = Date.parse(iso);
  return Number.isNaN(t) ? 0 : t;
};

/** The name is written lowercase. The server's own sentences still capitalise it. */
export const brandName = (text: string) => text.replace(/monklearning/gi, 'monklearning');

/** The conversation after the question, from whichever field this server build sends. */
export function threadTurns(thread: HelpThread): HelpTurn[] {
  if (thread.messages) return thread.messages;
  return (thread.replies ?? []).map((r) => ({ id: r.id, from: 'team' as const, text: r.text, at: r.at }));
}

export function lastActivity(thread: HelpThread): number {
  return threadTurns(thread).reduce((latest, t) => Math.max(latest, time(t.at)), time(thread.created_at));
}

/** The thread a message would go to: the newest one not closed, while it is still recent or still waiting. */
export function activeThread(threads: HelpThread[], now: number = Date.now()): HelpThread | null {
  const newest = [...threads].sort((a, b) => lastActivity(b) - lastActivity(a))[0];
  if (!newest || newest.status === 'closed') return null;
  if (newest.awaiting_team) return newest;
  return now - lastActivity(newest) < ACTIVE_FOR_MS ? newest : null;
}

/**
 * One chat, oldest first. A thread's question is left out when this phone already
 * shows it being handed over; "joined" is said once, before the team's first words;
 * the server's waiting note is only for the thread still being written in.
 */
export function buildChat(local: LocalItem[], threads: HelpThread[], active: HelpThread | null): ChatItem[] {
  const items: ChatItem[] = [...local];
  for (const thread of threads) {
    const handover = local.find((i) => i.kind === 'bot' && i.threadId === thread.id);
    // The phone's clock and the server's can disagree: the team never speaks before it was asked.
    const after = (at: string) => (handover && time(at) < time(handover.at) ? handover.at : at);
    if (!handover) {
      items.push({ kind: 'me', key: `q-${thread.id}`, text: thread.question, at: thread.created_at });
    }
    let joined = false;
    for (const turn of threadTurns(thread)) {
      if (turn.from === 'team' && !joined) {
        joined = true;
        items.push({ kind: 'line', key: `joined-${thread.id}`, text: JOINED, at: after(turn.at) });
      }
      items.push(
        turn.from === 'team'
          ? { kind: 'team', key: `t-${thread.id}-${turn.id}`, text: turn.text, at: after(turn.at) }
          : { kind: 'me', key: `s-${thread.id}-${turn.id}`, text: turn.text, at: after(turn.at) }
      );
    }
    if (thread.id === active?.id && thread.note) {
      items.push({ kind: 'line', key: `note-${thread.id}`, text: thread.note, at: new Date(lastActivity(thread) + 1).toISOString() });
    }
  }
  // Stable: things that share a moment stay in the order they were added.
  return items
    .map((item) => (item.kind === 'bot' || item.kind === 'line' ? { ...item, text: brandName(item.text) } : item))
    .map((item, order) => ({ item, order }))
    .sort((a, b) => time(a.item.at) - time(b.item.at) || a.order - b.order)
    .map((x) => x.item);
}

/** Route key (content/app_help/app_help.md in the API repo) to screen. Keys the API may return but this lacks open nothing. */
export const HELP_ROUTES: Record<string, { path: string; label: string }> = {
  home: { path: '/', label: 'Open Home' },
  textbooks: { path: '/(tabs)/textbooks', label: 'Open Textbooks' },
  doubts: { path: '/(tabs)/doubts', label: 'Open Doubts' },
  notes: { path: '/(tabs)/notes', label: 'Open Notes' },
  snap: { path: '/snap-capture', label: 'Open Snap and Solve' },
  class_picker: { path: '/drona', label: 'Start a class' },
  select_teacher: { path: '/select-teacher', label: 'Change your teacher' },
  practice: { path: '/practice', label: 'Open Practice' },
  practice_focus: { path: '/practice-focus', label: 'Open Practice focus' },
  mocks: { path: '/mocks', label: 'Open Mock tests' },
  progress: { path: '/progress', label: 'Open Progress' },
  exam_scope: { path: '/exam-scope', label: 'Open Exam scope' },
  plan_sheet: { path: '/plan-sheet', label: "Open Today's plan" },
  profile: { path: '/profile', label: 'Open Profile' },
  account: { path: '/account', label: 'Open Personal information' },
  subscription: { path: '/subscription', label: 'Open Your plan' },
  plans: { path: '/plans', label: 'See plans' },
  promo: { path: '/plans-promo', label: 'Enter a promo code' },
  about: { path: '/about-us', label: 'Open About us' },
  privacy: { path: '/privacy-policy', label: 'Open Privacy policy' },
  terms: { path: '/terms', label: 'Open Terms' },
};

/** What the student remembers is capped, oldest first to go. */
export const KEEP_ITEMS = 40;
export function trimLocal(items: LocalItem[]): LocalItem[] {
  return items.length > KEEP_ITEMS ? items.slice(items.length - KEEP_ITEMS) : items;
}
