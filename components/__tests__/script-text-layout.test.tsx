/**
 * A drawn-script line's layout stays on the line. MathLine styles every word
 * it lays out, so a bullet's `flex: 1` passed through to the words shrank each
 * of them to nothing: an empty bullet over a tall blank gap on a real note.
 */
import TestRenderer, { act } from 'react-test-renderer';
import { StyleSheet, Text } from 'react-native';

import { ScriptText } from '@/components/script-text';

it('keeps flex on the wrapper and off every word', () => {
  let tree!: TestRenderer.ReactTestRenderer;
  act(() => {
    tree = TestRenderer.create(
      <ScriptText
        raw="If a ≫ λ, spreading is negligible out to z_{F} and ray optics is recovered."
        text="ignored"
        style={{ flex: 1, fontSize: 15, color: '#2A3550' }}
      />
    );
  });
  const words = tree.root.findAllByType(Text);
  expect(words.length).toBeGreaterThan(5);
  for (const w of words) expect(StyleSheet.flatten(w.props.style)?.flex).toBeUndefined();
});
