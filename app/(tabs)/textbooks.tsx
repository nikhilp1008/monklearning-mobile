import { TextbooksGallery } from '@/components/textbook/gallery';

/**
 * Textbooks — a gallery of our own textbook covers, Class 11 and Class 12
 * (Nikhil, 9 Nov 2026). A book opens its chapter list (app/textbook-book.tsx);
 * a chapter opens the reader as before. The swipe carousel this replaced
 * (components/textbook/shelf.tsx) is left in place but no longer reached.
 */
export default function TextbooksScreen() {
  return <TextbooksGallery />;
}
