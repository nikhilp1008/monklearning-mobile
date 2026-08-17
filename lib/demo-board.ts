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
