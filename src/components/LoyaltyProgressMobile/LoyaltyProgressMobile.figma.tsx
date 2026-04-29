import figma from '@figma/code-connect';
import { LoyaltyProgressMobile } from './LoyaltyProgressMobile';

figma.connect(
  LoyaltyProgressMobile,
  'https://www.figma.com/design/pAPIYC9XnPNmuKneSUGl6g/City-Rewards-%E2%80%94-Adaptive-Loyalty-System?node-id=26-229',
  {
    props: {
      variant: figma.enum('Variant', {
        Bronze: 'Bronze',
        Silver: 'Silver',
        Gold:   'Gold',
        VIP:    'VIP',
      }),
      brand: figma.enum('Brand', {
        A: 'A',
        B: 'B',
      }),
    },
    example: ({ variant, brand }) => (
      <LoyaltyProgressMobile variant={variant} brand={brand} />
    ),
  },
);
