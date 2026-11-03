import { activeThread, buildChat, trimLocal, KEEP_ITEMS, threadTurns, type HelpThread, type LocalItem } from '@/lib/help-chat';

const T0 = '2026-11-03T10:00:00.000Z';
const T1 = '2026-11-03T10:01:00.000Z';
const T2 = '2026-11-03T10:02:00.000Z';
const NOW = Date.parse('2026-11-03T12:00:00.000Z');

const thread = (over: Partial<HelpThread> = {}): HelpThread => ({
  id: 'e1',
  question: 'My plan did not start',
  status: 'open',
  created_at: T0,
  replies: [],
  ...over,
});

const kinds = (items: { kind: string }[]) => items.map((i) => i.kind);

describe('threadTurns', () => {
  it('reads the whole conversation when the server sends it', () => {
    const t = thread({ messages: [{ id: 1, from: 'student', text: 'Hello?', at: T1 }] });
    expect(threadTurns(t).map((x) => x.from)).toEqual(['student']);
  });

  it('falls back to the replies from an older server', () => {
    const t = thread({ replies: [{ id: 1, text: 'Fixed.', at: T1 }] });
    expect(threadTurns(t)).toEqual([{ id: 1, from: 'team', text: 'Fixed.', at: T1 }]);
  });
});

describe('activeThread', () => {
  it('is the newest thread still open', () => {
    const older = thread({ id: 'old', created_at: '2026-11-03T09:00:00.000Z' });
    expect(activeThread([older, thread()], NOW)?.id).toBe('e1');
  });

  it('is nothing when the newest is closed', () => {
    expect(activeThread([thread({ status: 'closed' })], NOW)).toBeNull();
  });

  it('lets an answered thread go quiet after three days', () => {
    const answered = thread({ status: 'answered', awaiting_team: false, replies: [{ id: 1, text: 'Done.', at: T1 }] });
    expect(activeThread([answered], NOW)?.id).toBe('e1');
    expect(activeThread([answered], Date.parse(T1) + 4 * 24 * 3600 * 1000)).toBeNull();
  });

  it('keeps a thread the team still owes an answer to, however old', () => {
    const waiting = thread({ awaiting_team: true });
    expect(activeThread([waiting], Date.parse(T0) + 30 * 24 * 3600 * 1000)?.id).toBe('e1');
  });
});

describe('buildChat', () => {
  const asked: LocalItem[] = [
    { kind: 'me', key: 'a', text: 'My plan did not start', at: T0 },
    { kind: 'bot', key: 'b', text: 'Sent to the team.', at: T0, threadId: 'e1' },
  ];

  it('shows the question once when this phone handed it over', () => {
    const chat = buildChat(asked, [thread()], null);
    expect(chat.filter((i) => i.text === 'My plan did not start')).toHaveLength(1);
  });

  it('shows the question from the server on a new phone', () => {
    expect(kinds(buildChat([], [thread()], null))).toEqual(['me']);
  });

  it('says the team joined once, before its first words', () => {
    const t = thread({
      messages: [
        { id: 1, from: 'team', text: 'Checking.', at: T1 },
        { id: 2, from: 'team', text: 'Fixed.', at: T2 },
      ],
    });
    const chat = buildChat(asked, [t], null);
    expect(kinds(chat)).toEqual(['me', 'bot', 'line', 'team', 'team']);
    expect(chat[2].text).toBe('monklearning team joined');
  });

  it('never puts the team before the handover, when the two clocks disagree', () => {
    const late: LocalItem[] = [
      { kind: 'me', key: 'a', text: 'My plan did not start', at: T2 },
      { kind: 'bot', key: 'b', text: 'Sent to the team.', at: T2, threadId: 'e1' },
    ];
    const t = thread({ messages: [{ id: 1, from: 'team', text: 'Fixed.', at: T1 }] });
    expect(kinds(buildChat(late, [t], null))).toEqual(['me', 'bot', 'line', 'team']);
  });

  it("writes the name in lowercase in the server's sentences", () => {
    const local: LocalItem[] = [{ kind: 'bot', key: 'b', text: 'Sent to the MonkLearning team.', at: T0 }];
    const note = thread({ note: 'The MonkLearning team will reply.', awaiting_team: true });
    const texts = buildChat(local, [note], note).map((i) => i.text);
    expect(texts).toContain('Sent to the monklearning team.');
    expect(texts).toContain('The monklearning team will reply.');
  });

  it('keeps the student and the team in time order', () => {
    const t = thread({
      messages: [
        { id: 2, from: 'student', text: 'Thanks', at: T2 },
        { id: 1, from: 'team', text: 'Fixed.', at: T1 },
      ],
    });
    expect(buildChat(asked, [t], null).map((i) => i.text).slice(-2)).toEqual(['Fixed.', 'Thanks']);
  });

  it("shows the server's waiting note only on the thread being written in", () => {
    const t = thread({ note: 'We will get back to you.', awaiting_team: true });
    expect(buildChat(asked, [t], t).at(-1)?.text).toBe('We will get back to you.');
    expect(buildChat(asked, [t], null).some((i) => i.text === 'We will get back to you.')).toBe(false);
  });
});

describe('trimLocal', () => {
  it('keeps the newest', () => {
    const many: LocalItem[] = Array.from({ length: KEEP_ITEMS + 5 }, (_, i) => ({ kind: 'me', key: `${i}`, text: `${i}`, at: T0 }));
    const kept = trimLocal(many);
    expect(kept).toHaveLength(KEEP_ITEMS);
    expect(kept.at(-1)?.key).toBe(`${KEEP_ITEMS + 4}`);
  });
});
