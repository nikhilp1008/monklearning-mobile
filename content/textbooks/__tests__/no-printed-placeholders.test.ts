/** A ${NB} written inside a plain-quoted string is printed as code, not glued (Android check of Mathematics 12 Ch 13). */
import { BOOK_CHAPTERS } from '@/content/textbooks/test-support/book-list';
import { KEY_POINTS } from '@/lib/revise/keypoints';
it('no code placeholder printed', () => {
  const bad: string[] = [];
  for (const ch of BOOK_CHAPTERS as any[]) {
    const j = JSON.stringify(ch);
    for (const m of j.matchAll(/.{0,40}\$\{[A-Za-z_]+\}.{0,20}/g)) bad.push(`${ch.subject} ${ch.klass} ${ch.chapter}: ${m[0]}`);
  }
  for (const [k, v] of Object.entries(KEY_POINTS as any)) for (const m of JSON.stringify(v).matchAll(/.{0,40}\$\{[A-Za-z_]+\}.{0,20}/g)) bad.push(`${k}: ${m[0]}`);
  expect(bad).toEqual([]);
});
