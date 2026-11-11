// Lets the app see the UPI apps installed on the phone (Android 11+ package
// visibility). Without a <queries> entry, Razorpay's getAppsWhichSupportUPI
// finds nothing and the pass page has no apps to show.
const { withAndroidManifest } = require('expo/config-plugins');

// Razorpay's recommended order: GPay, PhonePe, Paytm, BHIM, then CRED.
const UPI_PACKAGES = [
  'com.google.android.apps.nbu.paisa.user',
  'com.phonepe.app',
  'net.one97.paytm',
  'in.org.npci.upiapp',
  'com.dreamplug.androidapp',
];

module.exports = function withUpiQueries(config) {
  // Only when Android payments are on (same flag as lib/payments.ts). A build
  // that sells nothing has no reason to ask Android which payment apps are
  // installed, and Google Play asks developers to justify such <queries>.
  if (process.env.EXPO_PUBLIC_ANDROID_PAYMENTS !== '1') return config;
  return withAndroidManifest(config, (cfg) => {
    const manifest = cfg.modResults.manifest;
    const queries = (manifest.queries = manifest.queries ?? [{}]);
    const q = queries[0];
    q.intent = q.intent ?? [];
    const hasUpi = q.intent.some((i) => (i.data ?? []).some((d) => d.$?.['android:scheme'] === 'upi'));
    if (!hasUpi) {
      q.intent.push({ action: [{ $: { 'android:name': 'android.intent.action.VIEW' } }], data: [{ $: { 'android:scheme': 'upi' } }] });
    }
    q.package = q.package ?? [];
    for (const name of UPI_PACKAGES) {
      if (!q.package.some((p) => p.$?.['android:name'] === name)) q.package.push({ $: { 'android:name': name } });
    }
    return cfg;
  });
};
