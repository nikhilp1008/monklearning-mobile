/**
 * DID THE STUDENT ASK ABOUT THE WORK, OR DID THEY JUST SAY SOMETHING?
 *
 * The Ask Follow-up bar is a microphone, and students talk into microphones.
 * "Hello wassup." "Can you hear me." "Wait, one sec." The teacher answers all
 * of them, as she should — but the answer board was rising over the solution
 * every time, and a board that appears when you say hello is a board you learn
 * to swipe away without reading.
 *
 * THIS READS WHAT THE STUDENT SAID, NOT WHAT CAME BACK, and that is the whole
 * of the design. Reading the answer was the first attempt and it failed on the
 * first real test: asked "hello wassup", the model wrote two perfectly
 * step-shaped lines — a restatement of the question, carrying its numbers, and
 * an invitation to ask something. Nothing about that is distinguishable from a
 * real explanation by looking at it. The QUESTION is distinguishable. "Hello
 * wassup" has nothing to do with a ball thrown at 29.4 m/s; "explain step two"
 * plainly does.
 *
 * IT IS A LIST OF WORDS, and it is worth being honest about that rather than
 * dressing it up. Whether a sentence is about the working in front of it is a
 * language question, and the only thing in the system that can actually answer
 * it is the model that just wrote the reply — one rule in `snap_followup.md`
 * ("return no steps when the message is not about the working") settles it at
 * the source and makes every word below redundant. That is a production repo
 * and not ours to edit, so this is the phone doing what it can: catching the
 * shapes students actually use, in English and in the Hinglish they mix with
 * it, and standing down when it cannot tell.
 *
 * WHEN IT CANNOT TELL, IT SHOWS. A board that appears for a greeting is noise;
 * a board withheld from a real question is a lost answer. So silence is the
 * narrow case — a recognised piece of small talk with nothing else in it — and
 * everything else opens.
 */

/** Lowercase words, with a decimal kept whole so "29.4" survives as one. */
function words(text: string): string[] {
  return text
    .toLowerCase()
    .split(/[^a-z0-9.]+/)
    .map((w) => w.replace(/^\.+|\.+$/g, ''))
    .filter(Boolean);
}

/**
 * Said on a page of working, any one of these is a question about it.
 *
 * The test for this list is whether the word is ever the whole of a greeting.
 * "Why" and "where" are not — nobody opens with them — so they stand alone.
 * "How" and "what" are, which is why they live in the next list down.
 */
const ASKS_DIRECTLY = new Set([
  'explain', 'explanation', 'explaining', 'why', 'where', 'which',
  'solve', 'solved', 'solving', 'derive', 'derivation', 'prove', 'proof',
  'calculate', 'calculation', 'substitute', 'substitution', 'simplify',
  'doubt', 'stuck', 'confused', 'confusing', 'confusion', 'clarify',
  'understand', 'understood', 'understanding', 'mistake', 'wrong', 'incorrect',
  'step', 'steps', 'formula', 'formulae', 'equation', 'equations',
  'answer', 'working', 'meaning', 'elaborate', 'repeat',
  // The half of the sentence a student is as likely to say in Hindi.
  'samjhao', 'samjha', 'samajh', 'samjhaiye', 'kyun', 'kyu', 'kyon',
  'matlab', 'galat', 'batao', 'bata',
]);

/** Asks something, but could as easily be asking after your day. */
const ASKS_OPENLY = new Set([
  'how', 'what', 'whats', 'tell', 'show', 'get', 'got', 'give',
  'mean', 'means', 'help', 'again', 'more', 'kaise', 'kya', 'dikhao',
]);

/** Something on the page to point at, which is what turns the row above into
 *  a question about the work rather than about the teacher. */
const POINTS_AT_THE_PAGE = new Set([
  'this', 'that', 'these', 'those', 'it', 'here',
  'question', 'problem', 'sum', 'solution', 'line', 'part', 'term', 'sign',
  'unit', 'units', 'value', 'number', 'graph', 'diagram', 'figure',
  'option', 'options', 'method', 'result',
  'first', 'second', 'third', 'fourth', 'last', 'next', 'previous',
  'ye', 'yeh', 'isko', 'iska', 'isme', 'wo', 'woh',
]);

/**
 * The things students say that are not questions.
 *
 * Phrases rather than words, because the words are useless on their own — "how"
 * is in "how are you" and in "how did you get this", and only the phrase tells
 * them apart. A list like this is never finished; it is meant to cover the
 * opening seconds of a session, which is when nearly all of it is said.
 */
const SMALL_TALK = [
  /^(hi|hii+|hey|hello+|helo|yo|yow|namaste|salaam|hola)\b/,
  /\bwass?up\b/,
  /\bwhat'?s up\b/,
  /\bhow (are|r) (you|u)\b/,
  /\bhow'?s it going\b/,
  /\bcan you hear\b/,
  /\bare you (there|listening)\b/,
  /\bgood (morning|afternoon|evening|night)\b/,
  /^(thanks|thank you|thnx|thx|ok|okay|okey|acha|theek|cool|nice|great|fine|bye|nothing)\b/,
  /\btest(ing)?\b/,
  /\b(one|1) (sec|second|minute|min)\b/,
  /^wait\b/,
  /\bkaise ho\b/,
  /\bkya haal\b/,
];

/**
 * Whether this utterance is asking about the solution on screen.
 *
 * `context` is the page itself — the question and its step headings. A student
 * who says "velocity" or "29.4" has borrowed a word from the work in front of
 * them, and nothing else needs to be true for that to be a question about it.
 */
export function asksAboutTheWork(said: string, context = ''): boolean {
  const spoken = said.trim().toLowerCase();
  // Nothing heard at all. The server would have failed on its own; withholding
  // the answer as well would be punishing the student for its silence.
  if (!spoken) return true;

  const w = words(spoken);
  const direct = w.some((t) => ASKS_DIRECTLY.has(t));

  // Small talk loses the moment a real question is bolted to it — "hi, explain
  // step two" is a question with a greeting in front, not a greeting.
  if (!direct && !w.some((t) => /\d/.test(t)) && SMALL_TALK.some((re) => re.test(spoken))) {
    return false;
  }
  if (direct) return true;

  if (
    w.some((t) => ASKS_OPENLY.has(t)) &&
    w.some((t) => POINTS_AT_THE_PAGE.has(t) || /\d/.test(t))
  ) {
    return true;
  }

  // A word taken from the page. Four letters and up, so "the" and "and" are
  // not evidence of anything.
  const page = new Set(words(context).filter((t) => t.length >= 4));
  return w.some((t) => t.length >= 4 && page.has(t));
}

/** Whether anything was actually written — a board needs something on it. */
export function hasWriting(steps: { text: string }[]): boolean {
  return steps.some((s) => s.text.trim().length > 0);
}
