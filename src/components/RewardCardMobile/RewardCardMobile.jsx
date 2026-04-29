import React from 'react';
import { colorBrandA, colorBrandB, typographyA, spacing, radius, elevation } from '../../tokens/tokens';

const TIER_CONFIG = {
  A: {
    Default:   { iconBg: '#F3F4F6', iconColor: '#6B7280', progressColor: '#0B6FFF' },
    Gold:      { iconBg: '#FEF3C7', iconColor: '#D97706', progressColor: '#D97706' },
    Exclusive: { iconBg: '#CFFAFE', iconColor: '#0891B2', progressColor: '#0891B2' },
    VIP:       { iconBg: '#EDE9FE', iconColor: '#7C3AED', progressColor: '#7C3AED' },
  },
  B: {
    Default:   { iconBg: '#1A1F26', iconColor: '#9CA3AF', progressColor: '#8B5CF6' },
    Gold:      { iconBg: '#2D2000', iconColor: '#D4AF37', progressColor: '#D4AF37' },
    Exclusive: { iconBg: '#003340', iconColor: '#22D3EE', progressColor: '#22D3EE' },
    VIP:       { iconBg: '#1E0040', iconColor: '#A855F7', progressColor: '#A855F7' },
  },
};

export function RewardCardMobile({
  variant = 'Default',
  brand = 'A',
  icon = '◈',
  title = 'Free Night Stay',
  subtitle = 'Earn 500 more points',
  progress = 0.35,
  points = '1,250 pts',
  ctaLabel = 'Redeem Reward',
  onRedeem,
}) {
  const C = brand === 'B' ? colorBrandB : colorBrandA;
  const tc = TIER_CONFIG[brand]?.[variant] ?? TIER_CONFIG.A.Default;
  const pct = Math.max(0, Math.min(1, progress));

  return (
    <article
      style={{
        width: '100%',
        maxWidth: '350px',
        backgroundColor: C.bgDefault,
        borderRadius: radius.lg,
        border: `1px solid ${C.borderDefault}`,
        boxShadow: elevation[1],
        padding: spacing[4],
        display: 'flex',
        flexDirection: 'column',
        gap: spacing[3],
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', gap: spacing[3], alignItems: 'flex-start' }}>
        <div
          style={{
            width: '44px',
            height: '44px',
            borderRadius: radius.md,
            backgroundColor: tc.iconBg,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '20px',
            color: tc.iconColor,
            flexShrink: 0,
          }}
        >
          {icon}
        </div>
        <div style={{ flex: 1 }}>
          <h3 style={{ ...typographyA.h6, fontSize: '14px', color: C.textDefault, margin: '0 0 2px' }}>
            {title}
          </h3>
          <p style={{ ...typographyA.caption, color: C.textSecondary, margin: 0 }}>{subtitle}</p>
        </div>
      </div>

      {/* Progress */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[1] }}>
        <div
          style={{
            width: '100%',
            height: '8px',
            borderRadius: radius.full,
            backgroundColor: C.bgMuted,
            overflow: 'hidden',
          }}
        >
          <div
            style={{
              width: `${pct * 100}%`,
              height: '100%',
              borderRadius: radius.full,
              backgroundColor: tc.progressColor,
            }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ ...typographyA.caption, color: C.textSecondary }}>{Math.round(pct * 100)}%</span>
          <span style={{ ...typographyA.caption, color: C.textSecondary, fontWeight: 600 }}>{points}</span>
        </div>
      </div>

      {/* CTA */}
      <button
        onClick={onRedeem}
        style={{
          width: '100%',
          height: '40px',
          backgroundColor: C.primary,
          color: C.textOnBrand,
          border: 'none',
          borderRadius: radius.md,
          ...typographyA.button,
          cursor: 'pointer',
        }}
      >
        {ctaLabel}
      </button>
    </article>
  );
}

export default RewardCardMobile;
