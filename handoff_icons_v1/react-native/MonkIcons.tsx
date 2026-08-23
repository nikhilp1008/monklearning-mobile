import React from 'react';
import Svg, { G, Path, Rect, Circle } from 'react-native-svg';

// MonkLearning home icons — 24pt grid, 1.9 stroke, one amber accent each.
// Do not scale below 20pt; the accent loses its clearance.
export const ink = '#1C1A16';
export const amberAccent = '#EEA31F';

export type IconProps = {
  size?: number;
  color?: string;
  accent?: string;
  strokeWidth?: number;
};

export const SnapADoubtIcon = ({ size = 24, color = ink, accent = amberAccent, strokeWidth = 1.9 }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <G stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <Path d={"M8.6 6.4 9.9 4.1h4.2l1.3 2.3"} />
      <Rect x={2.8} y={6.4} width={18.4} height={13.5} rx={3.2} />
      <Circle cx={12} cy={13.2} r={3.6} />
    </G>
    <Circle cx={17.8} cy={9.9} r={1.4} fill={accent} />
  </Svg>
);

export const PracticeIcon = ({ size = 24, color = ink, accent = amberAccent, strokeWidth = 1.9 }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <G stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <Path d={"M7 5.6h11.4a2 2 0 0 1 2 2v9.2"} />
      <Rect x={3.4} y={8.2} width={13.2} height={11.8} rx={2} />
      <Path d={"M6.4 12.4h7.2"} />
    </G>
    <Circle cx={7.2} cy={16.2} r={1.6} fill={accent} />
  </Svg>
);

export const MilestonesIcon = ({ size = 24, color = ink, accent = amberAccent, strokeWidth = 1.9 }: IconProps) => (
  <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
    <G stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <Path d={"M8.4 3.2 11 9.6"} />
      <Path d={"M15.6 3.2 13 9.6"} />
      <Circle cx={12} cy={15.4} r={5.8} />
    </G>
    <Circle cx={12} cy={15.4} r={2.2} fill={accent} />
  </Svg>
);
