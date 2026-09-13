import { asksAboutTheWork, hasWriting } from '@/lib/followup-board';

/**
 * WHEN A SPOKEN FOLLOW-UP EARNS THE ANSWER BOARD.
 *
 * The bar is a microphone and students talk into microphones. The first attempt
 * at this read the ANSWER and asked whether it looked like working; it failed
 * on the first real test, because asked "hello wassup" the model wrote two
 * perfectly step-shaped lines carrying the question's own numbers. That case is
 * the first test below, and it is the reason this reads the question instead.
 */

/** The page from that failure, so the borrowed-word rule is tested against
 *  something real rather than a convenient sentence. */
const PAGE =
  'A ball is thrown vertically upwards with an initial speed of 29.4 m/s. ' +
  'Find the maximum height reached. Use the kinematic equation. Evaluating the height.';

describe('asksAboutTheWork', () => {
  it('stays shut on the greeting that started all this', () => {
    expect(asksAboutTheWork('hello wassup', PAGE)).toBe(false);
  });

  it('stays shut on the rest of the small talk', () => {
    for (const said of [
      'hi',
      'hey there',
      'how are you',
      'can you hear me',
      'testing testing',
      'wait one sec',
      'ok thanks',
      'good morning',
      'kaise ho',
    ]) {
      expect([said, asksAboutTheWork(said, PAGE)]).toEqual([said, false]);
    }
  });

  it('opens on the questions the student actually came to ask', () => {
    for (const said of [
      'explain this question',
      'explain step 2',
      'why is it minus',
      'where did the 2 come from',
      "I don't understand step three",
      'how did you get this',
      'what is the formula here',
      'yeh samjhao',
      'kyun negative hai',
    ]) {
      expect([said, asksAboutTheWork(said, PAGE)]).toEqual([said, true]);
    }
  });

  it('opens on a word borrowed from the page, with no question words at all', () => {
    expect(asksAboutTheWork('the kinematic part', PAGE)).toBe(true);
    expect(asksAboutTheWork('29.4 comes from', PAGE)).toBe(true);
  });

  it('lets a real question through a greeting', () => {
    expect(asksAboutTheWork('hi, explain step two', PAGE)).toBe(true);
    expect(asksAboutTheWork('hello where did 29.4 come from', PAGE)).toBe(true);
  });

  it('shows rather than withholds when nothing was heard', () => {
    expect(asksAboutTheWork('', PAGE)).toBe(true);
    expect(asksAboutTheWork('   ', PAGE)).toBe(true);
  });
});

describe('hasWriting', () => {
  it('is false for nothing and for blanks', () => {
    expect(hasWriting([])).toBe(false);
    expect(hasWriting([{ text: '' }, { text: '   ' }])).toBe(false);
  });

  it('is true the moment one step has words', () => {
    expect(hasWriting([{ text: '' }, { text: '$v^2 = u^2 + 2as$' }])).toBe(true);
  });
});
