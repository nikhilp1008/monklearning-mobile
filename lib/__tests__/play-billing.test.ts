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

/** The day and week passes: subscriptions with ONE PREPAID base plan each (one payment, never renews). */
const PREPAID = [
  { id: 'day_pass', base: 'day', price: 7 },
  { id: 'week_pass', base: 'week', price: 39 },
].map(({ id, base, price }) => ({
  id,
  price: null,
  productStatusAndroid: 'ok',
  subscriptionOffers: [{ basePlanIdAndroid: base, offerTokenAndroid: `offer_${id}`, price }],
}));
const SUBSCRIPTIONS = ['pro_monthly', 'max_monthly'].map((id) => ({
  id,
  price: null,
  productStatusAndroid: 'ok',
  subscriptionOffers: [{ basePlanIdAndroid: 'monthly', offerTokenAndroid: `offer_${id}`, price: id === 'pro_monthly' ? 499 : 899 }],
}));
const ALL_FOUR = [...PREPAID, ...SUBSCRIPTIONS];
/** What Google returns per call: one-time products for 'in-app' (none today), every subscription for 'subs'. */
const stockProducts = (list: unknown[] = ALL_FOUR) =>
  mockIap.fetchProducts.mockImplementation(async ({ type }: { type: string }) =>
    (list as { subscriptionOffers?: unknown }[]).filter((p) => (type === 'subs') === ('subscriptionOffers' in p))
  );
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
  // These tests are about Razorpay beside Google Play; "Google Play only" has its own block below.
  process.env.EXPO_PUBLIC_RAZORPAY_CHOICE = '1';
  mockIap.initConnection.mockResolvedValue(true);
  stockProducts();
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
const PURCHASE = { productId: 'pro_monthly', purchaseToken: 'tok_1', purchaseState: 'purchased' };

describe('products and accounts', () => {
  test('one Play product per pass on sale, and none for the legacy kinds', () => {
    expect(b.PLAY_PRODUCT_IDS).toEqual({ day: 'day_pass', week: 'week_pass', pro_1m: 'pro_monthly', max_1m: 'max_monthly' });
    expect(b.playProductId('3m')).toBeNull();
    expect([...b.PLAY_SKUS].sort()).toEqual(['day_pass', 'max_monthly', 'pro_monthly', 'week_pass']);
    // Every pass is a subscription product: Pro and Max monthly, the day and 7-day passes prepaid.
    expect(b.PLAY_SUBSCRIPTION_IDS).toEqual(['pro_monthly', 'max_monthly', 'day_pass', 'week_pass']);
    expect(b.isPlaySubscription('pro_monthly')).toBe(true);
    expect(b.isPlaySubscription('day_pass')).toBe(true);
    expect(b.isPlaySubscription('pass_day')).toBe(false);
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
    // One read: every pass is a subscription now, and Google is never asked for an empty in-app list.
    expect(mockIap.fetchProducts).toHaveBeenCalledTimes(1);
    expect(mockIap.fetchProducts).toHaveBeenCalledWith({ skus: ['day_pass', 'week_pass', 'pro_monthly', 'max_monthly'], type: 'subs' });
  });

  test('a subscription is present only with an offer token on the monthly base plan, and carries its price', async () => {
    const products = await b.loadPlayProducts();
    expect(products.get('pro_monthly')).toEqual({ price: 499, offerToken: 'offer_pro_monthly' });
    expect(products.get('max_monthly')).toEqual({ price: 899, offerToken: 'offer_max_monthly' });
    expect(products.get('day_pass')).toEqual({ price: 7, offerToken: 'offer_day_pass' });
    expect(products.get('week_pass')).toEqual({ price: 39, offerToken: 'offer_week_pass' });
  });

  test('a subscription with no offer token is absent: there is nothing to buy', async () => {
    stockProducts([PREPAID[0], { id: 'pro_monthly', productStatusAndroid: 'ok', subscriptionOffers: [{ basePlanIdAndroid: 'monthly', price: 499 }] }]);
    const products = await b.loadPlayProducts();
    expect(products.has('pro_monthly')).toBe(false);
    expect(products.has('day_pass')).toBe(true);
  });

  test('a prepaid plan is taken whatever its base plan is called', async () => {
    stockProducts([{ id: 'day_pass', productStatusAndroid: 'ok', subscriptionOffers: [{ basePlanIdAndroid: 'prepaid-1d', offerTokenAndroid: 'tok_d', price: 7 }] }]);
    const products = await b.loadPlayProducts();
    expect(products.get('day_pass')).toEqual({ price: 7, offerToken: 'tok_d' });
  });

  test('subscriptions failing to load is no products at all, never a throw', async () => {
    mockIap.fetchProducts.mockImplementation(async () => {
      throw new Error('no subs');
    });
    const products = await b.loadPlayProducts();
    expect(products.size).toBe(0);
  });

  test('a failed connection is forgotten, so the next tap tries again', async () => {
    mockIap.initConnection.mockRejectedValueOnce(new Error('no play'));
    await expect(b.loadPlayProducts()).rejects.toBeInstanceOf(b.PlayBillingUnavailableError);
    await expect(b.loadPlayProducts()).resolves.toBeDefined();
    expect(mockIap.initConnection).toHaveBeenCalledTimes(2);
  });

  test('the Play price, in paise', async () => {
    stockProducts([PREPAID[0]]);
    expect(await b.playPricePaise('day')).toBe(700);
    expect(await b.playPricePaise('week')).toBeNull();
  });
});

describe('chooseHowToPay: the screen opening and its outcome are noted for the admin', () => {
  // Each test reloads the modules (above), so the tap module is taken from the same registry `b` came from.
  let setTapSink: (fn: ((name: string, props?: unknown) => void) | null) => void;
  const seen: Array<[string, unknown]> = [];
  beforeEach(() => {
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    setTapSink = require('@/lib/tap').setTapSink;
    seen.length = 0;
    setTapSink((name: string, props?: unknown) => { seen.push([name, props]); });
  });
  afterEach(() => setTapSink(null));

  test('a purchase is noted as opened, then as play', async () => {
    answerWith(() => handlers.purchase?.(PURCHASE));
    await b.chooseHowToPay('pro_1m', 'h');
    expect(seen).toEqual([['play_screen_opened', { kind: 'pro_1m' }], ['play_screen_result', { kind: 'pro_1m', result: 'play' }]]);
  });

  test('backing out of Google\'s screen is noted as cancelled, the trace that used to be missing', async () => {
    answerWith(() => handlers.error?.({ code: 'user-cancelled', message: 'x' }));
    expect(await b.chooseHowToPay('day', 'h')).toEqual({ type: 'cancelled' });
    expect(seen.map(([n, p]) => [n, (p as { result?: string }).result])).toEqual([['play_screen_opened', undefined], ['play_screen_result', 'cancelled']]);
  });

  test('choosing Razorpay on Google\'s screen is noted as razorpay', async () => {
    answerWith(() => handlers.choice?.({ externalTransactionToken: 'ext_tok', products: ['pro_monthly'] }));
    await b.chooseHowToPay('pro_1m', 'h');
    expect(seen[1]).toEqual(['play_screen_result', { kind: 'pro_1m', result: 'razorpay' }]);
  });

  test('a pass Google cannot sell is noted as unavailable, and the error still reaches the screen', async () => {
    stockProducts([PREPAID[0], { id: 'max_monthly', productStatusAndroid: 'ok', subscriptionOffers: [] }]);
    await expect(b.chooseHowToPay('max_1m', 'h')).rejects.toBeInstanceOf(b.PlayBillingUnavailableError);
    expect(seen).toEqual([['play_screen_opened', { kind: 'max_1m' }], ['play_screen_result', { kind: 'max_1m', result: 'unavailable' }]]);
  });

  test('a tracker that throws cannot change what the student gets', async () => {
    setTapSink(() => { throw new Error('tracker down'); });
    answerWith(() => handlers.purchase?.(PURCHASE));
    expect(await b.chooseHowToPay('pro_1m', 'h')).toEqual({ type: 'play', purchase: PURCHASE });
  });
});

describe('chooseHowToPay: Google picks which way', () => {
  test('Pro is bought as a SUBSCRIPTION, with its offer token and the account id', async () => {
    answerWith(() => handlers.purchase?.(PURCHASE));
    await b.chooseHowToPay('pro_1m', 'hash64');
    expect(mockIap.requestPurchase).toHaveBeenCalledWith({
      type: 'subs',
      request: {
        google: { skus: ['pro_monthly'], subscriptionOffers: [{ sku: 'pro_monthly', offerToken: 'offer_pro_monthly' }], obfuscatedAccountId: 'hash64' },
      },
    });
  });

  test('the day pass is bought as a SUBSCRIPTION on its prepaid plan, with that offer token', async () => {
    answerWith(() => handlers.purchase?.({ ...PURCHASE, productId: 'day_pass' }));
    await b.chooseHowToPay('day', 'hash64');
    expect(mockIap.requestPurchase).toHaveBeenCalledWith({
      type: 'subs',
      request: { google: { skus: ['day_pass'], subscriptionOffers: [{ sku: 'day_pass', offerToken: 'offer_day_pass' }], obfuscatedAccountId: 'hash64' } },
    });
  });

  test('a subscription with no offer token is refused before Google opens, with nothing charged', async () => {
    stockProducts([PREPAID[0], { id: 'max_monthly', productStatusAndroid: 'ok', subscriptionOffers: [] }]);
    await expect(b.chooseHowToPay('max_1m', 'h')).rejects.toBeInstanceOf(b.PlayBillingUnavailableError);
    expect(mockIap.requestPurchase).not.toHaveBeenCalled();
  });

  test('Google Play: the purchase comes back, and the listeners are removed', async () => {
    answerWith(() => handlers.purchase?.(PURCHASE));
    const r = await b.chooseHowToPay('pro_1m', 'h');
    expect(r).toEqual({ type: 'play', purchase: PURCHASE });
    expect(removed).toHaveBeenCalledTimes(3);
    expect(b.playChoiceOpen()).toBe(false);
  });

  test('the other option: the external transaction token comes back, and no purchase is verified', async () => {
    answerWith(() => handlers.choice?.({ externalTransactionToken: 'ext_tok', products: ['pro_monthly'] }));
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
      handlers.purchase?.({ ...PURCHASE, productId: 'day_pass' });
      handlers.choice?.({ externalTransactionToken: 'ext_tok', products: ['pro_monthly'] });
    });
    expect((await b.chooseHowToPay('pro_1m', 'h')).type).toBe('razorpay');
  });

  test('a product Google does not have stops before any screen opens', async () => {
    stockProducts([PREPAID[0]]);
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
    expect(JSON.parse(init.body)).toEqual({ product_id: 'pro_monthly', purchase_token: 'tok_1' });
  });

  test('finishing the day pass acknowledges it (a prepaid plan), never consumes it, and an error is swallowed', async () => {
    const dayPass = { ...PURCHASE, productId: 'day_pass' };
    await b.finishPlayPurchase(dayPass as never);
    expect(mockIap.finishTransaction).toHaveBeenCalledWith({ purchase: dayPass, isConsumable: false });
    mockIap.finishTransaction.mockRejectedValue(new Error('item not owned'));
    await expect(b.finishPlayPurchase(dayPass as never)).resolves.toBeUndefined();
  });

  test('finishing a SUBSCRIPTION acknowledges it and never consumes it (consuming would end it)', async () => {
    await b.finishPlayPurchase(PURCHASE as never);
    expect(mockIap.finishTransaction).toHaveBeenCalledWith({ purchase: PURCHASE, isConsumable: false });
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
  const held = (over: object = {}) => ({ productId: 'day_pass', purchaseToken: 't', purchaseState: 'purchased', ...over });

  test('verifies each purchase of ours and finishes only the ones the server accepted', async () => {
    const a = held({ purchaseToken: 'a' });
    const bad = held({ purchaseToken: 'bad', productId: 'week_pass' });
    mockIap.getAvailablePurchases.mockResolvedValue([a, bad]);
    apiFetch.mockImplementation(async (_p: string, init: { body: string }) => ({ ok: JSON.parse(init.body).purchase_token === 'a', state: 'x' }));
    expect(await b.recoverPlayPurchases()).toEqual(['day_pass']);
    expect(mockIap.finishTransaction).toHaveBeenCalledTimes(1);
    expect(mockIap.finishTransaction).toHaveBeenCalledWith({ purchase: a, isConsumable: false });
  });

  test('an already-acknowledged subscription is checked (that finds renewals) but not reported as recovered', async () => {
    const sub = held({ productId: 'pro_monthly', purchaseToken: 'sub1', isAcknowledgedAndroid: true });
    mockIap.getAvailablePurchases.mockResolvedValue([sub]);
    apiFetch.mockResolvedValue({ ok: true, state: 'x' });
    expect(await b.recoverPlayPurchases()).toEqual([]);
    expect(apiFetch).toHaveBeenCalledTimes(1);
    expect(mockIap.finishTransaction).toHaveBeenCalledWith({ purchase: sub, isConsumable: false });
  });

  test('a subscription the phone never got to acknowledge IS reported as recovered', async () => {
    const sub = held({ productId: 'max_monthly', purchaseToken: 'sub2', isAcknowledgedAndroid: false });
    mockIap.getAvailablePurchases.mockResolvedValue([sub]);
    apiFetch.mockResolvedValue({ ok: true, state: 'x' });
    expect(await b.recoverPlayPurchases()).toEqual(['max_monthly']);
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
  const held = (over: object = {}) => ({ productId: 'day_pass', purchaseToken: 't', purchaseState: 'purchased', ...over });
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const err = (status: number, message: string) => Object.assign(new (require('@/lib/api').ApiError)(message), { status });

  test('two callers at once share one run: one Google read, one verify, one finish', async () => {
    mockIap.getAvailablePurchases.mockResolvedValue([held()]);
    apiFetch.mockResolvedValue({ ok: true, state: 'active' });
    const [x, y] = await Promise.all([b.recoverPlayPurchases(), b.recoverPlayPurchases()]);
    expect(x).toEqual(['day_pass']);
    expect(y).toEqual(['day_pass']);
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
    expect(await b.recoverPlayPurchases()).toEqual(['day_pass']);
    expect(apiFetch).toHaveBeenCalledTimes(1);
    expect(JSON.parse(apiFetch.mock.calls[0][1].body).purchase_token).toBe('mine');
  });

  test('a refused token is never sent again; a pending one is retried only after the gap', async () => {
    jest.useFakeTimers({ doNotFake: ['setImmediate', 'nextTick', 'queueMicrotask'] });
    try {
      mockIap.getAvailablePurchases.mockResolvedValue([
        held({ purchaseToken: 'refused' }),
        held({ purchaseToken: 'slow', productId: 'week_pass' }),
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
    expect(b.kindOfPlayProduct('pro_monthly')).toBe('pro_1m');
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

describe('Google Play only (Razorpay choice off, the default until Google approves the enrolment)', () => {
  beforeEach(() => {
    delete process.env.EXPO_PUBLIC_RAZORPAY_CHOICE;
  });
  afterAll(() => {
    delete process.env.EXPO_PUBLIC_RAZORPAY_CHOICE;
  });

  test('the switch is off unless EXPO_PUBLIC_RAZORPAY_CHOICE is exactly 1', () => {
    expect(b.razorpayChoiceOn()).toBe(false);
    process.env.EXPO_PUBLIC_RAZORPAY_CHOICE = 'true';
    expect(b.razorpayChoiceOn()).toBe(false);
    process.env.EXPO_PUBLIC_RAZORPAY_CHOICE = '1';
    expect(b.razorpayChoiceOn()).toBe(true);
  });

  test('connects with a plain Play Billing connection: no user choice billing program', async () => {
    await b.loadPlayProducts();
    expect(mockIap.initConnection).toHaveBeenCalledTimes(1);
    expect(mockIap.initConnection).toHaveBeenCalledWith();
  });

  test('never listens for the Razorpay choice, and a Google Play purchase still completes', async () => {
    answerWith(() => handlers.purchase?.(PURCHASE));
    const r = await b.chooseHowToPay('pro_1m', 'h');
    expect(r).toEqual({ type: 'play', purchase: PURCHASE });
    expect(mockIap.userChoiceBillingListenerAndroid).not.toHaveBeenCalled();
    expect(mockIap.purchaseUpdatedListener).toHaveBeenCalledTimes(1);
    expect(mockIap.purchaseErrorListener).toHaveBeenCalledTimes(1);
  });

  test('a missing product is refused before Google opens, with nothing charged', async () => {
    stockProducts([]);
    await expect(b.chooseHowToPay('pro_1m', 'h')).rejects.toThrow(/not available on Google Play yet.*Nothing was charged/);
    expect(mockIap.requestPurchase).not.toHaveBeenCalled();
  });

  test('the promo line says a partial code cannot be used with Google Play', () => {
    const line = b.promoPlayNote('WELCOME', 100, 499);
    expect(line).toContain('WELCOME');
    expect(line).toContain('cannot be used when paying with Google Play');
    expect(line).toContain('full ₹499');
    expect(line).not.toContain('Razorpay');
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
