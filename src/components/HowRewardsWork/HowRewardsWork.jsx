import React from 'react';
import { colorBrandA, colorBrandB, semantic, spacing, radius, typographyA } from '../../tokens/tokens';

const CARDS = [
  {
    icon: '🏨',
    iconBg: (C) => C.primarySubtle,
    title: 'Stay at partner hotels',
    description: 'Earn 10 City Credits per night.',
    badgeLabel: '10 Credits / Night',
    badgeBg: semantic.infoBg,
    badgeColor: semantic.info,
  },
  {
    icon: '🍽️',
    iconBg: () => semantic.successBg,
    title: 'Dine at partner restaurants',
    description: 'Get 5 Credits per meal.',
    badgeLabel: '5 Credits / Meal',
    badgeBg: semantic.successBg,
    badgeColor: semantic.success,
  },
  {
    icon: '🗺️',
    iconBg: () => semantic.warningBg,
    title: 'Book tours & experiences',
    description: 'Earn 20 bonus Credits per booking.',
    badgeLabel: '20 Bonus Credits',
    badgeBg: semantic.warningBg,
    badgeColor: semantic.warning,
  },
];

export function HowRewardsWork({ brand = 'A' }) {
  const C = brand === 'B' ? colorBrandB : colorBrandA;

  return (
    <section
      style={{
        width: '390px',
        backgroundColor: C.bgDefault,
        display: 'flex',
        flexDirection: 'column',
        gap: spacing[5],
        padding: `${spacing[10]} ${spacing[5]}`,
        boxSizing: 'border-box',
        overflow: 'hidden',
      }}
    >
      {/* Header */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing[2] }}>
        <p
          style={{
            ...typographyA.overline,
            color: C.primary,
            textTransform: 'uppercase',
            margin: 0,
          }}
        >
          HOW IT WORKS
        </p>
        <h2
          style={{
            fontFamily: 'Inter, sans-serif',
            fontWeight: 700,
            fontSize: '26px',
            lineHeight: '34px',
            color: C.textDefault,
            margin: 0,
          }}
        >
          Earn City Credits<br />everywhere you go
        </h2>
        <p
          style={{
            ...typographyA.bodySmall,
            color: C.textSecondary,
            margin: 0,
          }}
        >
          Every stay, meal, and adventure earns you credits.
        </p>
      </div>

      {/* Cards */}
      {CARDS.map((card) => (
        <div
          key={card.title}
          style={{
            display: 'flex',
            gap: '14px',
            alignItems: 'flex-start',
            backgroundColor: C.bgDefault,
            border: `1px solid ${C.borderDefault}`,
            borderRadius: radius.lg,
            padding: spacing[4],
            boxSizing: 'border-box',
          }}
        >
          {/* Icon */}
          <div
            style={{
              width: '48px',
              height: '48px',
              flexShrink: 0,
              backgroundColor: card.iconBg(C),
              borderRadius: radius.lg,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '22px',
            }}
          >
            {card.icon}
          </div>

          {/* Text */}
          <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: '6px', minWidth: 0 }}>
            <p
              style={{
                ...typographyA.h6,
                color: C.textDefault,
                margin: 0,
              }}
            >
              {card.title}
            </p>
            <p
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 400,
                fontSize: '13px',
                lineHeight: '18px',
                color: C.textSecondary,
                margin: 0,
              }}
            >
              {card.description}
            </p>

            {/* Badge */}
            <span
              style={{
                alignSelf: 'flex-start',
                backgroundColor: card.badgeBg,
                color: card.badgeColor,
                borderRadius: radius.sm,
                padding: '3px 10px',
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '11px',
                lineHeight: '16px',
                whiteSpace: 'nowrap',
              }}
            >
              {card.badgeLabel}
            </span>
          </div>
        </div>
      ))}
    </section>
  );
}

export default HowRewardsWork;
