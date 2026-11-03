/**
 * The store-review account signs in with a password; nobody else does.
 *
 * Google Play's reviewers cannot read an inbox, so the emailed code stops them
 * at the first screen. One address is therefore asked for a password instead
 * (lib/reviewer.ts). These tests hold the two things that matter: the door is
 * that one address and no other, and an ordinary student's flow is untouched.
 */
import fs from 'fs';
import path from 'path';

const mockSignInWithPassword = jest.fn();
jest.mock('@/lib/supabase', () => ({
  supabase: { auth: { signInWithPassword: (...a: unknown[]) => mockSignInWithPassword(...a) } },
}));

import { friendlyAuthError, signInWithReviewerPassword } from '@/lib/auth';
import { REVIEWER_EMAIL, isReviewerEmail } from '@/lib/reviewer';

beforeEach(() => mockSignInWithPassword.mockReset());

describe('isReviewerEmail', () => {
  test('is the one reviewer address, whatever its case or padding', () => {
    expect(isReviewerEmail(REVIEWER_EMAIL)).toBe(true);
    expect(isReviewerEmail('  PlayReview@MonkLearning.com ')).toBe(true);
  });

  test('is nobody else, including look-alikes', () => {
    for (const other of [
      '',
      'student@gmail.com',
      'playreview@monklearning.co',
      'playreview@monklearning.com.evil.com',
      'xplayreview@monklearning.com',
      'playreview+1@monklearning.com',
      'playreview@monklearning.com\n@evil.com',
    ]) {
      expect(isReviewerEmail(other)).toBe(false);
    }
  });
});

describe('signInWithReviewerPassword', () => {
  test('refuses every other address before it reaches the network', async () => {
    await expect(signInWithReviewerPassword('student@gmail.com', 'whatever')).rejects.toThrow(
      /not available/
    );
    expect(mockSignInWithPassword).not.toHaveBeenCalled();
  });

  test('signs the reviewer in with a normalised address and the password as typed', async () => {
    mockSignInWithPassword.mockResolvedValue({ error: null });
    await signInWithReviewerPassword('  PlayReview@MonkLearning.com ', 'Correct Horse 9!');
    expect(mockSignInWithPassword).toHaveBeenCalledWith({
      email: REVIEWER_EMAIL,
      password: 'Correct Horse 9!',
    });
  });

  test("passes Supabase's refusal up so the screen can say it", async () => {
    mockSignInWithPassword.mockResolvedValue({ error: { message: 'Invalid login credentials' } });
    await expect(signInWithReviewerPassword(REVIEWER_EMAIL, 'nope')).rejects.toThrow(
      'Invalid login credentials'
    );
  });
});

describe('what the screen says', () => {
  test('a wrong password is a password problem, not a code problem', () => {
    const said = friendlyAuthError('Invalid login credentials');
    expect(said).toMatch(/password/i);
    expect(said).not.toMatch(/code/i);
  });

  test('a wrong code still says code', () => {
    expect(friendlyAuthError('Token has expired or is invalid')).toMatch(/code/i);
  });
});

describe('the sign-in screen', () => {
  const source = fs.readFileSync(path.join(__dirname, '../../app/(onboarding)/email.tsx'), 'utf8');

  test('asks the reviewer address for a password BEFORE any code is sent', () => {
    const sendOtp = source.slice(source.indexOf('const sendOtp = async'), source.indexOf('const changeEmail'));
    const reviewerCheck = sendOtp.indexOf('isReviewerEmail(email)');
    const send = sendOtp.indexOf('sendEmailOtp(email)');
    expect(reviewerCheck).toBeGreaterThan(-1);
    expect(send).toBeGreaterThan(-1);
    expect(reviewerCheck).toBeLessThan(send);
  });

  test('the reviewer password never appears in the app', () => {
    expect(source).not.toMatch(/signInWithPassword\(\{[^}]*password:\s*['"`]/);
    expect(fs.readFileSync(path.join(__dirname, '../reviewer.ts'), 'utf8')).not.toMatch(/password\s*=\s*['"`]/i);
  });
});
