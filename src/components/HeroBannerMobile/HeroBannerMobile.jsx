import React from 'react';
import { colorBrandA, colorBrandB, typographyA, spacing, radius } from '../../tokens/tokens';

const USER_TYPE_CONTENT = {
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
    subtext:  'Your rewards are waiting — book your next stay.',
    primaryCTA:   'View My Rewards',
    secondaryCTA: 'Book Now',
  },
  VIP: {
    overline: 'VIP ACCESS',
    headline: 'Your Elite\nExperience Awaits.',
    subtext:  'Exclusive VIP suites and personalized concierge service.',
    primaryCTA:   'Access Suite',
    secondaryCTA: 'Contact Concierge',
  },
};

export function HeroBannerMobile({
  userType = 'New',
  brand = 'A',
  imageSrc,
  onPrimaryClick,
  onSecondaryClick,
}) {
  const C = brand === 'B' ? colorBrandB : colorBrandA;
  const content = USER_TYPE_CONTENT[userType] ?? USER_TYPE_CONTENT.New;

  return (
    <section
      style={{
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: C.bgSubtle,
      }}
    >
      {/* Image */}
      <div
        style={{
          width: '100%',
          height: '220px',
          backgroundColor: C.primarySubtle,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          overflow: 'hidden',
          flexShrink: 0,
        }}
      >
        {imageSrc ? (
          <img
            src={imageSrc}
            alt=""
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        ) : (
          <span style={{ ...typographyA.caption, color: C.textSecondary }}>
            [placeholder/image]
          </span>
        )}
      </div>

      {/* Content */}
      <div
        style={{
          padding: `${spacing[8]} ${spacing[5]}`,
          display: 'flex',
          flexDirection: 'column',
          gap: spacing[5],
        }}
      >
        {/* Overline */}
        <span
          style={{
            ...typographyA.overline,
            color: C.primary,
            textTransform: 'uppercase',
          }}
        >
          {content.overline}
        </span>

        {/* Headline */}
        <h1
          style={{
            ...typographyA.h1,
            fontSize: '32px',
            lineHeight: '40px',
            color: C.textDefault,
            margin: 0,
            whiteSpace: 'pre-line',
          }}
        >
          {content.headline}
        </h1>

        {/* Subtext */}
        <p
          style={{
            ...typographyA.body,
            color: C.textSecondary,
            margin: 0,
          }}
        >
          {content.subtext}
        </p>

        {/* CTAs — stacked full-width */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
          <button
            onClick={onPrimaryClick}
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
            {content.primaryCTA}
          </button>

          <button
            onClick={onSecondaryClick}
            style={{
              width: '100%',
              height: '48px',
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
    </section>
  );
}

export default HeroBannerMobile;
