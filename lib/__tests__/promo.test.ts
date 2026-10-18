import { readFileSync } from 'fs';
import { join } from 'path';

import { checkPromo, fetchOffers, offerFor, rupeesOf } from '@/lib/promo';
import { createOrder } from '@/lib/payments';

const mockApiFetch = jest.fn();
jest.mock('@/lib/api', () => {
  class ApiError extends Error {
    status: number;
    constructor(message: string, status: number) {
      super(message);
      this.status = status;
    }
  }
  return { apiFetch: (...args: unknown[]) => mockApiFetch(...args), ApiError };
});
// eslint-disable-next-line @typescript-eslint/no-require-imports
const { ApiError } = require('@/lib/api');

const root = (p: string) => readFileSync(join(__dirname, '../..', p), 'utf8');

beforeEach(() => mockApiFetch.mockReset());

describe('a code is priced by the server', () => {
  test('a good code comes back as the server\'s quote, in paise', async () => {
    mockApiFetch.mockResolvedValue({
      valid: true, code: 'MONK50', kind: '3m', list_paise: 499900, discount_paise: 250000,
      final_paise: 249900, free: false,
    });
    const a = await checkPromo(' monk50 ', '3m');
    expect(a).toEqual({
      valid: true,
      quote: { code: 'MONK50', kind: '3m', listPaise: 499900, discountPaise: 250000, finalPaise: 249900, free: false },
    });
    // The code goes up as typed; only the server decides what it is worth.
    expect(JSON.parse(mockApiFetch.mock.calls[0][1].body)).toEqual({ code: 'monk50', kind: '3m' });
    expect(rupeesOf(249900)).toBe(2499);
  });

  test('a refusal carries the server\'s sentence for the student', async () => {
    mockApiFetch.mockResolvedValue({ valid: false, reason: 'expired', message: 'That code has expired.' });
    expect(await checkPromo('OLD', '1m')).toEqual({ valid: false, message: 'That code has expired.' });
  });

  test('a free code is flagged free', async () => {
    mockApiFetch.mockResolvedValue({
      valid: true, code: 'FIRST100', kind: '1m', list_paise: 100, discount_paise: 100, final_paise: 0, free: true,
    });
    const a = await checkPromo('FIRST100', '1m');
    expect(a.valid && a.quote.free).toBe(true);
  });

  test('no signal is not a verdict on the code', async () => {
    mockApiFetch.mockRejectedValue(new Error('Network request failed'));
    const a = await checkPromo('MONK50', '1m');
    expect(a).toMatchObject({ valid: false, unreachable: true });
  });

  test('too many tries says so', async () => {
    mockApiFetch.mockRejectedValue(new ApiError('slow down', 429));
    const a = await checkPromo('X', '1m');
    expect(a.valid).toBe(false);
    expect(!a.valid && a.message).toMatch(/too many tries/i);
  });

  test('an empty box never reaches the server', async () => {
    expect((await checkPromo('   ', '1m')).valid).toBe(false);
    expect(mockApiFetch).not.toHaveBeenCalled();
  });
});

describe('codes made for this student', () => {
  test('are read from GET /pass', async () => {
    mockApiFetch.mockResolvedValue({
      state: 'none',
      offers: [{ code: 'RIYA20', plans: ['3m', '6m'] }, { code: 'ANY', plans: null }],
    });
    const offers = await fetchOffers();
    expect(mockApiFetch.mock.calls[0][0]).toBe('/pass');
    expect(offers).toEqual([{ code: 'RIYA20', plans: ['3m', '6m'] }, { code: 'ANY', plans: null }]);
  });

  test('an offer applies only to the plans it names; one with no plans applies to all', () => {
    const offers = [{ code: 'RIYA20', plans: ['3m', '6m'] as never }, { code: 'ANY', plans: null }];
    expect(offerFor(offers, '3m')).toBe('RIYA20');
    expect(offerFor(offers, '1m')).toBe('ANY');
    expect(offerFor([offers[0]], '1m')).toBeNull();
    expect(offerFor(offers, null)).toBeNull();
  });

  test('a server that cannot be reached means no offers, never an error', async () => {
    mockApiFetch.mockRejectedValue(new Error('offline'));
    expect(await fetchOffers()).toEqual([]);
  });

  test('a server from before offers existed means none', async () => {
    mockApiFetch.mockResolvedValue({ state: 'none' });
    expect(await fetchOffers()).toEqual([]);
  });
});

describe('the order carries the code and never a price', () => {
  test('a promo code rides in the order body', async () => {
    mockApiFetch.mockResolvedValue({});
    await createOrder('3m', undefined, 'MONK50');
    expect(JSON.parse(mockApiFetch.mock.calls[0][1].body)).toEqual({ kind: '3m', promo: 'MONK50' });
  });

  test('the win-back offer never travels with a code (the server refuses the pair)', async () => {
    mockApiFetch.mockResolvedValue({});
    await createOrder('week', 'winback', 'MONK50');
    expect(JSON.parse(mockApiFetch.mock.calls[0][1].body)).toEqual({ kind: 'week', offer: 'winback' });
  });

  test('no code, no promo key', async () => {
    mockApiFetch.mockResolvedValue({});
    await createOrder('1m');
    expect(JSON.parse(mockApiFetch.mock.calls[0][1].body)).toEqual({ kind: '1m' });
  });
});

describe('no code is known to the app', () => {
  test('the hard-coded FIRST100 check is gone from every screen and the constants', () => {
    for (const f of [
      'constants/onboarding.ts',
      'app/plans.tsx',
      'app/plans-promo.tsx',
      'app/(onboarding)/promo.tsx',
      'app/(onboarding)/pass.tsx',
      'app/(onboarding)/pass-active.tsx',
      'components/paywall/screens.tsx',
    ]) {
      const src = root(f);
      expect(src).not.toMatch(/promoDiscount|PROMO_CODE/);
      // A placeholder that names a real code invites every student to type it.
      expect(src).not.toMatch(/FIRST100|MONK50/);
    }
  });

  test('every screen that shows a discount asks the server', () => {
    expect(root('app/plans-promo.tsx')).toMatch(/checkPromo\(/);
    expect(root('app/(onboarding)/promo.tsx')).toMatch(/checkPromo\(/);
    expect(root('app/(onboarding)/pass.tsx')).toMatch(/usePromo\(/);
    expect(root('components/paywall/screens.tsx')).toMatch(/usePromo\(/);
  });

  test('both checkouts send the code to the order and show what was charged', () => {
    expect(root('app/plans.tsx')).toMatch(/promo,\s*expectedPaise,?\s*\}\)/);
    expect(root('app/plans.tsx')).toMatch(/rupeesOf\(result\.amountPaise\)/);
    expect(root('app/(onboarding)/pass.tsx')).toMatch(/promo: quote && !quote\.free \? quote\.code : undefined/);
  });
});
