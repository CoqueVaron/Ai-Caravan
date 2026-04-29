import figma from '@figma/code-connect';
import { RewardCard } from './RewardCard';

figma.connect(
  RewardCard,
  'https://www.figma.com/design/pAPIYC9XnPNmuKneSUGl6g/City-Rewards-%E2%80%94-Adaptive-Loyalty-System?node-id=17-329',
  {
    props: {
      variant: figma.enum('Variant', {
        Default:   'Default',
        Recommended: 'Gold',
        Exclusive: 'Exclusive',
        Vip:       'VIP',
      }),
      brand: figma.enum('Brand', {
        A: 'A',
        B: 'B',
      }),
    },
    example: ({ variant, brand }) => (
      <RewardCard variant={variant} brand={brand} />
    ),
  },
);
