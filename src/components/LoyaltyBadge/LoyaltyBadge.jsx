import React from 'react';
import { colorBrandA, colorBrandB, typographyA, radius } from '../../tokens/tokens';

const TIER_CONFIG_A = {
  Bronze:    { bg: '#FEF3C7', color: '#D97706', label: 'Bronze'    },
  Silver:    { bg: '#F3F4F6', color: '#6B7280', label: 'Silver'    },
  Gold:      { bg: '#FEF3C7', color: '#D97706', label: 'Gold'      },
  VIP:       { bg: '#EDE9FE', color: '#7C3AED', label: 'VIP'       },
  Exclusive: { bg: '#CFFAFE', color: '#0891B2', label: 'Exclusive' },
  New:       { bg: '#DBEAFE', color: '#0B6FFF', label: 'New'       },
};

const TIER_CONFIG_B = {
  Bronze:    { bg: '#2D2000', color: '#D4AF37', label: 'Bronze'    },
  Silver:    { bg: '#1A1F26', color: '#9CA3AF', label: 'Silver'    },
  Gold:      { bg: '#2D2000', color: '#D4AF37', label: 'Gold'      },
  VIP:       { bg: '#1E0040', color: '#A855F7', label: 'VIP'       },
  Exclusive: { bg: '#003340', color: '#22D3EE', label: 'Exclusive' },
  New:       { bg: '#1A2033', color: '#8B5CF6', label: 'New'       },
};

export function LoyaltyBadge({
  tier = 'Bronze',
  brand = 'A',
  size = 'md',
}) {
  const config = (brand === 'B' ? TIER_CONFIG_B : TIER_CONFIG_A)[tier] ?? TIER_CONFIG_A.Bronze;

  const sizeStyle = size === 'sm'
    ? { padding: '2px 8px',  fontSize: '11px', lineHeight: '16px' }
    : { padding: '4px 12px', fontSize: '12px', lineHeight: '18px' };

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '4px',
        backgroundColor: config.bg,
        color: config.color,
        borderRadius: radius.full,
        fontFamily: 'Inter, sans-serif',
        fontWeight: 600,
        letterSpacing: '0.2px',
        whiteSpace: 'nowrap',
        ...sizeStyle,
      }}
    >
      ◈ {config.label}
    </span>
  );
}

export default LoyaltyBadge;
