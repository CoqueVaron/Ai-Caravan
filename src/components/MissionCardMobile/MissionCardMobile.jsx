import React from 'react';
import { colorBrandA, colorBrandB, semantic, typographyA, spacing, radius, elevation } from '../../tokens/tokens';

const VARIANT_STYLES = {
  Default:   { iconBg: '#F3F4F6', iconColor: '#6B7280',  progressColor: '#0B6FFF' },
  Recommended:{ iconBg: '#DCFCE7', iconColor: '#16A34A',  progressColor: '#16A34A' },
  Exclusive: { iconBg: '#CFFAFE', iconColor: '#0891B2',  progressColor: '#0891B2' },
  VIP:       { iconBg: '#EDE9FE', iconColor: '#7C3AED',  progressColor: '#7C3AED' },
};

const VARIANT_STYLES_B = {
  Default:   { iconBg: '#1A1F26', iconColor: '#9CA3AF',  progressColor: '#8B5CF6' },
  Recommended:{ iconBg: '#003320', iconColor: '#4ADE80', progressColor: '#4ADE80' },
  Exclusive: { iconBg: '#003340', iconColor: '#22D3EE',  progressColor: '#22D3EE' },
  VIP:       { iconBg: '#1E0040', iconColor: '#A855F7',  progressColor: '#A855F7' },
};

export function MissionCardMobile({
  variant = 'Default',
  brand = 'A',
  icon = '◈',
  title,
  reward,
  description,
  progress = 0,       // 0–1
  expiresLabel,
  ctaLabel = 'View Mission →',
  onCtaClick,
}) {
  const C = brand === 'B' ? colorBrandB : colorBrandA;
  const vs = (brand === 'B' ? VARIANT_STYLES_B : VARIANT_STYLES)[variant] ?? VARIANT_STYLES.Default;

  const pct = Math.max(0, Math.min(1, progress));

  return (
    <article
      style={{
        width: '100%',
        backgroundColor: C.bgDefault,
        borderRadius: radius.xl,
        border: `1px solid ${C.borderDefault}`,
        boxShadow: elevation[1],
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Accent strip for non-default */}
      {variant !== 'Default' && (
        <div
          style={{
            height: '4px',
            width: '100%',
            backgroundColor: vs.progressColor,
            flexShrink: 0,
          }}
        />
      )}

      <div
        style={{
          padding: spacing[4],
          display: 'flex',
          flexDirection: 'column',
          gap: spacing[3],
        }}
      >
        {/* Header row */}
        <div style={{ display: 'flex', gap: spacing[3], alignItems: 'flex-start' }}>
          {/* Icon box */}
          <div
            style={{
              width: '40px',
              height: '40px',
              borderRadius: radius.md,
              backgroundColor: vs.iconBg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexShrink: 0,
              fontSize: '20px',
              color: vs.iconColor,
            }}
          >
            {icon}
          </div>

          {/* Title + reward */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '3px' }}>
            {reward && (
              <span
                style={{
                  ...typographyA.caption,
                  color: vs.progressColor,
                  fontWeight: 600,
                }}
              >
                {reward}
              </span>
            )}
            <h3
              style={{
                ...typographyA.h6,
                color: C.textDefault,
                margin: 0,
              }}
            >
              {title}
            </h3>
          </div>
        </div>

        {/* Description */}
        {description && (
          <p
            style={{
              ...typographyA.bodySmall,
              color: C.textSecondary,
              margin: 0,
            }}
          >
            {description}
          </p>
        )}

        {/* Progress section */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[1] }}>
          {/* Track */}
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
                backgroundColor: vs.progressColor,
                transition: 'width 0.3s ease',
              }}
            />
          </div>

          {/* Meta row */}
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <span style={{ ...typographyA.caption, color: C.textSecondary }}>
              {pct > 0 ? `${Math.round(pct * 100)}% complete` : 'Not started yet'}
            </span>
            {expiresLabel && (
              <span style={{ ...typographyA.caption, color: C.textSecondary }}>
                {expiresLabel}
              </span>
            )}
          </div>
        </div>

        {/* CTA Button */}
        <button
          onClick={onCtaClick}
          style={{
            width: '100%',
            height: '40px',
            backgroundColor: C.primary,
            color: C.textOnBrand,
            border: 'none',
            borderRadius: radius.md,
            ...typographyA.button,
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {ctaLabel}
        </button>
      </div>
    </article>
  );
}

export default MissionCardMobile;
