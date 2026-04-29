import { LoyaltyProgress } from './LoyaltyProgress';

export default {
  title: 'Molecules/LoyaltyProgress',
  component: LoyaltyProgress,
  argTypes: {
    variant:      { control: 'select', options: ['Bronze', 'Silver', 'Gold', 'VIP'] },
    brand:        { control: 'select', options: ['A', 'B'] },
    progress:     { control: { type: 'range', min: 0, max: 1, step: 0.05 } },
    points:       { control: 'text' },
    nextTier:     { control: 'text' },
    pointsNeeded: { control: 'text' },
    ctaLabel:     { control: 'text' },
  },
  args: {
    brand: 'A', variant: 'Bronze', points: '1,250', nextTier: 'Silver',
    pointsNeeded: '750', progress: 0.63,
    benefits: ['Complimentary breakfast', 'Late checkout', 'Priority check-in'],
    ctaLabel: 'View My Rewards',
  },
};

export const Bronze = {};
export const Silver = { args: { variant: 'Silver', points: '2,500', nextTier: 'Gold',      pointsNeeded: '500',   progress: 0.83 } };
export const Gold   = { args: { variant: 'Gold',   points: '5,200', nextTier: 'VIP',       pointsNeeded: '2,800', progress: 0.65 } };
export const VIP    = { args: { variant: 'VIP',    points: '12,400',nextTier: 'Exclusive',  pointsNeeded: '7,600', progress: 0.62 } };

export const AllTiers = {
  render: () => (
    <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
      <LoyaltyProgress variant="Bronze" brand="A" points="1,250" nextTier="Silver" pointsNeeded="750"   progress={0.63} benefits={['Breakfast', 'Late checkout']} ctaLabel="View Rewards" />
      <LoyaltyProgress variant="Gold"   brand="A" points="5,200" nextTier="VIP"    pointsNeeded="2,800" progress={0.65} benefits={['Breakfast', 'Late checkout', 'Upgrade']} ctaLabel="View Rewards" />
    </div>
  ),
};
