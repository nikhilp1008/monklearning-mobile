import React from 'react';

// MonkLearning home icons — 24px grid, 1.9 stroke, one amber accent each.
export type IconProps = {
  size?: number;
  color?: string;
  accent?: string;
  strokeWidth?: number;
};

export const SnapADoubtIcon = ({ size = 24, color = 'currentColor', accent = '#EEA31F', strokeWidth = 1.9 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <g stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.6 6.4 9.9 4.1h4.2l1.3 2.3" />
      <rect x="2.8" y="6.4" width="18.4" height="13.5" rx="3.2" />
      <circle cx="12" cy="13.2" r="3.6" />
    </g>
    <circle cx="17.8" cy="9.9" r="1.4" fill={accent} />
  </svg>
);

export const PracticeIcon = ({ size = 24, color = 'currentColor', accent = '#EEA31F', strokeWidth = 1.9 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <g stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 5.6h11.4a2 2 0 0 1 2 2v9.2" />
      <rect x="3.4" y="8.2" width="13.2" height="11.8" rx="2" />
      <path d="M6.4 12.4h7.2" />
    </g>
    <circle cx="7.2" cy="16.2" r="1.6" fill={accent} />
  </svg>
);

export const MilestonesIcon = ({ size = 24, color = 'currentColor', accent = '#EEA31F', strokeWidth = 1.9 }: IconProps) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" aria-hidden="true">
    <g stroke={color} strokeWidth={strokeWidth} strokeLinecap="round" strokeLinejoin="round">
      <path d="M8.4 3.2 11 9.6" />
      <path d="M15.6 3.2 13 9.6" />
      <circle cx="12" cy="15.4" r="5.8" />
    </g>
    <circle cx="12" cy="15.4" r="2.2" fill={accent} />
  </svg>
);
