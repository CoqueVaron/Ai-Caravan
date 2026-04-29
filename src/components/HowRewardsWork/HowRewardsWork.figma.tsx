import figma from '@figma/code-connect';
import { HowRewardsWork } from './HowRewardsWork';

figma.connect(
  HowRewardsWork,
  'https://www.figma.com/design/pAPIYC9XnPNmuKneSUGl6g/City-Rewards-%E2%80%94-Adaptive-Loyalty-System?node-id=68-50',
  {
    props: {},
    example: () => <HowRewardsWork brand="A" />,
  },
);
