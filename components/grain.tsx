import { Canvas, ColorMatrix, Fill, FractalNoise } from '@shopify/react-native-skia';
import { StyleSheet, type ViewStyle } from 'react-native';

/**
 * GRAIN, GENERATED RATHER THAN ATTACHED.
 *
 * This used to be a PNG. A 420x240 sheet of Box-Muller noise, 113KB, baked
 * once and laid over the live-class card and the two icon plates. It worked,
 * and it was the wrong answer to the question — you cannot tune a PNG, you
 * cannot ask it for a different grain at a different size, and every surface
 * that wants it has to solve the resampling problem on its own. The card drew
 * the sheet stretched to 342pt and the plates had to draw it at exactly 140pt
 * so its pixels would land 1:1, because downscaling noise averages it away.
 * Two surfaces, one asset, two unrelated tricks to keep it looking like grain.
 *
 * THE OBVIOUS SVG ROUTE DOES NOT EXIST HERE. `FeTurbulence` is the standard
 * way to make noise in SVG and react-native-svg ships it in JavaScript with no
 * native counterpart on Apple's side — there is no `RNSVGFeTurbulence.mm`, only
 * Blend, ColorMatrix, Composite, Flood, GaussianBlur, Merge and Offset. It
 * renders nothing, silently, which is the same trap as `filter: blur()`.
 *
 * SO THE NOISE IS SKIA'S. `FractalNoise` is Perlin noise on the GPU, evaluated
 * per pixel at whatever size the view happens to be, which makes the whole
 * resampling problem disappear: there is no sheet to fit, so nothing is
 * stretched on the card or pinned to 140pt on the plates. Each surface asks
 * for a grain size in points and gets it.
 *
 * `freq` IS CYCLES PER POINT, and it has a ceiling that is worth knowing about
 * before you reach for a finer grain. Skia draws in points and scales to device
 * pixels underneath, so on a 3x screen freq 3 is one cycle per device pixel —
 * exactly the sampling rate. Every pixel then samples the noise at the same
 * phase and the shader returns a CONSTANT: the grain does not get fine, it
 * disappears, silently and completely. That was measured, not reasoned about —
 * the plates rendered no grain at all at freq 3 and the high-frequency energy
 * on them was identical to the energy with the grain switched off. Anything
 * above about 1.5 is in that territory. 1.0 is a cell three device pixels
 * across, which is the paper this was approved with.
 *
 * AND ONE OCTAVE, not several. Each extra octave doubles the frequency, so a
 * second octave over a 1.0 base lands at 2.0 and a third at 4.0 — straight into
 * the aliasing above. Two octaves measurably sanded the texture into something
 * finer and more even than the sheet it replaced; one octave puts the mottling
 * back where it was.
 *
 * THE COLOUR MATRIX flattens the noise to grey and fixes its alpha. Skia's
 * fractal noise is four independent channels including alpha, so used raw it is
 * coloured static. The first three rows average RGB into a neutral, the fourth
 * discards the noise's own alpha and substitutes `strength`. Grey at a constant
 * alpha is what `overlay` wants: mid-grey is the identity for that blend, so the
 * grain lightens where it is above neutral and darkens where it is below,
 * instead of laying a film over everything the way plain alpha does.
 */

/** Fixed, so the grain is the same on every launch and every screenshot. */
const SEED = 20260917;

/** Grey out the noise's colour, and replace its alpha with a constant. */
function neutral(strength: number): number[] {
  const third = 1 / 3;
  return [
    third, third, third, 0, 0,
    third, third, third, 0, 0,
    third, third, third, 0, 0,
    0, 0, 0, 0, strength,
  ];
}

export function Grain({
  freq,
  octaves = 1,
  strength,
  style,
}: {
  /** Grain cells per point. Keep below ~1.5; see the note above. */
  freq: number;
  /** Higher octaves alias. Raise only with a measurement to back it. */
  octaves?: number;
  /** Alpha of the grey, before the overlay blend. */
  strength: number;
  style?: ViewStyle;
}) {
  return (
    <Canvas style={[styles.canvas, style]} pointerEvents="none">
      <Fill>
        <FractalNoise freqX={freq} freqY={freq} octaves={octaves} seed={SEED} />
        <ColorMatrix matrix={neutral(strength)} />
      </Fill>
    </Canvas>
  );
}

const styles = StyleSheet.create({
  /**
   * OVERLAY, not plain alpha. Laid on normally, grain is additive: a speck of
   * light grey over charcoal is a light speck, and a thousand of them are a
   * haze. Overlay multiplies the dark half and screens the light half against
   * what is under it, which is how grain behaves in a photograph.
   */
  canvas: { ...StyleSheet.absoluteFillObject, mixBlendMode: 'overlay' },
});
