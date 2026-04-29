import figma from '@figma/code-connect';
import { AmenityTag } from './AmenityTag';

figma.connect(
  AmenityTag,
  'https://www.figma.com/design/pAPIYC9XnPNmuKneSUGl6g/City-Rewards-%E2%80%94-Adaptive-Loyalty-System?node-id=5-95',
  {
    props: {
      amenity: figma.enum('Label', {
        'Pool':               'Pool',
        'Spa & Wellness':     'Spa',
        'Breakfast Included': 'Breakfast',
        'Ocean View':         'Concierge',
        'Free Cancellation':  'default',
        'Best Value':         'default',
        'Late Checkout':      'default',
        'Airport Transfer':   'Airport',
      }),
    },
    example: ({ amenity }) => <AmenityTag amenity={amenity} brand="A" />,
  },
);
