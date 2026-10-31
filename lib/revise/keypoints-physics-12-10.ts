/**
 * KEY POINTS for Physics Class 12, Chapter 10 (Wave Optics).
 *
 * Written for test mode: every point is a question to answer in your head,
 * then the answer and at most one more line. Four kinds, each a section on
 * the screen: Remember (two a topic), Don't mix up, Common mistakes and Exam
 * shortcuts (one each); an Additional topic has two points for its central
 * results. Memory lines are a fifth, short section of their own, read rather
 * than tested: the first two of each topic.
 *
 * `topic`: Topics 01–06 are 0–5; Additional topics A–E are 6–10.
 *
 * Every fact is from the Master Reference book; the page is above each point.
 * Remember: the topic's Key formulas and Cheat sheet. Common mistakes: its
 * Common Student Pitfalls. Exam shortcuts: its Pro-Tip. `say`: the cheat
 * sheet's mnemonic, word for word (quotation marks dropped; a mnemonic line
 * with two sayings is split at its “And”). Additional topics: the
 * Supplement's addenda.
 *
 * Markup is the chapter's own: <i> for maths, <sub> and <sup>. As the book
 * says, the fringe order is m and n is always the refractive index; f is the
 * frequency. Label subscripts are upright (<i>v</i><sub>r</sub>,
 * <i>v</i><sub>eq</sub>, <i>z</i><sub>F</sub>, <i>D</i><sub>ap</sub>,
 * <i>θ</i><sub>min</sub>, <i>m</i><sub>I</sub>, <i>m</i><sub>D</sub>,
 * <i>i</i><sub>B</sub>, <i>n</i><sub>coat</sub>, <i>N</i><sub>HW</sub>,
 * <i>n</i><sub>o</sub>, <i>n</i><sub>e</sub>); a subscript that is a variable
 * stays italic (<i>ρ</i><sub><i>m</i></sub>, <i>θ</i><sub><i>β</i></sub>).
 * π is upright.
 */
import type { KeyPoint } from '@/lib/revise/keypoints';

export const KEY_POINTS: KeyPoint[] = [
  // ── Topic 01 · Wavefront and Huygens’ Principle ──
  // pp. 636–637, 648
  {
    topic: 0,
    kind: 'remember',
    q: 'What is a wavefront, and what does Huygens’ principle say?',
    a: 'A wavefront is the locus of points vibrating in the same phase; a ray is perpendicular to it. Huygens: every point on a wavefront is a secondary source, its wavelets spread at the wave speed <i>v</i>, and their envelope is the new wavefront',
    why: 'Point source → spherical, line source → cylindrical, far source → plane. The construction gives reflection and Snell’s law, and holds for all waves, sound included; its backwave needs the ad-hoc obliquity fix.',
    say: null,
  },
  // pp. 637–638, 642, 648
  {
    topic: 0,
    kind: 'remember',
    q: 'The wavefront result for refraction, and what changes and what does not when light enters a denser medium?',
    a: 'sin <i>i</i>/sin <i>r</i> = <i>v</i><sub>1</sub>/<i>v</i><sub>2</sub> = <i>n</i><sub>2</sub>/<i>n</i><sub>1</sub> = <i>λ</i><sub>1</sub>/<i>λ</i><sub>2</sub> = <i>n</i><sub>21</sub>, with <i>n</i> = <i>c</i>/<i>v</i>. The frequency is unchanged; the speed and the wavelength fall, <i>λ</i><sub>medium</sub> = <i>λ</i><sub>vacuum</sub>/<i>n</i>',
    why: 'Light of 600 nm entering glass of <i>n</i> = 1.5: <i>v</i> = 2 × 10<sup>8</sup> m s<sup>−1</sup>, <i>λ</i> = 400 nm, <i>f</i> = 5 × 10<sup>14</sup> Hz in both. The source sets the frequency; the medium only rescales the wavelength.',
    say: 'Big <i>n</i>, slow & short — denser medium ⇒ smaller speed ⇒ shorter wavelength ⇒ bend toward normal.',
  },
  // pp. 638, 643, 648
  {
    topic: 0,
    kind: 'mixup',
    q: 'An aperture of size <i>a</i>: when does ray optics describe the light, and when does diffraction take over?',
    a: 'Compare the distance with the Fresnel distance <i>z</i><sub>F</sub> = <i>a</i><sup>2</sup>/<i>λ</i>: much closer than <i>z</i><sub>F</sub>, ray optics is a good approximation; well beyond it, diffraction (wave optics) dominates',
    why: 'A 1 mm aperture at 500 nm: <i>z</i><sub>F</sub> = 2 m, so ray optics holds at 0.5 m and you see a diffraction pattern at 5 m. Ray optics is the short-distance, large-aperture limit of wave optics.',
    say: null,
  },
  // pp. 638, 647–648
  {
    topic: 0,
    kind: 'mistake',
    q: 'A point source gives intensity <i>I</i> and amplitude <i>A</i> at distance <i>r</i>. At 2<i>r</i>, is the amplitude <i>A</i>/4?',
    a: 'No, <i>A</i>/2: <i>I</i> ∝ 1/<i>r</i><sup>2</sup> but <i>I</i> ∝ <i>A</i><sup>2</sup>, so <i>A</i> ∝ 1/<i>r</i>. Apply the inverse-square law to intensity, never directly to amplitude',
    why: 'Forgetting the square-root step from intensity to amplitude is the trap.',
    say: null,
  },
  // pp. 646, 648
  {
    topic: 0,
    kind: 'shortcut',
    q: 'A refraction numerical gives one ratio. The fast way to the rest?',
    a: 'Use the one chain <i>n</i><sub>2</sub>/<i>n</i><sub>1</sub> = <i>v</i><sub>1</sub>/<i>v</i><sub>2</sub> = <i>λ</i><sub>1</sub>/<i>λ</i><sub>2</sub> = sin <i>i</i>/sin <i>r</i>, “big <i>n</i>, small everything-else”: any one ratio gives the other three, with no absolute speeds or wavelengths',
    why: '480 nm light enters water (<i>n</i> = 4/3) at 30°: <i>λ</i> = 360 nm in water and sin <i>r</i> = 0.375, <i>r</i> ≈ 22°. The answer must show light slower and its wavelength shorter in the denser medium.',
    say: null,
  },

  // ── Topic 02 · The Doppler Effect of Light ──
  // pp. 650–652, 656
  {
    topic: 1,
    kind: 'remember',
    q: 'The fractional frequency and wavelength shifts of light from a source with radial speed <i>v</i><sub>r</sub> ≪ <i>c</i>?',
    a: 'Δ<i>f</i>/<i>f</i> = −<i>v</i><sub>r</sub>/<i>c</i> and Δ<i>λ</i>/<i>λ</i> = +<i>v</i><sub>r</sub>/<i>c</i>, with <i>v</i><sub>r</sub> positive for recession, so <i>v</i><sub>r</sub> = <i>c</i>Δ<i>λ</i>/<i>λ</i>. Receding: longer <i>λ</i>, lower <i>f</i>, a redshift; approaching: a blueshift',
    why: 'A hydrogen line at 656.3 nm observed at 656.5 nm: Δ<i>λ</i> = +0.2 nm, a redshift, so the star recedes at about 9.1 × 10<sup>4</sup> m s<sup>−1</sup>.',
    say: 'Red = receding, retreating; Blue = bound toward you.',
  },
  // pp. 649–650, 654, 656
  {
    topic: 1,
    kind: 'remember',
    q: 'Which velocity produces the Doppler shift of light, and what is the exact formula at high speed?',
    a: 'Only the relative velocity of source and observer along the line of sight (light needs no medium); transverse motion gives no first-order shift. Exact, for a source receding at <i>v</i>: <i>f</i>′ = <i>f</i>√((<i>c</i> − <i>v</i>)/(<i>c</i> + <i>v</i>)), which reduces to Δ<i>f</i>/<i>f</i> ≈ −<i>v</i>/<i>c</i> for <i>v</i> ≪ <i>c</i>',
    why: 'A star whizzing mostly sideways shows almost no shift: using the full speed instead of the radial component over-counts.',
    say: null,
  },
  // pp. 652–653, 655
  {
    topic: 1,
    kind: 'mixup',
    q: 'A source approaches. What signs do Δ<i>f</i>/<i>f</i> and Δ<i>λ</i>/<i>λ</i> take?',
    a: 'Opposite signs: Δ<i>f</i>/<i>f</i> = −<i>v</i><sub>r</sub>/<i>c</i> but Δ<i>λ</i>/<i>λ</i> = +<i>v</i><sub>r</sub>/<i>c</i>, and approach means <i>v</i><sub>r</sub> < 0, so the frequency rises and the wavelength falls. Pick one form and stick with it',
    why: 'A star at 5.0 × 10<sup>14</sup> Hz approaching at 3.0 × 10<sup>5</sup> m s<sup>−1</sup>: Δ<i>f</i>/<i>f</i> = +1.0 × 10<sup>−3</sup>, <i>f</i>′ ≈ 5.005 × 10<sup>14</sup> Hz, while Δ<i>λ</i> = −0.6 nm (600 nm to 599.4 nm).',
    say: null,
  },
  // pp. 653–655
  {
    topic: 1,
    kind: 'mistake',
    q: 'Light from the two opposite limbs of a rotating star, or a radar wave off a moving car. Is the shift the single-shift result?',
    a: 'No: both double it. The two limbs shift in opposite senses, Δ<i>λ</i><sub>total</sub> = 2<i>λv</i><sub>eq</sub>/<i>c</i>; a wave reflected off a mover is shifted twice, |Δ<i>λ</i>/<i>λ</i>| = 2<i>v</i>/<i>c</i>',
    why: 'Limbs differing by 0.0080 nm at 600.0 nm: <i>v</i><sub>eq</sub> = 2.0 × 10<sup>3</sup> m s<sup>−1</sup>, and with <i>R</i> = 7.0 × 10<sup>8</sup> m a rotation period of about 25 days. Radar off a car at 30 m s<sup>−1</sup>: 2.0 × 10<sup>−7</sup>.',
    say: null,
  },
  // p. 655
  {
    topic: 1,
    kind: 'shortcut',
    q: 'A measured Doppler shift of light. The fast way to the speed?',
    a: 'Work in fractional shifts: compute the dimensionless Δ<i>λ</i>/<i>λ</i> = <i>v</i><sub>r</sub>/<i>c</i> first, decide the sign from “longer = receding”, then multiply by <i>c</i> for speed, by <i>λ</i> for Δ<i>λ</i>, or by <i>f</i> for Δ<i>f</i>',
    why: '600 nm observed as 600.6 nm: Δ<i>λ</i>/<i>λ</i> = 10<sup>−3</sup>, so 3 × 10<sup>5</sup> m s<sup>−1</sup>, receding. Everyday and stellar speeds give 10<sup>−7</sup> to 10<sup>−3</sup>; a shift near 1 means an error.',
    say: null,
  },

  // ── Topic 03 · Interference of Light and Young’s Double-Slit Experiment ──
  // pp. 658, 660–661, 663, 667–668
  {
    topic: 2,
    kind: 'remember',
    q: 'In Young’s double-slit experiment: the bright and dark conditions and the fringe width?',
    a: 'Path difference Δ<i>x</i> = <i>d</i> sin <i>θ</i> ≈ <i>yd</i>/<i>D</i>. Bright: Δ<i>x</i> = <i>mλ</i>, at <i>y</i> = <i>mλD</i>/<i>d</i>; dark: Δ<i>x</i> = (2<i>m</i> − 1)<i>λ</i>/2. Fringe width <i>β</i> = <i>λD</i>/<i>d</i>, uniform; angular width <i>θ</i><sub><i>β</i></sub> = <i>λ</i>/<i>d</i>. The central fringe is always bright',
    why: '600 nm, slits 0.8 mm apart, screen 1.5 m away: <i>β</i> = 1.125 mm, and the 3rd bright fringe is 3.375 mm from the centre.',
    say: 'Order <i>m</i>, index <i>n</i> — keep them apart.',
  },
  // pp. 657–658, 660, 663, 665–666, 668
  {
    topic: 2,
    kind: 'remember',
    q: 'The resultant intensity of two coherent sources, and the ratio <i>I</i><sub>max</sub>/<i>I</i><sub>min</sub>?',
    a: '<i>I</i> = <i>I</i><sub>1</sub> + <i>I</i><sub>2</sub> + 2√(<i>I</i><sub>1</sub><i>I</i><sub>2</sub>) cos <i>φ</i>, with <i>φ</i> = (2π/<i>λ</i>)Δ<i>x</i>; for equal sources <i>I</i> = 4<i>I</i><sub>0</sub> cos<sup>2</sup>(<i>φ</i>/2). <i>I</i><sub>max</sub>/<i>I</i><sub>min</sub> = ((√<i>I</i><sub>1</sub> + √<i>I</i><sub>2</sub>)/(√<i>I</i><sub>1</sub> − √<i>I</i><sub>2</sub>))<sup>2</sup> = ((<i>a</i><sub>1</sub> + <i>a</i><sub>2</sub>)/(<i>a</i><sub>1</sub> − <i>a</i><sub>2</sub>))<sup>2</sup>',
    why: 'Intensities 4 ∶ 1 mean amplitudes 2 ∶ 1, so <i>I</i><sub>max</sub> ∶ <i>I</i><sub>min</sub> = 9 ∶ 1. The sources must be coherent: two independent lamps give no fringes.',
    say: null,
  },
  // pp. 663–665, 667–668
  {
    topic: 2,
    kind: 'mixup',
    q: 'A glass sheet over one slit, or the whole apparatus immersed in a liquid: which changes the fringe width?',
    a: 'Only immersion: <i>λ</i> shrinks to <i>λ</i>/<i>n</i>, so <i>β</i>′ = <i>β</i>/<i>n</i> (divide, never multiply). A uniform sheet over one slit only shifts the pattern, by (<i>n</i> − 1)<i>t</i>/<i>λ</i> fringes, and leaves <i>β</i> = <i>λD</i>/<i>d</i> untouched',
    why: 'In water (<i>n</i> = 4/3) <i>β</i> becomes 3<i>β</i>/4. A sheet of <i>n</i> = 1.5 that moves the centre to the 6th bright fringe at 500 nm is 6 μm thick, and <i>β</i> stays 1.25 mm.',
    say: 'denser shrinks — denser medium ⇒ shorter <i>λ</i> ⇒ narrower fringes.',
  },
  // pp. 666–667
  {
    topic: 2,
    kind: 'mistake',
    q: 'Is the YDSE intensity for equal slits <i>I</i> = 4<i>I</i><sub>0</sub> cos<sup>2</sup><i>φ</i>?',
    a: 'No: it is <i>I</i> = 4<i>I</i><sub>0</sub> cos<sup>2</sup>(<i>φ</i>/2). Dropping the ½ is the most common intensity error',
    why: 'Where the path difference is <i>λ</i>/4, <i>φ</i> = π/2 and <i>I</i> = <i>I</i><sub>max</sub> cos<sup>2</sup>(π/4) = <i>I</i><sub>max</sub>/2.',
    say: null,
  },
  // pp. 664, 667
  {
    topic: 2,
    kind: 'shortcut',
    q: 'A YDSE numerical about fringe positions. The fast way?',
    a: 'Think in fringes, not metres: the <i>m</i>th bright fringe is at <i>mβ</i>, the <i>m</i>th dark one at (<i>m</i> − ½)<i>β</i>, and a glass sheet shifts the pattern by (<i>n</i> − 1)<i>t</i>/<i>λ</i> fringes: messy substitutions become one-line ratios',
    why: 'Bright fringes of 480 nm and 600 nm coincide where <i>m</i><sub>1</sub><i>λ</i><sub>1</sub> = <i>m</i><sub>2</sub><i>λ</i><sub>2</sub>, <i>m</i><sub>1</sub>/<i>m</i><sub>2</sub> = 5/4: with <i>d</i> = 0.5 mm and <i>D</i> = 1 m, first at 4.8 mm.',
    say: null,
  },

  // ── Topic 04 · Thin-Film Interference ──
  // pp. 671–672, 674, 678
  {
    topic: 3,
    kind: 'remember',
    q: 'A thin film of index <i>n</i> and thickness <i>t</i> in air: the bright and dark conditions in reflected light?',
    a: 'The path difference 2<i>nt</i> cos <i>r</i> carries a half-wave loss from the top reflection, so reflected bright: 2<i>nt</i> cos <i>r</i> = (<i>m</i> + ½)<i>λ</i>; reflected dark: 2<i>nt</i> cos <i>r</i> = <i>mλ</i>. Transmitted light is exactly reversed; near-normal, 2<i>nt</i> cos <i>r</i> becomes 2<i>nt</i>',
    why: 'A soap film (<i>n</i> = 1.33) is first bright for 532 nm at <i>t</i> = <i>λ</i>/(4<i>n</i>) = 100 nm. A film much thinner than <i>λ</i> looks black: the half-wave loss remains as 2<i>nt</i> → 0.',
    say: 'Two-en-tee, mind the half — write 2<i>nt</i>, then add the half-wave loss before deciding bright or dark.',
  },
  // pp. 671–672, 674–675, 678
  {
    topic: 3,
    kind: 'remember',
    q: 'Newton’s rings in reflected light: the centre and the ring radii?',
    a: 'The air gap is <i>t</i> = <i>ρ</i><sup>2</sup>/(2<i>R</i>) and the centre is dark. Dark rings: <i>ρ</i><sub><i>m</i></sub> = √(<i>mλR</i>); bright rings: <i>ρ</i><sub><i>m</i></sub> = √((<i>m</i> − ½)<i>λR</i>) (<i>m</i> = 1, 2, 3, …). A liquid of index <i>n</i> in the gap shrinks every ring by √<i>n</i>',
    why: '600 nm and <i>R</i> = 1.0 m: the 10th dark ring has <i>ρ</i> ≈ 2.45 mm. A 15th dark ring shrinking from 5.90 mm to 5.10 mm across gives <i>n</i> = (5.90/5.10)<sup>2</sup> ≈ 1.34.',
    say: null,
  },
  // pp. 671, 676–677
  {
    topic: 3,
    kind: 'mixup',
    q: 'Reflected light or transmitted light: which condition is bright where?',
    a: 'They are complementary: where the reflected light is bright the transmitted light is dark, and vice versa (energy conservation). Reflected bright is 2<i>nt</i> = (<i>m</i> + ½)<i>λ</i>, which is transmitted dark. State which one the problem asks for before writing the condition',
    why: 'A film of index 1.5 dark in reflected 600 nm light at near-normal incidence: 2<i>nt</i> = <i>mλ</i>, and the minimum non-zero thickness (<i>m</i> = 1) is <i>λ</i>/(2<i>n</i>) = 200 nm.',
    say: null,
  },
  // pp. 674–675, 677
  {
    topic: 3,
    kind: 'mistake',
    q: 'An anti-reflection coating of index <i>n</i><sub>coat</sub> on glass of index <i>n</i><sub>glass</sub>. Which index goes in its thickness?',
    a: 'The coating’s: <i>t</i><sub>min</sub> = <i>λ</i>/(4<i>n</i><sub>coat</sub>), not the glass’s; the ideal coating has <i>n</i><sub>coat</sub> = √<i>n</i><sub>glass</sub>. Both reflections lose <i>λ</i>/2, the losses cancel, and 2<i>n</i><sub>coat</sub><i>t</i> = (<i>m</i> + ½)<i>λ</i> gives the minimum reflection',
    why: 'Magnesium fluoride (<i>n</i> = 1.38) on glass (1.5) for 550 nm: <i>t</i> = 550/(4 × 1.38) ≈ 100 nm. Plugging in 1.5, or forgetting the 4, is the trap.',
    say: null,
  },
  // p. 677
  {
    topic: 3,
    kind: 'shortcut',
    q: 'Any thin-film problem at near-normal incidence. The routine?',
    a: '“2<i>nt</i>, then half-wave”: write the optical path 2<i>nt</i>; decide whether there is a net half-wave loss (one rarer → denser reflection: yes; zero or two: no); only then choose the bright or dark condition. AR coatings: the magic quarter, <i>t</i> = <i>λ</i>/(4<i>n</i>)',
    why: 'Thinnest bright and AR films come out around 100 nm for visible light: an answer in microns or millimetres needs a recheck.',
    say: null,
  },

  // ── Topic 05 · Diffraction of Light ──
  // pp. 680, 682, 684–685, 689
  {
    topic: 4,
    kind: 'remember',
    q: 'Single-slit diffraction: the minima and the width of the central maximum?',
    a: 'Minima (dark) at <i>a</i> sin <i>θ</i> = <i>mλ</i>, <i>m</i> = ±1, ±2, … (<i>m</i> ≠ 0). The central maximum has angular half-width <i>θ</i><sub>1</sub> ≈ <i>λ</i>/<i>a</i>, full angular width 2<i>λ</i>/<i>a</i> and linear width 2<i>λD</i>/<i>a</i>: twice as wide as the others, and brightest',
    why: '600 nm on a 0.2 mm slit, screen 1.5 m away: first minimum at 3 × 10<sup>−3</sup> rad, central maximum 9 mm wide. Halving <i>a</i> doubles the width.',
    say: '<i>d</i> for double (bright), <i>a</i> for aperture (dark) — same formula → <i>mλ</i>, opposite result.',
  },
  // pp. 682, 686, 689
  {
    topic: 4,
    kind: 'remember',
    q: 'The Rayleigh criterion for a telescope, and the limit of resolution of a microscope?',
    a: 'Telescope: <i>θ</i><sub>min</sub> = 1.22<i>λ</i>/<i>D</i><sub>ap</sub>, resolving power 1/<i>θ</i><sub>min</sub>, so a bigger aperture gives finer detail. Microscope: <i>d</i><sub>min</sub> = 1.22<i>λ</i>/(2<i>n</i> sin <i>β</i>) = 0.61<i>λ</i>/NA, improved by a large NA and a shorter <i>λ</i>',
    why: 'A 12 cm objective at 550 nm: <i>θ</i><sub>min</sub> ≈ 5.6 × 10<sup>−6</sup> rad, so on the Moon (3.8 × 10<sup>8</sup> m away) features closer than about 2.1 km merge.',
    say: null,
  },
  // pp. 685–686, 688–689
  {
    topic: 4,
    kind: 'mixup',
    q: 'Double slits of width <i>a</i> and separation <i>d</i>: which length goes in which condition, and which interference orders go missing?',
    a: 'Interference maxima use the separation, <i>d</i> sin <i>θ</i> = <i>m</i><sub>I</sub><i>λ</i>; diffraction minima use the width, <i>a</i> sin <i>θ</i> = <i>m</i><sub>D</sub><i>λ</i>. An order is missing where they coincide, <i>m</i><sub>I</sub>/<i>m</i><sub>D</sub> = <i>d</i>/<i>a</i>',
    why: '<i>d</i> = 0.9 mm, <i>a</i> = 0.3 mm: <i>d</i>/<i>a</i> = 3, so orders ±3, ±6, … are missing and 5 bright fringes lie inside the central diffraction maximum.',
    say: null,
  },
  // pp. 686–688
  {
    topic: 4,
    kind: 'mistake',
    q: 'Does a longer objective focal length improve a telescope’s resolving power?',
    a: 'No: a longer objective focal length improves magnification; a bigger aperture improves resolution, 1/<i>θ</i><sub>min</sub> = <i>D</i><sub>ap</sub>/(1.22<i>λ</i>). They are independent',
    why: 'Two stars 4 × 10<sup>−6</sup> rad apart at 500 nm need <i>D</i><sub>ap</sub> = 1.22<i>λ</i>/<i>θ</i><sub>min</sub> ≈ 0.15 m.',
    say: null,
  },
  // pp. 687–689
  {
    topic: 4,
    kind: 'shortcut',
    q: 'A single-slit diffraction estimate. The fast way?',
    a: 'The <i>λ</i>/<i>a</i> reflex: compute <i>λ</i>/<i>a</i> once; first minimum at <i>λ</i>/<i>a</i>, central width 2<i>λ</i>/<i>a</i>, linear central width 2<i>λD</i>/<i>a</i>. If <i>λ</i>/<i>a</i> is above about 0.1, diffraction is strong; if it is microscopic, ray optics is fine',
    why: '600 nm focused by a 0.5 m lens into a 3 mm central maximum: <i>a</i> = 2<i>fλ</i>/<i>w</i> = 0.2 mm.',
    say: null,
  },

  // ── Topic 06 · Polarisation of Light ──
  // pp. 690–691, 693, 697, 700
  {
    topic: 5,
    kind: 'remember',
    q: 'Unpolarised light of intensity <i>I</i><sub>0</sub> meets a polaroid, then a second at angle <i>θ</i>. The intensities?',
    a: 'The first passes <i>I</i><sub>0</sub>/2, plane-polarised along its axis, whatever its orientation. Then Malus’s law, <i>I</i> = <i>I</i><sub>0</sub> cos<sup>2</sup><i>θ</i> for already-polarised light: crossed (90°) gives 0, parallel gives all',
    why: 'Pass axes at 30°: <i>I</i> = (<i>I</i><sub>0</sub>/2) cos<sup>2</sup> 30° = 3<i>I</i><sub>0</sub>/8. Malus’s law needs a defined incident polarisation, so it never applies to the unpolarised input.',
    say: 'Half first, cosine-squared the rest.',
  },
  // pp. 690–691, 693, 699–700
  {
    topic: 5,
    kind: 'remember',
    q: 'Which waves can be polarised, what does that prove about light, and how is polarised light produced?',
    a: 'Only transverse waves: light is transverse, while sound, a longitudinal wave, cannot be polarised. Polarised light comes from selective absorption (a polaroid), reflection at the Brewster angle and scattering (at 90° to the Sun); double refraction is a fourth way',
    why: 'Partially polarised light has degree of polarisation <i>P</i> = (<i>I</i><sub>max</sub> − <i>I</i><sub>min</sub>)/(<i>I</i><sub>max</sub> + <i>I</i><sub>min</sub>): 0 unpolarised, 1 fully polarised.',
    say: 'transverse polarises, longitudinal can’t.',
  },
  // pp. 693, 695, 698–700
  {
    topic: 5,
    kind: 'mixup',
    q: 'Brewster’s law: is the Brewster angle the angle of incidence or of refraction?',
    a: 'Of incidence: tan <i>i</i><sub>B</sub> = <i>n</i>. There the reflected and refracted rays are perpendicular, <i>i</i><sub>B</sub> + <i>r</i> = 90°, so the refraction angle is the complement, 90° − <i>i</i><sub>B</sub>; the reflected light is completely plane-polarised',
    why: 'Glass (<i>n</i> ≈ 1.5): <i>i</i><sub>B</sub> ≈ 56.3°. A refraction angle of 32° at the Brewster angle gives <i>i</i><sub>B</sub> = 58° and <i>n</i> = tan 58° ≈ 1.60.',
    say: null,
  },
  // pp. 697–700
  {
    topic: 5,
    kind: 'mistake',
    q: 'In a stack of polaroids, is each Malus angle measured from the first polaroid?',
    a: 'No: each <i>θ</i> is measured between consecutive polaroids. Track the running orientation carefully',
    why: 'Axes at 0°, 30° and 60°: (<i>I</i><sub>0</sub>/2) cos<sup>2</sup> 30° cos<sup>2</sup> 30° = 9<i>I</i><sub>0</sub>/32. A crossed pair with a middle polaroid at 30° passes 3<i>I</i><sub>0</sub>/32: the third is at 60° to the second.',
    say: null,
  },
  // pp. 698, 700
  {
    topic: 5,
    kind: 'shortcut',
    q: 'Any multi-polaroid problem. The routine?',
    a: '“Half then chain”: write <i>I</i><sub>0</sub>/2 for the first polaroid, then multiply by cos<sup>2</sup>(Δ<i>θ</i>) for each later one, Δ<i>θ</i> being the angle to the previous one. Checks: crossed polaroids give zero; a two-polaroid stack passes at most <i>I</i><sub>0</sub>/2',
    why: 'A polaroid at <i>φ</i> between a crossed pair passes (<i>I</i><sub>0</sub>/8) sin<sup>2</sup> 2<i>φ</i>, largest, <i>I</i><sub>0</sub>/8, at <i>φ</i> = 45°.',
    say: null,
  },

  // ── Additional A · Thin Films: The General Phase-Change Case ──
  // pp. 701–703
  {
    topic: 6,
    kind: 'remember',
    q: 'A film on glass, or in a liquid: how do the thin-film conditions change?',
    a: 'Count the half-wave losses (one at each rarer → denser reflection): Δ = 2<i>n</i><sub>f</sub><i>t</i> − <i>N</i><sub>HW</sub><i>λ</i>/2, reflected bright at Δ = <i>mλ</i>. With one loss (film in air) bright is 2<i>nt</i> = (<i>m</i> + ½)<i>λ</i>; with two (a film on higher-index glass) the conditions swap, bright at 2<i>nt</i> = (<i>m</i> + 1)<i>λ</i>',
    why: 'Oil (<i>n</i> = 1.45) on glass bright for 500 nm: <i>t</i> = <i>λ</i>/(2<i>n</i>) ≈ 172 nm. A soap film (1.33) 300 nm thick on glass gives Δ = 798 nm, 1.33<i>λ</i> at 600 nm: closer to dark.',
    say: null,
  },
  // pp. 702–704
  {
    topic: 6,
    kind: 'remember',
    q: 'Newton’s rings viewed in transmitted light: the centre and the rings?',
    a: 'The twice-reflected beam has two half-wave losses, so Δ = 2<i>t</i> + <i>λ</i> and the centre is bright. Dark rings: 2<i>t</i> = (<i>m</i> − ½)<i>λ</i>; bright rings: 2<i>t</i> = <i>mλ</i>, <i>ρ</i><sub><i>m</i></sub> = √(<i>mλR</i>): the pattern complements the reflected one',
    why: '589 nm and <i>R</i> = 0.90 m: the 5th dark ring has <i>ρ</i><sub>5</sub><sup>2</sup> = 4.5<i>λR</i>, <i>ρ</i><sub>5</sub> ≈ 1.54 mm, where the reflected 5th bright ring sits.',
    say: null,
  },

  // ── Additional B · The Diffraction Grating ──
  // pp. 704–705
  {
    topic: 7,
    kind: 'remember',
    q: 'The grating equation, and the intensity of its principal maxima?',
    a: '<i>d</i> sin <i>θ</i> = <i>mλ</i>, with <i>d</i> = 1/<i>N</i><sub>0</sub> for <i>N</i><sub>0</sub> lines per unit length. With <i>N</i> slits <i>I</i> = <i>I</i><sub>0</sub> sin<sup>2</sup>(<i>Nφ</i>/2)/sin<sup>2</sup>(<i>φ</i>/2), giving sharp principal maxima of <i>N</i><sup>2</sup><i>I</i><sub>0</sub>, with <i>N</i> − 1 minima and <i>N</i> − 2 secondary maxima between neighbours',
    why: '500 lines per mm: <i>d</i> = 2 μm; the second order of 600 nm is at sin <i>θ</i> = 0.6, <i>θ</i> ≈ 36.9°; and since sin <i>θ</i> ≤ 1, <i>m</i><sub>max</sub> = 3.',
    say: null,
  },
  // pp. 705–706
  {
    topic: 7,
    kind: 'remember',
    q: 'The resolving power of a grating?',
    a: '<i>R</i> = <i>λ</i>/Δ<i>λ</i> = <i>mN</i>, the order times the total number of illuminated lines',
    why: 'A 5 cm grating with 1000 lines per cm in the second order: <i>N</i> = 5000, <i>R</i> = 10 000, Δ<i>λ</i><sub>min</sub> ≈ 0.06 nm, so it resolves the 0.6 nm sodium doublet.',
    say: null,
  },

  // ── Additional C · Intensity Distribution in Single-Slit Diffraction ──
  // pp. 707–708
  {
    topic: 8,
    kind: 'remember',
    q: 'The intensity at angle <i>θ</i> in single-slit diffraction?',
    a: '<i>I</i>(<i>θ</i>) = <i>I</i><sub>0</sub>(sin <i>α</i>/<i>α</i>)<sup>2</sup> with <i>α</i> = π<i>a</i> sin <i>θ</i>/<i>λ</i>, <i>I</i><sub>0</sub> being the central intensity; the minima fall at <i>α</i> = <i>m</i>π',
    why: '600 nm, a 0.3 mm slit, sin <i>θ</i> = 0.01: <i>α</i> = 5π, exactly the 5th minimum, so the intensity is zero.',
    say: null,
  },
  // pp. 707–708
  {
    topic: 8,
    kind: 'remember',
    q: 'Where are the secondary maxima of a single slit, and how bright is the first?',
    a: 'Where tan <i>α</i> = <i>α</i>: <i>α</i> ≈ 4.493, 7.725, 10.904, … The first carries <i>I</i><sub>0</sub>(sin 4.493/4.493)<sup>2</sup> ≈ <i>I</i><sub>0</sub>/21.2 ≈ 0.047<i>I</i><sub>0</sub>, about 4.7% of the central maximum',
    why: '500 nm and <i>a</i> = 0.5 mm: sin <i>θ</i> = 4.493<i>λ</i>/(π<i>a</i>) ≈ 1.43 × 10<sup>−3</sup>, <i>θ</i> ≈ 0.082°.',
    say: null,
  },

  // ── Additional D · Polarisation by Double Refraction ──
  // pp. 709–710
  {
    topic: 9,
    kind: 'remember',
    q: 'A doubly-refracting plate of thickness <i>t</i>: the path and phase difference between its O- and E-rays, and when do they interfere?',
    a: 'Δ = <i>t</i>(<i>n</i><sub>o</sub> − <i>n</i><sub>e</sub>) and <i>δ</i> = 2π<i>t</i>(<i>n</i><sub>o</sub> − <i>n</i><sub>e</sub>)/<i>λ</i>. The two rays are polarised perpendicular to each other, so they interfere only once an analyser brings them to a common direction',
    why: 'Calcite (<i>n</i><sub>o</sub> = 1.658, <i>n</i><sub>e</sub> = 1.486), 0.05 mm thick, 589 nm: Δ = 8.6 μm and <i>δ</i> = 29.2π, equivalent to 1.2π (216°).',
    say: null,
  },
  // pp. 709–711
  {
    topic: 9,
    kind: 'remember',
    q: 'Plane-polarised light at 45° to a plate’s optic axis: the analysed intensity, and the quarter- and half-wave thicknesses?',
    a: 'Analyser parallel to the input: <i>I</i> = <i>I</i><sub>0</sub> cos<sup>2</sup>(<i>δ</i>/2); crossed: <i>I</i><sub>0</sub> sin<sup>2</sup>(<i>δ</i>/2). A quarter-wave plate has <i>δ</i> = π/2, <i>t</i> = <i>λ</i>/(4(<i>n</i><sub>o</sub> − <i>n</i><sub>e</sub>)); a half-wave plate <i>δ</i> = π, <i>t</i> = <i>λ</i>/(2Δ<i>n</i>)',
    why: 'Calcite (Δ<i>n</i> = 0.172): a quarter-wave plate for 550 nm is about 800 nm thick, a half-wave plate for 600 nm about 1.74 μm.',
    say: null,
  },

  // ── Additional E · Resolving Power: Rayleigh Criterion in Depth ──
  // pp. 711–712
  {
    topic: 10,
    kind: 'remember',
    q: 'What sets the resolving power of a telescope?',
    a: 'Only the aperture diameter <i>D</i>: <i>θ</i><sub>min</sub> = 1.22<i>λ</i>/<i>D</i> (radians), not the magnification, which only enlarges an already-resolved image. For a slit of width <i>a</i>, <i>θ</i><sub>min</sub> = <i>λ</i>/<i>a</i>',
    why: 'A 5 m telescope at 550 nm: <i>θ</i><sub>min</sub> ≈ 1.34 × 10<sup>−7</sup> rad, about 51 m on the Moon (3.84 × 10<sup>8</sup> m away), so two astronauts 2 m apart (5.2 × 10<sup>−9</sup> rad) cannot be resolved.',
    say: null,
  },
  // pp. 712–713
  {
    topic: 10,
    kind: 'remember',
    q: 'The limit of resolution of a microscope, and how to improve it?',
    a: '<i>d</i><sub>min</sub> = 0.61<i>λ</i>/NA, with NA = <i>n</i> sin <i>α</i> (<i>n</i> the index between object and objective, <i>α</i> the half-angle of the accepted cone). Raise NA (oil immersion, <i>n</i> > 1) or shorten <i>λ</i>',
    why: 'An oil-immersion objective of NA = 1.30 at 546 nm resolves 0.26 μm; a dry objective of NA ≈ 0.65 resolves only 0.51 μm, so the resolving ability is halved.',
    say: null,
  },
];
