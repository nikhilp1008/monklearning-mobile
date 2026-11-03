import { StyleSheet, View, useWindowDimensions } from 'react-native';

const GRID = 'rgba(28,26,22,0.04)';
const GRID_SIZE = 26;

/** The graph paper the design lays everything on: 26px squares at 4% ink. */
export function GridPaper() {
  const { width, height } = useWindowDimensions();
  const rows = Math.ceil(height / GRID_SIZE);
  const cols = Math.ceil(width / GRID_SIZE);
  return (
    <View style={StyleSheet.absoluteFill} pointerEvents="none">
      {Array.from({ length: rows }, (_, i) => (
        <View
          key={`r${i}`}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: (i + 1) * GRID_SIZE,
            height: 1,
            backgroundColor: GRID,
          }}
        />
      ))}
      {Array.from({ length: cols }, (_, i) => (
        <View
          key={`c${i}`}
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            left: (i + 1) * GRID_SIZE,
            width: 1,
            backgroundColor: GRID,
          }}
        />
      ))}
    </View>
  );
}
