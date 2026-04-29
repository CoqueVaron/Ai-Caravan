import { AmenityTag } from './AmenityTag';

export default {
  title: 'Atoms/AmenityTag',
  component: AmenityTag,
  argTypes: {
    amenity: {
      control: 'select',
      options: ['WiFi', 'Pool', 'Spa', 'Restaurant', 'Gym', 'Parking', 'Breakfast', 'RoomService', 'Bar', 'Concierge', 'Airport', 'PetFriendly'],
    },
    size:  { control: 'select', options: ['sm', 'md'] },
    brand: { control: 'select', options: ['A', 'B'] },
  },
  args: { amenity: 'WiFi', size: 'md', brand: 'A' },
};

export const Default = {};

export const AllAmenities = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      {['WiFi', 'Pool', 'Spa', 'Restaurant', 'Gym', 'Parking', 'Breakfast', 'RoomService', 'Bar', 'Concierge', 'Airport', 'PetFriendly'].map((a) => (
        <AmenityTag key={a} {...args} amenity={a} />
      ))}
    </div>
  ),
};
