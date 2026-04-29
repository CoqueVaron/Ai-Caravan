import { Button } from './Button';

export default {
  title: 'Atoms/Button',
  component: Button,
  argTypes: {
    variant:  { control: 'select', options: ['Primary', 'Secondary', 'Tertiary', 'Ghost', 'Destructive'] },
    size:     { control: 'select', options: ['sm', 'md', 'lg'] },
    brand:    { control: 'select', options: ['A', 'B'] },
    disabled: { control: 'boolean' },
    children: { control: 'text' },
  },
  args: { children: 'Button label', brand: 'A', variant: 'Primary', size: 'md', disabled: false },
};

export const Primary    = { args: { variant: 'Primary' } };
export const Secondary  = { args: { variant: 'Secondary' } };
export const Tertiary   = { args: { variant: 'Tertiary' } };
export const Ghost      = { args: { variant: 'Ghost' } };
export const Destructive= { args: { variant: 'Destructive' } };
export const Disabled   = { args: { variant: 'Primary', disabled: true } };

export const AllSizes = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
      <Button {...args} size="sm">Small</Button>
      <Button {...args} size="md">Medium</Button>
      <Button {...args} size="lg">Large</Button>
    </div>
  ),
};

export const AllVariants = {
  render: (args) => (
    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
      {['Primary', 'Secondary', 'Tertiary', 'Ghost', 'Destructive'].map((v) => (
        <Button key={v} {...args} variant={v}>{v}</Button>
      ))}
    </div>
  ),
};

export const BrandComparison = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div style={{ display: 'flex', gap: '12px' }}>
        {['Primary', 'Ghost', 'Destructive'].map((v) => (
          <Button key={v} brand="A" variant={v}>{v} A</Button>
        ))}
      </div>
      <div style={{ display: 'flex', gap: '12px' }}>
        {['Primary', 'Ghost', 'Destructive'].map((v) => (
          <Button key={v} brand="B" variant={v}>{v} B</Button>
        ))}
      </div>
    </div>
  ),
};
