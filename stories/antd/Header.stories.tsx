import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../../src/components/antd/Header';
import { Button } from '../../src/components/antd/Button';

const meta: Meta<typeof Header> = {
  title: 'Ant Design/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: { type: 'text' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

const menuItems = [
  {
    key: 'home',
    label: 'Home',
  },
  {
    key: 'products',
    label: 'Products',
  },
  {
    key: 'about',
    label: 'About',
  },
  {
    key: 'contact',
    label: 'Contact',
  },
];

export const Default: Story = {
  args: {
    title: 'Turkcell UI Test',
  },
};

export const WithLogo: Story = {
  args: {
    title: 'Turkcell UI Test',
    logo: <span style={{ fontSize: '24px' }}>📱</span>,
  },
};

export const WithMenu: Story = {
  args: {
    title: 'Turkcell UI Test',
    logo: <span style={{ fontSize: '24px' }}>📱</span>,
    menuItems,
  },
};

export const WithUser: Story = {
  args: {
    title: 'Turkcell UI Test',
    logo: <span style={{ fontSize: '24px' }}>📱</span>,
    menuItems,
    user: {
      name: 'John Doe',
      avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=John',
    },
  },
};

export const WithUserActions: Story = {
  render: () => {
    const handleMenuClick = (key: string) => {
      console.log('Menu clicked:', key);
    };

    const handleUserAction = (action: string) => {
      console.log('User action:', action);
    };

    return (
      <Header
        title="Turkcell UI Test"
        logo={<span style={{ fontSize: '24px' }}>📱</span>}
        menuItems={menuItems}
        user={{
          name: 'John Doe',
          avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=John',
        }}
        onMenuClick={handleMenuClick}
        onUserAction={handleUserAction}
      />
    );
  },
};

export const Minimal: Story = {
  args: {
    title: 'Simple Header',
  },
};

export const WithCustomLogo: Story = {
  args: {
    title: 'Custom App',
    logo: (
      <div style={{ 
        width: '32px', 
        height: '32px', 
        background: 'linear-gradient(45deg, #ff6b6b, #4ecdc4)',
        borderRadius: '8px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        fontWeight: 'bold'
      }}>
        CA
      </div>
    ),
  },
};

export const DarkTheme: Story = {
  args: {
    title: 'Dark Header',
    logo: <span style={{ fontSize: '24px' }}>🌙</span>,
    menuItems,
    user: {
      name: 'Jane Smith',
      avatar: 'https://api.dicebear.com/7.x/miniavs/svg?seed=Jane',
    },
  },
  parameters: {
    backgrounds: {
      default: 'dark',
    },
  },
};
