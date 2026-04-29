import figma from '@figma/code-connect';
import { HeroBanner } from './HeroBanner';

figma.connect(
  HeroBanner,
  'https://www.figma.com/design/pAPIYC9XnPNmuKneSUGl6g/City-Rewards-%E2%80%94-Adaptive-Loyalty-System?node-id=21-105',
  {
    props: {
      userType: figma.enum('UserType', {
        New:      'New',
        Frequent: 'Frequent',
        VIP:      'VIP',
      }),
      brand: figma.enum('Brand', {
        A: 'A',
        B: 'B',
      }),
    },
    example: ({ userType, brand }) => (
      <HeroBanner userType={userType} brand={brand} />
    ),
  },
);
