import { BoardContent } from '@/lib/board-sections';

/**
 * TEMPORARY REVIEW CONTENT — delete once real notes and sessions exist.
 *
 * The torque class from notes-sessions/board-page.js, verbatim, so the Notes
 * and Sessions pages can be judged on a phone before there is anything real to
 * put in them. Nothing here comes from or reaches the backend: the Library
 * shows these only while the live lists are empty, and both detail screens
 * recognise the ids below and render this instead of fetching.
 *
 * Grep DEMO_ to find every place this reaches.
 */

export const DEMO_NOTE_ID = 'demo-note-torque';
export const DEMO_SESSION_ID = 'demo-session-torque';

export const DEMO_BOARD: BoardContent = {
  topic: 'Rotational Motion · torque',
  subject: 'Physics',
  sections: [
    {
      id: 'idea',
      chip: 'Idea',
      label: 'THE IDEA',
      blocks: [
        {
          kind: 'text',
          markable: true,
          text: 'A force pointing straight at the hinge cannot turn anything. Only the part of the force perpendicular to the rod does the turning — and the further from the hinge it acts, the more it turns.',
        },
        { kind: 'hand', text: 'far from the hinge + perpendicular = biggest turn' },
      ],
    },
    {
      id: 'deriv',
      chip: 'Derivation',
      label: 'DERIVING τ = r F sin θ',
      blocks: [
        {
          kind: 'steps',
          steps: [
            {
              title: 'Split the force',
              lines: [
                { kind: 'text', text: 'Resolve F into a part along the rod and a part across it.' },
                { kind: 'math', text: 'F∥ = F cos θ' },
                { kind: 'math', text: 'F⊥ = F sin θ' },
              ],
            },
            {
              title: 'Only the perpendicular part turns',
              lines: [
                {
                  kind: 'text',
                  text: 'The component along the rod pushes into the hinge. It does no turning at all.',
                },
                { kind: 'math', text: 'τ = r F⊥' },
              ],
            },
            {
              title: 'Put it together',
              lines: [
                { kind: 'result', text: 'τ = r F sin θ' },
                {
                  kind: 'note',
                  text: 'θ is measured between the rod and the force, not from the vertical.',
                },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 'diagram',
      chip: 'Diagram',
      label: 'DIAGRAM',
      blocks: [
        {
          kind: 'figure',
          figure: 'torque',
          caption:
            'Force F acts at the far end, a distance r from the hinge, at angle θ to the rod. Only the part across the rod turns it.',
        },
      ],
    },
    {
      id: 'example',
      chip: 'Example',
      label: 'WORKED IN CLASS',
      blocks: [
        {
          kind: 'problem',
          text: 'A 2 m rod is hinged at one end. A 10 N force acts at the far end at 30° to the rod. Find the torque about the hinge.',
          work: ['τ = r F sin θ', '= 2 × 10 × sin 30°', '= 2 × 10 × 0.5'],
          answer: 'τ = 10 N·m',
        },
      ],
    },
    {
      id: 'asked',
      chip: 'You asked',
      label: 'YOU ASKED',
      blocks: [
        {
          kind: 'qa',
          items: [
            {
              q: 'why sin and not cos?',
              a: 'Because θ sits between the rod and the force. Sine picks out the part across the rod, which is the only part that turns it.',
            },
            {
              q: 'does torque have a direction?',
              a: 'Yes — it is a vector along the axis. Curl your right hand the way the rod turns and your thumb points along τ.',
            },
          ],
        },
        { kind: 'foot', text: 'Tap any line to highlight it' },
      ],
    },
  ],
};

/**
 * DEMO_ — a handful of sample note cards, so the erase gesture can be tried
 * on a phone while the real Notes list is still empty. Cards only: these do
 * not open a note page, and erasing one removes it from this list and nothing
 * else — there is no note on the server to delete.
 *
 * Delete this array with the rest of this file once real notes exist.
 */
export interface DemoNoteCard {
  id: string;
  subject: string;
  /** The subject label's ink, and the dot beside it. */
  tint: string;
  dot: string;
  time: string;
  title: string;
  body: string;
}

export const DEMO_NOTE_CARDS: DemoNoteCard[] = [
  {
    id: 'demo-card-1',
    subject: 'Physics',
    tint: '#C53A2B',
    dot: '#DD4433',
    time: '2 days ago',
    title: "Ohm's law & drift velocity",
    body: 'I = nAve. Current is just charge marching together.',
  },
  {
    id: 'demo-card-2',
    subject: 'Chemistry',
    tint: '#157A45',
    dot: '#1C9B57',
    time: 'last week',
    title: 'Balancing redox in acid',
    body: 'Half-reactions, balance O with H₂O, H with H⁺.',
  },
  {
    id: 'demo-card-3',
    subject: 'Maths',
    tint: '#9A6A12',
    dot: '#EEA31F',
    time: 'last week',
    title: 'Integration by parts',
    body: 'ILATE order. Pick u so its derivative simplifies.',
  },
  {
    id: 'demo-card-4',
    subject: 'Physics',
    tint: '#C53A2B',
    dot: '#DD4433',
    time: '2 weeks ago',
    title: 'Projectile motion essentials',
    body: 'Split into x and y. Time is the bridge.',
  },
];

/**
 * Two sample doubts, so the Doubts tab can be read before anything is snapped.
 *
 * Deliberately from the *same photo* and different subjects. That is the case
 * that forced doubts to be one card per question rather than one per snap:
 * grouped, these two would share a card, and no subject filter could separate
 * a Physics question from a Chemistry one — nor could a student delete just
 * one of them.
 *
 * Only the question is stored. A doubt card shows what was asked and nothing
 * else, so a subject, a time and a topic here would be fields nothing renders.
 */
export interface DemoDoubtCard {
  id: string;
  /** The question itself, as `stem` gives it on a real doubt. */
  question: string;
}

export const DEMO_DOUBT_CARDS: DemoDoubtCard[] = [
  {
    id: 'demo-doubt-1',
    question:
      'A solid cylinder of mass M and radius R rolls without slipping down an incline of angle θ. Find its acceleration.',
  },
  {
    id: 'demo-doubt-2',
    question:
      'For a first-order reaction, 75% completion takes 60 minutes. What is the half-life?',
  },
];
