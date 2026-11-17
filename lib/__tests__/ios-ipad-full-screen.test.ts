/**
 * iPad stays a full-screen app (13 Nov 2026, before the 1.4.6 iOS build).
 *
 * Without UIRequiresFullScreen, iPadOS treats the app as able to share the
 * screen, refuses every orientation lock, and the portrait-only tabs (the
 * Videos tab most visibly) get laid out sideways in landscape. With it, the
 * tabs' portrait lock and the classroom's landscape lock both hold on iPad as
 * they do on iPhone.
 */
import appJson from '../../app.json';

describe('iOS app settings', () => {
  it('keeps iPad full screen so orientation locks are honoured', () => {
    expect(appJson.expo.ios.supportsTablet).toBe(true);
    expect(appJson.expo.ios.requireFullScreen).toBe(true);
  });
});
