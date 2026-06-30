// Design System - Elevation (Z-index layers)
export const elevation = {
  base: 0,
  card: 1,
  glow: 2,
  navbar: 100,
  modal: 200,
  commandBar: 300,
  cursor: 9999,
} as const;

export type ElevationToken = typeof elevation;
