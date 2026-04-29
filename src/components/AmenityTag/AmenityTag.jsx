import React from 'react';
import { colorBrandA, colorBrandB, radius } from '../../tokens/tokens';

const AMENITY_ICONS = {
  WiFi:         '📶',
  Pool:         '🏊',
  Spa:          '💆',
  Restaurant:   '🍽️',
  Gym:          '🏋️',
  Parking:      'P',
  Breakfast:    '☕',
  RoomService:  '🛎️',
  Bar:          '🍸',
  Concierge:    '🎩',
  Airport:      '✈️',
  PetFriendly:  '🐾',
  default:      '✓',
};

export function AmenityTag({
  amenity = 'WiFi',
  brand = 'A',
  size = 'md',
}) {
  const C = brand === 'B' ? colorBrandB : colorBrandA;
  const icon = AMENITY_ICONS[amenity] ?? AMENITY_ICONS.default;

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        backgroundColor: C.bgMuted,
        color: C.textSecondary,
        borderRadius: radius.full,
        border: `1px solid ${C.borderDefault}`,
        padding: size === 'sm' ? '2px 10px' : '4px 12px',
        fontFamily: 'Inter, sans-serif',
        fontWeight: 400,
        fontSize: size === 'sm' ? '11px' : '12px',
        lineHeight: '18px',
        whiteSpace: 'nowrap',
      }}
    >
      <span style={{ fontSize: size === 'sm' ? '10px' : '12px' }}>{icon}</span>
      {amenity}
    </span>
  );
}

export default AmenityTag;
