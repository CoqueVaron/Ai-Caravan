import React from 'react';
import { colorBrandA, colorBrandB, typographyA, radius } from '../../tokens/tokens';

const SIZE = {
  sm: { height: '32px', paddingInline: '12px', fontSize: '12px', lineHeight: '16px' },
  md: { height: '40px', paddingInline: '16px', fontSize: '14px', lineHeight: '20px' },
  lg: { height: '48px', paddingInline: '20px', fontSize: '16px', lineHeight: '24px' },
};

export function Button({
  variant = 'Primary',
  size = 'md',
  brand = 'A',
  disabled = false,
  children,
  onClick,
  type = 'button',
}) {
  const C = brand === 'B' ? colorBrandB : colorBrandA;
  const s = SIZE[size] ?? SIZE.md;

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: s.height,
    paddingInline: s.paddingInline,
    fontSize: s.fontSize,
    lineHeight: s.lineHeight,
    fontFamily: 'Inter, sans-serif',
    fontWeight: 600,
    borderRadius: radius.md,
    border: 'none',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.4 : 1,
    transition: 'background-color 0.15s, color 0.15s, border-color 0.15s',
    whiteSpace: 'nowrap',
    pointerEvents: disabled ? 'none' : 'auto',
  };

  const styles = {
    Primary: {
      ...base,
      backgroundColor: C.primary,
      color: C.textOnBrand,
    },
    Secondary: {
      ...base,
      backgroundColor: C.bgMuted,
      color: C.textDefault,
    },
    Tertiary: {
      ...base,
      backgroundColor: C.primarySubtle,
      color: C.primary,
    },
    Ghost: {
      ...base,
      backgroundColor: 'transparent',
      color: C.primary,
      border: `1.5px solid ${C.borderBrand}`,
    },
    Destructive: {
      ...base,
      backgroundColor: '#DC2626',
      color: '#FFFFFF',
    },
  };

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      style={styles[variant] ?? styles.Primary}
    >
      {children}
    </button>
  );
}

export default Button;
