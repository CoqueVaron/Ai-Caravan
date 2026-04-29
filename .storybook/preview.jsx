import React from 'react';
import '../app/globals.css';

/** @type { import('@storybook/react-vite').Preview } */
const preview = {
  globalTypes: {
    brand: {
      description: 'Brand theme',
      defaultValue: 'A',
      toolbar: {
        title: 'Brand',
        icon: 'paintbrush',
        items: [
          { value: 'A', title: 'Brand A (Monochrome)' },
          { value: 'B', title: 'Brand B (Violet)' },
        ],
        dynamicTitle: true,
      },
    },
  },
  decorators: [
    (Story, context) => {
      const brand = context.globals.brand ?? 'A';
      return (
        <div
          data-brand={brand.toLowerCase()}
          style={{
            padding: '2rem',
            background: brand === 'B' ? '#0B0F14' : '#ffffff',
            minHeight: '100vh',
            boxSizing: 'border-box',
          }}
        >
          <Story />
        </div>
      );
    },
  ],
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    layout: 'fullscreen',
    a11y: { test: 'todo' },
  },
};

export default preview;