/**
 * lib/play-billing.ts with `expo-iap` mocked: nothing here talks to Google. What is
 * pinned is the contract with the API and with Google's flow - connect with user
 * choice billing, the four product ids, the account hash, one answer per student
 * pick, and "finish a purchase only after the server confirmed it".
 */
import { createHash as mockCreateHash } from 'crypto';
import { Platform } from 'react-native';

const createHash = mockCreateHash;

jest.mock('@/lib/supabase', () => ({
  supabase: { auth: { getSession: () => Promise.resolve({ data: { session: { user: { id: 'User-ABC-123' } } } }) } },
}));
jest.mock('@/lib/api', () => ({
  apiFetch: jest.fn(),
  ApiError: class ApiError extends Error {
    status = 0;
  },
}));
jest.mock('expo-crypto', () => ({
  CryptoDigestAlgorithm: { SHA256: 'SHA-256' },
  digestStringAsync: async (_algo: string, text: string) => mockCreateHash('sha256').update(text).digest('hex'),
}));

const handlers: { purchase?: (p: unknown) => void; choice?: (d: unknown) => void; error?: (e: unknown) => void } = {};
const removed = jest.fn();
const mockIap = {
  initConnection: jest.fn(),
  fetchProducts: jest.fn(),
  requestPurchase: jest.fn(),
  finishTransaction: jest.fn(),
  getAvailablePurchases: jest.fn(),
  purchaseUpdatedListener: jest.fn(),
  userChoiceBillingListenerAndroid: jest.fn(),
  purchaseErrorListener: jest.fn(),
};
jest.mock('expo-iap', () => mockIap);

const ALL_FOUR = ['pass_day', 'pass_week', 'pass_pro_1m', 'pass_max_1m'].map((id) => ({ id, price: 499, productStatusAndroid: 'ok' }));
const tick = () => new Promise((r) => setTimeout(r, 0));

type Billing = typeof import('@/lib/play-billing');
let b: Billing;
let apiFetch: jest.Mock;
const realOS = Platform.OS;

beforeEach(() => {
  jest.resetModules();
  Object.values(mockIap).forEach((f) => f.mockReset());
  removed.mockReset();
  for (const k of Object.keys(handlers)) delete handlers[k as keyof typeof handlers];
  (Platform as { OS: string }).OS = 'android';
  mockIap.initConnection.mockResolvedValue(true);
  mockIap.fetchProducts.mockResolvedValue(ALL_FOUR);
  mockIap.finishTransaction.mockResolvedValue(undefined);
  mockIap.getAvailablePurchases.mockResolvedValue([]);
  mockIap.purchaseUpdatedListener.mockImplementation((cb) => ((handlers.purchase = cb), { remove: removed }));
  mockIap.userChoiceBillingListenerAndroid.mockImplementation((cb) => ((handlers.choice = cb), { remove: removed }));
  mockIap.purchaseErrorListener.mockImplementation((cb) => ((handlers.error = cb), { remove: removed }));
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  b = require('@/lib/play-billing');
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  apiFetch = require('@/lib/api').apiFetch;
});
afterAll(() => {
  (Platform as { OS: string }).OS = realOS;
});

/** Google's screen answers shortly after it opens. */
const answerWith = (fn: () => void) => mockIap.requestPurchase.mockImplementation(async () => void setTimeout(fn, 0));
const PURCHASE = { productId: 'pass_pro_1m', purchaseToken: 'tok_1', purchaseState: 'purchased' };

describe('products and accounts', () => {
  test('one Play product per pass on sale, and none for the legacy kinds', () => {
    expect(b.PLAY_PRODUCT_IDS).toEqual({ day: 'pass_day', week: 'pass_week', pro_1m: 'pass_pro_1m', max_1m: 'pass_max_1m' });
    expect(b.playProductId('3m')).toBeNull();
    expect(b.PLAY_SKUS.sort()).toEqual(['pass_day', 'pass_max_1m', 'pass_pro_1m', 'pass_week']);
  });

  test('the account id is the lowercase hex SHA-256 of the user id: stable, 64 characters', async () => {
    const want = createHash('sha256').update('user-abc-123').digest('hex');
    expect(await b.obfuscatedAccountIdFor('User-ABC-123')).toBe(want);
    expect(await b.currentPlayAccountId()).toBe(want);
    expect(want).toHaveLength(64);
  });

  test('connects once with user choice billing on, then reads the four products once', async () => {
    await b.loadPlayProducts();
    await b.loadPlayProducts();
    expect(mockIap.initConnection).toHaveBeenCalledTimes(1);
    expect(mockIap.initConnection).toHaveBeenCalledWith({ enableBillingProgramAndroid: 'user-choice-billing' });
    expect(mockIap.fetchProducts).toHaveBeenCalledTimes(1);
    expect(mockIap.fetchProducts).toHaveBeenCalledWith({ skus: expect.arrayContaining(b.PLAY_SKUS), type: 'in-app' });
  });

  test('a failed connection is forgotten, so the next tap tries again', async () => {
    mockIap.initConnection.mockRejectedValueOnce(new Error('no play'));
    await expect(b.loadPlayProducts()).rejects.toBeInstanceOf(b.PlayBillingUnavailableError);
    await expect(b.loadPlayProducts()).resolves.toBeDefined();
    expect(mockIap.initConnection).toHaveBeenCalledTimes(2);
  });

  test('the Play price, in paise', async () => {
    mockIap.fetchProducts.mockResolvedValue([{ id: 'pass_day', price: 7, productStatusAndroid: 'ok' }]);
    expect(await b.playPricePaise('day')).toBe(700);
    expect(await b.playPricePaise('week')).toBeNull();
  });
});

describe('chooseHowToPay: Google picks which way', () => {
  test('asks Google for the one product, with the account id, in-app', async () => {
    answerWith(() => handlers.purchase?.(PURCHASE));
    await b.chooseHowToPay('pro_1m', 'hash64');
    expect(mockIap.requestPurchase).toHaveBeenCalledWith({
      type: 'in-app',
      request: { google: { skus: ['pass_pro_1m'], obfuscatedAccountId: 'hash64' } },
    });
  });

  test('Google Play: the purchase comes back, and the listeners are removed', async () => {
    answerWith(() => handlers.purchase?.(PURCHASE));
    const r = await b.chooseHowToPay('pro_1m', 'h');
    expect(r).toEqual({ type: 'play', purchase: PURCHASE });
    expect(removed).toHaveBeenCalledTimes(3);
    expect(b.playChoiceOpen()).toBe(false);
  });

  test('the other option: the external transaction token comes back, and no purchase is verified', async () => {
    answerWith(() => handlers.choice?.({ externalTransactionToken: 'ext_tok', products: ['pass_pro_1m'] }));
    const r = await b.chooseHowToPay('pro_1m', 'h');
    expect(r).toEqual({ type: 'razorpay', externalTransactionToken: 'ext_tok' });
    expect(apiFetch).not.toHaveBeenCalled();
  });

  test('closing Google\'s screen is a cancel, in either spelling of the code', async () => {
    for (const code of ['user-cancelled', 'E_USER_CANCELLED']) {
      answerWith(() => handlers.error?.({ code, message: 'x' }));
      expect(await b.chooseHowToPay('day', 'h')).toEqual({ type: 'cancelled' });
    }
  });

  test('any other Google error is a failure that says nothing was charged', async () => {
    answerWith(() => handlers.error?.({ code: 'service-error', message: 'boom' }));
    const r = await b.chooseHowToPay('day', 'h');
    expect(r.type).toBe('failed');
    expect((r as { message: string }).message).toContain('Nothing was charged');
  });

  test('a purchase Google is holding (pending) is its own answer, never a grant', async () => {
    answerWith(() => handlers.purchase?.({ ...PURCHASE, purchaseState: 'pending' }));
    expect(await b.chooseHowToPay('pro_1m', 'h')).toEqual({ type: 'pending' });
  });

  test('a purchase of some other product is not this one: it is ignored', async () => {
    answerWith(() => {
      handlers.purchase?.({ ...PURCHASE, productId: 'pass_day' });
      handlers.choice?.({ externalTransactionToken: 'ext_tok', products: ['pass_pro_1m'] });
    });
    expect((await b.chooseHowToPay('pro_1m', 'h')).type).toBe('razorpay');
  });

  test('a product Google does not have stops before any screen opens', async () => {
    mockIap.fetchProducts.mockResolvedValue([{ id: 'pass_day', price: 7, productStatusAndroid: 'ok' }]);
    await expect(b.chooseHowToPay('pro_1m', 'h')).rejects.toBeInstanceOf(b.PlayBillingUnavailableError);
    expect(mockIap.requestPurchase).not.toHaveBeenCalled();
  });

  test('a pass that is not sold on Play (a legacy kind) stops before any screen opens', async () => {
    await expect(b.chooseHowToPay('3m', 'h')).rejects.toBeInstanceOf(b.PlayBillingUnavailableError);
    expect(mockIap.requestPurchase).not.toHaveBeenCalled();
  });

  test('the screen going away closes the wait as a cancel', async () => {
    mockIap.requestPurchase.mockResolvedValue(undefined);
    const waiting = b.chooseHowToPay('day', 'h');
    await tick();
    await tick();
    expect(b.playChoiceOpen()).toBe(true);
    b.cancelPlayChoice();
    expect(await waiting).toEqual({ type: 'cancelled' });
    expect(removed).toHaveBeenCalledTimes(3);
  });

  test('Play\'s service had dropped: connects again and asks once more', async () => {
    mockIap.requestPurchase
      .mockRejectedValueOnce({ code: 'service-disconnected' })
      .mockImplementationOnce(async () => void setTimeout(() => handlers.purchase?.(PURCHASE), 0));
    const r = await b.chooseHowToPay('pro_1m', 'h');
    expect(r.type).toBe('play');
    expect(mockIap.initConnection).toHaveBeenCalledTimes(2);
  });
});

describe('verifying and finishing', () => {
  test('the server gets the product id and the purchase token, nothing else', async () => {
    apiFetch.mockResolvedValue({ ok: true, state: 'active' });
    await b.verifyPlayPurchase(PURCHASE as never);
    const [path, init] = apiFetch.mock.calls[0];
    expect(path).toBe('/payments/play/verify');
    expect(init.method).toBe('POST');
    expect(JSON.parse(init.body)).toEqual({ product_id: 'pass_pro_1m', purchase_token: 'tok_1' });
  });

  test('finishing consumes the purchase, and an "already consumed" error is swallowed', async () => {
    await b.finishPlayPurchase(PURCHASE as never);
    expect(mockIap.finishTransaction).toHaveBeenCalledWith({ purchase: PURCHASE, isConsumable: true });
    mockIap.finishTransaction.mockRejectedValue(new Error('item not owned'));
    await expect(b.finishPlayPurchase(PURCHASE as never)).resolves.toBeUndefined();
  });
});

describe('confirmPlayPurchase: the API\'s status codes', () => {
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const err = (status: number, message: string) => Object.assign(new (require('@/lib/api').ApiError)(message), { status });

  test('200 ok is granted', async () => {
    apiFetch.mockResolvedValue({ ok: true, state: 'active' });
    expect(await b.confirmPlayPurchase(PURCHASE as never, 3, 1)).toEqual({ outcome: 'granted' });
  });

  test('409 "still pending" is pending, not a failure', async () => {
    apiFetch.mockRejectedValue(err(409, 'This purchase is still pending.'));
    expect(await b.confirmPlayPurchase(PURCHASE as never, 3, 1)).toEqual({ outcome: 'pending' });
    expect(apiFetch).toHaveBeenCalledTimes(1);
  });

  test('409 "already used your day pass" is refused with the server\'s own sentence, once', async () => {
    apiFetch.mockRejectedValue(err(409, 'You have already used your day pass. Google will refund this.'));
    expect(await b.confirmPlayPurchase(PURCHASE as never, 3, 1)).toEqual({
      outcome: 'refused',
      message: 'You have already used your day pass. Google will refund this.',
    });
    expect(apiFetch).toHaveBeenCalledTimes(1);
  });

  test('400 and 403 are refused', async () => {
    for (const status of [400, 403]) {
      apiFetch.mockRejectedValueOnce(err(status, 'no'));
      expect((await b.confirmPlayPurchase(PURCHASE as never, 3, 1)).outcome).toBe('refused');
    }
  });

  test('502 (Google unreachable) is retried, and a later 200 grants', async () => {
    apiFetch.mockRejectedValueOnce(err(502, 'Google unreachable')).mockRejectedValueOnce(new Error('offline')).mockResolvedValue({ ok: true, state: 'active' });
    expect(await b.confirmPlayPurchase(PURCHASE as never, 3, 1)).toEqual({ outcome: 'granted' });
    expect(apiFetch).toHaveBeenCalledTimes(3);
  });

  test('502 every time is unknown, never refused; 503 (flag off) is unknown at once', async () => {
    apiFetch.mockRejectedValue(err(502, 'Google unreachable'));
    expect(await b.confirmPlayPurchase(PURCHASE as never, 3, 1)).toEqual({ outcome: 'unknown' });
    expect(apiFetch).toHaveBeenCalledTimes(3);
    apiFetch.mockReset();
    apiFetch.mockRejectedValue(err(503, 'off'));
    expect(await b.confirmPlayPurchase(PURCHASE as never, 3, 1)).toEqual({ outcome: 'unknown' });
    expect(apiFetch).toHaveBeenCalledTimes(1);
  });
});

describe('recoverPlayPurchases: paid, then never confirmed', () => {
  const held = (over: object = {}) => ({ productId: 'pass_day', purchaseToken: 't', purchaseState: 'purchased', ...over });

  test('verifies each purchase of ours and finishes only the ones the server accepted', async () => {
    const a = held({ purchaseToken: 'a' });
    const bad = held({ purchaseToken: 'bad', productId: 'pass_week' });
    mockIap.getAvailablePurchases.mockResolvedValue([a, bad]);
    apiFetch.mockImplementation(async (_p: string, init: { body: string }) => ({ ok: JSON.parse(init.body).purchase_token === 'a', state: 'x' }));
    expect(await b.recoverPlayPurchases()).toEqual(['pass_day']);
    expect(mockIap.finishTransaction).toHaveBeenCalledTimes(1);
    expect(mockIap.finishTransaction).toHaveBeenCalledWith({ purchase: a, isConsumable: true });
  });

  test('never finishes a purchase when the server could not be reached', async () => {
    mockIap.getAvailablePurchases.mockResolvedValue([held()]);
    apiFetch.mockRejectedValue(new Error('offline'));
    expect(await b.recoverPlayPurchases()).toEqual([]);
    expect(mockIap.finishTransaction).not.toHaveBeenCalled();
  });

  test('leaves other apps\' products, pending purchases and token-less ones alone', async () => {
    mockIap.getAvailablePurchases.mockResolvedValue([
      held({ productId: 'something_else' }),
      held({ purchaseState: 'pending' }),
      held({ purchaseToken: null }),
    ]);
    expect(await b.recoverPlayPurchases()).toEqual([]);
    expect(apiFetch).not.toHaveBeenCalled();
  });

  test('never throws, even if Play is not there', async () => {
    mockIap.initConnection.mockRejectedValue(new Error('no play'));
    await expect(b.recoverPlayPurchases()).resolves.toEqual([]);
  });

  test('does nothing on iPhone', async () => {
    (Platform as { OS: string }).OS = 'ios';
    expect(await b.recoverPlayPurchases()).toEqual([]);
    expect(mockIap.initConnection).not.toHaveBeenCalled();
  });
});

describe('recovery: one run at a time, spaced out, only our own account', () => {
  const held = (over: object = {}) => ({ productId: 'pass_day', purchaseToken: 't', purchaseState: 'purchased', ...over });
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const err = (status: number, message: string) => Object.assign(new (require('@/lib/api').ApiError)(message), { status });

  test('two callers at once share one run: one Google read, one verify, one finish', async () => {
    mockIap.getAvailablePurchases.mockResolvedValue([held()]);
    apiFetch.mockResolvedValue({ ok: true, state: 'active' });
    const [x, y] = await Promise.all([b.recoverPlayPurchases(), b.recoverPlayPurchases()]);
    expect(x).toEqual(['pass_day']);
    expect(y).toEqual(['pass_day']);
    expect(mockIap.getAvailablePurchases).toHaveBeenCalledTimes(1);
    expect(apiFetch).toHaveBeenCalledTimes(1);
    expect(mockIap.finishTransaction).toHaveBeenCalledTimes(1);
  });

  test('a later call after the run is over starts a new run', async () => {
    await b.recoverPlayPurchases();
    await b.recoverPlayPurchases();
    expect(mockIap.getAvailablePurchases).toHaveBeenCalledTimes(2);
  });

  test('a purchase made under another account is not sent to the server', async () => {
    const mine = await b.currentPlayAccountId();
    mockIap.getAvailablePurchases.mockResolvedValue([
      held({ purchaseToken: 'other', obfuscatedAccountIdAndroid: 'someone-elses-hash' }),
      held({ purchaseToken: 'mine', obfuscatedAccountIdAndroid: mine }),
    ]);
    apiFetch.mockResolvedValue({ ok: true, state: 'active' });
    expect(await b.recoverPlayPurchases()).toEqual(['pass_day']);
    expect(apiFetch).toHaveBeenCalledTimes(1);
    expect(JSON.parse(apiFetch.mock.calls[0][1].body).purchase_token).toBe('mine');
  });

  test('a refused token is never sent again; a pending one is retried only after the gap', async () => {
    jest.useFakeTimers({ doNotFake: ['setImmediate', 'nextTick', 'queueMicrotask'] });
    try {
      mockIap.getAvailablePurchases.mockResolvedValue([
        held({ purchaseToken: 'refused' }),
        held({ purchaseToken: 'slow', productId: 'pass_week' }),
      ]);
      apiFetch.mockImplementation(async (_p: string, init: { body: string }) => {
        throw JSON.parse(init.body).purchase_token === 'refused' ? err(409, 'You have already used your day pass.') : err(409, 'still pending');
      });
      await b.recoverPlayPurchases();
      expect(apiFetch).toHaveBeenCalledTimes(2);
      await b.recoverPlayPurchases(); // inside the gap: nothing is sent
      expect(apiFetch).toHaveBeenCalledTimes(2);
      jest.advanceTimersByTime(b.RECOVER_RETRY_GAP_MS + 1);
      await b.recoverPlayPurchases(); // pending again, refused never
      expect(apiFetch).toHaveBeenCalledTimes(3);
      expect(JSON.parse(apiFetch.mock.calls[2][1].body).purchase_token).toBe('slow');
    } finally {
      jest.useRealTimers();
    }
  });

  test('it keeps out of the way while a checkout is running', async () => {
    b.markPlayCheckout(true);
    expect(await b.recoverPlayPurchases()).toEqual([]);
    expect(mockIap.getAvailablePurchases).not.toHaveBeenCalled();
    b.markPlayCheckout(false);
  });

  test('product ids map back to pass kinds', () => {
    expect(b.kindOfPlayProduct('pass_pro_1m')).toBe('pro_1m');
    expect(b.kindOfPlayProduct('nope')).toBeNull();
  });
});

describe('a listener that throws while Google\'s screen is being set up', () => {
  test('nothing stays "open": the flag, the other listeners and recovery are all released', async () => {
    mockIap.userChoiceBillingListenerAndroid.mockImplementation(() => {
      throw new Error('native module missing');
    });
    await expect(b.chooseHowToPay('pro_1m', 'h')).rejects.toBeInstanceOf(b.PlayBillingUnavailableError);
    expect(b.playChoiceOpen()).toBe(false);
    expect(removed).toHaveBeenCalledTimes(1); // the purchase listener that did attach
    expect(mockIap.requestPurchase).not.toHaveBeenCalled();
    mockIap.getAvailablePurchases.mockResolvedValue([]);
    await b.recoverPlayPurchases();
    expect(mockIap.getAvailablePurchases).toHaveBeenCalled();
  });

  test('a screen left open for good ends as a cancel after the timeout', async () => {
    jest.useFakeTimers({ doNotFake: ['setImmediate', 'nextTick', 'queueMicrotask'] });
    try {
      mockIap.requestPurchase.mockResolvedValue(undefined);
      const waiting = b.chooseHowToPay('day', 'h');
      await jest.advanceTimersByTimeAsync(10);
      expect(b.playChoiceOpen()).toBe(true);
      await jest.advanceTimersByTimeAsync(b.CHOICE_TIMEOUT_MS + 1);
      expect(await waiting).toEqual({ type: 'cancelled' });
      expect(b.playChoiceOpen()).toBe(false);
    } finally {
      jest.useRealTimers();
    }
  });
});

describe('the promo line', () => {
  test('says a partial code counts only on Razorpay and what Google Play charges', () => {
    const line = b.promoPlayNote('WELCOME', 100, 499);
    expect(line).toContain('WELCOME');
    expect(line).toContain('₹100');
    expect(line).toContain('only when you choose Razorpay');
    expect(line).toContain('Google Play charges the full ₹499');
  });
});

describe('the order carries Google\'s token', () => {
  test('createOrder sends external_transaction_token only when there is one', async () => {
    jest.resetModules();
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const { createOrder } = require('@/lib/payments');
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    const api = require('@/lib/api').apiFetch as jest.Mock;
    api.mockResolvedValue({});
    await createOrder('pro_1m', undefined, 'WELCOME', 'ext_tok');
    expect(JSON.parse(api.mock.calls[0][1].body)).toEqual({ kind: 'pro_1m', promo: 'WELCOME', external_transaction_token: 'ext_tok' });
    await createOrder('pro_1m');
    expect(JSON.parse(api.mock.calls[1][1].body)).toEqual({ kind: 'pro_1m' });
  });
});
