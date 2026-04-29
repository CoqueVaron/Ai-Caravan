import React from 'react';
import { colorBrandA, colorBrandB, typographyA, spacing, radius, elevation } from '../../tokens/tokens';

const TIER_CONFIG = {
  A: {
    Bronze: { fillColor: '#D97706', badgeBg: '#FEF3C7', badgeColor: '#D97706' },
    Silver: { fillColor: '#6B7280', badgeBg: '#F3F4F6', badgeColor: '#6B7280' },
    Gold:   { fillColor: '#D97706', badgeBg: '#FEF3C7', badgeColor: '#D97706' },
    VIP:    { fillColor: '#7C3AED', badgeBg: '#EDE9FE', badgeColor: '#7C3AED' },
  },
  B: {
    Bronze: { fillColor: '#D4AF37', badgeBg: '#2D2000', badgeColor: '#D4AF37' },
    Silver: { fillColor: '#9CA3AF', badgeBg: '#1A1F26', badgeColor: '#9CA3AF' },
    Gold:   { fillColor: '#D4AF37', badgeBg: '#2D2000', badgeColor: '#D4AF37' },
    VIP:    { fillColor: '#A855F7', badgeBg: '#1E0040', badgeColor: '#A855F7' },
  },
};

export function LoyaltyProgress({
  variant = 'Bronze',
  brand = 'A',
  points = '1,250',
  nextTier = 'Silver',
  pointsNeeded = '750',
  progress = 0.63,
  benefits = ['Complimentary breakfast', 'Late checkout', 'Priority check-in'],
  ctaLabel = 'View My Rewards',
  onCta,
}) {
  const C = brand === 'B' ? colorBrandB : colorBrandA;
  const tc = TIER_CONFIG[brand]?.[variant] ?? TIER_CONFIG.A.Bronze;
  const pct = Math.max(0, Math.min(1, progress));

  return (
    <section
      style={{
        width: '480px',
        backgroundColor: C.bgDefault,
        borderRadius: radius.xl,
        border: `1px solid ${C.borderDefault}`,
        boxShadow: elevation[2],
        padding: spacing[6],
        display: 'flex',
        flexDirection: 'column',
        gap: spacing[5],
        flexShrink: 0,
      }}
    >
      {/* Header: tier badge + points */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            backgroundColor: tc.badgeBg,
            color: tc.badgeColor,
            borderRadius: radius.full,
            padding: '4px 14px',
            ...typographyA.button,
            fontSize: '13px',
          }}
        >
          ◈ {variant}
        </span>
        <div style={{ textAlign: 'right' }}>
          <div style={{ ...typographyA.h3, color: C.textDefault, lineHeight: 1 }}>{points}</div>
          <div style={{ ...typographyA.caption, color: C.textSecondary, marginTop: '2px' }}>City Credits</div>
        </div>
      </div>

      {/* Progress */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[2] }}>
        <p style={{ ...typographyA.bodySmall, color: C.textSecondary, margin: 0 }}>
          <strong style={{ color: C.textDefault }}>{pointsNeeded} credits</strong> to reach {nextTier}
        </p>
        <div
          style={{
            width: '100%',
            height: '10px',
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
              backgroundColor: tc.fillColor,
              transition: 'width 0.4s ease',
            }}
          />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ ...typographyA.caption, color: C.textSecondary }}>{variant}</span>
          <span style={{ ...typographyA.caption, color: C.textSecondary }}>{nextTier}</span>
        </div>
      </div>

      {/* Benefits */}
      {benefits.length > 0 && (
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[2] }}>
          <h4 style={{ ...typographyA.h6, color: C.textDefault, margin: 0 }}>Your Benefits</h4>
          {benefits.map((b, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: spacing[2] }}>
              <span style={{ color: tc.fillColor, fontWeight: 600, fontSize: '14px' }}>✓</span>
              <span style={{ ...typographyA.bodySmall, color: C.textSecondary }}>{b}</span>
            </div>
          ))}
        </div>
      )}

      {/* CTA */}
      <button
        onClick={onCta}
        style={{
          width: '100%',
          height: '48px',
          backgroundColor: C.primary,
          color: C.textOnBrand,
          border: 'none',
          borderRadius: radius.md,
          ...typographyA.buttonLg,
          cursor: 'pointer',
        }}
      >
        {ctaLabel}
      </button>
    </section>
  );
}

export default LoyaltyProgress;
