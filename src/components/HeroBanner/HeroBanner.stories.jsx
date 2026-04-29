import { HeroBanner } from './HeroBanner';

export default {
  title: 'Organisms/HeroBanner',
  component: HeroBanner,
  parameters: { layout: 'fullscreen' },
  argTypes: {
    userType: { control: 'select', options: ['New', 'Frequent', 'VIP'] },
    brand:    { control: 'select', options: ['A', 'B'] },
    imageSrc: { control: 'text' },
  },
  args: { brand: 'A', userType: 'New' },
};

export const NewUser      = { args: { userType: 'New'      } };
export const FrequentUser = { args: { userType: 'Frequent' } };
export const VIPUser      = { args: { userType: 'VIP'      } };

export const AllUserTypes = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <HeroBanner userType="New"      brand="A" />
      <HeroBanner userType="Frequent" brand="A" />
      <HeroBanner userType="VIP"      brand="A" />
    </div>
  ),
};
