import figma from '@figma/code-connect';
import { NavigationBar } from './NavigationBar';

figma.connect(
  NavigationBar,
  'https://www.figma.com/design/pAPIYC9XnPNmuKneSUGl6g/City-Rewards-%E2%80%94-Adaptive-Loyalty-System?node-id=18-360',
  {
    props: {
      brand: figma.enum('Brand', {
        A: 'A',
        B: 'B',
      }),
      variant: figma.enum('Device', {
        Desktop: 'Desktop',
        Mobile:  'Mobile',
      }),
    },
    example: ({ brand, variant }) => (
      <NavigationBar brand={brand} variant={variant} />
    ),
  },
);
