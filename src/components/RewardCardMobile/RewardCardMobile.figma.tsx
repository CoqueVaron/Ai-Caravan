import figma from '@figma/code-connect';
import { RewardCardMobile } from './RewardCardMobile';

figma.connect(
  RewardCardMobile,
  'https://www.figma.com/design/pAPIYC9XnPNmuKneSUGl6g/City-Rewards-%E2%80%94-Adaptive-Loyalty-System?node-id=25-122',
  {
    props: {
      variant: figma.enum('Variant', {
        Default:   'Default',
        Gold:      'Gold',
        Exclusive: 'Exclusive',
        VIP:       'VIP',
      }),
      brand: figma.enum('Brand', {
        A: 'A',
        B: 'B',
      }),
    },
    example: ({ variant, brand }) => (
      <RewardCardMobile variant={variant} brand={brand} />
    ),
  },
);
