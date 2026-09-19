import { useEffect } from 'react';

/**
 * The channel between the reader and its topic sheet.
 *
 * The sheet is a route of its own, presented as a transparent modal the way
 * every other sheet in this app is, which means it cannot read the reader's
 * state directly and the reader cannot read its result. Router params would
 * carry the topic list one way, but not the chosen topic back, and expo-router
 * decodes params twice so anything with a stray percent sign in it is unsafe
 * to send that way.
 *
 * A module slot instead: the reader publishes its topics, the sheet publishes
 * a chosen index, and the reader subscribes. Small enough to stay obvious, and
 * it costs no dependency.
 */

export interface ReaderTopic {
  n: string;
  title: string;
}

let chapterTitle = '';
let topics: ReaderTopic[] = [];
let activeIndex = 0;
const jumpListeners = new Set<(index: number, held: boolean) => void>();
const releaseListeners = new Set<() => void>();

export function setReaderTopics(title: string, list: ReaderTopic[]): void {
  chapterTitle = title;
  topics = list;
}

export function setReaderActive(index: number): void {
  activeIndex = index;
}

export function readerTopics(): { title: string; topics: ReaderTopic[]; active: number } {
  return { title: chapterTitle, topics, active: activeIndex };
}

/**
 * `held` builds the new topic now but keeps it off-screen until
 * `releaseTopicJump` — so the sheet can start the build the moment a topic is
 * picked, and the page still does not move until the sheet has gone.
 */
export function jumpToTopic(index: number, held = false): void {
  activeIndex = index;
  for (const listener of jumpListeners) listener(index, held);
}

/** The sheet has gone: a held topic may slide in. */
export function releaseTopicJump(): void {
  for (const listener of releaseListeners) listener();
}

/** Subscribes the reader to the sheet's choice for as long as it is mounted. */
export function useReaderJump(
  onJump: (index: number, held: boolean) => void,
  onRelease: () => void
): void {
  useEffect(() => {
    jumpListeners.add(onJump);
    releaseListeners.add(onRelease);
    return () => {
      jumpListeners.delete(onJump);
      releaseListeners.delete(onRelease);
    };
  }, [onJump, onRelease]);
}
