import React from 'react';
import { colorBrandA, colorBrandB } from '../../tokens/tokens';

export function StarRating({
  rating = 4,
  maxRating = 5,
  brand = 'A',
  size = 'md',
  showLabel = false,
}) {
  const C = brand === 'B' ? colorBrandB : colorBrandA;
  const starSize = size === 'sm' ? '12px' : size === 'lg' ? '20px' : '16px';
  const filled = Math.round(Math.min(maxRating, Math.max(0, rating)));

  return (
    <div
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '2px',
      }}
    >
      {Array.from({ length: maxRating }, (_, i) => (
        <span
          key={i}
          style={{
            fontSize: starSize,
            color: i < filled ? C.loyaltyGold : C.borderDefault,
            lineHeight: 1,
          }}
        >
          ★
        </span>
      ))}
      {showLabel && (
        <span
          style={{
            marginLeft: '4px',
            fontFamily: 'Inter, sans-serif',
            fontSize: size === 'sm' ? '11px' : '13px',
            color: C.textSecondary,
            lineHeight: 1,
          }}
        >
          {rating.toFixed(1)}
        </span>
      )}
    </div>
  );
}

export default StarRating;
