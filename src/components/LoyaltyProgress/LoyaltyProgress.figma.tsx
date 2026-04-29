import figma from '@figma/code-connect';
import { LoyaltyProgress } from './LoyaltyProgress';

figma.connect(
  LoyaltyProgress,
  'https://www.figma.com/design/pAPIYC9XnPNmuKneSUGl6g/City-Rewards-%E2%80%94-Adaptive-Loyalty-System?node-id=18-307',
  {
    props: {
      variant: figma.enum('UserType', {
        New:      'Bronze',
        Frequent: 'Silver',
        Vip:      'VIP',
      }),
      brand: figma.enum('Brand', {
        A: 'A',
        B: 'B',
      }),
    },
    example: ({ variant, brand }) => (
      <LoyaltyProgress variant={variant} brand={brand} />
    ),
  },
);
