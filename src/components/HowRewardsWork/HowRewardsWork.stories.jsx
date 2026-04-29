import { HowRewardsWork } from './HowRewardsWork';

export default {
  title: 'Organisms/HowRewardsWork',
  component: HowRewardsWork,
  parameters: { layout: 'centered' },
  argTypes: {
    brand: { control: 'select', options: ['A', 'B'] },
  },
  args: { brand: 'A' },
};

export const BrandA = { args: { brand: 'A' } };
export const BrandB = { args: { brand: 'B' } };
