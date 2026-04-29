import figma from '@figma/code-connect';
import { HeroBannerMobile } from './HeroBannerMobile';

figma.connect(
  HeroBannerMobile,
  'https://www.figma.com/design/pAPIYC9XnPNmuKneSUGl6g/City-Rewards-%E2%80%94-Adaptive-Loyalty-System?node-id=26-68',
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
      <HeroBannerMobile userType={userType} brand={brand} />
    ),
  },
);
