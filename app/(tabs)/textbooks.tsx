import { TextbooksShelf } from '@/components/textbook/shelf';

/**
 * Textbooks — the shelf ("2a", design_handoff_textbooks_shelf): swipe between
 * book covers, read the chapter list under the book you are on. The reader
 * and everything past it are unchanged; see components/textbook/shelf.tsx.
 *
 * The subject grid this tab used to show (`components/textbook/textbooks-page`)
 * and the chapter list it opened (`app/textbook-chapters.tsx`) are left in
 * place but no longer reached from here: the shelf is both of them at once.
 */
export default function TextbooksScreen() {
  return <TextbooksShelf />;
}
