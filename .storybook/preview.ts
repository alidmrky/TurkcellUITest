import type { Preview } from '@storybook/nextjs-vite'
import '../src/app/globals.css'
import 'antd/dist/reset.css'

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
       color: /(background|color)$/i,
       date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'todo'
    },

    // Force light mode for all stories
    backgrounds: {
      default: 'light',
      values: [
        {
          name: 'light',
          value: '#ffffff',
        },
        {
          name: 'dark',
          value: '#0f172a',
        },
      ],
    },
  },

  // Force light mode globally
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: ['light', 'dark'],
        dynamicTitle: true,
      },
    },
  },

  decorators: [
    (Story, context) => {
      // Force light mode by adding data attribute and CSS
      if (typeof document !== 'undefined') {
        document.documentElement.setAttribute('data-theme', 'light');
        document.documentElement.classList.remove('dark');
        document.documentElement.classList.add('light');
        
        // Force light mode with CSS
        const style = document.createElement('style');
        style.textContent = `
          html, body {
            background-color: #ffffff !important;
            color: #000000 !important;
          }
          .dark {
            background-color: #ffffff !important;
            color: #000000 !important;
          }
          [data-theme="dark"] {
            background-color: #ffffff !important;
            color: #000000 !important;
          }
        `;
        document.head.appendChild(style);
      }
      return Story();
    },
  ],
};

export default preview;