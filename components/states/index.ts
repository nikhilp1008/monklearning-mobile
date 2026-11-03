/**
 * SCREEN STATES: everything a screen shows when it is not showing its normal
 * content. One family of four shapes, chosen by how much of the page the state
 * replaces, plus loading:
 *
 * - StateCard: a whole page with nothing else to show (first use, couldn't
 *   load, a permission off, a daily limit, a chapter finished).
 * - StateLine: part of a page came up empty (a search with no results).
 * - StateBanner / OfflineBanner: a passing condition (offline, reconnecting,
 *   mic off); the page keeps working under it.
 * - StateMoment: a small win (today's plan done).
 * - ListSkeleton / PageSkeleton: loading, in the shape of what is coming.
 *
 * Words: what happened, then what to do; reassure about what is safe; never a
 * server's raw message (lib/api.ts friendlyError / friendlyLoadError).
 */
export { Glyph, type StateGlyph } from '@/components/states/glyphs';
export { ListSkeleton, PageSkeleton } from '@/components/states/list-skeleton';
export { OfflineBanner } from '@/components/states/offline-banner';
export { QuietLink, StateCard, type StateAction } from '@/components/states/state-card';
export { StateBanner, StateLine, StateMoment } from '@/components/states/state-line';
export { StatePlate, useTeacherId } from '@/components/states/state-plate';
export { StateScreen } from '@/components/states/state-screen';
