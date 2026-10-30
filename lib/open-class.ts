import { router } from 'expo-router';

import { getTier } from '@/lib/pass';

/**
 * Every "start a class" button goes through here. A student on the free tier is
 * taken to the locked card instead of a classroom the server would turn away; a
 * paying one goes where the button always went.
 *
 * It asks the tier the app last heard (lib/pass.ts), so it is right on the first
 * tap. If that is stale (a plan bought a moment ago) the server is still the
 * judge: the classroom socket and the session routes refuse a free student, and
 * the app root turns that into the plans screen.
 */
export function openClass(href: Parameters<typeof router.push>[0] = '/drona'): void {
  if (getTier().free) {
    router.push('/class-locked');
    return;
  }
  router.push(href);
}
