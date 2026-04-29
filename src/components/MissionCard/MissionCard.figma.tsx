import figma from '@figma/code-connect';
import { MissionCard } from './MissionCard';

figma.connect(
  MissionCard,
  'https://www.figma.com/design/pAPIYC9XnPNmuKneSUGl6g/City-Rewards-%E2%80%94-Adaptive-Loyalty-System?node-id=18-156',
  {
    props: {
      variant: figma.enum('Variant', {
        Default:     'Default',
        Recommended: 'Recommended',
        Exclusive:   'Exclusive',
        Vip:         'VIP',
      }),
      brand: figma.enum('Brand', {
        A: 'A',
        B: 'B',
      }),
    },
    example: ({ variant, brand }) => (
      <MissionCard variant={variant} brand={brand} />
    ),
  },
);
