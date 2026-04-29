import { LoyaltyBadge } from './LoyaltyBadge';

export default {
  title: 'Atoms/LoyaltyBadge',
  component: LoyaltyBadge,
  argTypes: {
    tier:  { control: 'select', options: ['New', 'Bronze', 'Silver', 'Gold', 'VIP', 'Exclusive'] },
    size:  { control: 'select', options: ['sm', 'md'] },
    brand: { control: 'select', options: ['A', 'B'] },
  },
  args: { tier: 'Gold', size: 'md', brand: 'A' },
};

export const Default = {};

export const AllTiers = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {['New', 'Bronze', 'Silver', 'Gold', 'VIP', 'Exclusive'].map((tier) => (
        <LoyaltyBadge key={tier} {...args} tier={tier} />
      ))}
    </div>
  ),
};

export const BrandComparison = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
        {['New', 'Bronze', 'Silver', 'Gold', 'VIP', 'Exclusive'].map((tier) => (
          <LoyaltyBadge key={tier} brand="A" tier={tier} />
        ))}
      </div>
      <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', background: '#0B0F14', padding: '12px', borderRadius: '8px' }}>
        {['New', 'Bronze', 'Silver', 'Gold', 'VIP', 'Exclusive'].map((tier) => (
          <LoyaltyBadge key={tier} brand="B" tier={tier} />
        ))}
      </div>
    </div>
  ),
};
