import { MissionCard } from './MissionCard';

export default {
  title: 'Molecules/MissionCard',
  component: MissionCard,
  argTypes: {
    variant:  { control: 'select', options: ['Default', 'Recommended', 'Exclusive', 'VIP'] },
    brand:    { control: 'select', options: ['A', 'B'] },
    progress: { control: { type: 'range', min: 0, max: 1, step: 0.05 } },
    icon:     { control: 'text' },
    title:    { control: 'text' },
    reward:   { control: 'text' },
    description: { control: 'text' },
    expiresLabel: { control: 'text' },
    ctaLabel: { control: 'text' },
  },
  args: {
    brand: 'A', variant: 'Default', icon: '◈',
    title: 'Stay 3 Nights', reward: '+250 Credits',
    description: 'Book and stay at any partner hotel to earn bonus credits.',
    progress: 0.4, expiresLabel: 'Expires May 15',
    ctaLabel: 'View Mission →',
  },
};

export const Default     = {};
export const Recommended = { args: { variant: 'Recommended', icon: '★', title: 'Dine & Earn',     reward: '+150 Credits'  } };
export const Exclusive   = { args: { variant: 'Exclusive',   icon: '✦', title: 'Exclusive Stay',  reward: '+500 Credits'  } };
export const VIP         = { args: { variant: 'VIP',         icon: '♛', title: 'VIP Challenge',   reward: '+1000 Credits' } };
export const NotStarted  = { args: { progress: 0 } };
export const Complete    = { args: { progress: 1 } };

export const AllVariants = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
      {['Default', 'Recommended', 'Exclusive', 'VIP'].map((v) => (
        <MissionCard key={v} {...args} variant={v} title={`${v} Mission`} />
      ))}
    </div>
  ),
};
