import { createContext, useContext } from 'react';

import { labelCase } from '@/lib/label-case';

/**
 * TEXT AS THE BOOK PRINTS IT.
 *
 * The older chapters wrote their headings and labels in capitals, so the
 * reader brings every label down to lowercase (lib/label-case.ts). The
 * chapters written word for word from the Master Reference books already use
 * proper capitals ("Procedure A — Counting significant figures", "RADAR"), and
 * lowering them turned "Procedure A" into "Procedure a". Inside a book chapter
 * the reader sets this to true and shows headings exactly as written.
 */
export const BookText = createContext(false);

/** labelCase, or the text unchanged inside a book chapter. */
export function useLabelCase(): (text: string) => string {
  const book = useContext(BookText);
  return book ? (text) => text : labelCase;
}
