// Are the chapter counts on the onboarding exam screen still true?
//
// They have been wrong twice: the numbers shipped in constants/onboarding.ts
// (20/20/14/39) and both design handoffs (20/20/14/22) all disagreed with the
// database and with each other. NEET's total happened to come out right
// because two errors cancelled, which is exactly the kind of wrong that
// survives a read-through.
//
// Run: node scripts/check-syllabus-counts.mjs
import { readFileSync } from 'node:fs';

const env = Object.fromEntries(
  readFileSync(new URL('../.env.local', import.meta.url), 'utf8')
    .split('\n')
    .filter((l) => l.includes('=') && !l.trim().startsWith('#'))
    .map((l) => [
      l.slice(0, l.indexOf('=')).trim(),
      // Values may be quoted in .env.local; fetch() rejects a URL with quotes.
      l
        .slice(l.indexOf('=') + 1)
        .trim()
        .replace(/^['"]|['"]$/g, ''),
    ])
);

const url = env.EXPO_PUBLIC_SUPABASE_URL;
const key = env.EXPO_PUBLIC_SUPABASE_PUBLISHABLE_KEY;
if (!url || !key) {
  console.error('No Supabase credentials in .env.local — skipping.');
  process.exit(0);
}

const res = await fetch(`${url}/rest/v1/chapters?select=subject`, {
  headers: { apikey: key, Authorization: `Bearer ${key}` },
});
if (!res.ok) {
  console.error(`Could not read chapters (HTTP ${res.status}) — skipping.`);
  process.exit(0);
}

const live = {};
for (const row of await res.json()) live[row.subject] = (live[row.subject] ?? 0) + 1;

// The source of truth in the app, read as text so this script needs no bundler.
const src = readFileSync(new URL('../constants/onboarding.ts', import.meta.url), 'utf8');
const claimed = {};
for (const [, name, count] of src.matchAll(/\{ name: '(Physics|Chemistry|Maths|Biology)', count: (\d+) \}/g)) {
  claimed[name] = Number(count);
}

const KEY = { Physics: 'physics', Chemistry: 'chemistry', Maths: 'mathematics', Biology: 'biology' };
let bad = 0;
for (const [label, subject] of Object.entries(KEY)) {
  const want = live[subject] ?? 0;
  const got = claimed[label];
  if (got === undefined) continue;
  const ok = want === got;
  if (!ok) bad++;
  console.log(`${ok ? 'ok  ' : 'FAIL'} ${label.padEnd(10)} onboarding says ${got}, database has ${want}`);
}

if (bad) {
  console.error(`\n${bad} subject count(s) out of date — update EXAMS in constants/onboarding.ts.`);
  process.exit(1);
}
console.log('\nAll onboarding chapter counts match the database.');
