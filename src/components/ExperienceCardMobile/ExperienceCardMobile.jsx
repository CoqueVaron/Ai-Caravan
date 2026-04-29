import React from 'react';
import { colorBrandA, colorBrandB, typographyA, spacing, radius, elevation } from '../../tokens/tokens';

const VARIANT_BADGE = {
  A: {
    Recommended: { bg: '#16A34A', color: '#FFFFFF' },
    Exclusive:   { bg: '#0891B2', color: '#FFFFFF' },
    VIP:         { bg: '#7C3AED', color: '#FFFFFF' },
  },
  B: {
    Recommended: { bg: '#4ADE80', color: '#0B0F14' },
    Exclusive:   { bg: '#22D3EE', color: '#0B0F14' },
    VIP:         { bg: '#A855F7', color: '#FFFFFF'  },
  },
};

export function ExperienceCardMobile({
  variant = 'Default',
  brand = 'A',
  title = 'City Explorer Tour',
  meta = '3 days • 2 nights',
  price = '$299',
  imageSrc,
  onBook,
}) {
  const C = brand === 'B' ? colorBrandB : colorBrandA;
  const badge = VARIANT_BADGE[brand]?.[variant];

  return (
    <article
      style={{
        width: '100%',
        maxWidth: '350px',
        backgroundColor: C.bgDefault,
        borderRadius: radius.lg,
        border: `1px solid ${C.borderDefault}`,
        boxShadow: elevation[1],
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Image */}
      <div
        style={{
          position: 'relative',
          width: '100%',
          height: '180px',
          backgroundColor: C.primarySubtle,
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
        }}
      >
        {imageSrc ? (
          <img src={imageSrc} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <span style={{ ...typographyA.caption, color: C.textSecondary }}>[placeholder/image]</span>
        )}
        {badge && (
          <span
            style={{
              position: 'absolute',
              top: '12px',
              left: '12px',
              backgroundColor: badge.bg,
              color: badge.color,
              borderRadius: radius.sm,
              padding: '2px 10px',
              ...typographyA.caption,
              fontWeight: 600,
            }}
          >
            {variant}
          </span>
        )}
      </div>

      {/* Content */}
      <div
        style={{
          padding: spacing[4],
          display: 'flex',
          flexDirection: 'column',
          gap: spacing[2],
        }}
      >
        <h3 style={{ ...typographyA.h6, fontSize: '15px', color: C.textDefault, margin: 0 }}>{title}</h3>
        <p style={{ ...typographyA.caption, color: C.textSecondary, margin: 0 }}>{meta}</p>

        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            marginTop: spacing[1],
          }}
        >
          <span style={{ ...typographyA.h5, fontSize: '17px', color: C.primary }}>{price}</span>
          <button
            onClick={onBook}
            style={{
              height: '34px',
              padding: '0 14px',
              backgroundColor: C.primary,
              color: C.textOnBrand,
              border: 'none',
              borderRadius: radius.md,
              ...typographyA.caption,
              fontWeight: 600,
              cursor: 'pointer',
            }}
          >
            Book Now
          </button>
        </div>
      </div>
    </article>
  );
}

export default ExperienceCardMobile;
