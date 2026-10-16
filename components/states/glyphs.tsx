import Svg, { Circle, Path, Rect } from 'react-native-svg';

/**
 * THE GLYPHS A STATE CAN WEAR, one drawing per meaning.
 *
 * Drawn on a 24 grid in one stroke weight, so a plate reads the same whichever
 * glyph is on it. They are line drawings rather than filled shapes because the
 * plate behind them is the colour; the glyph only has to say what the state is
 * about. react-native-svg draws these identically on iOS and Android (no
 * dashes, no zero-length strokes, nothing the two render differently).
 */
export type StateGlyph =
  | 'doubts'
  | 'notes'
  | 'progress'
  | 'plan'
  | 'search'
  | 'retry'
  | 'offline'
  | 'clock'
  | 'check'
  | 'cameraOff'
  | 'micOff'
  | 'book'
  | 'lock'
  | 'paper';

export function Glyph({
  name,
  size,
  color,
  weight = 1.8,
}: {
  name: StateGlyph;
  size: number;
  color: string;
  weight?: number;
}) {
  const stroke = {
    stroke: color,
    strokeWidth: weight,
    strokeLinecap: 'round' as const,
    strokeLinejoin: 'round' as const,
    fill: 'none',
  };
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24">
      {name === 'doubts' && (
        <>
          <Rect x={4} y={3.5} width={16} height={17} rx={3.5} {...stroke} />
          <Path d="M9.6 9.4a2.5 2.5 0 1 1 3.3 2.4c-.6.2-.9.7-.9 1.3v.4" {...stroke} />
          <Circle cx={12} cy={16.6} r={1} fill={color} />
        </>
      )}
      {name === 'notes' && (
        <>
          <Rect x={5} y={3.5} width={14} height={17} rx={2.5} {...stroke} />
          <Path d="M9 3.5v17M12 8.5h4M12 12h4" {...stroke} />
        </>
      )}
      {name === 'progress' && <Path d="M5 19.5V13M10 19.5V8.5M15 19.5v-5M20 19.5V5" {...stroke} />}
      {name === 'plan' && (
        <Path
          d="M5 7l1.6 1.6L9.5 5.7M5 13l1.6 1.6 2.9-2.9M12.5 7.5H19M12.5 13.5H19M12.5 19H19M5 19h4"
          {...stroke}
        />
      )}
      {name === 'search' && (
        <>
          <Circle cx={10.5} cy={10.5} r={6} {...stroke} />
          <Path d="M15 15l4.5 4.5" {...stroke} />
        </>
      )}
      {name === 'retry' && <Path d="M19 12a7 7 0 1 1-2.05-4.95M19 4.5V8h-3.5" {...stroke} />}
      {name === 'offline' && (
        <Path
          d="M7 18h10.5a3.5 3.5 0 0 0 .6-6.95A6 6 0 0 0 7.2 9.4 4.3 4.3 0 0 0 7 18zM4 4l16 16"
          {...stroke}
        />
      )}
      {name === 'clock' && (
        <>
          <Circle cx={12} cy={12} r={8} {...stroke} />
          <Path d="M12 7.5V12l3 2" {...stroke} />
        </>
      )}
      {name === 'check' && <Path d="M5.5 12.5l4 4 9-9.5" {...stroke} />}
      {name === 'cameraOff' && (
        <Path
          d="M9 5.5h6l1.4 2H19a1.5 1.5 0 0 1 1.5 1.5v8M20 20H5a1.5 1.5 0 0 1-1.5-1.5V9A1.5 1.5 0 0 1 5 7.5M3.5 3.5l17 17M10 10.6a3 3 0 0 0 3.9 3.9"
          {...stroke}
        />
      )}
      {name === 'micOff' && (
        <>
          <Rect x={9} y={3.5} width={6} height={11} rx={3} {...stroke} />
          <Path d="M6 11.5a6 6 0 0 0 10 4.5M18 11.5v.5M12 18v2.5M4 4l16 16" {...stroke} />
        </>
      )}
      {name === 'book' && (
        <Path
          d="M4 5.5c2.7-1 5.3-1 8 .7v13.3c-2.7-1.7-5.3-1.7-8-.7zM20 5.5c-2.7-1-5.3-1-8 .7v13.3c2.7-1.7 5.3-1.7 8-.7z"
          {...stroke}
        />
      )}
      {name === 'lock' && (
        <>
          <Rect x={5} y={10.5} width={14} height={10} rx={2.5} {...stroke} />
          <Path d="M8.5 10.5V8a3.5 3.5 0 0 1 7 0v2.5" {...stroke} />
        </>
      )}
      {name === 'paper' && (
        <Path d="M7 3.5h7.5L18.5 7.5v13H7zM14 3.5V8h4.5M10 12h5.5M10 15.5h5.5" {...stroke} />
      )}
    </Svg>
  );
}
