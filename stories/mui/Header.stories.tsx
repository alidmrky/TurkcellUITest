import type { Meta, StoryObj } from '@storybook/react';
import { Header } from '../../src/components/mui/Header';

const meta: Meta<typeof Header> = {
  title: 'Material-UI/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    showLogin: {
      control: { type: 'boolean' },
    },
    showUserMenu: {
      control: { type: 'boolean' },
    },
    showNavigation: {
      control: { type: 'boolean' },
    },
    showSearch: {
      control: { type: 'boolean' },
    },
    showNotifications: {
      control: { type: 'boolean' },
    },
  },
};

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    logo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img 
          src="/financell-logo.jpeg" 
          alt="Financell Logo" 
          style={{ width: '32px', height: '32px', objectFit: 'contain' }}
        />
        <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>Financell</span>
      </div>
    ),
    title: 'Financell',
  },
};

export const WithLogin: Story = {
  args: {
    logo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img 
          src="/financell-logo.jpeg" 
          alt="Financell Logo" 
          style={{ width: '32px', height: '32px', objectFit: 'contain' }}
        />
        <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>Financell</span>
      </div>
    ),
    showLogin: true,
    onLogin: () => alert('Login clicked'),
    onSignup: () => alert('Sign up clicked'),
  },
};

export const WithUserMenu: Story = {
  args: {
    logo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img 
          src="/financell-logo.jpeg" 
          alt="Financell Logo" 
          style={{ width: '32px', height: '32px', objectFit: 'contain' }}
        />
        <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>Financell</span>
      </div>
    ),
    showUserMenu: true,
    user: {
      name: 'Ahmet Yılmaz',
      email: 'ahmet@example.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
    },
    onUserMenuClick: (action) => alert(`User action: ${action}`),
  },
};

export const WithNavigation: Story = {
  args: {
    logo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img 
          src="/financell-logo.jpeg" 
          alt="Financell Logo" 
          style={{ width: '32px', height: '32px', objectFit: 'contain' }}
        />
        <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>Financell</span>
      </div>
    ),
    showNavigation: true,
    navigationItems: [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'About', href: '/about' },
      { label: 'Contact', href: '/contact' },
    ],
  },
};

export const CompleteHeader: Story = {
  args: {
    logo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img 
          src="/financell-logo.jpeg" 
          alt="Financell Logo" 
          style={{ width: '32px', height: '32px', objectFit: 'contain' }}
        />
        <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>Financell</span>
      </div>
    ),
    showNavigation: true,
    showSearch: true,
    showNotifications: true,
    showUserMenu: true,
    navigationItems: [
      { label: 'Dashboard', href: '/dashboard' },
      { label: 'Analytics', href: '/analytics' },
      { label: 'Reports', href: '/reports' },
    ],
    user: {
      name: 'Admin User',
      email: 'admin@financell.com',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face',
    },
    onUserMenuClick: (action) => alert(`User action: ${action}`),
  },
};

export const MinimalHeader: Story = {
  args: {
    logo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img 
          src="/financell-logo.jpeg" 
          alt="Financell Logo" 
          style={{ width: '32px', height: '32px', objectFit: 'contain' }}
        />
        <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>Financell</span>
      </div>
    ),
    title: 'Minimal App',
  },
};

export const CorporateHeader: Story = {
  args: {
    logo: (
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
        <img 
          src="/financell-logo.jpeg" 
          alt="Financell Logo" 
          style={{ width: '32px', height: '32px', objectFit: 'contain' }}
        />
        <span style={{ fontSize: '1.25rem', fontWeight: 'bold', color: 'white' }}>Financell</span>
      </div>
    ),
    showNavigation: true,
    showUserMenu: true,
    navigationItems: [
      { label: 'Solutions', href: '/solutions' },
      { label: 'Enterprise', href: '/enterprise' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Support', href: '/support' },
    ],
    user: {
      name: 'Corporate User',
      email: 'corporate@financell.com',
    },
    onUserMenuClick: (action) => alert(`Corporate action: ${action}`),
  },
};
