import { supabase } from '@/lib/supabase';

export class ApiError extends Error {
  status: number;
  data: unknown;

  constructor(message: string, status: number, data?: unknown) {
    super(message);
    this.name = 'ApiError';
    this.status = status;
    this.data = data;
  }
}

/**
 * Thin fetch wrapper matching monk-learning-webpage's lib/api.ts contract —
 * same base URL env pattern, same Bearer-token-from-Supabase-session
 * approach, same ApiError shape, so both clients hit the API the same way.
 */
export async function apiFetch<T>(endpoint: string, options: RequestInit = {}): Promise<T> {
  const baseUrl = process.env.EXPO_PUBLIC_API_URL;
  if (!baseUrl) {
    throw new ApiError('The app isn’t configured to reach the server yet.', 0);
  }

  const {
    data: { session },
  } = await supabase.auth.getSession();
  const token = session?.access_token;

  if (!token) {
    throw new ApiError('No authentication session found', 401);
  }

  const headers = new Headers(options.headers || {});
  const isFormData = typeof FormData !== 'undefined' && options.body instanceof FormData;
  if (!headers.has('Content-Type') && options.body && !isFormData) {
    headers.set('Content-Type', 'application/json');
  }
  headers.set('Authorization', `Bearer ${token}`);

  const url = `${baseUrl.replace(/\/$/, '')}${endpoint.startsWith('/') ? endpoint : `/${endpoint}`}`;

  // A hard client-side ceiling so a stalled connection can't hang a spinner
  // forever — 60s comfortably covers the slowest known real call (doubt
  // solving, ~25s) with room to spare, well below anything a student would
  // wait through anyway. Infra (Railway/Cloudflare) usually times out first
  // with the HTML page handled above; this is the backstop for when it doesn't.
  const timeoutController = new AbortController();
  const timeoutId = setTimeout(() => timeoutController.abort(), 60000);

  let res: Response;
  try {
    res = await fetch(url, { ...options, headers, signal: timeoutController.signal });
  } catch (err) {
    if (err instanceof Error && err.name === 'AbortError') {
      throw new ApiError('This is taking longer than expected — check your connection and try again.', 0);
    }
    throw err;
  } finally {
    clearTimeout(timeoutId);
  }

  const contentType = res.headers.get('content-type');
  const isJson = !!contentType && contentType.includes('application/json');
  const responseData: unknown = isJson ? await res.json() : await res.text();

  if (!res.ok) {
    // A non-JSON body on an error response is almost always an infra page
    // (Railway/Cloudflare gateway timeout HTML, e.g. on the ~25s doubt-solve
    // upload) rather than anything meant for a student to read — never surface
    // it verbatim. The raw text still rides along on `.data` for debugging.
    const errorMsg =
      isJson && typeof responseData === 'object' && responseData !== null && 'detail' in responseData
        ? String((responseData as { detail: unknown }).detail)
        : `API request failed with status ${res.status}`;
    throw new ApiError(errorMsg, res.status, responseData);
  }

  return responseData as T;
}
