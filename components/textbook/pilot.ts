import type { Chapter } from '@/lib/textbooks';

/**
 * THE READER PILOT: the rebuilt reading system, on a few topics only.
 *
 * The reader's blocks grew eight body sizes, six line heights, two body
 * colours and five kinds of box. The rebuild puts them on the app's one
 * reading system (constants/reading.ts, the same sizes Practice and Doubts
 * use), section by section, each chosen against real content. It is tried on
 * a few topics first so it can be compared, page against page, with the
 * topics around it before it goes anywhere else.
 *
 * Topic 1 of Chapter 1 of every Class 11 subject: Physics' "Systems of Units,
 * and the SI" and Maths' "Sets", the two subjects written so far, because
 * each subject's content stresses the design differently. A Chemistry or
 * Biology Chapter 1 joins on its own when it is written. Every other topic
 * renders exactly as before. To end the pilot, make this return false; to
 * adopt the rebuild everywhere, make it return true and then fold
 * blocks-pilot.tsx into blocks.tsx.
 */
export function isPilotTopic(chapter: Pick<Chapter, 'chapter' | 'klass'>, topicIndex: number): boolean {
  return /\b11\b/.test(chapter.klass) && Number(chapter.chapter) === 1 && topicIndex === 0;
}
