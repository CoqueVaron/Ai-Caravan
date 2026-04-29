import figma from '@figma/code-connect';
import { CTABanner } from './CTABanner';

figma.connect(
  CTABanner,
  'https://www.figma.com/design/pAPIYC9XnPNmuKneSUGl6g/City-Rewards-%E2%80%94-Adaptive-Loyalty-System?node-id=21-38',
  {
    props: {
      variant: figma.enum('Variant', {
        Default:      'Default',
        Personalized: 'Personalized',
      }),
      brand: figma.enum('Brand', {
        A: 'A',
        B: 'B',
      }),
    },
    example: ({ variant, brand }) => (
      <CTABanner variant={variant} brand={brand} />
    ),
  },
);
