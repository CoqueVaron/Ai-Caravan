import figma from '@figma/code-connect';
import { LoyaltyBadge } from './LoyaltyBadge';

figma.connect(
  LoyaltyBadge,
  'https://www.figma.com/design/pAPIYC9XnPNmuKneSUGl6g/City-Rewards-%E2%80%94-Adaptive-Loyalty-System?node-id=5-77',
  {
    props: {
      tier: figma.enum('Variant', {
        Default:     'Bronze',
        Recommended: 'Gold',
        Exclusive:   'Exclusive',
        VIP:         'VIP',
      }),
      brand: figma.enum('Brand', {
        A: 'A',
        B: 'B',
      }),
    },
    example: ({ tier, brand }) => <LoyaltyBadge tier={tier} brand={brand} />,
  },
);
