import { createContext, useContext, type ReactNode } from 'react';
import { Text as SvgTextBase, type TextProps } from 'react-native-svg';

/**
 * HOW A FIGURE'S LABELS ARE SET, chosen by whoever draws the figure.
 *
 * Every label in every figure is Georgia at 9.5 to 11, which is how the
 * current reader draws them. The reader pilot (components/textbook/pilot.ts)
 * sets them in the app's own face instead: words, numbers and units in Onest,
 * a size up, and only a label that IS a symbol (a lone R, x, θ, F₁) in serif
 * italic, which is how maths is set everywhere else on the page.
 *
 * A context rather than a prop, because labels are drawn in some forty places
 * across plot.tsx, figures.tsx and diagrams.tsx, all of which now draw through
 * `FigText`. With no provider they draw exactly as before.
 */
export const FigureFaceContext = createContext<{ sans: boolean }>({ sans: false });

export function useFigureFace() {
  return useContext(FigureFaceContext);
}

/** One letter, Greek or Latin, with at most a subscript, prime or star after it. */
const SYMBOL = /^[A-Za-zΑ-ω][₀-₉0-9′'*]*$/;
/** The figures' pale label colour, darkened a step so it reads at Onest's weight. */
const SOFT = '#B5B0A4';
const SOFT_SANS = '#9C988C';

function textOf(children: ReactNode): string {
  if (typeof children === 'string' || typeof children === 'number') return String(children);
  if (Array.isArray(children)) return children.map(textOf).join('');
  return '';
}

export function FigText(props: TextProps & { children?: ReactNode }) {
  const { sans } = useFigureFace();
  if (!sans) return <SvgTextBase {...props} />;
  // A figure that already chose Onest for a line (the flow chart's box names)
  // keeps its choice.
  if (typeof props.fontFamily === 'string' && props.fontFamily.startsWith('Onest')) {
    return <SvgTextBase {...props} />;
  }
  const symbol = SYMBOL.test(textOf(props.children).trim());
  const size = typeof props.fontSize === 'number' ? props.fontSize + 1 : props.fontSize;
  return (
    <SvgTextBase
      {...props}
      fontSize={size}
      fill={props.fill === SOFT ? SOFT_SANS : props.fill}
      fontFamily={symbol ? 'Georgia' : 'Onest_500Medium'}
      fontStyle={symbol ? 'italic' : 'normal'}
    />
  );
}
