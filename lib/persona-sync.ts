/**
 * The teacher/language choice, kept in ONE notebook: profiles on the server.
 *
 * Local AsyncStorage is a per-device cache of it, nothing more. Before this
 * existed the choice lived only locally, classes trusted whichever device
 * asked, and follow-ups copied the last class — measured in production as a
 * profile saying Drona while every voice ran Veda.
 *
 * Both calls are best-effort: the screen never blocks on them, and a failed
 * sync leaves the local cache standing.
 */
import { LanguageId, TeacherId, setLanguagePreference, setTeacherPreference } from '@/lib/preferences';
import { supabase } from '@/lib/supabase';

async function authed(): Promise<{ base: string; token: string } | null> {
  const base = process.env.EXPO_PUBLIC_API_URL;
  if (!base) return null;
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;
  return token ? { base: base.replace(/\/$/, ''), token } : null;
}

/**
 * A count of the choices made on this device, per field.
 *
 * A pull asks the server what the student chose — but the answer can take a
 * second or two on mobile data, and a student can tap a different teacher in
 * that time. The late answer was then applied on top of the tap: the screen
 * flipped back, the local cache took the old value, and the next class start
 * wrote the old value back to the server. A choice the student could see
 * being made was silently undone.
 *
 * So a pull notes these counts when it asks, and applies only the fields
 * nobody has chosen since. A tap always outranks an answer to a question
 * asked before it.
 */
const chosen = { teacher: 0, language: 0 };

/** Tells the server the student just chose. Fire and forget. */
export async function pushPersona(change: { teacher?: TeacherId; language?: LanguageId }): Promise<void> {
  // Counted before anything awaits, so a pull already in the air sees this
  // choice as newer than its answer.
  if (change.teacher) chosen.teacher += 1;
  if (change.language) chosen.language += 1;
  try {
    const auth = await authed();
    if (!auth) return;
    await fetch(`${auth.base}/drona/persona`, {
      method: 'POST',
      headers: { Authorization: `Bearer ${auth.token}`, 'Content-Type': 'application/json' },
      body: JSON.stringify(change),
    });
  } catch {
    // The local cache still holds the choice; the next class start writes
    // it through server-side anyway.
  }
}

/** Pulls the canonical choice and refreshes the local cache from it — except
 *  for any field the student has chosen since the pull began (see `chosen`),
 *  which comes back null so the screen leaves it alone too. */
export async function pullPersona(): Promise<{ teacher: TeacherId | null; language: LanguageId | null } | null> {
  const asked = { ...chosen };
  try {
    const auth = await authed();
    if (!auth) return null;
    const res = await fetch(`${auth.base}/drona/persona`, {
      headers: { Authorization: `Bearer ${auth.token}` },
    });
    if (!res.ok) return null;
    const body = await res.json();
    const teacher =
      chosen.teacher === asked.teacher && (body.teacher === 'drona' || body.teacher === 'vedha')
        ? body.teacher
        : null;
    const language =
      chosen.language === asked.language &&
      (body.language === 'english' || body.language === 'hinglish')
        ? body.language
        : null;
    if (teacher) await setTeacherPreference(teacher);
    if (language) await setLanguagePreference(language);
    // Checked again after the writes: a tap during them has written its own
    // choice after this one, and the screen must show that tap, not this.
    return {
      teacher: chosen.teacher === asked.teacher ? teacher : null,
      language: chosen.language === asked.language ? language : null,
    };
  } catch {
    return null;
  }
}
