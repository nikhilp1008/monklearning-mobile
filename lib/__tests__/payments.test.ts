import {
  checkoutHtml,
  isAppLink,
  parseCheckoutMessage,
  payErrorMessage,
  webViewMayLoad,
  type Order,
} from '@/lib/payments';

jest.mock('@/lib/api', () => {
  class ApiError extends Error {
    status: number;
    data: unknown;
    constructor(message: string, status: number, data?: unknown) {
      super(message);
      this.status = status;
      this.data = data;
    }
  }
  return { ApiError, apiFetch: jest.fn() };
});

// eslint-disable-next-line @typescript-eslint/no-require-imports
const { ApiError } = require('@/lib/api');

const order: Order = { order_id: 'order_A1', amount: 299900, currency: 'INR', key_id: 'rzp_test_pub', kind: '1m' };
const post = (m: object) => JSON.stringify({ source: 'monk-checkout', ...m });

describe('what the checkout page is allowed to tell the app', () => {
  const success = {
    type: 'success',
    razorpay_order_id: 'order_A1',
    razorpay_payment_id: 'pay_1',
    razorpay_signature: 'abc123',
  };

  test('a success carries all three values and names this order', () => {
    expect(parseCheckoutMessage(post(success), 'order_A1')).toEqual({
      type: 'success',
      razorpay_order_id: 'order_A1',
      razorpay_payment_id: 'pay_1',
      razorpay_signature: 'abc123',
    });
  });

  test('a success for some other order is not this purchase', () => {
    expect(parseCheckoutMessage(post({ ...success, razorpay_order_id: 'order_OTHER' }), 'order_A1')).toBeNull();
  });

  test.each(['razorpay_order_id', 'razorpay_payment_id', 'razorpay_signature'])('a success without %s is nothing', (k) => {
    expect(parseCheckoutMessage(post({ ...success, [k]: '' }), 'order_A1')).toBeNull();
    const rest: Record<string, unknown> = { ...success };
    delete rest[k];
    expect(parseCheckoutMessage(post(rest), 'order_A1')).toBeNull();
  });

  test('a message that is not from our page is ignored', () => {
    expect(parseCheckoutMessage(JSON.stringify(success), 'order_A1')).toBeNull(); // no source
    expect(parseCheckoutMessage(JSON.stringify({ ...success, source: 'someone-else' }), 'order_A1')).toBeNull();
    expect(parseCheckoutMessage('not json', 'order_A1')).toBeNull();
    expect(parseCheckoutMessage(null, 'order_A1')).toBeNull();
    expect(parseCheckoutMessage(post({ type: 'unknown' }), 'order_A1')).toBeNull();
  });

  test('failure, dismissal and a page that could not load', () => {
    expect(parseCheckoutMessage(post({ type: 'failed', description: 'Card declined' }), 'order_A1')).toEqual({
      type: 'failed',
      description: 'Card declined',
    });
    expect(parseCheckoutMessage(post({ type: 'failed' }), 'order_A1')).toEqual({
      type: 'failed',
      description: 'The payment did not go through.',
    });
    expect(parseCheckoutMessage(post({ type: 'dismiss' }), 'order_A1')).toEqual({ type: 'dismiss' });
    expect(parseCheckoutMessage(post({ type: 'error', message: 'offline' }), 'order_A1')).toEqual({
      type: 'error',
      message: 'offline',
    });
  });
});

describe('the checkout page', () => {
  test('opens Razorpay with the order the server made, from Razorpay\'s own script', () => {
    const html = checkoutHtml(order, { description: '1 month pass' });
    expect(html).toContain('<script src="https://checkout.razorpay.com/v1/checkout.js"></script>');
    expect(html).toContain('"order_id":"order_A1"');
    expect(html).toContain('"key":"rzp_test_pub"');
    expect(html).toContain('"amount":299900');
    expect(html).toContain('rzp.open()');
  });

  test('reports success, a decline and a dismissal back to the app', () => {
    const html = checkoutHtml(order, { description: 'x' });
    expect(html).toContain('window.ReactNativeWebView.postMessage');
    expect(html).toContain("type: 'success'");
    expect(html).toContain("rzp.on('payment.failed'");
    expect(html).toContain('ondismiss');
  });

  test('a description cannot break out of the script', () => {
    const html = checkoutHtml(order, { description: '</script><script>alert(1)</script>' });
    expect(html).not.toContain('</script><script>alert(1)');
    expect(html.match(/<\/script>/g)).toHaveLength(2); // Razorpay's, and ours - nothing injected
  });

  test('no secret of any kind is in the page', () => {
    const html = checkoutHtml(order, { description: 'x' });
    expect(html.toLowerCase()).not.toContain('secret');
  });
});

describe('what the WebView may open', () => {
  test.each(['upi://pay?pa=a@b', 'tez://upi/pay', 'phonepe://pay', 'paytmmp://pay', 'gpay://upi/pay',
    'intent://pay#Intent;scheme=upi;end', 'bhim://pay', 'credpay://x'])('%s hands over to the app', (u) => {
    expect(isAppLink(u)).toBe(true);
  });

  test('ordinary pages are not app links', () => {
    expect(isAppLink('https://checkout.razorpay.com/v1/x')).toBe(false);
    expect(isAppLink('https://bank.example/3ds')).toBe(false);
  });

  test('https and the blank page load; nothing else does', () => {
    expect(webViewMayLoad('https://api.razorpay.com/x')).toBe(true);
    expect(webViewMayLoad('about:blank')).toBe(true);
    for (const u of ['http://x.test', 'file:///etc/passwd', 'javascript:alert(1)', 'data:text/html,hi', 'ftp://x']) {
      expect(webViewMayLoad(u)).toBe(false);
    }
  });
});

describe('what a student is told when buying could not start', () => {
  test("the server's own sentence for a refusal", () => {
    expect(payErrorMessage(new ApiError('You have already used a promo code.', 409))).toBe(
      'You have already used a promo code.'
    );
    expect(payErrorMessage(new ApiError('That code is not valid.', 404))).toBe('That code is not valid.');
    expect(payErrorMessage(new ApiError('Payments are not available yet.', 503))).toBe(
      'Payments are not available yet.'
    );
  });

  test('everything else says nothing was charged', () => {
    const generic = 'Check your connection and try again. Nothing was charged.';
    expect(payErrorMessage(new ApiError('API request failed with status 500', 500))).toBe(generic);
    expect(payErrorMessage(new ApiError('This is taking longer than expected.', 0))).toBe(generic);
    expect(payErrorMessage(new Error('boom'))).toBe(generic);
    expect(payErrorMessage(undefined)).toBe(generic);
  });

  test('a rate limit is not shown as "[object Object]"', () => {
    expect(payErrorMessage(new ApiError('[object Object]', 429))).toMatch(/Too many tries/);
  });
});
