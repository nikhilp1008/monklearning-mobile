/**
 * QUESTION NUMBERS RESTART IN EACH SUBJECT, as a printed NEET or JEE paper
 * numbers them and as the question screen's "Q6 of 9" always has.
 *
 * The palette and the review used to print the paper's running number
 * (Physics 1-9, Chemistry 10-18, Biology 19-35), so "Q6 of 9" on the paper
 * was square 15 on the grid. This is the label only: every screen still
 * moves by the question's place in the whole paper (its index) or its id.
 *
 * Numbering is per SUBJECT, never per section within one: a JEE subject's
 * single-correct and numerical questions run on as one count.
 */

/** For each question, in paper order, its 1-based number within its subject.
 *  Subjects need not be contiguous: a question is numbered by how many of its
 *  subject came before it in the list. */
export function subjectNumbers(questions: readonly { subject: string }[]): number[] {
  const seen = new Map<string, number>();
  return questions.map((q) => {
    const n = (seen.get(q.subject) ?? 0) + 1;
    seen.set(q.subject, n);
    return n;
  });
}

/** How many questions each subject has, in order of first appearance. */
export function subjectTotals(questions: readonly { subject: string }[]): Map<string, number> {
  const totals = new Map<string, number>();
  for (const q of questions) totals.set(q.subject, (totals.get(q.subject) ?? 0) + 1);
  return totals;
}
