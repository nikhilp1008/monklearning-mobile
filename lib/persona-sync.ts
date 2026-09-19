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

/** Tells the server the student just chose. Fire and forget. */
export async function pushPersona(change: { teacher?: TeacherId; language?: LanguageId }): Promise<void> {
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

/** Pulls the canonical choice and refreshes the local cache from it. */
export async function pullPersona(): Promise<{ teacher: TeacherId | null; language: LanguageId | null } | null> {
  try {
    const auth = await authed();
    if (!auth) return null;
    const res = await fetch(`${auth.base}/drona/persona`, {
      headers: { Authorization: `Bearer ${auth.token}` },
    });
    if (!res.ok) return null;
    const body = await res.json();
    const teacher = body.teacher === 'drona' || body.teacher === 'vedha' ? body.teacher : null;
    const language = body.language === 'english' || body.language === 'hinglish' ? body.language : null;
    if (teacher) await setTeacherPreference(teacher);
    if (language) await setLanguagePreference(language);
    return { teacher, language };
  } catch {
    return null;
  }
}
