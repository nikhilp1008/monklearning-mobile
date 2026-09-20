import { router } from 'expo-router';

import { FirstDayCard } from '@/components/first-day-card';
import { DoubtsIcon, NotesIcon } from '@/components/tab-bar';
import { StyleSheet, View } from 'react-native';
import { useScale } from '@/constants/scale';

/**
 * NOTHING HERE YET, SAID PROPERLY.
 *
 * Both lists used to stand in demo cards while the real list was empty —
 * scaffolding so the Library could be judged on a phone before anything real
 * existed. On a new account that reads as notes the student never wrote, so
 * they are gone and nothing fake replaces them. An empty list here is not a
 * failure state, it is the first day.
 *
 * THE MARK IS THE TAB'S OWN ICON. It was a drawn page inside amber brackets —
 * a second symbol for a thing that already has one. A student reading this
 * card has the same glyph lit in the bar at the bottom of the screen, so the
 * card names the tab rather than introducing a picture of it.
 *
 * The card itself is shared with Progress and today's plan: see
 * components/first-day-card.tsx.
 */

type Kind = 'notes' | 'doubts';
type S = (n: number) => number;

const COPY: Record<Kind, { head: string; line: string; cta: string; go: string }> = {
  doubts: {
    head: 'Stuck on a question?',
    line: 'You get the steps, not just the answer.',
    cta: 'Snap a question',
    go: '/snap-capture',
  },
  notes: {
    head: 'Your notes start with a class.',
    line: 'When a class ends, save the board and those notes are kept here.',
    cta: 'Start a live class',
    go: '/drona',
  },
};

export function EmptyState({ kind }: { kind: Kind }) {
  const { scale, verticalScale } = useScale();
  const s = useStyles(scale, verticalScale);
  const copy = COPY[kind];
  const Glyph = kind === 'notes' ? NotesIcon : DoubtsIcon;

  return (
    <View style={s.wrap}>
      <FirstDayCard
        glyph={(size, color) => <Glyph color={color} size={size} />}
        head={copy.head}
        line={copy.line}
        cta={copy.cta}
        onPress={() => router.push(copy.go as never)}
      />
    </View>
  );
}

function useStyles(scale: S, verticalScale: S) {
  return StyleSheet.create({
    /**
     * Under the search field, where the first row would be.
     *
     * No gutter of its own — the list sets the page's 24pt margin, and 4pt on
     * top of that left the card inset from the field above it by exactly
     * enough to look like a mistake.
     *
     * NOT CENTRED IN THE LIST AREA. Centring sounds right and reads wrong: the
     * card floats with a hand's width of nothing above it and more below,
     * anchored to neither the field it belongs under nor the tab bar. It sits
     * where the first entry will sit, which is also what it is promising.
     */
    wrap: { marginTop: verticalScale(14), paddingHorizontal: scale(0) },
  });
}
