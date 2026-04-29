import { CTABanner } from './CTABanner';

export default {
  title: 'Organisms/CTABanner',
  component: CTABanner,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    variant: { control: 'select', options: ['Default', 'Personalized'] },
    brand:   { control: 'select', options: ['A', 'B'] },
  },
  args: { brand: 'A', variant: 'Default' },
};

export const Default      = {};
export const Personalized = { args: { variant: 'Personalized' } };
export const BrandB       = { args: { brand: 'B' } };

export const BrandComparison = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <CTABanner brand="A" variant="Default" />
      <CTABanner brand="B" variant="Default" />
    </div>
  ),
};
