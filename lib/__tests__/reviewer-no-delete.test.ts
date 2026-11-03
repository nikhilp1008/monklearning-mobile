/**
 * The store-review account cannot be deleted.
 *
 * Play and the App Store require a delete button inside the app, so a reviewer
 * will find it and may press it. Erasing playreview@monklearning.com would leave
 * the next review with no account to sign in to. The API refuses it (the real
 * enforcement, tests/test_account_erase.py in the API repo); the screen says so
 * up front instead of offering a button that cannot work.
 */
import fs from 'fs';
import path from 'path';

const source = fs.readFileSync(path.join(__dirname, '../../app/account.tsx'), 'utf8');

test('the personal-information screen asks whether this is the review account', () => {
  expect(source).toContain("import { isReviewerSession } from '@/lib/reviewer';");
  expect(source).toMatch(/void isReviewerSession\(\)\.then\(\(yes\) => \{\s*if \(live\) setReviewer\(yes\)/);
});

test('the review account is shown a reason, not a delete form', () => {
  const reviewerBranch = source.slice(source.indexOf('{reviewer ? ('), source.indexOf(') : ('));
  expect(reviewerBranch).toContain('demo account used for app review');
  expect(reviewerBranch).not.toContain('Delete permanently');
  expect(reviewerBranch).not.toContain('confirmText');
});

test('everyone else still gets the delete form', () => {
  const rest = source.slice(source.indexOf(') : ('));
  expect(rest).toContain('Delete permanently');
  expect(rest).toContain('This permanently deletes your account');
});

test('deleting is refused in code too, not just hidden', () => {
  const fn = source.slice(source.indexOf('const deleteForever'), source.indexOf('}, [deleting, email, reviewer]'));
  expect(fn).toContain('if (deleting || reviewer) return;');
  expect(fn.indexOf('if (deleting || reviewer) return;')).toBeLessThan(fn.indexOf("'/account/erase'"));
});
