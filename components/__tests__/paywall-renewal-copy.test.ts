/**
 * What the plans page tells a student about renewing and refunds. Pro and Max are monthly Google Play
 * subscriptions on Android, so the copy must say so there, and must never claim "nothing renews" where
 * something does. The Razorpay lines only appear once Razorpay is offered beside Google Play.
 */

let mockPaymentsOn = true;
jest.mock('@/lib/payments', () => ({
  get PAYMENTS_ON_THIS_DEVICE() {
    return mockPaymentsOn;
  },
}));
// The copy files import the app's fonts and colours; they carry no logic of their own.
jest.mock('@/constants/onboarding', () => ({ ob: { ink55: '#000' }, obFont: { r400: 'x' } }));
jest.mock('expo-crypto', () => ({}));
jest.mock('@/lib/api', () => ({ ApiError: class extends Error {}, apiFetch: jest.fn() }));
jest.mock('@/lib/supabase', () => ({ supabase: {} }));

import { payFootnote, subscriptionNote } from '@/components/paywall/subscription-note';
import { refundNote } from '@/components/paywall/refund-note';

afterEach(() => {
  delete process.env.EXPO_PUBLIC_RAZORPAY_CHOICE;
  mockPaymentsOn = true;
});

describe('Google Play only (the default)', () => {
  test('the Pro line gives the price, the monthly renewal and where to cancel', () => {
    const line = subscriptionNote('Pro', 499);
    expect(line).toContain('₹499 a month');
    expect(line).toContain('renews every month until you cancel');
    expect(line).toContain('Google Play');
    expect(line).not.toContain('Razorpay');
  });

  test('the footnote says Pro and Max renew and the starter passes are one payment', () => {
    expect(payFootnote()).toContain('Pro and Max renew every month');
    expect(payFootnote()).toContain('Day and 7-day passes are one payment');
    expect(payFootnote()).not.toContain('Nothing renews');
  });

  test('the refund line is Google Play\'s policy and does not mention a way to pay the student does not have', () => {
    expect(refundNote()).toContain('Google Play');
    expect(refundNote()).not.toContain('Razorpay');
  });
});

describe('Razorpay beside Google Play', () => {
  beforeEach(() => {
    process.env.EXPO_PUBLIC_RAZORPAY_CHOICE = '1';
  });

  test('the Pro line says a Razorpay payment is one month and does not renew', () => {
    const line = subscriptionNote('Max', 899);
    expect(line).toContain('₹899 a month');
    expect(line).toContain('Paid with Razorpay, it is one month and does not renew');
  });

  test('the refund line carries the 75% in 3 days rule', () => {
    expect(refundNote()).toContain('75% back');
    expect(refundNote()).toContain('3 days');
  });
});

describe('where nothing can be paid (iPhone: codes only)', () => {
  test('nothing renews, and the footnote still says so', () => {
    mockPaymentsOn = false;
    expect(payFootnote()).toBe('One payment. Nothing renews on its own.');
  });
});
