import figma from '@figma/code-connect';
import { Button } from './Button';

figma.connect(
  Button,
  'https://www.figma.com/design/pAPIYC9XnPNmuKneSUGl6g/City-Rewards-%E2%80%94-Adaptive-Loyalty-System?node-id=5-50',
  {
    props: {
      variant: figma.enum('Type', {
        Primary:     'Primary',
        Secondary:   'Secondary',
        Ghost:       'Ghost',
        Destructive: 'Destructive',
      }),
      brand: figma.enum('Brand', {
        A: 'A',
        B: 'B',
      }),
      disabled: figma.enum('State', {
        Default:  false,
        Hover:    false,
        Disabled: true,
      }),
    },
    example: ({ variant, brand, disabled }) => (
      <Button variant={variant} brand={brand} disabled={disabled}>
        Label
      </Button>
    ),
  },
);
