import { useEffect, useState } from 'react';

import { ApiError, apiFetch } from '@/lib/api';
import type { PassKind } from '@/lib/pass';

/**
 * PROMO CODES: THE SERVER PRICES THEM.
 *
 * The app used to know one code ("FIRST100") and compare against it on the
 * phone. That meant the code shipped inside every install, and no discount but
 * "everything free" could exist. Now a code is made in the admin (percent off
 * or a flat amount, for some plans, between two dates, for everyone or for one
 * student) and this file only ASKS:
 *
 *   checkPromo   POST /pass/promo/check  what would this code do on this pass?
 *   fetchOffers  GET  /pass              codes made for THIS student, so they
 *                                        apply without being typed
 *
 * The answer is a quote in paise. The screen shows exactly it, and the order is
 * created from the same rules on the server, so what the student sees is what
 * they are charged. The app never works out a discount itself.
 */

export type Quote = {
  code: string;
  kind: PassKind;
  listPaise: number;
  discountPaise: number;
  finalPaise: number;
  /** The code brings the pass to zero: redeem it, do not open a payment. */
  free: boolean;
};

export type PromoAnswer =
  | { valid: true; quote: Quote }
  /** The server looked and said no; `message` is written for the student. */
  | { valid: false; message: string }
  /** The server could not be asked (no signal). Not a verdict on the code. */
  | { valid: false; message: string; unreachable: true };

type CheckResponse =
  | { valid: false; reason?: string; message: string }
  | {
      valid: true;
      code: string;
      kind: string;
      list_paise: number;
      discount_paise: number;
      final_paise: number;
      free: boolean;
    };

export async function checkPromo(code: string, kind: PassKind): Promise<PromoAnswer> {
  const typed = code.trim();
  if (!typed) return { valid: false, message: 'Enter a code.' };
  try {
    const r = await apiFetch<CheckResponse>('/pass/promo/check', {
      method: 'POST',
      body: JSON.stringify({ code: typed, kind }),
      timeoutMs: 10000,
    });
    if (!r.valid) return { valid: false, message: r.message || 'That code is not valid.' };
    return {
      valid: true,
      quote: {
        code: r.code,
        kind: r.kind as PassKind,
        listPaise: r.list_paise,
        discountPaise: r.discount_paise,
        finalPaise: r.final_paise,
        free: !!r.free,
      },
    };
  } catch (err) {
    if (err instanceof ApiError && err.status === 429) {
      return { valid: false, message: 'Too many tries. Please wait a little and try again.' };
    }
    if (err instanceof ApiError && err.status === 503) {
      return { valid: false, message: 'Promo codes are not available right now.' };
    }
    return { valid: false, message: 'Could not check the code. Check your connection and try again.', unreachable: true };
  }
}

export type Offer = {
  code: string;
  /** Pass kinds the code is good for; null means any. */
  plans: PassKind[] | null;
};

type PassAnswer = {
  offers?: { code?: string; plans?: string[] | null }[];
};

/** Codes made for this student. Never throws: no offers is the safe answer. */
export async function fetchOffers(): Promise<Offer[]> {
  try {
    const r = await apiFetch<PassAnswer>('/pass', { timeoutMs: 10000 });
    return (r.offers ?? [])
      .filter((o): o is { code: string; plans?: string[] | null } => typeof o?.code === 'string' && !!o.code)
      .map((o) => ({ code: o.code, plans: o.plans && o.plans.length ? (o.plans as PassKind[]) : null }));
  } catch {
    return [];
  }
}

/**
 * Whether this student may still have the one-more-week offer (₹249, once,
 * after a pass ends). The SERVER decides — it alone knows whether they have
 * had it, across phones and reinstalls — and says so on `GET /pass` as
 * `winback_available`. Until it does, the offer is not shown: never showing it
 * is safer than showing it twice. Never throws.
 */
export async function fetchOneMoreWeek(): Promise<boolean> {
  try {
    const r = await apiFetch<{ winback_available?: unknown }>('/pass', { timeoutMs: 10000 });
    return r?.winback_available === true;
  } catch {
    return false;
  }
}

/** The student's own code for this pass, if one was made for them. */
export function offerFor(offers: Offer[], kind: PassKind | null): string | null {
  if (!kind) return null;
  return offers.find((o) => !o.plans || o.plans.includes(kind))?.code ?? null;
}

export const rupeesOf = (paise: number) => Math.round(paise) / 100;

export type PromoState = {
  /** The code in force: typed by the student, or made for them. */
  code: string;
  /** True when the student did not type it. */
  auto: boolean;
  /** The server's quote for it on this pass, once known. */
  quote: Quote | null;
  checking: boolean;
};

/**
 * The code in force for a pass, and what the server says it does.
 *
 * A typed code wins over an offer made for the student. A winback pick never
 * takes a code (the server refuses the two together), so callers pass `kind`
 * null for it.
 */
export function usePromo(typed: string, kind: PassKind | null): PromoState {
  const [offers, setOffers] = useState<Offer[]>([]);
  useEffect(() => {
    let live = true;
    fetchOffers().then((o) => {
      if (live) setOffers(o);
    });
    return () => {
      live = false;
    };
  }, []);

  const typedCode = typed.trim().toUpperCase();
  const offered = typedCode ? null : offerFor(offers, kind);
  const code = typedCode || offered || '';

  const [state, setState] = useState<{ key: string; quote: Quote | null }>({ key: '', quote: null });
  const key = code && kind ? `${code}|${kind}` : '';
  useEffect(() => {
    if (!key || !kind) return;
    let live = true;
    checkPromo(code, kind).then((a) => {
      if (live) setState({ key, quote: a.valid ? a.quote : null });
    });
    return () => {
      live = false;
    };
    // `code` and `kind` are what `key` is made of.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [key]);

  // A quote belongs to the pass and code it was asked for; a stale one is not shown.
  const quote = key && state.key === key ? state.quote : null;
  return { code, auto: !!offered, quote, checking: !!key && state.key !== key };
}
