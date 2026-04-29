import { StarRating } from './StarRating';

export default {
  title: 'Atoms/StarRating',
  component: StarRating,
  argTypes: {
    rating:    { control: { type: 'range', min: 0, max: 5, step: 0.5 } },
    maxRating: { control: { type: 'number', min: 1, max: 10 } },
    size:      { control: 'select', options: ['sm', 'md', 'lg'] },
    brand:     { control: 'select', options: ['A', 'B'] },
    showLabel: { control: 'boolean' },
  },
  args: { rating: 4, maxRating: 5, size: 'md', brand: 'A', showLabel: true },
};

export const Default = {};
export const WithLabel = { args: { showLabel: true } };

export const AllRatings = {
  render: (args) => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
      {[1, 2, 3, 4, 5].map((r) => (
        <StarRating key={r} {...args} rating={r} showLabel />
      ))}
    </div>
  ),
};
