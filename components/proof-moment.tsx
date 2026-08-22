import { StyleSheet } from 'react-native';

import { TeacherNote } from '@/components/teacher-note';
import type { ProofEvent } from '@/lib/proof';

/**
 * The teacher's word on what a student just proved.
 *
 * Renders nothing unless something was actually proven — see MOMENTS.md rule
 * 2. An app that congratulates you for an unproductive hour teaches you to
 * ignore it, so silence is a first-class outcome here, not a failure state.
 *
 * It speaks once, not line by line. A class that takes a whole chapter Strong
 * produces a dozen `concept_strong` events, and printing a dozen rows would
 * turn proof into a scoreboard — exactly what the score is designed not to be.
 * So the highest-ranked event becomes the sentence, and everything else is
 * folded into a single supporting line.
 *
 * The card itself is `TeacherNote`, shared with Home's observation card: one
 * teacher, one voice, one shell.
 */

interface Line {
  headline: string;
  detail?: string;
}

/**
 * Copy for the lead event. Every line states a fact the student can check
 * against their own Progress page — praise that can't be verified is the kind
 * students learn to discount.
 */
function leadLine(event: ProofEvent): Line {
  switch (event.kind) {
    case 'all_flags_cleared':
      return {
        headline: 'Every flag is cleared.',
        detail: 'Nothing is capping your score now — the ceiling is fully open.',
      };
    case 'first_class':
      return {
        headline: 'That was your first class.',
        detail: 'The hardest one is behind you.',
      };
    case 'first_doubt':
      return { headline: 'First doubt solved.' };
    case 'first_question':
      return { headline: 'First question answered.' };
    case 'chapter_strong':
      return {
        headline: `${event.subject ?? 'A chapter'} is Strong.`,
        detail: 'Every concept in it now holds up on questions you hadn\u2019t seen.',
      };
    case 'concept_strong':
      return { headline: `${event.subject ?? 'A concept'} is Strong.` };
    case 'flag_cleared':
      return {
        headline:
          event.amount && event.amount > 1 ? `${event.amount} flags cleared.` : 'A flag cleared.',
        detail: 'That lifts the ceiling your score can climb to.',
      };
    case 'score_up':
      return { headline: `Your Monk Score moved up ${event.amount ?? 0}.` };
  }
}

/**
 * One line for everything the lead didn't say. Concepts are counted rather
 * than listed, and the score delta is mentioned last because it is the
 * consequence of the proof, not the proof itself.
 */
function restLine(events: ProofEvent[], lead: ProofEvent): string | null {
  const parts: string[] = [];

  const concepts = events.filter((e) => e.kind === 'concept_strong' && e !== lead).length;
  if (concepts > 0) {
    parts.push(`${concepts} concept${concepts === 1 ? '' : 's'} moved to Strong`);
  }

  const score = events.find((e) => e.kind === 'score_up' && e !== lead);
  if (score?.amount) parts.push(`your score is up ${score.amount}`);

  if (!parts.length) return null;
  const sentence = parts.join(', and ');
  return sentence.charAt(0).toUpperCase() + sentence.slice(1) + '.';
}

export function describeProof(events: ProofEvent[]): Line | null {
  if (!events.length) return null;
  const [lead] = events;
  const line = leadLine(lead);
  // The lead's own detail wins when there is one — it explains *why* the
  // headline matters, which a tally of the remainder never does.
  return { headline: line.headline, detail: line.detail ?? restLine(events, lead) ?? undefined };
}

export function ProofMoment({ events }: { events: ProofEvent[] }) {
  const line = describeProof(events);
  if (!line) return null;
  return <TeacherNote headline={line.headline} detail={line.detail} style={styles.spacing} />;
}

const styles = StyleSheet.create({
  // Session summary lays its own sections out by margin, not by a parent gap.
  spacing: { marginTop: 22 },
});
