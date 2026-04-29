import { NavigationBar } from './NavigationBar';

export default {
  title: 'Organisms/NavigationBar',
  component: NavigationBar,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    variant:   { control: 'select', options: ['Desktop', 'Mobile'] },
    brand:     { control: 'select', options: ['A', 'B'] },
    logoText:  { control: 'text' },
    ctaLabel:  { control: 'text' },
    activeLink:{ control: 'select', options: ['Explore', 'Partners', 'Rewards', 'About', ''] },
  },
  args: {
    brand: 'A', variant: 'Desktop', logoText: 'City Rewards',
    ctaLabel: 'Join City Rewards', activeLink: 'Explore',
    navLinks: ['Explore', 'Partners', 'Rewards', 'About'],
  },
};

export const Desktop       = { args: { variant: 'Desktop' } };
export const Mobile        = { args: { variant: 'Mobile'  } };
export const BrandADesktop = { args: { brand: 'A', variant: 'Desktop' } };
export const BrandBDesktop = { args: { brand: 'B', variant: 'Desktop' } };
