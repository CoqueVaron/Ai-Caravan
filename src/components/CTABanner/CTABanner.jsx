import React, { useState } from 'react';
import { colorBrandA, colorBrandB, typographyA, spacing, radius } from '../../tokens/tokens';

const CONTENT = {
  Default: {
    headline: 'Start earning rewards today',
    subtext:  'Join thousands of travelers enjoying premium rewards.',
    ctaLabel: 'Get Started →',
  },
  Personalized: {
    headline: 'Welcome Back, Elite Member',
    subtext:  'Your next adventure awaits — check your exclusive offers.',
    ctaLabel: 'View My Offers',
  },
};

export function CTABanner({
  variant = 'Default',
  brand = 'A',
  onSubmit,
}) {
  const C = brand === 'B' ? colorBrandB : colorBrandA;
  const content = CONTENT[variant] ?? CONTENT.Default;
  const [email, setEmail] = useState('');

  const inputBg   = brand === 'B' ? '#1A1F26' : '#FFFFFF';
  const inputText = brand === 'B' ? C.textDefault : '#0B1220';
  const btnBg     = brand === 'B' ? '#A855F7' : '#FFFFFF';
  const btnColor  = brand === 'B' ? '#FFFFFF' : C.primary;

  return (
    <section
      style={{
        width: '100%',
        minHeight: '280px',
        backgroundColor: C.bgBrand,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: `0 ${spacing[20]}`,
        gap: spacing[10],
        boxSizing: 'border-box',
      }}
    >
      {/* Text group */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: spacing[3] }}>
        <h2
          style={{
            ...typographyA.h2,
            color: C.textOnBrand,
            margin: 0,
          }}
        >
          {content.headline}
        </h2>
        <p
          style={{
            ...typographyA.bodyLarge,
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
        onSubmit={(e) => { e.preventDefault(); onSubmit?.(email); }}
        style={{ display: 'flex', gap: spacing[3], alignItems: 'center', flexShrink: 0 }}
      >
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          required
          style={{
            width: '320px',
            height: '52px',
            backgroundColor: inputBg,
            color: inputText,
            border: 'none',
            borderRadius: radius.md,
            padding: `0 ${spacing[4]}`,
            ...typographyA.body,
            outline: 'none',
            boxSizing: 'border-box',
          }}
        />
        <button
          type="submit"
          style={{
            height: '52px',
            padding: `0 ${spacing[6]}`,
            backgroundColor: btnBg,
            color: btnColor,
            border: 'none',
            borderRadius: radius.md,
            ...typographyA.buttonLg,
            cursor: 'pointer',
            whiteSpace: 'nowrap',
          }}
        >
          {content.ctaLabel}
        </button>
      </form>
    </section>
  );
}

export default CTABanner;
