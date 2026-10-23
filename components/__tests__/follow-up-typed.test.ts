/**
 * The follow-up bar was voice only: a student who had refused the microphone,
 * or was in a library, could not ask at all. Read from the source, as the
 * repo's other wiring checks are — the bar needs a microphone, Skia and the
 * native players to render.
 */
import fs from 'fs';
import path from 'path';

const source = fs.readFileSync(path.join(__dirname, '../ask-follow-up.tsx'), 'utf8');

test('a typed question is asked through askAboutDoubt and answered like a spoken one', () => {
  expect(source).toMatch(/askAboutDoubt\(doubtId, question, turnsRef\.current, handlers, signal, surface, page\)/);
  // One answer path for both: the spoken route goes through it too.
  expect(source).toMatch(/await answer\(async \(handlers, signal\) =>/);
  expect(source).toContain('<TextInput');
  expect(source).toContain("'Type instead'");
});

test('the field opens by itself when the microphone is refused', () => {
  expect(source).toMatch(/if \(typeable && failure === 'mic'\) setTyping\(true\)/);
  expect(source).toMatch(/!p\.granted && p\.canAskAgain === false\) setTyping\(true\)/);
});

test('the microphone banner shows whether or not the board is open', () => {
  expect(source).toContain("{failure === 'mic' ? (");
  expect(source).not.toContain("failure === 'mic' && !boardMounted");
});
