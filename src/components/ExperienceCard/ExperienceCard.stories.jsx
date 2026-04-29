import { ExperienceCard } from './ExperienceCard';

export default {
  title: 'Molecules/ExperienceCard',
  component: ExperienceCard,
  argTypes: {
    variant: { control: 'select', options: ['Default', 'Recommended', 'Exclusive', 'VIP'] },
    brand:   { control: 'select', options: ['A', 'B'] },
    title:   { control: 'text' },
    meta:    { control: 'text' },
    price:   { control: 'text' },
  },
  args: {
    brand: 'A',
    variant: 'Default',
    title: 'City Explorer Tour',
    meta: '3 days • 2 nights',
    price: '$299',
  },
};

export const Default     = {};
export const Recommended = { args: { variant: 'Recommended' } };
export const Exclusive   = { args: { variant: 'Exclusive' } };
export const VIP         = { args: { variant: 'VIP' } };

export const AllVariants = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      {['Default', 'Recommended', 'Exclusive', 'VIP'].map((v) => (
        <ExperienceCard key={v} {...args} variant={v} title={`${v} Experience`} />
      ))}
    </div>
  ),
};
