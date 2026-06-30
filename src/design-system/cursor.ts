// Design System - Cursor States and Sizing Configuration
export const cursor = {
  default: {
    size: 16,
    border: '1px solid rgba(0, 87, 255, 0.5)',
    bg: 'rgba(0, 87, 255, 0.02)',
  },
  hover: {
    size: 48,
    border: '1px solid rgba(0, 87, 255, 0.8)',
    bg: 'rgba(0, 87, 255, 0.05)',
  },
  click: {
    size: 12,
    border: '2px solid #0057FF',
    bg: '#0057FF',
  },
} as const;

export type CursorToken = typeof cursor;
