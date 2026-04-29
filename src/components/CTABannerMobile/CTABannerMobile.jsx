import React, { useState } from 'react';
import { colorBrandA, colorBrandB, typographyA, spacing, radius } from '../../tokens/tokens';

const VARIANT_CONTENT = {
  Default: {
    headline: 'Start earning rewards today',
    subtext:  'Join thousands of travelers earning City Credits with every stay, meal and adventure.',
    ctaLabel: 'Join City Rewards',
  },
  Personalized: {
    headline: 'Welcome Back, Elite Member',
    subtext:  'Your exclusive offers are ready for you.',
    ctaLabel: 'View My Offers',
  },
};

export function CTABannerMobile({
  variant = 'Default',
  brand = 'A',
  onSubmit,
}) {
  const C = brand === 'B' ? colorBrandB : colorBrandA;
  const content = VARIANT_CONTENT[variant] ?? VARIANT_CONTENT.Default;
  const [email, setEmail] = useState('');

  const inputBg    = brand === 'B' ? '#1A1F26' : '#FFFFFF';
  const inputText  = brand === 'B' ? C.textDefault : '#0B1220';
  const btnBg      = brand === 'B' ? '#A855F7' : '#FFFFFF';
  const btnText    = brand === 'B' ? '#FFFFFF' : C.primary;

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit?.(email);
  };

  return (
    <section
      style={{
        width: '100%',
        backgroundColor: C.bgBrand,
        padding: `${spacing[12]} ${spacing[5]}`,
        display: 'flex',
        flexDirection: 'column',
        gap: spacing[5],
        alignItems: 'center',
        boxSizing: 'border-box',
      }}
    >
      {/* Text group */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: spacing[2],
          textAlign: 'center',
          width: '100%',
        }}
      >
        <h2
          style={{
            ...typographyA.h2,
            fontSize: '26px',
            lineHeight: '34px',
            color: C.textOnBrand,
            margin: 0,
          }}
        >
          {content.headline}
        </h2>
        <p
          style={{
            ...typographyA.body,
            fontSize: '14px',
            lineHeight: '22px',
            color: C.textOnBrand,
            opacity: 0.85,
            margin: 0,
          }}
        >
          {content.subtext}
        </p>
      </div>

      {/* Form */}
      <form
        onSubmit={handleSubmit}
        style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: spacing[3],
        }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          style={{
            width: '100%',
            height: '48px',
            backgroundColor: inputBg,
            color: inputText,
            border: 'none',
            borderRadius: radius.md,
            padding: `0 ${spacing[4]}`,
            ...typographyA.body,
            fontSize: '14px',
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />

        <button
          type="submit"
          style={{
            width: '100%',
            height: '48px',
            backgroundColor: btnBg,
            color: btnText,
            border: 'none',
            borderRadius: radius.md,
            ...typographyA.buttonLg,
            cursor: 'pointer',
          }}
        >
          {content.ctaLabel}
        </button>
      </form>
    </section>
  );
}

export default CTABannerMobile;
