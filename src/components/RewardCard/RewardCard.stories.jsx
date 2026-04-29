import { RewardCard } from './RewardCard';

export default {
  title: 'Molecules/RewardCard',
  component: RewardCard,
  argTypes: {
    variant:  { control: 'select', options: ['Default', 'Gold', 'Exclusive', 'VIP'] },
    brand:    { control: 'select', options: ['A', 'B'] },
    progress: { control: { type: 'range', min: 0, max: 1, step: 0.05 } },
    icon:     { control: 'text' },
    title:    { control: 'text' },
    subtitle: { control: 'text' },
    points:   { control: 'text' },
    ctaLabel: { control: 'text' },
  },
  args: {
    brand: 'A', variant: 'Default', icon: '◈',
    title: 'Free Night Stay', subtitle: 'Earn 500 more points',
    progress: 0.35, points: '1,250 pts', ctaLabel: 'Redeem Reward',
  },
};

export const Default   = {};
export const Gold      = { args: { variant: 'Gold',      icon: '★', title: 'Gold Member Perk'      } };
export const Exclusive = { args: { variant: 'Exclusive', icon: '✦', title: 'Exclusive Access'       } };
export const VIP       = { args: { variant: 'VIP',       icon: '♛', title: 'VIP Suite Upgrade'      } };
export const Complete  = { args: { progress: 1, ctaLabel: 'Claim Now' } };

export const AllVariants = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      {['Default', 'Gold', 'Exclusive', 'VIP'].map((v) => (
        <RewardCard key={v} {...args} variant={v} title={`${v} Reward`} progress={Math.random() * 0.8 + 0.1} />
      ))}
    </div>
  ),
};
