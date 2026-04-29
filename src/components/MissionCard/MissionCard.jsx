import React from 'react';
import { colorBrandA, colorBrandB, typographyA, spacing, radius, elevation } from '../../tokens/tokens';

const VARIANT_CONFIG = {
  A: {
    Default:    { accent: null,      iconBg: '#F3F4F6', iconColor: '#6B7280', progressColor: '#0B6FFF', badgeBg: null },
    Recommended:{ accent: '#16A34A', iconBg: '#DCFCE7', iconColor: '#16A34A', progressColor: '#16A34A', badgeBg: '#DCFCE7', badgeColor: '#16A34A' },
    Exclusive:  { accent: '#0891B2', iconBg: '#CFFAFE', iconColor: '#0891B2', progressColor: '#0891B2', badgeBg: '#CFFAFE', badgeColor: '#0891B2' },
    VIP:        { accent: '#7C3AED', iconBg: '#EDE9FE', iconColor: '#7C3AED', progressColor: '#7C3AED', badgeBg: '#EDE9FE', badgeColor: '#7C3AED' },
  },
  B: {
    Default:    { accent: null,      iconBg: '#1A1F26', iconColor: '#9CA3AF', progressColor: '#8B5CF6', badgeBg: null },
    Recommended:{ accent: '#4ADE80', iconBg: '#003320', iconColor: '#4ADE80', progressColor: '#4ADE80', badgeBg: '#003320', badgeColor: '#4ADE80' },
    Exclusive:  { accent: '#22D3EE', iconBg: '#003340', iconColor: '#22D3EE', progressColor: '#22D3EE', badgeBg: '#003340', badgeColor: '#22D3EE' },
    VIP:        { accent: '#A855F7', iconBg: '#1E0040', iconColor: '#A855F7', progressColor: '#A855F7', badgeBg: '#1E0040', badgeColor: '#A855F7' },
  },
};

export function MissionCard({
  variant = 'Default',
  brand = 'A',
  icon = '◈',
  title,
  reward,
  description,
  progress = 0,
  expiresLabel,
  ctaLabel = 'View Mission →',
  onCta,
}) {
  const C = brand === 'B' ? colorBrandB : colorBrandA;
  const vc = VARIANT_CONFIG[brand]?.[variant] ?? VARIANT_CONFIG.A.Default;
  const pct = Math.max(0, Math.min(1, progress));

  return (
    <article
      style={{
        width: '300px',
        backgroundColor: C.bgDefault,
        borderRadius: radius.xl,
        border: `1px solid ${C.borderDefault}`,
        boxShadow: elevation[1],
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        flexShrink: 0,
      }}
    >
      {/* Accent strip */}
      {vc.accent && (
        <div style={{ height: '4px', backgroundColor: vc.accent, flexShrink: 0 }} />
      )}

      <div
        style={{
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
              width: '40px',
              height: '40px',
              borderRadius: radius.md,
              backgroundColor: vc.iconBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              color: vc.iconColor,
              flexShrink: 0,
            }}
          >
            {icon}
          </div>
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '3px' }}>
            {vc.badgeBg && reward && (
              <span
                style={{
                  display: 'inline-flex',
                  alignSelf: 'flex-start',
                  backgroundColor: vc.badgeBg,
                  color: vc.badgeColor,
                  borderRadius: radius.sm,
                  padding: '1px 8px',
                  ...typographyA.caption,
                  fontWeight: 600,
                }}
              >
                {reward}
              </span>
            )}
            <h3 style={{ ...typographyA.h6, color: C.textDefault, margin: 0 }}>{title}</h3>
            {!vc.badgeBg && reward && (
              <span style={{ ...typographyA.caption, color: C.textSecondary }}>{reward}</span>
            )}
          </div>
        </div>

        {/* Description */}
        {description && (
          <p style={{ ...typographyA.bodySmall, color: C.textSecondary, margin: 0 }}>
            {description}
          </p>
        )}

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
                backgroundColor: vc.progressColor,
              }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span style={{ ...typographyA.caption, color: C.textSecondary }}>
              {pct > 0 ? `${Math.round(pct * 100)}%` : 'Not started'}
            </span>
            {expiresLabel && (
              <span style={{ ...typographyA.caption, color: C.textSecondary }}>{expiresLabel}</span>
            )}
          </div>
        </div>

        {/* CTA */}
        <button
          onClick={onCta}
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
      </div>
    </article>
  );
}

export default MissionCard;
