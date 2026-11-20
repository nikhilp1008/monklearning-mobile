import AsyncStorage from '@react-native-async-storage/async-storage';

import { apiFetch } from '@/lib/api';
import { supabase } from '@/lib/supabase';
import type { DiagramFigure, QuestionType, StructuredSolution } from '@/lib/practice';

/**
 * PRACTICE HISTORY: the last 90 days of a student's answers, read only.
 *
 * Designed 17 Nov 2026 (the "Practice history · final" page): a month
 * calendar of squares that deepen with the day's questions, a full-screen
 * day with subject tabs and an All / Correct / Wrong / Skipped dropdown, and
 * a read-only question page with Previous / Next. Free for everyone.
 *
 * THE SERVER SIDE IS NOT BUILT YET. Until the three endpoints below exist,
 * `HISTORY_SOURCE` is 'sample' and every call is answered from generated
 * sample data on the phone. Flip it to 'server' once Raasikh's endpoints are
 * live; nothing else in the app needs to change. While it is 'sample', the
 * History button only shows in development builds (`HISTORY_ENABLED`), so no
 * student ever sees made-up history.
 *
 * The endpoints, as proposed to Raasikh (all GET, all for the signed-in
 * student, all take the phone's time zone so a "day" is the student's day):
 *
 *   /practice/history/calendar?tz=
 *     -> HistoryCalendar: one total per day with practice, last 90 days.
 *   /practice/history/day?date=&tz=&subject=&result=&cursor=
 *     -> HistoryDay: the day's counts (all + per subject) and one page of
 *        its answers, oldest first, filtered by subject and result.
 *   /practice/history/attempt/:id?tz=&subject=&result=
 *     -> HistoryAttempt: one answer in full, plus its place in the filtered
 *        day ("2 of 9") and the previous / next answer ids.
 */

export const HISTORY_SOURCE = 'server' as 'sample' | 'server';

/** History is only offered when it can show something real — or in a dev
 *  build, where the sample data is the point. */
export const HISTORY_ENABLED = HISTORY_SOURCE === 'server' || __DEV__;

/** Today plus the 89 days before it. */
export const HISTORY_DAYS = 90;

export type HistoryResult = 'correct' | 'wrong' | 'skipped';
export type HistoryFilter = 'all' | HistoryResult;

export interface HistoryCalendarDay {
  /** The student's local date, YYYY-MM-DD. */
  date: string;
  total: number;
}

export interface HistoryCalendar {
  /** First day kept (today − 89), YYYY-MM-DD. */
  from: string;
  /** Today, YYYY-MM-DD, in the student's time zone. */
  to: string;
  /** Only days with practice. */
  days: HistoryCalendarDay[];
}

export interface HistoryCounts {
  total: number;
  correct: number;
  wrong: number;
  skipped: number;
}

export interface HistoryItem {
  attempt_id: string;
  question_id: string;
  /** 'physics' | 'chemistry' | 'mathematics' | 'biology' */
  subject: string;
  chapter_name: string | null;
  result: HistoryResult;
  /** ISO timestamp. */
  answered_at: string;
  /** The question's opening ~140 characters, LaTeX as written. Null when removed. */
  preview: string | null;
  has_figure: boolean;
  removed: boolean;
}

export interface HistoryDay {
  date: string;
  all: HistoryCounts;
  subjects: { subject: string; counts: HistoryCounts }[];
  /** One page of the filtered answers, in the order they were given. */
  items: HistoryItem[];
  /** Pass back as `cursor` for the next 40. Null at the end. */
  next_cursor: string | null;
}

export interface HistoryAttempt {
  attempt_id: string;
  question_id: string;
  subject: string;
  chapter_name: string | null;
  result: HistoryResult;
  answered_at: string;
  time_taken_ms: number | null;
  question_type: QuestionType;
  question_text: string | null;
  options: Record<string, string> | null;
  diagram: DiagramFigure[] | null;
  chosen_option: string | null;
  chosen_value: number | null;
  gave_up: boolean;
  correct_option: string | null;
  correct_value: number | null;
  solution: StructuredSolution | string | null;
  /** Set when the question or its key changed after this answer. */
  edited_at: string | null;
  removed: boolean;
  /** 1-based place inside the filtered day, and the filtered day's size. */
  position: { index: number; total: number };
  prev_attempt_id: string | null;
  next_attempt_id: string | null;
}

/* ------------------------------------------------------------------ dates */

export function timeZone(): string {
  try {
    return Intl.DateTimeFormat().resolvedOptions().timeZone || 'Asia/Kolkata';
  } catch {
    return 'Asia/Kolkata';
  }
}

const pad = (n: number) => String(n).padStart(2, '0');

/** A local Date as YYYY-MM-DD. */
export function isoDay(d: Date): string {
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
}

/** YYYY-MM-DD as a local Date at noon (noon keeps clock changes out of it). */
export function parseDay(day: string): Date {
  const [y, m, d] = day.split('-').map(Number);
  return new Date(y, m - 1, d, 12);
}

export function addDays(day: string, n: number): string {
  const d = parseDay(day);
  d.setDate(d.getDate() + n);
  return isoDay(d);
}

const WEEKDAY = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const MONTH_SHORT = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
export const MONTH_LONG = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December',
];

/** "Today", "Yesterday", else "Wed 11 Nov". */
export function dayTitle(day: string, today: string): string {
  if (day === today) return 'Today';
  if (day === addDays(today, -1)) return 'Yesterday';
  const d = parseDay(day);
  return `${WEEKDAY[d.getDay()]} ${d.getDate()} ${MONTH_SHORT[d.getMonth()]}`;
}

/** "20 Aug" */
export function shortDate(day: string): string {
  const d = parseDay(day);
  return `${d.getDate()} ${MONTH_SHORT[d.getMonth()]}`;
}

/** "6:06 pm" */
export function clockTime(iso: string): string {
  const d = new Date(iso);
  const h = d.getHours();
  return `${h % 12 || 12}:${pad(d.getMinutes())} ${h < 12 ? 'am' : 'pm'}`;
}

/** "1 min 40 s", "55 s" */
export function tookFor(ms: number | null): string | null {
  if (!ms || ms <= 0) return null;
  const s = Math.round(ms / 1000);
  if (s < 60) return `${s} s`;
  const m = Math.floor(s / 60);
  const r = s % 60;
  return r ? `${m} min ${pad(r)} s` : `${m} min`;
}

/* ------------------------------------------------------------- shading */

/**
 * The four shade steps for a student, from their own busy days (GitHub's
 * quartiles), so a free student's best day is as deep as a pass student's
 * 150. Returns the top of steps 1–3; anything above the last is step 4.
 */
export function shadeThresholds(days: HistoryCalendarDay[]): [number, number, number] {
  const totals = days.map((d) => d.total).filter((n) => n > 0).sort((a, b) => a - b);
  if (!totals.length) return [1, 2, 3];
  const at = (p: number) => totals[Math.floor((totals.length - 1) * p)];
  return [at(0.25), at(0.5), at(0.75)];
}

export function shadeLevel(total: number, t: [number, number, number]): 0 | 1 | 2 | 3 | 4 {
  if (!total) return 0;
  if (total <= t[0]) return 1;
  if (total <= t[1]) return 2;
  if (total <= t[2]) return 3;
  return 4;
}

/* ------------------------------------------------------------ calendar */

export interface HistoryMonth {
  year: number;
  /** 0-based, as Date uses. */
  month: number;
}

/**
 * The months the calendar draws, OLDEST FIRST: from the month of `from` (the
 * first kept day) to the month of `to` (today). Scrolling down moves forward in
 * time and the last block is always the current month, where the screen opens.
 */
export function historyMonths(from: string, to: string): HistoryMonth[] {
  const a = parseDay(from);
  const b = parseDay(to);
  const list: HistoryMonth[] = [];
  let y = a.getFullYear();
  let m = a.getMonth();
  while (y < b.getFullYear() || (y === b.getFullYear() && m <= b.getMonth())) {
    list.push({ year: y, month: m });
    m += 1;
    if (m > 11) {
      m = 0;
      y += 1;
    }
  }
  return list;
}

/**
 * Where a month's grid starts. Days before `from` are outside the 90 days and
 * are not drawn: the grid begins at `firstDay`, after `blanks` empty squares
 * (Monday-first), with any week row that would be entirely empty dropped.
 */
export function monthLayout(
  year: number,
  month: number,
  from: string
): { firstDay: number; length: number; blanks: number } {
  const length = new Date(year, month + 1, 0).getDate();
  const offset = (new Date(year, month, 1).getDay() + 6) % 7;
  const f = parseDay(from);
  const firstDay = f.getFullYear() === year && f.getMonth() === month ? f.getDate() : 1;
  const leading = offset + firstDay - 1;
  return { firstDay, length, blanks: leading % 7 };
}

export type HistoryDayKind = 'loading' | 'old' | 'future' | 'empty' | 'practice';

/**
 * What one square is, and whether it opens. Only a loaded, kept, past-or-today
 * day with at least one answer opens. A day with nothing recorded — today
 * included — does not; today still carries its outline (`isToday`).
 */
export function historyDayState(
  date: string,
  { today, from, total, loaded }: { today: string; from: string; total: number; loaded: boolean }
): { kind: HistoryDayKind; tappable: boolean; isToday: boolean } {
  const isToday = date === today;
  let kind: HistoryDayKind;
  if (!loaded) kind = 'loading';
  else if (date > today) kind = 'future';
  else if (date < from) kind = 'old';
  else if (total > 0) kind = 'practice';
  else kind = 'empty';
  return { kind, tappable: kind === 'practice', isToday };
}

/* --------------------------------------------------------------- cache */

/**
 * The phone keeps the last copy of each screen so history still opens offline.
 * ONE STUDENT'S KEYS, NEVER A SHARED ONE: the copy used to sit under keys with
 * no student in them, so signing in as someone else, or a build that showed
 * sample data, left that data to appear as the next account's history when the
 * network failed. With no signed-in student there is no copy to read or write,
 * and sample data is never saved.
 */
const CACHE = 'practice-history:v2:';
const OLD_CACHE = 'practice-history:v1:';

async function currentUserId(): Promise<string | null> {
  try {
    const { data } = await supabase.auth.getSession();
    return data.session?.user?.id ?? null;
  } catch {
    return null;
  }
}

let sweptOld = false;
/** The first version's shared copies belong to no account: drop them, once. */
async function sweepOldCache() {
  if (sweptOld) return;
  sweptOld = true;
  try {
    const old = (await AsyncStorage.getAllKeys()).filter((k) => k.startsWith(OLD_CACHE));
    if (old.length) await AsyncStorage.multiRemove(old);
  } catch {
    // Leftover keys are harmless; nothing reads them.
  }
}

async function cached<T>(key: string, load: () => Promise<T>): Promise<{ data: T; savedAt: number | null }> {
  void sweepOldCache();
  const uid = await currentUserId();
  const k = uid ? `${CACHE}${uid}:${key}` : null;
  try {
    const data = await load();
    if (k && HISTORY_SOURCE !== 'sample') {
      AsyncStorage.setItem(k, JSON.stringify({ at: Date.now(), data })).catch(() => {});
    }
    return { data, savedAt: null };
  } catch (err) {
    const raw = k ? await AsyncStorage.getItem(k).catch(() => null) : null;
    if (raw) {
      try {
        const saved = JSON.parse(raw) as { at: number; data: T };
        return { data: saved.data, savedAt: saved.at };
      } catch {
        // A broken entry is the same as none.
      }
    }
    throw err;
  }
}

/* ----------------------------------------------------------------- API */

type Filters = { subject?: string | null; result?: HistoryFilter };

function query(params: Record<string, string | null | undefined>): string {
  const parts = Object.entries(params)
    .filter(([, v]) => v != null && v !== '')
    .map(([k, v]) => `${k}=${encodeURIComponent(v as string)}`);
  return parts.length ? `?${parts.join('&')}` : '';
}

/** `savedAt` is set when this came from the phone's copy (offline). */
export function getHistoryCalendar() {
  const tz = timeZone();
  return cached('calendar', () =>
    HISTORY_SOURCE === 'sample'
      ? sampleCalendar()
      : apiFetch<HistoryCalendar>(`/practice/history/calendar${query({ tz })}`)
  );
}

/** The server names the day's totals `counts` and keys `subjects` by name;
 *  the screens read `all` and a list. Accepts either shape. */
export function toHistoryDay(raw: unknown): HistoryDay {
  const r = (raw ?? {}) as Record<string, any>;
  const zero: HistoryCounts = { total: 0, correct: 0, wrong: 0, skipped: 0 };
  const subjects = Array.isArray(r.subjects)
    ? r.subjects
    : Object.entries((r.subjects ?? {}) as Record<string, HistoryCounts>).map(([subject, counts]) => ({
        subject,
        counts,
      }));
  return {
    date: r.date,
    all: r.all ?? r.counts ?? zero,
    subjects,
    items: r.items ?? [],
    next_cursor: r.next_cursor ?? null,
  };
}

export function getHistoryDay(date: string, f: Filters & { cursor?: string | null } = {}) {
  const tz = timeZone();
  const key = `day:${date}:${f.subject ?? 'all'}:${f.result ?? 'all'}`;
  const load = () =>
    HISTORY_SOURCE === 'sample'
      ? sampleDay(date, f)
      : apiFetch<unknown>(
          `/practice/history/day${query({
            date,
            tz,
            subject: f.subject ?? null,
            result: f.result && f.result !== 'all' ? f.result : null,
            cursor: f.cursor ?? null,
          })}`
        ).then(toHistoryDay);
  // Only the first page is kept for offline; "load more" needs a connection.
  return f.cursor ? load().then((data) => ({ data, savedAt: null })) : cached(key, load);
}

export function getHistoryAttempt(attemptId: string, f: Filters = {}) {
  const tz = timeZone();
  const key = `attempt:${attemptId}:${f.subject ?? 'all'}:${f.result ?? 'all'}`;
  return cached(key, () =>
    HISTORY_SOURCE === 'sample'
      ? sampleAttempt(attemptId, f)
      : apiFetch<HistoryAttempt>(
          `/practice/history/attempt/${encodeURIComponent(attemptId)}${query({
            tz,
            subject: f.subject ?? null,
            result: f.result && f.result !== 'all' ? f.result : null,
          })}`
        ).then((a) =>
          // The server counts from 0; the screen shows "Question 2 of 9".
          a.position ? { ...a, position: { ...a.position, index: a.position.index + 1 } } : a
        )
  );
}

/* ---------------------------------------------------------- sample data */
/*
 * Everything below goes once HISTORY_SOURCE is 'server'. It fakes the three
 * endpoints closely enough to exercise every state the screens draw: quiet
 * and busy days, gaps, several subjects, maths, a figure, a removed and a
 * corrected question, a 100+ day, today partly done.
 */

type SampleQ = {
  subject: string;
  chapter: string;
  text: string;
  type: QuestionType;
  options: Record<string, string> | null;
  correct_option: string | null;
  correct_value: number | null;
  steps: string[];
  final?: string;
  figure?: boolean;
};

const POOL: SampleQ[] = [
  {
    subject: 'physics', chapter: 'Rotational Motion',
    text: 'Moment of inertia of a thin rod of mass $M$ and length $L$ about an axis through one end, perpendicular to the rod, is',
    type: 'single_correct',
    options: { a: '$\\frac{ML^2}{12}$', b: '$\\frac{ML^2}{2}$', c: '$\\frac{ML^2}{3}$', d: '$\\frac{2ML^2}{3}$' },
    correct_option: 'c', correct_value: null,
    steps: ['Parallel axis theorem: $I = I_{cm} + M\\left(\\frac{L}{2}\\right)^2$', '$I_{cm} = \\frac{ML^2}{12}$, so $I = \\frac{ML^2}{12} + \\frac{ML^2}{4} = \\frac{ML^2}{3}$'],
  },
  {
    subject: 'physics', chapter: 'Rotational Motion',
    text: 'A solid sphere of mass 2 kg rolls without slipping at 3 m/s. Its total kinetic energy is',
    type: 'single_correct',
    options: { a: '9 J', b: '12.6 J', c: '6.3 J', d: '18 J' },
    correct_option: 'b', correct_value: null,
    steps: ['$K = \\frac{1}{2}mv^2\\left(1 + \\frac{k^2}{R^2}\\right)$, and for a solid sphere $\\frac{k^2}{R^2} = \\frac{2}{5}$', '$K = \\frac{1}{2} \\times 2 \\times 9 \\times \\frac{7}{5} = 12.6$ J'],
  },
  {
    subject: 'physics', chapter: 'Laws of Motion',
    text: 'Two blocks of 3 kg and 2 kg hang over a light frictionless pulley. Find the acceleration of the system in m/s² (g = 9.8 m/s²).',
    type: 'numerical', options: null, correct_option: null, correct_value: 1.96,
    steps: ['$a = \\frac{(m_1 - m_2)g}{m_1 + m_2} = \\frac{(3 - 2) \\times 9.8}{5}$'],
    final: '1.96 m/s²', figure: true,
  },
  {
    subject: 'physics', chapter: 'Moving Charges and Magnetism',
    text: 'The magnetic field at the centre of a circular loop of radius $r$ carrying current $I$ is',
    type: 'single_correct',
    options: { a: '$\\frac{\\mu_0 I}{2r}$', b: '$\\frac{\\mu_0 I}{2\\pi r}$', c: '$\\frac{\\mu_0 I}{4r}$', d: '$\\frac{\\mu_0 I}{r}$' },
    correct_option: 'a', correct_value: null,
    steps: ['By the Biot–Savart law, each element contributes $dB = \\frac{\\mu_0 I\\,dl}{4\\pi r^2}$', 'Over the whole loop: $B = \\frac{\\mu_0 I}{4\\pi r^2} \\times 2\\pi r = \\frac{\\mu_0 I}{2r}$'],
  },
  {
    subject: 'chemistry', chapter: 'Equilibrium',
    text: 'For $N_2 + 3H_2 \\rightleftharpoons 2NH_3$, $K_c = 0.5$ at 400 K. $K_p$ at the same temperature is (R = 0.082 L atm K⁻¹ mol⁻¹)',
    type: 'single_correct',
    options: { a: '$0.5 \\times (32.8)^{2}$', b: '$0.5 \\times (32.8)^{-2}$', c: '$0.5 \\times 32.8$', d: '0.5' },
    correct_option: 'b', correct_value: null,
    steps: ['$K_p = K_c(RT)^{\\Delta n}$, and $\\Delta n = 2 - 4 = -2$', '$RT = 0.082 \\times 400 = 32.8$, so $K_p = 0.5 \\times (32.8)^{-2}$'],
  },
  {
    subject: 'chemistry', chapter: 'Equilibrium',
    text: 'The pH of a 0.01 M HCl solution is',
    type: 'numerical', options: null, correct_option: null, correct_value: 2,
    steps: ['HCl is fully ionised, so $[H^+] = 10^{-2}$ M', '$pH = -\\log(10^{-2}) = 2$'],
    final: '2',
  },
  {
    subject: 'chemistry', chapter: 'Structure of Atom',
    text: 'The energy of an electron in the $n = 3$ orbit of $He^+$ is',
    type: 'single_correct',
    options: { a: '−6.04 eV', b: '−13.6 eV', c: '−3.4 eV', d: '−1.51 eV' },
    correct_option: 'a', correct_value: null,
    steps: ['$E_n = -13.6\\,\\frac{Z^2}{n^2}$ eV, with $Z = 2$ and $n = 3$', '$E_3 = -13.6 \\times \\frac{4}{9} = -6.04$ eV'],
  },
  {
    subject: 'mathematics', chapter: 'Integrals',
    text: 'If $\\int \\frac{dx}{x^2 + 4} = k \\tan^{-1}\\left(\\frac{x}{2}\\right) + C$, then $k$ is',
    type: 'single_correct',
    options: { a: '$\\frac{1}{2}$', b: '2', c: '$\\frac{1}{4}$', d: '1' },
    correct_option: 'a', correct_value: null,
    steps: ['$\\int \\frac{dx}{x^2 + a^2} = \\frac{1}{a}\\tan^{-1}\\frac{x}{a} + C$, here $a = 2$'],
  },
  {
    subject: 'mathematics', chapter: 'Limits and Derivatives',
    text: '$\\lim_{x \\to 0} \\frac{\\sin 3x}{x}$ equals',
    type: 'single_correct',
    options: { a: '0', b: '1', c: '3', d: '$\\frac{1}{3}$' },
    correct_option: 'c', correct_value: null,
    steps: ['$\\frac{\\sin 3x}{x} = 3 \\cdot \\frac{\\sin 3x}{3x}$, and $\\frac{\\sin 3x}{3x} \\to 1$'],
  },
];

/** A stable 0–1 number per string, so the sample is the same every open. */
function hash01(s: string): number {
  let h = 2166136261;
  for (let i = 0; i < s.length; i++) {
    h ^= s.charCodeAt(i);
    h = Math.imul(h, 16777619);
  }
  return ((h >>> 0) % 100000) / 100000;
}

const wait = (ms: number) => new Promise((r) => setTimeout(r, ms));

function sampleTotal(day: string, today: string): number {
  if (day === today) return 6;
  // One very long day, to exercise "load more".
  if (day === addDays(today, -30)) return 132;
  const r = hash01(`n:${day}`);
  if (r < 0.3) return 0;
  return Math.round(4 + hash01(`m:${day}`) * 38);
}

function subjectsFor(day: string, today: string): string[] {
  if (day === today) return ['physics'];
  const r = hash01(`s:${day}`);
  if (r < 0.3) return ['physics'];
  if (r < 0.6) return ['physics', 'chemistry'];
  return ['physics', 'chemistry', 'mathematics'];
}

function sampleItems(day: string, today: string): (HistoryItem & { _q: SampleQ })[] {
  const total = sampleTotal(day, today);
  const subjects = subjectsFor(day, today);
  const pool = POOL.filter((q) => subjects.includes(q.subject));
  const start = parseDay(day);
  start.setHours(day === today ? 0 : 18, day === today ? 3 : 0, 0, 0);
  return Array.from({ length: total }, (_, i) => {
    const q = pool[Math.floor(hash01(`q:${day}:${i}`) * pool.length)];
    const r = hash01(`r:${day}:${i}`);
    const result: HistoryResult = r < 0.62 ? 'correct' : r < 0.86 ? 'wrong' : 'skipped';
    const removed = total > 10 && i === 7;
    const at = new Date(start.getTime() + i * (day === today ? 6 : 3) * 60_000);
    return {
      attempt_id: `${day}#${i}`,
      question_id: `${q.subject}-${POOL.indexOf(q)}`,
      subject: q.subject,
      chapter_name: q.chapter,
      result,
      answered_at: at.toISOString(),
      preview: removed ? null : q.text.slice(0, 140),
      has_figure: !!q.figure,
      removed,
      _q: q,
    };
  });
}

function counts(items: HistoryItem[]): HistoryCounts {
  return {
    total: items.length,
    correct: items.filter((i) => i.result === 'correct').length,
    wrong: items.filter((i) => i.result === 'wrong').length,
    skipped: items.filter((i) => i.result === 'skipped').length,
  };
}

const matches = (i: HistoryItem, f: Filters) =>
  (!f.subject || i.subject === f.subject) && (!f.result || f.result === 'all' || i.result === f.result);

async function sampleCalendar(): Promise<HistoryCalendar> {
  await wait(350);
  const to = isoDay(new Date());
  const from = addDays(to, -(HISTORY_DAYS - 1));
  const days: HistoryCalendarDay[] = [];
  for (let d = from; d <= to; d = addDays(d, 1)) {
    const total = sampleTotal(d, to);
    if (total) days.push({ date: d, total });
  }
  return { from, to, days };
}

async function sampleDay(date: string, f: Filters & { cursor?: string | null }): Promise<HistoryDay> {
  await wait(300);
  const today = isoDay(new Date());
  const all = sampleItems(date, today);
  const subjects = [...new Set(all.map((i) => i.subject))].map((subject) => ({
    subject,
    counts: counts(all.filter((i) => i.subject === subject)),
  }));
  const filtered = all.filter((i) => matches(i, f));
  const start = f.cursor ? Number(f.cursor) : 0;
  const page = filtered.slice(start, start + 40).map(({ _q, ...item }) => item);
  return {
    date,
    all: counts(all),
    subjects,
    items: page,
    next_cursor: start + 40 < filtered.length ? String(start + 40) : null,
  };
}

async function sampleAttempt(attemptId: string, f: Filters): Promise<HistoryAttempt> {
  await wait(250);
  const date = attemptId.split('#')[0];
  const today = isoDay(new Date());
  const all = sampleItems(date, today);
  const filtered = all.filter((i) => matches(i, f));
  const at = filtered.findIndex((i) => i.attempt_id === attemptId);
  const item = filtered[at] ?? all.find((i) => i.attempt_id === attemptId);
  if (!item) throw new Error('Not found');
  const q = item._q;
  const wrongPick = q.options ? Object.keys(q.options).find((k) => k !== q.correct_option) ?? null : null;
  return {
    attempt_id: item.attempt_id,
    question_id: item.question_id,
    subject: item.subject,
    chapter_name: item.chapter_name,
    result: item.result,
    answered_at: item.answered_at,
    time_taken_ms: item.result === 'skipped' ? null : 40_000 + Math.round(hash01(`t:${attemptId}`) * 150_000),
    question_type: q.type,
    question_text: item.removed ? null : q.text,
    options: item.removed ? null : q.options,
    diagram: null,
    chosen_option:
      item.result === 'skipped' || !q.options ? null : item.result === 'correct' ? q.correct_option : wrongPick,
    chosen_value:
      item.result === 'skipped' || q.options ? null : item.result === 'correct' ? q.correct_value : (q.correct_value ?? 0) * 2.5,
    gave_up: item.result === 'skipped',
    correct_option: q.correct_option,
    correct_value: q.correct_value,
    solution: { steps: q.steps, final_answer: q.final },
    edited_at: !item.removed && Number(attemptId.split('#')[1]) === 3 ? new Date(Date.now() - 2 * 864e5).toISOString() : null,
    removed: item.removed,
    position: { index: at + 1, total: filtered.length },
    prev_attempt_id: at > 0 ? filtered[at - 1].attempt_id : null,
    next_attempt_id: at >= 0 && at < filtered.length - 1 ? filtered[at + 1].attempt_id : null,
  };
}
