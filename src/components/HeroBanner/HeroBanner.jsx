import React from 'react';
import { colorBrandA, colorBrandB, typographyA, spacing, radius } from '../../tokens/tokens';

const CONTENT = {
  New: {
    overline: 'CITY REWARDS',
    headline: 'Explore the city.\nEarn rewards along the way.',
    subtext:  'Stay, dine, and explore with our partners to earn City Credits.',
    primaryCTA:   'Join City Rewards',
    secondaryCTA: 'Explore Experiences',
  },
  Frequent: {
    overline: 'WELCOME BACK',
    headline: 'Welcome Back,\nValued Traveler.',
    subtext:  'Your loyalty unlocks exclusive deals and priority bookings.',
    primaryCTA:   'View My Rewards',
    secondaryCTA: 'Book Now',
  },
  VIP: {
    overline: 'VIP ACCESS',
    headline: 'Your Elite\nExperience Awaits.',
    subtext:  'Exclusive VIP access to premium suites and personalized concierge.',
    primaryCTA:   'Access VIP Suite',
    secondaryCTA: 'Contact Concierge',
  },
};

export function HeroBanner({
  userType = 'New',
  brand = 'A',
  imageSrc,
  onPrimaryClick,
  onSecondaryClick,
}) {
  const C = brand === 'B' ? colorBrandB : colorBrandA;
  const content = CONTENT[userType] ?? CONTENT.New;

  return (
    <section
      style={{
        width: '100%',
        minHeight: '640px',
        backgroundColor: C.bgSubtle,
        display: 'flex',
        alignItems: 'center',
        padding: `0 ${spacing[20]}`,
        gap: spacing[20],
        boxSizing: 'border-box',
      }}
    >
      {/* Left pane */}
      <div
        style={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          gap: spacing[8],
          minWidth: 0,
        }}
      >
        <span
          style={{
            ...typographyA.overline,
            color: C.primary,
            textTransform: 'uppercase',
          }}
        >
          {content.overline}
        </span>

        <h1
          style={{
            ...typographyA.display,
            color: C.textDefault,
            margin: 0,
            whiteSpace: 'pre-line',
          }}
        >
          {content.headline}
        </h1>

        <p
          style={{
            ...typographyA.bodyLarge,
            color: C.textSecondary,
            margin: 0,
            maxWidth: '520px',
          }}
        >
          {content.subtext}
        </p>

        <div style={{ display: 'flex', gap: spacing[4] }}>
          <button
            onClick={onPrimaryClick}
            style={{
              height: '52px',
              padding: `0 ${spacing[6]}`,
              backgroundColor: C.primary,
              color: C.textOnBrand,
              border: 'none',
              borderRadius: radius.md,
              ...typographyA.buttonLg,
              cursor: 'pointer',
            }}
          >
            {content.primaryCTA}
          </button>
          <button
            onClick={onSecondaryClick}
            style={{
              height: '52px',
              padding: `0 ${spacing[6]}`,
              backgroundColor: 'transparent',
              color: C.primary,
              border: `1.5px solid ${C.primary}`,
              borderRadius: radius.md,
              ...typographyA.buttonLg,
              cursor: 'pointer',
            }}
          >
            {content.secondaryCTA}
          </button>
        </div>
      </div>

      {/* Right pane: image */}
      <div
        style={{
          width: '520px',
          height: '480px',
          borderRadius: radius.xl,
          backgroundColor: C.primarySubtle,
          overflow: 'hidden',
          flexShrink: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {imageSrc ? (
          <img src={imageSrc} alt="" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        ) : (
          <span style={{ ...typographyA.caption, color: C.textSecondary }}>[placeholder/image]</span>
        )}
      </div>
    </section>
  );
}

export default HeroBanner;
